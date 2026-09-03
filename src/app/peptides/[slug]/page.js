import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  buildFallbackPeptidePage,
  getAllPeptidePageSlugs,
  getPeptidePage,
} from "@/data/peptide-pages";
import {
  getPopularPeptideBySlug,
  POPULAR_PEPTIDES,
} from "@/data/popular-peptides";
import { getExplorePageData, getKnownExploreSlugs } from "@/data/explore-sellers";
import {
  getProductBySlug,
  peptideProducts,
  isResearchComingSoon,
  resolveProductByAliasOrSlug,
} from "@/data/peptide-taxonomy";
import { GOAL_SIDEBAR, GOAL_TOOLS } from "@/data/goal-pages";
import { GoalPageHeader } from "@/components/GoalPageHeader";
import { HomeFooter } from "@/components/HomeFooter";
import { MoleculeOverviewPanel } from "@/components/MoleculeOverviewPanel";
import { NewsletterSignupForm } from "@/components/NewsletterSignupForm";
import { PeptideResultsChart } from "@/components/PeptideResultsChart";
import { PeptideDosageGuide } from "@/components/PeptideDosageGuide";
import { TopRatedProvidersPanel } from "@/components/TopRatedProvidersPanel";

export const dynamicParams = false;

export function generateStaticParams() {
  const rich = getAllPeptidePageSlugs();
  const popular = POPULAR_PEPTIDES.map((p) => p.slug);
  const library = getKnownExploreSlugs();
  const taxonomy = peptideProducts.map((p) => p.slug);
  const taxonomyAliases = [
    "glow",
    "klow",
    "semaglutide",
    // Former standalone catalog entries, now aliases of Selank / Semax
    "n-acetyl-selank-amidate",
    "n-acetyl-semax-amidate",
  ];
  return [
    ...new Set([...rich, ...popular, ...library, ...taxonomy, ...taxonomyAliases]),
  ].map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const peptide = resolvePeptide(slug);
  if (!peptide) return { title: "Peptide not found" };
  return {
    title: `${peptide.pageTitle || peptide.name} | MyPepFinder`,
    description: peptide.summary,
  };
}

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "how-it-works", label: "How It Works" },
  { id: "results", label: "Results" },
  { id: "research", label: "Research" },
  { id: "side-effects", label: "Side Effects" },
  { id: "dosage", label: "Dosage" },
  { id: "compare", label: "Compare" },
];

const DOSAGE_GUIDE_TABS = [
  { id: "how-it-works", label: "How It Works" },
  { id: "results", label: "Results" },
  { id: "dosage", label: "Dosage" },
  { id: "dose-levels", label: "Dose Levels" },
  { id: "side-effects", label: "Side Effects" },
  { id: "compare", label: "Compare" },
  { id: "faq", label: "FAQ" },
  { id: "research", label: "Research" },
];

const MECH_TONE = {
  purple: "border-violet-200 bg-violet-50",
  green: "border-emerald-200 bg-emerald-50",
  orange: "border-orange-200 bg-orange-50",
};
const MECH_TITLE = {
  purple: "text-violet-700",
  green: "text-emerald-700",
  orange: "text-orange-700",
};

export default async function PeptideDetailPage({ params }) {
  const { slug } = await params;
  const peptide = resolvePeptide(slug);
  if (!peptide) notFound();

  const showChart = (peptide.chartLossPct || 0) > 0;
  const hasDosageGuide = Boolean(peptide.dosageGuide);
  const sectionTabs = hasDosageGuide ? DOSAGE_GUIDE_TABS : TABS;
  const comingSoon = isResearchComingSoon(slug);

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <GoalPageHeader />

      <div className="mx-auto flex w-full max-w-[1400px] flex-1">
        {/* Left sidebar */}
        <aside className="hidden w-56 shrink-0 border-r border-slate-200 bg-white lg:block xl:w-60">
          <div className="sticky top-14 max-h-[calc(100vh-3.5rem)] overflow-y-auto px-3 py-5">
            <p className="px-2 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
              Goals
            </p>
            <ul className="mt-2 space-y-0.5">
              {GOAL_SIDEBAR.map((g) => {
                const active = g.slug === peptide.goalSlug;
                return (
                  <li key={g.slug}>
                    <Link
                      href={`/goals/${g.slug}`}
                      className={`flex items-center gap-2 rounded-lg px-2.5 py-2 text-[13px] font-medium transition ${
                        active
                          ? "bg-violet-50 text-violet-700"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      <span aria-hidden className="text-xs">
                        •
                      </span>
                      {g.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <p className="mt-6 px-2 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
              Tools
            </p>
            <ul className="mt-2 space-y-0.5">
              {GOAL_TOOLS.map((t) => (
                <li key={t.label}>
                  <Link
                    href={t.href}
                    className="flex items-center gap-2 rounded-lg px-2.5 py-2 text-[13px] font-medium text-slate-600 transition hover:bg-slate-50"
                  >
                    <span aria-hidden>•</span>
                    {t.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <main className="min-w-0 flex-1 px-4 py-6 sm:px-6 lg:px-8 lg:py-7">
          <div className={comingSoon ? "opacity-60 grayscale" : undefined}>
          {/* Breadcrumbs */}
          <nav className="text-xs text-slate-400" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link href="/" className="hover:text-violet-600">
                  Home
                </Link>
              </li>
              <li aria-hidden>›</li>
              <li>
                <Link href="/goals/lose-weight" className="hover:text-violet-600">
                  Goals
                </Link>
              </li>
              <li aria-hidden>›</li>
              <li>
                <Link
                  href={`/goals/${peptide.goalSlug}`}
                  className="hover:text-violet-600"
                >
                  {peptide.goalLabel}
                </Link>
              </li>
              <li aria-hidden>›</li>
              <li className="font-medium text-slate-600">{peptide.name}</li>
            </ol>
          </nav>

          {/* Hero */}
          <section
            className={`mt-4 grid gap-6 lg:items-start ${
              peptide.heroImage
                ? "lg:grid-cols-[0.9fr_1.1fr] lg:gap-4"
                : "lg:grid-cols-[1.15fr_0.85fr]"
            }`}
          >
            <div>
              <span className="inline-flex rounded-full bg-violet-100 px-2.5 py-1 text-[11px] font-bold text-violet-700">
                {peptide.rankBadge}
              </span>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                {peptide.name}
              </h1>
              {comingSoon ? (
                <span className="mt-2 inline-flex rounded-full bg-slate-600 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                  Research coming soon
                </span>
              ) : null}
              {hasDosageGuide ? (
                <p className="mt-1 text-base font-semibold text-violet-700 sm:text-lg">
                  Dosage & Dose Escalation Guide
                </p>
              ) : null}
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-500 sm:text-[15px]">
                {peptide.summary}
              </p>

              <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
                <span className="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-0.5 text-[11px] font-semibold text-violet-700 ring-1 ring-violet-100">
                  ◆ {peptide.researchedBadge}
                </span>
              </div>

              <ul className="mt-3 flex flex-wrap gap-1.5">
                {peptide.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-violet-50 px-2.5 py-1 text-[11px] font-medium text-violet-700 ring-1 ring-violet-100"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="mt-5">
                <Link
                  href="/recommendations"
                  className="inline-flex min-h-[42px] items-center justify-center rounded-lg bg-violet-600 px-4 text-sm font-semibold text-white shadow-sm shadow-violet-600/25 transition hover:bg-violet-700"
                >
                  Compare Providers
                </Link>
              </div>
            </div>

            <div className="relative">
              {peptide.heroImage ? (
                <div className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white">
                  <Image
                    src={peptide.heroImage}
                    alt={`${peptide.name} molecule`}
                    width={peptide.heroImageWidth || 682}
                    height={peptide.heroImageHeight || 1024}
                    className="h-auto w-full"
                    sizes="(max-width: 1024px) 100vw, 560px"
                    priority
                  />
                  {(peptide.moleculeCallouts || []).length > 0 ? (
                    <ul className="grid gap-2 border-t border-slate-200 bg-gradient-to-br from-violet-50 to-slate-50 p-3 sm:grid-cols-3 sm:p-4">
                      {peptide.moleculeCallouts.map((c) => (
                        <li
                          key={c.label}
                          className="rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm"
                        >
                          <p className="text-xs font-bold text-violet-700">
                            {c.label}
                          </p>
                          <p className="mt-0.5 text-[10px] leading-snug text-slate-500">
                            {c.body}
                          </p>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ) : (
                <MoleculeOverviewPanel
                  callouts={peptide.moleculeCallouts || []}
                  label={`${peptide.name} molecule overview`}
                />
              )}
            </div>
          </section>

          {/* Tabs */}
          <nav
            className="mt-8 flex gap-1 overflow-x-auto border-b border-slate-200"
            aria-label="Section"
          >
            {sectionTabs.map((tab, i) => (
              <a
                key={tab.id}
                href={`#${tab.id}`}
                className={`shrink-0 border-b-2 px-3 py-2.5 text-[13px] font-semibold transition ${
                  i === 0
                    ? "border-violet-600 text-violet-700"
                    : "border-transparent text-slate-500 hover:text-slate-800"
                }`}
              >
                {tab.label}
              </a>
            ))}
          </nav>

          {/* Main + right column */}
          <div className="mt-8 grid gap-8 xl:grid-cols-[1.55fr_0.9fr]">
            <div className="min-w-0 space-y-10">
              {hasDosageGuide ? (
                <>
                  <section id="how-it-works">
                    <h2 className="text-xl font-bold text-slate-900">
                      How It Works
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {peptide.howItWorks ||
                        `${peptide.name} engages multiple pathways that together support appetite control, metabolic efficiency, and fat oxidation.`}
                    </p>
                    {peptide.mechanisms?.length ? (
                      <div className="mt-5 grid gap-3 sm:grid-cols-3">
                        {peptide.mechanisms.map((m) => (
                          <div
                            key={m.title}
                            className={`rounded-xl border p-4 ${MECH_TONE[m.tone] || MECH_TONE.purple}`}
                          >
                            <p
                              className={`text-sm font-bold ${MECH_TITLE[m.tone] || MECH_TITLE.purple}`}
                            >
                              {m.title}
                            </p>
                            <ul className="mt-2 space-y-1.5">
                              {m.points.map((p) => (
                                <li
                                  key={p}
                                  className="flex gap-1.5 text-xs text-slate-700"
                                >
                                  <span className="text-emerald-500">✓</span>
                                  {p}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : null}
                    {peptide.resultBars?.length ? (
                      <div className="mt-3">
                        <p className="mb-2 text-center text-[11px] font-semibold uppercase tracking-wider text-violet-500">
                          Result
                        </p>
                        <div className="grid gap-3 sm:grid-cols-3">
                          {peptide.resultBars.map((r) => (
                            <p
                              key={r}
                              className="rounded-xl bg-violet-600 px-2 py-3 text-center text-[11px] font-semibold text-white sm:text-xs"
                            >
                              {r}
                            </p>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </section>

                  <section id="results">
                    <h2 className="text-xl font-bold text-slate-900">
                      Expected Results Over Time
                    </h2>
                    <div className="mt-4">
                      {showChart ? (
                        <PeptideResultsChart
                          name={peptide.name}
                          lossPct={peptide.chartLossPct}
                        />
                      ) : null}
                    </div>
                  </section>

                  <PeptideDosageGuide guide={peptide.dosageGuide} />
                </>
              ) : (
                <>
                  {/* Overview */}
                  <section id="overview">
                    <h2 className="text-xl font-bold text-slate-900">
                      What is {peptide.name}?
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {peptide.about}
                    </p>
                    <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                      {peptide.facts.map((f) => (
                        <li
                          key={f.label}
                          className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm"
                        >
                          <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                            {f.label}
                          </p>
                          <p className="mt-1 text-sm font-bold text-slate-900">
                            {f.value}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </section>

                  {/* How it works */}
                  <section id="how-it-works">
                    <h2 className="text-xl font-bold text-slate-900">
                      How It Works
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {peptide.howItWorks ||
                        `${peptide.name} engages multiple pathways that together support appetite control, metabolic efficiency, and fat oxidation.`}
                    </p>
                    {peptide.mechanisms?.length ? (
                      <div className="mt-5 grid gap-3 sm:grid-cols-3">
                        {peptide.mechanisms.map((m) => (
                          <div
                            key={m.title}
                            className={`rounded-xl border p-4 ${MECH_TONE[m.tone] || MECH_TONE.purple}`}
                          >
                            <p
                              className={`text-sm font-bold ${MECH_TITLE[m.tone] || MECH_TITLE.purple}`}
                            >
                              {m.title}
                            </p>
                            <ul className="mt-2 space-y-1.5">
                              {m.points.map((p) => (
                                <li
                                  key={p}
                                  className="flex gap-1.5 text-xs text-slate-700"
                                >
                                  <span className="text-emerald-500">✓</span>
                                  {p}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : null}
                    {peptide.resultBars?.length ? (
                      <div className="mt-3">
                        <p className="mb-2 text-center text-[11px] font-semibold uppercase tracking-wider text-violet-500">
                          Result
                        </p>
                        <div className="grid gap-3 sm:grid-cols-3">
                          {peptide.resultBars.map((r) => (
                            <p
                              key={r}
                              className="rounded-xl bg-violet-600 px-2 py-3 text-center text-[11px] font-semibold text-white sm:text-xs"
                            >
                              {r}
                            </p>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </section>

                  {/* Results */}
                  <section id="results">
                    <h2 className="text-xl font-bold text-slate-900">
                      {peptide.resultsNarrative
                        ? "Results"
                        : "Expected Results Over Time"}
                    </h2>
                    <div className="mt-4">
                      {peptide.resultsNarrative ? (
                        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                          <p className="text-sm leading-relaxed text-slate-600">
                            {peptide.resultsNarrative.body}
                          </p>
                          {peptide.resultsNarrative.href ? (
                            <a
                              href={peptide.resultsNarrative.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-3 inline-flex text-sm font-semibold text-violet-700 hover:underline"
                            >
                              {peptide.resultsNarrative.linkLabel ||
                                "View study"}{" "}
                              →
                            </a>
                          ) : null}
                        </div>
                      ) : showChart ? (
                        <PeptideResultsChart
                          name={peptide.name}
                          lossPct={peptide.chartLossPct}
                        />
                      ) : (
                        <div className="rounded-xl border border-dashed border-slate-200 bg-white p-8 text-center text-sm text-slate-500">
                          Trajectory modeling for this peptide focuses on
                          research signals rather than weight-loss curves. See
                          comparison and research sections below.
                        </div>
                      )}
                    </div>
                  </section>

                  {/* Compare table */}
                  <section id="compare">
                    <h2 className="text-xl font-bold text-slate-900">
                      How {peptide.name} Compares
                    </h2>
                    <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
                      <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                        <thead>
                          <tr className="border-b border-slate-100 bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                            <th className="px-3 py-3 font-semibold">Feature</th>
                            {peptide.compare.columns.map((col, i) => (
                              <th
                                key={col}
                                className={`px-3 py-3 font-semibold ${
                                  i === peptide.compare.highlight
                                    ? "bg-violet-50 text-violet-700"
                                    : ""
                                }`}
                              >
                                {col}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {peptide.compare.rows.map((row) => (
                            <tr
                              key={row.feature}
                              className="border-b border-slate-50 last:border-0"
                            >
                              <td className="px-3 py-3 text-xs font-medium text-slate-600">
                                {row.feature}
                              </td>
                              {row.values.map((v, i) => (
                                <td
                                  key={`${row.feature}-${i}`}
                                  className={`px-3 py-3 text-xs font-semibold ${
                                    i === peptide.compare.highlight
                                      ? "bg-violet-50/80 text-violet-800"
                                      : "text-slate-800"
                                  }`}
                                >
                                  {v}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* Side effects / dosage anchors */}
                  <section
                    id="side-effects"
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <h2 className="text-lg font-bold text-slate-900">
                      Side Effects
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {peptide.sideEffects ||
                        "Commonly discussed effects in research summaries include mild gastrointestinal symptoms (nausea, reduced appetite). Always follow a qualified clinician's protocol. This page is educational only."}
                    </p>
                  </section>

                  <section
                    id="dosage"
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <h2 className="text-lg font-bold text-slate-900">Dosage</h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {peptide.dosage || (
                        <>
                          Research protocols often use once-weekly subcutaneous
                          administration with gradual titration. Use the{" "}
                          <Link
                            href="/calculator"
                            className="font-semibold text-violet-700 hover:underline"
                          >
                            Dosage Calculator
                          </Link>{" "}
                          to explore reconstitution math for your vial size.
                        </>
                      )}
                    </p>
                  </section>
                </>
              )}
            </div>

            {/* Right sidebar cards */}
            <aside className="space-y-5 xl:sticky xl:top-[4.5rem] xl:self-start">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <h3 className="text-sm font-bold text-slate-900">Key Benefits</h3>
                <ul className="mt-3 space-y-2">
                  {peptide.benefits.map((b) => (
                    <li
                      key={b}
                      className="flex gap-2 text-xs leading-snug text-slate-600"
                    >
                      <span className="mt-0.5 text-emerald-500">✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <h3 className="text-sm font-bold text-slate-900">
                  {peptide.name} At A Glance
                </h3>
                <dl className="mt-3 space-y-2.5">
                  {peptide.glance.map((g) => (
                    <div
                      key={g.label}
                      className="flex items-start justify-between gap-3 border-b border-slate-50 pb-2 last:border-0"
                    >
                      <dt className="text-xs text-slate-500">{g.label}</dt>
                      <dd
                        className={`text-right text-xs font-bold ${
                          g.highlight ? "text-emerald-600" : "text-slate-900"
                        }`}
                      >
                        {g.value}
                      </dd>
                    </div>
                  ))}
                </dl>
                <Link
                  href="/recommendations"
                  className="mt-4 flex min-h-[42px] w-full items-center justify-center rounded-lg bg-violet-600 px-3 py-2.5 text-center text-xs font-semibold leading-snug text-white shadow-sm shadow-violet-600/20 transition hover:bg-violet-700"
                >
                  Compare Best Research {peptide.name} Providers
                </Link>
              </div>

              {peptide.moleculeCardImage ? (
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <Image
                    src={peptide.moleculeCardImage}
                    alt={`${peptide.name} molecular structure`}
                    width={peptide.moleculeCardImageWidth || 1024}
                    height={peptide.moleculeCardImageHeight || 640}
                    className="h-auto w-full"
                    sizes="(max-width: 1280px) 100vw, 380px"
                  />
                </div>
              ) : null}
            </aside>
          </div>

          {/* Latest research */}
          {(peptide.researchNarrative || (peptide.research || []).length > 0) ? (
            <section id="research" className="mt-12">
              <h2 className="text-xl font-bold text-slate-900">
                Latest Research on {peptide.name}
              </h2>
              {peptide.researchNarrative ? (
                <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="text-sm leading-relaxed text-slate-600">
                    {peptide.researchNarrative.body}
                  </p>
                  {peptide.researchNarrative.href ? (
                    <a
                      href={peptide.researchNarrative.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex text-sm font-semibold text-violet-700 hover:underline"
                    >
                      {peptide.researchNarrative.linkLabel ||
                        "View follow-up study"}{" "}
                      →
                    </a>
                  ) : null}
                </div>
              ) : null}
              {(peptide.research || []).length > 0 ? (
                <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {peptide.research.map((r) => (
                    <li key={`${r.title}-${r.href || r.cite}`}>
                      {r.href ? (
                        <a
                          href={r.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-violet-200 hover:shadow-md"
                        >
                          <span className="text-[10px] font-bold uppercase tracking-wider text-violet-600">
                            {r.tag}
                          </span>
                          <h3 className="mt-1.5 text-sm font-semibold leading-snug text-slate-900">
                            {r.title}
                          </h3>
                          <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-500">
                            {r.summary}
                          </p>
                          <p className="mt-3 text-[11px] font-medium text-slate-400">
                            {r.cite}
                          </p>
                          <span className="mt-2 text-[11px] font-semibold text-violet-600">
                            Read study →
                          </span>
                        </a>
                      ) : (
                        <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-violet-600">
                            {r.tag}
                          </span>
                          <h3 className="mt-1.5 text-sm font-semibold leading-snug text-slate-900">
                            {r.title}
                          </h3>
                          <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-500">
                            {r.summary}
                          </p>
                          <p className="mt-3 text-[11px] font-medium text-slate-400">
                            {r.cite}
                          </p>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ) : null}

          <TopRatedProvidersPanel limit={4} variant="section" />

          {/* Newsletter */}
          <section className="mt-12 mb-4 rounded-2xl bg-violet-50 px-5 py-5 sm:px-6">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <p className="text-sm font-bold text-slate-900">
                  Stay updated on the latest peptide research
                </p>
                <p className="mt-0.5 text-xs text-slate-500">
                  New studies and guides delivered to your inbox.
                </p>
              </div>
              <NewsletterSignupForm
                sourcePage={`/peptides/${slug}`}
                sourcePeptideId={slug}
                variant="violet"
              />
            </div>
          </section>
          </div>
        </main>
      </div>

      <HomeFooter />
    </div>
  );
}

function resolvePeptide(slug) {
  const rich = getPeptidePage(slug);
  if (rich) return rich;

  const taxonomy =
    getProductBySlug(slug) || resolveProductByAliasOrSlug(slug);
  if (taxonomy) {
    return buildFallbackPeptidePage(taxonomy.slug, taxonomy.name);
  }

  const popular = getPopularPeptideBySlug(slug);
  if (popular) {
    return buildFallbackPeptidePage(slug, popular.name);
  }
  const explore = getExplorePageData(slug);
  if (explore) {
    return buildFallbackPeptidePage(slug, explore.peptideName);
  }
  return null;
}
