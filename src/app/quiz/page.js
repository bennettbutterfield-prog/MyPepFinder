import Link from "next/link";
import { HomeFooter } from "@/components/HomeFooter";
import { HomeHeader } from "@/components/HomeHeader";
import { PeptideEffectsQuiz } from "@/components/PeptideEffectsQuiz";

export const metadata = {
  title: "Peptide Quiz | MyPepFinder",
  description:
    "Answer two questions about what you want to optimize. We match a peptide based on researched effects — not marketing claims.",
  openGraph: {
    title: "Peptide Quiz | MyPepFinder",
    description:
      "Choose what to optimize, refine the research effect, and get a peptide match.",
    type: "website",
    url: "/quiz",
  },
  twitter: {
    card: "summary_large_image",
    title: "Peptide Quiz | MyPepFinder",
    description:
      "Choose what to optimize, refine the research effect, and get a peptide match.",
  },
};

export default function PeptideQuizPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <HomeHeader />

      <main className="mx-auto w-full max-w-4xl flex-1 px-3 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-4 sm:px-6 sm:py-8 lg:py-10">
        <nav className="hidden text-xs text-slate-400 sm:block" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li>
              <Link href="/" className="hover:text-indigo-600">
                Home
              </Link>
            </li>
            <li aria-hidden>›</li>
            <li className="font-medium text-slate-600">Peptide Quiz</li>
          </ol>
        </nav>

        <header className="max-w-2xl sm:mt-5">
          <p className="hidden text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400 sm:block">
            Research-effects match
          </p>
          <h1 className="text-[1.65rem] font-bold leading-[1.15] tracking-tight text-slate-900 sm:mt-1 sm:text-4xl">
            Find a peptide for your goal
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-slate-500 sm:mt-3 sm:text-[15px]">
            Choose what you want to optimize, then refine the research effect.
            The match is based on how each peptide is studied — not a promise
            that it works for you.
          </p>
        </header>

        <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:mt-8 sm:rounded-3xl sm:p-8">
          <PeptideEffectsQuiz />
        </div>
      </main>

      <HomeFooter />
    </div>
  );
}
