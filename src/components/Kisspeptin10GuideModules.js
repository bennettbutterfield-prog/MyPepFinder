"use client";

import { useMemo, useState } from "react";
import {
  KP10_ANECDOTAL_PROTOCOLS,
  KP10_AE_FULL,
  KP10_AE_SIMPLE,
  KP10_BOLUS_PRESETS,
  KP10_CLAIMS,
  KP10_COMPARE,
  KP10_CUMULATIVE_PRESETS,
  KP10_EVIDENCE_HIERARCHY,
  KP10_EVIDENCE_LADDER,
  KP10_HUMAN_STUDIES,
  KP10_IDENTITY,
  KP10_KP54_CONFUSION,
  KP10_MOLECULE_COMPARE,
  KP10_NMOL_CONVERSION,
  KP10_PART_A,
  KP10_PART_B,
  KP10_PRECLINICAL,
  KP10_ROUTE_COMPARE,
  KP10_YEUNG_2026,
  kp10CumulativeExposure,
  kp10FixedRateDaily,
  kp10InfusionDailyMass,
  kp10NmolToMcg,
  kp10WeightBolus,
} from "@/data/kisspeptin-10-dosage-guide";

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

export function Kisspeptin10IdentityGate() {
  const [id, setId] = useState("kp10");
  const card = KP10_IDENTITY.find((c) => c.id === id) || KP10_IDENTITY[0];

  return (
    <ModuleShell
      kicker="Identity gate"
      title="KP-10 (YNWNSFGLRF-NH₂) vs KP-54 · metastin · misspelling"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Identity check"
          options={KP10_IDENTITY.map((c) => ({ id: c.id, label: c.label }))}
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

export function Kisspeptin10MoleculeCompare() {
  return (
    <ModuleShell
      kicker="Isoform comparison"
      title="Kisspeptin-10 vs Kisspeptin-54 — no dose conversion"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Feature</th>
              <th className="px-3 py-2.5 font-semibold">KP-10</th>
              <th className="px-3 py-2.5 font-semibold">KP-54</th>
            </tr>
          </thead>
          <tbody>
            {KP10_MOLECULE_COMPARE.map((row) => (
              <tr key={row.feature} className="border-t border-slate-50 align-top">
                <td className="px-3 py-2 font-semibold text-slate-800">
                  {row.feature}
                </td>
                <td className="px-3 py-2 text-indigo-800">{row.kp10}</td>
                <td className="px-3 py-2 text-slate-600">{row.kp54}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ModuleShell>
  );
}

export function Kisspeptin10UnitConverter() {
  const [nmol, setNmol] = useState("1");

  const mcg = useMemo(() => kp10NmolToMcg(Number(nmol)), [nmol]);

  return (
    <ModuleShell
      kicker="Unit math"
      title="nmol ↔ mcg conversion (MW ~1302.44 g/mol · 1 nmol ≈ 1.302 mcg)"
    >
      <div className="overflow-x-auto border-b border-slate-100">
        <table className="w-full min-w-[400px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">nmol/kg</th>
              <th className="px-3 py-2.5 font-semibold">≈ mcg/kg</th>
            </tr>
          </thead>
          <tbody>
            {KP10_NMOL_CONVERSION.filter((r) => r.nmol != null).map((row) => (
              <tr key={row.nmol} className="border-t border-slate-50">
                <td className="px-3 py-2 text-slate-800">{row.nmol}</td>
                <td className="px-3 py-2 font-semibold text-indigo-800">
                  {row.mcg} mcg/kg
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="overflow-x-auto border-b border-slate-100">
        <table className="w-full min-w-[400px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Rate</th>
              <th className="px-3 py-2.5 font-semibold">≈ mcg/kg/h</th>
            </tr>
          </thead>
          <tbody>
            {KP10_NMOL_CONVERSION.filter((r) => r.nmolH != null).map((row) => (
              <tr key={row.label} className="border-t border-slate-50">
                <td className="px-3 py-2 text-slate-800">{row.label}</td>
                <td className="px-3 py-2 font-semibold text-indigo-800">
                  {row.mcgH} mcg/kg/h
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="grid gap-3 px-4 py-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="kp10-nmol"
            className="mb-1 block text-[10px] font-bold uppercase text-slate-500"
          >
            nmol (custom)
          </label>
          <input
            id="kp10-nmol"
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

export function Kisspeptin10BolusCalc() {
  const [presetId, setPresetId] = useState("1");
  const [weightKg, setWeightKg] = useState("75");

  const preset =
    KP10_BOLUS_PRESETS.find((p) => p.id === presetId) || KP10_BOLUS_PRESETS[0];
  const result = useMemo(
    () =>
      kp10WeightBolus({
        nmolPerKg: preset.nmolPerKg,
        weightKg: Number(weightKg),
      }),
    [preset, weightKg]
  );

  return (
    <ModuleShell
      kicker="Weight-based bolus"
      title="nmol/kg → total mcg for a given body weight"
    >
      <div className="grid gap-3 border-b border-slate-100 px-4 py-3 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-[10px] font-bold uppercase text-slate-500">
            Bolus preset
          </label>
          <ChipGroup
            label="Bolus presets"
            options={KP10_BOLUS_PRESETS.map((p) => ({
              id: p.id,
              label: p.label,
            }))}
            value={presetId}
            onChange={setPresetId}
          />
        </div>
        <div>
          <label
            htmlFor="kp10-weight"
            className="mb-1 block text-[10px] font-bold uppercase text-slate-500"
          >
            Body weight (kg)
          </label>
          <input
            id="kp10-weight"
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
              mcg/kg
            </p>
            <p className="text-xl font-bold text-indigo-800">
              {result.mcgPerKg.toFixed(1)} mcg/kg
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase text-slate-500">
              Total bolus
            </p>
            <p className="text-xl font-bold text-indigo-800">
              {result.totalMcg.toFixed(1)} mcg
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase text-slate-500">
              mg equivalent
            </p>
            <p className="text-xl font-bold text-indigo-800">
              {result.totalMg.toFixed(3)} mg
            </p>
          </div>
        </div>
      ) : null}
      <p className="border-t border-slate-100 px-4 py-3 text-[11px] text-slate-600">
        Arithmetic only — IV bolus study doses. SC bolus and pump infusion are
        separate evidence categories.
      </p>
    </ModuleShell>
  );
}

export function Kisspeptin10HumanStudies() {
  return (
    <ModuleShell
      kicker="Human clinical research"
      title="IV bolus to SC pump · route and population-specific"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Study</th>
              <th className="px-3 py-2.5 font-semibold">Dose</th>
              <th className="px-3 py-2.5 font-semibold">Route</th>
              <th className="px-3 py-2.5 font-semibold">Duration</th>
              <th className="px-3 py-2.5 font-semibold">Finding</th>
            </tr>
          </thead>
          <tbody>
            {KP10_HUMAN_STUDIES.map((row) => (
              <tr key={row.study} className="border-t border-slate-50 align-top">
                <td className="px-3 py-2 font-semibold text-slate-800">
                  {row.study}
                  <span className="mt-0.5 block font-normal text-slate-500">
                    n = {row.n}
                  </span>
                </td>
                <td className="px-3 py-2 font-semibold text-indigo-800">
                  {row.dose}
                </td>
                <td className="px-3 py-2 text-slate-600">{row.route}</td>
                <td className="px-3 py-2 text-slate-600">{row.duration}</td>
                <td className="px-3 py-2 text-slate-600">{row.finding}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ModuleShell>
  );
}

export function Kisspeptin10EvidenceHierarchy() {
  return (
    <ModuleShell
      kicker="Evidence hierarchy"
      title="Acute IV strong · fixed SC bolus weak · fertility unestablished"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Category</th>
              <th className="px-3 py-2.5 font-semibold">KP-10 evidence</th>
              <th className="px-3 py-2.5 font-semibold">Interpretation</th>
            </tr>
          </thead>
          <tbody>
            {KP10_EVIDENCE_HIERARCHY.map(([cat, ev, interp]) => (
              <tr key={cat} className="border-t border-slate-50 align-top">
                <td className="px-3 py-2 font-medium text-slate-800">{cat}</td>
                <td className="px-3 py-2 text-slate-600">{ev}</td>
                <td className="px-3 py-2 font-semibold text-indigo-800">
                  {interp}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ModuleShell>
  );
}

export function Kisspeptin10RouteCompare() {
  return (
    <ModuleShell
      kicker="Route patterns"
      title="IV bolus · IV infusion · SC bolus · SC pump — not interchangeable"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Pattern</th>
              <th className="px-3 py-2.5 font-semibold">Studied range</th>
              <th className="px-3 py-2.5 font-semibold">Schedule</th>
              <th className="px-3 py-2.5 font-semibold">Research use</th>
            </tr>
          </thead>
          <tbody>
            {KP10_ROUTE_COMPARE.map((row) => (
              <tr key={row.pattern} className="border-t border-slate-50 align-top">
                <td className="px-3 py-2 font-semibold text-slate-800">
                  {row.pattern}
                </td>
                <td className="px-3 py-2 text-indigo-800">{row.range}</td>
                <td className="px-3 py-2 text-slate-600">{row.schedule}</td>
                <td className="px-3 py-2 text-slate-600">{row.use}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ModuleShell>
  );
}

export function Kisspeptin10Yeung2026() {
  return (
    <ModuleShell
      kicker="Yeung et al. 2026"
      title="Three SC pump studies — acute, continuous, intermittent"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Study arm</th>
              <th className="px-3 py-2.5 font-semibold">Rate</th>
              <th className="px-3 py-2.5 font-semibold">Schedule</th>
              <th className="px-3 py-2.5 font-semibold">n</th>
              <th className="px-3 py-2.5 font-semibold">Outcome</th>
            </tr>
          </thead>
          <tbody>
            {KP10_YEUNG_2026.map((row) => (
              <tr key={row.arm} className="border-t border-slate-50 align-top">
                <td className="px-3 py-2 font-semibold text-slate-800">
                  {row.arm}
                </td>
                <td className="px-3 py-2 font-semibold text-indigo-800">
                  {row.rate}
                </td>
                <td className="px-3 py-2 text-slate-600">{row.schedule}</td>
                <td className="px-3 py-2 text-slate-600">{row.n}</td>
                <td className="px-3 py-2 text-slate-600">{row.outcome}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="border-t border-slate-100 px-4 py-3 text-[11px] text-slate-600">
        Intermittent 8 h on / 16 h off (~1.56 mg per infusion day at 150 nmol/h)
        maintained stimulation for 12 days in healthy eugonadal men — not
        hypogonadal treatment validation.
      </p>
    </ModuleShell>
  );
}

export function Kisspeptin10Kp54Confusion() {
  return (
    <ModuleShell
      kicker="Isoform confusion"
      title="KP-54 fertility schedules that must not be assigned to KP-10"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Cited schedule</th>
              <th className="px-3 py-2.5 font-semibold">Actual peptide</th>
              <th className="px-3 py-2.5 font-semibold">Context</th>
              <th className="px-3 py-2.5 font-semibold">KP-10 note</th>
            </tr>
          </thead>
          <tbody>
            {KP10_KP54_CONFUSION.map((row) => (
              <tr key={row.schedule} className="border-t border-slate-50 align-top">
                <td className="px-3 py-2 font-semibold text-slate-800">
                  {row.schedule}
                </td>
                <td className="px-3 py-2 font-semibold text-amber-900">
                  {row.peptide}
                </td>
                <td className="px-3 py-2 text-slate-600">{row.context}</td>
                <td className="px-3 py-2 text-slate-600">{row.kp10Note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ModuleShell>
  );
}

export function Kisspeptin10AnecdotalProtocols() {
  const [open, setOpen] = useState("common");
  const row =
    KP10_ANECDOTAL_PROTOCOLS.find((p) => p.id === open) ||
    KP10_ANECDOTAL_PROTOCOLS[0];

  return (
    <ModuleShell
      kicker="Reported protocols"
      title="Commercial fixed boluses · Yeung 2026 pump · proposed trial arms"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Protocol types"
          options={KP10_ANECDOTAL_PROTOCOLS.map((p) => ({
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

export function Kisspeptin10CumulativeCalc() {
  const [presetId, setPresetId] = useState("100qd");
  const preset =
    KP10_CUMULATIVE_PRESETS.find((p) => p.id === presetId) ||
    KP10_CUMULATIVE_PRESETS[0];

  const result = useMemo(() => {
    if (preset.type === "fixed") {
      return kp10FixedRateDaily({
        nmolPerH: preset.nmolPerH,
        hours: preset.hours,
        days: preset.days,
      });
    }
    if (preset.id === "250tiw") {
      const weeks = preset.weeks || 8;
      const totalDoses = weeks * preset.freq;
      const totalMcg = preset.mcgPerDose * totalDoses;
      return {
        mcgPerDose: preset.mcgPerDose,
        dosesPerDay: preset.freq,
        days: weeks * 7,
        dailyMcg: null,
        totalMcg,
        totalMg: totalMcg / 1000,
        label: `${preset.mcgPerDose} mcg × ${totalDoses} doses over ${weeks} wk`,
      };
    }
    return kp10CumulativeExposure({
      mcgPerDose: preset.mcgPerDose,
      dosesPerDay: preset.freq,
      days: preset.days,
    });
  }, [preset]);

  return (
    <ModuleShell
      kicker="Cumulative exposure"
      title="Fixed bolus courses vs pump infusion totals"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Schedule presets"
          options={KP10_CUMULATIVE_PRESETS.map((p) => ({
            id: p.id,
            label: p.label,
          }))}
          value={presetId}
          onChange={setPresetId}
        />
      </div>
      {result ? (
        <div className="grid gap-3 px-4 py-4 sm:grid-cols-3">
          <div>
            <p className="text-[10px] font-bold uppercase text-slate-500">
              {result.label ? "Schedule" : "Daily (if applicable)"}
            </p>
            <p className="text-xl font-bold text-indigo-800">
              {result.label ||
                (result.dailyMcg != null ? `${result.dailyMcg} mcg` : "—")}
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase text-slate-500">
              Course total
            </p>
            <p className="text-xl font-bold text-indigo-800">
              {result.totalMg.toFixed(2)} mg
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase text-slate-500">
              Total mcg
            </p>
            <p className="text-xl font-bold text-indigo-800">
              {Math.round(result.totalMcg).toLocaleString()} mcg
            </p>
          </div>
        </div>
      ) : null}
      <p className="border-t border-slate-100 px-4 py-3 text-[11px] text-slate-600">
        Cumulative mass alone does not predict endocrine effect — peak
        concentration, washout, and receptor state all matter.
      </p>
    </ModuleShell>
  );
}

export function Kisspeptin10ClinicalVsAnecdotal() {
  const { clinical, anecdotal } = KP10_COMPARE;

  return (
    <ModuleShell
      kicker="Evidence split"
      title="Human study record vs online fixed-bolus conventions"
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

export function Kisspeptin10PreclinicalDoses() {
  return (
    <ModuleShell
      kicker="Preclinical anchors"
      title="Primate desensitization · intermittent pulses · not human conversion"
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
            {KP10_PRECLINICAL.map((row) => (
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

export function Kisspeptin10ProtocolTimeline() {
  const [weightKg, setWeightKg] = useState("75");
  const lowInfusion = useMemo(
    () =>
      kp10InfusionDailyMass({
        nmolPerKgH: 1.25,
        weightKg: Number(weightKg),
        hours: 8,
      }),
    [weightKg]
  );
  const midInfusion = useMemo(
    () =>
      kp10InfusionDailyMass({
        nmolPerKgH: 2.5,
        weightKg: Number(weightKg),
        hours: 8,
      }),
    [weightKg]
  );

  return (
    <ModuleShell
      kicker="Proposed staged trial"
      title="Part A crossover → Part B 28-day parallel (1.25 / 2.5 nmol/kg/h)"
    >
      <div className="overflow-x-auto border-b border-slate-100">
        <p className="px-4 pt-3 text-xs font-bold text-slate-800">
          Part A — 24 men · 4-period crossover · 8-h SC pump · ≥7-day washout
        </p>
        <table className="mt-2 w-full min-w-[440px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2 font-semibold">Period</th>
              <th className="px-3 py-2 font-semibold">Rate</th>
              <th className="px-3 py-2 font-semibold">Note</th>
            </tr>
          </thead>
          <tbody>
            {KP10_PART_A.map((row) => (
              <tr key={row.period} className="border-t border-slate-50">
                <td className="px-3 py-2">{row.period}</td>
                <td className="px-3 py-2 font-semibold text-indigo-800">
                  {row.rate === 0
                    ? "Placebo"
                    : `${row.rate} nmol/kg/h`}
                </td>
                <td className="px-3 py-2 text-slate-600">{row.label}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="overflow-x-auto px-4 py-3">
        <p className="text-xs font-bold text-slate-800">
          Part B — 90 men · 28 days · 8 h on / 16 h off · functional secondary
          hypogonadism
        </p>
        <table className="mt-2 w-full min-w-[520px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2 font-semibold">Arm</th>
              <th className="px-3 py-2 font-semibold">nmol/kg/h</th>
              <th className="px-3 py-2 font-semibold">mcg/kg/day (8 h)</th>
              <th className="px-3 py-2 font-semibold">Ref. 75 kg/day</th>
            </tr>
          </thead>
          <tbody>
            {KP10_PART_B.map((row) => (
              <tr key={row.arm} className="border-t border-slate-50">
                <td className="px-3 py-2">{row.arm}</td>
                <td className="px-3 py-2 font-semibold text-indigo-800">
                  {row.rate === 0 ? "0" : row.rate}
                </td>
                <td className="px-3 py-2 text-slate-600">
                  {row.mcgPerKgDay === 0
                    ? "—"
                    : `${row.mcgPerKgDay} mcg/kg`}
                </td>
                <td className="px-3 py-2 text-slate-600">
                  {row.mg75kg === 0 ? "—" : `${row.mg75kg} mg/infusion day`}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-3 flex flex-wrap items-end gap-3">
          <div>
            <label
              htmlFor="kp10-proto-weight"
              className="mb-1 block text-[10px] font-bold uppercase text-slate-500"
            >
              Weight for daily mass (kg)
            </label>
            <input
              id="kp10-proto-weight"
              type="number"
              min="50"
              step="1"
              value={weightKg}
              onChange={(e) => setWeightKg(e.target.value)}
              className="w-24 rounded-lg border border-slate-200 px-3 py-1.5 text-sm"
            />
          </div>
          {lowInfusion && midInfusion ? (
            <p className="text-[11px] text-slate-600">
              Low arm: <strong>{lowInfusion.totalMg.toFixed(2)} mg</strong>/8 h
              · Mid arm: <strong>{midInfusion.totalMg.toFixed(2)} mg</strong>/8
              h
            </p>
          ) : null}
        </div>
        <p className="mt-3 text-[11px] text-slate-600">
          Part C (conditional): 84-day extension with semen endpoints if Part B
          meets safety and response criteria. Requires DSMB approval — not a
          personal dosing plan.
        </p>
      </div>
    </ModuleShell>
  );
}

export function Kisspeptin10ClaimChecker() {
  const [open, setOpen] = useState(KP10_CLAIMS[0].id);
  const card = KP10_CLAIMS.find((c) => c.id === open) || KP10_CLAIMS[0];

  return (
    <ModuleShell
      kicker="Claim checker"
      title="Common KP-10 claims vs the evidence record"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Claims"
          options={KP10_CLAIMS.map((c) => ({
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

export function Kisspeptin10EvidenceLadder() {
  return (
    <ModuleShell
      kicker="Dosage evidence ladder"
      title="Acute IV moderate · intermittent SC promising · fixed bolus unvalidated"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Dosage information</th>
              <th className="px-3 py-2.5 font-semibold">Evidence</th>
              <th className="px-3 py-2.5 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {KP10_EVIDENCE_LADDER.map((row) => (
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

export function Kisspeptin10AdverseEventTable() {
  const [mode, setMode] = useState("simple");

  return (
    <ModuleShell
      kicker="Safety monitoring"
      title="Human record · FAERS signal · endocrine domains · FDA compounding"
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
          {KP10_AE_SIMPLE.map((row) => (
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
              {KP10_AE_FULL.map((row) => (
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
