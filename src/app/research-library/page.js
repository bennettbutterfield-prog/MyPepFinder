import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ResearchLibraryPanel } from "@/components/ResearchLibraryPanel";

export default function ResearchLibraryPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <SiteHeader variant="light" />

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-10 sm:px-6 sm:py-14">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-600">
          Reference index
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
          Research library
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          Browse compounds and open illustrative provider comparisons for each
          entry.
        </p>

        <div className="mt-8 rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <ResearchLibraryPanel />
        </div>

        <p className="mt-10 text-center text-sm text-slate-600">
          <Link
            href="/#peptide-finder"
            className="font-medium text-amber-700 hover:text-amber-800"
          >
            ← Back to peptide finder
          </Link>
        </p>
      </main>

      <SiteFooter />
    </div>
  );
}
