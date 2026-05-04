"use client";

import { useState } from "react";
import { EmailCaptureDisclaimer } from "@/components/EducationalDisclaimer";

/**
 * @param {{
 *   goalId: string;
 *   peptideIds: string[];
 *   sourcePage: string;
 *   onUnlocked: () => void;
 * }} props
 */
export function EmailReportGate({
  goalId,
  peptideIds,
  sourcePage,
  onUnlocked,
}) {
  const [email, setEmail] = useState("");
  const [wantsUpdates, setWantsUpdates] = useState(false);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    setStatus("loading");
    const res = await fetch("/api/email-report", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        goalId,
        peptideIds,
        wantsUpdates,
        sourcePage,
      }),
    });
    if (!res.ok) {
      setError("Could not send the report. Try again shortly.");
      setStatus("idle");
      return;
    }
    setStatus("done");
    onUnlocked();
  }

  return (
    <div className="rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900/50 p-6 md:p-8">
      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
        Unlock Your Full Research Report
      </h2>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 max-w-xl">
        We will email a comparison-oriented summary: your selected goal,
        peptides commonly associated with that line of research, and top
        providers ranked by stated transparency criteria.
      </p>
      <form onSubmit={onSubmit} className="mt-6 space-y-4 max-w-md">
        <div>
          <label className="block text-xs font-medium text-zinc-500 mb-1">
            Email
          </label>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 px-3 py-2 text-sm"
          />
        </div>
        <label className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
          <input
            type="checkbox"
            checked={wantsUpdates}
            onChange={(e) => setWantsUpdates(e.target.checked)}
            className="mt-1"
          />
          <span>
            Send updates if new providers or pricing changes appear in our
            comparison dataset.
          </span>
        </label>
        {error ? (
          <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
        ) : null}
        <button
          type="submit"
          disabled={status === "loading" || status === "done"}
          className="w-full md:w-auto px-6 py-3 rounded-lg bg-emerald-700 text-white text-sm font-medium hover:bg-emerald-800 disabled:opacity-50"
        >
          {status === "loading"
            ? "Sending…"
            : status === "done"
              ? "Report sent"
              : "Send My Report"}
        </button>
        <EmailCaptureDisclaimer />
      </form>
    </div>
  );
}
