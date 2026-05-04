"use client";

import { useState } from "react";
import { RESEARCH_GOALS } from "@/data/goals";

/**
 * @param {{
 *   open: boolean;
 *   onClose: () => void;
 *   defaultGoal?: string;
 *   sourcePeptideId?: string | null;
 *   sourcePage?: string;
 * }} props
 */
export function TalkToSpecialistModal({
  open,
  onClose,
  defaultGoal = RESEARCH_GOALS[0].id,
  sourcePeptideId = null,
  sourcePage = "/results",
}) {
  const [email, setEmail] = useState("");
  const [selectedGoal, setSelectedGoal] = useState(defaultGoal);
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  if (!open) return null;

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    setStatus("loading");
    const goalLabel =
      RESEARCH_GOALS.find((g) => g.id === selectedGoal)?.label ?? selectedGoal;
    const res = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        selectedGoal: goalLabel,
        notes: notes || null,
        sourcePage,
        sourcePeptideId,
        kind: "specialist",
      }),
    });
    if (!res.ok) {
      setError("Something went wrong. Please try again.");
      setStatus("idle");
      return;
    }
    setStatus("done");
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div
        className="absolute inset-0"
        aria-hidden
        onClick={() => (status === "loading" ? null : onClose())}
      />
      <div className="relative z-10 w-full max-w-md rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-xl p-6">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          Talk to a Specialist
        </h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
          Share your research focus so a provider can follow up with
          additional comparison materials.
        </p>
        {status === "done" ? (
          <p className="mt-6 text-sm text-zinc-700 dark:text-zinc-300">
            A provider may reach out with more information.
          </p>
        ) : (
          <form onSubmit={onSubmit} className="mt-6 space-y-4">
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
            <div>
              <label className="block text-xs font-medium text-zinc-500 mb-1">
                Selected goal
              </label>
              <select
                value={selectedGoal}
                onChange={(e) => setSelectedGoal(e.target.value)}
                className="w-full rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 px-3 py-2 text-sm"
              >
                {RESEARCH_GOALS.map((g) => (
                  <option key={g.id} value={g.id}>
                    {g.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-zinc-500 mb-1">
                Notes (optional)
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
                className="w-full rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 px-3 py-2 text-sm"
                placeholder="Questions about documentation, shipping regions, or comparison criteria…"
              />
            </div>
            {error ? (
              <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
            ) : null}
            <div className="flex gap-2 justify-end pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm rounded-lg border border-zinc-300 dark:border-zinc-600"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={status === "loading"}
                className="px-4 py-2 text-sm rounded-lg bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 disabled:opacity-50"
              >
                {status === "loading" ? "Sending…" : "Submit"}
              </button>
            </div>
          </form>
        )}
        {status === "done" ? (
          <button
            type="button"
            onClick={onClose}
            className="mt-6 w-full py-2 rounded-lg bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 text-sm"
          >
            Close
          </button>
        ) : null}
      </div>
    </div>
  );
}
