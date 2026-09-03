/**
 * Thymosin Alpha-1 + Thymalin (TA-1 Complex) dosage guide.
 * Exact-combination controlled study: none located.
 * Research template keeps separate vials, routes, and component schedules.
 */

export const TA1_THYMALIN_TEMPLATE = {
  ta1Mg: 1.6,
  ta1Route: "SC",
  ta1Frequency: "Twice weekly",
  ta1Weeks: 8,
  ta1Administrations: 16,
  ta1CumulativeMg: 25.6,
  thymalinMg: 10,
  thymalinRoute: "IM",
  thymalinDays: 10,
  thymalinAdministrations: 10,
  thymalinCumulativeMg: 100,
};

export function ta1ThymalinAmountFromVial({
  component = "ta1",
  vialMg,
  diluentMl,
  targetMg,
} = {}) {
  const vial = Number(
    vialMg ?? (component === "thymalin" ? 10 : 1.6)
  );
  const d = Number(diluentMl);
  const target = Number(targetMg);
  if (
    !Number.isFinite(vial) ||
    vial <= 0 ||
    !Number.isFinite(d) ||
    d <= 0 ||
    !Number.isFinite(target) ||
    target <= 0
  ) {
    return null;
  }
  const concMgPerMl = vial / d;
  const volumeMl = target / concMgPerMl;
  const units = volumeMl / 0.01;
  const exceedsTa1Anchor =
    component === "ta1" && concMgPerMl > 2.001;
  return {
    component,
    vialMg: vial,
    diluentMl: d,
    targetMg: target,
    concMgPerMl,
    volumeMl,
    units,
    exceedsTa1Anchor,
  };
}

export const TA1_THYMALIN_IDENTITY = [
  {
    id: "separate-correct",
    label: "Separate Tα1 + separate Thymalin vials",
    verdict: "Matches the research template on this page",
    detail:
      "Thymosin Alpha-1 is a defined acetylated 28-aa peptide (thymalfasin). Thymalin is a heterogeneous bovine-thymus extract. Keep separate identity, assay, route, syringe, and accountability records.",
  },
  {
    id: "complex-10",
    label: '10 mg “TA1 complex” vial (no ratio)',
    verdict: "Not reproducible — total mass alone hides both component doses",
    detail:
      "A 10 mg total-mass complex without a verified Tα1:Thymalin ratio cannot map to 1.6 mg Tα1 or 10 mg Thymalin extract. “2 mg of complex” is only 2 mg blend — not a known dose of either component.",
  },
  {
    id: "thymulin",
    label: "Confused with thymulin (FTS-Zn)",
    verdict: "Different molecule — zinc-dependent nonapeptide",
    detail:
      "Thymulin is a defined zinc-dependent nonapeptide. Thymalin is an animal-tissue extract. Schedules and milligram amounts are not interchangeable.",
  },
  {
    id: "same-molecule",
    label: "Assuming Tα1 and Thymalin are the same",
    verdict: "Incorrect — defined peptide vs heterogeneous extract",
    detail:
      "Any source that describes Thymalin as a single 28-amino-acid peptide is confusing it with Thymosin Alpha-1. Milligram labels are not molar equivalents.",
  },
  {
    id: "epithalamin",
    label: "Citing Thymalin + Epithalamin longevity study",
    verdict: "Different combination — not Tα1 + Thymalin evidence",
    detail:
      "Khavinson’s long-term gerontology combination used Thymalin with Epithalamin (pineal extract), not Thymosin Alpha-1. Do not cite it as proof of this stack.",
  },
];

export const TA1_THYMALIN_COMBO_STATUS = [
  ["Exact-combination clinical dose", "None established"],
  ["Exact-combination controlled trial", "None located"],
  ["Exact-combination animal study", "None located"],
  ["Tα1 human-trial anchor", "1.6 mg SC twice weekly (indication-specific)"],
  ["Thymalin medicinal / research anchor", "10 mg IM daily × 10 days (within 5–20 mg × 3–10 days)"],
  ["Same-vial / same-syringe compatibility study", "None located"],
  ["Synergy demonstrated", "No — factorial interaction analysis required"],
  ["U.S. prescribing label for the pair", "None"],
];

export const TA1_THYMALIN_PROTOCOL_PHASES = [
  {
    id: "baseline",
    phase: "Baseline",
    days: "−14 to −1",
    ta1: "None",
    thymalin: "None",
    purpose:
      "Eligibility, lot release, ≥2 baseline immune/CBC measurements, AE baseline",
  },
  {
    id: "week1",
    phase: "Week 1 (overlap)",
    days: "1–7",
    ta1: "1.6 mg SC on days 1 and 4",
    thymalin: "10 mg IM daily days 1–7",
    purpose:
      "Separate preparation, route, site, syringe, and time entry on overlap days — never mix",
  },
  {
    id: "week2",
    phase: "Week 2 (overlap ends)",
    days: "8–14",
    ta1: "1.6 mg SC on days 8 and 11",
    thymalin: "10 mg IM daily days 8–10, then none",
    purpose: "Complete 10-day Thymalin course; early post-course labs around day 11–14",
  },
  {
    id: "weeks3-8",
    phase: "Weeks 3–8 (Tα1 only)",
    days: "15–56",
    ta1: "1.6 mg SC twice weekly",
    thymalin: "None",
    purpose: "Finish 16 total Tα1 administrations (25.6 mg cumulative)",
  },
  {
    id: "followup",
    phase: "Follow-up / washout",
    days: "57–84",
    ta1: "None",
    thymalin: "None",
    purpose:
      "28 days after final Tα1 — persistence, delayed AEs, no automatic repeat cycle",
  },
];

export const TA1_THYMALIN_CUMULATIVE = [
  {
    measure: "Per administration",
    ta1: "1.6 mg",
    thymalin: "10 mg extract",
  },
  {
    measure: "Administrations",
    ta1: "16",
    thymalin: "10",
  },
  {
    measure: "Week 1 exposure",
    ta1: "3.2 mg",
    thymalin: "70 mg",
  },
  {
    measure: "Week 2 exposure",
    ta1: "3.2 mg",
    thymalin: "30 mg",
  },
  {
    measure: "Eight-week cumulative",
    ta1: "25.6 mg",
    thymalin: "100 mg extract",
  },
];

export const TA1_THYMALIN_COMPARE = {
  clinical: {
    title: "Evidence-anchored research template",
    status: "Hypothesis-generating · not clinically validated as a pair",
    rows: [
      ["Tα1", "1.6 mg SC twice weekly × 8 weeks"],
      ["Thymalin", "10 mg IM daily days 1–10"],
      ["Co-formulation", "Prohibited"],
      ["Cumulative", "25.6 mg Tα1 + 100 mg Thymalin extract"],
      ["Basis", "Independent human schedules retained; combo untested"],
    ],
  },
  community: {
    title: "Online clinic / database stack",
    status: "Anecdotal · not a controlled-trial regimen",
    rows: [
      ["Tα1", "1.6 mg daily or EOD × 2–4 weeks"],
      ["Thymalin", "10 mg daily × 10 days"],
      ["Route claimed", "Often both SC at different sites"],
      ["Issue", "More frequent Tα1 than BIW trials; SC Thymalin ≠ registered IM"],
      ["Outcome data", "None supporting the changes"],
    ],
  },
  complex: {
    title: "Commercial 10 mg “TA1 complex”",
    status: "Not reproducible without a component ratio",
    rows: [
      ["Label", "10 mg total vial"],
      ["Claimed draw", "2 mg, 2–3× weekly × 2–3 weeks SC"],
      ["Tα1 dose", "Unknown"],
      ["Thymalin dose", "Unknown"],
      ["Problem", "Total mass cannot map to studied component exposures"],
    ],
  },
};

export const TA1_THYMALIN_CLAIMS = [
  {
    id: "standard-dose",
    claim: "There is a standard Tα1 + Thymalin dosage",
    verdict: "False",
    detail:
      "No controlled combination dose exists. The 1.6 mg BIW + 10 mg × 10-day template is an auditable research schedule, not a validated therapy.",
  },
  {
    id: "khavinson",
    claim: "This is an established Khavinson protocol",
    verdict: "False",
    detail:
      "The best-known long-term Khavinson human combination used Thymalin + Epithalamin, not Thymosin Alpha-1.",
  },
  {
    id: "same-peptide",
    claim: "Tα1 and Thymalin are the same molecule",
    verdict: "False",
    detail:
      "Tα1 is one defined synthetic 28-aa peptide. Thymalin is a bovine-thymus peptide extract with no single sequence or MW.",
  },
  {
    id: "thymulin-same",
    claim: "Thymalin is the same as thymulin",
    verdict: "False",
    detail:
      "Thymulin is a zinc-dependent nonapeptide. Thymalin is a heterogeneous extract.",
  },
  {
    id: "half-half",
    claim: "A 10 mg complex vial is 5 mg of each",
    verdict: "Unsupported",
    detail:
      "Not unless the label and independent assays explicitly state a 5/5 composition. Total mass alone provides no ratio.",
  },
  {
    id: "mix-syringe",
    claim: "They can be mixed in one syringe",
    verdict: "Unsupported",
    detail:
      "No compatibility, stability, sterility, or assay study was located. Separate vials and routes are the cleaner default.",
  },
  {
    id: "synergy",
    claim: "Overlapping immune pathways prove synergy",
    verdict: "False",
    detail:
      "Overlap could mean complementarity, redundancy, antagonism, or no interaction. A 2×2 factorial with a prespecified interaction term is required.",
  },
  {
    id: "tests-fail",
    claim: "TESTS proves Tα1 never works for anything",
    verdict: "Overreach",
    detail:
      "TESTS showed 1.6 mg q12h × ≤7 days did not reduce 28-day sepsis mortality vs placebo. That weakens broad boosting claims but is indication-specific.",
  },
  {
    id: "covid-halves",
    claim: "The Thymalin COVID study proves it halves mortality",
    verdict: "Overreach",
    detail:
      "Authors reported lower mortality in a small nonblinded observational comparison — confounding not ruled out; not a large independent RCT.",
  },
  {
    id: "double-missed",
    claim: "Missed doses should be doubled next time",
    verdict: "False",
    detail:
      "Record as missed. Do not double, compress BIW Tα1 into adjacent days, or extend Thymalin without a protocol amendment.",
  },
];

export const TA1_THYMALIN_EVIDENCE_LADDER = [
  {
    level: 1,
    evidence: "Controlled exact-combination human trial",
    confidence: "None located",
  },
  {
    level: 2,
    evidence: "Controlled exact-combination animal study",
    confidence: "None located",
  },
  {
    level: 3,
    evidence: "Tα1 human randomized trials",
    confidence:
      "Moderate for specific component schedules/indications; indirect for the stack",
  },
  {
    level: 4,
    evidence: "Thymalin human studies and Russian medicinal use",
    confidence:
      "Low-to-moderate, geographically concentrated, product-specific, indirect",
  },
  {
    level: 5,
    evidence: "Component laboratory studies",
    confidence: "Mechanistic only",
  },
  {
    level: 6,
    evidence: "Clinic, vendor, and community protocols",
    confidence: "Documents usage conventions only",
  },
];

export const TA1_THYMALIN_AE_SIMPLE = [
  {
    category: "Exact combination",
    note: "No reliable incidence data — interaction, cycle, autoimmune, and extract risks unknown",
  },
  {
    category: "Tα1 (component trials)",
    note: "Generally well tolerated; local injection-site discomfort/erythema most common; TESTS safety ≈ placebo (acute sepsis setting)",
  },
  {
    category: "Thymalin (monograph / extract)",
    note: "Allergy listed; pregnancy/breastfeeding contraindicated; bovine-source / TSE / adventitious-agent quality risks",
  },
  {
    category: "Immune activation",
    note: "Higher lymphocyte/cytokine markers ≠ better health — caution in autoimmunity, transplant, infection, cancer",
  },
];

export const TA1_THYMALIN_AE_FULL = [
  {
    domain: "Local",
    items:
      "Pain, redness, warmth, swelling, induration, bruising, nodule, drainage, ulceration at either injection site",
  },
  {
    domain: "Allergy / hypersensitivity",
    items:
      "Rash, itching, flushing, facial/throat swelling, wheeze — stop and seek care for suspected anaphylaxis",
  },
  {
    domain: "Systemic",
    items:
      "Fever, chills, fatigue, headache, dizziness, nausea, palpitations, new edema",
  },
  {
    domain: "Immune / autoimmune signals",
    items:
      "New joint swelling, neurologic symptoms, mucosal ulcers, unexplained rash, autoimmune-type flares",
  },
  {
    domain: "Infection / acute care",
    items:
      "New or worsening infection, antimicrobial use, hospitalization — neither component replaces sepsis or antimicrobial care",
  },
  {
    domain: "Labs / product quality",
    items:
      "CBC with differential; renal/hepatic as relevant; stop for product-identity, concentration, integrity, or storage failures",
  },
];

export const TA1_THYMALIN_DOSAGE_GUIDE = {
  title: "Thymosin Alpha-1 + Thymalin Dosage: Research Protocol and Reconstitution",
  updated: "Updated August 2026",
  callout:
    "**Research note:** No controlled human or animal study has established a dosage, safety profile, interaction, or synergistic effect for the exact **Thymosin Alpha-1 + Thymalin** combination. Thymosin Alpha-1 is a defined synthetic **28-amino-acid** peptide. Thymalin is a **heterogeneous bovine-thymus extract**. Milligram labels are not equivalent molecular doses, and findings for either component cannot be transferred automatically to the pair.",
  intro: [
    "**Exact-combination clinical dose:** none established. The evidence-anchored research template uses **Thymosin Alpha-1 1.6 mg SC twice weekly for 8 weeks** plus a separate **Thymalin 10 mg IM once daily on days 1–10** — producing **25.6 mg** cumulative Tα1 and **100 mg** cumulative Thymalin extract.",
    "**Do not combine the powders or solutions.** No same-vial or same-syringe compatibility study was located. A 10 mg “TA1 complex” vial **without a verified component ratio** cannot provide a reproducible dose of either product.",
    "Common online stacks use more frequent Tα1 and often switch Thymalin to SC — those are clinic/community conventions, not controlled-trial regimens. Thymalin **≠ thymulin**; Tα1 + Thymalin **≠** Thymalin + Epithalamin longevity studies.",
  ],
  glance: {
    title: "Thymosin Alpha-1 + Thymalin dosage in 30 seconds",
    table: {
      headers: ["Question", "Research summary"],
      rows: [
        ["**Exact-combination clinical dose**", "None established"],
        [
          "**Evidence-anchored template**",
          "Tα1 1.6 mg SC BIW × 8 weeks + Thymalin 10 mg IM daily days 1–10",
        ],
        ["**Cumulative in that template**", "25.6 mg Tα1 + 100 mg Thymalin extract"],
        [
          "**Why these numbers**",
          "Independent human / registered schedules — pair itself unvalidated",
        ],
        ["**Same vial / same syringe**", "No — separate products required"],
        [
          "**Common online stack**",
          "Tα1 1.6 mg daily/EOD × 2–4 weeks + Thymalin 10 mg × 10 days (anecdotal)",
        ],
        [
          "**Key uncertainty**",
          "Thymalin “10 mg” = total extract mass, not one peptide molar dose",
        ],
        ["**≠ thymulin / Epithalamin stacks**", "Different identities and evidence bases"],
      ],
    },
  },
  sections: [
    {
      id: "what-is",
      title: "What are Thymosin Alpha-1 and Thymalin?",
      paragraphs: [
        "**Thymosin Alpha-1** (Tα1, TA1, thymalfasin) is an N-terminally acetylated **28-amino-acid** peptide (approx. **3,108.3 g/mol**). Report content on a defined **active-peptide** basis — acetate/water/counterions can change labeled mass.",
        "**Thymalin** is **not** one peptide. The registered Russian product is a lyophilized extract from calf/young-cattle thymus (a current 10 mg presentation also contains **20 mg glycine**). Proposed short sequences (KE, EW, EDP) do **not** convert a 10 mg vial into 10 mg of any single defined peptide.",
      ],
      tables: [
        {
          caption: "Why Thymalin mass is fundamentally different from Tα1",
          headers: ["Question", "Thymosin Alpha-1", "Thymalin"],
          rows: [
            ["One defined molecule?", "Yes", "No"],
            ["One sequence and MW?", "Yes", "No"],
            [
              "Molar dose from label?",
              "Yes, if active-peptide assay known",
              "No — components/proportions incomplete",
            ],
            ["Primary manufacture", "Chemical peptide synthesis", "Bovine thymus extraction"],
            [
              "Clearest human route support",
              "Subcutaneous",
              "Intramuscular (Russian medicinal presentation)",
            ],
          ],
        },
      ],
      widget: "ta1-thymalin-identity-gate",
    },
    {
      id: "not-interchangeable",
      title: "Thymosin Alpha-1, Thymalin, and thymulin are not interchangeable",
      tables: [
        {
          caption: "Identity gate",
          headers: ["Name", "What it is", "Key distinction"],
          rows: [
            [
              "Thymosin Alpha-1",
              "Defined 28-aa acetylated peptide",
              "Synthetic thymalfasin — single sequence",
            ],
            [
              "Thymalin",
              "Bovine-thymus peptide extract",
              "Heterogeneous mixture — no single molecular formula",
            ],
            [
              "Thymulin",
              "Zinc-dependent thymic nonapeptide",
              "Defined nonapeptide; activity depends on zinc",
            ],
            [
              "Thymogen",
              "Synthetic Glu-Trp dipeptide",
              "Separate defined compound",
            ],
            [
              "Thymosin beta-4",
              "Defined 43-aa actin-binding peptide",
              "Different sequence, mechanisms, anti-doping implications",
            ],
          ],
        },
      ],
      paragraphsAfter: [
        "Any source that describes Thymalin as a single 28-amino-acid peptide is confusing it with Thymosin Alpha-1.",
      ],
    },
    {
      id: "exact-combo",
      title: "Has Thymosin Alpha-1 + Thymalin been studied directly?",
      paragraphs: [
        "No controlled trial of the exact combination was located. Parallel discussion in clinic or marketing copy is **not** combination evidence.",
        "Both products are described as affecting T-cell, dendritic-cell, cytokine, and innate-immune pathways. Overlap could produce complementarity, redundancy, antagonism, excessive activation, or no meaningful interaction. The current Russian Thymalin monograph specifically advises **avoiding simultaneous products with a similar mechanism of action** — that does not prove harm, but it argues against treating the stack as automatically synergistic.",
        "A valid synergy study needs a four-arm design (control, Tα1 alone, Thymalin alone, combination) with a **prespecified interaction term**.",
      ],
      widget: "ta1-thymalin-combo-status",
    },
    {
      id: "status",
      title: "U.S. and international medicinal status",
      paragraphs: [
        "Thymalfasin has national medicinal approvals outside the United States (e.g., Zadaxin). There is **no U.S. prescribing label** for Thymosin Alpha-1 or for the combination.",
        "FDA reviewed Thymosin Alpha-1 free base and acetate-related bulk substances in 2024, raising characterization, impurity, aggregation, injectable-formulation, and immunogenicity concerns, and proposed against 503A Bulks List inclusion. As of FDA’s May 2026 update, Tα1 remained in **503A Category 2** — a compounding-policy classification, not a finding that all international thymalfasin products are equivalent or ineffective.",
        "Thymalin is a registered prescription medicine in Russia (10 mg lyophilizate for IM solution). That registration does **not** create a U.S. dosage standard or establish safety of independently sourced research extracts. The exact two-component protocol has not been reviewed as a medicinal product.",
      ],
    },
    {
      id: "ta1-doses",
      title: "Human Thymosin Alpha-1 research dosages",
      paragraphs: [
        "Tα1 schedules are **indication-specific** and should not be blended into one universal “immune dose.”",
      ],
      tables: [
        {
          caption: "Selected human Tα1 exposures (component only — not Thymalin)",
          headers: ["Study or setting", "Tα1 exposure", "Duration", "Main result or limitation"],
          rows: [
            [
              "Chronic hepatitis B RCT",
              "1.6 mg SC twice weekly",
              "6 months (+ 6 mo follow-up)",
              "Component trial; response gradual; no Thymalin",
            ],
            [
              "Chronic hepatitis C + interferon",
              "1.6 mg SC twice weekly + IFN",
              "Protocol-specific",
              "Adjunct with interferon — not Thymalin",
            ],
            [
              "HBV-related ACLF",
              "1.6 mg SC daily week 1, then BIW weeks 2–12",
              "12 weeks",
              "Open-label randomized; disease-specific intensive schedule",
            ],
            [
              "TESTS Phase 3 sepsis",
              "1.6 mg SC every 12 hours",
              "Up to 7 days",
              "No clear reduction in 28-day all-cause mortality vs placebo",
            ],
            [
              "Hemodialysis / COVID-prevention pilot",
              "1.6 mg SC twice weekly",
              "8 weeks + follow-up",
              "Preliminary pilot; not exact-combination",
            ],
            [
              "Transplant-recipient study",
              "1.6 mg SC once daily",
              "16 weeks",
              "Population-specific — not a general-use dose",
            ],
            [
              "HBV-related HCC recurrence protocol",
              "1.6 mg SC twice weekly",
              "12 months",
              "Adjuvant after resection — not a short wellness cycle",
            ],
          ],
        },
      ],
      paragraphsAfter: [
        "**TESTS (2025):** 1,106 adults with sepsis randomized; 1,089 in mITT. 28-day mortality 23.4% Tα1 vs 24.1% placebo (HR 0.99). Secondary/safety outcomes did not differ significantly. Immune-biomarker plausibility does not guarantee clinical benefit.",
      ],
    },
    {
      id: "thymalin-doses",
      title: "Human Thymalin research and medicinal dosages",
      tables: [
        {
          caption: "Current Russian medicinal adult schedule (not a U.S. standard)",
          headers: ["Use", "Adult dose", "Route", "Duration"],
          rows: [
            ["Treatment course", "5–20 mg once daily", "Intramuscular", "3–10 days"],
            ["Total treatment-course exposure", "30–100 mg", "Intramuscular", "Across the course"],
            ["Prophylactic course", "5–10 mg once daily", "Intramuscular", "3–5 days"],
            ["Repeat course", "If clinically required", "Intramuscular", "After 1–6 months"],
          ],
        },
        {
          caption: "Selected Thymalin human reports (not Tα1 combination evidence)",
          headers: ["Study", "Exposure", "Limitation"],
          rows: [
            [
              "Severe-COVID older-adult observational",
              "10 mg in 2 mL 0.9% NaCl IM daily × 10 days",
              "Small, nonblinded, non-placebo; confounding possible",
            ],
            [
              "2003 gerontology follow-up (n=266)",
              "Thymalin ± Epithalamin over years",
              "**≠ Tα1 + Thymalin** — pineal extract pair",
            ],
          ],
        },
      ],
    },
    {
      id: "reported-protocols",
      title: "Reported Thymosin Alpha-1 + Thymalin protocols",
      paragraphs: [
        "Three patterns circulate: (1) evidence-anchored **separate-vial** template, (2) more aggressive online clinic stacks, and (3) unlabeled-ratio commercial “complex” vials.",
      ],
      widget: "ta1-thymalin-clinical-vs-anecdotal",
      tables: [
        {
          caption: "Evidence-anchored research schedule (pair itself untested)",
          headers: ["Component", "Fixed exposure", "Route", "Schedule", "Source basis"],
          rows: [
            [
              "Thymosin Alpha-1",
              "1.6 mg",
              "Subcutaneous",
              "Twice weekly × 8 weeks",
              "Multiple human studies; 8-week dialysis pilot as short-course anchor",
            ],
            [
              "Thymalin",
              "10 mg",
              "Intramuscular",
              "Once daily days 1–10",
              "Registered Russian range + 10-day severe-COVID report",
            ],
          ],
        },
      ],
    },
    {
      id: "protocol",
      title: "Complete fixed-exposure research protocol",
      paragraphs: [
        "Prospective, hypothesis-generating template only. It does **not** establish that the combination is appropriate for a participant or that biomarker changes equal clinical benefit.",
        "**Design preference:** randomized **2×2 factorial**; otherwise prospective observational with explicit inability to test synergy. **No** dose escalation, catch-up doubling, or automatic repeat cycle.",
      ],
      widget: "ta1-thymalin-protocol-timeline",
      tables: [
        {
          caption: "Preferred factorial arms",
          headers: ["Arm", "Thymosin Alpha-1", "Thymalin", "Purpose"],
          rows: [
            ["A", "Placebo", "Placebo", "Baseline / procedural control"],
            ["B", "1.6 mg BIW × 8 weeks", "Placebo", "Tα1 main effect"],
            ["C", "Placebo", "10 mg daily × 10 days", "Thymalin main effect"],
            ["D", "1.6 mg BIW × 8 weeks", "10 mg daily × 10 days", "Combination + interaction"],
          ],
        },
      ],
      paragraphsAfter: [
        "**Missed doses:** record as missed — do not double, do not add Thymalin days, do not compress two Tα1 doses into adjacent days. **Accountability** must capture identity, free-base/acetate/extract basis, lot, diluent, volume, route, site, storage, deviations, and AEs for every administration.",
      ],
    },
    {
      id: "recon",
      title: "Reconstitution and concentration math (separate vials)",
      paragraphs: [
        "**Tα1:** cleanest protocol uses a **1.6 mg single-dose** vial to **1.0 mL** (1.6 mg/mL = 100 U-100 volume units for the full dose). For a **10 mg** research vial, FDA-reviewed characterization described solubility up to ~**2 mg/mL**; concentrations above that (e.g., 2 mL → 5 mg/mL, 3 mL → 3.33 mg/mL) exceed the reviewed clinical concentration anchor.",
        "**Thymalin:** preserve product-specific diluent and **IM** route. The severe-COVID report used **10 mg in 2 mL** 0.9% NaCl (5 mg/mL). U-100 “units” are volume markings only — they do not authorize insulin-syringe IM technique or SC substitution.",
      ],
      widget: "ta1-thymalin-recon-calc",
      tables: [
        {
          caption: "10 mg Tα1 vial — concentration arithmetic (formulation support separate)",
          headers: [
            "Final volume",
            "Concentration",
            "Tα1 per U-100 unit",
            "Units for 1.6 mg",
            "Interpretation",
          ],
          rows: [
            ["2.0 mL", "5.0 mg/mL", "50 mcg", "32 units", "Exceeds ~2 mg/mL characterization anchor"],
            ["3.0 mL", "3.33 mg/mL", "33.3 mcg", "48 units", "Exceeds ~2 mg/mL characterization anchor"],
            ["5.0 mL", "2.0 mg/mL", "20 mcg", "80 units", "At reviewed concentration anchor; capacity/stability still need validation"],
            ["6.25 mL", "1.6 mg/mL", "16 mcg", "100 units", "Larger volume may exceed container/practical limits"],
          ],
        },
        {
          caption: "10 mg Thymalin vial",
          headers: [
            "Final volume",
            "Concentration",
            "Extract per U-100 unit",
            "Volume for 10 mg",
          ],
          rows: [
            ["1.0 mL", "10 mg/mL", "100 mcg", "1.0 mL / 100 units"],
            ["2.0 mL", "5 mg/mL", "50 mcg", "2.0 mL / 200 units"],
            ["2.5 mL", "4 mg/mL", "40 mcg", "2.5 mL / 250 units"],
          ],
        },
      ],
      paragraphsAfter: [
        "A 2 mL Thymalin administration exceeds a 1 mL U-100 syringe capacity — do not split or reroute merely to fit a device without protocol support. Extract mg cannot be converted to mg of KE, EW, EDP, or Tα1 without validated composition data.",
      ],
    },
    {
      id: "separate-vials",
      title: "Why the components should remain in separate vials",
      paragraphs: [
        "Mixing creates unanswered questions: extract effects on Tα1 stability/aggregation; shared pH/tonicity/excipients; proteases or contaminants; sterility and particulates; post-mix assay of both components; which component caused an AE; and how to retain route-specific evidence if one is studied SC and the other IM.",
        "No compatibility study was located. **Separate preparation is the scientifically cleaner default.**",
      ],
      widget: "ta1-thymalin-complex-warning",
    },
    {
      id: "mechanisms",
      title: "How might the combination work?",
      paragraphs: [
        "**Tα1 themes under investigation:** dendritic-cell maturation, TLR-related signaling, T-cell differentiation/function, NK activity, Th1/interferon-related responses — often framed as modulation rather than one-direction stimulation.",
        "**Thymalin themes:** T/B balance, phagocytic activity, hematopoietic differentiation pathways, monocyte/macrophage inflammatory signaling, and short-peptide gene-expression hypotheses.",
        "**Unknown for simultaneous exposure:** Tα1 PK, Thymalin peptide distribution, cytokine magnitude, autoimmune/hypersensitivity risk, infection outcomes, long-term immune function, optimal timing/route/ratio. Similar pathways do **not** prove the products “cover more of the immune system.”",
      ],
    },
    {
      id: "timeline",
      title: "Expected results and timeline",
      tables: [
        {
          caption: "Measurement windows (no validated combination-response curve)",
          headers: ["Time window", "What can reasonably be measured", "What cannot be concluded"],
          rows: [
            [
              "Days 1–10",
              "Tolerability, local reactions, early CBC/immune markers",
              "Long-term infection prevention or “immune rejuvenation”",
            ],
            [
              "Day 14",
              "Post-Thymalin-course biomarkers and AEs",
              "Independent component effect without factorial controls",
            ],
            [
              "Weeks 4–8",
              "Sustained Tα1-period immune or disease-specific endpoint",
              "Synergy from an uncontrolled pre/post comparison",
            ],
            [
              "Days 57–84",
              "Persistence or reversal after discontinuation",
              "Lifespan or geroprotection from a short follow-up",
            ],
          ],
        },
      ],
      paragraphsAfter: [
        "Feeling more energetic, sleeping differently, or “getting sick less” during a brief cycle is **not** a validated measure of thymic rejuvenation.",
      ],
    },
    {
      id: "safety",
      title: "Safety and adverse effects",
      paragraphs: [
        "No reliable exact-combination incidence data exist. Component-level local reactions and allergy are the clearest near-term concerns; broader uncertainties include immune dysregulation, aggregation/immunogenicity for Tα1, and animal-extract contamination for Thymalin.",
        "Neither component should substitute for diagnosis, antimicrobial treatment, respiratory support, sepsis care, or vaccination. The **neutral Phase 3 Tα1 sepsis result** warns against extrapolating biomarker hypotheses into emergency treatment claims.",
      ],
      widget: "ta1-thymalin-adverse-events",
    },
    {
      id: "routes",
      title: "Route of administration",
      tables: [
        {
          caption: "Route evidence",
          headers: ["Product", "Best-supported route", "Main caveat"],
          rows: [
            [
              "Thymosin Alpha-1",
              "Subcutaneous (human trials / thymalfasin use)",
              "Dose evidence is formulation- and indication-specific",
            ],
            [
              "Thymalin",
              "Intramuscular (Russian medicinal + 10-day COVID report)",
              "Commercial SC schedules are route extrapolations",
            ],
            [
              "Same-site / same-syringe",
              "No supporting evidence",
              "Separate route and site records needed for causality",
            ],
            [
              "Oral / intranasal",
              "Not validated by injectable evidence",
              "Degradation, absorption, and tissue exposure differ by route",
            ],
          ],
        },
      ],
    },
    {
      id: "storage",
      title: "Storage and stability",
      paragraphs: [
        "**Tα1:** FDA review emphasized formulation sensitivity and aggregation. Reviewed material described reconstituted free-base stability of approximately **2–7 days at 4°C**; longer storage needs colder conditions and formulation-specific support. Do **not** infer a 28-day in-use period from bacteriostatic water alone.",
        "**Thymalin:** unopened Russian product listed at **2–25°C**. Reconstituted stability must come from product instructions or a validated study — a peptide fingerprint can change even when the solution remains clear.",
        "**Discard** when the supported in-use period ends, storage cannot be verified, label/lot/volume/date is missing, integrity is compromised, appearance is abnormal, contamination is suspected, or a lot-quality failure is identified.",
      ],
    },
    {
      id: "claims",
      title: "Common claims vs evidence",
      widget: "ta1-thymalin-claim-checker",
    },
    {
      id: "evidence-ladder",
      title: "Evidence ladder",
      widget: "ta1-thymalin-evidence-ladder",
      paragraphsAfter: [
        "The proposed schedule is reproducible because its math and timing are explicit. **Reproducibility does not make it a validated therapy.**",
      ],
    },
    {
      id: "vs-other",
      title: "Thymosin Alpha-1 + Thymalin vs other thymic combinations",
      tables: [
        {
          caption: "Do not transfer evidence across pairs",
          headers: ["Combination", "Direct evidence", "Important distinction"],
          rows: [
            [
              "Thymosin Alpha-1 + Thymalin",
              "No controlled direct study located",
              "Subject of this page",
            ],
            [
              "Thymalin + Epithalamin",
              "Older long-term gerontology study exists",
              "Uses a pineal extract — not Tα1",
            ],
            [
              "Tα1 + interferon",
              "Human hepatitis trials exist",
              "Drug-specific antiviral adjunct — not Thymalin",
            ],
            [
              "Tα1 + antivirals",
              "Disease-specific human studies exist",
              "Does not validate Thymalin",
            ],
            [
              "Tα1 + thymosin beta-4",
              "Community stack discussions",
              "Different second peptide and different anti-doping concerns",
            ],
          ],
        },
      ],
    },
    {
      id: "anti-doping",
      title: "WADA and tested sport",
      paragraphs: [
        "Neither Thymosin Alpha-1 nor Thymalin was found by name on the **2026 WADA Prohibited List** as of September 2026. Unlike BPC-157 or prohibited thymosin-beta-4-related categories, this pair is not specifically identified in that list text.",
        "That is **not** athlete-specific clearance. Anti-doping interpretation can depend on pharmacological category, national approval, product contents, route, TUE rules, and contamination. Thymalin’s heterogeneous composition means an athlete cannot infer every constituent from the product name — obtain a current written determination from the responsible authority before exposure.",
      ],
    },
    {
      id: "bottom-line",
      title: "Bottom line",
      paragraphs: [
        "Thymosin Alpha-1 + Thymalin is **not** a single peptide blend with an established ratio. It pairs a defined synthetic 28-aa peptide with a heterogeneous bovine-thymus extract. No controlled study has established that the pair is safer or more effective than either component alone.",
        "The most defensible research template preserves the best-known component schedules and routes: **Tα1 1.6 mg SC twice weekly for 8 weeks**, plus a separate **Thymalin course of 10 mg IM daily on days 1–10**. That produces **25.6 mg** cumulative Tα1 and **100 mg** cumulative Thymalin extract, followed by **28 days** without exposure. It is a proposed, auditable study schedule — not a validated treatment protocol.",
      ],
      highlight:
        "Central quality rule: separate identities, separate vials, separate routes, separate assays, and separate accountability. A total-mass “complex” vial without a component ratio cannot provide a reproducible dose.",
    },
  ],
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        question: "What is the standard Thymosin Alpha-1 + Thymalin dosage?",
        answer:
          "No standard combination dose exists. A reproducible evidence-anchored research template uses Tα1 1.6 mg SC twice weekly for 8 weeks and Thymalin 10 mg IM daily for the first 10 days, administered separately. The combined template has not been validated clinically.",
      },
      {
        question: "Is this an established Khavinson protocol?",
        answer:
          "No. Khavinson’s best-known long-term human combination used Thymalin with Epithalamin, not Thymosin Alpha-1.",
      },
      {
        question: "Are Thymosin Alpha-1 and Thymalin the same?",
        answer:
          "No. Tα1 is one defined synthetic 28-amino-acid peptide. Thymalin is a mixture extracted from bovine thymus tissue.",
      },
      {
        question: "Is Thymalin the same as thymulin?",
        answer:
          "No. Thymulin is a defined zinc-dependent nonapeptide. Thymalin is a heterogeneous extract.",
      },
      {
        question: "Does a 10 mg combination vial contain 5 mg of each?",
        answer:
          "Not unless the label and independent assays explicitly state a 5 mg/5 mg composition. A 10 mg total label alone provides no component ratio.",
      },
      {
        question: "Can they be mixed in one syringe?",
        answer:
          "No evidence supports same-syringe mixing. Formulations may differ in pH, excipients, concentration, route, stability, and particulate behavior.",
      },
      {
        question: "What is the best-supported Thymosin Alpha-1 dose?",
        answer:
          "The most frequently repeated human-trial schedule is 1.6 mg SC twice weekly, but disease-specific trials have also used daily or twice-daily regimens. There is no universal immune-support dose.",
      },
      {
        question: "What is the registered Thymalin adult dose?",
        answer:
          "The Russian medicinal reference lists 5–20 mg IM daily for 3–10 days (total course 30–100 mg), and 5–10 mg daily for 3–5 days for prophylactic use.",
      },
      {
        question: "How much Tα1 is used over eight weeks in the template?",
        answer: "Sixteen 1.6 mg administrations equal 25.6 mg cumulative Tα1.",
      },
      {
        question: "How much Thymalin is used over ten days in the template?",
        answer: "Ten 10 mg administrations equal 100 mg total extract.",
      },
      {
        question: "Can Thymalin milligrams be converted into Tα1-equivalent milligrams?",
        answer:
          "No. Thymalin has no single sequence, molecular weight, or defined Tα1 content.",
      },
      {
        question: "Can Thymalin be administered subcutaneously?",
        answer:
          "Subcutaneous schedules circulate online, but the current Russian medicinal product and the cited 10-day clinical exposure use the intramuscular route. A route bridge has not been established.",
      },
      {
        question: "Is daily Tα1 better than twice weekly?",
        answer:
          "Not generally. Daily and twice-daily schedules come from specific high-risk clinical settings. The largest twice-daily sepsis trial did not reduce overall 28-day mortality.",
      },
      {
        question: "Is the combination synergistic?",
        answer:
          "No synergy has been demonstrated. A controlled factorial study with an interaction analysis is required.",
      },
      {
        question: "Should a missed dose be doubled?",
        answer:
          "No. Record it as missed. Doubling or adding a catch-up dose changes exposure and interpretability.",
      },
      {
        question: "Are Thymosin Alpha-1 and Thymalin allowed in tested sport?",
        answer:
          "Neither is named specifically in the 2026 WADA list as of September 2026, but that is not athlete-specific clearance. Thymalin’s uncertain composition and contamination risk make authoritative review essential.",
      },
    ],
  },
  sources: {
    title: "References",
    items: [
      {
        authors: "PubChem",
        title: "Thymalfasin, CID 16130571",
        detail: "Compound record.",
        href: "https://pubchem.ncbi.nlm.nih.gov/compound/Thymalfasin",
      },
      {
        authors: "FDA",
        title: "Thymosin Alpha-1 Related Bulk Drug Substances: PCAC review",
        detail: "2024 compounding advisory review.",
        href: "https://www.fda.gov/media/183892/download",
      },
      {
        authors: "FDA",
        title: "Bulk Drug Substances Nominated for Use in Compounding Under Section 503A",
        detail: "Updated May 14, 2026 — Category 2 listing context.",
        href: "https://www.fda.gov/media/94155/download",
      },
      {
        authors: "Wu J et al.",
        title: "The efficacy and safety of thymosin α1 for sepsis (TESTS)",
        detail: "BMJ 2025;388:e082583 — Phase 3 neutral primary mortality.",
        href: "https://pubmed.ncbi.nlm.nih.gov/39814420/",
      },
      {
        authors: "ClinicalTrials.gov",
        title: "The Efficacy and Safety of Tα1 for Sepsis, NCT02867267",
        detail: "TESTS study record.",
        href: "https://clinicaltrials.gov/study/NCT02867267",
      },
      {
        authors: "Tuthill CW et al.",
        title: "Pilot trial of Thymalfasin to prevent COVID-19 in hemodialysis patients",
        detail: "1.6 mg SC twice weekly × 8 weeks — component pilot.",
        href: "https://pubmed.ncbi.nlm.nih.gov/36881981/",
      },
      {
        authors: "Samson-Med / Vidal",
        title: "Thymalin 10 mg Russian medicinal information",
        detail: "Registered IM lyophilizate schedule context.",
        href: "https://www.vidal.ru/drugs/thymalin__23838",
      },
      {
        authors: "Kuznik B et al.",
        title: "Peptide Drug Thymalin Regulates Immune Status in Severe COVID-19 Older Patients",
        detail: "Adv Gerontol 2021 — 10 mg IM daily × 10 days observational.",
        href: "https://link.springer.com/article/10.1134/S2079057021040068",
      },
      {
        authors: "Khavinson VKh, Morozov VG",
        title: "Peptides of pineal gland and thymus prolong human life",
        detail: "Neuro Endocrinol Lett 2003 — Thymalin ± Epithalamin, not Tα1.",
        href: "https://pubmed.ncbi.nlm.nih.gov/14523363/",
      },
      {
        authors: "WADA",
        title: "2026 Prohibited List",
        detail: "Neither name specifically listed in reviewed text — not athlete clearance.",
        href: "https://www.wada-ama.org/sites/default/files/2025-09/2026list_en_final_clean_september_2025.pdf",
      },
    ],
  },
};
