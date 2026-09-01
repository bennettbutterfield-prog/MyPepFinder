import Link from "next/link";
import { GoalPageHeader } from "@/components/GoalPageHeader";
import { HomeFooter } from "@/components/HomeFooter";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { optimizationGoalById } from "@/data/optimization-goals";
import { getPeptideRecommendations } from "@/lib/peptide-recommendations";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Providers | MyPepFinder",
  description:
    "Compare trusted peptide research providers by trust score and shipping.",
};

const PROVIDERS = [
  {
    initials: "PS",
    name: "Peptide Sciences",
    trust: "9.7",
    rating: "4.9",
    reviews: "2,840",
    price: "$$",
    priceNote: "From $149/mo",
    tags: ["Free Shipping", "COA Available", "Verified"],
    blurb:
      "Frequently cited for documentation clarity, testing language, and broad catalog depth.",
    tone: "bg-indigo-600",
  },
  {
    initials: "CP",
    name: "Core Peptides",
    trust: "9.4",
    rating: "4.8",
    reviews: "1,920",
    price: "$$",
    priceNote: "From $129/mo",
    tags: ["Lab Tested", "Fast Ship"],
    blurb:
      "Strong review volume with clear purity messaging and competitive mid-range pricing.",
    tone: "bg-teal-600",
  },
  {
    initials: "LP",
    name: "Limitless Life",
    trust: "9.1",
    rating: "4.7",
    reviews: "1,105",
    price: "$",
    priceNote: "From $119/mo",
    tags: ["Fast Ship", "Budget Friendly"],
    blurb:
      "Popular for accessible pricing while still surfacing testing and review signals.",
    tone: "bg-violet-600",
  },
  {
    initials: "PP",
    name: "PureRawz",
    trust: "8.9",
    rating: "4.6",
    reviews: "980",
    price: "$",
    priceNote: "From $99/mo",
    tags: ["Wide Catalog"],
    blurb:
      "Broad selection with transparent review counts—useful for side-by-side comparisons.",
    tone: "bg-amber-500",
  },
  {
    initials: "AM",
    name: "Amino Asylum",
    trust: "8.7",
    rating: "4.5",
    reviews: "760",
    price: "$",
    priceNote: "From $89/mo",
    tags: ["Community Favorites"],
    blurb:
      "Often compared on value; check COA language and review sentiment carefully.",
    tone: "bg-slate-700",
  },
  {
    initials: "SP",
    name: "Strate Labs",
    trust: "8.6",
    rating: "4.5",
    reviews: "640",
    price: "$$",
    priceNote: "From $139/mo",
    tags: ["Lab Tested"],
    blurb:
      "Mid-market option with testing callouts and steady review history.",
    tone: "bg-blue-600",
  },
];

const TRUST_BADGES = [
  "Verified Vendors",
  "Lab Tested",
  "Secure Payments",
  "Fast Shipping",
];

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

        <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              Top Rated Providers
            </p>
            <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Compare trusted vendors
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-slate-500 sm:text-[15px]">
              Review trust scores and pricing signals side by
              side—then open a peptide profile to explore catalogs in more detail.
            </p>
          </div>
          <ul className="flex flex-wrap gap-2">
            {TRUST_BADGES.map((label) => (
              <li
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-[11px] font-semibold text-emerald-700 ring-1 ring-emerald-100"
              >
                <span aria-hidden>✓</span>
                {label}
              </li>
            ))}
          </ul>
        </div>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROVIDERS.map((v) => (
            <li
              key={v.name}
              className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 opacity-60 grayscale shadow-sm"
              aria-disabled="true"
            >
              <div className="flex items-start gap-3 p-5 pb-0">
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white ${v.tone}`}
                >
                  {v.initials}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-base font-bold text-slate-900">
                      {v.name}
                    </h2>
                    <span className="shrink-0 rounded-full bg-slate-600 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                      Coming soon
                    </span>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-700 ring-1 ring-emerald-100">
                  {v.trust} Trust
                </span>
              </div>

              <PlaceholderImage
                label={v.name}
                tone="slate"
                icon="lab"
                className="mx-5 mt-4 h-28 rounded-xl"
              />

              <div className="flex flex-1 flex-col p-5 pt-4">
                <p className="text-xs leading-relaxed text-slate-500">
                  {v.blurb}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {v.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-indigo-50 px-2 py-0.5 text-[10px] font-semibold text-indigo-700 ring-1 ring-indigo-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="font-semibold text-slate-800">
                    {v.priceNote}
                  </span>
                  <span className="text-xs text-slate-400">{v.price}</span>
                </div>
                <span
                  className="mt-4 inline-flex min-h-[42px] cursor-not-allowed items-center justify-center rounded-lg bg-slate-300 text-sm font-semibold text-slate-500"
                  aria-disabled="true"
                >
                  Coming soon
                </span>
              </div>
            </li>
          ))}
        </ul>

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
                    Compare Providers
                  </Link>
                </li>
              ))}
            </ol>

            <div className="mt-6 flex flex-wrap gap-2">
              <Link
                href="/research-library"
                className="inline-flex min-h-[42px] items-center justify-center rounded-lg border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Explore Peptides
              </Link>
              <Link
                href="/goals/lose-weight"
                className="inline-flex min-h-[42px] items-center justify-center rounded-lg bg-indigo-600 px-4 text-sm font-semibold text-white hover:bg-indigo-700"
              >
                Browse Goals
              </Link>
            </div>
          </section>
        ) : (
          <section className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-indigo-100 bg-indigo-50 px-5 py-5 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm font-bold text-slate-900">
                Not sure which provider fits your goal?
              </p>
              <p className="mt-0.5 text-xs text-slate-500">
                Start with a goal page or explore peptides for a focused
                shortlist.
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
      </main>

      <HomeFooter />
    </div>
  );
}
