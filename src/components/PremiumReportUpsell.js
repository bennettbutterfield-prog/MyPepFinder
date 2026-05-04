"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

/**
 * @param {{ initiallyUnlocked?: boolean }} props
 */
export function PremiumReportUpsell({ initiallyUnlocked = false }) {
  const router = useRouter();
  const [unlocked, setUnlocked] = useState(initiallyUnlocked);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initiallyUnlocked) setUnlocked(true);
  }, [initiallyUnlocked]);

  async function unlock() {
    setLoading(true);
    try {
      const res = await fetch("/api/premium/mock-checkout", { method: "POST" });
      if (res.ok) {
        setUnlocked(true);
        router.refresh();
      }
    } finally {
      setLoading(false);
    }
  }

  if (unlocked) {
    return (
      <section className="rounded-xl border border-emerald-200 dark:border-emerald-900 bg-emerald-50/80 dark:bg-emerald-950/30 p-6">
        <h3 className="text-lg font-semibold text-emerald-900 dark:text-emerald-100">
          Full breakdown (unlocked)
        </h3>
        <p className="text-sm text-emerald-900/90 dark:text-emerald-100/90 mt-2 leading-relaxed">
          Deeper explanations: when comparing providers, look for how batch
          identifiers map to published documents, whether retesting occurs
          after reformulation, and how return or quality inquiries are
          described in plain language. These signals are commonly associated
          with more reproducible research supply workflows—not a guarantee of
          outcomes.
        </p>
        <p className="text-sm text-emerald-900/90 dark:text-emerald-100/90 mt-3 leading-relaxed">
          Expanded comparisons: side-by-side, consider documentation freshness
          (dates on certificates), geographic shipping constraints, and how
          each provider surfaces third-party versus in-house testing. This
          framing stays descriptive so you can continue independent research.
        </p>
      </section>
    );
  }

  return (
    <section className="rounded-xl border border-dashed border-zinc-300 dark:border-zinc-600 p-6 bg-zinc-50 dark:bg-zinc-900/40">
      <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
        Get full breakdown ($9)
      </h3>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">
        Placeholder checkout unlocks deeper explanations and expanded
        comparison notes in this demo. No live payment processor is wired
        yet.
      </p>
      <button
        type="button"
        onClick={unlock}
        disabled={loading}
        className="mt-4 px-5 py-2.5 rounded-lg bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 text-sm font-medium disabled:opacity-50"
      >
        {loading ? "Unlocking…" : "Unlock (demo)"}
      </button>
    </section>
  );
}
