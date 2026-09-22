"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  getEffectsForGoal,
  getQuizGoal,
  getResearchEffect,
  QUIZ_GOALS,
  recommendPeptides,
} from "@/data/peptide-effects";

const MEDICAL_A =
  "border-sky-200 bg-sky-100 hover:border-sky-300 hover:bg-sky-200/70";
const MEDICAL_B =
  "border-slate-200 bg-white hover:border-sky-200 hover:bg-sky-50";
const MEDICAL_A_SM =
  "sm:border-sky-200 sm:bg-sky-100 sm:hover:border-sky-300 sm:hover:bg-sky-200/70";
const MEDICAL_B_SM =
  "sm:border-slate-200 sm:bg-white sm:hover:border-sky-200 sm:hover:bg-sky-50";

/** Alternate fills: stacked on mobile, checkerboard on the 2-col desktop grid. */
function medicalFill(index) {
  const stacked = index % 2;
  const checker = (Math.floor(index / 2) + (index % 2)) % 2;
  if (stacked === checker) return stacked === 0 ? MEDICAL_A : MEDICAL_B;
  return stacked === 0 ? `${MEDICAL_A} ${MEDICAL_B_SM}` : `${MEDICAL_B} ${MEDICAL_A_SM}`;
}

const CARD =
  "flex h-full min-h-14 w-full flex-col items-start justify-center rounded-2xl border px-4 py-3.5 text-left shadow-sm transition touch-manipulation active:scale-[0.99] sm:min-h-[6.75rem]";

/**
 * Two-step quiz: optimize goal → research-effect refine → peptide match.
 */
export function PeptideEffectsQuiz() {
  const [goalId, setGoalId] = useState(null);
  const [effectId, setEffectId] = useState(null);
  const rootRef = useRef(null);

  const goal = goalId ? getQuizGoal(goalId) : null;
  const effect = effectId ? getResearchEffect(effectId) : null;
  const refinements = goalId ? getEffectsForGoal(goalId) : [];
  const result = useMemo(
    () => (goalId && effectId ? recommendPeptides(goalId, effectId) : null),
    [goalId, effectId]
  );

  const step = !goalId ? 1 : !effectId ? 2 : 3;

  useEffect(() => {
    if (step === 1) return;
    rootRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [step]);

  function reset() {
    setGoalId(null);
    setEffectId(null);
  }

  return (
    <div ref={rootRef} className="mx-auto w-full max-w-3xl scroll-mt-[4.5rem]">
      <div className="sticky top-14 z-10 -mx-4 border-b border-slate-100 bg-white/95 px-4 pb-3 pt-1 backdrop-blur-sm sm:static sm:mx-0 sm:border-0 sm:bg-transparent sm:px-0 sm:pb-0 sm:pt-0 sm:backdrop-blur-none">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400 sm:text-xs">
          Step {step} of 3
        </p>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-indigo-600 transition-all"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>

      {step === 1 ? (
        <section className="mt-5 sm:mt-6">
          <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
            What are you trying to optimize?
          </h2>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-500 sm:mt-2">
            Pick the area that matches your research interest. You will refine
            it on the next step.
          </p>
          <ul className="mt-5 grid grid-cols-1 items-stretch gap-2.5 sm:mt-6 sm:grid-cols-2 sm:gap-3">
            {QUIZ_GOALS.map((item, index) => (
              <li key={item.id} className="h-full">
                <button
                  type="button"
                  onClick={() => {
                    setGoalId(item.id);
                    setEffectId(null);
                  }}
                  className={`${CARD} ${medicalFill(index)}`}
                >
                  <span className="text-[15px] font-bold leading-tight text-slate-900">
                    {item.label}
                  </span>
                  <span className="mt-1 line-clamp-2 min-h-[2.5rem] text-sm leading-snug text-slate-600">
                    {item.prompt}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {step === 2 && goal ? (
        <section className="mt-5 sm:mt-6">
          <button
            type="button"
            onClick={() => setGoalId(null)}
            className="inline-flex min-h-11 items-center rounded-lg px-1 text-sm font-semibold text-indigo-700 touch-manipulation hover:underline"
          >
            ← Change goal
          </button>
          <h2 className="mt-2 text-xl font-bold tracking-tight text-slate-900 sm:mt-3 sm:text-2xl">
            What specifically?
          </h2>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-500 sm:mt-2">
            Refining{" "}
            <span className="font-semibold text-slate-700">{goal.label}</span>.
            These options are research effects tied to individual peptides — not
            proven treatments.
          </p>
          <ul className="mt-5 space-y-2.5 sm:mt-6 sm:space-y-3">
            {refinements.map((item, index) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => setEffectId(item.id)}
                  className={`${CARD} ${index % 2 === 0 ? MEDICAL_A : MEDICAL_B}`}
                >
                  <span className="text-[15px] font-bold text-slate-900">
                    {item.label}
                  </span>
                  <span className="mt-0.5 text-sm leading-snug text-slate-500">
                    {item.detail}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {step === 3 && result?.winner && effect ? (
        <section className="mt-5 sm:mt-6">
          <button
            type="button"
            onClick={() => setEffectId(null)}
            className="inline-flex min-h-11 items-center rounded-lg px-1 text-sm font-semibold text-indigo-700 touch-manipulation hover:underline"
          >
            ← Refine again
          </button>
          <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400 sm:mt-4">
            Closest research match
          </p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {result.winner.name}
          </h2>
          <p className="mt-2 text-sm font-medium leading-snug text-indigo-700">
            Best match for “{effect.label}”
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            {result.winner.lead ||
              result.winner.overview?.overview ||
              effect.detail}
          </p>
          {result.winner.overview?.evidence ? (
            <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-3.5 py-3 sm:px-4">
              <p className="text-[11px] font-bold uppercase tracking-wide text-amber-800">
                What the evidence shows
              </p>
              <p className="mt-1 text-sm leading-relaxed text-slate-700">
                {result.winner.overview.evidence}
              </p>
            </div>
          ) : null}

          <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3">
            <Link
              href={result.winner.href}
              className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-indigo-600 px-5 text-sm font-semibold text-white shadow-sm shadow-indigo-600/25 transition touch-manipulation hover:bg-indigo-700 sm:w-auto"
            >
              Open {result.winner.name} page
            </Link>
            <button
              type="button"
              onClick={reset}
              className="inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 transition touch-manipulation hover:bg-slate-50 sm:w-auto"
            >
              Start over
            </button>
          </div>

          {result.alternatives.length ? (
            <div className="mt-8">
              <h3 className="text-sm font-bold text-slate-900">
                Other peptides with this research interest
              </h3>
              <ul className="mt-3 space-y-2">
                {result.alternatives.map((item) => {
                  const summary =
                    item.lead ||
                    item.overview?.overview?.match(/^.+?[.!?](?:\s|$)/)?.[0]?.trim() ||
                    item.matchedEffect?.detail ||
                    null;
                  return (
                    <li key={item.slug}>
                      <Link
                        href={item.href}
                        className="flex items-start justify-between gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-left shadow-sm transition touch-manipulation hover:border-sky-200 hover:bg-sky-50/40"
                      >
                        <span className="min-w-0">
                          <span className="block text-[15px] font-semibold text-slate-900">
                            {item.name}
                          </span>
                          {summary ? (
                            <span className="mt-1 block text-sm leading-snug text-slate-600">
                              {summary}
                            </span>
                          ) : null}
                        </span>
                        <span className="shrink-0 pt-0.5 text-xs font-semibold text-indigo-600">
                          View →
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : null}

          <p className="mt-8 text-xs leading-relaxed text-slate-500">
            This quiz ranks compounds by published research interests, not by
            proven benefit for you. It is educational and is not medical advice,
            a diagnosis, or a recommendation to buy or use any product.
          </p>
        </section>
      ) : null}

      {step === 3 && !result?.winner ? (
        <section className="mt-5 rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-4 py-8 text-center sm:mt-6 sm:px-5">
          <p className="text-sm text-slate-600">
            No peptide match was found for that combination.
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-4 inline-flex min-h-11 items-center justify-center text-sm font-semibold text-indigo-700 touch-manipulation hover:underline"
          >
            Start over
          </button>
        </section>
      ) : null}
    </div>
  );
}
