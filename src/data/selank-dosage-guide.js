/**
 * Selank (H-TKPRPGP-OH) dosage guide.
 * Russian 0.15% IN: 2 drops/nostril × 3/day × 14 d (~900 mcg/day at 75 mcg/drop).
 * Historical trial: 2,700 mcg/day IN × 14 d. Preclinical anchor: 300 mcg/kg rodents.
 * ≠ N-acetyl Selank · ≠ N-Acetyl Selank Amidate.
 */

export const SELANK_MW = 751.9;
export const NACETYL_SELANK_MW = 793.9;
export const NA_SELANK_AMIDATE_MW = 792.94;
export const SELANK_LABEL_CONCENTRATION_MG_ML = 1.5;
export const SELANK_HISTORICAL_DROP_MCG = 75;

export function selankLabelDose({
  dropsPerNostril = 2,
  nostrils = 2,
  mcgPerDrop = 75,
  dosesPerDay = 3,
}) {
  const drops = Number(dropsPerNostril);
  const n = Number(nostrils);
  const mcg = Number(mcgPerDrop);
  const freq = Number(dosesPerDay);
  if (
    !Number.isFinite(drops) ||
    drops <= 0 ||
    !Number.isFinite(n) ||
    n <= 0 ||
    !Number.isFinite(mcg) ||
    mcg <= 0 ||
    !Number.isFinite(freq) ||
    freq <= 0
  ) {
    return null;
  }
  const perAdministration = drops * n * mcg;
  const dailyMcg = perAdministration * freq;
  return {
    dropsPerNostril: drops,
    nostrils: n,
    mcgPerDrop: mcg,
    dosesPerDay: freq,
    perAdministration,
    dailyMcg,
    dailyMg: dailyMcg / 1000,
    course14Mg: (dailyMcg * 14) / 1000,
  };
}

export function selankCumulativeExposure({ mcgPerDose, dosesPerDay, days }) {
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

export const SELANK_IDENTITY = [
  {
    id: "parent",
    label: "Selank (H-TKPRPGP-OH)",
    verdict: "This page's subject — tuftsin-related heptapeptide TKPRPGP",
    detail:
      "MW ~751.9 Da · CAS 129954-34-3 · PubChem CID 11765600. Russian 0.15% intranasal medicinal product and human GAD studies refer to parent Selank (often as diacetate salt).",
  },
  {
    id: "diacetate",
    label: "Selank diacetate (0.15% nasal drops)",
    verdict: "Medicinal form — mass basis may differ from free peptide",
    detail:
      "Registered Russian product: threonyl-lysyl-prolyl-arginyl-prolyl-glycyl-proline diacetate at 1.5 mg/mL (0.15%). Certificate must state peptide-content basis.",
  },
  {
    id: "n-acetyl",
    label: "N-acetyl Selank (Ac-TKPRPGP-OH)",
    verdict: "Different compound — not this page's dosing evidence",
    detail: "MW ~793.9 Da · C terminus remains acid. PubChem CID 133082488.",
  },
  {
    id: "amidate",
    label: "N-Acetyl Selank Amidate (Ac-TKPRPGP-NH2)",
    verdict: "Terminal-modified analog — separate test article",
    detail:
      "MW ~792.94 Da · both termini modified. No peer-reviewed human trial for exact analog located. Do not inherit parent Selank dose.",
  },
];

export const SELANK_MOLECULE_COMPARE = [
  {
    compound: "Selank (parent)",
    sequence: "H-TKPRPGP-OH",
    mw: "751.9 Da",
    distinction: "This page · Russian IN product",
  },
  {
    compound: "Selank diacetate",
    sequence: "TKPRPGP · diacetate salt",
    mw: "Salt-dependent",
    distinction: "0.15% nasal drops (Russia)",
  },
  {
    compound: "N-acetyl Selank",
    sequence: "Ac-TKPRPGP-OH",
    mw: "793.9 Da",
    distinction: "N terminus only modified",
  },
  {
    compound: "N-Acetyl Selank Amidate",
    sequence: "Ac-TKPRPGP-NH2",
    mw: "792.94 Da",
    distinction: "Both termini modified · ≠ parent dose",
  },
];

export const SELANK_EVIDENCE_HIERARCHY = [
  ["Current medicinal-product instructions", "2 drops/nostril × 3/day × 14 d", "Strongest practical regimen for 0.15% product"],
  ["Human clinical evidence", "2,700 mcg/day × 3 doses × 14 d most traceable", "Documented exposure · limited quality"],
  ["Published experimental evidence", "Small Russian human studies", "Supports research · not broad efficacy proof"],
  ["Preclinical evidence", "300 mcg/kg rodents IN/IP", "Mechanistic only · no human conversion"],
  ["Anecdotal research protocol", "200–500 mcg/admin · 1–3× daily", "Online convention · inconsistent provenance"],
  ["Insufficient evidence", "Injectable cycles · long-term daily use", "No validated clinical basis"],
];

export const SELANK_HUMAN_STUDIES = [
  {
    study: "Zozulia 2008",
    dose: "2,700 mcg/day",
    frequency: "3 × 900 mcg",
    route: "IN drops",
    duration: "14 days",
    n: "30 Selank / 62 total",
    purpose: "GAD/neurasthenia vs medazepam",
    limit: "Small · no placebo · Russian reporting",
  },
  {
    study: "Dissertation (Syunyakov)",
    dose: "2,700 mcg/day; 900 mcg test",
    frequency: "3 divided",
    route: "IN drops",
    duration: "5–14 days",
    n: "~30",
    purpose: "Pharmaco-EEG · exploratory",
    limit: "Underlying dose source for 2008 report",
  },
  {
    study: "Uchakina 2008",
    dose: "Not in abstract",
    frequency: "Not stated",
    route: "IN Selank",
    duration: "14 days",
    n: "GAD/neurasthenia",
    purpose: "Th1/Th2 cytokine effects",
    limit: "Do not assign 2,700 mcg without full methods",
  },
  {
    study: "Medvedev 2014",
    dose: "Not in abstract",
    frequency: "Course",
    route: "Medicinal product",
    duration: "Course",
    n: 60,
    purpose: "Phobic-anxiety vs phenazepam",
    limit: "Dose not reproducible from abstract",
  },
  {
    study: "Medvedev 2015",
    dose: "Not in abstract",
    frequency: "Add-on to phenazepam",
    route: "Medicinal product",
    duration: "Course",
    n: 70,
    purpose: "Combination tolerability",
    limit: "Cannot establish monotherapy efficacy",
  },
];

export const SELANK_LABEL_VS_TRIAL = {
  label: {
    title: "Current Russian labeled regimen",
    status: "~900 mcg/day if 75 mcg/drop assumed",
    rows: [
      ["Administration", "2 drops per nostril"],
      ["Frequency", "3 times daily"],
      ["Duration", "14 days"],
      ["Repeat", "After 1–3 weeks · medical consultation"],
      ["Concentration", "0.15% (1.5 mg/mL)"],
      ["Approx. per dose", "~300 mcg (4 drops × 75 mcg)"],
    ],
  },
  trial: {
    title: "Best-documented historical trial",
    status: "2,700 mcg/day · 3 × 900 mcg",
    rows: [
      ["Daily total", "2,700 mcg"],
      ["Per administration", "900 mcg"],
      ["Frequency", "3 times daily"],
      ["Duration", "14 days"],
      ["Source", "Clinical-pharmacology dissertation / Zozulia program"],
      ["14-day total", "~37.8 mg nominal"],
    ],
  },
};

export const SELANK_ANECDOTAL_PROTOCOLS = [
  {
    id: "label",
    label: "Russian product course",
    dose: "2 drops/nostril (~300 mcg/admin)",
    frequency: "3 times daily",
    route: "Intranasal drops",
    duration: "14 days",
    basis: "Current Russian label",
  },
  {
    id: "historical",
    label: "Historical clinical program",
    dose: "900 mcg per administration",
    frequency: "3 times daily (2,700 mcg/day)",
    route: "Intranasal drops",
    duration: "14 days",
    basis: "Zozulia / dissertation trace",
  },
  {
    id: "low-in",
    label: "Lower online IN",
    dose: "100–250 mcg",
    frequency: "1–2 times daily",
    route: "Intranasal",
    duration: "10–14 days",
    basis: "Commercial/community reports",
  },
  {
    id: "common-in",
    label: "Common online IN",
    dose: "250–500 mcg",
    frequency: "1–3 times daily",
    route: "Intranasal spray",
    duration: "10–21 days",
    basis: "Commercial/community convention",
  },
  {
    id: "sc",
    label: "Subcutaneous convention",
    dose: "100–500 mcg/day",
    frequency: "Usually once daily",
    route: "Subcutaneous",
    duration: "10 days – 4 weeks",
    basis: "Anecdotal · no validated human SC dose",
  },
];

export const SELANK_CUMULATIVE_PRESETS = [
  { id: "label", label: "Label (~900 mcg/day × 14 d)", mcgPerDose: 300, dosesPerDay: 3, days: 14 },
  { id: "trial", label: "Historical trial (2,700/day × 14 d)", mcgPerDose: 900, dosesPerDay: 3, days: 14 },
  { id: "250bid", label: "250 mcg BID × 14 d", mcgPerDose: 250, dosesPerDay: 2, days: 14 },
  { id: "500bid", label: "500 mcg BID × 14 d", mcgPerDose: 500, dosesPerDay: 2, days: 14 },
];

export const SELANK_COMPARE = {
  clinical: {
    title: "Clinical and labeled intranasal record",
    status: "Label ~900 mcg/day · trial 2,700 mcg/day",
    rows: [
      ["Current label", "~300 mcg × 3/day ≈ 900 mcg/day"],
      ["Historical study", "900 mcg × 3/day = 2,700 mcg/day"],
      ["Route", "Intranasal drops"],
      ["Duration", "14 days"],
      ["Evidence", "Product instructions + small human program"],
    ],
  },
  anecdotal: {
    title: "Anecdotal research reports",
    status: "Often lower mcg but less-studied route/duration",
    rows: [
      ["Typical amount", "100–1,500 mcg/day reported"],
      ["Route", "IN spray or SC injection"],
      ["Duration", "10 days – 4 weeks; some indefinite"],
      ["SC evidence", "Very low · no peer-reviewed human SC dose"],
      ["Paradox", "Lower mass ≠ safer if route/duration less studied"],
    ],
  },
};

export const SELANK_PRECLINICAL = [
  { model: "Wistar rats", dose: "300 mcg/kg", route: "IN", duration: "Single · 1–3 h", outcome: "Frontal-cortex GABAergic gene expression" },
  { model: "Wistar rats (UCMS)", dose: "300 mcg/kg", route: "IN", duration: "14 days daily", outcome: "Anxiety-like behavior ± diazepam" },
  { model: "BALB/c · C57BL/6 mice", dose: "300 mcg/kg/day", route: "IN or IP", duration: "5 days", outcome: "EPM · GABA/NMDA binding markers" },
  { model: "Wistar rats (foot-shock)", dose: "100–1,000 mcg/kg", route: "IP", duration: "Study-specific", outcome: "Liver morphology · stress effects" },
];

export const SELANK_PK_LEADIN = [
  { cohort: "P1", dose: "300 mcg single IN", n: 6, note: "Sentinel: first 2 dosed 24 h apart" },
  { cohort: "P2", dose: "900 mcg single IN", n: 6, note: "After P1 safety review" },
  { cohort: "P3", dose: "900 mcg × 3 in one day", n: 6, note: "~6 h between doses · trough sampling" },
];

export const SELANK_PHASE2_ARMS = [
  { arm: "Placebo", morning: 0, midday: 0, evening: 0, daily: 0, label: "Vehicle × 3" },
  { arm: "Low (label-like)", morning: 300, midday: 300, evening: 300, daily: 900, label: "900 mcg/day × 14 d" },
  { arm: "High (historical)", morning: 900, midday: 900, evening: 900, daily: 2700, label: "2,700 mcg/day × 14 d" },
];

export const SELANK_CLAIMS = [
  {
    id: "standard-250",
    claim: "250–500 mcg is the standard Selank dose",
    verdict: "Overstated",
    detail:
      "Common online range, not the best-documented clinical standard. Label ≈300 mcg/admin; historical trial used 900 mcg/admin.",
  },
  {
    id: "sc-equivalent",
    claim: "Subcutaneous Selank equals intranasal dosing",
    verdict: "Unproven",
    detail:
      "No peer-reviewed human SC dose-finding study located. Route changes peak exposure, metabolism, and local toxicity.",
  },
  {
    id: "weight-based",
    claim: "Selank is dosed by body weight in humans",
    verdict: "False",
    detail:
      "300 mcg/kg is a rodent anchor. Established human protocols use fixed microgram or drop-count regimens.",
  },
  {
    id: "gaba-benzo",
    claim: "Works exactly like a benzodiazepine without side effects",
    verdict: "Oversimplified",
    detail:
      "Indirect GABAergic modulation suggested preclinically — not equivalent benzodiazepine receptor pharmacology or safety profile.",
  },
  {
    id: "label-trial-same",
    claim: "Russian label dose equals the clinical trial dose",
    verdict: "False",
    detail:
      "Label ≈900 mcg/day vs historical trial 2,700 mcg/day. Do not merge without dose-ranging evidence.",
  },
  {
    id: "long-half-life",
    claim: "Effects lasting one week means one-week half-life",
    verdict: "Invalid inference",
    detail:
      "Medvedev 2014 reported ~1 week persistence after course — likely downstream biology, not parent-peptide half-life.",
  },
  {
    id: "amidate-same",
    claim: "N-Acetyl Selank Amidate uses the same dose as Selank",
    verdict: "Unvalidated",
    detail:
      "Terminal modifications change mass, charge, and uncharacterized bioavailability. Separate PK program required.",
  },
  {
    id: "chronic-safe",
    claim: "Safe for months of daily use",
    verdict: "Not established",
    detail:
      "Human courses were ~14 days. Long-term psychiatric, immune, and nasal safety inadequately characterized.",
  },
  {
    id: "drop-spray-same",
    claim: "Drop count equals spray micrograms without measurement",
    verdict: "Unreliable",
    detail:
      "Registered product uses drops; online atomizers differ. Delivered dose must be validated per device.",
  },
];

export const SELANK_EVIDENCE_LADDER = [
  { level: "U.S. labeled dosing", exists: "None", confidence: "None" },
  { level: "Russian labeled dosing", exists: "0.15% IN · 2 drops/nostril × 3/day × 14 d", confidence: "Established for product" },
  { level: "Human clinical-trial dosing", exists: "2,700 mcg/day × 14 d clearest", confidence: "Limited · small studies" },
  { level: "Preclinical dosing", exists: "300 mcg/kg rodents repeated", confidence: "Mechanistic only" },
  { level: "Anecdotal IN protocols", exists: "200–500 mcg/admin common", confidence: "Low · inconsistently sourced" },
  { level: "Anecdotal SC protocols", exists: "100–500 mcg/day reported", confidence: "Very low" },
  { level: "Long-term / weight-based human", exists: "Not established", confidence: "None" },
];

export const SELANK_AE_SIMPLE = [
  {
    category: "Russian label (product)",
    note: "Unpleasant taste if drops reach throat; allergic reactions including delayed — frequency not established. No registered overdose cases (limited exposure database).",
  },
  {
    category: "Nasal",
    note: "Burning, dryness, congestion, epistaxis, mucosal injury, altered smell — monitor with examination and olfaction testing",
  },
  {
    category: "Neurologic / psychiatric",
    note: "Headache, dizziness, brain fog, activation, sedation, mood change, paradoxical anxiety — structured scales in trials",
  },
  {
    category: "FDA compounding (U.S.)",
    note: "Selank acetate (TP-7) on withdrawn bulk list — aggregation, impurities, immunogenicity, characterization concerns",
  },
];

export const SELANK_AE_FULL = [
  {
    domain: "Nasal tolerability",
    items: "Symptom score, mucosal examination, olfaction, delivered-dose uniformity — drops vs metered spray not interchangeable",
  },
  {
    domain: "Psychiatric monitoring",
    items: "Agitation, insomnia, mania, suicidality — especially with benzodiazepine co-use",
  },
  {
    domain: "Drug interactions",
    items: "Benzodiazepines (phenazepam studied), alcohol, sedatives, stimulants, antidepressants — additive CNS effects possible",
  },
  {
    domain: "Special populations",
    items: "Contraindicated pregnancy/lactation/under 18 on Russian label — inadequate studies elsewhere",
  },
];

export const SELANK_DOSAGE_GUIDE = {
  title: "Selank Dosage: Research Evidence, Russian Label, and Study Protocol",
  updated: "Updated August 2026",
  callout:
    "**Research note:** Selank (**TKPRPGP**, MW ~751.9 Da) is a synthetic tuftsin-related heptapeptide with a **Russian 0.15% intranasal medicinal product**: **2 drops per nostril three times daily for 14 days** (~**900 mcg/day** if 75 mcg/drop). The best-documented historical trial used **2,700 mcg/day** (900 mcg × 3) for 14 days. Human evidence is **limited small Russian studies**. **No validated SC dose**, human PK, or weight-based formula. **≠ N-acetyl Selank · ≠ N-Acetyl Selank Amidate.**",
  intro: [
    "Selank (**Thr-Lys-Pro-Arg-Pro-Gly-Pro**) extends tuftsin (Thr-Lys-Pro-Arg) with **Pro-Gly-Pro** for metabolic stability. It is registered in Russia as **0.15% intranasal drops** (Selank diacetate) for anxiety- and stress-related indications.",
    "Current manufacturer instructions: **two drops into each nostril three times daily for 14 days**, with possible repeat after **1–3 weeks** following medical consultation. At **0.15% (1.5 mg/mL)** and the historically referenced **75 mcg/drop**, four drops per administration ≈ **300 mcg** and three daily administrations ≈ **900 mcg/day** — but **drop count is more authoritative than calculated mcg unless delivered volume is validated**.",
    "The clinical-pharmacology dissertation underlying Zozulia 2008 describes **2,700 mcg/day intranasally in three divided doses for 14 days**. Label exposure and trial exposure are **not identical** and should not be merged without dose-ranging study.",
  ],
  glance: {
    title: "Selank dosage in 30 seconds",
    table: {
      headers: ["Question", "Current answer"],
      rows: [
        ["**Sequence**", "TKPRPGP · H-TKPRPGP-OH · ~751.9 Da"],
        ["**Russian label**", "2 drops/nostril × 3/day × 14 days"],
        ["**Approx. label daily**", "~900 mcg/day (75 mcg/drop assumption)"],
        ["**Historical trial**", "2,700 mcg/day · 900 mcg × 3 · 14 days"],
        ["**Online IN range**", "200–500 mcg/admin · anecdotal"],
        ["**Human SC dose**", "None validated"],
        ["**Rodent anchor**", "300 mcg/kg · not a human dose"],
        ["**U.S. label**", "None · FDA flags selank acetate (TP-7) compounding"],
      ],
    },
  },
  sections: [
    {
      id: "identity",
      title: "Compound identity",
      paragraphs: [
        "Selank, Selank diacetate, N-acetyl Selank, and N-Acetyl Selank Amidate are frequently treated as interchangeable online. They are **not equivalent** on a mass-for-mass or evidence basis. This page covers **parent Selank (TKPRPGP)**.",
      ],
      widget: "selank-identity-gate",
    },
    {
      id: "molecule-compare",
      title: "Selank and related molecules",
      widget: "selank-molecule-compare",
    },
    {
      id: "regulatory",
      title: "Regulatory and labeled dosage context",
      paragraphs: [
        "**Russia:** 0.15% nasal drops — indications include anxiety, neurasthenia, asthenia, mood instability, sleep disturbance, and stress disorders. Contraindicated pregnancy, lactation, under 18.",
        "**United States:** No prescribing label. FDA lists **selank acetate (TP-7)** among bulk substances with potential aggregation, immunogenicity, and characterization concerns — relevant to compounded material, not a substitute for the separate Russian product history.",
      ],
      widget: "selank-label-dose-calc",
    },
    {
      id: "human-studies",
      title: "Dosage used in human clinical research",
      paragraphs: [
        "> **Selank has human research data**, but doses describe **study exposure** rather than a universal prescribing protocol.",
        "The best traceable documentation: **2,700 mcg/day intranasally, divided into three administrations, for 14 days** (dissertation / Zozulia program). Several other reports do not state dose in accessible abstracts — assigning 2,700 mcg without full methods overstates certainty.",
      ],
      widget: "selank-human-studies",
    },
    {
      id: "label-vs-trial",
      title: "Current label versus historical trial exposure",
      widget: "selank-label-vs-trial",
      paragraphsAfter: [
        "The paradox: many online protocols use **less nominal mass than the historical trial** but introduce **less-studied routes (SC spray pumps) or longer duration** — lower mcg does not automatically mean evidence-based.",
      ],
    },
    {
      id: "evidence-hierarchy",
      title: "Evidence hierarchy for research dosage",
      widget: "selank-evidence-hierarchy",
    },
    {
      id: "protocols",
      title: "Commonly reported research protocols",
      widget: "selank-anecdotal-protocols",
    },
    {
      id: "cumulative",
      title: "Cumulative exposure examples",
      widget: "selank-cumulative-calc",
      paragraphsAfter: [
        "Arithmetic totals only — delivered nasal dose, mucociliary clearance, formulation, and peptide content may differ substantially.",
      ],
    },
    {
      id: "compare",
      title: "Anecdotal versus clinically studied dosing",
      widget: "selank-clinical-vs-anecdotal",
    },
    {
      id: "preclinical",
      title: "Preclinical research dosage",
      paragraphs: [
        "**Animal / preclinical — not human dosage.** The **300 mcg/kg** dose appears repeatedly in rodent work as behaviorally active. It is **not a human dose recommendation**.",
      ],
      widget: "selank-preclinical-doses",
    },
    {
      id: "variations",
      title: "Research protocol variations",
      paragraphs: [
        "**14 days** has strongest support from label and human studies. **21–30+ days** and **5-on/2-off** schedules are predominantly commercial/anecdotal. **Intranasal** has direct human precedent; **subcutaneous** requires separate development. **Selank + benzodiazepine** or **Selank + Semax** blends lack established combined human doses.",
      ],
    },
    {
      id: "mechanism",
      title: "Mechanism relevant to dosage",
      paragraphs: [
        "No single receptor-occupancy target guides dosing. Preclinical threads: GABA-associated binding and gene expression, monoaminergic signaling, enkephalin-degrading enzymes, neurotrophin-associated changes, immune/cytokine modulation. Volkova 2016 (300 mcg/kg) suggests **indirect GABAergic modulation** rather than simple benzodiazepine-like binding.",
      ],
    },
    {
      id: "escalation",
      title: "Dose escalation",
      paragraphs: [
        "Human studies used **fixed regimens** — no validated titration by weight or subjective response. Online escalation from 100–250 mcg toward 250–500 mcg is **community convention**, not dose-response evidence.",
      ],
    },
    {
      id: "safety",
      title: "Safety, side effects, and monitoring",
      widget: "selank-adverse-events",
    },
    {
      id: "quality",
      title: "Product-quality requirements",
      paragraphs: [
        "HPLC purity ≠ identity. Require intact-mass LC-MS for **TKPRPGP**, sequence confirmation, peptide-content assay, related-peptide profiling, and for nasal formulations: **delivered-dose uniformity**, pH, osmolality, and stability. Drop volume and spray actuation are **not interchangeable** without measurement.",
      ],
    },
    {
      id: "protocol",
      title: "Complete proposed dose-ranging research protocol",
      paragraphs: [
        "**Phase 2a:** randomized, double-blind, placebo-controlled comparison of **900 mcg/day** (label-like) vs **2,700 mcg/day** (historical trial) vs placebo × **14 days** in generalized anxiety disorder. **PK lead-in** (18 participants): 300 mcg single → 900 mcg single → 900 mcg × 3/day. Target **150 participants** (50/arm).",
      ],
      widget: "selank-protocol-timeline",
      paragraphsAfter: [
        "Investigator-ready framework requiring regulatory authorization, GMP metered nasal formulation, validated TKPRPGP assay, and independent ethics review — not a personal-use schedule.",
      ],
    },
    {
      id: "claims",
      title: "Claims versus evidence",
      widget: "selank-claim-checker",
    },
    {
      id: "evidence-ladder",
      title: "Dosage evidence ladder",
      widget: "selank-evidence-ladder",
    },
    {
      id: "bottom-line",
      title: "Bottom line",
      paragraphs: [
        "The strongest current regimen is the **Russian 0.15% product instruction**: two drops per nostril three times daily for 14 days. The strongest historical trial dose is **2,700 mcg/day** in three divided intranasal doses for 14 days — **not the same as the label**.",
        "Intranasal delivery has direct human precedent; **subcutaneous dosing does not**. Animal **300 mcg/kg** stays preclinical. The highest-value next study: placebo-controlled **900 vs 2,700 mcg/day** with validated PK and nasal delivery.",
      ],
      highlight:
        "Label ≈900 mcg/day · Trial 2,700 mcg/day · Do not merge. Drops ≠ sprays without measurement.",
    },
  ],
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        question: "What is the current Selank nasal-drop dosage?",
        answer:
          "Russian instructions: two drops in each nostril three times daily for 14 days. Repeat course possible after 1–3 weeks following medical consultation.",
      },
      {
        question: "How many micrograms is the Russian label dose?",
        answer:
          "At 0.15% (1.5 mg/mL) and ~75 mcg/drop historically referenced, four drops per administration ≈ 300 mcg and three daily doses ≈ 900 mcg/day. Drop size varies — validate delivered mass before claiming exact micrograms.",
      },
      {
        question: "What dose was used in the best-known human study?",
        answer:
          "The 2008 clinical program used 2,700 mcg/day intranasally, divided into three 900-mcg administrations, for 14 days.",
      },
      {
        question: "Is 250–500 mcg the standard Selank dose?",
        answer:
          "It is a common online range but not the best-documented clinical standard. It may overlap per-administration interpretations of the label, but provenance is often unclear (per spray, nostril, or day).",
      },
      {
        question: "Is Selank dosed by body weight?",
        answer:
          "Not in established human protocols. Weight-based figures such as 300 mcg/kg come from animal research.",
      },
      {
        question: "Is there a validated injectable Selank dose?",
        answer:
          "No peer-reviewed human subcutaneous dose-finding study was located. Injectable schedules are community conventions.",
      },
      {
        question: "Is N-Acetyl Selank Amidate the same dose as Selank?",
        answer:
          "No. The amidated analog (Ac-TKPRPGP-NH2) is a separate test article with no validated dose equivalence to parent Selank.",
      },
      {
        question: "What is the maximum Selank dose?",
        answer:
          "Maximum tolerated human dose not established. Largest clearly documented daily amount in the principal program is 2,700 mcg/day — not a universal maximum or recommendation.",
      },
      {
        question: "Does Selank require titration?",
        answer:
          "Russian label and best-documented human study used fixed dosing. Online titration schedules are anecdotal.",
      },
      {
        question: "How long can Selank be used?",
        answer:
          "Most human courses lasted about 14 days. Evidence is inadequate for continuous use over months or years.",
      },
    ],
  },
  sources: {
    title: "References",
    items: [
      {
        authors: "Selank manufacturer",
        title: "Current Russian 0.15% nasal-drop instructions",
        detail: "Official product labeling.",
        href: "https://selank.ru/o-selanke/instruktsiya/",
      },
      {
        authors: "RLS",
        title: "Selank 0.15% Russian monograph",
        detail: "Drug reference dosing.",
        href: "https://www.rlsnet.ru/drugs/selank-36612",
      },
      {
        authors: "Zozulia AA et al.",
        title: "Selank in GAD and neurasthenia",
        detail: "2008 · 2,700 mcg/day program.",
        href: "https://pubmed.ncbi.nlm.nih.gov/18454096/",
      },
      {
        authors: "Syunyakov TS",
        title: "Clinical-pharmacology dissertation",
        detail: "2,700 mcg/day · 3 divided IN doses.",
        href: "https://medical-diss.com/medicina/kliniko-farmakologicheskaya-harakteristika-anksioliticheskogo-deystviya-novogo-peptidnogo-preparata-selank",
      },
      {
        authors: "Uchakina ON et al.",
        title: "Immunomodulatory effects of Selank",
        detail: "2008 · dose not in abstract.",
        href: "https://pubmed.ncbi.nlm.nih.gov/18577961/",
      },
      {
        authors: "Volkova AA et al.",
        title: "Selank and GABAergic gene expression",
        detail: "2016 · 300 mcg/kg rats.",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4757669/",
      },
      {
        authors: "PubChem",
        title: "Selank",
        detail: "CID 11765600 · 751.9 g/mol.",
        href: "https://pubchem.ncbi.nlm.nih.gov/compound/11765600",
      },
      {
        authors: "FDA",
        title: "Bulk drug substance compounding safety",
        detail: "Selank acetate (TP-7) concerns.",
        href: "https://www.fda.gov/drugs/human-drug-compounding/certain-bulk-drug-substances-use-compounding-may-present-significant-safety-risks",
      },
    ],
  },
};
