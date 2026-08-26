"use client";

import { useMemo, useState } from "react";
import {
  DSIP_ANECDOTAL_PROTOCOLS,
  DSIP_AE_FULL,
  DSIP_AE_SIMPLE,
  DSIP_CLAIMS,
  DSIP_COMPARE,
  DSIP_EVIDENCE_ISSUES,
  DSIP_EVIDENCE_LADDER,
  DSIP_FIH_MAD,
  DSIP_FIH_SAD,
  DSIP_HUMAN_SLEEP_STUDIES,
  DSIP_IDENTITY,
  DSIP_NMOL_PRESETS,
  dsipDoseForWeight,
  dsipScRecon,
} from "@/data/dsip-dosage-guide";

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
                ? "bg-indigo-600 text-white"
                : "border border-slate-200 bg-white text-slate-600 hover:bg-indigo-50 hover:text-indigo-700"
            }`}
          >
            {text}
          </button>
        );
      })}
    </div>
  );
}

export function DsipIdentityGate() {
  const [id, setId] = useState("dsip");
  const card = DSIP_IDENTITY.find((c) => c.id === id) || DSIP_IDENTITY[0];

  return (
    <ModuleShell
      kicker="Identity gate"
      title="Confirm DSIP / emideltide vs emideltide acetate — assay basis required"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Identity check"
          options={DSIP_IDENTITY.map((c) => ({
            id: c.id,
            label: c.label.length > 36 ? `${c.label.slice(0, 34)}…` : c.label,
          }))}
          value={id}
          onChange={setId}
        />
      </div>
      <div className="px-4 py-4">
        <p className="text-sm font-bold text-slate-900">{card.verdict}</p>
        <p className="mt-2 text-[11px] leading-relaxed text-slate-600">
          {card.detail}
        </p>
      </div>
    </ModuleShell>
  );
}

export function DsipEvidenceIssues() {
  return (
    <ModuleShell
      kicker="Evidence problems"
      title="No receptor · small IV trials · mixed sleep outcomes · SC PK unknown"
    >
      <dl className="divide-y divide-slate-100">
        {DSIP_EVIDENCE_ISSUES.map(([q, a]) => (
          <div
            key={q}
            className="flex items-start justify-between gap-4 px-4 py-2.5"
          >
            <dt className="text-xs text-slate-500">{q}</dt>
            <dd className="max-w-[58%] text-right text-xs font-bold text-indigo-800">
              {a}
            </dd>
          </div>
        ))}
      </dl>
    </ModuleShell>
  );
}

export function DsipNmolConverter() {
  const [presetId, setPresetId] = useState("25");
  const [weightKg, setWeightKg] = useState("70");

  const preset =
    DSIP_NMOL_PRESETS.find((p) => p.id === presetId) || DSIP_NMOL_PRESETS[0];
  const result = useMemo(
    () =>
      dsipDoseForWeight({
        nmolKg: preset.nmolKg,
        weightKg,
      }),
    [preset.nmolKg, weightKg]
  );

  return (
    <ModuleShell
      kicker="Historical IV dose"
      title="nmol/kg → mcg/kg → total mg (IV research anchor only)"
    >
      <div className="space-y-3 border-b border-slate-100 px-4 py-3">
        <div>
          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
            nmol/kg preset
          </p>
          <ChipGroup
            label="nmol/kg"
            options={DSIP_NMOL_PRESETS.map((p) => ({
              id: p.id,
              label: p.label,
            }))}
            value={presetId}
            onChange={setPresetId}
          />
          <p className="mt-1.5 text-[10px] text-slate-500">{preset.note}</p>
        </div>
        <div>
          <label
            htmlFor="dsip-weight-kg"
            className="mb-1 block text-[10px] font-bold uppercase tracking-wide text-slate-500"
          >
            Body weight (kg)
          </label>
          <input
            id="dsip-weight-kg"
            type="number"
            min="1"
            step="0.1"
            value={weightKg}
            onChange={(e) => setWeightKg(e.target.value)}
            className="w-full max-w-[140px] rounded-lg border border-slate-200 px-3 py-2 text-sm"
          />
        </div>
      </div>
      {result ? (
        <div className="grid gap-3 px-4 py-4 sm:grid-cols-3">
          <div>
            <p className="text-[10px] font-bold uppercase text-slate-500">
              mcg/kg
            </p>
            <p className="text-xl font-bold text-indigo-800">
              {result.mcgKg.toFixed(1)}
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase text-slate-500">
              Total mcg
            </p>
            <p className="text-xl font-bold text-indigo-800">
              {result.totalMcg.toFixed(0)}
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase text-slate-500">
              Total mg (IV)
            </p>
            <p className="text-xl font-bold text-indigo-800">
              {result.totalMg.toFixed(2)} mg
            </p>
          </div>
        </div>
      ) : null}
      <p className="border-t border-slate-100 px-4 py-3 text-[11px] text-slate-600">
        Formula: mcg/kg = nmol/kg × 0.8488. IV historical anchor — not
        interchangeable with fixed SC mcg without measured bioavailability.
      </p>
    </ModuleShell>
  );
}

export function DsipHumanSleepStudies() {
  return (
    <ModuleShell
      kicker="Human sleep literature"
      title="25–30 nmol/kg IV · mixed efficacy · small n"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Study</th>
              <th className="px-3 py-2.5 font-semibold">n</th>
              <th className="px-3 py-2.5 font-semibold">Dose</th>
              <th className="px-3 py-2.5 font-semibold">Finding</th>
              <th className="px-3 py-2.5 font-semibold">Limit</th>
            </tr>
          </thead>
          <tbody>
            {DSIP_HUMAN_SLEEP_STUDIES.map((row) => (
              <tr key={row.study} className="border-t border-slate-50 align-top">
                <td className="px-3 py-2 font-semibold text-slate-800">
                  {row.study}
                </td>
                <td className="px-3 py-2 text-slate-600">{row.n}</td>
                <td className="px-3 py-2 font-semibold text-indigo-800">
                  {row.dose}
                </td>
                <td className="px-3 py-2 text-slate-600">{row.finding}</td>
                <td className="px-3 py-2 text-slate-600">{row.limit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ModuleShell>
  );
}

export function DsipAnecdotalProtocols() {
  const [open, setOpen] = useState("common-sc");
  const row =
    DSIP_ANECDOTAL_PROTOCOLS.find((p) => p.id === open) ||
    DSIP_ANECDOTAL_PROTOCOLS[1];

  return (
    <ModuleShell
      kicker="Reported protocols"
      title="100–400 mcg SC community conventions — no controlled SC sleep trial"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Protocol types"
          options={DSIP_ANECDOTAL_PROTOCOLS.map((p) => ({
            id: p.id,
            label: p.label,
          }))}
          value={open}
          onChange={setOpen}
        />
      </div>
      <dl className="divide-y divide-slate-100 px-4 py-2">
        {[
          ["Dose", row.dose],
          ["Frequency", row.frequency],
          ["Route", row.route],
          ["Duration", row.duration],
          ["Evidence basis", row.basis],
        ].map(([k, v]) => (
          <div key={k} className="flex justify-between gap-4 py-2">
            <dt className="text-xs text-slate-500">{k}</dt>
            <dd className="text-right text-xs font-semibold text-slate-800">
              {v}
            </dd>
          </div>
        ))}
      </dl>
    </ModuleShell>
  );
}

export function DsipClinicalVsAnecdotal() {
  const { clinical, anecdotal } = DSIP_COMPARE;

  return (
    <ModuleShell
      kicker="Evidence split"
      title="Historical IV nmol/kg vs contemporary fixed SC mcg"
    >
      <div className="grid gap-0 md:grid-cols-2">
        <div className="border-b border-slate-100 md:border-b-0 md:border-r">
          <div className="border-b border-slate-100 bg-indigo-50/60 px-4 py-2.5">
            <p className="text-xs font-bold text-indigo-900">{clinical.title}</p>
            <p className="text-[10px] text-indigo-700">{clinical.status}</p>
          </div>
          <dl className="divide-y divide-slate-100">
            {clinical.rows.map(([k, v]) => (
              <div key={k} className="px-4 py-2.5">
                <dt className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
                  {k}
                </dt>
                <dd className="mt-0.5 text-xs text-slate-700">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div>
          <div className="border-b border-slate-100 bg-amber-50/60 px-4 py-2.5">
            <p className="text-xs font-bold text-amber-950">{anecdotal.title}</p>
            <p className="text-[10px] text-amber-800">{anecdotal.status}</p>
          </div>
          <dl className="divide-y divide-slate-100">
            {anecdotal.rows.map(([k, v]) => (
              <div key={k} className="px-4 py-2.5">
                <dt className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
                  {k}
                </dt>
                <dd className="mt-0.5 text-xs text-slate-700">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </ModuleShell>
  );
}

export function DsipReconCalc() {
  const [vialMg, setVialMg] = useState("5");
  const [diluentMl, setDiluentMl] = useState("2");
  const [targetMcg, setTargetMcg] = useState("200");

  const result = useMemo(
    () =>
      dsipScRecon({
        vialMg,
        diluentMl,
        targetMcg,
      }),
    [vialMg, diluentMl, targetMcg]
  );

  return (
    <ModuleShell
      kicker="Reconstitution math"
      title="Vial mg + diluent → mcg/mL → volume for target SC mcg (arithmetic only)"
    >
      <div className="grid gap-3 border-b border-slate-100 px-4 py-3 sm:grid-cols-3">
        <div>
          <label
            htmlFor="dsip-vial-mg"
            className="mb-1 block text-[10px] font-bold uppercase text-slate-500"
          >
            Vial (mg peptide)
          </label>
          <input
            id="dsip-vial-mg"
            type="number"
            min="0.1"
            step="0.1"
            value={vialMg}
            onChange={(e) => setVialMg(e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="dsip-diluent-ml"
            className="mb-1 block text-[10px] font-bold uppercase text-slate-500"
          >
            Diluent (mL)
          </label>
          <input
            id="dsip-diluent-ml"
            type="number"
            min="0.1"
            step="0.1"
            value={diluentMl}
            onChange={(e) => setDiluentMl(e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="dsip-target-mcg"
            className="mb-1 block text-[10px] font-bold uppercase text-slate-500"
          >
            Target dose (mcg)
          </label>
          <input
            id="dsip-target-mcg"
            type="number"
            min="1"
            step="1"
            value={targetMcg}
            onChange={(e) => setTargetMcg(e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
          />
        </div>
      </div>
      {result ? (
        <div className="grid gap-3 px-4 py-4 sm:grid-cols-3">
          <div>
            <p className="text-[10px] font-bold uppercase text-slate-500">
              Concentration
            </p>
            <p className="text-xl font-bold text-indigo-800">
              {result.mcgPerMl.toFixed(0)} mcg/mL
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase text-slate-500">
              Volume
            </p>
            <p className="text-xl font-bold text-indigo-800">
              {result.volumeMl != null ? `${result.volumeMl.toFixed(2)} mL` : "—"}
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase text-slate-500">
              Insulin syringe
            </p>
            <p className="text-xl font-bold text-indigo-800">
              {result.units != null ? `${result.units.toFixed(0)} units` : "—"}
            </p>
          </div>
        </div>
      ) : null}
      <p className="border-t border-slate-100 px-4 py-3 text-[11px] text-slate-600">
        Assumes validated peptide-content assay and sterile/endotoxin-controlled
        product. Does not validate research-vial injection.
      </p>
    </ModuleShell>
  );
}

export function DsipProtocolTimeline() {
  return (
    <ModuleShell
      kicker="Proposed Phase 1b SC design"
      title="SAD 50 → 150 → 300 → 600 mcg · MAD 150/300 mcg × 14 nights + PSG"
    >
      <div className="overflow-x-auto border-b border-slate-100">
        <p className="px-4 pt-3 text-xs font-bold text-slate-800">
          Part A — Single ascending dose (SC, 90 min before bed)
        </p>
        <table className="mt-2 w-full min-w-[420px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2 font-semibold">Cohort</th>
              <th className="px-3 py-2 font-semibold">Dose</th>
              <th className="px-3 py-2 font-semibold">Note</th>
            </tr>
          </thead>
          <tbody>
            {DSIP_FIH_SAD.map((row) => (
              <tr key={row.cohort} className="border-t border-slate-50">
                <td className="px-3 py-2">{row.cohort}</td>
                <td className="px-3 py-2 font-semibold text-indigo-800">
                  {row.mcg} mcg SC
                </td>
                <td className="px-3 py-2 text-slate-600">{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="overflow-x-auto px-4 py-3">
        <p className="text-xs font-bold text-slate-800">
          Part B — Multiple ascending dose (14 nights)
        </p>
        <table className="mt-2 w-full min-w-[400px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2 font-semibold">Arm</th>
              <th className="px-3 py-2 font-semibold">Dose</th>
              <th className="px-3 py-2 font-semibold">Monitoring</th>
            </tr>
          </thead>
          <tbody>
            {DSIP_FIH_MAD.map((row) => (
              <tr key={row.arm} className="border-t border-slate-50">
                <td className="px-3 py-2">{row.label}</td>
                <td className="px-3 py-2 font-semibold text-indigo-800">
                  {row.mcg === 0 ? "Placebo" : `${row.mcg} mcg nightly`}
                </td>
                <td className="px-3 py-2 text-slate-600">
                  PSG nights 1, 7, 14 · PK · BP/HR
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-3 text-[11px] text-slate-600">
          Requires GMP SC formulation, GLP tox by intended route, validated
          LC-MS/MS, and IRB/regulatory approval — not a personal protocol.
        </p>
      </div>
    </ModuleShell>
  );
}

export function DsipClaimChecker() {
  const [open, setOpen] = useState(DSIP_CLAIMS[0].id);
  const card = DSIP_CLAIMS.find((c) => c.id === open) || DSIP_CLAIMS[0];

  return (
    <ModuleShell
      kicker="Claim checker"
      title="Common DSIP claims vs the evidence record"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Claims"
          options={DSIP_CLAIMS.map((c) => ({
            id: c.id,
            label: c.claim.length > 42 ? `${c.claim.slice(0, 40)}…` : c.claim,
          }))}
          value={open}
          onChange={setOpen}
        />
      </div>
      <div className="px-4 py-4">
        <p className="text-sm font-bold text-slate-900">{card.claim}</p>
        <p className="mt-2 inline-block rounded-full bg-indigo-50 px-2.5 py-0.5 text-[11px] font-bold text-indigo-800">
          {card.verdict}
        </p>
        <p className="mt-2 text-[11px] leading-relaxed text-slate-600">
          {card.detail}
        </p>
      </div>
    </ModuleShell>
  );
}

export function DsipEvidenceLadder() {
  return (
    <ModuleShell
      kicker="Dosage evidence ladder"
      title="IV human exposure exists · SC sleep dose unvalidated"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Level</th>
              <th className="px-3 py-2.5 font-semibold">What exists</th>
              <th className="px-3 py-2.5 font-semibold">Confidence</th>
            </tr>
          </thead>
          <tbody>
            {DSIP_EVIDENCE_LADDER.map((row) => (
              <tr key={row.level} className="border-t border-slate-50">
                <td className="px-3 py-2 font-medium text-slate-800">
                  {row.level}
                </td>
                <td className="px-3 py-2 text-slate-600">{row.exists}</td>
                <td className="px-3 py-2 font-semibold text-indigo-800">
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

export function DsipAdverseEventTable() {
  const [mode, setMode] = useState("simple");

  return (
    <ModuleShell
      kicker="Safety monitoring"
      title="IV withdrawal hypotension · no controlled SC incidence table"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Detail level"
          options={[
            { id: "simple", label: "Summary" },
            { id: "full", label: "Monitoring domains" },
          ]}
          value={mode}
          onChange={setMode}
        />
      </div>
      {mode === "simple" ? (
        <dl className="divide-y divide-slate-100">
          {DSIP_AE_SIMPLE.map((row) => (
            <div key={row.category} className="px-4 py-3">
              <dt className="text-xs font-bold text-slate-800">
                {row.category}
              </dt>
              <dd className="mt-1 text-[11px] text-slate-600">{row.note}</dd>
            </div>
          ))}
        </dl>
      ) : (
        <dl className="divide-y divide-slate-100">
          {DSIP_AE_FULL.map((row) => (
            <div key={row.domain} className="px-4 py-3">
              <dt className="text-xs font-bold text-slate-800">{row.domain}</dt>
              <dd className="mt-1 text-[11px] text-slate-600">{row.items}</dd>
            </div>
          ))}
        </dl>
      )}
    </ModuleShell>
  );
}
