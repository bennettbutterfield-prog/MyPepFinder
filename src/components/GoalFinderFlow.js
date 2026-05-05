"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { OPTIMIZATION_GOALS } from "@/data/optimization-goals";

const FEET_CHOICES = [3, 4, 5, 6, 7, 8];
const INCH_CHOICES = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const selectClass =
  "rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm font-medium text-slate-900 outline-none focus:border-amber-400";

const GOAL_ICON_BY_ID = {
  "injury-recovery": "/goal-icons/injury-recovery.png",
  dermal: "/goal-icons/dermal.png",
  metabolic: "/goal-icons/metabolic.png",
  secretagogue: "/goal-icons/secretagogue.png",
  cellular: "/goal-icons/cellular.png",
  neuro: "/goal-icons/neuro.png",
  circadian: "/goal-icons/circadian.png",
};

/**
 * @param {{ variant?: "embedded" | "page" }} props
 * embedded: card on home (light). page: standalone /find layout.
 */
export function GoalFinderFlow({ variant = "page" }) {
  const router = useRouter();
  const embedded = variant === "embedded";
  const [step, setStep] = useState(0);
  const [goalId, setGoalId] = useState(OPTIMIZATION_GOALS[0].id);
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [unit, setUnit] = useState("lbs");
  const [heightFeet, setHeightFeet] = useState("");
  const [heightInches, setHeightInches] = useState("");
  const [gender, setGender] = useState("unspecified");

  function submitProfile(e) {
    e.preventDefault();
    const params = new URLSearchParams();
    params.set("goal", goalId);
    if (age.trim()) params.set("age", age.trim());
    if (weight.trim()) params.set("weight", weight.trim());
    params.set("unit", unit);
    if (heightFeet !== "" && heightInches !== "") {
      params.set("heightFt", heightFeet);
      params.set("heightIn", heightInches);
    }
    params.set("gender", gender);
    router.push(`/recommendations?${params.toString()}`);
  }

  const outerMax =
    step === 0
      ? "w-full max-w-5xl mx-auto"
      : embedded
        ? "w-full max-w-xl mx-auto"
        : "mx-auto w-full max-w-xl";

  return (
    <div className={outerMax}>
      <div className="rounded-3xl border border-slate-200/80 bg-white p-6 text-slate-900 shadow-xl shadow-slate-200/50 sm:p-10">
        {step === 0 ? (
          <>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-600">
              Step 1 of 2
            </p>
            <div
              className="mt-3"
              role="progressbar"
              aria-valuenow={50}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Progress: step 1 of 2"
            >
              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
                <div className="h-full w-1/2 rounded-full bg-amber-500 transition-[width] duration-300 ease-out" />
              </div>
            </div>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              What are you trying to optimise?
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Choose the research lane that best matches what you are reading
              about.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3">
              {OPTIMIZATION_GOALS.map((g) => {
                const active = goalId === g.id;
                return (
                  <button
                    key={g.id}
                    type="button"
                    onClick={() => setGoalId(g.id)}
                    className={`flex flex-col overflow-hidden rounded-2xl border bg-white text-left shadow-sm transition hover:shadow-md ${
                      active
                        ? "border-amber-400 ring-2 ring-amber-400/35"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <div className="flex h-36 items-center justify-center border-b border-slate-100 bg-slate-50/90">
                      <Image
                        src={GOAL_ICON_BY_ID[g.id] ?? "/goal-icons/metabolic.png"}
                        alt={`${g.label} icon`}
                        width={96}
                        height={96}
                        className="h-24 w-24 object-contain"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-4">
                      <span className="text-base font-semibold text-slate-900">
                        {g.label}
                      </span>
                      <span className="mt-2 text-xs leading-relaxed text-slate-600">
                        {g.description}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="mt-6 flex w-full min-h-[52px] items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white transition hover:bg-slate-800 sm:mt-8"
            >
              Continue
            </button>
          </>
        ) : (
          <form onSubmit={submitProfile}>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-600">
              Step 2 of 2
            </p>
            <div
              className="mt-3"
              role="progressbar"
              aria-valuenow={100}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Progress: step 2 of 2"
            >
              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
                <div className="h-full w-full rounded-full bg-amber-500 transition-[width] duration-300 ease-out" />
              </div>
            </div>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              A few details for context
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Optional numbers help us mirror how studies stratify cohorts.
              They do not change medical facts—only the narrative notes on your
              results page.
            </p>

            <div className="mt-6 space-y-5 sm:mt-8">
              <div>
                <label className="block text-xs font-medium uppercase tracking-wide text-slate-500">
                  Age
                </label>
                <input
                  type="number"
                  min={18}
                  max={120}
                  inputMode="numeric"
                  placeholder="e.g. 34"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-400/20"
                />
              </div>
              <div>
                <label className="block text-xs font-medium uppercase tracking-wide text-slate-500">
                  Body weight
                </label>
                <div className="mt-1.5 flex gap-3">
                  <input
                    type="number"
                    min={1}
                    step="0.1"
                    inputMode="decimal"
                    placeholder={unit === "lbs" ? "185" : "84"}
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-400/20"
                  />
                  <select
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                    className={selectClass}
                  >
                    <option value="lbs">lb</option>
                    <option value="kg">kg</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium uppercase tracking-wide text-slate-500">
                  Height (optional)
                </label>
                <div className="mt-1.5 flex flex-wrap items-end gap-3">
                  <div className="min-w-[7rem] flex-1">
                    <span className="mb-1 block text-[10px] font-medium uppercase tracking-wide text-slate-400">
                      Feet
                    </span>
                    <select
                      value={heightFeet}
                      onChange={(e) => setHeightFeet(e.target.value)}
                      className={`${selectClass} w-full`}
                    >
                      <option value="">—</option>
                      {FEET_CHOICES.map((ft) => (
                        <option key={ft} value={String(ft)}>
                          {ft} ft
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="min-w-[7rem] flex-1">
                    <span className="mb-1 block text-[10px] font-medium uppercase tracking-wide text-slate-400">
                      Inches
                    </span>
                    <select
                      value={heightInches}
                      onChange={(e) => setHeightInches(e.target.value)}
                      className={`${selectClass} w-full`}
                    >
                      <option value="">—</option>
                      {INCH_CHOICES.map((inch) => (
                        <option key={inch} value={String(inch)}>
                          {inch} in
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <p className="mt-1 text-xs text-slate-500">
                  Leave both as — if you prefer not to share height.
                </p>
              </div>
              <div>
                <label className="block text-xs font-medium uppercase tracking-wide text-slate-500">
                  Gender
                </label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className={`${selectClass} mt-1.5 w-full`}
                >
                  <option value="unspecified">Prefer not to say</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="nonbinary">Non-binary</option>
                </select>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row-reverse">
              <button
                type="submit"
                className="flex min-h-[52px] flex-1 items-center justify-center rounded-full bg-amber-400 text-sm font-semibold text-slate-950 shadow-md shadow-amber-400/25 transition hover:bg-amber-300"
              >
                See peptide suggestions
              </button>
              <button
                type="button"
                onClick={() => setStep(0)}
                className="flex min-h-[52px] flex-1 items-center justify-center rounded-full border border-slate-200 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Back
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
