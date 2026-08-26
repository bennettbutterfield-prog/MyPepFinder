"use client";

import { useMemo, useState } from "react";
import {
  SELANK_ANECDOTAL_PROTOCOLS,
  SELANK_AE_FULL,
  SELANK_AE_SIMPLE,
  SELANK_CLAIMS,
  SELANK_COMPARE,
  SELANK_CUMULATIVE_PRESETS,
  SELANK_EVIDENCE_HIERARCHY,
  SELANK_EVIDENCE_LADDER,
  SELANK_HUMAN_STUDIES,
  SELANK_IDENTITY,
  SELANK_LABEL_VS_TRIAL,
  SELANK_PHASE2_ARMS,
  SELANK_PK_LEADIN,
  SELANK_PRECLINICAL,
  SELANK_MOLECULE_COMPARE,
  selankCumulativeExposure,
  selankLabelDose,
} from "@/data/selank-dosage-guide";

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

export function SelankIdentityGate() {
  const [id, setId] = useState("parent");
  const card = SELANK_IDENTITY.find((c) => c.id === id) || SELANK_IDENTITY[0];

  return (
    <ModuleShell
      kicker="Identity gate"
      title="Parent Selank (TKPRPGP) vs diacetate · N-acetyl · amidated analog"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Identity check"
          options={[
            { id: "parent", label: "Selank (parent)" },
            { id: "diacetate", label: "Selank diacetate" },
            { id: "n-acetyl", label: "N-acetyl Selank" },
            { id: "amidate", label: "NA Selank Amidate" },
          ]}
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

export function SelankMoleculeCompare() {
  return (
    <ModuleShell
      kicker="Molecular comparison"
      title="Parent Selank · diacetate product · terminal-modified analogs"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Compound</th>
              <th className="px-3 py-2.5 font-semibold">Sequence</th>
              <th className="px-3 py-2.5 font-semibold">MW</th>
              <th className="px-3 py-2.5 font-semibold">Distinction</th>
            </tr>
          </thead>
          <tbody>
            {SELANK_MOLECULE_COMPARE.map((row) => (
              <tr key={row.compound} className="border-t border-slate-50 align-top">
                <td className="px-3 py-2 font-semibold text-slate-800">
                  {row.compound}
                </td>
                <td className="px-3 py-2 font-mono text-[10px] text-indigo-800">
                  {row.sequence}
                </td>
                <td className="px-3 py-2 text-slate-600">{row.mw}</td>
                <td className="px-3 py-2 text-slate-600">{row.distinction}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ModuleShell>
  );
}

export function SelankLabelDoseCalc() {
  const [dropsPerNostril, setDropsPerNostril] = useState("2");
  const [mcgPerDrop, setMcgPerDrop] = useState("75");
  const [dosesPerDay, setDosesPerDay] = useState("3");

  const result = useMemo(
    () =>
      selankLabelDose({
        dropsPerNostril,
        mcgPerDrop,
        dosesPerDay,
      }),
    [dropsPerNostril, mcgPerDrop, dosesPerDay]
  );

  return (
    <ModuleShell
      kicker="Russian labeled regimen"
      title="Drop count → mcg per administration and daily total (0.15% product)"
    >
      <div className="grid gap-3 border-b border-slate-100 px-4 py-3 sm:grid-cols-3">
        <div>
          <label
            htmlFor="selank-drops"
            className="mb-1 block text-[10px] font-bold uppercase text-slate-500"
          >
            Drops per nostril
          </label>
          <input
            id="selank-drops"
            type="number"
            min="1"
            step="1"
            value={dropsPerNostril}
            onChange={(e) => setDropsPerNostril(e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="selank-mcg-drop"
            className="mb-1 block text-[10px] font-bold uppercase text-slate-500"
          >
            mcg per drop (assumed)
          </label>
          <input
            id="selank-mcg-drop"
            type="number"
            min="1"
            step="1"
            value={mcgPerDrop}
            onChange={(e) => setMcgPerDrop(e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="selank-freq"
            className="mb-1 block text-[10px] font-bold uppercase text-slate-500"
          >
            Doses per day
          </label>
          <input
            id="selank-freq"
            type="number"
            min="1"
            step="1"
            value={dosesPerDay}
            onChange={(e) => setDosesPerDay(e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
          />
        </div>
      </div>
      {result ? (
        <div className="grid gap-3 px-4 py-4 sm:grid-cols-3">
          <div>
            <p className="text-[10px] font-bold uppercase text-slate-500">
              Per administration
            </p>
            <p className="text-xl font-bold text-indigo-800">
              {result.perAdministration} mcg
            </p>
            <p className="text-[10px] text-slate-500">
              {result.dropsPerNostril} drops × 2 nostrils
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase text-slate-500">
              Daily total
            </p>
            <p className="text-xl font-bold text-indigo-800">
              {result.dailyMcg} mcg
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase text-slate-500">
              14-day course
            </p>
            <p className="text-xl font-bold text-indigo-800">
              {result.course14Mg.toFixed(2)} mg
            </p>
          </div>
        </div>
      ) : null}
      <p className="border-t border-slate-100 px-4 py-3 text-[11px] text-slate-600">
        Default matches current Russian instructions (2 drops/nostril × 3/day).
        Drop size varies — labeled drop count is more authoritative than assumed
        75 mcg/drop unless validated.
      </p>
    </ModuleShell>
  );
}

export function SelankHumanStudies() {
  return (
    <ModuleShell
      kicker="Human clinical research"
      title="2,700 mcg/day best traceable · several abstracts omit dose"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Study</th>
              <th className="px-3 py-2.5 font-semibold">Dose</th>
              <th className="px-3 py-2.5 font-semibold">Route</th>
              <th className="px-3 py-2.5 font-semibold">Duration</th>
              <th className="px-3 py-2.5 font-semibold">Limit</th>
            </tr>
          </thead>
          <tbody>
            {SELANK_HUMAN_STUDIES.map((row) => (
              <tr key={row.study} className="border-t border-slate-50 align-top">
                <td className="px-3 py-2 font-semibold text-slate-800">
                  {row.study}
                  <span className="mt-0.5 block font-normal text-slate-500">
                    {row.purpose}
                  </span>
                </td>
                <td className="px-3 py-2 font-semibold text-indigo-800">
                  {row.dose}
                  <span className="mt-0.5 block font-normal text-slate-600">
                    {row.frequency}
                  </span>
                </td>
                <td className="px-3 py-2 text-slate-600">{row.route}</td>
                <td className="px-3 py-2 text-slate-600">{row.duration}</td>
                <td className="px-3 py-2 text-amber-800">{row.limit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ModuleShell>
  );
}

export function SelankLabelVsTrial() {
  const { label, trial } = SELANK_LABEL_VS_TRIAL;

  return (
    <ModuleShell
      kicker="Exposure comparison"
      title="Current label (~900 mcg/day) vs historical trial (2,700 mcg/day)"
    >
      <div className="grid gap-0 md:grid-cols-2">
        <div className="border-b border-slate-100 md:border-b-0 md:border-r">
          <div className="border-b border-slate-100 bg-indigo-50/60 px-4 py-2.5">
            <p className="text-xs font-bold text-indigo-900">{label.title}</p>
            <p className="text-[10px] text-indigo-700">{label.status}</p>
          </div>
          <dl className="divide-y divide-slate-100">
            {label.rows.map(([k, v]) => (
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
            <p className="text-xs font-bold text-amber-950">{trial.title}</p>
            <p className="text-[10px] text-amber-800">{trial.status}</p>
          </div>
          <dl className="divide-y divide-slate-100">
            {trial.rows.map(([k, v]) => (
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

export function SelankEvidenceHierarchy() {
  return (
    <ModuleShell
      kicker="Evidence hierarchy"
      title="Label + small human program · SC and long-term weak"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Category</th>
              <th className="px-3 py-2.5 font-semibold">Selank evidence</th>
              <th className="px-3 py-2.5 font-semibold">Interpretation</th>
            </tr>
          </thead>
          <tbody>
            {SELANK_EVIDENCE_HIERARCHY.map(([cat, ev, interp]) => (
              <tr key={cat} className="border-t border-slate-50 align-top">
                <td className="px-3 py-2 font-medium text-slate-800">{cat}</td>
                <td className="px-3 py-2 text-slate-600">{ev}</td>
                <td className="px-3 py-2 font-semibold text-indigo-800">
                  {interp}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ModuleShell>
  );
}

export function SelankAnecdotalProtocols() {
  const [open, setOpen] = useState("label");
  const row =
    SELANK_ANECDOTAL_PROTOCOLS.find((p) => p.id === open) ||
    SELANK_ANECDOTAL_PROTOCOLS[0];

  return (
    <ModuleShell
      kicker="Reported protocols"
      title="Russian label · historical trial · online IN/SC conventions"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Protocol types"
          options={SELANK_ANECDOTAL_PROTOCOLS.map((p) => ({
            id: p.id,
            label: p.label,
          }))}
          value={open}
          onChange={setOpen}
        />
      </div>
      <dl className="divide-y divide-slate-100 px-4 py-2">
        {[
          ["Amount", row.dose],
          ["Frequency", row.frequency],
          ["Route", row.route],
          ["Duration", row.duration],
          ["Evidence basis", row.basis],
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

export function SelankCumulativeCalc() {
  const [presetId, setPresetId] = useState("label");
  const preset =
    SELANK_CUMULATIVE_PRESETS.find((p) => p.id === presetId) ||
    SELANK_CUMULATIVE_PRESETS[0];
  const result = useMemo(
    () =>
      selankCumulativeExposure({
        mcgPerDose: preset.mcgPerDose,
        dosesPerDay: preset.dosesPerDay,
        days: preset.days,
      }),
    [preset]
  );

  return (
    <ModuleShell
      kicker="Cumulative exposure"
      title="14-day nominal totals — label · trial · online ranges"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Schedule presets"
          options={SELANK_CUMULATIVE_PRESETS.map((p) => ({
            id: p.id,
            label: p.label,
          }))}
          value={presetId}
          onChange={setPresetId}
        />
      </div>
      {result ? (
        <div className="grid gap-3 px-4 py-4 sm:grid-cols-3">
          <div>
            <p className="text-[10px] font-bold uppercase text-slate-500">
              Daily
            </p>
            <p className="text-xl font-bold text-indigo-800">
              {result.dailyMcg} mcg
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase text-slate-500">
              14-day total
            </p>
            <p className="text-xl font-bold text-indigo-800">
              {result.totalMg.toFixed(2)} mg
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase text-slate-500">
              Per dose
            </p>
            <p className="text-xl font-bold text-indigo-800">
              {result.mcgPerDose} mcg × {result.dosesPerDay}/day
            </p>
          </div>
        </div>
      ) : null}
    </ModuleShell>
  );
}

export function SelankClinicalVsAnecdotal() {
  const { clinical, anecdotal } = SELANK_COMPARE;

  return (
    <ModuleShell
      kicker="Evidence split"
      title="Clinical IN record vs anecdotal (often lower mcg, less-studied route)"
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

export function SelankPreclinicalDoses() {
  return (
    <ModuleShell
      kicker="Preclinical anchors"
      title="300 mcg/kg rodents repeated — not a human dose"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Model</th>
              <th className="px-3 py-2.5 font-semibold">Dose</th>
              <th className="px-3 py-2.5 font-semibold">Route</th>
              <th className="px-3 py-2.5 font-semibold">Duration</th>
              <th className="px-3 py-2.5 font-semibold">Outcome</th>
            </tr>
          </thead>
          <tbody>
            {SELANK_PRECLINICAL.map((row) => (
              <tr
                key={`${row.model}-${row.route}`}
                className="border-t border-slate-50 align-top"
              >
                <td className="px-3 py-2 text-slate-800">{row.model}</td>
                <td className="px-3 py-2 font-semibold text-indigo-800">
                  {row.dose}
                </td>
                <td className="px-3 py-2 text-slate-600">{row.route}</td>
                <td className="px-3 py-2 text-slate-600">{row.duration}</td>
                <td className="px-3 py-2 text-slate-600">{row.outcome}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ModuleShell>
  );
}

export function SelankProtocolTimeline() {
  return (
    <ModuleShell
      kicker="Proposed Phase 2a design"
      title="PK lead-in → 900 vs 2,700 mcg/day × 14 days vs placebo"
    >
      <div className="overflow-x-auto border-b border-slate-100">
        <p className="px-4 pt-3 text-xs font-bold text-slate-800">
          PK lead-in (18 participants)
        </p>
        <table className="mt-2 w-full min-w-[440px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2 font-semibold">Cohort</th>
              <th className="px-3 py-2 font-semibold">Dose</th>
              <th className="px-3 py-2 font-semibold">Plan</th>
            </tr>
          </thead>
          <tbody>
            {SELANK_PK_LEADIN.map((row) => (
              <tr key={row.cohort} className="border-t border-slate-50">
                <td className="px-3 py-2">{row.cohort}</td>
                <td className="px-3 py-2 font-semibold text-indigo-800">
                  {row.dose}
                </td>
                <td className="px-3 py-2 text-slate-600">{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="overflow-x-auto px-4 py-3">
        <p className="text-xs font-bold text-slate-800">
          Main trial — 150 participants · HAM-A primary · 14 days
        </p>
        <table className="mt-2 w-full min-w-[480px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2 font-semibold">Arm</th>
              <th className="px-3 py-2 font-semibold">Schedule</th>
              <th className="px-3 py-2 font-semibold">Daily total</th>
            </tr>
          </thead>
          <tbody>
            {SELANK_PHASE2_ARMS.map((row) => (
              <tr key={row.arm} className="border-t border-slate-50">
                <td className="px-3 py-2">{row.label}</td>
                <td className="px-3 py-2 text-slate-600">
                  {row.morning}/{row.midday}/{row.evening} mcg
                </td>
                <td className="px-3 py-2 font-semibold text-indigo-800">
                  {row.daily === 0 ? "Placebo" : `${row.daily} mcg/day`}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-3 text-[11px] text-slate-600">
          Low arm approximates current Russian labeled exposure; high arm
          replicates best-documented historical trial. Requires GMP metered pump,
          validated TKPRPGP assay, and regulatory approval.
        </p>
      </div>
    </ModuleShell>
  );
}

export function SelankClaimChecker() {
  const [open, setOpen] = useState(SELANK_CLAIMS[0].id);
  const card = SELANK_CLAIMS.find((c) => c.id === open) || SELANK_CLAIMS[0];

  return (
    <ModuleShell
      kicker="Claim checker"
      title="Common Selank claims vs the evidence record"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Claims"
          options={SELANK_CLAIMS.map((c) => ({
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

export function SelankEvidenceLadder() {
  return (
    <ModuleShell
      kicker="Dosage evidence ladder"
      title="Russian label strongest · SC and long-term weakest"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Dosage information</th>
              <th className="px-3 py-2.5 font-semibold">Evidence</th>
              <th className="px-3 py-2.5 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {SELANK_EVIDENCE_LADDER.map((row) => (
              <tr key={row.level} className="border-t border-slate-50">
                <td className="px-3 py-2 font-medium text-slate-800">
                  {row.level}
                </td>
                <td className="px-3 py-2 text-slate-600">{row.exists}</td>
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

export function SelankAdverseEventTable() {
  const [mode, setMode] = useState("simple");

  return (
    <ModuleShell
      kicker="Safety monitoring"
      title="Russian label effects · nasal/CNS domains · FDA compounding note"
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
          {SELANK_AE_SIMPLE.map((row) => (
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
          {SELANK_AE_FULL.map((row) => (
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

// Backward-compatible exports for PeptideDosageGuide widget names
export const SelankEvidenceMap = SelankEvidenceHierarchy;
export const SelankParentEvidence = SelankHumanStudies;
export function SelankMechanismClaims() {
  return null;
}
