"use client";

import { useMemo, useState } from "react";
import {
  MOTSC_ANIMAL,
  MOTSC_BIOMARKERS,
  MOTSC_CLAIMS,
  MOTSC_EVIDENCE_LADDER,
  MOTSC_HUMAN_EVIDENCE,
  MOTSC_MECHANISM,
  MOTSC_MOTS_MET,
  MOTSC_REGULATORY,
  MOTSC_SAFETY_MATRIX,
  MOTSC_VS_CB4211,
} from "@/data/mots-c-dosage-guide";

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

function labelTone(label) {
  if (label === "Measured in humans") return "bg-emerald-100 text-emerald-800";
  if (label === "Association only") return "bg-sky-100 text-sky-800";
  if (label === "Animal") return "bg-amber-100 text-amber-900";
  if (label === "Cell") return "bg-slate-100 text-slate-700";
  return "bg-violet-100 text-violet-800";
}

export function MotscEvidenceLadder() {
  return (
    <ModuleShell
      kicker="MOTS-c evidence ladder"
      title="Preclinical depth ≠ clinical proof"
    >
      <ol className="divide-y divide-slate-100">
        {MOTSC_EVIDENCE_LADDER.map((rung, i) => (
          <li
            key={rung.id}
            className="flex flex-wrap items-start gap-3 px-4 py-3"
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-600 text-[10px] font-bold text-white">
              {i + 1}
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-xs font-bold text-slate-900">{rung.level}</p>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${labelTone(
                    rung.label
                  )}`}
                >
                  {rung.label}
                </span>
              </div>
              <p className="mt-1 text-[11px] leading-relaxed text-slate-600">
                {rung.detail}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </ModuleShell>
  );
}

export function MotscHumanEvidenceToggle() {
  const types = [
    "Administered MOTS-c",
    "Endogenous MOTS-c",
    "Genetic Evidence",
    "MOTS-c Analog",
  ];
  const [type, setType] = useState("Administered MOTS-c");
  const filtered = useMemo(
    () => MOTSC_HUMAN_EVIDENCE.filter((s) => s.type === type),
    [type]
  );

  return (
    <ModuleShell
      kicker="Human evidence type toggle"
      title="Keep administered, endogenous, genetic, and analog lanes separate"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Evidence type"
          options={types.map((t) => ({ id: t, label: t }))}
          value={type}
          onChange={setType}
        />
      </div>
      {type === "MOTS-c Analog" ? (
        <p className="border-b border-amber-100 bg-amber-50 px-4 py-2.5 text-[11px] font-semibold text-amber-950">
          CB4211 is a different molecule. Its 25 mg dose and safety findings do
          not transfer to native MOTS-c.
        </p>
      ) : null}
      <ul className="divide-y divide-slate-100">
        {filtered.map((study) => (
          <li key={study.id} className="px-4 py-4">
            <p className="text-sm font-bold text-slate-900">{study.study}</p>
            <p className="text-[11px] text-slate-500">{study.participants}</p>
            <p className="mt-2 text-xs text-slate-600">
              <strong>Exposure:</strong> {study.exposure}
            </p>
            <p className="mt-1 text-xs font-semibold text-violet-800">
              {study.outcome}
            </p>
            <p className="mt-1 text-[11px] font-semibold text-amber-800">
              {study.interpretation}
            </p>
            <a
              href={study.href}
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

export function MotscMotsMetTracker() {
  const t = MOTSC_MOTS_MET;
  return (
    <ModuleShell
      kicker="MOTS-MET trial tracker"
      title="First randomized native-MOTS-c metabolic efficacy test"
    >
      <p className="border-b border-amber-100 bg-amber-50 px-4 py-2.5 text-[11px] font-semibold text-amber-950">
        Registration is not a result. No outcomes posted; dose remains
        undisclosed.
      </p>
      <dl className="grid gap-0 divide-y divide-slate-100 sm:grid-cols-2">
        {[
          ["NCT", t.nct],
          ["Status", t.status],
          ["Planned n", String(t.n)],
          ["Population", t.population],
          ["Regimen", t.regimen],
          ["Treatment / safety", `${t.treatment} · safety ${t.safety}`],
          ["Primary efficacy", t.primaryEfficacy],
          ["Primary safety", t.primarySafety],
          ["Study start", t.start],
          ["Est. primary completion", t.primaryCompletion],
          ["Results posted", t.resultsPosted ? "Yes" : "No"],
          ["Site note", t.site],
        ].map(([label, value]) => (
          <div key={label} className="px-4 py-3">
            <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
              {label}
            </dt>
            <dd className="mt-0.5 text-xs font-semibold text-slate-800">
              {value}
            </dd>
          </div>
        ))}
      </dl>
      <div className="border-t border-slate-100 px-4 py-3">
        <a
          href={t.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] font-semibold text-violet-600 hover:underline"
        >
          Open ClinicalTrials.gov →
        </a>
      </div>
    </ModuleShell>
  );
}

export function MotscClaimChecker() {
  return (
    <ModuleShell
      kicker="Claim vs evidence checker"
      title="Marketing claim → best evidence → verdict"
    >
      <ul className="divide-y divide-slate-100">
        {MOTSC_CLAIMS.map((row) => (
          <li key={row.claim} className="px-4 py-3">
            <p className="text-xs font-bold text-slate-900">{row.claim}</p>
            <p className="mt-1 text-[11px] text-slate-600">{row.evidence}</p>
            <p className="mt-1 text-[11px] font-bold text-amber-900">
              {row.verdict}
            </p>
          </li>
        ))}
      </ul>
    </ModuleShell>
  );
}

export function MotscAnimalExplorer() {
  const areas = [
    "All",
    ...new Set(MOTSC_ANIMAL.map((a) => a.area)),
  ];
  const [area, setArea] = useState("All");
  const filtered = useMemo(
    () =>
      MOTSC_ANIMAL.filter((a) => area === "All" || a.area === area),
    [area]
  );

  return (
    <ModuleShell
      kicker="Animal study explorer"
      title="Animal doses visible for fidelity — human conversion disabled"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Area"
          options={areas.map((a) => ({ id: a, label: a }))}
          value={area}
          onChange={setArea}
        />
      </div>
      <ul className="divide-y divide-slate-100">
        {filtered.map((study) => (
          <li key={study.id} className="px-4 py-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-900">
                {study.area}
              </span>
              <p className="text-xs font-bold text-slate-900">{study.model}</p>
            </div>
            <p className="mt-1 text-[11px] text-slate-500">{study.dose}</p>
            <p className="mt-2 text-xs font-semibold text-violet-800">
              {study.result}
            </p>
            <p className="mt-1 text-[11px] font-semibold text-amber-800">
              {study.limit}
            </p>
          </li>
        ))}
      </ul>
    </ModuleShell>
  );
}

export function MotscMechanismVisual() {
  const [id, setId] = useState("metabolic");
  const branch =
    MOTSC_MECHANISM.find((m) => m.id === id) || MOTSC_MECHANISM[0];

  return (
    <ModuleShell
      kicker="Metabolic mechanism visualization"
      title="Two linked routes — clinical benefits remain hypothesized"
    >
      <div className="px-4 py-3">
        <ChipGroup
          label="Branch"
          options={MOTSC_MECHANISM.map((m) => ({
            id: m.id,
            label: m.id === "metabolic" ? "Metabolic" : "Stress signaling",
          }))}
          value={id}
          onChange={setId}
        />
      </div>
      <div className="border-t border-slate-100 px-4 py-4">
        <p className="text-[10px] font-bold uppercase tracking-wide text-violet-700">
          {branch.branch}
        </p>
        <p className="mt-2 text-xs font-semibold leading-relaxed text-slate-800">
          {branch.steps}
        </p>
        <ul className="mt-3 space-y-1.5">
          {branch.callouts.map((c) => (
            <li
              key={c}
              className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-[11px] text-slate-600"
            >
              {c}
            </li>
          ))}
        </ul>
        <p className="mt-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-[11px] font-semibold text-amber-950">
          Definitive upstream receptor: unresolved. Downstream clinical benefits
          are hypothesized or preclinical — not proven in humans.
        </p>
      </div>
    </ModuleShell>
  );
}

export function MotscVsCb4211() {
  return (
    <ModuleShell
      kicker="MOTS-c vs CB4211 identity card"
      title="Prevents the most common evidence-transfer error"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Field</th>
              <th className="px-3 py-2.5 font-semibold">Native MOTS-c</th>
              <th className="px-3 py-2.5 font-semibold">CB4211 analog</th>
            </tr>
          </thead>
          <tbody>
            {MOTSC_VS_CB4211.map((row) => (
              <tr key={row.field} className="border-t border-slate-50">
                <td className="px-3 py-2.5 font-medium text-slate-700">
                  {row.field}
                </td>
                <td className="px-3 py-2.5 text-slate-700">{row.mots}</td>
                <td className="px-3 py-2.5 text-slate-600">{row.cb}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ModuleShell>
  );
}

export function MotscSafetyMatrix() {
  const tone = {
    "Not studied": "text-amber-800",
    Pending: "text-violet-800",
    Known: "text-emerald-800",
  };

  return (
    <ModuleShell
      kicker="Safety unknowns matrix"
      title="No native-MOTS-c AE percentage chart until trial-arm data exist"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Domain</th>
              <th className="px-3 py-2.5 font-semibold">Status</th>
              <th className="px-3 py-2.5 font-semibold">Note</th>
            </tr>
          </thead>
          <tbody>
            {MOTSC_SAFETY_MATRIX.map((row) => (
              <tr key={row.domain} className="border-t border-slate-50">
                <td className="px-3 py-2.5 font-medium text-slate-700">
                  {row.domain}
                </td>
                <td
                  className={`px-3 py-2.5 font-bold ${
                    tone[row.status] || "text-slate-700"
                  }`}
                >
                  {row.status}
                </td>
                <td className="px-3 py-2.5 text-slate-600">{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ModuleShell>
  );
}

export function MotscRegulatoryTimeline() {
  return (
    <ModuleShell
      kicker="Regulatory timeline"
      title="Discovery → WADA → MOTS-MET → nonbinding 2026 PCAC vote"
    >
      <ol className="relative ml-6 my-4 space-y-0 border-l-2 border-violet-200">
        {MOTSC_REGULATORY.map((item) => (
          <li key={item.date} className="relative pb-4 pl-6 last:pb-2">
            <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-violet-500 bg-white" />
            <p className="text-[10px] font-bold uppercase tracking-wide text-violet-600">
              {item.date}
            </p>
            <div className="mt-0.5 flex flex-wrap items-center gap-2">
              <p className="text-xs font-bold text-slate-900">{item.title}</p>
              <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600">
                {item.badge}
              </span>
            </div>
            <p className="mt-1 text-[11px] leading-relaxed text-slate-600">
              {item.detail}
            </p>
          </li>
        ))}
      </ol>
      <p className="border-t border-amber-100 bg-amber-50 px-4 py-3 text-[11px] font-semibold text-amber-950">
        Separate badges: FDA approval = none · clinical trial = recruiting ·
        compounding-list process = pending · anti-doping = prohibited always.
      </p>
    </ModuleShell>
  );
}

export function MotscBiomarkerExplorer() {
  return (
    <ModuleShell
      kicker="Human biomarker results explorer"
      title="Every entry states blood, tissue, genotype — or administered intervention"
    >
      <ul className="divide-y divide-slate-100">
        {MOTSC_BIOMARKERS.map((row) => (
          <li key={row.id} className="px-4 py-4">
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-xs font-bold text-slate-900">{row.study}</p>
              <span className="rounded-full bg-sky-100 px-2 py-0.5 text-[10px] font-bold text-sky-800">
                {row.measured}
              </span>
              <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600">
                {row.administered ? "Administered" : "Not administered"}
              </span>
            </div>
            <p className="mt-1 text-[11px] text-slate-500">n={row.n}</p>
            <p className="mt-2 text-xs text-slate-700">{row.finding}</p>
          </li>
        ))}
      </ul>
    </ModuleShell>
  );
}
