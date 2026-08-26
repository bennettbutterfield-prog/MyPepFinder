"use client";

import { useMemo, useState } from "react";
import {
  GHK_CU_POWDER_COPPER_FRACTION,
  GHK_TOPICAL_POWDER_APPLIED_PRESETS,
  GHK_TOPICAL_POWDER_ASSAY_PRESETS,
  GHK_TOPICAL_POWDER_AE_FULL,
  GHK_TOPICAL_POWDER_AE_SIMPLE,
  GHK_TOPICAL_POWDER_BATCH_PRESETS,
  GHK_TOPICAL_POWDER_CLAIMS,
  GHK_TOPICAL_POWDER_COMPARE,
  GHK_TOPICAL_POWDER_CONCENTRATION_LADDER,
  GHK_TOPICAL_POWDER_EVIDENCE_LADDER,
  GHK_TOPICAL_POWDER_HUMAN_DOSES,
  GHK_TOPICAL_POWDER_IDENTITY,
  GHK_TOPICAL_POWDER_PROTOCOL_ARMS,
  GHK_TOPICAL_POWDER_PROTOCOL_PHASES,
  ghkCuAppliedActive,
  ghkCuBatchActiveMg,
  ghkCuNestedPercent,
  ghkCuPowderRequired,
} from "@/data/ghk-cu-topical-powder-dosage-guide";

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

export function GhkTopicalPowderIdentityGate() {
  const [id, setId] = useState("ghk-cu-powder");
  const card =
    GHK_TOPICAL_POWDER_IDENTITY.find((c) => c.id === id) ||
    GHK_TOPICAL_POWDER_IDENTITY[0];

  return (
    <ModuleShell
      kicker="Identity gate"
      title="Confirm GHK-Cu powder — not GHK Basic, prezatide, trade blend, or injectable vial"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Identity check"
          options={GHK_TOPICAL_POWDER_IDENTITY.map((c) => ({
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

export function GhkTopicalPowderHumanDoses() {
  return (
    <ModuleShell
      kicker="Human topical exposures"
      title="2%/4% wound gels · 0.1% ongoing trial · cosmetic dose not established"
    >
      <dl className="divide-y divide-slate-100">
        {GHK_TOPICAL_POWDER_HUMAN_DOSES.map(([q, a]) => (
          <div
            key={q}
            className="flex items-start justify-between gap-4 px-4 py-2.5"
          >
            <dt className="text-xs text-slate-500">{q}</dt>
            <dd className="max-w-[58%] text-right text-xs font-bold text-violet-800">
              {a}
            </dd>
          </div>
        ))}
      </dl>
    </ModuleShell>
  );
}

export function GhkTopicalPowderConcentrationLadder() {
  return (
    <ModuleShell
      kicker="Concentration landscape"
      title="0.01% proposed facial arms through 4% historical wound gels"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">% w/w</th>
              <th className="px-3 py-2.5 font-semibold">mg/g active</th>
              <th className="px-3 py-2.5 font-semibold">Source</th>
              <th className="px-3 py-2.5 font-semibold">Tier</th>
            </tr>
          </thead>
          <tbody>
            {GHK_TOPICAL_POWDER_CONCENTRATION_LADDER.map((row) => (
              <tr key={row.pct} className="border-t border-slate-50">
                <td className="px-3 py-2 font-semibold text-slate-800">
                  {row.pct}%
                </td>
                <td className="px-3 py-2 text-slate-600">{row.mgPerG} mg/g</td>
                <td className="px-3 py-2 text-slate-600">{row.source}</td>
                <td className="px-3 py-2 font-semibold text-violet-800">
                  {row.tier}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ModuleShell>
  );
}

export function GhkTopicalPowderClinicalVsAnecdotal() {
  const { clinical, anecdotal } = GHK_TOPICAL_POWDER_COMPARE;

  return (
    <ModuleShell
      kicker="Evidence split"
      title="Published/registered research vs market and DIY conventions"
    >
      <div className="grid gap-0 md:grid-cols-2">
        <div className="border-b border-slate-100 md:border-b-0 md:border-r">
          <div className="border-b border-slate-100 bg-violet-50/60 px-4 py-2.5">
            <p className="text-xs font-bold text-violet-900">{clinical.title}</p>
            <p className="text-[10px] text-violet-700">{clinical.status}</p>
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

export function GhkTopicalPowderBatchCalc() {
  const [pctId, setPctId] = useState("0.10");
  const [batchG, setBatchG] = useState("100");
  const preset =
    GHK_TOPICAL_POWDER_BATCH_PRESETS.find((p) => p.id === pctId) ||
    GHK_TOPICAL_POWDER_BATCH_PRESETS[2];
  const result = useMemo(
    () =>
      ghkCuBatchActiveMg({
        percentWw: preset.percentWw,
        batchGrams: Number(batchG),
      }),
    [preset.percentWw, batchG]
  );

  return (
    <ModuleShell
      kicker="Batch math (w/w)"
      title="Target % × batch mass → required active mass"
    >
      <div className="space-y-3 border-b border-slate-100 px-4 py-3">
        <div>
          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Target strength
          </p>
          <ChipGroup
            label="Strength"
            options={GHK_TOPICAL_POWDER_BATCH_PRESETS.map((p) => ({
              id: p.id,
              label: p.label,
            }))}
            value={pctId}
            onChange={setPctId}
          />
        </div>
        <div>
          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Final batch mass (g)
          </p>
          <ChipGroup
            label="Batch size"
            options={[
              { id: "30", label: "30 g" },
              { id: "50", label: "50 g" },
              { id: "100", label: "100 g" },
            ]}
            value={batchG}
            onChange={setBatchG}
          />
        </div>
      </div>
      {result ? (
        <div className="px-4 py-4">
          <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Target GHK-Cu active mass
          </p>
          <p className="mt-1 text-2xl font-bold text-violet-800">
            {result.activeMg.toFixed(2)} mg
          </p>
          <p className="mt-1 text-[11px] text-slate-600">
            {result.mgPerGram.toFixed(3)} mg active per gram ·{" "}
            {result.percentWw}% w/w in {result.batchGrams} g batch
          </p>
          <p className="mt-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-[11px] text-amber-950">
            Divide by powder active fraction in the assay calculator — HPLC area
            purity ≠ active assay.
          </p>
        </div>
      ) : null}
    </ModuleShell>
  );
}

export function GhkTopicalPowderAssayCalc() {
  const [assayId, setAssayId] = useState("0.95");
  const [targetMg, setTargetMg] = useState("100");
  const preset =
    GHK_TOPICAL_POWDER_ASSAY_PRESETS.find((p) => p.id === assayId) ||
    GHK_TOPICAL_POWDER_ASSAY_PRESETS[2];
  const result = useMemo(
    () =>
      ghkCuPowderRequired({
        targetActiveMg: Number(targetMg),
        activeFraction: preset.fraction,
      }),
    [targetMg, preset.fraction]
  );

  return (
    <ModuleShell
      kicker="Assay correction"
      title="Powder mass = target active ÷ active fraction"
    >
      <div className="space-y-3 border-b border-slate-100 px-4 py-3">
        <div>
          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Powder specification
          </p>
          <ChipGroup
            label="Assay"
            options={GHK_TOPICAL_POWDER_ASSAY_PRESETS.map((p) => ({
              id: p.id,
              label: p.label,
            }))}
            value={assayId}
            onChange={setAssayId}
          />
        </div>
        <div>
          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Target active (mg)
          </p>
          <ChipGroup
            label="Target"
            options={[
              { id: "10", label: "10 mg" },
              { id: "50", label: "50 mg" },
              { id: "100", label: "100 mg" },
              { id: "1000", label: "1,000 mg" },
            ]}
            value={targetMg}
            onChange={setTargetMg}
          />
        </div>
      </div>
      {result ? (
        <div className="px-4 py-4">
          <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Powder required
          </p>
          <p className="mt-1 text-2xl font-bold text-violet-800">
            {result.powderMg.toFixed(2)} mg
          </p>
          <p className="mt-1 text-[11px] text-slate-600">
            Delivers {result.targetActiveMg} mg active ·{" "}
            {result.nonActiveMg.toFixed(2)} mg non-active mass at{" "}
            {(result.activeFraction * 100).toFixed(1)}% fraction
          </p>
        </div>
      ) : null}
    </ModuleShell>
  );
}

export function GhkTopicalPowderNestedPercent() {
  const [outer, setOuter] = useState("1");
  const [inner, setInner] = useState("1");
  const result = useMemo(
    () =>
      ghkCuNestedPercent({
        outerPercent: Number(outer),
        innerActivePercent: Number(inner),
      }),
    [outer, inner]
  );

  return (
    <ModuleShell
      kicker="Nested percentage"
      title="Trade ingredient % × inner active % → finished active concentration"
    >
      <div className="grid gap-3 border-b border-slate-100 px-4 py-3 sm:grid-cols-2">
        <div>
          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Finished product contains (%)
          </p>
          <ChipGroup
            label="Outer"
            options={[
              { id: "1", label: "1%" },
              { id: "2", label: "2%" },
              { id: "5", label: "5%" },
            ]}
            value={outer}
            onChange={setOuter}
          />
        </div>
        <div>
          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
            …of trade ingredient that is active (%)
          </p>
          <ChipGroup
            label="Inner"
            options={[
              { id: "1", label: "1%" },
              { id: "5", label: "5%" },
              { id: "10", label: "10%" },
              { id: "100", label: "100%" },
            ]}
            value={inner}
            onChange={setInner}
          />
        </div>
      </div>
      {result ? (
        <div className="px-4 py-4">
          <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Effective GHK-Cu active in finished product
          </p>
          <p className="mt-1 text-2xl font-bold text-violet-800">
            {result.effectiveActivePercent.toFixed(4)}% w/w
          </p>
          <p className="mt-1 text-[11px] text-slate-600">
            = {result.mgPerGram.toFixed(4)} mg active per gram (
            {result.outerPercent}% × {result.innerActivePercent}%)
          </p>
        </div>
      ) : null}
    </ModuleShell>
  );
}

export function GhkTopicalPowderAppliedCalc() {
  const [pctId, setPctId] = useState("0.10");
  const [gramsId, setGramsId] = useState("0.50");
  const pct =
    GHK_TOPICAL_POWDER_BATCH_PRESETS.find((p) => p.id === pctId) ||
    GHK_TOPICAL_POWDER_BATCH_PRESETS[2];
  const grams =
    GHK_TOPICAL_POWDER_APPLIED_PRESETS.find((p) => p.id === gramsId) ||
    GHK_TOPICAL_POWDER_APPLIED_PRESETS[1];
  const result = useMemo(
    () =>
      ghkCuAppliedActive({
        percentWw: pct.percentWw,
        productGrams: grams.grams,
      }),
    [pct.percentWw, grams.grams]
  );

  return (
    <ModuleShell
      kicker="Applied dose"
      title="Product mass × concentration → placed-on-skin active mass"
    >
      <div className="space-y-3 border-b border-slate-100 px-4 py-3">
        <div>
          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Finished strength
          </p>
          <ChipGroup
            label="Strength"
            options={GHK_TOPICAL_POWDER_BATCH_PRESETS.slice(0, 4).map((p) => ({
              id: p.id,
              label: p.label,
            }))}
            value={pctId}
            onChange={setPctId}
          />
        </div>
        <div>
          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Application mass
          </p>
          <ChipGroup
            label="Mass"
            options={GHK_TOPICAL_POWDER_APPLIED_PRESETS.map((p) => ({
              id: p.id,
              label: p.label,
            }))}
            value={gramsId}
            onChange={setGramsId}
          />
        </div>
      </div>
      {result ? (
        <div className="grid gap-3 px-4 py-4 sm:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
              GHK-Cu placed on skin
            </p>
            <p className="mt-1 text-xl font-bold text-violet-800">
              {result.appliedMg.toFixed(3)} mg
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
              Theoretical copper (15.81%)
            </p>
            <p className="mt-1 text-xl font-bold text-violet-800">
              {result.copperMcg.toFixed(1)} µg
            </p>
          </div>
          <p className="sm:col-span-2 text-[11px] text-slate-600">
            Placed-on-skin mass — not absorbed fraction. Protocol uses 0.50 g at
            0.01% / 0.05% / 0.10% w/w.
          </p>
        </div>
      ) : null}
    </ModuleShell>
  );
}

export function GhkTopicalPowderCopperCalc() {
  const presets = [
    { id: "0.05", mg: 0.05 },
    { id: "0.25", mg: 0.25 },
    { id: "0.5", mg: 0.5 },
    { id: "1", mg: 1 },
    { id: "5", mg: 5 },
    { id: "10", mg: 10 },
  ];
  const [id, setId] = useState("0.5");
  const mg = presets.find((p) => p.id === id)?.mg ?? 0.5;
  const copperMcg = mg * GHK_CU_POWDER_COPPER_FRACTION * 1000;

  return (
    <ModuleShell
      kicker="Copper composition"
      title="Theoretical elemental copper from GHK-Cu complex mass (~401.91 g/mol)"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Complex mass"
          options={presets.map((p) => ({
            id: p.id,
            label: `${p.mg} mg`,
          }))}
          value={id}
          onChange={setId}
        />
      </div>
      <div className="px-4 py-4">
        <p className="text-2xl font-bold text-violet-800">
          {copperMcg.toFixed(1)} µg Cu
        </p>
        <p className="mt-1 text-[11px] text-slate-600">
          From {mg} mg GHK-Cu complex at {(GHK_CU_POWDER_COPPER_FRACTION * 100).toFixed(2)}%
          copper fraction — composition only, not absorption.
        </p>
      </div>
    </ModuleShell>
  );
}

export function GhkTopicalPowderProtocolTimeline() {
  return (
    <ModuleShell
      kicker="Proposed protocol"
      title="24-week facial dose-ranging · 0.50 g once daily · GMP finished product"
    >
      <div className="overflow-x-auto border-b border-slate-100">
        <table className="w-full min-w-[480px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Arm</th>
              <th className="px-3 py-2.5 font-semibold">Concentration</th>
              <th className="px-3 py-2.5 font-semibold">Daily active</th>
              <th className="px-3 py-2.5 font-semibold">Theoretical Cu</th>
            </tr>
          </thead>
          <tbody>
            {GHK_TOPICAL_POWDER_PROTOCOL_ARMS.map((row) => (
              <tr key={row.arm} className="border-t border-slate-50">
                <td className="px-3 py-2 font-semibold text-slate-800">
                  {row.arm}
                </td>
                <td className="px-3 py-2 text-slate-600">{row.label}</td>
                <td className="px-3 py-2 text-slate-600">
                  {row.dailyMg} mg / 0.50 g
                </td>
                <td className="px-3 py-2 text-slate-600">
                  {row.copperMcg} µg
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="divide-y divide-slate-100">
        {GHK_TOPICAL_POWDER_PROTOCOL_PHASES.map((phase) => (
          <div key={phase.id} className="px-4 py-3">
            <p className="text-xs font-bold text-slate-800">
              {phase.phase}{" "}
              <span className="font-normal text-slate-500">· {phase.timing}</span>
            </p>
            <p className="mt-1 text-[11px] text-slate-600">{phase.detail}</p>
          </div>
        ))}
      </div>
    </ModuleShell>
  );
}

export function GhkTopicalPowderClaimChecker() {
  const [open, setOpen] = useState(GHK_TOPICAL_POWDER_CLAIMS[0].id);
  const card =
    GHK_TOPICAL_POWDER_CLAIMS.find((c) => c.id === open) ||
    GHK_TOPICAL_POWDER_CLAIMS[0];

  return (
    <ModuleShell
      kicker="Claim checker"
      title="Common GHK-Cu topical powder claims vs the evidence record"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Claims"
          options={GHK_TOPICAL_POWDER_CLAIMS.map((c) => ({
            id: c.id,
            label: c.claim.length > 42 ? `${c.claim.slice(0, 40)}…` : c.claim,
          }))}
          value={open}
          onChange={setOpen}
        />
      </div>
      <div className="px-4 py-4">
        <p className="text-sm font-bold text-slate-900">{card.claim}</p>
        <p className="mt-2 inline-block rounded-full bg-violet-50 px-2.5 py-0.5 text-[11px] font-bold text-violet-800">
          {card.verdict}
        </p>
        <p className="mt-2 text-[11px] leading-relaxed text-slate-600">
          {card.detail}
        </p>
      </div>
    </ModuleShell>
  );
}

export function GhkTopicalPowderEvidenceLadder() {
  return (
    <ModuleShell
      kicker="Dosage evidence ladder"
      title="Wound gels documented — cosmetic powder dose not established"
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
            {GHK_TOPICAL_POWDER_EVIDENCE_LADDER.map((row) => (
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

export function GhkTopicalPowderAdverseEventTable() {
  const [mode, setMode] = useState("simple");

  return (
    <ModuleShell
      kicker="Safety monitoring"
      title="Local irritation · copper burden · powder handling · barrier disruption"
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
          {GHK_TOPICAL_POWDER_AE_SIMPLE.map((row) => (
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
          {GHK_TOPICAL_POWDER_AE_FULL.map((row) => (
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
