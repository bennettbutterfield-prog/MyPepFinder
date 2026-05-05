"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { OPTIMIZATION_GOALS } from "@/data/optimization-goals";
import { CALCULATOR_TIME_FRAMES } from "@/data/calculator-context";

function parsePositive(raw) {
  const n = Number.parseFloat(String(raw).replace(",", "."));
  if (!Number.isFinite(n) || n <= 0) return null;
  return n;
}

const selectClass =
  "mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-400/20";

const inputClass =
  "mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-400/20";

const MODES = [
  { id: "reconstitution", label: "Reconstitution" },
  { id: "dosage", label: "Dosage by outcome" },
];

export default function CalculatorPage() {
  const [mode, setMode] = useState("reconstitution");

  const [outcomeGoalId, setOutcomeGoalId] = useState(OPTIMIZATION_GOALS[0].id);
  const [timeFrameId, setTimeFrameId] = useState(CALCULATOR_TIME_FRAMES[0].id);
  const [doseMcg, setDoseMcg] = useState("250");
  const [dosesPerWeek, setDosesPerWeek] = useState("7");

  const [vialMg, setVialMg] = useState("5");
  const [diluentMl, setDiluentMl] = useState("2");
  const [targetMcg, setTargetMcg] = useState("250");

  const selectedGoal = useMemo(
    () =>
      OPTIMIZATION_GOALS.find((g) => g.id === outcomeGoalId) ??
      OPTIMIZATION_GOALS[0],
    [outcomeGoalId],
  );
  const selectedTimeFrame = useMemo(
    () =>
      CALCULATOR_TIME_FRAMES.find((t) => t.id === timeFrameId) ??
      CALCULATOR_TIME_FRAMES[0],
    [timeFrameId],
  );

  const reconstitutionResult = useMemo(() => {
    const mg = parsePositive(vialMg);
    const ml = parsePositive(diluentMl);
    const mcg = parsePositive(targetMcg);
    if (mg == null || ml == null) return null;
    const mgPerMl = mg / ml;
    const mcgPerMl = mgPerMl * 1000;
    let mlPerDose = null;
    if (mcg != null && mcgPerMl > 0) {
      mlPerDose = mcg / mcgPerMl;
    }
    return { mgPerMl, mcgPerMl, mlPerDose, mcg };
  }, [vialMg, diluentMl, targetMcg]);

  const dosageAggregate = useMemo(() => {
    const mcg = parsePositive(doseMcg);
    const n = Number.parseFloat(String(dosesPerWeek).replace(",", "."));
    if (!Number.isFinite(n) || n <= 0 || mcg == null) return null;
    const weeklyTotalMcg = mcg * n;
    const dailyAvgMcg = weeklyTotalMcg / 7;
    return {
      mcgPerAdministration: mcg,
      dosesPerWeek: n,
      weeklyTotalMcg,
      dailyAvgMcg,
    };
  }, [doseMcg, dosesPerWeek]);

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <SiteHeader variant="light" />

      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-10 sm:px-6 sm:py-14">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-600">
          Laboratory reference
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
          Peptide calculators
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          Two separate tools: convert vial preparation into draw volume, or tally
          totals from amounts you already have in your notes—always arithmetic
          only, not instructions on what to use.
        </p>

        <div
          className="mt-8 flex justify-center"
          role="tablist"
          aria-label="Calculator type"
        >
          <div className="inline-flex max-w-full rounded-full border border-slate-200 bg-slate-100/90 p-1 shadow-inner">
            {MODES.map((m) => {
              const active = mode === m.id;
              return (
                <button
                  key={m.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setMode(m.id)}
                  className={`min-h-[44px] shrink-0 rounded-full px-4 text-sm font-semibold transition sm:px-6 ${
                    active
                      ? "bg-white text-slate-900 shadow-sm ring-1 ring-slate-200/80"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {m.label}
                </button>
              );
            })}
          </div>
        </div>

        {mode === "reconstitution" ? (
          <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-lg font-semibold text-slate-900">
              Reconstitution calculator
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              From lyophilised mass and diluent volume, compute concentration and
              the syringe volume that corresponds to a target microgram amount.
            </p>

            <div className="mt-6 space-y-5">
              <div>
                <label className="block text-xs font-medium uppercase tracking-wide text-slate-500">
                  Peptide in vial (mg)
                </label>
                <input
                  type="text"
                  inputMode="decimal"
                  value={vialMg}
                  onChange={(e) => setVialMg(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-xs font-medium uppercase tracking-wide text-slate-500">
                  Diluent added (mL)
                </label>
                <input
                  type="text"
                  inputMode="decimal"
                  value={diluentMl}
                  onChange={(e) => setDiluentMl(e.target.value)}
                  className={inputClass}
                />
                <p className="mt-1 text-xs text-slate-500">
                  Total sterile water or BAC volume used after reconstitution.
                </p>
              </div>
              <div>
                <label className="block text-xs font-medium uppercase tracking-wide text-slate-500">
                  Target amount per draw (mcg)
                </label>
                <input
                  type="text"
                  inputMode="decimal"
                  value={targetMcg}
                  onChange={(e) => setTargetMcg(e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-slate-100 bg-slate-50/80 p-5">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Results
              </h3>
              {reconstitutionResult ? (
                <dl className="mt-3 space-y-3 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-slate-600">Concentration</dt>
                    <dd className="text-right font-medium text-slate-900">
                      {reconstitutionResult.mgPerMl.toFixed(4)} mg/mL
                      <span className="block text-xs font-normal text-slate-500">
                        ({reconstitutionResult.mcgPerMl.toFixed(2)} mcg/mL)
                      </span>
                    </dd>
                  </div>
                  {reconstitutionResult.mlPerDose != null &&
                  reconstitutionResult.mcg != null ? (
                    <div className="flex justify-between gap-4 border-t border-slate-200 pt-3">
                      <dt className="text-slate-600">Volume for target</dt>
                      <dd className="text-right font-semibold text-amber-700">
                        {reconstitutionResult.mlPerDose.toFixed(4)} mL
                        <span className="block text-xs font-normal text-slate-500">
                          for {reconstitutionResult.mcg} mcg
                        </span>
                      </dd>
                    </div>
                  ) : null}
                </dl>
              ) : (
                <p className="mt-3 text-sm text-slate-500">
                  Enter positive numbers for vial mass and diluent volume to see
                  concentration.
                </p>
              )}
            </div>
          </div>
        ) : (
          <>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="text-sm font-semibold text-slate-900">
                  Desired outcome
                </h2>
                <p className="mt-1 text-xs leading-relaxed text-slate-500">
                  Labels your totals against the research lane you are tracking.
                </p>
                <div className="mt-5 flex flex-1 flex-col">
                  <label
                    htmlFor="calc-outcome"
                    className="block text-xs font-medium uppercase tracking-wide text-slate-500"
                  >
                    Research lane
                  </label>
                  <select
                    id="calc-outcome"
                    value={outcomeGoalId}
                    onChange={(e) => setOutcomeGoalId(e.target.value)}
                    className={selectClass}
                  >
                    {OPTIMIZATION_GOALS.map((g) => (
                      <option key={g.id} value={g.id}>
                        {g.label} — {g.shortLabel}
                      </option>
                    ))}
                  </select>
                  <p className="mt-1.5 flex-1 text-xs leading-relaxed text-slate-500">
                    {selectedGoal.description}
                  </p>
                </div>
              </div>

              <div className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="text-sm font-semibold text-slate-900">
                  Time frame
                </h2>
                <p className="mt-1 text-xs leading-relaxed text-slate-500">
                  Documentation horizon—not a dosing calendar.
                </p>
                <div className="mt-5 flex flex-1 flex-col">
                  <label
                    htmlFor="calc-timeframe"
                    className="block text-xs font-medium uppercase tracking-wide text-slate-500"
                  >
                    Review horizon
                  </label>
                  <select
                    id="calc-timeframe"
                    value={timeFrameId}
                    onChange={(e) => setTimeFrameId(e.target.value)}
                    className={selectClass}
                  >
                    {CALCULATOR_TIME_FRAMES.map((t) => (
                      <option key={t.id} value={t.id}>
                        {t.label}
                      </option>
                    ))}
                  </select>
                  <p className="mt-1.5 flex-1 text-xs leading-relaxed text-slate-500">
                    {selectedTimeFrame.note}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-lg font-semibold text-slate-900">
                Dosage calculator
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Enter micrograms per administration and how often that appears in
                <em> your protocol notes</em>, weeks included. Outcome and window
                tag the summary only—they do not change the arithmetic.
              </p>

              <div className="mt-6 space-y-5">
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wide text-slate-500">
                    Amount per administration (mcg)
                  </label>
                  <input
                    type="text"
                    inputMode="decimal"
                    value={doseMcg}
                    onChange={(e) => setDoseMcg(e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wide text-slate-500">
                    Administrations per week
                  </label>
                  <input
                    type="text"
                    inputMode="decimal"
                    value={dosesPerWeek}
                    onChange={(e) => setDosesPerWeek(e.target.value)}
                    className={inputClass}
                  />
                  <p className="mt-1 text-xs text-slate-500">
                    Use decimals if your notes use alternating-day or partial-week
                    schedules (e.g. 3.5).
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-slate-100 bg-slate-50/80 p-5">
                <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Results
                </h3>
                <div className="mt-3 rounded-xl border border-slate-200/80 bg-white/70 px-3 py-3 text-xs text-slate-600">
                  <p className="font-medium text-slate-800">Planning context</p>
                  <p className="mt-1">
                    <span className="text-slate-500">Outcome:</span>{" "}
                    {selectedGoal.label}
                    <span className="text-slate-400"> · </span>
                    <span className="text-slate-500">Window:</span>{" "}
                    {selectedTimeFrame.label}
                  </p>
                </div>
                {dosageAggregate ? (
                  <dl className="mt-4 space-y-3 text-sm">
                    <div className="flex justify-between gap-4">
                      <dt className="text-slate-600">Weekly total</dt>
                      <dd className="text-right font-semibold text-slate-900">
                        {dosageAggregate.weeklyTotalMcg.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })}{" "}
                        mcg
                      </dd>
                    </div>
                    <div className="flex justify-between gap-4 border-t border-slate-200 pt-3">
                      <dt className="text-slate-600">Daily average</dt>
                      <dd className="text-right font-medium text-amber-700">
                        {dosageAggregate.dailyAvgMcg.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })}{" "}
                        mcg / day
                      </dd>
                    </div>
                    <div className="border-t border-slate-200 pt-3 text-xs text-slate-500">
                      Based on {dosageAggregate.mcgPerAdministration} mcg ×{" "}
                      {dosageAggregate.dosesPerWeek} administrations per week.
                    </div>
                  </dl>
                ) : (
                  <p className="mt-3 text-sm text-slate-500">
                    Enter positive numbers for amount per administration and
                    administrations per week.
                  </p>
                )}
              </div>
            </div>
          </>
        )}

        <div className="mt-8 rounded-2xl border border-amber-200/80 bg-amber-50/90 p-5 text-xs leading-relaxed text-amber-950">
          <p className="font-semibold text-amber-900">Important</p>
          <p className="mt-2">
            For laboratory and educational use only. Not medical advice. Do not
            rely on these tools for human or animal dosing decisions. Verify units,
            vial contents, and institutional protocols independently.
          </p>
        </div>

        <p className="mt-8 text-center text-sm text-slate-600">
          <Link
            href="/#peptide-finder"
            className="font-medium text-amber-700 hover:text-amber-800"
          >
            ← Back to peptide finder
          </Link>
        </p>
      </main>

      <SiteFooter />
    </div>
  );
}
