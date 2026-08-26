"use client";

import { useMemo, useState } from "react";
import {
  KPV_AE_FULL,
  KPV_AE_SIMPLE,
  KPV_CLAIMS,
  KPV_COMPARE,
  KPV_EVIDENCE_LADDER,
  KPV_FORM,
  KPV_HUMAN_STATUS,
  KPV_IDENTITY,
  KPV_PROTOCOL_PHASES,
  KPV_RECON_PRESETS,
  KPV_SOLUBILITY,
  kpvAmountFromVial,
} from "@/data/kpv-dosage-guide";

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

export function KpvIdentityGate() {
  const [id, setId] = useState("unsure");
  const card = KPV_IDENTITY.find((c) => c.id === id) || KPV_IDENTITY[4];

  return (
    <ModuleShell
      kicker="Identity gate"
      title="Confirm KPV vs K(D)PT, alpha-MSH, (CKPV)₂, or modified analogues"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Identity check"
          options={KPV_IDENTITY.map((c) => ({ id: c.id, label: c.label }))}
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

export function KpvFormGate() {
  const [formId, setFormId] = useState("unsure");
  const form = KPV_FORM.find((f) => f.id === formId) || KPV_FORM[2];

  return (
    <ModuleShell
      kicker="Form gate"
      title="Free base vs acetate — mass, solubility, and recon viability"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="KPV form"
          options={KPV_FORM.map((f) => ({ id: f.id, label: f.label }))}
          value={formId}
          onChange={setFormId}
        />
      </div>
      <div className="px-4 py-4">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold text-slate-700">
            {form.mass}
          </span>
          <span className="rounded-full bg-violet-100 px-2.5 py-1 text-[10px] font-bold text-violet-800">
            {form.solubility}
          </span>
        </div>
        <p className="mt-3 text-sm font-bold text-slate-900">{form.verdict}</p>
        <p className="mt-2 text-[11px] leading-relaxed text-slate-600">
          {form.detail}
        </p>
      </div>
    </ModuleShell>
  );
}

export function KpvHumanStatus() {
  return (
    <ModuleShell
      kicker="Human evidence status"
      title="No published human KPV administration study identified (FDA 2026)"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[420px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Human-evidence question</th>
              <th className="px-3 py-2.5 font-semibold">Finding</th>
            </tr>
          </thead>
          <tbody>
            {KPV_HUMAN_STATUS.map(([question, finding]) => (
              <tr key={question} className="border-t border-slate-50">
                <td className="px-3 py-2 font-medium text-slate-700">
                  {question}
                </td>
                <td className="px-3 py-2 font-semibold text-violet-800">
                  {finding}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="border-t border-slate-100 px-4 py-3 text-[11px] font-semibold text-amber-950">
        Human cell lines, cadaver skin, and isolated tissue studies are not
        human dosing trials. K(D)PT human data cannot be reassigned to KPV.
      </p>
    </ModuleShell>
  );
}

export function KpvProtocolTimeline() {
  const [phaseId, setPhaseId] = useState("group-a");
  const phase =
    KPV_PROTOCOL_PHASES.find((p) => p.id === phaseId) ||
    KPV_PROTOCOL_PHASES[1];

  return (
    <ModuleShell
      kicker="28-day observational protocol"
      title="Fixed 250 mcg vs 500 mcg SC daily — no titration"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Protocol phase"
          options={KPV_PROTOCOL_PHASES.map((p) => ({
            id: p.id,
            label: p.phase.replace("Group A — ", "A: ").replace("Group B — ", "B: "),
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
            <p className="mt-1 text-[11px] text-slate-600">{phase.frequency}</p>
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
          {KPV_PROTOCOL_PHASES.map((p) => (
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
          Observational test of community range — not a published human trial.
          Group A = 7 mg total; Group B = 14 mg total over 28 days.
        </p>
      </div>
    </ModuleShell>
  );
}

export function KpvClinicalVsAnecdotal() {
  const c = KPV_COMPARE.clinical;
  const a = KPV_COMPARE.anecdotal;

  return (
    <ModuleShell
      kicker="Evidence split"
      title="No clinical KPV dosing vs community-reported protocols"
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

export function KpvReconCalc() {
  const targetPresets = [
    { id: "200", mcg: 200, label: "200 mcg" },
    { id: "250", mcg: 250, label: "250 mcg (Group A)" },
    { id: "400", mcg: 400, label: "400 mcg" },
    { id: "500", mcg: 500, label: "500 mcg (Group B)" },
  ];
  const [presetId, setPresetId] = useState("5-2");
  const [targetId, setTargetId] = useState("250");
  const [formId, setFormId] = useState("free-base");
  const [customTarget, setCustomTarget] = useState("");

  const vialPreset =
    KPV_RECON_PRESETS.find((p) => p.id === presetId) || KPV_RECON_PRESETS[0];
  const targetMcg =
    customTarget !== ""
      ? Number(customTarget)
      : (targetPresets.find((p) => p.id === targetId)?.mcg ?? 250);

  const result = useMemo(() => {
    return kpvAmountFromVial(
      vialPreset.vialMg,
      vialPreset.diluentMl,
      targetMcg
    );
  }, [vialPreset, targetMcg]);

  const exceedsFreeBaseSolubility =
    result && formId === "free-base" && result.concMgPerMl > KPV_SOLUBILITY.freeBase;

  return (
    <ModuleShell
      kicker="Reconstitution math"
      title="Vial mg + diluent mL + target mcg → volume and U-100 units"
    >
      <div className="grid gap-3 border-b border-slate-100 px-4 py-3 sm:grid-cols-2">
        <div>
          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Vial preset
          </p>
          <ChipGroup
            label="Vial preset"
            options={KPV_RECON_PRESETS.map((p) => ({
              id: p.id,
              label: p.label,
            }))}
            value={presetId}
            onChange={setPresetId}
          />
        </div>
        <div>
          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Material form (solubility check)
          </p>
          <ChipGroup
            label="Form"
            options={[
              { id: "free-base", label: "Free base (~0.7 mg/mL)" },
              { id: "acetate", label: "Acetate (~5 mg/mL)" },
            ]}
            value={formId}
            onChange={setFormId}
          />
        </div>
      </div>
      <div className="border-b border-slate-100 px-4 py-3">
        <p className="mb-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
          Target amount
        </p>
        <ChipGroup
          label="Target mcg"
          options={targetPresets.map((p) => ({
            id: p.id,
            label: p.label,
          }))}
          value={customTarget !== "" ? "" : targetId}
          onChange={(v) => {
            setCustomTarget("");
            setTargetId(v);
          }}
        />
        <label className="mt-3 block text-[11px] font-semibold text-slate-700">
          Or enter target amount (mcg)
          <input
            type="number"
            min="0"
            step="50"
            value={customTarget}
            placeholder={String(
              targetPresets.find((p) => p.id === targetId)?.mcg ?? 250
            )}
            onChange={(e) => setCustomTarget(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-900"
          />
        </label>
      </div>
      {result ? (
        <div className="px-4 py-4">
          <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
            {vialPreset.label} · concentration ≈{" "}
            {result.concMgPerMl.toFixed(2)} mg/mL · ≈{" "}
            {result.mcgPerUnit.toFixed(0)} mcg per U-100 unit
          </p>
          <p className="mt-1 text-2xl font-bold text-violet-800">
            {result.targetMcg} mcg = {result.volumeMl.toFixed(3)} mL ={" "}
            {result.units.toFixed(1)} U-100 units
          </p>
          {exceedsFreeBaseSolubility ? (
            <p className="mt-3 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-[11px] font-semibold text-red-950">
              Nominal concentration ({result.concMgPerMl.toFixed(2)} mg/mL)
              exceeds FDA-reported free-base water solubility (~0.7 mg/mL).
              Arithmetic can be exact while the preparation is unsuitable.
            </p>
          ) : null}
          <p className="mt-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-[11px] font-semibold text-amber-950">
            Calculation reference only — not a formulation recipe. Confirm form,
            vehicle, pH, sterility, and stability before use.
          </p>
        </div>
      ) : null}
    </ModuleShell>
  );
}

export function KpvClaimChecker() {
  const [open, setOpen] = useState("kdpt-kpv");

  return (
    <ModuleShell
      kicker="Myth / claim checker"
      title="K(D)PT confusion, half-life, oral gut claims, tanning, KLOW, and higher-is-better"
    >
      <ul className="divide-y divide-slate-100">
        {KPV_CLAIMS.map((c) => {
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

export function KpvEvidenceLadder() {
  return (
    <ModuleShell
      kicker="Dosage evidence ladder"
      title="No human dose — community conventions and preclinical models only"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Dosage information</th>
              <th className="px-3 py-2.5 font-semibold">Evidence</th>
              <th className="px-3 py-2.5 font-semibold">Confidence</th>
            </tr>
          </thead>
          <tbody>
            {KPV_EVIDENCE_LADDER.map((row) => (
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

export function KpvAdverseEventTable() {
  const [full, setFull] = useState(false);

  return (
    <ModuleShell
      kicker="Safety findings"
      title="No human incidence data — product and route risks dominate"
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
            {(full ? KPV_AE_FULL : KPV_AE_SIMPLE).map((row) => (
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
