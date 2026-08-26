"use client";

import { useMemo, useState } from "react";
import {
  BPC_TB_AE_FULL,
  BPC_TB_AE_SIMPLE,
  BPC_TB_CLAIMS,
  BPC_TB_COMBO_STATUS,
  BPC_TB_COMPARE,
  BPC_TB_COMPOSITION,
  BPC_TB_EVIDENCE_LADDER,
  BPC_TB_IDENTITY,
  BPC_TB_PROTOCOL_PHASES,
  BPC_TB_RAT_FINDINGS,
  BPC_TB_WEEKLY,
  bpcTbAmountFromVial,
  bpcTbComponentsFromTotalMg,
} from "@/data/bpc-157-tb-500-dosage-guide";

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

function formatMcg(mcg) {
  if (mcg >= 1000) return `${(mcg / 1000).toFixed(mcg % 1000 === 0 ? 0 : 2)} mg`;
  return `${mcg.toFixed(mcg % 1 === 0 ? 0 : 1)} µg`;
}

export function BpcTbComposition() {
  const [presetId, setPresetId] = useState("1:1-10-10");
  const preset = BPC_TB_COMPOSITION[presetId] || BPC_TB_COMPOSITION["1:1-10-10"];

  return (
    <ModuleShell
      kicker="Vial configurations"
      title="1:1 (10/10, 5/5) and 1:2 (5/10) — ratio determines every draw"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Vial preset"
          options={Object.values(BPC_TB_COMPOSITION).map((p) => ({
            id: p.id,
            label: p.label,
          }))}
          value={presetId}
          onChange={setPresetId}
        />
      </div>
      <div className="space-y-3 px-4 py-4">
        {[
          {
            name: "BPC-157",
            mg: preset.bpcMg,
            pct: preset.bpcPct,
            theme: "Angiogenesis, NO signaling, tendon and GI models",
          },
          {
            name: "TB-500 (Ac-LKKTETQ)",
            mg: preset.tbMg,
            pct: preset.tbPct,
            theme: "Actin dynamics, migration, tendon repair models",
          },
        ].map((c) => (
          <div key={c.name}>
            <div className="mb-1 flex justify-between gap-3 text-[11px]">
              <span className="font-semibold text-slate-800">
                {c.name} · {c.mg} mg
              </span>
              <span className="font-bold text-teal-800">{c.pct}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-teal-500"
                style={{ width: `${c.pct}%` }}
              />
            </div>
            <p className="mt-1 text-[10px] text-slate-500">{c.theme}</p>
          </div>
        ))}
      </div>
      <p className="border-t border-amber-100 bg-amber-50 px-4 py-3 text-[11px] font-semibold text-amber-950">
        “Ten units” has no fixed meaning — it depends on vial mass, ratio, and
        diluent volume. ≠ GLOW (adds GHK-Cu) · ≠ KLOW (adds GHK-Cu + KPV).
      </p>
    </ModuleShell>
  );
}

export function BpcTbIdentityGate() {
  const [id, setId] = useState("unsure");
  const card =
    BPC_TB_IDENTITY.find((c) => c.id === id) || BPC_TB_IDENTITY[4];

  return (
    <ModuleShell
      kicker="Identity gate"
      title="Confirm Ac-LKKTETQ + BPC-157 — not full Tβ4, LKKTETQ, GLOW, or KLOW"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Identity check"
          options={BPC_TB_IDENTITY.map((c) => ({
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

export function BpcTbComboStatus() {
  return (
    <ModuleShell
      kicker="Combination evidence"
      title="2026 rat study: BPC 10 + TB 60 µg/kg/day — no synergy demonstrated"
    >
      <dl className="divide-y divide-slate-100">
        {BPC_TB_COMBO_STATUS.map(([q, a]) => (
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
      <div className="overflow-x-auto border-t border-slate-100">
        <table className="w-full min-w-[480px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2 font-semibold">Outcome</th>
              <th className="px-3 py-2 font-semibold">Main finding</th>
            </tr>
          </thead>
          <tbody>
            {BPC_TB_RAT_FINDINGS.map((row) => (
              <tr key={row.outcome} className="border-t border-slate-50">
                <td className="px-3 py-2 font-medium text-slate-800">
                  {row.outcome}
                </td>
                <td className="px-3 py-2 text-slate-600">{row.finding}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="border-t border-red-100 bg-red-50 px-4 py-3 text-[11px] font-semibold text-red-950">
        Nonclinical rat IP exposure — not a human SC protocol. TB-500 test-article
        identity was incompletely published in the paper.
      </p>
    </ModuleShell>
  );
}

export function BpcTbComponentBreakdown() {
  const [ratio, setRatio] = useState("1:1");
  const presets =
    ratio === "1:1"
      ? [0.25, 0.5, 1, 2]
      : [0.375, 0.5, 0.75, 1.5];
  const [total, setTotal] = useState(ratio === "1:1" ? 0.5 : 0.5);
  const parts = bpcTbComponentsFromTotalMg(total, ratio);

  return (
    <ModuleShell
      kicker="Per-component breakdown"
      title="Always translate total blend mass into BPC-157 and TB-500 separately"
    >
      <div className="space-y-3 border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Mass ratio"
          options={[
            { id: "1:1", label: "1:1 (equal mass)" },
            { id: "1:2", label: "1:2 (TB twice BPC)" },
          ]}
          value={ratio}
          onChange={(v) => {
            setRatio(v);
            setTotal(v === "1:1" ? 0.5 : 0.5);
          }}
        />
        <ChipGroup
          label="Total blend (mg)"
          options={presets.map((n) => ({
            id: String(n),
            label: `${n} mg`,
          }))}
          value={String(total)}
          onChange={(v) => setTotal(Number(v))}
        />
      </div>
      {parts ? (
        <div className="grid gap-3 p-4 sm:grid-cols-2">
          <div className="rounded-lg border border-teal-100 bg-teal-50 px-3 py-3">
            <p className="text-[10px] font-bold uppercase tracking-wide text-teal-700">
              BPC-157 ({ratio === "1:1" ? "50%" : "33.3%"})
            </p>
            <p className="mt-1 text-lg font-bold text-teal-900">
              {formatMcg(parts.bpcMcg)}
            </p>
          </div>
          <div className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-3">
            <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
              TB-500 / Ac-LKKTETQ ({ratio === "1:1" ? "50%" : "66.7%"})
            </p>
            <p className="mt-1 text-lg font-bold text-slate-900">
              {formatMcg(parts.tbMcg)}
            </p>
          </div>
        </div>
      ) : null}
      <p className="border-t border-slate-100 px-4 py-3 text-[11px] text-slate-600">
        Fixed-ratio blends lock BPC and TB together. Separate vials allow
        independent frequency — but different weekly exposure.
      </p>
    </ModuleShell>
  );
}

export function BpcTbWeeklyExposure() {
  const sep = BPC_TB_WEEKLY.separateVial;
  const blend = BPC_TB_WEEKLY.blendDaily;

  return (
    <ModuleShell
      kicker="Weekly exposure comparison"
      title="Separate-vial vs 1:1 daily blend — different experiments"
    >
      <div className="grid gap-0 sm:grid-cols-2">
        <div className="border-b border-slate-100 p-4 sm:border-b-0 sm:border-r">
          <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
            {sep.label}
          </p>
          <dl className="mt-3 space-y-2">
            <div>
              <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                BPC-157 weekly
              </dt>
              <dd className="text-sm font-bold text-slate-900">
                {sep.weeklyBpcMg} mg ({sep.bpcDailyMcg} µg × {sep.bpcDaysPerWeek}{" "}
                days)
              </dd>
            </div>
            <div>
              <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                TB-500 weekly
              </dt>
              <dd className="text-sm font-bold text-teal-800">
                {sep.weeklyTbMg} mg ({sep.tbPerDoseMg} mg × {sep.tbDosesPerWeek}{" "}
                doses)
              </dd>
            </div>
            <div>
              <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                Weekly BPC:TB ratio
              </dt>
              <dd className="text-[11px] text-slate-700">{sep.weeklyRatio}</dd>
            </div>
          </dl>
        </div>
        <div className="bg-slate-50 p-4">
          <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
            {blend.label}
          </p>
          <dl className="mt-3 space-y-2">
            <div>
              <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                BPC-157 weekly
              </dt>
              <dd className="text-sm font-bold text-slate-900">
                {blend.weeklyBpcMg} mg
              </dd>
            </div>
            <div>
              <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                TB-500 weekly
              </dt>
              <dd className="text-sm font-bold text-teal-800">
                {blend.weeklyTbMg} mg
              </dd>
            </div>
            <div>
              <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                Weekly BPC:TB ratio
              </dt>
              <dd className="text-[11px] text-slate-700">{blend.weeklyRatio}</dd>
            </div>
          </dl>
        </div>
      </div>
      <p className="border-t border-amber-100 bg-amber-50 px-4 py-3 text-[11px] font-semibold text-amber-950">
        {BPC_TB_WEEKLY.note}
      </p>
    </ModuleShell>
  );
}

export function BpcTbProtocolTimeline() {
  const [id, setId] = useState("combo");
  const phase =
    BPC_TB_PROTOCOL_PHASES.find((p) => p.id === id) ||
    BPC_TB_PROTOCOL_PHASES[3];

  return (
    <ModuleShell
      kicker="4-arm rat replication protocol"
      title="Nonclinical animal design — not a human regimen"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Study arm"
          options={BPC_TB_PROTOCOL_PHASES.map((p) => ({
            id: p.id,
            label: p.phase,
          }))}
          value={id}
          onChange={setId}
        />
      </div>
      <div className="px-4 py-4">
        <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
          Postoperative days {phase.days}
        </p>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          <p className="text-[11px] text-slate-700">
            <strong>BPC-157:</strong> {phase.bpcDose}
          </p>
          <p className="text-[11px] text-slate-700">
            <strong>TB-500:</strong> {phase.tbDose}
          </p>
        </div>
        <p className="mt-2 text-[11px] font-semibold text-slate-800">
          {phase.route}
        </p>
        <p className="mt-2 text-[11px] text-slate-600">{phase.purpose}</p>
        <p className="mt-2 text-[11px] text-slate-500">{phase.note}</p>
      </div>
      <p className="border-t border-red-100 bg-red-50 px-4 py-3 text-[11px] font-semibold text-red-950">
        Requires IACUC approval. No HED conversion. Do not double missed doses.
        Primary comparison: combination vs better monotherapy — not vs vehicle
        alone.
      </p>
    </ModuleShell>
  );
}

export function BpcTbReconCalc() {
  const [presetId, setPresetId] = useState("1:1-10-10");
  const [diluent, setDiluent] = useState("2");
  const [mode, setMode] = useState("units");
  const [units, setUnits] = useState("5");
  const [targetBpc, setTargetBpc] = useState("250");

  const diluentOptions = useMemo(() => {
    if (presetId === "1:1-10-10") return ["2", "3", "4"];
    if (presetId === "1:1-5-5") return ["2"];
    return ["3"];
  }, [presetId]);

  const result = useMemo(() => {
    const d = Number(diluent);
    if (!Number.isFinite(d) || d <= 0) return null;

    if (mode === "units") {
      const u = Number(units);
      if (!Number.isFinite(u) || u < 0) return null;
      const preset = BPC_TB_COMPOSITION[presetId];
      const total = preset.totalMg;
      const concMgPerMl = total / d;
      const volumeMl = u * 0.01;
      const targetTotalMg = concMgPerMl * volumeMl;
      return bpcTbAmountFromVial({
        vialPreset: presetId,
        diluentMl: d,
        targetTotalMg,
      });
    }

    const bpc = Number(targetBpc);
    if (!Number.isFinite(bpc) || bpc <= 0) return null;
    return bpcTbAmountFromVial({
      vialPreset: presetId,
      diluentMl: d,
      targetBpcMcg: bpc,
    });
  }, [presetId, diluent, mode, units, targetBpc]);

  return (
    <ModuleShell
      kicker="Reconstitution math"
      title="10/10 @ 2/3/4 mL · 5/5 @ 2 mL · 5/10 @ 3 mL presets"
    >
      <div className="space-y-3 border-b border-slate-100 px-4 py-3">
        <div>
          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Vial preset
          </p>
          <ChipGroup
            label="Vial preset"
            options={Object.values(BPC_TB_COMPOSITION).map((p) => ({
              id: p.id,
              label: p.label,
            }))}
            value={presetId}
            onChange={(v) => {
              setPresetId(v);
              if (v === "1:1-5-5") setDiluent("2");
              else if (v === "1:2-5-10") setDiluent("3");
              else setDiluent("2");
            }}
          />
        </div>
        <div>
          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Diluent volume
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
        <div>
          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Input mode
          </p>
          <ChipGroup
            label="Input mode"
            options={[
              { id: "units", label: "U-100 units" },
              { id: "bpc", label: "Target BPC-157 (µg)" },
            ]}
            value={mode}
            onChange={setMode}
          />
        </div>
        {mode === "units" ? (
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
        ) : (
          <label className="block text-[11px] font-semibold text-slate-700">
            Target BPC-157 (µg)
            <input
              type="number"
              min="0"
              step="10"
              value={targetBpc}
              onChange={(e) => setTargetBpc(e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-900"
            />
          </label>
        )}
      </div>
      {result?.parts ? (
        <div className="px-4 py-4">
          <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
            {result.ratio} ratio · ≈ {result.concMgPerMl.toFixed(2)} mg/mL total
            · volume {result.volumeMl.toFixed(3)} mL
          </p>
          <p className="mt-1 text-2xl font-bold text-teal-800">
            {result.units.toFixed(1)} U-100 units
          </p>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            <p className="text-[11px] text-slate-700">
              <strong>BPC-157:</strong> {formatMcg(result.parts.bpcMcg)}
            </p>
            <p className="text-[11px] text-slate-700">
              <strong>TB-500:</strong> {formatMcg(result.parts.tbMcg)}
            </p>
            <p className="text-[11px] text-slate-700 sm:col-span-2">
              <strong>Total blend:</strong>{" "}
              {formatMcg(result.targetTotalMg * 1000)}
            </p>
          </div>
          <p className="mt-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-[11px] font-semibold text-amber-950">
            Concentration arithmetic only — not a validated dose. Separate-vial
            TB schedules use different weekly ratios than 1:1 daily blends.
          </p>
        </div>
      ) : null}
    </ModuleShell>
  );
}

export function BpcTbClinicalVsAnecdotal() {
  const rat = BPC_TB_COMPARE.clinical;
  const chart = BPC_TB_COMPARE.chartReview;
  const comm = BPC_TB_COMPARE.anecdotal;

  return (
    <ModuleShell
      kicker="Evidence split"
      title="Rat study vs chart review vs community — three different experiments"
    >
      <div className="grid gap-0 lg:grid-cols-3">
        <div className="border-b border-slate-100 p-4 lg:border-b-0 lg:border-r">
          <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
            {rat.title}
          </p>
          <p className="mt-1 text-sm font-bold text-teal-800">{rat.status}</p>
          <dl className="mt-3 space-y-2">
            {rat.rows.map(([k, v]) => (
              <div key={k}>
                <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                  {k}
                </dt>
                <dd className="text-[11px] text-slate-700">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="border-b border-slate-100 bg-slate-50 p-4 lg:border-b-0 lg:border-r">
          <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
            {chart.title}
          </p>
          <p className="mt-1 text-sm font-bold text-slate-900">{chart.status}</p>
          <dl className="mt-3 space-y-2">
            {chart.rows.map(([k, v]) => (
              <div key={k}>
                <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                  {k}
                </dt>
                <dd className="text-[11px] text-slate-700">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="p-4">
          <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
            {comm.title}
          </p>
          <p className="mt-1 text-sm font-bold text-slate-700">{comm.status}</p>
          <dl className="mt-3 space-y-2">
            {comm.rows.map(([k, v]) => (
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

export function BpcTbClaimChecker() {
  const [open, setOpen] = useState("synergy-proven");

  return (
    <ModuleShell
      kicker="Myth / claim checker"
      title="Synergy, 1:1 = separate schedule, HED from rat, GLOW/KLOW confusion"
    >
      <ul className="divide-y divide-slate-100">
        {BPC_TB_CLAIMS.map((c) => {
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

export function BpcTbEvidenceLadder() {
  return (
    <ModuleShell
      kicker="Dosage evidence ladder"
      title="One rat combo study — no human dose; community schedules anecdotal"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Evidence level</th>
              <th className="px-3 py-2.5 font-semibold">Wolverine evidence</th>
              <th className="px-3 py-2.5 font-semibold">Confidence</th>
            </tr>
          </thead>
          <tbody>
            {BPC_TB_EVIDENCE_LADDER.map((row) => (
              <tr key={row.level} className="border-t border-slate-50">
                <td className="px-3 py-2 font-medium text-slate-800">
                  {row.level}
                </td>
                <td className="px-3 py-2 text-slate-600">{row.exists}</td>
                <td className="px-3 py-2 font-semibold text-teal-800">
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

export function BpcTbAdverseEventTable() {
  const [full, setFull] = useState(false);

  return (
    <ModuleShell
      kicker="Safety findings"
      title="No combo AE rates — angiogenesis concern; both WADA prohibited"
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
            {(full ? BPC_TB_AE_FULL : BPC_TB_AE_SIMPLE).map((row) => (
              <tr key={row.topic} className="border-t border-slate-50">
                <td className="px-3 py-2 font-medium text-slate-700">
                  {row.topic}
                </td>
                <td className="px-3 py-2 font-semibold text-teal-800">
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
