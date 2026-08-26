"use client";

import { useMemo, useState } from "react";
import {
  TA1_THYMALIN_AE_FULL,
  TA1_THYMALIN_AE_SIMPLE,
  TA1_THYMALIN_CLAIMS,
  TA1_THYMALIN_COMBO_STATUS,
  TA1_THYMALIN_COMPARE,
  TA1_THYMALIN_CUMULATIVE,
  TA1_THYMALIN_EVIDENCE_LADDER,
  TA1_THYMALIN_IDENTITY,
  TA1_THYMALIN_PROTOCOL_PHASES,
  TA1_THYMALIN_TEMPLATE,
  ta1ThymalinAmountFromVial,
} from "@/data/thymosin-alpha-1-thymalin-dosage-guide";

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

export function Ta1ThymalinIdentityGate() {
  const [id, setId] = useState("separate-correct");
  const card =
    TA1_THYMALIN_IDENTITY.find((c) => c.id === id) ||
    TA1_THYMALIN_IDENTITY[0];

  return (
    <ModuleShell
      kicker="Identity gate"
      title="Confirm separate Tα1 + Thymalin — not thymulin, Epithalamin stacks, or unlabeled complexes"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Identity check"
          options={TA1_THYMALIN_IDENTITY.map((c) => ({
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

export function Ta1ThymalinComboStatus() {
  return (
    <ModuleShell
      kicker="Exact-combination evidence"
      title="No controlled study of the exact Tα1 + Thymalin pair was located"
    >
      <dl className="divide-y divide-slate-100">
        {TA1_THYMALIN_COMBO_STATUS.map(([q, a]) => (
          <div
            key={q}
            className="flex items-start justify-between gap-4 px-4 py-2.5"
          >
            <dt className="text-xs text-slate-500">{q}</dt>
            <dd className="max-w-[55%] text-right text-xs font-bold text-teal-800">
              {a}
            </dd>
          </div>
        ))}
      </dl>
    </ModuleShell>
  );
}

export function Ta1ThymalinProtocolTimeline() {
  const [id, setId] = useState("week1");
  const phase =
    TA1_THYMALIN_PROTOCOL_PHASES.find((p) => p.id === id) ||
    TA1_THYMALIN_PROTOCOL_PHASES[1];
  const t = TA1_THYMALIN_TEMPLATE;

  return (
    <ModuleShell
      kicker="Fixed research template"
      title={`${t.ta1Mg} mg SC BIW × ${t.ta1Weeks} weeks + ${t.thymalinMg} mg IM daily × ${t.thymalinDays} days — separate vials`}
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Protocol phase"
          options={TA1_THYMALIN_PROTOCOL_PHASES.map((p) => ({
            id: p.id,
            label: p.phase,
          }))}
          value={id}
          onChange={setId}
        />
      </div>
      <div className="px-4 py-4">
        <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
          {phase.days}
        </p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-teal-100 bg-teal-50 px-3 py-3">
            <p className="text-[10px] font-bold uppercase tracking-wide text-teal-700">
              Thymosin Alpha-1
            </p>
            <p className="mt-1 text-sm font-bold text-teal-900">{phase.ta1}</p>
          </div>
          <div className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-3">
            <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
              Thymalin
            </p>
            <p className="mt-1 text-sm font-bold text-slate-900">
              {phase.thymalin}
            </p>
          </div>
        </div>
        <p className="mt-3 text-[11px] text-slate-600">{phase.purpose}</p>
      </div>
      <div className="overflow-x-auto border-t border-slate-100">
        <table className="w-full min-w-[420px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2 font-semibold">Measure</th>
              <th className="px-3 py-2 font-semibold">Tα1</th>
              <th className="px-3 py-2 font-semibold">Thymalin</th>
            </tr>
          </thead>
          <tbody>
            {TA1_THYMALIN_CUMULATIVE.map((row) => (
              <tr key={row.measure} className="border-t border-slate-50">
                <td className="px-3 py-2 font-medium text-slate-800">
                  {row.measure}
                </td>
                <td className="px-3 py-2 text-slate-600">{row.ta1}</td>
                <td className="px-3 py-2 font-semibold text-teal-800">
                  {row.thymalin}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="border-t border-amber-100 bg-amber-50 px-4 py-3 text-[11px] font-semibold text-amber-950">
        Pair itself untested. Prefer single-dose Tα1 vials — multiweek use of one
        reconstituted 10 mg vial needs product-specific stability data (reviewed
        free-base in-use ~2–7 days at 4°C).
      </p>
    </ModuleShell>
  );
}

export function Ta1ThymalinReconCalc() {
  const [component, setComponent] = useState("ta1");
  const [vialPreset, setVialPreset] = useState("1.6");
  const [diluent, setDiluent] = useState("1");
  const [target, setTarget] = useState("1.6");

  const vialOptions =
    component === "ta1"
      ? [
          { id: "1.6", label: "1.6 mg vial", ml: "1" },
          { id: "10", label: "10 mg vial", ml: "5" },
        ]
      : [
          { id: "10", label: "10 mg vial", ml: "2" },
        ];

  const diluentOptions =
    component === "ta1"
      ? vialPreset === "1.6"
        ? ["1"]
        : ["2", "3", "5", "6.25"]
      : ["1", "2", "2.5"];

  const result = useMemo(() => {
    return ta1ThymalinAmountFromVial({
      component,
      vialMg: Number(vialPreset),
      diluentMl: Number(diluent),
      targetMg: Number(target),
    });
  }, [component, vialPreset, diluent, target]);

  return (
    <ModuleShell
      kicker="Separate-vial reconstitution"
      title="Tα1 and Thymalin calculators — never co-formulate"
    >
      <div className="space-y-3 border-b border-slate-100 px-4 py-3">
        <div>
          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Component
          </p>
          <ChipGroup
            label="Component"
            options={[
              { id: "ta1", label: "Thymosin Alpha-1" },
              { id: "thymalin", label: "Thymalin extract" },
            ]}
            value={component}
            onChange={(v) => {
              setComponent(v);
              if (v === "ta1") {
                setVialPreset("1.6");
                setDiluent("1");
                setTarget("1.6");
              } else {
                setVialPreset("10");
                setDiluent("2");
                setTarget("10");
              }
            }}
          />
        </div>
        <div>
          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Vial
          </p>
          <ChipGroup
            label="Vial"
            options={vialOptions.map((o) => ({ id: o.id, label: o.label }))}
            value={vialPreset}
            onChange={(v) => {
              setVialPreset(v);
              const opt = vialOptions.find((o) => o.id === v);
              if (opt) setDiluent(opt.ml);
              if (component === "ta1") setTarget("1.6");
              else setTarget("10");
            }}
          />
        </div>
        <div>
          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Final volume
          </p>
          <ChipGroup
            label="Diluent"
            options={diluentOptions.map((ml) => ({
              id: ml,
              label: `${ml} mL`,
            }))}
            value={diluent}
            onChange={setDiluent}
          />
        </div>
        <label className="block text-[11px] font-semibold text-slate-700">
          Target amount (mg)
          <input
            type="number"
            min="0"
            step="0.1"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-900"
          />
        </label>
      </div>
      {result ? (
        <div className="px-4 py-4">
          <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
            {result.concMgPerMl.toFixed(2)} mg/mL · volume{" "}
            {result.volumeMl.toFixed(3)} mL
          </p>
          <p className="mt-1 text-2xl font-bold text-teal-800">
            {result.units.toFixed(1)} U-100 volume units
          </p>
          <p className="mt-2 text-[11px] text-slate-600">
            Units are volume markings only — they do not establish route.{" "}
            {component === "thymalin"
              ? "Registered / cited clinical exposure uses IM."
              : "Human Tα1 trials primarily use SC."}
          </p>
          {result.exceedsTa1Anchor ? (
            <p className="mt-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-[11px] font-semibold text-amber-950">
              Concentration exceeds the ~2 mg/mL Tα1 characterization anchor from
              FDA-reviewed clinical references. Arithmetic is valid; formulation
              support is missing.
            </p>
          ) : null}
          {component === "thymalin" && result.volumeMl > 1 ? (
            <p className="mt-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-[11px] font-semibold text-amber-950">
              Volume exceeds a typical 1 mL U-100 syringe. Do not split or change
              route merely to fit a device without protocol support.
            </p>
          ) : null}
        </div>
      ) : null}
    </ModuleShell>
  );
}

export function Ta1ThymalinComplexWarning() {
  const [drawMg, setDrawMg] = useState("2");
  const draw = Number(drawMg);
  const valid = Number.isFinite(draw) && draw > 0;

  return (
    <ModuleShell
      kicker="Complex-vial trap"
      title='A 10 mg “TA1 complex” without a ratio cannot yield a known Tα1 or Thymalin dose'
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <label className="block text-[11px] font-semibold text-slate-700">
          Claimed draw from unlabeled-ratio 10 mg complex (mg total)
          <input
            type="number"
            min="0"
            step="0.5"
            value={drawMg}
            onChange={(e) => setDrawMg(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-900"
          />
        </label>
      </div>
      <div className="grid gap-3 p-4 sm:grid-cols-3">
        <div className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-3">
          <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Total blend
          </p>
          <p className="mt-1 text-lg font-bold text-slate-900">
            {valid ? `${draw} mg` : "—"}
          </p>
        </div>
        <div className="rounded-lg border border-amber-100 bg-amber-50 px-3 py-3">
          <p className="text-[10px] font-bold uppercase tracking-wide text-amber-800">
            Tα1 amount
          </p>
          <p className="mt-1 text-lg font-bold text-amber-950">Unknown</p>
        </div>
        <div className="rounded-lg border border-amber-100 bg-amber-50 px-3 py-3">
          <p className="text-[10px] font-bold uppercase tracking-wide text-amber-800">
            Thymalin extract
          </p>
          <p className="mt-1 text-lg font-bold text-amber-950">Unknown</p>
        </div>
      </div>
      <p className="border-t border-slate-100 px-4 py-3 text-[11px] text-slate-600">
        Without a verified component ratio and independent assay, the draw cannot
        be mapped to 1.6 mg Tα1 or 10 mg Thymalin extract. Prefer separate labeled
        products.
      </p>
    </ModuleShell>
  );
}

export function Ta1ThymalinClinicalVsAnecdotal() {
  const { clinical, community, complex } = TA1_THYMALIN_COMPARE;

  return (
    <ModuleShell
      kicker="Protocol comparison"
      title="Evidence-anchored template vs online stack vs unlabeled complex"
    >
      <div className="grid gap-0 lg:grid-cols-3">
        {[clinical, community, complex].map((col, idx) => (
          <div
            key={col.title}
            className={`p-4 ${
              idx === 0
                ? "border-b border-slate-100 lg:border-b-0 lg:border-r"
                : idx === 1
                  ? "border-b border-slate-100 bg-slate-50 lg:border-b-0 lg:border-r"
                  : ""
            }`}
          >
            <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
              {col.title}
            </p>
            <p className="mt-1 text-sm font-bold text-teal-800">{col.status}</p>
            <dl className="mt-3 space-y-2">
              {col.rows.map(([k, v]) => (
                <div key={k}>
                  <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                    {k}
                  </dt>
                  <dd className="text-[11px] text-slate-700">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </ModuleShell>
  );
}

export function Ta1ThymalinClaimChecker() {
  const [open, setOpen] = useState(TA1_THYMALIN_CLAIMS[0].id);
  const card =
    TA1_THYMALIN_CLAIMS.find((c) => c.id === open) || TA1_THYMALIN_CLAIMS[0];

  return (
    <ModuleShell
      kicker="Claim checker"
      title="Common stack claims vs the evidence record"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Claims"
          options={TA1_THYMALIN_CLAIMS.map((c) => ({
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

export function Ta1ThymalinEvidenceLadder() {
  return (
    <ModuleShell
      kicker="Evidence ladder"
      title="Confidence for the exact Tα1 + Thymalin protocol"
    >
      <ol className="divide-y divide-slate-100">
        {TA1_THYMALIN_EVIDENCE_LADDER.map((row) => (
          <li
            key={row.level}
            className="flex items-start gap-3 px-4 py-3"
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-600 text-[11px] font-bold text-white">
              {row.level}
            </span>
            <div>
              <p className="text-xs font-semibold text-slate-900">
                {row.evidence}
              </p>
              <p className="mt-0.5 text-[11px] text-slate-600">
                {row.confidence}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </ModuleShell>
  );
}

export function Ta1ThymalinAdverseEventTable() {
  const [mode, setMode] = useState("simple");

  return (
    <ModuleShell
      kicker="Safety monitoring"
      title="Exact-combination incidence unknown — track local, allergic, immune, and extract risks"
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
          {TA1_THYMALIN_AE_SIMPLE.map((row) => (
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
          {TA1_THYMALIN_AE_FULL.map((row) => (
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
