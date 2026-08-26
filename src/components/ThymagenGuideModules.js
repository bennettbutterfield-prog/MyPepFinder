"use client";

import { useMemo, useState } from "react";
import {
  THYMAGEN_AE_FULL,
  THYMAGEN_AE_SIMPLE,
  THYMAGEN_CLAIMS,
  THYMAGEN_COMPARE,
  THYMAGEN_COURSE_PRESETS,
  THYMAGEN_EVIDENCE_LADDER,
  THYMAGEN_HUMAN_STATUS,
  THYMAGEN_IDENTITY,
  THYMAGEN_PROTOCOL_PHASES,
  thymagenAmountFromVial,
  thymagenImCourse,
} from "@/data/thymagen-dosage-guide";

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

export function ThymagenIdentityGate() {
  const [id, setId] = useState("ew-correct");
  const card =
    THYMAGEN_IDENTITY.find((c) => c.id === id) || THYMAGEN_IDENTITY[0];

  return (
    <ModuleShell
      kicker="Identity gate"
      title="Confirm L-α-Glu-L-Trp — not Thymalin, TA-1, Bestim, or IM862 by default"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Identity check"
          options={THYMAGEN_IDENTITY.map((c) => ({
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

export function ThymagenHumanStatus() {
  return (
    <ModuleShell
      kicker="Human evidence status"
      title="100 µg regional Timogen · oral gel RCT · oncology IM862 (negative later)"
    >
      <dl className="divide-y divide-slate-100">
        {THYMAGEN_HUMAN_STATUS.map(([q, a]) => (
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

export function ThymagenClinicalVsAnecdotal() {
  const { clinical, anecdotal } = THYMAGEN_COMPARE;

  return (
    <ModuleShell
      kicker="Evidence split"
      title="Registered products & trials vs current SC web conventions"
    >
      <div className="grid gap-0 lg:grid-cols-2">
        {[clinical, anecdotal].map((col, idx) => (
          <div
            key={col.title}
            className={`p-4 ${
              idx === 0
                ? "border-b border-slate-100 lg:border-b-0 lg:border-r"
                : "bg-slate-50"
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

export function ThymagenCourseCalc() {
  const [id, setId] = useState("im5");
  const preset =
    THYMAGEN_COURSE_PRESETS.find((p) => p.id === id) ||
    THYMAGEN_COURSE_PRESETS[1];
  const course = useMemo(
    () =>
      thymagenImCourse({ dailyUg: preset.dailyUg, days: preset.days }),
    [preset]
  );

  const vialMultiple = course ? 20 / course.cumulativeMg : null;

  return (
    <ModuleShell
      kicker="Course vs vial math"
      title="Adult IM course totals — a 20 mg vial is not one clinical course"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="IM course"
          options={THYMAGEN_COURSE_PRESETS.map((p) => ({
            id: p.id,
            label: p.label,
          }))}
          value={id}
          onChange={setId}
        />
      </div>
      {course ? (
        <div className="grid gap-3 p-4 sm:grid-cols-3">
          <div className="rounded-lg border border-teal-100 bg-teal-50 px-3 py-3">
            <p className="text-[10px] font-bold uppercase tracking-wide text-teal-700">
              Daily
            </p>
            <p className="mt-1 text-lg font-bold text-teal-900">
              {course.dailyUg} µg
            </p>
          </div>
          <div className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-3">
            <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
              Course total
            </p>
            <p className="mt-1 text-lg font-bold text-slate-900">
              {course.cumulativeMg} mg
            </p>
          </div>
          <div className="rounded-lg border border-amber-100 bg-amber-50 px-3 py-3">
            <p className="text-[10px] font-bold uppercase tracking-wide text-amber-800">
              20 mg vial ÷ this course
            </p>
            <p className="mt-1 text-lg font-bold text-amber-950">
              ≈ {vialMultiple?.toFixed(0)}×
            </p>
          </div>
        </div>
      ) : null}
      <p className="border-t border-amber-100 bg-amber-50 px-4 py-3 text-[11px] font-semibold text-amber-950">
        Regasthym oral gel cumulative is 55.44 mg over 28 days — a different
        matrix and indication, not absorbed-exposure equivalence to IM.
      </p>
    </ModuleShell>
  );
}

export function ThymagenProtocolTimeline() {
  const [id, setId] = useState("dosing");
  const phase =
    THYMAGEN_PROTOCOL_PHASES.find((p) => p.id === id) ||
    THYMAGEN_PROTOCOL_PHASES[1];

  return (
    <ModuleShell
      kicker="THYMAGEN-1 research framework"
      title="100 µg IM daily × 5 days · free-peptide equivalent · vs placebo · then flu vaccine"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Protocol phase"
          options={THYMAGEN_PROTOCOL_PHASES.map((p) => ({
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
        Investigator-initiated design only — GMP sterile product, intact-peptide
        PK, and DSMB required. Not a home SC “cycle.”
      </p>
    </ModuleShell>
  );
}

export function ThymagenReconCalc() {
  const [diluent, setDiluent] = useState("2");
  const [target, setTarget] = useState("100");

  const result = useMemo(
    () =>
      thymagenAmountFromVial({
        vialMg: 20,
        diluentMl: Number(diluent),
        targetUg: Number(target),
      }),
    [diluent, target]
  );

  return (
    <ModuleShell
      kicker="Pharmacy arithmetic"
      title="Nominal 20 mg vial examples — does not validate research-vial injection"
    >
      <div className="space-y-3 border-b border-slate-100 px-4 py-3">
        <div>
          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Diluent (20 mg vial)
          </p>
          <ChipGroup
            label="Diluent"
            options={[
              { id: "2", label: "2 mL → 10 mg/mL" },
              { id: "5", label: "5 mL → 4 mg/mL" },
            ]}
            value={diluent}
            onChange={setDiluent}
          />
        </div>
        <div>
          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Target amount
          </p>
          <ChipGroup
            label="Target"
            options={[
              { id: "100", label: "100 µg" },
              { id: "200", label: "200 µg" },
              { id: "500", label: "500 µg" },
              { id: "1000", label: "1 mg" },
            ]}
            value={target}
            onChange={setTarget}
          />
        </div>
      </div>
      {result ? (
        <div className="px-4 py-4">
          <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Withdrawal volume
          </p>
          <p className="mt-1 text-2xl font-bold text-teal-800">
            {result.volumeMl.toFixed(3)} mL
          </p>
          <p className="mt-1 text-[11px] text-slate-600">
            {result.concMgPerMl.toFixed(1)} mg/mL · ≈ {result.units.toFixed(1)}{" "}
            U-100 units · {result.targetUg} µg target
          </p>
          {result.volumeMl < 0.05 ? (
            <p className="mt-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-[11px] font-semibold text-amber-950">
              Volumes under ~0.05 mL magnify syringe error — a legitimate
              protocol uses pharmacy-validated intermediate dilution.
            </p>
          ) : null}
        </div>
      ) : null}
    </ModuleShell>
  );
}

export function ThymagenClaimChecker() {
  const [open, setOpen] = useState(THYMAGEN_CLAIMS[0].id);
  const card =
    THYMAGEN_CLAIMS.find((c) => c.id === open) || THYMAGEN_CLAIMS[0];

  return (
    <ModuleShell
      kicker="Claim checker"
      title="Common Thymagen claims vs the evidence record"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Claims"
          options={THYMAGEN_CLAIMS.map((c) => ({
            id: c.id,
            label: c.claim.length > 42 ? `${c.claim.slice(0, 40)}…` : c.claim,
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

export function ThymagenEvidenceLadder() {
  return (
    <ModuleShell
      kicker="Dosage evidence ladder"
      title="Exposures are documented — interchangeability is not"
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
            {THYMAGEN_EVIDENCE_LADDER.map((row) => (
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

export function ThymagenAdverseEventTable() {
  const [mode, setMode] = useState("simple");

  return (
    <ModuleShell
      kicker="Safety monitoring"
      title="Product-specific labels and trial AEs — not a blank SC safety passport"
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
          {THYMAGEN_AE_SIMPLE.map((row) => (
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
          {THYMAGEN_AE_FULL.map((row) => (
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
