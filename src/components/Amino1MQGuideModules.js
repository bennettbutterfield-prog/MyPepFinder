"use client";

import { useMemo, useState } from "react";
import {
  AMINO1MQ_CLAIM_CHECKER,
  AMINO1MQ_EVIDENCE_LEVELS,
  AMINO1MQ_MECHANISM,
  AMINO1MQ_PRECLINICAL_RESULTS,
  AMINO1MQ_PROTOCOLS,
  AMINO1MQ_TRIALS,
} from "@/data/5-amino-1mq-dosage-guide";

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

export function Amino1mqEvidenceNavigator() {
  const [id, setId] = useState("human");
  const level =
    AMINO1MQ_EVIDENCE_LEVELS.find((l) => l.id === id) ||
    AMINO1MQ_EVIDENCE_LEVELS[0];

  return (
    <ModuleShell
      kicker="Evidence-level navigator"
      title="From assay to animal to (absent) human trials"
    >
      <div className="px-4 py-3">
        <ChipGroup
          label="Evidence level"
          options={AMINO1MQ_EVIDENCE_LEVELS}
          value={id}
          onChange={setId}
        />
      </div>
      <div className="border-t border-slate-100 px-4 py-4">
        <p className="text-sm font-bold text-slate-900">{level.label}</p>
        <p className="mt-2 text-xs leading-relaxed text-slate-600">
          {level.summary}
        </p>
        <ul className="mt-3 space-y-1.5 text-xs text-slate-700">
          {level.items.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-violet-500">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        {id === "human" ? (
          <p className="mt-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-[11px] font-semibold text-amber-950">
            No completed results-reported controlled human trial was identified
            as of August 2026.
          </p>
        ) : null}
      </div>
    </ModuleShell>
  );
}

export function Amino1mqMechanismVisual() {
  return (
    <ModuleShell
      kicker="NNMT mechanism"
      title="Nicotinamide + SAM → NNMT → 1-MNA + SAH"
    >
      <ol className="grid gap-2 p-4 sm:grid-cols-3 lg:grid-cols-6">
        {AMINO1MQ_MECHANISM.map((node, i) => (
          <li
            key={node.id}
            className={`rounded-xl border px-3 py-3 text-center ${
              node.inhibit
                ? "border-violet-300 bg-violet-50"
                : "border-slate-200 bg-white"
            }`}
          >
            <span className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
              {i + 1}
            </span>
            <p className="mt-1 text-[11px] font-bold leading-snug text-slate-900">
              {node.label}
            </p>
            <span
              className={`mt-2 inline-block rounded-full px-2 py-0.5 text-[9px] font-semibold ${
                node.inhibit
                  ? "bg-violet-200 text-violet-900"
                  : "bg-slate-100 text-slate-600"
              }`}
            >
              {node.badge}
            </span>
          </li>
        ))}
      </ol>
      <p className="border-t border-slate-100 px-4 py-3 text-xs leading-relaxed text-slate-600">
        Downstream NAD+ salvage and methyl-donor changes are{" "}
        <strong>preclinical possibilities</strong>, not guaranteed human
        effects. IC50 ≈ 1.2 µM describes enzyme inhibition in an assay — not a
        human dose.
      </p>
    </ModuleShell>
  );
}

export function Amino1mqProtocolComparison() {
  const [active, setActive] = useState(AMINO1MQ_PROTOCOLS[0].id);
  const row =
    AMINO1MQ_PROTOCOLS.find((p) => p.id === active) || AMINO1MQ_PROTOCOLS[0];

  return (
    <ModuleShell
      kicker="Animal-study protocol comparison"
      title="Species, route, dose, and duration — no human conversion"
    >
      <div className="px-4 py-3">
        <ChipGroup
          label="Study"
          options={AMINO1MQ_PROTOCOLS.map((p) => ({
            id: p.id,
            label: p.study,
          }))}
          value={active}
          onChange={setActive}
        />
      </div>
      <dl className="grid gap-0 divide-y divide-slate-100 border-t border-slate-100 sm:grid-cols-2">
        {[
          ["Species / model", `${row.species} · ${row.model}`],
          ["Route", row.route],
          ["Salt / API reporting", row.salt],
          ["Dose", row.dose],
          ["Frequency", row.frequency],
          ["Duration", row.duration],
        ].map(([label, value]) => (
          <div key={label} className="px-4 py-3">
            <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
              {label}
            </dt>
            <dd className="mt-0.5 text-xs font-semibold text-slate-800">
              {value}
            </dd>
          </div>
        ))}
      </dl>
      <p className="border-t border-slate-100 bg-violet-50/50 px-4 py-3 text-xs leading-relaxed text-violet-900">
        <strong>Outcome:</strong> {row.outcome}
      </p>
      <p className="border-t border-amber-100 bg-amber-50 px-4 py-2 text-[11px] font-semibold text-amber-950">
        These are animal doses, not human-equivalent instructions. No
        human-dose conversion control is provided.
      </p>
    </ModuleShell>
  );
}

export function Amino1mqClaimChecker() {
  const [active, setActive] = useState(AMINO1MQ_CLAIM_CHECKER[0].claim);
  const item =
    AMINO1MQ_CLAIM_CHECKER.find((c) => c.claim === active) ||
    AMINO1MQ_CLAIM_CHECKER[0];

  const verdictTone =
    item.verdict === "False"
      ? "bg-rose-100 text-rose-800"
      : item.verdict.includes("only") || item.verdict.includes("Not")
        ? "bg-amber-100 text-amber-900"
        : "bg-sky-100 text-sky-800";

  return (
    <ModuleShell
      kicker="Claim-versus-evidence checker"
      title="Marketing language vs published evidence"
    >
      <div className="px-4 py-3">
        <ChipGroup
          label="Claim"
          options={AMINO1MQ_CLAIM_CHECKER.map((c) => ({
            id: c.claim,
            label: c.claim.length > 26 ? `${c.claim.slice(0, 26)}…` : c.claim,
          }))}
          value={active}
          onChange={setActive}
        />
      </div>
      <div className="border-t border-slate-100 px-4 py-4">
        <p className="text-sm font-bold text-slate-900">“{item.claim}”</p>
        <span
          className={`mt-2 inline-block rounded-full px-2.5 py-1 text-[11px] font-bold ${verdictTone}`}
        >
          {item.verdict}
        </span>
        <p className="mt-3 text-xs leading-relaxed text-slate-600">
          {item.detail}
        </p>
      </div>
      <ul className="divide-y divide-slate-100 border-t border-slate-100">
        {AMINO1MQ_CLAIM_CHECKER.map((c) => (
          <li
            key={c.claim}
            className="flex items-start justify-between gap-3 px-4 py-2.5 text-xs"
          >
            <span className="text-slate-700">{c.claim}</span>
            <span className="shrink-0 font-semibold text-slate-500">
              {c.verdict}
            </span>
          </li>
        ))}
      </ul>
    </ModuleShell>
  );
}

export function Amino1mqPreclinicalChart() {
  const max = 40;
  const w = 560;
  const h = 220;
  const pad = { t: 28, r: 16, b: 56, l: 40 };
  const innerW = w - pad.l - pad.r;
  const innerH = h - pad.t - pad.b;
  const groupW = innerW / AMINO1MQ_PRECLINICAL_RESULTS.length;
  const barW = 36;

  return (
    <ModuleShell
      kicker="Preclinical results chart"
      title="Foundational obese-mouse study — approximate reported changes"
    >
      <p className="mx-4 mt-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-center text-[11px] font-bold text-amber-950">
        Mouse study, not human results — small cohorts; secondary-summary
        percentages
      </p>
      <div className="px-3 pb-4 sm:px-4">
        <svg
          viewBox={`0 0 ${w} ${h}`}
          className="h-auto w-full"
          role="img"
          aria-label="Approximate mouse body-composition changes with 5-Amino-1MQ"
        >
          {AMINO1MQ_PRECLINICAL_RESULTS.map((row, i) => {
            const cx = pad.l + groupW * i + groupW / 2;
            const barH = (row.pct / max) * innerH;
            return (
              <g key={row.label}>
                <rect
                  x={cx - barW / 2}
                  y={pad.t + innerH - barH}
                  width={barW}
                  height={barH}
                  rx="3"
                  fill={row.color}
                />
                <text
                  x={cx}
                  y={pad.t + innerH - barH - 6}
                  textAnchor="middle"
                  fontSize="11"
                  fontWeight="700"
                  fill="#6d28d9"
                >
                  ~{row.pct}%
                </text>
                <text
                  x={cx}
                  y={h - 28}
                  textAnchor="middle"
                  fontSize="11"
                  fontWeight="600"
                  fill="#475569"
                >
                  {row.label}
                </text>
                <text
                  x={cx}
                  y={h - 12}
                  textAnchor="middle"
                  fontSize="9"
                  fill="#94a3b8"
                >
                  {row.note.split("(")[0].trim()}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
      <p className="border-t border-slate-100 px-4 py-3 text-xs leading-relaxed text-slate-600">
        Key regimen: 20 mg/kg subcutaneously three times daily for 11 days.
        Food intake was not meaningfully reduced. Do not present these as
        expected human outcomes.
      </p>
    </ModuleShell>
  );
}

export function Amino1mqTrialExplorer() {
  const [topic, setTopic] = useState("All");
  const [species, setSpecies] = useState("All");
  const [route, setRoute] = useState("All");

  const topics = ["All", ...new Set(AMINO1MQ_TRIALS.map((t) => t.topic))];
  const speciesOpts = [
    "All",
    ...new Set(AMINO1MQ_TRIALS.map((t) => t.species)),
  ];
  const routes = ["All", ...new Set(AMINO1MQ_TRIALS.map((t) => t.route))];

  const filtered = useMemo(
    () =>
      AMINO1MQ_TRIALS.filter(
        (t) =>
          (topic === "All" || t.topic === topic) &&
          (species === "All" || t.species === species) &&
          (route === "All" || t.route === route)
      ),
    [topic, species, route]
  );

  return (
    <ModuleShell
      kicker="Study explorer"
      title="Published preclinical and PK evidence"
    >
      <div className="space-y-3 border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Topic"
          options={topics.map((v) => ({ id: v, label: v }))}
          value={topic}
          onChange={setTopic}
        />
        <ChipGroup
          label="Species"
          options={speciesOpts.map((v) => ({ id: v, label: v }))}
          value={species}
          onChange={setSpecies}
        />
        <ChipGroup
          label="Route"
          options={routes.map((v) => ({ id: v, label: v }))}
          value={route}
          onChange={setRoute}
        />
      </div>
      <ul className="divide-y divide-slate-100">
        {filtered.map((trial) => (
          <li key={trial.id} className="px-4 py-4">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <p className="text-sm font-bold text-slate-900">{trial.name}</p>
                <p className="text-[11px] text-slate-500">
                  {trial.authors} · {trial.journal}
                </p>
              </div>
              <div className="flex flex-wrap gap-1">
                <span className="rounded-full bg-violet-100 px-2 py-0.5 text-[10px] font-semibold text-violet-700">
                  {trial.topic}
                </span>
                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600">
                  {trial.species}
                </span>
                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600">
                  {trial.year}
                </span>
              </div>
            </div>
            <p className="mt-2 text-[11px] text-slate-500">
              <strong className="text-slate-700">Protocol:</strong>{" "}
              {trial.dose} · {trial.duration} · {trial.route}
            </p>
            <p className="mt-1 text-xs font-semibold text-violet-800">
              {trial.result}
            </p>
            <p className="mt-1 text-[11px] text-slate-500">{trial.limitation}</p>
            {trial.href ? (
              <a
                href={trial.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-[11px] font-semibold text-violet-600 hover:underline"
              >
                View study →
              </a>
            ) : null}
          </li>
        ))}
      </ul>
      {filtered.length === 0 ? (
        <p className="px-4 py-6 text-center text-xs text-slate-500">
          No studies match the selected filters.
        </p>
      ) : null}
    </ModuleShell>
  );
}
