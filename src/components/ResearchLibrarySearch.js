"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { RESEARCH_LIBRARY_FILTERS } from "@/data/research-library";

function norm(s) {
  return String(s || "")
    .trim()
    .toLowerCase();
}

function resolveCategory(candidate) {
  return RESEARCH_LIBRARY_FILTERS.some((f) => f.id === candidate)
    ? candidate
    : "all";
}

/**
 * @param {{
 *   entries: {
 *     slug: string;
 *     title: string;
 *     aliases?: string[];
 *     categories?: string[];
 *     blurb?: string;
 *     researchComingSoon?: boolean;
 *     compoundKindLabel?: string | null;
 *     searchText?: string;
 *   }[];
 *   initialCategory?: string;
 * }} props
 */
export function ResearchLibrarySearch({ entries, initialCategory = "all" }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const activeFilter = resolveCategory(
    searchParams.get("category") ?? initialCategory
  );

  const [query, setQuery] = useState(() => searchParams.get("q") || "");

  const filtered = useMemo(() => {
    const q = norm(query);
    return entries.filter((e) => {
      const hay =
        e.searchText ||
        [e.title, e.slug, ...(e.aliases || [])].join(" ").toLowerCase();
      const queryMatch = !q || hay.includes(q);
      if (!queryMatch) return false;
      if (activeFilter === "all") return true;
      return (e.categories || []).includes(activeFilter);
    });
  }, [entries, query, activeFilter]);

  const active = norm(query).length > 0 || activeFilter !== "all";

  function setActiveFilter(nextId) {
    const id = resolveCategory(nextId);
    const params = new URLSearchParams(searchParams.toString());
    if (id === "all") {
      params.delete("category");
    } else {
      params.set("category", id);
    }
    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  }

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
          placeholder="Name, alias, or shorthand…"
          autoComplete="off"
          className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-12 pr-4 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20 sm:text-base"
        />
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {RESEARCH_LIBRARY_FILTERS.map((filter) => {
          const selected = filter.id === activeFilter;
          return (
            <button
              key={filter.id}
              type="button"
              onClick={() => setActiveFilter(filter.id)}
              className={`inline-flex min-h-[38px] items-center justify-center rounded-full px-4 text-xs font-semibold transition ${
                selected
                  ? "border border-indigo-500 bg-indigo-100 text-indigo-900"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-indigo-200 hover:text-indigo-700"
              }`}
            >
              {filter.label}
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
        <ul className="mt-5 grid grid-cols-2 gap-2 sm:mt-8 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((item) => {
            const comingSoon = Boolean(item.researchComingSoon);
            const cardClass = comingSoon
              ? "flex h-full flex-col rounded-xl border border-slate-200 bg-slate-100 p-3 opacity-60 grayscale shadow-sm sm:rounded-2xl sm:p-5"
              : "flex h-full flex-col rounded-xl border border-slate-200 bg-white p-3 shadow-sm transition hover:border-indigo-200 hover:shadow-md sm:rounded-2xl sm:p-5";

            if (comingSoon) {
              return (
                <li key={item.slug}>
                  <div className={cardClass} aria-disabled="true">
                    <span className="line-clamp-2 text-sm font-semibold leading-snug text-slate-600 sm:text-base">
                      {item.title}
                    </span>
                    <span className="mt-1.5 inline-flex w-fit rounded-full bg-slate-600 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white sm:mt-2 sm:px-2.5 sm:py-1 sm:text-[10px]">
                      Research coming soon
                    </span>
                    <span className="mt-1.5 hidden text-sm leading-relaxed text-slate-500 sm:mt-2 sm:block">
                      {item.blurb}
                    </span>
                    <span className="mt-2 text-xs font-semibold text-slate-400 sm:mt-4 sm:text-sm">
                      Unavailable
                    </span>
                  </div>
                </li>
              );
            }

            return (
              <li key={item.slug}>
                <Link href={`/peptides/${item.slug}`} className={cardClass}>
                  <span className="line-clamp-2 text-sm font-semibold leading-snug text-slate-900 sm:text-base">
                    {item.title}
                  </span>
                  {item.compoundKindLabel ? (
                    <span className="mt-1.5 inline-flex w-fit rounded-full bg-slate-100 px-2 py-0.5 text-[9px] font-semibold text-slate-600 sm:text-[10px]">
                      {item.compoundKindLabel}
                    </span>
                  ) : null}
                  <span className="mt-1.5 line-clamp-2 text-[11px] leading-snug text-slate-500 sm:mt-2 sm:line-clamp-none sm:text-sm sm:leading-relaxed">
                    {item.blurb}
                  </span>
                  <span className="mt-2 text-xs font-semibold text-indigo-600 sm:mt-4 sm:text-sm">
                    Learn more →
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
