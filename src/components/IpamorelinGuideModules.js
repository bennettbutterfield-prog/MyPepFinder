"use client";

import { useMemo, useState } from "react";
import {
  IPA_AE_FULL,
  IPA_AE_SIMPLE,
  IPA_CLINICAL_ARMS,
  IPA_DOSAGE_LADDER,
  IPA_DOSAGE_TIERS,
  IPA_ROUTE_CONTRAST,
} from "@/data/ipamorelin-dosage-guide";

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

function tierBadgeClass(tone) {
  if (tone === "demonstrated") return "bg-emerald-100 text-emerald-800";
  if (tone === "animal") return "bg-amber-100 text-amber-900";
  return "bg-slate-100 text-slate-700";
}

export function IpaDosageTierSwitcher() {
  const [tier, setTier] = useState("clinical");
  const card = IPA_DOSAGE_TIERS[tier] || IPA_DOSAGE_TIERS.clinical;

  return (
    <ModuleShell
      kicker="Evidence-tier dosage switcher"
      title="Human clinical · Anecdotal · Animal — keep the label visible"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Dosage evidence tier"
          options={Object.values(IPA_DOSAGE_TIERS).map((t) => ({
            id: t.id,
            label: t.label,
          }))}
          value={tier}
          onChange={setTier}
        />
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span
            className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold ${tierBadgeClass(
              card.tone
            )}`}
          >
            {card.badge}
          </span>
          <p className="text-[11px] leading-relaxed text-slate-600">
            {card.summary}
          </p>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Protocol / study</th>
              <th className="px-3 py-2.5 font-semibold">Dose</th>
              <th className="px-3 py-2.5 font-semibold">Frequency</th>
              <th className="px-3 py-2.5 font-semibold">Route</th>
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
                <td className="px-3 py-2 text-slate-600">{row.route}</td>
                <td className="px-3 py-2 text-slate-600">{row.duration}</td>
                <td className="px-3 py-2 text-slate-500">{row.finding}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {tier !== "clinical" ? (
        <p className="border-t border-amber-100 bg-amber-50 px-4 py-3 text-[11px] font-semibold text-amber-950">
          {tier === "anecdotal"
            ? "Anecdotal schedules are documented because they are widespread — not because they are clinically established."
            : "Animal doses are not human research doses and must not be casually converted into human protocols."}
        </p>
      ) : null}
    </ModuleShell>
  );
}

function formatMcgs(mg) {
  if (!Number.isFinite(mg) || mg <= 0) return "—";
  const mcg = mg * 1000;
  if (mcg >= 1000) return `${mcg.toLocaleString(undefined, { maximumFractionDigits: 0 })} mcg (${mg.toFixed(2)} mg)`;
  return `${mcg.toLocaleString(undefined, { maximumFractionDigits: 0 })} mcg`;
}

export function IpaClinicalExposure() {
  const [kg, setKg] = useState(70);
  const [armId, setArmId] = useState("beck");
  const arm = IPA_CLINICAL_ARMS.find((a) => a.id === armId) || IPA_CLINICAL_ARMS[0];

  const exposure = useMemo(() => {
    const weight = Number(kg);
    if (!Number.isFinite(weight) || weight <= 0) return null;
    const perInfusionMg = arm.perInfusionMgKg * weight;
    const dailyMg = perInfusionMg * arm.timesPerDay;
    return { perInfusionMg, dailyMg };
  }, [kg, arm]);

  return (
    <ModuleShell
      kicker="Clinical exposure comparison"
      title="Historical IV trial exposure by body weight — not a recommended dose"
    >
      <p className="border-b border-amber-100 bg-amber-50 px-4 py-2.5 text-[11px] font-semibold text-amber-950">
        Every output is a historical trial exposure for the selected IV arm. Do
        not convert these figures into syringe units or a subcutaneous protocol.
      </p>
      <div className="grid gap-4 border-b border-slate-100 p-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
            Body weight (kg)
          </span>
          <input
            type="number"
            min={30}
            max={200}
            step={1}
            value={kg}
            onChange={(e) => setKg(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-900 outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
          />
        </label>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
            Trial arm
          </p>
          <div className="mt-1.5">
            <ChipGroup
              label="Trial arm"
              options={IPA_CLINICAL_ARMS.map((a) => ({
                id: a.id,
                label: a.label.split("·")[1]?.trim() || a.label,
              }))}
              value={armId}
              onChange={setArmId}
            />
          </div>
        </div>
      </div>
      <dl className="divide-y divide-slate-100">
        <div className="px-4 py-3">
          <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
            Selected arm
          </dt>
          <dd className="mt-0.5 text-xs font-semibold text-slate-800">
            {arm.label}
          </dd>
          <dd className="mt-0.5 text-[11px] text-slate-500">{arm.note}</dd>
        </div>
        <div className="grid gap-0 sm:grid-cols-2">
          <div className="px-4 py-3">
            <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
              Per-infusion exposure
            </dt>
            <dd className="mt-0.5 text-sm font-bold text-violet-800">
              {exposure ? formatMcgs(exposure.perInfusionMg) : "—"}
            </dd>
            <dd className="mt-0.5 text-[10px] text-slate-500">
              {arm.perInfusionMgKg} mg/kg × {kg || "—"} kg
            </dd>
          </div>
          <div className="px-4 py-3">
            <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
              Nominal daily exposure
            </dt>
            <dd className="mt-0.5 text-sm font-bold text-violet-800">
              {exposure ? formatMcgs(exposure.dailyMg) : "—"}
            </dd>
            <dd className="mt-0.5 text-[10px] text-slate-500">
              {arm.timesPerDay}× daily IV infusion
            </dd>
          </div>
        </div>
      </dl>
      <p className="border-t border-slate-100 px-4 py-3 text-[11px] font-semibold text-slate-600">
        Historical trial exposure — not a recommended dose
      </p>
    </ModuleShell>
  );
}

export function IpaRouteDuration() {
  const c = IPA_ROUTE_CONTRAST.clinical;
  const a = IPA_ROUTE_CONTRAST.anecdotal;

  return (
    <ModuleShell
      kicker="Route-and-duration contrast"
      title="Clinical IV short courses vs anecdotal subcutaneous cycles"
    >
      <div className="grid gap-0 sm:grid-cols-2">
        {[
          { side: c, accent: "border-emerald-200 bg-emerald-50/40" },
          { side: a, accent: "border-slate-200 bg-slate-50" },
        ].map(({ side, accent }) => (
          <div
            key={side.label}
            className={`border-b border-slate-100 p-4 sm:border-b-0 sm:border-r sm:last:border-r-0 ${accent}`}
          >
            <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
              {side.label}
            </p>
            <dl className="mt-3 space-y-2.5">
              {[
                ["Route", side.route],
                ["Duration", side.duration],
                ["Dose style", side.doseStyle],
                ["Purpose", side.purpose],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                    {k}
                  </dt>
                  <dd className="mt-0.5 text-xs font-semibold text-slate-800">
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
      <p className="border-t border-amber-100 bg-amber-50 px-4 py-3 text-[11px] font-semibold text-amber-950">
        Different route + duration = different exposure. Fixed SC mcg amounts are
        not scaled-down versions of weight-based IV trial doses.
      </p>
    </ModuleShell>
  );
}

export function IpaAdverseEventTable() {
  const [full, setFull] = useState(false);

  return (
    <ModuleShell
      kicker="Simple / full clinical safety toggle"
      title="NCT00672074 postoperative IV trial — surgery confounds many events"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Detail"
          options={[
            { id: "simple", label: "Simple view" },
            { id: "full", label: "Full clinical-trial arms" },
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
              <th className="px-3 py-2.5 font-semibold">Ipamorelin</th>
              <th className="px-3 py-2.5 font-semibold">Placebo</th>
              {full ? (
                <th className="px-3 py-2.5 font-semibold">Context</th>
              ) : null}
            </tr>
          </thead>
          <tbody>
            {(full ? IPA_AE_FULL : IPA_AE_SIMPLE).map((row) => (
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
        Postoperative population caveat: medically complex bowel-surgery patients.
        Long-term and subcutaneous safety are unknown. Two fatal SAEs occurred in
        ipamorelin-treated patients; causal relationship was unclear per FDA.
      </p>
    </ModuleShell>
  );
}

export function IpaDosageLadder() {
  const tone = {
    none: "bg-slate-100 text-slate-600",
    limited: "bg-amber-100 text-amber-900",
    mixed: "bg-violet-100 text-violet-800",
    animal: "bg-amber-100 text-amber-900",
    low: "bg-slate-100 text-slate-700",
  };
  const label = {
    none: "None / insufficient",
    limited: "Limited",
    mixed: "Mixed",
    animal: "Preclinical only",
    low: "Low / insufficient",
  };

  return (
    <ModuleShell
      kicker="Dosage evidence ladder"
      title="How established is ipamorelin dosing?"
    >
      <ol className="divide-y divide-slate-100">
        {IPA_DOSAGE_LADDER.map((rung, i) => (
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
