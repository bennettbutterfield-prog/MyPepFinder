"use client";

import { useMemo, useState } from "react";
import {
  MT2_ANECDOTAL_PROTOCOLS,
  MT2_AE_CASES,
  MT2_AE_FULL,
  MT2_AE_SIMPLE,
  MT2_AE_STUDIES,
  MT2_CLAIMS,
  MT2_COMPARE,
  MT2_CUMULATIVE_PRESETS,
  MT2_EVIDENCE_HIERARCHY,
  MT2_EVIDENCE_LADDER,
  MT2_HUMAN_STUDIES,
  MT2_IDENTITY,
  MT2_MGKG_TABLE,
  MT2_MOLECULE_COMPARE,
  MT2_PART_A,
  MT2_PART_B,
  MT2_PILOT_ESCALATION,
  MT2_PRECLINICAL,
  MT2_RECEPTOR_PATHWAYS,
  MT2_WEIGHT_PRESETS,
  mt2CumulativeExposure,
  mt2NmolToMcg,
  mt2WeightDose,
} from "@/data/melanotan-2-dosage-guide";

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

export function Melanotan2IdentityGate() {
  const [id, setId] = useState("mt2");
  const card = MT2_IDENTITY.find((c) => c.id === id) || MT2_IDENTITY[0];

  return (
    <ModuleShell
      kicker="Identity gate"
      title="MT-II vs afamelanotide · bremelanotide · online vial"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Identity check"
          options={MT2_IDENTITY.map((c) => ({ id: c.id, label: c.label }))}
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

export function Melanotan2MoleculeCompare() {
  return (
    <ModuleShell
      kicker="Product comparison"
      title="Melanotan-2 vs afamelanotide (SCENESSE) vs bremelanotide (VYLEESI)"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Feature</th>
              <th className="px-3 py-2.5 font-semibold">MT-II</th>
              <th className="px-3 py-2.5 font-semibold">Afamelanotide</th>
              <th className="px-3 py-2.5 font-semibold">Bremelanotide</th>
            </tr>
          </thead>
          <tbody>
            {MT2_MOLECULE_COMPARE.map((row) => (
              <tr key={row.feature} className="border-t border-slate-50 align-top">
                <td className="px-3 py-2 font-semibold text-slate-800">
                  {row.feature}
                </td>
                <td className="px-3 py-2 text-indigo-800">{row.mt2}</td>
                <td className="px-3 py-2 text-slate-600">{row.mt1}</td>
                <td className="px-3 py-2 text-slate-600">{row.pt141}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ModuleShell>
  );
}

export function Melanotan2UnitConverter() {
  const [nmol, setNmol] = useState("1");
  const mcg = useMemo(() => mt2NmolToMcg(Number(nmol)), [nmol]);

  return (
    <ModuleShell
      kicker="Unit math"
      title="nmol ↔ mcg · published mg/kg table (MW ~1024.18 g/mol)"
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
            {MT2_MGKG_TABLE.map((row) => (
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
            htmlFor="mt2-nmol"
            className="mb-1 block text-[10px] font-bold uppercase text-slate-500"
          >
            nmol (custom)
          </label>
          <input
            id="mt2-nmol"
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
            ≈ mcg
          </p>
          <p className="text-xl font-bold text-indigo-800">
            {mcg != null ? `${mcg.toFixed(2)} mcg` : "—"}
          </p>
        </div>
      </div>
    </ModuleShell>
  );
}

export function Melanotan2WeightCalc() {
  const [presetId, setPresetId] = useState("025");
  const [weightKg, setWeightKg] = useState("75");
  const preset =
    MT2_WEIGHT_PRESETS.find((p) => p.id === presetId) || MT2_WEIGHT_PRESETS[0];
  const result = useMemo(
    () =>
      mt2WeightDose({
        mgPerKg: preset.mgPerKg,
        weightKg: Number(weightKg),
      }),
    [preset, weightKg]
  );

  return (
    <ModuleShell
      kicker="Weight-based dose"
      title="Published mg/kg → total mg per injection"
    >
      <div className="grid gap-3 border-b border-slate-100 px-4 py-3 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-[10px] font-bold uppercase text-slate-500">
            Study dose preset
          </label>
          <ChipGroup
            label="mg/kg presets"
            options={MT2_WEIGHT_PRESETS.map((p) => ({
              id: p.id,
              label: p.label,
            }))}
            value={presetId}
            onChange={setPresetId}
          />
        </div>
        <div>
          <label
            htmlFor="mt2-weight"
            className="mb-1 block text-[10px] font-bold uppercase text-slate-500"
          >
            Body weight (kg)
          </label>
          <input
            id="mt2-weight"
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
              Total per injection
            </p>
            <p className="text-xl font-bold text-indigo-800">
              {result.totalMg.toFixed(3)} mg
            </p>
            <p className="text-[10px] text-slate-500">
              ({Math.round(result.totalMcg).toLocaleString()} mcg)
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase text-slate-500">
              vs 0.25 mg online
            </p>
            <p className="text-xl font-bold text-amber-900">
              {(result.totalMg / 0.25).toFixed(1)}×
            </p>
          </div>
        </div>
      ) : null}
    </ModuleShell>
  );
}

export function Melanotan2HumanStudies() {
  return (
    <ModuleShell
      kicker="Human clinical research"
      title="~23 unique men · 0.010–0.030 mg/kg SC · pigmentation + ED cohorts"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[680px] border-collapse text-left text-xs">
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
            {MT2_HUMAN_STUDIES.map((row) => (
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

export function Melanotan2PilotEscalation() {
  return (
    <ModuleShell
      kicker="Dorr 1996 pilot"
      title="Within-participant escalation 0.010 → 0.030 mg/kg · 3 men"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Step</th>
              <th className="px-3 py-2.5 font-semibold">mg/kg</th>
              <th className="px-3 py-2.5 font-semibold">Reported effects</th>
            </tr>
          </thead>
          <tbody>
            {MT2_PILOT_ESCALATION.map((row) => (
              <tr key={row.level} className="border-t border-slate-50 align-top">
                <td className="px-3 py-2 font-medium text-slate-800">
                  {row.level}
                </td>
                <td className="px-3 py-2 font-semibold text-indigo-800">
                  {row.mgKg} mg/kg
                </td>
                <td className="px-3 py-2 text-slate-600">{row.effects}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="border-t border-slate-100 px-4 py-3 text-[11px] text-slate-600">
        Five active doses on alternating weekdays over 2 weeks. 0.025 mg/kg
        chosen for future Phase I — not a population maximum tolerated dose.
      </p>
    </ModuleShell>
  );
}

export function Melanotan2EvidenceHierarchy() {
  return (
    <ModuleShell
      kicker="Evidence hierarchy"
      title="No approved label · tiny human record · extensive online Tier E"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Tier</th>
              <th className="px-3 py-2.5 font-semibold">Evidence</th>
              <th className="px-3 py-2.5 font-semibold">Use</th>
            </tr>
          </thead>
          <tbody>
            {MT2_EVIDENCE_HIERARCHY.map(([tier, ev, use]) => (
              <tr key={tier} className="border-t border-slate-50 align-top">
                <td className="px-3 py-2 font-medium text-slate-800">{tier}</td>
                <td className="px-3 py-2 text-slate-600">{ev}</td>
                <td className="px-3 py-2 font-semibold text-indigo-800">
                  {use}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ModuleShell>
  );
}

export function Melanotan2AnecdotalProtocols() {
  const [open, setOpen] = useState("loading");
  const row =
    MT2_ANECDOTAL_PROTOCOLS.find((p) => p.id === open) ||
    MT2_ANECDOTAL_PROTOCOLS[0];

  return (
    <ModuleShell
      kicker="Reported protocols"
      title="Online loading/maintenance · Dorr pilot · proposed SAD cohorts"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Protocol types"
          options={MT2_ANECDOTAL_PROTOCOLS.map((p) => ({
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

export function Melanotan2CumulativeCalc() {
  const [presetId, setPresetId] = useState("pilot-025");
  const preset =
    MT2_CUMULATIVE_PRESETS.find((p) => p.id === presetId) ||
    MT2_CUMULATIVE_PRESETS[0];

  const result = useMemo(() => {
    if (preset.type === "weight") {
      return mt2CumulativeExposure({
        mgPerKg: preset.mgPerKg,
        weightKg: preset.weightKg,
        doses: preset.doses,
      });
    }
    return mt2CumulativeExposure({
      mgPerDose: preset.mgPerDose,
      doses: preset.doses,
    });
  }, [preset]);

  return (
    <ModuleShell
      kicker="Cumulative exposure"
      title="Pilot mg/kg course vs online fixed-dose loading"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Schedule presets"
          options={MT2_CUMULATIVE_PRESETS.map((p) => ({
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
            <p className="mt-1 text-[10px] text-slate-500">
              {result.perDoseMg.toFixed(3)} mg per dose × {result.doses}
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase text-slate-500">
              Nominal total
            </p>
            <p className="text-xl font-bold text-indigo-800">
              {result.totalMg.toFixed(2)} mg
            </p>
          </div>
        </div>
      ) : null}
      <p className="border-t border-slate-100 px-4 py-3 text-[11px] text-slate-600">
        Lower per-injection online doses can still accumulate with daily
        repetition and uncertain vial potency.
      </p>
    </ModuleShell>
  );
}

export function Melanotan2ClinicalVsAnecdotal() {
  const { clinical, anecdotal } = MT2_COMPARE;

  return (
    <ModuleShell
      kicker="Evidence split"
      title="Weight-based mg/kg trials vs fixed mg online schedules"
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

export function Melanotan2PreclinicalDoses() {
  return (
    <ModuleShell
      kicker="Preclinical anchors"
      title="Rat PK · feeding models — not human dose conversion"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Model</th>
              <th className="px-3 py-2.5 font-semibold">Dose</th>
              <th className="px-3 py-2.5 font-semibold">Route</th>
              <th className="px-3 py-2.5 font-semibold">Outcome</th>
            </tr>
          </thead>
          <tbody>
            {MT2_PRECLINICAL.map((row) => (
              <tr
                key={`${row.model}-${row.dose}`}
                className="border-t border-slate-50 align-top"
              >
                <td className="px-3 py-2 text-slate-800">{row.model}</td>
                <td className="px-3 py-2 font-semibold text-indigo-800">
                  {row.dose}
                </td>
                <td className="px-3 py-2 text-slate-600">{row.route}</td>
                <td className="px-3 py-2 text-slate-600">{row.outcome}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ModuleShell>
  );
}

export function Melanotan2ReceptorPathways() {
  return (
    <ModuleShell
      kicker="Receptor pharmacology"
      title="Broad melanocortin agonism — pigment and central effects share exposure"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Pathway</th>
              <th className="px-3 py-2.5 font-semibold">Dose-relevant effect</th>
            </tr>
          </thead>
          <tbody>
            {MT2_RECEPTOR_PATHWAYS.map((row) => (
              <tr key={row.receptor} className="border-t border-slate-50 align-top">
                <td className="px-3 py-2 font-semibold text-slate-800">
                  {row.receptor}
                </td>
                <td className="px-3 py-2 text-slate-600">{row.effect}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ModuleShell>
  );
}

export function Melanotan2StudyAdverseEvents() {
  return (
    <ModuleShell
      kicker="Controlled study effects"
      title="Nausea, yawning, somnolence, erections — dose context from trials"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Effect</th>
              <th className="px-3 py-2.5 font-semibold">Dose context</th>
              <th className="px-3 py-2.5 font-semibold">Note</th>
            </tr>
          </thead>
          <tbody>
            {MT2_AE_STUDIES.map((row) => (
              <tr key={row.effect} className="border-t border-slate-50 align-top">
                <td className="px-3 py-2 font-semibold text-slate-800">
                  {row.effect}
                </td>
                <td className="px-3 py-2 text-slate-600">{row.context}</td>
                <td className="px-3 py-2 text-indigo-800">{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ModuleShell>
  );
}

export function Melanotan2ProtocolTimeline() {
  return (
    <ModuleShell
      kicker="Proposed MT2-SAD/MAD-01"
      title="Part A SAD 0.003–0.018 mg/kg · Part B MAD 0.006/0.012 mg/kg · 56 participants"
    >
      <div className="overflow-x-auto border-b border-slate-100 px-4 py-3">
        <p className="text-xs font-bold text-slate-800">
          Part A — single ascending dose · 6:2 active:placebo per cohort
        </p>
        <table className="mt-2 w-full min-w-[480px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2 font-semibold">Cohort</th>
              <th className="px-3 py-2 font-semibold">mg/kg SC once</th>
              <th className="px-3 py-2 font-semibold">Max absolute</th>
              <th className="px-3 py-2 font-semibold">Randomization</th>
            </tr>
          </thead>
          <tbody>
            {MT2_PART_A.map((row) => (
              <tr key={row.cohort} className="border-t border-slate-50">
                <td className="px-3 py-2">{row.cohort}</td>
                <td className="px-3 py-2 font-semibold text-indigo-800">
                  {row.mgKg} mg/kg
                </td>
                <td className="px-3 py-2 text-slate-600">{row.maxMg} mg cap</td>
                <td className="px-3 py-2 text-slate-600">{row.n}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="overflow-x-auto px-4 py-3">
        <p className="text-xs font-bold text-slate-800">
          Part B — multiple ascending dose · days 1, 3, 5, 7, 9
        </p>
        <table className="mt-2 w-full min-w-[480px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2 font-semibold">Cohort</th>
              <th className="px-3 py-2 font-semibold">mg/kg SC</th>
              <th className="px-3 py-2 font-semibold">Schedule</th>
              <th className="px-3 py-2 font-semibold">Randomization</th>
            </tr>
          </thead>
          <tbody>
            {MT2_PART_B.map((row) => (
              <tr key={row.cohort} className="border-t border-slate-50">
                <td className="px-3 py-2">{row.cohort}</td>
                <td className="px-3 py-2 font-semibold text-indigo-800">
                  {row.mgKg} mg/kg
                </td>
                <td className="px-3 py-2 text-slate-600">{row.schedule}</td>
                <td className="px-3 py-2 text-slate-600">{row.n}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-3 text-[11px] text-slate-600">
          UV-free · inpatient observation · sentinel dosing · deliberately below
          historical 0.025 mg/kg. Not a personal tanning or injection plan.
        </p>
      </div>
    </ModuleShell>
  );
}

export function Melanotan2ClaimChecker() {
  const [open, setOpen] = useState(MT2_CLAIMS[0].id);
  const card = MT2_CLAIMS.find((c) => c.id === open) || MT2_CLAIMS[0];

  return (
    <ModuleShell
      kicker="Claim checker"
      title="Common Melanotan-2 claims vs the evidence record"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Claims"
          options={MT2_CLAIMS.map((c) => ({
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

export function Melanotan2EvidenceLadder() {
  return (
    <ModuleShell
      kicker="Dosage evidence ladder"
      title="No approved dose · tiny human record · serious case-report signals"
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
            {MT2_EVIDENCE_LADDER.map((row) => (
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

export function Melanotan2AdverseEventTable() {
  const [mode, setMode] = useState("simple");

  return (
    <ModuleShell
      kicker="Safety monitoring"
      title="Study effects · priapism/toxicity case reports · product quality · surveillance"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Detail level"
          options={[
            { id: "simple", label: "Summary" },
            { id: "cases", label: "Case reports" },
            { id: "full", label: "Monitoring domains" },
          ]}
          value={mode}
          onChange={setMode}
        />
      </div>
      {mode === "simple" ? (
        <dl className="divide-y divide-slate-100">
          {MT2_AE_SIMPLE.map((row) => (
            <div key={row.category} className="px-4 py-3">
              <dt className="text-xs font-bold text-slate-800">
                {row.category}
              </dt>
              <dd className="mt-1 text-[11px] text-slate-600">{row.note}</dd>
            </div>
          ))}
        </dl>
      ) : mode === "cases" ? (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-left text-xs">
            <thead>
              <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
                <th className="px-3 py-2.5 font-semibold">Signal</th>
                <th className="px-3 py-2.5 font-semibold">Reported dose</th>
                <th className="px-3 py-2.5 font-semibold">Outcome</th>
              </tr>
            </thead>
            <tbody>
              {MT2_AE_CASES.map((row) => (
                <tr key={row.case} className="border-t border-slate-50 align-top">
                  <td className="px-3 py-2 font-semibold text-slate-800">
                    {row.case}
                  </td>
                  <td className="px-3 py-2 text-indigo-800">{row.dose}</td>
                  <td className="px-3 py-2 text-slate-600">{row.outcome}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
              {MT2_AE_FULL.map((row) => (
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
