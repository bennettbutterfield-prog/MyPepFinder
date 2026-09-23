"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  explainResults,
  getEligibleQuestions,
  getNextQuestion,
  getQuestionForContext,
  normalizeAnswers,
  pruneAnswers,
  RESULT_STATES,
} from "@/lib/quiz/engine";
import { PeptideResultsChart } from "@/components/PeptideResultsChart";
import { QUESTION_SEQUENCE } from "@/data/quiz/questions";
import { getPublishedWeightLossChart } from "@/lib/quiz/weight-chart";

const CARD =
  "flex w-full flex-col items-start rounded-2xl border px-4 py-3.5 text-left shadow-sm transition touch-manipulation focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900";
const UNSELECTED =
  "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50";
const SELECTED =
  "border-slate-900 bg-white ring-2 ring-slate-900/20";

const STAGES = {
  goal: "Your goal",
  details: "The details",
  preferences: "Research preferences",
  results: "Your matches",
};

const STATE_COPY = {
  [RESULT_STATES.CLOSEST]: "Closest research match",
  [RESULT_STATES.COMPARE]: "Compare these research options",
  [RESULT_STATES.EARLY]: "Early research related to your goal",
  [RESULT_STATES.GAP]: "We don’t have a well-supported match for these criteria",
};

function fillClass(selected) {
  return `${CARD} ${selected ? SELECTED : UNSELECTED}`;
}

function progressPercent(answers, showResults) {
  if (showResults) return 100;
  const completed = Object.keys(answers).length;
  const remaining = getEligibleQuestions(answers).length;
  const total = completed + remaining;
  if (!total) return 0;
  return Math.min(96, Math.round((completed / total) * 100));
}

function ResultCard({ card }) {
  const [open, setOpen] = useState(false);
  const weightChart = getPublishedWeightLossChart(card.pageSlug);
  return (
    <article className="rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm sm:px-5">
      <h3 className="text-lg font-bold text-slate-900">{card.name}</h3>
      <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
        {card.kind === "blend" ? "Blend" : card.kind === "research-compound" ? "Research compound" : "Library entry"}
      </p>
      <div className="mt-3">
        <p className="text-[11px] font-bold uppercase tracking-wide text-slate-500">
          Why it appeared
        </p>
        <ul className="mt-1 list-disc space-y-1 pl-5 text-sm leading-snug text-slate-600">
          {card.why.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>
      <div className="mt-3">
        <p className="text-[11px] font-bold uppercase tracking-wide text-slate-500">
          What researchers studied
        </p>
        <p className="mt-1 text-sm leading-relaxed text-slate-600">{card.studied}</p>
      </div>
      <div className="mt-3">
        <p className="text-[11px] font-bold uppercase tracking-wide text-slate-500">
          What the evidence shows
        </p>
        <p className="mt-1 text-sm leading-relaxed text-slate-600">{card.evidence}</p>
      </div>
      <div className="mt-3 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2.5">
        <p className="text-[11px] font-bold uppercase tracking-wide text-amber-800">
          Main limitation
        </p>
        <p className="mt-1 text-sm leading-relaxed text-slate-700">{card.limitation}</p>
      </div>
      {card.regulatory ? (
        <p className="mt-3 text-xs leading-relaxed text-slate-500">
          Regulatory scope ({card.regulatory.date}): {card.regulatory.text}{" "}
          {card.regulatory.source ? (
            <a
              href={card.regulatory.source}
              className="font-semibold text-sky-700 underline-offset-2 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Source
            </a>
          ) : null}
        </p>
      ) : null}
      {card.sources?.[0] ? (
        <p className="mt-2 text-xs text-slate-500">
          <a
            href={card.sources[0].href}
            className="font-semibold text-sky-700 underline-offset-2 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            {card.sources[0].label}
          </a>
          {card.sources[0].claim ? ` — ${card.sources[0].claim}` : ""}
        </p>
      ) : null}
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="mt-3 text-sm font-semibold text-sky-800 hover:underline"
      >
        {open ? "Hide study summary" : "Show study summary"}
      </button>
      {open ? (
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          {card.studied} {card.limitation}
        </p>
      ) : null}
      {weightChart ? (
        <div className="mt-4">
          <p className="text-[11px] font-bold uppercase tracking-wide text-slate-500">
            Published weight change over time
          </p>
          <div className="mt-2">
            <PeptideResultsChart
              name={card.name}
              lossPct={weightChart.lossPct}
              weeks={weightChart.weeks}
              sourceLabel={weightChart.sourceLabel}
              researchCopy
              inputId={`quiz-start-weight-${card.id}`}
            />
          </div>
        </div>
      ) : null}
      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <Link
          href={card.href}
          className="inline-flex min-h-11 items-center justify-center rounded-xl bg-slate-900 px-4 text-sm font-semibold text-white hover:bg-slate-800"
        >
          Read the research
        </Link>
        <Link
          href="/recommendations"
          className="inline-flex min-h-11 items-center justify-center rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 hover:border-slate-300"
        >
          Explore top providers
        </Link>
      </div>
    </article>
  );
}

export function AdaptivePeptideQuiz() {
  const [answers, setAnswers] = useState({});
  const [history, setHistory] = useState([]);
  const [currentId, setCurrentId] = useState("goal");
  const [picked, setPicked] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [excludedOpen, setExcludedOpen] = useState(false);
  const headingRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const ctx = useMemo(() => {
    const next = normalizeAnswers(answers);
    next.answers = answers;
    return next;
  }, [answers]);

  const question = showResults ? null : getQuestionForContext(currentId, ctx);
  const stage = showResults ? "results" : question?.stage || "goal";
  const results = showResults ? explainResults(answers) : null;
  const liveChips = useMemo(
    () => (answers.goal ? explainResults(answers).chips : []),
    [answers]
  );

  useEffect(() => {
    setProgress(progressPercent(answers, showResults));
  }, [answers, showResults]);

  useEffect(() => {
    headingRef.current?.scrollIntoView({ block: "start", behavior: "smooth" });
    headingRef.current?.focus({ preventScroll: true });
  }, [currentId, showResults]);

  function applyAnswer(questionId, optionId) {
    const merged = pruneAnswers({ ...answers, [questionId]: optionId });
    setAnswers(merged);
    return merged;
  }

  function continueForward() {
    if (!question || !picked) return;
    const nextAnswers = applyAnswer(question.id, picked);
    setHistory((prev) => (prev.includes(question.id) ? prev : [...prev, question.id]));
    const nextQuestion = getNextQuestion(nextAnswers);
    if (nextQuestion) {
      setCurrentId(nextQuestion.id);
      setPicked(nextAnswers[nextQuestion.id] || null);
      setShowResults(false);
      return;
    }
    setShowResults(true);
  }

  function goBack() {
    if (showResults) {
      const last = history[history.length - 1] || "goal";
      setShowResults(false);
      setCurrentId(last);
      setPicked(answers[last] || null);
      return;
    }
    if (!history.length) return;
    const prevId = history[history.length - 1];
    const nextHistory = history.slice(0, -1);
    const nextAnswers = { ...answers };
    delete nextAnswers[currentId];
    const pruned = pruneAnswers(nextAnswers);
    setAnswers(pruned);
    setHistory(nextHistory);
    setCurrentId(prevId);
    setPicked(pruned[prevId] || null);
    setShowResults(false);
  }

  function restart() {
    setAnswers({});
    setHistory([]);
    setCurrentId("goal");
    setPicked(null);
    setShowResults(false);
    setExcludedOpen(false);
    setProgress(0);
  }

  function editChip(questionId) {
    const index = QUESTION_SEQUENCE.indexOf(questionId);
    const next = { ...answers };
    for (const id of QUESTION_SEQUENCE) {
      if (QUESTION_SEQUENCE.indexOf(id) >= index) delete next[id];
    }
    const cleaned = pruneAnswers(next);
    setAnswers(cleaned);
    setHistory((prev) => prev.filter((id) => cleaned[id]));
    setCurrentId(questionId);
    setPicked(null);
    setShowResults(false);
  }

  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="sticky top-14 z-30 -mx-4 -mt-4 mb-5 border-b border-slate-100 bg-white/95 px-4 pb-3 pt-3 backdrop-blur-md sm:-mx-8 sm:-mt-8 sm:px-8 sm:pt-5">
        <div className="flex items-center justify-between gap-3">
          <p
            ref={headingRef}
            tabIndex={-1}
            className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400 outline-none"
          >
            {STAGES[stage]}
          </p>
          <p className="text-[11px] font-semibold tabular-nums text-slate-400">
            {showResults ? "Complete" : `${progress}%`}
          </p>
        </div>
        <div
          className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100"
          role="progressbar"
          aria-label="Quiz progress"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progress}
        >
          <div
            className="h-full rounded-full bg-slate-900 transition-[width] duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      <p className="mt-2 text-xs leading-relaxed text-slate-500">
        Matches research to your interests. It does not diagnose conditions or
        tell you what to take.
      </p>

      {question ? (
        <section className="mt-5">
          <fieldset>
            <legend className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
              {question.text}
            </legend>
            {question.helper ? (
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {question.helper}
              </p>
            ) : null}
            {liveChips.length ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {liveChips.map((chip) => (
                  <button
                    key={chip.id}
                    type="button"
                    onClick={() => editChip(chip.questionId)}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:border-sky-300"
                  >
                    {chip.label} ✎
                  </button>
                ))}
              </div>
            ) : null}
            <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">
              {question.options.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setPicked(option.id)}
                  aria-pressed={picked === option.id}
                  className={`${fillClass(picked === option.id)} min-h-14 sm:min-h-[5.5rem]`}
                >
                  <span className="text-[15px] font-bold leading-tight text-slate-900">
                    {option.label}
                  </span>
                  {option.detail ? (
                    <span className="mt-1 text-sm leading-snug text-slate-600">
                      {option.detail}
                    </span>
                  ) : null}
                </button>
              ))}
            </div>
          </fieldset>

          <div className="mt-6 flex flex-col-reverse gap-2.5 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={goBack}
              disabled={!history.length}
              className="inline-flex min-h-11 items-center justify-center rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Back
            </button>
            <button
              type="button"
              onClick={continueForward}
              disabled={!picked}
              className="inline-flex min-h-11 items-center justify-center rounded-xl bg-slate-900 px-5 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40"
            >
              Continue
            </button>
            <button
              type="button"
              onClick={restart}
              className="sm:ml-auto text-sm font-semibold text-slate-500 hover:text-slate-800"
            >
              Restart
            </button>
          </div>
        </section>
      ) : null}

      {results ? (
        <section className="mt-5">
          <button
            type="button"
            onClick={goBack}
            className="text-sm font-semibold text-sky-800 hover:underline"
          >
            ← Refine answers
          </button>
          <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
            {STATE_COPY[results.state]}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {results.summary}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {results.chips.map((chip) => (
              <button
                key={chip.id}
                type="button"
                onClick={() => editChip(chip.questionId)}
                className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:border-sky-300"
              >
                {chip.label} ✎
              </button>
            ))}
          </div>
          {results.careMessage ? (
            <p className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-relaxed text-slate-700">
              {results.careMessage}
            </p>
          ) : null}
          {results.plateauNote ? (
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {results.plateauNote}
            </p>
          ) : null}

          <div className="mt-5 space-y-3">
            {results.cards.map((card) => (
              <ResultCard key={card.id} card={card} />
            ))}
          </div>

          {results.state === RESULT_STATES.GAP && !results.cards.length ? (
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              No library entry meets these filters without stretching the
              evidence. You can loosen the evidence preference or read the
              related work below.
            </p>
          ) : null}

          {results.relatedReading.length ? (
            <div className="mt-8">
              <h3 className="text-sm font-bold text-slate-900">Related reading</h3>
              <p className="mt-1 text-sm text-slate-500">
                These topics are nearby research, not a match for your filters.
              </p>
              <ul className="mt-3 space-y-2">
                {results.relatedReading.map((card) => (
                  <li key={card.id}>
                    <Link
                      href={card.href}
                      className="block rounded-xl border border-slate-200 bg-white px-4 py-3 hover:border-sky-200"
                    >
                      <span className="font-semibold text-slate-900">{card.name}</span>
                      <span className="mt-1 block text-sm text-slate-600">
                        {card.limitation}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {results.excluded.length ? (
            <div className="mt-8">
              <button
                type="button"
                onClick={() => setExcludedOpen((value) => !value)}
                className="text-sm font-bold text-slate-900 hover:underline"
              >
                {excludedOpen ? "Hide" : "Why other options didn’t make this list"}
              </button>
              {excludedOpen ? (
                <ul className="mt-3 space-y-2">
                  {results.excluded.slice(0, 3).map((item) => (
                    <li
                      key={item.id}
                      className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600"
                    >
                      <span className="font-semibold text-slate-800">{item.name}.</span>{" "}
                      {item.reason}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ) : null}

          <p className="mt-8 text-xs leading-relaxed text-slate-500">
            Personal treatment decisions require a qualified clinician. This
            quiz ranks research relevance, not safety, suitability, or expected
            response.
          </p>
          <div className="mt-5">
            <button
              type="button"
              onClick={restart}
              className="inline-flex min-h-11 items-center justify-center rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 hover:border-slate-300"
            >
              Start over
            </button>
          </div>
        </section>
      ) : null}
    </div>
  );
}
