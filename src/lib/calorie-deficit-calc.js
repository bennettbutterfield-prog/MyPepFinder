/**
 * Calorie deficit / weight-loss trajectory calculations.
 * Uses Mifflin-St Jeor for RMR, PAL-based TDEE, and a Hall-inspired
 * weekly simulation with Forbes p-ratio for fat vs lean loss.
 */

export const ACTIVITY_LEVELS = [
  { id: "sedentary", label: "Sedentary", detail: "Desk job, little exercise", pal: 1.4 },
  { id: "light", label: "Lightly active", detail: "Light exercise 1–3 days/week", pal: 1.55 },
  { id: "moderate", label: "Moderately active", detail: "Moderate exercise 3–5 days/week", pal: 1.7 },
  { id: "very", label: "Very active", detail: "Hard exercise 6–7 days/week", pal: 1.9 },
  { id: "extra", label: "Extra active", detail: "Very hard exercise or physical job", pal: 2.3 },
];

const MIN_CALORIES = { male: 1500, female: 1200 };
const KCAL_PER_KG_FAT = 9500;
const KCAL_PER_KG_LEAN = 1800;

export function lbsToKg(lbs) {
  return lbs / 2.20462;
}

export function kgToLbs(kg) {
  return kg * 2.20462;
}

export function feetInchesToCm(feet, inches) {
  return feet * 30.48 + inches * 2.54;
}

export function cmToFeetInches(cm) {
  const totalInches = cm / 2.54;
  const feet = Math.floor(totalInches / 12);
  const inches = Math.round(totalInches - feet * 12);
  return { feet, inches: inches === 12 ? 0 : inches };
}

export function parsePositiveNumber(value) {
  if (value === "" || value == null) return null;
  const n = Number(String(value).replace(/,/g, ""));
  return Number.isFinite(n) && n > 0 ? n : null;
}

export function mifflinStJeorRmr({ sex, age, heightCm, weightKg }) {
  const base = 10 * weightKg + 6.25 * heightCm - 5 * age;
  return sex === "male" ? base + 5 : base - 161;
}

export function estimateBodyFatFraction({ sex, age, heightCm, weightKg }) {
  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);
  const pct =
    1.2 * bmi + 0.23 * age - 10.8 * (sex === "male" ? 1 : 0) - 5.4;
  return Math.max(0.08, Math.min(0.55, pct / 100));
}

export function computeTdee({ sex, age, heightCm, weightKg, pal }) {
  const rmr = mifflinStJeorRmr({ sex, age, heightCm, weightKg });
  return { rmr: Math.round(rmr), tdee: Math.round(rmr * pal) };
}

function forbesPRatio(fatMassKg) {
  return fatMassKg / (fatMassKg + 10.4);
}

function energyDensityKg(pRatio) {
  return pRatio * KCAL_PER_KG_FAT + (1 - pRatio) * KCAL_PER_KG_LEAN;
}

/**
 * Simulate weekly weight loss until goal or plateau.
 */
export function simulateWeightLoss({
  sex,
  age,
  heightCm,
  startKg,
  goalKg,
  intakeKcal,
  pal,
  maxWeeks = 520,
}) {
  let weight = startKg;
  const trajectory = [{ week: 0, weightKg: startKg }];
  let week = 0;

  while (weight > goalKg + 0.05 && week < maxWeeks) {
    const bf = estimateBodyFatFraction({ sex, age, heightCm, weightKg: weight });
    const fatMass = weight * bf;
    const rmr = mifflinStJeorRmr({ sex, age, heightCm, weightKg: weight });
    const tdee = rmr * pal;
    const deficit = tdee - intakeKcal;

    if (deficit <= 5) break;

    const p = forbesPRatio(fatMass);
    const rho = energyDensityKg(p);
    const deltaKg = (deficit * 7) / rho;
    weight = Math.max(goalKg, weight - deltaKg);
    week += 1;
    trajectory.push({ week, weightKg: weight });
  }

  return {
    weeks: week,
    days: week * 7,
    trajectory,
    reachedGoal: weight <= goalKg + 0.05,
  };
}

export function computeMacroTargets(intakeKcal) {
  const proteinPct = 0.3;
  const fatPct = 0.3;
  const carbPct = 0.4;
  return {
    calories: intakeKcal,
    proteinG: Math.round((intakeKcal * proteinPct) / 4),
    fatG: Math.round((intakeKcal * fatPct) / 9),
    carbsG: Math.round((intakeKcal * carbPct) / 4),
    proteinPct: 30,
    fatPct: 30,
    carbsPct: 40,
  };
}

export function buildIntakeScenarios({
  sex,
  age,
  heightCm,
  startKg,
  goalKg,
  pal,
}) {
  const start = computeTdee({ sex, age, heightCm, weightKg: startKg, pal });
  const minIntake = MIN_CALORIES[sex];
  const maxIntake = Math.floor(start.tdee / 100) * 100;
  const scenarios = [];

  if (maxIntake < minIntake) {
    return { start, scenarios: [], minIntake, maxIntake };
  }

  for (let intake = maxIntake; intake >= minIntake; intake -= 100) {
    const sim = simulateWeightLoss({
      sex,
      age,
      heightCm,
      startKg,
      goalKg,
      intakeKcal: intake,
      pal,
    });
    scenarios.push({
      intakeKcal: intake,
      dailyDeficit: Math.round(start.tdee - intake),
      weeks: sim.weeks,
      days: sim.days,
      reachedGoal: sim.reachedGoal,
      trajectory: sim.trajectory,
    });
  }

  return { start, scenarios, minIntake, maxIntake };
}

export function snapToScenarioIntake(value, scenarios) {
  if (!scenarios?.length) return null;
  const target = Number(value);
  if (!Number.isFinite(target)) return scenarios[0].intakeKcal;
  return scenarios.reduce((closest, scenario) =>
    Math.abs(scenario.intakeKcal - target) <
    Math.abs(closest.intakeKcal - target)
      ? scenario
      : closest
  ).intakeKcal;
}

export function formatWeeksLabel(weeks) {
  if (weeks <= 0) return "—";
  if (weeks < 8) return `${weeks} wk`;
  const months = weeks / 4.345;
  if (months < 24) {
    const rounded = months < 10 ? months.toFixed(1) : Math.round(months);
    return `${rounded} mo (${weeks} wk)`;
  }
  const years = weeks / 52.143;
  const yrLabel = years < 10 ? years.toFixed(1) : Math.round(years);
  return `${yrLabel} yr (${weeks} wk)`;
}

export function formatWeightLbs(kg, decimals = 0) {
  const lbs = kgToLbs(kg);
  return decimals > 0 ? lbs.toFixed(decimals) : Math.round(lbs);
}
