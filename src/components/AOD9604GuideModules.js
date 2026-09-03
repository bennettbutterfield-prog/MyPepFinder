"use client";

import { useMemo, useState } from "react";
import {
  AOD9604_AE_FULL,
  AOD9604_AE_SIMPLE,
  AOD9604_CLAIM_CHECKER,
  AOD9604_DENOMINATORS,
  AOD9604_MECHANISM_NODES,
  AOD9604_METAOD004,
  AOD9604_ROUTE_EVIDENCE,
  AOD9604_TRIALS,
  AOD9604_WEIGHT_SIGNAL,
} from "@/data/aod-9604-dosage-guide";

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

function DataTable({ table, caption }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
      {caption ? (
        <p className="border-b border-slate-100 bg-slate-50 px-3 py-2 text-xs font-bold uppercase tracking-wide text-slate-500">
          {caption}
        </p>
      ) : null}
      <table className="w-full min-w-[360px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-slate-100 bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
            {table.headers.map((h) => (
              <th key={h} className="px-3 py-2.5 font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row) => (
            <tr key={row[0]} className="border-b border-slate-50 last:border-0">
              {row.map((cell, i) => (
                <td
                  key={`${row[0]}-${i}`}
                  className={`px-3 py-2.5 text-xs ${
                    i === 0 ? "font-medium text-slate-600" : "text-slate-700"
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Aod9604WeightSignalChart() {
  const early = AOD9604_WEIGHT_SIGNAL.early;
  const conf = AOD9604_WEIGHT_SIGNAL.confirmatory;
  const maxKg = 3;
  const w = 280;
  const h = 160;
  const pad = { t: 24, r: 12, b: 40, l: 36 };
  const innerW = w - pad.l - pad.r;
  const innerH = h - pad.t - pad.b;
  const barW = 36;

  return (
    <ModuleShell
      kicker="Early signal vs confirmatory result"
      title="METAOD005 1 mg signal was not confirmed by OPTIONS"
    >
      <div className="grid gap-4 p-4 lg:grid-cols-2">
        <div className="rounded-xl border border-violet-100 bg-violet-50/40 p-4">
          <p className="text-[10px] font-bold uppercase tracking-wide text-violet-600">
            {early.label}
          </p>
          <p className="mt-1 text-xs text-slate-600">{early.caption}</p>
          <svg
            viewBox={`0 0 ${w} ${h}`}
            className="mt-3 h-auto w-full"
            role="img"
            aria-label="METAOD005 mean weight loss at 12 weeks"
          >
            {early.series.map((s, i) => {
              const barH = (s.kg / maxKg) * innerH;
              const cx = pad.l + (innerW / early.series.length) * (i + 0.5);
              return (
                <g key={s.label}>
                  <rect
                    x={cx - barW / 2}
                    y={pad.t + innerH - barH}
                    width={barW}
                    height={barH}
                    rx="3"
                    fill={s.color}
                  />
                  <text
                    x={cx}
                    y={pad.t + innerH - barH - 6}
                    textAnchor="middle"
                    fontSize="11"
                    fontWeight="700"
                    fill={s.color === "#cbd5e1" ? "#64748b" : "#6d28d9"}
                  >
                    −{s.kg} kg
                  </text>
                  <text
                    x={cx}
                    y={h - 14}
                    textAnchor="middle"
                    fontSize="10"
                    fontWeight="600"
                    fill="#64748b"
                  >
                    {s.label}
                  </text>
                </g>
              );
            })}
          </svg>
          <p className="mt-2 text-[11px] leading-relaxed text-slate-600">
            {early.note}
          </p>
        </div>

        <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-4">
          <p className="text-[10px] font-bold uppercase tracking-wide text-amber-800">
            {conf.label}
          </p>
          <p className="mt-1 text-xs text-slate-600">{conf.caption}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {conf.arms.map((arm) => (
              <span
                key={arm}
                className="rounded-full border border-amber-200 bg-white px-3 py-1 text-[11px] font-semibold text-amber-900"
              >
                {arm}
              </span>
            ))}
          </div>
          <p className="mt-4 text-lg font-bold text-amber-950">{conf.result}</p>
          <p className="mt-2 text-[11px] leading-relaxed text-amber-900">
            {conf.note}
          </p>
        </div>
      </div>
    </ModuleShell>
  );
}

export function Aod9604RouteMismatch() {
  const [active, setActive] = useState("oral");
  const col =
    AOD9604_ROUTE_EVIDENCE.find((r) => r.id === active) ||
    AOD9604_ROUTE_EVIDENCE[0];

  return (
    <ModuleShell
      kicker="Route-evidence mismatch"
      title="Oral trial data ≠ subcutaneous commercial protocols"
    >
      <div className="px-4 py-3">
        <ChipGroup
          label="Route"
          options={AOD9604_ROUTE_EVIDENCE}
          value={active}
          onChange={setActive}
        />
      </div>
      <div className="grid gap-3 border-t border-slate-100 p-4 sm:grid-cols-3">
        {AOD9604_ROUTE_EVIDENCE.map((route) => (
          <button
            key={route.id}
            type="button"
            onClick={() => setActive(route.id)}
            className={`rounded-xl border p-3 text-left transition ${
              route.id === active
                ? "border-violet-300 bg-violet-50"
                : "border-slate-200 bg-white hover:border-violet-200"
            }`}
          >
            <p className="text-xs font-bold text-slate-900">{route.label}</p>
            <p
              className={`mt-1 text-[10px] font-semibold uppercase tracking-wide ${
                route.id === "sc"
                  ? "text-amber-700"
                  : route.id === "oral"
                    ? "text-violet-700"
                    : "text-slate-500"
              }`}
            >
              {route.status}
            </p>
          </button>
        ))}
      </div>
      <div className="border-t border-slate-100 px-4 py-4">
        <ul className="space-y-1.5 text-xs text-slate-700">
          {col.items.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-violet-500">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-[11px] font-semibold leading-relaxed text-amber-950">
          {col.takeaway}
        </p>
      </div>
    </ModuleShell>
  );
}

export function Aod9604AdverseEventTable() {
  const [full, setFull] = useState(false);

  return (
    <div className="mt-5">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-base font-bold text-slate-900">
          Safety: Simple View / Full Clinical Data
        </h3>
        <div
          className="inline-flex rounded-lg border border-slate-200 bg-white p-0.5 shadow-sm"
          role="group"
          aria-label="Adverse-event table view"
        >
          <button
            type="button"
            onClick={() => setFull(false)}
            aria-pressed={!full}
            className={`rounded-md px-3 py-1.5 text-[11px] font-semibold transition ${
              !full
                ? "bg-violet-600 text-white"
                : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            Simple view
          </button>
          <button
            type="button"
            onClick={() => setFull(true)}
            aria-pressed={full}
            className={`rounded-md px-3 py-1.5 text-[11px] font-semibold transition ${
              full
                ? "bg-violet-600 text-white"
                : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            Full clinical data
          </button>
        </div>
      </div>

      {!full ? (
        <ul className="space-y-2">
          {AOD9604_AE_SIMPLE.map((item) => (
            <li
              key={item.title}
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm"
            >
              <p className="text-xs font-bold text-slate-800">{item.title}</p>
              <p className="mt-1 text-xs leading-relaxed text-slate-600">
                {item.takeaway}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <div className="space-y-4">
          <DataTable
            table={AOD9604_AE_FULL}
            caption="Common adverse events observed"
          />
          <DataTable
            table={AOD9604_METAOD004}
            caption="METAOD004 7-day dose-specific signal"
          />
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
              OPTIONS denominator mismatch
            </p>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              {AOD9604_DENOMINATORS.map((d) => (
                <div key={d.label}>
                  <p className="text-lg font-bold text-violet-900">{d.value}</p>
                  <p className="text-xs font-semibold text-slate-800">
                    {d.label}
                  </p>
                  <p className="text-[11px] text-slate-500">{d.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="sr-only">
        <DataTable table={AOD9604_AE_FULL} />
        <DataTable table={AOD9604_METAOD004} />
      </div>
    </div>
  );
}

export function Aod9604Denominators() {
  return (
    <ModuleShell
      kicker="Participant counting"
      title="Enrolled ≠ safety population ≠ active-treated"
    >
      <div className="grid gap-3 p-4 sm:grid-cols-3">
        {AOD9604_DENOMINATORS.map((d) => (
          <div
            key={d.label}
            className="rounded-xl border border-slate-200 bg-slate-50 p-4"
          >
            <p className="text-2xl font-bold text-violet-900">{d.value}</p>
            <p className="mt-1 text-xs font-semibold text-slate-800">
              {d.label}
            </p>
            <p className="mt-1 text-[11px] leading-relaxed text-slate-500">
              {d.note}
            </p>
          </div>
        ))}
      </div>
      <p className="border-t border-slate-100 px-4 py-3 text-[11px] leading-relaxed text-slate-600">
        These are not interchangeable denominators. Each number keeps its source
        label rather than being merged into a single false total.
      </p>
    </ModuleShell>
  );
}

export function Aod9604MechanismVisual() {
  const badgeColor = {
    animal: "bg-orange-100 text-orange-800",
    "ex-vivo": "bg-sky-100 text-sky-800",
    "human-biomarker": "bg-emerald-100 text-emerald-800",
    "human-clinical": "bg-violet-100 text-violet-800",
  };

  return (
    <ModuleShell
      kicker="Evidence-layer mechanism"
      title="Plausible pathway ≠ proven weight-loss efficacy"
    >
      <ol className="grid gap-2 p-4 sm:grid-cols-2 lg:grid-cols-4">
        {AOD9604_MECHANISM_NODES.map((node, i) => (
          <li
            key={node.id}
            className={`rounded-xl border px-3 py-3 ${
              node.id === "outcome"
                ? "border-amber-200 bg-amber-50 sm:col-span-2 lg:col-span-4"
                : "border-slate-200 bg-white"
            }`}
          >
            <span className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
              {i + 1}
            </span>
            <p className="mt-1 text-xs font-bold text-slate-900">{node.label}</p>
            <span
              className={`mt-2 inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                badgeColor[node.level] || "bg-slate-100 text-slate-600"
              }`}
            >
              {node.badge}
            </span>
          </li>
        ))}
      </ol>
      <p className="border-t border-slate-100 px-4 py-3 text-xs leading-relaxed text-slate-600">
        Mechanistic plausibility is not clinical effectiveness. OPTIONS failed
        its primary endpoint — a plausible lipolysis pathway does not establish
        sustained human weight loss.
      </p>
    </ModuleShell>
  );
}

export function Aod9604ClaimChecker() {
  const [active, setActive] = useState(AOD9604_CLAIM_CHECKER[0].claim);
  const item =
    AOD9604_CLAIM_CHECKER.find((c) => c.claim === active) ||
    AOD9604_CLAIM_CHECKER[0];

  const verdictTone =
    item.verdict === "False" || item.verdict === "False / misleading"
      ? "bg-rose-100 text-rose-800"
      : item.verdict === "Unsupported" || item.verdict === "Not supported"
        ? "bg-amber-100 text-amber-900"
        : "bg-emerald-100 text-emerald-800";

  return (
    <ModuleShell
      kicker="Claim checker"
      title="Common marketing claims vs the evidence"
    >
      <div className="px-4 py-3">
        <ChipGroup
          label="Claim"
          options={AOD9604_CLAIM_CHECKER.map((c) => ({
            id: c.claim,
            label: c.claim.length > 28 ? `${c.claim.slice(0, 28)}…` : c.claim,
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
        {AOD9604_CLAIM_CHECKER.map((c) => (
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

export function Aod9604TrialExplorer() {
  const [topic, setTopic] = useState("All");
  const [route, setRoute] = useState("All");

  const topics = ["All", ...new Set(AOD9604_TRIALS.map((t) => t.topic))];
  const routes = ["All", ...new Set(AOD9604_TRIALS.map((t) => t.route))];

  const filtered = useMemo(
    () =>
      AOD9604_TRIALS.filter(
        (t) =>
          (topic === "All" || t.topic === topic) &&
          (route === "All" || t.route === route)
      ),
    [topic, route]
  );

  return (
    <ModuleShell
      kicker="Human trial evidence explorer"
      title="METAOD001–006 and LAT8881 pain program"
    >
      <div className="space-y-3 border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Topic"
          options={topics.map((v) => ({ id: v, label: v }))}
          value={topic}
          onChange={setTopic}
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
                  {trial.phase} · {trial.population} · {trial.participants}{" "}
                  participants
                  {trial.activeTreated !== "—"
                    ? ` · ${trial.activeTreated} active-treated`
                    : ""}
                </p>
              </div>
              <div className="flex flex-wrap gap-1">
                <span className="rounded-full bg-violet-100 px-2 py-0.5 text-[10px] font-semibold text-violet-700">
                  {trial.topic}
                </span>
                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600">
                  {trial.route}
                </span>
                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600">
                  {trial.duration}
                </span>
              </div>
            </div>
            <p className="mt-2 text-[11px] text-slate-500">
              <strong className="text-slate-700">Dose:</strong> {trial.dose}
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
                View source →
              </a>
            ) : null}
          </li>
        ))}
      </ul>
      {filtered.length === 0 ? (
        <p className="px-4 py-6 text-center text-xs text-slate-500">
          No trials match the selected filters.
        </p>
      ) : null}
    </ModuleShell>
  );
}
