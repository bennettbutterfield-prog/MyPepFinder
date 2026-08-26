/**
 * Melanotan-2 (MT-II) dosage guide.
 * Ac-Nle-c[Asp-His-D-Phe-Arg-Trp-Lys]-NH₂ · MW ~1024.18 Da.
 * Human research: 0.010–0.030 mg/kg SC · 0.025 mg/kg most repeated (~23 men total).
 * No FDA approval. Online 0.10–0.50 mg fixed doses ≠ trial mg/kg.
 */

export const MT2_MW = 1024.18;
export const MT2_NMOL_TO_MCG = 1.024;

export function mt2NmolToMcg(nmol) {
  const n = Number(nmol);
  if (!Number.isFinite(n)) return null;
  return n * MT2_NMOL_TO_MCG;
}

export function mt2WeightDose({ mgPerKg, weightKg }) {
  const dose = Number(mgPerKg);
  const kg = Number(weightKg);
  if (!Number.isFinite(dose) || dose <= 0 || !Number.isFinite(kg) || kg <= 0) {
    return null;
  }
  const totalMg = dose * kg;
  return {
    mgPerKg: dose,
    weightKg: kg,
    totalMg,
    totalMcg: totalMg * 1000,
  };
}

export function mt2CumulativeExposure({ mgPerDose, doses, weightKg, mgPerKg }) {
  if (mgPerKg != null && weightKg != null) {
    const single = mt2WeightDose({ mgPerKg, weightKg });
    if (!single) return null;
    const n = Number(doses);
    if (!Number.isFinite(n) || n <= 0) return null;
    return {
      label: `${mgPerKg} mg/kg × ${n} doses (${weightKg} kg)`,
      perDoseMg: single.totalMg,
      doses: n,
      totalMg: single.totalMg * n,
      totalMcg: single.totalMcg * n,
    };
  }
  const dose = Number(mgPerDose);
  const n = Number(doses);
  if (!Number.isFinite(dose) || dose <= 0 || !Number.isFinite(n) || n <= 0) {
    return null;
  }
  return {
    label: `${dose} mg × ${n} doses`,
    perDoseMg: dose,
    doses: n,
    totalMg: dose * n,
    totalMcg: dose * n * 1000,
  };
}

export const MT2_IDENTITY = [
  {
    id: "mt2",
    label: "Melanotan-2 (MT-II)",
    verdict: "This page's subject — cyclic heptapeptide · broad MC1R/MC3R/MC4R/MC5R agonism",
    detail:
      "MW ~1024.18 Da · PubChem CID 92432 · lactam ring Asp–Lys. Pigmentation plus nausea, yawning, appetite, sexual arousal, erections.",
  },
  {
    id: "mt1",
    label: "Afamelanotide / Melanotan-1",
    verdict: "Different peptide — linear 13-mer · predominantly MC1R · SCENESSE approved",
    detail: "16 mg implant q2mo for EPP. Doses and products do not transfer to MT-II.",
  },
  {
    id: "pt141",
    label: "Bremelanotide (PT-141 / VYLEESI)",
    verdict: "Related cyclic melanocortin — separate FDA product and dose",
    detail: "1.75 mg SC as needed for HSDD in premenopausal women — not an MT-II dose proxy.",
  },
  {
    id: "vial",
    label: "Online 'Melanotan II' vial or spray",
    verdict: "Unapproved · identity/content often uncertain",
    detail: "Breindahl 2015: labeled 10 mg vials contained 4.32–8.84 mg MT-II with impurities. TGA 2026: nasal sprays inconsistently dosed.",
  },
];

export const MT2_MOLECULE_COMPARE = [
  { feature: "Structure", mt2: "Cyclic heptapeptide", mt1: "Linear 13-mer", pt141: "Related cyclic heptapeptide" },
  { feature: "MW", mt2: "~1024 Da", mt1: "~1647 Da", pt141: "Different terminal chemistry" },
  { feature: "Receptors", mt2: "MC1R, MC3R, MC4R, MC5R", mt1: "Predominantly MC1R", pt141: "Melanocortin agonist (HSDD)" },
  { feature: "U.S. approval", mt2: "None", mt1: "SCENESSE (EPP)", pt141: "VYLEESI (HSDD)" },
  { feature: "Labeled dose", mt2: "None", mt1: "16 mg implant q2mo", pt141: "1.75 mg SC as needed" },
];

export const MT2_MGKG_TABLE = [
  { mgKg: 0.01, kg60: 0.6, kg75: 0.75, kg90: 0.9 },
  { mgKg: 0.015, kg60: 0.9, kg75: 1.125, kg90: 1.35 },
  { mgKg: 0.02, kg60: 1.2, kg75: 1.5, kg90: 1.8 },
  { mgKg: 0.025, kg60: 1.5, kg75: 1.875, kg90: 2.25 },
  { mgKg: 0.03, kg60: 1.8, kg75: 2.25, kg90: 2.7 },
];

export const MT2_WEIGHT_PRESETS = [
  { id: "010", label: "0.010 mg/kg (pilot start)", mgPerKg: 0.01 },
  { id: "025", label: "0.025 mg/kg (most repeated)", mgPerKg: 0.025 },
  { id: "030", label: "0.030 mg/kg (pilot max)", mgPerKg: 0.03 },
];

export const MT2_PILOT_ESCALATION = [
  { level: "Start", mgKg: 0.01, effects: "Transient yawning, GI cramping, flushing" },
  { level: "+0.005", mgKg: 0.015, effects: "Generally transient central/GI effects" },
  { level: "+0.005", mgKg: 0.02, effects: "Transient effects continue" },
  { level: "+0.005", mgKg: 0.025, effects: "Spontaneous partial erections all 3 men · selected for Phase I" },
  { level: "+0.005", mgKg: 0.03, effects: "Grade 2 somnolence/fatigue in 1/2 · stretching/yawning up to 10 h" },
];

export const MT2_HUMAN_STUDIES = [
  {
    study: "Dorr 1996 pilot",
    dose: "0.010–0.030 mg/kg",
    route: "SC weekdays × 2 wk",
    n: "3 men",
    finding: "5 active doses alternating saline; 0.025 mg/kg selected for Phase I",
  },
  {
    study: "Wessells 1998",
    dose: "0.025 mg/kg",
    route: "Single SC · crossover",
    n: "10 psychogenic ED",
    finding: "RigiScan erections; dose-related nausea/yawning",
  },
  {
    study: "Wessells 2000 organic",
    dose: "0.025 mg/kg",
    route: "SC × 2 crossover",
    n: "10 organic ED risk",
    finding: "12/19 active erections; 4/19 severe nausea",
  },
  {
    study: "Wessells 2000 review",
    dose: "0.025 mg/kg",
    route: "Pooled ED cohorts",
    n: "20 men (not new)",
    finding: "17/20 erections; 12.9% severe nausea at this dose",
  },
];

export const MT2_EVIDENCE_HIERARCHY = [
  ["Tier A — Approved MT-II label", "None", "No FDA-reviewed MT-II product"],
  ["Tier B — Controlled human studies", "0.010–0.030 mg/kg SC · ~23 unique men", "Studied exposures only"],
  ["Tier C — Case reports / forum research", "Priapism, toxicity, lesions", "Safety signals · not incidence rates"],
  ["Tier D — Preclinical", "Rat PK, feeding models", "Mechanism · not human schedule"],
  ["Tier E — Online/commercial", "0.10–0.50 mg fixed · loading/maintenance", "Documents practice · not validation"],
];

export const MT2_ANECDOTAL_PROTOCOLS = [
  {
    id: "intro",
    label: "Initial assessment",
    dose: "0.10–0.25 mg SC",
    frequency: "Daily 1–3 days",
    duration: "Short",
    basis: "Anecdotal/commercial",
  },
  {
    id: "loading",
    label: "Loading",
    dose: "0.25–0.50 mg SC",
    frequency: "Daily 7–21 days",
    duration: "1–3 weeks",
    basis: "Anecdotal · below 0.025 mg/kg at 75 kg (~1.875 mg)",
  },
  {
    id: "high",
    label: "Higher loading",
    dose: "Up to 1 mg SC",
    frequency: "Daily",
    duration: "Variable",
    basis: "Anecdotal · more AE burden reported",
  },
  {
    id: "maint",
    label: "Maintenance",
    dose: "0.25–0.50 mg SC",
    frequency: "1–3× weekly",
    duration: "Indefinite",
    basis: "Community convention · no validated endpoint",
  },
  {
    id: "trial",
    label: "Dorr pilot (research)",
    dose: "0.010–0.030 mg/kg",
    frequency: "5 active doses · alternating weekdays",
    duration: "2 weeks",
    basis: "1996 Phase I pilot · 3 men",
  },
  {
    id: "proposed-a",
    label: "Proposed Part A SAD",
    dose: "0.003–0.018 mg/kg once",
    frequency: "Single dose · 4 cohorts",
    duration: "Below historical 0.025 mg/kg",
    basis: "MT2-SAD/MAD-01 investigator protocol",
  },
];

export const MT2_CUMULATIVE_PRESETS = [
  { id: "pilot-025", label: "Pilot 0.025 mg/kg × 5 (75 kg)", type: "weight", mgPerKg: 0.025, weightKg: 75, doses: 5 },
  { id: "online-025", label: "0.25 mg QD × 14 d", type: "fixed", mgPerDose: 0.25, doses: 14 },
  { id: "online-050", label: "0.50 mg QD × 14 d", type: "fixed", mgPerDose: 0.5, doses: 14 },
  { id: "maint", label: "0.50 mg 2×/wk × 4 wk", type: "fixed", mgPerDose: 0.5, doses: 8 },
];

export const MT2_COMPARE = {
  clinical: {
    title: "Published human studies",
    status: "~23 unique men · SC only · small cohorts",
    rows: [
      ["Dose basis", "Weight-based mg/kg"],
      ["Range", "0.010–0.030 mg/kg per injection"],
      ["Most repeated", "0.025 mg/kg"],
      ["Schedule", "5 alternating weekday doses or crossover singles"],
      ["Validated maintenance", "None"],
    ],
  },
  anecdotal: {
    title: "Online practice",
    status: "Fixed mg · daily loading · often with UV",
    rows: [
      ["Typical per dose", "0.10–0.50 mg (sometimes 1 mg)"],
      ["vs 0.025 mg/kg at 75 kg", "1.875 mg trial level"],
      ["Frequency", "Daily load then weekly maintenance"],
      ["Intranasal", "No validated bioavailability"],
      ["Product control", "Often unknown identity/potency"],
    ],
  },
};

export const MT2_PRECLINICAL = [
  { model: "Rat PK", dose: "0.3 mg/kg IV", route: "Single", outcome: "Terminal t½ ~1.5 h HPLC — not human SC t½" },
  { model: "German shepherd", dose: "1 mg SC daily", route: "3 weeks", outcome: "Coat darkening — single-animal observation" },
  { model: "Rat feeding", dose: "2 mg/kg IP", route: "Daily × 4 d", outcome: "Reduced food intake/fat — not human weight-loss dose" },
  { model: "Mouse c-Fos", dose: "Model-specific", route: "Acute", outcome: "MC3R/MC4R hypophagia mechanisms" },
];

export const MT2_RECEPTOR_PATHWAYS = [
  { receptor: "MC1R (melanocytes)", effect: "cAMP → tyrosinase → eumelanin · generalized/focal pigmentation" },
  { receptor: "MC3R/MC4R (central)", effect: "Appetite suppression · yawning · nausea · sexual arousal · erection" },
  { receptor: "MC4R autonomic", effect: "Potential HR/BP effects — monitored dosing required" },
  { receptor: "MC5R / peripheral", effect: "Adds uncertainty — MT-II is not subtype-selective" },
];

export const MT2_PART_A = [
  { cohort: "A1", mgKg: 0.003, maxMg: 1.5, n: "6:2 active:placebo" },
  { cohort: "A2", mgKg: 0.006, maxMg: 1.5, n: "6:2" },
  { cohort: "A3", mgKg: 0.012, maxMg: 1.5, n: "6:2" },
  { cohort: "A4", mgKg: 0.018, maxMg: 1.5, n: "6:2" },
];

export const MT2_PART_B = [
  { cohort: "B1", mgKg: 0.006, maxMg: 1.0, schedule: "Days 1, 3, 5, 7, 9", n: "9:3" },
  { cohort: "B2", mgKg: 0.012, maxMg: 1.0, schedule: "Days 1, 3, 5, 7, 9", n: "9:3" },
];

export const MT2_CLAIMS = [
  {
    id: "fda",
    claim: "Melanotan-2 is FDA approved like afamelanotide",
    verdict: "False",
    detail: "No MT-II product or dosage has an FDA-approved label. SCENESSE and VYLEESI are separate products.",
  },
  {
    id: "250-trial",
    claim: "Human trials used 250–500 mcg daily",
    verdict: "False",
    detail: "Cited trials used weight-based mg/kg. At 75 kg, 0.025 mg/kg = 1.875 mg — not 0.25 mg.",
  },
  {
    id: "025-safe",
    claim: "0.025 mg/kg is the recommended safe dose",
    verdict: "Overstated",
    detail: "Pilot selected it for next Phase I from 3 men. All 3 had spontaneous erections; severe nausea occurred in part of ED program.",
  },
  {
    id: "loading",
    claim: "A loading phase is required for tanning",
    verdict: "Not established",
    detail: "Loading is an online convention. No regulator-reviewed MT-II loading schedule exists.",
  },
  {
    id: "nasal-equiv",
    claim: "Nasal spray equals injection dose",
    verdict: "Unvalidated",
    detail: "No human intranasal MT-II PK. TGA 2026 found large bottle-to-bottle content variation in seized sprays.",
  },
  {
    id: "uv-required",
    claim: "MT-II requires UV or sunbeds to work",
    verdict: "Misleading",
    detail: "1996 pilot documented pigmentation without standardized UV. UV adds independent cancer risk.",
  },
  {
    id: "sunscreen",
    claim: "MT-II tan prevents sunburn like sunscreen",
    verdict: "Not established",
    detail: "No reliable SPF or cancer-prevention effect. Pigmentation is incomplete photoprotection.",
  },
  {
    id: "half-life-human",
    claim: "Human half-life is 1–2 hours (proven)",
    verdict: "Extrapolated",
    detail: "Claim largely from rat IV data. Robust human SC PK model not established.",
  },
  {
    id: "pt141-stack",
    claim: "Safe to combine with PT-141 or PDE5 inhibitors",
    verdict: "Unvalidated",
    detail: "Overlapping sexual, hemodynamic, nausea, and priapism risks — no formal interaction study.",
  },
  {
    id: "vial-dose",
    claim: "A 10 mg vial means a 10 mg dose",
    verdict: "False",
    detail: "Vial mass is inventory. Independent testing found labeled 10 mg vials contained 4.32–8.84 mg MT-II.",
  },
];

export const MT2_EVIDENCE_LADDER = [
  { level: "Approved product dose", exists: "Absent", confidence: "No FDA MT-II regimen" },
  { level: "Controlled human dose", exists: "0.010–0.030 mg/kg · ~23 men", confidence: "Very limited" },
  { level: "Replicated acute dose", exists: "0.025 mg/kg in 2 ED cohorts", confidence: "Limited" },
  { level: "Human PK-defined dose", exists: "Absent", confidence: "No modern SC PK model" },
  { level: "Long-term repeated dose", exists: "Absent", confidence: "No validated chronic schedule" },
  { level: "Intranasal dose", exists: "Absent", confidence: "No validated bioavailability" },
  { level: "Cosmetic loading/maintenance", exists: "Online only", confidence: "Anecdotal" },
  { level: "Serious safety signals", exists: "Case reports", confidence: "Requires surveillance" },
];

export const MT2_AE_STUDIES = [
  { effect: "Nausea / GI cramping", context: "Across pilot; severe in part of 0.025 mg/kg ED program", note: "Dose-limiting" },
  { effect: "Yawning / stretching", context: "Dose-related pilot and ED studies", note: "Central MC effect" },
  { effect: "Somnolence / fatigue", context: "Grade 2 in 1/2 at 0.030 mg/kg", note: "Escalation boundary" },
  { effect: "Spontaneous erections", context: "All 3 at 0.025 mg/kg pilot; most in ED cohorts", note: "Priapism risk if prolonged" },
  { effect: "Pigmentation", context: "Pilot + postmarket", note: "Complicates lesion surveillance" },
];

export const MT2_AE_CASES = [
  { case: "Priapism", dose: "Reported 2 mg SC", outcome: "30-h erection · operative decompression (Mallory 2021)" },
  { case: "Rhabdomyolysis", dose: "Reported 6 mg SC online product", outcome: "Renal dysfunction (Nelson 2012)" },
  { case: "Renal infarction", dose: "MT-II associated", outcome: "Temporal association (Peters 2020)" },
  { case: "Melanoma / nevi", dose: "Often with sunbeds", outcome: "Temporal associations — causality unproven" },
  { case: "Oral pigmentation", dose: "Self-admin × 64 days", outcome: "Gingival/mucosal pigment (Bonchev 2026)" },
];

export const MT2_AE_SIMPLE = [
  {
    category: "Controlled studies",
    note: "Nausea, yawning, flushing, somnolence at 0.030 mg/kg, spontaneous erections at 0.025 mg/kg in tiny male cohorts",
  },
  {
    category: "Priapism",
    note: "Erection ≥4 h is emergency. Case report at reported 2 mg SC required surgery. Research: assess at 2 h.",
  },
  {
    category: "Product quality",
    note: "Labeled 10 mg vials: 4.32–8.84 mg actual MT-II + impurities (Breindahl 2015). Nasal sprays inconsistently dosed (TGA 2026).",
  },
  {
    category: "Skin surveillance",
    note: "Eruptive nevi, lesion darkening, melanoma case reports — often with UV and uncertain product identity",
  },
];

export const MT2_AE_FULL = [
  { domain: "Central/autonomic", items: "Nausea, vomiting, yawning, somnolence, appetite, BP/HR, flushing" },
  { domain: "Sexual / urologic", items: "Spontaneous erection duration, priapism protocol, desire scales" },
  { domain: "Dermatologic", items: "Melanin index, full-body exam, dermoscopy, new/changing lesions" },
  { domain: "Systemic toxicity", items: "CK, creatinine, urinalysis when symptomatic; rhabdomyolysis signal" },
  { domain: "Product / injection", items: "Identity, potency, sterility, endotoxin, concentration errors" },
];

export const MELANOTAN_2_DOSAGE_GUIDE = {
  title: "Melanotan-2 Dosage: Research Evidence, Human Trials, and Study Protocol",
  updated: "Updated August 2026",
  callout:
    "**Research note:** Melanotan-2 (**MT-II**, cyclic heptapeptide, MW ~1024 Da) has **no FDA-approved dose**. Human research: **0.010–0.030 mg/kg SC** in **~23 unique men**; **0.025 mg/kg** most repeated. At 75 kg that is **~1.875 mg** — not 0.25 mg. Online **0.10–0.50 mg** fixed schedules are **anecdotal**. Broad MC1R/MC3R/MC4R activity → pigmentation **and** nausea, erections, appetite effects. **≠ afamelanotide · ≠ bremelanotide.**",
  intro: [
    "Melanotan-2 is a synthetic cyclic α-MSH analogue with lactam-constrained pharmacophore and broad melanocortin receptor agonism — unlike the more MC1R-focused afamelanotide.",
    "Published human evidence is unusually small: one three-person pigmentation pilot and two ten-person erectile-dysfunction crossover studies (0.025 mg/kg SC). Online tanning protocols use fixed sub-milligram doses on daily loading schedules — not validated equivalents of the trial record.",
    "Central effects (nausea, yawning, erections, somnolence) set the practical dose ceiling alongside pigmentation. No validated intranasal dose, maintenance schedule, or long-term safety exposure exists.",
  ],
  glance: {
    title: "Melanotan-2 dosage in 30 seconds",
    table: {
      headers: ["Question", "Current answer"],
      rows: [
        ["**FDA-approved dose**", "None for MT-II"],
        ["**Human research range**", "0.010–0.030 mg/kg SC"],
        ["**Most repeated study dose**", "0.025 mg/kg SC"],
        ["**At 75 kg (0.025 mg/kg)**", "~1.875 mg per injection"],
        ["**Online fixed range**", "~0.10–0.50 mg · anecdotal"],
        ["**Unique human participants**", "~23 men total"],
        ["**Intranasal dose**", "Not validated"],
        ["**≠**", "SCENESSE · VYLEESI doses"],
      ],
    },
  },
  sections: [
    {
      id: "identity",
      title: "Compound identity",
      widget: "melanotan-2-identity-gate",
    },
    {
      id: "compare-products",
      title: "Melanotan-2 is not afamelanotide or bremelanotide",
      widget: "melanotan-2-molecule-compare",
    },
    {
      id: "units",
      title: "Dose and unit mathematics",
      widget: "melanotan-2-unit-converter",
    },
    {
      id: "weight-calc",
      title: "Weight-based dose calculator",
      widget: "melanotan-2-weight-calc",
      paragraphsAfter: [
        "Online 0.25–0.50 mg fixed doses are substantially below 0.025 mg/kg in most adults — but repeat daily with uncertain product potency.",
      ],
    },
    {
      id: "regulatory",
      title: "Regulatory context",
      paragraphs: [
        "No FDA-approved Melanotan-2 product. FDA enforcement describes MT-II marketed as unapproved injectable tanning drug. Australia: prescription-only but no ARTG-listed product; TGA 2026 reported inconsistently dosed nasal sprays.",
      ],
    },
    {
      id: "human-studies",
      title: "Dosage in human clinical research",
      paragraphs: [
        "> Study exposure — not a cosmetic, sexual-function, or long-term treatment schedule.",
      ],
      widget: "melanotan-2-human-studies",
    },
    {
      id: "pilot",
      title: "The 1996 pilot dose escalation",
      widget: "melanotan-2-pilot-escalation",
      paragraphsAfter: [
        "0.025 mg/kg was selected for future Phase I work from three men — not proof of safe repeated or unsupervised use.",
      ],
    },
    {
      id: "pk-gap",
      title: "Human pharmacokinetic gap",
      paragraphs: [
        "Pilot reports establish pharmacodynamics but not a robust modern plasma PK model. Frequently cited '1–2 hour half-life' is largely extrapolated from rat IV studies — not established human SC half-life.",
      ],
    },
    {
      id: "evidence-hierarchy",
      title: "Evidence hierarchy for dose selection",
      widget: "melanotan-2-evidence-hierarchy",
    },
    {
      id: "protocols",
      title: "Commonly reported online protocols",
      widget: "melanotan-2-anecdotal-protocols",
    },
    {
      id: "cumulative",
      title: "Cumulative exposure examples",
      widget: "melanotan-2-cumulative-calc",
    },
    {
      id: "compare",
      title: "Anecdotal versus clinically studied dosing",
      widget: "melanotan-2-clinical-vs-anecdotal",
    },
    {
      id: "preclinical",
      title: "Preclinical research dosage",
      widget: "melanotan-2-preclinical-doses",
    },
    {
      id: "mechanism",
      title: "Mechanism relevant to dosage",
      widget: "melanotan-2-receptor-pathways",
      paragraphsAfter: [
        "A dose chosen for pigmentation cannot be assumed to avoid central sexual, autonomic, or appetite effects.",
      ],
    },
    {
      id: "safety-studies",
      title: "Effects in controlled human studies",
      widget: "melanotan-2-study-adverse-events",
    },
    {
      id: "safety",
      title: "Safety, case reports, and monitoring",
      widget: "melanotan-2-adverse-events",
    },
    {
      id: "escalation",
      title: "Dose escalation",
      paragraphs: [
        "Historical escalation: 0.010 → 0.030 mg/kg in three men. Modern design should use cohort-based sentinel dosing below 0.025 mg/kg if pigment PD can be measured. 'Start low and add until tan' is not a research rule.",
      ],
    },
    {
      id: "protocol",
      title: "Complete proposed Phase I research protocol",
      paragraphs: [
        "**MT2-SAD/MAD-01:** Part A SAD 0.003–0.018 mg/kg (4 cohorts, 6:2) · Part B MAD 0.006/0.012 mg/kg on days 1,3,5,7,9 · 56 participants · UV-free · no home dosing · no nasal route.",
      ],
      widget: "melanotan-2-protocol-timeline",
    },
    {
      id: "claims",
      title: "Claims versus evidence",
      widget: "melanotan-2-claim-checker",
    },
    {
      id: "evidence-ladder",
      title: "Dosage evidence ladder",
      widget: "melanotan-2-evidence-ladder",
    },
    {
      id: "bottom-line",
      title: "Bottom line",
      paragraphs: [
        "Melanotan-2 human dosing is documented only in **~23 men** at **0.010–0.030 mg/kg SC** — with **0.025 mg/kg** causing spontaneous erections in all three pilot volunteers and severe nausea in part of the ED program.",
        "Online **0.10–0.50 mg** fixed loading/maintenance schedules are **not validated** clinical regimens. A defensible next study uses **GMP product**, **cohort escalation below 0.025 mg/kg**, dense PK/PD, and **no intentional UV** — not consumer vial titration.",
      ],
      highlight:
        "No FDA dose · 0.025 mg/kg ≈ 1.875 mg at 75 kg · online 0.25 mg ≠ trial dose · priapism surveillance essential.",
    },
  ],
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        question: "Is Melanotan-2 FDA approved?",
        answer:
          "No MT-II product or dosage has an FDA-approved label. Afamelanotide and bremelanotide have separate approved products.",
      },
      {
        question: "What dose was used in human trials?",
        answer:
          "The first pilot used 0.010–0.030 mg/kg SC. Two erectile-function studies used 0.025 mg/kg SC.",
      },
      {
        question: "Is 0.025 mg/kg a recommended dose?",
        answer:
          "It was the pilot investigators' selection for later Phase I from three men — not a general recommended dose.",
      },
      {
        question: "Did trials use 250–500 mcg daily?",
        answer:
          "Not in cited human trials. Fixed 0.25–0.50 mg schedules come from online protocols.",
      },
      {
        question: "Is nasal Melanotan-2 equivalent to injection?",
        answer:
          "No validated intranasal bioavailability. TGA found large content variation in seized nasal products.",
      },
      {
        question: "Does MT-II require UV to work?",
        answer:
          "The 1996 pilot documented pigmentation without standardized intentional UV. UV adds independent skin damage risk.",
      },
      {
        question: "Why does it affect erections and appetite?",
        answer:
          "Broad MC3R/MC4R central agonism in addition to MC1R-mediated pigmentation.",
      },
      {
        question: "What is the maximum safe dose?",
        answer:
          "Not established. Grade 2 somnolence at 0.030 mg/kg in one of two men; serious case reports at reported 2–6 mg fixed doses.",
      },
      {
        question: "Can it be combined with PT-141 or PDE5 inhibitors?",
        answer:
          "No validated combined dose. Overlapping priapism, hemodynamic, and nausea risks.",
      },
      {
        question: "Does a 10 mg vial mean a 10 mg dose?",
        answer:
          "No. Independent testing found labeled 10 mg vials often contained substantially less MT-II.",
      },
    ],
  },
  sources: {
    title: "References",
    items: [
      {
        authors: "Dorr RT et al.",
        title: "MT-II Phase I pilot 1996",
        detail: "0.010–0.030 mg/kg · 3 men · pigmentation + erections.",
        href: "https://pubmed.ncbi.nlm.nih.gov/8637402/",
      },
      {
        authors: "Wessells H et al.",
        title: "MT-II erectile function studies",
        detail: "0.025 mg/kg SC · crossover · RigiScan.",
        href: "https://pubmed.ncbi.nlm.nih.gov/9679884/",
      },
      {
        authors: "FDA",
        title: "Melanotan II enforcement record",
        detail: "Unapproved injectable tanning drug.",
        href: "https://www.fda.gov/regulatory-information/electronic-reading-room/notice-opportunity-hearing-nooh-manookian-edward-8516",
      },
      {
        authors: "TGA",
        title: "Melanotan II dosing alert 2026",
        detail: "Inconsistent nasal spray content.",
        href: "https://www.tga.gov.au/safety/safety-monitoring-and-information/safety-alerts/melanotan-ii-tanning-peptide-products-found-be-inconsistently-dosed",
      },
      {
        authors: "Breindahl T et al.",
        title: "Online vial content analysis",
        detail: "4.32–8.84 mg in labeled 10 mg vials.",
        href: "https://pubmed.ncbi.nlm.nih.gov/24771717/",
      },
      {
        authors: "Gilhooley EJ et al.",
        title: "Forum qualitative study 2021",
        detail: "623 entries · variable dosing behavior.",
        href: "https://pubmed.ncbi.nlm.nih.gov/34464955/",
      },
    ],
  },
};
