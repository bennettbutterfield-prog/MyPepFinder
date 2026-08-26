"use client";

import { useMemo, useState } from "react";
import {
  AHK_CU_AE_FULL,
  AHK_CU_AE_SIMPLE,
  AHK_CU_CLAIMS,
  AHK_CU_COMPARE,
  AHK_CU_EVIDENCE_LADDER,
  AHK_CU_HUMAN_STATUS,
  AHK_CU_IDENTITY,
  AHK_CU_MOLAR_PRESETS,
  AHK_CU_PROTOCOL_PHASES,
  AHK_CU_TOPICAL_PRESETS,
  ahkCuMolarToNgPerMl,
  ahkCuTopicalDose,
} from "@/data/ahk-cu-dosage-guide";

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

function molarZone(molar) {
  if (molar >= 1e-12 && molar <= 1e-9) {
    return {
      label: "Stimulatory range (Pyo 2007)",
      tone: "text-teal-800 bg-teal-50 border-teal-200",
    };
  }
  if (molar >= 1e-8 && molar <= 1e-7) {
    return {
      label: "Inhibitory range — elongation reduced",
      tone: "text-amber-950 bg-amber-50 border-amber-200",
    };
  }
  return {
    label: "Outside tested stimulatory/inhibitory bands",
    tone: "text-slate-700 bg-slate-50 border-slate-200",
  };
}

export function AhkCuIdentityGate() {
  const [id, setId] = useState("ahk-cu-correct");
  const card = AHK_CU_IDENTITY.find((c) => c.id === id) || AHK_CU_IDENTITY[0];

  return (
    <ModuleShell
      kicker="Identity gate"
      title="Confirm Ala-His-Lys · Copper Tripeptide-3 — not GHK-Cu, ALAVAX, or blends"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Identity check"
          options={AHK_CU_IDENTITY.map((c) => ({
            id: c.id,
            label: c.label,
          }))}
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

export function AhkCuHumanStatus() {
  return (
    <ModuleShell
      kicker="Human evidence status"
      title="Ex-vivo follicles only — no living participant AHK-Cu dose located"
    >
      <dl className="divide-y divide-slate-100">
        {AHK_CU_HUMAN_STATUS.map(([q, a]) => (
          <div
            key={q}
            className="flex items-start justify-between gap-4 px-4 py-2.5"
          >
            <dt className="text-xs text-slate-500">{q}</dt>
            <dd className="max-w-[58%] text-right text-xs font-bold text-teal-800">
              {a}
            </dd>
          </div>
        ))}
      </dl>
    </ModuleShell>
  );
}

export function AhkCuClinicalVsAnecdotal() {
  const { clinical, anecdotal } = AHK_CU_COMPARE;

  return (
    <ModuleShell
      kicker="Evidence split"
      title="Direct AHK-Cu research vs commercial / online conventions"
    >
      <div className="grid gap-0 md:grid-cols-2">
        <div className="border-b border-slate-100 md:border-b-0 md:border-r">
          <div className="border-b border-slate-100 bg-teal-50/60 px-4 py-2.5">
            <p className="text-xs font-bold text-teal-900">{clinical.title}</p>
            <p className="text-[10px] text-teal-700">{clinical.status}</p>
          </div>
          <dl className="divide-y divide-slate-100">
            {clinical.rows.map(([k, v]) => (
              <div key={k} className="px-4 py-2.5">
                <dt className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
                  {k}
                </dt>
                <dd className="mt-0.5 text-xs text-slate-700">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div>
          <div className="border-b border-slate-100 bg-amber-50/60 px-4 py-2.5">
            <p className="text-xs font-bold text-amber-950">{anecdotal.title}</p>
            <p className="text-[10px] text-amber-800">{anecdotal.status}</p>
          </div>
          <dl className="divide-y divide-slate-100">
            {anecdotal.rows.map(([k, v]) => (
              <div key={k} className="px-4 py-2.5">
                <dt className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
                  {k}
                </dt>
                <dd className="mt-0.5 text-xs text-slate-700">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </ModuleShell>
  );
}

export function AhkCuMolarCalc() {
  const [presetId, setPresetId] = useState("1e-9");
  const preset =
    AHK_CU_MOLAR_PRESETS.find((p) => p.id === presetId) ||
    AHK_CU_MOLAR_PRESETS[1];
  const result = useMemo(
    () => ahkCuMolarToNgPerMl(preset.molar),
    [preset.molar]
  );
  const zone = molarZone(preset.molar);

  return (
    <ModuleShell
      kicker="Culture concentration"
      title="Pyo 2007 molarity → mass concentration (415.93 g/mol)"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Molar presets"
          options={AHK_CU_MOLAR_PRESETS.map((p) => ({
            id: p.id,
            label: p.label,
          }))}
          value={presetId}
          onChange={setPresetId}
        />
        <p className="mt-2 text-[11px] text-slate-600">{preset.note}</p>
      </div>
      {result ? (
        <div className="px-4 py-4">
          <p
            className={`inline-block rounded-full border px-2.5 py-0.5 text-[11px] font-bold ${zone.tone}`}
          >
            {zone.label}
          </p>
          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
                ng/mL
              </p>
              <p className="mt-1 text-lg font-bold text-teal-800">
                {result.ngPerMl < 0.001
                  ? result.ngPerMl.toExponential(2)
                  : result.ngPerMl.toFixed(4)}
              </p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
                pg/mL
              </p>
              <p className="mt-1 text-lg font-bold text-teal-800">
                {result.pgPerMl < 1
                  ? result.pgPerMl.toExponential(2)
                  : result.pgPerMl.toFixed(2)}
              </p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
                Molarity
              </p>
              <p className="mt-1 text-lg font-bold text-teal-800">
                {preset.label}
              </p>
            </div>
          </div>
          <p className="mt-3 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-[11px] text-slate-600">
            Culture molarity does not translate to topical % without measured
            scalp penetration. A 0.1% product is millions of times more
            concentrated in the bottle than 10⁻⁹ M.
          </p>
        </div>
      ) : null}
    </ModuleShell>
  );
}

export function AhkCuTopicalCalc() {
  const [presetId, setPresetId] = useState("0.10");
  const [volume, setVolume] = useState("1");
  const preset =
    AHK_CU_TOPICAL_PRESETS.find((p) => p.id === presetId) ||
    AHK_CU_TOPICAL_PRESETS[2];
  const result = useMemo(
    () =>
      ahkCuTopicalDose({
        percentWv: preset.percentWv,
        volumeMl: Number(volume),
      }),
    [preset.percentWv, volume]
  );

  return (
    <ModuleShell
      kicker="Topical math"
      title="Concentration × volume → applied complex mass and nominal copper"
    >
      <div className="space-y-3 border-b border-slate-100 px-4 py-3">
        <div>
          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Concentration (% w/v)
          </p>
          <ChipGroup
            label="Concentration"
            options={AHK_CU_TOPICAL_PRESETS.map((p) => ({
              id: p.id,
              label: p.label,
            }))}
            value={presetId}
            onChange={setPresetId}
          />
        </div>
        <div>
          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Application volume (mL)
          </p>
          <ChipGroup
            label="Volume"
            options={[
              { id: "0.5", label: "0.5 mL" },
              { id: "1", label: "1 mL" },
              { id: "2", label: "2 mL" },
            ]}
            value={volume}
            onChange={setVolume}
          />
        </div>
      </div>
      {result ? (
        <div className="px-4 py-4">
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
                mg/mL
              </p>
              <p className="mt-1 text-xl font-bold text-teal-800">
                {result.mgPerMl.toFixed(2)} mg/mL
              </p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
                Applied complex mass
              </p>
              <p className="mt-1 text-xl font-bold text-teal-800">
                {result.appliedMg.toFixed(3)} mg
              </p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
                Nominal copper (1:1 complex)
              </p>
              <p className="mt-1 text-lg font-bold text-teal-800">
                {result.copperMcg.toFixed(1)} µg Cu
              </p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
                Bottle molarity (approx.)
              </p>
              <p className="mt-1 text-lg font-bold text-teal-800">
                {result.molarityApprox >= 1000
                  ? `${(result.molarityApprox / 1000).toFixed(2)} mM`
                  : `${result.molarityApprox.toFixed(1)} µM`}
              </p>
            </div>
          </div>
          <p className="mt-3 text-[11px] text-slate-600">
            Formula: mg/mL = 10 × % w/v. Applied mass = mg/mL × volume. Percent
            label alone does not specify daily dose without treated area and
            number of applications.
          </p>
        </div>
      ) : null}
    </ModuleShell>
  );
}

export function AhkCuProtocolTimeline() {
  return (
    <ModuleShell
      kicker="Proposed protocol"
      title="AHK-CU-SCALP-01 — staged topical dose-ranging (investigator-run)"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Phase</th>
              <th className="px-3 py-2.5 font-semibold">Duration</th>
              <th className="px-3 py-2.5 font-semibold">Exposure</th>
              <th className="px-3 py-2.5 font-semibold">Purpose</th>
            </tr>
          </thead>
          <tbody>
            {AHK_CU_PROTOCOL_PHASES.map((row) => (
              <tr key={row.id} className="border-t border-slate-50 align-top">
                <td className="px-3 py-2.5 font-semibold text-slate-800">
                  {row.phase}
                </td>
                <td className="px-3 py-2.5 text-slate-600">{row.days}</td>
                <td className="px-3 py-2.5 text-slate-600">{row.exposure}</td>
                <td className="px-3 py-2.5 text-slate-600">{row.purpose}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="border-t border-slate-100 px-4 py-3 text-[11px] text-slate-600">
        Requires identity, Franz penetration, dermal tox, exposure margin, and
        validated bioanalysis before enrollment. Microneedling, tattooing, and
        injection are excluded from the proposed design.
      </p>
    </ModuleShell>
  );
}

export function AhkCuClaimChecker() {
  const [open, setOpen] = useState(AHK_CU_CLAIMS[0].id);
  const card = AHK_CU_CLAIMS.find((c) => c.id === open) || AHK_CU_CLAIMS[0];

  return (
    <ModuleShell
      kicker="Claim checker"
      title="Common AHK-Cu claims vs the evidence record"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Claims"
          options={AHK_CU_CLAIMS.map((c) => ({
            id: c.id,
            label: c.claim.length > 42 ? `${c.claim.slice(0, 40)}…` : c.claim,
          }))}
          value={open}
          onChange={setOpen}
        />
      </div>
      <div className="px-4 py-4">
        <p className="text-sm font-bold text-slate-900">{card.claim}</p>
        <p className="mt-2 inline-block rounded-full bg-teal-50 px-2.5 py-0.5 text-[11px] font-bold text-teal-800">
          {card.verdict}
        </p>
        <p className="mt-2 text-[11px] leading-relaxed text-slate-600">
          {card.detail}
        </p>
      </div>
    </ModuleShell>
  );
}

export function AhkCuEvidenceLadder() {
  return (
    <ModuleShell
      kicker="Dosage evidence ladder"
      title="Ex-vivo signal exists — clinical scalp dose does not"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Level</th>
              <th className="px-3 py-2.5 font-semibold">What exists</th>
              <th className="px-3 py-2.5 font-semibold">Confidence</th>
            </tr>
          </thead>
          <tbody>
            {AHK_CU_EVIDENCE_LADDER.map((row) => (
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

export function AhkCuAdverseEventTable() {
  const [mode, setMode] = useState("simple");

  return (
    <ModuleShell
      kicker="Safety monitoring"
      title="Biphasic lab signal · topical copper unknowns · no injectable safety program"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Detail level"
          options={[
            { id: "simple", label: "Summary" },
            { id: "full", label: "Monitoring domains" },
          ]}
          value={mode}
          onChange={setMode}
        />
      </div>
      {mode === "simple" ? (
        <dl className="divide-y divide-slate-100">
          {AHK_CU_AE_SIMPLE.map((row) => (
            <div key={row.category} className="px-4 py-3">
              <dt className="text-xs font-bold text-slate-800">
                {row.category}
              </dt>
              <dd className="mt-1 text-[11px] text-slate-600">{row.note}</dd>
            </div>
          ))}
        </dl>
      ) : (
        <dl className="divide-y divide-slate-100">
          {AHK_CU_AE_FULL.map((row) => (
            <div key={row.domain} className="px-4 py-3">
              <dt className="text-xs font-bold text-slate-800">{row.domain}</dt>
              <dd className="mt-1 text-[11px] text-slate-600">{row.items}</dd>
            </div>
          ))}
        </dl>
      )}
    </ModuleShell>
  );
}
