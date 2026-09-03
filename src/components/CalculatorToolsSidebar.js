"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const TOOLS = [
  {
    id: "peptide",
    href: "/calculator",
    label: "Peptide Dosage",
    shortLabel: "Peptide",
    description: "Reconstitution & injection volumes",
    icon: "syringe",
  },
  {
    id: "calorie-deficit",
    href: "/calculator/calorie-deficit",
    label: "Calorie Deficit",
    shortLabel: "Calories",
    description: "Weight-loss timeline & macros",
    icon: "scale",
  },
];

export function CalculatorToolsSidebar() {
  const pathname = usePathname();

  return (
    <nav
      className="flex flex-wrap gap-2 sm:gap-3"
      aria-label="Calculator tools"
    >
      {TOOLS.map((tool) => {
        const active =
          tool.href === "/calculator"
            ? pathname === "/calculator"
            : pathname.startsWith(tool.href);
        return (
          <Link
            key={tool.id}
            href={tool.href}
            className={`inline-flex min-h-[44px] min-w-0 flex-1 items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition sm:flex-none sm:justify-start sm:px-5 ${
              active
                ? "border-indigo-600 bg-indigo-600 text-white shadow-sm"
                : "border-slate-200 bg-white text-slate-700 hover:border-indigo-100 hover:bg-indigo-50/40"
            }`}
          >
            <span
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                active ? "bg-white/15 text-white" : "bg-slate-100 text-slate-600"
              }`}
            >
              <ToolIcon name={tool.icon} />
            </span>
            <span className="min-w-0 text-left">
              <span className="block truncate">{tool.label}</span>
              <span
                className={`mt-0.5 hidden text-xs font-normal leading-snug sm:block ${
                  active ? "text-indigo-100" : "text-slate-500"
                }`}
              >
                {tool.description}
              </span>
            </span>
          </Link>
        );
      })}
    </nav>
  );
}

function ToolIcon({ name }) {
  const c = {
    className: "h-4 w-4",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };
  if (name === "scale") {
    return (
      <svg {...c}>
        <path d="M12 3v18" />
        <path d="M5 7h14" />
        <path d="M7 7 5 12h4L7 7Z" />
        <path d="M17 7l2 5h-4l2-5Z" />
        <path d="M8 21h8" />
      </svg>
    );
  }
  return (
    <svg {...c}>
      <path d="M9 3h6M10 3v3l-6 6 4 4 6-6V9" />
      <path d="m7 17 2 2" />
    </svg>
  );
}
