"use client";

import { RETATRUTIDE_PHASE2_WEIGHT_LOSS } from "@/data/retatrutide-dosage-guide";

const W = 560;
const H = 240;
const PAD = { t: 20, r: 16, b: 42, l: 40 };
const INNER_W = W - PAD.l - PAD.r;
const INNER_H = H - PAD.t - PAD.b;
const MAX = 26;

export function RetatrutideWeightLossChart() {
  const groupW = INNER_W / RETATRUTIDE_PHASE2_WEIGHT_LOSS.length;
  const barW = Math.min(18, groupW * 0.28);

  function xCenter(i) {
    return PAD.l + groupW * i + groupW / 2;
  }
  function y(pct) {
    return PAD.t + INNER_H - (pct / MAX) * INNER_H;
  }

  return (
    <div className="mt-5 overflow-hidden rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
            Phase 2 average body-weight change
          </p>
          <p className="mt-0.5 text-sm font-semibold text-slate-900">
            24 weeks vs. 48 weeks
          </p>
        </div>
        <ul className="flex gap-3 text-[11px] font-semibold text-slate-600">
          <li className="inline-flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-sm bg-violet-300" />
            Week 24
          </li>
          <li className="inline-flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-sm bg-violet-600" />
            Week 48
          </li>
        </ul>
      </div>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="h-auto w-full"
        role="img"
        aria-label="Phase 2 retatrutide average weight loss by dose at 24 and 48 weeks"
      >
        {[0, 8, 16, 24].map((tick) => (
          <g key={tick}>
            <line
              x1={PAD.l}
              y1={y(tick)}
              x2={W - PAD.r}
              y2={y(tick)}
              stroke="#e2e8f0"
              strokeWidth="1"
            />
            <text
              x={PAD.l - 8}
              y={y(tick)}
              textAnchor="end"
              dominantBaseline="middle"
              fontSize="10"
              className="fill-slate-400"
            >
              −{tick}%
            </text>
          </g>
        ))}

        {RETATRUTIDE_PHASE2_WEIGHT_LOSS.map((row, i) => {
          const cx = xCenter(i);
          const x24 = cx - barW - 2;
          const x48 = cx + 2;
          const h24 = (row.week24 / MAX) * INNER_H;
          const h48 = (row.week48 / MAX) * INNER_H;
          const isTop = row.dose === "12 mg";
          return (
            <g key={row.dose}>
              <rect
                x={x24}
                y={y(row.week24)}
                width={barW}
                height={h24}
                rx="3"
                fill="#c4b5fd"
              />
              <rect
                x={x48}
                y={y(row.week48)}
                width={barW}
                height={h48}
                rx="3"
                fill={isTop ? "#6d28d9" : "#7c3aed"}
              />
              <text
                x={cx}
                y={H - 14}
                textAnchor="middle"
                fontSize="11"
                fontWeight="600"
                className="fill-slate-600"
              >
                {row.dose}
              </text>
              <text
                x={x48 + barW / 2}
                y={y(row.week48) - 6}
                textAnchor="middle"
                fontSize="9"
                fontWeight="700"
                fill="#6d28d9"
              >
                −{row.week48}%
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
