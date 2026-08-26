/**
 * Reconstitution math aligned with common peptide calculator outputs.
 * Educational / laboratory reference only.
 */

export function parsePositiveNumber(raw) {
  const n = Number.parseFloat(String(raw ?? "").replace(",", "."));
  if (!Number.isFinite(n) || n <= 0) return null;
  return n;
}

/** Convert a mass input to milligrams for calculator math. */
export function massToMg(value, unit) {
  const n = parsePositiveNumber(value);
  if (n == null) return null;
  if (unit === "g") return n * 1000;
  if (unit === "mcg") return n / 1000;
  return n;
}

/** Convert milligrams to another mass unit for display when switching inputs. */
export function mgToMassUnit(mg, unit) {
  const n = Number(mg);
  if (!Number.isFinite(n) || n <= 0) return "";
  if (unit === "g") {
    const g = n / 1000;
    return Number.isInteger(g) ? String(g) : g.toFixed(6).replace(/\.?0+$/, "");
  }
  if (unit === "mcg") {
    const mcg = n * 1000;
    return Number.isInteger(mcg) ? String(mcg) : mcg.toFixed(3).replace(/\.?0+$/, "");
  }
  return Number.isInteger(n) ? String(n) : String(n);
}

function gcd(a, b) {
  let x = Math.abs(Math.round(a));
  let y = Math.abs(Math.round(b));
  while (y) {
    const t = y;
    y = x % y;
    x = t;
  }
  return x || 1;
}

/**
 * Express a dose (mg) as a reduced fraction of one gram.
 * @param {number} doseMg
 */
export function fractionOfGram(doseMg) {
  const n = Number(doseMg);
  if (!Number.isFinite(n) || n <= 0) return null;

  const str = String(n);
  const decimals = str.includes(".") ? str.split(".")[1].length : 0;
  const scale = 10 ** decimals;
  const numerator = Math.round(n * scale);
  const denominator = 1000 * scale;
  const divisor = gcd(numerator, denominator);

  return {
    grams: n / 1000,
    numerator: numerator / divisor,
    denominator: denominator / divisor,
  };
}

/**
 * @param {number} doseMg
 * @param {number} [vialMg]
 */
export function doseMassBreakdown(doseMg, vialMg) {
  const n = Number(doseMg);
  if (!Number.isFinite(n) || n <= 0) return null;

  const fraction = fractionOfGram(n);
  const breakdown = {
    doseMg: n,
    doseMcg: n * 1000,
    doseG: n / 1000,
    fractionOfGram: fraction,
  };

  const vial = Number(vialMg);
  if (Number.isFinite(vial) && vial > 0) {
    breakdown.vialG = vial / 1000;
    breakdown.doseFractionOfVial = n / vial;
    const vialFraction = fractionOfGram(vial);
    if (vialFraction) {
      breakdown.vialFractionOfGram = vialFraction;
    }
  }

  return breakdown;
}

/**
 * @param {{ doseMg: number, vialMg: number, waterMl: number }} params
 */
export function computeReconstitution({ doseMg, vialMg, waterMl }) {
  if (!doseMg || !vialMg || !waterMl) return null;

  const concentrationMgPerMl = vialMg / waterMl;
  const mlPerDose = doseMg / concentrationMgPerMl;
  const insulinUnits = mlPerDose * 100;
  const dosesInVial = Math.floor(vialMg / doseMg);
  const mass = doseMassBreakdown(doseMg, vialMg);

  return {
    doseMg,
    vialMg,
    waterMl,
    concentrationMgPerMl,
    mlPerDose,
    insulinUnits,
    dosesInVial,
    doseMcg: doseMg * 1000,
    concentrationMcgPerMl: concentrationMgPerMl * 1000,
    doseG: mass.doseG,
    vialG: mass.vialG,
    fractionOfGram: mass.fractionOfGram,
    doseFractionOfVial: mass.doseFractionOfVial,
  };
}

export function formatMg(value) {
  const n = Number(value);
  if (!Number.isFinite(n)) return "—";
  if (n < 1) return `${n.toFixed(2)} mg`;
  if (Number.isInteger(n)) return `${n} mg`;
  return `${n.toFixed(2)} mg`;
}

export function formatMcg(value) {
  const n = Number(value);
  if (!Number.isFinite(n)) return "—";
  if (n < 1) return `${n.toFixed(2)} mcg`;
  if (Number.isInteger(n)) return `${n} mcg`;
  return `${n.toFixed(1)} mcg`;
}

export function formatGrams(value) {
  const n = Number(value);
  if (!Number.isFinite(n)) return "—";
  if (n >= 1) {
    return Number.isInteger(n) ? `${n} g` : `${n.toFixed(3)} g`;
  }
  if (n >= 0.001) return `${n.toFixed(4)} g`;
  if (n >= 0.000001) return `${n.toFixed(6)} g`;
  return `${n.toExponential(2)} g`;
}

export function formatFractionOfGram(doseMg) {
  const fraction = fractionOfGram(doseMg);
  if (!fraction) return "—";
  if (fraction.numerator === fraction.denominator) return "1 g";
  if (fraction.denominator === 1) return `${fraction.numerator} g`;
  return `${fraction.numerator}/${fraction.denominator} g`;
}

/** Primary dose label with mg; secondary line includes mcg, grams, and fraction of 1 g. */
export function formatDoseMassLines(doseMg, vialMg) {
  const mass = doseMassBreakdown(doseMg, vialMg);
  if (!mass) return { primary: "—", secondary: null };

  const parts = [
    formatMcg(mass.doseMcg),
    formatGrams(mass.doseG),
    formatFractionOfGram(mass.doseMg),
  ];

  let secondary = parts.join(" · ");
  if (mass.doseFractionOfVial != null && mass.doseFractionOfVial <= 1) {
    secondary += ` · ${formatFractionOfVial(mass.doseFractionOfVial)} of vial`;
  }

  return {
    primary: formatMg(mass.doseMg),
    secondary,
  };
}

function formatFractionOfVial(ratio) {
  const n = Number(ratio);
  if (!Number.isFinite(n) || n <= 0) return "—";

  const str = String(n);
  const decimals = str.includes(".") ? str.split(".")[1].length : 0;
  const scale = 10 ** decimals;
  const numerator = Math.round(n * scale);
  const denominator = scale;
  const divisor = gcd(numerator, denominator);
  const num = numerator / divisor;
  const den = denominator / divisor;

  if (num === den) return "100%";
  if (den === 1) return `${num}×`;
  return `${num}/${den}`;
}

export function formatMgPerMl(value) {
  const n = Number(value);
  if (!Number.isFinite(n)) return "—";
  return `${n.toFixed(2)} mg/mL`;
}

export function formatUnits(value) {
  const n = Number(value);
  if (!Number.isFinite(n)) return "—";
  return `${n.toFixed(2)} units`;
}
