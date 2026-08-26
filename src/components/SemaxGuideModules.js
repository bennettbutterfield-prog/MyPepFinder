"use client";

import { useMemo, useState } from "react";
import {
  SEMAX_ANECDOTAL_PROTOCOLS,
  SEMAX_AE_FULL,
  SEMAX_AE_SIMPLE,
  SEMAX_CLAIMS,
  SEMAX_COMPARE,
  SEMAX_CONCENTRATION_COMPARE,
  SEMAX_CUMULATIVE_PRESETS,
  SEMAX_EVIDENCE_HIERARCHY,
  SEMAX_EVIDENCE_LADDER,
  SEMAX_HUMAN_STUDIES,
  SEMAX_IDENTITY,
  SEMAX_LABEL_01_INDICATIONS,
  SEMAX_PART_A,
  SEMAX_PART_B,
  SEMAX_PRECLINICAL,
  SEMAX_STROKE_1PCT,
  semaxCumulativeExposure,
  semaxDropDose,
  semaxMcgPerDrop,
} from "@/data/semax-dosage-guide";

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

export function SemaxIdentityGate() {
  const [id, setId] = useState("semax");
  const card = SEMAX_IDENTITY.find((c) => c.id === id) || SEMAX_IDENTITY[0];

  return (
    <ModuleShell
      kicker="Identity gate"
      title="Semax (MEHFPGP) vs acetate · N-acetyl · amidated · Adamax"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Identity check"
          options={SEMAX_IDENTITY.map((c) => ({ id: c.id, label: c.label }))}
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

export function SemaxConcentrationCompare() {
  return (
    <ModuleShell
      kicker="Tenfold concentration split"
      title="0.1% (~50 mcg/drop) vs 1% (~500 mcg/drop) — same drop count, 10× exposure"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[480px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Drops</th>
              <th className="px-3 py-2.5 font-semibold">0.1% total mcg</th>
              <th className="px-3 py-2.5 font-semibold">1% total mcg</th>
              <th className="px-3 py-2.5 font-semibold">Ratio</th>
            </tr>
          </thead>
          <tbody>
            {SEMAX_CONCENTRATION_COMPARE.map((row) => (
              <tr key={row.drops} className="border-t border-slate-50">
                <td className="px-3 py-2 font-semibold text-slate-800">
                  {row.drops}
                </td>
                <td className="px-3 py-2 text-indigo-800">{row.pct01} mcg</td>
                <td className="px-3 py-2 font-semibold text-amber-900">
                  {row.pct1} mcg
                </td>
                <td className="px-3 py-2 text-slate-600">10×</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="border-t border-slate-100 px-4 py-3 text-[11px] text-amber-900">
        Confusing 0.1% and 1% is the most common Semax dosing error — not a
        strength preference.
      </p>
    </ModuleShell>
  );
}

export function SemaxDropCalc() {
  const [drops, setDrops] = useState("4");
  const [concentration, setConcentration] = useState("0.1");

  const result = useMemo(
    () =>
      semaxDropDose({
        drops: Number(drops),
        concentrationPct: Number(concentration),
      }),
    [drops, concentration]
  );

  const mcgPerDrop = semaxMcgPerDrop(Number(concentration));

  return (
    <ModuleShell
      kicker="Drop calculator"
      title="Drops × concentration → mcg per administration"
    >
      <div className="grid gap-3 border-b border-slate-100 px-4 py-3 sm:grid-cols-2">
        <div>
          <label
            htmlFor="semax-drops"
            className="mb-1 block text-[10px] font-bold uppercase text-slate-500"
          >
            Drops (single nostril or combined — specify in protocol)
          </label>
          <input
            id="semax-drops"
            type="number"
            min="1"
            step="1"
            value={drops}
            onChange={(e) => setDrops(e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="semax-conc"
            className="mb-1 block text-[10px] font-bold uppercase text-slate-500"
          >
            Concentration (%)
          </label>
          <ChipGroup
            label="Concentration"
            options={[
              { id: "0.1", label: "0.1% (1 mg/mL)" },
              { id: "1", label: "1% (10 mg/mL)" },
            ]}
            value={concentration}
            onChange={setConcentration}
          />
        </div>
      </div>
      {result ? (
        <div className="grid gap-3 px-4 py-4 sm:grid-cols-3">
          <div>
            <p className="text-[10px] font-bold uppercase text-slate-500">
              mcg per drop
            </p>
            <p className="text-xl font-bold text-indigo-800">
              {result.mcgPerDrop} mcg
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase text-slate-500">
              Total ({result.drops} drops)
            </p>
            <p className="text-xl font-bold text-indigo-800">
              {result.totalMcg} mcg
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
        Assumes 0.05 mL per drop ({mcgPerDrop} mcg at {concentration}%).
        Russian label limits large doses to 2–3 drops/nostril per administration.
      </p>
    </ModuleShell>
  );
}

export function SemaxLabelIndications() {
  return (
    <ModuleShell
      kicker="Russian 0.1% product"
      title="Indication-specific intranasal schedules"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Context</th>
              <th className="px-3 py-2.5 font-semibold">Per dose</th>
              <th className="px-3 py-2.5 font-semibold">Frequency</th>
              <th className="px-3 py-2.5 font-semibold">Daily</th>
              <th className="px-3 py-2.5 font-semibold">Duration</th>
            </tr>
          </thead>
          <tbody>
            {SEMAX_LABEL_01_INDICATIONS.map((row) => (
              <tr key={row.context} className="border-t border-slate-50 align-top">
                <td className="px-3 py-2 font-semibold text-slate-800">
                  {row.context}
                </td>
                <td className="px-3 py-2 text-slate-600">{row.perDose}</td>
                <td className="px-3 py-2 text-slate-600">{row.frequency}</td>
                <td className="px-3 py-2 font-semibold text-indigo-800">
                  {row.daily}
                </td>
                <td className="px-3 py-2 text-slate-600">{row.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ModuleShell>
  );
}

export function SemaxStrokeRegimens() {
  return (
    <ModuleShell
      kicker="1% acute stroke product"
      title="6–20 mg/day regimens — medical emergency context only"
    >
      <div className="border-b border-amber-100 bg-amber-50 px-4 py-3">
        <p className="text-[11px] font-semibold text-amber-950">
          Not cognitive or nootropic precedents. These are acute ischemic stroke
          product instructions requiring standard stroke care.
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Severity</th>
              <th className="px-3 py-2.5 font-semibold">Per dose</th>
              <th className="px-3 py-2.5 font-semibold">Frequency</th>
              <th className="px-3 py-2.5 font-semibold">Daily</th>
              <th className="px-3 py-2.5 font-semibold">Duration</th>
            </tr>
          </thead>
          <tbody>
            {SEMAX_STROKE_1PCT.map((row) => (
              <tr key={row.severity} className="border-t border-slate-50 align-top">
                <td className="px-3 py-2 font-semibold text-slate-800">
                  {row.severity}
                </td>
                <td className="px-3 py-2 text-slate-600">{row.perDose}</td>
                <td className="px-3 py-2 text-slate-600">{row.frequency}</td>
                <td className="px-3 py-2 font-semibold text-amber-900">
                  {row.daily}
                </td>
                <td className="px-3 py-2 text-slate-600">{row.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ModuleShell>
  );
}

export function SemaxHumanStudies() {
  return (
    <ModuleShell
      kicker="Human clinical research"
      title="250 mcg–20 mg/day by context · quality and purpose vary"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Study</th>
              <th className="px-3 py-2.5 font-semibold">Dose</th>
              <th className="px-3 py-2.5 font-semibold">Route</th>
              <th className="px-3 py-2.5 font-semibold">Duration</th>
              <th className="px-3 py-2.5 font-semibold">Purpose</th>
            </tr>
          </thead>
          <tbody>
            {SEMAX_HUMAN_STUDIES.map((row) => (
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
                <td className="px-3 py-2 text-slate-600">{row.purpose}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ModuleShell>
  );
}

export function SemaxEvidenceHierarchy() {
  return (
    <ModuleShell
      kicker="Evidence hierarchy"
      title="Russian product strongest · SC and long-term weakest"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Category</th>
              <th className="px-3 py-2.5 font-semibold">Semax evidence</th>
              <th className="px-3 py-2.5 font-semibold">Interpretation</th>
            </tr>
          </thead>
          <tbody>
            {SEMAX_EVIDENCE_HIERARCHY.map(([cat, ev, interp]) => (
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

export function SemaxAnecdotalProtocols() {
  const [open, setOpen] = useState("adaptation");
  const row =
    SEMAX_ANECDOTAL_PROTOCOLS.find((p) => p.id === open) ||
    SEMAX_ANECDOTAL_PROTOCOLS[0];

  return (
    <ModuleShell
      kicker="Reported protocols"
      title="Russian label · fMRI single dose · online IN/SC · proposed study"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Protocol types"
          options={SEMAX_ANECDOTAL_PROTOCOLS.map((p) => ({
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

export function SemaxCumulativeCalc() {
  const [presetId, setPresetId] = useState("200bid");
  const preset =
    SEMAX_CUMULATIVE_PRESETS.find((p) => p.id === presetId) ||
    SEMAX_CUMULATIVE_PRESETS[0];
  const result = useMemo(
    () =>
      semaxCumulativeExposure({
        mcgPerDose: preset.mcgPerDose,
        dosesPerDay: preset.freq,
        days: preset.days,
      }),
    [preset]
  );

  return (
    <ModuleShell
      kicker="Cumulative exposure"
      title="Daily and course totals — online · proposed · rehab context"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Schedule presets"
          options={SEMAX_CUMULATIVE_PRESETS.map((p) => ({
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
              Daily
            </p>
            <p className="text-xl font-bold text-indigo-800">
              {result.dailyMcg} mcg
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
              Per dose
            </p>
            <p className="text-xl font-bold text-indigo-800">
              {result.mcgPerDose} mcg × {result.dosesPerDay}/day
            </p>
          </div>
        </div>
      ) : null}
    </ModuleShell>
  );
}

export function SemaxClinicalVsAnecdotal() {
  const { clinical, anecdotal } = SEMAX_COMPARE;

  return (
    <ModuleShell
      kicker="Evidence split"
      title="Medicinal-product record vs online conventions"
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

export function SemaxPreclinicalDoses() {
  return (
    <ModuleShell
      kicker="Preclinical anchors"
      title="25–100 mcg/kg rodents — mechanistic only"
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
            {SEMAX_PRECLINICAL.map((row) => (
              <tr
                key={`${row.model}-${row.route}`}
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

export function SemaxProtocolTimeline() {
  return (
    <ModuleShell
      kicker="Proposed dose-ranging design"
      title="Part A crossover singles → Part B 400 / 900 / 1,800 mcg/day × 5 days"
    >
      <div className="overflow-x-auto border-b border-slate-100">
        <p className="px-4 pt-3 text-xs font-bold text-slate-800">
          Part A — 30 healthy adults · 5-period crossover · 7-day washout
        </p>
        <table className="mt-2 w-full min-w-[440px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2 font-semibold">Period</th>
              <th className="px-3 py-2 font-semibold">Single dose</th>
              <th className="px-3 py-2 font-semibold">Note</th>
            </tr>
          </thead>
          <tbody>
            {SEMAX_PART_A.map((row) => (
              <tr key={row.period} className="border-t border-slate-50">
                <td className="px-3 py-2">{row.period}</td>
                <td className="px-3 py-2 font-semibold text-indigo-800">
                  {row.mcg === 0 ? "Placebo" : `${row.mcg} mcg`}
                </td>
                <td className="px-3 py-2 text-slate-600">{row.label}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="overflow-x-auto px-4 py-3">
        <p className="text-xs font-bold text-slate-800">
          Part B — 200 healthy adults · cognitive-fatigue workload · 08:00 + 13:00
        </p>
        <table className="mt-2 w-full min-w-[480px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2 font-semibold">Arm</th>
              <th className="px-3 py-2 font-semibold">AM / PM</th>
              <th className="px-3 py-2 font-semibold">Daily total</th>
            </tr>
          </thead>
          <tbody>
            {SEMAX_PART_B.map((row) => (
              <tr key={row.arm} className="border-t border-slate-50">
                <td className="px-3 py-2">{row.arm}</td>
                <td className="px-3 py-2 text-slate-600">
                  {row.am === 0 && row.pm === 0
                    ? "Placebo"
                    : `${row.am} + ${row.pm} mcg`}
                </td>
                <td className="px-3 py-2 font-semibold text-indigo-800">
                  {row.daily === 0 ? "Placebo" : `${row.daily} mcg/day`}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-3 text-[11px] text-slate-600">
          Low arm matches Russian mental-fatigue lower bracket; high arm extends
          upper bracket. Requires validated metered intranasal delivery and
          MEHFPGP assay — not consumer droppers.
        </p>
      </div>
    </ModuleShell>
  );
}

export function SemaxClaimChecker() {
  const [open, setOpen] = useState(SEMAX_CLAIMS[0].id);
  const card = SEMAX_CLAIMS.find((c) => c.id === open) || SEMAX_CLAIMS[0];

  return (
    <ModuleShell
      kicker="Claim checker"
      title="Common Semax claims vs the evidence record"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Claims"
          options={SEMAX_CLAIMS.map((c) => ({
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

export function SemaxEvidenceLadder() {
  return (
    <ModuleShell
      kicker="Dosage evidence ladder"
      title="Russian product strongest · SC and long-term weakest"
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
            {SEMAX_EVIDENCE_LADDER.map((row) => (
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

export function SemaxAdverseEventTable() {
  const [mode, setMode] = useState("simple");

  return (
    <ModuleShell
      kicker="Safety monitoring"
      title="Product label · nasal/CNS domains · FDA compounding note"
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
          {SEMAX_AE_SIMPLE.map((row) => (
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
              {SEMAX_AE_FULL.map((row) => (
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
