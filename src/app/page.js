import Link from "next/link";
import Image from "next/image";
import { HomeHeader } from "@/components/HomeHeader";
import { HomeFooter } from "@/components/HomeFooter";
import { HomeHeroMan } from "@/components/HomeHeroMan";
import { PlaceholderImage } from "@/components/PlaceholderImage";

const HERO_FEATURES = [
  {
    title: "Evidence-Based Information",
    icon: "shield",
  },
  {
    title: "Compare Top Providers",
    icon: "beaker",
  },
  {
    title: "Powerful Tools & Calculators",
    icon: "calc",
  },
];

const GOALS = [
  {
    title: "Lose Weight",
    href: "/goals/lose-weight",
    peptides: 10,
    rating: "4.6",
    research: "High Research",
    tone: "orange",
    icon: "body",
    image: "/goal-icons/lose-weight.jpg",
  },
  {
    title: "Cognition",
    href: "/goals/improve-focus",
    peptides: 11,
    rating: "4.5",
    research: "High Research",
    tone: "indigo",
    icon: "brain",
    image: "/goal-icons/cognition.jpg",
  },
  {
    title: "Build Muscle",
    href: "/goals/build-muscle",
    peptides: 15,
    rating: "4.7",
    research: "High Research",
    tone: "teal",
    icon: "body",
    image: "/goal-icons/build-muscle.jpg",
  },
  {
    title: "Recovery",
    href: "/goals/recovery",
    peptides: 17,
    rating: "4.4",
    research: "Growing",
    tone: "green",
    icon: "lab",
    image: "/goal-icons/recovery.jpg",
  },
  {
    title: "Better Sleep",
    href: "/goals/better-sleep",
    peptides: 5,
    rating: "4.6",
    research: "High Research",
    tone: "violet",
    icon: "sleep",
    image: "/goal-icons/better-sleep.jpg",
  },
  {
    title: "Hair Growth",
    href: "/goals/hair-growth",
    peptides: 8,
    rating: "4.5",
    research: "Growing",
    tone: "rose",
    icon: "photo",
    image: "/goal-icons/hair-growth.jpg",
  },
  {
    title: "Skin Health",
    href: "/goals/skin-health",
    peptides: 7,
    rating: "4.5",
    research: "High Research",
    tone: "pink",
    icon: "photo",
    image: "/goal-icons/skin-health.jpg",
  },
  {
    title: "Longevity",
    href: "/goals/longevity",
    peptides: 15,
    rating: "4.6",
    research: "High Research",
    tone: "indigo",
    icon: "lab",
    image: "/goal-icons/longevity.jpg",
  },
];

const TRENDING = [
  {
    name: "Retatrutide",
    slug: "retatrutide",
    category: "Weight Loss",
    tag: "Most Popular",
    rating: "4.8",
    reviews: "1,256",
    blurb:
      "Triple-agonist frequently discussed in metabolic and body-composition research contexts.",
    tone: "violet",
  },
  {
    name: "CJC-1295",
    slug: "cjc-1295",
    category: "Muscle & Recovery",
    tag: "Trending",
    rating: "4.6",
    reviews: "892",
    blurb:
      "Growth-hormone secretagogue commonly explored for lean-mass and recovery protocols.",
    tone: "teal",
  },
  {
    name: "BPC-157",
    slug: "bpc-157",
    category: "Injury Recovery",
    tag: "Top Rated",
    rating: "4.7",
    reviews: "2,104",
    blurb:
      "Healing-oriented peptide widely referenced in tissue-repair research conversations.",
    tone: "green",
  },
  {
    name: "GLP-1 Semaglutide",
    slug: "glp-1-s",
    category: "Weight Loss",
    tag: "Popular",
    rating: "4.5",
    reviews: "3,410",
    blurb:
      "GLP-1 pathway compound frequently compared for metabolic support research.",
    tone: "sky",
  },
];

const PROVIDERS = [
  {
    initials: "PS",
    name: "Peptide Sciences",
    trust: "9.7",
    reviews: "2,840",
    price: "$$",
    tone: "indigo",
  },
  {
    initials: "CP",
    name: "Core Peptides",
    trust: "9.4",
    reviews: "1,920",
    price: "$$",
    tone: "teal",
  },
  {
    initials: "LP",
    name: "Limitless Life",
    trust: "9.1",
    reviews: "1,105",
    price: "$",
    tone: "violet",
  },
  {
    initials: "PP",
    name: "PureRawz",
    trust: "8.9",
    reviews: "980",
    price: "$",
    tone: "amber",
  },
];

const ARTICLES = [
  {
    tag: "Research",
    title: "Retatrutide Shows Superior Weight Loss in Phase 2 Trial",
    meta: "May 12, 2024 · 8 min read",
    tone: "indigo",
    icon: "lab",
  },
  {
    tag: "Guide",
    title: "How to Reconstitute Peptides: A Practical Overview",
    meta: "Apr 28, 2024 · 6 min read",
    tone: "teal",
    icon: "lab",
  },
  {
    tag: "Research",
    title: "BPC-157 and Tissue Repair: What the Literature Suggests",
    meta: "Apr 3, 2024 · 10 min read",
    tone: "green",
    icon: "molecule",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
      <HomeHeader />

      {/* Hero — Optimize You + man visual */}
      <section className="relative overflow-hidden border-b border-slate-100">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 50% at 12% 30%, rgba(99,102,241,0.12), transparent), radial-gradient(ellipse 45% 40% at 88% 20%, rgba(139,92,246,0.10), transparent)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-6xl items-start gap-6 px-4 pt-10 pb-4 sm:px-6 sm:pt-12 sm:pb-6 lg:grid-cols-[0.95fr_1.15fr] lg:gap-8 lg:pt-14 lg:pb-6">
          <div className="flex min-h-0 flex-col justify-between gap-8 lg:min-h-[36rem] lg:gap-0">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-indigo-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-indigo-700 ring-1 ring-indigo-100 sm:text-[13px]">
              Peptide Education &amp; Comparison Platform
            </span>

            <div className="flex flex-1 flex-col justify-center gap-8 py-4 lg:gap-9 lg:py-6">
              <div>
                <h1 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-[4.25rem] lg:leading-[1.02]">
                  Optimize{" "}
                  <span className="text-indigo-600">You.</span>
                </h1>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-500 sm:text-xl sm:leading-relaxed">
                  Research peptides. Compare providers. Optimize with
                  confidence.
                </p>
              </div>

              <ul className="space-y-4 sm:space-y-5">
                {HERO_FEATURES.map((f) => (
                  <li key={f.title} className="flex items-center gap-3.5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100">
                      <FeatureIcon name={f.icon} />
                    </span>
                    <span className="text-base font-semibold text-slate-800 sm:text-lg">
                      {f.title}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3.5">
                <Link
                  href="/research-library"
                  className="inline-flex min-h-[52px] items-center justify-center rounded-xl bg-indigo-600 px-6 text-base font-semibold text-white shadow-md shadow-indigo-600/25 transition hover:bg-indigo-700"
                >
                  Explore Peptides
                </Link>
                <Link
                  href="/calculator"
                  className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl border-2 border-indigo-300 bg-white px-6 text-base font-semibold text-indigo-700 transition hover:bg-indigo-50"
                >
                  <CalcGlyph />
                  Try Dosage Calculator
                </Link>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 sm:text-base">
              <span>Trusted by 18,000+ peptide researchers</span>
              <span className="text-indigo-500" aria-hidden>
                ★★★★★
              </span>
            </div>
          </div>

          <HomeHeroMan />
        </div>
      </section>

      {/* Browse by goal */}
      <section id="browse-goals" className="border-b border-slate-100 pt-6 pb-12 sm:pt-8 sm:pb-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                Browse by Goal
              </p>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-[1.75rem]">
                What do you want to improve?
              </h2>
            </div>
          </div>

          <ul className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-2.5">
            {GOALS.map((goal) => (
              <li key={goal.title} className="min-w-0">
                <Link
                  href={goal.href}
                  className="block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-indigo-200 hover:shadow-md"
                >
                  <div className="px-3 pt-3">
                    <span className="truncate text-[13px] font-semibold text-slate-900">
                      {goal.title}
                    </span>
                  </div>
                  {goal.image ? (
                    <div className="relative mx-3 mt-2.5 h-24 overflow-hidden rounded-xl">
                      <Image
                        src={goal.image}
                        alt={goal.title}
                        fill
                        className="object-cover object-center"
                        sizes="200px"
                      />
                    </div>
                  ) : (
                    <PlaceholderImage
                      label={goal.title}
                      tone={goal.tone}
                      icon={goal.icon}
                      className="mx-3 mt-2.5 h-24 rounded-xl"
                    />
                  )}
                  <div className="flex items-center justify-between gap-1.5 px-3 py-2.5 text-[10px] text-slate-500">
                    <span className="truncate">{goal.peptides} Peptides</span>
                    <span className="shrink-0 text-amber-500">★ {goal.rating}</span>
                    <span className="truncate text-indigo-600">
                      {goal.research}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Trending + Providers */}
      <section className="border-b border-slate-100 bg-slate-50/60 py-12 sm:py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.55fr_1fr] lg:gap-8">
          <div>
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Trending Peptides
                </p>
                <h2 className="mt-1 text-xl font-bold text-slate-900">
                  Popular right now
                </h2>
              </div>
              <Link
                href="/research-library"
                className="shrink-0 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
              >
                View all peptides →
              </Link>
            </div>

            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {TRENDING.map((p) => (
                <li key={p.name}>
                  <Link
                    href={`/peptides/${p.slug}`}
                    className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-indigo-200 hover:shadow-md"
                  >
                    <div className="relative">
                      <PlaceholderImage
                        label={p.name}
                        tone={p.tone}
                        icon="molecule"
                        className="h-36 w-full"
                      />
                      <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-semibold text-indigo-700 shadow-sm ring-1 ring-indigo-100">
                        {p.tag}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-4">
                      <h3 className="text-base font-bold text-slate-900">
                        {p.name}
                      </h3>
                      <p className="mt-0.5 text-xs text-slate-500">
                        {p.category}
                      </p>
                      <p className="mt-1 text-xs text-amber-500">
                        ★ {p.rating}{" "}
                        <span className="text-slate-400">({p.reviews})</span>
                      </p>
                      <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-600">
                        {p.blurb}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Top Rated Providers
                </p>
                <h2 className="mt-1 text-xl font-bold text-slate-900">
                  Trusted vendors
                </h2>
              </div>
              <span
                className="shrink-0 cursor-not-allowed text-sm font-semibold text-slate-400"
                aria-disabled="true"
              >
                View all →
              </span>
            </div>

            <ul className="mt-6 space-y-3">
              {PROVIDERS.map((v) => (
                <li
                  key={v.name}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-100 p-3 opacity-60 grayscale shadow-sm"
                  aria-disabled="true"
                >
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xs font-bold text-white ${
                      v.tone === "indigo"
                        ? "bg-indigo-600"
                        : v.tone === "teal"
                          ? "bg-teal-600"
                          : v.tone === "violet"
                            ? "bg-violet-600"
                            : "bg-amber-500"
                    }`}
                  >
                    {v.initials}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="truncate text-sm font-semibold text-slate-900">
                        {v.name}
                      </p>
                      <span className="shrink-0 rounded-full bg-slate-600 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                        Coming soon
                      </span>
                    </div>
                    <div className="mt-1 flex flex-wrap items-center gap-1.5 text-[11px]">
                      <span className="rounded-full bg-emerald-50 px-2 py-0.5 font-semibold text-emerald-700 ring-1 ring-emerald-100">
                        {v.trust} Trust Score
                      </span>
                      <span className="text-slate-400">{v.reviews} reviews</span>
                      <span className="text-slate-500">{v.price}</span>
                    </div>
                  </div>
                  <span
                    className="shrink-0 cursor-not-allowed rounded-lg bg-slate-300 px-3 py-2 text-xs font-semibold text-slate-500"
                    aria-disabled="true"
                  >
                    View Profile
                  </span>
                </li>
              ))}
            </ul>

            <ul className="mt-5 grid grid-cols-2 gap-2 text-[11px] text-emerald-700 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {[
                "Verified Vendors",
                "Lab Tested",
                "Secure Payments",
                "Fast Shipping",
              ].map((label) => (
                <li
                  key={label}
                  className="flex items-center gap-1.5 rounded-lg bg-emerald-50/80 px-2 py-1.5"
                >
                  <CheckIcon />
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Research + Reviews */}
      <section className="border-b border-slate-100 py-12 sm:py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.35fr_1fr] lg:gap-10">
          <div>
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Research Hub
                </p>
                <h2 className="mt-1 text-xl font-bold text-slate-900">
                  Stay up to date with the latest science
                </h2>
              </div>
              <Link
                href="/research-library"
                className="shrink-0 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
              >
                View all articles →
              </Link>
            </div>

            <ul className="mt-6 grid gap-4 sm:grid-cols-3">
              {ARTICLES.map((a) => (
                <li
                  key={a.title}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <PlaceholderImage
                    label={a.tag}
                    tone={a.tone}
                    icon={a.icon}
                    className="h-28 w-full"
                  />
                  <div className="p-3.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600">
                      {a.tag}
                    </span>
                    <h3 className="mt-1 text-sm font-semibold leading-snug text-slate-900">
                      {a.title}
                    </h3>
                    <p className="mt-2 text-[11px] text-slate-400">{a.meta}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div id="about" className="flex flex-col justify-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              Real Reviews. Real Results.
            </p>
            <h2 className="mt-1 text-xl font-bold text-slate-900">
              Join thousands optimizing their health.
            </h2>

            <div className="mt-6 flex items-end gap-4">
              <p className="text-5xl font-bold tracking-tight text-slate-900">
                4.7
              </p>
              <div className="pb-1">
                <p className="text-amber-400">★★★★★</p>
                <p className="mt-0.5 text-xs text-slate-500">
                  Based on 9,200+ reviews
                </p>
              </div>
            </div>

            <blockquote className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
              <p className="text-amber-400 text-sm">★★★★★</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                “MyPepFinder made it easy to compare providers and shortlist
                peptides for my recovery goals. Clear, research-focused, and
                actually useful.”
              </p>
              <footer className="mt-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-700">
                  JM
                </span>
                <span>
                  <span className="block text-sm font-semibold text-slate-900">
                    Jason M.
                  </span>
                  <span className="text-[11px] text-emerald-600">
                    Verified Buyer
                  </span>
                </span>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="px-4 py-10 sm:px-6 sm:py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-5 rounded-2xl bg-indigo-600 px-6 py-7 text-white shadow-lg shadow-indigo-600/25 sm:flex-row sm:items-center sm:px-8">
          <div className="flex items-start gap-4">
            <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15">
              <CompassIcon />
            </span>
            <div>
              <p className="text-lg font-bold tracking-tight">
                Your journey to a better you starts here.
              </p>
              <p className="mt-1 text-sm text-indigo-100">
                Explore. Compare. Optimize.
              </p>
            </div>
          </div>
          <Link
            href="/goals/lose-weight"
            className="inline-flex min-h-[44px] shrink-0 items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50"
          >
            Start Exploring →
          </Link>
        </div>
      </section>

      <HomeFooter />
    </div>
  );
}

function FeatureIcon({ name }) {
  const c = {
    className: "h-5 w-5",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };
  if (name === "beaker") {
    return (
      <svg {...c}>
        <path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3" />
      </svg>
    );
  }
  if (name === "calc") {
    return (
      <svg {...c}>
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 7h8M8 11h8M8 15h5" />
      </svg>
    );
  }
  return (
    <svg {...c}>
      <path d="M12 3 20 7v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V7l8-4Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function CalcGlyph() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 7h8M8 11h8M8 15h5" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      className="h-3.5 w-3.5 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      aria-hidden
    >
      <path d="m5 13 4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CompassIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 6-6 2 2-6 6-2Z" strokeLinejoin="round" />
    </svg>
  );
}
