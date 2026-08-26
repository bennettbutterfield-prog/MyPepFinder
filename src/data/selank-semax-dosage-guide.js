/**
 * Selank + Semax blend dosage guide.
 * No peer-reviewed human fixed-combination trial located.
 * Panikratova 2020: separate groups (Selank 0.2 mg once vs Semax 1.2 mg once) — not coadministration.
 * Proposed factorial: 300 mcg each × 3/day × 14 days (900 mcg/day each).
 */

export const SELANK_FREE_MW = 751.9;
export const SEMAX_FREE_MW = 813.9;
export const SELANK_SEMAX_MOLAR_RATIO = SEMAX_FREE_MW / SELANK_FREE_MW;

export function selankSemaxMoles({ selankMcg, semaxMcg }) {
  const s = Number(selankMcg);
  const x = Number(semaxMcg);
  if (!Number.isFinite(s) || s <= 0 || !Number.isFinite(x) || x <= 0) return null;
  return {
    selankMcg: s,
    semaxMcg: x,
    selankMicromol: s / SELANK_FREE_MW,
    semaxMicromol: x / SEMAX_FREE_MW,
    massRatio: x / s,
    molarRatio: (x / SEMAX_FREE_MW) / (s / SELANK_FREE_MW),
  };
}

export function selankSemaxEquimolarSemaxMcg(selankMcg) {
  const s = Number(selankMcg);
  if (!Number.isFinite(s) || s <= 0) return null;
  return (s * SEMAX_FREE_MW) / SELANK_FREE_MW;
}

export function selankSemaxCumulative({ selankMcg, semaxMcg, dosesPerDay, days }) {
  const s = Number(selankMcg);
  const x = Number(semaxMcg);
  const freq = Number(dosesPerDay);
  const d = Number(days);
  if (
    !Number.isFinite(s) ||
    s <= 0 ||
    !Number.isFinite(x) ||
    x <= 0 ||
    !Number.isFinite(freq) ||
    freq <= 0 ||
    !Number.isFinite(d) ||
    d <= 0
  ) {
    return null;
  }
  const dailySelank = s * freq;
  const dailySemax = x * freq;
  return {
    selankMcg: s,
    semaxMcg: x,
    dosesPerDay: freq,
    days: d,
    dailySelank,
    dailySemax,
    dailyTotal: dailySelank + dailySemax,
    totalSelankMg: (dailySelank * d) / 1000,
    totalSemaxMg: (dailySemax * d) / 1000,
  };
}

export const SELANK_SEMAX_IDENTITY = [
  {
    id: "fixed-blend",
    label: "Fixed-ratio intranasal blend (1:1 by mass)",
    verdict: "Requires independent assay of each peptide per lot",
    detail:
      "One bottle with both TKPRPGP and MEHFPGP — must quantify Selank and Semax separately. HPLC % alone can hide wrong ratio.",
  },
  {
    id: "separate",
    label: "Separate Selank + Semax products same period",
    verdict: "Different from fixed blend — allows independent dose adjustment",
    detail:
      "Two formulations may differ in excipients, preservatives, and delivery. Staggered timing changes interaction window.",
  },
  {
    id: "vial-label",
    label: "“Selank 5 mg + Semax 5 mg” vial only",
    verdict: "Vial inventory ≠ per-administration dose",
    detail:
      "Reconstitution volume, concentration, pump actuation, and sprays per dose must be specified. Label alone is nonreproducible.",
  },
  {
    id: "ambiguous",
    label: "“200 mcg blend” without component split",
    verdict: "Nonreproducible — could mean total or each peptide",
    detail:
      "Must state X mcg Selank + Y mcg Semax per administration, Z times/day, route, duration.",
  },
];

export const SELANK_SEMAX_DUAL_COMPARE = [
  { property: "Sequence", selank: "TKPRPGP", semax: "MEHFPGP" },
  { property: "Origin", selank: "Tuftsin analog", semax: "ACTH(4–7)-PGP analog" },
  { property: "MW (free peptide)", selank: "~751.9 Da", semax: "~813.9 Da" },
  { property: "Russian IN concentration", selank: "0.15% (1.5 mg/mL)", semax: "0.1% (1 mg/mL) lower-dose" },
  { property: "Shared motif", selank: "C-terminal Pro-Gly-Pro", semax: "C-terminal Pro-Gly-Pro" },
  { property: "Typical parent daily (lower context)", selank: "~900 mcg/day IN", semax: "400–900 mcg/day IN" },
];

export const SELANK_SEMAX_COMBO_STATUS = [
  ["Fixed-combination human trial", "None located"],
  ["Human coadministration PK", "None located"],
  ["Pharmacodynamic synergy data", "None located"],
  ["Maximum tolerated combination dose", "Not established"],
  ["Validated SC combination dose", "None"],
  ["Authorized fixed-combination label", "None"],
  ["Comparative fMRI (separate groups)", "Selank 0.2 mg vs Semax 1.2 mg once each"],
];

export const SELANK_SEMAX_FMRI_STUDY = [
  { group: "Semax", n: 14, dose: "1.2 mg 1% IN once", volume: "60 µL/nostril", note: "Separate group — not combination" },
  { group: "Selank", n: 16, dose: "0.2 mg 0.15% IN once", volume: "60 µL/nostril", note: "Separate group — not combination" },
  { group: "Placebo", n: 22, dose: "0.1% nipagin", volume: "60 µL/nostril", note: "Connectivity surrogate only" },
];

export const SELANK_SEMAX_PARENT_ANCHORS = {
  selank: [
    ["Current Russian label", "2 drops/nostril × 3/day × 14 d", "~900 mcg/day"],
    ["Zozulia 2008 program", "900 mcg × 3/day × 14 d", "2,700 mcg/day"],
    ["Panikratova 2020 fMRI", "200 mcg once", "Single acute exposure"],
  ],
  semax: [
    ["Mental fatigue / adaptation (0.1%)", "2–3 drops/nostril × 2–3/day", "400–900 mcg/day · 3–5 d"],
    ["Optic-nerve regimen", "2–3 drops × 2–3/day", "600–900 mcg/day · 7–10 d"],
    ["Panikratova 2020 fMRI", "1.2 mg 1% once", "Acute · not wellness blend context"],
    ["1% stroke regimens", "mg/day range", "Not transferable to blend"],
  ],
};

export const SELANK_SEMAX_ANECDOTAL = [
  {
    id: "low",
    label: "Low fixed blend",
    selank: "50–100 mcg",
    semax: "50–100 mcg",
    frequency: "1–2× daily",
    route: "IN",
    duration: "10–14 days",
    basis: "Commercial/community",
  },
  {
    id: "common",
    label: "Common fixed blend",
    selank: "100–250 mcg",
    semax: "100–250 mcg",
    frequency: "1–3× daily",
    route: "IN",
    duration: "10–20 days",
    basis: "Most repeated online range",
  },
  {
    id: "higher",
    label: "Higher fixed blend",
    selank: "300–500 mcg",
    semax: "300–500 mcg",
    frequency: "1–2× daily",
    route: "IN",
    duration: "10–14 days",
    basis: "Community · limited tolerability data",
  },
  {
    id: "staggered",
    label: "Separate bottles staggered",
    selank: "250–500 mcg",
    semax: "100–300 mcg",
    frequency: "Semax AM · Selank later",
    route: "IN",
    duration: "10–21 days",
    basis: "Community rationale · not trial tested",
  },
  {
    id: "sc",
    label: "Injectable convention",
    selank: "100–500 mcg/day",
    semax: "100–600 mcg/day",
    frequency: "Usually QD",
    route: "SC",
    duration: "10 d – 8 wk",
    basis: "Very low evidence",
  },
  {
    id: "proposed",
    label: "Proposed factorial study",
    selank: "300 mcg",
    semax: "300 mcg",
    frequency: "3× daily (08:00, 12:00, 16:00)",
    route: "IN",
    duration: "14 days",
    basis: "Investigator protocol · not clinical dose",
  },
];

export const SELANK_SEMAX_CUMULATIVE_PRESETS = [
  { id: "50bid", label: "50+50 mcg BID × 14 d", selank: 50, semax: 50, freq: 2, days: 14 },
  { id: "100tid", label: "100+100 mcg TID × 14 d", selank: 100, semax: 100, freq: 3, days: 14 },
  { id: "factorial", label: "Proposed 300+300 TID × 14 d", selank: 300, semax: 300, freq: 3, days: 14 },
  { id: "500bid", label: "500+500 mcg BID × 14 d", selank: 500, semax: 500, freq: 2, days: 14 },
];

export const SELANK_SEMAX_COMPARE = {
  clinical: {
    title: "Parent-product intranasal anchors",
    status: "Separate products · not combination validation",
    rows: [
      ["Selank label-like", "~900 mcg/day Selank"],
      ["Semax lower-context", "400–900 mcg/day Semax"],
      ["Combination trial", "None located"],
      ["fMRI 2020", "Separate single-dose groups only"],
    ],
  },
  anecdotal: {
    title: "Commercial / community blends",
    status: "50–500 mcg each · 1:1 mass common",
    rows: [
      ["Typical per admin", "100–250 mcg of each"],
      ["Fixed ratio", "1:1 by mass (not equimolar)"],
      ["“Blend dose” ambiguity", "Total vs each peptide often unstated"],
      ["SC schedules", "No validated human combination basis"],
    ],
  },
};

export const SELANK_SEMAX_PRECLINICAL = [
  { peptide: "Selank", model: "Wistar rats", dose: "300 mcg/kg", route: "IN", note: "GABAergic gene expression — parent only" },
  { peptide: "Selank", model: "Rats UCMS", dose: "300 mcg/kg/day", route: "IN × 14 d", note: "Stress model — not with Semax" },
  { peptide: "Semax", model: "Rats", dose: "50 mcg/kg", route: "IN once", note: "Hippocampal BDNF/TrkB — parent only" },
  { peptide: "Semax", model: "Rats MCAO", dose: "100 mcg/kg", route: "IP", note: "Ischemia context — not blend" },
  { peptide: "Both mentioned", model: "6-OHDA rats", dose: "Separate arms", route: "Varies", note: "Parallel program — not coadministration proof" },
];

export const SELANK_SEMAX_PART_A = [
  { period: "1", treatment: "Placebo", selank: 0, semax: 0 },
  { period: "2", treatment: "Selank 300 mcg", selank: 300, semax: 0 },
  { period: "3", treatment: "Semax 300 mcg", selank: 0, semax: 300 },
  { period: "4", treatment: "Combination", selank: 300, semax: 300 },
];

export const SELANK_SEMAX_PART_B = [
  { arm: "Placebo", selankDay: 0, semaxDay: 0, label: "Matched vehicle × 3/day" },
  { arm: "Selank mono", selankDay: 900, semaxDay: 0, label: "300 mcg Selank + Semax placebo × 3" },
  { arm: "Semax mono", selankDay: 0, semaxDay: 900, label: "Selank placebo + 300 mcg Semax × 3" },
  { arm: "Combination", selankDay: 900, semaxDay: 900, label: "300 + 300 mcg × 3/day × 14 d" },
];

export const SELANK_SEMAX_CLAIMS = [
  {
    id: "synergy",
    claim: "Selank + Semax is proven synergistic",
    verdict: "Unproven",
    detail: "No human coadministration trial. fMRI study used separate groups. Synergy requires factorial interaction analysis.",
  },
  {
    id: "fmri-combo",
    claim: "The 2020 fMRI study proves the blend works",
    verdict: "False",
    detail: "Participants received Semax OR Selank OR placebo — never both together.",
  },
  {
    id: "focus-calm",
    claim: "Semax focus + Selank calm without anxiety",
    verdict: "Hypothesis only",
    detail: "Leading commercial rationale — not demonstrated in controlled combination trial.",
  },
  {
    id: "equimolar-11",
    claim: "1:1 mass ratio is equimolar and optimal",
    verdict: "False",
    detail: "813.9/751.9 ≈ 1.08:1 molar at equal mass. Ratio not shown biologically optimal.",
  },
  {
    id: "vial-dose",
    claim: "5 mg + 5 mg vial defines the dose",
    verdict: "False",
    detail: "Nominal vial contents — not per-administration exposure without concentration and actuation math.",
  },
  {
    id: "blend-200",
    claim: "200 mcg blend is a standard dose",
    verdict: "Ambiguous",
    detail: "Could mean 100+100 mcg or 200+200 mcg total peptide. Nonreproducible without component split.",
  },
  {
    id: "add-parent",
    claim: "Add Russian parent doses = safe combination dose",
    verdict: "Invalid",
    detail: "Parent products used separately in different indications. Addition does not prove combination safety or efficacy.",
  },
  {
    id: "stroke-semax",
    claim: "Use 1% Semax stroke dose in the blend",
    verdict: "Unsafe extrapolation",
    detail: "mg/day acute neurologic regimens are not cognitive/anxiety blend precedents.",
  },
  {
    id: "sc-same",
    claim: "Injectable blend equals intranasal micrograms",
    verdict: "Unproven",
    detail: "No validated human SC combination dose. Bioavailability and immune exposure differ by route.",
  },
];

export const SELANK_SEMAX_EVIDENCE_LADDER = [
  { tier: "1 · Fixed-combination label", evidence: "None", confidence: "None" },
  { tier: "2 · Randomized combination trial", evidence: "None located", confidence: "None" },
  { tier: "3 · Human PK/interaction study", evidence: "None located", confidence: "None" },
  { tier: "4 · Parent-product labels + studies", evidence: "Selank ~900–2700 mcg/day · Semax 400–900 mcg/day lower context", confidence: "Moderate parent · low for combo inference" },
  { tier: "5 · Comparative fMRI separate groups", evidence: "0.2 mg Selank vs 1.2 mg Semax once", confidence: "Separate exposure only" },
  { tier: "6 · Preclinical parallel research", evidence: "300 mcg/kg Selank · 50–100 mcg/kg Semax", confidence: "Hypothesis only" },
  { tier: "7 · Commercial/community blends", evidence: "50–500 mcg each · 1:1 mass", confidence: "Very low" },
];

export const SELANK_SEMAX_AE_SIMPLE = [
  {
    category: "Combination-specific",
    note: "No adequate human fixed-combination safety dataset. Attribution of events to Selank, Semax, interaction, excipient, or impurity requires factorial arms.",
  },
  {
    category: "Nasal",
    note: "Combined volume/formulation may alter mucosal tolerability vs either peptide alone — burning, epistaxis, smell change.",
  },
  {
    category: "Neurologic / psychiatric",
    note: "Semax-associated activation vs Selank-associated calm — insomnia, agitation, sedation, mood change possible; interaction unknown.",
  },
  {
    category: "FDA compounding",
    note: "Both selank acetate and Semax on withdrawn bulk lists — aggregation, impurities, immunogenicity concerns for compounded material.",
  },
];

export const SELANK_SEMAX_AE_FULL = [
  {
    domain: "Attribution",
    items: "Fixed blend insomnia/anxiety/sedation cannot be assigned without monotherapy and placebo arms",
  },
  {
    domain: "Drug interactions",
    items: "Benzodiazepines, stimulants, alcohol, antidepressants, vasoconstrictors — formal combination interaction studies lacking",
  },
  {
    domain: "Product quality",
    items: "Independent quantification of both peptides, compatibility/stability in combined formulation, delivered-dose uniformity",
  },
  {
    domain: "Exclusions",
    items: "Pregnancy, psychosis, bipolar I, acute suicidality, unstable CNS polypharmacy — initial trial should exclude",
  },
];

export const SELANK_SEMAX_DOSAGE_GUIDE = {
  title: "Selank + Semax Dosage: Research Evidence, Blend Conventions, and Study Protocol",
  updated: "Updated August 2026",
  callout:
    "**Research note:** Selank + Semax is a **two-peptide combination**, not a new chemical entity. **No peer-reviewed human fixed-combination trial** was located. Panikratova 2020 used **separate groups** (Selank 0.2 mg once vs Semax 1.2 mg once) — **not coadministration**. Proposed factorial dose: **300 mcg Selank + 300 mcg Semax intranasally × 3/day (08:00, 12:00, 16:00) × 14 days** — investigator protocol, not a clinical recommendation.",
  intro: [
    "**Selank** (TKPRPGP, ~751.9 Da) and **Semax** (MEHFPGP, ~813.9 Da) share a C-terminal Pro-Gly-Pro motif but differ in structure, development history, and proposed pharmacology. Combination products are commonly **1:1 by mass** — not exactly equimolar (~1.08:1 Selank:Semax mole ratio at equal mass).",
    "Parent Russian products are **separate medicinal products** with different concentrations and indication-specific schedules. Selank 0.15% label ≈ **900 mcg/day**; Semax 0.1% lower-context regimens commonly **400–900 mcg/day**. Neither creates a combination label.",
    "Every usable dose must specify: **X mcg Selank + Y mcg Semax per administration, frequency, route, duration.** A “5 mg + 5 mg vial” describes inventory, not per-dose exposure.",
  ],
  glance: {
    title: "Selank + Semax in 30 seconds",
    table: {
      headers: ["Question", "Current answer"],
      rows: [
        ["**Combination trial**", "None located"],
        ["**fMRI 2020**", "Separate groups · not blend"],
        ["**Common ratio**", "1:1 by mass (commercial)"],
        ["**Online IN range**", "~50–500 mcg of each per dose"],
        ["**Proposed study dose**", "300+300 mcg × 3/day × 14 d"],
        ["**Parent Selank/day**", "~900 mcg (label) · 2,700 mcg (trial)"],
        ["**Parent Semax/day**", "400–900 mcg (lower 0.1% context)"],
        ["**Validated SC combo**", "None"],
      ],
    },
  },
  sections: [
    {
      id: "identity",
      title: "Combination identity",
      paragraphs: [
        "“Selank + Semax” may mean a fixed-ratio bottle, two separate products used together, or staggered timing — **not automatically equivalent**. Fixed blends couple both doses and require compatibility, stability, and dual assay release.",
      ],
      widget: "selank-semax-identity-gate",
    },
    {
      id: "dual-compare",
      title: "Selank vs Semax at a glance",
      widget: "selank-semax-dual-compare",
    },
    {
      id: "equimolar",
      title: "Equal mass is not equimolar",
      paragraphs: [
        "At 300 mcg each: Selank ≈ **0.399 µmol**, Semax ≈ **0.369 µmol**. True equimolar mass would require ~**8.2% more Semax** than Selank by free-peptide mass.",
      ],
      widget: "selank-semax-equimolar-calc",
    },
    {
      id: "combo-status",
      title: "Direct combination evidence status",
      widget: "selank-semax-combo-status",
    },
    {
      id: "regulatory",
      title: "Regulatory and labeled-dosage context",
      paragraphs: [
        "No authorized Selank + Semax fixed-combination product located. **U.S.:** neither peptide has a prescribing label; FDA July 2026 proposed Semax not be included on 503A bulks list; both selank acetate and Semax appear on compounding safety materials.",
      ],
    },
    {
      id: "fmri",
      title: "The 2020 fMRI study was not a combination trial",
      paragraphs: [
        "Panikratova et al. randomized healthy participants to **separate** Semax, Selank, or placebo groups with **single intranasal doses** before repeat resting-state fMRI. Useful for comparative parent connectivity — **not combination, interaction, or synergy evidence**.",
      ],
      widget: "selank-semax-fmri-study",
    },
    {
      id: "parent-anchors",
      title: "Separate parent-product dosing anchors",
      widget: "selank-semax-parent-anchors",
      paragraphsAfter: [
        "Even if dose A of Selank and dose B of Semax were each used independently, **A + B is not validated** for safety, efficacy, or optimal ratio without factorial study.",
      ],
    },
    {
      id: "evidence-hierarchy",
      title: "Evidence hierarchy",
      widget: "selank-semax-evidence-hierarchy",
    },
    {
      id: "protocols",
      title: "Commonly reported combination protocols",
      widget: "selank-semax-anecdotal-protocols",
    },
    {
      id: "cumulative",
      title: "Cumulative exposure examples",
      widget: "selank-semax-cumulative-calc",
    },
    {
      id: "compare",
      title: "Parent anchors versus anecdotal blends",
      widget: "selank-semax-clinical-vs-anecdotal",
    },
    {
      id: "proposed-rationale",
      title: "Why the proposed study uses 300 + 300 mcg three times daily",
      paragraphs: [
        "**Selank 900 mcg/day** approximates current Russian drop-count regimen. **Semax 900 mcg/day** is at the upper boundary of historical short mental-fatigue/adaptation range and below high neurologic-injury schedules. **1:1 mass** matches common commercial convention. **08:00, 12:00, 16:00** avoids late-evening Semax. **14 days** matches Selank short course. Factorial arms permit interaction estimation.",
      ],
    },
    {
      id: "preclinical",
      title: "Preclinical evidence — mostly parallel, not combination",
      widget: "selank-semax-preclinical",
      paragraphsAfter: [
        "300 mcg/kg Selank and 50–100 mcg/kg Semax reflect **separate rodent programs** — not a human mass ratio or blend dose.",
      ],
    },
    {
      id: "safety",
      title: "Safety, side effects, and monitoring",
      widget: "selank-semax-adverse-events",
    },
    {
      id: "quality",
      title: "Fixed-blend product-quality requirements",
      paragraphs: [
        "Release must quantify **Selank and Semax separately** — chromatographic resolution, intact mass for each, compatibility/stability in combined formulation, delivered-dose uniformity, spray pattern, and in-use stability. Combination compatibility studies required before human fixed-blend use.",
      ],
    },
    {
      id: "protocol",
      title: "Complete proposed factorial research protocol",
      paragraphs: [
        "**Part A:** 24 healthy adults · 4-period crossover · placebo, Selank 300 mcg, Semax 300 mcg, combination · single dose · 7-day washout · sentinel cohort.",
        "**Part B:** 160 adults · 2×2 factorial · placebo, Selank mono (900 mcg/day), Semax mono (900 mcg/day), combination (900+900 mcg/day) · 14 days · follow-up to day 42 · double-dummy preferred.",
      ],
      widget: "selank-semax-protocol-timeline",
    },
    {
      id: "claims",
      title: "Claims versus evidence",
      widget: "selank-semax-claim-checker",
    },
    {
      id: "evidence-ladder",
      title: "Dosage evidence ladder",
      widget: "selank-semax-evidence-ladder",
    },
    {
      id: "bottom-line",
      title: "Bottom line",
      paragraphs: [
        "Selank + Semax is a **two-peptide regimen** with **very low combination dosing maturity**. Parent-product experience bounds a cautious intranasal study design; it does **not** validate coadministration, 1:1 ratio, or synergy.",
        "The highest-value next study is a **four-arm factorial trial** (placebo, Selank, Semax, combination) with validated dual assay, PK lead-in, and explicit interaction analysis — not extrapolation from separate fMRI groups or online vial labels.",
      ],
      highlight:
        "Separate groups ≠ combination trial. Vial mg ≠ per-dose mcg. 1:1 mass ≠ equimolar ≠ optimal.",
    },
  ],
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        question: "Is there a standard Selank + Semax dose?",
        answer:
          "No. Fixed blends commonly use equal masses, but no direct human trial has established a standard dose, ideal ratio, or maximum tolerated combination exposure.",
      },
      {
        question: "What does “200 mcg Selank + Semax” mean?",
        answer:
          "Ambiguous unless specified as 200 mcg total (e.g. 100+100) or 200 mcg of each (400 mcg total peptide).",
      },
      {
        question: "Is a 5 mg + 5 mg vial the dose?",
        answer:
          "It is nominal vial inventory (10 mg total peptide), not per-administration exposure. Concentration, volume, and actuations define the dose.",
      },
      {
        question: "Is 1:1 the best ratio?",
        answer:
          "Unknown. It is a commercial convention, not equimolar, and not shown biologically optimal.",
      },
      {
        question: "Did the fMRI study combine Selank and Semax?",
        answer:
          "No. Participants were in separate Semax, Selank, or placebo groups with single doses.",
      },
      {
        question: "Can Russian parent doses simply be added?",
        answer:
          "They can define a provisional research starting point, but addition does not prove combination safety or efficacy.",
      },
      {
        question: "Is there a validated subcutaneous blend dose?",
        answer:
          "No. Injectable online schedules are anecdotal and not intranasal equivalents.",
      },
      {
        question: "Why 300 + 300 mcg three times daily for 14 days?",
        answer:
          "Provisional factorial-study dose bracketing parent-product daily amounts (~900 mcg/day each) with 1:1 mass and Selank 14-day course — requires PK/tolerability lead-in.",
      },
      {
        question: "Does the combination improve focus without anxiety?",
        answer:
          "That is a testable commercial hypothesis, not a demonstrated clinical effect.",
      },
      {
        question: "What counts as synergy?",
        answer:
          "Combination effect exceeding the prespecified additive model in a factorial trial — not merely improvement from baseline or vs placebo without monotherapy arms.",
      },
    ],
  },
  sources: {
    title: "References",
    items: [
      {
        authors: "Panikratova YR et al.",
        title: "Functional connectomic Selank and Semax effects",
        detail: "2020 · separate groups · PMID 32342318.",
        href: "https://pubmed.ncbi.nlm.nih.gov/32342318/",
      },
      {
        authors: "Selank manufacturer",
        title: "Russian 0.15% instructions",
        detail: "Parent Selank anchor.",
        href: "https://selank.ru/o-selanke/instruktsiya/",
      },
      {
        authors: "Semax manufacturer",
        title: "Product instruction PDF",
        detail: "Concentration-specific regimens.",
        href: "https://semax.ru/upload/iblock/867/867fc8166acadfb577dc956d855999a3.pdf",
      },
      {
        authors: "Zozulia AA et al.",
        title: "Selank in GAD",
        detail: "2,700 mcg/day program.",
        href: "https://pubmed.ncbi.nlm.nih.gov/18454096/",
      },
      {
        authors: "FDA",
        title: "Semax PCAC briefing document",
        detail: "July 2026 · characterization concerns.",
        href: "https://www.fda.gov/media/193348/download",
      },
      {
        authors: "FDA",
        title: "Bulk substance compounding safety",
        detail: "Selank acetate and Semax.",
        href: "https://www.fda.gov/drugs/human-drug-compounding/certain-bulk-drug-substances-use-compounding-may-present-significant-safety-risks",
      },
      {
        authors: "Volkova AA et al.",
        title: "Selank GABAergic genes",
        detail: "300 mcg/kg rats.",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4757669/",
      },
      {
        authors: "Dolotov OV et al.",
        title: "Semax BDNF/TrkB rats",
        detail: "50 mcg/kg IN.",
        href: "https://pubmed.ncbi.nlm.nih.gov/16996037/",
      },
    ],
  },
};
