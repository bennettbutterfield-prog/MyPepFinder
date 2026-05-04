"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ProviderComparisonCard } from "@/components/ProviderComparisonCard";
import { EmailReportGate } from "@/components/EmailReportGate";
import { PremiumReportUpsell } from "@/components/PremiumReportUpsell";
import { TalkToSpecialistModal } from "@/components/TalkToSpecialistModal";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { ResultsEducationalDisclaimer } from "@/components/EducationalDisclaimer";

const STORAGE_KEY = "mypepfinder_report_unlocked";

/**
 * @param {{
 *   goalId: string;
 *   goalLabel: string;
 *   peptides: { id: string; name: string; slug: string; researchSummary: string }[];
 *   rankedProviders: {
 *     id: string;
 *     name: string;
 *     slug: string;
 *     tagline: string | null;
 *     description: string;
 *     websiteUrl: string;
 *     affiliateUrl: string | null;
 *     sponsored: boolean;
 *     transparencyScore: number;
 *     pricingTransparency: string | null;
 *   }[];
 *   premiumInitiallyUnlocked: boolean;
 * }} props
 */
export function ResultsExperience({
  goalId,
  goalLabel,
  peptides,
  rankedProviders,
  premiumInitiallyUnlocked,
}) {
  const [reportUnlocked, setReportUnlocked] = useState(false);
  const [specialistOpen, setSpecialistOpen] = useState(false);

  useEffect(() => {
    try {
      if (typeof window !== "undefined" && sessionStorage.getItem(STORAGE_KEY) === "1") {
        setReportUnlocked(true);
      }
    } catch {
      /* ignore */
    }
  }, []);

  const primaryPeptideId = peptides[0]?.id ?? null;

  const top = useMemo(() => rankedProviders.slice(0, 3), [rankedProviders]);
  const alternatives = useMemo(() => rankedProviders.slice(3), [rankedProviders]);

  const onReportUnlocked = () => {
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    setReportUnlocked(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-10">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-400">
          Research comparison
        </p>
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
          Your exploration results
        </h1>
        <p className="text-zinc-600 dark:text-zinc-300 max-w-2xl">
          Focus: <span className="font-medium text-zinc-900 dark:text-zinc-100">{goalLabel}</span>
          . The following peptides are commonly associated with this line of
          research in public-facing supplier catalogs and literature summaries.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          Peptides commonly associated with your selected focus
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
          {peptides.map((p) => (
            <li key={p.id}>
              <span className="font-medium text-zinc-900 dark:text-zinc-100">
                {p.name}
              </span>
              {" — "}
              {p.researchSummary}
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-5">
        <h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-wide">
          Preview snapshot
        </h2>
        <p className="mt-2 text-zinc-900 dark:text-zinc-50 text-lg font-medium">
          {rankedProviders[0]?.name ?? "No providers yet"}
        </p>
        {rankedProviders[0] ? (
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
            Transparency score (stated criteria):{" "}
            <span className="font-semibold text-zinc-900 dark:text-zinc-200">
              {rankedProviders[0].transparencyScore}
            </span>
          </p>
        ) : null}
        {!reportUnlocked ? (
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-3">
            Full comparison tables and alternative matches stay behind the
            report unlock so you can explore at your own pace.
          </p>
        ) : null}
      </section>

      {!reportUnlocked ? (
        <EmailReportGate
          goalId={goalId}
          peptideIds={peptides.map((p) => p.id)}
          sourcePage="/results"
          onUnlocked={onReportUnlocked}
        />
      ) : (
        <p className="text-sm text-emerald-800 dark:text-emerald-300 font-medium">
          Full on-page comparison is unlocked for this session. A copy may
          also arrive in your inbox if you requested the report.
        </p>
      )}

      <div className="relative space-y-8">
        <div
          className={`space-y-8 ${!reportUnlocked ? "blur-sm select-none pointer-events-none opacity-60" : ""}`}
          aria-hidden={!reportUnlocked}
        >
          <section>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
              Provider comparison (top matches)
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {top.map((p, i) => (
                <ProviderComparisonCard
                  key={p.id}
                  provider={p}
                  peptideId={primaryPeptideId}
                  rank={i + 1}
                />
              ))}
            </div>
          </section>

          <section className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
            <table className="min-w-full text-sm text-left">
              <caption className="sr-only">
                Provider comparison by stated transparency criteria
              </caption>
              <thead className="bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300">
                <tr>
                  <th className="px-4 py-3 font-medium">Provider</th>
                  <th className="px-4 py-3 font-medium">Transparency</th>
                  <th className="px-4 py-3 font-medium">Pricing clarity</th>
                  <th className="px-4 py-3 font-medium">Sponsored</th>
                </tr>
              </thead>
              <tbody>
                {top.map((p) => (
                  <tr
                    key={p.id}
                    className="border-t border-zinc-200 dark:border-zinc-800"
                  >
                    <td className="px-4 py-3 font-medium text-zinc-900 dark:text-zinc-100">
                      {p.name}
                    </td>
                    <td className="px-4 py-3">{p.transparencyScore}</td>
                    <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">
                      {p.pricingTransparency ?? "—"}
                    </td>
                    <td className="px-4 py-3">{p.sponsored ? "Yes" : "No"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {alternatives.length > 0 ? (
            <section>
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                Alternative options to explore
              </h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
                Additional providers that did not rank in the top tier for
                this pass—worth reviewing if your comparison criteria change.
              </p>
              <ul className="space-y-2 text-sm text-zinc-800 dark:text-zinc-200">
                {alternatives.map((p) => (
                  <li key={p.id} className="flex justify-between gap-4">
                    <span>{p.name}</span>
                    <span className="text-zinc-500">
                      score {p.transparencyScore}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>
        {!reportUnlocked ? (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500 bg-white/80 dark:bg-zinc-950/80 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-700">
              Full comparison preview
            </span>
          </div>
        ) : null}
      </div>

      {reportUnlocked ? (
        <PremiumReportUpsell initiallyUnlocked={premiumInitiallyUnlocked} />
      ) : null}

      <section className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 bg-zinc-50 dark:bg-zinc-900/30">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          Talk to a Specialist
        </h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 max-w-xl">
          If you would like a provider to share more documentation or
          comparison context, leave your email and research focus.
        </p>
        <button
          type="button"
          onClick={() => setSpecialistOpen(true)}
          className="mt-4 px-5 py-2.5 rounded-lg border border-zinc-900 text-zinc-900 dark:border-zinc-100 dark:text-zinc-100 text-sm font-medium hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-100 dark:hover:text-zinc-900 transition-colors"
        >
          Talk to a Specialist
        </button>
      </section>

      <AffiliateDisclosure />

      <ResultsEducationalDisclaimer />

      <TalkToSpecialistModal
        open={specialistOpen}
        onClose={() => setSpecialistOpen(false)}
        defaultGoal={goalId}
        sourcePeptideId={primaryPeptideId}
        sourcePage="/results"
      />

      <footer className="flex flex-wrap gap-4 text-sm text-zinc-500 border-t border-zinc-200 dark:border-zinc-800 pt-8">
        <Link href="/" className="hover:text-zinc-800 dark:hover:text-zinc-200">
          Home
        </Link>
        <Link href="/quiz" className="hover:text-zinc-800 dark:hover:text-zinc-200">
          Retake comparison quiz
        </Link>
      </footer>
    </div>
  );
}
