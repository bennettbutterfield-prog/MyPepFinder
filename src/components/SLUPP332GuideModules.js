"use client";

import { useMemo, useState } from "react";
import {
  SLUPP_CLAIMS,
  SLUPP_ENDURANCE,
  SLUPP_EVIDENCE_NAV,
  SLUPP_MECHANISM,
  SLUPP_METABOLIC,
  SLUPP_PROTOCOLS,
  SLUPP_SAFETY_MATRIX,
  SLUPP_TIMELINE,
  SLUPP_VS_915,
} from "@/data/slu-pp-332-dosage-guide";

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

export function SluppEvidenceNavigator() {
  const filters = [
    "All",
    "Cells",
    "Healthy mice",
    "Obesity mice",
    "Heart-failure mice",
    "Aging-kidney mice",
    "Human data",
  ];
  const [filter, setFilter] = useState("All");
  const rows = useMemo(
    () =>
      SLUPP_EVIDENCE_NAV.filter(
        (r) => filter === "All" || r.filter === filter
      ),
    [filter]
  );

  return (
    <ModuleShell
      kicker="Evidence-level navigator"
      title="Keep cell, mouse, and human evidence from blending"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Model filter"
          options={filters.map((f) => ({ id: f, label: f }))}
          value={filter}
          onChange={setFilter}
        />
      </div>
      {filter === "Human data" ? (
        <p className="border-b border-amber-100 bg-amber-50 px-4 py-2.5 text-[11px] font-semibold text-amber-950">
          No interventional human evidence identified.
        </p>
      ) : null}
      <ul className="divide-y divide-slate-100">
        {rows.map((row) => (
          <li key={row.id} className="px-4 py-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-violet-100 px-2 py-0.5 text-[10px] font-bold text-violet-800">
                {row.filter}
              </span>
              <p className="text-xs font-bold text-slate-900">{row.model}</p>
            </div>
            <p className="mt-1 text-[11px] text-slate-500">
              {row.sex} · {row.n} · {row.exposure}
            </p>
            <p className="mt-2 text-xs text-slate-600">
              <strong>Endpoint:</strong> {row.endpoint}
            </p>
            <p className="mt-1 text-xs font-semibold text-violet-800">
              {row.result}
            </p>
            {row.nullFinding ? (
              <p className="mt-1 text-[11px] font-semibold text-slate-600">
                Null / caveat: {row.nullFinding}
              </p>
            ) : null}
            <p className="mt-1 text-[11px] font-semibold text-amber-800">
              {row.warning}
            </p>
            <a
              href={row.href}
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

export function SluppProtocolTimeline() {
  return (
    <ModuleShell
      kicker="Preclinical protocol timeline"
      title="Separate experiments — not a human titration plan"
    >
      <p className="border-b border-amber-100 bg-amber-50 px-4 py-2.5 text-[11px] font-semibold text-amber-950">
        Animal research only — do not convert to a human dose.
      </p>
      <ol className="relative ml-6 my-4 space-y-0 border-l-2 border-violet-200">
        {SLUPP_PROTOCOLS.map((p) => (
          <li key={p.id} className="relative pb-4 pl-6 last:pb-2">
            <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-violet-500 bg-white" />
            <p className="text-[10px] font-bold uppercase tracking-wide text-violet-600">
              {p.title}
            </p>
            <p className="mt-0.5 text-xs font-bold text-slate-900">{p.lane}</p>
            <p className="mt-1 text-[11px] leading-relaxed text-slate-600">
              {p.detail}
            </p>
          </li>
        ))}
      </ol>
    </ModuleShell>
  );
}

export function SluppEnduranceChart() {
  const e = SLUPP_ENDURANCE;
  const max = 180;
  const bars = [
    { label: "Running time", vehicle: 100, treated: e.timePct },
    { label: "Distance", vehicle: 100, treated: e.distancePct },
  ];

  return (
    <ModuleShell
      kicker="Mouse endurance results chart"
      title="Acute 50 mg/kg IP — strongest quantitative outcome"
    >
      <div className="space-y-4 px-4 py-4">
        {bars.map((bar) => (
          <div key={bar.label}>
            <p className="mb-1.5 text-[11px] font-bold text-slate-700">
              {bar.label}
            </p>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="w-16 shrink-0 text-[10px] text-slate-500">
                  Vehicle
                </span>
                <div className="h-3 flex-1 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-slate-300"
                    style={{ width: `${(bar.vehicle / max) * 100}%` }}
                  />
                </div>
                <span className="w-10 text-right text-[10px] font-semibold text-slate-600">
                  100%
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-16 shrink-0 text-[10px] text-violet-700">
                  SLU-PP-332
                </span>
                <div className="h-3 flex-1 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-violet-600"
                    style={{ width: `${(bar.treated / max) * 100}%` }}
                  />
                </div>
                <span className="w-10 text-right text-[10px] font-semibold text-violet-800">
                  {bar.treated}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <dl className="grid gap-0 divide-y divide-slate-100 border-t border-slate-100 sm:grid-cols-2">
        {[
          ["Dose / timing", e.dose],
          ["Sample", `${e.n} · ${e.sex}`],
        ].map(([k, v]) => (
          <div key={k} className="px-4 py-3">
            <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
              {k}
            </dt>
            <dd className="mt-0.5 text-xs font-semibold text-slate-800">{v}</dd>
          </div>
        ))}
      </dl>
      <p className="border-t border-amber-100 bg-amber-50 px-4 py-3 text-[11px] font-semibold text-amber-950">
        Mechanistic annotation: {e.knockout}
      </p>
      <div className="overflow-x-auto border-t border-slate-100">
        <table className="w-full min-w-[420px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2 font-semibold">Endpoint</th>
              <th className="px-3 py-2 font-semibold">Vehicle</th>
              <th className="px-3 py-2 font-semibold">SLU-PP-332</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-slate-50">
              <td className="px-3 py-2 font-medium text-slate-700">
                Running time (normalized)
              </td>
              <td className="px-3 py-2 text-slate-600">100%</td>
              <td className="px-3 py-2 font-semibold text-violet-800">~170%</td>
            </tr>
            <tr className="border-t border-slate-50">
              <td className="px-3 py-2 font-medium text-slate-700">
                Distance (normalized)
              </td>
              <td className="px-3 py-2 text-slate-600">100%</td>
              <td className="px-3 py-2 font-semibold text-violet-800">~145%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </ModuleShell>
  );
}

export function SluppMetabolicExplorer() {
  const [id, setId] = useState("dio");
  const model = SLUPP_METABOLIC.find((m) => m.id === id) || SLUPP_METABOLIC[0];

  return (
    <ModuleShell
      kicker="Metabolic results explorer"
      title="Keep chow-fed, DIO, and ob/ob results separate"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Model"
          options={SLUPP_METABOLIC.map((m) => ({
            id: m.id,
            label: m.id === "dio" ? "DIO" : m.id === "chow" ? "Chow-fed" : "ob/ob",
          }))}
          value={id}
          onChange={setId}
        />
      </div>
      <dl className="grid gap-0 divide-y divide-slate-100 sm:grid-cols-2">
        {[
          ["Model", model.model],
          ["Duration / dose", `${model.duration} · ${model.dose}`],
          ["Body weight", model.weight],
          ["Fat mass", model.fat],
          ["Lean mass", model.lean],
          ["Food intake", model.intake],
          ["Locomotor activity", model.activity],
          ["RER / FAO", model.rer],
          ["Energy expenditure", model.ee],
          ["Glucose", model.glucose],
          ["Liver", model.liver],
        ].map(([k, v]) => (
          <div key={k} className="px-4 py-3">
            <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
              {k}
            </dt>
            <dd
              className={`mt-0.5 text-xs font-semibold ${
                String(v).includes("NOT") || String(v).includes("Unchanged")
                  ? "text-amber-800"
                  : "text-slate-800"
              }`}
            >
              {v}
            </dd>
          </div>
        ))}
      </dl>
    </ModuleShell>
  );
}

export function SluppResultsToggle() {
  const [full, setFull] = useState(false);

  return (
    <div className="mt-5">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-base font-bold text-slate-900">
          Simple view / full preclinical arms
        </h3>
        <div
          className="inline-flex rounded-lg border border-slate-200 bg-white p-0.5 shadow-sm"
          role="group"
          aria-label="Results view"
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
            Full view
          </button>
        </div>
      </div>
      {!full ? (
        <ul className="space-y-2 rounded-xl border border-slate-200 bg-white px-4 py-4 text-xs leading-relaxed text-slate-700 shadow-sm">
          <li>Endurance increased in mice (~70% time / ~45% distance acutely).</li>
          <li>Fat accumulation fell in obese mice; intake and activity unchanged in DIO.</li>
          <li>Glucose improved in impaired obesity models — not in healthy chow-fed mice.</li>
          <li className="font-semibold text-amber-900">
            Human efficacy and safety are unknown.
          </li>
        </ul>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[640px] border-collapse text-left text-xs">
            <thead>
              <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
                <th className="px-3 py-2.5 font-semibold">Domain</th>
                <th className="px-3 py-2.5 font-semibold">Measured result</th>
                <th className="px-3 py-2.5 font-semibold">Unknown in humans</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Aerobic endurance",
                  "~70% longer / ~45% farther (acute mouse)",
                  "VO2 max, race performance, training adaptation",
                ],
                [
                  "Obesity",
                  "~12% weight loss highlighted in DIO × 28 days",
                  "Human weight loss, durability, rebound",
                ],
                [
                  "Glucose",
                  "Improved in DIO; not in healthy chow-fed",
                  "Diabetes efficacy, A1c, hypoglycemia",
                ],
                [
                  "Heart failure",
                  "↑ EF, ↓ fibrosis, ↑ survival in TAC mice",
                  "Symptoms, hospitalization, mortality",
                ],
                [
                  "Aging kidney",
                  "Improved albuminuria / mitochondrial markers",
                  "eGFR, CKD progression, human safety",
                ],
                [
                  "ob/ob timing",
                  "Methods 12 days; figure legend 15 days",
                  "Discrepancy preserved — not silently resolved",
                ],
              ].map((row) => (
                <tr key={row[0]} className="border-t border-slate-50">
                  <td className="px-3 py-2.5 font-medium text-slate-800">
                    {row[0]}
                  </td>
                  <td className="px-3 py-2.5 text-slate-700">{row[1]}</td>
                  <td className="px-3 py-2.5 text-amber-800">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export function SluppMechanismVisual() {
  const [id, setId] = useState("muscle");
  const node = SLUPP_MECHANISM.find((m) => m.id === id) || SLUPP_MECHANISM[0];

  return (
    <ModuleShell
      kicker="ERR mechanism visualization"
      title="SLU-PP-332 → ERRs → tissue-specific programs → mouse outcomes"
    >
      <div className="px-4 py-3">
        <p className="mb-3 text-xs font-semibold text-slate-700">
          SLU-PP-332 → ERRα / ERRβ / ERRγ → gene transcription → mitochondrial /
          OXPHOS and fatty-acid programs
        </p>
        <ChipGroup
          label="Tissue"
          options={SLUPP_MECHANISM.map((m) => ({
            id: m.id,
            label: m.tissue.split(" ")[0],
          }))}
          value={id}
          onChange={setId}
        />
      </div>
      <dl className="divide-y divide-slate-100 border-t border-slate-100">
        <div className="px-4 py-3">
          <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
            Tissue / dependency
          </dt>
          <dd className="mt-0.5 text-xs font-bold text-slate-900">
            {node.tissue} · {node.dependency}
          </dd>
        </div>
        <div className="px-4 py-3">
          <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
            Pathway
          </dt>
          <dd className="mt-0.5 text-xs font-semibold text-violet-800">
            {node.path}
          </dd>
        </div>
        <div className="px-4 py-3">
          <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
            Evidence type
          </dt>
          <dd className="mt-0.5 text-xs font-semibold text-amber-800">
            {node.evidence}
          </dd>
        </div>
      </dl>
    </ModuleShell>
  );
}

export function SluppClaimChecker() {
  return (
    <ModuleShell
      kicker="Claim checker"
      title="High-value AEO module for common searches"
    >
      <ul className="divide-y divide-slate-100">
        {SLUPP_CLAIMS.map((row) => (
          <li key={row.claim} className="px-4 py-3">
            <p className="text-xs font-bold text-slate-900">“{row.claim}”</p>
            <p className="mt-1 text-[11px] font-bold text-amber-900">
              {row.verdict}
            </p>
            <p className="mt-1 text-[11px] text-slate-600">{row.data}</p>
          </li>
        ))}
      </ul>
    </ModuleShell>
  );
}

export function SluppVs915() {
  return (
    <ModuleShell
      kicker="SLU-PP-332 vs SLU-PP-915 identity card"
      title="Prevents the most consequential molecule mix-up"
    >
      <p className="border-b border-amber-100 bg-amber-50 px-4 py-2.5 text-[11px] font-semibold text-amber-950">
        Results cannot be transferred between compounds.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Feature</th>
              <th className="px-3 py-2.5 font-semibold">SLU-PP-332</th>
              <th className="px-3 py-2.5 font-semibold">SLU-PP-915</th>
            </tr>
          </thead>
          <tbody>
            {SLUPP_VS_915.map((row) => (
              <tr key={row.field} className="border-t border-slate-50">
                <td className="px-3 py-2.5 font-medium text-slate-700">
                  {row.field}
                </td>
                <td className="px-3 py-2.5 text-slate-700">{row.a}</td>
                <td className="px-3 py-2.5 text-slate-600">{row.b}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ModuleShell>
  );
}

export function SluppSafetyMatrix() {
  return (
    <ModuleShell
      kicker="Safety-knowledge matrix"
      title="Most human cells remain Unknown"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Domain</th>
              <th className="px-3 py-2.5 font-semibold">Efficacy mice</th>
              <th className="px-3 py-2.5 font-semibold">Formal tox</th>
              <th className="px-3 py-2.5 font-semibold">Human data</th>
            </tr>
          </thead>
          <tbody>
            {SLUPP_SAFETY_MATRIX.map((row) => (
              <tr key={row.domain} className="border-t border-slate-50">
                <td className="px-3 py-2.5 font-medium text-slate-700">
                  {row.domain}
                </td>
                <td className="px-3 py-2.5 text-slate-600">{row.mice}</td>
                <td className="px-3 py-2.5 text-slate-600">{row.tox}</td>
                <td className="px-3 py-2.5 font-bold text-amber-800">
                  {row.human}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ModuleShell>
  );
}

export function SluppResearchTimeline() {
  return (
    <ModuleShell
      kicker="Research timeline"
      title="2023–2026 preclinical program — still no human trial"
    >
      <ol className="relative ml-6 my-4 space-y-0 border-l-2 border-violet-200">
        {SLUPP_TIMELINE.map((item) => (
          <li key={`${item.date}-${item.title}`} className="relative pb-4 pl-6 last:pb-2">
            <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-violet-500 bg-white" />
            <p className="text-[10px] font-bold uppercase tracking-wide text-violet-600">
              {item.date}
            </p>
            <p className="mt-0.5 text-xs font-bold text-slate-900">
              {item.title}
            </p>
            <p className="mt-1 text-[11px] leading-relaxed text-slate-600">
              {item.detail}
            </p>
          </li>
        ))}
      </ol>
    </ModuleShell>
  );
}
