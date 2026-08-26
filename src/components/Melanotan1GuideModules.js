"use client";

import { useMemo, useState } from "react";
import {
  MT1_ANECDOTAL_PROTOCOLS,
  MT1_AE_FULL,
  MT1_AE_SIMPLE,
  MT1_CLAIMS,
  MT1_COMPARE,
  MT1_CUMULATIVE_PRESETS,
  MT1_EVIDENCE_HIERARCHY,
  MT1_EVIDENCE_LADDER,
  MT1_HUMAN_STUDIES,
  MT1_IDENTITY,
  MT1_IMPLANT_VS_INJECTION,
  MT1_LABELED_AE,
  MT1_MGKG_CONVERSION,
  MT1_MOLECULE_COMPARE,
  MT1_PRECLINICAL,
  MT1_PROTOCOL_ARMS,
  MT1_WEIGHT_PRESETS,
  mt1CumulativeExposure,
  mt1NmolToMcg,
  mt1WeightDose,
} from "@/data/melanotan-1-dosage-guide";

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

export function Melanotan1IdentityGate() {
  const [id, setId] = useState("mt1");
  const card = MT1_IDENTITY.find((c) => c.id === id) || MT1_IDENTITY[0];

  return (
    <ModuleShell
      kicker="Identity gate"
      title="Afamelanotide (MT-1) vs MT-II · PT-141 · online vial"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Identity check"
          options={MT1_IDENTITY.map((c) => ({ id: c.id, label: c.label }))}
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

export function Melanotan1MoleculeCompare() {
  return (
    <ModuleShell
      kicker="Isoform comparison"
      title="Melanotan-1 / afamelanotide vs Melanotan II"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Feature</th>
              <th className="px-3 py-2.5 font-semibold">MT-1</th>
              <th className="px-3 py-2.5 font-semibold">MT-II</th>
            </tr>
          </thead>
          <tbody>
            {MT1_MOLECULE_COMPARE.map((row) => (
              <tr key={row.feature} className="border-t border-slate-50 align-top">
                <td className="px-3 py-2 font-semibold text-slate-800">
                  {row.feature}
                </td>
                <td className="px-3 py-2 text-indigo-800">{row.mt1}</td>
                <td className="px-3 py-2 text-slate-600">{row.mt2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ModuleShell>
  );
}

export function Melanotan1UnitConverter() {
  const [nmol, setNmol] = useState("1");
  const mcg = useMemo(() => mt1NmolToMcg(Number(nmol)), [nmol]);

  return (
    <ModuleShell
      kicker="Unit math"
      title="nmol ↔ mcg · mg/kg weight table (MW ~1646.85 g/mol)"
    >
      <div className="overflow-x-auto border-b border-slate-100">
        <table className="w-full min-w-[480px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">mg/kg</th>
              <th className="px-3 py-2.5 font-semibold">60 kg</th>
              <th className="px-3 py-2.5 font-semibold">75 kg</th>
              <th className="px-3 py-2.5 font-semibold">90 kg</th>
            </tr>
          </thead>
          <tbody>
            {MT1_MGKG_CONVERSION.map((row) => (
              <tr key={row.mgKg} className="border-t border-slate-50">
                <td className="px-3 py-2 font-semibold text-indigo-800">
                  {row.mgKg} mg/kg
                </td>
                <td className="px-3 py-2 text-slate-600">{row.kg60} mg</td>
                <td className="px-3 py-2 text-slate-600">{row.kg75} mg</td>
                <td className="px-3 py-2 text-slate-600">{row.kg90} mg</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="grid gap-3 px-4 py-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="mt1-nmol"
            className="mb-1 block text-[10px] font-bold uppercase text-slate-500"
          >
            nmol (custom)
          </label>
          <input
            id="mt1-nmol"
            type="number"
            min="0"
            step="0.1"
            value={nmol}
            onChange={(e) => setNmol(e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
          />
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase text-slate-500">
            ≈ mcg free base
          </p>
          <p className="text-xl font-bold text-indigo-800">
            {mcg != null ? `${mcg.toFixed(2)} mcg` : "—"}
          </p>
          <p className="mt-1 text-[10px] text-slate-500">
            16 mg ≈ 9.72 µmol · SCENESSE active moiety
          </p>
        </div>
      </div>
    </ModuleShell>
  );
}

export function Melanotan1WeightCalc() {
  const [presetId, setPresetId] = useState("016");
  const [weightKg, setWeightKg] = useState("75");
  const preset =
    MT1_WEIGHT_PRESETS.find((p) => p.id === presetId) || MT1_WEIGHT_PRESETS[0];
  const result = useMemo(
    () =>
      mt1WeightDose({
        mgPerKg: preset.mgPerKg,
        weightKg: Number(weightKg),
      }),
    [preset, weightKg]
  );

  return (
    <ModuleShell
      kicker="Weight-based injection"
      title="mg/kg → total mg per administration (historical trial doses)"
    >
      <div className="grid gap-3 border-b border-slate-100 px-4 py-3 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-[10px] font-bold uppercase text-slate-500">
            Dose preset
          </label>
          <ChipGroup
            label="mg/kg presets"
            options={MT1_WEIGHT_PRESETS.map((p) => ({
              id: p.id,
              label: p.label,
            }))}
            value={presetId}
            onChange={setPresetId}
          />
        </div>
        <div>
          <label
            htmlFor="mt1-weight"
            className="mb-1 block text-[10px] font-bold uppercase text-slate-500"
          >
            Body weight (kg)
          </label>
          <input
            id="mt1-weight"
            type="number"
            min="40"
            step="1"
            value={weightKg}
            onChange={(e) => setWeightKg(e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
          />
        </div>
      </div>
      {result ? (
        <div className="grid gap-3 px-4 py-4 sm:grid-cols-3">
          <div>
            <p className="text-[10px] font-bold uppercase text-slate-500">
              mg/kg
            </p>
            <p className="text-xl font-bold text-indigo-800">
              {result.mgPerKg} mg/kg
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase text-slate-500">
              Total per dose
            </p>
            <p className="text-xl font-bold text-indigo-800">
              {result.totalMg.toFixed(2)} mg
            </p>
            <p className="text-[10px] text-slate-500">
              ({Math.round(result.totalMcg).toLocaleString()} mcg)
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase text-slate-500">
              vs 500 mcg online
            </p>
            <p className="text-xl font-bold text-amber-900">
              {(result.totalMcg / 500).toFixed(0)}× higher
            </p>
          </div>
        </div>
      ) : null}
      <p className="border-t border-slate-100 px-4 py-3 text-[11px] text-slate-600">
        Historical study arithmetic only — not personal-use or implant dosing.
      </p>
    </ModuleShell>
  );
}

export function Melanotan1ImplantVsInjection() {
  const { implant, injection } = MT1_IMPLANT_VS_INJECTION;

  return (
    <ModuleShell
      kicker="Formulation split"
      title="SCENESSE implant vs historical soluble SC injection"
    >
      <div className="grid gap-0 md:grid-cols-2">
        <div className="border-b border-slate-100 md:border-b-0 md:border-r">
          <div className="border-b border-slate-100 bg-indigo-50/60 px-4 py-2.5">
            <p className="text-xs font-bold text-indigo-900">{implant.title}</p>
            <p className="text-[10px] text-indigo-700">{implant.status}</p>
          </div>
          <dl className="divide-y divide-slate-100">
            {implant.rows.map(([k, v]) => (
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
            <p className="text-xs font-bold text-amber-950">{injection.title}</p>
            <p className="text-[10px] text-amber-800">{injection.status}</p>
          </div>
          <dl className="divide-y divide-slate-100">
            {injection.rows.map(([k, v]) => (
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

export function Melanotan1HumanStudies() {
  return (
    <ModuleShell
      kicker="Human clinical research"
      title="Injection pigmentation studies → EPP implant pivotal trials"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Study</th>
              <th className="px-3 py-2.5 font-semibold">Dose</th>
              <th className="px-3 py-2.5 font-semibold">Route</th>
              <th className="px-3 py-2.5 font-semibold">n</th>
              <th className="px-3 py-2.5 font-semibold">Finding</th>
            </tr>
          </thead>
          <tbody>
            {MT1_HUMAN_STUDIES.map((row) => (
              <tr key={row.study} className="border-t border-slate-50 align-top">
                <td className="px-3 py-2 font-semibold text-slate-800">
                  {row.study}
                </td>
                <td className="px-3 py-2 font-semibold text-indigo-800">
                  {row.dose}
                </td>
                <td className="px-3 py-2 text-slate-600">{row.route}</td>
                <td className="px-3 py-2 text-slate-600">{row.n}</td>
                <td className="px-3 py-2 text-slate-600">{row.finding}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ModuleShell>
  );
}

export function Melanotan1EvidenceHierarchy() {
  return (
    <ModuleShell
      kicker="Evidence hierarchy"
      title="Label Tier A · trials · injection PK · online Tier E"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Tier</th>
              <th className="px-3 py-2.5 font-semibold">Evidence</th>
              <th className="px-3 py-2.5 font-semibold">Supports</th>
            </tr>
          </thead>
          <tbody>
            {MT1_EVIDENCE_HIERARCHY.map(([tier, ev, sup]) => (
              <tr key={tier} className="border-t border-slate-50 align-top">
                <td className="px-3 py-2 font-medium text-slate-800">{tier}</td>
                <td className="px-3 py-2 text-slate-600">{ev}</td>
                <td className="px-3 py-2 font-semibold text-indigo-800">
                  {sup}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ModuleShell>
  );
}

export function Melanotan1AnecdotalProtocols() {
  const [open, setOpen] = useState("loading");
  const row =
    MT1_ANECDOTAL_PROTOCOLS.find((p) => p.id === open) ||
    MT1_ANECDOTAL_PROTOCOLS[0];

  return (
    <ModuleShell
      kicker="Reported protocols"
      title="Online fixed boluses · SCENESSE label · proposed 12 vs 16 mg trial"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Protocol types"
          options={MT1_ANECDOTAL_PROTOCOLS.map((p) => ({
            id: p.id,
            label: p.label,
          }))}
          value={open}
          onChange={setOpen}
        />
      </div>
      <dl className="divide-y divide-slate-100 px-4 py-2">
        {[
          ["Amount", row.dose],
          ["Frequency", row.frequency],
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

export function Melanotan1CumulativeCalc() {
  const [presetId, setPresetId] = useState("250x10");
  const preset =
    MT1_CUMULATIVE_PRESETS.find((p) => p.id === presetId) ||
    MT1_CUMULATIVE_PRESETS[0];

  const result = useMemo(() => {
    if (preset.type === "implant") {
      const totalMg = 16 * preset.count;
      return {
        label: `${preset.count} × 16 mg implants`,
        totalMg,
        totalMcg: totalMg * 1000,
      };
    }
    if (preset.type === "weight") {
      const perDay = preset.mgPerKg * preset.weightKg;
      const totalMg = perDay * preset.days;
      return {
        label: `${preset.mgPerKg} mg/kg × ${preset.days} d (${preset.weightKg} kg)`,
        totalMg,
        totalMcg: totalMg * 1000,
      };
    }
    const r = mt1CumulativeExposure({
      mcgPerDose: preset.mcgPerDose,
      dosesPerDay: preset.freq,
      days: preset.days,
    });
    return r ? { ...r, label: preset.label } : null;
  }, [preset]);

  return (
    <ModuleShell
      kicker="Cumulative exposure"
      title="Online mcg courses vs trial mg/kg vs implant mass"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Schedule presets"
          options={MT1_CUMULATIVE_PRESETS.map((p) => ({
            id: p.id,
            label: p.label,
          }))}
          value={presetId}
          onChange={setPresetId}
        />
      </div>
      {result ? (
        <div className="grid gap-3 px-4 py-4 sm:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase text-slate-500">
              Schedule
            </p>
            <p className="text-sm font-bold text-indigo-800">{result.label}</p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase text-slate-500">
              Nominal total mass
            </p>
            <p className="text-xl font-bold text-indigo-800">
              {result.totalMg.toFixed(1)} mg
            </p>
            <p className="text-[10px] text-slate-500">
              Implant vs injection totals are not pharmacokinetically equivalent
            </p>
          </div>
        </div>
      ) : null}
    </ModuleShell>
  );
}

export function Melanotan1ClinicalVsAnecdotal() {
  const { clinical, anecdotal } = MT1_COMPARE;

  return (
    <ModuleShell
      kicker="Evidence split"
      title="Weight-based injection / implant record vs online fixed mcg"
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

export function Melanotan1PreclinicalDoses() {
  return (
    <ModuleShell
      kicker="Preclinical anchors"
      title="Rat toxicology to 20 mg/kg/day — not human cosmetic conversion"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Model</th>
              <th className="px-3 py-2.5 font-semibold">Dose</th>
              <th className="px-3 py-2.5 font-semibold">Outcome</th>
            </tr>
          </thead>
          <tbody>
            {MT1_PRECLINICAL.map((row) => (
              <tr key={row.model} className="border-t border-slate-50 align-top">
                <td className="px-3 py-2 text-slate-800">{row.model}</td>
                <td className="px-3 py-2 font-semibold text-indigo-800">
                  {row.dose}
                </td>
                <td className="px-3 py-2 text-slate-600">{row.outcome}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ModuleShell>
  );
}

export function Melanotan1LabeledAdverseEvents() {
  return (
    <ModuleShell
      kicker="SCENESSE label"
      title="Adverse reactions >2% in three EPP vehicle-controlled trials"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[400px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Reaction</th>
              <th className="px-3 py-2.5 font-semibold">Afamelanotide</th>
              <th className="px-3 py-2.5 font-semibold">Vehicle</th>
            </tr>
          </thead>
          <tbody>
            {MT1_LABELED_AE.map((row) => (
              <tr key={row.reaction} className="border-t border-slate-50">
                <td className="px-3 py-2 font-medium text-slate-800">
                  {row.reaction}
                </td>
                <td className="px-3 py-2 font-semibold text-indigo-800">
                  {row.drug}
                </td>
                <td className="px-3 py-2 text-slate-600">{row.vehicle}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="border-t border-slate-100 px-4 py-3 text-[11px] text-slate-600">
        n = 125 afamelanotide · 119 vehicle · 16 mg implant q2mo. Full-body skin
        exam twice yearly recommended per label.
      </p>
    </ModuleShell>
  );
}

export function Melanotan1ProtocolTimeline() {
  return (
    <ModuleShell
      kicker="Proposed AFM-EPP-OPT design"
      title="12 mg vs 16 mg controlled-release implant · every 56 days × 4"
    >
      <div className="overflow-x-auto px-4 py-3">
        <p className="text-xs font-bold text-slate-800">
          Phase 2b · 120 participants · 32-week treatment · EPP adults ·
          noninferiority margin 0.80 on pain-free light exposure
        </p>
        <table className="mt-2 w-full min-w-[520px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2 font-semibold">Arm</th>
              <th className="px-3 py-2 font-semibold">Dose</th>
              <th className="px-3 py-2 font-semibold">Schedule</th>
              <th className="px-3 py-2 font-semibold">Total mass</th>
            </tr>
          </thead>
          <tbody>
            {MT1_PROTOCOL_ARMS.map((row) => (
              <tr key={row.arm} className="border-t border-slate-50">
                <td className="px-3 py-2">{row.arm}</td>
                <td className="px-3 py-2 font-semibold text-indigo-800">
                  {row.dose}
                </td>
                <td className="px-3 py-2 text-slate-600">{row.schedule}</td>
                <td className="px-3 py-2 text-slate-600">{row.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-3 text-[11px] text-slate-600">
          12 mg is a separately manufactured GMP implant — a 16 mg rod must not
          be cut. Soluble injections, intranasal products, and deliberate UV
          tanning are excluded from this protocol.
        </p>
      </div>
    </ModuleShell>
  );
}

export function Melanotan1ClaimChecker() {
  const [open, setOpen] = useState(MT1_CLAIMS[0].id);
  const card = MT1_CLAIMS.find((c) => c.id === open) || MT1_CLAIMS[0];

  return (
    <ModuleShell
      kicker="Claim checker"
      title="Common Melanotan-1 claims vs the evidence record"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Claims"
          options={MT1_CLAIMS.map((c) => ({
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

export function Melanotan1EvidenceLadder() {
  return (
    <ModuleShell
      kicker="Dosage evidence ladder"
      title="SCENESSE label strongest · online fixed mcg unvalidated"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Level</th>
              <th className="px-3 py-2.5 font-semibold">Evidence</th>
              <th className="px-3 py-2.5 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {MT1_EVIDENCE_LADDER.map((row) => (
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

export function Melanotan1AdverseEventTable() {
  const [mode, setMode] = useState("simple");

  return (
    <ModuleShell
      kicker="Safety monitoring"
      title="Label AEs · hypersensitivity · pigment surveillance · illicit vial risks"
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
          {MT1_AE_SIMPLE.map((row) => (
            <div key={row.category} className="px-4 py-3">
              <dt className="text-xs font-bold text-slate-800">
                {row.category}
              </dt>
              <dd className="mt-1 text-[11px] text-slate-600">{row.note}</dd>
            </div>
          ))}
        </dl>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[480px] border-collapse text-left text-xs">
            <thead>
              <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
                <th className="px-3 py-2.5 font-semibold">Domain</th>
                <th className="px-3 py-2.5 font-semibold">Monitor / note</th>
              </tr>
            </thead>
            <tbody>
              {MT1_AE_FULL.map((row) => (
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
