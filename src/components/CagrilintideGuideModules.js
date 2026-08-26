"use client";

import { useMemo, useState } from "react";
import {
  CAGRI_AE_MONO,
  CAGRI_AE_REDEFINE1,
  CAGRI_BODY_COMP,
  CAGRI_ESCALATION,
  CAGRI_ESTIMANDS,
  CAGRI_MECHANISM,
  CAGRI_PHASE2_DOSES,
  CAGRI_REDEFINE1_ARMS,
  CAGRI_REDEFINE4,
  CAGRI_TRIALS,
} from "@/data/cagrilintide-dosage-guide";

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

function ViewToggle({ full, setFull, label }) {
  return (
    <div
      className="inline-flex rounded-lg border border-slate-200 bg-white p-0.5 shadow-sm"
      role="group"
      aria-label={label}
    >
      <button
        type="button"
        onClick={() => setFull(false)}
        aria-pressed={!full}
        className={`rounded-md px-3 py-1.5 text-[11px] font-semibold transition ${
          !full ? "bg-violet-600 text-white" : "text-slate-600 hover:bg-slate-50"
        }`}
      >
        Simple view
      </button>
      <button
        type="button"
        onClick={() => setFull(true)}
        aria-pressed={full}
        className={`rounded-md px-3 py-1.5 text-[11px] font-semibold transition ${
          full ? "bg-violet-600 text-white" : "text-slate-600 hover:bg-slate-50"
        }`}
      >
        Full view
      </button>
    </div>
  );
}

export function CagriDoseResponseExplorer() {
  const [estimand, setEstimand] = useState("trialProduct");
  const chartDoses = CAGRI_PHASE2_DOSES.filter(
    (d) => !d.dose.startsWith("Lira")
  );
  const max = 12;
  const W = 560;
  const H = 220;
  const PAD = { t: 16, r: 12, b: 40, l: 36 };
  const INNER_W = W - PAD.l - PAD.r;
  const INNER_H = H - PAD.t - PAD.b;
  const barW = Math.min(36, (INNER_W / chartDoses.length) * 0.55);

  function y(pct) {
    return PAD.t + INNER_H - (pct / max) * INNER_H;
  }

  return (
    <ModuleShell
      kicker="Monotherapy dose-response explorer"
      title="Phase 2 week-26 weight change by dose (n=706)"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3">
        <ChipGroup
          label="Estimand"
          options={[
            { id: "trialProduct", label: "Trial-product" },
            { id: "treatmentPolicy", label: "Treatment-policy" },
          ]}
          value={estimand}
          onChange={setEstimand}
        />
        <p className="text-[11px] text-slate-500">
          Estimated group means — not individual predictions
        </p>
      </div>
      <div className="px-2 pb-2 sm:px-4">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="h-auto w-full"
          role="img"
          aria-label="Phase 2 cagrilintide weight loss by dose"
        >
          {[0, 4, 8, 12].map((tick) => (
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
          {chartDoses.map((row, i) => {
            const groupW = INNER_W / chartDoses.length;
            const cx = PAD.l + groupW * i + groupW / 2;
            const pct = row[estimand];
            const h = (pct / max) * INNER_H;
            const isPbo = row.dose === "Placebo";
            return (
              <g key={row.dose}>
                <rect
                  x={cx - barW / 2}
                  y={y(pct)}
                  width={barW}
                  height={h}
                  rx="3"
                  className={isPbo ? "fill-slate-300" : "fill-violet-600"}
                />
                <text
                  x={cx}
                  y={y(pct) - 6}
                  textAnchor="middle"
                  fontSize="10"
                  className="fill-slate-700 font-semibold"
                >
                  −{pct.toFixed(1)}%
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
              <th className="px-3 py-2 font-semibold">n</th>
              <th className="px-3 py-2 font-semibold">Trial-product</th>
              <th className="px-3 py-2 font-semibold">Treatment-policy</th>
              <th className="px-3 py-2 font-semibold">Nausea</th>
            </tr>
          </thead>
          <tbody>
            {CAGRI_PHASE2_DOSES.map((row) => (
              <tr key={row.dose} className="border-t border-slate-50">
                <td className="px-3 py-2 font-medium text-slate-800">
                  {row.dose}
                </td>
                <td className="px-3 py-2 text-slate-600">{row.n}</td>
                <td className="px-3 py-2 font-semibold text-violet-800">
                  −{row.trialProduct.toFixed(1)}%
                </td>
                <td className="px-3 py-2 text-slate-700">
                  −{row.treatmentPolicy.toFixed(1)}%
                </td>
                <td className="px-3 py-2 text-slate-600">{row.nausea}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ModuleShell>
  );
}

export function CagriEscalationTimeline() {
  const [tab, setTab] = useState("phase2");
  const data = CAGRI_ESCALATION[tab];

  return (
    <ModuleShell
      kicker="Trial-only escalation timeline"
      title="Documented research schedules — not home dosing"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Protocol"
          options={[
            { id: "phase2", label: CAGRI_ESCALATION.phase2.label },
            { id: "cagrisema", label: CAGRI_ESCALATION.cagrisema.label },
          ]}
          value={tab}
          onChange={setTab}
        />
      </div>
      <p className="border-b border-amber-100 bg-amber-50 px-4 py-2.5 text-[11px] font-semibold text-amber-950">
        {data.banner}
      </p>
      <p className="px-4 py-3 text-xs leading-relaxed text-slate-600">
        {data.note}
      </p>
      {tab === "phase2" ? (
        <div className="overflow-x-auto border-t border-slate-100">
          <table className="w-full min-w-[560px] border-collapse text-left text-xs">
            <thead>
              <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
                <th className="px-3 py-2 font-semibold">Study weeks</th>
                {CAGRI_ESCALATION.phase2.targets.map((t) => (
                  <th key={t} className="px-3 py-2 font-semibold">
                    {t} mg target
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {CAGRI_ESCALATION.phase2.steps.map((step) => (
                <tr key={step.period} className="border-t border-slate-50">
                  <td className="px-3 py-2 font-medium text-slate-700">
                    {step.period}
                  </td>
                  {CAGRI_ESCALATION.phase2.targets.map((t) => (
                    <td key={t} className="px-3 py-2 text-slate-600">
                      {step.doses[t]} mg
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <ol className="relative ml-6 my-2 space-y-0 border-l-2 border-violet-200 pb-4">
          {CAGRI_ESCALATION.cagrisema.steps.map((step) => (
            <li key={step.period} className="relative pb-4 pl-6 last:pb-0">
              <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-violet-500 bg-white" />
              <p className="text-[10px] font-bold uppercase tracking-wide text-violet-600">
                {step.period} · {step.stage}
              </p>
              <p className="mt-0.5 text-xs font-bold text-slate-900">
                Cagrilintide {step.cagri} + Semaglutide {step.sema}
              </p>
            </li>
          ))}
        </ol>
      )}
      <p className="border-t border-slate-100 px-4 py-3 text-[11px] text-slate-500">
        Do not convert these schedules into syringe units, vial concentrations, or
        home reconstitution plans.
      </p>
    </ModuleShell>
  );
}

export function CagriResultsToggle() {
  const [full, setFull] = useState(false);

  return (
    <div className="mt-5">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-base font-bold text-slate-900">
          REDEFINE 1 week-68 arms
        </h3>
        <ViewToggle full={full} setFull={setFull} label="Results view" />
      </div>

      {!full ? (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {CAGRI_REDEFINE1_ARMS.map((arm) => (
            <div
              key={arm.id}
              className={`rounded-xl border px-4 py-3 ${
                arm.id === "cagrisema"
                  ? "border-violet-200 bg-violet-50/50"
                  : "border-slate-200 bg-white"
              }`}
            >
              <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
                {arm.label}
              </p>
              <p className="mt-1 text-2xl font-bold text-violet-900">
                −{arm.trialProduct}%
              </p>
              <p className="text-[11px] text-slate-500">
                Trial-product · if taken as intended
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[640px] border-collapse text-left text-xs">
            <thead>
              <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
                <th className="px-3 py-2.5 font-semibold">Arm</th>
                <th className="px-3 py-2.5 font-semibold">n</th>
                <th className="px-3 py-2.5 font-semibold">Treatment-policy</th>
                <th className="px-3 py-2.5 font-semibold">Trial-product</th>
                <th className="px-3 py-2.5 font-semibold">Max dose @ wk 68</th>
                <th className="px-3 py-2.5 font-semibold">≥25% / ≥30%</th>
              </tr>
            </thead>
            <tbody>
              {CAGRI_REDEFINE1_ARMS.map((arm) => (
                <tr key={arm.id} className="border-t border-slate-50">
                  <td className="px-3 py-2.5 font-medium text-slate-800">
                    {arm.label}
                  </td>
                  <td className="px-3 py-2.5 text-slate-600">{arm.n}</td>
                  <td className="px-3 py-2.5 font-semibold text-slate-800">
                    −{arm.treatmentPolicy}%
                  </td>
                  <td className="px-3 py-2.5 font-semibold text-violet-800">
                    −{arm.trialProduct}%
                  </td>
                  <td className="px-3 py-2.5 text-slate-600">
                    {arm.maxDosePct}%
                  </td>
                  <td className="px-3 py-2.5 text-slate-600">
                    {arm.ge25}% / {arm.ge30}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <p className="mt-2 text-[11px] text-slate-500">
        Active-arm comparisons with CagriSema were post hoc in the publication.
      </p>
    </div>
  );
}

export function CagriEstimandExplainer() {
  const [trialId, setTrialId] = useState("redefine1");
  const trial =
    CAGRI_ESTIMANDS.find((t) => t.id === trialId) || CAGRI_ESTIMANDS[0];

  return (
    <ModuleShell
      kicker="Estimand explainer"
      title="Why 20.4% and 22.7% are both valid — and different"
    >
      <div className="space-y-3 px-4 py-3">
        <ChipGroup
          label="Trial"
          options={CAGRI_ESTIMANDS.map((t) => ({
            id: t.id,
            label: t.trial,
          }))}
          value={trialId}
          onChange={setTrialId}
        />
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
            <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
              Treatment-policy
            </p>
            <p className="mt-1 text-xs leading-relaxed text-slate-700">
              Includes outcomes regardless of discontinuation or adherence —
              often closer to an intention-to-treat question.
            </p>
          </div>
          <div className="rounded-lg border border-violet-200 bg-violet-50/50 p-3">
            <p className="text-[10px] font-bold uppercase tracking-wide text-violet-700">
              Trial-product / efficacy
            </p>
            <p className="mt-1 text-xs leading-relaxed text-slate-700">
              Idealized modeled effect assuming assigned treatment continued
              without rescue — not a simple observed average of everyone who
              started.
            </p>
          </div>
        </div>
      </div>
      <p className="border-t border-slate-100 px-4 py-2 text-[11px] text-slate-500">
        {trial.population}
        {trial.id === "redefine4"
          ? " · REDEFINE 4 uses treatment-regimen vs efficacy labels"
          : null}
      </p>
      <div className="overflow-x-auto border-t border-slate-100">
        <table className="w-full min-w-[420px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2 font-semibold">Arm</th>
              <th className="px-3 py-2 font-semibold">
                {trial.id === "redefine4" ? "Treatment-regimen" : "Treatment-policy"}
              </th>
              <th className="px-3 py-2 font-semibold">
                {trial.id === "redefine4" ? "Efficacy" : "Trial-product"}
              </th>
            </tr>
          </thead>
          <tbody>
            {trial.rows.map((row) => (
              <tr key={row.arm} className="border-t border-slate-50">
                <td className="px-3 py-2 font-medium text-slate-800">
                  {row.arm}
                </td>
                <td className="px-3 py-2 text-slate-700">−{row.policy}%</td>
                <td className="px-3 py-2 font-semibold text-violet-800">
                  −{row.product}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ModuleShell>
  );
}

export function CagriAdverseEventTable() {
  const [source, setSource] = useState("mono");
  const table = source === "mono" ? CAGRI_AE_MONO : CAGRI_AE_REDEFINE1;

  return (
    <ModuleShell
      kicker="Side-effect comparison"
      title="Measured rates — not qualitative “very common” labels"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Dataset"
          options={[
            { id: "mono", label: "Cagrilintide dose-finding" },
            { id: "phase3", label: "CagriSema Phase 3 (REDEFINE 1)" },
          ]}
          value={source}
          onChange={setSource}
        />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              {table.headers.map((h) => (
                <th key={h} className="px-3 py-2.5 font-semibold">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row) => (
              <tr key={row[0]} className="border-t border-slate-50">
                {row.map((cell, i) => (
                  <td
                    key={`${row[0]}-${i}`}
                    className={`px-3 py-2 ${
                      i === 0
                        ? "font-medium text-slate-700"
                        : "text-slate-600"
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
      <p className="border-t border-slate-100 px-4 py-3 text-[11px] text-slate-500">
        Rates did not rise smoothly at every dose. Trial eligibility and product
        quality differ from unsupervised use.
      </p>
    </ModuleShell>
  );
}

export function CagriTrialExplorer() {
  const [diabetes, setDiabetes] = useState("All");
  const [status, setStatus] = useState("All");

  const filtered = useMemo(
    () =>
      CAGRI_TRIALS.filter((t) => {
        const dOk =
          diabetes === "All" ||
          (diabetes === "No T2D" && t.diabetes === false) ||
          (diabetes === "T2D" && t.diabetes === true) ||
          (diabetes === "Mixed / other" &&
            t.diabetes !== true &&
            t.diabetes !== false);
        const sOk = status === "All" || t.peerReview === status;
        return dOk && sOk;
      }),
    [diabetes, status]
  );

  return (
    <ModuleShell
      kicker="Trial explorer"
      title="Cagrilintide monotherapy and CagriSema programs"
    >
      <div className="space-y-2 border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Diabetes status"
          options={["All", "No T2D", "T2D", "Mixed / other"]}
          value={diabetes}
          onChange={setDiabetes}
        />
        <ChipGroup
          label="Peer-review status"
          options={["All", "Published", "Company topline", "Ongoing"]}
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
                  {trial.nct} · {trial.duration} · {trial.population}
                </p>
              </div>
              <span
                className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                  trial.peerReview === "Published"
                    ? "bg-emerald-100 text-emerald-800"
                    : trial.peerReview === "Ongoing"
                      ? "bg-amber-100 text-amber-900"
                      : "bg-slate-100 text-slate-700"
                }`}
              >
                {trial.peerReview}
              </span>
            </div>
            <p className="mt-2 text-xs text-slate-600">
              <strong>Arms:</strong> {trial.arms}
            </p>
            <p className="mt-1 text-xs text-slate-600">
              <strong>Endpoint:</strong> {trial.endpoint} · {trial.estimand}
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

export function CagriMechanismVisual() {
  const [id, setId] = useState("amy1");
  const node = CAGRI_MECHANISM.find((m) => m.id === id) || CAGRI_MECHANISM[0];

  return (
    <ModuleShell
      kicker="Mechanism visualization"
      title="Amylin/calcitonin receptors — separate from GLP-1"
    >
      <div className="grid gap-4 p-4 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-3">
          <div className="rounded-xl border border-violet-200 bg-violet-50/50 p-4">
            <p className="text-[10px] font-bold uppercase tracking-wide text-violet-700">
              Cagrilintide
            </p>
            <p className="mt-1 text-xs font-semibold text-slate-800">
              CTR + RAMP1/2/3 → AMY1 / AMY2 / AMY3 · direct CTR agonism
            </p>
            <p className="mt-2 text-[11px] text-slate-600">
              Hindbrain / area postrema and hypothalamic appetite circuits →
              satiety, lower food intake, weight reduction
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
              Semaglutide (separate pathway)
            </p>
            <p className="mt-1 text-xs font-semibold text-slate-800">
              GLP-1 receptor → appetite and metabolic control
            </p>
            <p className="mt-2 text-[11px] text-slate-600">
              Why CagriSema can reduce weight more than either component alone
            </p>
          </div>
        </div>
        <div>
          <ChipGroup
            label="Target"
            options={CAGRI_MECHANISM.map((m) => ({
              id: m.id,
              label: m.id.toUpperCase(),
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
                {node.label}
              </dd>
            </div>
            <div className="px-3 py-2.5">
              <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                Evidence-supported effect
              </dt>
              <dd className="mt-0.5 text-xs text-slate-700">{node.effect}</dd>
            </div>
            <div className="px-3 py-2.5">
              <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                Evidence boundary
              </dt>
              <dd className="mt-0.5 text-xs font-semibold text-amber-800">
                {node.boundary}
              </dd>
            </div>
          </dl>
          <p className="mt-2 text-[11px] text-slate-500">
            AMY1/AMY3 causal findings from animal knockouts are preclinical.
          </p>
        </div>
      </div>
    </ModuleShell>
  );
}

export function CagriRedefine4Panel() {
  return (
    <ModuleShell
      kicker="Direct-comparison panel"
      title="REDEFINE 4: CagriSema vs tirzepatide"
    >
      <div className="grid gap-4 p-4 sm:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
          <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Participants
          </p>
          <p className="mt-1 text-xl font-bold text-slate-900">
            {CAGRI_REDEFINE4.n}
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 sm:col-span-2">
          <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Design
          </p>
          <p className="mt-1 text-xs font-semibold text-slate-800">
            {CAGRI_REDEFINE4.design} · {CAGRI_REDEFINE4.duration}
          </p>
        </div>
      </div>
      <div className="overflow-x-auto border-t border-slate-100">
        <table className="w-full min-w-[420px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Week-84 analysis</th>
              <th className="px-3 py-2.5 font-semibold">CagriSema 2.4/2.4</th>
              <th className="px-3 py-2.5 font-semibold">Tirzepatide 15 mg</th>
            </tr>
          </thead>
          <tbody>
            {CAGRI_REDEFINE4.rows.map((row) => (
              <tr key={row.estimand} className="border-t border-slate-50">
                <td className="px-3 py-2.5 font-medium text-slate-700">
                  {row.estimand}
                </td>
                <td className="px-3 py-2.5 font-semibold text-violet-800">
                  −{row.cagrisema}%
                </td>
                <td className="px-3 py-2.5 font-semibold text-slate-800">
                  −{row.tirz}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="border-t border-amber-100 bg-amber-50 px-4 py-3 text-[11px] font-semibold text-amber-950">
        {CAGRI_REDEFINE4.interpretation} Status: {CAGRI_REDEFINE4.status}.
      </p>
    </ModuleShell>
  );
}

export function CagriBodyCompCard() {
  const bc = CAGRI_BODY_COMP;
  return (
    <ModuleShell
      kicker="Body-composition evidence card"
      title="REDEFINE 1 DXA substudy — CagriSema only"
    >
      <div className="grid gap-4 p-4 sm:grid-cols-2">
        <div>
          <div className="mb-2 flex h-3 overflow-hidden rounded-full bg-slate-100">
            <div
              className="bg-violet-600"
              style={{ width: `${bc.fatShare}%` }}
            />
            <div
              className="bg-slate-300"
              style={{ width: `${bc.leanShare}%` }}
            />
          </div>
          <ul className="space-y-1 text-xs text-slate-700">
            <li>
              <strong className="text-violet-800">{bc.fatShare}% fat</strong> · −
              {bc.fatKg} kg fat mass
            </li>
            <li>
              <strong className="text-slate-600">{bc.leanShare}% lean soft tissue</strong>{" "}
              · −{bc.leanKg} kg
            </li>
          </ul>
        </div>
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-3">
          <p className="text-[11px] font-semibold leading-relaxed text-amber-950">
            n={bc.n} ({bc.pctOfTrial}% of the trial). {bc.product}. Lean soft
            tissue ≠ skeletal muscle quality or function. Does not establish that
            cagrilintide alone preferentially preserves muscle.
          </p>
        </div>
      </div>
    </ModuleShell>
  );
}
