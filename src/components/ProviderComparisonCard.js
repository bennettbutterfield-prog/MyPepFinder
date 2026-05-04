"use client";

import { useCallback } from "react";

/**
 * @param {{
 *   provider: {
 *     id: string;
 *     name: string;
 *     slug: string;
 *     tagline: string | null;
 *     description: string;
 *     websiteUrl: string;
 *     affiliateUrl: string | null;
 *     sponsored: boolean;
 *     transparencyScore: number;
 *     pricingTransparency: string | null;
 *   };
 *   peptideId?: string | null;
 *   rank: number;
 * }} props
 */
export function ProviderComparisonCard({ provider, peptideId, rank }) {
  const href = provider.affiliateUrl || provider.websiteUrl;

  const onViewProvider = useCallback(async () => {
    try {
      await fetch("/api/affiliate-click", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          providerId: provider.id,
          peptideId: peptideId || undefined,
        }),
      });
    } catch {
      /* non-blocking */
    }
    window.open(href, "_blank", "noopener,noreferrer");
  }, [href, provider.id, peptideId]);

  return (
    <article className="rounded-xl border border-zinc-200 dark:border-zinc-700 p-5 bg-white dark:bg-zinc-950 shadow-sm flex flex-col gap-3">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-xs font-medium text-zinc-500 uppercase tracking-wide">
            Match {rank}
          </p>
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            {provider.name}
          </h3>
          {provider.tagline ? (
            <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-1">
              {provider.tagline}
            </p>
          ) : null}
        </div>
        {provider.sponsored ? (
          <span className="shrink-0 text-xs font-medium px-2 py-1 rounded-full bg-amber-100 text-amber-900 dark:bg-amber-900/40 dark:text-amber-100">
            Sponsored
          </span>
        ) : null}
      </div>
      <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
        {provider.description}
      </p>
      <dl className="grid grid-cols-1 gap-2 text-sm">
        <div className="flex justify-between gap-4">
          <dt className="text-zinc-500">Transparency score</dt>
          <dd className="font-medium text-zinc-900 dark:text-zinc-100">
            {provider.transparencyScore}
          </dd>
        </div>
        {provider.pricingTransparency ? (
          <div>
            <dt className="text-zinc-500">Pricing clarity</dt>
            <dd className="text-zinc-800 dark:text-zinc-200 mt-0.5">
              {provider.pricingTransparency}
            </dd>
          </div>
        ) : null}
      </dl>
      <button
        type="button"
        onClick={onViewProvider}
        className="mt-auto inline-flex items-center justify-center rounded-lg bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 px-4 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
      >
        View Provider
      </button>
    </article>
  );
}
