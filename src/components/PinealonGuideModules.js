"use client";

import { useMemo, useState } from "react";
import {
  PINEALON_AE_FULL,
  PINEALON_AE_SIMPLE,
  PINEALON_CLAIMS,
  PINEALON_COMPARE,
  PINEALON_EVIDENCE_LADDER,
  PINEALON_HUMAN_STATUS,
  PINEALON_IDENTITY,
  PINEALON_ORAL_SCHEDULES,
  PINEALON_PROTOCOL_PHASES,
  pinealonAmountFromVial,
  pinealonOralCumulative,
} from "@/data/pinealon-dosage-guide";

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

export function PinealonIdentityGate() {
  const [id, setId] = useState("edr-correct");
  const card =
    PINEALON_IDENTITY.find((c) => c.id === id) || PINEALON_IDENTITY[0];

  return (
    <ModuleShell
      kicker="Identity gate"
      title="Confirm synthetic EDR — not Epitalon, AC-5 complex, or gross capsule mass"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Identity check"
          options={PINEALON_IDENTITY.map((c) => ({
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

export function PinealonHumanStatus() {
  return (
    <ModuleShell
      kicker="Human evidence status"
      title="Oral microgram reports + one severity-confounded patent IM example"
    >
      <dl className="divide-y divide-slate-100">
        {PINEALON_HUMAN_STATUS.map(([q, a]) => (
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

export function PinealonClinicalVsAnecdotal() {
  const { clinical, anecdotal } = PINEALON_COMPARE;

  return (
    <ModuleShell
      kicker="Evidence split"
      title="Published / patent human reports vs current web conventions"
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

export function PinealonOralCalc() {
  const [id, setId] = useState("tbi");
  const schedule =
    PINEALON_ORAL_SCHEDULES.find((s) => s.id === id) ||
    PINEALON_ORAL_SCHEDULES[0];

  const result = useMemo(() => {
    if (id === "athlete") {
      // Days 1–5 and 11–15: 0.1 mg AM; days 6–10: 0.1 mg AM+PM → 2.0 mg total
      return {
        morningMg: 0.1,
        eveningMg: "0 or 0.1",
        days: 15,
        dailyMg: "0.1–0.2",
        cumulativeMg: 2.0,
        note: schedule.note,
      };
    }
    const calc = pinealonOralCumulative({
      morningMg: schedule.morningMg,
      eveningMg: schedule.eveningMg,
      days: schedule.days,
    });
    return calc ? { ...calc, note: schedule.note } : null;
  }, [id, schedule]);

  return (
    <ModuleShell
      kicker="Oral exposure math"
      title="Assay-corrected EDR course totals — not AC-5 or gross capsule mass"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Oral schedule"
          options={PINEALON_ORAL_SCHEDULES.map((s) => ({
            id: s.id,
            label: s.label,
          }))}
          value={id}
          onChange={setId}
        />
      </div>
      {result ? (
        <div className="grid gap-3 p-4 sm:grid-cols-3">
          <div className="rounded-lg border border-teal-100 bg-teal-50 px-3 py-3">
            <p className="text-[10px] font-bold uppercase tracking-wide text-teal-700">
              Daily exposure
            </p>
            <p className="mt-1 text-lg font-bold text-teal-900">
              {typeof result.dailyMg === "number"
                ? `${result.dailyMg} mg`
                : `${result.dailyMg} mg`}
            </p>
          </div>
          <div className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-3">
            <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
              Course length
            </p>
            <p className="mt-1 text-lg font-bold text-slate-900">
              {result.days} days
            </p>
          </div>
          <div className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-3">
            <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
              Cumulative
            </p>
            <p className="mt-1 text-lg font-bold text-slate-900">
              {result.cumulativeMg} mg
            </p>
          </div>
        </div>
      ) : null}
      <p className="border-t border-amber-100 bg-amber-50 px-4 py-3 text-[11px] font-semibold text-amber-950">
        {result?.note} Documented exposure ≠ proven therapeutic dose.
      </p>
    </ModuleShell>
  );
}

export function PinealonProtocolTimeline() {
  const [id, setId] = useState("treatment");
  const phase =
    PINEALON_PROTOCOL_PHASES.find((p) => p.id === id) ||
    PINEALON_PROTOCOL_PHASES[2];

  return (
    <ModuleShell
      kicker="PINE-1 research framework"
      title="0.2 mg oral BID × 28 days · assay-corrected synthetic EDR · vs placebo"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Protocol phase"
          options={PINEALON_PROTOCOL_PHASES.map((p) => ({
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
        Investigator-initiated design only — ethics approval, GMP product, and
        DSMB required. Not a home or clinic “stack” schedule.
      </p>
    </ModuleShell>
  );
}

export function PinealonReconCalc() {
  const [vial, setVial] = useState("10");
  const [diluent, setDiluent] = useState("2");
  const [target, setTarget] = useState("0.2");

  const result = useMemo(
    () =>
      pinealonAmountFromVial({
        vialMg: Number(vial),
        diluentMl: Number(diluent),
        targetMg: Number(target),
      }),
    [vial, diluent, target]
  );

  return (
    <ModuleShell
      kicker="Pharmacy arithmetic"
      title="Lab / investigational volume examples — does not validate SC use"
    >
      <div className="space-y-3 border-b border-slate-100 px-4 py-3">
        <div>
          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Nominal vial
          </p>
          <ChipGroup
            label="Vial"
            options={[
              { id: "10", label: "10 mg" },
              { id: "20", label: "20 mg" },
            ]}
            value={vial}
            onChange={setVial}
          />
        </div>
        <div>
          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Diluent volume
          </p>
          <ChipGroup
            label="Diluent"
            options={[
              { id: "2", label: "2.0 mL" },
              { id: "4", label: "4.0 mL" },
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
              { id: "0.1", label: "0.1 mg" },
              { id: "0.2", label: "0.2 mg" },
              { id: "1", label: "1 mg" },
              { id: "5", label: "5 mg" },
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
              Volumes under ~0.05 mL are often unreliable with common syringes —
              use validated serial dilution in a qualified lab/pharmacy.
            </p>
          ) : null}
        </div>
      ) : null}
    </ModuleShell>
  );
}

export function PinealonClaimChecker() {
  const [open, setOpen] = useState(PINEALON_CLAIMS[0].id);
  const card =
    PINEALON_CLAIMS.find((c) => c.id === open) || PINEALON_CLAIMS[0];

  return (
    <ModuleShell
      kicker="Claim checker"
      title="Common Pinealon claims vs the evidence record"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Claims"
          options={PINEALON_CLAIMS.map((c) => ({
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

export function PinealonEvidenceLadder() {
  return (
    <ModuleShell
      kicker="Dosage evidence ladder"
      title="Pinealon dosing is poorly established"
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
            {PINEALON_EVIDENCE_LADDER.map((row) => (
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

export function PinealonAdverseEventTable() {
  const [mode, setMode] = useState("simple");

  return (
    <ModuleShell
      kicker="Safety monitoring"
      title="Sparse AE reporting — not a “no side effects” conclusion"
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
          {PINEALON_AE_SIMPLE.map((row) => (
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
          {PINEALON_AE_FULL.map((row) => (
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
