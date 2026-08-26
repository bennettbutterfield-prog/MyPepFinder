import Link from "next/link";
import { GOAL_SIDEBAR, GOAL_TOOLS } from "@/data/goal-pages";

/**
 * Shared Goals + Tools left sidebar used on goal, peptide, and library pages.
 * @param {{ activeGoalSlug?: string; activeToolHref?: string }} [props]
 */
export function GoalToolsSidebar({ activeGoalSlug, activeToolHref }) {
  return (
    <aside className="hidden w-56 shrink-0 border-r border-slate-200 bg-slate-50/80 lg:block xl:w-60">
      <div className="sticky top-14 max-h-[calc(100vh-3.5rem)] overflow-y-auto px-3 py-5">
        <p className="px-2 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
          Goals
        </p>
        <ul className="mt-2 space-y-0.5">
          {GOAL_SIDEBAR.map((g) => {
            const active = g.slug === activeGoalSlug;
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
                  <SidebarDot active={active} />
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
          {GOAL_TOOLS.map((t) => {
            const active = t.href === activeToolHref;
            return (
              <li key={t.label}>
                <Link
                  href={t.href}
                  className={`flex items-center gap-2 rounded-lg px-2.5 py-2 text-[13px] font-medium transition ${
                    active
                      ? "bg-blue-50 text-blue-700"
                      : "text-slate-600 hover:bg-white hover:text-slate-900"
                  }`}
                >
                  <SidebarDot active={active} />
                  {t.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}

function SidebarDot({ active }) {
  return (
    <span
      className={`inline-flex h-4 w-4 items-center justify-center ${
        active ? "text-blue-600" : "text-slate-400"
      }`}
      aria-hidden
    >
      •
    </span>
  );
}
