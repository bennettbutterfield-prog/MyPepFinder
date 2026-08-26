"use client";

import { useId, useState } from "react";

/**
 * Anatomical mapping for Wikipedia-portal-style radial labels.
 * x/y are percentages of the diagram container.
 * target is the body hotspot in the 400×520 figure viewBox.
 */
const GOAL_NODES = [
  {
    id: "neuro",
    label: "Neuro",
    shortLabel: "Brain & Focus",
    x: 50,
    y: 4,
    target: { x: 200, y: 58 },
    region: "head",
  },
  {
    id: "circadian",
    label: "Circadian",
    shortLabel: "Sleep",
    x: 88,
    y: 18,
    target: { x: 208, y: 62 },
    region: "head",
  },
  {
    id: "dermal",
    label: "Dermal",
    shortLabel: "Skin & Hair",
    x: 94,
    y: 48,
    target: { x: 228, y: 160 },
    region: "skin",
  },
  {
    id: "secretagogue",
    label: "Secretagogue",
    shortLabel: "Muscle & Hormones",
    x: 84,
    y: 78,
    target: { x: 258, y: 200 },
    region: "muscle",
  },
  {
    id: "metabolic",
    label: "Metabolic",
    shortLabel: "Fat Loss",
    x: 50,
    y: 94,
    target: { x: 200, y: 262 },
    region: "abdomen",
  },
  {
    id: "injury-recovery",
    label: "Injury Recovery",
    shortLabel: "Repair & recovery",
    x: 16,
    y: 78,
    target: { x: 176, y: 400 },
    region: "joint",
  },
  {
    id: "cellular",
    label: "Cellular",
    shortLabel: "Longevity",
    x: 6,
    y: 48,
    target: { x: 200, y: 190 },
    region: "core",
  },
];

/**
 * @param {{
 *   selectedId: string;
 *   onSelect: (id: string) => void;
 * }} props
 */
export function BodyGoalSelector({ selectedId, onSelect }) {
  const uid = useId().replace(/:/g, "");
  const [hoveredId, setHoveredId] = useState(null);
  const activeId = hoveredId ?? selectedId;
  const activeNode = GOAL_NODES.find((n) => n.id === activeId) ?? GOAL_NODES[0];

  return (
    <div className="mt-5 sm:mt-7">
      <div
        className="relative mx-auto aspect-square w-full max-w-[360px] sm:max-w-[520px] lg:max-w-[600px]"
        onMouseLeave={() => setHoveredId(null)}
      >
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 400 400"
          aria-hidden="true"
        >
          <defs>
            <radialGradient id={`${uid}-glow`} cx="50%" cy="42%" r="48%">
              <stop offset="0%" stopColor="#5eead4" stopOpacity="0.22" />
              <stop offset="55%" stopColor="#7dd3fc" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
          </defs>

          <circle cx="200" cy="200" r="172" fill={`url(#${uid}-glow)`} />
          <circle
            cx="200"
            cy="200"
            r="172"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="1"
            strokeDasharray="3 5"
            opacity="0.65"
          />

          {GOAL_NODES.map((node) => {
            const isLit = node.id === activeId;
            const lx = (node.x / 100) * 400;
            const ly = (node.y / 100) * 400;
            const bodyLeft = 200 - 68;
            const bodyTop = 200 - 112;
            const tx = bodyLeft + (node.target.x / 400) * 136;
            const ty = bodyTop + (node.target.y / 520) * 224;
            return (
              <g key={node.id}>
                <line
                  x1={lx}
                  y1={ly}
                  x2={tx}
                  y2={ty}
                  stroke={isLit ? "#0d9488" : "#94a3b8"}
                  strokeWidth={isLit ? 1.75 : 1}
                  strokeOpacity={isLit ? 0.95 : 0.35}
                  className="transition-all duration-300"
                />
                <circle
                  cx={tx}
                  cy={ty}
                  r={isLit ? 4 : 2.5}
                  fill={isLit ? "#0d9488" : "#64748b"}
                  className="transition-all duration-300"
                />
              </g>
            );
          })}
        </svg>

        <div className="pointer-events-none absolute left-1/2 top-1/2 w-[44%] -translate-x-1/2 -translate-y-1/2 sm:w-[38%]">
          <BodySilhouette
            activeRegion={activeNode.region}
            selectedId={selectedId}
          />
        </div>

        {GOAL_NODES.map((node) => {
          const active = selectedId === node.id;
          const hovered = hoveredId === node.id;
          return (
            <button
              key={node.id}
              type="button"
              onClick={() => onSelect(node.id)}
              onMouseEnter={() => setHoveredId(node.id)}
              onFocus={() => setHoveredId(node.id)}
              onBlur={() => setHoveredId(null)}
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              className={`absolute z-10 max-w-[5.75rem] -translate-x-1/2 -translate-y-1/2 rounded-full border px-2 py-1 text-center shadow-sm transition duration-200 sm:max-w-[7.75rem] sm:px-2.5 sm:py-1.5 lg:max-w-[8.5rem] lg:px-3 lg:py-2 ${
                active
                  ? "scale-105 border-teal-500 bg-teal-600 text-white shadow-teal-500/25"
                  : hovered
                    ? "scale-105 border-teal-300 bg-teal-50 text-teal-900"
                    : "border-slate-200 bg-white/95 text-slate-800 hover:border-sky-200 hover:bg-sky-50"
              }`}
              aria-pressed={active}
            >
              <span className="block text-[10px] font-semibold leading-tight sm:text-[11px] lg:text-xs">
                {node.label}
              </span>
              <span
                className={`mt-0.5 block text-[8px] leading-tight sm:text-[9px] lg:text-[10px] ${
                  active ? "text-teal-100" : "text-slate-500"
                }`}
              >
                {node.shortLabel}
              </span>
            </button>
          );
        })}
      </div>

      <p className="mt-3 text-center text-xs text-slate-500 sm:mt-4">
        Hover or tap a category to highlight the related body region, then
        continue.
      </p>
    </div>
  );
}

function BodySilhouette({ activeRegion, selectedId }) {
  const lit = (region) => activeRegion === region;
  const accent = "#0d9488";
  const accentFill = "#14b8a6";
  const stroke = "#475569";
  const fill = "#f8fafc";

  return (
    <svg
      viewBox="0 0 400 520"
      className="h-auto w-full"
      role="img"
      aria-label="Human body diagram for selecting research focus"
    >
      <circle
        cx="200"
        cy="280"
        r="186"
        fill="none"
        stroke="#cbd5e1"
        strokeWidth="1"
        strokeOpacity="0.35"
      />

      {/* Head — compact, proportionate */}
      <ellipse
        cx="200"
        cy="58"
        rx="16"
        ry="20"
        fill={lit("head") ? accentFill : fill}
        fillOpacity={lit("head") ? 0.45 : 1}
        stroke={lit("head") ? accent : stroke}
        strokeWidth={lit("head") ? 1.7 : 1.3}
        className="transition-all duration-300"
      />

      {/* Neck — thin */}
      <path
        d="M194 76 L194 100 L206 100 L206 76 Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="1.2"
      />

      {/* Shoulders + torso — V-taper, narrow waist */}
      <path
        d="M176 100
           L224 100
           L232 116
           L236 150
           L230 210
           L220 255
           L210 285
           L200 292
           L190 285
           L180 255
           L170 210
           L164 150
           L168 116
           Z"
        fill={
          lit("skin") || lit("core") || lit("abdomen") ? accentFill : fill
        }
        fillOpacity={
          lit("skin") ? 0.38 : lit("core") || lit("abdomen") ? 0.22 : 1
        }
        stroke={lit("skin") || lit("core") || lit("abdomen") ? accent : stroke}
        strokeWidth={lit("skin") ? 1.7 : 1.3}
        strokeLinejoin="round"
        className="transition-all duration-300"
      />

      {/* Left arm — long, lean */}
      <path
        d="M176 108
           C158 124 146 152 138 184
           C132 208 130 232 134 252
           C136 260 144 260 146 252
           C148 234 150 210 156 188
           C162 158 168 130 176 116
           Z"
        fill={lit("muscle") ? accentFill : fill}
        fillOpacity={lit("muscle") ? 0.5 : 1}
        stroke={lit("muscle") ? accent : stroke}
        strokeWidth={lit("muscle") ? 1.7 : 1.3}
        strokeLinejoin="round"
        className="transition-all duration-300"
      />

      {/* Right arm */}
      <path
        d="M224 108
           C242 124 254 152 262 184
           C268 208 270 232 266 252
           C264 260 256 260 254 252
           C252 234 250 210 244 188
           C238 158 232 130 224 116
           Z"
        fill={lit("muscle") ? accentFill : fill}
        fillOpacity={lit("muscle") ? 0.5 : 1}
        stroke={lit("muscle") ? accent : stroke}
        strokeWidth={lit("muscle") ? 1.7 : 1.3}
        strokeLinejoin="round"
        className="transition-all duration-300"
      />

      {/* Left leg — long, tapered */}
      <path
        d="M190 288
           L180 288
           L174 360
           L170 420
           L168 472
           L166 502
           L174 506
           L182 500
           L184 470
           L186 418
           L190 358
           L196 292
           Z"
        fill={lit("joint") ? accentFill : fill}
        fillOpacity={lit("joint") ? 0.28 : 1}
        stroke={lit("joint") ? accent : stroke}
        strokeWidth={lit("joint") ? 1.7 : 1.3}
        strokeLinejoin="round"
        className="transition-all duration-300"
      />

      {/* Right leg */}
      <path
        d="M210 288
           L220 288
           L226 360
           L230 420
           L232 472
           L234 502
           L226 506
           L218 500
           L216 470
           L214 418
           L210 358
           L204 292
           Z"
        fill={lit("joint") ? accentFill : fill}
        fillOpacity={lit("joint") ? 0.28 : 1}
        stroke={lit("joint") ? accent : stroke}
        strokeWidth={lit("joint") ? 1.7 : 1.3}
        strokeLinejoin="round"
        className="transition-all duration-300"
      />

      {/* Region markers */}
      <ellipse
        cx="200"
        cy="54"
        rx="10"
        ry="8"
        fill={accentFill}
        fillOpacity={lit("head") ? 0.55 : 0}
        className="transition-all duration-300"
      />
      <ellipse
        cx="200"
        cy="188"
        rx="12"
        ry="10"
        fill={accentFill}
        fillOpacity={lit("core") ? 0.5 : 0}
        stroke={lit("core") ? accent : "none"}
        strokeWidth="1.3"
        className="transition-all duration-300"
      />
      <ellipse
        cx="200"
        cy="260"
        rx="18"
        ry="12"
        fill={accentFill}
        fillOpacity={lit("abdomen") ? 0.45 : 0}
        stroke={lit("abdomen") ? accent : "none"}
        strokeWidth="1.3"
        className="transition-all duration-300"
      />
      <circle
        cx="176"
        cy="400"
        r="6"
        fill={accentFill}
        fillOpacity={lit("joint") ? 0.7 : 0}
        stroke={lit("joint") ? accent : "none"}
        strokeWidth="1.3"
        className="transition-all duration-300"
      />
      <circle
        cx="224"
        cy="400"
        r="6"
        fill={accentFill}
        fillOpacity={lit("joint") ? 0.7 : 0}
        stroke={lit("joint") ? accent : "none"}
        strokeWidth="1.3"
        className="transition-all duration-300"
      />

      {selectedId ? (
        <circle
          cx="200"
          cy="280"
          r="188"
          fill="none"
          stroke={accentFill}
          strokeWidth="1.1"
          strokeOpacity="0.2"
        />
      ) : null}
    </svg>
  );
}
