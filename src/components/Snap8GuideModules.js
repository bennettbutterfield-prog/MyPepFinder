"use client";

import { useMemo, useState } from "react";
import {
  SNAP8_ANECDOTAL_PROTOCOLS,
  SNAP8_AE_FULL,
  SNAP8_AE_SIMPLE,
  SNAP8_APPLIED_MASS,
  SNAP8_CLAIMS,
  SNAP8_COMPARE,
  SNAP8_CUMULATIVE_PRESETS,
  SNAP8_EVIDENCE_HIERARCHY,
  SNAP8_EVIDENCE_LADDER,
  SNAP8_HUMAN_STUDIES,
  SNAP8_IDENTITY,
  SNAP8_MICRONEEDLE_VS_TOPICAL,
  SNAP8_PRECLINICAL,
  SNAP8_PROTOCOL_ARMS,
  SNAP8_SOLUTION_TABLE,
  snap8AppliedDose,
  snap8CumulativeTopical,
  snap8McgPerGram,
  snap8PurePctFromSolutionPct,
} from "@/data/snap-8-dosage-guide";

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

export function Snap8IdentityGate() {
  const [id, setId] = useState("snap8");
  const card = SNAP8_IDENTITY.find((c) => c.id === id) || SNAP8_IDENTITY[0];

  return (
    <ModuleShell
      kicker="Identity gate"
      title="SNAP-8 vs Argireline · botulinum toxin · injection vials"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Identity check"
          options={SNAP8_IDENTITY.map((c) => ({ id: c.id, label: c.label }))}
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

export function Snap8SolutionMath() {
  return (
    <ModuleShell
      kicker="Concentration math"
      title="3–10% supplier solution → 0.0015%–0.005% pure peptide"
    >
      <div className="border-b border-slate-100 bg-amber-50/50 px-4 py-3">
        <p className="text-[11px] leading-relaxed text-amber-950">
          SNAP-8 Peptide Solution C is <strong>0.05% active peptide</strong>.
          Finished product uses <strong>3%–10% of that solution</strong>, not 3%–10%
          pure powder.
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Solution in formula</th>
              <th className="px-3 py-2.5 font-semibold">Pure peptide %</th>
              <th className="px-3 py-2.5 font-semibold">mcg/g</th>
              <th className="px-3 py-2.5 font-semibold">Solution / 100 g</th>
              <th className="px-3 py-2.5 font-semibold">Peptide / 100 g</th>
            </tr>
          </thead>
          <tbody>
            {SNAP8_SOLUTION_TABLE.map((row) => (
              <tr key={row.solutionPct} className="border-t border-slate-50 align-top">
                <td className="px-3 py-2 font-semibold text-indigo-800">
                  {row.solutionPct}% of 0.05% premix
                </td>
                <td className="px-3 py-2 text-slate-800">{row.purePct}%</td>
                <td className="px-3 py-2 font-semibold text-slate-900">
                  {row.mcgPerG} mcg/g
                </td>
                <td className="px-3 py-2 text-slate-600">{row.solutionPer100g}</td>
                <td className="px-3 py-2 text-slate-600">{row.peptidePer100g}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="border-t border-slate-100 px-4 py-3">
        <p className="text-[10px] text-slate-500">
          Formula: pure % = solution % × 0.0005. Example: 10% × 0.0005 = 0.005%.
        </p>
      </div>
    </ModuleShell>
  );
}

export function Snap8UnitConverter() {
  const [solutionPct, setSolutionPct] = useState("10");
  const purePct = useMemo(
    () => snap8PurePctFromSolutionPct(Number(solutionPct)),
    [solutionPct]
  );
  const mcgPerG = useMemo(
    () => (purePct != null ? snap8McgPerGram(purePct) : null),
    [purePct]
  );

  return (
    <ModuleShell
      kicker="Unit converter"
      title="Supplier solution % → pure peptide % → mcg/g"
    >
      <div className="grid gap-4 px-4 py-4 md:grid-cols-2">
        <div>
          <label className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
            % of 0.05% supplier solution in formula
          </label>
          <input
            type="number"
            min="0"
            step="0.1"
            value={solutionPct}
            onChange={(e) => setSolutionPct(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
          />
        </div>
        <div className="rounded-lg bg-indigo-50 px-4 py-3">
          <p className="text-[10px] font-bold uppercase tracking-wide text-indigo-600">
            Converted
          </p>
          {purePct != null && mcgPerG != null ? (
            <>
              <p className="mt-1 text-lg font-bold text-indigo-950">
                {purePct.toFixed(4)}% pure peptide
              </p>
              <p className="text-sm text-indigo-800">{mcgPerG} mcg/g</p>
            </>
          ) : (
            <p className="mt-1 text-sm text-slate-500">Enter a valid percentage</p>
          )}
        </div>
      </div>
    </ModuleShell>
  );
}

export function Snap8AppliedMassCalc() {
  const [purePct, setPurePct] = useState("0.005");
  const [grams, setGrams] = useState("0.05");
  const result = useMemo(
    () =>
      snap8AppliedDose({
        purePct: Number(purePct),
        gramsApplied: Number(grams),
      }),
    [purePct, grams]
  );

  return (
    <ModuleShell
      kicker="Application calculator"
      title="Placed-on-skin micrograms = concentration × grams applied"
    >
      <div className="grid gap-4 border-b border-slate-100 px-4 py-4 md:grid-cols-2">
        <div>
          <label className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Pure peptide % w/w
          </label>
          <input
            type="number"
            min="0"
            step="0.0001"
            value={purePct}
            onChange={(e) => setPurePct(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Grams applied per site
          </label>
          <input
            type="number"
            min="0"
            step="0.01"
            value={grams}
            onChange={(e) => setGrams(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
          />
        </div>
      </div>
      {result && (
        <div className="bg-indigo-50/60 px-4 py-4">
          <p className="text-xs font-bold text-indigo-950">
            {result.totalMcg.toFixed(2)} mcg placed per application
          </p>
          <p className="mt-1 text-[11px] text-indigo-800">
            ({result.mcgPerGram} mcg/g × {result.gramsApplied} g) — placed dose, not
            absorbed dose
          </p>
        </div>
      )}
      <div className="overflow-x-auto border-t border-slate-100">
        <table className="w-full min-w-[480px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Pure %</th>
              <th className="px-3 py-2.5 font-semibold">0.05 g</th>
              <th className="px-3 py-2.5 font-semibold">0.25 g</th>
              <th className="px-3 py-2.5 font-semibold">0.50 g</th>
            </tr>
          </thead>
          <tbody>
            {SNAP8_APPLIED_MASS.map((row) => (
              <tr key={row.purePct} className="border-t border-slate-50">
                <td className="px-3 py-2 font-semibold text-slate-800">
                  {row.purePct}%
                </td>
                <td className="px-3 py-2 text-slate-600">{row.g005} mcg</td>
                <td className="px-3 py-2 text-slate-600">{row.g025} mcg</td>
                <td className="px-3 py-2 text-slate-600">{row.g050} mcg</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ModuleShell>
  );
}

export function Snap8HumanStudies() {
  return (
    <ModuleShell
      kicker="Human evidence"
      title="Manufacturer topical · combination serums · microneedle patches"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Study</th>
              <th className="px-3 py-2.5 font-semibold">Concentration</th>
              <th className="px-3 py-2.5 font-semibold">Schedule</th>
              <th className="px-3 py-2.5 font-semibold">Finding</th>
            </tr>
          </thead>
          <tbody>
            {SNAP8_HUMAN_STUDIES.map((row) => (
              <tr key={row.study} className="border-t border-slate-50 align-top">
                <td className="px-3 py-2 font-semibold text-slate-800">
                  {row.study}
                  <span className="mt-0.5 block text-[10px] font-normal text-slate-500">
                    n={row.n}
                  </span>
                </td>
                <td className="px-3 py-2 text-indigo-800">
                  {row.concentration}
                  <span className="mt-0.5 block text-[10px] text-slate-500">
                    {row.purePct}
                  </span>
                </td>
                <td className="px-3 py-2 text-slate-600">{row.schedule}</td>
                <td className="px-3 py-2 text-slate-600">{row.finding}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ModuleShell>
  );
}

export function Snap8MicroneedleVsTopical() {
  return (
    <ModuleShell
      kicker="Route comparison"
      title="Conventional topical vs microneedle matrix — not dose-equivalent"
    >
      <dl className="divide-y divide-slate-100">
        {SNAP8_MICRONEEDLE_VS_TOPICAL.map((row) => (
          <div key={row.feature} className="px-4 py-2.5">
            <dt className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
              {row.feature}
            </dt>
            <dd className="mt-0.5 text-xs text-slate-700">{row.value}</dd>
          </div>
        ))}
      </dl>
    </ModuleShell>
  );
}

export function Snap8EvidenceHierarchy() {
  return (
    <ModuleShell
      kicker="Evidence tiers"
      title="From approved drug label to unsupported injection claims"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Tier</th>
              <th className="px-3 py-2.5 font-semibold">Source</th>
              <th className="px-3 py-2.5 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {SNAP8_EVIDENCE_HIERARCHY.map(([tier, source, status]) => (
              <tr key={tier} className="border-t border-slate-50 align-top">
                <td className="px-3 py-2 font-semibold text-slate-800">{tier}</td>
                <td className="px-3 py-2 text-indigo-800">{source}</td>
                <td className="px-3 py-2 text-slate-600">{status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ModuleShell>
  );
}

export function Snap8AnecdotalProtocols() {
  const [id, setId] = useState("supplier-high");
  const row =
    SNAP8_ANECDOTAL_PROTOCOLS.find((p) => p.id === id) ||
    SNAP8_ANECDOTAL_PROTOCOLS[0];

  return (
    <ModuleShell
      kicker="Protocol map"
      title="Supplier range · market serums · proposed RCT · unsupported injection"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Protocol"
          options={SNAP8_ANECDOTAL_PROTOCOLS.map((p) => ({
            id: p.id,
            label: p.label,
          }))}
          value={id}
          onChange={setId}
        />
      </div>
      <dl className="divide-y divide-slate-100 px-4">
        <div className="py-2.5">
          <dt className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Dose / concentration
          </dt>
          <dd className="mt-0.5 text-sm font-semibold text-slate-900">{row.dose}</dd>
          <dd className="text-xs text-indigo-800">{row.pure}</dd>
        </div>
        <div className="py-2.5">
          <dt className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Frequency
          </dt>
          <dd className="mt-0.5 text-xs text-slate-700">{row.frequency}</dd>
        </div>
        <div className="py-2.5">
          <dt className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Evidence basis
          </dt>
          <dd className="mt-0.5 text-xs text-slate-600">{row.basis}</dd>
        </div>
      </dl>
    </ModuleShell>
  );
}

export function Snap8CumulativeCalc() {
  const [preset, setPreset] = useState("005-bid-28");
  const [mcgPerApp, setMcgPerApp] = useState("2.5");
  const [freq, setFreq] = useState("2");
  const [days, setDays] = useState("28");

  const selected = SNAP8_CUMULATIVE_PRESETS.find((p) => p.id === preset);
  const result = useMemo(
    () =>
      snap8CumulativeTopical({
        mcgPerApplication: Number(mcgPerApp),
        applicationsPerDay: Number(freq),
        days: Number(days),
      }),
    [mcgPerApp, freq, days]
  );

  function applyPreset(id) {
    setPreset(id);
    const p = SNAP8_CUMULATIVE_PRESETS.find((x) => x.id === id);
    if (p) {
      setMcgPerApp(String(p.mcgPerApp));
      setFreq(String(p.freq));
      setDays(String(p.days));
    }
  }

  return (
    <ModuleShell
      kicker="Cumulative exposure"
      title="Placed-on-skin micrograms over a treatment period"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Preset"
          options={SNAP8_CUMULATIVE_PRESETS.map((p) => ({
            id: p.id,
            label: p.label,
          }))}
          value={preset}
          onChange={applyPreset}
        />
      </div>
      <div className="grid gap-3 px-4 py-4 md:grid-cols-3">
        <div>
          <label className="text-[10px] font-bold uppercase text-slate-500">
            mcg / application
          </label>
          <input
            type="number"
            value={mcgPerApp}
            onChange={(e) => setMcgPerApp(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label className="text-[10px] font-bold uppercase text-slate-500">
            Applications / day
          </label>
          <input
            type="number"
            value={freq}
            onChange={(e) => setFreq(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label className="text-[10px] font-bold uppercase text-slate-500">
            Days
          </label>
          <input
            type="number"
            value={days}
            onChange={(e) => setDays(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
          />
        </div>
      </div>
      {result && (
        <div className="border-t border-slate-100 bg-indigo-50/60 px-4 py-4">
          <p className="text-sm font-bold text-indigo-950">
            {result.totalMcg.toFixed(1)} mcg total placed ({result.totalMg.toFixed(3)}{" "}
            mg)
          </p>
          <p className="mt-1 text-[11px] text-indigo-800">
            {result.dailyMcg} mcg/day · {selected?.label || "custom"}
          </p>
        </div>
      )}
    </ModuleShell>
  );
}

export function Snap8ClinicalVsAnecdotal() {
  const { clinical, anecdotal } = SNAP8_COMPARE;
  return (
    <ModuleShell
      kicker="Evidence split"
      title="Reconstructable topical studies vs market and injection claims"
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

export function Snap8PreclinicalDoses() {
  return (
    <ModuleShell
      kicker="Preclinical anchors"
      title="SNARE assays and cell baths — bypass intact skin"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Model</th>
              <th className="px-3 py-2.5 font-semibold">Dose</th>
              <th className="px-3 py-2.5 font-semibold">Outcome</th>
            </tr>
          </thead>
          <tbody>
            {SNAP8_PRECLINICAL.map((row) => (
              <tr key={row.model} className="border-t border-slate-50 align-top">
                <td className="px-3 py-2 text-slate-800">{row.model}</td>
                <td className="px-3 py-2 font-semibold text-indigo-800">{row.dose}</td>
                <td className="px-3 py-2 text-slate-600">{row.outcome}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ModuleShell>
  );
}

export function Snap8ProtocolTimeline() {
  return (
    <ModuleShell
      kicker="Proposed split-face RCT"
      title="180 participants · 0.0015 / 0.003 / 0.005% · BID × 12 weeks · 2 mg/cm²"
    >
      <div className="overflow-x-auto border-b border-slate-100 px-4 py-3">
        <p className="text-xs font-bold text-slate-800">
          Cumulative placed dose at 0.05 g per side · twice daily
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Arm</th>
              <th className="px-3 py-2.5 font-semibold">Pure %</th>
              <th className="px-3 py-2.5 font-semibold">mcg/app</th>
              <th className="px-3 py-2.5 font-semibold">mcg/day</th>
              <th className="px-3 py-2.5 font-semibold">12-wk total</th>
            </tr>
          </thead>
          <tbody>
            {SNAP8_PROTOCOL_ARMS.map((row) => (
              <tr key={row.arm} className="border-t border-slate-50">
                <td className="px-3 py-2 font-semibold text-slate-800">{row.arm}</td>
                <td className="px-3 py-2 text-slate-600">
                  {row.purePct ? `${row.purePct}%` : "—"}
                </td>
                <td className="px-3 py-2 text-indigo-800">{row.mcgPerApp || "—"}</td>
                <td className="px-3 py-2 text-slate-600">{row.mcgPerDay || "—"}</td>
                <td className="px-3 py-2 font-semibold text-slate-900">
                  {row.wk12Total ? `${row.wk12Total} mcg` : "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="border-t border-slate-100 px-4 py-3">
        <p className="text-[10px] leading-relaxed text-slate-500">
          Week 16 persistence visit · 3D profilometry primary · no microneedling or
          injection · vehicle-controlled split-face design.
        </p>
      </div>
    </ModuleShell>
  );
}

export function Snap8ClaimChecker() {
  const [id, setId] = useState("10pct-pure");
  const claim = SNAP8_CLAIMS.find((c) => c.id === id) || SNAP8_CLAIMS[0];
  const verdictColor =
    claim.verdict === "False" || claim.verdict === "Unsupported"
      ? "text-red-700"
      : claim.verdict === "Misleading"
        ? "text-amber-800"
        : "text-slate-700";

  return (
    <ModuleShell kicker="Claim checker" title="Marketing statements vs evidence">
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Claim"
          options={SNAP8_CLAIMS.map((c) => ({ id: c.id, label: c.claim.slice(0, 42) + "…" }))}
          value={id}
          onChange={setId}
        />
      </div>
      <div className="px-4 py-4">
        <p className="text-xs italic text-slate-600">&ldquo;{claim.claim}&rdquo;</p>
        <p className={`mt-2 text-sm font-bold ${verdictColor}`}>{claim.verdict}</p>
        <p className="mt-2 text-[11px] leading-relaxed text-slate-600">{claim.detail}</p>
      </div>
    </ModuleShell>
  );
}

export function Snap8EvidenceLadder() {
  return (
    <ModuleShell
      kicker="Confidence ladder"
      title="What is known vs uncertain about SNAP-8 dosage"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Question</th>
              <th className="px-3 py-2.5 font-semibold">Evidence</th>
              <th className="px-3 py-2.5 font-semibold">Confidence</th>
            </tr>
          </thead>
          <tbody>
            {SNAP8_EVIDENCE_LADDER.map((row) => (
              <tr key={row.level} className="border-t border-slate-50 align-top">
                <td className="px-3 py-2 font-semibold text-slate-800">{row.level}</td>
                <td className="px-3 py-2 text-slate-600">{row.exists}</td>
                <td className="px-3 py-2 text-indigo-800">{row.confidence}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ModuleShell>
  );
}

export function Snap8AdverseEvents() {
  const [view, setView] = useState("simple");

  return (
    <ModuleShell
      kicker="Safety"
      title="Tolerability in small studies · topical risks · product quality"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="View"
          options={[
            { id: "simple", label: "Summary" },
            { id: "full", label: "Monitoring domains" },
          ]}
          value={view}
          onChange={setView}
        />
      </div>
      {view === "simple" ? (
        <dl className="divide-y divide-slate-100 px-4">
          {SNAP8_AE_SIMPLE.map((row) => (
            <div key={row.category} className="py-2.5">
              <dt className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
                {row.category}
              </dt>
              <dd className="mt-0.5 text-xs text-slate-700">{row.note}</dd>
            </div>
          ))}
        </dl>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[480px] border-collapse text-left text-xs">
            <thead>
              <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
                <th className="px-3 py-2.5 font-semibold">Domain</th>
                <th className="px-3 py-2.5 font-semibold">Monitoring</th>
              </tr>
            </thead>
            <tbody>
              {SNAP8_AE_FULL.map((row) => (
                <tr key={row.domain} className="border-t border-slate-50 align-top">
                  <td className="px-3 py-2 font-semibold text-slate-800">
                    {row.domain}
                  </td>
                  <td className="px-3 py-2 text-slate-600">{row.items}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </ModuleShell>
  );
}
