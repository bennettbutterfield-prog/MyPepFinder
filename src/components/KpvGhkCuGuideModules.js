"use client";

import { useMemo, useState } from "react";
import {
  KPV_GHK_CU_AE_FULL,
  KPV_GHK_CU_AE_SIMPLE,
  KPV_GHK_CU_CLAIMS,
  KPV_GHK_CU_COMBO_STATUS,
  KPV_GHK_CU_COMPARE,
  KPV_GHK_CU_COMPOSITION,
  KPV_GHK_CU_CUMULATIVE,
  KPV_GHK_CU_EVIDENCE_LADDER,
  KPV_GHK_CU_IDENTITY,
  KPV_GHK_CU_PROTOCOL_PHASES,
  KPV_GHK_CU_VIAL_MG,
  kpvGhkCuAmountFromVial,
  kpvGhkCuComponentsFromTotalMg,
} from "@/data/kpv-ghk-cu-dosage-guide";

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

function formatMg(mg) {
  if (mg >= 1) return `${Number(mg.toFixed(mg % 1 === 0 ? 0 : 2))} mg`;
  return `${(mg * 1000).toFixed(0)} mcg`;
}

export function KpvGhkCuComposition() {
  return (
    <ModuleShell
      kicker="Standard vial"
      title="60 mg · 5:1 — 50 mg GHK-Cu + 10 mg KPV"
    >
      <div className="space-y-3 px-4 py-4">
        {KPV_GHK_CU_COMPOSITION.map((c) => (
          <div key={c.id}>
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
        Every 1.2 mg total = 1 mg GHK-Cu + 200 mcg KPV. ≠ KLOW (adds BPC-157 and
        TB-500).
      </p>
    </ModuleShell>
  );
}

export function KpvGhkCuIdentityGate() {
  const [id, setId] = useState("unsure");
  const card =
    KPV_GHK_CU_IDENTITY.find((c) => c.id === id) || KPV_GHK_CU_IDENTITY[5];

  return (
    <ModuleShell
      kicker="Identity gate"
      title="Confirm 50/10 ratio, GHK-Cu complex, and KPV form before unit charts"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Identity check"
          options={KPV_GHK_CU_IDENTITY.map((c) => ({
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

export function KpvGhkCuComboStatus() {
  return (
    <ModuleShell
      kicker="Exact-combination evidence"
      title="No controlled study of the 50/10 mg blend was identified"
    >
      <dl className="divide-y divide-slate-100">
        {KPV_GHK_CU_COMBO_STATUS.map(([q, a]) => (
          <div
            key={q}
            className="flex items-start justify-between gap-4 px-4 py-2.5"
          >
            <dt className="text-xs text-slate-500">{q}</dt>
            <dd className="text-right text-xs font-bold text-teal-800">{a}</dd>
          </div>
        ))}
      </dl>
    </ModuleShell>
  );
}

export function KpvGhkCuComponentBreakdown() {
  const presets = [
    { id: "1.2", mg: 1.2 },
    { id: "1.8", mg: 1.8 },
    { id: "2.1", mg: 2.1 },
    { id: "2.4", mg: 2.4 },
    { id: "2.7", mg: 2.7 },
    { id: "3", mg: 3 },
  ];
  const [presetId, setPresetId] = useState("1.8");
  const [custom, setCustom] = useState("");
  const total =
    custom !== "" && Number(custom) > 0
      ? Number(custom)
      : presets.find((p) => p.id === presetId)?.mg ?? 1.8;
  const parts = kpvGhkCuComponentsFromTotalMg(total);

  return (
    <ModuleShell
      kicker="Per-component breakdown"
      title="Always translate total blend mass into GHK-Cu, KPV, and copper"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Total blend (mg)"
          options={presets.map((p) => ({
            id: p.id,
            label: `${p.mg} mg`,
          }))}
          value={custom !== "" ? "" : presetId}
          onChange={(v) => {
            setCustom("");
            setPresetId(v);
          }}
        />
        <label className="mt-3 block text-[11px] font-semibold text-slate-700">
          Custom total (mg)
          <input
            type="number"
            min="0"
            step="0.1"
            value={custom}
            placeholder={String(total)}
            onChange={(e) => setCustom(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-900"
          />
        </label>
      </div>
      {parts ? (
        <div className="grid gap-3 p-4 sm:grid-cols-3">
          <div className="rounded-lg border border-teal-100 bg-teal-50 px-3 py-3">
            <p className="text-[10px] font-bold uppercase tracking-wide text-teal-700">
              GHK-Cu (83.33%)
            </p>
            <p className="mt-1 text-lg font-bold text-teal-900">
              {formatMg(parts.ghkCuMg)}
            </p>
          </div>
          <div className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-3">
            <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
              KPV (16.67%)
            </p>
            <p className="mt-1 text-lg font-bold text-slate-900">
              {parts.kpvMcg.toFixed(0)} mcg
            </p>
          </div>
          <div className="rounded-lg border border-amber-100 bg-amber-50 px-3 py-3">
            <p className="text-[10px] font-bold uppercase tracking-wide text-amber-800">
              Stoichiometric Cu
            </p>
            <p className="mt-1 text-lg font-bold text-amber-950">
              {parts.copperMcg.toFixed(0)} mcg
            </p>
          </div>
        </div>
      ) : null}
      <p className="border-t border-slate-100 px-4 py-3 text-[11px] text-slate-600">
        Applies only to a verified 50/10 mg vial. Copper is stoichiometric — not
        absorbed dose.
      </p>
    </ModuleShell>
  );
}

export function KpvGhkCuProtocolTimeline() {
  const [id, setId] = useState("tolerance");
  const phase =
    KPV_GHK_CU_PROTOCOL_PHASES.find((p) => p.id === id) ||
    KPV_GHK_CU_PROTOCOL_PHASES[0];

  return (
    <ModuleShell
      kicker="12-week escalation protocol"
      title="Community convention — assumes 3 mL recon on 60 mg vial"
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Protocol phase"
          options={KPV_GHK_CU_PROTOCOL_PHASES.map((p) => ({
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
        <p className="mt-1 text-2xl font-bold text-teal-800">
          {phase.totalMg > 0
            ? `${phase.totalMg} mg total / admin`
            : "Washout"}
        </p>
        {phase.totalMg > 0 ? (
          <p className="mt-1 text-[11px] font-semibold text-slate-800">
            GHK-Cu {formatMg(phase.ghkCuMg)} + KPV {phase.kpvMcg} mcg ·{" "}
            {phase.units} U-100 units
          </p>
        ) : null}
        <p className="mt-1 text-[11px] text-slate-600">{phase.schedule}</p>
        <p className="mt-2 text-[11px] text-slate-600">{phase.purpose}</p>
        {phase.phaseTotalMg > 0 ? (
          <p className="mt-2 text-[11px] font-semibold text-slate-700">
            Phase total blend: {phase.phaseTotalMg} mg
          </p>
        ) : null}
      </div>
      <div className="overflow-x-auto border-t border-slate-100">
        <table className="w-full min-w-[520px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2 font-semibold">Phase</th>
              <th className="px-3 py-2 font-semibold">GHK-Cu</th>
              <th className="px-3 py-2 font-semibold">KPV</th>
              <th className="px-3 py-2 font-semibold">Total blend</th>
              <th className="px-3 py-2 font-semibold">Copper (approx.)</th>
            </tr>
          </thead>
          <tbody>
            {KPV_GHK_CU_CUMULATIVE.map((row) => (
              <tr key={row.phase} className="border-t border-slate-50">
                <td className="px-3 py-2 font-medium text-slate-800">
                  {row.phase}
                </td>
                <td className="px-3 py-2 text-slate-600">{row.ghkCu}</td>
                <td className="px-3 py-2 text-slate-600">{row.kpv}</td>
                <td className="px-3 py-2 font-semibold text-teal-800">
                  {row.totalBlend}
                </td>
                <td className="px-3 py-2 text-slate-600">{row.copper}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="border-t border-amber-100 bg-amber-50 px-4 py-3 text-[11px] font-semibold text-amber-950">
        Full cycle: 150 mg blend (2.5 vials) — plan on three 60 mg vials before
        handling loss.
      </p>
    </ModuleShell>
  );
}

export function KpvGhkCuReconCalc() {
  const [diluent, setDiluent] = useState("3");
  const [mode, setMode] = useState("total");
  const [targetTotal, setTargetTotal] = useState("1.8");
  const [targetGhk, setTargetGhk] = useState("1.5");
  const [targetKpv, setTargetKpv] = useState("300");

  const result = useMemo(() => {
    const d = Number(diluent);
    if (!Number.isFinite(d) || d <= 0) return null;

    if (mode === "total") {
      const t = Number(targetTotal);
      if (!Number.isFinite(t) || t <= 0) return null;
      return kpvGhkCuAmountFromVial({ diluentMl: d, targetTotalMg: t });
    }
    if (mode === "ghk") {
      const g = Number(targetGhk);
      if (!Number.isFinite(g) || g <= 0) return null;
      return kpvGhkCuAmountFromVial({ diluentMl: d, targetGhkCuMg: g });
    }
    const k = Number(targetKpv);
    if (!Number.isFinite(k) || k <= 0) return null;
    return kpvGhkCuAmountFromVial({ diluentMl: d, targetKpvMcg: k });
  }, [diluent, mode, targetTotal, targetGhk, targetKpv]);

  return (
    <ModuleShell
      kicker="Reconstitution math"
      title="60 mg vial — units depend on diluent volume and target amount"
    >
      <div className="space-y-3 border-b border-slate-100 px-4 py-3">
        <div>
          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Diluent added to {KPV_GHK_CU_VIAL_MG} mg vial
          </p>
          <ChipGroup
            label="Diluent"
            options={[
              { id: "2", label: "2 mL" },
              { id: "3", label: "3 mL" },
              { id: "4", label: "4 mL" },
            ]}
            value={diluent}
            onChange={setDiluent}
          />
        </div>
        <div>
          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Target input mode
          </p>
          <ChipGroup
            label="Target mode"
            options={[
              { id: "total", label: "Total blend (mg)" },
              { id: "ghk", label: "GHK-Cu (mg)" },
              { id: "kpv", label: "KPV (mcg)" },
            ]}
            value={mode}
            onChange={setMode}
          />
        </div>
        {mode === "total" ? (
          <label className="block text-[11px] font-semibold text-slate-700">
            Target total blend (mg)
            <input
              type="number"
              min="0"
              step="0.1"
              value={targetTotal}
              onChange={(e) => setTargetTotal(e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-900"
            />
          </label>
        ) : null}
        {mode === "ghk" ? (
          <label className="block text-[11px] font-semibold text-slate-700">
            Target GHK-Cu (mg)
            <input
              type="number"
              min="0"
              step="0.05"
              value={targetGhk}
              onChange={(e) => setTargetGhk(e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-900"
            />
          </label>
        ) : null}
        {mode === "kpv" ? (
          <label className="block text-[11px] font-semibold text-slate-700">
            Target KPV (mcg)
            <input
              type="number"
              min="0"
              step="10"
              value={targetKpv}
              onChange={(e) => setTargetKpv(e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-900"
            />
          </label>
        ) : null}
      </div>
      {result?.parts ? (
        <div className="px-4 py-4">
          <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Concentration ≈ {result.concMgPerMl.toFixed(2)} mg/mL total · KPV ≈{" "}
            {result.kpvConcMgPerMl.toFixed(2)} mg/mL · volume{" "}
            {result.volumeMl.toFixed(3)} mL
          </p>
          <p className="mt-1 text-2xl font-bold text-teal-800">
            {result.units.toFixed(1)} U-100 units ={" "}
            {formatMg(result.targetTotalMg)} total
          </p>
          <div className="mt-3 grid gap-2 sm:grid-cols-3">
            <p className="text-[11px] text-slate-700">
              <strong>GHK-Cu:</strong> {formatMg(result.parts.ghkCuMg)}
            </p>
            <p className="text-[11px] text-slate-700">
              <strong>KPV:</strong> {result.parts.kpvMcg.toFixed(0)} mcg
            </p>
            <p className="text-[11px] text-slate-700">
              <strong>Copper (approx.):</strong>{" "}
              {result.parts.copperMcg.toFixed(0)} mcg
            </p>
          </div>
          {result.exceedsFreeBaseSolubility ? (
            <p className="mt-3 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-[11px] font-semibold text-red-950">
              KPV concentration ({result.kpvConcMgPerMl.toFixed(2)} mg/mL)
              exceeds FDA-reported free-base water solubility (~0.7 mg/mL).
              Arithmetic can be exact while the preparation is unsuitable if KPV
              is free base.
            </p>
          ) : null}
          {!result.exceedsFreeBaseSolubility &&
          result.kpvConcMgPerMl > 0.7 &&
          result.kpvConcMgPerMl <= 5 ? (
            <p className="mt-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-[11px] font-semibold text-amber-950">
              KPV at {result.kpvConcMgPerMl.toFixed(2)} mg/mL is above free-base
              but below reported acetate solubility (~5 mg/mL). Confirm KPV form
              and mixed-vial stability.
            </p>
          ) : null}
          <p className="mt-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-[11px] font-semibold text-amber-950">
            Calculation reference only — not a formulation recipe. Assumes
            authentic 50/10 mg composition.
          </p>
        </div>
      ) : null}
    </ModuleShell>
  );
}

export function KpvGhkCuClinicalVsAnecdotal() {
  const c = KPV_GHK_CU_COMPARE.clinical;
  const a = KPV_GHK_CU_COMPARE.anecdotal;

  return (
    <ModuleShell
      kicker="Evidence split"
      title="Exact blend unstudied — 1.8–3 mg schedules are one documented convention"
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
          <p className="mt-1 text-sm font-bold text-teal-800">{a.status}</p>
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

export function KpvGhkCuClaimChecker() {
  const [open, setOpen] = useState("klow-same");

  return (
    <ModuleShell
      kicker="Myth / claim checker"
      title="KLOW confusion, escalation, topical validation, synergy, and solubility"
    >
      <ul className="divide-y divide-slate-100">
        {KPV_GHK_CU_CLAIMS.map((c) => {
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

export function KpvGhkCuEvidenceLadder() {
  return (
    <ModuleShell
      kicker="Dosage evidence ladder"
      title="Blend dosing is poorly established — conventions exceed evidence"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500">
              <th className="px-3 py-2.5 font-semibold">Evidence level</th>
              <th className="px-3 py-2.5 font-semibold">KPV + GHK-Cu evidence</th>
              <th className="px-3 py-2.5 font-semibold">Confidence</th>
            </tr>
          </thead>
          <tbody>
            {KPV_GHK_CU_EVIDENCE_LADDER.map((row) => (
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

export function KpvGhkCuAdverseEventTable() {
  const [full, setFull] = useState(false);

  return (
    <ModuleShell
      kicker="Safety findings"
      title="No blend AE rates — copper, attribution, and formulation risk"
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
            {(full ? KPV_GHK_CU_AE_FULL : KPV_GHK_CU_AE_SIMPLE).map((row) => (
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
