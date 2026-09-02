import {
  formatTrustScore,
  getEditorialRatingClass,
  getProviderToneClass,
} from "@/data/peptide-providers";
import {
  getProviderLinkRel,
  getProviderWebsiteUrl,
  isAffiliateProvider,
} from "@/data/affiliate-links";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";

/**
 * @param {{ provider: import("@/data/peptide-providers").PeptideProvider }} props
 */
export function ProviderProfileCard({ provider }) {
  const ratingClass = getEditorialRatingClass(provider.editorialRating);
  const websiteUrl = getProviderWebsiteUrl(provider);
  const isAffiliate = isAffiliateProvider(provider.slug);

  return (
    <article
      id={provider.slug}
      className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white shadow-sm"
    >
      <div className="flex flex-col gap-4 border-b border-slate-100 p-5 sm:flex-row sm:items-start sm:justify-between sm:p-6">
        <div className="flex items-start gap-3">
          <span
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white ${getProviderToneClass(provider.tone)}`}
          >
            {provider.initials}
          </span>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-lg font-bold text-slate-900">{provider.name}</h2>
              {isAffiliate ? (
                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-slate-600 ring-1 ring-slate-200">
                  Affiliate
                </span>
              ) : null}
            </div>
            <p className="mt-1 text-sm text-slate-500">{provider.researchUse}</p>
            <a
              href={websiteUrl}
              target="_blank"
              rel={getProviderLinkRel(provider.slug)}
              className="mt-2 inline-flex text-sm font-semibold text-indigo-600 hover:text-indigo-700"
            >
              Visit website →
            </a>
            {isAffiliate ? (
              <AffiliateDisclosure variant="provider" className="mt-3 max-w-xl text-xs" />
            ) : null}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:justify-end">
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-bold text-emerald-700 ring-1 ring-emerald-100">
            {formatTrustScore(provider.trustScore)}
          </span>
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${ratingClass}`}
          >
            {provider.editorialRating}
          </span>
        </div>
      </div>

      <div className="space-y-5 p-5 sm:p-6">
        <section>
          <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900">
            Testing assessment
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {provider.testingAssessment}
          </p>
        </section>

        <div className="grid gap-4 sm:grid-cols-2">
          <section className="rounded-xl border border-emerald-100 bg-emerald-50/50 p-4">
            <h3 className="text-sm font-bold text-emerald-900">Strengths</h3>
            <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-emerald-950/80">
              {provider.strengths.map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden className="text-emerald-600">
                    +
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl border border-amber-100 bg-amber-50/50 p-4">
            <h3 className="text-sm font-bold text-amber-950">Limitations</h3>
            <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-amber-950/80">
              {provider.limitations.map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden className="text-amber-700">
                    −
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="rounded-xl border border-indigo-100 bg-indigo-50/60 p-4">
          <h3 className="text-sm font-bold text-indigo-950">MyPepFinder summary</h3>
          <p className="mt-2 text-sm leading-relaxed text-indigo-950/90">
            <span className="font-semibold">{provider.summaryLabel}</span>{" "}
            {provider.summary}
          </p>
        </section>

        <section>
          <h3 className="text-sm font-bold text-slate-900">Sources</h3>
          <ul className="mt-2 space-y-1.5">
            {provider.sources.map((source) => (
              <li key={source.label}>
                {source.href ? (
                  <a
                    href={source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
                  >
                    {source.label}
                  </a>
                ) : (
                  <span className="text-sm text-slate-600">{source.label}</span>
                )}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}

/**
 * @param {{ provider: import("@/data/peptide-providers").PeptideProvider; rank?: number }} props
 */
export function ProviderComparisonRow({ provider, rank }) {
  const ratingClass = getEditorialRatingClass(provider.editorialRating);
  const websiteUrl = getProviderWebsiteUrl(provider);

  return (
    <tr className="border-t border-slate-100">
      <td className="px-4 py-3">
        <div className="flex items-center gap-3">
          {rank != null ? (
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-600">
              {rank}
            </span>
          ) : null}
          <div>
            <a
              href={websiteUrl}
              target="_blank"
              rel={getProviderLinkRel(provider.slug)}
              className="font-semibold text-indigo-600 hover:text-indigo-700"
            >
              {provider.name}
            </a>
            {isAffiliateProvider(provider.slug) ? (
              <p className="mt-1 text-[11px] leading-snug text-slate-500">
                Affiliate link
              </p>
            ) : null}
          </div>
        </div>
      </td>
      <td className="px-4 py-3 font-semibold text-emerald-700">
        {formatTrustScore(provider.trustScore)}
      </td>
      <td className="px-4 py-3">
        <span
          className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ${ratingClass}`}
        >
          {provider.editorialRating}
        </span>
      </td>
      <td className="px-4 py-3 text-sm leading-relaxed text-slate-600">
        {provider.comparisonBlurb}
      </td>
    </tr>
  );
}
