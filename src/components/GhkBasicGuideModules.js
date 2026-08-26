"use client";

import { useMemo, useState } from "react";
import {
  GHK_BASIC_AE_FULL,
  GHK_BASIC_AE_SIMPLE,
  GHK_BASIC_CLAIMS,
  GHK_BASIC_COMPARE,
  GHK_BASIC_EVIDENCE_LADDER,
  GHK_BASIC_HUMAN_STATUS,
  GHK_BASIC_IDENTITY,
  GHK_BASIC_PROTOCOL_PHASES,
  ghkBasicAcetateToPeptide,
  ghkBasicAmountFromVial,
  ghkBasicPeptideToAcetate,
} from "@/data/ghk-basic-dosage-guide";

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

export function GhkBasicIdentityGate() {
  const [id, setId] = useState("correct");
  const card =
    GHK_BASIC_IDENTITY.find((c) => c.id === id) || GHK_BASIC_IDENTITY[0];

  return (
    <ModuleShell
      kicker="Identity gate"
      title="Confirm copper-free GHK — not GHK-Cu, unclear Tripeptide-1 stocks, or unresolved salt mass"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Identity check"
          options={GHK_BASIC_IDENTITY.map((c) => ({
            id: c.id,
            label: c.label,
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

export function GhkBasicHumanStatus() {
  return (
    <ModuleShell
      kicker="Human evidence status"
      title="No administered human dose-finding trial — cell and community layers only"
    >
      <dl className="divide-y divide-slate-100">
        {GHK_BASIC_HUMAN_STATUS.map(([q, a]) => (
          <div
            key={q}
            className="flex items-start justify-between gap-4 px-4 py-2.5"
          >
            <dt className="text-xs text-slate-500">{q}</dt>
            <dd className="max-w-[58%] text-right text-xs font-bold text-teal-800">
              {a}
            </dd>
          </div>
        ))}
      </dl>
    </ModuleShell>
  );
}

export function GhkBasicAcetateCalc() {
  const [mode, setMode] = useState("salt");
  const [value, setValue] = useState("1");
  const result = useMemo(() => {
    if (mode === "salt") return ghkBasicAcetateToPeptide(value);
    return ghkBasicPeptideToAcetate(value);
  }, [mode, value]);

  return (
    <ModuleShell
      kicker="Salt ↔ peptide math"
      title="Theoretical monoacetate conversion — apply only when COA reports total salt mass"
    >
      <div className="space-y-3 border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Conversion direction"
          options={[
            { id: "salt", label: "Salt → peptide" },
            { id: "peptide", label: "Peptide → salt" },
          ]}
          value={mode}
          onChange={setMode}
        />
        <label className="block text-[11px] font-semibold text-slate-700">
          {mode === "salt" ? "Monoacetate salt (mg)" : "Free-GHK equivalent (mg)"}
          <input
            type="number"
            min="0"
            step="0.1"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-900"
          />
        </label>
      </div>
      {result ? (
        <div className="grid gap-3 p-4 sm:grid-cols-2">
          {mode === "salt" ? (
            <>
              <div className="rounded-lg border border-teal-100 bg-teal-50 px-3 py-3">
                <p className="text-[10px] font-bold uppercase tracking-wide text-teal-700">
                  Peptide moiety
                </p>
                <p className="mt-1 text-lg font-bold text-teal-900">
                  {result.peptideMg.toFixed(3)} mg
                </p>
              </div>
              <div className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-3">
                <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
                  Acetate-associated
                </p>
                <p className="mt-1 text-lg font-bold text-slate-900">
                  {result.acetateMg.toFixed(3)} mg
                </p>
              </div>
            </>
          ) : (
            <div className="rounded-lg border border-teal-100 bg-teal-50 px-3 py-3 sm:col-span-2">
              <p className="text-[10px] font-bold uppercase tracking-wide text-teal-700">
                Theoretical monoacetate salt
              </p>
              <p className="mt-1 text-lg font-bold text-teal-900">
                {result.saltMg.toFixed(3)} mg
              </p>
            </div>
          )}
        </div>
      ) : null}
      <p className="border-t border-amber-100 bg-amber-50 px-4 py-3 text-[11px] font-semibold text-amber-950">
        ≈85% peptide if label is pure monoacetate salt mass (340.38/400.43). Do not
        apply if the COA already reports peptide-equivalent content.
      </p>
    </ModuleShell>
  );
}

export function GhkBasicClinicalVsAnecdotal() {
  const { clinical, pilot, anecdotal } = GHK_BASIC_COMPARE;

  return (
    <ModuleShell
      kicker="Evidence split"
      title="Published experiments vs proposed pilot vs community milligram schedules"
    >
      <div className="grid gap-0 lg:grid-cols-3">
        {[clinical, pilot, anecdotal].map((col, idx) => (
          <div
            key={col.title}
            className={`p-4 ${
              idx === 0
                ? "border-b border-slate-100 lg:border-b-0 lg:border-r"
                : idx === 1
                  ? "border-b border-slate-100 bg-slate-50 lg:border-b-0 lg:border-r"
                  : ""
            }`}
          >
            <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
              {col.title}
            </p>
            <p className="mt-1 text-sm font-bold text-teal-800">{col.status}</p>
            <dl className="mt-3 space-y-2">
              {col.rows.map(([k, v]) => (
                <div key={k}>
                  <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                    {k}
                  </dt>
                  <dd className="text-[11px] text-slate-700">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </ModuleShell>
  );
}

export function GhkBasicProtocolTimeline() {
  const [id, setId] = useState("w1-2");
  const phase =
    GHK_BASIC_PROTOCOL_PHASES.find((p) => p.id === id) ||
    GHK_BASIC_PROTOCOL_PHASES[1];

  return (
    <ModuleShell
      kicker="Proposed pilot"
      title="1 mg free-GHK equivalent · 5×/week · 6 weeks · then 4 weeks off"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Protocol phase"
          options={GHK_BASIC_PROTOCOL_PHASES.map((p) => ({
            id: p.id,
            label: p.phase,
          }))}
          value={id}
          onChange={setId}
        />
      </div>
      <div className="px-4 py-4">
        <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
          Weeks {phase.weeks}
        </p>
        <p className="mt-1 text-2xl font-bold text-teal-800">{phase.amount}</p>
        <p className="mt-1 text-[11px] font-semibold text-slate-800">
          {phase.frequency} · weekly {phase.weekly} · phase {phase.phaseTotal}
        </p>
        <p className="mt-2 text-[11px] text-slate-600">{phase.purpose}</p>
      </div>
      <p className="border-t border-amber-100 bg-amber-50 px-4 py-3 text-[11px] font-semibold text-amber-950">
        30 administrations · 30 mg cumulative free-GHK equivalent · no escalation ·
        missed doses skipped (not doubled). Anchored to community range — not a
        validated treatment.
      </p>
    </ModuleShell>
  );
}

export function GhkBasicReconCalc() {
  const [diluent, setDiluent] = useState("2.5");
  const [target, setTarget] = useState("1");

  const result = useMemo(
    () =>
      ghkBasicAmountFromVial({
        vialMg: 50,
        diluentMl: Number(diluent),
        targetMg: Number(target),
      }),
    [diluent, target]
  );

  return (
    <ModuleShell
      kicker="50 mg vial reconstitution"
      title="2 / 2.5 / 3 / 5 mL presets — units are volume, not peptide dose"
    >
      <div className="space-y-3 border-b border-slate-100 px-4 py-3">
        <div>
          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Final volume
          </p>
          <ChipGroup
            label="Diluent"
            options={[
              { id: "2", label: "2 mL (25 mg/mL)" },
              { id: "2.5", label: "2.5 mL (20 mg/mL)" },
              { id: "3", label: "3 mL (~16.7 mg/mL)" },
              { id: "5", label: "5 mL (10 mg/mL)" },
            ]}
            value={diluent}
            onChange={setDiluent}
          />
        </div>
        <label className="block text-[11px] font-semibold text-slate-700">
          Target vial-label amount (mg)
          <input
            type="number"
            min="0"
            step="0.5"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-900"
          />
        </label>
      </div>
      {result ? (
        <div className="px-4 py-4">
          <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
            {result.concMgPerMl.toFixed(2)} mg/mL · {result.mgPerUnit.toFixed(3)}{" "}
            mg per U-100 unit
          </p>
          <p className="mt-1 text-2xl font-bold text-teal-800">
            {result.volumeMl.toFixed(3)} mL · {result.units.toFixed(1)} units
          </p>
          {diluent === "2.5" && Number(target) === 1 ? (
            <p className="mt-2 text-[11px] font-semibold text-teal-800">
              Matches common reference: 1 mg = 5 units at 2.5 mL.
            </p>
          ) : null}
          {diluent === "5" ? (
            <p className="mt-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-[11px] font-semibold text-amber-950">
              Confirm the vial can physically hold 5 mL — many 2–3 mL peptide vials
              cannot.
            </p>
          ) : null}
        </div>
      ) : null}
    </ModuleShell>
  );
}

export function GhkBasicSameUnits() {
  const rows = [
    { prep: "50 mg → 2 mL", conc: "25 mg/mL", in10: "2.5 mg" },
    { prep: "50 mg → 2.5 mL", conc: "20 mg/mL", in10: "2.0 mg" },
    { prep: "50 mg → 3 mL", conc: "16.67 mg/mL", in10: "1.67 mg" },
    { prep: "50 mg → 5 mL", conc: "10 mg/mL", in10: "1.0 mg" },
  ];

  return (
    <ModuleShell
      kicker="Same-units problem"
      title="“Take 10 units” is incomplete without vial content and final volume"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[420px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2 font-semibold">Preparation</th>
              <th className="px-3 py-2 font-semibold">Concentration</th>
              <th className="px-3 py-2 font-semibold">Amount in 10 units</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.prep} className="border-t border-slate-50">
                <td className="px-3 py-2 font-medium text-slate-800">
                  {row.prep}
                </td>
                <td className="px-3 py-2 text-slate-600">{row.conc}</td>
                <td className="px-3 py-2 font-semibold text-teal-800">
                  {row.in10}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ModuleShell>
  );
}

export function GhkBasicClaimChecker() {
  const [open, setOpen] = useState(GHK_BASIC_CLAIMS[0].id);
  const card =
    GHK_BASIC_CLAIMS.find((c) => c.id === open) || GHK_BASIC_CLAIMS[0];

  return (
    <ModuleShell
      kicker="Claim checker"
      title="Common GHK Basic claims vs the evidence record"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Claims"
          options={GHK_BASIC_CLAIMS.map((c) => ({
            id: c.id,
            label: c.claim.length > 40 ? `${c.claim.slice(0, 38)}…` : c.claim,
          }))}
          value={open}
          onChange={setOpen}
        />
      </div>
      <div className="px-4 py-4">
        <p className="text-sm font-bold text-slate-900">{card.claim}</p>
        <p className="mt-2 inline-block rounded-full bg-teal-50 px-2.5 py-0.5 text-[11px] font-bold text-teal-800">
          {card.verdict}
        </p>
        <p className="mt-2 text-[11px] leading-relaxed text-slate-600">
          {card.detail}
        </p>
      </div>
    </ModuleShell>
  );
}

export function GhkBasicEvidenceLadder() {
  return (
    <ModuleShell
      kicker="Dosage evidence ladder"
      title="Overall GHK Basic dosing evidence: poorly established"
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
            {GHK_BASIC_EVIDENCE_LADDER.map((row) => (
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

export function GhkBasicAdverseEventTable() {
  const [mode, setMode] = useState("simple");

  return (
    <ModuleShell
      kicker="Safety monitoring"
      title="Incidence unknown — track local reactions, hypersensitivity, immune/liver signals, and product identity"
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
          {GHK_BASIC_AE_SIMPLE.map((row) => (
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
          {GHK_BASIC_AE_FULL.map((row) => (
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
