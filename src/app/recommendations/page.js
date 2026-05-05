import Link from "next/link";
import { optimizationGoalById } from "@/data/optimization-goals";
import { getPeptideRecommendations } from "@/lib/peptide-recommendations";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const dynamic = "force-dynamic";

function parseNumber(raw) {
  const n = Number.parseFloat(String(raw ?? ""));
  return Number.isFinite(n) ? n : undefined;
}

function parseIntSafe(raw) {
  const n = Number.parseInt(String(raw ?? ""), 10);
  return Number.isFinite(n) ? n : undefined;
}

export default function RecommendationsPage({ searchParams }) {
  const goalId =
    typeof searchParams?.goal === "string"
      ? searchParams.goal
      : "weight-loss";
  const goal = optimizationGoalById(goalId);
  const goalLabel = goal?.label ?? "Your focus";

  const age = parseIntSafe(searchParams?.age);
  const weightRaw = parseNumber(searchParams?.weight);
  const unit = searchParams?.unit === "kg" ? "kg" : "lbs";

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

  const { peptides, footnotes } = getPeptideRecommendations(goalId, {
    age,
    weightKg,
    heightCm,
  });

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <SiteHeader variant="light" />

      <main className="flex-1 px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-600">
            Your exploration snapshot
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Peptides commonly associated with{" "}
            <span className="text-amber-600">{goalLabel.toLowerCase()}</span>{" "}
            research
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            Based on your selected optimisation focus
            {goal?.shortLabel ? (
              <>
                {" "}
                <span className="font-medium text-slate-800">
                  ({goal.shortLabel})
                </span>
              </>
            ) : null}
            {age != null || weightRaw != null || heightCm != null ? (
              <>
                {" "}
                and the profile you entered (purely for how studies often
                stratify cohorts in papers).
              </>
            ) : (
              <> and public research summaries—not personal medical guidance.</>
            )}
          </p>

          {(age != null || weightRaw != null || heightCm != null) && (
            <dl className="mt-6 flex flex-wrap gap-4 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-xs text-slate-600">
              {age != null ? (
                <div>
                  <dt className="font-medium text-slate-400">Age</dt>
                  <dd className="text-slate-800">{age}</dd>
                </div>
              ) : null}
              {weightRaw != null ? (
                <div>
                  <dt className="font-medium text-slate-400">Weight</dt>
                  <dd className="text-slate-800">
                    {weightRaw} {unit}
                  </dd>
                </div>
              ) : null}
              {heightFt != null && heightIn != null ? (
                <div>
                  <dt className="font-medium text-slate-400">Height</dt>
                  <dd className="text-slate-800">
                    {heightFt}′ {heightIn}″
                    {heightCm != null ? (
                      <span className="block text-slate-500">
                        ({heightCm.toFixed(1)} cm)
                      </span>
                    ) : null}
                  </dd>
                </div>
              ) : heightCm != null ? (
                <div>
                  <dt className="font-medium text-slate-400">Height</dt>
                  <dd className="text-slate-800">{heightCm.toFixed(1)} cm</dd>
                </div>
              ) : null}
            </dl>
          )}

          <ol className="mt-10 space-y-4">
            {peptides.map((p) => (
              <li
                key={p.name + p.rank}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-amber-400">
                    {p.rank}
                  </span>
                  <div>
                    <h2 className="text-lg font-semibold text-slate-900">
                      {p.name}
                    </h2>
                    <p className="text-xs font-medium uppercase tracking-wide text-amber-600/90">
                      {p.tagline}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {p.context}
                    </p>
                    <div className="mt-4">
                      <Link
                        href={`/peptides/${p.exploreSlug}`}
                        className="inline-flex min-h-[40px] items-center justify-center rounded-full border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-amber-400 hover:bg-amber-50"
                      >
                        Explore providers
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10 rounded-2xl border border-amber-200/80 bg-amber-50/80 p-5 text-xs leading-relaxed text-amber-950">
            {footnotes.map((t, i) => (
              <p key={i} className={i > 0 ? "mt-2" : ""}>
                {t}
              </p>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#peptide-finder"
              className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-full border border-slate-300 text-sm font-semibold text-slate-800 hover:bg-white"
            >
              Adjust inputs
            </Link>
            <Link
              href="/"
              className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Back to home
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
