/**
 * Thymalin (bovine thymus peptide extract) dosage guide.
 * Regional adult IM: 5–20 mg daily × 3–10 days (30–100 mg/course).
 * Clearest fixed study: 10 mg in 2 mL saline IM × 10 days (100 mg total).
 * Heterogeneous extract — no single MW, moles, or SC bridge. ≠ Tα1, Thymogen, thymulin.
 */

export function thymalinCourseTotal({ dailyMg, days } = {}) {
  const d = Number(days);
  const daily = Number(dailyMg);
  if (!Number.isFinite(d) || d <= 0 || !Number.isFinite(daily) || daily < 0) {
    return null;
  }
  return {
    dailyMg: daily,
    days: d,
    cumulativeMg: daily * d,
  };
}

export function thymalinAmountFromVial({
  vialMg = 10,
  diluentMl,
  targetMg,
} = {}) {
  const vial = Number(vialMg);
  const dil = Number(diluentMl);
  const target = Number(targetMg);
  if (
    !Number.isFinite(vial) ||
    vial <= 0 ||
    !Number.isFinite(dil) ||
    dil <= 0 ||
    !Number.isFinite(target) ||
    target <= 0
  ) {
    return null;
  }
  const concMgPerMl = vial / dil;
  const volumeMl = target / concMgPerMl;
  const units = volumeMl * 100;
  return {
    vialMg: vial,
    diluentMl: dil,
    targetMg: target,
    concMgPerMl,
    volumeMl,
    units,
    fullVial: target >= vial,
  };
}

export const THYMALIN_IDENTITY = [
  {
    id: "extract-correct",
    label: "Verified bovine thymus extract (Thymalin)",
    verdict: "Matches Thymalin identity on this page",
    detail:
      "Heterogeneous polypeptide extract from calf/young-cattle thymus — 10 mg extract + 20 mg glycine per current vial. Confirm source tissue, peptide fingerprint, potency assay, sterility, and endotoxin — not one HPLC peak.",
  },
  {
    id: "thymogen",
    label: "Thymogen / Thymagen (α-Glu-Trp)",
    verdict: "Different material — defined dipeptide, not extract",
    detail:
      "Timogen uses ~100 µg/day microgram schedules. Extract milligram labels are not dipeptide-equivalent doses.",
  },
  {
    id: "ta1",
    label: "Thymosin alpha-1 / thymalfasin",
    verdict: "Different peptide — 28 amino acids",
    detail:
      "Defined synthetic acetylated peptide with separate trials and doses. Thymalin is not a 28-aa peptide.",
  },
  {
    id: "thymulin",
    label: "Thymulin (FTS-Zn nonapeptide)",
    verdict: "Different endogenous thymic factor",
    detail:
      "Zinc-dependent nonapeptide with its own literature. Extract schedules cannot be assigned to thymulin.",
  },
  {
    id: "epitalon",
    label: "Epitalon (synthetic AEDG) from longevity stacks",
    verdict: "Different peptide — historical combo used Epithalamin extract",
    detail:
      "2003 gerontology used Thymalin ± Epithalamin (pineal extract), not synthetic Epitalon. Modern stacks conflate evidence.",
  },
  {
    id: "single-peptide",
    label: "“Thymalin” labeled as one sequence / CAS / MW",
    verdict: "Mislabeled — extract has no single molecular weight",
    detail:
      "KE, EW, or EDP may contribute to activity but do not define whole-vial dose. Molar conversion is not meaningful for the extract.",
  },
];

export const THYMALIN_HUMAN_STATUS = [
  ["Standardized US prescribing dose", "None"],
  ["Current Russian adult IM", "5–20 mg daily × 3–10 days (30–100 mg/course)"],
  ["Russian preventive IM", "5–10 mg daily × 3–5 days"],
  ["Clearest modern fixed study", "10 mg in 2 mL saline IM × 10 days (100 mg)"],
  ["Route with strongest support", "Intramuscular"],
  ["Validated human SC dose", "Not located"],
  ["Adult weight-based dose", "Not established"],
  ["Whole-extract human PK", "Not established"],
  ["Molar dose", "Not scientifically meaningful for whole extract"],
];

export const THYMALIN_PROTOCOL_PHASES = [
  {
    id: "screen",
    phase: "Screening",
    days: "−35 to −15",
    exposure: "None",
    purpose:
      "Consent, eligibility labs, influenza-vaccine planning, baseline HAI titers",
  },
  {
    id: "dosing",
    phase: "IM study extract",
    days: "−10 to −1",
    exposure: "10 mg extract in 2 mL IM daily × 10 (100 mg cumulative)",
    purpose:
      "Blinded vs glycine-matched placebo; peptide-feature PK days −10 and −1; sentinel DSMB",
  },
  {
    id: "vaccine",
    phase: "Licensed vaccine",
    days: "0",
    exposure: "Standard seasonal influenza vaccine",
    purpose: "Standardized immune challenge after extract course",
  },
  {
    id: "day28",
    phase: "Primary safety",
    days: "28",
    exposure: "None",
    purpose: "Primary safety endpoint + vaccine antibody sampling",
  },
  {
    id: "day90",
    phase: "Final follow-up",
    days: "90",
    exposure: "None",
    purpose: "Final safety, infection diary, anti-product antibodies",
  },
];

export const THYMALIN_COURSE_PRESETS = [
  {
    id: "label-min",
    label: "Label minimum (5 mg × 3 d)",
    dailyMg: 5,
    days: 3,
    note: "15 mg — below 30 mg treatment-course total",
  },
  {
    id: "covid",
    label: "2021 severe-COVID study",
    dailyMg: 10,
    days: 10,
    note: "100 mg total · 10 mg in 2 mL saline IM daily",
  },
  {
    id: "label-max",
    label: "Label maximum (10 mg × 10 d)",
    dailyMg: 10,
    days: 10,
    note: "100 mg — upper labeled duration at mid-range daily dose",
  },
  {
    id: "gero-intermittent",
    label: "2003 Kyiv intermittent",
    dailyMg: 10,
    days: 5,
    note: "Five doses 2–3 days apart = 50 mg/course — not daily",
  },
  {
    id: "thy1",
    label: "Proposed THYMALIN-1 replication",
    dailyMg: 10,
    days: 10,
    note: "Matches COVID trial · research design only",
  },
];

export const THYMALIN_COMPARE = {
  clinical: {
    title: "Medicinal label & human studies",
    status: "Product- and indication-specific · IM",
    rows: [
      ["Treatment IM", "5–20 mg daily × 3–10 days"],
      ["Preventive IM", "5–10 mg daily × 3–5 days"],
      ["COVID trial", "10 mg in 2 mL saline IM × 10 days"],
      ["Gerontology", "10 mg daily × 10 d OR five spaced doses"],
      ["SC", "No direct human route bridge located"],
      ["Dose response", "Not established across 5–20 mg"],
    ],
  },
  anecdotal: {
    title: "Current anecdotal / commercial",
    status: "Label/trial numbers + route migration",
    rows: [
      ["Short SC cycle", "5–10 mg SC daily × 5–10 days"],
      ["Full SC cycle", "10 mg SC × 10 days · repeat 6–12 mo"],
      ["Higher end", "15–20 mg IM or SC × 7–10 days"],
      ["Diluent", "Often bacteriostatic water — not label saline"],
      ["Stacks", "Epitalon, Tα1, Thymogen combinations"],
      ["Primary source", "None for SC bridge or stacks"],
    ],
  },
};

export const THYMALIN_CLAIMS = [
  {
    id: "standard-dose",
    claim: "There is a universal Thymalin dose",
    verdict: "False",
    detail:
      "Regional label: 5–20 mg IM × 3–10 days — product- and jurisdiction-specific, not every research vial or purpose.",
  },
  {
    id: "one-peptide",
    claim: "Thymalin is one peptide with a molecular weight",
    verdict: "False",
    detail:
      "Heterogeneous bovine-thymus extract. No single sequence, formula, MW, or meaningful molar dose.",
  },
  {
    id: "thymogen-same",
    claim: "Thymalin is the same as Thymogen / Thymagen",
    verdict: "False",
    detail:
      "Thymogen is defined α-Glu-Trp (~100 µg/day). Extract milligrams are not dipeptide-equivalent.",
  },
  {
    id: "ta1-same",
    claim: "Thymalin is thymosin alpha-1",
    verdict: "False",
    detail: "TA-1 is a defined 28-aa peptide. Thymalin is a multi-peptide extract.",
  },
  {
    id: "sc-validated",
    claim: "SC cycles are clinically validated",
    verdict: "False",
    detail:
      "Registered product and clearest studies use IM. No direct human SC PK or route bridge located.",
  },
  {
    id: "covid-proven",
    claim: "COVID trial proved Thymalin halves mortality",
    verdict: "Overstated",
    detail:
      "Small single-blind single-center study — hypothesis-generating, not definitive treatment evidence.",
  },
  {
    id: "longevity",
    claim: "Gerontology study proves Thymalin extends lifespan",
    verdict: "Unsupported",
    detail:
      "Pooled cohorts, extraordinary unreplicated mortality claims, Epithalamin combinations — not a longevity prescription.",
  },
  {
    id: "moles",
    claim: "Convert 10 mg vial to micromoles",
    verdict: "Invalid for whole extract",
    detail:
      "Molar math requires one MW. Using KE/EW/TA-1 MW calculates the wrong substance.",
  },
  {
    id: "20mg-vial-course",
    claim: "A 20 mg vial is one clinical course",
    verdict: "False",
    detail:
      "Full adult IM course is 30–100 mg total — but a 20 mg research vial ≠ two registered 10 mg vials without analytical bridging.",
  },
  {
    id: "wada-ok",
    claim: "Not on WADA list means allowed",
    verdict: "Unsafe assumption",
    detail:
      "S0, national status, route, and undisclosed extract components still matter for athletes.",
  },
];

export const THYMALIN_EVIDENCE_LADDER = [
  {
    level: "US prescribing label",
    exists: "None",
    confidence: "None",
  },
  {
    level: "Regional medicinal monograph",
    exists: "5–20 mg IM × 3–10 days; 30–100 mg/course",
    confidence: "Product-specific moderate",
  },
  {
    level: "Modern controlled human study",
    exists: "2021 COVID RCT: 10 mg IM × 10 days",
    confidence: "Condition-specific · unreplicated",
  },
  {
    level: "Historical gerontology",
    exists: "2003 multiple schedules · repeated courses",
    confidence: "Low · extraordinary claims unreplicated",
  },
  {
    level: "Smaller historical reports",
    exists: "Pulmonary, burn, infection adjuncts",
    confidence: "Very low · doses often unavailable",
  },
  {
    level: "Cell culture (100 ng/mL)",
    exists: "Mechanistic only",
    confidence: "Not a human dose",
  },
  {
    level: "Online SC / stacks",
    exists: "5–20 mg SC cycles · Bacteriostatic water conventions",
    confidence: "Anecdotal",
  },
];

export const THYMALIN_AE_SIMPLE = [
  {
    category: "Label-listed effects",
    note: "Allergic reactions; contraindicated in pregnancy/breastfeeding; caution with significant allergy history",
  },
  {
    category: "Extract-specific risks",
    note: "Batch variability, anti-product antibodies, BSE/TSE source controls, endotoxin/particulates, misidentification with synthetic peptides",
  },
  {
    category: "Long-term unknowns",
    note: "Repeated annual/semiannual courses, autoimmune effects, transplant/interaction with biologics — inadequately characterized",
  },
  {
    category: "Immune framing",
    note: "Immune marker changes ≠ automatic clinical benefit; context-dependent effects in cell studies",
  },
];

export const THYMALIN_AE_FULL = [
  {
    domain: "Hypersensitivity",
    items:
      "Local or systemic allergy to bovine peptides, tissue proteins, glycine, or contaminants; anaphylaxis risk",
  },
  {
    domain: "Product quality",
    items:
      "Batch fingerprint drift, endotoxin, microbial contamination, BSE/TSE control failure, substitution with defined peptide",
  },
  {
    domain: "Immune / disease context",
    items:
      "Autoimmunity, transplant, active cancer, biologic therapy — direction of effect uncertain; specialist oversight required",
  },
  {
    domain: "Urgent red flags",
    items:
      "Dyspnea, throat/facial swelling, widespread hives, syncope, chest pain, focal neuro symptoms, spreading injection-site infection",
  },
];

export const THYMALIN_DOSAGE_GUIDE = {
  title:
    "Thymalin Dosage: Human Studies, Timogen Labels, and Extract Quality",
  updated: "Updated August 2026",
  callout:
    "**Research note:** Thymalin is a **heterogeneous bovine-thymus peptide extract**, not one peptide. A **10 mg vial = 10 mg total extract**, not 10 mg of Thymogen, Thymosin Alpha-1, or another defined peptide. This page documents product-specific medicinal instructions and human exposures — **not** personal treatment advice. The complete protocol below is an investigator-run study framework — **not** a self-injection plan.",
  intro: [
    "**Current Russian adult medicinal instructions:** **5–20 mg IM** once daily for **3–10 days** (**30–100 mg** per course). Preventive: **5–10 mg IM** daily for **3–5 days**.",
    "**Clearest modern fixed exposure:** **10 mg in 2 mL 0.9% saline IM** once daily for **10 days** (**100 mg** total) in a small 2021 severe-COVID RCT. Historical gerontology used **10 mg daily × 10 days** or **five 10 mg doses spaced 2–3 days apart** — repeated courses are **not** validated longevity prescriptions.",
    "**SC use is an online extrapolation.** Registered product and clearest studies used **IM**. No molar dose exists for the whole extract. **≠ Thymogen, TA-1, thymulin.**",
  ],
  glance: {
    title: "Thymalin dosage in 30 seconds",
    table: {
      headers: ["Question", "Research summary"],
      rows: [
        ["**Identity**", "Bovine thymus peptide extract — not one peptide"],
        ["**10 mg vial**", "10 mg extract + 20 mg glycine (current product)"],
        ["**≠**", "Thymogen · TA-1 · thymulin · Epitalon"],
        ["**Regional adult IM**", "5–20 mg daily × 3–10 days"],
        ["**Clearest fixed study**", "10 mg in 2 mL saline IM × 10 days"],
        ["**Validated SC**", "Not located"],
        ["**Molar dose**", "Not meaningful for whole extract"],
        ["**Main label AE**", "Allergic reactions"],
      ],
    },
  },
  sections: [
    {
      id: "what-is",
      title: "What is Thymalin?",
      paragraphs: [
        "Thymalin (also **Timalin**) is a polypeptide complex extracted from bovine thymus tissue — calves and young cattle under one year. Each current medicinal vial contains **10 mg extract** and **20 mg glycine**. It is **not** one sequence, formula, or molecular weight.",
        "Short sequences such as **KE**, **EW**, and **EDP** may contribute to activity, but their presence does not establish how much of each is in a 10 mg vial or whether synthetic short-peptide evidence transfers to the full extract.",
      ],
      widget: "thymalin-identity-gate",
      tables: [
        {
          caption: "10 mg does not identify a molecular dose",
          headers: ["Property", "Defined peptide", "Thymalin extract"],
          rows: [
            ["One structure", "Yes", "No"],
            ["Molecular weight", "Yes", "No — no meaningful molar dose"],
            ["Primary identity", "Sequence + assay", "Source tissue + fingerprint + potency"],
            ["Batch equivalence", "Defined active molecule", "Multivariate comparability program"],
          ],
        },
      ],
    },
    {
      id: "status",
      title: "Current medicinal and regulatory status",
      paragraphs: [
        "Thymalin is a **registered prescription medicine in Russia** (LP-№(005867)-(RG-RU), 2024). Indications are regional — immune-deficient states, infections, impaired regeneration, post-chemo/radiotherapy suppression, etc.",
        "There is **no standardized US prescribing dose**. A US investigational program would need modern CMC demonstrating source-animal controls, adventitious-agent safety, lot consistency, sterility, endotoxin, and reproducible potency.",
      ],
    },
    {
      id: "human-doses",
      title: "Human and regional product dosages",
      paragraphs: [
        "Regional Timogen and published trials provide the clearest primary exposure records for **alpha-Glu-Trp**; this page covers the **extract** only.",
      ],
      widget: "thymalin-human-status",
      tables: [
        {
          caption: "Key human exposures",
          headers: ["Source", "Exposure", "Route / duration", "Main limit"],
          rows: [
            [
              "Current Russian monograph",
              "5–20 mg/day adults",
              "IM × 3–10 days",
              "Product-specific · not dose-ranging RCT",
            ],
            [
              "2021 severe-COVID trial",
              "10 mg in 2 mL saline",
              "IM daily × 10 days",
              "Small · single-blind · early-pandemic era",
            ],
            [
              "2003 St. Petersburg cohort",
              "10 mg daily × 10 days",
              "IM · repeated 1 year later",
              "Historical gerontology · not current Rx",
            ],
            [
              "2003 Kyiv cohort",
              "Five 10 mg doses 2–3 d apart",
              "IM · q 5–6 mo × 3 years",
              "Intermittent schedule · unreplicated outcomes",
            ],
            [
              "Cochrane thymus extracts",
              "Multiple preparations",
              "Various cancer-adjunct trials",
              "Not one standardized Thymalin dose",
            ],
          ],
        },
      ],
      paragraphsAfter: [
        "The 2021 trial reported clinical improvement and lower in-hospital mortality, but was **small, single-center, single-blind**, and **not independently replicated**. Mortality was secondary; confidence intervals are wide.",
      ],
    },
    {
      id: "landscape",
      title: "Reported research dosage landscape",
      paragraphs: [
        "The span from **5 mg × 3 days** to **20 mg × 10 days** is a **label and study description**, not a dose-response curve. No trial randomized 5 vs 10 vs 20 mg to show higher extract mass produces better outcomes.",
      ],
      widget: "thymalin-clinical-vs-anecdotal",
    },
    {
      id: "course-math",
      title: "Course totals and historical schedules",
      paragraphs: [
        "Cumulative extract mass = daily mg × administrations. Five spaced 10 mg doses = **50 mg/course**, not a daily 10 mg schedule. A **20 mg daily** amount requires **two full 10 mg medicinal vials**.",
      ],
      widget: "thymalin-course-calc",
    },
    {
      id: "protocol",
      title: "Complete evidence-anchored research protocol (THYMALIN-1)",
      paragraphs: [
        "Most defensible next study: blinded **10 mg IM × 10 days** with GMP lot, **glycine-matched placebo**, batch-specific peptide analytics, and licensed influenza vaccine on day 0 — **not** SC escalation or indefinite calendar cycling.",
        "**Proposed exposure:** **10 mg** total extract in **2 mL** IM once daily on days **−10 through −1** (**100 mg** cumulative). Primary objective: safety through day 28; secondary: vaccine humoral response.",
      ],
      widget: "thymalin-protocol-timeline",
      paragraphsAfter: [
        "No dose escalation, repeat course, loading, or taper. Whole-product “half-life” cannot be reported as one number — use batch-specific peptide-feature PK.",
      ],
    },
    {
      id: "recon",
      title: "Concentration and dose math",
      paragraphs: [
        "Current 10 mg vial + **1–2 mL isotonic saline** before IM injection. **10 mg in 2 mL = 5 mg/mL**. Adding water changes concentration and volume, **not** extract mass in the full vial.",
      ],
      widget: "thymalin-recon-calc",
      tables: [
        {
          caption: "Registered 10 mg vial concentrations",
          headers: ["Final volume", "Extract conc.", "Volume for 10 mg"],
          rows: [
            ["1 mL", "10 mg/mL", "1.0 mL — full vial"],
            ["2 mL", "5 mg/mL", "2.0 mL — full vial"],
          ],
        },
      ],
      paragraphsAfter: [
        "U-100 units are **volume markings only** (100 units = 1 mL). They do not establish potency, route, or IM suitability. **No mass-to-mole conversion** for the whole extract.",
      ],
    },
    {
      id: "preclinical",
      title: "Animal and laboratory research dosage",
      paragraphs: [
        "Historical animal work used thymus-derived polypeptide factors at **0.2–0.5 mg/rat** in carcinogenesis models and **100 ng/mL** in human cell cultures. These are model-specific — not human schedules.",
        "In-vitro **100 ng/mL** does not convert to an injectable human dose by matching body water or blood volume.",
      ],
    },
    {
      id: "mechanisms",
      title: "Why these doses were used — and what is unknown",
      paragraphs: [
        "The **5–20 mg** label range reflects historical short-course practice without a modern exposure-response model. **10 mg** = one full vial and the most traceable fixed study dose. **10 days** = upper labeled duration and 100 mg total at 10 mg/day.",
        "Thymalin has no validated single receptor, whole-product half-life, or pharmacodynamic threshold. “More immune activity” is not automatically beneficial.",
      ],
    },
    {
      id: "benefits",
      title: "Potential benefits: what has and has not been shown",
      tables: [
        {
          caption: "Claim vs evidence",
          headers: ["Claim", "Current conclusion"],
          rows: [
            [
              "Short IM courses documented (regional label)",
              "Yes — product-specific medicinal range",
            ],
            [
              "10 mg × 10 days in severe COVID (small RCT)",
              "Direct exposure + signal — not definitive treatment",
            ],
            [
              "Gerontology mortality reduction",
              "Historical report — unreplicated · multiple confounds",
            ],
            ["Validated SC protocol", "Not established"],
            ["Thymus regrowth / anti-aging dose", "Not established"],
            ["Universal infection prevention", "Not established"],
          ],
        },
      ],
    },
    {
      id: "safety",
      title: "Thymalin safety and side effects",
      paragraphs: [
        "Current monograph lists **allergic reactions**; contraindicates pregnancy/breastfeeding. Extract-specific risks include batch variability, immunogenicity, BSE/TSE controls, endotoxin, and misidentification.",
        "Immune modulation is **not** synonymous with “immune boosting.” Marker increases do not prove clinical benefit.",
      ],
      widget: "thymalin-adverse-events",
    },
    {
      id: "quality",
      title: "Product quality and storage",
      paragraphs: [
        "Credible release testing: bovine tissue identity, TSE/BSE assessment, viral/adventitious-agent program, multipeak peptide fingerprint, molecular-weight distribution, potency bioassay, sterility, endotoxin, stability. **“99% HPLC purity”** alone is misleading for a mixture.",
        "Registered product storage **2–25°C** unopened. That does not validate bacteriostatic-water reconstitution or 30-day refrigerated use for unrelated research vials.",
      ],
    },
    {
      id: "claims",
      title: "Common claims vs evidence",
      widget: "thymalin-claim-checker",
    },
    {
      id: "evidence-ladder",
      title: "Thymalin dosage evidence ladder",
      widget: "thymalin-evidence-ladder",
      paragraphsAfter: [
        "Thymalin’s **IM milligram range** is better documented than many research peptides — but dosing is **not fully established** across jurisdictions, products, or routes. Product identity and route discipline matter as much as nominal milligrams.",
      ],
    },
    {
      id: "anti-doping",
      title: "Sports and anti-doping considerations",
      paragraphs: [
        "Thymalin was **not named** on the **2026 WADA** list as of September 2026 — that is **not** athlete clearance. Heterogeneous composition and undisclosed constituents create extra risk. Athletes need written product-specific guidance.",
      ],
    },
    {
      id: "bottom-line",
      title: "Bottom line",
      paragraphs: [
        "Thymalin has real regional medicinal history: **5–20 mg IM daily** for short courses; clearest fixed research exposure **10 mg in 2 mL saline IM × 10 days** (**100 mg** total).",
        "Nominal milligrams cannot convert to moles or other thymic peptide doses. Online **SC** cycles, **bacteriostatic water**, stacks, and automatic six-month repetition extend beyond direct evidence. Next step: blinded IM trial with GMP lot, glycine placebo, batch fingerprint analytics, and standardized immune challenge.",
      ],
      highlight:
        "Extract ≠ Thymogen ≠ TA-1. 10 mg = total thymus extract mass. SC route and 20 mg vial “courses” are not validated clinical protocols.",
    },
  ],
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        question: "What is the standard Thymalin dose?",
        answer:
          "Current Russian instructions: 5–20 mg IM once daily for 3–10 days (30–100 mg per course). That is regional and product-specific — not universal for every vial or purpose.",
      },
      {
        question: "What is the most studied fixed protocol?",
        answer:
          "10 mg in 2 mL of 0.9% saline IM once daily for 10 days — 100 mg total — used in a 2021 severe-COVID trial and resembling one gerontology course.",
      },
      {
        question: "Is Thymalin one peptide?",
        answer:
          "No. It is a heterogeneous bovine-thymus extract with no single sequence, formula, molecular weight, or molar dose.",
      },
      {
        question: "Is Thymalin the same as Thymogen or thymosin alpha-1?",
        answer:
          "No. Thymogen is defined α-Glu-Trp (~100 µg/day). TA-1 is a 28-aa peptide. Extract milligrams are not interchangeable.",
      },
      {
        question: "Can Thymalin be given subcutaneously?",
        answer:
          "SC schedules circulate online, but the registered product and clearest studies use IM. No direct human SC route bridge was located.",
      },
      {
        question: "Did the COVID study prove Thymalin halves mortality?",
        answer:
          "No. It was small, single-center, single-blind, and hypothesis-generating — not definitive treatment evidence.",
      },
      {
        question: "Does the gerontology study prove Thymalin extends lifespan?",
        answer:
          "No. It pooled different cohorts and schedules with extraordinary unreplicated mortality claims — historical exposure, not a longevity prescription.",
      },
      {
        question: "Can a 10 mg vial be converted to micromoles?",
        answer:
          "No for the whole extract. Molar math requires one molecular weight, which Thymalin does not have.",
      },
      {
        question: "Is bacteriostatic water equivalent to saline?",
        answer:
          "No equivalence study was located. It changes excipients and does not prove fingerprint stability or multi-dose beyond-use dating.",
      },
      {
        question: "Can a 20 mg research vial be treated as two medicinal vials?",
        answer:
          "Not without comparative analytical and manufacturing evidence. Nominal mass alone does not establish the same fingerprint, potency, or sterility.",
      },
    ],
  },
  sources: {
    title: "References",
    items: [
      {
        authors: "Vidal Russia",
        title: "Thymalin medicinal monograph",
        detail: "Registration, composition, dosing, contraindications, storage.",
        href: "https://www.vidal.ru/drugs/thymalin__23838",
      },
      {
        authors: "Kuznik B et al.",
        title: "Thymalin in severe COVID-19 older patients",
        detail: "10 mg IM daily × 10 days; randomized single-blind trial.",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8654498/",
      },
      {
        authors: "Khavinson VKh, Morozov VG",
        title: "Peptides of pineal gland and thymus prolong human life",
        detail: "2003 gerontology program — multiple schedules.",
        href: "https://pubmed.ncbi.nlm.nih.gov/14523363/",
      },
      {
        authors: "Wolf E et al.",
        title: "Thymic peptides for cancer patients — Cochrane review",
        detail: "Multiple purified thymus extracts — not one Thymalin dose.",
        href: "https://pubmed.ncbi.nlm.nih.gov/21328265/",
      },
      {
        authors: "Avolio F et al.",
        title: "Peptides regulating inflammatory pathways in THP-1 cells",
        detail: "100 ng/mL cell culture — mechanistic only.",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8999041/",
      },
      {
        authors: "WADA",
        title: "2026 Prohibited List",
        detail: "Thymalin not named individually; S0 considerations.",
        href: "https://www.wada-ama.org/sites/default/files/2025-09/2026list_en_final_clean_september_2025.pdf",
      },
    ],
  },
};
