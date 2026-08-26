"use client";

import { useMemo, useState } from "react";
import {
  EPITHALON_AE_FULL,
  EPITHALON_AE_SIMPLE,
  EPITHALON_CLAIMS,
  EPITHALON_COMPARE,
  EPITHALON_CUMULATIVE,
  EPITHALON_EVIDENCE_LADDER,
  EPITHALON_HUMAN_STATUS,
  EPITHALON_IDENTITY,
  EPITHALON_PROTOCOL_PHASES,
  epithalonAmountFromVial,
  epithalonHedFromWeightKg,
} from "@/data/epithalon-dosage-guide";

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

export function EpithalonIdentityGate() {
  const [id, setId] = useState("aedg-correct");
  const card =
    EPITHALON_IDENTITY.find((c) => c.id === id) || EPITHALON_IDENTITY[0];

  return (
    <ModuleShell
      kicker="Identity gate"
      title="Confirm synthetic AEDG — not Epithalamin extract or unresolved salt mass"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Identity check"
          options={EPITHALON_IDENTITY.map((c) => ({
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

export function EpithalonHumanStatus() {
  return (
    <ModuleShell
      kicker="Human evidence status"
      title="Narrow systemic human dosing — no SC trial dose located"
    >
      <dl className="divide-y divide-slate-100">
        {EPITHALON_HUMAN_STATUS.map(([q, a]) => (
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

export function EpithalonClinicalVsAnecdotal() {
  const { clinical, hypothesis, anecdotal } = EPITHALON_COMPARE;

  return (
    <ModuleShell
      kicker="Evidence split"
      title="Studied AEDG vs 2026 microgram hypothesis vs community milligram cycles"
    >
      <div className="grid gap-0 lg:grid-cols-3">
        {[clinical, hypothesis, anecdotal].map((col, idx) => (
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

export function EpithalonHedCalc() {
  const presets = ["50", "60", "70", "80", "90"];
  const [weight, setWeight] = useState("70");
  const hed = useMemo(() => epithalonHedFromWeightKg(weight), [weight]);

  return (
    <ModuleShell
      kicker="HED math only"
      title="2.7–3.3 µg/kg mouse-to-human estimate — not a validated human dose"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Body weight"
          options={presets.map((w) => ({ id: w, label: `${w} kg` }))}
          value={presets.includes(weight) ? weight : ""}
          onChange={setWeight}
        />
        <label className="mt-3 block text-[11px] font-semibold text-slate-700">
          Custom weight (kg)
          <input
            type="number"
            min="1"
            step="1"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-900"
          />
        </label>
      </div>
      {hed ? (
        <div className="grid gap-3 p-4 sm:grid-cols-2">
          <div className="rounded-lg border border-teal-100 bg-teal-50 px-3 py-3">
            <p className="text-[10px] font-bold uppercase tracking-wide text-teal-700">
              Low (2.7 µg/kg)
            </p>
            <p className="mt-1 text-lg font-bold text-teal-900">
              {hed.lowUg.toFixed(0)} µg
            </p>
          </div>
          <div className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-3">
            <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
              High (3.3 µg/kg)
            </p>
            <p className="mt-1 text-lg font-bold text-slate-900">
              {hed.highUg.toFixed(0)} µg
            </p>
          </div>
        </div>
      ) : null}
      <p className="border-t border-amber-100 bg-amber-50 px-4 py-3 text-[11px] font-semibold text-amber-950">
        Mathematical allometry only — ignores human PK, route bioavailability, and
        telomere-biology species differences. Do not personalize dosing from this
        table.
      </p>
    </ModuleShell>
  );
}

export function EpithalonProtocolTimeline() {
  const [id, setId] = useState("exposure");
  const phase =
    EPITHALON_PROTOCOL_PHASES.find((p) => p.id === id) ||
    EPITHALON_PROTOCOL_PHASES[1];

  return (
    <ModuleShell
      kicker="Protocol A"
      title="0.5 mg/day SL × 20 days — evidence-anchored replication"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Protocol phase"
          options={EPITHALON_PROTOCOL_PHASES.map((p) => ({
            id: p.id,
            label: p.phase,
          }))}
          value={id}
          onChange={setId}
        />
      </div>
      <div className="px-4 py-4">
        <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
          {phase.days}
        </p>
        <p className="mt-1 text-2xl font-bold text-teal-800">{phase.daily}</p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-teal-100 bg-teal-50 px-3 py-3">
            <p className="text-[10px] font-bold uppercase tracking-wide text-teal-700">
              Morning
            </p>
            <p className="mt-1 text-sm font-bold text-teal-900">{phase.morning}</p>
          </div>
          <div className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-3">
            <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
              Evening
            </p>
            <p className="mt-1 text-sm font-bold text-slate-900">{phase.evening}</p>
          </div>
        </div>
        <p className="mt-3 text-[11px] text-slate-600">{phase.purpose}</p>
      </div>
      <p className="border-t border-amber-100 bg-amber-50 px-4 py-3 text-[11px] font-semibold text-amber-950">
        Cumulative active exposure: 10 mg over 20 days. Do not double missed doses
        or add days after day 20.
      </p>
    </ModuleShell>
  );
}

export function EpithalonReconCalc() {
  const [vial, setVial] = useState("2");
  const [diluent, setDiluent] = useState("2");
  const [target, setTarget] = useState("0.2");

  const diluentOptions =
    vial === "0.2"
      ? ["0.2", "0.5"]
      : vial === "2"
        ? ["1", "2"]
        : ["1", "2", "5", "10"];

  const result = useMemo(
    () =>
      epithalonAmountFromVial({
        vialMg: Number(vial),
        diluentMl: Number(diluent),
        targetMg: Number(target),
      }),
    [vial, diluent, target]
  );

  return (
    <ModuleShell
      kicker="Reconstitution math"
      title="Volume arithmetic for microgram/low-mg targets — solubility separate"
    >
      <div className="space-y-3 border-b border-slate-100 px-4 py-3">
        <div>
          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Vial (active mg)
          </p>
          <ChipGroup
            label="Vial"
            options={[
              { id: "0.2", label: "0.2 mg single-dose" },
              { id: "2", label: "2 mg" },
              { id: "10", label: "10 mg" },
            ]}
            value={vial}
            onChange={(v) => {
              setVial(v);
              if (v === "0.2") {
                setDiluent("0.2");
                setTarget("0.2");
              } else if (v === "2") {
                setDiluent("2");
                setTarget("0.2");
              } else {
                setDiluent("5");
                setTarget("0.2");
              }
            }}
          />
        </div>
        <div>
          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Final volume
          </p>
          <ChipGroup
            label="Diluent"
            options={diluentOptions.map((ml) => ({
              id: ml,
              label: `${ml} mL`,
            }))}
            value={diluent}
            onChange={setDiluent}
          />
        </div>
        <label className="block text-[11px] font-semibold text-slate-700">
          Target amount (mg)
          <input
            type="number"
            min="0"
            step="0.05"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-900"
          />
        </label>
      </div>
      {result ? (
        <div className="px-4 py-4">
          <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
            {result.concMgPerMl.toFixed(2)} mg/mL · {result.mcgPerUnit.toFixed(1)}{" "}
            µg per U-100 unit
          </p>
          <p className="mt-1 text-2xl font-bold text-teal-800">
            {result.volumeMl.toFixed(3)} mL · {result.units.toFixed(1)} units
          </p>
          <p className="mt-2 text-[11px] text-slate-600">
            Target {result.targetMcg.toFixed(0)} µg. Units are volume markings
            only — not a validated SC dose.
          </p>
          {result.exceedsSolubilityConcern ? (
            <p className="mt-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-[11px] font-semibold text-amber-950">
              Concentration is above FDA’s free-base solubility concern (~3 mg/mL
              in water). Arithmetic is valid; formulation support is missing.
            </p>
          ) : null}
          {vial === "10" && Number(target) <= 0.3 ? (
            <p className="mt-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-[11px] font-semibold text-amber-950">
              A 10 mg vial is poorly suited to microgram-range research — tiny draw
              volumes increase measurement error.
            </p>
          ) : null}
        </div>
      ) : null}
    </ModuleShell>
  );
}

export function EpithalonCumulative() {
  return (
    <ModuleShell
      kicker="Cumulative exposure"
      title="Legacy milligram cycles dwarf studied and hypothesized exposures"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[480px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2 font-semibold">Schedule</th>
              <th className="px-3 py-2 font-semibold">Per day</th>
              <th className="px-3 py-2 font-semibold">Duration</th>
              <th className="px-3 py-2 font-semibold">Cumulative</th>
            </tr>
          </thead>
          <tbody>
            {EPITHALON_CUMULATIVE.map((row) => (
              <tr key={row.schedule} className="border-t border-slate-50">
                <td className="px-3 py-2 font-medium text-slate-800">
                  {row.schedule}
                </td>
                <td className="px-3 py-2 text-slate-600">{row.perDay}</td>
                <td className="px-3 py-2 text-slate-600">{row.duration}</td>
                <td className="px-3 py-2 font-semibold text-teal-800">
                  {row.cumulative}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ModuleShell>
  );
}

export function EpithalonClaimChecker() {
  const [open, setOpen] = useState(EPITHALON_CLAIMS[0].id);
  const card =
    EPITHALON_CLAIMS.find((c) => c.id === open) || EPITHALON_CLAIMS[0];

  return (
    <ModuleShell
      kicker="Claim checker"
      title="Common Epithalon claims vs the evidence record"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Claims"
          options={EPITHALON_CLAIMS.map((c) => ({
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

export function EpithalonEvidenceLadder() {
  return (
    <ModuleShell
      kicker="Dosage evidence ladder"
      title="Overall Epitalon dosing evidence: poorly established"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Level</th>
              <th className="px-3 py-2.5 font-semibold">What exists</th>
              <th className="px-3 py-2.5 font-semibold">Assessment</th>
            </tr>
          </thead>
          <tbody>
            {EPITHALON_EVIDENCE_LADDER.map((row) => (
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

export function EpithalonAdverseEventTable() {
  const [mode, setMode] = useState("simple");

  return (
    <ModuleShell
      kicker="Safety monitoring"
      title="Incidence unknown — track local, hypersensitivity, sleep/mood, and product-quality risks"
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
          {EPITHALON_AE_SIMPLE.map((row) => (
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
          {EPITHALON_AE_FULL.map((row) => (
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
