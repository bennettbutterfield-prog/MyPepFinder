"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const FILTERS = [
  "All",
  "Tissue Repair Research",
  "Dermal Research",
  "Metabolic Research",
  "Secretagogue Research",
  "Cellular Research",
  "Neuro Research",
  "Circadian Research",
];

function norm(s) {
  return s.trim().toLowerCase();
}

function matches(query, text) {
  const q = norm(query);
  if (!q) return true;
  return norm(text).includes(q);
}

const CATEGORY_BY_TITLE = {
  "AOD-9604": ["Metabolic Research"],
  "5-Amino-1MQ": ["Metabolic Research", "Cellular Research"],
  "Amino H2O": ["Cellular Research"],
  "BPC-157": ["Tissue Repair Research", "Cellular Research"],
  "BPC-157/TB-500 (Wolverine)": ["Tissue Repair Research", "Cellular Research"],
  Cagrilintide: ["Metabolic Research"],
  "CJC-1295 / Ipamorelin (No DAC)": ["Secretagogue Research"],
  DSIP: ["Circadian Research", "Neuro Research"],
  Epithalon: ["Cellular Research", "Circadian Research"],
  "GHK-Cu": ["Dermal Research", "Cellular Research", "Tissue Repair Research"],
  GLOW: ["Tissue Repair Research", "Dermal Research", "Cellular Research"],
  "GLP-3 (RT)": ["Metabolic Research"],
  Glutathione: ["Cellular Research", "Dermal Research"],
  "IGF-1 LR3": ["Secretagogue Research"],
  Ipamorelin: ["Secretagogue Research"],
  KLOW: ["Tissue Repair Research", "Dermal Research", "Cellular Research"],
  KPV: ["Tissue Repair Research", "Dermal Research", "Cellular Research"],
  "Melanotan I": ["Dermal Research"],
  "Melanotan II": ["Dermal Research"],
  "MOTS-C": ["Metabolic Research", "Cellular Research"],
  "NAD+": ["Cellular Research", "Neuro Research"],
  "PT-141": ["Neuro Research"],
  SELANK: ["Neuro Research", "Circadian Research"],
  SEMAX: ["Neuro Research"],
  "SNAP-8": ["Dermal Research"],
  "TB-500": ["Tissue Repair Research", "Cellular Research"],
  Tesamorlin: ["Secretagogue Research"],
  "Thymosin Alpha-1": ["Cellular Research"],
};

function categoriesForTitle(title) {
  return CATEGORY_BY_TITLE[title] ?? ["Cellular Research"];
}

/**
 * @param {{ entries: { slug: string; title: string }[] }} props
 */
export function ResearchLibrarySearch({ entries }) {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = useMemo(() => {
    const q = norm(query);
    return entries.filter((e) => {
      const queryMatch =
        !q ||
        matches(query, e.title) ||
        matches(query, e.slug) ||
        matches(query, e.slug.replace(/-/g, " "));
      if (!queryMatch) return false;
      if (activeFilter === "All") return true;
      return categoriesForTitle(e.title).includes(activeFilter);
    });
  }, [entries, query, activeFilter]);

  const active = norm(query).length > 0;

  return (
    <div>
      <label
        htmlFor="research-library-search"
        className="block text-sm font-semibold text-slate-900"
      >
        Search compounds
      </label>
      <div className="relative mt-2 w-full">
        <span
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          aria-hidden
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </span>
        <input
          id="research-library-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Name or shorthand…"
          autoComplete="off"
          className="w-full rounded-2xl border border-slate-200 bg-white py-3.5 pl-12 pr-4 text-sm text-slate-900 shadow-sm outline-none ring-amber-400/0 transition placeholder:text-slate-400 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 sm:text-base"
        />
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {FILTERS.map((filter) => {
          const selected = filter === activeFilter;
          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`inline-flex min-h-[38px] items-center justify-center rounded-full px-4 text-xs font-semibold transition ${
                selected
                  ? "border border-amber-500 bg-amber-100 text-amber-900"
                  : "border border-slate-300 bg-white text-slate-700 hover:border-slate-400"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>
      {active ? (
        <p className="mt-2 text-xs text-slate-500" aria-live="polite">
          {filtered.length === 0
            ? "No matches."
            : `${filtered.length} match${filtered.length === 1 ? "" : "es"}`}
        </p>
      ) : null}

      {filtered.length === 0 && active ? (
        <p className="mt-8 rounded-2xl border border-dashed border-slate-200 bg-slate-50/80 px-4 py-8 text-center text-sm text-slate-600">
          Try another spelling or clear the search to see all compounds.
        </p>
      ) : (
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((item) => (
            <li key={item.slug}>
              <Link
                href={`/peptides/${item.slug}`}
                className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-amber-300 hover:shadow-md"
              >
                <span className="text-base font-semibold text-slate-900">
                  {item.title}
                </span>
                <span className="mt-2 text-sm text-slate-600">
                  Open a dedicated profile page with placeholders for research
                  summary and vendor comparison.
                </span>
                <span className="mt-4 text-sm font-semibold text-amber-700">
                  Learn more →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
