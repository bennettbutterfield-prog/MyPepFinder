"use client";

import { useMemo, useState } from "react";
import {
  SEMAGLUTIDE_AE_HD,
  SEMAGLUTIDE_AE_OZEMPIC,
  SEMAGLUTIDE_AE_SIMPLE,
  SEMAGLUTIDE_AE_WEGOVY,
  SEMAGLUTIDE_MASH,
  SEMAGLUTIDE_OUTCOMES,
  SEMAGLUTIDE_PRODUCTS,
  SEMAGLUTIDE_TRIALS,
  SEMAGLUTIDE_WEIGHT_TABS,
} from "@/data/semaglutide-dosage-guide";

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

export function SemaglutideDosageSelector() {
  const [productId, setProductId] = useState("wegovy-inj");
  const product = SEMAGLUTIDE_PRODUCTS.find((p) => p.id === productId);
  const [indicationId, setIndicationId] = useState(product.indications[0].id);
  const indication =
    product.indications.find((i) => i.id === indicationId) ||
    product.indications[0];
  const [active, setActive] = useState(0);
  const step = indication.steps[Math.min(active, indication.steps.length - 1)];
  const progress =
    indication.steps.length > 1
      ? (Math.min(active, indication.steps.length - 1) /
          (indication.steps.length - 1)) *
        100
      : 100;

  return (
    <ModuleShell
      kicker="Brand-and-indication dosage selector"
      title="Pick the exact product — milligrams are not interchangeable"
    >
      <div className="space-y-3 px-4 py-3">
        <ChipGroup
          label="Product"
          options={SEMAGLUTIDE_PRODUCTS}
          value={productId}
          onChange={(id) => {
            const next = SEMAGLUTIDE_PRODUCTS.find((p) => p.id === id);
            setProductId(id);
            setIndicationId(next.indications[0].id);
            setActive(0);
          }}
        />
        {product.indications.length > 1 ? (
          <ChipGroup
            label="Indication"
            options={product.indications}
            value={indication.id}
            onChange={(id) => {
              setIndicationId(id);
              setActive(0);
            }}
          />
        ) : null}
        <p className="text-xs leading-relaxed text-amber-800">{product.warning}</p>
      </div>
      <div className="px-3 pb-5 sm:px-6">
        <p className="mb-3 text-xs font-semibold text-slate-500">{product.route}</p>
        <div className="relative">
          <div
            className="absolute left-[8%] right-[8%] top-4 h-0.5 bg-slate-200 sm:top-[1.125rem]"
            aria-hidden
          >
            <div
              className="h-0.5 bg-violet-400 transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
          <ol className="relative z-10 flex items-start justify-between">
            {indication.steps.map((s, i) => {
              const selected = i === Math.min(active, indication.steps.length - 1);
              const complete = i < active;
              return (
                <li
                  key={`${s.dose}-${i}`}
                  className="flex w-12 flex-col items-center sm:w-16"
                >
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-pressed={selected}
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-[9px] font-bold ring-4 ring-white transition sm:h-9 sm:w-9 sm:text-[10px] ${
                      selected
                        ? "bg-violet-600 text-white"
                        : complete
                          ? "bg-violet-200 text-violet-800"
                          : "bg-slate-100 text-slate-500 hover:bg-violet-50 hover:text-violet-700"
                    }`}
                  >
                    {s.dose.replace(" mg", "")}
                  </button>
                  <span
                    className={`mt-2 text-center text-[9px] font-semibold sm:text-[10px] ${
                      selected ? "text-violet-700" : "text-slate-500"
                    }`}
                  >
                    {s.dose}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
      <div className="border-t border-slate-100 bg-violet-50/60 px-4 py-4 sm:px-5">
        <p className="text-sm font-bold text-violet-800">
          {step.dose} · {step.role}
        </p>
        <dl className="mt-2 grid gap-2 sm:grid-cols-3">
          <div>
            <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
              Period
            </dt>
            <dd className="mt-0.5 text-xs font-semibold text-slate-800">
              {step.period}
            </dd>
          </div>
          <div>
            <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
              Role
            </dt>
            <dd className="mt-0.5 text-xs font-semibold text-slate-800">
              {step.role}
            </dd>
          </div>
          <div>
            <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
              Indication max
            </dt>
            <dd className="mt-0.5 text-xs font-semibold text-slate-800">
              {indication.max}
            </dd>
          </div>
        </dl>
        <p className="mt-3 text-xs leading-relaxed text-slate-600">
          {indication.note}
        </p>
      </div>
    </ModuleShell>
  );
}

export function SemaglutideWeightChart() {
  const [tabId, setTabId] = useState("step1");
  const tab = SEMAGLUTIDE_WEIGHT_TABS.find((t) => t.id === tabId);
  const w = 560;
  const h = 230;
  const pad = { t: 28, r: 16, b: 48, l: 44 };
  const innerW = w - pad.l - pad.r;
  const innerH = h - pad.t - pad.b;
  const max = 22;
  const barW = innerW / tab.series.length;

  return (
    <ModuleShell kicker="Results by population" title={tab.caption}>
      <div className="px-4 py-3">
        <ChipGroup
          label="Population"
          options={SEMAGLUTIDE_WEIGHT_TABS}
          value={tabId}
          onChange={setTabId}
        />
      </div>
      <div className="px-3 pb-4 sm:px-4">
        <svg
          viewBox={`0 0 ${w} ${h}`}
          className="h-auto w-full"
          role="img"
          aria-label={tab.caption}
        >
          {[0, 8, 16].map((tick) => (
            <g key={tick}>
              <line
                x1={pad.l}
                y1={pad.t + innerH - (tick / max) * innerH}
                x2={w - pad.r}
                y2={pad.t + innerH - (tick / max) * innerH}
                stroke="#e2e8f0"
              />
              <text
                x={pad.l - 8}
                y={pad.t + innerH - (tick / max) * innerH}
                textAnchor="end"
                dominantBaseline="middle"
                fontSize="10"
                className="fill-slate-400"
              >
                {tick === 0 ? "0" : `−${tick}%`}
              </text>
            </g>
          ))}
          {tab.series.map((row, i) => {
            const display = Math.abs(row.pct);
            const cx = pad.l + barW * i + barW / 2;
            const bh = (display / max) * innerH;
            const y = pad.t + innerH - bh;
            return (
              <g key={row.label}>
                <rect
                  x={cx - 22}
                  y={y}
                  width="44"
                  height={Math.max(bh, 2)}
                  rx="4"
                  fill={row.color}
                />
                <text
                  x={cx}
                  y={y - 8}
                  textAnchor="middle"
                  fontSize="11"
                  fontWeight="700"
                  fill={row.color === "#cbd5e1" ? "#64748b" : "#5b21b6"}
                >
                  {row.note || `${row.pct > 0 ? "−" : "+"}${display}%`}
                </text>
                <text
                  x={cx}
                  y={h - 16}
                  textAnchor="middle"
                  fontSize="10"
                  fontWeight="600"
                  className="fill-slate-600"
                >
                  {row.label}
                </text>
              </g>
            );
          })}
        </svg>
        {tab.footnote ? (
          <p className="text-[11px] text-slate-500">{tab.footnote}</p>
        ) : tabId === "teens" ? (
          <p className="text-[11px] text-slate-500">
            STEP TEENS reports percent BMI change, not percent body-weight
            change.
          </p>
        ) : null}
      </div>
    </ModuleShell>
  );
}

function DataTable({ table, caption, highlight }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
      {caption ? (
        <p className="border-b border-slate-100 bg-slate-50 px-3 py-2 text-xs font-bold uppercase tracking-wide text-slate-500">
          {caption}
        </p>
      ) : null}
      <table className="w-full min-w-[480px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-slate-100 bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500 sm:text-xs">
            {table.headers.map((h, i) => (
              <th
                key={h}
                className={`px-3 py-3 font-semibold ${
                  i === 0 ? "text-left" : "text-right"
                }`}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row) => {
            const isHi = highlight && row[0] === highlight;
            return (
              <tr
                key={row[0]}
                className={`border-b border-slate-50 last:border-0 ${
                  isHi ? "bg-violet-50" : ""
                }`}
              >
                {row.map((cell, i) => (
                  <td
                    key={`${row[0]}-${i}`}
                    className={`px-3 py-2.5 text-xs ${
                      i === 0
                        ? "font-medium text-slate-600"
                        : "text-right tabular-nums text-slate-700"
                    } ${isHi ? "font-bold text-violet-800" : ""}`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export function SemaglutideAdverseEventTable() {
  const [full, setFull] = useState(false);
  return (
    <div className="mt-5">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-base font-bold text-slate-900">
          Common adverse reactions
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
        <ul className="grid gap-3 sm:grid-cols-3">
          {SEMAGLUTIDE_AE_SIMPLE.map((g) => (
            <li
              key={g.title}
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <p className="text-sm font-bold text-violet-800">{g.title}</p>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                {g.takeaway}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <div className="space-y-5">
          <DataTable
            table={SEMAGLUTIDE_AE_WEGOVY}
            caption="Wegovy 2.4 mg obesity/overweight trials"
          />
          <p className="text-xs text-slate-600">
            Treatment discontinuation due to adverse reactions occurred in 6.8%
            with Wegovy 2.4 mg versus 3.2% with placebo.
          </p>
          <DataTable
            table={SEMAGLUTIDE_AE_HD}
            caption="Wegovy HD 7.2 mg trials"
            highlight={SEMAGLUTIDE_AE_HD.highlight}
          />
          <p className="text-xs text-slate-600">
            Dysesthesia includes paresthesia, skin pain, skin sensitivity, and
            burning sensation. At 7.2 mg, 22% reported dysesthesia.
          </p>
          <DataTable
            table={SEMAGLUTIDE_AE_OZEMPIC}
            caption="Ozempic diabetes trials"
          />
          <p className="text-xs text-slate-600">
            These rates come from placebo-controlled type 2 diabetes trials and
            should remain separate from Wegovy’s obesity trials.
          </p>
        </div>
      )}
      <div className="sr-only">
        <DataTable table={SEMAGLUTIDE_AE_WEGOVY} caption="Wegovy 2.4 mg" />
        <DataTable table={SEMAGLUTIDE_AE_HD} caption="Wegovy HD 7.2 mg" />
        <DataTable table={SEMAGLUTIDE_AE_OZEMPIC} caption="Ozempic diabetes" />
      </div>
    </div>
  );
}

export function SemaglutideOutcomesModule() {
  return (
    <ModuleShell
      kicker="Hard clinical outcomes"
      title="Cardiovascular and kidney event trials"
    >
      <ul className="grid gap-3 p-4 sm:grid-cols-3">
        {SEMAGLUTIDE_OUTCOMES.map((o) => (
          <li
            key={o.id}
            className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            <p className="text-[10px] font-bold uppercase tracking-wide text-violet-600">
              {o.title}
            </p>
            <p className="mt-2 text-lg font-bold text-violet-900">{o.hr}</p>
            <p className="text-xs font-semibold text-slate-800">{o.relative}</p>
            <p className="mt-1 text-xs text-slate-500">{o.absolute}</p>
            <p className="mt-2 text-[11px] leading-relaxed text-slate-600">
              {o.population}
            </p>
            <p className="mt-2 text-[11px] leading-relaxed text-slate-500">
              {o.detail}
            </p>
          </li>
        ))}
      </ul>
    </ModuleShell>
  );
}

export function SemaglutideMashChart() {
  const w = 560;
  const h = 250;
  const pad = { t: 24, r: 16, b: 78, l: 40 };
  const innerW = w - pad.l - pad.r;
  const innerH = h - pad.t - pad.b;
  const groupW = innerW / SEMAGLUTIDE_MASH.length;
  const barW = 22;

  return (
    <ModuleShell
      kicker="ESSENCE · week 72 histology"
      title="MASH resolution and fibrosis improvement"
    >
      <div className="flex flex-wrap gap-3 px-4 pt-3 text-[11px] font-semibold text-slate-600">
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-sm bg-violet-600" />
          Semaglutide 2.4 mg
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-sm bg-slate-300" />
          Placebo
        </span>
      </div>
      <div className="px-3 pb-4 sm:px-4">
        <svg
          viewBox={`0 0 ${w} ${h}`}
          className="h-auto w-full"
          role="img"
          aria-label="ESSENCE MASH histology outcomes at 72 weeks"
        >
          {SEMAGLUTIDE_MASH.map((row, i) => {
            const cx = pad.l + groupW * i + groupW / 2;
            const sH = (row.sema / 70) * innerH;
            const pH = (row.placebo / 70) * innerH;
            return (
              <g key={row.label}>
                <rect
                  x={cx - barW - 4}
                  y={pad.t + innerH - sH}
                  width={barW}
                  height={sH}
                  rx="3"
                  fill="#7c3aed"
                />
                <rect
                  x={cx + 4}
                  y={pad.t + innerH - pH}
                  width={barW}
                  height={pH}
                  rx="3"
                  fill="#cbd5e1"
                />
                <text
                  x={cx - barW / 2 - 4}
                  y={pad.t + innerH - sH - 6}
                  textAnchor="middle"
                  fontSize="10"
                  fontWeight="700"
                  fill="#6d28d9"
                >
                  {row.sema}%
                </text>
                <text
                  x={cx + barW / 2 + 4}
                  y={pad.t + innerH - pH - 6}
                  textAnchor="middle"
                  fontSize="10"
                  fontWeight="700"
                  fill="#64748b"
                >
                  {row.placebo}%
                </text>
                <foreignObject
                  x={cx - groupW / 2 + 6}
                  y={h - 72}
                  width={groupW - 12}
                  height="68"
                >
                  <p className="text-center text-[10px] font-semibold leading-tight text-slate-600">
                    {row.label}
                  </p>
                </foreignObject>
              </g>
            );
          })}
        </svg>
      </div>
    </ModuleShell>
  );
}

export function SemaglutideVsTirzepatide() {
  return (
    <ModuleShell
      kicker="Direct comparison"
      title="SURMOUNT-5: tirzepatide vs semaglutide"
    >
      <div className="grid gap-3 p-4 sm:grid-cols-2">
        <div className="rounded-xl bg-slate-50 p-4">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
            Semaglutide 1.7 or 2.4 mg
          </p>
          <p className="mt-1 text-2xl font-bold text-slate-800">−13.7%</p>
          <p className="text-xs text-slate-600">mean body-weight change · 72 weeks</p>
        </div>
        <div className="rounded-xl bg-violet-50 p-4">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-violet-600">
            Tirzepatide 10 or 15 mg
          </p>
          <p className="mt-1 text-2xl font-bold text-violet-900">−20.2%</p>
          <p className="text-xs text-violet-800">
            mean body-weight change · 72 weeks
          </p>
        </div>
        <p className="sm:col-span-2 text-xs leading-relaxed text-slate-600">
          Obesity without diabetes. Semaglutide was dosed up to 2.4 mg. This
          trial does <strong>not</strong> compare tirzepatide with Wegovy HD
          7.2 mg.
        </p>
      </div>
    </ModuleShell>
  );
}

export function SemaglutideMechanismVisual() {
  const [route, setRoute] = useState("injection");
  const steps =
    route === "oral"
      ? [
          "Daily tablet + SNAC",
          "Limited gastric absorption",
          "GLP-1 receptor",
          "Insulin ↑ · glucagon ↓ · appetite ↓ · slower emptying",
          "Glycemic and weight effects",
        ]
      : [
          "Weekly injection",
          "Albumin binding · ~1-week half-life",
          "GLP-1 receptor",
          "Insulin ↑ · glucagon ↓ · appetite ↓ · slower emptying",
          "Glycemic, weight, and cardiometabolic effects",
        ];

  return (
    <ModuleShell
      kicker="Mechanism"
      title="Injection and oral routes are not milligram-equivalent"
    >
      <div className="px-4 pt-3">
        <ChipGroup
          label="Route"
          options={[
            { id: "injection", label: "Weekly injection" },
            { id: "oral", label: "Daily tablet (SNAC)" },
          ]}
          value={route}
          onChange={setRoute}
        />
      </div>
      <ol className="grid gap-2 p-4 sm:grid-cols-5">
        {steps.map((step, i) => (
          <li
            key={step}
            className="rounded-xl border border-violet-100 bg-violet-50 px-3 py-3 text-center"
          >
            <span className="text-[10px] font-bold uppercase tracking-wide text-violet-500">
              {i + 1}
            </span>
            <p className="mt-1 text-[11px] font-semibold leading-snug text-violet-900">
              {step}
            </p>
          </li>
        ))}
      </ol>
      <p className="border-t border-slate-100 px-4 py-3 text-xs leading-relaxed text-slate-600">
        SNAC appears only on the oral route. Do not treat oral milligrams as
        equivalent to injected milligrams.
      </p>
    </ModuleShell>
  );
}

export function SemaglutideTrialExplorer() {
  const [topic, setTopic] = useState("All");
  const [diabetes, setDiabetes] = useState("All");
  const topics = ["All", ...new Set(SEMAGLUTIDE_TRIALS.map((t) => t.topic))];
  const diabetesOpts = [
    "All",
    ...new Set(SEMAGLUTIDE_TRIALS.map((t) => t.diabetes)),
  ];
  const filtered = useMemo(
    () =>
      SEMAGLUTIDE_TRIALS.filter(
        (t) =>
          (topic === "All" || t.topic === topic) &&
          (diabetes === "All" || t.diabetes === diabetes)
      ),
    [topic, diabetes]
  );

  return (
    <ModuleShell kicker="Study explorer" title="Published semaglutide evidence">
      <div className="space-y-3 border-b border-slate-100 px-4 py-3">
        <ChipGroup
          label="Topic"
          options={topics.map((v) => ({ id: v, label: v }))}
          value={topic}
          onChange={setTopic}
        />
        <ChipGroup
          label="Diabetes status"
          options={diabetesOpts.map((v) => ({ id: v, label: v }))}
          value={diabetes}
          onChange={setDiabetes}
        />
      </div>
      <ul className="grid gap-3 p-4 sm:grid-cols-2">
        {filtered.map((t) => (
          <li
            key={t.id}
            className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            <p className="text-[10px] font-bold uppercase tracking-wide text-violet-600">
              {t.topic} · {t.duration}
            </p>
            <h3 className="mt-1 text-sm font-bold text-slate-900">{t.name}</h3>
            <p className="mt-1 text-xs text-slate-500">
              {t.authors} · {t.journal}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-slate-600">
              {t.participants}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-slate-700">
              <strong>Result:</strong> {t.result}
            </p>
            <p className="mt-1 text-xs leading-relaxed text-slate-500">
              <strong>Limitation:</strong> {t.limitation}
            </p>
            <a
              href={t.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex text-xs font-semibold text-violet-700 hover:underline"
            >
              Read study →
            </a>
          </li>
        ))}
      </ul>
    </ModuleShell>
  );
}
