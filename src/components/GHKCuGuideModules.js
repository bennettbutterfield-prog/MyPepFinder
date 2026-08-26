"use client";

import { useMemo, useState } from "react";
import {
  GHK_CU_AE_FULL,
  GHK_CU_AE_SIMPLE,
  GHK_CU_CLAIMS,
  GHK_CU_COMPARE,
  GHK_CU_EVIDENCE_LADDER,
  GHK_CU_IDENTITY,
  GHK_CU_INJECTABLE_STATUS,
  GHK_CU_SC_PHASES,
  ghkCuCopperFromComplexMg,
} from "@/data/ghk-cu-dosage-guide";

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

function formatMg(mg) {
  if (mg >= 1) return `${Number(mg.toFixed(3))} mg`;
  return `${(mg * 1000).toFixed(0)} mcg`;
}

export function GhkIdentityGate() {
  const [id, setId] = useState("unsure");
  const card = GHK_CU_IDENTITY.find((c) => c.id === id) || GHK_CU_IDENTITY[2];

  return (
    <ModuleShell
      kicker="Identity gate"
      title="Confirm GHK vs GHK-Cu before trusting unit charts"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Identity check"
          options={GHK_CU_IDENTITY.map((c) => ({ id: c.id, label: c.label }))}
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

export function GhkCopperCalc() {
  const presets = [
    { id: "0.5", mg: 0.5, label: "0.5 mg" },
    { id: "1", mg: 1, label: "1 mg" },
    { id: "1.5", mg: 1.5, label: "1.5 mg" },
    { id: "2", mg: 2, label: "2 mg" },
    { id: "2.5", mg: 2.5, label: "2.5 mg" },
    { id: "3", mg: 3, label: "3 mg" },
  ];
  const [presetId, setPresetId] = useState("1");
  const [custom, setCustom] = useState("");

  const mg =
    custom !== ""
      ? Number(custom)
      : (presets.find((p) => p.id === presetId)?.mg ?? 1);
  const parts = ghkCuCopperFromComplexMg(mg);

  return (
    <ModuleShell
      kicker="Copper mass calculator"
      title="Stoichiometric GHK portion and elemental copper from complex mass"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Complex mass preset"
          options={presets.map((p) => ({ id: p.id, label: p.label }))}
          value={custom !== "" ? "" : presetId}
          onChange={(v) => {
            setCustom("");
            setPresetId(v);
          }}
        />
      </div>
      <div className="px-4 py-4">
        <label className="block text-[11px] font-semibold text-slate-700">
          Or enter complex mass (mg)
          <input
            type="number"
            min="0"
            step="0.1"
            value={custom}
            placeholder={String(presets.find((p) => p.id === presetId)?.mg ?? 1)}
            onChange={(e) => setCustom(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-900"
          />
        </label>
        {parts ? (
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg border border-violet-100 bg-violet-50 px-3 py-3">
              <p className="text-[10px] font-bold uppercase tracking-wide text-violet-700">
                GHK-Cu complex
              </p>
              <p className="mt-1 text-lg font-bold text-violet-900">
                {formatMg(parts.complexMg)}
              </p>
            </div>
            <div className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-3">
              <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
                GHK portion (≈84%)
              </p>
              <p className="mt-1 text-lg font-bold text-slate-900">
                {formatMg(parts.ghkMgApprox)}
              </p>
            </div>
            <div className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-3">
              <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
                Elemental copper (≈16%)
              </p>
              <p className="mt-1 text-lg font-bold text-slate-900">
                {parts.copperMcg.toFixed(0)} mcg
              </p>
            </div>
          </div>
        ) : null}
        <p className="mt-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-[11px] font-semibold text-amber-950">
          Stoichiometric estimate only — assumes a 1:1 GHK-copper complex at
          ~401.9 g/mol. Not absorption or exposure data.
        </p>
      </div>
    </ModuleShell>
  );
}

export function GhkInjectableStatus() {
  return (
    <ModuleShell
      kicker="Injectable human evidence"
      title="No controlled subcutaneous GHK-Cu dosing trial identified"
    >
      <dl className="divide-y divide-slate-100">
        {GHK_CU_INJECTABLE_STATUS.map(([q, a]) => (
          <div
            key={q}
            className="flex items-start justify-between gap-4 px-4 py-2.5"
          >
            <dt className="text-xs text-slate-500">{q}</dt>
            <dd className="text-right text-xs font-bold text-violet-800">{a}</dd>
          </div>
        ))}
      </dl>
    </ModuleShell>
  );
}

export function GhkScTimeline() {
  const [phaseId, setPhaseId] = useState("low");
  const phase =
    GHK_CU_SC_PHASES.find((p) => p.id === phaseId) || GHK_CU_SC_PHASES[0];
  const parts =
    phase.amount !== "None"
      ? ghkCuCopperFromComplexMg(parseFloat(phase.amount))
      : null;

  return (
    <ModuleShell
      kicker="12-week gradual SC protocol"
      title="1 → 1.5 → 2 mg five days weekly (3 mL recon on 50 mg vial)"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Protocol phase"
          options={GHK_CU_SC_PHASES.map((p) => ({
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
              Weeks {phase.weeks}
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
        {parts ? (
          <p className="mt-3 text-[11px] font-semibold text-slate-800">
            ≈{parts.copperMcg.toFixed(0)} mcg elemental copper per administration
            · Phase total {phase.phaseTotal}
          </p>
        ) : null}
        <div className="mt-4 flex h-2 overflow-hidden rounded-full bg-slate-100">
          {GHK_CU_SC_PHASES.map((p) => (
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
          Community titration convention — not a clinically validated regimen.
          Do not escalate after a predefined stopping signal.
        </p>
      </div>
    </ModuleShell>
  );
}

export function GhkReconCalc() {
  const [diluent, setDiluent] = useState("3");
  const [units, setUnits] = useState("6");

  const result = useMemo(() => {
    const d = Number(diluent);
    const u = Number(units);
    if (!Number.isFinite(d) || !Number.isFinite(u) || d <= 0 || u < 0) {
      return null;
    }
    const concMgPerMl = 50 / d;
    const volumeMl = u * 0.01;
    const complexMg = concMgPerMl * volumeMl;
    const parts = ghkCuCopperFromComplexMg(complexMg);
    return { concMgPerMl, volumeMl, complexMg, parts };
  }, [diluent, units]);

  return (
    <ModuleShell
      kicker="Reconstitution math"
      title="50 mg vial — units are not a dose until diluent volume is known"
    >
      <div className="grid gap-3 border-b border-slate-100 px-4 py-3 sm:grid-cols-2">
        <div>
          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Diluent added to 50 mg vial
          </p>
          <ChipGroup
            label="Diluent"
            options={[
              { id: "2", label: "2 mL" },
              { id: "2.5", label: "2.5 mL" },
              { id: "3", label: "3 mL" },
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
      {result?.parts ? (
        <div className="px-4 py-4">
          <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Concentration ≈ {result.concMgPerMl.toFixed(2)} mg/mL · volume{" "}
            {result.volumeMl.toFixed(3)} mL
          </p>
          <p className="mt-1 text-2xl font-bold text-violet-800">
            {formatMg(result.complexMg)} GHK-Cu complex
          </p>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            <p className="text-[11px] text-slate-700">
              <strong>GHK portion:</strong> {formatMg(result.parts.ghkMgApprox)}
            </p>
            <p className="text-[11px] text-slate-700">
              <strong>Elemental copper:</strong>{" "}
              {result.parts.copperMcg.toFixed(0)} mcg
            </p>
          </div>
          <p className="mt-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-[11px] font-semibold text-amber-950">
            Documents community vial arithmetic — not a clinically validated
            target dose. Assumes 50 mg complex mass and 1:1 copper occupancy.
          </p>
        </div>
      ) : null}
    </ModuleShell>
  );
}

export function GhkTopicalVsInjectable() {
  const c = GHK_CU_COMPARE.clinical;
  const a = GHK_CU_COMPARE.anecdotal;

  return (
    <ModuleShell
      kicker="Evidence split"
      title="Topical human research vs community injectable conventions"
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

export function GhkClaimChecker() {
  const [open, setOpen] = useState("injectable-better");

  return (
    <ModuleShell
      kicker="Myth / claim checker"
      title="Injectable superiority, gene reset, blue color, and microneedling claims"
    >
      <ul className="divide-y divide-slate-100">
        {GHK_CU_CLAIMS.map((c) => {
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

export function GhkEvidenceLadder() {
  return (
    <ModuleShell
      kicker="Dosage evidence ladder"
      title="Topical human research exists — injectable dosing is anecdotal"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Evidence level</th>
              <th className="px-3 py-2.5 font-semibold">GHK-Cu evidence</th>
              <th className="px-3 py-2.5 font-semibold">Confidence</th>
            </tr>
          </thead>
          <tbody>
            {GHK_CU_EVIDENCE_LADDER.map((row) => (
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

export function GhkAdverseEventTable() {
  const [full, setFull] = useState(false);

  return (
    <ModuleShell
      kicker="Safety findings"
      title="Topical tolerability, copper context, and injectable product-quality risks"
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
            {(full ? GHK_CU_AE_FULL : GHK_CU_AE_SIMPLE).map((row) => (
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
