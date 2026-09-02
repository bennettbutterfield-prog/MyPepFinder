import Link from "next/link";
import {
  getProviderLinkRel,
  getProviderWebsiteUrl,
} from "@/data/affiliate-links";
import {
  formatTrustScore,
  getEditorialRatingClass,
  getProviderToneClass,
  getTopProvidersForSidebar,
} from "@/data/peptide-providers";

/**
 * @param {{ limit?: number; variant?: "compact" | "section"; className?: string }} props
 */
export function TopRatedProvidersPanel({
  limit = 4,
  variant = "compact",
  className = "",
}) {
  const providers = getTopProvidersForSidebar(limit);

  if (variant === "section") {
    return (
      <section className={`mt-12 ${className}`.trim()}>
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              Top Rated Providers
            </p>
            <h2 className="mt-1 text-xl font-bold text-slate-900">
              Trusted research vendors
            </h2>
          </div>
          <Link
            href="/recommendations"
            className="shrink-0 text-sm font-semibold text-violet-700 hover:text-violet-800"
          >
            Compare all →
          </Link>
        </div>

        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {providers.map((provider, index) => (
            <li key={provider.slug}>
              <a
                href={getProviderWebsiteUrl(provider)}
                target="_blank"
                rel={getProviderLinkRel(provider.slug)}
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-violet-200 hover:shadow-md"
              >
                <div className="flex items-start gap-3">
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[11px] font-bold text-white ${getProviderToneClass(provider.tone)}`}
                  >
                    {provider.initials}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                      #{index + 1}
                    </p>
                    <p className="truncate text-sm font-bold text-slate-900 group-hover:text-violet-700">
                      {provider.name}
                    </p>
                  </div>
                </div>
                <p className="mt-3 flex-1 text-xs leading-relaxed text-slate-500">
                  {provider.comparisonBlurb}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 ring-1 ring-emerald-100">
                    {formatTrustScore(provider.trustScore)}
                  </span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ring-1 ${getEditorialRatingClass(provider.editorialRating)}`}
                  >
                    {provider.editorialRating}
                  </span>
                </div>
                <span className="mt-3 text-xs font-semibold text-violet-700">
                  Visit website →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    );
  }

  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-white p-4 shadow-sm ${className}`.trim()}
    >
      <h3 className="text-sm font-bold text-slate-900">Top Rated Providers</h3>
      <ul className="mt-3 space-y-3">
        {providers.map((provider) => (
          <li key={provider.slug}>
            <a
              href={getProviderWebsiteUrl(provider)}
              target="_blank"
              rel={getProviderLinkRel(provider.slug)}
              className="group flex items-center gap-2.5 rounded-lg border border-slate-100 bg-slate-50/50 p-2 transition hover:border-violet-200 hover:bg-violet-50/40 hover:shadow-sm"
            >
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[10px] font-bold text-white ${getProviderToneClass(provider.tone)}`}
              >
                {provider.initials}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-semibold text-slate-900">
                  {provider.name}
                </p>
                <p className="text-[10px] text-slate-500">
                  {formatTrustScore(provider.trustScore)} Trust Score
                </p>
                <p className="text-[10px] font-medium text-emerald-600">
                  {provider.summaryLabel || provider.editorialRating}
                </p>
              </div>
              <span className="shrink-0 rounded-md bg-violet-600 px-2.5 py-1.5 text-[10px] font-semibold text-white group-hover:bg-violet-700">
                Visit
              </span>
            </a>
          </li>
        ))}
      </ul>
      <Link
        href="/recommendations"
        className="mt-3 block text-center text-xs font-semibold text-violet-700 hover:text-violet-800"
      >
        Compare All Providers →
      </Link>
    </div>
  );
}
