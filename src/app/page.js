import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { GoalFinderFlow } from "@/components/GoalFinderFlow";
import { PopularPeptidesSection } from "@/components/PopularPeptidesSection";

const FEATURES = [
  {
    title: "Trust-first vendor comparison",
    body: "Compare sellers side by side in one place so you can quickly see pricing context, testing transparency, and confidence signals before opening vendor sites.",
  },
  {
    title: "Safety and testing clarity",
    body: "MyPepFinder highlights how vendors present purity language, COA/testing references, and documentation notes so you can spot stronger versus weaker quality signals.",
  },
  {
    title: "Review-backed decision support",
    body: "Check review volume and sentiment alongside trust framing, so your short-list is based on both price and reputation instead of marketing copy alone.",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <SiteHeader variant="light" />

      <section className="hero-mesh-light relative flex flex-col border-b border-slate-200/80 bg-white">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center px-4 pb-10 pt-14 text-center sm:px-6 sm:pt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
            Research-grade peptide explorer
          </p>
          <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Find peptides that match the science you are exploring.
          </h1>
          <p className="mt-5 max-w-2xl text-balance text-base leading-relaxed text-slate-600 sm:text-lg">
            Pick what you are trying to optimise, add a few optional stats, then
            review peptides commonly associated with that research lane—all in
            one place.
          </p>
        </div>

        <div className="mx-auto w-full max-w-5xl px-4 pb-16 sm:px-6">
          <div id="peptide-finder">
            <GoalFinderFlow variant="embedded" />
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-slate-200 bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Trust, safety, and reviews in one workflow
            </h2>
            <p className="mt-4 text-slate-600">
              MyPepFinder helps users explore peptides by goal, then compare
              vendors in one place by price, testing purity signals, and review
              confidence—without steering to a single supplier.
            </p>
          </div>
          <ul className="mt-14 grid gap-8 md:grid-cols-3">
            {FEATURES.map((f) => (
              <li
                key={f.title}
                className="rounded-2xl border border-slate-200 bg-slate-50/80 p-8 shadow-sm"
              >
                <div className="mb-4 h-10 w-10 rounded-full bg-amber-400/90" />
                <h3 className="text-lg font-semibold text-slate-900">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {f.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <PopularPeptidesSection />

      <SiteFooter />
    </div>
  );
}
