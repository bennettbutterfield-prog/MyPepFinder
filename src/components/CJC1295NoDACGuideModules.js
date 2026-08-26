"use client";

import { useState } from "react";
import {
  CJC_NODAC_AE_FULL,
  CJC_NODAC_AE_SIMPLE,
  CJC_NODAC_CLAIMS,
  CJC_NODAC_DOSAGE_LADDER,
  CJC_NODAC_EVIDENCE_FAMILIES,
  CJC_NODAC_EVIDENCE_SPLIT,
  CJC_NODAC_IDENTITY,
  CJC_NODAC_MOLECULE,
  CJC_NODAC_ORIGIN_TIMELINE,
} from "@/data/cjc-1295-no-dac-dosage-guide";

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

export function CjcNodacIdentityGate() {
  const [id, setId] = useState("unsure");
  const [confirmed, setConfirmed] = useState(false);
  const card = CJC_NODAC_IDENTITY.find((c) => c.id === id) || CJC_NODAC_IDENTITY[0];

  return (
    <ModuleShell
      kicker="Identity gate"
      title="Which CJC-1295 form do you mean?"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Molecule identity"
          options={CJC_NODAC_IDENTITY.map((c) => ({ id: c.id, label: c.label }))}
          value={id}
          onChange={(v) => {
            setId(v);
            setConfirmed(false);
          }}
        />
      </div>
      <div className="px-4 py-4">
        <p className="text-sm font-bold text-slate-900">{card.verdict}</p>
        <p className="mt-2 text-[11px] leading-relaxed text-slate-600">
          {card.detail}
        </p>
        {!confirmed ? (
          <button
            type="button"
            onClick={() => setConfirmed(true)}
            className="mt-3 rounded-lg bg-violet-600 px-3 py-2 text-[11px] font-bold text-white hover:bg-violet-700"
          >
            Confirm identity to show dose-frequency context
          </button>
        ) : (
          <p className="mt-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-[11px] font-semibold text-amber-950">
            {card.scheduleHint}
          </p>
        )}
        {confirmed && id === "dac" ? (
          <p className="mt-2 text-[11px] text-slate-500">
            This page covers No DAC / Modified GRF 1-29. Use the CJC-1295 DAC
            page for long-acting weekly research exposures.
          </p>
        ) : null}
      </div>
    </ModuleShell>
  );
}

export function CjcNodacEvidenceSplit() {
  const c = CJC_NODAC_EVIDENCE_SPLIT.clinical;
  const o = CJC_NODAC_EVIDENCE_SPLIT.online;

  return (
    <ModuleShell
      kicker="Evidence split card"
      title="Do not merge “none identified” with online microgram protocols"
    >
      <div className="grid gap-0 sm:grid-cols-2">
        <div className="border-b border-slate-100 p-4 sm:border-b-0 sm:border-r">
          <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
            {c.title}
          </p>
          <p className="mt-1 text-sm font-bold text-slate-900">{c.status}</p>
          <ul className="mt-3 space-y-1.5">
            {c.points.map((p) => (
              <li key={p} className="text-[11px] text-slate-600">
                • {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-slate-50 p-4">
          <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
            {o.title}
          </p>
          <p className="mt-1 text-sm font-bold text-violet-800">{o.status}</p>
          <ul className="mt-3 space-y-1.5">
            {o.points.map((p) => (
              <li key={p} className="text-[11px] text-slate-600">
                • {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="border-t border-amber-100 bg-amber-50 px-4 py-3 text-[11px] font-semibold text-amber-950">
        Two landscapes — not one dosage chart. Online repetition ≠ clinical
        validation.
      </p>
    </ModuleShell>
  );
}

export function CjcNodacMoleculeCompare() {
  return (
    <ModuleShell
      kicker="Molecule comparison"
      title="Shared tetrasubstituted core · DAC adds MPA-Lys · sermorelin is native"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
          Four substitutions vs sermorelin
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          {CJC_NODAC_MOLECULE.substitutions.map((s) => (
            <span
              key={s.pos}
              className="rounded-full border border-violet-200 bg-violet-50 px-2.5 py-1 text-[10px] font-semibold text-violet-800"
            >
              Pos {s.pos}: {s.native} → {s.mod}
            </span>
          ))}
        </div>
        <p className="mt-3 break-all font-mono text-[9px] leading-relaxed text-slate-500">
          {CJC_NODAC_MOLECULE.core}
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Feature</th>
              <th className="px-3 py-2.5 font-semibold">No DAC / Mod GRF</th>
              <th className="px-3 py-2.5 font-semibold">CJC-1295 DAC</th>
              <th className="px-3 py-2.5 font-semibold">Sermorelin</th>
            </tr>
          </thead>
          <tbody>
            {CJC_NODAC_MOLECULE.rows.map((row) => (
              <tr key={row.feature} className="border-t border-slate-50">
                <td className="px-3 py-2 font-medium text-slate-800">
                  {row.feature}
                </td>
                <td className="px-3 py-2 text-violet-800">{row.nodac}</td>
                <td className="px-3 py-2 text-slate-600">{row.dac}</td>
                <td className="px-3 py-2 text-slate-600">{row.sermorelin}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="grid gap-0 border-t border-slate-100 sm:grid-cols-2">
        <div className="border-b p-3 sm:border-b-0 sm:border-r">
          <p className="text-[10px] font-bold uppercase text-slate-500">
            No DAC
          </p>
          <p className="mt-1 text-xs font-semibold text-slate-800">
            29-aa tetrasubstituted core only
          </p>
        </div>
        <div className="bg-violet-50/50 p-3">
          <p className="text-[10px] font-bold uppercase text-violet-700">
            DAC
          </p>
          <p className="mt-1 text-xs font-semibold text-slate-800">
            Same core + MPA-Lys albumin-binding extension
          </p>
        </div>
      </div>
    </ModuleShell>
  );
}

export function CjcNodacClaimChecker() {
  const [open, setOpen] = useState("saturation");

  return (
    <ModuleShell
      kicker="Claim checker"
      title="Widely reported ≠ directly demonstrated"
    >
      <ul className="divide-y divide-slate-100">
        {CJC_NODAC_CLAIMS.map((c) => {
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
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600">
                      {c.status}
                    </span>
                    <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-900">
                      not directly demonstrated
                    </span>
                  </div>
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

export function CjcNodacEvidenceFamilies() {
  const tone = {
    none: "bg-slate-100 text-slate-600",
    indirect: "bg-amber-100 text-amber-900",
    "not-transferable": "bg-violet-100 text-violet-800",
  };

  return (
    <ModuleShell
      kicker="Evidence-family map"
      title="Keep no-DAC, one-sub analogs, sermorelin, and DAC separate"
    >
      <ol className="divide-y divide-slate-100">
        {CJC_NODAC_EVIDENCE_FAMILIES.map((f, i) => (
          <li key={f.id} className="flex gap-3 px-4 py-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-600 text-[10px] font-bold text-white">
              {i + 1}
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-xs font-bold text-slate-900">{f.label}</p>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                    tone[f.tone]
                  }`}
                >
                  {f.tone.replace("-", " ")}
                </span>
              </div>
              <p className="mt-1 text-[11px] text-slate-600">{f.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </ModuleShell>
  );
}

export function CjcNodacOriginTimeline() {
  return (
    <ModuleShell
      kicker="Protocol-origin timeline"
      title="Cultural transmission — not clinical development"
    >
      <ol className="space-y-0 px-4 py-4">
        {CJC_NODAC_ORIGIN_TIMELINE.map((step, i) => (
          <li key={step.year} className="relative pb-4 pl-6 last:pb-0">
            {i < CJC_NODAC_ORIGIN_TIMELINE.length - 1 ? (
              <span className="absolute left-[7px] top-5 h-[calc(100%-8px)] w-0.5 bg-violet-200" />
            ) : null}
            <span className="absolute left-0 top-1 h-4 w-4 rounded-full border-2 border-violet-500 bg-white" />
            <p className="text-[10px] font-bold uppercase tracking-wide text-violet-700">
              {step.year}
            </p>
            <p className="mt-0.5 text-xs font-bold text-slate-900">
              {step.title}
            </p>
            <p className="mt-0.5 text-[11px] text-slate-600">{step.detail}</p>
          </li>
        ))}
      </ol>
    </ModuleShell>
  );
}

export function CjcNodacAdverseEventTable() {
  const [full, setFull] = useState(false);

  return (
    <ModuleShell
      kicker="Simple / full safety toggle"
      title="No adequate direct human safety data for free base / acetate"
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
              <th className="px-3 py-2.5 font-semibold">Finding</th>
              <th className="px-3 py-2.5 font-semibold">Status</th>
              <th className="px-3 py-2.5 font-semibold">Note</th>
              {full ? (
                <th className="px-3 py-2.5 font-semibold">Context</th>
              ) : null}
            </tr>
          </thead>
          <tbody>
            {(full ? CJC_NODAC_AE_FULL : CJC_NODAC_AE_SIMPLE).map((row) => (
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
        Class GH/IGF-1 risks, formulation uncertainty, FDA characterization
        concerns, and WADA prohibition apply as context—not measured incidence
        rates for this peptide.
      </p>
    </ModuleShell>
  );
}

export function CjcNodacDosageLadder() {
  const tone = {
    none: "bg-slate-100 text-slate-600",
    indirect: "bg-amber-100 text-amber-900",
    "not-transferable": "bg-violet-100 text-violet-800",
    low: "bg-slate-100 text-slate-700",
  };
  const label = {
    none: "None",
    indirect: "Indirect",
    "not-transferable": "Not transferable",
    low: "Low / insufficient",
  };

  return (
    <ModuleShell
      kicker="Dosage evidence ladder"
      title="How established is CJC-1295 No DAC dosing?"
    >
      <ol className="divide-y divide-slate-100">
        {CJC_NODAC_DOSAGE_LADDER.map((rung, i) => (
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
