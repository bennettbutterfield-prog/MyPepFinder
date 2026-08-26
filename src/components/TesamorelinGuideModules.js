"use client";

import { useMemo, useState } from "react";
import {
  TESAMORELIN_AE_FULL,
  TESAMORELIN_AE_SIMPLE,
  TESAMORELIN_FAT_COMPARTMENTS,
  TESAMORELIN_FORMULATIONS,
  TESAMORELIN_MONITORING,
  TESAMORELIN_TRIALS,
  TESAMORELIN_USES_MATRIX,
  TESAMORELIN_VAT_TIMELINE,
} from "@/data/tesamorelin-dosage-guide";

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

function DataTable({ table, caption }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
      {caption ? (
        <p className="border-b border-slate-100 bg-slate-50 px-3 py-2 text-xs font-bold uppercase tracking-wide text-slate-500">
          {caption}
        </p>
      ) : null}
      <table className="w-full min-w-[360px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-slate-100 bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
            {table.headers.map((h) => (
              <th key={h} className="px-3 py-2.5 font-semibold">
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
                    i === 0 ? "font-medium text-slate-600" : "text-slate-700"
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

export function TesamorelinFormulationSelector() {
  const [id, setId] = useState("egrifta-wr");
  const form = TESAMORELIN_FORMULATIONS.find((f) => f.id === id);

  return (
    <ModuleShell
      kicker="Egrifta formulation selector"
      title="Egrifta WR vs Egrifta SV — not substitutable"
    >
      <div className="space-y-3 px-4 py-3">
        <ChipGroup
          label="Formulation"
          options={TESAMORELIN_FORMULATIONS}
          value={id}
          onChange={setId}
        />
        <p className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs font-semibold text-amber-900">
          {form.warning}
        </p>
      </div>
      <dl className="grid gap-0 divide-y divide-slate-100 border-t border-slate-100 sm:grid-cols-2">
        {[
          ["Daily dose", form.dose],
          ["Injection volume", form.injectionVolume],
          ["Frequency", form.frequency],
          ["Route", form.route],
          ["Vial strength", form.vialStrength],
          ["Diluent", form.diluent],
          ["Reconstitution", form.reconstitution],
          ["Concentration", form.concentration],
          ["Mixing frequency", form.mixingFrequency],
          ["Vial use", form.vialUse],
          ["After mixing", form.storage],
        ].map(([label, value]) => (
          <div key={label} className="px-4 py-3">
            <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
              {label}
            </dt>
            <dd className="mt-0.5 text-xs font-semibold text-slate-800">{value}</dd>
          </div>
        ))}
      </dl>
    </ModuleShell>
  );
}

export function TesamorelinReconstitutionGuide() {
  const [id, setId] = useState("egrifta-wr");
  const form = TESAMORELIN_FORMULATIONS.find((f) => f.id === id);

  return (
    <ModuleShell
      kicker="Reconstitution and administration"
      title="Formulation-specific mixing — do not cross-use instructions"
    >
      <div className="px-4 py-3">
        <ChipGroup
          label="Formulation"
          options={TESAMORELIN_FORMULATIONS}
          value={id}
          onChange={setId}
        />
      </div>
      <ol className="space-y-2 border-t border-slate-100 px-4 py-4">
        {form.reconstitutionSteps.map((step, i) => (
          <li key={step} className="flex gap-3 text-xs text-slate-700">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-100 text-[10px] font-bold text-violet-700">
              {i + 1}
            </span>
            <span className="leading-relaxed">{step}</span>
          </li>
        ))}
      </ol>
      <p className="border-t border-slate-100 px-4 py-3 text-[11px] leading-relaxed text-slate-500">
        Rotate abdominal injection sites. Avoid the navel, scar tissue, and
        bruised skin. Inspect solution before each injection — clear and
        colorless without visible particles.
      </p>
    </ModuleShell>
  );
}

export function TesamorelinVatChart() {
  const [showWithdrawal, setShowWithdrawal] = useState(true);
  const w = 560;
  const h = 260;
  const pad = { t: 28, r: 24, b: 48, l: 48 };
  const innerW = w - pad.l - pad.r;
  const innerH = h - pad.t - pad.b;

  const points = TESAMORELIN_VAT_TIMELINE.filter(
    (p) => !p.branch || showWithdrawal
  );
  const maxWeek = 78;
  const minIndex = 75;

  function x(week) {
    return pad.l + (week / maxWeek) * innerW;
  }
  function y(index) {
    return pad.t + ((100 - index) / (100 - minIndex)) * innerH;
  }

  const linePath = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${x(p.week)} ${y(p.vatIndex)}`)
    .join(" ");

  return (
    <ModuleShell
      kicker="Phase 3 visceral adipose tissue"
      title="Average VAT change in HIV lipodystrophy — not body weight"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 px-4 pt-3">
        <p className="text-[11px] text-slate-500">
          Indexed to baseline = 100. Pooled phase 3 program (historical 2 mg
          formulation).
        </p>
        <button
          type="button"
          onClick={() => setShowWithdrawal((v) => !v)}
          aria-pressed={showWithdrawal}
          className={`rounded-full px-3 py-1 text-[10px] font-semibold ${
            showWithdrawal
              ? "bg-violet-600 text-white"
              : "border border-slate-200 text-slate-600"
          }`}
        >
          {showWithdrawal ? "Hide" : "Show"} withdrawal branch
        </button>
      </div>
      <div className="px-3 pb-4 sm:px-4">
        <svg
          viewBox={`0 0 ${w} ${h}`}
          className="h-auto w-full"
          role="img"
          aria-label="Tesamorelin visceral adipose tissue change over time"
        >
          {[100, 90, 80].map((v) => (
            <g key={v}>
              <line
                x1={pad.l}
                x2={w - pad.r}
                y1={y(v)}
                y2={y(v)}
                stroke="#e2e8f0"
                strokeDasharray="4 4"
              />
              <text
                x={pad.l - 8}
                y={y(v)}
                textAnchor="end"
                dominantBaseline="middle"
                fontSize="10"
                fill="#94a3b8"
              >
                {v}
              </text>
            </g>
          ))}
          <path
            d={linePath}
            fill="none"
            stroke="#7c3aed"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          {points.map((p) => (
            <g key={p.week}>
              <circle
                cx={x(p.week)}
                cy={y(p.vatIndex)}
                r={p.branch ? 5 : 6}
                fill={p.branch ? "#f59e0b" : "#7c3aed"}
              />
              <text
                x={x(p.week)}
                y={y(p.vatIndex) - 12}
                textAnchor="middle"
                fontSize="10"
                fontWeight="700"
                fill={p.branch ? "#b45309" : "#6d28d9"}
              >
                {p.vatIndex}
              </text>
              <text
                x={x(p.week)}
                y={h - 20}
                textAnchor="middle"
                fontSize="10"
                fontWeight="600"
                fill="#64748b"
              >
                {p.label}
              </text>
            </g>
          ))}
        </svg>
      </div>
      <p className="border-t border-slate-100 px-4 py-3 text-xs leading-relaxed text-slate-600">
        Approximately <strong>15% VAT reduction at 26 weeks</strong> and{" "}
        <strong>18% at 52 weeks</strong> with continued treatment. After
        switching to placebo, visceral fat regained toward baseline — treatment
        effect is not permanent after discontinuation.
      </p>
    </ModuleShell>
  );
}

export function TesamorelinFatCompartments() {
  const [active, setActive] = useState("vat");
  const item =
    TESAMORELIN_FAT_COMPARTMENTS.find((c) => c.id === active) ||
    TESAMORELIN_FAT_COMPARTMENTS[0];

  return (
    <ModuleShell
      kicker="Body-composition visualization"
      title="Selective visceral-fat reduction — weight generally neutral"
    >
      <div className="px-4 py-3">
        <ChipGroup
          label="Fat compartment"
          options={TESAMORELIN_FAT_COMPARTMENTS.map((c) => ({
            id: c.id,
            label: c.label.split(" ")[0],
          }))}
          value={active}
          onChange={setActive}
        />
      </div>
      <div className="grid gap-4 border-t border-slate-100 px-4 py-4 sm:grid-cols-[140px_1fr]">
        <svg
          viewBox="0 0 120 160"
          className="mx-auto h-40 w-28"
          role="img"
          aria-label="Abdominal fat compartment cross-section"
        >
          <ellipse cx="60" cy="80" rx="52" ry="68" fill="#f8fafc" stroke="#e2e8f0" />
          <ellipse
            cx="60"
            cy="88"
            rx={active === "vat" ? 28 : 36}
            ry={active === "vat" ? 22 : 28}
            fill={active === "vat" ? "#ede9fe" : "#f1f5f9"}
            stroke={active === "vat" ? "#7c3aed" : "#cbd5e1"}
            strokeWidth="2"
          />
          <ellipse
            cx="60"
            cy="72"
            rx={active === "sat" ? 44 : 40}
            ry={active === "sat" ? 18 : 16}
            fill={active === "sat" ? "#ede9fe" : "#f8fafc"}
            stroke={active === "sat" ? "#7c3aed" : "#e2e8f0"}
            strokeWidth="1.5"
          />
          <text x="60" y="14" textAnchor="middle" fontSize="8" fill="#64748b">
            skin
          </text>
          <text x="60" y="68" textAnchor="middle" fontSize="7" fill="#64748b">
            subcutaneous
          </text>
          <text x="60" y="92" textAnchor="middle" fontSize="7" fill="#64748b">
            visceral
          </text>
        </svg>
        <div>
          <p className="text-sm font-bold text-slate-900">{item.label}</p>
          <p
            className="mt-1 text-lg font-bold"
            style={{ color: item.color === "#cbd5e1" ? "#64748b" : item.color }}
          >
            {item.effect}
          </p>
          <p className="mt-2 text-xs leading-relaxed text-slate-600">
            {item.description}
          </p>
        </div>
      </div>
      <ul className="grid gap-2 border-t border-slate-100 p-4 sm:grid-cols-2">
        {TESAMORELIN_FAT_COMPARTMENTS.map((c) => (
          <li
            key={c.id}
            className={`rounded-lg border px-3 py-2 text-xs ${
              c.id === active
                ? "border-violet-200 bg-violet-50"
                : "border-slate-100 bg-slate-50"
            }`}
          >
            <span className="font-semibold text-slate-800">{c.label}:</span>{" "}
            <span className="text-slate-600">{c.effect}</span>
          </li>
        ))}
      </ul>
    </ModuleShell>
  );
}

export function TesamorelinAdverseEventTable() {
  const [full, setFull] = useState(false);

  return (
    <div className="mt-5">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-base font-bold text-slate-900">
          Pooled Phase 3 Adverse Reactions
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
        <ul className="space-y-2">
          {TESAMORELIN_AE_SIMPLE.map((item) => (
            <li
              key={item.title}
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm"
            >
              <p className="text-xs font-bold text-slate-800">{item.title}</p>
              <p className="mt-1 text-xs leading-relaxed text-slate-600">
                {item.takeaway}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <DataTable
          table={TESAMORELIN_AE_FULL}
          caption="Week 26 · tesamorelin n=543 vs placebo n=263"
        />
      )}

      <div className="sr-only">
        <DataTable table={TESAMORELIN_AE_FULL} />
      </div>
    </div>
  );
}

export function TesamorelinMonitoringPanel() {
  const [expanded, setExpanded] = useState(null);

  return (
    <ModuleShell
      kicker="IGF-1 and glucose monitoring"
      title="Clinician-facing tracking parameters — not a diagnostic calculator"
    >
      <ul className="divide-y divide-slate-100">
        {TESAMORELIN_MONITORING.map((m) => {
          const open = expanded === m.parameter;
          return (
            <li key={m.parameter}>
              <button
                type="button"
                onClick={() => setExpanded(open ? null : m.parameter)}
                className="flex w-full items-start justify-between gap-3 px-4 py-3 text-left hover:bg-slate-50"
                aria-expanded={open}
              >
                <div>
                  <p className="text-xs font-bold text-slate-800">
                    {m.parameter}
                  </p>
                  <p className="mt-0.5 text-[11px] text-slate-500">{m.why}</p>
                </div>
                <span className="text-slate-400">{open ? "−" : "+"}</span>
              </button>
              {open ? (
                <p className="border-t border-slate-50 bg-violet-50/50 px-4 py-2 text-[11px] leading-relaxed text-violet-900">
                  {m.flag}
                </p>
              ) : null}
            </li>
          );
        })}
      </ul>
      <p className="border-t border-slate-100 px-4 py-3 text-[11px] text-amber-800">
        Flag persistent IGF-1 above 3 standard deviation scores for clinical
        review. Reconsider treatment when no clear VAT reduction is observed.
      </p>
    </ModuleShell>
  );
}

export function TesamorelinUsesMatrix() {
  return (
    <ModuleShell
      kicker="Approved vs investigational uses"
      title="Only HIV-associated excess abdominal fat is FDA approved"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left text-xs">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Use</th>
              <th className="px-3 py-2.5 font-semibold">Evidence</th>
              <th className="px-3 py-2.5 font-semibold">Population</th>
              <th className="px-3 py-2.5 font-semibold">Primary result</th>
              <th className="px-3 py-2.5 font-semibold">FDA</th>
            </tr>
          </thead>
          <tbody>
            {TESAMORELIN_USES_MATRIX.map((row) => (
              <tr
                key={row.use}
                className={`border-b border-slate-50 last:border-0 ${
                  row.fda === "Approved" ? "bg-violet-50/40" : ""
                }`}
              >
                <td className="px-3 py-2.5 font-medium text-slate-700">
                  {row.use}
                </td>
                <td className="px-3 py-2.5 text-slate-600">{row.evidence}</td>
                <td className="px-3 py-2.5 text-slate-600">{row.population}</td>
                <td className="px-3 py-2.5 text-slate-600">{row.result}</td>
                <td className="px-3 py-2.5">
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                      row.fda === "Approved"
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {row.fda}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ModuleShell>
  );
}

export function TesamorelinMechanismVisual() {
  const steps = [
    "Daily abdominal injection",
    "GHRH receptor on pituitary somatotrophs",
    "Endogenous GH pulses (not direct GH)",
    "Hepatic IGF-1 production ↑",
    "Selective visceral-fat mobilization",
  ];
  return (
    <ModuleShell
      kicker="Mechanism"
      title="From GHRH signal to selective VAT reduction"
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
        Plasma half-life is approximately 26–38 minutes, but downstream GH and
        IGF-1 effects persist longer. Once-daily dosing matches the approved
        label — not multiple daily doses.
      </p>
    </ModuleShell>
  );
}

export function TesamorelinTrialExplorer() {
  const [topic, setTopic] = useState("All");
  const [population, setPopulation] = useState("All");
  const [phase, setPhase] = useState("All");

  const topics = ["All", ...new Set(TESAMORELIN_TRIALS.map((t) => t.topic))];
  const populations = [
    "All",
    ...new Set(TESAMORELIN_TRIALS.map((t) => t.population)),
  ];
  const phases = ["All", ...new Set(TESAMORELIN_TRIALS.map((t) => t.phase))];

  const filtered = useMemo(
    () =>
      TESAMORELIN_TRIALS.filter(
        (t) =>
          (topic === "All" || t.topic === topic) &&
          (population === "All" || t.population === population) &&
          (phase === "All" || t.phase === phase)
      ),
    [topic, population, phase]
  );

  return (
    <ModuleShell kicker="Study explorer" title="Published tesamorelin evidence">
      <div className="space-y-3 border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Topic"
          options={topics.map((v) => ({ id: v, label: v }))}
          value={topic}
          onChange={setTopic}
        />
        <ChipGroup
          label="Population"
          options={populations.map((v) => ({ id: v, label: v }))}
          value={population}
          onChange={setPopulation}
        />
        <ChipGroup
          label="Phase"
          options={phases.map((v) => ({ id: v, label: v }))}
          value={phase}
          onChange={setPhase}
        />
      </div>
      <ul className="divide-y divide-slate-100">
        {filtered.map((trial) => (
          <li key={trial.id} className="px-4 py-4">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <p className="text-sm font-bold text-slate-900">{trial.name}</p>
                <p className="text-[11px] text-slate-500">
                  {trial.authors} · {trial.journal}
                </p>
              </div>
              <div className="flex flex-wrap gap-1">
                <span className="rounded-full bg-violet-100 px-2 py-0.5 text-[10px] font-semibold text-violet-700">
                  {trial.topic}
                </span>
                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600">
                  {trial.duration}
                </span>
              </div>
            </div>
            <p className="mt-2 text-xs font-semibold text-violet-800">
              {trial.result}
            </p>
            <p className="mt-1 text-[11px] text-slate-500">{trial.limitation}</p>
            {trial.href && !trial.href.includes("pending") ? (
              <a
                href={trial.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-[11px] font-semibold text-violet-600 hover:underline"
              >
                View study →
              </a>
            ) : null}
          </li>
        ))}
      </ul>
      {filtered.length === 0 ? (
        <p className="px-4 py-6 text-center text-xs text-slate-500">
          No trials match the selected filters.
        </p>
      ) : null}
    </ModuleShell>
  );
}
