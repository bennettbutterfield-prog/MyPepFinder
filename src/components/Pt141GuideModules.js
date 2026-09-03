"use client";

import { useMemo, useState } from "react";
import {
  PT141_AE_FULL,
  PT141_AE_SIMPLE,
  PT141_APPROVAL_BOUNDARIES,
  PT141_CLAIMS,
  PT141_COMPARISONS,
  PT141_DOSE_STUDIES,
  PT141_EVIDENCE_LADDER,
  PT141_IDENTITY,
  PT141_MECHANISM,
  PT141_PHASE3_OUTCOMES,
} from "@/data/pt-141-dosage-guide";

const LANE_LABELS = {
  "approved-female-hsdd": "Approved female HSDD",
  "female-dose-finding": "Female dose finding",
  "female-extension": "Female extension",
  "early-male-sc": "Early male SC",
  "early-male-sc-ed": "Early male SC (ED)",
  "early-male-intranasal": "Early male intranasal",
  "male-intranasal-combo": "Male intranasal + sildenafil",
  pharmacology: "Pharmacology",
};

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

function evidenceLabelTone(label) {
  if (!label) return "bg-slate-100 text-slate-700";
  const lower = label.toLowerCase();
  if (lower.includes("approved") || lower.includes("demonstrated")) {
    return "bg-emerald-50 text-emerald-800";
  }
  if (lower.includes("supportive")) return "bg-indigo-50 text-indigo-800";
  if (lower.includes("preliminary")) return "bg-amber-50 text-amber-900";
  if (lower.includes("not demonstrated") || lower.includes("not established")) {
    return "bg-red-50 text-red-800";
  }
  if (lower.includes("not an approved")) return "bg-slate-100 text-slate-600";
  return "bg-violet-50 text-violet-800";
}

function groupPhase3Outcomes(rows) {
  const desire = rows.filter((r) => r.id.startsWith("desire"));
  const distress = rows.filter((r) => r.id.startsWith("distress"));
  const sse = rows.filter((r) => r.id.startsWith("sse"));

  return [
    {
      id: "desire",
      label: "FSFI desire score",
      headline: "Desire improved",
      improved: true,
      scale: desire[0]?.scale,
      study1: desire.find((r) => r.study === "Study 1"),
      study2: desire.find((r) => r.study === "Study 2"),
    },
    {
      id: "distress",
      label: "Distress about low desire",
      headline: "Distress improved",
      improved: true,
      scale: distress[0]?.scale,
      study1: distress.find((r) => r.study === "Study 1"),
      study2: distress.find((r) => r.study === "Study 2"),
    },
    {
      id: "sse",
      label: "Satisfying sexual events",
      headline: "Event count did not improve",
      improved: false,
      scale: sse[0]?.scale,
      study1: sse.find((r) => r.study === "Study 1"),
      study2: sse.find((r) => r.study === "Study 2"),
    },
  ];
}

function Pt141AdverseEventTableInner() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[520px] border-collapse text-left text-xs">
        <thead>
          <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
            <th className="px-3 py-2.5 font-semibold">Outcome</th>
            <th className="px-3 py-2.5 font-semibold">Bremelanotide</th>
            <th className="px-3 py-2.5 font-semibold">Placebo</th>
            <th className="px-3 py-2.5 font-semibold">Context</th>
          </tr>
        </thead>
        <tbody>
          {PT141_AE_FULL.map((row) => (
            <tr key={row.outcome} className="border-t border-slate-50 align-top">
              <td className="px-3 py-2 font-semibold text-slate-800">
                {row.outcome}
              </td>
              <td className="px-3 py-2 font-semibold text-indigo-800">
                {row.active}
              </td>
              <td className="px-3 py-2 text-slate-600">{row.placebo}</td>
              <td className="px-3 py-2 text-slate-600">{row.context}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Pt141IdentityGate() {
  const [id, setId] = useState(PT141_IDENTITY[0]?.id ?? "pt141");
  const card = PT141_IDENTITY.find((c) => c.id === id) || PT141_IDENTITY[0];

  return (
    <ModuleShell
      kicker="Identity gate"
      title="PT-141 · bremelanotide · Vyleesi · compounded vial"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Identity check"
          options={PT141_IDENTITY.map((c) => ({ id: c.id, label: c.label }))}
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

export function Pt141ApprovalBoundary() {
  const approved = PT141_APPROVAL_BOUNDARIES.find((row) => row.status === "approved");
  const outside = PT141_APPROVAL_BOUNDARIES.filter((row) => row.status === "gray");

  return (
    <ModuleShell
      kicker="Approval boundary"
      title="Who the Vyleesi evidence applies to — and who it does not"
    >
      <div className="grid gap-3 px-4 py-4 md:grid-cols-2">
        {approved ? (
          <div className="rounded-xl border border-indigo-200 bg-indigo-50/70 px-4 py-3">
            <p className="text-[10px] font-bold uppercase tracking-wide text-indigo-700">
              {approved.label}
            </p>
            <p className="mt-1 text-sm font-bold text-indigo-950">
              {approved.population}
            </p>
            <p className="mt-2 text-[11px] leading-relaxed text-indigo-900/80">
              {approved.detail}
            </p>
          </div>
        ) : null}
        <div className="space-y-2">
          {outside.map((row) => (
            <div
              key={row.id}
              className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5"
            >
              <p className="text-xs font-semibold text-slate-700">{row.label}</p>
              <p className="mt-0.5 text-[11px] font-medium text-slate-600">
                {row.population}
              </p>
              {row.detail ? (
                <p className="mt-1 text-[11px] text-slate-500">{row.detail}</p>
              ) : null}
            </div>
          ))}
        </div>
      </div>
      <p className="border-t border-slate-100 px-4 py-3 text-[11px] text-slate-600">
        Explains study applicability only — not a diagnostic tool or candidacy
        determination.
      </p>
    </ModuleShell>
  );
}

export function Pt141OutcomeExplorer() {
  const outcomes = useMemo(
    () => groupPhase3Outcomes(PT141_PHASE3_OUTCOMES),
    []
  );

  return (
    <ModuleShell
      kicker="Phase 3 outcomes"
      title="Desire and distress improved modestly · satisfying events did not"
    >
      <div className="grid gap-3 px-4 py-4 md:grid-cols-3">
        {outcomes.map((outcome) => (
          <div
            key={outcome.id}
            className={`rounded-xl border px-4 py-3 ${
              outcome.improved
                ? "border-indigo-200 bg-indigo-50/60"
                : "border-slate-200 bg-slate-50"
            }`}
          >
            <p
              className={`text-[10px] font-bold uppercase tracking-wide ${
                outcome.improved ? "text-indigo-700" : "text-slate-500"
              }`}
            >
              {outcome.headline}
            </p>
            <p className="mt-1 text-xs font-bold text-slate-900">
              {outcome.label}
            </p>
            <dl className="mt-3 space-y-2 text-[11px]">
              {outcome.study1 ? (
                <div>
                  <dt className="font-semibold text-slate-500">Study 1</dt>
                  <dd className="mt-0.5 text-slate-800">
                    <span className="font-bold text-indigo-800">
                      {outcome.study1.active}
                    </span>
                    <span className="text-slate-500"> vs </span>
                    <span>{outcome.study1.placebo} placebo</span>
                  </dd>
                </div>
              ) : null}
              {outcome.study2 ? (
                <div>
                  <dt className="font-semibold text-slate-500">Study 2</dt>
                  <dd className="mt-0.5 text-slate-800">
                    <span className="font-bold text-indigo-800">
                      {outcome.study2.active}
                    </span>
                    <span className="text-slate-500"> vs </span>
                    <span>{outcome.study2.placebo} placebo</span>
                  </dd>
                </div>
              ) : null}
            </dl>
            {outcome.study1?.pValue || outcome.study2?.pValue ? (
              <p className="mt-2 text-[10px] text-slate-500">
                {[outcome.study1?.pValue, outcome.study2?.pValue]
                  .filter(Boolean)
                  .join(" · ")}
              </p>
            ) : null}
            {outcome.scale ? (
              <p className="mt-1 text-[10px] text-slate-500">
                Scale: {outcome.scale}
              </p>
            ) : null}
          </div>
        ))}
      </div>
      <p className="border-t border-slate-100 px-4 py-3 text-[11px] text-slate-600">
        Between-group advantages were modest. Placebo participants also improved
        — active-arm change alone overstates the drug effect.
      </p>
    </ModuleShell>
  );
}

export function Pt141DoseRouteMap() {
  const lanes = useMemo(() => {
    const ids = [...new Set(PT141_DOSE_STUDIES.map((s) => s.lane))];
    return [
      { id: "All", label: "All lanes" },
      ...ids.map((id) => ({ id, label: LANE_LABELS[id] || id })),
    ];
  }, []);
  const [lane, setLane] = useState("All");
  const filtered = useMemo(
    () =>
      PT141_DOSE_STUDIES.filter((s) => lane === "All" || s.lane === lane),
    [lane]
  );
  const showNasalWarning =
    lane === "All" ||
    lane.includes("intranasal") ||
    lane === "pharmacology";

  return (
    <ModuleShell
      kicker="Dose and route map"
      title="Female SC approval · dose finding · early male SC and intranasal — not one axis"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Evidence lane"
          options={lanes}
          value={lane}
          onChange={setLane}
        />
      </div>
      {showNasalWarning ? (
        <p className="border-b border-amber-100 bg-amber-50 px-4 py-2.5 text-[11px] font-semibold text-amber-950">
          Milligrams are not route-equivalent — intranasal doses cannot be
          converted into injectable milligrams.
        </p>
      ) : null}
      <ul className="divide-y divide-slate-100">
        {filtered.map((study) => (
          <li key={`${study.lane}-${study.population}`} className="px-4 py-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-violet-100 px-2 py-0.5 text-[10px] font-bold text-violet-900">
                {LANE_LABELS[study.lane] || study.lane}
              </span>
              <p className="text-xs font-bold text-slate-900">
                {study.population}
              </p>
            </div>
            <div className="mt-2 grid gap-2 sm:grid-cols-3">
              <div>
                <p className="text-[10px] font-bold uppercase text-slate-500">
                  Dose
                </p>
                <p className="text-xs font-semibold text-indigo-800">
                  {study.dose}
                </p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase text-slate-500">
                  Route
                </p>
                <p className="text-xs text-slate-700">{study.route}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase text-slate-500">
                  Schedule
                </p>
                <p className="text-xs text-slate-700">{study.schedule}</p>
              </div>
            </div>
            {study.n ? (
              <p className="mt-2 text-[11px] text-slate-500">n = {study.n}</p>
            ) : null}
            {study.role ? (
              <p className="mt-2 text-[11px] font-semibold text-slate-800">
                {study.role}
              </p>
            ) : null}
          </li>
        ))}
      </ul>
    </ModuleShell>
  );
}

export function Pt141SafetyToggle() {
  const [mode, setMode] = useState("simple");
  const topFive = PT141_AE_SIMPLE.slice(0, 5);

  return (
    <ModuleShell
      kicker="Safety monitoring"
      title="Phase 3 tolerability · placebo context · discontinuations"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Detail level"
          options={[
            { id: "simple", label: "Summary" },
            { id: "full", label: "Full trial table" },
          ]}
          value={mode}
          onChange={setMode}
        />
      </div>
      {mode === "simple" ? (
        <div className="grid gap-3 px-4 py-4 sm:grid-cols-2 lg:grid-cols-3">
          {topFive.map((row) => (
            <div
              key={row.effect}
              className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-3"
            >
              <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
                {row.effect}
              </p>
              <p className="mt-1 text-xl font-bold text-indigo-800">
                {row.active}
              </p>
              <p className="mt-1 text-[11px] text-slate-500">
                Placebo: {row.placebo}
              </p>
              {row.note ? (
                <p className="mt-2 text-[11px] text-slate-600">{row.note}</p>
              ) : null}
            </div>
          ))}
        </div>
      ) : (
        <Pt141AdverseEventTableInner />
      )}
    </ModuleShell>
  );
}

export function Pt141MechanismVisual() {
  const branches = useMemo(
    () =>
      PT141_MECHANISM.filter((row) =>
        ["MC4R", "MC1R"].includes(row.target)
      ),
    []
  );
  const [target, setTarget] = useState(branches[0]?.target ?? "MC4R");
  const branch =
    branches.find((m) => m.target === target) || branches[0];

  return (
    <ModuleShell
      kicker="Mechanism"
      title="Therapeutic MC4R branch vs MC1R pigmentation branch"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Pathway branch"
          options={branches.map((m) => ({
            id: m.target,
            label:
              m.target === "MC4R"
                ? "Therapeutic (MC4R)"
                : "Pigmentation (MC1R)",
          }))}
          value={target}
          onChange={setTarget}
        />
      </div>
      <div className="px-4 py-4">
        <p className="text-[10px] font-bold uppercase tracking-wide text-violet-700">
          {branch?.target} · {branch?.action}
        </p>
        <p className="mt-2 text-xs font-semibold leading-relaxed text-slate-800">
          {branch?.consequence}
        </p>
        <p className="mt-3 rounded-lg border border-violet-100 bg-violet-50 px-3 py-2 text-[11px] text-violet-900">
          {branch?.status}
        </p>
      </div>
      <p className="border-t border-slate-100 px-4 py-3 text-[11px] text-slate-600">
        Not a PDE5 inhibitor · Exact HSDD mechanism remains unknown · Central
        signaling does not guarantee a response.
      </p>
    </ModuleShell>
  );
}

export function Pt141Comparison() {
  const [id, setId] = useState(PT141_COMPARISONS[0]?.id ?? "vyleesi");
  const option =
    PT141_COMPARISONS.find((c) => c.id === id) || PT141_COMPARISONS[0];
  const rows = [
    ["Mechanism", option.mechanism],
    ["Approved population", option.population],
    ["Route", option.route],
    ["Dosing pattern", option.dose],
    ["Central limitation", option.limitation],
    ["Evidence strength", option.evidence],
  ].filter(([, v]) => v);

  return (
    <ModuleShell
      kicker="Treatment comparison"
      title="Desire vs erectile physiology · on-demand vs daily · approved population"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Compare option"
          options={PT141_COMPARISONS.map((c) => ({ id: c.id, label: c.label }))}
          value={id}
          onChange={setId}
        />
      </div>
      <dl className="divide-y divide-slate-100 px-4 py-2">
        {rows.map(([k, v]) => (
          <div key={k} className="flex justify-between gap-4 py-2.5">
            <dt className="text-xs text-slate-500">{k}</dt>
            <dd className="max-w-[60%] text-right text-xs font-semibold text-slate-800">
              {v}
            </dd>
          </div>
        ))}
      </dl>
      <p className="border-t border-slate-100 px-4 py-3 text-[11px] text-slate-600">
        No direct head-to-head efficacy evidence between these options.
      </p>
    </ModuleShell>
  );
}

export function Pt141ClaimChecker() {
  const [open, setOpen] = useState(PT141_CLAIMS[0]?.id);
  const card = PT141_CLAIMS.find((c) => c.id === open) || PT141_CLAIMS[0];

  return (
    <ModuleShell
      kicker="Claim checker"
      title="Marketing claims vs evidence labels in the labeled population"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Claims"
          options={PT141_CLAIMS.map((c) => ({
            id: c.id,
            label: c.claim.length > 42 ? `${c.claim.slice(0, 40)}…` : c.claim,
          }))}
          value={open}
          onChange={setOpen}
        />
      </div>
      <div className="px-4 py-4">
        <p className="text-sm font-bold text-slate-900">{card.claim}</p>
        <p
          className={`mt-2 inline-block rounded-full px-2.5 py-0.5 text-[11px] font-bold ${evidenceLabelTone(card.verdict)}`}
        >
          {card.verdict}
        </p>
        {card.detail ? (
          <p className="mt-2 text-[11px] leading-relaxed text-slate-600">
            {card.detail}
          </p>
        ) : null}
      </div>
    </ModuleShell>
  );
}

export function Pt141EvidenceLadder() {
  return (
    <ModuleShell
      kicker="Dosage evidence ladder"
      title="Approved female HSDD strong · male and enhancement claims weak"
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
            {PT141_EVIDENCE_LADDER.map((row) => (
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

export function Pt141AdverseEventTable() {
  return (
    <ModuleShell
      kicker="Adverse events"
      title="Pooled phase 3 active vs placebo rates · premenopausal HSDD population"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Effect</th>
              <th className="px-3 py-2.5 font-semibold">Bremelanotide</th>
              <th className="px-3 py-2.5 font-semibold">Placebo</th>
              <th className="px-3 py-2.5 font-semibold">Note</th>
            </tr>
          </thead>
          <tbody>
            {PT141_AE_SIMPLE.map((row) => (
              <tr key={row.effect} className="border-t border-slate-50 align-top">
                <td className="px-3 py-2 font-semibold text-slate-800">
                  {row.effect}
                </td>
                <td className="px-3 py-2 font-semibold text-indigo-800">
                  {row.active}
                </td>
                <td className="px-3 py-2 text-slate-600">{row.placebo}</td>
                <td className="px-3 py-2 text-slate-600">{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="border-t border-slate-100 px-4 py-3 text-[11px] text-slate-600">
        Rates reflect the approved subcutaneous product in premenopausal women
        with HSDD — not men, intranasal use, or compounded products.
      </p>
    </ModuleShell>
  );
}
