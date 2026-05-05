"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { POPULAR_PEPTIDES } from "@/data/popular-peptides";

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

export function PopularPeptidesSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = useMemo(() => {
    if (activeFilter === "All") return POPULAR_PEPTIDES;
    return POPULAR_PEPTIDES.filter((p) => p.categories.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section
      id="explore-popular-peptides"
      className="border-t border-slate-200 bg-slate-50 py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Explore popular peptides
          </h2>
          <p className="mt-4 text-slate-600">
            Placeholder product cards for top-viewed compounds and blends.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {FILTERS.map((filter) => {
            const active = filter === activeFilter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`inline-flex min-h-[40px] items-center justify-center rounded-full px-4 text-xs font-semibold transition ${
                  active
                    ? "border border-amber-500 bg-amber-100 text-amber-900"
                    : "border border-slate-300 bg-white text-slate-700 hover:border-slate-400"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {filtered.length === 0 ? (
          <p className="mt-10 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-10 text-center text-sm text-slate-600">
            No placeholders mapped yet for this research filter.
          </p>
        ) : (
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((p) => (
              <li
                key={`${p.name}-${p.subtitle}`}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="relative h-36 overflow-hidden rounded-xl border border-slate-200 bg-white">
                  <Image
                    src="/mockups/mpf-vial.png"
                    alt={`${p.name} product mockup`}
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-900">
                  {p.name}
                </h3>
                {p.subtitle ? (
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {p.subtitle}
                  </p>
                ) : null}
                <div className="mt-5 flex flex-wrap gap-2">
                  <Link
                    href={`/peptides/${p.slug}`}
                    className="inline-flex min-h-[40px] items-center justify-center rounded-full border border-slate-300 px-4 text-xs font-semibold uppercase tracking-wide text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                  >
                    Learn More
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
