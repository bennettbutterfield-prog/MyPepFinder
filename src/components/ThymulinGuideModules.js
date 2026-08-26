"use client";

import { useMemo, useState } from "react";
import {
  THYMULIN_AE_FULL,
  THYMULIN_AE_SIMPLE,
  THYMULIN_CLAIMS,
  THYMULIN_COMPARE,
  THYMULIN_EVIDENCE_LADDER,
  THYMULIN_HUMAN_STATUS,
  THYMULIN_HUMAN_TRIALS,
  THYMULIN_IDENTITY,
  THYMULIN_PROTOCOL_PHASES,
  THYMULIN_RECON_PRESETS,
  THYMULIN_ZINC,
  thymulinAmountFromVial,
  thymulinEquimolarZnMg,
} from "@/data/thymulin-dosage-guide";

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

export function ThymulinIdentityGate() {
  const [id, setId] = useState("unsure");
  const card =
    THYMULIN_IDENTITY.find((c) => c.id === id) ||
    THYMULIN_IDENTITY[THYMULIN_IDENTITY.length - 1];

  return (
    <ModuleShell
      kicker="Identity gate"
      title="Confirm FTS-Zn / thymulin vs thymalin, Tα1, TB-500, FTS-free, or unsure"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Identity check"
          options={THYMULIN_IDENTITY.map((c) => ({ id: c.id, label: c.label }))}
          value={id}
          onChange={setId}
        />
      </div>
      <div className="px-4 py-4">
        <p className="text-sm font-bold text-slate-900">{card.verdict}</p>
        <p className="mt-2 text-[11px] leading-relaxed text-slate-600">
          {card.detail}
        </p>
        {id === "thymalin" ? (
          <p className="mt-3 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-[11px] font-semibold text-red-950">
            Hard stop: thymalin is a thymic extract/mixture — not thymulin. A
            20-day thymalin cycle is the most common online conflation error and
            cannot be assigned to thymulin dosing.
          </p>
        ) : null}
        {id === "fts-free" ? (
          <p className="mt-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-[11px] font-semibold text-amber-950">
            FTS (zinc-free) has little or no classic thymulin bioactivity. Verify
            zinc state before any protocol — zinc-free ≠ FTS-Zn (active).
          </p>
        ) : null}
      </div>
    </ModuleShell>
  );
}

export function ThymulinZincGate() {
  const [chipId, setChipId] = useState("unknown");
  const chip =
    THYMULIN_ZINC.chips.find((c) => c.id === chipId) || THYMULIN_ZINC.chips[3];
  const stoich = THYMULIN_ZINC.stoichiometry;
  const [peptideMg, setPeptideMg] = useState("1");
  const znMg = thymulinEquimolarZnMg(Number(peptideMg));

  return (
    <ModuleShell
      kicker="Zinc state gate"
      title="Zinc-free FTS vs FTS-Zn vs acetate + equimolar ZnCl2 vs unknown"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Zinc state"
          options={THYMULIN_ZINC.chips.map((c) => ({
            id: c.id,
            label: c.label,
          }))}
          value={chipId}
          onChange={setChipId}
        />
      </div>
      <div className="px-4 py-4">
        <p className="text-[10px] font-bold uppercase tracking-wide text-teal-700">
          {chip.status}
        </p>
        <p className="mt-2 text-[11px] leading-relaxed text-slate-600">
          {chip.detail}
        </p>
        <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 px-3 py-3">
          <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Equimolar stoichiometry example (educational only)
          </p>
          <label className="mt-2 block text-[11px] font-semibold text-slate-700">
            Free peptide mass (mg)
            <input
              type="number"
              min="0.001"
              step="0.1"
              value={peptideMg}
              onChange={(e) => setPeptideMg(e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-900"
            />
          </label>
          {znMg !== null ? (
            <p className="mt-2 text-[11px] font-semibold text-teal-800">
              {peptideMg} mg peptide ≈ {(Number(peptideMg) / 858.8533).toFixed(6)}{" "}
              mmol → ≈ {znMg.toFixed(4)} mg anhydrous ZnCl2
            </p>
          ) : null}
          <p className="mt-2 text-[11px] text-amber-950">{stoich.warning}</p>
        </div>
      </div>
    </ModuleShell>
  );
}

export function ThymulinHumanStatus() {
  const [trialId, setTrialId] = useState("ra-dose-compare");
  const trial =
    THYMULIN_HUMAN_TRIALS.find((t) => t.id === trialId) ||
    THYMULIN_HUMAN_TRIALS[0];

  return (
    <ModuleShell
      kicker="Human trial evidence"
      title="RA 1/5/10 mg/day · 500 mcg SC · MS · topical · ex vivo — no universal dose"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Trial selector"
          options={THYMULIN_HUMAN_TRIALS.map((t) => ({
            id: t.id,
            label: t.study.replace(" et al.,", "").replace("Topical ", "Top. "),
          }))}
          value={trialId}
          onChange={setTrialId}
        />
      </div>
      <div className="px-4 py-4">
        <p className="text-[10px] font-bold uppercase tracking-wide text-teal-700">
          {trial.evidence}
        </p>
        <p className="mt-1 text-lg font-bold text-slate-900">{trial.dose}</p>
        <dl className="mt-3 grid gap-2 sm:grid-cols-2">
          <div>
            <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
              Frequency / route
            </dt>
            <dd className="text-[11px] text-slate-700">{trial.frequency}</dd>
          </div>
          <div>
            <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
              Duration
            </dt>
            <dd className="text-[11px] text-slate-700">{trial.duration}</dd>
          </div>
          <div>
            <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
              Population
            </dt>
            <dd className="text-[11px] text-slate-700">{trial.population}</dd>
          </div>
          <div>
            <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
              Main result
            </dt>
            <dd className="text-[11px] font-semibold text-teal-800">
              {trial.result}
            </dd>
          </div>
        </dl>
      </div>
      <div className="overflow-x-auto border-t border-slate-100">
        <table className="w-full min-w-[420px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Human-evidence question</th>
              <th className="px-3 py-2.5 font-semibold">Finding</th>
            </tr>
          </thead>
          <tbody>
            {THYMULIN_HUMAN_STATUS.map(([question, finding]) => (
              <tr key={question} className="border-t border-slate-50">
                <td className="px-3 py-2 font-medium text-slate-700">
                  {question}
                </td>
                <td className="px-3 py-2 font-semibold text-teal-800">
                  {finding}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ModuleShell>
  );
}

export function ThymulinProtocolTimeline() {
  const [phaseId, setPhaseId] = useState("dosing");
  const phase =
    THYMULIN_PROTOCOL_PHASES.find((p) => p.id === phaseId) ||
    THYMULIN_PROTOCOL_PHASES[2];

  return (
    <ModuleShell
      kicker="Nonclinical mouse protocol"
      title="1.5 mg/kg IP daily × 28 days + equimolar ZnCl2 — E0771 tumor model"
    >
      <div className="border-b border-red-100 bg-red-50 px-4 py-2">
        <p className="text-[11px] font-bold text-red-950">
          ⛔ Animal protocol only — NOT a human dose. Do NOT convert to
          human-equivalent dose (HED).
        </p>
      </div>
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Protocol phase"
          options={THYMULIN_PROTOCOL_PHASES.map((p) => ({
            id: p.id,
            label: p.phase.replace("Fixed thymulin exposure — ", "Dose: "),
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
            <p className="mt-1 text-2xl font-bold text-teal-800">
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
          {THYMULIN_PROTOCOL_PHASES.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setPhaseId(p.id)}
              className={`h-full flex-1 transition ${
                p.id === phaseId
                  ? "bg-teal-600"
                  : "bg-teal-200 hover:bg-teal-300"
              }`}
              aria-label={p.phase}
            />
          ))}
        </div>
        <p className="mt-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-[11px] font-semibold text-amber-950">
          Kanemaru et al., 2026 replication: implant d0, first dose d1, daily IP
          through d28, endpoint d29. Zinc-matched vehicle control required. No
          loading, titration, taper, or human-dose conversion.
        </p>
      </div>
    </ModuleShell>
  );
}

export function ThymulinClinicalVsAnecdotal() {
  const c = THYMULIN_COMPARE.clinical;
  const a = THYMULIN_COMPARE.anecdotal;

  return (
    <ModuleShell
      kicker="Evidence split"
      title="Historical human literature vs modern community protocols"
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
          <p className="mt-1 text-sm font-bold text-teal-800">{a.status}</p>
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

export function ThymulinReconCalc() {
  const targetPresets = [
    { id: "100mcg", mcg: 100, label: "100 mcg (community BIW ref)" },
    { id: "500mcg", mcg: 500, label: "500 mcg (RA SC experiment)" },
    { id: "1mg", mcg: 1000, label: "1 mg (RA arm / community)" },
    { id: "5mg", mcg: 5000, label: "5 mg (RA strongest signal)" },
  ];
  const [presetId, setPresetId] = useState("5-2");
  const [targetId, setTargetId] = useState("500mcg");
  const [customTarget, setCustomTarget] = useState("");
  const [unit, setUnit] = useState("mcg");

  const vialPreset =
    THYMULIN_RECON_PRESETS.find((p) => p.id === presetId) ||
    THYMULIN_RECON_PRESETS[0];

  const targetMcg =
    customTarget !== ""
      ? unit === "mg"
        ? Number(customTarget) * 1000
        : Number(customTarget)
      : (targetPresets.find((p) => p.id === targetId)?.mcg ?? 500);

  const result = useMemo(() => {
    if (customTarget !== "") {
      return thymulinAmountFromVial(
        vialPreset.vialMg,
        vialPreset.diluentMl,
        Number(customTarget),
        unit
      );
    }
    return thymulinAmountFromVial(
      vialPreset.vialMg,
      vialPreset.diluentMl,
      targetMcg
    );
  }, [vialPreset, targetMcg, customTarget, unit]);

  return (
    <ModuleShell
      kicker="Reconstitution math"
      title="5 mg/2 mL · 10 mg/2 mL · 10 mg/1 mL — with zinc/assay warnings"
    >
      <div className="grid gap-3 border-b border-slate-100 px-4 py-3 sm:grid-cols-2">
        <div>
          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Vial preset
          </p>
          <ChipGroup
            label="Vial preset"
            options={THYMULIN_RECON_PRESETS.map((p) => ({
              id: p.id,
              label: p.label,
            }))}
            value={presetId}
            onChange={setPresetId}
          />
        </div>
        <div>
          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Target amount
          </p>
          <ChipGroup
            label="Target amount"
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
        </div>
      </div>
      <div className="grid gap-3 border-b border-slate-100 px-4 py-3 sm:grid-cols-2">
        <label className="block text-[11px] font-semibold text-slate-700">
          Or enter target amount
          <div className="mt-1 flex gap-2">
            <input
              type="number"
              min="0"
              step="any"
              value={customTarget}
              placeholder={String(
                targetPresets.find((p) => p.id === targetId)?.mcg ?? 500
              )}
              onChange={(e) => setCustomTarget(e.target.value)}
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-900"
            />
            <ChipGroup
              label="Unit"
              options={[
                { id: "mcg", label: "mcg" },
                { id: "mg", label: "mg" },
              ]}
              value={unit}
              onChange={setUnit}
            />
          </div>
        </label>
      </div>
      {result ? (
        <div className="px-4 py-4">
          <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
            {vialPreset.label} · concentration ≈{" "}
            {result.concMgPerMl.toFixed(2)} mg/mL · ≈{" "}
            {result.mcgPerUnit.toFixed(0)} mcg per U-100 unit
          </p>
          <p className="mt-1 text-2xl font-bold text-teal-800">
            {result.targetMcg >= 1000
              ? `${result.targetMg} mg`
              : `${result.targetMcg} mcg`}{" "}
            = {result.volumeMl.toFixed(3)} mL = {result.units.toFixed(1)} U-100
            units
          </p>
          {presetId === "5-2" && targetId === "500mcg" ? (
            <p className="mt-2 text-[11px] font-semibold text-teal-900">
              RA 500 mcg reference: 5 mg/2 mL → 500 mcg = 20 U — arithmetic
              only; zinc state and assay basis still required.
            </p>
          ) : null}
          <p className="mt-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-[11px] font-semibold text-amber-950">
            {vialPreset.note} Label mass may refer to acetate gross mass, not
            free-peptide equivalent. Zinc state must be verified — assuming
            “thymulin” means zinc-complexed is not supported.
          </p>
          <p className="mt-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-[11px] text-slate-600">
            Calculation reference only — not a formulation recipe. Equimolar
            ZnCl2 addition requires validated laboratory procedure; do not
            casually add zinc to injectable vials.
          </p>
        </div>
      ) : null}
    </ModuleShell>
  );
}

export function ThymulinClaimChecker() {
  const [open, setOpen] = useState("thymalin-same");

  return (
    <ModuleShell
      kicker="Myth / claim checker"
      title="Thymalin=same, zinc automatic, 5 mg universal, mouse→human, 20-day cycle"
    >
      <ul className="divide-y divide-slate-100">
        {THYMULIN_CLAIMS.map((c) => {
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

export function ThymulinEvidenceLadder() {
  return (
    <ModuleShell
      kicker="Dosage evidence ladder"
      title="Overall thymulin dosing evidence: low — 5 mg/day RA signal ≠ universal dose"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Evidence level</th>
              <th className="px-3 py-2.5 font-semibold">Thymulin evidence</th>
              <th className="px-3 py-2.5 font-semibold">Assessment</th>
            </tr>
          </thead>
          <tbody>
            {THYMULIN_EVIDENCE_LADDER.map((row) => (
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

export function ThymulinAdverseEventTable() {
  const [full, setFull] = useState(false);

  return (
    <ModuleShell
      kicker="Safety findings"
      title="Thrombocytopenia, vasculitis, immune modulation, and zinc exposure risks"
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
            {(full ? THYMULIN_AE_FULL : THYMULIN_AE_SIMPLE).map((row) => (
              <tr key={row.topic} className="border-t border-slate-50">
                <td className="px-3 py-2 font-medium text-slate-700">
                  {row.topic}
                </td>
                <td className="px-3 py-2 font-semibold text-teal-800">
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
