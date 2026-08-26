"use client";

import { useMemo, useState } from "react";
import {
  SURVO_AE_PHASE2_MASH,
  SURVO_AE_PHASE2_OBESITY,
  SURVO_AE_SYNC1,
  SURVO_BODY_COMP,
  SURVO_LIVER_BIOPSY,
  SURVO_LIVER_MRI,
  SURVO_LIVER_NONINVASIVE,
  SURVO_MATURITY,
  SURVO_MECHANISM,
  SURVO_PHASE2_OBESITY,
  SURVO_SYNC1_WEIGHT,
  SURVO_TRIALS,
} from "@/data/survodutide-dosage-guide";

function ModuleShell({ kicker, title, children }) {
  return (
    <div className="mt-5 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-100 bg-slate-50 px-4 py-3">
        <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
          {kicker}
        </p>
        <p className="mt-0.5 text-sm font-semibold text-slate-900">{title}</p>
      </div>
      {children}
    </div>
  );
}

function ChipGroup({ options, value, onChange, label }) {
  return (
    <div className="flex flex-wrap gap-1.5" role="group" aria-label={label}>
      {options.map((opt) => {
        const id = typeof opt === "string" ? opt : opt.id;
        const text = typeof opt === "string" ? opt : opt.label;
        const selected = value === id;
        return (
          <button
            key={id}
            type="button"
            onClick={() => onChange(id)}
            aria-pressed={selected}
            className={`rounded-full px-3 py-1.5 text-[11px] font-semibold transition ${
              selected
                ? "bg-violet-600 text-white"
                : "border border-slate-200 bg-white text-slate-600 hover:bg-violet-50 hover:text-violet-700"
            }`}
          >
            {text}
          </button>
        );
      })}
    </div>
  );
}

export function SurvoEstimandToggle() {
  const [estimand, setEstimand] = useState("regimen");
  const key = estimand === "regimen" ? "regimen" : "efficacy";

  return (
    <ModuleShell
      kicker="Phase 3 weight-loss estimand toggle"
      title="SYNCHRONIZE-1 week 76 — why 13.0% and 16.6% both appear"
    >
      <div className="space-y-3 px-4 py-3">
        <ChipGroup
          label="Estimand"
          options={[
            { id: "regimen", label: "Treatment-regimen" },
            { id: "efficacy", label: "Efficacy / on-treatment" },
          ]}
          value={estimand}
          onChange={setEstimand}
        />
        <p className="text-xs leading-relaxed text-slate-600">
          {estimand === "regimen"
            ? "Effect of assignment, including treatment discontinuation and protocol-defined intercurrent events — the more pragmatic headline."
            : "Estimated effect if participants remained on treatment without specified intercurrent events — pharmacologic potential among people able to continue."}
        </p>
      </div>
      <div className="grid gap-3 border-t border-slate-100 p-4 sm:grid-cols-3">
        {SURVO_SYNC1_WEIGHT.map((arm) => (
          <div
            key={arm.dose}
            className={`rounded-xl border px-4 py-3 ${
              arm.dose === "Placebo"
                ? "border-slate-200 bg-slate-50"
                : "border-violet-200 bg-violet-50/40"
            }`}
          >
            <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
              {arm.dose}
            </p>
            <p className="mt-1 text-2xl font-bold text-violet-900">
              −{arm[key]}%
            </p>
            <p className="text-[11px] text-slate-500">n={arm.n}</p>
          </div>
        ))}
      </div>
      <p className="border-t border-amber-100 bg-amber-50 px-4 py-3 text-[11px] font-semibold text-amber-950">
        AE discontinuation was 23.7% (3.6 mg) and 24.8% (6.0 mg) versus 5.4%
        placebo — do not replace treatment-regimen with efficacy when discussing
        real-world-like effectiveness.
      </p>
    </ModuleShell>
  );
}

export function SurvoEscalationTimeline() {
  const steps = [
    {
      title: "Start low",
      detail: "Do not begin at the Phase 3 target dose.",
    },
    {
      title: "Escalate every ~4 weeks",
      detail: "Approximately weeks 0–24 toward 3.6 or 6.0 mg.",
    },
    {
      title: "Flexible management",
      detail:
        "Delay increase, temporarily interrupt, reduce dose, or attempt re-escalation under protocol rules.",
    },
    {
      title: "Maintenance to week 76",
      detail: "Continue assigned target or protocol-permitted lower dose.",
    },
    {
      title: "Safety follow-up",
      detail: "~3 weeks after treatment for off-treatment events.",
    },
  ];

  return (
    <ModuleShell
      kicker="Phase 3 dose-escalation timeline"
      title="SYNCHRONIZE schedule — clinical-trial protocol, not approved dosing"
    >
      <p className="border-b border-amber-100 bg-amber-50 px-4 py-2.5 text-[11px] font-semibold text-amber-950">
        Clinical-trial protocol — not approved dosing. Intermediate week-by-week
        ladders are not presented as official schedules.
      </p>
      <ol className="relative ml-6 my-4 space-y-0 border-l-2 border-violet-200">
        {steps.map((step) => (
          <li key={step.title} className="relative pb-4 pl-6 last:pb-2">
            <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-violet-500 bg-white" />
            <p className="text-xs font-bold text-slate-900">{step.title}</p>
            <p className="mt-0.5 text-[11px] leading-relaxed text-slate-600">
              {step.detail}
            </p>
          </li>
        ))}
      </ol>
      <p className="border-t border-slate-100 px-4 py-3 text-[11px] text-slate-500">
        Slower Phase 3 escalation did not eliminate tolerability problems — AE
        discontinuation remained ~24–25% in active arms.
      </p>
    </ModuleShell>
  );
}

export function SurvoDoseResponseExplorer() {
  const [showSensitivity, setShowSensitivity] = useState(false);
  const max = 20;
  const W = 560;
  const H = 220;
  const PAD = { t: 16, r: 12, b: 40, l: 36 };
  const INNER_W = W - PAD.l - PAD.r;
  const INNER_H = H - PAD.t - PAD.b;
  const barW = Math.min(40, (INNER_W / SURVO_PHASE2_OBESITY.length) * 0.5);

  function y(pct) {
    return PAD.t + INNER_H - (pct / max) * INNER_H;
  }

  return (
    <ModuleShell
      kicker="Phase 2 dose-response explorer"
      title="Week-46 planned-treatment weight change (obesity)"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3">
        <label className="inline-flex items-center gap-2 text-[11px] font-semibold text-slate-600">
          <input
            type="checkbox"
            checked={showSensitivity}
            onChange={(e) => setShowSensitivity(e.target.checked)}
            className="rounded border-slate-300"
          />
          Overlay 4.8 mg actual-treatment sensitivity (18.7%)
        </label>
        <p className="text-[11px] text-slate-500">
          Primary analysis is planned-treatment — not individual predictions
        </p>
      </div>
      <div className="px-2 pb-2 sm:px-4">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="h-auto w-full"
          role="img"
          aria-label="Phase 2 survodutide weight loss by dose"
        >
          {[0, 5, 10, 15, 20].map((tick) => (
            <g key={tick}>
              <line
                x1={PAD.l}
                y1={y(tick)}
                x2={W - PAD.r}
                y2={y(tick)}
                stroke="#e2e8f0"
                strokeWidth="1"
              />
              <text
                x={PAD.l - 6}
                y={y(tick)}
                textAnchor="end"
                dominantBaseline="middle"
                fontSize="10"
                className="fill-slate-400"
              >
                −{tick}%
              </text>
            </g>
          ))}
          {SURVO_PHASE2_OBESITY.map((row, i) => {
            const groupW = INNER_W / SURVO_PHASE2_OBESITY.length;
            const cx = PAD.l + groupW * i + groupW / 2;
            const h = (row.weight / max) * INNER_H;
            const isPbo = row.dose === "Placebo";
            return (
              <g key={row.dose}>
                <rect
                  x={cx - barW / 2}
                  y={y(row.weight)}
                  width={barW}
                  height={h}
                  rx="3"
                  className={isPbo ? "fill-slate-300" : "fill-violet-600"}
                />
                {showSensitivity && row.sensitivity ? (
                  <rect
                    x={cx - barW / 2}
                    y={y(row.sensitivity)}
                    width={barW}
                    height={(row.sensitivity / max) * INNER_H}
                    rx="3"
                    className="fill-violet-300 opacity-60"
                  />
                ) : null}
                <text
                  x={cx}
                  y={y(row.weight) - 6}
                  textAnchor="middle"
                  fontSize="10"
                  className="fill-slate-700 font-semibold"
                >
                  −{row.weight}%
                </text>
                <text
                  x={cx}
                  y={H - 12}
                  textAnchor="middle"
                  fontSize="10"
                  className="fill-slate-500"
                >
                  {row.dose.replace(" mg", "")}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
      <div className="overflow-x-auto border-t border-slate-100">
        <table className="w-full min-w-[640px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2 font-semibold">Dose</th>
              <th className="px-3 py-2 font-semibold">Weight Δ</th>
              <th className="px-3 py-2 font-semibold">≥5% / ≥10% / ≥15%</th>
              <th className="px-3 py-2 font-semibold">GI / Nausea</th>
            </tr>
          </thead>
          <tbody>
            {SURVO_PHASE2_OBESITY.map((row) => (
              <tr key={row.dose} className="border-t border-slate-50">
                <td className="px-3 py-2 font-medium text-slate-800">
                  {row.dose}
                </td>
                <td className="px-3 py-2 font-semibold text-violet-800">
                  −{row.weight}%
                  {row.sensitivity ? (
                    <span className="ml-1 font-normal text-slate-400">
                      (sens. −{row.sensitivity}%)
                    </span>
                  ) : null}
                </td>
                <td className="px-3 py-2 text-slate-600">
                  {row.ge5}% / {row.ge10}% / {row.ge15}%
                </td>
                <td className="px-3 py-2 text-slate-600">
                  {row.gi}% / {row.nausea}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ModuleShell>
  );
}

export function SurvoResponderChart() {
  const thresholds = [
    { key: "ge5", label: "≥5%" },
    { key: "ge10", label: "≥10%" },
    { key: "ge15", label: "≥15%" },
    { key: "ge20", label: "≥20%" },
  ];
  const arms = SURVO_SYNC1_WEIGHT;
  const W = 560;
  const H = 210;
  const PAD = { t: 16, r: 12, b: 36, l: 36 };
  const INNER_W = W - PAD.l - PAD.r;
  const INNER_H = H - PAD.t - PAD.b;
  const colors = ["#7c3aed", "#a78bfa", "#cbd5e1"];

  return (
    <ModuleShell
      kicker="Weight-loss responder chart"
      title="SYNCHRONIZE-1 treatment-regimen responders at week 76"
    >
      <div className="px-2 pb-2 sm:px-4 pt-3">
        <ul className="mb-2 flex flex-wrap gap-3 text-[11px] font-semibold text-slate-600">
          {arms.map((arm, i) => (
            <li key={arm.dose} className="inline-flex items-center gap-1.5">
              <span
                className="h-2.5 w-2.5 rounded-sm"
                style={{ background: colors[i] }}
              />
              {arm.dose}
            </li>
          ))}
        </ul>
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="h-auto w-full"
          role="img"
          aria-label="Responder rates by dose"
        >
          {thresholds.map((th, ti) => {
            const groupW = INNER_W / thresholds.length;
            const gx = PAD.l + groupW * ti;
            const barW = groupW / (arms.length + 1);
            return (
              <g key={th.key}>
                {arms.map((arm, ai) => {
                  const pct = arm[th.key];
                  const h = (pct / 100) * INNER_H;
                  const x = gx + barW * (ai + 0.35);
                  const y = PAD.t + INNER_H - h;
                  return (
                    <rect
                      key={arm.dose}
                      x={x}
                      y={y}
                      width={barW * 0.85}
                      height={h}
                      rx="2"
                      fill={colors[ai]}
                    />
                  );
                })}
                <text
                  x={gx + groupW / 2}
                  y={H - 10}
                  textAnchor="middle"
                  fontSize="10"
                  className="fill-slate-500"
                >
                  {th.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </ModuleShell>
  );
}

export function SurvoAdverseEventTable() {
  const [source, setSource] = useState("sync1");
  const [full, setFull] = useState(false);

  let headers;
  let rows;
  if (source === "sync1") {
    headers = SURVO_AE_SYNC1.headers;
    rows = full ? SURVO_AE_SYNC1.fullRows : SURVO_AE_SYNC1.simpleRows;
  } else if (source === "p2ob") {
    headers = SURVO_AE_PHASE2_OBESITY.headers;
    rows = SURVO_AE_PHASE2_OBESITY.rows;
  } else {
    headers = SURVO_AE_PHASE2_MASH.headers;
    rows = SURVO_AE_PHASE2_MASH.rows;
  }

  return (
    <ModuleShell
      kicker="Side-effect comparison"
      title="Preserve 3.6 mg and 6.0 mg arms separately"
    >
      <div className="space-y-2 border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Dataset"
          options={[
            { id: "sync1", label: "SYNCHRONIZE-1 Phase 3" },
            { id: "p2ob", label: "Phase 2 obesity" },
            { id: "p2mash", label: "Phase 2 MASH" },
          ]}
          value={source}
          onChange={setSource}
        />
        {source === "sync1" ? (
          <ChipGroup
            label="Detail"
            options={[
              { id: "simple", label: "Simple view" },
              { id: "full", label: "Full clinical-trial arms" },
            ]}
            value={full ? "full" : "simple"}
            onChange={(id) => setFull(id === "full")}
          />
        ) : null}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              {headers.map((h) => (
                <th key={h} className="px-3 py-2.5 font-semibold">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row[0]} className="border-t border-slate-50">
                {row.map((cell, i) => (
                  <td
                    key={`${row[0]}-${i}`}
                    className={`px-3 py-2 ${
                      i === 0 ? "font-medium text-slate-700" : "text-slate-600"
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ModuleShell>
  );
}

export function SurvoLiverDashboard() {
  const [tab, setTab] = useState("mri");

  return (
    <ModuleShell
      kicker="Liver evidence dashboard"
      title="MRI fat ≠ elastography ≠ biopsy histology"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Endpoint type"
          options={[
            { id: "mri", label: "MRI liver fat" },
            { id: "noninv", label: "Noninvasive markers" },
            { id: "biopsy", label: "Biopsy histology" },
          ]}
          value={tab}
          onChange={setTab}
        />
      </div>
      {tab === "mri" ? (
        <ul className="divide-y divide-slate-100">
          {SURVO_LIVER_MRI.map((row) => (
            <li
              key={`${row.label}-${row.estimand}`}
              className="flex flex-wrap items-center justify-between gap-2 px-4 py-3"
            >
              <div>
                <p className="text-xs font-bold text-slate-900">{row.label}</p>
                <p className="text-[10px] font-semibold uppercase tracking-wide text-violet-600">
                  {row.estimand} · MRI
                </p>
              </div>
              <p className="text-sm font-bold text-violet-900">
                {row.isMean ? "−" : ""}
                {row.active}
                {row.isMean ? "%" : "%"} vs {row.isMean ? "−" : ""}
                {row.placebo}
                {row.isMean ? "%" : "%"} pbo
              </p>
            </li>
          ))}
        </ul>
      ) : null}
      {tab === "noninv" ? (
        <ul className="divide-y divide-slate-100">
          {SURVO_LIVER_NONINVASIVE.map((row) => (
            <li key={row.label} className="px-4 py-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-xs font-bold text-slate-900">{row.label}</p>
                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600">
                  {row.badge}
                </span>
              </div>
              <p className="mt-1 text-xs text-slate-600">
                Survodutide {row.active} · Placebo {row.placebo}
              </p>
            </li>
          ))}
        </ul>
      ) : null}
      {tab === "biopsy" ? (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[480px] border-collapse text-left text-xs">
            <thead>
              <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
                <th className="px-3 py-2 font-semibold">Dose</th>
                <th className="px-3 py-2 font-semibold">
                  MASH improve, no fibrosis worsening
                </th>
                <th className="px-3 py-2 font-semibold">≥1-stage fibrosis ↑</th>
                <th className="px-3 py-2 font-semibold">≥30% MRI-PDFF</th>
              </tr>
            </thead>
            <tbody>
              {SURVO_LIVER_BIOPSY.map((row) => (
                <tr key={row.dose} className="border-t border-slate-50">
                  <td className="px-3 py-2 font-medium text-slate-800">
                    {row.dose}
                  </td>
                  <td className="px-3 py-2 font-semibold text-violet-800">
                    {row.mashImprove}%
                  </td>
                  <td className="px-3 py-2 text-slate-600">{row.fibrosis}%</td>
                  <td className="px-3 py-2 text-slate-600">{row.pdff30}%</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="border-t border-amber-100 bg-amber-50 px-4 py-3 text-[11px] font-semibold text-amber-950">
            Dose-response for the primary MASH endpoint was nonlinear — 4.8 mg
            highest (62%), not 6.0 mg. The “83% improved” headline is an
            actual-treatment paired-biopsy analysis.
          </p>
        </div>
      ) : null}
    </ModuleShell>
  );
}

export function SurvoBodyCompModule() {
  return (
    <ModuleShell
      kicker="Body-composition MRI module"
      title="SYNCHRONIZE-1 MRI substudy at 6.0 mg target"
    >
      <ul className="divide-y divide-slate-100">
        {SURVO_BODY_COMP.map((row) => (
          <li
            key={row.label}
            className="flex flex-wrap items-center justify-between gap-2 px-4 py-3"
          >
            <p className="text-xs font-bold text-slate-900">{row.label}</p>
            <p
              className={`text-sm font-bold ${
                row.caution ? "text-amber-800" : "text-violet-900"
              }`}
            >
              −{row.active}%
              {row.placebo != null ? (
                <span className="ml-2 text-xs font-semibold text-slate-500">
                  vs −{row.placebo}% pbo
                </span>
              ) : null}
            </p>
          </li>
        ))}
      </ul>
      <p className="border-t border-amber-100 bg-amber-50 px-4 py-3 text-[11px] font-semibold text-amber-950">
        Lean-body volume is not a direct measure of muscle strength or function.
        Most measured tissue-volume loss was fat, but “muscle preserved” is too
        strong.
      </p>
    </ModuleShell>
  );
}

export function SurvoMechanismVisual() {
  const [id, setId] = useState("glp1");
  const node = SURVO_MECHANISM.find((m) => m.id === id) || SURVO_MECHANISM[0];

  return (
    <ModuleShell
      kicker="Mechanism visualization"
      title="Two pathways converging on weight, liver fat, and metabolic markers"
    >
      <div className="grid gap-4 p-4 lg:grid-cols-2">
        <div className="space-y-3">
          <div className="rounded-xl border border-violet-200 bg-violet-50/50 p-4">
            <p className="text-[10px] font-bold uppercase tracking-wide text-violet-700">
              GLP-1 receptor
            </p>
            <p className="mt-1 text-xs text-slate-700">
              Brain → lower intake · Pancreas → glucose-dependent insulin · GI →
              early gastric emptying
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
              Glucagon receptor
            </p>
            <p className="mt-1 text-xs text-slate-700">
              Liver → fatty-acid oxidation / liver-fat clearance · Energy
              expenditure labeled as proposed
            </p>
          </div>
          <p className="rounded-lg border border-violet-100 bg-white px-3 py-2 text-[11px] font-semibold text-violet-800">
            Receptor-balance badge: ~1:8 GCGR:GLP-1R activation in vitro
          </p>
        </div>
        <div>
          <ChipGroup
            label="Pathway"
            options={SURVO_MECHANISM.map((m) => ({
              id: m.id,
              label: m.id === "glp1" ? "GLP-1" : m.id === "gcgr" ? "GCGR" : "Balance",
            }))}
            value={id}
            onChange={setId}
          />
          <dl className="mt-3 divide-y divide-slate-100 rounded-xl border border-slate-200">
            <div className="px-3 py-2.5">
              <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                Target
              </dt>
              <dd className="mt-0.5 text-xs font-bold text-slate-900">
                {node.pathway}
              </dd>
            </div>
            <div className="px-3 py-2.5">
              <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                Tissue / pathway
              </dt>
              <dd className="mt-0.5 text-xs text-slate-700">{node.tissues}</dd>
            </div>
            <div className="px-3 py-2.5">
              <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                Expected effect
              </dt>
              <dd className="mt-0.5 text-xs text-slate-700">{node.effect}</dd>
            </div>
            <div className="px-3 py-2.5">
              <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                Evidence level
              </dt>
              <dd className="mt-0.5 text-xs font-semibold text-amber-800">
                {node.evidence}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </ModuleShell>
  );
}

export function SurvoTrialExplorer() {
  const [area, setArea] = useState("All");
  const [status, setStatus] = useState("All");

  const filtered = useMemo(
    () =>
      SURVO_TRIALS.filter((t) => {
        const aOk = area === "All" || t.area === area;
        const sOk = status === "All" || t.status === status;
        return aOk && sOk;
      }),
    [area, status]
  );

  return (
    <ModuleShell
      kicker="Clinical-trial explorer"
      title="Obesity, MASLD, MASH, T2D, and cardiovascular programs"
    >
      <div className="space-y-2 border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Area"
          options={["All", "Obesity", "MASLD", "MASH", "T2D", "Cardiovascular"]}
          value={area}
          onChange={setArea}
        />
        <ChipGroup
          label="Status"
          options={["All", "Published", "Results pending", "Ongoing"]}
          value={status}
          onChange={setStatus}
        />
      </div>
      <ul className="divide-y divide-slate-100">
        {filtered.map((trial) => (
          <li key={trial.id} className="px-4 py-4">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <p className="text-sm font-bold text-slate-900">{trial.name}</p>
                <p className="text-[11px] text-slate-500">
                  {trial.nct} · {trial.phase} · {trial.duration}
                  {trial.biopsy ? " · Biopsy" : ""}
                </p>
              </div>
              <span
                className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                  trial.status === "Published"
                    ? "bg-emerald-100 text-emerald-800"
                    : trial.status === "Ongoing"
                      ? "bg-amber-100 text-amber-900"
                      : "bg-slate-100 text-slate-700"
                }`}
              >
                {trial.status}
              </span>
            </div>
            <p className="mt-2 text-xs text-slate-600">{trial.population}</p>
            <p className="mt-1 text-xs text-slate-600">
              <strong>Dose:</strong> {trial.dose}
              {trial.n ? ` · n=${trial.n}` : ""}
            </p>
            <p className="mt-1 text-xs font-semibold text-violet-800">
              {trial.result}
            </p>
            <a
              href={trial.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-[11px] font-semibold text-violet-600 hover:underline"
            >
              View source →
            </a>
          </li>
        ))}
      </ul>
    </ModuleShell>
  );
}

export function SurvoMaturityTracker() {
  const toneClass = {
    done: "border-emerald-200 bg-emerald-50 text-emerald-900",
    partial: "border-violet-200 bg-violet-50 text-violet-900",
    pending: "border-amber-200 bg-amber-50 text-amber-950",
    none: "border-slate-200 bg-slate-50 text-slate-700",
  };

  return (
    <ModuleShell
      kicker="Evidence-maturity tracker"
      title="What is established vs still pending"
    >
      <ul className="divide-y divide-slate-100">
        {SURVO_MATURITY.map((item) => (
          <li
            key={item.label}
            className="flex flex-wrap items-center justify-between gap-2 px-4 py-3"
          >
            <p className="text-xs font-bold text-slate-900">{item.label}</p>
            <span
              className={`rounded-full border px-2.5 py-0.5 text-[10px] font-bold ${
                toneClass[item.tone]
              }`}
            >
              {item.status}
            </span>
          </li>
        ))}
      </ul>
    </ModuleShell>
  );
}
