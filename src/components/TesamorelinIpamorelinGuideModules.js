"use client";

import { useState } from "react";
import Link from "next/link";
import {
  TES_IPA_CLAIMS,
  TES_IPA_COMBO_STATUS,
  TES_IPA_DOSE_ROUTE_ROWS,
  TES_IPA_EVIDENCE_BADGES,
  TES_IPA_GH_TIMELINE,
  TES_IPA_REGULATORY,
  TES_IPA_SAFETY_IPAMORELIN,
  TES_IPA_SAFETY_SIMPLE,
  TES_IPA_SAFETY_TESAMORELIN,
  TES_IPA_VAT_STUDIES,
} from "@/data/tesamorelin-ipamorelin-dosage-guide";
import { TesamorelinFormulationSelector } from "@/components/TesamorelinGuideModules";

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

const LEVEL_BADGE = {
  absent: "bg-rose-100 text-rose-900",
  mechanistic: "bg-amber-100 text-amber-950",
};

export function TesIpaEvidenceBoundary() {
  const [claimId, setClaimId] = useState("vat");
  const claim = TES_IPA_CLAIMS.find((c) => c.id === claimId) || TES_IPA_CLAIMS[0];

  return (
    <ModuleShell
      kicker="Evidence lanes"
      title="Whose evidence is this? — do not assign component results to the stack"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Select a claim"
          options={TES_IPA_CLAIMS.map((c) => ({ id: c.id, label: c.claim }))}
          value={claimId}
          onChange={setClaimId}
        />
      </div>
      <div className="grid gap-0 sm:grid-cols-3">
        {[
          { key: "tesamorelin", label: "Tesamorelin alone", value: claim.tesamorelin },
          { key: "ipamorelin", label: "Ipamorelin alone", value: claim.ipamorelin },
          { key: "combination", label: "Combination", value: claim.combination },
        ].map((col, i) => (
          <div
            key={col.key}
            className={`p-4 ${i < 2 ? "border-b border-slate-100 sm:border-b-0 sm:border-r" : ""} ${
              col.key === "combination" ? "bg-slate-50" : ""
            }`}
          >
            <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
              {col.label}
            </p>
            <p className="mt-2 text-[11px] leading-relaxed text-slate-700">{col.value}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 bg-slate-50 px-4 py-3">
        <span
          className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase ${
            LEVEL_BADGE[claim.level] || "bg-slate-100 text-slate-800"
          }`}
        >
          {claim.level === "absent" ? "No direct evidence" : "Mechanistic only"}
        </span>
        <p className="text-[11px] font-semibold text-amber-950">
          Component trials cannot be summed into combination proof.
        </p>
      </div>
    </ModuleShell>
  );
}

export function TesIpaMechanism() {
  const [mode, setMode] = useState("biology");

  return (
    <ModuleShell
      kicker="Dual-receptor mechanism"
      title="Two pathways converge on pituitary GH — combined response not measured in humans"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="View mode"
          options={[
            { id: "biology", label: "Biology" },
            { id: "outcomes", label: "Demonstrated outcomes" },
          ]}
          value={mode}
          onChange={setMode}
        />
      </div>
      <div className="grid gap-4 p-4 sm:grid-cols-2">
        <div className="rounded-lg border border-violet-200 bg-violet-50 p-3">
          <p className="text-xs font-bold text-violet-900">Tesamorelin</p>
          <p className="mt-1 text-[11px] text-violet-950">GHRH receptor → cAMP/PKA</p>
          <p className="mt-2 text-[10px] text-violet-800">
            Endogenous GH synthesis and pulsatile release
          </p>
          {mode === "outcomes" ? (
            <p className="mt-3 rounded border border-violet-300 bg-white px-2 py-1.5 text-[10px] font-semibold text-violet-900">
              ✓ VAT reduction in HIV lipodystrophy (tesamorelin alone)
            </p>
          ) : null}
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
          <p className="text-xs font-bold text-slate-900">Ipamorelin</p>
          <p className="mt-1 text-[11px] text-slate-700">GHSR1a → PLC / Ca²⁺</p>
          <p className="mt-2 text-[10px] text-slate-600">Acute secretagogue effect</p>
          {mode === "outcomes" ? (
            <p className="mt-3 rounded border border-slate-300 bg-white px-2 py-1.5 text-[10px] font-semibold text-slate-800">
              ✓ Acute IV GH release only — no body-composition outcome
            </p>
          ) : null}
        </div>
      </div>
      <div className="mx-4 mb-4 rounded-lg border border-dashed border-slate-300 bg-white p-3 text-center">
        <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
          Pituitary somatotroph convergence
        </p>
        <p className="mt-1 text-[11px] text-slate-600">GH → IGF-1 → feedback / somatostatin</p>
        {mode === "outcomes" ? (
          <p className="mt-3 rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-[11px] font-bold text-rose-950">
            Combination clinical outcomes: none measured (dashed — hypothesis only)
          </p>
        ) : (
          <p className="mt-3 text-[11px] font-semibold text-amber-950">
            Combined GH response has not been measured in humans.
          </p>
        )}
      </div>
    </ModuleShell>
  );
}

export function TesIpaVatChart() {
  const [expanded, setExpanded] = useState(false);
  const maxAbs = 20;

  return (
    <ModuleShell
      kicker="Tesamorelin-alone VAT"
      title="Week-26 visceral adipose tissue change — adults with HIV lipodystrophy only"
    >
      <p className="border-b border-amber-100 bg-amber-50 px-4 py-2 text-[11px] font-semibold text-amber-950">
        Tesamorelin alone; historical 2 mg formulation. Does not apply to the tesamorelin +
        ipamorelin combination.
      </p>
      <div className="space-y-6 p-4">
        {TES_IPA_VAT_STUDIES.map((study) => (
          <div key={study.id}>
            <p className="text-xs font-bold text-slate-800">{study.label}</p>
            <p className="text-[10px] text-slate-500">
              n={study.nTesa} tesamorelin · n={study.nPlacebo} placebo
            </p>
            <div className="mt-3 space-y-2">
              {[
                { label: "Tesamorelin", pct: study.tesaPct, color: "bg-violet-600" },
                { label: "Placebo", pct: study.placeboPct, color: "bg-slate-300" },
              ].map((bar) => (
                <div key={bar.label} className="flex items-center gap-2">
                  <span className="w-20 shrink-0 text-[10px] font-medium text-slate-600">
                    {bar.label}
                  </span>
                  <div className="relative h-6 flex-1 rounded bg-slate-100">
                    <div
                      className={`absolute top-0 h-full rounded ${bar.color}`}
                      style={{
                        left: bar.pct < 0 ? `${50 + (bar.pct / maxAbs) * 50}%` : "50%",
                        width: `${(Math.abs(bar.pct) / maxAbs) * 50}%`,
                      }}
                    />
                    <div className="absolute left-1/2 top-0 h-full w-px bg-slate-400" />
                  </div>
                  <span className="w-12 shrink-0 text-right text-[11px] font-bold text-slate-800">
                    {bar.pct > 0 ? "+" : ""}
                    {bar.pct}%
                  </span>
                </div>
              ))}
            </div>
            {expanded ? (
              <p className="mt-2 text-[10px] text-slate-600">
                Absolute: tesamorelin {study.tesaCm2} cm² vs placebo {study.placeboCm2 > 0 ? "+" : ""}
                {study.placeboCm2} cm² · treatment difference {study.diffCm2} cm² (95% CI{" "}
                {study.ci})
              </p>
            ) : null}
          </div>
        ))}
      </div>
      <div className="border-t border-slate-100 px-4 py-3">
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="text-[11px] font-semibold text-violet-700 hover:text-violet-900"
        >
          {expanded ? "Hide" : "Show"} absolute cm² changes and confidence intervals
        </button>
      </div>
    </ModuleShell>
  );
}

export function TesIpaDoseRouteMap() {
  const [showAnecdotal, setShowAnecdotal] = useState(false);
  const rows = TES_IPA_DOSE_ROUTE_ROWS.filter((r) => showAnecdotal || r.validated);

  return (
    <ModuleShell
      kicker="Dose and route evidence"
      title="Approved products and human research only — IV cannot be converted to SC blend doses"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 px-4 pt-3">
        <p className="text-[11px] text-slate-500">
          Route, population, and formulation must stay attached to every number.
        </p>
        <button
          type="button"
          onClick={() => setShowAnecdotal((v) => !v)}
          aria-pressed={showAnecdotal}
          className={`rounded-full px-3 py-1 text-[10px] font-semibold ${
            showAnecdotal
              ? "bg-amber-600 text-white"
              : "border border-slate-200 text-slate-600"
          }`}
        >
          {showAnecdotal ? "Hide" : "Show"} unvalidated online rows
        </button>
      </div>
      <div className="overflow-x-auto p-4 pt-2">
        <table className="w-full min-w-[520px] border-collapse text-left text-xs">
          <thead>
            <tr className="border-b border-slate-100 text-[10px] uppercase tracking-wide text-slate-500">
              {["Regimen", "Route", "Dose", "Population", "Status"].map((h) => (
                <th key={h} className="px-2 py-2 font-semibold">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.id}
                className={`border-b border-slate-50 ${!row.validated ? "bg-amber-50/50" : ""}`}
              >
                <td className="px-2 py-2 font-medium text-slate-700">{row.label}</td>
                <td className="px-2 py-2 text-slate-600">{row.route}</td>
                <td className="px-2 py-2 text-slate-600">{row.dose}</td>
                <td className="px-2 py-2 text-slate-600">{row.population}</td>
                <td className="px-2 py-2 font-semibold text-slate-800">{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="border-t border-rose-100 bg-rose-50 px-4 py-3 text-[11px] font-semibold text-rose-950">
        No combination dose calculator — no validated ratio, PK/PD curve, or chronic safety dataset
        exists.
      </p>
    </ModuleShell>
  );
}

export function TesIpaFormulationGuardrail() {
  return (
    <div>
      <div className="mt-2 rounded-lg border border-rose-300 bg-rose-50 px-4 py-2 text-center text-[11px] font-bold uppercase tracking-wide text-rose-950">
        EGRIFTA WR and EGRIFTA SV are not substitutable — never apply to a peptide blend
      </div>
      <TesamorelinFormulationSelector />
    </div>
  );
}

export function TesIpaSafetyToggle() {
  const [source, setSource] = useState("simple");

  return (
    <ModuleShell
      kicker="Safety by source"
      title="Do not pool incompatible adverse-event rates across trials"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Safety view"
          options={[
            { id: "simple", label: "Risk families" },
            { id: "tesamorelin", label: "Tesamorelin trials" },
            { id: "ipamorelin", label: "Ipamorelin IV trial" },
          ]}
          value={source}
          onChange={setSource}
        />
      </div>
      {source === "simple" ? (
        <ul className="divide-y divide-slate-100">
          {TES_IPA_SAFETY_SIMPLE.map((item) => (
            <li key={item.id} className="px-4 py-3">
              <p className="text-xs font-bold text-slate-900">{item.title}</p>
              <dl className="mt-2 grid gap-2 sm:grid-cols-3">
                {[
                  ["Tesamorelin", item.tesamorelin],
                  ["Ipamorelin", item.ipamorelin],
                  ["Combination", item.combo],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="text-[10px] font-semibold uppercase text-slate-400">{k}</dt>
                    <dd className="text-[11px] text-slate-700">{v}</dd>
                  </div>
                ))}
              </dl>
            </li>
          ))}
        </ul>
      ) : (
        <div className="overflow-x-auto p-4">
          {(() => {
            const table =
              source === "tesamorelin" ? TES_IPA_SAFETY_TESAMORELIN : TES_IPA_SAFETY_IPAMORELIN;
            return (
              <>
                <table className="w-full min-w-[360px] border-collapse text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-100 text-[10px] uppercase text-slate-500">
                      {table.headers.map((h) => (
                        <th key={h} className="px-2 py-2 font-semibold">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {table.rows.map((row) => (
                      <tr key={row[0]} className="border-b border-slate-50">
                        {row.map((cell, i) => (
                          <td
                            key={`${row[0]}-${i}`}
                            className={`px-2 py-2 ${i === 0 ? "font-medium text-slate-600" : "text-slate-700"}`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="mt-3 text-[11px] text-slate-600">{table.note}</p>
              </>
            );
          })()}
        </div>
      )}
      <p className="border-t border-amber-100 bg-amber-50 px-4 py-3 text-[11px] font-semibold text-amber-950">
        Combination adverse-event rates are unknown — plausible overlaps only, without invented
        percentages.
      </p>
    </ModuleShell>
  );
}

export function TesIpaGhTimeline() {
  return (
    <ModuleShell
      kicker="Time scales"
      title="Acute GH pharmacology ≠ 26-week VAT outcomes — no combination timeline exists"
    >
      <div className="grid gap-4 p-4 sm:grid-cols-2">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Biomarker lane (hours)
          </p>
          <ul className="mt-2 space-y-2">
            {TES_IPA_GH_TIMELINE.biomarker.map((ev) => (
              <li
                key={ev.label}
                className={`rounded-lg border px-3 py-2 text-[11px] ${
                  ev.lane === "ipa"
                    ? "border-slate-200 bg-slate-50"
                    : "border-violet-200 bg-violet-50"
                }`}
              >
                <span className="font-bold text-slate-800">
                  {ev.week ? `Week ${ev.hour}` : `${ev.hour} h`}
                </span>
                <span className="text-slate-600"> — {ev.label}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Clinical outcome lane (weeks)
          </p>
          <ul className="mt-2 space-y-2">
            {TES_IPA_GH_TIMELINE.outcomes.map((ev) => (
              <li
                key={ev.label}
                className={`rounded-lg border px-3 py-2 text-[11px] ${
                  ev.branch
                    ? "border-amber-200 bg-amber-50"
                    : "border-violet-200 bg-violet-50"
                }`}
              >
                <span className="font-bold text-slate-800">Week {ev.week}</span>
                <span className="text-slate-600"> — {ev.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="border-t border-rose-100 bg-rose-50 px-4 py-3 text-[11px] font-semibold text-rose-950">
        Do not merge these lanes into a week-by-week combination results calendar.
      </p>
    </ModuleShell>
  );
}

export function TesIpaEvidenceBadges() {
  const tones = {
    none: "bg-rose-100 text-rose-900",
    partial: "bg-amber-100 text-amber-950",
    low: "bg-slate-100 text-slate-800",
  };

  return (
    <ModuleShell
      kicker="Evidence badges"
      title="Four lanes — combination evidence is absent"
    >
      <div className="grid gap-3 p-4 sm:grid-cols-2">
        {TES_IPA_EVIDENCE_BADGES.map((b) => (
          <div
            key={b.id}
            className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-3"
          >
            <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
              {b.label}
            </p>
            <span
              className={`mt-2 inline-block rounded-full px-2.5 py-1 text-[11px] font-bold ${tones[b.tone]}`}
            >
              {b.value}
            </span>
          </div>
        ))}
      </div>
    </ModuleShell>
  );
}

export function TesIpaComboStatus() {
  return (
    <ModuleShell
      kicker="Combination trial status"
      title="No human combination study located as of September 2026"
    >
      <dl className="divide-y divide-slate-100">
        {TES_IPA_COMBO_STATUS.map(([k, v]) => (
          <div key={k} className="flex flex-col gap-1 px-4 py-3 sm:flex-row sm:justify-between">
            <dt className="text-[11px] font-medium text-slate-600">{k}</dt>
            <dd className="text-[11px] font-bold text-rose-900">{v}</dd>
          </div>
        ))}
      </dl>
    </ModuleShell>
  );
}

export function TesIpaRegulatoryChecker() {
  const [id, setId] = useState("combo");
  const item = TES_IPA_REGULATORY.find((r) => r.id === id) || TES_IPA_REGULATORY[3];

  return (
    <ModuleShell
      kicker="Regulatory and sport"
      title="Approval belongs to specific products and indications — not every formulation"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Select product or context"
          options={TES_IPA_REGULATORY.map((r) => ({ id: r.id, label: r.label }))}
          value={id}
          onChange={setId}
        />
      </div>
      <div className="space-y-3 px-4 py-4">
        <div className="flex flex-wrap gap-2">
          <span
            className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${
              item.fda === "Approved"
                ? "bg-emerald-100 text-emerald-900"
                : item.fda === "Not approved"
                  ? "bg-rose-100 text-rose-900"
                  : "bg-slate-100 text-slate-800"
            }`}
          >
            FDA: {item.fda}
          </span>
          <span className="rounded-full bg-rose-100 px-2.5 py-1 text-[10px] font-bold text-rose-900">
            Sport: {item.sport}
          </span>
        </div>
        {item.indication ? (
          <p className="text-[11px] text-slate-700">
            <strong>Indication:</strong> {item.indication}
          </p>
        ) : null}
        <p className="text-[11px] leading-relaxed text-slate-600">{item.detail}</p>
        {(id === "egrifta-wr" || id === "egrifta-sv") && (
          <Link
            href="/peptides/tesamorelin"
            className="inline-flex rounded-lg bg-violet-600 px-3 py-2 text-[11px] font-bold text-white hover:bg-violet-700"
          >
            Open full tesamorelin (Egrifta) page
          </Link>
        )}
        {id === "ipamorelin" && (
          <Link
            href="/peptides/ipamorelin"
            className="inline-flex rounded-lg bg-violet-600 px-3 py-2 text-[11px] font-bold text-white hover:bg-violet-700"
          >
            Open ipamorelin page
          </Link>
        )}
      </div>
    </ModuleShell>
  );
}
