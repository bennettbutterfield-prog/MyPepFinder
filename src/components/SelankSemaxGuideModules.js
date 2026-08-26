"use client";

import { useMemo, useState } from "react";
import {
  SELANK_SEMAX_ANECDOTAL,
  SELANK_SEMAX_AE_FULL,
  SELANK_SEMAX_AE_SIMPLE,
  SELANK_SEMAX_CLAIMS,
  SELANK_SEMAX_COMBO_STATUS,
  SELANK_SEMAX_COMPARE,
  SELANK_SEMAX_CUMULATIVE_PRESETS,
  SELANK_SEMAX_DUAL_COMPARE,
  SELANK_SEMAX_EVIDENCE_LADDER,
  SELANK_SEMAX_FMRI_STUDY,
  SELANK_SEMAX_IDENTITY,
  SELANK_SEMAX_PARENT_ANCHORS,
  SELANK_SEMAX_PART_A,
  SELANK_SEMAX_PART_B,
  SELANK_SEMAX_PRECLINICAL,
  selankSemaxCumulative,
  selankSemaxEquimolarSemaxMcg,
  selankSemaxMoles,
} from "@/data/selank-semax-dosage-guide";

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
                ? "bg-indigo-600 text-white"
                : "border border-slate-200 bg-white text-slate-600 hover:bg-indigo-50 hover:text-indigo-700"
            }`}
          >
            {text}
          </button>
        );
      })}
    </div>
  );
}

export function SelankSemaxIdentityGate() {
  const [id, setId] = useState("fixed-blend");
  const card =
    SELANK_SEMAX_IDENTITY.find((c) => c.id === id) || SELANK_SEMAX_IDENTITY[0];

  return (
    <ModuleShell
      kicker="Identity gate"
      title="Fixed blend vs separate bottles vs vial label vs ambiguous “blend dose”"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Formulation type"
          options={SELANK_SEMAX_IDENTITY.map((c) => ({
            id: c.id,
            label:
              c.id === "fixed-blend"
                ? "Fixed 1:1 blend"
                : c.id === "separate"
                  ? "Separate products"
                  : c.id === "vial-label"
                    ? "5+5 mg vial"
                    : "Ambiguous blend",
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

export function SelankSemaxDualCompare() {
  return (
    <ModuleShell
      kicker="Dual peptide comparison"
      title="TKPRPGP vs MEHFPGP — shared PGP motif, different parent anchors"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Property</th>
              <th className="px-3 py-2.5 font-semibold">Selank</th>
              <th className="px-3 py-2.5 font-semibold">Semax</th>
            </tr>
          </thead>
          <tbody>
            {SELANK_SEMAX_DUAL_COMPARE.map((row) => (
              <tr key={row.property} className="border-t border-slate-50">
                <td className="px-3 py-2 font-medium text-slate-800">
                  {row.property}
                </td>
                <td className="px-3 py-2 text-indigo-800">{row.selank}</td>
                <td className="px-3 py-2 text-violet-800">{row.semax}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ModuleShell>
  );
}

export function SelankSemaxEquimolarCalc() {
  const [selankMcg, setSelankMcg] = useState("300");
  const [semaxMcg, setSemaxMcg] = useState("300");

  const result = useMemo(
    () => selankSemaxMoles({ selankMcg, semaxMcg }),
    [selankMcg, semaxMcg]
  );
  const equimolarSemax = useMemo(
    () => selankSemaxEquimolarSemaxMcg(selankMcg),
    [selankMcg]
  );

  return (
    <ModuleShell
      kicker="Mass vs moles"
      title="1:1 mass ≠ equimolar — 813.9/751.9 ≈ 1.08:1 at equal mcg"
    >
      <div className="grid gap-3 border-b border-slate-100 px-4 py-3 sm:grid-cols-2">
        <div>
          <label
            htmlFor="ss-selank-mcg"
            className="mb-1 block text-[10px] font-bold uppercase text-slate-500"
          >
            Selank (mcg)
          </label>
          <input
            id="ss-selank-mcg"
            type="number"
            min="1"
            value={selankMcg}
            onChange={(e) => setSelankMcg(e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="ss-semax-mcg"
            className="mb-1 block text-[10px] font-bold uppercase text-slate-500"
          >
            Semax (mcg)
          </label>
          <input
            id="ss-semax-mcg"
            type="number"
            min="1"
            value={semaxMcg}
            onChange={(e) => setSemaxMcg(e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
          />
        </div>
      </div>
      {result ? (
        <div className="grid gap-3 px-4 py-4 sm:grid-cols-3">
          <div>
            <p className="text-[10px] font-bold uppercase text-slate-500">
              Selank
            </p>
            <p className="text-xl font-bold text-indigo-800">
              {result.selankMicromol.toFixed(3)} µmol
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase text-slate-500">
              Semax
            </p>
            <p className="text-xl font-bold text-violet-800">
              {result.semaxMicromol.toFixed(3)} µmol
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase text-slate-500">
              Molar ratio (S:X)
            </p>
            <p className="text-xl font-bold text-slate-800">
              {result.molarRatio.toFixed(2)}:1
            </p>
          </div>
        </div>
      ) : null}
      {equimolarSemax != null ? (
        <p className="border-t border-slate-100 px-4 py-3 text-[11px] text-slate-600">
          Equimolar Semax mass for {selankMcg} mcg Selank:{" "}
          <strong>{equimolarSemax.toFixed(1)} mcg</strong> (~8.2% more than
          equal mass).
        </p>
      ) : null}
    </ModuleShell>
  );
}

export function SelankSemaxComboStatus() {
  return (
    <ModuleShell
      kicker="Combination evidence"
      title="No human coadministration trial · fMRI used separate groups"
    >
      <dl className="divide-y divide-slate-100">
        {SELANK_SEMAX_COMBO_STATUS.map(([q, a]) => (
          <div
            key={q}
            className="flex items-start justify-between gap-4 px-4 py-2.5"
          >
            <dt className="text-xs text-slate-500">{q}</dt>
            <dd className="max-w-[58%] text-right text-xs font-bold text-indigo-800">
              {a}
            </dd>
          </div>
        ))}
      </dl>
    </ModuleShell>
  );
}

export function SelankSemaxFmriStudy() {
  return (
    <ModuleShell
      kicker="Panikratova 2020"
      title="Separate Semax / Selank / placebo groups — single IN dose each"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[480px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Group</th>
              <th className="px-3 py-2.5 font-semibold">n</th>
              <th className="px-3 py-2.5 font-semibold">Exposure</th>
              <th className="px-3 py-2.5 font-semibold">Note</th>
            </tr>
          </thead>
          <tbody>
            {SELANK_SEMAX_FMRI_STUDY.map((row) => (
              <tr key={row.group} className="border-t border-slate-50">
                <td className="px-3 py-2 font-semibold text-slate-800">
                  {row.group}
                </td>
                <td className="px-3 py-2 text-slate-600">{row.n}</td>
                <td className="px-3 py-2 text-indigo-800">{row.dose}</td>
                <td className="px-3 py-2 text-amber-800">{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ModuleShell>
  );
}

export function SelankSemaxParentAnchors() {
  const [tab, setTab] = useState("selank");
  const rows =
    tab === "selank"
      ? SELANK_SEMAX_PARENT_ANCHORS.selank
      : SELANK_SEMAX_PARENT_ANCHORS.semax;

  return (
    <ModuleShell
      kicker="Parent-product anchors"
      title="Separate Russian schedules — not combination validation"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Peptide"
          options={[
            { id: "selank", label: "Selank alone" },
            { id: "semax", label: "Semax alone" },
          ]}
          value={tab}
          onChange={setTab}
        />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Source</th>
              <th className="px-3 py-2.5 font-semibold">Regimen</th>
              <th className="px-3 py-2.5 font-semibold">Daily / note</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([src, reg, note]) => (
              <tr key={src} className="border-t border-slate-50">
                <td className="px-3 py-2 font-medium text-slate-800">{src}</td>
                <td className="px-3 py-2 text-slate-600">{reg}</td>
                <td className="px-3 py-2 font-semibold text-indigo-800">
                  {note}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ModuleShell>
  );
}

export function SelankSemaxEvidenceHierarchy() {
  return (
    <ModuleShell
      kicker="Evidence hierarchy"
      title="Parent labels moderate · combination inference very low"
    >
      <dl className="divide-y divide-slate-100 px-4 py-2">
        {[
          ["Authorized combo label", "None"],
          ["Human combination trial", "None located"],
          ["Comparative fMRI", "Separate groups only"],
          ["Parent products", "Selank ~900 mcg/day · Semax 400–900 mcg/day"],
          ["Commercial 1:1 blends", "Convention only"],
        ].map(([k, v]) => (
          <div key={k} className="flex justify-between gap-4 py-2">
            <dt className="text-xs text-slate-500">{k}</dt>
            <dd className="text-right text-xs font-semibold text-slate-800">
              {v}
            </dd>
          </div>
        ))}
      </dl>
    </ModuleShell>
  );
}

export function SelankSemaxAnecdotalProtocols() {
  const [open, setOpen] = useState("proposed");
  const row =
    SELANK_SEMAX_ANECDOTAL.find((p) => p.id === open) ||
    SELANK_SEMAX_ANECDOTAL[5];

  return (
    <ModuleShell
      kicker="Reported conventions"
      title="50–500 mcg each · 1:1 mass common · definitions vary"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Protocol types"
          options={SELANK_SEMAX_ANECDOTAL.map((p) => ({
            id: p.id,
            label: p.label,
          }))}
          value={open}
          onChange={setOpen}
        />
      </div>
      <dl className="divide-y divide-slate-100 px-4 py-2">
        {[
          ["Selank", row.selank],
          ["Semax", row.semax],
          ["Frequency", row.frequency],
          ["Route", row.route],
          ["Duration", row.duration],
          ["Evidence", row.basis],
        ].map(([k, v]) => (
          <div key={k} className="flex justify-between gap-4 py-2">
            <dt className="text-xs text-slate-500">{k}</dt>
            <dd className="text-right text-xs font-semibold text-slate-800">
              {v}
            </dd>
          </div>
        ))}
      </dl>
    </ModuleShell>
  );
}

export function SelankSemaxCumulativeCalc() {
  const [presetId, setPresetId] = useState("factorial");
  const preset =
    SELANK_SEMAX_CUMULATIVE_PRESETS.find((p) => p.id === presetId) ||
    SELANK_SEMAX_CUMULATIVE_PRESETS[2];
  const result = useMemo(
    () =>
      selankSemaxCumulative({
        selankMcg: preset.selank,
        semaxMcg: preset.semax,
        dosesPerDay: preset.freq,
        days: preset.days,
      }),
    [preset]
  );

  return (
    <ModuleShell
      kicker="Cumulative exposure"
      title="14-day Selank + Semax totals per peptide and combined"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Schedule presets"
          options={SELANK_SEMAX_CUMULATIVE_PRESETS.map((p) => ({
            id: p.id,
            label: p.label,
          }))}
          value={presetId}
          onChange={setPresetId}
        />
      </div>
      {result ? (
        <div className="grid gap-3 px-4 py-4 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-[10px] font-bold uppercase text-slate-500">
              Selank/day
            </p>
            <p className="text-lg font-bold text-indigo-800">
              {result.dailySelank} mcg
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase text-slate-500">
              Semax/day
            </p>
            <p className="text-lg font-bold text-violet-800">
              {result.dailySemax} mcg
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase text-slate-500">
              14-day Selank
            </p>
            <p className="text-lg font-bold text-indigo-800">
              {result.totalSelankMg.toFixed(2)} mg
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase text-slate-500">
              14-day Semax
            </p>
            <p className="text-lg font-bold text-violet-800">
              {result.totalSemaxMg.toFixed(2)} mg
            </p>
          </div>
        </div>
      ) : null}
    </ModuleShell>
  );
}

export function SelankSemaxClinicalVsAnecdotal() {
  const { clinical, anecdotal } = SELANK_SEMAX_COMPARE;

  return (
    <ModuleShell
      kicker="Evidence split"
      title="Parent IN anchors vs commercial 1:1 blend conventions"
    >
      <div className="grid gap-0 md:grid-cols-2">
        <div className="border-b border-slate-100 md:border-b-0 md:border-r">
          <div className="border-b border-slate-100 bg-indigo-50/60 px-4 py-2.5">
            <p className="text-xs font-bold text-indigo-900">{clinical.title}</p>
            <p className="text-[10px] text-indigo-700">{clinical.status}</p>
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

export function SelankSemaxPreclinicalDoses() {
  return (
    <ModuleShell
      kicker="Preclinical — parallel arms"
      title="300 mcg/kg Selank · 50–100 mcg/kg Semax — not combination doses"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Peptide</th>
              <th className="px-3 py-2.5 font-semibold">Model</th>
              <th className="px-3 py-2.5 font-semibold">Dose</th>
              <th className="px-3 py-2.5 font-semibold">Route</th>
              <th className="px-3 py-2.5 font-semibold">Note</th>
            </tr>
          </thead>
          <tbody>
            {SELANK_SEMAX_PRECLINICAL.map((row, i) => (
              <tr key={i} className="border-t border-slate-50 align-top">
                <td className="px-3 py-2 font-semibold text-slate-800">
                  {row.peptide}
                </td>
                <td className="px-3 py-2 text-slate-600">{row.model}</td>
                <td className="px-3 py-2 text-indigo-800">{row.dose}</td>
                <td className="px-3 py-2 text-slate-600">{row.route}</td>
                <td className="px-3 py-2 text-slate-600">{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ModuleShell>
  );
}

export function SelankSemaxProtocolTimeline() {
  return (
    <ModuleShell
      kicker="Proposed 2×2 factorial design"
      title="Part A crossover PK lead-in → Part B 4-arm 14-day trial"
    >
      <div className="overflow-x-auto border-b border-slate-100">
        <p className="px-4 pt-3 text-xs font-bold text-slate-800">
          Part A — 24 healthy · 4-period crossover · 7-day washout
        </p>
        <table className="mt-2 w-full min-w-[440px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2 font-semibold">Period</th>
              <th className="px-3 py-2 font-semibold">Treatment</th>
              <th className="px-3 py-2 font-semibold">Selank</th>
              <th className="px-3 py-2 font-semibold">Semax</th>
            </tr>
          </thead>
          <tbody>
            {SELANK_SEMAX_PART_A.map((row) => (
              <tr key={row.period} className="border-t border-slate-50">
                <td className="px-3 py-2">{row.period}</td>
                <td className="px-3 py-2 font-medium text-slate-800">
                  {row.treatment}
                </td>
                <td className="px-3 py-2 text-indigo-800">
                  {row.selank ? `${row.selank} mcg` : "—"}
                </td>
                <td className="px-3 py-2 text-violet-800">
                  {row.semax ? `${row.semax} mcg` : "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="overflow-x-auto px-4 py-3">
        <p className="text-xs font-bold text-slate-800">
          Part B — 160 adults · 08:00 / 12:00 / 16:00 · 14 days · follow-up d42
        </p>
        <table className="mt-2 w-full min-w-[480px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2 font-semibold">Arm</th>
              <th className="px-3 py-2 font-semibold">Schedule</th>
              <th className="px-3 py-2 font-semibold">Daily exposure</th>
            </tr>
          </thead>
          <tbody>
            {SELANK_SEMAX_PART_B.map((row) => (
              <tr key={row.arm} className="border-t border-slate-50">
                <td className="px-3 py-2">{row.arm}</td>
                <td className="px-3 py-2 text-slate-600">{row.label}</td>
                <td className="px-3 py-2 font-semibold text-indigo-800">
                  {row.selankDay || row.semaxDay
                    ? `${row.selankDay} S + ${row.semaxDay} X mcg/day`
                    : "Placebo"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-3 text-[11px] text-slate-600">
          Double-dummy separate formulations preferred. Synergy requires
          prespecified Selank × Semax interaction — not baseline improvement
          alone.
        </p>
      </div>
    </ModuleShell>
  );
}

export function SelankSemaxClaimChecker() {
  const [open, setOpen] = useState(SELANK_SEMAX_CLAIMS[0].id);
  const card =
    SELANK_SEMAX_CLAIMS.find((c) => c.id === open) || SELANK_SEMAX_CLAIMS[0];

  return (
    <ModuleShell
      kicker="Claim checker"
      title="Synergy, fMRI, 1:1 ratio, vial labels, and route claims"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Claims"
          options={SELANK_SEMAX_CLAIMS.map((c) => ({
            id: c.id,
            label: c.claim.length > 42 ? `${c.claim.slice(0, 40)}…` : c.claim,
          }))}
          value={open}
          onChange={setOpen}
        />
      </div>
      <div className="px-4 py-4">
        <p className="text-sm font-bold text-slate-900">{card.claim}</p>
        <p className="mt-2 inline-block rounded-full bg-indigo-50 px-2.5 py-0.5 text-[11px] font-bold text-indigo-800">
          {card.verdict}
        </p>
        <p className="mt-2 text-[11px] leading-relaxed text-slate-600">
          {card.detail}
        </p>
      </div>
    </ModuleShell>
  );
}

export function SelankSemaxEvidenceLadder() {
  return (
    <ModuleShell
      kicker="Dosage evidence ladder"
      title="Combination maturity: very low · parent bounds only"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Tier</th>
              <th className="px-3 py-2.5 font-semibold">Evidence</th>
              <th className="px-3 py-2.5 font-semibold">Confidence</th>
            </tr>
          </thead>
          <tbody>
            {SELANK_SEMAX_EVIDENCE_LADDER.map((row) => (
              <tr key={row.tier} className="border-t border-slate-50">
                <td className="px-3 py-2 font-medium text-slate-800">
                  {row.tier}
                </td>
                <td className="px-3 py-2 text-slate-600">{row.evidence}</td>
                <td className="px-3 py-2 font-semibold text-indigo-800">
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

export function SelankSemaxAdverseEventTable() {
  const [mode, setMode] = useState("simple");

  return (
    <ModuleShell
      kicker="Safety monitoring"
      title="Combination safety unknown · factorial attribution required"
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
          {SELANK_SEMAX_AE_SIMPLE.map((row) => (
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
          {SELANK_SEMAX_AE_FULL.map((row) => (
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
