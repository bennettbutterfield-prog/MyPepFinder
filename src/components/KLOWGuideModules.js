"use client";

import { useMemo, useState } from "react";
import {
  KLOW_AE_FULL,
  KLOW_AE_SIMPLE,
  KLOW_COMBO_STATUS,
  KLOW_COMPARE,
  KLOW_COMPOSITION,
  KLOW_CUMULATIVE,
  KLOW_EVIDENCE_LADDER,
  KLOW_IDENTITY,
  KLOW_PROTOCOL_PHASES,
  klowComponentsFromTotalMg,
} from "@/data/klow-dosage-guide";

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

function formatMg(mg) {
  if (mg >= 1) return `${mg.toFixed(mg % 1 === 0 ? 0 : 2)} mg`;
  return `${(mg * 1000).toFixed(0)} mcg`;
}

export function KlowComposition() {
  return (
    <ModuleShell
      kicker="Standard vial"
      title="80 mg · 5:1:1:1 — GHK-Cu is the 50 mg component"
    >
      <div className="space-y-3 px-4 py-4">
        {KLOW_COMPOSITION.map((c) => (
          <div key={c.id}>
            <div className="mb-1 flex justify-between gap-3 text-[11px]">
              <span className="font-semibold text-slate-800">
                {c.name} · {c.mg} mg
              </span>
              <span className="font-bold text-violet-800">{c.pct}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-violet-500"
                style={{ width: `${c.pct}%` }}
              />
            </div>
            <p className="mt-1 text-[10px] text-slate-500">{c.theme}</p>
          </div>
        ))}
      </div>
      <p className="border-t border-amber-100 bg-amber-50 px-4 py-3 text-[11px] font-semibold text-amber-950">
        Some pages reverse prose order and wrongly assign 50 mg to BPC-157.
        Confirm the label.
      </p>
    </ModuleShell>
  );
}

export function KlowIdentityGate() {
  const [id, setId] = useState("unsure");
  const card = KLOW_IDENTITY.find((c) => c.id === id) || KLOW_IDENTITY[3];

  return (
    <ModuleShell
      kicker="Identity gate"
      title="Confirm TB-500 fragment and GHK-Cu before trusting unit charts"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Identity check"
          options={KLOW_IDENTITY.map((c) => ({ id: c.id, label: c.label }))}
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

export function KlowComboStatus() {
  return (
    <ModuleShell
      kicker="Exact-combination evidence"
      title="No controlled study of the 50/10/10/10 blend was identified"
    >
      <dl className="divide-y divide-slate-100">
        {KLOW_COMBO_STATUS.map(([q, a]) => (
          <div
            key={q}
            className="flex items-start justify-between gap-4 px-4 py-2.5"
          >
            <dt className="text-xs text-slate-500">{q}</dt>
            <dd className="text-right text-xs font-bold text-violet-800">{a}</dd>
          </div>
        ))}
      </dl>
    </ModuleShell>
  );
}

export function KlowComponentBreakdown() {
  const presets = [1, 2, 3, 4, 5, 6];
  const [total, setTotal] = useState(2);
  const parts = klowComponentsFromTotalMg(total);

  return (
    <ModuleShell
      kicker="Per-component breakdown"
      title="Always translate total blend mass into four labeled amounts"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Total blend (mg)"
          options={presets.map((n) => ({ id: String(n), label: `${n} mg` }))}
          value={String(total)}
          onChange={(v) => setTotal(Number(v))}
        />
      </div>
      {parts ? (
        <div className="grid gap-3 p-4 sm:grid-cols-2">
          <div className="rounded-lg border border-violet-100 bg-violet-50 px-3 py-3">
            <p className="text-[10px] font-bold uppercase tracking-wide text-violet-700">
              GHK-Cu (62.5%)
            </p>
            <p className="mt-1 text-lg font-bold text-violet-900">
              {formatMg(parts.ghkCuMg)}
            </p>
          </div>
          {[
            ["KPV", parts.kpvMcg],
            ["BPC-157", parts.bpcMcg],
            ["TB-500", parts.tbMcg],
          ].map(([name, mcg]) => (
            <div
              key={name}
              className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-3"
            >
              <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
                {name} (12.5%)
              </p>
              <p className="mt-1 text-lg font-bold text-slate-900">
                {mcg.toFixed(0)} mcg
              </p>
            </div>
          ))}
        </div>
      ) : null}
      <p className="border-t border-slate-100 px-4 py-3 text-[11px] text-slate-600">
        Applies only to an authentic 50/10/10/10 vial. Diluent changes draw
        volume — not these mass ratios.
      </p>
    </ModuleShell>
  );
}

export function KlowProtocolTimeline() {
  const [id, setId] = useState("loading");
  const phase =
    KLOW_PROTOCOL_PHASES.find((p) => p.id === id) || KLOW_PROTOCOL_PHASES[0];
  const parts =
    phase.totalMg > 0 ? klowComponentsFromTotalMg(phase.totalMg) : null;

  return (
    <ModuleShell
      kicker="12-week front-loaded protocol"
      title="Community convention — not clinically validated"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Protocol phase"
          options={KLOW_PROTOCOL_PHASES.map((p) => ({
            id: p.id,
            label: p.phase,
          }))}
          value={id}
          onChange={setId}
        />
      </div>
      <div className="px-4 py-4">
        <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
          Weeks {phase.weeks}
        </p>
        <p className="mt-1 text-2xl font-bold text-violet-800">
          {phase.totalMg > 0 ? `${phase.totalMg} mg / admin` : "Washout"}
        </p>
        <p className="mt-1 text-[11px] text-slate-600">{phase.schedule}</p>
        <p className="mt-2 text-[11px] text-slate-600">{phase.purpose}</p>
        {parts ? (
          <p className="mt-3 text-[11px] font-semibold text-slate-800">
            Per draw: GHK-Cu {formatMg(parts.ghkCuMg)}; KPV / BPC-157 / TB-500{" "}
            {parts.kpvMcg.toFixed(0)} mcg each · Weekly total blend ≈{" "}
            {phase.weeklyMg} mg
          </p>
        ) : null}
      </div>
      <div className="overflow-x-auto border-t border-slate-100">
        <table className="w-full min-w-[480px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2 font-semibold">Component</th>
              <th className="px-3 py-2 font-semibold">Loading</th>
              <th className="px-3 py-2 font-semibold">Maintenance</th>
              <th className="px-3 py-2 font-semibold">Full cycle</th>
            </tr>
          </thead>
          <tbody>
            {KLOW_CUMULATIVE.map((row) => (
              <tr key={row.component} className="border-t border-slate-50">
                <td className="px-3 py-2 font-medium text-slate-800">
                  {row.component}
                </td>
                <td className="px-3 py-2 text-slate-600">{row.loading}</td>
                <td className="px-3 py-2 text-slate-600">{row.maintenance}</td>
                <td className="px-3 py-2 font-semibold text-violet-800">
                  {row.cycle}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ModuleShell>
  );
}

export function KlowReconCalc() {
  const [diluent, setDiluent] = useState("2");
  const [units, setUnits] = useState("10");

  const result = useMemo(() => {
    const d = Number(diluent);
    const u = Number(units);
    if (!Number.isFinite(d) || !Number.isFinite(u) || d <= 0 || u < 0) {
      return null;
    }
    const concMgPerMl = 80 / d;
    const volumeMl = u * 0.01;
    const totalMg = concMgPerMl * volumeMl;
    const parts = klowComponentsFromTotalMg(totalMg);
    return { concMgPerMl, volumeMl, totalMg, parts };
  }, [diluent, units]);

  return (
    <ModuleShell
      kicker="Reconstitution math"
      title="Units are not a dose until diluent volume is known"
    >
      <div className="grid gap-3 border-b border-slate-100 px-4 py-3 sm:grid-cols-2">
        <div>
          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Diluent added to 80 mg vial
          </p>
          <ChipGroup
            label="Diluent"
            options={[
              { id: "2", label: "2 mL" },
              { id: "3", label: "3 mL" },
            ]}
            value={diluent}
            onChange={setDiluent}
          />
        </div>
        <label className="block text-[11px] font-semibold text-slate-700">
          U-100 units drawn
          <input
            type="number"
            min="0"
            step="0.5"
            value={units}
            onChange={(e) => setUnits(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-900"
          />
        </label>
      </div>
      {result?.parts ? (
        <div className="px-4 py-4">
          <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Concentration ≈ {result.concMgPerMl.toFixed(2)} mg/mL total · volume{" "}
            {result.volumeMl.toFixed(3)} mL
          </p>
          <p className="mt-1 text-2xl font-bold text-violet-800">
            {formatMg(result.totalMg)} total blend
          </p>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            <p className="text-[11px] text-slate-700">
              <strong>GHK-Cu:</strong> {formatMg(result.parts.ghkCuMg)}
            </p>
            <p className="text-[11px] text-slate-700">
              <strong>KPV:</strong> {result.parts.kpvMcg.toFixed(0)} mcg
            </p>
            <p className="text-[11px] text-slate-700">
              <strong>BPC-157:</strong> {result.parts.bpcMcg.toFixed(0)} mcg
            </p>
            <p className="text-[11px] text-slate-700">
              <strong>TB-500:</strong> {result.parts.tbMcg.toFixed(0)} mcg
            </p>
          </div>
          <p className="mt-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-[11px] font-semibold text-amber-950">
            Documents community vial arithmetic — not a clinically validated
            target dose. Assumes authentic 50/10/10/10 composition.
          </p>
        </div>
      ) : null}
    </ModuleShell>
  );
}

export function KlowClinicalVsAnecdotal() {
  const c = KLOW_COMPARE.clinical;
  const a = KLOW_COMPARE.anecdotal;

  return (
    <ModuleShell
      kicker="Evidence split"
      title="Exact blend unstudied — online 2–4 mg schedules are conventions"
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
    </ModuleShell>
  );
}

export function KlowEvidenceLadder() {
  return (
    <ModuleShell
      kicker="Dosage evidence ladder"
      title="Blend evidence is almost entirely anecdotal"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Evidence level</th>
              <th className="px-3 py-2.5 font-semibold">KLOW evidence</th>
              <th className="px-3 py-2.5 font-semibold">Confidence</th>
            </tr>
          </thead>
          <tbody>
            {KLOW_EVIDENCE_LADDER.map((row) => (
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

export function KlowAdverseEventTable() {
  const [full, setFull] = useState(false);

  return (
    <ModuleShell
      kicker="Safety findings"
      title="No blend AE rates — copper, angiogenesis, and fixed-ratio limits"
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
            {(full ? KLOW_AE_FULL : KLOW_AE_SIMPLE).map((row) => (
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
    </ModuleShell>
  );
}
