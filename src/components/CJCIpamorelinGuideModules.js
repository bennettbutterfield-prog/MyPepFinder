"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CJC_IPA_AE_FULL,
  CJC_IPA_AE_SIMPLE,
  CJC_IPA_CLAIMS,
  CJC_IPA_CLINICAL_VS_ANECDOTAL,
  CJC_IPA_COMBO_STATUS,
  CJC_IPA_DAC_GATE,
  CJC_IPA_EVIDENCE_BADGES,
  CJC_IPA_EVIDENCE_LADDER,
  CJC_IPA_RATIOS,
} from "@/data/cjc-1295-no-dac-ipamorelin-dosage-guide";

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

const BADGE_TONES = {
  none: "bg-rose-100 text-rose-900",
  partial: "bg-amber-100 text-amber-950",
  low: "bg-slate-100 text-slate-800",
};

export function CjcIpaDacGate() {
  const [id, setId] = useState("no-dac");
  const card = CJC_IPA_DAC_GATE.find((c) => c.id === id) || CJC_IPA_DAC_GATE[0];

  return (
    <ModuleShell
      kicker="DAC or No DAC?"
      title="Confirm Modified GRF 1-29 before reading combination amounts"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="CJC identity"
          options={CJC_IPA_DAC_GATE.map((c) => ({ id: c.id, label: c.label }))}
          value={id}
          onChange={setId}
        />
      </div>
      <div className="px-4 py-4">
        <p className="text-sm font-bold text-slate-900">{card.verdict}</p>
        <p className="mt-2 text-[11px] leading-relaxed text-slate-600">
          {card.detail}
        </p>
        {card.href && card.cta ? (
          <Link
            href={card.href}
            className="mt-3 inline-flex rounded-lg bg-violet-600 px-3 py-2 text-[11px] font-bold text-white hover:bg-violet-700"
          >
            {card.cta}
          </Link>
        ) : (
          <p className="mt-3 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-[11px] font-semibold text-emerald-950">
            Stay on this page for No DAC + ipamorelin evidence and anecdotal
            pairings.
          </p>
        )}
      </div>
    </ModuleShell>
  );
}

export function CjcIpaEvidenceBadges() {
  return (
    <ModuleShell
      kicker="Evidence badges"
      title="Four lanes — do not collapse them into one “dose chart”"
    >
      <div className="grid gap-3 p-4 sm:grid-cols-2">
        {CJC_IPA_EVIDENCE_BADGES.map((b) => (
          <div
            key={b.id}
            className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-3"
          >
            <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
              {b.label}
            </p>
            <span
              className={`mt-2 inline-block rounded-full px-2.5 py-1 text-[11px] font-bold ${
                BADGE_TONES[b.tone] || BADGE_TONES.low
              }`}
            >
              {b.value}
            </span>
          </div>
        ))}
      </div>
    </ModuleShell>
  );
}

export function CjcIpaComboStatus() {
  return (
    <ModuleShell
      kicker="Exact-combination evidence"
      title="No controlled human trial of the exact combination was identified"
    >
      <dl className="divide-y divide-slate-100">
        {CJC_IPA_COMBO_STATUS.map(([q, a]) => (
          <div
            key={q}
            className="flex items-start justify-between gap-4 px-4 py-2.5"
          >
            <dt className="text-xs text-slate-500">{q}</dt>
            <dd className="text-right text-xs font-bold text-violet-800">{a}</dd>
          </div>
        ))}
      </dl>
      <p className="border-t border-amber-100 bg-amber-50 px-4 py-3 text-[11px] font-semibold text-amber-950">
        Seized-product detection confirms market presence — not dosing,
        efficacy, or safety.
      </p>
    </ModuleShell>
  );
}

export function CjcIpaRatioVisual() {
  const [id, setId] = useState("1-2");
  const ratio = CJC_IPA_RATIOS.find((r) => r.id === id) || CJC_IPA_RATIOS[1];
  const modPct = Math.round((ratio.modGrf / ratio.total) * 100);
  const ipaPct = 100 - modPct;

  return (
    <ModuleShell
      kicker="Ratio visual (by mass)"
      title="What 1:1, 1:2, and 1:3 mean — none is recommended"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Mass ratio"
          options={CJC_IPA_RATIOS.map((r) => ({ id: r.id, label: r.label }))}
          value={id}
          onChange={setId}
        />
      </div>
      <div className="px-4 py-4">
        <p className="text-sm font-bold text-slate-900">{ratio.shorthand}</p>
        <div className="mt-3 flex h-3 overflow-hidden rounded-full bg-slate-100">
          <div
            className="bg-violet-600"
            style={{ width: `${modPct}%` }}
            title="Modified GRF 1-29"
          />
          <div
            className="bg-slate-400"
            style={{ width: `${ipaPct}%` }}
            title="Ipamorelin"
          />
        </div>
        <div className="mt-2 flex flex-wrap gap-4 text-[11px] text-slate-600">
          <span>
            <span className="mr-1 inline-block h-2 w-2 rounded-full bg-violet-600" />
            Modified GRF 1-29: <strong>{ratio.modGrf} mcg</strong>
          </span>
          <span>
            <span className="mr-1 inline-block h-2 w-2 rounded-full bg-slate-400" />
            Ipamorelin: <strong>{ratio.ipa} mcg</strong>
          </span>
          <span>
            Total mass: <strong>{ratio.total} mcg</strong> (not one interchangeable
            dose)
          </span>
        </div>
        <p className="mt-3 text-[11px] leading-relaxed text-slate-600">
          {ratio.note}
        </p>
        <p className="mt-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-[11px] font-semibold text-amber-950">
          No ratio is labeled recommended. Display both components — never total
          mcg alone.
        </p>
      </div>
    </ModuleShell>
  );
}

export function CjcIpaClinicalVsAnecdotal() {
  const c = CJC_IPA_CLINICAL_VS_ANECDOTAL.clinical;
  const a = CJC_IPA_CLINICAL_VS_ANECDOTAL.anecdotal;

  return (
    <ModuleShell
      kicker="Evidence split"
      title="Complete lack of clinical overlap with online SC blends"
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
      <p className="border-t border-amber-100 bg-amber-50 px-4 py-3 text-[11px] font-semibold text-amber-950">
        IV weight-based acute/postoperative ipamorelin ≠ fixed SC microgram
        combination over months.
      </p>
    </ModuleShell>
  );
}

export function CjcIpaClaimChecker() {
  const [open, setOpen] = useState("saturation");

  return (
    <ModuleShell
      kicker="Myth / claim checker"
      title="Saturation, timing, cycling, and “safer than GH” claims"
    >
      <ul className="divide-y divide-slate-100">
        {CJC_IPA_CLAIMS.map((c) => {
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

export function CjcIpaEvidenceLadder() {
  return (
    <ModuleShell
      kicker="Dosage evidence ladder"
      title="Exact combination sits at the bottom of the evidence stack"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Evidence level</th>
              <th className="px-3 py-2.5 font-semibold">What exists</th>
              <th className="px-3 py-2.5 font-semibold">Confidence</th>
            </tr>
          </thead>
          <tbody>
            {CJC_IPA_EVIDENCE_LADDER.map((row) => (
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

export function CjcIpaAdverseEventTable() {
  const [full, setFull] = useState(false);

  return (
    <ModuleShell
      kicker="Safety findings"
      title="Exact-combination AE rates unknown — class and component context only"
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
            {(full ? CJC_IPA_AE_FULL : CJC_IPA_AE_SIMPLE).map((row) => (
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
      <p className="border-t border-amber-100 bg-amber-50 px-4 py-3 text-[11px] font-semibold text-amber-950">
        Calling the response “pulsatile” or “physiologic” does not prove that
        combined exposure is safe.
      </p>
    </ModuleShell>
  );
}
