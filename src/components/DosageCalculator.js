"use client";

import { useMemo, useState } from "react";
import {
  computeReconstitution,
  formatDoseMassLines,
  formatGrams,
  formatMg,
  formatMgPerMl,
  massToMg,
  mgToMassUnit,
  parsePositiveNumber,
} from "@/lib/peptide-reconstitution-calc";

const PEPTIDES = [
  "Retatrutide",
  "GLP-1 Semaglutide",
  "Tirzepatide",
  "BPC-157",
  "TB-500",
  "CJC-1295",
  "Ipamorelin",
  "GHK-Cu",
  "NAD+",
  "Custom / not listed",
];

const FREQUENCIES = [
  { id: "weekly", label: "Once Weekly", perWeek: 1 },
  { id: "twice-weekly", label: "Twice Weekly", perWeek: 2 },
  { id: "eod", label: "Every Other Day", perWeek: 3.5 },
  { id: "daily", label: "Once Daily", perWeek: 7 },
];

const fieldLabel =
  "mb-1.5 block text-sm font-medium text-slate-700";
const fieldInput =
  "w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20";

/**
 * Mockup-faithful dosage calculator (two cards: inputs + results).
 */
export function DosageCalculator() {
  const [peptide, setPeptide] = useState("Retatrutide");
  const [vialAmount, setVialAmount] = useState("");
  const [vialUnit, setVialUnit] = useState("mg");
  const [waterMl, setWaterMl] = useState("");
  const [doseMg, setDoseMg] = useState("");
  const [frequencyId, setFrequencyId] = useState("weekly");
  const [units, setUnits] = useState("mg / mL");
  const [submitted, setSubmitted] = useState(false);

  function handleVialUnitChange(nextUnit) {
    const mg = massToMg(vialAmount, vialUnit);
    if (mg != null) {
      setVialAmount(mgToMassUnit(mg, nextUnit));
    }
    setVialUnit(nextUnit);
  }

  const computed = useMemo(() => {
    const dose = parsePositiveNumber(doseMg);
    const vial = massToMg(vialAmount, vialUnit);
    const water = parsePositiveNumber(waterMl);
    if (dose == null || vial == null || water == null) {
      return { error: "Enter valid positive numbers for amount, water, and dose." };
    }
    if (dose > vial) {
      return { error: "Desired dose cannot exceed peptide amount in the vial." };
    }
    const result = computeReconstitution({
      doseMg: dose,
      vialMg: vial,
      waterMl: water,
    });
    const freq = FREQUENCIES.find((f) => f.id === frequencyId) ?? FREQUENCIES[0];
    const weeks = result.dosesInVial / freq.perWeek;
    const days = weeks * 7;
    return { result, weeks, days, freq };
  }, [doseMg, vialAmount, vialUnit, waterMl, frequencyId]);

  function handleCalculate(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  const result = submitted ? computed.result : null;
  const error = submitted ? computed.error : null;
  const doseLines = result
    ? formatDoseMassLines(result.doseMg, result.vialMg)
    : null;

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.06)] lg:grid lg:grid-cols-2">
      {/* Card 1 — inputs */}
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
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="peptide" className={fieldLabel}>
                Peptide
              </label>
              <select
                id="peptide"
                value={peptide}
                onChange={(e) => setPeptide(e.target.value)}
                className={fieldInput}
              >
                {PEPTIDES.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="vial" className={fieldLabel}>
                Peptide Amount
              </label>
              <div className="flex gap-2">
                <input
                  id="vial"
                  type="text"
                  inputMode="decimal"
                  value={vialAmount}
                  onChange={(e) => setVialAmount(e.target.value)}
                  className={fieldInput}
                />
                <select
                  aria-label="Peptide amount unit"
                  value={vialUnit}
                  onChange={(e) => handleVialUnitChange(e.target.value)}
                  className="w-[4.75rem] shrink-0 rounded-lg border border-slate-200 bg-slate-50 px-2 text-sm text-slate-700"
                >
                  <option value="mg">mg</option>
                  <option value="g">g</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="water" className={fieldLabel}>
                Bacteriostatic Water
              </label>
              <div className="flex gap-2">
                <input
                  id="water"
                  type="text"
                  inputMode="decimal"
                  value={waterMl}
                  onChange={(e) => setWaterMl(e.target.value)}
                  className={fieldInput}
                />
                <select
                  aria-label="Water unit"
                  className="w-[4.5rem] shrink-0 rounded-lg border border-slate-200 bg-slate-50 px-2 text-sm text-slate-700"
                  defaultValue="mL"
                >
                  <option value="mL">mL</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="dose" className={fieldLabel}>
                Desired Dose
              </label>
              <div className="flex gap-2">
                <input
                  id="dose"
                  type="text"
                  inputMode="decimal"
                  value={doseMg}
                  onChange={(e) => setDoseMg(e.target.value)}
                  className={fieldInput}
                />
                <select
                  aria-label="Dose unit"
                  className="w-[4.5rem] shrink-0 rounded-lg border border-slate-200 bg-slate-50 px-2 text-sm text-slate-700"
                  defaultValue="mg"
                >
                  <option value="mg">mg</option>
                  <option value="mcg">mcg</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="frequency" className={fieldLabel}>
                Frequency
              </label>
              <select
                id="frequency"
                value={frequencyId}
                onChange={(e) => setFrequencyId(e.target.value)}
                className={fieldInput}
              >
                {FREQUENCIES.map((f) => (
                  <option key={f.id} value={f.id}>
                    {f.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="units" className={fieldLabel}>
                Units
              </label>
              <select
                id="units"
                value={units}
                onChange={(e) => setUnits(e.target.value)}
                className={fieldInput}
              >
                <option value="mg / mL">mg / mL</option>
                <option value="mcg / mL">mcg / mL</option>
              </select>
            </div>
          </div>

          <p className="rounded-lg border border-slate-100 bg-white px-3 py-2 text-xs leading-relaxed text-slate-600">
            Insulin syringe scale assumes <strong>100 units = 1 mL</strong>.
            Concentration display follows the Units selection above.
          </p>

          <button
            type="submit"
            className="flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 text-base font-semibold text-white shadow-lg shadow-indigo-600/25 transition hover:bg-indigo-700"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              <rect x="4" y="3" width="16" height="18" rx="2" />
              <path d="M8 7h8M8 11h8M8 15h5" />
            </svg>
            Calculate Dosage
          </button>

          <p className="flex items-center justify-center gap-1.5 text-center text-xs text-slate-500">
            <svg
              className="h-3.5 w-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              <rect x="5" y="11" width="14" height="10" rx="2" />
              <path d="M8 11V8a4 4 0 0 1 8 0v3" />
            </svg>
            Your calculations are private and not saved on our servers.
          </p>
        </form>
      </section>

      {/* Card 2 — results */}
      <section className="bg-white p-4 sm:p-6 lg:p-8">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">
            2
          </span>
          <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
            Your Dosage Calculation
          </h2>
        </div>

        {error ? (
          <p className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </p>
        ) : result ? (
          <>
            <div className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-4 sm:px-5">
              <p className="text-sm font-medium text-emerald-800">
                Your Peptide Concentration
              </p>
              <p className="mt-1 text-xl font-bold tracking-tight text-emerald-700 sm:text-2xl lg:text-3xl">
                {units === "mcg / mL"
                  ? `${(result.concentrationMgPerMl * 1000).toFixed(0)} mcg / mL`
                  : formatMgPerMl(result.concentrationMgPerMl).replace(
                      "mg/mL",
                      "mg / mL"
                    )}
              </p>
              <p className="mt-1 text-xs text-emerald-700/80">
                Total: {formatMg(result.vialMg).replace(" ", "")} (
                {formatGrams(result.vialG)}) in {result.waterMl}mL
                {peptide !== "Custom / not listed" ? ` · ${peptide}` : ""}
              </p>
            </div>

            <ul className="mt-5 divide-y divide-slate-100">
              <ResultRow
                icon="syringe"
                title="Dose Amount"
                subtitle="Peptide mass per injection — mg, mcg, grams, and fraction of 1 g"
                value={doseLines?.primary ?? formatMg(result.doseMg)}
                secondary={doseLines?.secondary}
              />
              <ResultRow
                icon="drop"
                title="Injection Volume"
                subtitle="The amount to inject"
                value={`${result.mlPerDose.toFixed(2)} mL`}
                secondary={`${Math.round(result.insulinUnits)} units`}
              />
              <ResultRow
                icon="vial"
                title="Doses per Vial"
                subtitle="How many doses in your vial"
                value={`${result.dosesInVial} doses`}
              />
              <ResultRow
                icon="calendar"
                title="Vial Duration"
                subtitle="How long your vial will last"
                value={
                  computed.weeks >= 1
                    ? `${computed.weeks % 1 === 0 ? computed.weeks : computed.weeks.toFixed(1)} weeks`
                    : `${Math.round(computed.days)} days`
                }
                secondary={
                  computed.weeks >= 1
                    ? `${Math.round(computed.days)} days`
                    : undefined
                }
              />
            </ul>

            <p className="mt-6 flex gap-2.5 rounded-xl border border-sky-100 bg-sky-50 px-4 py-3 text-xs leading-relaxed text-sky-950 sm:text-sm">
              <span
                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-200 text-[11px] font-bold text-sky-800"
                aria-hidden
              >
                i
              </span>
              Always follow your healthcare provider&apos;s protocol. This
              calculator is for research purposes only.
            </p>
          </>
        ) : (
          <p className="mt-6 text-sm text-slate-500">
            Fill in your information and press Calculate Dosage.
          </p>
        )}
      </section>
    </div>
  );
}

function ResultRow({ icon, title, subtitle, value, secondary }) {
  return (
    <li className="flex flex-col gap-2 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-start sm:gap-3">
      <div className="flex min-w-0 flex-1 items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
          <RowIcon name={icon} />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-slate-900">{title}</p>
          <p className="text-xs text-slate-500">{subtitle}</p>
          {secondary ? (
            <p className="mt-1.5 text-xs leading-relaxed text-slate-600 sm:hidden">
              {secondary}
            </p>
          ) : null}
        </div>
      </div>
      <div className="pl-[3.25rem] text-left sm:pl-0 sm:text-right">
        <p className="text-lg font-bold text-indigo-600 sm:text-xl">{value}</p>
        {secondary ? (
          <p className="mt-1 hidden max-w-[15rem] text-xs leading-relaxed text-slate-600 sm:ml-auto sm:block">
            {secondary}
          </p>
        ) : null}
      </div>
    </li>
  );
}

function RowIcon({ name }) {
  const c = {
    className: "h-5 w-5",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };
  if (name === "drop") {
    return (
      <svg {...c}>
        <path d="M12 3s6 7 6 11a6 6 0 1 1-12 0c0-4 6-11 6-11Z" />
      </svg>
    );
  }
  if (name === "vial") {
    return (
      <svg {...c}>
        <path d="M9 3h6v4l3 12a2 2 0 0 1-2 3H8a2 2 0 0 1-2-3l3-12V3Z" />
      </svg>
    );
  }
  if (name === "calendar") {
    return (
      <svg {...c}>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M3 10h18M8 3v4M16 3v4" />
      </svg>
    );
  }
  return (
    <svg {...c}>
      <path d="M9 3h6M10 3v3l-6 6 4 4 6-6V9" />
      <path d="m7 17 2 2" />
    </svg>
  );
}
