/**
 * Kisspeptin-10 (KP-10) dosage guide.
 * YNWNSFGLRF-NH₂ · MW ~1302.44 Da · 1 nmol ≈ 1.302 mcg.
 * IV t½ ~3.8–4 min — exposure pattern matters as much as dose.
 * ≠ Kisspeptin-54. No validated fixed SC bolus for hypogonadism.
 */

export const KP10_MW = 1302.44;
export const KP10_NMOL_TO_MCG = 1.302;

export function kp10NmolToMcg(nmol) {
  const n = Number(nmol);
  if (!Number.isFinite(n)) return null;
  return n * KP10_NMOL_TO_MCG;
}

export function kp10McgPerKgFromNmolPerKg(nmolPerKg) {
  return kp10NmolToMcg(nmolPerKg);
}

export function kp10WeightBolus({ nmolPerKg, weightKg }) {
  const nmol = Number(nmolPerKg);
  const kg = Number(weightKg);
  if (!Number.isFinite(nmol) || nmol <= 0 || !Number.isFinite(kg) || kg <= 0) {
    return null;
  }
  const mcgPerKg = kp10NmolToMcg(nmol);
  const totalMcg = mcgPerKg * kg;
  return { nmolPerKg: nmol, weightKg: kg, mcgPerKg, totalMcg, totalMg: totalMcg / 1000 };
}

export function kp10InfusionDailyMass({ nmolPerKgH, weightKg, hours = 8 }) {
  const rate = Number(nmolPerKgH);
  const kg = Number(weightKg);
  const h = Number(hours);
  if (
    !Number.isFinite(rate) ||
    rate <= 0 ||
    !Number.isFinite(kg) ||
    kg <= 0 ||
    !Number.isFinite(h) ||
    h <= 0
  ) {
    return null;
  }
  const mcgPerKgH = kp10NmolToMcg(rate);
  const mcgPerKgDay = mcgPerKgH * h;
  const totalMcg = mcgPerKgDay * kg;
  return {
    nmolPerKgH: rate,
    mcgPerKgH,
    mcgPerKgDay,
    weightKg: kg,
    hours: h,
    totalMcg,
    totalMg: totalMcg / 1000,
  };
}

export function kp10FixedRateDaily({ nmolPerH, hours = 8, days = 1 }) {
  const rate = Number(nmolPerH);
  const h = Number(hours);
  const d = Number(days);
  if (
    !Number.isFinite(rate) ||
    rate <= 0 ||
    !Number.isFinite(h) ||
    h <= 0 ||
    !Number.isFinite(d) ||
    d <= 0
  ) {
    return null;
  }
  const mcgPerH = kp10NmolToMcg(rate);
  const mcgPerDay = mcgPerH * h;
  const totalMcg = mcgPerDay * d;
  return { nmolPerH: rate, mcgPerH, mcgPerDay, days: d, totalMcg, totalMg: totalMcg / 1000 };
}

export const KP10_IDENTITY = [
  {
    id: "kp10",
    label: "Kisspeptin-10 (KP-10)",
    verdict: "This page's subject — amidated C-terminal decapeptide YNWNSFGLRF-NH₂",
    detail:
      "MW ~1302.44 Da · PubChem CID 25240297 · KISS1R/GPR54 agonist upstream of GnRH. C-terminal amide is part of identity — YNWNSFGLRF without -NH₂ is incomplete.",
  },
  {
    id: "kp54",
    label: "Kisspeptin-54",
    verdict: "Different peptide — KP-10 is its C-terminal decapeptide; no dose conversion",
    detail:
      "54 amino acids · IV t½ ~28 min vs ~4 min for KP-10. IVF-trigger and hypothalamic-amenorrhea schedules (6.4 nmol/kg, etc.) belong to KP-54, not KP-10.",
  },
  {
    id: "misspell",
    label: "Kissapeptin-10",
    verdict: "Common misspelling — standard name is Kisspeptin-10",
    detail: "Search and product labels using the misspelling may refer to the same compound but scientific records use Kisspeptin-10 or KP-10.",
  },
  {
    id: "metastin",
    label: "Metastin(45–54)",
    verdict: "Historical synonym for human KP-10",
    detail: "Same active decapeptide as kisspeptin(112–121) numbering. Human research uses both nomenclatures.",
  },
];

export const KP10_MOLECULE_COMPARE = [
  {
    feature: "Length",
    kp10: "10 amino acids",
    kp54: "54 amino acids",
  },
  {
    feature: "Active sequence",
    kp10: "Entire molecule",
    kp54: "KP-10 is C-terminal decapeptide",
  },
  {
    feature: "IV half-life",
    kp10: "~3.8–4 minutes",
    kp54: "~27.6–28.6 minutes",
  },
  {
    feature: "Major human route record",
    kp10: "IV bolus/infusion; emerging SC pump",
    kp54: "IV, SC, intranasal; IVF-trigger research",
  },
  {
    feature: "Dose conversion",
    kp10: "None validated to KP-54",
    kp54: "None validated to KP-10",
  },
];

export const KP10_NMOL_CONVERSION = [
  { nmol: 0.1, mcg: 0.13 },
  { nmol: 0.3, mcg: 0.39 },
  { nmol: 1.0, mcg: 1.3 },
  { nmol: 10, mcg: 13.02 },
  { nmol: 32, mcg: 41.68 },
  { nmolH: 1.25, mcgH: 1.63, label: "1.25 nmol/kg/h" },
  { nmolH: 2.5, mcgH: 3.26, label: "2.5 nmol/kg/h" },
  { nmolH: 5.0, mcgH: 6.51, label: "5.0 nmol/kg/h" },
  { nmolH: 10.0, mcgH: 13.02, label: "10.0 nmol/kg/h" },
];

export const KP10_BOLUS_PRESETS = [
  { id: "0.3", label: "0.3 nmol/kg", nmolPerKg: 0.3 },
  { id: "1", label: "1.0 nmol/kg", nmolPerKg: 1.0 },
  { id: "3", label: "3.0 nmol/kg (~3 mcg/kg IV)", nmolPerKg: 3.0 },
  { id: "10", label: "10 nmol/kg", nmolPerKg: 10 },
];

export const KP10_HUMAN_STUDIES = [
  {
    study: "George 2011 bolus",
    dose: "0.01–3.0 mcg/kg",
    route: "IV bolus",
    duration: "Single",
    n: "6 men",
    finding: "1 mcg/kg maximally effective; 3 mcg/kg smaller LH response",
  },
  {
    study: "George 2011 pulse",
    dose: "1.5 mcg/kg/h",
    route: "IV infusion",
    duration: "9 h",
    n: "4 men",
    finding: "Increased LH pulse frequency and secretory mass",
  },
  {
    study: "George 2011 prolonged",
    dose: "3 mcg/kg bolus + 4 mcg/kg/h",
    route: "IV infusion",
    duration: "22.5 h",
    n: "4 men",
    finding: "Sustained LH elevation; increased testosterone",
  },
  {
    study: "Jayasena 2011 men",
    dose: "0.3–10 nmol/kg",
    route: "IV bolus",
    duration: "Single",
    n: "4–5/dose",
    finding: "LH at 0.3 nmol/kg; FSH at 1 nmol/kg",
  },
  {
    study: "Jayasena 2011 women",
    dose: "Up to 32 nmol/kg SC",
    route: "IV/SC bolus; infusion",
    duration: "Single/90 min",
    n: "Cycle-phase",
    finding: "No follicular-phase response at max SC; preovulatory IV response",
  },
  {
    study: "George 2013",
    dose: "4 mcg/kg/h",
    route: "IV infusion",
    duration: "11 h",
    n: "4 T2DM men",
    finding: "LH 3.9→20.7 IU/L; testosterone rose acutely",
  },
  {
    study: "Jayasena 2015",
    dose: "0.1–1.0 nmol/kg/h",
    route: "IV infusion",
    duration: "3 h",
    n: "5/dose",
    finding: "KP-10 ≈ KP-54 potency; peak LH at 0.3 nmol/kg/h",
  },
  {
    study: "Naveed 2026",
    dose: "12.5 mcg/kg/h",
    route: "IV infusion",
    duration: "24 h",
    n: "3 men",
    finding: "LH 5–8× rise then 13–47% decline from peak",
  },
  {
    study: "Yeung 2026 acute",
    dose: "1.25–10 nmol/kg/h",
    route: "SC pump",
    duration: "8 h",
    n: "7 men",
    finding: "Dose-dependent LH, FSH, testosterone increases",
  },
  {
    study: "Yeung 2026 continuous",
    dose: "180 nmol/h",
    route: "SC pump",
    duration: "5 days",
    n: "4 men",
    finding: "LH/FSH attenuated by day 5; testosterone remained elevated",
  },
  {
    study: "Yeung 2026 intermittent",
    dose: "150 nmol/h",
    route: "SC pump 8 h/day",
    duration: "12 days",
    n: "7 men",
    finding: "Gonadotropin stimulation persisted; IV challenge still responsive",
  },
];

export const KP10_EVIDENCE_HIERARCHY = [
  ["U.S. approved dosing", "None", "No prescribing schedule"],
  ["Controlled human IV studies", "Multiple small bolus/infusion trials", "Strong acute endocrine activity; not long-term treatment"],
  ["Controlled human SC studies", "2011 SC bolus (women); 2026 SC pump (men)", "Route documented; bolus ≠ pump infusion"],
  ["Hypogonadal population", "Small IV mechanistic studies", "Insufficient treatment dose definition"],
  ["Fertility outcomes", "No adequate KP-10 sperm/pregnancy trial", "Fertility dosing unestablished"],
  ["Commercial schedules", "100–1,000 mcg SC common", "Low confidence; often poorly sourced"],
  ["Long-term safety", "Inadequate", "No chronic maximum or maintenance schedule"],
];

export const KP10_ROUTE_COMPARE = [
  {
    pattern: "IV bolus",
    range: "0.01–13 mcg/kg",
    schedule: "Single; some repeated within day",
    use: "Acute pathway probe",
  },
  {
    pattern: "IV infusion",
    range: "0.1 nmol/kg/h – 12.5 mcg/kg/h",
    schedule: "Up to 24 h",
    use: "Pulsatility, sustained LH, tolerance",
  },
  {
    pattern: "SC bolus",
    range: "2–32 nmol/kg",
    schedule: "Single",
    use: "2011 women — no follicular response at max",
  },
  {
    pattern: "SC pump acute",
    range: "1.25–10 nmol/kg/h",
    schedule: "8 h",
    use: "2026 dose-response in healthy men",
  },
  {
    pattern: "SC pump continuous",
    range: "180 nmol/h",
    schedule: "5 days",
    use: "Gonadotropin attenuation by day 5",
  },
  {
    pattern: "SC pump intermittent",
    range: "150 nmol/h",
    schedule: "8 h on / 16 h off × 12 d",
    use: "Preserved stimulation through day 12",
  },
];

export const KP10_YEUNG_2026 = [
  {
    arm: "Study 1 — acute SC",
    rate: "1.25–10 nmol/kg/h",
    schedule: "8-h pump · crossover",
    n: 7,
    outcome: "Dose-dependent LH, FSH, testosterone",
  },
  {
    arm: "Study 2 — continuous",
    rate: "180 nmol/h",
    schedule: "24 h/day × 5 days",
    n: 4,
    outcome: "LH/FSH ↓57%/33% by day 5; testosterone elevated",
  },
  {
    arm: "Study 3 — intermittent",
    rate: "150 nmol/h",
    schedule: "8 h/day + 16 h off × 12 days",
    n: 7,
    outcome: "Stimulation persisted; post-course IV bolus still responsive",
  },
];

export const KP10_KP54_CONFUSION = [
  {
    schedule: "6.4 nmol/kg SC BID × 2 weeks",
    peptide: "KP-54",
    context: "Functional hypothalamic amenorrhea",
    kp10Note: "Marked tachyphylaxis — not a KP-10 schedule",
  },
  {
    schedule: "3.2–12.8 nmol/kg SC once",
    peptide: "KP-54",
    context: "IVF oocyte-maturation trigger",
    kp10Note: "Cannot convert to KP-10 trigger dose",
  },
  {
    schedule: "9.6 nmol/kg SC + second dose 10 h later",
    peptide: "KP-54",
    context: "Double-trigger IVF",
    kp10Note: "KP-54-specific reproductive protocol",
  },
  {
    schedule: "12.8 nmol/kg intranasal once",
    peptide: "KP-54",
    context: "2025 acute human study",
    kp10Note: "Intranasal KP-54 — not intranasal KP-10",
  },
];

export const KP10_ANECDOTAL_PROTOCOLS = [
  {
    id: "low",
    label: "Low fixed bolus",
    dose: "50–125 mcg SC",
    frequency: "Daily or 2–3× weekly",
    duration: "3–8 weeks",
    basis: "Commercial/community — no matching controlled KP-10 trial",
  },
  {
    id: "common",
    label: "Common fixed bolus",
    dose: "100–300 mcg SC",
    frequency: "QD or 2–3× weekly",
    duration: "4–12 weeks",
    basis: "Commercial/community — route/schedule not validated",
  },
  {
    id: "high",
    label: "Higher fixed bolus",
    dose: "400–500 mcg SC",
    frequency: "Every other day or multi-weekly",
    duration: "Variable",
    basis: "Commercial extrapolation",
  },
  {
    id: "very-high",
    label: "High fixed schedule",
    dose: "500–1,000 mcg SC",
    frequency: "Every other day",
    duration: "Up to 12 weeks",
    basis: "Commercial protocol — no direct clinical support",
  },
  {
    id: "weight-online",
    label: "Weight-based online",
    dose: "6–10 mcg/kg SC",
    frequency: "Variable",
    duration: "Variable",
    basis: "Often derived from unrelated infusion or KP-54 data",
  },
  {
    id: "yeung",
    label: "Yeung 2026 intermittent (research)",
    dose: "150 nmol/h (~195 mcg/h)",
    frequency: "8 h/day + 16 h off",
    duration: "12 days",
    basis: "Healthy eugonadal men · pump — not fixed bolus",
  },
  {
    id: "proposed",
    label: "Proposed Part B trial",
    dose: "1.25 or 2.5 nmol/kg/h",
    frequency: "8 h/day + 16 h off",
    duration: "28 days",
    basis: "Investigator protocol — functional secondary hypogonadism",
  },
];

export const KP10_CUMULATIVE_PRESETS = [
  { id: "100qd", label: "100 mcg QD × 6 wk", mcgPerDose: 100, freq: 1, days: 42 },
  { id: "250tiw", label: "250 mcg 3×/wk × 8 wk", mcgPerDose: 250, freq: 3, days: 56, weeks: 8 },
  { id: "150inter", label: "150 nmol/h × 8 h × 12 d", type: "fixed", nmolPerH: 150, hours: 8, days: 12 },
  { id: "180cont", label: "180 nmol/h continuous × 5 d", type: "fixed", nmolPerH: 180, hours: 24, days: 5 },
];

export function kp10CumulativeExposure({ mcgPerDose, dosesPerDay, days }) {
  const dose = Number(mcgPerDose);
  const freq = Number(dosesPerDay);
  const d = Number(days);
  if (
    !Number.isFinite(dose) ||
    dose <= 0 ||
    !Number.isFinite(freq) ||
    freq <= 0 ||
    !Number.isFinite(d) ||
    d <= 0
  ) {
    return null;
  }
  const dailyMcg = dose * freq;
  const totalMcg = dailyMcg * d;
  return { mcgPerDose: dose, dosesPerDay: freq, days: d, dailyMcg, totalMcg, totalMg: totalMcg / 1000 };
}

export const KP10_COMPARE = {
  clinical: {
    title: "Human study record",
    status: "Route- and pattern-specific · often small samples",
    rows: [
      ["IV bolus (men)", "0.01–3 mcg/kg · 1 mcg/kg max LH"],
      ["IV infusion", "1.5–4 mcg/kg/h · up to 24 h"],
      ["SC pump acute", "1.25–10 nmol/kg/h × 8 h"],
      ["SC pump intermittent", "150 nmol/h · 8 h on / 16 h off × 12 d"],
      ["Fixed SC bolus treatment", "Not established for hypogonadism"],
    ],
  },
  anecdotal: {
    title: "Online / commercial conventions",
    status: "Fixed boluses — pharmacokinetically unlike pump regimens",
    rows: [
      ["Typical per dose", "100–500 mcg SC"],
      ["Frequency", "Daily, EOD, or 2–3× weekly"],
      ["Duration", "4–12 weeks common"],
      ["KP-54 fertility doses", "Must not be relabeled as KP-10"],
      ["Bolus ≠ 8-h infusion", "Equal mcg ≠ equal exposure"],
    ],
  },
};

export const KP10_PRECLINICAL = [
  { model: "Juvenile male rhesus", dose: "10 mcg bolus + 100 mcg/h × 98 h", route: "IV", outcome: "Initial LH rise then desensitization" },
  { model: "Juvenile male rhesus", dose: "2 mcg/h × 48 h", route: "IV hourly pulses", outcome: "Sustained pulsatile LH secretion" },
  { model: "Adult male rhesus", dose: "200–400 mcg/h", route: "IV continuous", outcome: "LH rose then returned; bolus attenuated during infusion" },
  { model: "Male rat", dose: "3 nmol/kg", route: "IV bolus", outcome: "KP-52 slightly greater LH than equimolar KP-10" },
  { model: "Male rat", dose: "1 or 50 nmol", route: "SC bolus", outcome: "KP-54 substantially greater LH than equimolar KP-10" },
  { model: "Mouse dermis", dose: "0.3–10 nmol/site", route: "Intradermal", outcome: "Edema and reduced blood flow at higher exposure" },
];

export const KP10_PART_A = [
  { period: "1", rate: 0, label: "Placebo (saline)" },
  { period: "2", rate: 0.625, label: "Exploratory below Yeung minimum" },
  { period: "3", rate: 1.25, label: "Anchored to Yeung 2026 acute low" },
  { period: "4", rate: 2.5, label: "Anchored to Yeung 2026 acute mid" },
];

export const KP10_PART_B = [
  { arm: "Placebo", rate: 0, mcgPerKgDay: 0, mg75kg: 0 },
  { arm: "Low", rate: 1.25, mcgPerKgDay: 13.02, mg75kg: 0.98 },
  { arm: "Mid", rate: 2.5, mcgPerKgDay: 26.05, mg75kg: 1.95 },
];

export const KP10_CLAIMS = [
  {
    id: "100-standard",
    claim: "100 mcg daily is the standard dose",
    verdict: "Not established",
    detail: "One FAERS case reported 100 mcg SC × 6 weeks — exposure report, not efficacy validation.",
  },
  {
    id: "125-bedtime",
    claim: "125 mcg at bedtime mimics natural pulsatility",
    verdict: "Unsupported",
    detail: "Once-daily timing does not reproduce 60–120-minute neuroendocrine GnRH pulses.",
  },
  {
    id: "eod-desens",
    claim: "Every other day prevents desensitization",
    verdict: "Unproven",
    detail: "Plausible spacing hypothesis but not validated for fixed KP-10 bolus. Published chronic SC evidence used daily 8 h on / 16 h off.",
  },
  {
    id: "mcgkg-sc",
    claim: "6–10 mcg/kg SC is clinically studied",
    verdict: "Misleading",
    detail: "Requires specifying infusion vs bolus and peptide isoform. IV infusion data cannot be converted to SC bolus.",
  },
  {
    id: "hcg-replace",
    claim: "Kisspeptin can replace hCG",
    verdict: "No comparative trial",
    detail: "KP-10 stimulates GnRH upstream; hCG directly activates LH receptor at gonads.",
  },
  {
    id: "sperm-trt",
    claim: "KP-10 preserves sperm during TRT",
    verdict: "Not established",
    detail: "Small IHH study did not measure sperm or pregnancy. No adequate preservation trial.",
  },
  {
    id: "more-testosterone",
    claim: "Higher dose means more testosterone",
    verdict: "Contradicted by human data",
    detail: "George 2011: 3 mcg/kg IV produced smaller LH than 1 mcg/kg. Yeung 2026: continuous exposure attenuated gonadotropins.",
  },
  {
    id: "kp54-same",
    claim: "KP-54 fertility doses apply to KP-10",
    verdict: "Invalid extrapolation",
    detail: "Different half-life, route behavior, and trial populations. No validated conversion.",
  },
  {
    id: "bolus-equals-pump",
    claim: "One daily injection equals the 150 nmol/h pump study",
    verdict: "Pharmacokinetically false",
    detail: "150 nmol/h for 8 h ≠ 150 nmol once. Absorption curve, peak concentration, and receptor exposure differ.",
  },
  {
    id: "vial-dose",
    claim: "A 10 mg vial means a 10 mg dose",
    verdict: "False",
    detail: "Vial mass is inventory. Complete dose requires concentration, route, rate, duration, and schedule.",
  },
];

export const KP10_EVIDENCE_LADDER = [
  { level: "Acute IV endocrine response", exists: "Several small human studies", confidence: "Moderate" },
  { level: "IV infusion 9–24 h", exists: "Small mechanistic samples", confidence: "Moderate mechanistic" },
  { level: "Acute SC pump response", exists: "7 healthy men (2026)", confidence: "Early controlled" },
  { level: "Continuous SC 5 days", exists: "4 healthy men (2026)", confidence: "Very early" },
  { level: "Intermittent SC pump 12 days", exists: "7 healthy men (2026)", confidence: "Promising · very small" },
  { level: "Secondary hypogonadism treatment", exists: "Acute IV proof of concept only", confidence: "Insufficient" },
  { level: "Fixed SC bolus for weeks", exists: "Commercial/anecdotal", confidence: "Not validated" },
  { level: "Fertility restoration", exists: "No adequate KP-10 trial", confidence: "Insufficient" },
  { level: "KP-54 schedules on KP-10", exists: "None valid", confidence: "Invalid extrapolation" },
];

export const KP10_AE_SIMPLE = [
  {
    category: "Human study record",
    note: "~300 people in short IV/SC studies per FDA 2024 review; no SAEs in those studies but small samples and brief exposure",
  },
  {
    category: "FAERS signal",
    note: "17-year-old male · 100 mcg SC daily × 6 weeks · weight gain and increased estrone — causality not established",
  },
  {
    category: "Endocrine risks",
    note: "Supraphysiologic LH/FSH/testosterone/estradiol; tachyphylaxis; gynecomastia; hematocrit rise",
  },
  {
    category: "FDA compounding (2024)",
    note: "PCAC voted 0-11-0 against 503A inclusion · Category 2 interim status (May 2026) — immunogenicity, aggregation, impurities",
  },
];

export const KP10_AE_FULL = [
  {
    domain: "Endocrine overstimulation",
    items: "LH, FSH, testosterone, estradiol monitoring; acne, mood, libido, gynecomastia, abnormal bleeding",
  },
  {
    domain: "Tachyphylaxis",
    items: "Falling LH/FSH despite continued exposure; loss of bolus response; compare day 1 vs later days",
  },
  {
    domain: "Fertility",
    items: "Semen deterioration, ovarian hyperresponse, unplanned ovulation — sex-specific protocols required",
  },
  {
    domain: "Cardiovascular",
    items: "BP, HR, lipids; nonclinical pro-atherosclerotic mouse findings — uncertain human relevance",
  },
  {
    domain: "Immune / product quality",
    items: "Hypersensitivity, anti-drug antibodies, aggregates, related-peptide impurities, pump delivery accuracy",
  },
];

export const KISSPEPTIN_10_DOSAGE_GUIDE = {
  title: "Kisspeptin-10 Dosage: Research Evidence, Route Mathematics, and Study Protocol",
  updated: "Updated August 2026",
  callout:
    "**Research note:** Kisspeptin-10 (**KP-10**, **YNWNSFGLRF-NH₂**, MW ~1302.44 Da) activates **KISS1R** upstream of GnRH. IV half-life ~**3.8–4 minutes** — **exposure pattern matters as much as dose**. Human evidence spans IV bolus (**0.01–3 mcg/kg**; 1 mcg/kg max LH), IV infusion, and 2026 **SC pump** regimens (**150 nmol/h × 8 h/day × 12 days**). **≠ Kisspeptin-54.** Common **100–500 mcg SC boluses are not validated** treatment schedules.",
  intro: [
    "Kisspeptin-10 is the amidated C-terminal decapeptide shared by KISS1-derived kisspeptins. It stimulates endogenous GnRH release, which drives LH, FSH, and gonadal sex steroids.",
    "**1 nmol KP-10 ≈ 1.302 mcg.** Routes and schedules are not interchangeable: IV bolus, IV infusion, SC bolus, and SC pump infusion produce different exposure profiles.",
    "The 2026 Yeung et al. program is the most relevant repeated SC evidence: **8-hour pump infusions** with **16-hour washouts** preserved gonadotropin stimulation for 12 days, while **continuous 5-day exposure** showed attenuation.",
  ],
  glance: {
    title: "Kisspeptin-10 dosage in 30 seconds",
    table: {
      headers: ["Question", "Current answer"],
      rows: [
        ["**Sequence**", "YNWNSFGLRF-NH₂ · ~1302 Da"],
        ["**IV half-life**", "~3.8–4 minutes"],
        ["**Max LH IV bolus (men)**", "1 mcg/kg (not 3 mcg/kg)"],
        ["**2026 SC pump (12 d)**", "150 nmol/h · 8 h on / 16 h off"],
        ["**Lowest 2026 SC rate**", "1.25 nmol/kg/h × 8 h"],
        ["**Online fixed bolus**", "100–500 mcg SC · anecdotal"],
        ["**Validated daily SC bolus**", "Not established"],
        ["**KP-54 fertility doses**", "Do not apply to KP-10"],
      ],
    },
  },
  sections: [
    {
      id: "identity",
      title: "Compound identity",
      widget: "kisspeptin-10-identity-gate",
      paragraphs: [
        "Research must specify the complete amidated sequence, free peptide vs salt, peptide content, concentration, delivery volume or rate, and assay confirmation.",
      ],
    },
    {
      id: "kp54",
      title: "Kisspeptin-10 is not Kisspeptin-54",
      widget: "kisspeptin-10-molecule-compare",
      paragraphsAfter: [
        "Frequently cited fertility doses (6.4 nmol/kg BID, IVF triggers) belong to KP-54 and must not be relabeled as KP-10 dosing.",
      ],
    },
    {
      id: "units",
      title: "Dose and unit mathematics",
      widget: "kisspeptin-10-unit-converter",
      paragraphs: [
        "Four common errors: mcg vs mg; bolus vs hourly rate (/h); fixed nmol/h vs nmol/kg/h; vial mass vs administered dose.",
      ],
    },
    {
      id: "bolus-calc",
      title: "Weight-based bolus calculator",
      widget: "kisspeptin-10-bolus-calc",
      paragraphsAfter: [
        "Arithmetic conversions only — not route recommendations. IV bolus results cannot be converted to SC bolus or infusion rates by simple division.",
      ],
    },
    {
      id: "regulatory",
      title: "Regulatory context",
      paragraphs: [
        "No U.S. prescribing label. FDA 2024 PCAC voted **0-11-0** against 503A inclusion for secondary hypogonadism. As of May 2026, KP-10 is in **503A Category 2** (potential significant safety risks). The 2026 SC pump study expands the human route record but does not establish treatment effectiveness.",
      ],
    },
    {
      id: "human-studies",
      title: "Dosage in human clinical research",
      paragraphs: [
        "> Doses describe study exposure — **not a universal clinical schedule.** Route, population, endocrine state, and sampling design are integral to each result.",
      ],
      widget: "kisspeptin-10-human-studies",
    },
    {
      id: "george-dose",
      title: "The dose response was not monotonic",
      paragraphs: [
        "George et al., 2011: **1 mcg/kg IV was maximally effective** for LH stimulation; **3 mcg/kg produced a smaller response**. Higher dose does not reliably mean greater endocrine output.",
      ],
    },
    {
      id: "route-compare",
      title: "Studied route and pattern ranges",
      widget: "kisspeptin-10-route-compare",
    },
    {
      id: "yeung-2026",
      title: "The 2026 subcutaneous pump program",
      widget: "kisspeptin-10-yeung-2026",
      paragraphsAfter: [
        "Intermittent 8 h on / 16 h off maintained stimulation for 12 days. Continuous 5-day exposure showed gonadotropin attenuation — washout interval is a central design variable.",
      ],
    },
    {
      id: "kp54-confusion",
      title: "KP-54 fertility schedules misapplied to KP-10",
      widget: "kisspeptin-10-kp54-confusion",
    },
    {
      id: "evidence-hierarchy",
      title: "Evidence hierarchy for dose selection",
      widget: "kisspeptin-10-evidence-hierarchy",
    },
    {
      id: "protocols",
      title: "Commonly reported online protocols",
      widget: "kisspeptin-10-anecdotal-protocols",
    },
    {
      id: "cumulative",
      title: "Cumulative exposure examples",
      widget: "kisspeptin-10-cumulative-calc",
    },
    {
      id: "compare",
      title: "Anecdotal versus clinically studied dosing",
      widget: "kisspeptin-10-clinical-vs-anecdotal",
    },
    {
      id: "preclinical",
      title: "Preclinical research dosage",
      widget: "kisspeptin-10-preclinical-doses",
      paragraphsAfter: [
        "Primate continuous exposure shows desensitization; intermittent pulses sustain LH — informs washout design, not human dose conversion.",
      ],
    },
    {
      id: "mechanism",
      title: "Mechanism relevant to dosage",
      paragraphs: [
        "KP-10 → KISS1R → GnRH → LH/FSH → gonadal steroids → feedback. Each layer has different response times. LH changes within minutes; testosterone follows later; semen outcomes require months.",
      ],
    },
    {
      id: "safety",
      title: "Safety, side effects, and monitoring",
      widget: "kisspeptin-10-adverse-events",
    },
    {
      id: "escalation",
      title: "Dose escalation",
      paragraphs: [
        "No validated week-by-week clinical titration. Human research used randomized dose-response visits, sentinel exposure, dense hormone sampling, and predefined washout. Consumer 'start low and add 50–100 mcg' plans are not evidence-based.",
      ],
    },
    {
      id: "protocol",
      title: "Complete proposed research dosing protocol",
      paragraphs: [
        "**Part A:** 24 men · 4-period crossover · placebo, 0.625, 1.25, 2.5 nmol/kg/h SC pump × 8 h · ≥7-day washout.",
        "**Part B:** 90 men · 28 days · placebo vs **1.25 or 2.5 nmol/kg/h** · 8 h/day + 16 h off · functional secondary hypogonadism.",
        "**Part C (conditional):** 84-day extension with semen endpoints if Part B meets safety and response criteria.",
      ],
      widget: "kisspeptin-10-protocol-timeline",
    },
    {
      id: "claims",
      title: "Claims versus evidence",
      widget: "kisspeptin-10-claim-checker",
    },
    {
      id: "evidence-ladder",
      title: "Dosage evidence ladder",
      widget: "kisspeptin-10-evidence-ladder",
    },
    {
      id: "bottom-line",
      title: "Bottom line",
      paragraphs: [
        "KP-10 has meaningful human mechanistic dose literature and, since 2026, direct repeated SC pump evidence. It still lacks a validated treatment dose for hypogonadism or fertility.",
        "The best-supported development path is **weight-normalized, monitored, intermittent infusion** — not the assumption that a commonly sold 5 mg or 10 mg vial implies a standard fixed injection.",
      ],
      highlight:
        "Pattern > mass · 1 mcg/kg max LH IV · 150 nmol/h pump 8 h on/16 h off · KP-54 ≠ KP-10.",
    },
  ],
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        question: "What is the standard Kisspeptin-10 dose?",
        answer:
          "There is no single standard treatment dose. Human research ranges from microgram-per-kilogram IV boluses to multi-hour IV or SC infusions depending on the scientific question.",
      },
      {
        question: "What dose produced the largest LH response in healthy men?",
        answer:
          "In George 2011 IV bolus study, 1 mcg/kg was maximally effective and 3 mcg/kg produced a smaller response. This applies to acute IV, not SC dosing.",
      },
      {
        question: "What is the best-supported subcutaneous schedule?",
        answer:
          "The most informative repeated schedule is 150 nmol/h by SC pump for 8 hours/day followed by 16 hours off for 12 days in seven healthy men — a research precedent, not established treatment.",
      },
      {
        question: "Is 100–200 mcg once daily evidence based?",
        answer:
          "It is a common online fixed-bolus convention, but no adequate controlled trial has established it for hypogonadism, fertility, libido, or post-cycle recovery.",
      },
      {
        question: "Why not convert the pump study into one daily injection?",
        answer:
          "Absorption rate, peak concentration, and time above active concentration would change. Equal daily mass does not make a bolus equivalent to an eight-hour infusion.",
      },
      {
        question: "How long does Kisspeptin-10 last?",
        answer:
          "Measured IV plasma half-life is approximately 3.8–4 minutes. SC absorption during infusion can sustain exposure, but the profile depends on formulation and delivery.",
      },
      {
        question: "Can Kisspeptin-10 replace hCG?",
        answer:
          "They act at different levels. KP-10 stimulates GnRH upstream; hCG directly activates the LH receptor. No head-to-head trial supports substitution.",
      },
      {
        question: "Can KP-54 doses be used for KP-10?",
        answer:
          "No validated conversion exists. The peptides differ in half-life and route behavior.",
      },
      {
        question: "Does continuous exposure cause desensitization?",
        answer:
          "It can. The 2026 five-day continuous SC study showed substantial LH/FSH decline from day 1. Intermittent daily washout preserved more response over 12 days.",
      },
      {
        question: "Does a 10 mg vial mean a 10 mg dose?",
        answer:
          "No. Vial mass is inventory. A complete research dose states identity, concentration, route, rate, duration, frequency, and cumulative exposure.",
      },
    ],
  },
  sources: {
    title: "References",
    items: [
      {
        authors: "PubChem",
        title: "Kisspeptin-10",
        detail: "CID 25240297.",
        href: "https://pubchem.ncbi.nlm.nih.gov/compound/25240297",
      },
      {
        authors: "FDA",
        title: "Kisspeptin-10 PCAC briefing",
        detail: "2024 · 0-11-0 vote against 503A inclusion.",
        href: "https://www.fda.gov/media/182089/download",
      },
      {
        authors: "George JT et al.",
        title: "Kisspeptin-10 LH stimulation 2011",
        detail: "IV bolus 0.01–3 mcg/kg · non-monotonic response.",
        href: "https://doi.org/10.1210/jc.2011-0089",
      },
      {
        authors: "Yeung AC et al.",
        title: "Chronic SC KP-10 2026",
        detail: "SC pump acute, continuous, intermittent arms.",
        href: "https://doi.org/10.1093/ejendo/lvag134",
      },
      {
        authors: "Jayasena CN et al.",
        title: "KP-10 vs KP-54 comparison 2015",
        detail: "Equimolar IV infusion in healthy men.",
        href: "https://doi.org/10.1093/humrep/dev143",
      },
      {
        authors: "Naveed A et al.",
        title: "Continuous IV KP-10 2026",
        detail: "12.5 mcg/kg/h × 24 h.",
        href: "https://doi.org/10.1007/s42000-026-00795-y",
      },
    ],
  },
};
