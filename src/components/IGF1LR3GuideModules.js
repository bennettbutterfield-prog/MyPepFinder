"use client";

import { useState } from "react";
import {
  LR3_AE_FULL,
  LR3_AE_SIMPLE,
  LR3_CLAIMS,
  LR3_COMPARE,
  LR3_EVIDENCE_LADDER,
  LR3_HUMAN_STATUS,
  LR3_VS_MECASERMIN,
} from "@/data/igf-1-lr3-dosage-guide";

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

export function Lr3HumanStatus() {
  return (
    <ModuleShell
      kicker="Human evidence status"
      title="No dedicated human LR3 dose, PK, or safety study identified"
    >
      <dl className="divide-y divide-slate-100">
        {LR3_HUMAN_STATUS.map(([q, a]) => (
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
        No body-weight or reconstitution calculator is offered — there is no
        human dose to calculate.
      </p>
    </ModuleShell>
  );
}

export function Lr3VsMecasermin() {
  return (
    <ModuleShell
      kicker="Molecule comparison"
      title="IGF-1 LR3 ≠ mecasermin (Increlex)"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Feature</th>
              <th className="px-3 py-2.5 font-semibold">IGF-1 LR3</th>
              <th className="px-3 py-2.5 font-semibold">Mecasermin</th>
            </tr>
          </thead>
          <tbody>
            {LR3_VS_MECASERMIN.map((row) => (
              <tr key={row.feature} className="border-t border-slate-50">
                <td className="px-3 py-2 font-medium text-slate-800">
                  {row.feature}
                </td>
                <td className="px-3 py-2 text-violet-800">{row.lr3}</td>
                <td className="px-3 py-2 text-slate-600">{row.meca}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="border-t border-amber-100 bg-amber-50 px-4 py-3 text-[11px] font-semibold text-amber-950">
        Mecasermin label = biological warning signal for IGF-1 receptor
        activation. Never present Increlex mg/kg dosing as an LR3 clinical dose.
      </p>
    </ModuleShell>
  );
}

export function Lr3PreclinicalAnecdotal() {
  const [tier, setTier] = useState("preclinical");
  const card = LR3_COMPARE[tier] || LR3_COMPARE.preclinical;

  return (
    <ModuleShell
      kicker="Preclinical / anecdotal switcher"
      title="Keep animal research separate from online microgram protocols"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Evidence view"
          options={Object.values(LR3_COMPARE).map((t) => ({
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
        <table className="w-full min-w-[560px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Setting</th>
              <th className="px-3 py-2.5 font-semibold">Dose</th>
              <th className="px-3 py-2.5 font-semibold">Schedule</th>
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
                <td className="px-3 py-2 text-slate-600">{row.schedule}</td>
                <td className="px-3 py-2 text-slate-500">{row.finding}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {tier === "anecdotal" ? (
        <p className="border-t border-red-100 bg-red-50 px-4 py-3 text-[11px] font-semibold text-red-950">
          Insulin combination warning: stacking with insulin or other
          glucose-lowering agents is especially hazardous. No safe combination
          protocol is established.
        </p>
      ) : (
        <p className="border-t border-amber-100 bg-amber-50 px-4 py-3 text-[11px] font-semibold text-amber-950">
          Do not convert these animal exposures into human-equivalent
          self-administration doses.
        </p>
      )}
    </ModuleShell>
  );
}

export function Lr3ClaimChecker() {
  const [open, setOpen] = useState("long-acting");

  return (
    <ModuleShell
      kicker="Myth / claim checker"
      title="“Long” = extended sequence — not proven long human half-life"
    >
      <ul className="divide-y divide-slate-100">
        {LR3_CLAIMS.map((c) => {
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

export function Lr3AdverseEventTable() {
  const [full, setFull] = useState(false);

  return (
    <ModuleShell
      kicker="Safety findings"
      title="No human LR3 AE rates — hypoglycemia is the central concern"
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
            {(full ? LR3_AE_FULL : LR3_AE_SIMPLE).map((row) => (
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
      <p className="border-t border-red-100 bg-red-50 px-4 py-3 text-[11px] font-semibold text-red-950">
        Severe hypoglycemia symptoms (seizure, unconsciousness, inability to
        swallow) require emergency care. Do not stack with insulin.
      </p>
    </ModuleShell>
  );
}

export function Lr3EvidenceLadder() {
  const tone = {
    none: "bg-slate-100 text-slate-600",
    "moderate-mechanism": "bg-amber-100 text-amber-900",
    "lab-only": "bg-slate-100 text-slate-700",
    "very-low": "bg-slate-100 text-slate-500",
    unknown: "bg-slate-100 text-slate-500",
  };

  return (
    <ModuleShell
      kicker="Dosage evidence ladder"
      title="How established is IGF-1 LR3 dosing?"
    >
      <ol className="divide-y divide-slate-100">
        {LR3_EVIDENCE_LADDER.map((rung, i) => (
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
