"use client";

import { useMemo, useState } from "react";
import {
  CARTALAX_AE_FULL,
  CARTALAX_AE_SIMPLE,
  CARTALAX_CLAIMS,
  CARTALAX_COMPARE,
  CARTALAX_EVIDENCE_LADDER,
  CARTALAX_IDENTITY,
  CARTALAX_PATENT_STRATA,
  CARTALAX_SC_PHASES,
  cartalaxAmountFromVial,
} from "@/data/cartalax-dosage-guide";

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

function formatAed(mg) {
  if (mg >= 1) return `${Number(mg.toFixed(3))} mg AED`;
  return `${(mg * 1000).toFixed(0)} µg AED`;
}

export function CartalaxIdentityGate() {
  const [id, setId] = useState("unsure");
  const card = CARTALAX_IDENTITY.find((c) => c.id === id) || CARTALAX_IDENTITY[4];

  return (
    <ModuleShell
      kicker="Identity gate"
      title="Confirm pure AED vs AC-4, PCC, or related peptides"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Identity check"
          options={CARTALAX_IDENTITY.map((c) => ({ id: c.id, label: c.label }))}
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

export function CartalaxPatentStrata() {
  const [stratumId, setStratumId] = useState("mid");
  const stratum =
    CARTALAX_PATENT_STRATA.find((s) => s.id === stratumId) ||
    CARTALAX_PATENT_STRATA[1];

  return (
    <ModuleShell
      kicker="Patent human strata"
      title="EA010574B1 — fixed doses by age/severity, not titration"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Patent stratum"
          options={CARTALAX_PATENT_STRATA.map((s) => ({
            id: s.id,
            label: s.stratum.replace(" stratum", "").replace("Saline control", "Control"),
          }))}
          value={stratumId}
          onChange={setStratumId}
        />
      </div>
      <div className="px-4 py-4">
        <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
          {stratum.population}
        </p>
        <p className="mt-1 text-2xl font-bold text-violet-800">{stratum.daily}</p>
        <p className="mt-1 text-[11px] text-slate-600">
          {stratum.route} · {stratum.duration} · Total {stratum.total}
        </p>
        <p className="mt-2 text-[11px] font-semibold text-slate-800">
          Material: {stratum.vialFraction}
        </p>
        <p className="mt-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-[11px] font-semibold text-amber-950">
          Patent-reported controlled human evidence — not a peer-reviewed RCT.
          Doses were assigned by severity strata; the 5,000-fold span is
          unexplained.
        </p>
      </div>
    </ModuleShell>
  );
}

export function CartalaxPatentVsModern() {
  const p = CARTALAX_COMPARE.patent;
  const m = CARTALAX_COMPARE.modern;

  return (
    <ModuleShell
      kicker="Evidence split"
      title="Patent-reported IM program vs modern SC community protocols"
    >
      <div className="grid gap-0 sm:grid-cols-2">
        <div className="border-b border-slate-100 p-4 sm:border-b-0 sm:border-r">
          <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
            {p.title}
          </p>
          <p className="mt-1 text-sm font-bold text-slate-900">{p.status}</p>
          <dl className="mt-3 space-y-2">
            {p.rows.map(([k, v]) => (
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
            {m.title}
          </p>
          <p className="mt-1 text-sm font-bold text-violet-800">{m.status}</p>
          <dl className="mt-3 space-y-2">
            {m.rows.map(([k, v]) => (
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

export function CartalaxScProtocol() {
  const [phaseId, setPhaseId] = useState("exposure");
  const phase =
    CARTALAX_SC_PHASES.find((p) => p.id === phaseId) || CARTALAX_SC_PHASES[1];

  return (
    <ModuleShell
      kicker="10-day SC community protocol"
      title="200 µg daily example — 20 mg vial · 4 mL recon (5 mg/mL)"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Protocol phase"
          options={CARTALAX_SC_PHASES.map((p) => ({
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
              Days {phase.days}
            </p>
            <p className="mt-1 text-2xl font-bold text-violet-800">
              {phase.amount}
            </p>
            <p className="mt-1 text-[11px] text-slate-600">
              {phase.units} · {phase.frequency}
            </p>
          </div>
          <p className="max-w-sm text-right text-[11px] text-slate-600">
            {phase.purpose}
          </p>
        </div>
        {phase.cumulative !== "—" ? (
          <p className="mt-3 text-[11px] font-semibold text-slate-800">
            Cumulative exposure: {phase.cumulative}
          </p>
        ) : null}
        <div className="mt-4 flex h-2 overflow-hidden rounded-full bg-slate-100">
          {CARTALAX_SC_PHASES.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setPhaseId(p.id)}
              className={`h-full flex-1 transition ${
                p.id === phaseId
                  ? "bg-violet-600"
                  : "bg-violet-200 hover:bg-violet-300"
              }`}
              aria-label={p.phase}
            />
          ))}
        </div>
        <p className="mt-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-[11px] font-semibold text-amber-950">
          Community convention — not the patent IM route or dose. No
          evidence-based escalation step.
        </p>
      </div>
    </ModuleShell>
  );
}

export function CartalaxReconCalc() {
  const [diluent, setDiluent] = useState("4");
  const [units, setUnits] = useState("4");

  const result = useMemo(() => {
    return cartalaxAmountFromVial(20, Number(diluent), Number(units));
  }, [diluent, units]);

  const mcgPerUnit =
    result && Number(diluent) > 0 ? (20 / Number(diluent)) * 10 : null;

  return (
    <ModuleShell
      kicker="Reconstitution math"
      title="20 mg vial — units are not a dose until diluent volume is known"
    >
      <div className="grid gap-3 border-b border-slate-100 px-4 py-3 sm:grid-cols-2">
        <div>
          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Diluent added to 20 mg vial
          </p>
          <ChipGroup
            label="Diluent"
            options={[
              { id: "2", label: "2 mL" },
              { id: "4", label: "4 mL" },
            ]}
            value={diluent}
            onChange={setDiluent}
          />
        </div>
        <label className="block text-[11px] font-semibold text-slate-700">
          U-100 units drawn
          <input
            type="number"
            min="0"
            step="0.5"
            value={units}
            onChange={(e) => setUnits(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-900"
          />
        </label>
      </div>
      {result ? (
        <div className="px-4 py-4">
          <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Concentration ≈ {result.concMgPerMl.toFixed(2)} mg/mL · ≈{" "}
            {mcgPerUnit?.toFixed(0)} µg per U-100 unit · volume{" "}
            {result.volumeMl.toFixed(3)} mL
          </p>
          <p className="mt-1 text-2xl font-bold text-violet-800">
            {formatAed(result.aedMg)}
          </p>
          {result.aedMcg <= 10 || units === "0.1" || units === "0.2" ? (
            <p className="mt-3 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-[11px] font-semibold text-red-950">
              Patent 1 µg and 10 µg arms require a validated laboratory working
              dilution — not reliable measurement from stock vial alone.
            </p>
          ) : null}
          <p className="mt-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-[11px] font-semibold text-amber-950">
            Documents vial arithmetic only — cannot choose a valid dose. Assumes
            20 mg assayed AED peptide mass.
          </p>
        </div>
      ) : null}
    </ModuleShell>
  );
}

export function CartalaxClaimChecker() {
  const [open, setOpen] = useState("russian-10mg");

  return (
    <ModuleShell
      kicker="Myth / claim checker"
      title="10 mg Russian protocol, near-joint SC, oral equivalence, and stacking claims"
    >
      <ul className="divide-y divide-slate-100">
        {CARTALAX_CLAIMS.map((c) => {
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

export function CartalaxEvidenceLadder() {
  return (
    <ModuleShell
      kicker="Dosage evidence ladder"
      title="Exact patent numbers exist — optimal dose does not"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Evidence level</th>
              <th className="px-3 py-2.5 font-semibold">Cartalax evidence</th>
              <th className="px-3 py-2.5 font-semibold">Confidence</th>
            </tr>
          </thead>
          <tbody>
            {CARTALAX_EVIDENCE_LADDER.map((row) => (
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

export function CartalaxAdverseEventTable() {
  const [full, setFull] = useState(false);

  return (
    <ModuleShell
      kicker="Safety findings"
      title="Poorly characterized human profile and injection-related risks"
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
            {(full ? CARTALAX_AE_FULL : CARTALAX_AE_SIMPLE).map((row) => (
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
