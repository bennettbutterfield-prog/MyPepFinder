"use client";

import { useMemo, useState } from "react";
import {
  HEX_AE_FULL,
  HEX_AE_SIMPLE,
  HEX_ATTENUATION,
  HEX_CLAIMS,
  HEX_COMPARE,
  HEX_DOSE_RESPONSE,
  HEX_EVIDENCE_LADDER,
  HEX_ROUTES,
  HEX_STUDY_DOSES,
} from "@/data/hexarelin-dosage-guide";

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

export function HexDoseResponse() {
  const max = Math.max(...HEX_DOSE_RESPONSE.map((d) => d.peak));

  return (
    <ModuleShell
      kicker="Acute IV dose-response"
      title="Mean peak GH (ng/mL) — Imbimbo rising-dose study"
    >
      <div className="space-y-3 px-4 py-4">
        {HEX_DOSE_RESPONSE.map((row) => (
          <div key={row.dose}>
            <div className="mb-1 flex justify-between text-[11px]">
              <span className="font-semibold text-slate-700">{row.dose}</span>
              <span className="font-bold text-violet-800">{row.peak}</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-violet-500"
                style={{ width: `${(row.peak / max) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="border-t border-slate-100 px-4 py-3 text-[11px] text-slate-600">
        Half-max ≈ 0.50 mcg/kg (peak) / 0.64 mcg/kg (AUC). Near-max ≈ 2 mcg/kg.
        Little additional peak GH between 1 and 2 mcg/kg.
      </p>
    </ModuleShell>
  );
}

export function HexExposureCalc() {
  const [kg, setKg] = useState(70);
  const [idx, setIdx] = useState(2);
  const sel = HEX_STUDY_DOSES[idx] || HEX_STUDY_DOSES[2];

  const totalMcg = useMemo(() => {
    const weight = Number(kg);
    if (!Number.isFinite(weight) || weight <= 0) return null;
    return sel.mcgkg * weight;
  }, [kg, sel]);

  return (
    <ModuleShell
      kicker="Published-study math"
      title="Historical weight-based exposure — not a recommended dose"
    >
      <p className="border-b border-amber-100 bg-amber-50 px-4 py-2.5 text-[11px] font-semibold text-amber-950">
        No FDA-approved dosage. Outputs are published-study mathematics only —
        not a dose calculator or regimen.
      </p>
      <div className="grid gap-4 border-b border-slate-100 p-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
            Body weight (kg)
          </span>
          <input
            type="number"
            min={40}
            max={200}
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
              options={HEX_STUDY_DOSES.map((d, i) => ({
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
            Total amount for {kg || "—"} kg
          </dt>
          <dd className="mt-0.5 text-lg font-bold text-violet-800">
            {totalMcg != null
              ? `${totalMcg.toLocaleString(undefined, {
                  maximumFractionDigits: 0,
                })} mcg`
              : "—"}
          </dd>
          <dd className="mt-0.5 text-[10px] text-slate-500">
            {sel.mcgkg} mcg/kg × {kg || "—"} kg ({sel.route})
          </dd>
        </div>
      </dl>
    </ModuleShell>
  );
}

export function HexClinicalAnecdotal() {
  const [tier, setTier] = useState("clinical");
  const card = HEX_COMPARE[tier] || HEX_COMPARE.clinical;

  return (
    <ModuleShell
      kicker="Human studies / online protocols"
      title="Keep weight-based research separate from fixed-mcg conventions"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Evidence view"
          options={[
            { id: "clinical", label: "Human studies" },
            { id: "anecdotal", label: "Online protocols" },
          ]}
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
        <table className="w-full min-w-[520px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Setting</th>
              <th className="px-3 py-2.5 font-semibold">Dose</th>
              <th className="px-3 py-2.5 font-semibold">Frequency</th>
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
                <td className="px-3 py-2 text-slate-600">{row.frequency}</td>
                <td className="px-3 py-2 text-slate-500">{row.finding}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ModuleShell>
  );
}

export function HexAttenuation() {
  const pts = HEX_ATTENUATION.weeks;
  const max = Math.max(...pts.map((p) => p.auc));
  const W = 520;
  const H = 160;
  const PAD = { t: 20, r: 16, b: 36, l: 36 };
  const coords = pts.map((p, i) => {
    const x = PAD.l + (i / (pts.length - 1)) * (W - PAD.l - PAD.r);
    const y = PAD.t + (H - PAD.t - PAD.b) * (1 - p.auc / max);
    return { ...p, x, y };
  });

  return (
    <ModuleShell
      kicker="Attenuation timeline"
      title="16-week SC BID challenge response — partial & reversible"
    >
      <div className="px-2 py-3 sm:px-4">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="h-auto w-full"
          role="img"
          aria-label="GH AUC declining across 16 weeks then recovering after four weeks off"
        >
          <polyline
            fill="none"
            stroke="#7c3aed"
            strokeWidth="2.5"
            points={coords.map((c) => `${c.x},${c.y}`).join(" ")}
          />
          {coords.map((c) => (
            <g key={c.label}>
              <circle cx={c.x} cy={c.y} r="4.5" className="fill-violet-600" />
              <text
                x={c.x}
                y={c.y - 8}
                textAnchor="middle"
                fontSize="9"
                className="fill-violet-800"
              >
                {c.auc}
              </text>
              <text
                x={c.x}
                y={H - 12}
                textAnchor="middle"
                fontSize="9"
                className="fill-slate-400"
              >
                {c.label}
              </text>
            </g>
          ))}
        </svg>
      </div>
      <p className="border-t border-slate-100 px-4 py-3 text-[11px] text-slate-600">
        {HEX_ATTENUATION.note} Supports attenuation and recovery — not a
        mandatory popular cycle length.
      </p>
    </ModuleShell>
  );
}

export function HexRouteCompare() {
  return (
    <ModuleShell
      kicker="Route comparison"
      title="Pharmacodynamic availability differs sharply by route"
    >
      <div className="grid gap-0 sm:grid-cols-2">
        {HEX_ROUTES.map((r) => (
          <div
            key={r.route}
            className="border-b border-r border-slate-100 p-4 last:border-b-0 sm:odd:border-r"
          >
            <p className="text-xs font-bold text-slate-900">{r.route}</p>
            <p className="mt-1 text-[11px] font-semibold text-violet-800">
              {r.doses}
            </p>
            <p className="mt-1 text-[11px] text-slate-600">{r.note}</p>
          </div>
        ))}
      </div>
      <p className="border-t border-amber-100 bg-amber-50 px-4 py-3 text-[11px] font-semibold text-amber-950">
        Do not convert oral or intranasal milligram/mcg/kg amounts into a
        subcutaneous lifestyle dose.
      </p>
    </ModuleShell>
  );
}

export function HexClaimChecker() {
  const [open, setOpen] = useState("half-life");

  return (
    <ModuleShell
      kicker="Claim checker"
      title="Common Hexarelin dosing myths vs evidence"
    >
      <ul className="divide-y divide-slate-100">
        {HEX_CLAIMS.map((c) => {
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

export function HexAdverseEventTable() {
  const [full, setFull] = useState(false);

  return (
    <ModuleShell
      kicker="Safety findings"
      title="Small monitored cohorts — not “proven safe”"
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
            {(full ? HEX_AE_FULL : HEX_AE_SIMPLE).map((row) => (
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

export function HexEvidenceLadder() {
  const tone = {
    strongest: "bg-emerald-100 text-emerald-800",
    useful: "bg-violet-100 text-violet-800",
    hypothesis: "bg-amber-100 text-amber-900",
    mechanism: "bg-slate-100 text-slate-700",
    lowest: "bg-slate-100 text-slate-600",
  };

  return (
    <ModuleShell
      kicker="Evidence ladder"
      title="How strong is Hexarelin dosage evidence?"
    >
      <ol className="divide-y divide-slate-100">
        {HEX_EVIDENCE_LADDER.map((rung, i) => (
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
                  {rung.status}
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
