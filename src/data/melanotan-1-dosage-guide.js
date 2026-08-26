/**
 * Melanotan-1 / afamelanotide dosage guide.
 * SCENESSE: 16 mg PLGA implant q2mo (EPP). Historical injection: 0.08–0.16 mg/kg SC.
 * ≠ Melanotan II · ≠ reconstituted vial · implant ≠ bolus.
 */

export const MT1_MW = 1646.85;
export const MT1_NMOL_TO_MCG = 1.6469;
export const SCENESSE_IMPLANT_MG = 16;
export const SCENESSE_INTERVAL_DAYS = 56;

export function mt1NmolToMcg(nmol) {
  const n = Number(nmol);
  if (!Number.isFinite(n)) return null;
  return n * MT1_NMOL_TO_MCG;
}

export function mt1WeightDose({ mgPerKg, weightKg }) {
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

export function mt1ImplantAnnualMass({ implantsPerYear = 6 }) {
  const n = Number(implantsPerYear);
  if (!Number.isFinite(n) || n <= 0) return null;
  return {
    implantsPerYear: n,
    totalMg: SCENESSE_IMPLANT_MG * n,
    intervalDays: SCENESSE_INTERVAL_DAYS,
  };
}

export function mt1CumulativeExposure({ mcgPerDose, dosesPerDay, days }) {
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
  return {
    mcgPerDose: dose,
    dosesPerDay: freq,
    days: d,
    dailyMcg,
    totalMcg,
    totalMg: totalMcg / 1000,
  };
}

export const MT1_IDENTITY = [
  {
    id: "mt1",
    label: "Melanotan-1 / afamelanotide",
    verdict: "This page's subject — [Nle⁴,D-Phe⁷]-α-MSH · MC1R agonist",
    detail:
      "MW ~1646.85 Da · 13-mer · approved as SCENESSE 16 mg controlled-release implant for adult EPP. Development names: MT-1, MT-I.",
  },
  {
    id: "mt2",
    label: "Melanotan II",
    verdict: "Different peptide — cyclic heptapeptide · broader receptor activity",
    detail:
      "MW ~1024 Da · no FDA approval · nausea, appetite, sexual effects common. Product labeled 'melanotan' often uncertain identity.",
  },
  {
    id: "pt141",
    label: "Bremelanotide (PT-141)",
    verdict: "Related melanocortin — separate FDA product and indication",
    detail: "Cyclic agonist for HSDD in premenopausal women — not interchangeable dose or route with afamelanotide.",
  },
  {
    id: "vial",
    label: "Reconstituted 'Melanotan-1' vial",
    verdict: "Not SCENESSE — does not inherit approved dose or formulation",
    detail: "Lyophilized injection vials sold online lack PLGA release kinetics, GMP implant procedure, and EPP indication.",
  },
];

export const MT1_MOLECULE_COMPARE = [
  { feature: "Structure", mt1: "Linear 13-mer · acetylated/amidated", mt2: "Cyclic heptapeptide" },
  { feature: "MW", mt1: "~1646.85 Da", mt2: "~1024.18 Da" },
  { feature: "Receptor profile", mt1: "Predominantly MC1R", mt2: "Broader melanocortin receptors" },
  { feature: "U.S. approval", mt1: "SCENESSE for adult EPP", mt2: "None" },
  { feature: "Typical online form", mt1: "Lyophilized vial/spray", mt2: "Lyophilized vial/spray" },
];

export const MT1_MGKG_CONVERSION = [
  { mgKg: 0.08, kg60: 4.8, kg75: 6.0, kg90: 7.2 },
  { mgKg: 0.16, kg60: 9.6, kg75: 12.0, kg90: 14.4 },
  { mgKg: 0.21, kg60: 12.6, kg75: 15.75, kg90: 18.9 },
  { mgKg: 0.26, kg60: 15.6, kg75: 19.5, kg90: 23.4 },
  { mgKg: 0.4, kg60: 24.0, kg75: 30.0, kg90: 36.0 },
];

export const MT1_WEIGHT_PRESETS = [
  { id: "008", label: "0.08 mg/kg", mgPerKg: 0.08 },
  { id: "016", label: "0.16 mg/kg (plateau)", mgPerKg: 0.16 },
  { id: "026", label: "0.26 mg/kg", mgPerKg: 0.26 },
  { id: "040", label: "0.40 mg/kg (max tested)", mgPerKg: 0.4 },
];

export const MT1_IMPLANT_VS_INJECTION = {
  implant: {
    title: "SCENESSE 16 mg controlled-release implant",
    status: "FDA-approved · EPP · every 2 months",
    rows: [
      ["Dose", "16 mg afamelanotide (18 mg acetate) in PLGA"],
      ["Cmax", "3.7 ± 1.3 ng/mL (mean)"],
      ["Tmax", "Median 36 hours"],
      ["Apparent t½", "~15 hours"],
      ["Measurable plasma", "Last detectable ~96 h in most subjects"],
      ["Procedure", "Healthcare professional · supra-iliac crest"],
    ],
  },
  injection: {
    title: "Historical soluble SC injection",
    status: "Investigational · short-acting · not current approved dose",
    rows: [
      ["Common range", "0.08–0.16 mg/kg per dose"],
      ["Absorption t½", "0.07–0.79 hours"],
      ["Terminal t½", "0.8–1.7 hours"],
      ["Typical course", "10–20 SC doses over 2–4 weeks"],
      ["Pigment peak", "~1 week after course; persists weeks"],
      ["≠ implant", "16 mg ÷ 60 days is not a valid conversion"],
    ],
  },
};

export const MT1_HUMAN_STUDIES = [
  {
    study: "Levine 1991",
    dose: "0.08 mg/kg",
    route: "SC × 10/12 d",
    n: "28 men",
    finding: "First controlled evidence MT-1 darkens human skin",
  },
  {
    study: "Ugwu 1997",
    dose: "0.08–0.21 mg/kg SC/IV; oral",
    route: "SC/IV/oral crossover",
    n: "3 men",
    finding: "SC ~complete bioavailability; oral undetectable; pigment persists",
  },
  {
    study: "Levine 1999",
    dose: "0.16 / 0.26 / 0.40 mg/kg",
    route: "SC daily × 10 d",
    n: "8 men",
    finding: "No better tanning above 0.16 mg/kg; more GI/fatigue higher",
  },
  {
    study: "Dorr 2000",
    dose: "0.16 mg/kg/day",
    route: "SC M–F × 2 wk",
    n: "7 volunteers",
    finding: "Eumelanin +49% forehead, +98% forearm at 1 wk post",
  },
  {
    study: "Dorr 2004",
    dose: "0.08–0.16 mg/kg/day",
    route: "SC + UV-B/sunlight protocols",
    n: "Multiple protocols",
    finding: "Photoprotection endpoints; small phase 1 studies",
  },
  {
    study: "Barnetson 2006",
    dose: "0.16 mg/kg",
    route: "3 × 10-d SC cycles/3 mo",
    n: "65 fair-skinned",
    finding: "Increased melanin density; reduced UV DNA damage endpoints",
  },
  {
    study: "CUV039",
    dose: "16 mg implant",
    route: "SC q60 d × 3",
    n: "93 EPP adults",
    finding: "64.1 vs 40.5 h pain-free direct sun (median)",
  },
  {
    study: "CUV029",
    dose: "16 mg implant",
    route: "SC q60 d × 5",
    n: "74 EPP adults",
    finding: "6.0 vs 0.75 h narrower sun endpoint (median)",
  },
  {
    study: "Lim 2015 vitiligo",
    dose: "16 mg implant",
    route: "Monthly × 4 mo + NB-UVB",
    n: "55 adults",
    finding: "Faster repigmentation vs NB-UVB alone — investigational interval",
  },
  {
    study: "Biolcati 2015",
    dose: "16 mg implant",
    route: "Long-term EPP care",
    n: "115 · 1,023 implants",
    finding: "Sustained QoL up to 8 years; mostly minor AEs",
  },
];

export const MT1_EVIDENCE_HIERARCHY = [
  ["Tier A — U.S. approved label", "SCENESSE 16 mg q2mo · EPP", "Established clinical use of named product"],
  ["Tier B — Randomized trials", "CUV039/CUV029 EPP; vitiligo combo", "Investigational in studied populations"],
  ["Tier C — Small PK/dose-ranging", "0.08–0.40 mg/kg injection studies", "Hypothesis generation · bounded selection"],
  ["Tier D — Preclinical", "Rat toxicology to 20 mg/kg/day", "Mechanism/toxicology · not human schedule"],
  ["Tier E — Online/commercial", "0.05–2 mg fixed SC claims", "Documents practice · not proof of safety/efficacy"],
];

export const MT1_ANECDOTAL_PROTOCOLS = [
  {
    id: "very-low",
    label: "Very-low introduction",
    dose: "50–250 mcg SC",
    frequency: "Daily several days",
    duration: "Variable",
    basis: "Anecdotal · no matching controlled MT-1 trial",
  },
  {
    id: "loading",
    label: "Fixed loading",
    dose: "250–500 mcg SC",
    frequency: "Daily 7–14 days",
    duration: "1–2 weeks",
    basis: "Commercial/community · 12–48× lower than 0.16 mg/kg at 75 kg",
  },
  {
    id: "high-load",
    label: "High fixed loading",
    dose: "1–2 mg SC",
    frequency: "Daily or divided",
    duration: "~10 days",
    basis: "Anecdotal · no standardized product",
  },
  {
    id: "maintenance",
    label: "Maintenance",
    dose: "100–1,000 mcg SC",
    frequency: "1–3× weekly",
    duration: "Indefinite",
    basis: "Anecdotal · no validated endpoint",
  },
  {
    id: "scenesse",
    label: "SCENESSE (approved)",
    dose: "16 mg implant",
    frequency: "Every 2 months",
    duration: "Ongoing per label",
    basis: "FDA label · adult EPP · trained HCP",
  },
  {
    id: "proposed",
    label: "Proposed AFM-EPP-OPT trial",
    dose: "12 vs 16 mg implant",
    frequency: "Every 56 days × 4",
    duration: "32 weeks",
    basis: "Investigator protocol · dose optimization in EPP",
  },
];

export const MT1_CUMULATIVE_PRESETS = [
  { id: "250x10", label: "250 mcg QD × 10 d", mcgPerDose: 250, freq: 1, days: 10 },
  { id: "500x14", label: "500 mcg QD × 14 d", mcgPerDose: 500, freq: 1, days: 14 },
  { id: "1mgx10", label: "1 mg QD × 10 d", mcgPerDose: 1000, freq: 1, days: 10 },
  { id: "016x10", label: "0.16 mg/kg QD × 10 d (75 kg)", type: "weight", mgPerKg: 0.16, weightKg: 75, days: 10 },
  { id: "3implant", label: "Three 16 mg implants", type: "implant", count: 3 },
  { id: "6implant", label: "Six 16 mg implants (1 yr q2mo)", type: "implant", count: 6 },
];

export const MT1_COMPARE = {
  clinical: {
    title: "Human research record",
    status: "Formulation-specific · weight-based injection or fixed implant",
    rows: [
      ["Approved implant", "16 mg q2mo · EPP adults"],
      ["Injection range", "0.08–0.16 mg/kg · 10–20 doses"],
      ["Dose plateau", "0.16 mg/kg — no added tanning above (n=8)"],
      ["Oral route", "No detectable levels (n=3)"],
      ["Intranasal", "None validated"],
    ],
  },
  anecdotal: {
    title: "Online fixed-dose conventions",
    status: "Often 12–48× lower than historical mg/kg trials",
    rows: [
      ["Typical per dose", "0.05–2 mg (50–2000 mcg)"],
      ["Loading", "7–21 days common"],
      ["Maintenance", "1–3× weekly indefinite"],
      ["UV pairing", "Often sun/sunbeds — not label recommendation"],
      ["Product identity", "Frequently unverified vs MT-II"],
    ],
  },
};

export const MT1_PRECLINICAL = [
  { model: "Rat embryofetal", dose: "0.2–20 mg/kg/day SC", outcome: "No adverse effect through 20 mg/kg/day in label studies" },
  { model: "Rat pre/postnatal", dose: "0.2–20 mg/kg/day SC", outcome: "No treatment-related developmental effect" },
  { model: "Rat fertility", dose: "Up to 20 mg/kg/day SC", outcome: "No adverse fertility effect in label package" },
  { model: "Genotoxicity", dose: "Assay-specific", outcome: "Negative Ames, lymphoma, micronucleus — carcinogenicity not conducted" },
];

export const MT1_LABELED_AE = [
  { reaction: "Implant-site reaction", drug: "21%", vehicle: "10%" },
  { reaction: "Nausea", drug: "19%", vehicle: "14%" },
  { reaction: "Oropharyngeal pain", drug: "7%", vehicle: "5%" },
  { reaction: "Cough", drug: "6%", vehicle: "3%" },
  { reaction: "Fatigue", drug: "6%", vehicle: "3%" },
  { reaction: "Skin hyperpigmentation", drug: "4%", vehicle: "0%" },
  { reaction: "Dizziness", drug: "4%", vehicle: "3%" },
  { reaction: "Melanocytic nevus", drug: "4%", vehicle: "2%" },
];

export const MT1_PROTOCOL_ARMS = [
  { arm: "A — investigational", dose: "12 mg CR implant", schedule: "Day 0, 56, 112, 168", total: "48 mg" },
  { arm: "B — active control", dose: "16 mg CR implant", schedule: "Day 0, 56, 112, 168", total: "64 mg" },
];

export const MT1_CLAIMS = [
  {
    id: "fda-approved",
    claim: "Melanotan-1 is FDA approved for tanning",
    verdict: "Misleading",
    detail: "Afamelanotide is approved only as SCENESSE 16 mg implant for adult EPP — not reconstituted vial cosmetic tanning.",
  },
  {
    id: "250-standard",
    claim: "250–500 mcg daily is what human trials used",
    verdict: "False",
    detail: "Key injection trials used 0.08–0.16 mg/kg — at 75 kg, 0.16 mg/kg = 12 mg per injection, not 0.16 mg total.",
  },
  {
    id: "implant-bolus",
    claim: "16 mg implant equals 16 mg injection",
    verdict: "False",
    detail: "PLGA changes release rate, Cmax, Tmax, and half-life. Mass alone does not establish equivalence.",
  },
  {
    id: "divide-implant",
    claim: "Cut a 16 mg implant for a lower dose",
    verdict: "Unsafe / invalid",
    detail: "Cutting alters dose content, sterility, integrity, and release kinetics. Lower dose requires separate GMP manufacture.",
  },
  {
    id: "no-uv",
    claim: "Afamelanotide requires UV or sunbeds to work",
    verdict: "Contradicted by label",
    detail: "U.S. label states eumelanin increases independently of sunlight or artificial UV. UV adds independent carcinogenic risk.",
  },
  {
    id: "sunscreen-replace",
    claim: "Afamelanotide tan prevents sunburn like sunscreen",
    verdict: "Overstated",
    detail: "Pigmentation provides incomplete, variable protection. Sunscreen, clothing, and shade remain necessary.",
  },
  {
    id: "escalate-tan",
    claim: "Keep increasing dose until desired color",
    verdict: "Not evidence-based",
    detail: "0.26 and 0.40 mg/kg caused more GI/fatigue without better tanning than 0.16 mg/kg in the dose-ranging study.",
  },
  {
    id: "mt2-stack",
    claim: "Stack MT-1 and MT-II for faster results",
    verdict: "Unvalidated",
    detail: "No established combination dose, benefit-risk evidence, or product identity assurance.",
  },
  {
    id: "oral-in",
    claim: "Oral or intranasal Melanotan-1 is proven",
    verdict: "Not established",
    detail: "Oral produced no detectable levels in crossover study. No validated intranasal dose or bioavailability.",
  },
  {
    id: "vial-dose",
    claim: "A 10 mg vial means a 10 mg dose",
    verdict: "False",
    detail: "Vial mass is inventory. Dose requires verified identity, concentration, route, and schedule.",
  },
];

export const MT1_EVIDENCE_LADDER = [
  { level: "U.S. label + EPP RCTs", exists: "16 mg implant q2mo", confidence: "Established" },
  { level: "Other dermatologic RCTs", exists: "Monthly 16 mg + NB-UVB vitiligo", confidence: "Investigational" },
  { level: "Early injection PK/dose-ranging", exists: "0.08–0.16 mg/kg repeated SC", confidence: "Historical · small samples" },
  { level: "Long-term observational EPP", exists: "16 mg implant cohorts", confidence: "Supports tolerability" },
  { level: "Preclinical toxicology", exists: "Rat studies to 20 mg/kg/day", confidence: "Mechanistic · not consumer dose" },
  { level: "Online fixed-dose protocols", exists: "0.05–2 mg SC claims", confidence: "Not validated" },
];

export const MT1_AE_SIMPLE = [
  {
    category: "Labeled implant trials (EPP)",
    note: "Implant-site reaction 21%, nausea 19%, fatigue 6%, skin hyperpigmentation 4%, melanocytic nevus 4% — vs vehicle in 3 RCTs",
  },
  {
    category: "Hypersensitivity",
    note: "Postmarketing urticaria, angioedema, anaphylaxis — 30-min observation required; discontinue after serious reaction",
  },
  {
    category: "Pigment surveillance",
    note: "Full-body skin exam twice yearly recommended — nevi and freckles may darken; new lesions require assessment",
  },
  {
    category: "Online vial risks",
    note: "MT-II substitution, potency errors, endotoxin/contamination, concentration confusion — not captured by SCENESSE label alone",
  },
];

export const MT1_AE_FULL = [
  {
    domain: "Implant procedure",
    items: "Bruising, bleeding, nodule, expulsion, infection; anticoagulant bleeding risk",
  },
  {
    domain: "Systemic",
    items: "Nausea, oropharyngeal pain, fatigue, dizziness, somnolence",
  },
  {
    domain: "Pigment / dermatology",
    items: "Generalized hyperpigmentation, darkening nevi, new lesions — dermoscopy/biopsy when indicated",
  },
  {
    domain: "Product quality (illicit)",
    items: "Wrong peptide, aggregates, nonsterile reconstitution, sharps exposure",
  },
];

export const MELANOTAN_1_DOSAGE_GUIDE = {
  title: "Melanotan-1 (Afamelanotide) Dosage: SCENESSE Label, Injection Research, and Study Protocol",
  updated: "Updated August 2026",
  callout:
    "**Research note:** Melanotan-1 = **afamelanotide** ([Nle⁴,D-Phe⁷]-α-MSH). **FDA-established dose:** **SCENESSE 16 mg controlled-release implant every 2 months** for adult **EPP** — not a reconstituted tanning vial. Historical injection research: **0.08–0.16 mg/kg SC** (0.16 mg/kg = **12 mg** at 75 kg, not 0.16 mg). Online **50–500 mcg** schedules are **12–48× lower** than trial amounts. **Implant ≠ bolus.** **≠ Melanotan II.**",
  intro: [
    "Afamelanotide binds predominantly to MC1R and increases cutaneous eumelanin. Formulation governs exposure: a PLGA implant, soluble SC injection, and online reconstituted vial are not interchangeable.",
    "The approved product SCENESSE delivers 16 mg over controlled release (median Tmax 36 h, apparent t½ ~15 h). Early soluble injections had terminal half-lives of 0.8–1.7 hours but pigmentation persisted after dosing ended.",
    "Increased pigmentation does not make deliberate UV or sunbed exposure safe. The EPP label requires continued sun and light protection measures.",
  ],
  glance: {
    title: "Melanotan-1 dosage in 30 seconds",
    table: {
      headers: ["Question", "Current answer"],
      rows: [
        ["**Approved product**", "SCENESSE 16 mg implant"],
        ["**Approved schedule**", "Every 2 months · adult EPP"],
        ["**Injection research range**", "0.08–0.16 mg/kg SC"],
        ["**Tanning plateau**", "0.16 mg/kg — no gain above (n=8)"],
        ["**Online fixed dose**", "~0.05–2 mg · anecdotal"],
        ["**Oral / intranasal**", "Not validated"],
        ["**16 mg implant = injection?**", "No — release kinetics differ"],
        ["**≠**", "Melanotan II · cosmetic vial dose"],
      ],
    },
  },
  sections: [
    {
      id: "identity",
      title: "Compound identity",
      widget: "melanotan-1-identity-gate",
      paragraphs: [
        "Reproducible records require full modified sequence, free peptide vs acetate, peptide content, intact mass, purity, and formulation-specific release data.",
      ],
    },
    {
      id: "mt2",
      title: "Melanotan-1 is not Melanotan II",
      widget: "melanotan-1-molecule-compare",
      paragraphsAfter: [
        "Case reports involving illicit 'melanotan' often describe MT-II or uncertain products — attribution to MT-1 requires verified identity.",
      ],
    },
    {
      id: "units",
      title: "Dose and unit mathematics",
      widget: "melanotan-1-unit-converter",
      paragraphs: [
        "Five common errors: mcg vs mg; mg/kg vs fixed mg; implant mass vs bolus; base vs acetate/vial mass; syringe units without verified concentration.",
      ],
    },
    {
      id: "weight-calc",
      title: "Weight-based injection calculator",
      widget: "melanotan-1-weight-calc",
      paragraphsAfter: [
        "At 75 kg, 0.16 mg/kg = 12 mg per injection — explaining why online 250–500 mcg schedules are not simplified trial doses.",
      ],
    },
    {
      id: "formulation",
      title: "Controlled-release implant versus soluble injection",
      widget: "melanotan-1-implant-vs-injection",
      paragraphs: [
        "Never convert 16 mg implant to daily injection by dividing by 60 days. That ignores PLGA release kinetics and creates an unvalidated bridge.",
      ],
    },
    {
      id: "regulatory",
      title: "Regulatory context",
      paragraphs: [
        "U.S.: SCENESSE approved 2019 for adult EPP — 16 mg implant q2mo by trained HCP, 30-min post-observation. EU: similar with seasonal guidance (max 4 implants/year in EPAR). Accurate statement: afamelanotide is approved as the named implant for EPP; online injectable tanning products are not that approved use.",
      ],
    },
    {
      id: "human-studies",
      title: "Dosage in human clinical research",
      paragraphs: [
        "> Study exposure — not a universal schedule. Formulation, route, population, and light exposure are integral to every result.",
      ],
      widget: "melanotan-1-human-studies",
    },
    {
      id: "plateau",
      title: "The 0.16 mg/kg plateau",
      paragraphs: [
        "Levine 1999: 0.16, 0.26, and 0.40 mg/kg daily × 10 days in eight men — all tanned, but no improvement above 0.16 mg/kg. Higher doses increased GI upset and fatigue.",
      ],
    },
    {
      id: "evidence-hierarchy",
      title: "Evidence hierarchy for dose selection",
      widget: "melanotan-1-evidence-hierarchy",
    },
    {
      id: "protocols",
      title: "Commonly reported online protocols",
      widget: "melanotan-1-anecdotal-protocols",
    },
    {
      id: "cumulative",
      title: "Cumulative exposure examples",
      widget: "melanotan-1-cumulative-calc",
    },
    {
      id: "compare",
      title: "Anecdotal versus clinically studied dosing",
      widget: "melanotan-1-clinical-vs-anecdotal",
    },
    {
      id: "preclinical",
      title: "Preclinical research dosage",
      widget: "melanotan-1-preclinical-doses",
    },
    {
      id: "mechanism",
      title: "Mechanism relevant to dosage",
      paragraphs: [
        "MC1R → cAMP → melanogenic machinery → eumelanin → melanosome transfer. Pigment outlasts plasma drug after soluble injection. MC1R activation does not instantly deposit color — pre-UV bolus claims lack support.",
      ],
    },
    {
      id: "labeled-ae",
      title: "Labeled adverse reactions (EPP implant trials)",
      widget: "melanotan-1-labeled-adverse-events",
    },
    {
      id: "safety",
      title: "Safety, side effects, and monitoring",
      widget: "melanotan-1-adverse-events",
    },
    {
      id: "escalation",
      title: "Dose escalation",
      paragraphs: [
        "Historical injection evidence argues against open-ended escalation above 0.16 mg/kg. The approved implant has no labeled titration. 'Start low and add until tan' is not a research rule — pigment is a delayed endpoint.",
      ],
    },
    {
      id: "protocol",
      title: "Complete proposed dose-optimization protocol",
      paragraphs: [
        "**AFM-EPP-OPT:** Phase 2b randomized, double-blind, active-controlled trial — **12 mg vs 16 mg** controlled-release implant every **56 days × 4** over 32 weeks in adults with EPP. Primary: noninferior pain-free light exposure. **12 mg rod must be separately manufactured — never cut a 16 mg implant.**",
      ],
      widget: "melanotan-1-protocol-timeline",
    },
    {
      id: "claims",
      title: "Claims versus evidence",
      widget: "melanotan-1-claim-checker",
    },
    {
      id: "evidence-ladder",
      title: "Dosage evidence ladder",
      widget: "melanotan-1-evidence-ladder",
    },
    {
      id: "bottom-line",
      title: "Bottom line",
      paragraphs: [
        "Melanotan-1 and afamelanotide are the same peptide, but product names do not make formulations interchangeable. The only FDA-established dosage is **SCENESSE 16 mg every 2 months for adult EPP**.",
        "Classic injection literature used **0.08–0.16 mg/kg** short courses — not the **0.25–1 mg** fixed doses commonly promoted online. A defensible next study optimizes the controlled-release implant (12 vs 16 mg), not a home injection schedule inferred from vial size.",
      ],
      highlight:
        "16 mg implant q2mo · 0.16 mg/kg SC plateau · online mcg ≠ trial mg/kg · implant ≠ bolus.",
    },
  ],
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        question: "Is Melanotan-1 the same as afamelanotide?",
        answer:
          "Yes. Melanotan-1 was the development name. The approved product is SCENESSE.",
      },
      {
        question: "Is Melanotan-1 FDA approved?",
        answer:
          "Afamelanotide is FDA approved only as the 16 mg SCENESSE implant for adults with EPP. Online vials for tanning are not that product.",
      },
      {
        question: "What is the approved dose?",
        answer:
          "One 16 mg controlled-release implant subcutaneously every 2 months by a trained healthcare professional.",
      },
      {
        question: "Is the 16 mg implant equivalent to a 16 mg injection?",
        answer:
          "No. PLGA formulation changes release rate, peak concentration, and half-life.",
      },
      {
        question: "What injection dose was used in human trials?",
        answer:
          "Most often 0.08–0.16 mg/kg SC for 10–20 doses. One dose-ranging trial tested up to 0.40 mg/kg with no added tanning above 0.16 mg/kg.",
      },
      {
        question: "Did research use 250–500 mcg daily?",
        answer:
          "Not in key published trials. Those microgram amounts are common online but much lower than weight-based milligram doses for an average adult.",
      },
      {
        question: "Does it work without UV?",
        answer:
          "The U.S. label states eumelanin increases independently of sunlight or artificial UV.",
      },
      {
        question: "Can Melanotan-1 be combined with Melanotan II?",
        answer:
          "No validated combination dose or demonstrated benefit-risk advantage exists.",
      },
      {
        question: "Can a 16 mg implant be cut for a lower dose?",
        answer:
          "No. A lower-dose arm requires a separately manufactured and tested implant.",
      },
      {
        question: "Does a 10 mg vial mean a 10 mg dose?",
        answer:
          "No. Vial mass is inventory. Complete dose requires verified identity, concentration, route, and schedule.",
      },
    ],
  },
  sources: {
    title: "References",
    items: [
      {
        authors: "DailyMed",
        title: "SCENESSE prescribing information",
        detail: "16 mg implant · EPP · PK · adverse reactions.",
        href: "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=94f53286-11dd-7fbb-e053-2a95a90a7c48",
      },
      {
        authors: "Levine N et al.",
        title: "MT-1 dose-ranging 1999",
        detail: "0.16 mg/kg plateau · GI/fatigue at higher doses.",
        href: "https://doi.org/10.3109/09546639909056014",
      },
      {
        authors: "Ugwu SO et al.",
        title: "MT-1 PK and pigmentation 1997",
        detail: "SC bioavailability · oral undetectable.",
        href: "https://pubmed.ncbi.nlm.nih.gov/9113347/",
      },
      {
        authors: "Langendonk JG et al.",
        title: "Afamelanotide for EPP (CUV039)",
        detail: "16 mg implant q60 d · NEJM 2015.",
        href: "https://pubmed.ncbi.nlm.nih.gov/26132941/",
      },
      {
        authors: "Lim HW et al.",
        title: "Vitiligo + NB-UVB trial 2015",
        detail: "Monthly 16 mg × 4 — investigational interval.",
        href: "https://pubmed.ncbi.nlm.nih.gov/25230094/",
      },
      {
        authors: "TGA",
        title: "Melanotan tanning product warning",
        detail: "Counterfeit/poor quality risk.",
        href: "https://www.tga.gov.au/news/blog/dont-risk-using-tanning-products-containing-melanotan",
      },
    ],
  },
};
