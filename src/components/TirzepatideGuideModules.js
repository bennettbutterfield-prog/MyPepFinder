"use client";

import { useMemo, useState } from "react";
import {
  TIRZEPATIDE_AE_MOUNJARO,
  TIRZEPATIDE_AE_SIMPLE,
  TIRZEPATIDE_AE_ZEPBOUND,
  TIRZEPATIDE_ESCALATION_STEPS,
  TIRZEPATIDE_INDICATIONS,
  TIRZEPATIDE_OSA,
  TIRZEPATIDE_TRIALS,
  TIRZEPATIDE_WEIGHT_LOSS,
} from "@/data/tirzepatide-dosage-guide";

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
    <div
      className="flex flex-wrap gap-1.5"
      role="group"
      aria-label={label}
    >
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

export function TirzepatideEscalationTimeline() {
  const [indicationId, setIndicationId] = useState("weight");
  const [active, setActive] = useState(0);
  const indication = TIRZEPATIDE_INDICATIONS.find((i) => i.id === indicationId);
  const maxIndex = TIRZEPATIDE_ESCALATION_STEPS.findIndex(
    (s) => s.dose === indication.max
  );
  const cappedIndex = Math.min(active, maxIndex === -1 ? active : maxIndex);
  const visibleStep = TIRZEPATIDE_ESCALATION_STEPS[cappedIndex];
  const progress =
    (cappedIndex / (TIRZEPATIDE_ESCALATION_STEPS.length - 1)) * 100;

  function roleFor(dose) {
    if (dose === "2.5 mg") return "Initiation";
    if (indication.maintenance.includes(dose)) return "Maintenance";
    const idx = TIRZEPATIDE_ESCALATION_STEPS.findIndex((s) => s.dose === dose);
    if (idx > maxIndex && maxIndex !== -1) return "Not used";
    return "Escalation";
  }

  return (
    <ModuleShell
      kicker="Indication-aware escalation"
      title="2.5 → 5 → 7.5 → 10 → 12.5 → 15 mg"
    >
      <div className="px-4 py-3">
        <ChipGroup
          label="Indication"
          options={TIRZEPATIDE_INDICATIONS}
          value={indicationId}
          onChange={(id) => {
            setIndicationId(id);
            const next = TIRZEPATIDE_INDICATIONS.find((i) => i.id === id);
            const cap = TIRZEPATIDE_ESCALATION_STEPS.findIndex(
              (s) => s.dose === next.max
            );
            setActive((prev) => Math.min(prev, cap === -1 ? prev : cap));
          }}
        />
      </div>
      <div className="px-3 pb-5 sm:px-6">
        <div className="relative">
          <div
            className="absolute left-[8%] right-[8%] top-4 h-0.5 bg-slate-200 sm:top-[1.125rem]"
            aria-hidden
          >
            <div
              className="h-0.5 bg-violet-400 transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
          <ol className="relative z-10 flex items-start justify-between">
            {TIRZEPATIDE_ESCALATION_STEPS.map((s, i) => {
              const selected = i === cappedIndex;
              const complete = i < cappedIndex;
              const unused = i > maxIndex && maxIndex !== -1;
              return (
                <li
                  key={s.dose}
                  className="flex w-12 flex-col items-center sm:w-16"
                >
                  <button
                    type="button"
                    onClick={() => setActive(Math.min(i, maxIndex))}
                    disabled={unused}
                    aria-pressed={selected}
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-[10px] font-bold ring-4 ring-white transition sm:h-9 sm:w-9 sm:text-[11px] ${
                      unused
                        ? "cursor-not-allowed bg-slate-100 text-slate-300"
                        : selected
                          ? "bg-violet-600 text-white"
                          : complete
                            ? "bg-violet-200 text-violet-800"
                            : "bg-slate-100 text-slate-500 hover:bg-violet-50 hover:text-violet-700"
                    }`}
                  >
                    {s.dose.replace(" mg", "")}
                  </button>
                  <span
                    className={`mt-2 text-center text-[9px] font-semibold sm:text-[10px] ${
                      unused
                        ? "text-slate-300"
                        : selected
                          ? "text-violet-700"
                          : "text-slate-500"
                    }`}
                  >
                    {s.dose}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
      <div className="border-t border-slate-100 bg-violet-50/60 px-4 py-4 sm:px-5">
        <p className="text-sm font-bold text-violet-800">
          {visibleStep.dose} · {roleFor(visibleStep.dose)}
        </p>
        <dl className="mt-2 grid gap-2 sm:grid-cols-3">
          <div>
            <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
              Period
            </dt>
            <dd className="mt-0.5 text-xs font-semibold text-slate-800">
              {visibleStep.period}
            </dd>
          </div>
          <div>
            <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
              Label role
            </dt>
            <dd className="mt-0.5 text-xs font-semibold text-slate-800">
              {roleFor(visibleStep.dose)}
            </dd>
          </div>
          <div>
            <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
              Indication max
            </dt>
            <dd className="mt-0.5 text-xs font-semibold text-slate-800">
              {indication.max}
            </dd>
          </div>
        </dl>
        <p className="mt-3 text-xs leading-relaxed text-slate-600">
          {indication.note}
        </p>
      </div>
    </ModuleShell>
  );
}

export function TirzepatideWeightLossChart() {
  const [estimand, setEstimand] = useState("treatmentRegimen");
  const rows =
    estimand === "efficacy"
      ? TIRZEPATIDE_WEIGHT_LOSS.efficacy
      : TIRZEPATIDE_WEIGHT_LOSS.treatmentRegimen;
  const w = 560;
  const h = 230;
  const pad = { t: 24, r: 16, b: 40, l: 44 };
  const innerW = w - pad.l - pad.r;
  const innerH = h - pad.t - pad.b;
  const max = 24;
  const barW = innerW / rows.length;

  return (
    <ModuleShell
      kicker="SURMOUNT-1 at 72 weeks"
      title="Mean body-weight change by dose"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3">
        <ChipGroup
          label="Estimand"
          options={[
            { id: "treatmentRegimen", label: "Treatment-regimen estimand" },
            { id: "efficacy", label: "Efficacy estimand" },
          ]}
          value={estimand}
          onChange={setEstimand}
        />
      </div>
      <div className="px-3 pb-4 sm:px-4">
        <svg
          viewBox={`0 0 ${w} ${h}`}
          className="h-auto w-full"
          role="img"
          aria-label="SURMOUNT-1 mean weight change by tirzepatide dose at 72 weeks"
        >
          {[0, 8, 16, 24].map((tick) => (
            <g key={tick}>
              <line
                x1={pad.l}
                y1={pad.t + innerH - (tick / max) * innerH}
                x2={w - pad.r}
                y2={pad.t + innerH - (tick / max) * innerH}
                stroke="#e2e8f0"
              />
              <text
                x={pad.l - 8}
                y={pad.t + innerH - (tick / max) * innerH}
                textAnchor="end"
                dominantBaseline="middle"
                fontSize="10"
                className="fill-slate-400"
              >
                −{tick}%
              </text>
            </g>
          ))}
          {rows.map((row, i) => {
            const cx = pad.l + barW * i + barW / 2;
            const bh = (row.pct / max) * innerH;
            const x = cx - 22;
            const y = pad.t + innerH - bh;
            return (
              <g key={row.dose}>
                <rect
                  x={x}
                  y={y}
                  width="44"
                  height={bh}
                  rx="4"
                  fill={row.dose === "Placebo" ? "#cbd5e1" : "#7c3aed"}
                />
                <text
                  x={cx}
                  y={y - 8}
                  textAnchor="middle"
                  fontSize="11"
                  fontWeight="700"
                  fill={row.dose === "Placebo" ? "#64748b" : "#6d28d9"}
                >
                  −{row.pct.toFixed(1)}%
                </text>
                <text
                  x={cx}
                  y={h - 14}
                  textAnchor="middle"
                  fontSize="11"
                  fontWeight="600"
                  className="fill-slate-600"
                >
                  {row.dose}
                </text>
              </g>
            );
          })}
        </svg>
        <p className="mt-1 text-[11px] text-slate-500">
          {estimand === "efficacy"
            ? "Efficacy estimand estimates effect if treatment were continued. Do not blend with treatment-regimen figures."
            : "Treatment-regimen estimand better reflects outcomes including treatment discontinuation."}
        </p>
      </div>
    </ModuleShell>
  );
}

function DataTable({ table, caption }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
      {caption ? (
        <p className="border-b border-slate-100 bg-slate-50 px-3 py-2 text-xs font-bold uppercase tracking-wide text-slate-500">
          {caption}
        </p>
      ) : null}
      <table className="w-full min-w-[520px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-slate-100 bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500 sm:text-xs">
            {table.headers.map((h, i) => (
              <th
                key={h}
                className={`px-3 py-3 font-semibold ${
                  i === 0 ? "text-left" : "text-right"
                }`}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row) => (
            <tr key={row[0]} className="border-b border-slate-50 last:border-0">
              {row.map((cell, i) => (
                <td
                  key={`${row[0]}-${i}`}
                  className={`px-3 py-2.5 text-xs ${
                    i === 0
                      ? "font-medium text-slate-600"
                      : "text-right tabular-nums text-slate-700"
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
  );
}

export function TirzepatideAdverseEventTable() {
  const [full, setFull] = useState(false);

  return (
    <div className="mt-5">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-base font-bold text-slate-900">
          Common adverse reactions
        </h3>
        <div
          className="inline-flex rounded-lg border border-slate-200 bg-white p-0.5 shadow-sm"
          role="group"
          aria-label="Adverse-event table view"
        >
          <button
            type="button"
            onClick={() => setFull(false)}
            aria-pressed={!full}
            className={`rounded-md px-3 py-1.5 text-[11px] font-semibold transition ${
              !full
                ? "bg-violet-600 text-white"
                : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            Simple view
          </button>
          <button
            type="button"
            onClick={() => setFull(true)}
            aria-pressed={full}
            className={`rounded-md px-3 py-1.5 text-[11px] font-semibold transition ${
              full
                ? "bg-violet-600 text-white"
                : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            Full clinical data
          </button>
        </div>
      </div>

      {!full ? (
        <ul className="grid gap-3 sm:grid-cols-3">
          {TIRZEPATIDE_AE_SIMPLE.map((g) => (
            <li
              key={g.title}
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <p className="text-sm font-bold text-violet-800">{g.title}</p>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                {g.takeaway}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <div className="space-y-5">
          <DataTable
            table={TIRZEPATIDE_AE_ZEPBOUND}
            caption="Weight-management trials (Zepbound)"
          />
          <p className="text-xs leading-relaxed text-slate-600">
            Overall GI adverse reactions occurred in 56% of every Zepbound dose
            group versus 30% with placebo. GI-related discontinuation occurred
            in 1.9%, 3.3%, and 4.3% at 5, 10, and 15 mg versus 0.5% with
            placebo. Severe GI adverse reactions occurred in 1.7%, 2.5%, and
            3.1% versus 1.0% with placebo.
          </p>
          <DataTable
            table={TIRZEPATIDE_AE_MOUNJARO}
            caption="Type 2 diabetes trials (Mounjaro)"
          />
          <p className="text-xs leading-relaxed text-slate-600">
            Diabetes-trial rates differ because the population, trials,
            background drugs, and reporting threshold differ. They should not
            be collapsed with the obesity table.
          </p>
        </div>
      )}

      <div className="sr-only">
        <DataTable
          table={TIRZEPATIDE_AE_ZEPBOUND}
          caption="Weight-management trials (Zepbound)"
        />
        <DataTable
          table={TIRZEPATIDE_AE_MOUNJARO}
          caption="Type 2 diabetes trials (Mounjaro)"
        />
      </div>
    </div>
  );
}

export function TirzepatideVsSemaglutide() {
  const [tab, setTab] = useState("obesity");

  return (
    <ModuleShell
      kicker="Direct comparison"
      title="Tirzepatide vs. semaglutide"
    >
      <div className="px-4 py-3">
        <ChipGroup
          label="Trial"
          options={[
            { id: "obesity", label: "SURMOUNT-5 (obesity)" },
            { id: "diabetes", label: "SURPASS-2 (type 2 diabetes)" },
          ]}
          value={tab}
          onChange={setTab}
        />
      </div>
      <div className="px-4 pb-4">
        {tab === "obesity" ? (
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl bg-violet-50 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-violet-600">
                Tirzepatide 10 or 15 mg
              </p>
              <p className="mt-1 text-2xl font-bold text-violet-900">−20.2%</p>
              <p className="text-xs text-violet-800">
                mean body-weight change · −22.8 kg · 72 weeks
              </p>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                Semaglutide 1.7 or 2.4 mg
              </p>
              <p className="mt-1 text-2xl font-bold text-slate-800">−13.7%</p>
              <p className="text-xs text-slate-600">
                mean body-weight change · −15.0 kg · 72 weeks
              </p>
            </div>
            <p className="sm:col-span-2 text-xs leading-relaxed text-slate-600">
              Obesity without diabetes. Maximum tolerated labeled doses.
              Open-label Phase 3b trial; does not predict an individual
              response.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full min-w-[420px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                  <th className="px-3 py-2 text-left font-semibold">Treatment</th>
                  <th className="px-3 py-2 text-right font-semibold">HbA1c</th>
                  <th className="px-3 py-2 text-right font-semibold">Weight</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Tirzepatide 5 mg", "−2.01 pp", "−7.6 kg"],
                  ["Tirzepatide 10 mg", "−2.24 pp", "−9.3 kg"],
                  ["Tirzepatide 15 mg", "−2.30 pp", "−11.2 kg"],
                  ["Semaglutide 1 mg", "−1.86 pp", "−5.7 kg"],
                ].map((row) => (
                  <tr key={row[0]} className="border-b border-slate-50 last:border-0">
                    <td className="px-3 py-2 text-xs font-medium text-slate-700">
                      {row[0]}
                    </td>
                    <td className="px-3 py-2 text-right text-xs tabular-nums">
                      {row[1]}
                    </td>
                    <td className="px-3 py-2 text-right text-xs tabular-nums">
                      {row[2]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="px-3 py-2 text-[11px] text-slate-500">
              Type 2 diabetes on metformin, 40 weeks. This is not a comparison
              with the 2.4 mg obesity dose of semaglutide.
            </p>
          </div>
        )}
      </div>
    </ModuleShell>
  );
}

export function TirzepatideOsaChart() {
  const w = 560;
  const h = 210;
  const pad = { t: 28, r: 16, b: 48, l: 52 };
  const innerW = w - pad.l - pad.r;
  const innerH = h - pad.t - pad.b;
  const max = 32;
  const groupW = innerW / TIRZEPATIDE_OSA.length;
  const barW = 28;

  return (
    <ModuleShell
      kicker="SURMOUNT-OSA · 52 weeks"
      title="Change in apnea–hypopnea index"
    >
      <div className="flex flex-wrap gap-3 px-4 pt-3 text-[11px] font-semibold text-slate-600">
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-sm bg-violet-600" />
          Tirzepatide 10 or 15 mg
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-sm bg-slate-300" />
          Placebo
        </span>
      </div>
      <div className="px-3 pb-4 sm:px-4">
        <svg
          viewBox={`0 0 ${w} ${h}`}
          className="h-auto w-full"
          role="img"
          aria-label="SURMOUNT-OSA change in AHI for tirzepatide versus placebo"
        >
          {TIRZEPATIDE_OSA.map((row, i) => {
            const cx = pad.l + groupW * i + groupW / 2;
            const tH = (row.tirzepatide / max) * innerH;
            const pH = (row.placebo / max) * innerH;
            return (
              <g key={row.trial}>
                <rect
                  x={cx - barW - 4}
                  y={pad.t + innerH - tH}
                  width={barW}
                  height={tH}
                  rx="3"
                  fill="#7c3aed"
                />
                <rect
                  x={cx + 4}
                  y={pad.t + innerH - pH}
                  width={barW}
                  height={pH}
                  rx="3"
                  fill="#cbd5e1"
                />
                <text
                  x={cx - barW / 2 - 4}
                  y={pad.t + innerH - tH - 6}
                  textAnchor="middle"
                  fontSize="10"
                  fontWeight="700"
                  fill="#6d28d9"
                >
                  −{row.tirzepatide}
                </text>
                <text
                  x={cx + barW / 2 + 4}
                  y={pad.t + innerH - pH - 6}
                  textAnchor="middle"
                  fontSize="10"
                  fontWeight="700"
                  fill="#64748b"
                >
                  −{row.placebo}
                </text>
                <text
                  x={cx}
                  y={h - 16}
                  textAnchor="middle"
                  fontSize="11"
                  fontWeight="600"
                  className="fill-slate-600"
                >
                  {row.trial}
                </text>
              </g>
            );
          })}
        </svg>
        <p className="text-[11px] text-slate-500">
          Events per hour. Maximum tolerated 10 or 15 mg versus placebo.
        </p>
      </div>
    </ModuleShell>
  );
}

export function TirzepatideMechanismVisual() {
  const steps = [
    "Weekly injection",
    "Albumin binding · 5–6 day half-life",
    "GIP + GLP-1 receptors",
    "Insulin ↑ · glucagon ↓ · slower emptying · less appetite",
    "Glycemic control and weight reduction",
  ];
  return (
    <ModuleShell
      kicker="Mechanism"
      title="From weekly injection to metabolic effect"
    >
      <ol className="grid gap-2 p-4 sm:grid-cols-5">
        {steps.map((step, i) => (
          <li
            key={step}
            className="rounded-xl border border-violet-100 bg-violet-50 px-3 py-3 text-center"
          >
            <span className="text-[10px] font-bold uppercase tracking-wide text-violet-500">
              {i + 1}
            </span>
            <p className="mt-1 text-[11px] font-semibold leading-snug text-violet-900">
              {step}
            </p>
          </li>
        ))}
      </ol>
      <p className="border-t border-slate-100 px-4 py-3 text-xs leading-relaxed text-slate-600">
        Appetite-brain effects and fat-versus-lean mass changes are supported,
        but every downstream effect cannot be assigned to one receptor
        independently.
      </p>
    </ModuleShell>
  );
}

export function TirzepatideTrialExplorer() {
  const [indication, setIndication] = useState("All");
  const [diabetes, setDiabetes] = useState("All");
  const [comparator, setComparator] = useState("All");

  const indications = ["All", ...new Set(TIRZEPATIDE_TRIALS.map((t) => t.indication))];
  const diabetesOpts = ["All", ...new Set(TIRZEPATIDE_TRIALS.map((t) => t.diabetes))];
  const comparators = ["All", ...new Set(TIRZEPATIDE_TRIALS.map((t) => t.comparator))];

  const filtered = useMemo(
    () =>
      TIRZEPATIDE_TRIALS.filter(
        (t) =>
          (indication === "All" || t.indication === indication) &&
          (diabetes === "All" || t.diabetes === diabetes) &&
          (comparator === "All" || t.comparator === comparator)
      ),
    [indication, diabetes, comparator]
  );

  return (
    <ModuleShell kicker="Trial explorer" title="Published tirzepatide evidence">
      <div className="space-y-3 border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Indication"
          options={indications.map((v) => ({ id: v, label: v }))}
          value={indication}
          onChange={setIndication}
        />
        <ChipGroup
          label="Diabetes status"
          options={diabetesOpts.map((v) => ({ id: v, label: v }))}
          value={diabetes}
          onChange={setDiabetes}
        />
        <ChipGroup
          label="Comparator"
          options={comparators.map((v) => ({ id: v, label: v }))}
          value={comparator}
          onChange={setComparator}
        />
      </div>
      <ul className="grid gap-3 p-4 sm:grid-cols-2">
        {filtered.map((t) => (
          <li
            key={t.id}
            className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            <p className="text-[10px] font-bold uppercase tracking-wide text-violet-600">
              {t.evidence} · {t.duration}
            </p>
            <h3 className="mt-1 text-sm font-bold text-slate-900">{t.name}</h3>
            <p className="mt-1 text-xs text-slate-500">
              {t.authors} · {t.journal}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-slate-600">
              {t.participants}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-slate-700">
              <strong>Result:</strong> {t.result}
            </p>
            <p className="mt-1 text-xs leading-relaxed text-slate-500">
              <strong>Limitation:</strong> {t.limitation}
            </p>
            <a
              href={t.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex text-xs font-semibold text-violet-700 hover:underline"
            >
              Read study →
            </a>
          </li>
        ))}
      </ul>
      {filtered.length === 0 ? (
        <p className="px-4 pb-4 text-sm text-slate-500">
          No trials match these filters.
        </p>
      ) : null}
    </ModuleShell>
  );
}
