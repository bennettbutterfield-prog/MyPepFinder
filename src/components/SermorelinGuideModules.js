"use client";

import { useMemo, useState } from "react";
import {
  SER_AE_FULL,
  SER_AE_SIMPLE,
  SER_CLAIMS,
  SER_COMPARE,
  SER_EVIDENCE_LADDER,
  SER_FDA_HISTORY,
  SER_PED_VELOCITY,
  SER_STUDY_DOSES,
} from "@/data/sermorelin-dosage-guide";

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

export function SerFdaHistory() {
  return (
    <ModuleShell
      kicker="Historical FDA products"
      title="Geref was approved — today's compounded Sermorelin is not"
    >
      <div className="grid gap-0 sm:grid-cols-2">
        {SER_FDA_HISTORY.map((p) => (
          <div
            key={p.id}
            className="border-b border-slate-100 p-4 sm:border-b-0 sm:border-r sm:last:border-r-0"
          >
            <p className="text-xs font-bold text-slate-900">{p.product}</p>
            <p className="mt-1 text-[11px] text-slate-500">{p.presentation}</p>
            <dl className="mt-3 space-y-2">
              {[
                ["Purpose", p.purpose],
                ["Historical dose", p.dose],
                ["Status", p.status],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                    {k}
                  </dt>
                  <dd className="mt-0.5 text-[11px] font-semibold text-slate-800">
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
      <p className="border-t border-amber-100 bg-amber-50 px-4 py-3 text-[11px] font-semibold text-amber-950">
        Withdrawal not for safety/effectiveness ≠ current marketed approval ≠
        compounded adult wellness approval.
      </p>
    </ModuleShell>
  );
}

export function SerClinicalAnecdotal() {
  const [tier, setTier] = useState("historical");
  const card = SER_COMPARE[tier] || SER_COMPARE.historical;

  return (
    <ModuleShell
      kicker="Evidence lanes"
      title="Historical FDA · Adult experimental · Anecdotal clinic"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Dosage lane"
          options={Object.values(SER_COMPARE).map((t) => ({
            id: t.id,
            label: t.label,
          }))}
          value={tier}
          onChange={setTier}
        />
        <div className="mt-3">
          <span className="rounded-full bg-violet-100 px-2.5 py-0.5 text-[10px] font-bold text-violet-800">
            {card.badge}
          </span>
          <p className="mt-2 text-[11px] leading-relaxed text-slate-600">
            {card.summary}
          </p>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[480px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Setting</th>
              <th className="px-3 py-2.5 font-semibold">Dose</th>
              <th className="px-3 py-2.5 font-semibold">Finding</th>
            </tr>
          </thead>
          <tbody>
            {card.rows.map((row) => (
              <tr key={row.name} className="border-t border-slate-50">
                <td className="px-3 py-2 font-medium text-slate-800">
                  {row.name}
                </td>
                <td className="px-3 py-2 text-violet-800">{row.dose}</td>
                <td className="px-3 py-2 text-slate-500">{row.finding}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ModuleShell>
  );
}

export function SerExposureCalc() {
  const [kg, setKg] = useState(30);
  const [idx, setIdx] = useState(3);
  const sel = SER_STUDY_DOSES[idx] || SER_STUDY_DOSES[3];

  const total = useMemo(() => {
    const weight = Number(kg);
    if (!Number.isFinite(weight) || weight <= 0) return null;
    return sel.mcgkg * weight;
  }, [kg, sel]);

  const format = (mcg) => {
    if (mcg == null) return "—";
    if (mcg >= 1000) return `${(mcg / 1000).toFixed(2)} mg (${mcg.toLocaleString()} mcg)`;
    return `${mcg.toLocaleString(undefined, { maximumFractionDigits: 1 })} mcg`;
  };

  return (
    <ModuleShell
      kicker="Published-study math"
      title="Historical / research weight-based exposures — not adult recommendations"
    >
      <p className="border-b border-amber-100 bg-amber-50 px-4 py-2.5 text-[11px] font-semibold text-amber-950">
        Not a recommended dose calculator. Do not apply 30 mcg/kg as an adult
        wellness schedule.
      </p>
      <div className="grid gap-4 border-b border-slate-100 p-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
            Body weight (kg)
          </span>
          <input
            type="number"
            min={15}
            max={120}
            step={1}
            value={kg}
            onChange={(e) => setKg(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-900 outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
          />
        </label>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
            Study exposure
          </p>
          <div className="mt-1.5">
            <ChipGroup
              label="Study dose"
              options={SER_STUDY_DOSES.map((d, i) => ({
                id: String(i),
                label: `${d.mcgkg} ${d.route}`,
              }))}
              value={String(idx)}
              onChange={(v) => setIdx(Number(v))}
            />
          </div>
        </div>
      </div>
      <dl className="divide-y divide-slate-100">
        <div className="px-4 py-3">
          <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
            Research context
          </dt>
          <dd className="mt-0.5 text-xs font-semibold text-slate-800">
            {sel.context}
          </dd>
        </div>
        <div className="px-4 py-3">
          <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
            Total for {kg || "—"} kg
          </dt>
          <dd className="mt-0.5 text-lg font-bold text-violet-800">
            {format(total)}
          </dd>
        </div>
      </dl>
    </ModuleShell>
  );
}

export function SerPedVelocity() {
  const max = Math.max(...SER_PED_VELOCITY.map((r) => r.velocity));

  return (
    <ModuleShell
      kicker="Pediatric continuous-infusion comparison"
      title="30 vs 60 mcg/kg/day — doubling did not add growth velocity"
    >
      <div className="space-y-3 px-4 py-4">
        {SER_PED_VELOCITY.map((row) => (
          <div key={row.arm}>
            <div className="mb-1 flex justify-between text-[11px]">
              <span className="font-semibold text-slate-700">{row.arm}</span>
              <span className="font-bold text-violet-800">
                {row.velocity} cm/year
              </span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-slate-100">
              <div
                className={`h-full rounded-full ${
                  row.arm.includes("GH") ? "bg-emerald-500" : "bg-violet-500"
                }`}
                style={{ width: `${(row.velocity / max) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="border-t border-slate-100 px-4 py-3 text-[11px] text-slate-600">
        Six-month mean height velocity. Argues against assuming a linear
        dose–benefit relationship for Sermorelin/GHRH(1–29).
      </p>
    </ModuleShell>
  );
}

export function SerClaimChecker() {
  const [open, setOpen] = useState("label-fixed");

  return (
    <ModuleShell
      kicker="Claim checker"
      title="Common Sermorelin dosing myths vs evidence"
    >
      <ul className="divide-y divide-slate-100">
        {SER_CLAIMS.map((c) => {
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

export function SerAdverseEventTable() {
  const [full, setFull] = useState(false);

  return (
    <ModuleShell
      kicker="Safety findings"
      title="Historical Geref experience ≠ compounded adult safety proof"
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
              <th className="px-3 py-2.5 font-semibold">Finding</th>
              <th className="px-3 py-2.5 font-semibold">Note</th>
              {full ? (
                <th className="px-3 py-2.5 font-semibold">Context</th>
              ) : null}
            </tr>
          </thead>
          <tbody>
            {(full ? SER_AE_FULL : SER_AE_SIMPLE).map((row) => (
              <tr key={row[0]} className="border-t border-slate-50">
                <td className="px-3 py-2 font-medium text-slate-700">{row[0]}</td>
                <td className="px-3 py-2 font-semibold text-violet-800">
                  {row[1]}
                </td>
                <td className="px-3 py-2 text-slate-600">{row[2]}</td>
                {full ? (
                  <td className="px-3 py-2 text-slate-500">{row[3]}</td>
                ) : null}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ModuleShell>
  );
}

export function SerEvidenceLadder() {
  const tone = {
    "strong-historical": "bg-emerald-100 text-emerald-800",
    moderate: "bg-violet-100 text-violet-800",
    "low-moderate": "bg-amber-100 text-amber-900",
    mechanism: "bg-slate-100 text-slate-700",
    low: "bg-slate-100 text-slate-600",
    poor: "bg-slate-100 text-slate-500",
  };

  return (
    <ModuleShell
      kicker="Dosage evidence ladder"
      title="How established is Sermorelin dosing?"
    >
      <ol className="divide-y divide-slate-100">
        {SER_EVIDENCE_LADDER.map((rung, i) => (
          <li key={rung.level} className="flex gap-3 px-4 py-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-600 text-[10px] font-bold text-white">
              {i + 1}
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-xs font-bold text-slate-900">{rung.level}</p>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                    tone[rung.status]
                  }`}
                >
                  {rung.status.replace(/-/g, " ")}
                </span>
              </div>
              <p className="mt-1 text-[11px] text-slate-600">{rung.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </ModuleShell>
  );
}
