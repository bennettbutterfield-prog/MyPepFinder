"use client";

import { useMemo, useState } from "react";
import {
  TB500_AE_FULL,
  TB500_AE_SIMPLE,
  TB500_CLAIMS,
  TB500_COMPARE,
  TB500_DIRECT_EVIDENCE,
  TB500_EVIDENCE_LADDER,
  TB500_FICTIONAL_NCT,
  TB500_HUMAN_STATUS,
  TB500_METABOLITES,
  TB500_MOLECULES,
  TB500_PROTOCOL_PHASES,
  TB500_REGULATORY,
  TB500_RECON_PRESETS,
  TB500_SAFETY_MATRIX,
  tb500AmountFromVial,
} from "@/data/tb-500-dosage-guide";

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

export function Tb500IdentityGate() {
  const [id, setId] = useState("tb500");
  const mol = TB500_MOLECULES.find((m) => m.id === id) || TB500_MOLECULES[0];

  return (
    <ModuleShell
      kicker="Identity gate"
      title="Ac-LKKTETQ vs full Tβ4 vs salts, metabolites, and look-alikes"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Molecule"
          options={TB500_MOLECULES.map((m) => ({
            id: m.id,
            label: m.label.split("/")[0].trim(),
          }))}
          value={id}
          onChange={setId}
        />
      </div>
      <div className="px-4 py-4">
        <p className="text-sm font-bold text-slate-900">{mol.verdict}</p>
        <p className="mt-2 text-[11px] leading-relaxed text-slate-600">
          {mol.detail}
        </p>
      </div>
      <dl className="grid gap-0 divide-y divide-slate-100 border-t border-slate-100 sm:grid-cols-2">
        {[
          ["Length", mol.length],
          ["Sequence / form", mol.sequence],
          ["Studied routes", mol.routes],
          ["Evidence types", mol.evidence],
          ["Human results", mol.humanResults],
        ].map(([label, value]) => (
          <div key={label} className="px-4 py-3">
            <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
              {label}
            </dt>
            <dd className="mt-0.5 text-xs font-semibold text-slate-800">{value}</dd>
          </div>
        ))}
      </dl>
      <p className="border-t border-amber-100 bg-amber-50 px-4 py-3 text-[11px] font-semibold text-amber-950">
        Findings do not transfer between molecules. Full-length Tβ4 human doses
        cannot validate TB-500 schedules.
      </p>
    </ModuleShell>
  );
}

/** @deprecated use Tb500IdentityGate — kept for backward compatibility */
export function Tb500MoleculeComparator() {
  return <Tb500IdentityGate />;
}

export function Tb500HumanStatus() {
  return (
    <ModuleShell
      kicker="Human evidence status"
      title="No published human TB-500 dose — fictional NCT is not evidence"
    >
      <div className="border-b border-red-100 bg-red-50 px-4 py-4">
        <p className="text-[10px] font-bold uppercase tracking-wide text-red-700">
          Fictional registry record — do not cite as trial evidence
        </p>
        <p className="mt-1 text-xs font-bold text-red-950">
          {TB500_FICTIONAL_NCT.nct}: {TB500_FICTIONAL_NCT.title}
        </p>
        <p className="mt-2 text-[11px] italic text-red-900">
          “{TB500_FICTIONAL_NCT.disclaimer}”
        </p>
        <p className="mt-2 text-[11px] leading-relaxed text-red-800">
          {TB500_FICTIONAL_NCT.note}
        </p>
        <a
          href={TB500_FICTIONAL_NCT.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-[11px] font-semibold text-red-700 hover:underline"
        >
          View record →
        </a>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[420px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Human-evidence question</th>
              <th className="px-3 py-2.5 font-semibold">Finding</th>
            </tr>
          </thead>
          <tbody>
            {TB500_HUMAN_STATUS.map(([question, finding]) => (
              <tr key={question} className="border-t border-slate-50">
                <td className="px-3 py-2 font-medium text-slate-700">
                  {question}
                </td>
                <td
                  className={`px-3 py-2 font-semibold ${
                    question.includes("NCT") || question.includes("None")
                      ? "text-amber-800"
                      : "text-violet-800"
                  }`}
                >
                  {finding}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ModuleShell>
  );
}

export function Tb500DirectEvidence() {
  const [full, setFull] = useState(false);

  return (
    <div className="mt-5">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-base font-bold text-slate-900">
          Direct TB-500 exposure evidence
        </h3>
        <div
          className="inline-flex rounded-lg border border-slate-200 bg-white p-0.5 shadow-sm"
          role="group"
          aria-label="Evidence view"
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
            Summary
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
            Full table
          </button>
        </div>
      </div>

      {!full ? (
        <div className="rounded-xl border border-violet-200 bg-violet-50/40 px-4 py-4">
          <p className="text-sm font-bold text-violet-950">Three direct exposures</p>
          <ul className="mt-2 space-y-2 text-xs text-violet-900">
            <li>
              <strong>Horse:</strong> 10 mg SC once — PK/metabolism analytical study
            </li>
            <li>
              <strong>Rat:</strong> 50 mg/kg IP once — urinary metabolite identification
            </li>
            <li>
              <strong>Cells:</strong> 50 mcg/mL — parent inactive; Ac-LKKTE active in
              scratch assay
            </li>
          </ul>
          <p className="mt-3 text-[11px] font-semibold text-amber-900">
            None of these establish a human healing dose or twice-weekly schedule.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[640px] border-collapse text-left text-xs">
            <thead>
              <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
                <th className="px-3 py-2.5 font-semibold">Area</th>
                <th className="px-3 py-2.5 font-semibold">Model</th>
                <th className="px-3 py-2.5 font-semibold">Dose</th>
                <th className="px-3 py-2.5 font-semibold">Finding</th>
                <th className="px-3 py-2.5 font-semibold">Meaning</th>
              </tr>
            </thead>
            <tbody>
              {TB500_DIRECT_EVIDENCE.map((row) => (
                <tr key={row.area} className="border-t border-slate-50">
                  <td className="px-3 py-2 font-medium text-slate-800">{row.area}</td>
                  <td className="px-3 py-2 text-slate-600">{row.model}</td>
                  <td className="px-3 py-2 font-semibold text-violet-800">
                    {row.dose}
                  </td>
                  <td className="px-3 py-2 text-slate-600">{row.finding}</td>
                  <td className="px-3 py-2 text-slate-600">{row.meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

/** @deprecated use Tb500DirectEvidence */
export function Tb500EvidenceToggle() {
  return <Tb500DirectEvidence />;
}

export function Tb500ProtocolTimeline() {
  const [active, setActive] = useState("dose");
  const phase =
    TB500_PROTOCOL_PHASES.find((p) => p.id === active) ||
    TB500_PROTOCOL_PHASES[0];

  return (
    <ModuleShell
      kicker="Equine PK protocol"
      title="Single 10 mg SC dose — sampling timeline (nonclinical analytical)"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Sampling phase"
          options={TB500_PROTOCOL_PHASES.map((p) => ({
            id: p.id,
            label: p.time,
          }))}
          value={active}
          onChange={setActive}
        />
      </div>
      <div className="px-4 py-4">
        <p className="text-sm font-bold text-slate-900">{phase.phase}</p>
        <dl className="mt-3 grid gap-2 sm:grid-cols-2">
          <div>
            <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
              Time
            </dt>
            <dd className="text-[11px] font-semibold text-violet-800">
              {phase.time}
            </dd>
          </div>
          <div>
            <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
              Plasma
            </dt>
            <dd className="text-[11px] text-slate-700">{phase.plasma}</dd>
          </div>
          <div>
            <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
              Urine
            </dt>
            <dd className="text-[11px] text-slate-700">{phase.urine}</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
              Note
            </dt>
            <dd className="text-[11px] text-slate-700">{phase.note}</dd>
          </div>
        </dl>
      </div>
      <p className="border-t border-amber-100 bg-amber-50 px-4 py-3 text-[11px] font-semibold text-amber-950">
        Nonclinical analytical protocol — not a human loading/maintenance healing
        cycle. No loading phase, maintenance, titration, or repeat dose.
      </p>
    </ModuleShell>
  );
}

export function Tb500ClinicalVsAnecdotal() {
  const e = TB500_COMPARE.experimental;
  const a = TB500_COMPARE.anecdotal;

  return (
    <ModuleShell
      kicker="Evidence split"
      title="Direct experiments vs community anecdotal protocols"
    >
      <div className="grid gap-0 sm:grid-cols-2">
        <div className="border-b border-slate-100 p-4 sm:border-b-0 sm:border-r">
          <p className="text-[10px] font-bold uppercase tracking-wide text-violet-700">
            {e.title}
          </p>
          <p className="mt-1 text-sm font-bold text-slate-900">{e.status}</p>
          <dl className="mt-3 space-y-2">
            {e.rows.map(([k, v]) => (
              <div key={k}>
                <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                  {k}
                </dt>
                <dd className="text-[11px] text-slate-700">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="bg-slate-50 p-4">
          <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
            {a.title}
          </p>
          <p className="mt-1 text-sm font-bold text-amber-800">{a.status}</p>
          <dl className="mt-3 space-y-2">
            {a.rows.map(([k, v]) => (
              <div key={k}>
                <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                  {k}
                </dt>
                <dd className="text-[11px] text-slate-700">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </ModuleShell>
  );
}

export function Tb500ReconCalc() {
  const targetPresets = [
    { id: "1", mg: 1, label: "1 mg" },
    { id: "2", mg: 2, label: "2 mg" },
    { id: "2.5", mg: 2.5, label: "2.5 mg (common anecdotal)" },
    { id: "5", mg: 5, label: "5 mg" },
  ];
  const [presetId, setPresetId] = useState("10-2");
  const [targetId, setTargetId] = useState("2.5");
  const [customTarget, setCustomTarget] = useState("");

  const vialPreset =
    TB500_RECON_PRESETS.find((p) => p.id === presetId) || TB500_RECON_PRESETS[2];
  const targetMg =
    customTarget !== ""
      ? Number(customTarget)
      : (targetPresets.find((p) => p.id === targetId)?.mg ?? 2.5);

  const result = useMemo(() => {
    return tb500AmountFromVial(
      vialPreset.vialMg,
      vialPreset.diluentMl,
      targetMg
    );
  }, [vialPreset, targetMg]);

  const isHighlighted = presetId === "10-2" && targetMg === 2.5;

  return (
    <ModuleShell
      kicker="Reconstitution math"
      title="5 mg @ 1/2 mL · 10 mg @ 1/2 mL — concentration arithmetic only"
    >
      <div className="grid gap-3 border-b border-slate-100 px-4 py-3 sm:grid-cols-2">
        <div>
          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Vial preset
          </p>
          <ChipGroup
            label="Vial preset"
            options={TB500_RECON_PRESETS.map((p) => ({
              id: p.id,
              label: p.label,
            }))}
            value={presetId}
            onChange={setPresetId}
          />
        </div>
        <div>
          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Target amount
          </p>
          <ChipGroup
            label="Target mg"
            options={targetPresets.map((p) => ({
              id: p.id,
              label: p.label,
            }))}
            value={customTarget !== "" ? "" : targetId}
            onChange={(v) => {
              setCustomTarget("");
              setTargetId(v);
            }}
          />
        </div>
      </div>
      <div className="border-b border-slate-100 px-4 py-3">
        <label className="block text-[11px] font-semibold text-slate-700">
          Or enter target amount (mg)
          <input
            type="number"
            min="0"
            step="0.5"
            value={customTarget}
            placeholder={String(
              targetPresets.find((p) => p.id === targetId)?.mg ?? 2.5
            )}
            onChange={(e) => setCustomTarget(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-900"
          />
        </label>
      </div>
      {result ? (
        <div className="px-4 py-4">
          <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
            {vialPreset.label} · concentration ≈{" "}
            {result.concMgPerMl.toFixed(2)} mg/mL · ≈{" "}
            {result.mgPerUnit.toFixed(2)} mg per U-100 unit
          </p>
          <p className="mt-1 text-2xl font-bold text-violet-800">
            {result.targetMg} mg = {result.volumeMl.toFixed(3)} mL ={" "}
            {result.units.toFixed(1)} U-100 units
          </p>
          {isHighlighted ? (
            <p className="mt-2 text-[11px] font-semibold text-violet-900">
              Highlighted: 10 mg/2 mL → 2.5 mg = 0.5 mL = 50 U (arithmetic only)
            </p>
          ) : null}
          <p className="mt-2 text-[11px] text-slate-500">{vialPreset.note}</p>
          <p className="mt-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-[11px] font-semibold text-amber-950">
            Calculation reference only — not a dose recommendation. Free base
            (~889 Da) vs acetate (~949 Da) mass basis must be confirmed before
            any concentration math.
          </p>
        </div>
      ) : null}
    </ModuleShell>
  );
}

export function Tb500ClaimChecker() {
  const [open, setOpen] = useState("half-life-7d");

  return (
    <ModuleShell
      kicker="Claim checker"
      title="Half-life, loading, local IM, Tβ4 transfer, fictional NCT, and stack claims"
    >
      <ul className="divide-y divide-slate-100">
        {TB500_CLAIMS.map((c) => {
          const isOpen = open === c.id;
          return (
            <li key={c.id}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? "" : c.id)}
                className="flex w-full items-start justify-between gap-3 px-4 py-3 text-left hover:bg-slate-50"
                aria-expanded={isOpen}
              >
                <div>
                  <p className="text-xs font-bold text-slate-900">{c.claim}</p>
                  <span className="mt-1.5 inline-block rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-900">
                    {c.status}
                  </span>
                </div>
                <span className="text-slate-400">{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen ? (
                <p className="border-t border-slate-50 px-4 pb-3 text-[11px] leading-relaxed text-slate-600">
                  {c.detail}
                </p>
              ) : null}
            </li>
          );
        })}
      </ul>
    </ModuleShell>
  );
}

export function Tb500MetabolismExplorer() {
  const [id, setId] = useState("parent");
  const node =
    TB500_METABOLITES.find((m) => m.id === id) || TB500_METABOLITES[0];

  return (
    <ModuleShell
      kicker="TB-500 metabolism"
      title="Ac-LKKTETQ → C-terminal truncated metabolites"
    >
      <div className="flex flex-wrap items-center justify-center gap-1 px-4 py-4">
        {TB500_METABOLITES.map((m, i) => (
          <div key={m.id} className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setId(m.id)}
              aria-pressed={id === m.id}
              className={`rounded-lg px-2.5 py-1.5 text-[10px] font-bold transition sm:text-[11px] ${
                id === m.id
                  ? "bg-violet-600 text-white"
                  : "border border-slate-200 bg-white text-slate-600 hover:bg-violet-50"
              }`}
            >
              {m.label}
            </button>
            {i < TB500_METABOLITES.length - 1 ? (
              <span className="text-slate-300" aria-hidden>
                →
              </span>
            ) : null}
          </div>
        ))}
      </div>
      <dl className="divide-y divide-slate-100 border-t border-slate-100">
        <div className="px-4 py-3">
          <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
            Where detected
          </dt>
          <dd className="mt-0.5 text-xs font-semibold text-slate-800">
            {node.detected}
          </dd>
        </div>
        <div className="px-4 py-3">
          <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
            Scratch / wound-closure note
          </dt>
          <dd className="mt-0.5 text-xs font-semibold text-slate-800">
            {node.scratch}
          </dd>
        </div>
      </dl>
      <p className="border-t border-slate-100 px-4 py-3 text-[11px] text-slate-500">
        Parent inactive at 50 mcg/mL in FDA-reviewed assay; Ac-LKKTE metabolite
        showed activity. Metabolite concentration is not parent-peptide dosing.
      </p>
    </ModuleShell>
  );
}

export function Tb500EvidenceLadder() {
  return (
    <ModuleShell
      kicker="Dosage evidence ladder"
      title="Very poorly established — anecdotal protocols dominate search results"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Evidence level</th>
              <th className="px-3 py-2.5 font-semibold">TB-500 evidence</th>
              <th className="px-3 py-2.5 font-semibold">Confidence</th>
            </tr>
          </thead>
          <tbody>
            {TB500_EVIDENCE_LADDER.map((row) => (
              <tr key={row.level} className="border-t border-slate-50">
                <td className="px-3 py-2 font-medium text-slate-800">
                  {row.level}
                </td>
                <td className="px-3 py-2 text-slate-600">{row.exists}</td>
                <td className="px-3 py-2 font-semibold text-violet-800">
                  {row.confidence}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ModuleShell>
  );
}

export function Tb500AdverseEventTable() {
  const [full, setFull] = useState(false);
  const rows = full ? TB500_AE_FULL : TB500_AE_SIMPLE;

  return (
    <div className="mt-5 space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-base font-bold text-slate-900">Safety summary</h3>
        <div
          className="inline-flex rounded-lg border border-slate-200 bg-white p-0.5 shadow-sm"
          role="group"
          aria-label="Safety detail level"
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
            Simple
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
            Full matrix
          </button>
        </div>
      </div>
      <ul className="space-y-2">
        {rows.map((item) => (
          <li
            key={item.topic}
            className="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm"
          >
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-xs font-bold text-slate-800">{item.topic}</p>
              <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-900">
                {item.status}
              </span>
            </div>
            <p className="mt-1 text-xs leading-relaxed text-slate-600">
              {item.note}
            </p>
            {full && item.context ? (
              <p className="mt-2 text-[11px] leading-relaxed text-slate-500">
                {item.context}
              </p>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Tb500SafetyMatrix() {
  return (
    <ModuleShell
      kicker="Product-quality matrix"
      title="Unknown fields show “Not established” — not a green check"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-left text-xs">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Check</th>
              {TB500_SAFETY_MATRIX.columns.map((c) => (
                <th key={c} className="px-3 py-2.5 font-semibold">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TB500_SAFETY_MATRIX.rows.map((row) => (
              <tr key={row[0]} className="border-b border-slate-50 last:border-0">
                {row.map((cell, i) => (
                  <td
                    key={`${row[0]}-${i}`}
                    className={`px-3 py-2.5 ${
                      i === 0
                        ? "font-medium text-slate-700"
                        : cell === "No" ||
                            cell.startsWith("Not established") ||
                            cell.startsWith("Absent") ||
                            cell === "None identified" ||
                            cell === "Unknown" ||
                            cell === "Insufficient" ||
                            cell === "Often unknown" ||
                            cell === "Variable"
                          ? "font-semibold text-amber-800"
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
        {TB500_SAFETY_MATRIX.footnote}
      </p>
    </ModuleShell>
  );
}

export function Tb500RegulatoryTimeline() {
  return (
    <ModuleShell
      kicker="Regulatory timeline"
      title="FDA 2026 staff vs PCAC · WADA S2 · no approved dose"
    >
      <ol className="relative ml-6 my-4 space-y-0 border-l-2 border-violet-200">
        {TB500_REGULATORY.map((item) => (
          <li key={item.date} className="relative pb-5 pl-6 last:pb-2">
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
      <p className="border-t border-amber-100 bg-amber-50 px-4 py-3 text-[11px] font-semibold text-amber-950">
        PCAC recommendation is nonbinding. Compounding-list inclusion ≠ approval.
        Check FDA's final Bulks List action. WADA S2 prohibits TB-500 at all times.
      </p>
    </ModuleShell>
  );
}
