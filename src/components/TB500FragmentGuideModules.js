"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  TB500F_AE_FULL,
  TB500F_AE_SIMPLE,
  TB500F_CLAIMS,
  TB500F_COMPARE,
  TB500F_DIRECT_EVIDENCE,
  TB500F_EVIDENCE_LADDER,
  TB500F_HUMAN_STATUS,
  TB500F_IDENTITY,
  TB500F_IDENTITY_FORK,
  TB500F_PROTOCOL_PHASES,
  TB500F_PUBLISHED_MG_ML,
  TB500F_PUBLISHED_PERCENT_WV,
  TB500F_PUBLISHED_UG_PER_WOUND,
  TB500F_PUBLISHED_VOLUME_UL,
  TB500F_RECON_PRESETS,
  tb500FragAmountFromVial,
  tb500fPercentToMgMl,
  tb500fUgFromConcentration,
} from "@/data/tb-500-fragment-17-23-dosage-guide";

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
                ? "bg-teal-600 text-white"
                : "border border-slate-200 bg-white text-slate-600 hover:bg-teal-50 hover:text-teal-700"
            }`}
          >
            {text}
          </button>
        );
      })}
    </div>
  );
}

export function Tb500fIdentityGate() {
  const [id, setId] = useState("h-lkktetq");
  const mol =
    TB500F_IDENTITY.find((m) => m.id === id) || TB500F_IDENTITY[0];

  return (
    <ModuleShell
      kicker="Identity gate"
      title="H-LKKTETQ-OH vs Ac-LKKTETQ vs full Tβ4 vs Ac-SDKP"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Molecule"
          options={TB500F_IDENTITY.map((m) => ({
            id: m.id,
            label: m.label.split("(")[0].trim(),
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
          ["Mass", mol.mass],
          ["Evidence types", mol.evidence],
          ["Human results", mol.humanResults],
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
      <p className="border-t border-red-100 bg-red-50 px-4 py-3 text-[11px] font-semibold text-red-950">
        <strong>Ac-LKKTETQ ≠ H-LKKTETQ-OH.</strong> Doses do not transfer either
        way. If your material is N-acetylated, see{" "}
        <Link
          href="/peptides/tb-500"
          className="font-bold text-red-800 underline hover:text-red-900"
        >
          /peptides/tb-500
        </Link>{" "}
        for Ac-LKKTETQ evidence.
      </p>
    </ModuleShell>
  );
}

export function Tb500fIdentityFork() {
  return (
    <ModuleShell
      kicker="Identity fork"
      title="Unacetylated H-LKKTETQ-OH vs N-acetylated Ac-LKKTETQ side by side"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              {TB500F_IDENTITY_FORK.headers.map((h) => (
                <th key={h} className="px-3 py-2.5 font-semibold">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TB500F_IDENTITY_FORK.rows.map((row) => (
              <tr key={row[0]} className="border-t border-slate-50">
                <td className="px-3 py-2 font-medium text-slate-800">{row[0]}</td>
                <td className="px-3 py-2 font-semibold text-teal-800">
                  {row[1]}
                </td>
                <td className="px-3 py-2 text-slate-600">{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="border-t border-slate-100 px-4 py-3 text-[11px] text-slate-600">
        {TB500F_IDENTITY_FORK.footnote}
      </p>
    </ModuleShell>
  );
}

export function Tb500fHumanStatus() {
  return (
    <ModuleShell
      kicker="Human evidence status"
      title="No molecule-confirmed human H-LKKTETQ-OH dose identified"
    >
      <div className="border-b border-red-100 bg-red-50 px-4 py-4">
        <p className="text-[10px] font-bold uppercase tracking-wide text-red-700">
          No published human administration study
        </p>
        <p className="mt-1 text-xs font-bold text-red-950">
          No Phase 1, PK, wound trial, or verified case report with
          H-LKKTETQ-OH as test article
        </p>
        <p className="mt-2 text-[11px] leading-relaxed text-red-800">
          Online 2–2.5 mg SC schedules are usually copied from Ac-LKKTETQ
          discussions under the ambiguous TB-500 name — not fragment-specific
          human evidence.
        </p>
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
            {TB500F_HUMAN_STATUS.map(([question, finding]) => (
              <tr key={question} className="border-t border-slate-50">
                <td className="px-3 py-2 font-medium text-slate-800">
                  {question}
                </td>
                <td className="px-3 py-2 text-slate-600">{finding}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ModuleShell>
  );
}

export function Tb500fWoundCalc() {
  const [percentWv, setPercentWv] = useState(String(TB500F_PUBLISHED_PERCENT_WV));
  const [volumeUl, setVolumeUl] = useState(String(TB500F_PUBLISHED_VOLUME_UL));

  const result = useMemo(() => {
    const pct = Number(percentWv);
    const vol = Number(volumeUl);
    const mgMl = tb500fPercentToMgMl(pct);
    const ug = tb500fUgFromConcentration(mgMl, vol);
    if (mgMl === null || ug === null) return null;
    return { percentWv: pct, mgMl, volumeUl: vol, ugPerApplication: ug };
  }, [percentWv, volumeUl]);

  const isPhilp =
    result &&
    Math.abs(result.percentWv - TB500F_PUBLISHED_PERCENT_WV) < 0.0001 &&
    result.volumeUl === TB500F_PUBLISHED_VOLUME_UL;

  return (
    <ModuleShell
      kicker="Wound exposure calculator"
      title="0.01% w/v concentration → µg per wound (Philp 2003 arithmetic)"
    >
      <div className="grid gap-4 border-b border-slate-100 px-4 py-4 sm:grid-cols-2">
        <label className="block text-[11px] font-semibold text-slate-700">
          Concentration (% w/v)
          <input
            type="number"
            min="0"
            step="0.001"
            value={percentWv}
            onChange={(e) => setPercentWv(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-900"
          />
        </label>
        <label className="block text-[11px] font-semibold text-slate-700">
          Application volume per wound (µL)
          <input
            type="number"
            min="0"
            step="1"
            value={volumeUl}
            onChange={(e) => setVolumeUl(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-900"
          />
        </label>
      </div>
      {result ? (
        <div className="px-4 py-4">
          <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
            {result.percentWv}% w/v = {result.mgMl.toFixed(4)} mg/mL
          </p>
          <p className="mt-1 text-2xl font-bold text-teal-800">
            {result.ugPerApplication.toFixed(3)} µg per wound per application
          </p>
          {isPhilp ? (
            <p className="mt-2 text-[11px] font-semibold text-teal-900">
              Matches Philp 2003 published exposure: 0.01% × 50 µL = 5 µg.
              Two applications = 10 µg cumulative per wound.
            </p>
          ) : null}
          <p className="mt-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-[11px] font-semibold text-amber-950">
            Topical mouse wound arithmetic only — not mg/kg, not human SC/IM
            dose, and not transferable to Ac-LKKTETQ.
          </p>
        </div>
      ) : null}
      <div className="border-t border-slate-100 px-4 py-3">
        <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
          Reference values
        </p>
        <ul className="mt-2 space-y-1 text-[11px] text-slate-600">
          <li>
            Published: {TB500F_PUBLISHED_PERCENT_WV}% w/v ={" "}
            {TB500F_PUBLISHED_MG_ML} mg/mL
          </li>
          <li>
            Published: {TB500F_PUBLISHED_VOLUME_UL} µL ×{" "}
            {TB500F_PUBLISHED_MG_ML} mg/mL = {TB500F_PUBLISHED_UG_PER_WOUND} µg
          </li>
        </ul>
      </div>
    </ModuleShell>
  );
}

export function Tb500fProtocolTimeline() {
  const [active, setActive] = useState("day0-dose");
  const phase =
    TB500F_PROTOCOL_PHASES.find((p) => p.id === active) ||
    TB500F_PROTOCOL_PHASES[0];

  return (
    <ModuleShell
      kicker="Topical mouse protocol"
      title="7-day aged-mouse wound model — day 0, 48 h, day 7 histology"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Protocol phase"
          options={TB500F_PROTOCOL_PHASES.map((p) => ({
            id: p.id,
            label: p.time,
          }))}
          value={active}
          onChange={setActive}
        />
      </div>
      <div className="px-4 py-4">
        <p className="text-sm font-bold text-slate-900">{phase.phase}</p>
        <dl className="mt-3 space-y-2">
          <div>
            <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
              Time
            </dt>
            <dd className="text-[11px] font-semibold text-teal-800">
              {phase.time}
            </dd>
          </div>
          <div>
            <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
              Required action
            </dt>
            <dd className="text-[11px] text-slate-700">{phase.action}</dd>
          </div>
          <div>
            <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
              Note
            </dt>
            <dd className="text-[11px] text-slate-700">{phase.note}</dd>
          </div>
        </dl>
      </div>
      <p className="border-t border-amber-100 bg-amber-50 px-4 py-3 text-[11px] font-semibold text-amber-950">
        Nonclinical topical laboratory protocol — NOT a human injection
        protocol. No loading phase, maintenance, titration, or human-equivalent
        dose (HED).
      </p>
    </ModuleShell>
  );
}

export function Tb500fClinicalVsAnecdotal() {
  const e = TB500F_COMPARE.experimental;
  const a = TB500F_COMPARE.anecdotal;

  return (
    <ModuleShell
      kicker="Evidence split"
      title="Published H-LKKTETQ-OH topical experiment vs anecdotal TB-500 reports"
    >
      <div className="grid gap-0 sm:grid-cols-2">
        <div className="border-b border-slate-100 p-4 sm:border-b-0 sm:border-r">
          <p className="text-[10px] font-bold uppercase tracking-wide text-teal-700">
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
      <p className="border-t border-slate-100 px-4 py-3 text-[11px] font-semibold text-slate-600">
        Different molecules, routes, species, exposure scales (µg vs mg), and
        endpoints — do not merge into one dosing chart.
      </p>
    </ModuleShell>
  );
}

export function Tb500fReconCalc() {
  const targetPresets = [
    { id: "0.005", mg: 0.005, label: "5 µg (published mouse/wound)" },
    { id: "0.1", mg: 0.1, label: "0.1 mg (10 mL @ 0.01%)" },
    { id: "1", mg: 1, label: "1 mg" },
    { id: "2.5", mg: 2.5, label: "2.5 mg (anecdotal — unvalidated)" },
  ];
  const [presetId, setPresetId] = useState("5-2");
  const [targetId, setTargetId] = useState("2.5");
  const [customTarget, setCustomTarget] = useState("");

  const vialPreset =
    TB500F_RECON_PRESETS.find((p) => p.id === presetId) ||
    TB500F_RECON_PRESETS[1];
  const targetMg =
    customTarget !== ""
      ? Number(customTarget)
      : (targetPresets.find((p) => p.id === targetId)?.mg ?? 2.5);

  const result = useMemo(() => {
    return tb500FragAmountFromVial(
      vialPreset.vialMg,
      vialPreset.diluentMl,
      targetMg
    );
  }, [vialPreset, targetMg]);

  return (
    <ModuleShell
      kicker="Reconstitution math"
      title="H-LKKTETQ-OH peptide-equivalent concentration — arithmetic only"
    >
      <div className="grid gap-3 border-b border-slate-100 px-4 py-3 sm:grid-cols-2">
        <div>
          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Vial preset
          </p>
          <ChipGroup
            label="Vial preset"
            options={TB500F_RECON_PRESETS.map((p) => ({
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
          Or enter target H-LKKTETQ-OH equivalent (mg)
          <input
            type="number"
            min="0"
            step="0.001"
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
            {vialPreset.label} · ≈ {result.concMgPerMl.toFixed(4)} mg/mL · ≈{" "}
            {result.molarityMicroM.toFixed(1)} µM (846.97 Da basis)
          </p>
          <p className="mt-1 text-2xl font-bold text-teal-800">
            {result.targetMg} mg = {result.volumeMl.toFixed(4)} mL ={" "}
            {result.units.toFixed(1)} U-100 units
          </p>
          <p className="mt-2 text-[11px] text-slate-500">{vialPreset.note}</p>
          <p className="mt-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-[11px] font-semibold text-amber-950">
            Use H-LKKTETQ-OH assay basis (~847 Da), not Ac-LKKTETQ mass (~889
            Da). Gross vial fill may not equal peptide-equivalent content.
            Calculation reference only — not a dose recommendation.
          </p>
        </div>
      ) : null}
    </ModuleShell>
  );
}

export function Tb500fClaimChecker() {
  const [open, setOpen] = useState("ac-schedules-transfer");

  return (
    <ModuleShell
      kicker="Claim checker"
      title="Ac schedule transfer, acetate vs Ac-, Tβ4 doses, topical→SC, and vial math"
    >
      <ul className="divide-y divide-slate-100">
        {TB500F_CLAIMS.map((c) => {
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

export function Tb500fEvidenceLadder() {
  return (
    <ModuleShell
      kicker="Dosage evidence ladder"
      title="Poorly established — one topical mouse concentration; no human dose"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Evidence level</th>
              <th className="px-3 py-2.5 font-semibold">H-LKKTETQ-OH evidence</th>
              <th className="px-3 py-2.5 font-semibold">Confidence</th>
            </tr>
          </thead>
          <tbody>
            {TB500F_EVIDENCE_LADDER.map((row) => (
              <tr key={row.level} className="border-t border-slate-50">
                <td className="px-3 py-2 font-medium text-slate-800">
                  {row.level}
                </td>
                <td className="px-3 py-2 text-slate-600">{row.exists}</td>
                <td className="px-3 py-2 font-semibold text-teal-800">
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

export function Tb500fAdverseEventTable() {
  const [full, setFull] = useState(false);
  const rows = full ? TB500F_AE_FULL : TB500F_AE_SIMPLE;

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
                ? "bg-teal-600 text-white"
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
                ? "bg-teal-600 text-white"
                : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            Full
          </button>
        </div>
      </div>
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Domain</th>
              <th className="px-3 py-2.5 font-semibold">Status</th>
              <th className="px-3 py-2.5 font-semibold">Detail</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.domain} className="border-t border-slate-50">
                <td className="px-3 py-2 font-medium text-slate-800">
                  {row.domain}
                </td>
                <td className="px-3 py-2 font-semibold text-teal-800">
                  {row.status}
                </td>
                <td className="px-3 py-2 text-slate-600">{row.detail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-[11px] text-slate-500">
        Direct unacetylated study was topical in mice — not injected. Community
        SC/IM protocols lack a molecule-specific human safety basis.
      </p>
    </div>
  );
}

export function Tb500fDirectEvidence() {
  return (
    <ModuleShell
      kicker="Direct evidence map"
      title="H-LKKTETQ-OH topical mouse vs misattributed Ac-LKKTETQ rows"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Model</th>
              <th className="px-3 py-2.5 font-semibold">Molecule</th>
              <th className="px-3 py-2.5 font-semibold">Dose</th>
              <th className="px-3 py-2.5 font-semibold">Route</th>
              <th className="px-3 py-2.5 font-semibold">Meaning</th>
            </tr>
          </thead>
          <tbody>
            {TB500F_DIRECT_EVIDENCE.map((row) => (
              <tr
                key={`${row.model}-${row.molecule}`}
                className="border-t border-slate-50"
              >
                <td className="px-3 py-2 font-medium text-slate-800">
                  {row.model}
                </td>
                <td className="px-3 py-2 text-slate-600">{row.molecule}</td>
                <td className="px-3 py-2 font-semibold text-teal-800">
                  {row.dose}
                </td>
                <td className="px-3 py-2 text-slate-600">{row.route}</td>
                <td className="px-3 py-2 text-slate-600">{row.meaning}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ModuleShell>
  );
}
