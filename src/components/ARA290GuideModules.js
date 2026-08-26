"use client";

import { useMemo, useState } from "react";
import {
  ARA290_AE_FULL,
  ARA290_AE_SIMPLE,
  ARA290_CLAIMS,
  ARA290_COMPARE,
  ARA290_DOSARA,
  ARA290_EVIDENCE_LADDER,
  ARA290_IDENTITY,
  ARA290_RECON_PRESETS,
  ARA290_SC_PHASES,
  ara290AmountFromVial,
} from "@/data/ara-290-dosage-guide";

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

export function Ara290IdentityGate() {
  const [id, setId] = useState("unsure");
  const card = ARA290_IDENTITY.find((c) => c.id === id) || ARA290_IDENTITY[3];

  return (
    <ModuleShell
      kicker="Identity gate"
      title="Confirm cibinetide (pGlu-EQLERALNSS) vs unmodified N-term or EPO fragment"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Identity check"
          options={ARA290_IDENTITY.map((c) => ({ id: c.id, label: c.label }))}
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

export function Ara290Dosara() {
  const [doseId, setDoseId] = useState("4mg");
  const row = ARA290_DOSARA.find((d) => d.id === doseId) || ARA290_DOSARA[1];
  const maxCnfa = Math.max(...ARA290_DOSARA.map((d) => d.cnfa));

  return (
    <ModuleShell
      kicker="DOSARA dose-response"
      title="Placebo-corrected CNFA change at day 28 — only 4 mg met endpoint"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Daily dose arm"
          options={ARA290_DOSARA.map((d) => ({
            id: d.id,
            label: d.dose,
          }))}
          value={doseId}
          onChange={setDoseId}
        />
      </div>
      <div className="space-y-3 px-4 py-4">
        {ARA290_DOSARA.map((d) => (
          <div key={d.id}>
            <div className="mb-1 flex justify-between text-[11px]">
              <span className="font-semibold text-slate-700">{d.dose}</span>
              <span
                className={`font-bold ${d.met ? "text-violet-800" : "text-slate-500"}`}
              >
                {d.cnfa} µm² {d.met ? "· met endpoint" : ""}
              </span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-slate-100">
              <div
                className={`h-full rounded-full transition ${
                  d.met ? "bg-violet-600" : "bg-slate-300"
                }`}
                style={{ width: `${(d.cnfa / maxCnfa) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-slate-100 px-4 py-4">
        <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
          Selected arm: {row.dose}
        </p>
        <p className="mt-1 text-2xl font-bold text-violet-800">
          {row.cnfa} µm²
        </p>
        <p className="mt-1 text-[11px] text-slate-600">
          95% CI: {row.ci} · {row.p}
        </p>
        <p className="mt-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-[11px] font-semibold text-amber-950">
          Non-linear dose response — 8 mg did not outperform 4 mg. This does not
          support “higher is better.”
        </p>
      </div>
    </ModuleShell>
  );
}

export function Ara290ProtocolTimeline() {
  const [phaseId, setPhaseId] = useState("exposure");
  const phase =
    ARA290_SC_PHASES.find((p) => p.id === phaseId) || ARA290_SC_PHASES[1];

  return (
    <ModuleShell
      kicker="28-day trial protocol"
      title="4 mg SC once daily × 28 days — NERVARA / diabetes / DOSARA anchor"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Protocol phase"
          options={ARA290_SC_PHASES.map((p) => ({
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
              Days {phase.days}
            </p>
            <p className="mt-1 text-2xl font-bold text-violet-800">
              {phase.amount}
            </p>
            <p className="mt-1 text-[11px] text-slate-600">
              {phase.frequency}
            </p>
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
          {ARA290_SC_PHASES.map((p) => (
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
          Trials did not titrate, split daily dose, or taper. 112 mg total = seven
          16 mg vials mathematically before losses.
        </p>
      </div>
    </ModuleShell>
  );
}

export function Ara290ClinicalVsAnecdotal() {
  const c = ARA290_COMPARE.clinical;
  const a = ARA290_COMPARE.anecdotal;

  return (
    <ModuleShell
      kicker="Evidence split"
      title="Formally studied Phase 2 dosing vs community-reported protocols"
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

export function Ara290ReconCalc() {
  const targetPresets = [
    { id: "1", mg: 1, label: "1 mg" },
    { id: "2", mg: 2, label: "2 mg" },
    { id: "4", mg: 4, label: "4 mg (trial dose)" },
    { id: "8", mg: 8, label: "8 mg" },
  ];
  const [presetId, setPresetId] = useState("16-2");
  const [targetId, setTargetId] = useState("4");
  const [customTarget, setCustomTarget] = useState("");

  const vialPreset =
    ARA290_RECON_PRESETS.find((p) => p.id === presetId) ||
    ARA290_RECON_PRESETS[0];
  const targetMg =
    customTarget !== ""
      ? Number(customTarget)
      : (targetPresets.find((p) => p.id === targetId)?.mg ?? 4);

  const result = useMemo(() => {
    return ara290AmountFromVial(
      vialPreset.vialMg,
      vialPreset.diluentMl,
      targetMg
    );
  }, [vialPreset, targetMg]);

  return (
    <ModuleShell
      kicker="Reconstitution math"
      title="Vial mg + diluent mL + target mg → volume and U-100 units"
    >
      <div className="grid gap-3 border-b border-slate-100 px-4 py-3 sm:grid-cols-2">
        <div>
          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Vial preset
          </p>
          <ChipGroup
            label="Vial preset"
            options={ARA290_RECON_PRESETS.map((p) => ({
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
      <div className="border-b border-slate-100 px-4 py-3">
        <label className="block text-[11px] font-semibold text-slate-700">
          Or enter target amount (mg)
          <input
            type="number"
            min="0"
            step="0.5"
            value={customTarget}
            placeholder={String(
              targetPresets.find((p) => p.id === targetId)?.mg ?? 4
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
            {result.concMgPerMl.toFixed(2)} mg/mL
          </p>
          <p className="mt-1 text-2xl font-bold text-violet-800">
            {result.targetMg} mg = {result.volumeMl.toFixed(3)} mL ={" "}
            {result.units.toFixed(1)} U-100 units
          </p>
          {result.volumeMl > 1 ? (
            <p className="mt-3 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-[11px] font-semibold text-red-950">
              Draw volume exceeds 1 mL — cannot be measured in a standard U-100
              syringe. Choose a higher concentration or lower target.
            </p>
          ) : null}
          <p className="mt-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-[11px] font-semibold text-amber-950">
            Clinical studies used manufactured sterile solutions — not retail
            lyophilized reconstitution. Documents concentration math only.
          </p>
        </div>
      ) : null}
    </ModuleShell>
  );
}

export function Ara290ClaimChecker() {
  const [open, setOpen] = useState("higher-better");

  return (
    <ModuleShell
      kicker="Myth / claim checker"
      title="Higher-is-better, titration, EPO-like RBC effects, stacking, and intermittent SC"
    >
      <ul className="divide-y divide-slate-100">
        {ARA290_CLAIMS.map((c) => {
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

export function Ara290EvidenceLadder() {
  return (
    <ModuleShell
      kicker="Dosage evidence ladder"
      title="Better documented than many peptides — not clinically established"
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
            {ARA290_EVIDENCE_LADDER.map((row) => (
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

export function Ara290AdverseEventTable() {
  const [full, setFull] = useState(false);

  return (
    <ModuleShell
      kicker="Safety findings"
      title="Encouraging but incomplete — small DB, product risks remain"
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
            {(full ? ARA290_AE_FULL : ARA290_AE_SIMPLE).map((row) => (
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
