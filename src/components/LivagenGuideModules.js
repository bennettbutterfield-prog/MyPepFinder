"use client";

import { useMemo, useState } from "react";
import {
  LIVAGEN_AE_FULL,
  LIVAGEN_AE_SIMPLE,
  LIVAGEN_CLAIMS,
  LIVAGEN_COMPARE,
  LIVAGEN_EVIDENCE_LADDER,
  LIVAGEN_HUMAN_STATUS,
  LIVAGEN_IDENTITY,
  LIVAGEN_PATENT_TIERS,
  LIVAGEN_PROTOCOL_PHASES,
  livagenAmountFromVial,
  livagenPatentAmountFromWeightKg,
} from "@/data/livagen-dosage-guide";

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

function formatMassUg(ug) {
  if (ug >= 1000) return `${(ug / 1000).toFixed(ug % 1000 === 0 ? 0 : 2)} mg`;
  if (ug >= 1) return `${ug.toFixed(ug < 10 ? 1 : 0)} µg`;
  return `${ug.toFixed(2)} µg`;
}

export function LivagenIdentityGate() {
  const [id, setId] = useState("keda-correct");
  const card =
    LIVAGEN_IDENTITY.find((c) => c.id === id) || LIVAGEN_IDENTITY[0];

  return (
    <ModuleShell
      kicker="Identity gate"
      title="Confirm KEDA — not KED, KEDP, Ventvil, or unlabeled combination products"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Identity check"
          options={LIVAGEN_IDENTITY.map((c) => ({
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

export function LivagenHumanStatus() {
  return (
    <ModuleShell
      kicker="Human evidence status"
      title="Patent-reported IM cohort — not a modern peer-reviewed dose-finding trial"
    >
      <dl className="divide-y divide-slate-100">
        {LIVAGEN_HUMAN_STATUS.map(([q, a]) => (
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

export function LivagenClinicalVsAnecdotal() {
  const { patent, verification, community } = LIVAGEN_COMPARE;

  return (
    <ModuleShell
      kicker="Evidence split"
      title="Patent example vs proposed dose verification vs modern online schedules"
    >
      <div className="grid gap-0 lg:grid-cols-3">
        {[patent, verification, community].map((col, idx) => (
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

export function LivagenWeightCalc() {
  const weights = ["50", "70", "100"];
  const [weight, setWeight] = useState("70");
  const [tier, setTier] = useState("1");
  const result = useMemo(
    () => livagenPatentAmountFromWeightKg(weight, tier),
    [weight, tier]
  );

  return (
    <ModuleShell
      kicker="Patent range math"
      title="µg/kg → daily mass — arithmetic only, not a dosing recommendation"
    >
      <div className="space-y-3 border-b border-slate-100 px-4 py-3">
        <div>
          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Body weight
          </p>
          <ChipGroup
            label="Weight"
            options={weights.map((w) => ({ id: w, label: `${w} kg` }))}
            value={weights.includes(weight) ? weight : ""}
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
        <div>
          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Patent / verification tier
          </p>
          <ChipGroup
            label="Tier"
            options={LIVAGEN_PATENT_TIERS.map((t) => ({
              id: String(t),
              label: `${t} µg/kg`,
            }))}
            value={tier}
            onChange={setTier}
          />
        </div>
      </div>
      {result ? (
        <div className="grid gap-3 p-4 sm:grid-cols-3">
          <div className="rounded-lg border border-teal-100 bg-teal-50 px-3 py-3">
            <p className="text-[10px] font-bold uppercase tracking-wide text-teal-700">
              Daily
            </p>
            <p className="mt-1 text-lg font-bold text-teal-900">
              {formatMassUg(result.dailyUg)}
            </p>
          </div>
          <div className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-3">
            <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
              10-day total
            </p>
            <p className="mt-1 text-lg font-bold text-slate-900">
              {formatMassUg(result.day10Ug)}
            </p>
          </div>
          <div className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-3">
            <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
              40-day total
            </p>
            <p className="mt-1 text-lg font-bold text-slate-900">
              {formatMassUg(result.day40Ug)}
            </p>
          </div>
        </div>
      ) : null}
      <p className="border-t border-amber-100 bg-amber-50 px-4 py-3 text-[11px] font-semibold text-amber-950">
        Patent range spans 10,000-fold. Participant-level doses were not disclosed.
        Do not “pick the middle.”
      </p>
    </ModuleShell>
  );
}

export function LivagenProtocolTimeline() {
  const [id, setId] = useState("exposure");
  const phase =
    LIVAGEN_PROTOCOL_PHASES.find((p) => p.id === id) ||
    LIVAGEN_PROTOCOL_PHASES[2];

  return (
    <ModuleShell
      kicker="Dose-verification framework"
      title="10-day IM cohorts · sentinel dosing · between-cohort escalation only"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Protocol phase"
          options={LIVAGEN_PROTOCOL_PHASES.map((p) => ({
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
        <p className="mt-1 text-2xl font-bold text-teal-800">{phase.exposure}</p>
        <p className="mt-2 text-[11px] text-slate-600">{phase.purpose}</p>
      </div>
      <p className="border-t border-amber-100 bg-amber-50 px-4 py-3 text-[11px] font-semibold text-amber-950">
        Primary analysis is descriptive safety — not proof of liver repair. Missed
        doses are skipped (not doubled). No automatic repeat cycle.
      </p>
    </ModuleShell>
  );
}

export function LivagenReconCalc() {
  const [diluent, setDiluent] = useState("2");
  const [target, setTarget] = useState("1");

  const result = useMemo(
    () =>
      livagenAmountFromVial({
        vialMg: 20,
        diluentMl: Number(diluent),
        targetMg: Number(target),
      }),
    [diluent, target]
  );

  return (
    <ModuleShell
      kicker="20 mg vial math"
      title="Assumes assay-corrected KEDA — units are volume markings only"
    >
      <div className="space-y-3 border-b border-slate-100 px-4 py-3">
        <div>
          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Final volume
          </p>
          <ChipGroup
            label="Diluent"
            options={[
              { id: "2", label: "2 mL (10 mg/mL)" },
              { id: "3", label: "3 mL (~6.67 mg/mL)" },
              { id: "4", label: "4 mL (5 mg/mL)" },
            ]}
            value={diluent}
            onChange={setDiluent}
          />
        </div>
        <label className="block text-[11px] font-semibold text-slate-700">
          Target amount (mg)
          <input
            type="number"
            min="0"
            step="0.1"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-900"
          />
        </label>
      </div>
      {result ? (
        <div className="px-4 py-4">
          <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
            {result.concMgPerMl.toFixed(2)} mg/mL · {result.ugPerUnit.toFixed(1)}{" "}
            µg per U-100 unit
          </p>
          <p className="mt-1 text-2xl font-bold text-teal-800">
            {result.volumeMl.toFixed(3)} mL · {result.units.toFixed(1)} units
          </p>
          <p className="mt-2 text-[11px] text-slate-600">
            Target {result.targetUg.toFixed(0)} µg. Arithmetic does not establish
            IM suitability, solubility at high concentration, or a validated dose.
          </p>
        </div>
      ) : null}
    </ModuleShell>
  );
}

export function LivagenClaimChecker() {
  const [open, setOpen] = useState(LIVAGEN_CLAIMS[0].id);
  const card =
    LIVAGEN_CLAIMS.find((c) => c.id === open) || LIVAGEN_CLAIMS[0];

  return (
    <ModuleShell
      kicker="Claim checker"
      title="Common Livagen claims vs the evidence record"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Claims"
          options={LIVAGEN_CLAIMS.map((c) => ({
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

export function LivagenEvidenceLadder() {
  return (
    <ModuleShell
      kicker="Evidence ladder"
      title="Overall Livagen dosing evidence: very low for human regimens"
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
            {LIVAGEN_EVIDENCE_LADDER.map((row) => (
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

export function LivagenAdverseEventTable() {
  const [mode, setMode] = useState("simple");

  return (
    <ModuleShell
      kicker="Safety monitoring"
      title="Incidence unknown — never delay cause-specific liver care for an experimental peptide"
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
          {LIVAGEN_AE_SIMPLE.map((row) => (
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
          {LIVAGEN_AE_FULL.map((row) => (
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
