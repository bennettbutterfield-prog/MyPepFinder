"use client";

import { useMemo, useState } from "react";

const MIN_LBS = 150;
const MAX_LBS = 500;

/**
 * Single-peptide expected weight trajectory chart (mockup style).
 */
export function PeptideResultsChart({
  name,
  lossPct = 24,
  startingWeightDefault = 220,
}) {
  const [startLbs, setStartLbs] = useState(() =>
    Math.min(MAX_LBS, Math.max(MIN_LBS, startingWeightDefault))
  );

  const start = useMemo(() => {
    const n = Number(startLbs);
    return Number.isFinite(n) && n > 0 ? n : startingWeightDefault;
  }, [startLbs, startingWeightDefault]);

  const end = Math.round(start * (1 - lossPct / 100));
  const loss = start - end;

  const points = [0, 12, 24, 36, 48].map((week) => {
    const t = week / 48;
    const progress = 1 - Math.pow(1 - t, 1.55);
    return { week, lbs: start - loss * progress };
  });

  const w = 560;
  const h = 220;
  const pad = { t: 16, r: 80, b: 34, l: 50 };
  const innerW = w - pad.l - pad.r;
  const innerH = h - pad.t - pad.b;
  const minY = end - 8;
  const maxY = start + 6;
  const yTicks = [start, Math.round((start + end) / 2), end];

  function x(week) {
    return pad.l + (week / 48) * innerW;
  }
  function y(lbs) {
    return pad.t + ((maxY - lbs) / (maxY - minY)) * innerH;
  }
  const d = points
    .map(
      (p, i) =>
        `${i === 0 ? "M" : "L"} ${x(p.week).toFixed(1)} ${y(p.lbs).toFixed(1)}`
    )
    .join(" ");

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-100 px-4 py-3 sm:px-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <label
            htmlFor="peptide-start-weight"
            className="text-xs font-semibold text-slate-600"
          >
            Starting Weight
          </label>
          <span className="text-sm font-semibold tabular-nums text-slate-900">
            {start} lbs
          </span>
        </div>
        <input
          id="peptide-start-weight"
          type="range"
          min={MIN_LBS}
          max={MAX_LBS}
          step={1}
          value={start}
          onChange={(e) => setStartLbs(Number(e.target.value))}
          className="mt-2 w-full accent-violet-600"
          aria-valuemin={MIN_LBS}
          aria-valuemax={MAX_LBS}
          aria-valuenow={start}
          aria-valuetext={`${start} pounds`}
        />
        <div className="mt-1 flex justify-between text-[10px] tabular-nums text-slate-400">
          <span>{MIN_LBS} lbs</span>
          <span>{MAX_LBS} lbs</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-[minmax(0,1fr)_220px]">
        <div className="min-w-0 px-3 py-3 sm:px-4 sm:py-4">
          <svg
            viewBox={`0 0 ${w} ${h}`}
            className="h-auto w-full"
            role="img"
            aria-label={`${name} expected results chart`}
          >
            {yTicks.map((lbs) => (
              <g key={`y-${lbs}`}>
                <line
                  x1={pad.l}
                  y1={y(lbs)}
                  x2={w - pad.r}
                  y2={y(lbs)}
                  stroke="#e2e8f0"
                  strokeWidth="1"
                />
                <text
                  x={pad.l - 8}
                  y={y(lbs)}
                  textAnchor="end"
                  dominantBaseline="middle"
                  fontSize="10"
                  className="fill-slate-400"
                >
                  {lbs}
                </text>
              </g>
            ))}
            {[0, 12, 24, 36, 48].map((week) => (
              <g key={week}>
                <line
                  x1={x(week)}
                  y1={pad.t}
                  x2={x(week)}
                  y2={h - pad.b}
                  stroke="#e2e8f0"
                  strokeWidth="1"
                />
                <text
                  x={x(week)}
                  y={h - 10}
                  textAnchor="middle"
                  fontSize="10"
                  className="fill-slate-400"
                >
                  {week}w
                </text>
              </g>
            ))}
            <path
              d={d}
              fill="none"
              stroke="#7c3aed"
              strokeWidth="2.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx={x(0)} cy={y(start)} r="3.5" fill="#7c3aed" />
            <circle cx={x(48)} cy={y(end)} r="4.5" fill="#7c3aed" />
            <text
              x={x(48) + 8}
              y={y(end) + 4}
              textAnchor="start"
              fontSize="11"
              fontWeight="700"
              fill="#7c3aed"
            >
              {end} lbs
            </text>
          </svg>
        </div>

        <div className="flex h-full flex-col justify-center border-t border-slate-100 bg-violet-50 px-4 py-4 text-left lg:border-l lg:border-t-0">
          <p className="text-xs font-semibold uppercase tracking-wide text-violet-600">
            You could lose
          </p>
          <p className="mt-1 text-2xl font-bold tabular-nums text-violet-900">
            ~{loss} lbs ({lossPct}%)
          </p>
          <p className="mt-1 text-sm text-violet-800">in 48 weeks</p>
          <p className="mt-3 text-[11px] leading-relaxed text-violet-700/80">
            Estimated range based on published average weight-loss percentages.
            Individual results vary.
          </p>
          <button
            type="button"
            className="mt-3 self-start text-xs font-semibold text-violet-700 underline-offset-2 hover:underline"
          >
            How is this calculated?
          </button>
        </div>
      </div>
    </div>
  );
}
