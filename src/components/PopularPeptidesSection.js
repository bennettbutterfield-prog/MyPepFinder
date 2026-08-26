"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { POPULAR_PEPTIDES } from "@/data/popular-peptides";
import { RESEARCH_LIBRARY_FILTERS } from "@/data/research-library";
import {
  getProductBySlug,
  getProductCategories,
  isResearchComingSoon,
  resolveProductByAliasOrSlug,
} from "@/data/peptide-taxonomy";

const FILTERS = RESEARCH_LIBRARY_FILTERS;

function categoriesForPopular(peptide) {
  const taxonomy =
    getProductBySlug(peptide.slug) ||
    resolveProductByAliasOrSlug(peptide.slug) ||
    resolveProductByAliasOrSlug(peptide.name.replace(/"/g, ""));
  if (taxonomy) return getProductCategories(taxonomy);
  return [];
}

function hrefForPopular(peptide) {
  const taxonomy =
    getProductBySlug(peptide.slug) ||
    resolveProductByAliasOrSlug(peptide.slug) ||
    resolveProductByAliasOrSlug(peptide.name.replace(/"/g, ""));
  return `/peptides/${taxonomy?.slug || peptide.slug}`;
}

export function PopularPeptidesSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = useMemo(() => {
    if (activeFilter === "all") return POPULAR_PEPTIDES;
    return POPULAR_PEPTIDES.filter((p) =>
      categoriesForPopular(p).includes(activeFilter)
    );
  }, [activeFilter]);

  return (
    <section
      id="explore-popular-peptides"
      className="border-t border-sky-100 bg-sky-50/80 py-10 sm:py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            Explore popular peptides
          </h2>
          <p className="mt-2 text-sm text-slate-600 sm:mt-3 sm:text-base">
            Placeholder product cards for top-viewed compounds and blends.
          </p>
        </div>

        <div className="-mx-1 mt-6 flex gap-1.5 overflow-x-auto px-1 pb-1 sm:mx-0 sm:mt-8 sm:flex-wrap sm:justify-center sm:gap-2 sm:overflow-visible sm:pb-0 md:mt-10">
          {FILTERS.map((filter) => {
            const active = filter.id === activeFilter;
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                className={`inline-flex shrink-0 items-center justify-center rounded-full px-2.5 py-1.5 text-[10px] font-semibold leading-tight transition sm:min-h-[40px] sm:px-4 sm:py-0 sm:text-xs ${
                  active
                    ? "border border-sky-500 bg-sky-100 text-sky-900"
                    : "border border-slate-300 bg-white text-slate-700 hover:border-slate-400"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {filtered.length === 0 ? (
          <p className="mt-6 rounded-xl border border-dashed border-slate-300 bg-white px-4 py-8 text-center text-sm text-slate-600 sm:mt-10 sm:rounded-2xl sm:px-6 sm:py-10">
            No popular peptides mapped yet for this category.
          </p>
        ) : (
          <ul className="mt-6 grid grid-cols-3 gap-1.5 sm:mt-10 sm:gap-3 md:gap-4">
            {filtered.map((p) => {
              const comingSoon = isResearchComingSoon(p.slug);
              return (
                <li
                  key={`${p.name}-${p.subtitle}`}
                  className={`flex flex-col rounded-lg border border-slate-200 p-1.5 shadow-sm sm:rounded-2xl sm:p-3 ${
                    comingSoon
                      ? "bg-slate-100 opacity-60 grayscale"
                      : "bg-white"
                  }`}
                >
                  <div className="relative aspect-[5/4] w-full overflow-hidden rounded-md border border-slate-200 bg-white sm:aspect-square sm:rounded-xl">
                    <Image
                      src="/mockups/mpf-vial.png"
                      alt={`${p.name} product mockup`}
                      fill
                      className="object-contain p-0.5 sm:p-2"
                      sizes="(max-width: 640px) 33vw, (max-width: 1152px) 200px, 240px"
                    />
                  </div>
                  <h3 className="mt-1 line-clamp-2 text-[10px] font-semibold leading-tight text-slate-900 sm:mt-2.5 sm:text-sm md:text-base">
                    {p.name}
                  </h3>
                  {comingSoon ? (
                    <span className="mt-1 inline-flex w-fit max-w-full rounded-full bg-slate-600 px-1.5 py-0.5 text-[8px] font-bold uppercase leading-tight tracking-wide text-white sm:mt-1.5 sm:px-2 sm:py-1 sm:text-[10px]">
                      Research coming soon
                    </span>
                  ) : null}
                  {p.subtitle ? (
                    <p className="mt-0.5 line-clamp-2 text-[9px] leading-snug text-slate-600 max-sm:hidden sm:mt-1 sm:block sm:text-xs">
                      {p.subtitle}
                    </p>
                  ) : null}
                  <div className="mt-auto pt-1 sm:pt-3">
                    {comingSoon ? (
                      <span
                        className="flex min-h-[28px] w-full cursor-not-allowed items-center justify-center rounded-full border border-slate-300 bg-slate-200 px-1 text-[9px] font-semibold uppercase tracking-wide text-slate-500 sm:min-h-[36px] sm:px-3 sm:text-xs"
                        aria-disabled="true"
                      >
                        Coming soon
                      </span>
                    ) : (
                      <Link
                        href={hrefForPopular(p)}
                        className="flex min-h-[28px] w-full items-center justify-center rounded-full border border-slate-300 px-1 text-[9px] font-semibold uppercase tracking-wide text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 sm:min-h-[36px] sm:px-3 sm:text-xs"
                      >
                        Learn More
                      </Link>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
}
