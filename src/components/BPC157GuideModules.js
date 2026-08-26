"use client";

import { useMemo, useState } from "react";
import {
  BPC157_AE_FULL,
  BPC157_AE_SIMPLE,
  BPC157_HUMAN_EVIDENCE,
  BPC157_MECHANISM,
  BPC157_REGULATORY,
  BPC157_ROUTES,
  BPC157_STUDIES,
  BPC157_TISSUES,
} from "@/data/bpc-157-dosage-guide";

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

function humanBadge(human) {
  if (human === "uncontrolled")
    return "bg-amber-100 text-amber-900";
  if (human === "registered")
    return "bg-sky-100 text-sky-800";
  return "bg-slate-100 text-slate-600";
}

export function Bpc157TissueMap() {
  const [id, setId] = useState("tendon");
  const tissue =
    BPC157_TISSUES.find((t) => t.id === id) || BPC157_TISSUES[0];

  return (
    <ModuleShell
      kicker="Tissue-recovery evidence map"
      title="Injured-tissue research — not a muscle-gain graphic"
    >
      <div className="px-4 py-3">
        <ChipGroup
          label="Tissue"
          options={BPC157_TISSUES}
          value={id}
          onChange={setId}
        />
      </div>
      <div className="border-t border-slate-100 px-4 py-4">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-sm font-bold text-slate-900">{tissue.label}</p>
          <span
            className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${humanBadge(
              tissue.human
            )}`}
          >
            Human: {tissue.humanLabel}
          </span>
          <span className="rounded-full bg-rose-50 px-2 py-0.5 text-[10px] font-bold text-rose-700">
            Clinical confidence: {tissue.confidence}
          </span>
        </div>
        <p className="mt-3 text-[11px] text-slate-500">
          <strong className="text-slate-700">Models:</strong> {tissue.models}
        </p>
        <p className="mt-2 text-xs leading-relaxed text-violet-900">
          <strong>Reported signal:</strong> {tissue.signal}
        </p>
        <p className="mt-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-[11px] font-semibold text-amber-950">
          Translation warning: rodent healing rates, deliberately created
          injuries, and loading differ substantially from human sports tears or
          tendinopathy.
        </p>
      </div>
      {/* Crawlable full tissue table */}
      <div className="sr-only">
        <table>
          <caption>BPC-157 tissue evidence map</caption>
          <thead>
            <tr>
              <th>Tissue</th>
              <th>Models</th>
              <th>Signal</th>
              <th>Human evidence</th>
              <th>Confidence</th>
            </tr>
          </thead>
          <tbody>
            {BPC157_TISSUES.map((t) => (
              <tr key={t.id}>
                <td>{t.label}</td>
                <td>{t.models}</td>
                <td>{t.signal}</td>
                <td>{t.humanLabel}</td>
                <td>{t.confidence}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ModuleShell>
  );
}

export function Bpc157HumanDashboard() {
  return (
    <ModuleShell
      kicker="Human-evidence dashboard"
      title="Completed reports vs planned trials — do not merge denominators"
    >
      <ul className="grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-3">
        {BPC157_HUMAN_EVIDENCE.map((card) => (
          <li
            key={card.id}
            className={`rounded-xl border p-4 ${
              card.status === "planned"
                ? "border-dashed border-slate-300 bg-slate-50"
                : "border-slate-200 bg-white"
            }`}
          >
            <div className="flex flex-wrap gap-1">
              <span
                className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                  card.status === "planned"
                    ? "bg-sky-100 text-sky-800"
                    : "bg-violet-100 text-violet-800"
                }`}
              >
                {card.status === "planned" ? "Planned" : "Completed"}
              </span>
              <span
                className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                  card.controlled
                    ? "bg-emerald-100 text-emerald-800"
                    : "bg-amber-100 text-amber-900"
                }`}
              >
                {card.controlled ? "Controlled" : "Uncontrolled"}
              </span>
            </div>
            <p className="mt-2 text-xs font-bold text-slate-900">{card.label}</p>
            <p className="mt-1 text-2xl font-bold text-violet-900">
              n={card.n}
              {card.status === "planned" ? (
                <span className="ml-1 text-sm font-semibold text-slate-400">
                  planned
                </span>
              ) : null}
            </p>
            <p className="mt-1 text-[11px] text-slate-600">{card.detail}</p>
            <p className="mt-2 text-[11px] leading-relaxed text-slate-500">
              {card.note}
            </p>
          </li>
        ))}
      </ul>
      <p className="border-t border-amber-100 bg-amber-50 px-4 py-2 text-[11px] font-semibold text-amber-950">
        Never combine planned enrollment with exposed participants into a single
        “clinical evidence” total.
      </p>
    </ModuleShell>
  );
}

export function Bpc157RouteMatrix() {
  const [id, setId] = useState("sc");
  const route = BPC157_ROUTES.find((r) => r.id === id) || BPC157_ROUTES[0];

  return (
    <ModuleShell
      kicker="Route–evidence matrix"
      title="Oral, injection, and local routes are not interchangeable"
    >
      <div className="px-4 py-3">
        <ChipGroup
          label="Route"
          options={BPC157_ROUTES}
          value={id}
          onChange={setId}
        />
      </div>
      <dl className="divide-y divide-slate-100 border-t border-slate-100">
        <div className="px-4 py-3">
          <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
            Human evidence
          </dt>
          <dd className="mt-0.5 text-xs font-semibold text-slate-800">
            {route.human}
          </dd>
        </div>
        <div className="px-4 py-3">
          <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
            Preclinical evidence
          </dt>
          <dd className="mt-0.5 text-xs font-semibold text-slate-800">
            {route.animal}
          </dd>
        </div>
        <div className="bg-amber-50/60 px-4 py-3">
          <dt className="text-[10px] font-semibold uppercase tracking-wide text-amber-700">
            Not established
          </dt>
          <dd className="mt-0.5 text-xs font-semibold text-amber-950">
            {route.unknown}
          </dd>
        </div>
      </dl>
    </ModuleShell>
  );
}

export function Bpc157MechanismVisual() {
  const levelColor = {
    cell: "bg-sky-100 text-sky-800",
    animal: "bg-orange-100 text-orange-800",
    "cell-animal": "bg-violet-100 text-violet-800",
  };

  return (
    <ModuleShell
      kicker="Mechanism visualization"
      title="Pleiotropic injury-response pathways — not proven regeneration"
    >
      <div className="px-4 pt-4 text-center">
        <span className="inline-block rounded-full bg-violet-600 px-4 py-2 text-xs font-bold text-white">
          BPC-157
        </span>
      </div>
      <ul className="grid gap-2 p-4 sm:grid-cols-2 lg:grid-cols-3">
        {BPC157_MECHANISM.map((node) => (
          <li
            key={node.id}
            className="rounded-xl border border-slate-200 bg-white px-3 py-3"
          >
            <p className="text-xs font-bold text-slate-900">{node.label}</p>
            <p className="mt-1 text-[11px] leading-relaxed text-slate-600">
              {node.effect}
            </p>
            <span
              className={`mt-2 inline-block rounded-full px-2 py-0.5 text-[9px] font-semibold ${
                levelColor[node.level] || "bg-slate-100 text-slate-600"
              }`}
            >
              {node.level === "cell-animal"
                ? "Cell / animal"
                : node.level === "cell"
                  ? "Cell"
                  : "Animal"}
              {" · no validated human biomarker"}
            </span>
          </li>
        ))}
      </ul>
    </ModuleShell>
  );
}

export function Bpc157AdverseEventTable() {
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
          aria-label="Safety table view"
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
          {BPC157_AE_SIMPLE.map((item) => (
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
        <DataTable
          table={BPC157_AE_FULL}
          caption="Observed human datasets"
        />
      )}

      <div className="sr-only">
        <DataTable table={BPC157_AE_FULL} />
      </div>
    </div>
  );
}

export function Bpc157RegulatoryTimeline() {
  return (
    <ModuleShell
      kicker="Regulatory timeline"
      title="WADA prohibition, FDA concerns, and a nonbinding advisory vote"
    >
      <ol className="relative space-y-0 border-l-2 border-violet-200 ml-6 my-4">
        {BPC157_REGULATORY.map((item) => (
          <li key={item.date} className="relative pb-5 pl-6 last:pb-2">
            <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-violet-500 bg-white" />
            <p className="text-[10px] font-bold uppercase tracking-wide text-violet-600">
              {item.date}
            </p>
            <p className="mt-0.5 text-xs font-bold text-slate-900">
              {item.title}
            </p>
            <p className="mt-1 text-[11px] leading-relaxed text-slate-600">
              {item.detail}
            </p>
          </li>
        ))}
      </ol>
      <p className="border-t border-amber-100 bg-amber-50 px-4 py-3 text-[11px] font-semibold text-amber-950">
        Advisory recommendations are nonbinding. Compounding eligibility is{" "}
        <strong>not</strong> FDA approval of safety or effectiveness.
      </p>
    </ModuleShell>
  );
}

export function Bpc157StudyExplorer() {
  const [tissue, setTissue] = useState("All");
  const [species, setSpecies] = useState("All");

  const tissues = ["All", ...new Set(BPC157_STUDIES.map((t) => t.tissue))];
  const speciesOpts = [
    "All",
    ...new Set(BPC157_STUDIES.map((t) => t.species)),
  ];

  const filtered = useMemo(
    () =>
      BPC157_STUDIES.filter(
        (t) =>
          (tissue === "All" || t.tissue === tissue) &&
          (species === "All" || t.species === species)
      ),
    [tissue, species]
  );

  return (
    <ModuleShell
      kicker="Injury-model study explorer"
      title="Primary studies and human reports"
    >
      <div className="space-y-3 border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Tissue"
          options={tissues.map((v) => ({ id: v, label: v }))}
          value={tissue}
          onChange={setTissue}
        />
        <ChipGroup
          label="Species"
          options={speciesOpts.map((v) => ({ id: v, label: v }))}
          value={species}
          onChange={setSpecies}
        />
      </div>
      <ul className="divide-y divide-slate-100">
        {filtered.map((study) => (
          <li key={study.id} className="px-4 py-4">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <p className="text-sm font-bold text-slate-900">{study.name}</p>
                <p className="text-[11px] text-slate-500">
                  {study.authors} · {study.year}
                </p>
              </div>
              <div className="flex flex-wrap gap-1">
                <span className="rounded-full bg-violet-100 px-2 py-0.5 text-[10px] font-semibold text-violet-700">
                  {study.tissue}
                </span>
                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600">
                  {study.species}
                </span>
                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600">
                  {study.route}
                </span>
              </div>
            </div>
            <p className="mt-2 text-[11px] text-slate-500">
              <strong className="text-slate-700">Injury model:</strong>{" "}
              {study.injury}
            </p>
            <p className="mt-1 text-xs font-semibold text-violet-800">
              {study.result}
            </p>
            <p className="mt-1 text-[11px] text-slate-500">{study.limitation}</p>
            {study.href ? (
              <a
                href={study.href}
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
          No studies match the selected filters.
        </p>
      ) : null}
    </ModuleShell>
  );
}
