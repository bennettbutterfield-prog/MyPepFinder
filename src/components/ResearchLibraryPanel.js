import { NavigateToFinderTab } from "@/components/NavigateToFinderTab";
import { ResearchLibrarySearch } from "@/components/ResearchLibrarySearch";
import { getResearchLibraryIndexEntries } from "@/data/research-library";

export function ResearchLibraryPanel() {
  const index = getResearchLibraryIndexEntries();

  return (
    <div id="research-library" className="text-left text-slate-900">
      <div className="mb-6 rounded-2xl border border-amber-200/80 bg-amber-50/90 px-4 py-3 text-sm text-amber-950 sm:px-5">
        <strong className="font-semibold">Research use only.</strong>{" "}
        MyPepFinder does not sell peptides. This library summarizes how compounds
        appear in educational and supplier-facing materials—not clinical advice.
      </div>

      <ResearchLibrarySearch entries={index} />

      <div className="mt-12">
        <NavigateToFinderTab className="inline-flex min-h-[48px] w-full cursor-pointer items-center justify-center rounded-full border border-slate-300 bg-white text-sm font-semibold text-slate-900 shadow-sm transition hover:border-slate-400 sm:w-auto sm:px-10">
          Run peptide finder
        </NavigateToFinderTab>
      </div>
    </div>
  );
}
