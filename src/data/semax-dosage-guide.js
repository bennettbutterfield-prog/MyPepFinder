/**
 * Semax (MEHFPGP) dosage guide.
 * 0.1% = 1 mg/mL ≈ 50 mcg/drop · 1% = 10 mg/mL ≈ 500 mcg/drop (tenfold).
 * Russian 0.1% mental fatigue: 400–900 mcg/day × 3–5 d. 1% stroke: 6–20 mg/day — not cognitive precedent.
 * ≠ N-acetyl Semax · ≠ amidated · ≠ Adamax. No validated human SC dose (FDA 2026).
 */

export const SEMAX_MW = 813.93;
export const SEMAX_ACETATE_MW = 874.0;
export const SEMAX_DROP_VOLUME_ML = 0.05;

export function semaxMcgPerDrop(concentrationPct) {
  const pct = Number(concentrationPct);
  if (!Number.isFinite(pct) || pct <= 0) return null;
  const mgPerMl = pct * 10;
  return mgPerMl * SEMAX_DROP_VOLUME_ML * 1000;
}

export function semaxDropDose({ drops, concentrationPct = 0.1 }) {
  const n = Number(drops);
  const mcgPerDrop = semaxMcgPerDrop(concentrationPct);
  if (!Number.isFinite(n) || n <= 0 || mcgPerDrop == null) return null;
  return {
    drops: n,
    concentrationPct,
    mcgPerDrop,
    totalMcg: n * mcgPerDrop,
    totalMg: (n * mcgPerDrop) / 1000,
  };
}

export function semaxCumulativeExposure({ mcgPerDose, dosesPerDay, days }) {
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

export const SEMAX_IDENTITY = [
  {
    id: "semax",
    label: "Semax (H-MEHFPGP-OH)",
    verdict: "This page's subject — ACTH(4–7)-PGP analog MEHFPGP",
    detail:
      "MW ~813.93 Da · C37H51N9O10S · PubChem CID 9811102 · CAS 80714-61-0. Russian 0.1% and 1% intranasal medicinal products refer to unmodified Semax.",
  },
  {
    id: "acetate",
    label: "Semax acetate",
    verdict: "Salt form — requires peptide-content correction vs free base",
    detail:
      "Reported acetate MW ~874 Da. Certificate calling material “Semax acetate” while reporting free-peptide mass is internally inconsistent.",
  },
  {
    id: "n-acetyl",
    label: "N-acetyl Semax",
    verdict: "Different chemical entity — no established dose conversion",
    detail: "N-terminal acetylation changes identity. Research on one analog cannot be assigned to unmodified Semax.",
  },
  {
    id: "amidate",
    label: "N-Acetyl Semax Amidate",
    verdict: "Terminal-modified analog — separate test article",
    detail: "N-acetylation + C-amidation. Online microgram schedules cannot be transferred to parent Semax.",
  },
  {
    id: "adamax",
    label: "Adamax",
    verdict: "Modified Semax-family compound — different identity and evidence",
    detail: "Marketplace naming overlaps Semax but is not dose-equivalent to MEHFPGP.",
  },
];

export const SEMAX_CONCENTRATION_COMPARE = [
  { drops: 1, pct01: 50, pct1: 500 },
  { drops: 2, pct01: 100, pct1: 1000 },
  { drops: 4, pct01: 200, pct1: 2000 },
  { drops: 6, pct01: 300, pct1: 3000 },
  { drops: 8, pct01: 400, pct1: 4000 },
  { drops: 12, pct01: 600, pct1: 6000 },
];

export const SEMAX_LABEL_01_INDICATIONS = [
  {
    context: "Mental fatigue / adaptation",
    perDose: "2–3 drops/nostril",
    frequency: "2–3× first half of day",
    daily: "400–900 mcg/day",
    duration: "3–5 days",
  },
  {
    context: "Vascular cognitive dysfunction",
    perDose: "200–2,000 mcg (3–30 mcg/kg)",
    frequency: "4× daily",
    daily: "800–8,000 mcg/day",
    duration: "10–14 days",
  },
  {
    context: "Post-TBI / neurosurgery / anesthesia",
    perDose: "1,400–3,500 mcg (40–50 mcg/kg)",
    frequency: "3× daily",
    daily: "4,200–10,500 mcg/day",
    duration: "3–14 days",
  },
  {
    context: "Optic-nerve disease (drops)",
    perDose: "2–3 drops/nostril",
    frequency: "2–3× daily",
    daily: "600–900 mcg/day",
    duration: "7–10 days",
  },
  {
    context: "Pediatric MBD (age ≥7)",
    perDose: "1–2 drops/nostril",
    frequency: "2× morning/midday",
    daily: "200–400 mcg/day",
    duration: "30 days",
  },
];

export const SEMAX_STROKE_1PCT = [
  {
    severity: "Moderate ischemic stroke",
    perDose: "2,000–3,000 mcg",
    frequency: "3–4× daily",
    daily: "6,000–12,000 mcg (6–12 mg)",
    duration: "10 days",
  },
  {
    severity: "Severe ischemic stroke",
    perDose: "3,000–4,000 mcg",
    frequency: "4–5× daily",
    daily: "12,000–20,000 mcg (12–20 mg)",
    duration: "10 days",
  },
];

export const SEMAX_HUMAN_STUDIES = [
  {
    study: "Kaplan 1996",
    dose: "250 mcg once or 1 mg/day",
    route: "IN",
    duration: "1–2 days",
    n: 19,
    purpose: "Neurophysiologic/cognitive · limited AE detail",
  },
  {
    study: "Panikratova 2020",
    dose: "1.2 mg 1% once",
    route: "IN 60 µL/nostril",
    duration: "Single",
    n: 14,
    purpose: "fMRI connectivity · not repeated dosing",
  },
  {
    study: "Gusev 1997",
    dose: "12 mg/day moderate · 18 mg/day severe",
    route: "IN",
    duration: "5–10 days",
    n: "Stroke",
    purpose: "Acute ischemic stroke — not cognition",
  },
  {
    study: "Gusev 2018",
    dose: "6,000 mcg/day",
    route: "IN",
    duration: "2 × 10-day courses + 20 d gap",
    n: 110,
    purpose: "Post-stroke rehabilitation · BDNF/motor",
  },
  {
    study: "Koroleva 1996",
    dose: "0.5 mg/kg once",
    route: "IN",
    duration: "Single",
    n: 37,
    purpose: "Pain research · FDA summary",
  },
  {
    study: "Polunin 2000",
    dose: "Not in abstract",
    route: "IN drops / electrophoresis",
    duration: "Study-specific",
    n: "Optic nerve",
    purpose: "Visual outcomes with background therapy",
  },
];

export const SEMAX_EVIDENCE_HIERARCHY = [
  ["U.S. approved dosing", "None", "No U.S. prescribing schedule"],
  ["Russian medicinal product", "Multiple indication-specific IN regimens", "Strongest practical documentation"],
  ["Human clinical evidence", "250 mcg–20 mg/day by context", "Exposure documented · quality varies"],
  ["Healthy-adult experimental", "250 mcg · 1 mg/2 d · 1.2 mg once", "Acute studies · limited efficacy"],
  ["Preclinical", "25–100 mcg/kg rodents", "Mechanistic only"],
  ["Anecdotal IN", "100–600 mcg/admin common", "Low confidence"],
  ["Anecdotal SC", "100–500 mcg/day reported", "Very low · no human SC study in FDA review"],
];

export const SEMAX_ANECDOTAL_PROTOCOLS = [
  {
    id: "adaptation",
    label: "Russian 0.1% adaptation",
    dose: "400–900 mcg/day total",
    frequency: "2–3× first half of day",
    route: "IN drops",
    duration: "3–5 days",
    basis: "Product instructions",
  },
  {
    id: "fmri",
    label: "Healthy fMRI single dose",
    dose: "1.2 mg once",
    frequency: "Once",
    route: "IN 1%",
    duration: "1 day",
    basis: "Panikratova 2020",
  },
  {
    id: "low-online",
    label: "Lower online cognitive",
    dose: "50–200 mcg/admin",
    frequency: "1–2× daily",
    route: "IN spray",
    duration: "5–14 days",
    basis: "Commercial/community",
  },
  {
    id: "common-online",
    label: "Common online cognitive",
    dose: "200–600 mcg/admin",
    frequency: "1–2× daily",
    route: "IN",
    duration: "10–20 days",
    basis: "Commercial/community",
  },
  {
    id: "sc",
    label: "Injectable convention",
    dose: "100–500 mcg/injection",
    frequency: "Usually QD",
    route: "SC",
    duration: "2–8 weeks",
    basis: "Practitioner/community · no published human SC validation",
  },
  {
    id: "proposed",
    label: "Proposed dose-ranging study",
    dose: "400 / 900 / 1,800 mcg/day",
    frequency: "2× daily (08:00, 13:00)",
    route: "IN metered",
    duration: "5 days",
    basis: "Investigator protocol",
  },
];

export const SEMAX_CUMULATIVE_PRESETS = [
  { id: "100qd", label: "100 mcg QD × 14 d", mcgPerDose: 100, freq: 1, days: 14 },
  { id: "200bid", label: "200 mcg BID × 14 d", mcgPerDose: 200, freq: 2, days: 14 },
  { id: "450bid", label: "450 mcg BID × 5 d (proposed mid)", mcgPerDose: 450, freq: 2, days: 5 },
  { id: "600rehab", label: "6 mg/day rehab × 10 d", mcgPerDose: 2000, freq: 3, days: 10 },
];

export const SEMAX_COMPARE = {
  clinical: {
    title: "Medicinal-product and human study record",
    status: "Indication-specific · intranasal",
    rows: [
      ["Mental fatigue (0.1%)", "400–900 mcg/day · 3–5 days"],
      ["Healthy fMRI", "1.2 mg once"],
      ["Rehabilitation", "6 mg/day · 2 × 10-day courses"],
      ["Moderate stroke (1%)", "6–12 mg/day · 10 days"],
      ["Human SC dose", "None validated in FDA review"],
    ],
  },
  anecdotal: {
    title: "Online / community conventions",
    status: "Often extends duration or uses SC without basis",
    rows: [
      ["Typical per admin", "100–600 mcg"],
      ["Frequency", "1–2× daily · sometimes 5 on/2 off"],
      ["Duration", "10–20 days to 8 weeks"],
      ["0.1% vs 1% confusion", "Tenfold error risk"],
      ["Modified analogs", "Cannot assign doses to parent Semax"],
    ],
  },
};

export const SEMAX_PRECLINICAL = [
  { model: "Rats", dose: "50 mcg/kg", route: "IN once", outcome: "Hippocampal BDNF/TrkB · avoidance learning" },
  { model: "Rats neonatal isolation", dose: "50 mcg/kg/day", route: "IN × P15–28", outcome: "Long-lasting behavioral effects" },
  { model: "Rats MCAO", dose: "100 mcg/kg", route: "IP × 4", outcome: "Ischemic cortex transcriptome" },
  { model: "Rats ischemia model", dose: "25 mcg/kg/day", route: "IN × 7 d", outcome: "PGC-1α neuroprotection" },
];

export const SEMAX_PART_A = [
  { period: "1", mcg: 0, label: "Placebo" },
  { period: "2", mcg: 200, label: "200 mcg single" },
  { period: "3", mcg: 450, label: "450 mcg single" },
  { period: "4", mcg: 900, label: "900 mcg single" },
  { period: "5", mcg: 1200, label: "1.2 mg single (fMRI amount)" },
];

export const SEMAX_PART_B = [
  { arm: "Placebo", am: 0, pm: 0, daily: 0 },
  { arm: "Low", am: 200, pm: 200, daily: 400 },
  { arm: "Mid", am: 450, pm: 450, daily: 900 },
  { arm: "High", am: 900, pm: 900, daily: 1800 },
];

export const SEMAX_CLAIMS = [
  {
    id: "cognitive-300",
    claim: "300–600 mcg is the proven cognitive dose",
    verdict: "Overstated",
    detail: "Overlaps lower Russian daily range but no modern controlled dose-response trial for healthy cognition.",
  },
  {
    id: "01-vs-1",
    claim: "1% Semax is stronger/better than 0.1%",
    verdict: "False",
    detail: "1% is ten times more concentrated — enables mg/day stroke doses. Accidental substitution = tenfold error.",
  },
  {
    id: "stroke-cognitive",
    claim: "Stroke mg/day doses support high-dose nootropic use",
    verdict: "Unsafe extrapolation",
    detail: "6–20 mg/day regimens are acute neurologic product instructions, not cognitive-enhancement precedents.",
  },
  {
    id: "fmri-daily",
    claim: "1.2 mg fMRI dose proves 1.2 mg/day is safe/effective",
    verdict: "Invalid",
    detail: "Single acute exposure measuring connectivity surrogate — not repeated cognitive dosing evidence.",
  },
  {
    id: "sc-equivalent",
    claim: "Subcutaneous equals intranasal micrograms",
    verdict: "Unproven",
    detail: "FDA 2026 review did not locate published human SC Semax administration.",
  },
  {
    id: "bdnf-human",
    claim: "Semax permanently raises BDNF in humans",
    verdict: "Oversimplified",
    detail: "Rat hippocampal BDNF/TrkB data exist; human durable BDNF benefit not established as dosing target.",
  },
  {
    id: "analog-same",
    claim: "N-acetyl Semax amidate uses same dose as Semax",
    verdict: "False",
    detail: "Different chemical entities require separate evidence — no established conversion.",
  },
  {
    id: "5on2off",
    claim: "5-on/2-off prevents receptor desensitization",
    verdict: "Unproven",
    detail: "Community pattern without traceable human Semax trial supporting receptor-reset rationale.",
  },
  {
    id: "spray-dose",
    claim: "One spray equals product label dose",
    verdict: "Incomplete",
    detail: "Requires concentration, validated actuation volume, mcg per actuation, and peptide-content basis.",
  },
];

export const SEMAX_EVIDENCE_LADDER = [
  { level: "U.S. approved dosing", exists: "None", confidence: "None" },
  { level: "Russian product instructions", exists: "Indication-specific IN regimens", confidence: "Established for product" },
  { level: "Human clinical dosing", exists: "Heterogeneous · often small/old", confidence: "Moderate · context-dependent" },
  { level: "Healthy-adult experimental", exists: "Acute 250 mcg–1.2 mg", confidence: "Limited" },
  { level: "Preclinical", exists: "25–100 mcg/kg rodents", confidence: "Mechanistic only" },
  { level: "Anecdotal IN", exists: "100–600 mcg/admin common", confidence: "Low" },
  { level: "Anecdotal SC / long-term", exists: "Reported online", confidence: "Very low" },
];

export const SEMAX_AE_SIMPLE = [
  {
    category: "Product label (0.1%)",
    note: "Mild nasal irritation with prolonged use; contraindications include pregnancy, acute psychiatric states, anxiety disorders, seizure history, age limits",
  },
  {
    category: "Nasal",
    note: "Burning, dryness, congestion, epistaxis, smell change — examine and score in trials",
  },
  {
    category: "Psychiatric / sleep",
    note: "Activation, anxiety worsening, insomnia, mood elevation, mania — monitor especially with stimulants",
  },
  {
    category: "FDA compounding (2026)",
    note: "Proposed neither Semax free base nor acetate for 503A list — aggregation, impurities, device/formulation gaps",
  },
];

export const SEMAX_AE_FULL = [
  {
    domain: "Nasal tolerability",
    items: "Symptom score, examination, olfaction; avoid simultaneous vasoconstrictive intranasal agents per label",
  },
  {
    domain: "Cardiovascular / hemostatic",
    items: "BP, HR, ECG; FDA noted antithrombotic lab claims — bleeding risk review in at-risk participants",
  },
  {
    domain: "Drug interactions",
    items: "Stimulants, antidepressants, anticoagulants, alcohol, cannabis, Selank/other peptides — inadequate formal data",
  },
  {
    domain: "Product quality",
    items: "Free base vs acetate, 0.1% vs 1% concentration, oxidation, aggregates, delivered-dose uniformity",
  },
];

export const SEMAX_DOSAGE_GUIDE = {
  title: "Semax Dosage: Research Evidence, Russian Label, and Study Protocol",
  updated: "Updated August 2026",
  callout:
    "**Research note:** Semax (**MEHFPGP**, MW ~813.93 Da) has Russian **0.1%** and **1%** intranasal products with **tenfold concentration difference** (~**50 vs 500 mcg/drop**). Mental-fatigue label: **400–900 mcg/day × 3–5 days**. **1% stroke regimens (6–20 mg/day) must not be used as cognitive dosing.** Healthy fMRI: **1.2 mg once** — not daily precedent. **No validated human SC dose** in FDA 2026 review.",
  intro: [
    "Semax is Met-Glu-His-Phe-Pro-Gly-Pro, developed from ACTH(4–7) with a Pro-Gly-Pro extension. It is distinct from full-length ACTH, N-acetyl Semax, N-Acetyl Semax Amidate, and Adamax.",
    "**Semax 0.1% = 1 mg/mL ≈ 50 mcg per 0.05 mL drop.** **Semax 1% = 10 mg/mL ≈ 500 mcg per drop.** Confusing concentrations creates a **tenfold dosing error**.",
    "Russian 0.1% instructions are **indication-specific** — mental fatigue/adaptation **400–900 mcg/day** for **3–5 days** is the strongest lower-dose anchor. Online **100–600 mcg per administration** partly overlaps but often extends duration or switches to injection without evidence.",
  ],
  glance: {
    title: "Semax dosage in 30 seconds",
    table: {
      headers: ["Question", "Current answer"],
      rows: [
        ["**Sequence**", "MEHFPGP · ~813.93 Da"],
        ["**0.1% per drop**", "~50 mcg (0.05 mL)"],
        ["**1% per drop**", "~500 mcg (tenfold)"],
        ["**Mental fatigue label**", "400–900 mcg/day · 3–5 days"],
        ["**1% moderate stroke**", "6–12 mg/day · 10 days"],
        ["**fMRI healthy dose**", "1.2 mg once"],
        ["**Online cognitive**", "100–600 mcg/admin · anecdotal"],
        ["**Human SC dose**", "None validated"],
      ],
    },
  },
  sections: [
    {
      id: "identity",
      title: "Compound identity",
      widget: "semax-identity-gate",
      paragraphs: [
        "Research must specify sequence, terminal modifications, free peptide vs salt, peptide content, concentration (mg/mL), and delivered volume per drop or actuation.",
      ],
    },
    {
      id: "concentration",
      title: "The tenfold concentration difference",
      paragraphs: [
        "0.1% and 1% are not “weak” vs “strong” consumer options — they serve different clinical contexts. 1% enables milligram-range acute-stroke exposure without impractically large drop counts.",
      ],
      widget: "semax-concentration-compare",
    },
    {
      id: "drop-calc",
      title: "Drop-count dose mathematics",
      widget: "semax-drop-calc",
      paragraphsAfter: [
        "Spray pumps and consumer droppers are not interchangeable with validated medicinal containers without delivered-dose measurement.",
      ],
    },
    {
      id: "regulatory",
      title: "Regulatory context",
      paragraphs: [
        "No U.S. prescribing label. FDA July 2026 proposed **neither Semax free base nor acetate** for 503A bulks list — incomplete characterization, safety uncertainty, device/formulation gaps. Russian product history and U.S. compounding review answer different questions.",
      ],
    },
    {
      id: "label-01",
      title: "Russian Semax 0.1% indication schedules",
      widget: "semax-label-indications",
      paragraphsAfter: [
        "No more than 2–3 drops per nostril at once; larger doses split by 10–15 minutes.",
      ],
    },
    {
      id: "stroke",
      title: "Semax 1% acute stroke instructions",
      widget: "semax-stroke-regimens",
      paragraphs: [
        "These are **acute ischemic stroke product instructions** — medical emergencies requiring standard stroke care. **Not cognitive or nootropic precedents.**",
      ],
    },
    {
      id: "human-studies",
      title: "Dosage in human clinical research",
      paragraphs: [
        "> Doses describe medicinal-product instructions or study exposure — **not a universal prescribing protocol.**",
      ],
      widget: "semax-human-studies",
    },
    {
      id: "evidence-hierarchy",
      title: "Evidence hierarchy for research dosage",
      widget: "semax-evidence-hierarchy",
    },
    {
      id: "protocols",
      title: "Commonly reported research protocols",
      widget: "semax-anecdotal-protocols",
    },
    {
      id: "cumulative",
      title: "Cumulative exposure examples",
      widget: "semax-cumulative-calc",
    },
    {
      id: "compare",
      title: "Anecdotal versus clinically studied dosing",
      widget: "semax-clinical-vs-anecdotal",
    },
    {
      id: "preclinical",
      title: "Preclinical research dosage",
      widget: "semax-preclinical-doses",
      paragraphsAfter: [
        "25–100 mcg/kg rodent anchors are mechanistic — not human dose by weight conversion.",
      ],
    },
    {
      id: "mechanism",
      title: "Mechanism relevant to dosage",
      paragraphs: [
        "No clinically validated receptor-occupancy target. Preclinical threads: BDNF/TrkB, neurotrophin gene expression, monoaminergic effects, ischemia-related gene programs, Pro-Gly-Pro metabolites. More Semax ≠ proven more BDNF or better human outcomes.",
      ],
    },
    {
      id: "safety",
      title: "Safety, side effects, and monitoring",
      widget: "semax-adverse-events",
    },
    {
      id: "escalation",
      title: "Dose escalation",
      paragraphs: [
        "Russian instructions divide large doses for nasal volume — not tolerance titration. Online 50→600 mcg step-up lacks controlled dose-response evidence. 5-on/2-off receptor-reset claims are unproven.",
      ],
    },
    {
      id: "protocol",
      title: "Complete proposed dose-ranging research protocol",
      paragraphs: [
        "**Part A:** 30 healthy adults · 5-period crossover · placebo, 200, 450, 900, 1,200 mcg single IN · 7-day washout.",
        "**Part B:** 200 healthy adults · 5 days · placebo vs **400 / 900 / 1,800 mcg/day** (200+200, 450+450, 900+900 at 08:00 and 13:00) during standardized cognitive-fatigue workload.",
      ],
      widget: "semax-protocol-timeline",
    },
    {
      id: "claims",
      title: "Claims versus evidence",
      widget: "semax-claim-checker",
    },
    {
      id: "evidence-ladder",
      title: "Dosage evidence ladder",
      widget: "semax-evidence-ladder",
    },
    {
      id: "bottom-line",
      title: "Bottom line",
      paragraphs: [
        "Semax dosing is **well described for specific Russian indications** but does **not** create one universal dose. **0.1% vs 1%** must stay explicit. Stroke **mg/day** regimens are not cognitive precedents.",
        "The highest-value next study for healthy-adult cognitive use is a **placebo-controlled intranasal dose-ranging trial** (400 vs 900 vs 1,800 mcg/day) with validated PK and device delivery — not extrapolation from analogs, injection, or 1% stroke labels.",
      ],
      highlight:
        "50 vs 500 mcg/drop · 400–900 mcg/day fatigue label · 6–20 mg/day stroke only · SC unvalidated.",
    },
  ],
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        question: "What is the standard Semax dose?",
        answer:
          "There is no single standard. Russian instructions range from 400–900 mcg/day for short mental-fatigue courses to 12–20 mg/day for severe acute stroke, with multiple regimens between.",
      },
      {
        question: "What is the difference between 0.1% and 1%?",
        answer:
          "1% is ten times as concentrated — approximately 50 mcg vs 500 mcg per conventional drop.",
      },
      {
        question: "What dose is used for mental fatigue?",
        answer:
          "Russian 0.1% instructions: 400–900 mcg/day in 2–3 administrations during the first half of the day for 3–5 days.",
      },
      {
        question: "What dose was used in healthy human research?",
        answer:
          "Reported exposures include 250 mcg once, 1 mg daily for two days, and 1.2 mg once in fMRI work.",
      },
      {
        question: "Is 300–600 mcg the proven cognitive dose?",
        answer:
          "No. It is frequently repeated online and overlaps lower product ranges, but a controlled modern dose-response trial has not established it as optimal.",
      },
      {
        question: "Is there a validated injectable dose?",
        answer:
          "No. FDA's 2026 review did not locate published human subcutaneous Semax administration.",
      },
      {
        question: "Can Semax be combined with Selank at the same doses?",
        answer:
          "The combination is common commercially, but no adequate human fixed-combination trial establishes dose, safety, or synergy.",
      },
      {
        question: "Is N-acetyl Semax dosed the same way?",
        answer:
          "No established conversion. Modified analogs are different chemical entities.",
      },
      {
        question: "What is the maximum Semax dose?",
        answer:
          "No universal maximum. The 20 mg/day severe-stroke instruction is context-specific and must not be interpreted as a general maximum for other populations.",
      },
      {
        question: "How long is Semax typically used?",
        answer:
          "Product record emphasizes short courses: 3–5, 7–10, or 10–14 days. Multi-month continuous use lacks adequate evidence.",
      },
    ],
  },
  sources: {
    title: "References",
    items: [
      {
        authors: "Semax manufacturer",
        title: "Russian 0.1% instruction PDF",
        detail: "Indication-specific dosing.",
        href: "https://semax.ru/upload/iblock/867/867fc8166acadfb577adc956d855999a3.pdf",
      },
      {
        authors: "RLS",
        title: "Semax Russian monograph",
        detail: "0.1% and 1% regimens.",
        href: "https://www.rlsnet.ru/drugs/semaks-5420",
      },
      {
        authors: "FDA",
        title: "Semax PCAC briefing document",
        detail: "July 2026 · proposed not on 503A list.",
        href: "https://www.fda.gov/media/193348/download",
      },
      {
        authors: "Panikratova YR et al.",
        title: "Selank and Semax fMRI",
        detail: "1.2 mg Semax once · separate groups.",
        href: "https://pubmed.ncbi.nlm.nih.gov/32342318/",
      },
      {
        authors: "Gusev EI et al.",
        title: "Acute stroke Semax 1997",
        detail: "12–18 mg/day stroke context.",
        href: "https://pubmed.ncbi.nlm.nih.gov/11517472/",
      },
      {
        authors: "Gusev EI et al.",
        title: "Rehabilitation Semax 2018",
        detail: "6 mg/day · two 10-day courses.",
        href: "https://pubmed.ncbi.nlm.nih.gov/29798983/",
      },
      {
        authors: "PubChem",
        title: "Semax",
        detail: "CID 9811102.",
        href: "https://pubchem.ncbi.nlm.nih.gov/compound/9811102",
      },
    ],
  },
};
