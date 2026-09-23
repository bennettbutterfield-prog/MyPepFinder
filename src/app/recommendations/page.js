import Link from "next/link";
import { GoalPageHeader } from "@/components/GoalPageHeader";
import { HomeFooter } from "@/components/HomeFooter";
import { ProviderProfileCard } from "@/components/ProviderProfileCard";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import {
  getProviderLinkRel,
  getProviderWebsiteUrl,
  isAffiliateProvider,
} from "@/data/affiliate-links";
import {
  COMPARISON_ROWS,
  ELIGIBILITY_RULES,
  formatProviderMetric,
  getEditorialRatingClass,
  getProviderToneClass,
  PEPTIDE_PROVIDERS,
  PROVIDER_DIRECTORY,
  PROVIDER_FAQ,
  RANKING_CRITERIA,
} from "@/data/peptide-providers";
import { optimizationGoalById } from "@/data/optimization-goals";
import { getPeptideRecommendations } from "@/lib/peptide-recommendations";
import { pageShareMeta } from "@/lib/site-url";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Best Peptide Vendors 2026: Top 4 Companies Compared | MyPepFinder",
  description: PROVIDER_DIRECTORY.description,
  ...pageShareMeta("/recommendations"),
};

function parseNumber(raw) {
  const n = Number.parseFloat(String(raw ?? ""));
  return Number.isFinite(n) ? n : undefined;
}

function parseIntSafe(raw) {
  const n = Number.parseInt(String(raw ?? ""), 10);
  return Number.isFinite(n) ? n : undefined;
}

export default function ProvidersPage({ searchParams }) {
  const goalId =
    typeof searchParams?.goal === "string" ? searchParams.goal : null;
  const goal = goalId ? optimizationGoalById(goalId) : null;

  const age = parseIntSafe(searchParams?.age);
  const weightRaw = parseNumber(searchParams?.weight);
  const unit = searchParams?.unit === "kg" ? "kg" : "lbs";

  let peptides = [];
  if (goalId) {
    const heightFt = parseIntSafe(searchParams?.heightFt);
    const heightIn = parseIntSafe(searchParams?.heightIn);
    let heightCm;
    if (
      heightFt != null &&
      heightIn != null &&
      heightIn >= 0 &&
      heightIn <= 11
    ) {
      heightCm = (heightFt * 12 + heightIn) * 2.54;
    }
    const legacyHeightCm = parseNumber(searchParams?.height);
    if (heightCm == null && legacyHeightCm != null) {
      heightCm = legacyHeightCm;
    }
    const weightKg =
      weightRaw != null
        ? unit === "kg"
          ? weightRaw
          : weightRaw * 0.45359237
        : undefined;
    peptides = getPeptideRecommendations(goalId, {
      age,
      weightKg,
      heightCm,
    }).peptides;
  }

  const providerNames = PEPTIDE_PROVIDERS.map((p) => p.name);

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <GoalPageHeader />

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 sm:py-10">
        <nav className="text-xs text-slate-400" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li>
              <Link href="/" className="hover:text-indigo-600">
                Home
              </Link>
            </li>
            <li aria-hidden>›</li>
            <li className="font-medium text-slate-600">Providers</li>
          </ol>
        </nav>

        <header className="mt-4 max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            Provider Directory
          </p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {PROVIDER_DIRECTORY.title}
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-slate-500 sm:text-[15px]">
            With 1,828 peptide vendors available (<a
              href={PROVIDER_DIRECTORY.finnrickUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-indigo-600 underline decoration-indigo-200 underline-offset-2 hover:text-indigo-700"
            >Finnrick</a>) finding a supplier is easy. Deciding which one
            deserves your business takes more work. Our focus is US-based
            businesses with conventional checkout, public testing documentation
            and a credible customer service record.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
            {PROVIDER_DIRECTORY.lead}
          </p>
          <p className="mt-4 text-xs text-slate-400">
            Last updated: {PROVIDER_DIRECTORY.lastUpdated} ·{" "}
            {PROVIDER_DIRECTORY.providerCount} selected providers
          </p>
        </header>

        <div className="mt-5 max-w-3xl space-y-2">
          <p className="text-[11px] leading-relaxed text-slate-500">
            <span className="font-medium text-slate-600">Important:</span>{" "}
            {PROVIDER_DIRECTORY.disclaimer}
          </p>
          <AffiliateDisclosure className="text-[11px] leading-relaxed text-slate-500" />
        </div>

        <section className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PEPTIDE_PROVIDERS.map((provider) => (
            <a
              key={provider.slug}
              href={getProviderWebsiteUrl(provider)}
              target="_blank"
              rel={getProviderLinkRel(provider.slug)}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-indigo-200 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xs font-bold text-white ${getProviderToneClass(provider.tone)}`}
                  >
                    {provider.initials}
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                      #{provider.rank}
                    </p>
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-base font-bold text-slate-900 group-hover:text-indigo-700">
                        {provider.name}
                      </h2>
                      {isAffiliateProvider(provider.slug) ? (
                        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-slate-600 ring-1 ring-slate-200">
                          Affiliate
                        </span>
                      ) : null}
                    </div>
                  </div>
                </div>
                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-bold text-slate-700 ring-1 ring-slate-200">
                  {provider.priceTier}
                </span>
              </div>
              <p className="mt-2 text-xs font-semibold text-indigo-700">
                {provider.rankBadge}
              </p>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
                {provider.comparisonBlurb}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-700 ring-1 ring-emerald-100">
                  {formatProviderMetric(provider)}
                </span>
                <span
                  className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ${getEditorialRatingClass(provider.editorialRating)}`}
                >
                  {provider.editorialRating}
                </span>
              </div>
            </a>
          ))}
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-bold text-slate-900">
            Compare the Top Four Providers
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Ratings, review counts and policies checked{" "}
            {PROVIDER_DIRECTORY.lastUpdated}. Sources are linked in each review.
          </p>

          <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="min-w-[720px] w-full border-collapse text-left text-sm">
              <thead>
                <tr className="bg-indigo-50">
                  <th className="sticky left-0 z-10 border-r border-indigo-100 bg-indigo-50 px-4 py-3.5 text-xs font-bold uppercase tracking-wide text-indigo-800">
                    Ranking factor
                  </th>
                  {providerNames.map((name) => (
                    <th
                      key={name}
                      className="border-r border-indigo-100 px-4 py-3.5 text-xs font-bold uppercase tracking-wide text-indigo-800 last:border-r-0"
                    >
                      {name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, rowIndex) => (
                  <tr
                    key={row.factor}
                    className={
                      rowIndex % 2 === 0 ? "bg-white" : "bg-slate-50/80"
                    }
                  >
                    <th className="sticky left-0 z-10 border-r border-t border-slate-200 bg-inherit px-4 py-3.5 align-top text-sm font-bold text-indigo-700">
                      {row.factor}
                    </th>
                    {row.values.map((value, i) => (
                      <td
                        key={`${row.factor}-${providerNames[i]}`}
                        className="border-r border-t border-slate-200 px-4 py-3.5 align-top text-slate-700 last:border-r-0"
                      >
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="bg-white">
                  <th className="sticky left-0 z-10 border-r border-t border-slate-200 bg-white px-4 py-3.5 align-top text-sm font-bold text-indigo-700">
                    Website
                  </th>
                  {PEPTIDE_PROVIDERS.map((provider) => (
                    <td
                      key={provider.slug}
                      className="border-r border-t border-slate-200 px-4 py-3.5 align-top last:border-r-0"
                    >
                      <a
                        href={getProviderWebsiteUrl(provider)}
                        target="_blank"
                        rel={getProviderLinkRel(provider.slug)}
                        className="font-semibold text-indigo-600 hover:text-indigo-700"
                      >
                        Visit {provider.name.split(" ")[0]} →
                      </a>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-3 text-xs leading-relaxed text-slate-500">
            <span className="font-semibold text-slate-700">Price guide:</span>{" "}
            {PROVIDER_DIRECTORY.priceGuide}
          </p>
          <p className="mt-2 text-xs leading-relaxed text-slate-500">
            <span className="font-semibold text-slate-700">Order minimums:</span>{" "}
            {PROVIDER_DIRECTORY.orderMinimumsNote}
          </p>
        </section>

        <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
          <h2 className="text-xl font-bold text-slate-900">
            Our Criteria: How We Rank Peptide Vendors
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            A vendor should earn consideration before its prices earn a
            comparison. We use eligibility rules first, then weigh the evidence
            supporting each recommendation.
          </p>

          <h3 className="mt-6 text-sm font-bold uppercase tracking-wide text-slate-900">
            Who qualifies for consideration?
          </h3>
          <ul className="mt-3 grid gap-3 sm:grid-cols-2">
            {ELIGIBILITY_RULES.map((rule) => (
              <li
                key={rule.title}
                className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3"
              >
                <p className="text-sm font-semibold text-slate-900">
                  {rule.title}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  {rule.body}
                </p>
              </li>
            ))}
          </ul>

          <h3 className="mt-8 text-sm font-bold uppercase tracking-wide text-slate-900">
            What determines the ranking?
          </h3>
          <ul className="mt-3 grid gap-3 sm:grid-cols-2">
            {RANKING_CRITERIA.map((item) => (
              <li
                key={item.title}
                className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3"
              >
                <p className="text-sm font-semibold text-slate-900">
                  {item.title}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">
                  {item.body}
                </p>
                <p className="mt-2 text-xs font-medium text-slate-500">
                  Why it matters: {item.why}
                </p>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-sm leading-relaxed text-slate-600">
            Trustpilot carries substantial weight, but we read beyond the score.
            We use editorial judgment rather than an invented numerical score.
            Unresolved questions lower confidence in a recommendation; discounts
            do not erase them.
          </p>
        </section>

        <section className="mt-12 space-y-6">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Provider profiles
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Full editorial assessments with customer reviews, testing notes,
              shipping terms, strengths, limitations, and linked sources.
            </p>
          </div>

          {PEPTIDE_PROVIDERS.map((provider) => (
            <ProviderProfileCard key={provider.slug} provider={provider} />
          ))}
        </section>

        <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
          <h2 className="text-xl font-bold text-slate-900">
            What to Check Before Ordering
          </h2>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-600">
            <li>
              Start with the report for the batch you expect to receive. It
              should identify the compound, lot, laboratory, testing date,
              methods and results.
            </li>
            <li>
              Purity, identity and measured content are separate measurements —
              look for each rather than relying on a single percentage.
            </li>
            <li>
              Read recent negative reviews alongside positive ones. Repeated
              complaints and the company&apos;s responses tell you more about
              service than a star rating alone.
            </li>
            <li>
              Compare the checkout total and replacement terms. Shipping, taxes
              and optional protection can change the cost.
            </li>
          </ul>
        </section>

        <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
          <h2 className="text-xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>
          <dl className="mt-5 space-y-4">
            {PROVIDER_FAQ.map((item) => (
              <div
                key={item.question}
                className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-4"
              >
                <dt className="text-sm font-semibold text-slate-900">
                  {item.question}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.answer}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {goal && peptides.length > 0 ? (
          <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              From your finder
            </p>
            <h2 className="mt-1 text-xl font-bold text-slate-900">
              Peptides commonly associated with {goal.label.toLowerCase()}{" "}
              research
            </h2>
            <ol className="mt-6 space-y-3">
              {peptides.map((p) => (
                <li
                  key={p.name + p.rank}
                  className="flex flex-col gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">
                      {p.rank}
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">
                        {p.name}
                      </h3>
                      <p className="text-[11px] font-medium uppercase tracking-wide text-indigo-600">
                        {p.tagline}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-slate-500">
                        {p.context}
                      </p>
                    </div>
                  </div>
                  <Link
                    href={`/peptides/${p.exploreSlug}`}
                    className="inline-flex min-h-[40px] shrink-0 items-center justify-center rounded-lg border border-indigo-200 bg-white px-4 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50"
                  >
                    View peptide profile
                  </Link>
                </li>
              ))}
            </ol>
          </section>
        ) : (
          <section className="mt-12 flex flex-col items-start justify-between gap-4 rounded-2xl border border-indigo-100 bg-indigo-50 px-5 py-5 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm font-bold text-slate-900">
                Looking for peptides to research?
              </p>
              <p className="mt-0.5 text-xs text-slate-500">
                Browse by goal or open the research library for compound
                profiles.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/goals"
                className="inline-flex min-h-[40px] items-center justify-center rounded-lg bg-indigo-600 px-4 text-sm font-semibold text-white hover:bg-indigo-700"
              >
                Browse Goals
              </Link>
              <Link
                href="/research-library"
                className="inline-flex min-h-[40px] items-center justify-center rounded-lg border border-indigo-300 bg-white px-4 text-sm font-semibold text-indigo-700 hover:bg-indigo-50"
              >
                Explore Peptides
              </Link>
            </div>
          </section>
        )}

        <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-base font-bold text-slate-900">
            Editorial and legal disclaimer
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            {PROVIDER_DIRECTORY.legalDisclaimer} A Certificate of Analysis
            applies only to the sample tested and cannot establish the identity,
            content, purity, or sterility of every vial sold under a batch
            number. Research peptides discussed here may be unapproved, poorly
            characterized, or unsuitable for human or veterinary use.
          </p>
          <p className="mt-3 text-xs text-slate-500">
            Information checked {PROVIDER_DIRECTORY.lastUpdated}. Prices, review
            counts and shipping policies can change.
          </p>
        </section>
      </main>

      <HomeFooter />
    </div>
  );
}
