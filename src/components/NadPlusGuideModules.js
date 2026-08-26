"use client";

import { useMemo, useState } from "react";
import {
  NAD_PLUS_AE_FULL,
  NAD_PLUS_AE_SIMPLE,
  NAD_PLUS_CLAIMS,
  NAD_PLUS_COMPARE,
  NAD_PLUS_EVIDENCE_LADDER,
  NAD_PLUS_HUMAN_STATUS,
  NAD_PLUS_IDENTITY,
  NAD_PLUS_PROTOCOL_PHASES,
  NAD_PLUS_RATE_ROWS,
  nadPlusInfusionRate,
  nadPlusStockVolume,
} from "@/data/nad-plus-dosage-guide";

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

export function NadPlusIdentityGate() {
  const [id, setId] = useState("nad-correct");
  const card =
    NAD_PLUS_IDENTITY.find((c) => c.id === id) || NAD_PLUS_IDENTITY[0];

  return (
    <ModuleShell
      kicker="Identity gate"
      title="Confirm direct beta-NAD+ — not NR/NMN, NADH, LNAD+, or food-grade powder"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Identity check"
          options={NAD_PLUS_IDENTITY.map((c) => ({
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

export function NadPlusHumanStatus() {
  return (
    <ModuleShell
      kicker="Human evidence status"
      title="Direct NAD+ only — fragmented across IV, oral, and clinic contexts"
    >
      <dl className="divide-y divide-slate-100">
        {NAD_PLUS_HUMAN_STATUS.map(([q, a]) => (
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

export function NadPlusClinicalVsAnecdotal() {
  const { clinical, anecdotal } = NAD_PLUS_COMPARE;

  return (
    <ModuleShell
      kicker="Evidence split"
      title="Published direct-NAD+ research vs wellness / practitioner conventions"
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

export function NadPlusRateTable() {
  const [id, setId] = useState("10mg");
  const row =
    NAD_PLUS_RATE_ROWS.find((r) => r.id === id) || NAD_PLUS_RATE_ROWS[0];

  return (
    <ModuleShell
      kicker="Rate vs dose"
      title="Published infusion contexts — not a randomized rate matrix"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Protocol"
          options={NAD_PLUS_RATE_ROWS.map((r) => ({
            id: r.id,
            label: r.label,
          }))}
          value={id}
          onChange={setId}
        />
      </div>
      <div className="grid gap-3 p-4 sm:grid-cols-2">
        <div className="rounded-lg border border-teal-100 bg-teal-50 px-3 py-3">
          <p className="text-[10px] font-bold uppercase tracking-wide text-teal-700">
            Approx. NAD+ rate
          </p>
          <p className="mt-1 text-lg font-bold text-teal-900">{row.rate}</p>
        </div>
        <div className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-3">
          <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Concentration / duration
          </p>
          <p className="mt-1 text-sm font-bold text-slate-900">
            {row.conc} · {row.duration}
          </p>
        </div>
      </div>
      <p className="border-t border-amber-100 bg-amber-50 px-4 py-3 text-[11px] font-semibold text-amber-950">
        Tolerability: {row.tolerability}. Compatible with rate-dependent symptoms —
        populations and products also differed.
      </p>
    </ModuleShell>
  );
}

export function NadPlusProtocolTimeline() {
  const [id, setId] = useState("infusion");
  const phase =
    NAD_PLUS_PROTOCOL_PHASES.find((p) => p.id === id) ||
    NAD_PLUS_PROTOCOL_PHASES[1];

  return (
    <ModuleShell
      kicker="10 mg HF research framework"
      title="Assay-corrected 10 mg / 100 mL · 100–200 mL/h · 7 days · no dose escalation"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Protocol phase"
          options={NAD_PLUS_PROTOCOL_PHASES.map((p) => ({
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
        Disease-specific cardiac research replication — not a wellness or
        home-infusion schedule. Food-grade / RUO powder is not acceptable.
      </p>
    </ModuleShell>
  );
}

export function NadPlusReconCalc() {
  const [mode, setMode] = useState("rate");
  const [conc, setConc] = useState("0.1");
  const [pump, setPump] = useState("120");
  const [target, setTarget] = useState("10");

  const rate = useMemo(
    () =>
      nadPlusInfusionRate({
        concentrationMgPerMl: Number(conc),
        pumpMlPerHour: Number(pump),
      }),
    [conc, pump]
  );

  const stock = useMemo(
    () =>
      nadPlusStockVolume({
        stockConcMgPerMl: 100,
        targetMg: Number(target),
      }),
    [target]
  );

  return (
    <ModuleShell
      kicker="Pharmacy arithmetic"
      title="Infusion rate and stock-volume examples — batch validation required"
    >
      <div className="space-y-3 border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Calculator mode"
          options={[
            { id: "rate", label: "Infusion rate" },
            { id: "stock", label: "100 mg/mL stock volume" },
          ]}
          value={mode}
          onChange={setMode}
        />
        {mode === "rate" ? (
          <>
            <div>
              <p className="mb-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
                Bag concentration
              </p>
              <ChipGroup
                label="Concentration"
                options={[
                  { id: "0.1", label: "0.1 mg/mL (10 mg/100 mL)" },
                  { id: "1", label: "1 mg/mL" },
                ]}
                value={conc}
                onChange={setConc}
              />
            </div>
            <div>
              <p className="mb-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
                Pump rate
              </p>
              <ChipGroup
                label="Pump"
                options={[
                  { id: "100", label: "100 mL/h" },
                  { id: "120", label: "120 mL/h" },
                  { id: "200", label: "200 mL/h max" },
                ]}
                value={pump}
                onChange={setPump}
              />
            </div>
          </>
        ) : (
          <label className="block text-[11px] font-semibold text-slate-700">
            Target NAD+ amount (mg)
            <input
              type="number"
              min="0"
              step="5"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-900"
            />
          </label>
        )}
      </div>
      {mode === "rate" && rate ? (
        <div className="px-4 py-4">
          <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Delivery
          </p>
          <p className="mt-1 text-2xl font-bold text-teal-800">
            {rate.mgPerMin.toFixed(3)} mg/min
          </p>
          <p className="mt-1 text-[11px] text-slate-600">
            {rate.mgPerHour.toFixed(1)} mg/h at {rate.pumpMlPerHour} mL/h ·{" "}
            {rate.concentrationMgPerMl} mg/mL
          </p>
          {conc === "0.1" && pump === "200" ? (
            <p className="mt-3 text-[11px] font-semibold text-teal-800">
              Matches Yu HF trial maximum reported rate (0.333 mg/min).
            </p>
          ) : null}
        </div>
      ) : null}
      {mode === "stock" && stock ? (
        <div className="px-4 py-4">
          <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
            From verified 100 mg/mL stock (hypothetical)
          </p>
          <p className="mt-1 text-2xl font-bold text-teal-800">
            {stock.volumeMl.toFixed(2)} mL
          </p>
          <p className="mt-1 text-[11px] text-slate-600">
            ≈ {stock.umolApprox.toFixed(1)} µmol (zwitterion MW 663.4) — invalid if
            “500 mg” is gross cake, salt/hydrate, or a 50% formulation.
          </p>
          {stock.volumeMl <= 0.1 ? (
            <p className="mt-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-[11px] font-semibold text-amber-950">
              Tiny withdrawals are vulnerable to volumetric and dead-space error —
              pharmacy-controlled intermediate dilution may be required.
            </p>
          ) : null}
        </div>
      ) : null}
    </ModuleShell>
  );
}

export function NadPlusClaimChecker() {
  const [open, setOpen] = useState(NAD_PLUS_CLAIMS[0].id);
  const card =
    NAD_PLUS_CLAIMS.find((c) => c.id === open) || NAD_PLUS_CLAIMS[0];

  return (
    <ModuleShell
      kicker="Claim checker"
      title="Common NAD+ claims vs the evidence record"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Claims"
          options={NAD_PLUS_CLAIMS.map((c) => ({
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

export function NadPlusEvidenceLadder() {
  return (
    <ModuleShell
      kicker="Dosage evidence ladder"
      title="NAD+ dosing is not one cross-purpose protocol"
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
            {NAD_PLUS_EVIDENCE_LADDER.map((row) => (
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

export function NadPlusAdverseEventTable() {
  const [mode, setMode] = useState("simple");

  return (
    <ModuleShell
      kicker="Safety monitoring"
      title="Rate, sterile quality, and fluid load — not milligrams alone"
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
          {NAD_PLUS_AE_SIMPLE.map((row) => (
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
          {NAD_PLUS_AE_FULL.map((row) => (
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
