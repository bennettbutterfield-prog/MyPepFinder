"use client";

import { useMemo, useState } from "react";

/**
 * Interactive expected-results chart for weight-loss style goals.
 */
export function GoalResultsChart({ peptides, startingWeightDefault = 220 }) {
  const [startLbs, setStartLbs] = useState(String(startingWeightDefault));
  const [dose, setDose] = useState("standard");

  const start = useMemo(() => {
    const n = Number(startLbs);
    return Number.isFinite(n) && n > 0 ? n : startingWeightDefault;
  }, [startLbs, startingWeightDefault]);

  const series = useMemo(() => {
    const colors = ["#2563eb", "#16a34a", "#7c3aed"];
    return peptides.slice(0, 3).map((p, i) => {
      const lossPct = (p.chartLossPct || 15 + i * 3) / 100;
      const doseFactor = dose === "high" ? 1.08 : dose === "low" ? 0.85 : 1;
      const end = Math.round(start * (1 - lossPct * doseFactor));
      const points = [0, 12, 24, 36, 48].map((week) => {
        const t = week / 48;
        // ease-out curve
        const progress = 1 - Math.pow(1 - t, 1.55);
        const lbs = start - (start - end) * progress;
        return { week, lbs };
      });
      return {
        name: p.name,
        color: colors[i],
        end,
        loss: start - end,
        lossPct: Math.round(((start - end) / start) * 100),
        points,
      };
    });
  }, [peptides, start, dose]);

  const top = series[0];
  const minY = Math.min(...series.flatMap((s) => s.points.map((p) => p.lbs))) - 8;
  const maxY = start + 4;
  const w = 560;
  const h = 220;
  const pad = { t: 16, r: 56, b: 28, l: 40 };
  const innerW = w - pad.l - pad.r;
  const innerH = h - pad.t - pad.b;

  function x(week) {
    return pad.l + (week / 48) * innerW;
  }
  function y(lbs) {
    return pad.t + ((maxY - lbs) / (maxY - minY)) * innerH;
  }
  function pathFor(points) {
    return points
      .map((p, i) => `${i === 0 ? "M" : "L"} ${x(p.week).toFixed(1)} ${y(p.lbs).toFixed(1)}`)
      .join(" ");
  }

  return (
    <div className="grid gap-4 lg:grid-cols-[200px_1fr]">
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <label className="block text-xs font-semibold text-slate-700">
          Starting Weight
        </label>
        <div className="mt-2 flex items-center gap-2">
          <input
            type="text"
            inputMode="decimal"
            value={startLbs}
            onChange={(e) => setStartLbs(e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />
          <span className="text-xs text-slate-500">lbs</span>
        </div>
        <input
          type="range"
          min="140"
          max="320"
          value={Math.min(320, Math.max(140, start))}
          onChange={(e) => setStartLbs(e.target.value)}
          className="mt-3 w-full accent-blue-600"
        />
        <label className="mt-4 block text-xs font-semibold text-slate-700">
          Weekly Dose
        </label>
        <select
          value={dose}
          onChange={(e) => setDose(e.target.value)}
          className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-blue-500"
        >
          <option value="low">Low</option>
          <option value="standard">Standard</option>
          <option value="high">High</option>
        </select>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <svg viewBox={`0 0 ${w} ${h}`} className="h-auto w-full" role="img" aria-label="Expected results chart">
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
                y={h - 8}
                textAnchor="middle"
                className="fill-slate-400"
                fontSize="10"
              >
                {week}w
              </text>
            </g>
          ))}
          {series.map((s) => (
            <g key={s.name}>
              <path
                d={pathFor(s.points)}
                fill="none"
                stroke={s.color}
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <circle
                cx={x(48)}
                cy={y(s.end)}
                r="4"
                fill={s.color}
              />
              <text
                x={x(48) + 8}
                y={y(s.end) + 3}
                fontSize="10"
                fontWeight="600"
                fill={s.color}
              >
                {s.end} lbs
              </text>
            </g>
          ))}
        </svg>
        <div className="mt-2 flex flex-wrap gap-3 text-xs">
          {series.map((s) => (
            <span key={s.name} className="inline-flex items-center gap-1.5 text-slate-600">
              <span className="h-2 w-2 rounded-full" style={{ background: s.color }} />
              {s.name}
            </span>
          ))}
        </div>
        {top ? (
          <p className="mt-3 rounded-lg bg-indigo-50 px-3 py-2.5 text-sm text-indigo-900">
            <strong>{top.name}:</strong> You could lose ~{top.loss} lbs ({top.lossPct}%)
            in 48 weeks.
          </p>
        ) : null}
      </div>
    </div>
  );
}
