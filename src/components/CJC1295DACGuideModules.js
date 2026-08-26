"use client";

import { useMemo, useState } from "react";
import {
  CJC_DAC_ACCUMULATION,
  CJC_DAC_AE_FULL,
  CJC_DAC_AE_SIMPLE,
  CJC_DAC_CLINICAL_DOSES,
  CJC_DAC_COMPARE,
  CJC_DAC_DOSAGE_LADDER,
  CJC_DAC_IDENTITY,
} from "@/data/cjc-1295-dac-dosage-guide";

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

export function CjcDacIdentityGate() {
  const [id, setId] = useState("unsure");
  const card = CJC_DAC_IDENTITY.find((c) => c.id === id) || CJC_DAC_IDENTITY[0];

  return (
    <ModuleShell
      kicker="DAC / no-DAC identity gate"
      title="Which CJC-1295 form do you mean?"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Molecule identity"
          options={CJC_DAC_IDENTITY.map((c) => ({ id: c.id, label: c.label }))}
          value={id}
          onChange={setId}
        />
      </div>
      <div className="px-4 py-4">
        <p className="text-sm font-bold text-slate-900">{card.verdict}</p>
        <p className="mt-2 text-[11px] leading-relaxed text-slate-600">
          {card.detail}
        </p>
        <p className="mt-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-[11px] font-semibold text-amber-950">
          {card.scheduleHint}
        </p>
        {id === "no-dac" ? (
          <p className="mt-3 text-[11px] text-slate-500">
            This page covers CJC-1295 DAC only. Short-acting “no DAC” / Modified
            GRF 1-29 schedules should not be mixed with DAC weekly milligram
            conventions.
          </p>
        ) : null}
      </div>
    </ModuleShell>
  );
}

function formatMg(mg) {
  if (!Number.isFinite(mg) || mg <= 0) return "—";
  return `${mg.toLocaleString(undefined, {
    maximumFractionDigits: mg >= 10 ? 1 : 2,
  })} mg`;
}

export function CjcDacExposureCalc() {
  const [kg, setKg] = useState(80);
  const [mcgkg, setMcgkg] = useState(30);

  const totalMg = useMemo(() => {
    const weight = Number(kg);
    const dose = Number(mcgkg);
    if (!Number.isFinite(weight) || weight <= 0) return null;
    if (!Number.isFinite(dose) || dose <= 0) return null;
    return (dose * weight) / 1000;
  }, [kg, mcgkg]);

  const context =
    CJC_DAC_CLINICAL_DOSES.find((d) => d.mcgkg === Number(mcgkg))?.context ||
    "Selected clinical exposure level";

  return (
    <ModuleShell
      kicker="Human trial exposure calculator"
      title="Historical weight-based clinical exposure — not a recommended dose"
    >
      <p className="border-b border-amber-100 bg-amber-50 px-4 py-2.5 text-[11px] font-semibold text-amber-950">
        Historical research exposure — not a recommended dose. Does not account
        for accumulation, product identity, or purity.
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
            Published exposure (mcg/kg)
          </p>
          <div className="mt-1.5">
            <ChipGroup
              label="mcg/kg exposure"
              options={CJC_DAC_CLINICAL_DOSES.map((d) => ({
                id: String(d.mcgkg),
                label: `${d.mcgkg}`,
              }))}
              value={String(mcgkg)}
              onChange={(v) => setMcgkg(Number(v))}
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
            {context}
          </dd>
        </div>
        <div className="px-4 py-3">
          <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
            Total amount for {kg || "—"} kg
          </dt>
          <dd className="mt-0.5 text-lg font-bold text-violet-800">
            {totalMg != null ? formatMg(totalMg) : "—"}
          </dd>
          <dd className="mt-0.5 text-[10px] text-slate-500">
            {mcgkg} mcg/kg × {kg || "—"} kg ÷ 1,000
          </dd>
        </div>
      </dl>
      <p className="border-t border-slate-100 px-4 py-3 text-[11px] font-semibold text-slate-600">
        Historical research exposure — not a recommended dose
      </p>
    </ModuleShell>
  );
}

export function CjcDacClinicalAnecdotal() {
  const [tier, setTier] = useState("clinical");
  const card = CJC_DAC_COMPARE[tier] || CJC_DAC_COMPARE.clinical;

  return (
    <ModuleShell
      kicker="Clinical / anecdotal comparison switcher"
      title="Do not merge weight-based trial doses with fixed weekly milligrams"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Evidence view"
          options={[
            { id: "clinical", label: "Clinical · 20–250 mcg/kg" },
            { id: "anecdotal", label: "Anecdotal · 0.5–2 mg/week" },
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
        <table className="w-full min-w-[560px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Protocol / study</th>
              <th className="px-3 py-2.5 font-semibold">Dose</th>
              <th className="px-3 py-2.5 font-semibold">Frequency</th>
              <th className="px-3 py-2.5 font-semibold">Duration</th>
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
                <td className="px-3 py-2 text-slate-600">{row.duration}</td>
                <td className="px-3 py-2 text-slate-500">{row.finding}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ModuleShell>
  );
}

export function CjcDacAccumulation() {
  const a = CJC_DAC_ACCUMULATION;
  const W = 520;
  const H = 160;
  const PAD = { t: 28, r: 16, b: 36, l: 28 };
  // Conceptual rising trough markers at days 0, 7, 14 with half-life band
  const dayMax = 28;
  const xFor = (d) => PAD.l + (d / dayMax) * (W - PAD.l - PAD.r);
  const peaks = a.injectionDays.map((d, i) => {
    const height = 0.45 + i * 0.22;
    return { d, x: xFor(d), y: PAD.t + (H - PAD.t - PAD.b) * (1 - height) };
  });

  return (
    <ModuleShell
      kicker="Accumulation timeline"
      title="Weekly / biweekly injections · rising exposure · IGF-1 through day 28"
    >
      <div className="px-2 py-3 sm:px-4">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="h-auto w-full"
          role="img"
          aria-label="Conceptual accumulation after doses on days 0, 7, and 14"
        >
          {/* half-life band annotation */}
          <rect
            x={xFor(0)}
            y={PAD.t + 8}
            width={xFor(a.halfLifeDays[1]) - xFor(0)}
            height={14}
            rx={4}
            className="fill-violet-100"
          />
          <text
            x={xFor(a.halfLifeDays[0])}
            y={PAD.t + 18}
            fontSize="9"
            className="fill-violet-700"
          >
            t½ ~{a.halfLifeDays[0]}–{a.halfLifeDays[1]} d
          </text>
          {peaks.map((p, i) => (
            <g key={p.d}>
              <line
                x1={p.x}
                y1={H - PAD.b}
                x2={p.x}
                y2={p.y}
                stroke="#a78bfa"
                strokeWidth="2"
              />
              <circle cx={p.x} cy={p.y} r="5" className="fill-violet-600" />
              <text
                x={p.x}
                y={p.y - 8}
                textAnchor="middle"
                fontSize="9"
                className="fill-violet-800"
              >
                Dose {i + 1}
              </text>
            </g>
          ))}
          {/* IGF-1 baseline bar through day 28 */}
          <line
            x1={xFor(0)}
            y1={H - PAD.b - 10}
            x2={xFor(28)}
            y2={H - PAD.b - 10}
            stroke="#34d399"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <text
            x={xFor(14)}
            y={H - PAD.b - 16}
            textAnchor="middle"
            fontSize="9"
            className="fill-emerald-700"
          >
            IGF-1 above baseline → day 28
          </text>
          {[0, 7, 14, 21, 28].map((d) => (
            <text
              key={d}
              x={xFor(d)}
              y={H - 12}
              textAnchor="middle"
              fontSize="10"
              className="fill-slate-400"
            >
              D{d}
            </text>
          ))}
        </svg>
      </div>
      <ul className="divide-y divide-slate-100 border-t border-slate-100">
        {a.notes.map((n) => (
          <li key={n} className="px-4 py-2.5 text-[11px] text-slate-600">
            {n}
          </li>
        ))}
      </ul>
      <p className="border-t border-amber-100 bg-amber-50 px-4 py-3 text-[11px] font-semibold text-amber-950">
        Conceptual illustration from published PK/PD descriptions — not digitized
        concentration curves. Measurable exposure ~{a.measurableDays}.
      </p>
    </ModuleShell>
  );
}

export function CjcDacAdverseEventTable() {
  const [full, setFull] = useState(false);

  return (
    <ModuleShell
      kicker="Simple / full clinical safety toggle"
      title="Teichman studies + Phase 2 / long-term uncertainty"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Detail"
          options={[
            { id: "simple", label: "Simple view" },
            { id: "full", label: "Full safety context" },
          ]}
          value={full ? "full" : "simple"}
          onChange={(v) => setFull(v === "full")}
        />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[480px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Finding</th>
              <th className="px-3 py-2.5 font-semibold">CJC-1295 DAC</th>
              <th className="px-3 py-2.5 font-semibold">Placebo / note</th>
              {full ? (
                <th className="px-3 py-2.5 font-semibold">Context</th>
              ) : null}
            </tr>
          </thead>
          <tbody>
            {(full ? CJC_DAC_AE_FULL : CJC_DAC_AE_SIMPLE).map((row) => (
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
      <p className="border-t border-amber-100 bg-amber-50 px-4 py-3 text-[11px] font-semibold text-amber-950">
        Adverse effects were more common at 125–250 mcg/kg. Long-term safety,
        immunogenicity, and carcinogenicity remain unresolved. Phase 2 was
        terminated after a fatal MI; causality was not established.
      </p>
    </ModuleShell>
  );
}

export function CjcDacDosageLadder() {
  const tone = {
    none: "bg-slate-100 text-slate-600",
    limited: "bg-violet-100 text-violet-800",
    mixed: "bg-amber-100 text-amber-900",
    animal: "bg-amber-100 text-amber-900",
    low: "bg-slate-100 text-slate-700",
  };
  const label = {
    none: "None / insufficient",
    limited: "Published PK/PD",
    mixed: "Mixed",
    animal: "Preclinical only",
    low: "Low / insufficient",
  };

  return (
    <ModuleShell
      kicker="Dosage evidence ladder"
      title="How established is CJC-1295 DAC dosing?"
    >
      <ol className="divide-y divide-slate-100">
        {CJC_DAC_DOSAGE_LADDER.map((rung, i) => (
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
                  {label[rung.status]}
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
