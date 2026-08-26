"use client";

import { useMemo, useState } from "react";
import {
  TA1_AE_FULL,
  TA1_AE_SIMPLE,
  TA1_CLAIMS,
  TA1_COMPARE,
  TA1_EVIDENCE_LADDER,
  TA1_HUMAN_STATUS,
  TA1_HUMAN_TRIALS,
  TA1_IDENTITY,
  TA1_PROTOCOL_PHASES,
  TA1_RECON_PRESETS,
  TA1_SOLUBILITY_FREE_BASE,
  TA1_WEEKLY_COMPARE,
  ta1AmountFromVial,
  ta1WeightBasedDose,
} from "@/data/thymosin-alpha-1-dosage-guide";

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

export function Ta1IdentityGate() {
  const [id, setId] = useState("unsure");
  const card = TA1_IDENTITY.find((c) => c.id === id) || TA1_IDENTITY[6];

  return (
    <ModuleShell
      kicker="Identity gate"
      title="Confirm Tα1 / thymalfasin vs TB-500, Tβ4, fraction 5, thymulin, or unsure"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Identity check"
          options={TA1_IDENTITY.map((c) => ({ id: c.id, label: c.label }))}
          value={id}
          onChange={setId}
        />
      </div>
      <div className="px-4 py-4">
        <p className="text-sm font-bold text-slate-900">{card.verdict}</p>
        <p className="mt-2 text-[11px] leading-relaxed text-slate-600">
          {card.detail}
        </p>
        {id === "tb500" || id === "tbeta4" ? (
          <p className="mt-3 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-[11px] font-semibold text-red-950">
            TB-500 and thymosin beta-4 are different molecules with different
            sequences, doses, and evidence. Do not apply Tα1 1.6 mg BIW protocols
            to thymosin-beta-4-related products.
          </p>
        ) : null}
      </div>
    </ModuleShell>
  );
}

export function Ta1HumanStatus() {
  const [trialId, setTrialId] = useState("hbv-chien");
  const trial =
    TA1_HUMAN_TRIALS.find((t) => t.id === trialId) || TA1_HUMAN_TRIALS[1];

  return (
    <ModuleShell
      kicker="Human trial evidence"
      title="1.6 mg SC twice weekly core — HBV, sepsis, vaccine, oncology, and PK trials"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Trial selector"
          options={TA1_HUMAN_TRIALS.map((t) => ({
            id: t.id,
            label: t.study.replace(" et al.,", "").replace(" Phase III", " PhIII"),
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
            {TA1_HUMAN_STATUS.map(([question, finding]) => (
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

export function Ta1WeeklyExposure() {
  const [scheduleId, setScheduleId] = useState("clinical-biw");
  const schedule =
    TA1_WEEKLY_COMPARE.find((s) => s.id === scheduleId) ||
    TA1_WEEKLY_COMPARE[0];
  const maxWeekly = Math.max(...TA1_WEEKLY_COMPARE.map((s) => s.weeklyMg));

  return (
    <ModuleShell
      kicker="Weekly exposure compare"
      title="Clinical 3.2 mg/wk vs community schedules — frequency dominates total exposure"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Schedule"
          options={TA1_WEEKLY_COMPARE.map((s) => ({
            id: s.id,
            label: s.label,
          }))}
          value={scheduleId}
          onChange={setScheduleId}
        />
      </div>
      <div className="px-4 py-4">
        <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
          {schedule.frequency} · {schedule.perDoseMg} mg per dose
        </p>
        <p className="mt-1 text-2xl font-bold text-teal-800">
          {schedule.weeklyMg} mg / week
        </p>
        <p className="mt-1 text-[11px] text-slate-600">
          {schedule.ratioToClinical === 1
            ? "Reference clinical core (1.6 mg BIW)"
            : `${schedule.ratioToClinical.toFixed(2)}× the 3.2 mg/wk clinical core`}
        </p>
        <p className="mt-2 text-[11px] font-semibold text-slate-700">
          {schedule.evidence}
        </p>
        <div className="mt-4 space-y-2">
          {TA1_WEEKLY_COMPARE.map((s) => (
            <div key={s.id} className="flex items-center gap-2">
              <span className="w-28 shrink-0 truncate text-[10px] text-slate-500">
                {s.label.split("(")[0].trim()}
              </span>
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
                <div
                  className={`h-full rounded-full ${
                    s.id === scheduleId ? "bg-teal-600" : "bg-teal-300"
                  }`}
                  style={{ width: `${(s.weeklyMg / maxWeekly) * 100}%` }}
                />
              </div>
              <span className="w-14 shrink-0 text-right text-[10px] font-semibold text-slate-700">
                {s.weeklyMg} mg
              </span>
            </div>
          ))}
        </div>
      </div>
    </ModuleShell>
  );
}

export function Ta1ProtocolTimeline() {
  const [phaseId, setPhaseId] = useState("exposure");
  const phase =
    TA1_PROTOCOL_PHASES.find((p) => p.id === phaseId) ||
    TA1_PROTOCOL_PHASES[1];

  return (
    <ModuleShell
      kicker="12-week research protocol"
      title="1.6 mg SC BIW × 8 weeks (16 doses = 25.6 mg) + 4-week washout"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Protocol phase"
          options={TA1_PROTOCOL_PHASES.map((p) => ({
            id: p.id,
            label: p.phase.replace("Fixed exposure — ", ""),
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
          {TA1_PROTOCOL_PHASES.map((p) => (
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
          Fixed dose — no loading, titration, taper, stacking, or automatic repeat
          cycle. Best-documented per-dose amount and frequency with shorter
          community-anchored duration.
        </p>
      </div>
    </ModuleShell>
  );
}

export function Ta1ClinicalVsAnecdotal() {
  const c = TA1_COMPARE.clinical;
  const a = TA1_COMPARE.anecdotal;

  return (
    <ModuleShell
      kicker="Evidence split"
      title="Human clinical core (1.6 mg BIW) vs community-reported schedules"
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

export function Ta1ReconCalc() {
  const targetPresets = [
    { id: "0.8", mg: 0.8, label: "0.8 mg (under-40 kg ref)" },
    { id: "1.0", mg: 1.0, label: "1.0 mg" },
    { id: "1.6", mg: 1.6, label: "1.6 mg (clinical core)" },
    { id: "2.0", mg: 2.0, label: "2.0 mg" },
  ];
  const validPresets = TA1_RECON_PRESETS.filter((p) => !p.blocked);
  const [presetId, setPresetId] = useState("5-2");
  const [targetId, setTargetId] = useState("1.6");
  const [customTarget, setCustomTarget] = useState("");
  const [weightKg, setWeightKg] = useState("");

  const vialPreset =
    TA1_RECON_PRESETS.find((p) => p.id === presetId) || validPresets[1];
  const weightResult = weightKg !== "" ? ta1WeightBasedDose(Number(weightKg)) : null;

  const targetMg =
    customTarget !== ""
      ? Number(customTarget)
      : (targetPresets.find((p) => p.id === targetId)?.mg ?? 1.6);

  const result = useMemo(() => {
    if (vialPreset.blocked) return null;
    return ta1AmountFromVial(
      vialPreset.vialMg,
      vialPreset.diluentMl,
      targetMg
    );
  }, [vialPreset, targetMg]);

  const exceedsSolubility =
    result && result.concMgPerMl > TA1_SOLUBILITY_FREE_BASE;

  return (
    <ModuleShell
      kicker="Reconstitution math"
      title="1.6 mg/1 mL · 5 mg/2 mL · 5 mg/2.5 mL · 10 mg/5 mL — warn/block 10 mg/2 mL"
    >
      <div className="grid gap-3 border-b border-slate-100 px-4 py-3 sm:grid-cols-2">
        <div>
          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Vial preset
          </p>
          <ChipGroup
            label="Vial preset"
            options={TA1_RECON_PRESETS.map((p) => ({
              id: p.id,
              label: p.blocked ? `${p.label} ⛔` : p.label,
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
            label="Target mg"
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
          Or enter target amount (mg)
          <input
            type="number"
            min="0"
            step="0.1"
            value={customTarget}
            placeholder={String(
              targetPresets.find((p) => p.id === targetId)?.mg ?? 1.6
            )}
            onChange={(e) => setCustomTarget(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-900"
          />
        </label>
        <label className="block text-[11px] font-semibold text-slate-700">
          Weight helper (under-40-kg rule only)
          <input
            type="number"
            min="1"
            step="1"
            value={weightKg}
            placeholder="e.g. 35"
            onChange={(e) => setWeightKg(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-900"
          />
        </label>
      </div>
      {weightResult ? (
        <div className="border-b border-slate-100 px-4 py-3">
          <p className="text-[11px] font-semibold text-teal-800">
            {weightKg} kg → {weightResult.doseMg} mg ({weightResult.rule})
          </p>
          <p className="mt-1 text-[11px] text-amber-950">{weightResult.warning}</p>
        </div>
      ) : null}
      {vialPreset.blocked ? (
        <div className="px-4 py-4">
          <p className="rounded-lg border border-red-300 bg-red-50 px-3 py-3 text-[11px] font-semibold text-red-950">
            ⛔ {vialPreset.label} — blocked preset. Nominal 5 mg/mL exceeds
            published free-base solubility (~{TA1_SOLUBILITY_FREE_BASE} mg/mL) and
            highest clinical concentration FDA identified. {vialPreset.note}
          </p>
        </div>
      ) : result ? (
        <div className="px-4 py-4">
          <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
            {vialPreset.label} · concentration ≈{" "}
            {result.concMgPerMl.toFixed(2)} mg/mL · ≈{" "}
            {result.mcgPerUnit.toFixed(0)} mcg per U-100 unit
          </p>
          <p className="mt-1 text-2xl font-bold text-teal-800">
            {result.targetMg} mg = {result.volumeMl.toFixed(3)} mL ={" "}
            {result.units.toFixed(1)} U-100 units
          </p>
          {presetId === "5-2" && targetId === "1.6" ? (
            <p className="mt-2 text-[11px] font-semibold text-teal-900">
              Common online calc: 5 mg/2 mL → 1.6 mg = 64 U — arithmetic only;
              concentration-specific validation still required.
            </p>
          ) : null}
          {exceedsSolubility ? (
            <p className="mt-3 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-[11px] font-semibold text-red-950">
              Nominal concentration ({result.concMgPerMl.toFixed(2)} mg/mL)
              exceeds FDA-cited free-base solubility (~{TA1_SOLUBILITY_FREE_BASE}{" "}
              mg/mL). A clear solution does not exclude aggregates or potency
              loss.
            </p>
          ) : null}
          {vialPreset.validated === false ? (
            <p className="mt-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-[11px] font-semibold text-amber-950">
              {vialPreset.note}
            </p>
          ) : null}
          <p className="mt-3 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-[11px] text-slate-600">
            Calculation reference only — not a formulation recipe. Traditional
            Zadaxin uses 1.6 mg/mL and immediate use after reconstitution.
          </p>
        </div>
      ) : null}
    </ModuleShell>
  );
}

export function Ta1ClaimChecker() {
  const [open, setOpen] = useState("daily-half-life");

  return (
    <ModuleShell
      kicker="Myth / claim checker"
      title="Daily-because-half-life, 5-on/2-off equivalence, sepsis-for-colds, TB-500 interchange, 10 mg/2 mL"
    >
      <ul className="divide-y divide-slate-100">
        {TA1_CLAIMS.map((c) => {
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

export function Ta1EvidenceLadder() {
  return (
    <ModuleShell
      kicker="Dosage evidence ladder"
      title="1.6 mg SC BIW well established as human exposure — wellness use poorly established"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Dosage information</th>
              <th className="px-3 py-2.5 font-semibold">Evidence</th>
              <th className="px-3 py-2.5 font-semibold">Assessment</th>
            </tr>
          </thead>
          <tbody>
            {TA1_EVIDENCE_LADDER.map((row) => (
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

export function Ta1AdverseEventTable() {
  const [full, setFull] = useState(false);

  return (
    <ModuleShell
      kicker="Safety findings"
      title="Injection-site reactions, ALT flares, immunogenicity, and condition-specific risks"
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
            {(full ? TA1_AE_FULL : TA1_AE_SIMPLE).map((row) => (
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
