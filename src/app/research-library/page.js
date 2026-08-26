import Link from "next/link";
import { GoalPageHeader } from "@/components/GoalPageHeader";
import { GoalToolsSidebar } from "@/components/GoalToolsSidebar";
import { HomeFooter } from "@/components/HomeFooter";
import { ResearchLibraryPanel } from "@/components/ResearchLibraryPanel";

export const metadata = {
  title: "Research Library | MyPepFinder",
  description:
    "Browse peptide compounds and open research profiles with provider comparison placeholders.",
};

export default async function ResearchLibraryPage({ searchParams }) {
  const params = await searchParams;
  const initialCategory =
    typeof params?.category === "string" ? params.category : "all";

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <GoalPageHeader />

      <div className="mx-auto flex w-full max-w-[1400px] flex-1">
        <GoalToolsSidebar activeToolHref="/research-library" />

        <main className="min-w-0 flex-1 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <nav className="text-xs text-slate-400" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link href="/" className="hover:text-indigo-600">
                  Home
                </Link>
              </li>
              <li aria-hidden>›</li>
              <li className="font-medium text-slate-600">Research Library</li>
            </ol>
          </nav>

          <div className="mt-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              Reference Index
            </p>
            <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Research Library
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-[15px]">
              Browse compounds and open illustrative provider comparisons for
              each entry—aligned with the same research-first tools on Goals and
              peptide profiles.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7 lg:p-8">
            <ResearchLibraryPanel initialCategory={initialCategory} />
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-indigo-100 bg-indigo-50 px-5 py-4">
            <p className="text-sm text-slate-700">
              Looking for a goal-based shortlist instead?
            </p>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/goals/lose-weight"
                className="inline-flex min-h-[40px] items-center justify-center rounded-lg bg-indigo-600 px-4 text-sm font-semibold text-white transition hover:bg-indigo-700"
              >
                Browse Goals
              </Link>
              <Link
                href="/research-library"
                className="inline-flex min-h-[40px] items-center justify-center rounded-lg border border-indigo-300 bg-white px-4 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50"
              >
                Explore Peptides
              </Link>
            </div>
          </div>
        </main>
      </div>

      <HomeFooter />
    </div>
  );
}
