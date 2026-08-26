"use client";

import { useMemo, useState } from "react";
import {
  DIHEXA_ANECDOTAL_PHASES,
  DIHEXA_ANECDOTAL_PROTOCOLS,
  DIHEXA_ASSAY_PRESETS,
  DIHEXA_AE_FULL,
  DIHEXA_AE_SIMPLE,
  DIHEXA_CLAIMS,
  DIHEXA_COMPARE,
  DIHEXA_EVIDENCE_INTEGRITY,
  DIHEXA_EVIDENCE_LADDER,
  DIHEXA_FIH_MAD,
  DIHEXA_FIH_SAD,
  DIHEXA_HUMAN_STATUS,
  DIHEXA_IDENTITY,
  DIHEXA_MASS_PRESETS,
  DIHEXA_PRECLINICAL,
  dihexaMassToMicromol,
  dihexaPowderRequired,
} from "@/data/dihexa-dosage-guide";

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

export function DihexaIdentityGate() {
  const [id, setId] = useState("dihexa-free");
  const card = DIHEXA_IDENTITY.find((c) => c.id === id) || DIHEXA_IDENTITY[0];

  return (
    <ModuleShell
      kicker="Identity gate"
      title="Confirm Dihexa vs Dihexa acetate — not fosgonimeton or unspecified powder"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Identity check"
          options={DIHEXA_IDENTITY.map((c) => ({
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

export function DihexaEvidenceIntegrity() {
  return (
    <ModuleShell
      kicker="Publication record"
      title="McCoy 2013 EOC · Benoist 2014 retracted · Sun 2021 independent mouse data"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Paper</th>
              <th className="px-3 py-2.5 font-semibold">Role</th>
              <th className="px-3 py-2.5 font-semibold">Status</th>
              <th className="px-3 py-2.5 font-semibold">Use on this page</th>
            </tr>
          </thead>
          <tbody>
            {DIHEXA_EVIDENCE_INTEGRITY.map((row) => (
              <tr key={row.paper} className="border-t border-slate-50 align-top">
                <td className="px-3 py-2 font-semibold text-slate-800">
                  {row.paper}
                </td>
                <td className="px-3 py-2 text-slate-600">{row.role}</td>
                <td className="px-3 py-2 font-semibold text-indigo-800">
                  {row.status}
                </td>
                <td className="px-3 py-2 text-slate-600">{row.use}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ModuleShell>
  );
}

export function DihexaHumanStatus() {
  return (
    <ModuleShell
      kicker="Human evidence status"
      title="No human Dihexa dose · fosgonimeton 40 mg SC is not transferable"
    >
      <dl className="divide-y divide-slate-100">
        {DIHEXA_HUMAN_STATUS.map(([q, a]) => (
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

export function DihexaAnecdotalProtocols() {
  const [open, setOpen] = useState("common-oral");
  const row =
    DIHEXA_ANECDOTAL_PROTOCOLS.find((p) => p.id === open) ||
    DIHEXA_ANECDOTAL_PROTOCOLS[1];

  return (
    <ModuleShell
      kicker="Reported protocols"
      title="Community/clinic/vendor conventions — no direct human experimental support"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Protocol types"
          options={DIHEXA_ANECDOTAL_PROTOCOLS.map((p) => ({
            id: p.id,
            label: p.label,
          }))}
          value={open}
          onChange={setOpen}
        />
      </div>
      <dl className="divide-y divide-slate-100 px-4 py-2">
        {[
          ["Amount", row.amount],
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

export function DihexaClinicalVsAnecdotal() {
  const { clinical, anecdotal } = DIHEXA_COMPARE;

  return (
    <ModuleShell
      kicker="Evidence split"
      title="No human clinical column — anecdotal 5–20 mg vs animal anchors only"
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

export function DihexaAnecdotalTimeline() {
  return (
    <ModuleShell
      kicker="Documented pattern"
      title="5 mg daily oral × 4 weeks → 140 mg cumulative (landscape only)"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[480px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Phase</th>
              <th className="px-3 py-2.5 font-semibold">Weeks</th>
              <th className="px-3 py-2.5 font-semibold">Amount</th>
              <th className="px-3 py-2.5 font-semibold">Cumulative (mg)</th>
            </tr>
          </thead>
          <tbody>
            {DIHEXA_ANECDOTAL_PHASES.map((row) => (
              <tr key={row.phase} className="border-t border-slate-50">
                <td className="px-3 py-2 font-semibold text-slate-800">
                  {row.phase}
                </td>
                <td className="px-3 py-2 text-slate-600">{row.weeks}</td>
                <td className="px-3 py-2 text-slate-600">{row.amount}</td>
                <td className="px-3 py-2 font-bold text-indigo-800">
                  {row.cumulative}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="px-4 py-3 text-[11px] text-slate-600">
        10 mg × 6 weeks = 420 mg — threefold exposure with no validated safety
        margin. Not a recommendation.
      </p>
    </ModuleShell>
  );
}

export function DihexaPreclinicalDoses() {
  return (
    <ModuleShell
      kicker="Preclinical anchors"
      title="Rat oral 2 mg/kg (EOC) · IP · ICV · APP/PS1 mice"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Model</th>
              <th className="px-3 py-2.5 font-semibold">Dose</th>
              <th className="px-3 py-2.5 font-semibold">Route</th>
              <th className="px-3 py-2.5 font-semibold">Note</th>
            </tr>
          </thead>
          <tbody>
            {DIHEXA_PRECLINICAL.map((row) => (
              <tr key={`${row.model}-${row.dose}`} className="border-t border-slate-50">
                <td className="px-3 py-2 text-slate-800">{row.model}</td>
                <td className="px-3 py-2 font-semibold text-indigo-800">
                  {row.dose}
                </td>
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

export function DihexaAssayCalc() {
  const [assayId, setAssayId] = useState("0.95");
  const [targetId, setTargetId] = useState("5");
  const assay =
    DIHEXA_ASSAY_PRESETS.find((p) => p.id === assayId) ||
    DIHEXA_ASSAY_PRESETS[1];
  const target =
    DIHEXA_MASS_PRESETS.find((p) => p.id === targetId) ||
    DIHEXA_MASS_PRESETS[2];
  const result = useMemo(
    () =>
      dihexaPowderRequired({
        targetMg: target.mg,
        activeFraction: assay.fraction,
      }),
    [target.mg, assay.fraction]
  );

  return (
    <ModuleShell
      kicker="Assay correction"
      title="Powder mg = target Dihexa mass ÷ active fraction"
    >
      <div className="space-y-3 border-b border-slate-100 px-4 py-3">
        <div>
          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Target active mass
          </p>
          <ChipGroup
            label="Target"
            options={DIHEXA_MASS_PRESETS.map((p) => ({
              id: p.id,
              label: p.label,
            }))}
            value={targetId}
            onChange={setTargetId}
          />
        </div>
        <div>
          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Powder assay
          </p>
          <ChipGroup
            label="Assay"
            options={DIHEXA_ASSAY_PRESETS.map((p) => ({
              id: p.id,
              label: p.label,
            }))}
            value={assayId}
            onChange={setAssayId}
          />
        </div>
      </div>
      {result ? (
        <div className="px-4 py-4">
          <p className="text-2xl font-bold text-indigo-800">
            {result.powderMg.toFixed(3)} mg powder
          </p>
          <p className="mt-1 text-[11px] text-slate-600">
            To deliver {result.targetMg} mg Dihexa at{" "}
            {(result.activeFraction * 100).toFixed(0)}% active assay
          </p>
        </div>
      ) : null}
    </ModuleShell>
  );
}

export function DihexaMolarCalc() {
  const [id, setId] = useState("5");
  const preset =
    DIHEXA_MASS_PRESETS.find((p) => p.id === id) || DIHEXA_MASS_PRESETS[2];
  const result = useMemo(() => dihexaMassToMicromol(preset.mg), [preset.mg]);

  return (
    <ModuleShell
      kicker="Mass-to-mole"
      title="504.66 g/mol — moles do not predict human receptor occupancy"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Mass presets"
          options={DIHEXA_MASS_PRESETS.map((p) => ({
            id: p.id,
            label: p.label,
          }))}
          value={id}
          onChange={setId}
        />
      </div>
      {result ? (
        <div className="px-4 py-4">
          <p className="text-2xl font-bold text-indigo-800">
            {result.micromol.toFixed(3)} µmol
          </p>
          <p className="mt-1 text-[11px] text-slate-600">
            From {result.mg} mg Dihexa · composition math only
          </p>
        </div>
      ) : null}
    </ModuleShell>
  );
}

export function DihexaProtocolTimeline() {
  return (
    <ModuleShell
      kicker="Proposed FIH design"
      title="100 mcg microdose → SAD 0.1–3 mg → MAD 0.1–1 mg × 14 days"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <p className="text-xs font-bold text-slate-800">Part A — Microdose</p>
        <p className="mt-1 text-[11px] text-slate-600">
          8 healthy adults · 100 mcg oral single dose · PK through 168 h ·
          optional CSF subset
        </p>
      </div>
      <div className="overflow-x-auto border-b border-slate-100">
        <p className="px-4 pt-3 text-xs font-bold text-slate-800">
          Part B — Single ascending dose
        </p>
        <table className="mt-2 w-full min-w-[400px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2 font-semibold">Cohort</th>
              <th className="px-3 py-2 font-semibold">Dose</th>
              <th className="px-3 py-2 font-semibold">Washout before next</th>
            </tr>
          </thead>
          <tbody>
            {DIHEXA_FIH_SAD.map((row) => (
              <tr key={row.cohort} className="border-t border-slate-50">
                <td className="px-3 py-2">{row.cohort}</td>
                <td className="px-3 py-2 font-semibold text-indigo-800">
                  {row.doseMg} mg oral once
                </td>
                <td className="px-3 py-2">{row.washoutDays} days min</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="overflow-x-auto px-4 py-3">
        <p className="text-xs font-bold text-slate-800">
          Part C — Multiple ascending dose (after Part B review)
        </p>
        <table className="mt-2 w-full min-w-[400px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2 font-semibold">Cohort</th>
              <th className="px-3 py-2 font-semibold">Dose</th>
              <th className="px-3 py-2 font-semibold">Duration</th>
            </tr>
          </thead>
          <tbody>
            {DIHEXA_FIH_MAD.map((row) => (
              <tr key={row.cohort} className="border-t border-slate-50">
                <td className="px-3 py-2">{row.cohort}</td>
                <td className="px-3 py-2 font-semibold text-indigo-800">
                  {row.doseMg} mg once daily
                </td>
                <td className="px-3 py-2">{row.days} days</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-3 text-[11px] text-slate-600">
          Upper MAD (1 mg) is one-fifth of the lower end of the 5–20 mg
          community range. ~70 participants planned. Requires GLP tox, GMP
          product, and regulatory/ethics approval — not a personal protocol.
        </p>
      </div>
    </ModuleShell>
  );
}

export function DihexaClaimChecker() {
  const [open, setOpen] = useState(DIHEXA_CLAIMS[0].id);
  const card = DIHEXA_CLAIMS.find((c) => c.id === open) || DIHEXA_CLAIMS[0];

  return (
    <ModuleShell
      kicker="Claim checker"
      title="Common Dihexa claims vs the evidence record"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Claims"
          options={DIHEXA_CLAIMS.map((c) => ({
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

export function DihexaEvidenceLadder() {
  return (
    <ModuleShell
      kicker="Dosage evidence ladder"
      title="No human column — animal anchors under EOC/retraction cloud"
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
            {DIHEXA_EVIDENCE_LADDER.map((row) => (
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

export function DihexaAdverseEventTable() {
  const [mode, setMode] = useState("simple");

  return (
    <ModuleShell
      kicker="Safety monitoring"
      title="No human incidence table · HGF/MET mechanism concern unresolved"
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
          {DIHEXA_AE_SIMPLE.map((row) => (
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
          {DIHEXA_AE_FULL.map((row) => (
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
