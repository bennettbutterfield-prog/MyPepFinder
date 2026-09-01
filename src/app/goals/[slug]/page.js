import Link from "next/link";
import Image from "next/image";
import { notFound, redirect } from "next/navigation";
import {
  GOAL_REDIRECTS,
  GOAL_SIDEBAR,
  GOAL_TOOLS,
  getAllGoalSlugs,
  getGoalPage,
} from "@/data/goal-pages";
import { GoalPageHeader } from "@/components/GoalPageHeader";
import { GoalResultsChart } from "@/components/GoalResultsChart";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { HomeFooter } from "@/components/HomeFooter";
import { NewsletterSignupForm } from "@/components/NewsletterSignupForm";

export const dynamicParams = false;

export function generateStaticParams() {
  return [...getAllGoalSlugs(), ...Object.keys(GOAL_REDIRECTS)].map(
    (slug) => ({ slug })
  );
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const resolved = GOAL_REDIRECTS[slug] || slug;
  const page = getGoalPage(resolved);
  if (!page) return { title: "Goals | MyPepFinder" };
  return {
    title: `${page.title} Peptides | MyPepFinder`,
    description: page.description,
  };
}

const BADGE = {
  blue: "bg-blue-600 text-white",
  green: "bg-emerald-600 text-white",
  purple: "bg-violet-600 text-white",
};

const BENEFIT_TONE = {
  blue: "bg-blue-50 text-blue-600",
  orange: "bg-orange-50 text-orange-600",
  green: "bg-emerald-50 text-emerald-600",
  purple: "bg-violet-50 text-violet-600",
  teal: "bg-teal-50 text-teal-600",
};

export default async function GoalPage({ params }) {
  const { slug } = await params;
  if (GOAL_REDIRECTS[slug]) {
    redirect(`/goals/${GOAL_REDIRECTS[slug]}`);
  }
  const page = getGoalPage(slug);
  if (!page) notFound();

  const top = page.peptides[0];
  const showWeightChart =
    slug === "lose-weight" ||
    page.peptides.some((p) => (p.chartLossPct || 0) > 0);

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
      <GoalPageHeader />

      <div className="mx-auto flex w-full max-w-[1400px] flex-1">
        {/* Sidebar */}
        <aside className="hidden w-56 shrink-0 border-r border-slate-200 bg-slate-50/80 lg:block xl:w-60">
          <div className="sticky top-14 max-h-[calc(100vh-3.5rem)] overflow-y-auto px-3 py-5">
            <p className="px-2 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
              Goals
            </p>
            <ul className="mt-2 space-y-0.5">
              {GOAL_SIDEBAR.map((g) => {
                const active = g.slug === slug;
                return (
                  <li key={g.slug}>
                    <Link
                      href={`/goals/${g.slug}`}
                      className={`flex items-center gap-2 rounded-lg px-2.5 py-2 text-[13px] font-medium transition ${
                        active
                          ? "bg-blue-50 text-blue-700"
                          : "text-slate-600 hover:bg-white hover:text-slate-900"
                      }`}
                    >
                      <SidebarIcon active={active} />
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
                    className="flex items-center gap-2 rounded-lg px-2.5 py-2 text-[13px] font-medium text-slate-600 transition hover:bg-white hover:text-slate-900"
                  >
                    <SidebarIcon />
                    {t.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main */}
        <main className="min-w-0 flex-1 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <nav className="text-xs text-slate-400" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link href="/" className="hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li aria-hidden>›</li>
              <li>
                <Link href="/goals/lose-weight" className="hover:text-blue-600">
                  Goals
                </Link>
              </li>
              <li aria-hidden>›</li>
              <li className="font-medium text-slate-600">{page.title}</li>
            </ol>
          </nav>

          {/* Hero */}
          <section className="mt-4 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                {page.title}
              </h1>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-500 sm:text-[15px]">
                {page.description}
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {page.stats
                  .filter((s) => s.label !== "Reviews")
                  .map((s) => (
                  <li key={s.label} className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-2.5">
                    <p className="text-lg font-bold text-slate-900">{s.value}</p>
                    <p className="text-[11px] text-slate-500">{s.label}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
              {page.heroImage ? (
                <div className="relative h-48 w-full overflow-hidden rounded-2xl sm:h-56">
                  <Image
                    src={page.heroImage}
                    alt={`${page.title} visual`}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 480px"
                    priority
                  />
                </div>
              ) : (
                <PlaceholderImage
                  label={`${page.title} visual`}
                  tone={page.heroTone || "sky"}
                  icon="body"
                  className="h-48 w-full rounded-2xl sm:h-56"
                />
              )}
              <ul className="grid grid-cols-2 gap-2 sm:grid-cols-1">
                {page.benefits.map((b) => (
                  <li
                    key={b.label}
                    className="flex items-center gap-2 rounded-xl border border-slate-100 bg-white px-2.5 py-2 shadow-sm"
                  >
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs ${
                        BENEFIT_TONE[b.tone] || BENEFIT_TONE.blue
                      }`}
                    >
                      ●
                    </span>
                    <span className="text-xs font-semibold leading-snug text-slate-700">
                      {b.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Top peptides */}
          <section className="mt-10">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-xl font-bold text-slate-900">
                Top Peptides for {page.title}
              </h2>
              <button
                type="button"
                className="text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                How we rank →
              </button>
            </div>

            <div className="mt-5 grid gap-4 xl:grid-cols-[1fr_240px]">
              <ul className="grid gap-4 md:grid-cols-3">
                {page.peptides.map((p) => {
                  const comingSoon = Boolean(p.researchComingSoon);
                  return (
                  <li
                    key={p.name}
                    className={`flex flex-col overflow-hidden rounded-2xl border border-slate-200 shadow-sm ${
                      comingSoon
                        ? "bg-slate-100 opacity-60 grayscale"
                        : "bg-white"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 p-3 pb-0">
                      <span
                        className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${
                          BADGE[p.badgeTone] || BADGE.blue
                        }`}
                      >
                        {p.badge}
                      </span>
                      <button
                        type="button"
                        aria-label="Favorite"
                        className="text-slate-300 hover:text-rose-500"
                        disabled={comingSoon}
                      >
                        ♡
                      </button>
                    </div>
                    <PlaceholderImage
                      label={p.name}
                      tone={p.tone}
                      icon="molecule"
                      className="mx-3 mt-3 h-28 rounded-xl"
                    />
                    <div className="flex flex-1 flex-col p-4 pt-3">
                      <h3 className="text-base font-bold text-slate-900">
                        {p.name}
                      </h3>
                      {comingSoon ? (
                        <span className="mt-2 inline-flex w-fit rounded-full bg-slate-600 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                          Research coming soon
                        </span>
                      ) : null}
                      <div className="mt-3 rounded-xl bg-blue-50 px-3 py-2.5 text-center">
                        <p className="text-[10px] font-semibold uppercase tracking-wide text-blue-600">
                          {p.metricLabel}
                        </p>
                        <p className="text-2xl font-bold text-blue-700">
                          {p.metricValue}
                        </p>
                      </div>
                      <dl className="mt-3 space-y-1.5 text-xs">
                        <Row k="Research Quality" v={p.research} />
                        <Row k="Side Effects" v={p.sideEffects} />
                        <Row k="Cost" v={p.cost} />
                        <Row k="Best For" v={p.bestFor} />
                      </dl>
                      {comingSoon ? (
                        <span
                          className="mt-4 inline-flex min-h-[40px] cursor-not-allowed items-center justify-center rounded-lg border border-slate-300 bg-slate-200 text-sm font-semibold text-slate-500"
                          aria-disabled="true"
                        >
                          Coming soon
                        </span>
                      ) : (
                        <Link
                          href={`/peptides/${p.slug}`}
                          className={`mt-4 inline-flex min-h-[40px] items-center justify-center rounded-lg border text-sm font-semibold transition ${
                            p.badgeTone === "green"
                              ? "border-emerald-300 text-emerald-700 hover:bg-emerald-50"
                              : p.badgeTone === "purple"
                                ? "border-violet-300 text-violet-700 hover:bg-violet-50"
                                : "border-blue-300 text-blue-700 hover:bg-blue-50"
                          }`}
                        >
                          View Details
                        </Link>
                      )}
                    </div>
                  </li>
                  );
                })}
              </ul>

              <aside className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
                <h3 className="text-sm font-bold text-slate-900">
                  {top?.whyTitle || `Why ${top?.name} ranks #1`}
                </h3>
                <ul className="mt-3 space-y-2">
                  {(top?.whyPoints || []).map((point) => (
                    <li
                      key={point}
                      className="flex gap-2 text-xs leading-snug text-slate-600"
                    >
                      <span className="mt-0.5 text-emerald-500">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/recommendations"
                  className="mt-4 flex min-h-[40px] items-center justify-center rounded-lg bg-blue-600 text-sm font-semibold text-white hover:bg-blue-700"
                >
                  Compare Providers
                </Link>
                <Link
                  href={
                    page.categorySlug
                      ? `/research-library?category=${page.categorySlug}`
                      : "/research-library"
                  }
                  className="mt-2 flex min-h-[40px] items-center justify-center rounded-lg border border-blue-300 bg-white text-sm font-semibold text-blue-700 hover:bg-blue-50"
                >
                  Compare All Peptides
                </Link>
              </aside>
            </div>

            <Link
              href={
                page.categorySlug
                  ? `/research-library?category=${page.categorySlug}`
                  : "/research-library"
              }
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white py-3 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50"
            >
              View All {page.totalPeptides} Peptides
              <span className="text-slate-400">→</span>
            </Link>
          </section>

          {/* Chart + providers */}
          <section className="mt-10 grid gap-6 xl:grid-cols-[1.4fr_0.75fr]">
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Expected Results Over Time
              </h2>
              <div className="mt-4">
                {showWeightChart ? (
                  <GoalResultsChart peptides={page.peptides} />
                ) : (
                  <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 p-8 text-center text-sm text-slate-500">
                    Trajectory chart tailored for this goal is coming soon.
                    Compare peptide cards above for research signals.
                  </div>
                )}
              </div>
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Top Rated Providers
              </h2>
              <ul className="mt-4 space-y-3">
                {page.providers.map((v) => (
                  <li
                    key={v.name}
                    className="rounded-xl border border-slate-200 bg-slate-100 p-3 opacity-60 grayscale shadow-sm"
                    aria-disabled="true"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-xs font-bold text-white">
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
                        <p className="text-xs text-slate-500">
                          {v.price}
                        </p>
                      </div>
                    </div>
                    <p className="mt-2 text-[11px] font-medium text-emerald-600">
                      {v.tag}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Bottom 2-col */}
          <section className="mt-12 grid gap-8 lg:grid-cols-2">
            <div>
              <div className="flex items-center justify-between gap-2">
                <h2 className="text-base font-bold text-slate-900">
                  Research Backed
                </h2>
                <Link
                  href="/research-library"
                  className="text-xs font-semibold text-blue-600"
                >
                  View all studies
                </Link>
              </div>
              <ul className="mt-4 space-y-3">
                {page.studies.map((s) => (
                  <li
                    key={s.title}
                    className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm"
                  >
                    <div className="flex gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                        ◆
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">
                          {s.title}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-slate-500">
                          {s.summary}
                        </p>
                        <p className="mt-1.5 text-[11px] font-medium text-slate-400">
                          {s.cite}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900">
                Helpful Resources
              </h2>
              <ul className="mt-4 space-y-2">
                {page.resources.map((r) => (
                  <li key={r.title}>
                    <Link
                      href={r.href}
                      className="flex items-center justify-between gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm font-medium text-slate-800 shadow-sm transition hover:border-blue-200 hover:bg-blue-50/40"
                    >
                      {r.title}
                      <span className="text-slate-300">›</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/research-library"
                className="mt-3 flex min-h-[42px] items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-sm font-semibold text-slate-700 hover:bg-slate-100"
              >
                View All Resources
              </Link>
            </div>
          </section>

          {/* Newsletter */}
          <section className="mt-12 mb-4 rounded-2xl bg-indigo-50 px-5 py-5 sm:px-6">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <p className="text-sm font-bold text-slate-900">
                  Stay updated on the latest peptide research
                </p>
                <p className="mt-0.5 text-xs text-slate-500">
                  New studies, guides, and calculator tools in your inbox.
                </p>
              </div>
              <NewsletterSignupForm
                sourcePage={`/goals/${slug}`}
                selectedGoal={page.title}
                variant="indigo"
              />
            </div>
          </section>
        </main>
      </div>

      <HomeFooter />
    </div>
  );
}

function Row({ k, v }) {
  return (
    <div className="flex items-center justify-between gap-2 border-b border-slate-50 pb-1.5 last:border-0">
      <dt className="text-slate-500">{k}</dt>
      <dd className="font-semibold text-slate-800">{v}</dd>
    </div>
  );
}

function SidebarIcon({ active }) {
  const color = active ? "text-blue-600" : "text-slate-400";
  return (
    <span className={`inline-flex h-4 w-4 items-center justify-center ${color}`} aria-hidden>
      •
    </span>
  );
}
