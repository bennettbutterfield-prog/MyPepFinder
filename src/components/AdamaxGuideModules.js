"use client";

import { useMemo, useState } from "react";
import {
  ADAMAX_AE_FULL,
  ADAMAX_AE_SIMPLE,
  ADAMAX_CLAIMS,
  ADAMAX_COMPARE,
  ADAMAX_EVIDENCE_LADDER,
  ADAMAX_HUMAN_STATUS,
  ADAMAX_IDENTITY_CHECKS,
  ADAMAX_ROUTES,
  ADAMAX_SC_PHASES,
} from "@/data/adamax-dosage-guide";

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

export function AdamaxIdentityGate() {
  const [id, setId] = useState("unsure");
  const card =
    ADAMAX_IDENTITY_CHECKS.find((c) => c.id === id) || ADAMAX_IDENTITY_CHECKS[2];

  return (
    <ModuleShell
      kicker="Identity gate"
      title="Confirm what “AG” means before comparing micrograms"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Material identity"
          options={ADAMAX_IDENTITY_CHECKS.map((c) => ({
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

export function AdamaxHumanStatus() {
  return (
    <ModuleShell
      kicker="Human evidence status"
      title="No Adamax-specific human dose, PK, efficacy, or safety trial identified"
    >
      <dl className="divide-y divide-slate-100">
        {ADAMAX_HUMAN_STATUS.map(([q, a]) => (
          <div
            key={q}
            className="flex items-start justify-between gap-4 px-4 py-2.5"
          >
            <dt className="text-xs text-slate-500">{q}</dt>
            <dd className="text-right text-xs font-bold text-violet-800">{a}</dd>
          </div>
        ))}
      </dl>
      <p className="border-t border-amber-100 bg-amber-50 px-4 py-3 text-[11px] font-semibold text-amber-950">
        Stroke-outcome claims for Adamax usually misattribute Semax research.
        The molecules are not interchangeable.
      </p>
    </ModuleShell>
  );
}

export function AdamaxScTimeline() {
  const [phaseId, setPhaseId] = useState("low");
  const phase =
    ADAMAX_SC_PHASES.find((p) => p.id === phaseId) || ADAMAX_SC_PHASES[1];

  return (
    <ModuleShell
      kicker="Reported SC research schedule"
      title="Eight-week 100 → 200 → 300 mcg convention (anecdotal)"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Protocol phase"
          options={ADAMAX_SC_PHASES.map((p) => ({
            id: p.id,
            label: p.phase,
          }))}
          value={phaseId}
          onChange={setPhaseId}
        />
      </div>
      <div className="px-4 py-4">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
              {phase.weeks}
            </p>
            <p className="mt-1 text-2xl font-bold text-violet-800">
              {phase.amount}
            </p>
          </div>
          <p className="max-w-sm text-right text-[11px] text-slate-600">
            {phase.purpose}
          </p>
        </div>
        <div className="mt-4 flex h-2 overflow-hidden rounded-full bg-slate-100">
          {ADAMAX_SC_PHASES.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setPhaseId(p.id)}
              className={`h-full flex-1 transition ${
                p.id === phaseId ? "bg-violet-600" : "bg-violet-200 hover:bg-violet-300"
              }`}
              aria-label={p.phase}
            />
          ))}
        </div>
        <p className="mt-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-[11px] font-semibold text-amber-950">
          Not a clinically validated regimen. Do not escalate after a predefined
          stopping signal.
        </p>
      </div>
    </ModuleShell>
  );
}

export function AdamaxSprayCalc() {
  const [conc, setConc] = useState("1");
  const [vol, setVol] = useState("0.10");

  const mcg = useMemo(() => {
    const c = Number(conc);
    const v = Number(vol);
    if (!Number.isFinite(c) || !Number.isFinite(v) || c <= 0 || v <= 0) {
      return null;
    }
    return c * v * 1000;
  }, [conc, vol]);

  return (
    <ModuleShell
      kicker="Metered-spray arithmetic"
      title="mcg/spray = concentration × pump volume × 1,000"
    >
      <div className="grid gap-3 px-4 py-4 sm:grid-cols-2">
        <label className="block text-[11px] font-semibold text-slate-700">
          Concentration (mg/mL)
          <input
            type="number"
            min="0"
            step="0.1"
            value={conc}
            onChange={(e) => setConc(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-900"
          />
        </label>
        <label className="block text-[11px] font-semibold text-slate-700">
          Pump volume (mL)
          <input
            type="number"
            min="0"
            step="0.01"
            value={vol}
            onChange={(e) => setVol(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-900"
          />
        </label>
      </div>
      <div className="border-t border-slate-100 px-4 py-4">
        <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
          Nominal amount per spray
        </p>
        <p className="mt-1 text-2xl font-bold text-violet-800">
          {mcg == null ? "—" : `${mcg.toFixed(0)} mcg`}
        </p>
        <p className="mt-2 text-[11px] leading-relaxed text-slate-600">
          Example: 1 mg/mL × 0.10 mL → 100 mcg. Calibrate delivered volume
          gravimetrically. This does not validate the target dose or nasal
          bioavailability.
        </p>
      </div>
    </ModuleShell>
  );
}

export function AdamaxClinicalVsAnecdotal() {
  const c = ADAMAX_COMPARE.clinical;
  const a = ADAMAX_COMPARE.anecdotal;

  return (
    <ModuleShell
      kicker="Evidence split"
      title="No clinical overlap with online 100–300 mcg protocols"
    >
      <div className="grid gap-0 sm:grid-cols-2">
        <div className="border-b border-slate-100 p-4 sm:border-b-0 sm:border-r">
          <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
            {c.title}
          </p>
          <p className="mt-1 text-sm font-bold text-slate-900">{c.status}</p>
          <dl className="mt-3 space-y-2">
            {c.rows.map(([k, v]) => (
              <div key={k}>
                <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                  {k}
                </dt>
                <dd className="text-[11px] text-slate-700">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="bg-slate-50 p-4">
          <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
            {a.title}
          </p>
          <p className="mt-1 text-sm font-bold text-violet-800">{a.status}</p>
          <dl className="mt-3 space-y-2">
            {a.rows.map(([k, v]) => (
              <div key={k}>
                <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                  {k}
                </dt>
                <dd className="text-[11px] text-slate-700">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </ModuleShell>
  );
}

export function AdamaxRouteCompare() {
  const [id, setId] = useState("sc");
  const route = ADAMAX_ROUTES.find((r) => r.id === id) || ADAMAX_ROUTES[1];

  return (
    <ModuleShell
      kicker="Route comparison"
      title="Intranasal vs subcutaneous — no Adamax head-to-head study"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Route"
          options={ADAMAX_ROUTES.map((r) => ({ id: r.id, label: r.label }))}
          value={id}
          onChange={setId}
        />
      </div>
      <div className="px-4 py-4">
        <p className="text-sm font-bold text-slate-900">{route.summary}</p>
        <ul className="mt-3 space-y-1.5">
          {route.points.map((p) => (
            <li key={p} className="text-[11px] text-slate-600">
              • {p}
            </li>
          ))}
        </ul>
      </div>
    </ModuleShell>
  );
}

export function AdamaxClaimChecker() {
  const [open, setOpen] = useState("stronger");

  return (
    <ModuleShell
      kicker="Myth / claim checker"
      title="“Stronger than Semax,” conversions, and twice-weekly outliers"
    >
      <ul className="divide-y divide-slate-100">
        {ADAMAX_CLAIMS.map((c) => {
          const isOpen = open === c.id;
          return (
            <li key={c.id}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? "" : c.id)}
                className="flex w-full items-start justify-between gap-3 px-4 py-3 text-left hover:bg-slate-50"
                aria-expanded={isOpen}
              >
                <div>
                  <p className="text-xs font-bold text-slate-900">{c.claim}</p>
                  <span className="mt-1.5 inline-block rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-900">
                    {c.status}
                  </span>
                </div>
                <span className="text-slate-400">{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen ? (
                <p className="border-t border-slate-50 px-4 pb-3 text-[11px] leading-relaxed text-slate-600">
                  {c.detail}
                </p>
              ) : null}
            </li>
          );
        })}
      </ul>
    </ModuleShell>
  );
}

export function AdamaxEvidenceLadder() {
  return (
    <ModuleShell
      kicker="Dosage evidence ladder"
      title="Adamax sits almost entirely in anecdotal protocol territory"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Evidence level</th>
              <th className="px-3 py-2.5 font-semibold">Adamax evidence</th>
              <th className="px-3 py-2.5 font-semibold">Confidence</th>
            </tr>
          </thead>
          <tbody>
            {ADAMAX_EVIDENCE_LADDER.map((row) => (
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

export function AdamaxAdverseEventTable() {
  const [full, setFull] = useState(false);

  return (
    <ModuleShell
      kicker="Safety findings"
      title="Adamax-specific AE rates unknown — identity is a major variable"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Detail"
          options={[
            { id: "simple", label: "Simple view" },
            { id: "full", label: "Full context" },
          ]}
          value={full ? "full" : "simple"}
          onChange={(v) => setFull(v === "full")}
        />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[480px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Topic</th>
              <th className="px-3 py-2.5 font-semibold">Status</th>
              <th className="px-3 py-2.5 font-semibold">Note</th>
              {full ? (
                <th className="px-3 py-2.5 font-semibold">Context</th>
              ) : null}
            </tr>
          </thead>
          <tbody>
            {(full ? ADAMAX_AE_FULL : ADAMAX_AE_SIMPLE).map((row) => (
              <tr key={row.topic} className="border-t border-slate-50">
                <td className="px-3 py-2 font-medium text-slate-700">
                  {row.topic}
                </td>
                <td className="px-3 py-2 font-semibold text-violet-800">
                  {row.status}
                </td>
                <td className="px-3 py-2 text-slate-600">{row.note}</td>
                {full ? (
                  <td className="px-3 py-2 text-slate-500">{row.context}</td>
                ) : null}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ModuleShell>
  );
}
