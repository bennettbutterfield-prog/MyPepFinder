import { Suspense } from "react";
import { ResearchLibrarySearch } from "@/components/ResearchLibrarySearch";
import {
  getResearchLibraryIndexEntries,
  RESEARCH_LIBRARY_FILTERS,
} from "@/data/research-library";

/**
 * @param {{ initialCategory?: string }} [props]
 */
export function ResearchLibraryPanel({ initialCategory = "all" }) {
  const index = getResearchLibraryIndexEntries();

  return (
    <div id="research-library" className="text-left text-slate-900">
      <div className="mb-6 rounded-xl border border-indigo-100 bg-indigo-50 px-4 py-3 text-sm text-indigo-950 sm:px-5">
        <strong className="font-semibold">Research use only.</strong>{" "}
        MyPepFinder does not sell peptides. This library summarizes how compounds
        appear in educational and supplier-facing materials—not clinical advice.
      </div>

      <Suspense
        fallback={
          <ResearchLibrarySearchFallback
            entries={index}
            initialCategory={initialCategory}
          />
        }
      >
        <ResearchLibrarySearch
          entries={index}
          initialCategory={initialCategory}
        />
      </Suspense>
    </div>
  );
}

/**
 * @param {{
 *   entries: ReturnType<typeof getResearchLibraryIndexEntries>;
 *   initialCategory?: string;
 * }} props
 */
function ResearchLibrarySearchFallback({ entries, initialCategory = "all" }) {
  const activeFilter = RESEARCH_LIBRARY_FILTERS.some(
    (f) => f.id === initialCategory
  )
    ? initialCategory
    : "all";

  const filtered =
    activeFilter === "all"
      ? entries
      : entries.filter((e) => (e.categories || []).includes(activeFilter));

  return (
    <div>
      <label
        htmlFor="research-library-search-fallback"
        className="block text-sm font-semibold text-slate-900"
      >
        Search compounds
      </label>
      <div className="relative mt-2 w-full">
        <input
          id="research-library-search-fallback"
          type="search"
          disabled
          placeholder="Name, alias, or shorthand…"
          className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-4 pr-4 text-sm text-slate-900 shadow-sm outline-none placeholder:text-slate-400 sm:text-base"
        />
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {RESEARCH_LIBRARY_FILTERS.map((filter) => {
          const selected = filter.id === activeFilter;
          return (
            <span
              key={filter.id}
              className={`inline-flex min-h-[38px] items-center justify-center rounded-full px-4 text-xs font-semibold ${
                selected
                  ? "border border-indigo-500 bg-indigo-100 text-indigo-900"
                  : "border border-slate-200 bg-white text-slate-600"
              }`}
            >
              {filter.label}
            </span>
          );
        })}
      </div>
      <ul className="mt-5 grid grid-cols-2 gap-2 sm:mt-8 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((item) => {
          const comingSoon = Boolean(item.researchComingSoon);
          return (
            <li key={item.slug}>
              <div
                className={`flex h-full flex-col rounded-xl border border-slate-200 p-3 shadow-sm sm:rounded-2xl sm:p-5 ${
                  comingSoon
                    ? "bg-slate-100 opacity-60 grayscale"
                    : "bg-white"
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <span
                    className={`line-clamp-2 text-sm font-semibold leading-snug sm:text-base ${
                      comingSoon ? "text-slate-600" : "text-slate-900"
                    }`}
                  >
                    {item.title}
                  </span>
                </div>
                {comingSoon ? (
                  <span className="mt-1.5 inline-flex w-fit rounded-full bg-slate-600 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white sm:mt-2 sm:px-2.5 sm:py-1 sm:text-[10px]">
                    Research coming soon
                  </span>
                ) : null}
                <span className="mt-1.5 line-clamp-2 text-[11px] leading-snug text-slate-500 sm:mt-2 sm:line-clamp-none sm:text-sm sm:leading-relaxed">
                  {item.blurb}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
