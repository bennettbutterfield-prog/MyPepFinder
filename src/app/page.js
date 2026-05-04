import Link from "next/link";
import { HomeNewsletter } from "@/components/HomeNewsletter";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
      <header className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-5xl mx-auto px-4 py-5 flex items-center justify-between gap-4">
          <span className="font-semibold tracking-tight">MyPepFinder</span>
          <nav className="flex gap-4 text-sm">
            <Link href="/quiz" className="text-emerald-700 dark:text-emerald-400 font-medium">
              Start comparison
            </Link>
            <Link href="/results" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200">
              Sample results
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-16 space-y-20">
        <section className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-400">
            Educational comparison
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
            Explore peptide research suppliers side by side—without prescriptive
            claims.
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl leading-relaxed">
            MyPepFinder frames discovery as research, comparison, and
            documentation review. Rankings reflect stated transparency-style
            criteria; sponsorship is labeled and does not change ordering.
          </p>
          <Link
            href="/quiz"
            className="inline-flex items-center justify-center rounded-lg bg-emerald-700 px-6 py-3 text-white text-sm font-semibold hover:bg-emerald-800 transition-colors"
          >
            Begin guided comparison
          </Link>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            Make Smarter Comparisons
          </h2>
          <ul className="grid md:grid-cols-3 gap-6 text-sm text-zinc-700 dark:text-zinc-300">
            <li className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-5 bg-zinc-50 dark:bg-zinc-900/30">
              <span className="block font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                Compare providers and pricing
              </span>
              Line up how each supplier surfaces unit pricing, fees, and
              documentation so you can contrast options on your own terms.
            </li>
            <li className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-5 bg-zinc-50 dark:bg-zinc-900/30">
              <span className="block font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                See testing transparency
              </span>
              Review how testing summaries, batch references, and update logs
              are presented—signals commonly associated with reproducible
              research supply workflows.
            </li>
            <li className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-5 bg-zinc-50 dark:bg-zinc-900/30">
              <span className="block font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                Understand tradeoffs
              </span>
              Every vendor mix involves tradeoffs between catalog breadth,
              documentation depth, and shipping logistics—explore them as
              research questions, not recommendations.
            </li>
          </ul>
        </section>

        <HomeNewsletter />

        <p className="text-xs text-zinc-500 dark:text-zinc-500 max-w-2xl">
          Educational only. Not medical advice. Some outbound links may be
          affiliate links; rankings remain based on stated criteria.
        </p>
      </main>
    </div>
  );
}
