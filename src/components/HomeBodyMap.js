"use client";

import Link from "next/link";
import { useState } from "react";

/**
 * Mockup body-map: colored goal nodes around a lean figure silhouette.
 */
const NODES = [
  {
    id: "cognition",
    label: "Cognition",
    sub: "Focus, Memory, Mental Clarity",
    color: "#4f46e5",
    soft: "#eef2ff",
    x: 8,
    y: 8,
    target: { x: 50, y: 12 },
    href: "/goals/improve-focus",
  },
  {
    id: "muscle",
    label: "Muscle",
    sub: "Build Muscle, Strength",
    color: "#0d9488",
    soft: "#ccfbf1",
    x: 88,
    y: 10,
    target: { x: 62, y: 28 },
    href: "/goals/build-muscle",
  },
  {
    id: "weight",
    label: "Weight",
    sub: "Fat Loss, Metabolism",
    color: "#16a34a",
    soft: "#dcfce7",
    x: 92,
    y: 36,
    target: { x: 50, y: 48 },
    href: "/goals/lose-weight",
  },
  {
    id: "recovery",
    label: "Recovery",
    sub: "Healing, Reduce Inflammation",
    color: "#ea580c",
    soft: "#ffedd5",
    x: 90,
    y: 68,
    target: { x: 58, y: 72 },
    href: "/goals/recovery",
  },
  {
    id: "hair",
    label: "Hair",
    sub: "Hair Growth, Prevent Loss",
    color: "#db2777",
    soft: "#fce7f3",
    x: 8,
    y: 32,
    target: { x: 50, y: 10 },
    href: "/goals/hair-growth",
  },
  {
    id: "skin",
    label: "Skin",
    sub: "Anti-aging, Skin Health",
    color: "#e11d48",
    soft: "#ffe4e6",
    x: 6,
    y: 58,
    target: { x: 48, y: 30 },
    href: "/goals/skin-health",
  },
  {
    id: "sexual",
    label: "Libido",
    sub: "Desire, Performance, Fertility",
    color: "#d97706",
    soft: "#fef3c7",
    x: 8,
    y: 82,
    target: { x: 50, y: 58 },
    href: "/goals/sexual-health",
  },
  {
    id: "sleep",
    label: "Sleep & Mood",
    sub: "Better Sleep, Mood Support",
    color: "#6366f1",
    soft: "#e0e7ff",
    x: 78,
    y: 88,
    target: { x: 50, y: 14 },
    href: "/goals/better-sleep",
  },
];

export function HomeBodyMap() {
  const [active, setActive] = useState("cognition");
  const current = NODES.find((n) => n.id === active) ?? NODES[0];

  return (
    <div className="relative mx-auto w-full max-w-[420px] select-none lg:max-w-none">
      <div
        className="relative aspect-[4/5] w-full"
        onMouseLeave={() => setActive("cognition")}
      >
        {/* Soft figure backdrop */}
        <div className="absolute inset-[12%] rounded-[40%] bg-gradient-to-b from-indigo-50/80 via-slate-50/40 to-transparent" />

        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          aria-hidden
        >
          {/* Connector lines */}
          {NODES.map((node) => (
            <line
              key={`line-${node.id}`}
              x1={node.x}
              y1={node.y}
              x2={node.target.x}
              y2={node.target.y}
              stroke={node.id === active ? node.color : "#cbd5e1"}
              strokeWidth={node.id === active ? 0.45 : 0.28}
              strokeDasharray={node.id === active ? "0" : "1.2 1.2"}
              opacity={node.id === active ? 0.9 : 0.55}
            />
          ))}

          {/* Lean athletic silhouette */}
          <g fill="#94a3b8" opacity="0.28">
            <ellipse cx="50" cy="12" rx="5.2" ry="6.2" />
            <path d="M50 18.5c-3.2 0-5.5 1.8-6.4 4.2-.6 1.6-1.2 4.2-1.5 7.2-.2 2.2.4 3.2 1.6 3.6l.8 22.5c.1 2.4 1.4 4.2 3.2 4.6.8.2 1.5-.1 2.3-.1s1.5.3 2.3.1c1.8-.4 3.1-2.2 3.2-4.6l.8-22.5c1.2-.4 1.8-1.4 1.6-3.6-.3-3-.9-5.6-1.5-7.2C55.5 20.3 53.2 18.5 50 18.5Z" />
            <path d="M42.5 30.5c-3.2 1.2-6.2 4.8-7.2 8.8-1 4-.4 7.2 1.2 8.2 1.4.8 2.6-.2 3.2-2.2l2.8-9.2" />
            <path d="M57.5 30.5c3.2 1.2 6.2 4.8 7.2 8.8 1 4 .4 7.2-1.2 8.2-1.4.8-2.6-.2-3.2-2.2l-2.8-9.2" />
            <path d="M45.2 56.5c-1.2 8.5-2.4 16-3.8 24.5-.4 2.4 1.2 3.8 2.8 3.2 1.4-.5 2.2-2 2.6-4.2l2.2-14" />
            <path d="M54.8 56.5c1.2 8.5 2.4 16 3.8 24.5.4 2.4-1.2 3.8-2.8 3.2-1.4-.5-2.2-2-2.6-4.2l-2.2-14" />
          </g>

          {/* Hotspots on body */}
          {NODES.map((node) => (
            <circle
              key={`dot-${node.id}`}
              cx={node.target.x}
              cy={node.target.y}
              r={node.id === active ? 1.8 : 1.3}
              fill={node.color}
              opacity={node.id === active ? 1 : 0.75}
              className="transition-all"
            />
          ))}
        </svg>

        {/* Goal bubbles */}
        {NODES.map((node) => {
          const isActive = node.id === active;
          return (
            <Link
              key={node.id}
              href={node.href}
              onMouseEnter={() => setActive(node.id)}
              onFocus={() => setActive(node.id)}
              className="absolute z-10 -translate-x-1/2 -translate-y-1/2 rounded-xl border bg-white/95 px-2.5 py-1.5 shadow-sm backdrop-blur-sm transition"
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                borderColor: isActive ? node.color : "#e2e8f0",
                boxShadow: isActive
                  ? `0 8px 24px ${node.color}33`
                  : "0 2px 8px rgba(15,23,42,0.06)",
                backgroundColor: isActive ? node.soft : "rgba(255,255,255,0.95)",
                maxWidth: "9.5rem",
              }}
            >
              <span
                className="block text-[11px] font-bold leading-tight sm:text-xs"
                style={{ color: node.color }}
              >
                {node.label}
              </span>
              <span className="mt-0.5 block text-[9px] leading-snug text-slate-500 sm:text-[10px]">
                {node.sub}
              </span>
            </Link>
          );
        })}
      </div>

      <p className="mt-2 flex items-center justify-center gap-1.5 text-center text-[11px] text-slate-400">
        <ClickIcon />
        Hover or click any area to explore peptides
      </p>
      <p className="sr-only">Currently highlighting {current.label}</p>
    </div>
  );
}

function ClickIcon() {
  return (
    <svg
      className="h-3.5 w-3.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M9 11V5a2 2 0 1 1 4 0v6" strokeLinecap="round" />
      <path
        d="M13 11v-1a2 2 0 1 1 4 0v4c0 4-2.5 7-6 7H9.5C6.5 21 5 18.5 5 16v-2a2 2 0 1 1 4 0"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
