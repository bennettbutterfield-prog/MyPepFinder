"use client";

import { useMemo, useState } from "react";
import {
  ACTIVITY_LEVELS,
  buildIntakeScenarios,
  cmToFeetInches,
  computeMacroTargets,
  computeTdee,
  feetInchesToCm,
  formatWeeksLabel,
  kgToLbs,
  lbsToKg,
  parsePositiveNumber,
  snapToScenarioIntake,
} from "@/lib/calorie-deficit-calc";

const fieldLabel = "mb-1.5 block text-sm font-medium text-slate-700";
const fieldInput =
  "w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20";
const fieldInputCompact =
  "w-20 rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 sm:w-24";

export function CalorieDeficitCalculator() {
  const [sex, setSex] = useState("male");
  const [age, setAge] = useState("");
  const [activityId, setActivityId] = useState("sedentary");
  const [unitSystem, setUnitSystem] = useState("imperial");
  const [heightFt, setHeightFt] = useState("");
  const [heightIn, setHeightIn] = useState("");
  const [heightCm, setHeightCm] = useState("");
  const [currentWeight, setCurrentWeight] = useState("");
  const [goalWeight, setGoalWeight] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [selectedIntake, setSelectedIntake] = useState(null);

  const activity = ACTIVITY_LEVELS.find((a) => a.id === activityId) ?? ACTIVITY_LEVELS[0];

  const parsed = useMemo(() => {
    const ageNum = parsePositiveNumber(age);
    let heightCmVal = null;
    if (unitSystem === "imperial") {
      const ft = parsePositiveNumber(heightFt);
      const inches = parseInches(heightIn);
      if (ft != null && inches != null) {
        heightCmVal = feetInchesToCm(ft, inches);
      }
    } else {
      heightCmVal = parsePositiveNumber(heightCm);
    }

    let startKg = null;
    let goalKg = null;
    const current = parsePositiveNumber(currentWeight);
    const goal = parsePositiveNumber(goalWeight);
    if (current != null) {
      startKg = unitSystem === "imperial" ? lbsToKg(current) : current;
    }
    if (goal != null) {
      goalKg = unitSystem === "imperial" ? lbsToKg(goal) : goal;
    }

    return { ageNum, heightCmVal, startKg, goalKg, current, goal };
  }, [
    age,
    activityId,
    currentWeight,
    goalWeight,
    heightCm,
    heightFt,
    heightIn,
    unitSystem,
  ]);

  const results = useMemo(() => {
    if (!submitted) return null;
    const { ageNum, heightCmVal, startKg, goalKg } = parsed;
    if (ageNum == null || heightCmVal == null || startKg == null || goalKg == null) {
      return { error: "Enter valid age, height, current weight, and goal weight." };
    }
    if (goalKg >= startKg) {
      return { error: "Goal weight must be lower than your current weight." };
    }
    if (ageNum < 15 || ageNum > 100) {
      return { error: "Age must be between 15 and 100." };
    }

    const { start, scenarios, minIntake, maxIntake } = buildIntakeScenarios({
      sex,
      age: ageNum,
      heightCm: heightCmVal,
      startKg,
      goalKg,
      pal: activity.pal,
    });

    const goalMetrics = computeTdee({
      sex,
      age: ageNum,
      heightCm: heightCmVal,
      weightKg: goalKg,
      pal: activity.pal,
    });

    return {
      start,
      goalMetrics,
      scenarios,
      minIntake,
      maxIntake,
      startKg,
      goalKg,
      ageNum,
      heightCmVal,
    };
  }, [activity.pal, parsed, sex, submitted]);

  const activeScenario = useMemo(() => {
    if (!results?.scenarios?.length) return null;
    const intake =
      selectedIntake ??
      results.scenarios[Math.min(3, results.scenarios.length - 1)]?.intakeKcal;
    return (
      results.scenarios.find((s) => s.intakeKcal === intake) ??
      results.scenarios[0]
    );
  }, [results, selectedIntake]);

  function handleIntakeChange(value) {
    if (!results?.scenarios?.length) return;
    setSelectedIntake(snapToScenarioIntake(value, results.scenarios));
  }

  function handleCalculate(e) {
    e.preventDefault();
    setSubmitted(true);
    setSelectedIntake(null);
  }

  function handleUnitToggle(next) {
    if (next === unitSystem) return;
    const { heightCmVal, startKg, goalKg } = parsed;
    if (next === "imperial" && heightCmVal != null) {
      const { feet, inches } = cmToFeetInches(heightCmVal);
      setHeightFt(String(feet));
      setHeightIn(String(inches));
      setHeightCm("");
    } else if (next === "metric" && heightCmVal != null) {
      setHeightCm(String(Math.round(heightCmVal)));
      setHeightFt("");
      setHeightIn("");
    }
    if (startKg != null) {
      setCurrentWeight(
        next === "imperial"
          ? String(Math.round(kgToLbs(startKg)))
          : String(Math.round(startKg * 10) / 10)
      );
    }
    if (goalKg != null) {
      setGoalWeight(
        next === "imperial"
          ? String(Math.round(kgToLbs(goalKg)))
          : String(Math.round(goalKg * 10) / 10)
      );
    }
    setUnitSystem(next);
  }

  const weightUnit = unitSystem === "imperial" ? "lb" : "kg";
  const heightUnit = unitSystem === "imperial" ? "ft / in" : "cm";

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.06)] lg:grid lg:grid-cols-2">
      <section className="border-b border-slate-200 p-4 sm:p-6 lg:border-b-0 lg:border-r lg:p-8">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">
            1
          </span>
          <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
            Enter Your Information
          </h2>
        </div>

        <form onSubmit={handleCalculate} className="mt-5 space-y-5 sm:mt-6">
          <div className="flex gap-2">
            {["male", "female"].map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setSex(value)}
                className={`flex min-h-[44px] flex-1 rounded-lg border px-3 py-2.5 text-sm font-semibold capitalize transition ${
                  sex === value
                    ? "border-indigo-600 bg-indigo-600 text-white"
                    : "border-slate-200 bg-white text-slate-700 hover:border-indigo-200"
                }`}
              >
                {value}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="age" className={fieldLabel}>
                Age
              </label>
              <div className="flex gap-2">
                <input
                  id="age"
                  type="text"
                  inputMode="numeric"
                  autoComplete="off"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className={fieldInput}
                />
                <span className="flex w-12 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-xs text-slate-500">
                  yrs
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="activity" className={fieldLabel}>
                Physical Activity
              </label>
              <select
                id="activity"
                value={activityId}
                onChange={(e) => setActivityId(e.target.value)}
                className={fieldInput}
              >
                {ACTIVITY_LEVELS.map((level) => (
                  <option key={level.id} value={level.id}>
                    {level.label} (PAL {level.pal})
                  </option>
                ))}
              </select>
              <p className="mt-1 text-[11px] text-slate-500">{activity.detail}</p>
            </div>
          </div>

          <div className="flex gap-2">
            {[
              { id: "imperial", label: "Imperial" },
              { id: "metric", label: "Metric" },
            ].map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => handleUnitToggle(opt.id)}
                className={`rounded-lg border px-3 py-1.5 text-xs font-semibold transition ${
                  unitSystem === opt.id
                    ? "border-indigo-600 bg-indigo-50 text-indigo-700"
                    : "border-slate-200 text-slate-600 hover:border-indigo-200"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {unitSystem === "imperial" ? (
              <div className="sm:col-span-2">
                <label htmlFor="height-ft" className={fieldLabel}>
                  Height
                </label>
                <div className="flex flex-wrap items-center gap-2">
                  <input
                    id="height-ft"
                    type="text"
                    inputMode="numeric"
                    autoComplete="off"
                    value={heightFt}
                    onChange={(e) => setHeightFt(e.target.value)}
                    className={fieldInputCompact}
                    aria-label="Height feet"
                  />
                  <span className="text-xs text-slate-500">ft</span>
                  <input
                    id="height-in"
                    type="text"
                    inputMode="numeric"
                    autoComplete="off"
                    value={heightIn}
                    onChange={(e) => setHeightIn(e.target.value)}
                    className={fieldInputCompact}
                    aria-label="Height inches"
                  />
                  <span className="text-xs text-slate-500">in</span>
                </div>
              </div>
            ) : (
              <div>
                <label htmlFor="height-cm" className={fieldLabel}>
                  Height ({heightUnit})
                </label>
                <div className="flex gap-2">
                  <input
                    id="height-cm"
                    type="text"
                    inputMode="decimal"
                    autoComplete="off"
                    value={heightCm}
                    onChange={(e) => setHeightCm(e.target.value)}
                    className={fieldInput}
                  />
                  <span className="flex w-12 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-xs text-slate-500">
                    cm
                  </span>
                </div>
              </div>
            )}

            <div>
              <label htmlFor="current-weight" className={fieldLabel}>
                Current Weight ({weightUnit})
              </label>
              <input
                id="current-weight"
                type="text"
                inputMode="decimal"
                autoComplete="off"
                value={currentWeight}
                onChange={(e) => setCurrentWeight(e.target.value)}
                className={fieldInput}
              />
            </div>

            <div className={unitSystem === "metric" ? "sm:col-span-2" : ""}>
              <label htmlFor="goal-weight" className={fieldLabel}>
                Goal Weight ({weightUnit})
              </label>
              <input
                id="goal-weight"
                type="text"
                inputMode="decimal"
                autoComplete="off"
                value={goalWeight}
                onChange={(e) => setGoalWeight(e.target.value)}
                className={fieldInput}
              />
            </div>
          </div>

          <p className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-2 text-xs leading-relaxed text-slate-600">
            Estimates use the Mifflin-St Jeor equation and a dynamic weight-loss
            model that accounts for metabolic adaptation as you lose weight.
          </p>

          <button
            type="submit"
            className="flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 text-base font-semibold text-white shadow-lg shadow-indigo-600/25 transition hover:bg-indigo-700"
          >
            Calculate Deficit
          </button>
        </form>
      </section>

      <section className="bg-white p-4 sm:p-6 lg:p-8">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">
            2
          </span>
          <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
            Your Weight-Loss Plan
          </h2>
        </div>

        {results?.error ? (
          <p className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {results.error}
          </p>
        ) : results && activeScenario ? (
          <CalorieDeficitResults
            results={results}
            activeScenario={activeScenario}
            selectedIntake={activeScenario.intakeKcal}
            onIntakeChange={handleIntakeChange}
            unitSystem={unitSystem}
            sex={sex}
          />
        ) : (
          <p className="mt-6 text-sm text-slate-500">
            Fill in your body details and goal weight, then press Calculate
            Deficit to see your timeline and calorie options.
          </p>
        )}
      </section>
    </div>
  );
}

function CalorieDeficitResults({
  results,
  activeScenario,
  selectedIntake,
  onIntakeChange,
  unitSystem,
  sex,
}) {
  const { start, goalMetrics, scenarios, startKg, goalKg } = results;
  const macros = computeMacroTargets(activeScenario.intakeKcal);
  const startDisplay =
    unitSystem === "imperial"
      ? Math.round(kgToLbs(startKg))
      : Math.round(startKg * 10) / 10;
  const goalDisplay =
    unitSystem === "imperial"
      ? Math.round(kgToLbs(goalKg))
      : Math.round(goalKg * 10) / 10;
  const weightUnit = unitSystem === "imperial" ? "lbs" : "kg";

  const trajectory = activeScenario.trajectory;
  const maxWeek = trajectory[trajectory.length - 1]?.week || 1;

  const w = 520;
  const h = 220;
  const pad = { t: 16, r: 72, b: 34, l: 48 };
  const innerW = w - pad.l - pad.r;
  const innerH = h - pad.t - pad.b;
  const minY = goalKg - (startKg - goalKg) * 0.05;
  const maxY = startKg + (startKg - goalKg) * 0.05;

  function x(week) {
    return pad.l + (week / Math.max(maxWeek, 1)) * innerW;
  }
  function y(weight) {
    return pad.t + ((maxY - weight) / (maxY - minY)) * innerH;
  }

  const pathD = trajectory
    .map((p, i) => `${i === 0 ? "M" : "L"} ${x(p.week).toFixed(1)} ${y(p.weightKg).toFixed(1)}`)
    .join(" ");

  const yTicks = [
    startKg,
    startKg - (startKg - goalKg) * 0.5,
    goalKg,
  ].map((kg) => ({
    kg,
    label:
      unitSystem === "imperial"
        ? Math.round(kgToLbs(kg))
        : Math.round(kg * 10) / 10,
  }));

  const xTicks = [0, Math.round(maxWeek / 2), maxWeek].filter(
    (v, i, arr) => arr.indexOf(v) === i
  );

  const lossTotal =
    unitSystem === "imperial"
      ? Math.round(kgToLbs(startKg - goalKg))
      : Math.round((startKg - goalKg) * 10) / 10;

  return (
    <div className="mt-6 space-y-5">
      <div className="grid gap-3 sm:grid-cols-2">
        <MetricCard label="Maintenance (TDEE)" value={`${start.tdee} kcal`} sub="At current weight" />
        <MetricCard label="Resting Metabolic Rate" value={`${start.rmr} kcal`} sub="At current weight" />
        <MetricCard label="Goal TDEE" value={`${goalMetrics.tdee} kcal`} sub="At goal weight" />
        <MetricCard label="Goal RMR" value={`${goalMetrics.rmr} kcal`} sub="At goal weight" />
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 px-4 py-3 sm:px-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <label
              htmlFor="calorie-intake-slider"
              className="text-xs font-semibold text-slate-600"
            >
              Daily Calorie Intake
            </label>
            <span className="text-sm font-semibold tabular-nums text-slate-900">
              {selectedIntake} kcal
            </span>
          </div>
          <input
            id="calorie-intake-slider"
            type="range"
            min={results.minIntake}
            max={results.maxIntake}
            step={100}
            value={selectedIntake}
            onChange={(e) => onIntakeChange(Number(e.target.value))}
            onInput={(e) => onIntakeChange(Number(e.target.value))}
            className="mt-2 w-full accent-violet-600"
            aria-valuemin={results.minIntake}
            aria-valuemax={results.maxIntake}
            aria-valuenow={selectedIntake}
            aria-valuetext={`${selectedIntake} calories per day`}
          />
          <div className="mt-1 flex justify-between text-[10px] tabular-nums text-slate-400">
            <span>{results.minIntake} kcal</span>
            <span>{results.maxIntake} kcal (maintenance)</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-[minmax(0,1fr)_200px]">
          <div className="min-w-0 px-3 py-3 sm:px-4 sm:py-4">
            <svg
              viewBox={`0 0 ${w} ${h}`}
              className="h-auto w-full"
              role="img"
              aria-label="Projected weight loss trajectory"
            >
              {yTicks.map((tick) => (
                <g key={tick.kg}>
                  <line
                    x1={pad.l}
                    y1={y(tick.kg)}
                    x2={w - pad.r}
                    y2={y(tick.kg)}
                    stroke="#e2e8f0"
                    strokeWidth="1"
                  />
                  <text
                    x={pad.l - 8}
                    y={y(tick.kg)}
                    textAnchor="end"
                    dominantBaseline="middle"
                    fontSize="10"
                    className="fill-slate-400"
                  >
                    {tick.label}
                  </text>
                </g>
              ))}
              {xTicks.map((week) => (
                <g key={week}>
                  <line
                    x1={x(week)}
                    y1={pad.t}
                    x2={x(week)}
                    y2={h - pad.b}
                    stroke="#e2e8f0"
                    strokeWidth="1"
                  />
                  <text
                    x={x(week)}
                    y={h - 10}
                    textAnchor="middle"
                    fontSize="10"
                    className="fill-slate-400"
                  >
                    {week}w
                  </text>
                </g>
              ))}
              <path
                d={pathD}
                fill="none"
                stroke="#7c3aed"
                strokeWidth="2.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx={x(0)} cy={y(startKg)} r="3.5" fill="#7c3aed" />
              <circle
                cx={x(maxWeek)}
                cy={y(trajectory[trajectory.length - 1].weightKg)}
                r="4.5"
                fill="#7c3aed"
              />
              <text
                x={x(maxWeek) + 8}
                y={y(trajectory[trajectory.length - 1].weightKg) + 4}
                textAnchor="start"
                fontSize="11"
                fontWeight="700"
                fill="#7c3aed"
              >
                {goalDisplay} {weightUnit}
              </text>
            </svg>
          </div>

          <div className="flex h-full flex-col justify-center border-t border-slate-100 bg-violet-50 px-4 py-4 text-left lg:border-l lg:border-t-0">
            <p className="text-xs font-semibold uppercase tracking-wide text-violet-600">
              At {selectedIntake} kcal/day
            </p>
            <p className="mt-1 text-xl font-bold tabular-nums text-violet-900 sm:text-2xl">
              {formatWeeksLabel(activeScenario.weeks)}
            </p>
            <p className="mt-1 text-sm text-violet-800">
              to reach {goalDisplay} {weightUnit}
            </p>
            <p className="mt-2 text-xs text-violet-700">
              {activeScenario.dailyDeficit} kcal/day deficit · lose ~{lossTotal}{" "}
              {weightUnit} total
            </p>
            {!activeScenario.reachedGoal ? (
              <p className="mt-2 text-[11px] text-amber-700">
                Intake may be too high to reach goal at this activity level.
              </p>
            ) : null}
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <h3 className="text-sm font-semibold text-slate-900">
          Suggested Macros at {selectedIntake} kcal
        </h3>
        <div className="mt-3 grid grid-cols-3 gap-3">
          <MacroPill label="Protein" grams={macros.proteinG} pct={macros.proteinPct} />
          <MacroPill label="Carbs" grams={macros.carbsG} pct={macros.carbsPct} />
          <MacroPill label="Fat" grams={macros.fatG} pct={macros.fatPct} />
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 bg-slate-50 px-4 py-3">
          <h3 className="text-sm font-semibold text-slate-900">
            Calorie Intake Options
          </h3>
          <p className="mt-0.5 text-xs text-slate-500">
            Lower intake reaches goal sooner. Minimum:{" "}
            {sex === "male" ? "1,500" : "1,200"} kcal/day.
          </p>
        </div>
        <div className="max-h-56 overflow-x-auto overflow-y-auto">
          <table className="w-full min-w-[18rem] border-collapse text-left text-xs sm:text-sm">
            <thead className="sticky top-0 bg-white">
              <tr>
                <th className="border-b border-slate-100 px-4 py-2.5 font-semibold text-slate-600">
                  Daily intake
                </th>
                <th className="border-b border-slate-100 px-4 py-2.5 font-semibold text-slate-600">
                  Deficit
                </th>
                <th className="border-b border-slate-100 px-4 py-2.5 font-semibold text-slate-600">
                  Time to goal
                </th>
              </tr>
            </thead>
            <tbody>
              {scenarios.map((row) => {
                const active = row.intakeKcal === selectedIntake;
                return (
                  <tr
                    key={row.intakeKcal}
                    className={`cursor-pointer transition hover:bg-indigo-50/50 ${
                      active ? "bg-indigo-50" : ""
                    }`}
                    onClick={() => onIntakeChange(row.intakeKcal)}
                  >
                    <td className="border-b border-slate-50 px-4 py-2.5 font-semibold text-slate-900">
                      {row.intakeKcal.toLocaleString()} kcal
                    </td>
                    <td className="border-b border-slate-50 px-4 py-2.5 text-slate-600">
                      −{row.dailyDeficit} kcal
                    </td>
                    <td className="border-b border-slate-50 px-4 py-2.5 text-slate-700">
                      {row.reachedGoal
                        ? formatWeeksLabel(row.weeks)
                        : "Won't reach goal"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <p className="flex gap-2.5 rounded-xl border border-sky-100 bg-sky-50 px-4 py-3 text-xs leading-relaxed text-sky-950">
        <span
          className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-200 text-[11px] font-bold text-sky-800"
          aria-hidden
        >
          i
        </span>
        For educational purposes only. Consult a healthcare provider before
        starting any weight-loss plan. Minimum intake guidelines:{" "}
        {sex === "male" ? "1,500" : "1,200"} kcal/day.
      </p>
    </div>
  );
}

function MetricCard({ label, value, sub }) {
  return (
    <div className="rounded-xl border border-slate-100 bg-slate-50 px-3.5 py-3">
      <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </p>
      <p className="mt-1 text-lg font-bold tabular-nums text-slate-900">{value}</p>
      <p className="mt-0.5 text-[11px] text-slate-500">{sub}</p>
    </div>
  );
}

function MacroPill({ label, grams, pct }) {
  return (
    <div className="rounded-lg bg-violet-50 px-3 py-2.5 text-center">
      <p className="text-[10px] font-semibold uppercase tracking-wide text-violet-600">
        {label}
      </p>
      <p className="mt-1 text-lg font-bold tabular-nums text-violet-900">{grams}g</p>
      <p className="text-[10px] text-violet-700">{pct}%</p>
    </div>
  );
}

function parseInches(value) {
  if (value === "" || value == null) return 0;
  const n = Number(String(value).trim());
  if (!Number.isFinite(n) || n < 0 || n >= 12) return null;
  return n;
}
