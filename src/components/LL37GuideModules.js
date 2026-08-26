"use client";

import { useMemo, useState } from "react";
import {
  LL37_AE_FULL,
  LL37_AE_SIMPLE,
  LL37_CLAIMS,
  LL37_COMPARE,
  LL37_EVIDENCE_LADDER,
  LL37_HUMAN_STATUS,
  LL37_HUMAN_TRIALS,
  LL37_IDENTITY,
  LL37_PROTOCOL_PHASES,
  LL37_RECON_PRESETS,
  LL37_TRIAL_CONCENTRATIONS,
  ll37AmountFromVial,
  ll37WoundDoseMcg,
  ll37WoundVolumeMl,
} from "@/data/ll-37-dosage-guide";

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

export function Ll37IdentityGate() {
  const [id, setId] = useState("unsure");
  const card = LL37_IDENTITY.find((c) => c.id === id) || LL37_IDENTITY[6];

  return (
    <ModuleShell
      kicker="Identity gate"
      title="Confirm LL-37 vs hCAP18, CRAMP, KR-12, OP-145, or analogues"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Identity check"
          options={LL37_IDENTITY.map((c) => ({ id: c.id, label: c.label }))}
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

export function Ll37HumanStatus() {
  const [trialId, setTrialId] = useState("gronberg-2014");
  const trial =
    LL37_HUMAN_TRIALS.find((t) => t.id === trialId) || LL37_HUMAN_TRIALS[0];

  return (
    <ModuleShell
      kicker="Human trial evidence"
      title="Topical wound RCTs + intratumoral melanoma (n=4) — no SC human dose"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Trial selector"
          options={LL37_HUMAN_TRIALS.map((t) => ({
            id: t.id,
            label: t.study.replace(" et al.,", "").replace(" Phase IIb", ""),
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
        <p className="mt-1 text-[11px] text-slate-600">
          Surface dose: {trial.surfaceDose}
        </p>
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
            {LL37_HUMAN_STATUS.map(([question, finding]) => (
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

export function Ll37WoundCalc() {
  const [area, setArea] = useState("10");
  const [concId, setConcId] = useState("0.5");

  const conc =
    LL37_TRIAL_CONCENTRATIONS.find((c) => String(c.mgMl) === concId) ||
    LL37_TRIAL_CONCENTRATIONS[0];

  const areaNum = Number(area);
  const volumeMl = ll37WoundVolumeMl(areaNum);
  const doseMcg = ll37WoundDoseMcg(areaNum, conc.mgMl);
  const doseMg = doseMcg !== null ? doseMcg / 1000 : null;
  const eightAppsMcg = doseMcg !== null ? doseMcg * 8 : null;

  return (
    <ModuleShell
      kicker="Wound-area calculator"
      title="Trial exposure: area × 0.025 mL/cm² × concentration → mcg per application"
    >
      <div className="grid gap-3 border-b border-slate-100 px-4 py-3 sm:grid-cols-2">
        <label className="block text-[11px] font-semibold text-slate-700">
          Wound area (cm²)
          <input
            type="number"
            min="0.1"
            step="0.5"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-900"
          />
        </label>
        <div>
          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Trial concentration arm
          </p>
          <ChipGroup
            label="Concentration"
            options={LL37_TRIAL_CONCENTRATIONS.map((c) => ({
              id: String(c.mgMl),
              label: c.label,
            }))}
            value={concId}
            onChange={setConcId}
          />
        </div>
      </div>
      {volumeMl !== null && doseMcg !== null ? (
        <div className="px-4 py-4">
          <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Application volume: {volumeMl.toFixed(3)} mL ({areaNum} cm² × 0.025
            mL/cm²)
          </p>
          <p className="mt-1 text-2xl font-bold text-teal-800">
            {doseMcg.toFixed(1)} mcg LL-37 per application
          </p>
          <p className="mt-1 text-[11px] text-slate-600">
            = {doseMg.toFixed(4)} mg · {conc.mcgPerCm2} mcg/cm² at{" "}
            {conc.mgMl} mg/mL
          </p>
          <p className="mt-2 text-[11px] font-semibold text-slate-700">
            Eight twice-weekly applications (4 weeks, constant area): ≈{" "}
            {eightAppsMcg.toFixed(0)} mcg/cm² cumulative ({(eightAppsMcg / 1000).toFixed(2)}{" "}
            mg/cm²)
          </p>
          <p className="mt-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-[11px] font-semibold text-amber-950">
            Reconstructs published trial PVA exposure — not a home wound-care
            recipe. Trial vehicle, aseptic preparation, compression, and
            monitoring are part of the intervention.
          </p>
        </div>
      ) : null}
    </ModuleShell>
  );
}

export function Ll37ProtocolTimeline() {
  const [phaseId, setPhaseId] = useState("group-a");
  const phase =
    LL37_PROTOCOL_PHASES.find((p) => p.id === phaseId) ||
    LL37_PROTOCOL_PHASES[1];

  return (
    <ModuleShell
      kicker="6-week observational protocol"
      title="Fixed 100 mcg vs 200 mcg SC · 5 on/2 off × 4 weeks + 2-week washout"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Protocol phase"
          options={LL37_PROTOCOL_PHASES.map((p) => ({
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
          {LL37_PROTOCOL_PHASES.map((p) => (
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
          Fixed parallel groups — not titration. Group A = 2 mg total; Group B =
          4 mg total over 4 weeks. Observational community-anchored design, not
          a published clinical protocol.
        </p>
      </div>
    </ModuleShell>
  );
}

export function Ll37ClinicalVsAnecdotal() {
  const c = LL37_COMPARE.clinical;
  const a = LL37_COMPARE.anecdotal;

  return (
    <ModuleShell
      kicker="Evidence split"
      title="Human topical/intratumoral research vs community SC conventions"
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

export function Ll37ReconCalc() {
  const targetPresets = [
    { id: "100", mcg: 100, label: "100 mcg (Group A)" },
    { id: "200", mcg: 200, label: "200 mcg (Group B)" },
    { id: "250", mcg: 250, label: "250 mcg (melanoma/tumor ref)" },
    { id: "400", mcg: 400, label: "400 mcg (upper community)" },
  ];
  const [presetId, setPresetId] = useState("5-2");
  const [targetId, setTargetId] = useState("100");
  const [customTarget, setCustomTarget] = useState("");

  const vialPreset =
    LL37_RECON_PRESETS.find((p) => p.id === presetId) || LL37_RECON_PRESETS[1];
  const targetMcg =
    customTarget !== ""
      ? Number(customTarget)
      : (targetPresets.find((p) => p.id === targetId)?.mcg ?? 100);

  const result = useMemo(() => {
    return ll37AmountFromVial(
      vialPreset.vialMg,
      vialPreset.diluentMl,
      targetMcg
    );
  }, [vialPreset, targetMcg]);

  const isHighlightedPreset = presetId === "5-2";

  return (
    <ModuleShell
      kicker="Reconstitution math"
      title="5 mg @ 1/2/5 mL + 10 mg/2 mL — vial mg + diluent → mcg and U-100 units"
    >
      <div className="grid gap-3 border-b border-slate-100 px-4 py-3 sm:grid-cols-2">
        <div>
          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Vial preset
          </p>
          <ChipGroup
            label="Vial preset"
            options={LL37_RECON_PRESETS.map((p) => ({
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
        </div>
      </div>
      <div className="border-b border-slate-100 px-4 py-3">
        <label className="block text-[11px] font-semibold text-slate-700">
          Or enter target amount (mcg)
          <input
            type="number"
            min="0"
            step="25"
            value={customTarget}
            placeholder={String(
              targetPresets.find((p) => p.id === targetId)?.mcg ?? 100
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
          <p className="mt-1 text-2xl font-bold text-teal-800">
            {result.targetMcg} mcg = {result.volumeMl.toFixed(3)} mL ={" "}
            {result.units.toFixed(1)} U-100 units
          </p>
          {isHighlightedPreset ? (
            <p className="mt-2 text-[11px] font-semibold text-teal-900">
              Highlighted preset: 5 mg/2 mL → 25 mcg/unit · 100 mcg = 4 units ·
              200 mcg = 8 units
            </p>
          ) : null}
          <p className="mt-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-[11px] font-semibold text-amber-950">
            Calculation reference only — not a formulation recipe. LL-37 can
            aggregate and adsorb to surfaces. Trial PVA/cream stability ≠
            bacteriostatic water 28-day BUD.
          </p>
        </div>
      ) : null}
    </ModuleShell>
  );
}

export function Ll37ClaimChecker() {
  const [open, setOpen] = useState("sc-low-topical");

  return (
    <ModuleShell
      kicker="Myth / claim checker"
      title="SC-as-topical, higher-is-better, antibiotic substitute, CRAMP transfer, and Herx claims"
    >
      <ul className="divide-y divide-slate-100">
        {LL37_CLAIMS.map((c) => {
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

export function Ll37EvidenceLadder() {
  return (
    <ModuleShell
      kicker="Dosage evidence ladder"
      title="Topical human trials exist — SC dosing is unestablished"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Evidence level</th>
              <th className="px-3 py-2.5 font-semibold">LL-37 evidence</th>
              <th className="px-3 py-2.5 font-semibold">Confidence</th>
            </tr>
          </thead>
          <tbody>
            {LL37_EVIDENCE_LADDER.map((row) => (
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

export function Ll37AdverseEventTable() {
  const [full, setFull] = useState(false);

  return (
    <ModuleShell
      kicker="Safety findings"
      title="Topical trial tolerability, lichenoid toxicity, SC uncertainty, and product-quality risks"
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
            {(full ? LL37_AE_FULL : LL37_AE_SIMPLE).map((row) => (
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
