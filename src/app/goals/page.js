import Link from "next/link";
import Image from "next/image";
import { GoalPageHeader } from "@/components/GoalPageHeader";
import { GoalToolsSidebar } from "@/components/GoalToolsSidebar";
import { HomeFooter } from "@/components/HomeFooter";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import {
  GOAL_HERO_IMAGES,
  GOAL_SIDEBAR,
  getGoalPage,
} from "@/data/goal-pages";

import { pageShareMeta } from "@/lib/site-url";

export const metadata = {
  title: "Peptide Goals | MyPepFinder",
  description:
    "Browse peptides by research goal, including weight loss, muscle, sleep, hair, skin, cognition, and longevity.",
  ...pageShareMeta("/goals"),
};

const GOAL_TONES = {
  "lose-weight": "orange",
  "improve-focus": "indigo",
  "build-muscle": "teal",
  "better-sleep": "violet",
  "hair-growth": "rose",
  "skin-health": "pink",
  "sexual-health": "rose",
  longevity: "indigo",
};

export default function GoalsHomePage() {
  const goals = GOAL_SIDEBAR.map((g) => {
    const page = getGoalPage(g.slug);
    return {
      slug: g.slug,
      title: page?.title || g.label,
      href: `/goals/${g.slug}`,
      peptides: page?.totalPeptides ?? 0,
      description: page?.description,
      image: GOAL_HERO_IMAGES[g.slug] || page?.heroImage || null,
      tone: GOAL_TONES[g.slug] || "indigo",
    };
  });

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <GoalPageHeader />

      <div className="mx-auto flex w-full max-w-[1400px] flex-1">
        <GoalToolsSidebar />

        <main className="min-w-0 flex-1 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <nav className="text-xs text-slate-400" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link href="/" className="hover:text-indigo-600">
                  Home
                </Link>
              </li>
              <li aria-hidden>›</li>
              <li className="font-medium text-slate-600">Goals</li>
            </ol>
          </nav>

          <header className="mt-4 max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              Browse by Goal
            </p>
            <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              What do you want to improve?
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-slate-500 sm:text-[15px]">
              Open a goal to compare peptides studied in that area, then review
              research profiles and provider notes.
            </p>
          </header>

          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4">
            {goals.map((goal) => (
              <li key={goal.slug} className="min-w-0">
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
                      icon="body"
                      className="mx-3 mt-2.5 h-24 rounded-xl"
                    />
                  )}
                  <div className="flex items-center justify-between gap-1.5 px-3 py-2.5 text-[10px] text-slate-500">
                    <span className="truncate">
                      {goal.peptides} Peptides
                    </span>
                    <span className="truncate text-indigo-600">Explore →</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </main>
      </div>

      <HomeFooter />
    </div>
  );
}
