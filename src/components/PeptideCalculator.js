"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { SyringeMeter } from "@/components/SyringeMeter";
import {
  DOSE_PRESETS_MG,
  STRENGTH_PRESETS_MG,
  WATER_PRESETS_ML,
} from "@/data/peptide-calculator-presets";
import {
  computeReconstitution,
  formatDoseMassLines,
  formatGrams,
  formatMg,
  formatMgPerMl,
  formatUnits,
  parsePositiveNumber,
} from "@/lib/peptide-reconstitution-calc";

function formatPresetLabel(value, unit) {
  const n = Number(value);
  if (unit === "mL") {
    return Number.isInteger(n) ? `${n.toFixed(1)}mL` : `${n}mL`;
  }
  return Number.isInteger(n) ? `${n}mg` : `${n}mg`;
}

function PresetSection({
  title,
  presets,
  unit,
  value,
  onSelect,
  customValue,
  onCustomChange,
  customPlaceholder,
  id,
}) {
  return (
    <section className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5 lg:p-6">
      <h2 className="text-center text-sm font-semibold leading-snug text-teal-700 sm:text-base lg:text-lg">
        {title}
      </h2>
      <div className="mt-3 grid w-full grid-cols-2 gap-2 sm:mt-4 sm:gap-2.5">
        {presets.map((preset) => {
          const active = value === preset && !customValue;
          return (
            <button
              key={preset}
              type="button"
              onClick={() => {
                onCustomChange("");
                onSelect(preset);
              }}
              className={`flex min-h-[44px] w-full items-center justify-center rounded-xl border px-2 text-xs font-semibold transition sm:min-h-[48px] sm:text-sm lg:min-h-[52px] lg:text-base ${
                active
                  ? "border-teal-600 bg-teal-600 text-white shadow-sm"
                  : "border-slate-200 bg-slate-50 text-slate-800 hover:border-teal-300 hover:bg-teal-50"
              }`}
            >
              {formatPresetLabel(preset, unit)}
            </button>
          );
        })}
      </div>
      <input
        id={id}
        type="text"
        inputMode="decimal"
        value={customValue}
        onChange={(e) => onCustomChange(e.target.value)}
        placeholder={customPlaceholder}
        className="mt-3 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/25 sm:mt-4"
      />
    </section>
  );
}

/** Compact calculator for the home page embed. */
export function PeptideCalculator() {
  const [doseMg, setDoseMg] = useState(0.5);
  const [vialMg, setVialMg] = useState(5);
  const [waterMl, setWaterMl] = useState(2);
  const [customDose, setCustomDose] = useState("");
  const [customStrength, setCustomStrength] = useState("");
  const [customWater, setCustomWater] = useState("");

  const resolved = useMemo(() => {
    const dose = parsePositiveNumber(customDose) ?? doseMg;
    const strength = parsePositiveNumber(customStrength) ?? vialMg;
    const water = parsePositiveNumber(customWater) ?? waterMl;
    if (dose == null || strength == null || water == null) return null;
    if (dose > strength) return { error: "Dose cannot exceed vial strength." };
    return {
      result: computeReconstitution({
        doseMg: dose,
        vialMg: strength,
        waterMl: water,
      }),
    };
  }, [customDose, customStrength, customWater, doseMg, vialMg, waterMl]);

  const result = resolved?.result ?? null;
  const error = resolved?.error ?? null;
  const doseLines = result
    ? formatDoseMassLines(result.doseMg, result.vialMg)
    : null;

  return (
    <>
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-teal-600">
        Laboratory reference
      </p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
        Peptide reconstitution calculator
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">
        Easily calculate draw volume by selecting your dose, vial strength, and
        bacteriostatic water volume—then read the syringe meter and summary
        below.
      </p>

      <div className="mt-8 grid w-full grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-4 lg:gap-6">
        <PresetSection
          title="Dose of Peptide"
          presets={DOSE_PRESETS_MG}
          unit="mg"
          value={doseMg}
          onSelect={setDoseMg}
          customValue={customDose}
          onCustomChange={setCustomDose}
          customPlaceholder="Enter custom dose (mg)"
          id="calc-dose-home"
        />
        <PresetSection
          title="Strength of Peptide"
          presets={STRENGTH_PRESETS_MG}
          unit="mg"
          value={vialMg}
          onSelect={setVialMg}
          customValue={customStrength}
          onCustomChange={setCustomStrength}
          customPlaceholder="Enter custom strength (mg)"
          id="calc-strength-home"
        />
        <PresetSection
          title="Water of Peptide"
          presets={WATER_PRESETS_ML}
          unit="mL"
          value={waterMl}
          onSelect={setWaterMl}
          customValue={customWater}
          onCustomChange={setCustomWater}
          customPlaceholder="Enter custom water (mL)"
          id="calc-water-home"
        />
      </div>

      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h3 className="text-center text-xl font-semibold text-slate-900">
          Results
        </h3>
        {error ? (
          <p className="mt-4 text-center text-sm text-red-600">{error}</p>
        ) : result ? (
          <>
            <div className="mt-5 space-y-2 text-center text-sm font-semibold text-teal-700 sm:text-base">
              <p>
                <span className="text-slate-500">PEPTIDE DOSE:</span>{" "}
                {doseLines?.primary ?? formatMg(result.doseMg)}
              </p>
              {doseLines?.secondary ? (
                <p className="text-xs font-medium text-slate-600">
                  {doseLines.secondary}
                </p>
              ) : null}
              <p>
                <span className="text-slate-500">DRAW SYRINGE TO:</span>{" "}
                {formatUnits(result.insulinUnits)}
              </p>
            </div>
            <SyringeMeter units={result.insulinUnits} />
            <div className="mt-4 space-y-2 text-center text-sm font-semibold text-teal-700 sm:text-base">
              <p>
                <span className="text-slate-500">YOUR VIAL CONTAINS:</span>{" "}
                {result.dosesInVial} doses
              </p>
              <p>
                <span className="text-slate-500">CONCENTRATION:</span>{" "}
                {formatMgPerMl(result.concentrationMgPerMl)}
              </p>
              <p className="text-xs font-medium text-slate-600">
                Vial total: {formatMg(result.vialMg)} · {formatGrams(result.vialG)}
              </p>
            </div>
          </>
        ) : (
          <p className="mt-4 text-center text-sm text-slate-500">
            Select dose, vial strength, and water volume to see results.
          </p>
        )}
      </section>

      <p className="mt-6 text-center text-sm text-slate-600">
        <Link
          href="/calculator"
          className="font-medium text-teal-700 hover:text-teal-800"
        >
          Open full calculator page
        </Link>
      </p>
    </>
  );
}
