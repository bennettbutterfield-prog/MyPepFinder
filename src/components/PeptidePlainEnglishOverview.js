import {
  getCompoundKindLabel,
  getPeptideOverview,
} from "@/data/peptide-overviews";

/**
 * Plain-English research overview + evidence sentence + sources.
 * Place near the top of a peptide page, before the dosage section.
 *
 * @param {{
 *   slug: string;
 *   fallbackSlug?: string;
 *   name: string;
 * }} props
 */
export function PeptidePlainEnglishOverview({ slug, fallbackSlug, name }) {
  const data = getPeptideOverview(slug) || getPeptideOverview(fallbackSlug);
  if (!data) return null;

  const kindLabel = getCompoundKindLabel(data.compoundKind);
  const headingName = data.displayName || name;

  return (
    <section
      id="overview"
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
        Research overview
      </p>
      <h2 className="mt-1 text-xl font-bold text-slate-900">
        What is {headingName}?
      </h2>
      {kindLabel ? (
        <p className="mt-2 inline-flex rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600">
          {kindLabel}
        </p>
      ) : null}
      <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
        {data.overview}
      </p>
      <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3">
        <p className="text-[11px] font-bold uppercase tracking-wide text-amber-800">
          What the evidence shows
        </p>
        <p className="mt-1 text-sm leading-relaxed text-slate-700">
          {data.evidence}
        </p>
      </div>
      {data.sources?.length ? (
        <div className="mt-4">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
            {data.sources.length === 1 ? "Source" : "Sources"}
          </p>
          <ul className="mt-2 space-y-1.5">
            {data.sources.map((source) => (
              <li key={source.href}>
                <a
                  href={source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-indigo-600 underline decoration-indigo-200 underline-offset-2 hover:text-indigo-700"
                >
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
          {data.sourceNote ? (
            <p className="mt-2 text-xs leading-relaxed text-slate-500">
              {data.sourceNote}
            </p>
          ) : null}
        </div>
      ) : data.sourceNote ? (
        <p className="mt-3 text-xs leading-relaxed text-slate-500">
          {data.sourceNote}
        </p>
      ) : null}
    </section>
  );
}
