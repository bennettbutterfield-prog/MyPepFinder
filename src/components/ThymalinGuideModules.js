"use client";

import { useMemo, useState } from "react";
import {
  THYMALIN_AE_FULL,
  THYMALIN_AE_SIMPLE,
  THYMALIN_CLAIMS,
  THYMALIN_COMPARE,
  THYMALIN_COURSE_PRESETS,
  THYMALIN_EVIDENCE_LADDER,
  THYMALIN_HUMAN_STATUS,
  THYMALIN_IDENTITY,
  THYMALIN_PROTOCOL_PHASES,
  thymalinAmountFromVial,
  thymalinCourseTotal,
} from "@/data/thymalin-dosage-guide";

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

export function ThymalinIdentityGate() {
  const [id, setId] = useState("extract-correct");
  const card =
    THYMALIN_IDENTITY.find((c) => c.id === id) || THYMALIN_IDENTITY[0];

  return (
    <ModuleShell
      kicker="Identity gate"
      title="Confirm bovine thymus extract — not Tα1, Thymogen, thymulin, or one peptide"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Identity check"
          options={THYMALIN_IDENTITY.map((c) => ({
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

export function ThymalinHumanStatus() {
  return (
    <ModuleShell
      kicker="Human evidence status"
      title="Regional IM label · 2021 COVID trial · historical gerontology"
    >
      <dl className="divide-y divide-slate-100">
        {THYMALIN_HUMAN_STATUS.map(([q, a]) => (
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

export function ThymalinClinicalVsAnecdotal() {
  const { clinical, anecdotal } = THYMALIN_COMPARE;

  return (
    <ModuleShell
      kicker="Evidence split"
      title="Medicinal label & trials vs online SC / stack conventions"
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

export function ThymalinCourseCalc() {
  const [id, setId] = useState("covid");
  const preset =
    THYMALIN_COURSE_PRESETS.find((p) => p.id === id) ||
    THYMALIN_COURSE_PRESETS[1];
  const course = useMemo(
    () => thymalinCourseTotal({ dailyMg: preset.dailyMg, days: preset.days }),
    [preset]
  );

  return (
    <ModuleShell
      kicker="Course math"
      title="Cumulative extract mass — 10 mg = total extract, not one peptide"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Schedule"
          options={THYMALIN_COURSE_PRESETS.map((p) => ({
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
              Daily extract
            </p>
            <p className="mt-1 text-lg font-bold text-teal-900">
              {course.dailyMg} mg
            </p>
          </div>
          <div className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-3">
            <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
              Administrations
            </p>
            <p className="mt-1 text-lg font-bold text-slate-900">
              {course.days} days
            </p>
          </div>
          <div className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-3">
            <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
              Cumulative
            </p>
            <p className="mt-1 text-lg font-bold text-slate-900">
              {course.cumulativeMg} mg
            </p>
          </div>
        </div>
      ) : null}
      <p className="border-t border-amber-100 bg-amber-50 px-4 py-3 text-[11px] font-semibold text-amber-950">
        {preset.note}. Documented exposure ≠ validated therapeutic dose. No molar
        conversion for whole extract.
      </p>
    </ModuleShell>
  );
}

export function ThymalinProtocolTimeline() {
  const [id, setId] = useState("dosing");
  const phase =
    THYMALIN_PROTOCOL_PHASES.find((p) => p.id === id) ||
    THYMALIN_PROTOCOL_PHASES[1];

  return (
    <ModuleShell
      kicker="THYMALIN-1 research framework"
      title="10 mg extract in 2 mL IM daily × 10 days · glycine-matched placebo · then flu vaccine"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Protocol phase"
          options={THYMALIN_PROTOCOL_PHASES.map((p) => ({
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
        GMP lot, multipeak fingerprint, glycine placebo, and DSMB required —
        not a home SC “longevity cycle.”
      </p>
    </ModuleShell>
  );
}

export function ThymalinReconCalc() {
  const [diluent, setDiluent] = useState("2");
  const [target, setTarget] = useState("10");

  const result = useMemo(
    () =>
      thymalinAmountFromVial({
        vialMg: 10,
        diluentMl: Number(diluent),
        targetMg: Number(target),
      }),
    [diluent, target]
  );

  return (
    <ModuleShell
      kicker="Pharmacy arithmetic"
      title="Registered 10 mg vial examples — saline prep · IM route in label/studies"
    >
      <div className="space-y-3 border-b border-slate-100 px-4 py-3">
        <div>
          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Final volume (isotonic saline)
          </p>
          <ChipGroup
            label="Volume"
            options={[
              { id: "1", label: "1 mL → 10 mg/mL" },
              { id: "2", label: "2 mL → 5 mg/mL" },
            ]}
            value={diluent}
            onChange={setDiluent}
          />
        </div>
        <div>
          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Target extract mass
          </p>
          <ChipGroup
            label="Target"
            options={[
              { id: "5", label: "5 mg" },
              { id: "10", label: "10 mg (full vial)" },
              { id: "20", label: "20 mg (2 vials)" },
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
            {result.volumeMl.toFixed(2)} mL
          </p>
          <p className="mt-1 text-[11px] text-slate-600">
            {result.concMgPerMl.toFixed(1)} mg/mL extract · ≈{" "}
            {result.units.toFixed(0)} U-100 units · {result.targetMg} mg target
          </p>
          {Number(target) > 10 ? (
            <p className="mt-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-[11px] font-semibold text-amber-950">
              20 mg = two full 10 mg medicinal vials — not one nominal research
              vial without analytical bridging.
            </p>
          ) : null}
        </div>
      ) : null}
    </ModuleShell>
  );
}

export function ThymalinClaimChecker() {
  const [open, setOpen] = useState(THYMALIN_CLAIMS[0].id);
  const card =
    THYMALIN_CLAIMS.find((c) => c.id === open) || THYMALIN_CLAIMS[0];

  return (
    <ModuleShell
      kicker="Claim checker"
      title="Common Thymalin claims vs the evidence record"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Claims"
          options={THYMALIN_CLAIMS.map((c) => ({
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

export function ThymalinEvidenceLadder() {
  return (
    <ModuleShell
      kicker="Dosage evidence ladder"
      title="IM milligram range is documented — interchangeability is not"
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
            {THYMALIN_EVIDENCE_LADDER.map((row) => (
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

export function ThymalinAdverseEventTable() {
  const [mode, setMode] = useState("simple");

  return (
    <ModuleShell
      kicker="Safety monitoring"
      title="Allergic reactions on label — extract quality and immunogenicity matter"
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
          {THYMALIN_AE_SIMPLE.map((row) => (
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
          {THYMALIN_AE_FULL.map((row) => (
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
