"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { RESEARCH_GOALS } from "@/data/goals";

export default function QuizPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [goalId, setGoalId] = useState(RESEARCH_GOALS[0].id);
  const [selectedPeptideIds, setSelectedPeptideIds] = useState([]);
  const [peptides, setPeptides] = useState([]);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/peptides")
      .then((r) => r.json())
      .then((d) => {
        if (!cancelled) setPeptides(d.peptides ?? []);
      })
      .catch(() => {
        if (!cancelled) setPeptides([]);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  function togglePeptide(id) {
    setSelectedPeptideIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  }

  async function finish() {
    await fetch("/api/analytics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event: "quiz_completed",
        payload: { goalId, peptideCount: selectedPeptideIds.length },
      }),
    });
    const qs = new URLSearchParams();
    qs.set("goal", goalId);
    if (selectedPeptideIds.length > 0) {
      qs.set("peptides", selectedPeptideIds.join(","));
    }
    router.push(`/results?${qs.toString()}`);
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-12">
      <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-400">
        Guided comparison
      </p>
      <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-2">
        Research focus quiz
      </h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">
        This flow helps frame exploration and comparison—not treatment
        decisions.
      </p>

      {step === 0 ? (
        <div className="mt-8 space-y-4">
          <h2 className="font-semibold text-zinc-900 dark:text-zinc-100">
            What are you mainly exploring?
          </h2>
          <div className="space-y-2">
            {RESEARCH_GOALS.map((g) => (
              <label
                key={g.id}
                className="flex gap-3 items-start p-3 rounded-lg border border-zinc-200 dark:border-zinc-700 cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-900/40"
              >
                <input
                  type="radio"
                  name="goal"
                  checked={goalId === g.id}
                  onChange={() => setGoalId(g.id)}
                  className="mt-1"
                />
                <span className="text-sm text-zinc-800 dark:text-zinc-200">
                  {g.label}
                </span>
              </label>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setStep(1)}
            className="mt-4 w-full py-3 rounded-lg bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 text-sm font-medium"
          >
            Continue
          </button>
        </div>
      ) : (
        <div className="mt-8 space-y-4">
          <h2 className="font-semibold text-zinc-900 dark:text-zinc-100">
            Which compounds are commonly associated with your comparison
            research?
          </h2>
          <p className="text-xs text-zinc-500">
            Select any that apply; you can adjust later on the results page
            context.
          </p>
          <div className="space-y-2">
            {peptides.map((p) => (
              <label
                key={p.id}
                className="flex gap-3 items-start p-3 rounded-lg border border-zinc-200 dark:border-zinc-700 cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-900/40"
              >
                <input
                  type="checkbox"
                  checked={selectedPeptideIds.includes(p.id)}
                  onChange={() => togglePeptide(p.id)}
                  className="mt-1"
                />
                <span>
                  <span className="block text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    {p.name}
                  </span>
                  <span className="block text-xs text-zinc-600 dark:text-zinc-400 mt-1">
                    {p.researchSummary}
                  </span>
                </span>
              </label>
            ))}
          </div>
          <div className="flex gap-2 pt-2">
            <button
              type="button"
              onClick={() => setStep(0)}
              className="flex-1 py-3 rounded-lg border border-zinc-300 dark:border-zinc-600 text-sm"
            >
              Back
            </button>
            <button
              type="button"
              onClick={finish}
              className="flex-1 py-3 rounded-lg bg-emerald-700 text-white text-sm font-medium"
            >
              See comparisons
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
