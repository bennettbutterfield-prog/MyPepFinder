import Link from "next/link";
import { GoalPageHeader } from "@/components/GoalPageHeader";
import { HomeFooter } from "@/components/HomeFooter";
import {
  ProviderComparisonRow,
  ProviderProfileCard,
} from "@/components/ProviderProfileCard";
import {
  getProviderLinkRel,
  getProviderWebsiteUrl,
} from "@/data/affiliate-links";
import {
  formatTrustScore,
  getEditorialRatingClass,
  getProviderToneClass,
  getTopProviders,
  PEPTIDE_PROVIDERS,
  PROVIDER_DIRECTORY,
  TRUST_SCORE_BANDS,
  TRUST_SCORE_METHODOLOGY,
} from "@/data/peptide-providers";
import { optimizationGoalById } from "@/data/optimization-goals";
import { getPeptideRecommendations } from "@/lib/peptide-recommendations";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Research Peptide Providers | MyPepFinder",
  description: PROVIDER_DIRECTORY.description,
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

  const featuredProviders = getTopProviders(6);

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
            {PROVIDER_DIRECTORY.intro}
          </p>
          <p className="mt-4 text-xs text-slate-400">
            Last updated: {PROVIDER_DIRECTORY.lastUpdated} ·{" "}
            {PROVIDER_DIRECTORY.providerCount} providers reviewed
          </p>
        </header>

        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4">
          <p className="text-sm leading-relaxed text-amber-950">
            <span className="font-semibold">Important:</span>{" "}
            {PROVIDER_DIRECTORY.disclaimer}
          </p>
        </div>

        <section className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProviders.map((provider, index) => (
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
                      #{index + 1}
                    </p>
                    <h2 className="text-base font-bold text-slate-900 group-hover:text-indigo-700">
                      {provider.name}
                    </h2>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-700 ring-1 ring-emerald-100">
                  {formatTrustScore(provider.trustScore)}
                </span>
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500">
                {provider.comparisonBlurb}
              </p>
              <span
                className={`mt-4 inline-flex w-fit rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ${getEditorialRatingClass(provider.editorialRating)}`}
              >
                {provider.editorialRating}
              </span>
            </a>
          ))}
        </section>

        <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
          <h2 className="text-xl font-bold text-slate-900">
            Trust Score Methodology
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Each provider receives an editorial score from 0 to 10 based on:
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {TRUST_SCORE_METHODOLOGY.map((item) => (
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
              </li>
            ))}
          </ul>

          <div className="mt-8 overflow-x-auto rounded-xl border border-slate-200">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-4 py-3 font-semibold">Score</th>
                  <th className="px-4 py-3 font-semibold">Editorial rating</th>
                  <th className="px-4 py-3 font-semibold">Meaning</th>
                </tr>
              </thead>
              <tbody>
                {TRUST_SCORE_BANDS.map((band) => (
                  <tr key={band.range} className="border-t border-slate-100">
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      {band.range}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ${getEditorialRatingClass(band.rating)}`}
                      >
                        {band.rating}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-slate-600">{band.meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-bold text-slate-900">Provider comparison</h2>
          <p className="mt-2 text-sm text-slate-500">
            Ranked by MyPepFinder Trust Score. Click a provider name to visit
            their website, or scroll down for full editorial profiles.
          </p>

          <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-4 py-3 font-semibold">Provider</th>
                  <th className="px-4 py-3 font-semibold">Trust score</th>
                  <th className="px-4 py-3 font-semibold">Rating</th>
                  <th className="px-4 py-3 font-semibold">Testing assessment</th>
                </tr>
              </thead>
              <tbody>
                {PEPTIDE_PROVIDERS.map((provider, index) => (
                  <ProviderComparisonRow
                    key={provider.slug}
                    provider={provider}
                    rank={index + 1}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-12 space-y-6">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Provider profiles</h2>
            <p className="mt-2 text-sm text-slate-500">
              Full editorial assessments with strengths, limitations, and linked
              sources.
            </p>
          </div>

          {PEPTIDE_PROVIDERS.map((provider) => (
            <ProviderProfileCard key={provider.slug} provider={provider} />
          ))}
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
            <p className="mt-2 text-sm text-slate-500">
              Shortlist based on your selected focus
              {goal.shortLabel ? (
                <>
                  {" "}
                  <span className="font-medium text-slate-700">
                    ({goal.shortLabel})
                  </span>
                </>
              ) : null}
              . Open a profile to compare providers for that compound.
            </p>

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
                Browse by goal or open the research library for compound profiles.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/goals/lose-weight"
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
        </section>
      </main>

      <HomeFooter />
    </div>
  );
}
