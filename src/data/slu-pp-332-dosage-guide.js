/**
 * SLU-PP-332 research guide — small-molecule pan-ERR agonist (not a peptide).
 * No human dose, trials, or PK; all efficacy from cells/animals.
 */

export const SLUPP_EVIDENCE_NAV = [
  {
    id: "cells",
    filter: "Cells",
    model: "C2C12 / primary myocytes",
    sex: "N/A",
    n: "Cell assays",
    exposure: "Commonly 10 μM (gene expression / mitochondrial assays)",
    endpoint: "Pdk4, respiration, MitoTracker; ERRα-dependent Ddit4/Slc25a25",
    result: "Target engagement and mechanism",
    nullFinding: null,
    href: "https://pubmed.ncbi.nlm.nih.gov/36988910/",
    warning: "A cell concentration is not a dose and does not predict human exposure",
  },
  {
    id: "acute-endurance",
    filter: "Healthy mice",
    model: "Male C57BL/6J mice",
    sex: "Male",
    n: "n=6/group (acute treadmill)",
    exposure: "50 mg/kg IP once, 1 h before test",
    endpoint: "Treadmill running time and distance",
    result: "~70% longer time, ~45% farther distance vs vehicle",
    nullFinding: "Benefit absent in skeletal-muscle ERRα knockout",
    href: "https://pubmed.ncbi.nlm.nih.gov/36988910/",
    warning: "Small acute mouse experiment — not a human sports trial",
  },
  {
    id: "muscle-phenotype",
    filter: "Healthy mice",
    model: "Male C57BL/6J mice",
    sex: "Male",
    n: "Generally 6–8/group",
    exposure: "50 mg/kg IP twice daily up to 13 days",
    endpoint: "Oxidative fibers, mitochondrial markers, grip strength",
    result: "More SDH-positive / type IIa markers; exercise-like transcription",
    nullFinding: "Positioned as endurance mimetic — not anabolic hypertrophy",
    href: "https://pubmed.ncbi.nlm.nih.gov/36988910/",
    warning: "Oxidative remodeling ≠ human muscle growth",
  },
  {
    id: "dio",
    filter: "Obesity mice",
    model: "Male DIO mice, thermoneutral, HFD",
    sex: "Male",
    n: "Small groups",
    exposure: "50 mg/kg IP twice daily × 28 days",
    endpoint: "Body weight, fat mass, calorimetry, glucose, liver fat",
    result: "~12% body-weight loss highlighted; ~1/10 fat gain vs controls",
    nullFinding: "Food intake and locomotor activity unchanged",
    href: "https://pubmed.ncbi.nlm.nih.gov/37739806/",
    warning: "Mouse result — not a forecast of 12% human weight loss",
  },
  {
    id: "chow",
    filter: "Healthy mice",
    model: "Male C57BL/6 chow-fed, thermoneutral",
    sex: "Male",
    n: "Small groups",
    exposure: "50 mg/kg IP twice daily × 28 days",
    endpoint: "Glucose / metabolic endpoints",
    result: "Metabolic measures collected under controlled housing",
    nullFinding: "Did NOT improve glucose metabolism in healthy chow-fed mice",
    href: "https://pubmed.ncbi.nlm.nih.gov/37739806/",
    warning: "Model-dependent glucose effects — do not overstate blood-sugar claims",
  },
  {
    id: "obob",
    filter: "Obesity mice",
    model: "Male ob/ob mice, thermoneutral",
    sex: "Male",
    n: "Small groups",
    exposure: "50 mg/kg IP twice daily; ~12 days (methods) / 15 days (figure legend)",
    endpoint: "Body composition, EE, FAO, liver histology",
    result: "Energy expenditure / fatty-acid oxidation / adiposity signals",
    nullFinding: "12- vs 15-day timing discrepancy preserved",
    href: "https://pubmed.ncbi.nlm.nih.gov/37739806/",
    warning: "Leptin-deficient model — not clinical obesity treatment evidence",
  },
  {
    id: "hf",
    filter: "Heart-failure mice",
    model: "TAC pressure-overload mice",
    sex: "Mixed program",
    n: "Disease-model cohorts",
    exposure: "25 mg/kg IP twice daily × 6 weeks",
    endpoint: "EF, fibrosis, survival, metabolism",
    result: "Improved EF, less fibrosis, higher survival vs TAC vehicle",
    nullFinding: "Cardiac hypertrophy not prevented; some analyses pooled with SLU-PP-915",
    href: "https://pubmed.ncbi.nlm.nih.gov/37961903/",
    warning: "Disease model only — not human heart-failure treatment",
  },
  {
    id: "kidney",
    filter: "Aging-kidney mice",
    model: "21-month-old male C57BL/6",
    sex: "Male",
    n: "Aged-mouse cohorts",
    exposure: "25 mg/kg/day IP × 8 weeks",
    endpoint: "Albuminuria, podocytes, mitochondria, inflammation",
    result: "Improved age-associated renal injury / mitochondrial / inflammatory markers",
    nullFinding: null,
    href: "https://pubmed.ncbi.nlm.nih.gov/37717940/",
    warning: "Biomarker study — no human CKD outcome data",
  },
  {
    id: "human",
    filter: "Human data",
    model: "—",
    sex: "—",
    n: "—",
    exposure: "None identified",
    endpoint: "—",
    result: "No interventional human evidence identified",
    nullFinding: "ClinicalTrials.gov exact-name search returned zero studies (Aug 21, 2026)",
    href: "https://clinicaltrials.gov/search?term=SLU-PP-332",
    warning: "Human liver microsomes / tissue observations ≠ dosing humans",
  },
];

export const SLUPP_PROTOCOLS = [
  {
    id: "exposure",
    title: "Exposure sampling",
    lane: "Single 30 mg/kg IP → plasma/muscle at 2 h and 6 h",
    detail: "Demonstrated measurable exposure — not a validated half-life study",
  },
  {
    id: "acute",
    title: "Acute endurance",
    lane: "Single 50 mg/kg IP → treadmill test 1 h later",
    detail: "~70% longer running time; ~45% farther distance (n=6/group)",
  },
  {
    id: "chronic",
    title: "Muscle / metabolic programs",
    lane: "50 mg/kg IP twice daily → 10–28 day programs",
    detail: "Muscle phenotype, transcriptomics, DIO/chow metabolic studies",
  },
  {
    id: "disease",
    title: "Disease models",
    lane: "25 mg/kg IP → 6-week heart or 8-week kidney studies",
    detail: "TAC heart failure; aging-kidney biomarkers",
  },
];

export const SLUPP_ENDURANCE = {
  timePct: 170,
  distancePct: 145,
  dose: "50 mg/kg IP once, 1 hour pre-test",
  n: "n=6 per group",
  sex: "Male mice",
  knockout: "Endurance benefit absent in skeletal-muscle ERRα knockout",
};

export const SLUPP_METABOLIC = [
  {
    id: "dio",
    model: "DIO (HFD, thermoneutral)",
    duration: "28 days",
    dose: "50 mg/kg IP BID",
    weight: "~12% body-weight loss highlighted",
    fat: "Gained ~1/10 as much fat as vehicle",
    lean: "No significant change reported",
    intake: "Unchanged",
    activity: "Unchanged",
    rer: "Lower RER; ↑ fatty-acid oxidation",
    ee: "Higher energy expenditure",
    glucose: "Improved GTT / insulin sensitivity",
    liver: "Less hepatic lipid / lower TG content",
  },
  {
    id: "chow",
    model: "Chow-fed (thermoneutral)",
    duration: "28 days",
    dose: "50 mg/kg IP BID",
    weight: "Body-composition program measured",
    fat: "See primary paper",
    lean: "See primary paper",
    intake: "Measured",
    activity: "Measured",
    rer: "Calorimetry performed",
    ee: "Calorimetry performed",
    glucose: "Did NOT improve glucose metabolism",
    liver: "See primary paper",
  },
  {
    id: "obob",
    model: "ob/ob (thermoneutral)",
    duration: "~12 days (methods) / 15 days (figure legend)",
    dose: "50 mg/kg IP BID",
    weight: "Body composition assessed",
    fat: "Adiposity / histology signals",
    lean: "See primary paper",
    intake: "See primary paper",
    activity: "See primary paper",
    rer: "FAO / EE signals reported",
    ee: "Increased energy expenditure reported",
    glucose: "Model-specific metabolic measures",
    liver: "Liver histology assessed",
  },
];

export const SLUPP_CLAIMS = [
  {
    claim: "SLU-PP-332 is a peptide",
    verdict: "False",
    data: "Synthetic small molecule C18H14N2O2 (290.3 g/mol) — not an amino-acid chain",
  },
  {
    claim: "It is an oral exercise pill",
    verdict: "Unsupported / misleading",
    data: "Parent lacks oral bioavailability; SLU-PP-915 is a distinct orally active analog",
  },
  {
    claim: "It causes 12% weight loss",
    verdict: "Mouse-only",
    data: "DIO mice, 50 mg/kg IP BID × 28 days — not a human forecast",
  },
  {
    claim: "It increases human endurance 70%",
    verdict: "False extrapolation",
    data: "70% longer running time was an acute mouse treadmill result (n=6)",
  },
  {
    claim: "It builds muscle",
    verdict: "Unsupported",
    data: "Oxidative type IIa fiber shift is not hypertrophy or anabolism",
  },
  {
    claim: "It is safe because mice had no side effects",
    verdict: "False inference",
    data: "No formal human safety data; efficacy studies ≠ toxicology package",
  },
  {
    claim: "It is cardarine",
    verdict: "False",
    data: "ERR agonist vs PPARδ agonist (GW501516) — different chemistry and risks",
  },
  {
    claim: "It has a known 1–2 hour half-life",
    verdict: "Not established",
    data: "Only 2- and 6-hour mouse concentration sampling after IP dosing",
  },
];

export const SLUPP_VS_915 = [
  { field: "Relationship", a: "Parent research tool / lead-series compound", b: "Chemically distinct analog" },
  { field: "ERR activity", a: "Pan-ERR; ERRα-preferring in reporter assay", b: "Pan-ERR agonist" },
  { field: "Oral bioavailability", a: "Lacking (per 2026 paper)", b: "Demonstrated in mice" },
  { field: "Mouse exercise effect", a: "Improved after IP dosing", b: "Similar IP effect; retained activity orally" },
  { field: "Human trials", a: "None identified", b: "None establishing clinical efficacy identified" },
  { field: "Correct statement", a: "Worked by IP injection in mice", b: "Optimized for oral mouse exposure" },
];

export const SLUPP_SAFETY_MATRIX = [
  { domain: "Cardiac rhythm / QT", mice: "Not a formal EP study", tox: "Not identified", human: "Unknown" },
  { domain: "Blood pressure / hemodynamics", mice: "Limited observations", tox: "Not identified", human: "Unknown" },
  { domain: "Liver injury", mice: "Minor enzyme changes reported", tox: "Not identified", human: "Unknown" },
  { domain: "Kidney", mice: "Aging-kidney biomarkers studied", tox: "Not identified", human: "Unknown" },
  { domain: "Reproductive / developmental", mice: "Not established", tox: "Not identified", human: "Unknown" },
  { domain: "Cancer / carcinogenicity", mice: "No conclusion from short efficacy studies", tox: "Not identified", human: "Unknown" },
  { domain: "Genotoxicity", mice: "—", tox: "No public package identified", human: "Unknown" },
  { domain: "Immune effects", mice: "Kidney inflammatory pathways implicated", tox: "Not identified", human: "Unknown" },
  { domain: "Drug interactions", mice: "—", tox: "Not identified", human: "Unknown" },
  { domain: "Withdrawal / rebound", mice: "Not characterized", tox: "Not identified", human: "Unknown" },
  { domain: "Product sterility / purity", mice: "Lab compound", tox: "—", human: "Unknown — vendor CoA ≠ approval" },
];

export const SLUPP_MECHANISM = [
  {
    id: "muscle",
    tissue: "Skeletal muscle",
    dependency: "ERRα-dependent (knockout)",
    path: "ERRα → Ddit4 / Pdk4 / oxidative fibers → endurance",
    evidence: "Direct genetic evidence for acute endurance benefit",
  },
  {
    id: "heart",
    tissue: "Heart",
    dependency: "ERRγ-dominant",
    path: "ERRγ → fatty-acid / mitochondrial programs → EF ↑, fibrosis ↓",
    evidence: "Genetic dependency in cardiomyocytes/mice",
  },
  {
    id: "kidney",
    tissue: "Kidney",
    dependency: "PGC-1/ERR + cGAS–STING/STAT3",
    path: "Mitochondrial programs → albuminuria / inflammation markers",
    evidence: "Mechanistic inference from aged-mouse study",
  },
];

export const SLUPP_TIMELINE = [
  { date: "2023", title: "Exercise-response / endurance paper", detail: "First peer-reviewed ACS Chem Biol program: oxidative muscle phenotype and acute treadmill benefit." },
  { date: "2023", title: "Aging-kidney paper", detail: "Aged-mouse albuminuria, podocyte, mitochondrial, and inflammatory markers." },
  { date: "2024", title: "Metabolic syndrome + heart failure", detail: "JPET obesity/metabolic program and Circulation TAC cardioprotection studies." },
  { date: "2026", title: "SLU-PP-915 oral analog", detail: "Chemically distinct, orally active successor; paper states SLU-PP-332 lacks oral bioavailability." },
  { date: "2026", title: "In-vitro metabolism / anti-doping", detail: "Nine putative metabolites in human liver microsomes/S9 — analytical targets, not human PK." },
  { date: "Aug 2026", title: "Current status", detail: "No human SLU-PP-332 trial identified; not FDA approved." },
];

export const SLUPP_EC50 = [
  { receptor: "ERRα", ec50: "98 nM" },
  { receptor: "ERRβ", ec50: "230 nM" },
  { receptor: "ERRγ", ec50: "430 nM" },
];

export const SLUPP332_DOSAGE_GUIDE = {
  title: "SLU-PP-332 Dosage, Results, Side Effects & Exercise-Mimetic Research",
  updated: "Updated August 2026",
  callout:
    "**Research-status alert:** SLU-PP-332 is **not a peptide**. It is a synthetic small-molecule agonist of the estrogen-related receptors ERRα, ERRβ, and ERRγ. It is an experimental laboratory compound with **no FDA-approved indication, no established human dosage, no published human pharmacokinetic study, and no registered human trial identified**. Every efficacy result below comes from cells or animals unless explicitly labeled otherwise.",
  intro: [
    "SLU-PP-332 is a preclinical **pan-ERR agonist** designed to activate transcriptional programs involved in mitochondrial energy production, fatty-acid oxidation, and aerobic exercise adaptation. In small mouse experiments, it increased oxidative type IIa muscle fibers and treadmill endurance; in obese mice, it increased energy expenditure and reduced fat accumulation without reducing food intake or increasing spontaneous activity.",
    "Those findings do **not** mean that SLU-PP-332 is an “exercise pill” for people. The original compound lacks oral bioavailability, the animal studies used intraperitoneal injection, and no clinical trial has established a safe dose, side-effect frequency, weight-loss effect, athletic benefit, or long-term risk in humans. A different analog, **SLU-PP-915**, was later optimized for oral activity.",
    "This page is an evidence reference, not a dosing recommendation. It does not include a human dose calculator, reconstitution guide, or week-by-week protocol.",
  ],
  glance: {
    title: "30-Second Summary",
    table: {
      headers: ["Question", "Evidence-based answer"],
      rows: [
        [
          "**What is it?**",
          "A synthetic small molecule and laboratory pan-ERR agonist—not a peptide, hormone, SARM, or approved drug",
        ],
        [
          "**Main mechanism**",
          "Activates ERRα/β/γ; skeletal-muscle exercise-response signal was ERRα-dependent in knockout experiments",
        ],
        [
          "**Administration studied**",
          "Primarily intraperitoneal injection in mice; cell studies used micromolar concentrations",
        ],
        ["**Human dosage**", "None established"],
        [
          "**Main mouse doses**",
          "30 mg/kg once (exposure); 50 mg/kg once or BID (muscle/metabolic); 25 mg/kg regimens (heart/kidney)",
        ],
        [
          "**Strongest result**",
          "Single 50 mg/kg dose ↑ treadmill time ~70% and distance ~45% vs vehicle — not reproduced in humans",
        ],
        [
          "**Weight result**",
          "DIO mice ~12% body-weight loss over 28 days; ~1/10 fat gain vs controls; intake/activity unchanged",
        ],
        ["**Human side effects**", "Unknown; no human safety dataset"],
        [
          "**Oral bioavailability**",
          "Original investigators reported SLU-PP-332 lacks oral bioavailability",
        ],
        ["**FDA status**", "Not FDA approved for any indication"],
        [
          "**Human trials**",
          "None identified in ClinicalTrials.gov exact-name search as of August 21, 2026",
        ],
      ],
    },
  },
  sections: [
    {
      id: "what-is",
      title: "What Is SLU-PP-332?",
      paragraphs: [
        "SLU-PP-332 is a research compound developed as a pharmacologic tool for activating estrogen-related receptors. Its name is sometimes placed beside peptides by research-chemical sellers, but chemically it is a **small organic molecule** (C18H14N2O2, 290.3 g/mol).",
        "**“Estrogen-related” does not mean estrogen.** ERRs are orphan nuclear receptors, not ERα/ERβ. The name does not establish that SLU-PP-332 raises or blocks estrogen, causes gynecomastia, or shares estrogen-therapy risks.",
      ],
      tables: [
        {
          headers: ["Property", "Detail"],
          rows: [
            ["Compound class", "Synthetic small molecule"],
            ["Chemical name", "4-hydroxy-N-[(Z)-naphthalen-2-ylmethylideneamino]benzamide"],
            ["Molecular formula", "C18H14N2O2"],
            ["Molecular weight", "290.3 g/mol"],
            ["Primary targets", "ERRα, ERRβ, ERRγ"],
            ["Reported EC50", "98 nM ERRα · 230 nM ERRβ · 430 nM ERRγ"],
            ["Key limitation", "Poor oral bioavailability; human pharmacology uncharacterized"],
          ],
        },
      ],
    },
    {
      id: "dosage",
      title: "SLU-PP-332 Dosage Used in Preclinical Studies",
      paragraphs: [
        "**There is no established human dosage.** No controlled human study has determined a starting dose, maintenance dose, maximum dose, escalation schedule, route, half-life, therapeutic window, or monitoring plan. Online “cycles” in µg or mg are not clinical protocols.",
        "Mouse mg/kg cannot be converted into a human protocol. Even an allometric “human-equivalent dose” is only an early toxicology-planning estimate — not a recommended dose. Studies used **IP injection**, which does not map cleanly to oral, SC, IM, or IV use in people.",
      ],
      widget: "slupp-protocol-timeline",
      bullets: [
        "**No legitimate human dose-escalation chart exists.** Titration requires human PK, tolerability, and exposure-response data — SLU-PP-332 has none.",
        "Some websites infer a 1–2 hour half-life from two mouse sampling points. That should not be presented as a validated half-life analysis.",
      ],
    },
    {
      id: "results",
      title: "SLU-PP-332 Results and Effectiveness",
      paragraphs: [
        "The strongest quantitative outcome is acute mouse treadmill endurance. Obesity models showed reduced fat accumulation without lower food intake. Glucose findings are **model-dependent**: improved in metabolically impaired obese mice, **not** in healthy chow-fed mice.",
        "There is no evidence that SLU-PP-332 is an anabolic muscle-growth drug. It shifted muscle toward a more oxidative, fatigue-resistant phenotype. “Exercise mimetic” is a mechanistic research label — not proof of exercise equivalence.",
      ],
      widget: "slupp-results-toggle",
      widgetAfter: "slupp-endurance-chart",
    },
    {
      id: "metabolic",
      title: "Metabolic Results by Mouse Model",
      paragraphs: [
        "Keep chow-fed, DIO, and ob/ob results separate. The 12% weight figure is a mouse result and should not be compared numerically with clinical weight-loss trials of approved drugs.",
      ],
      widget: "slupp-metabolic-explorer",
    },
    {
      id: "evidence-nav",
      title: "Evidence Across Models",
      paragraphs: [
        "Filter by experimental system. The Human Data tab states the gap directly: **no interventional human evidence identified**.",
      ],
      widget: "slupp-evidence-navigator",
    },
    {
      id: "side-effects",
      title: "SLU-PP-332 Side Effects and Safety",
      paragraphs: [
        "**Human side-effect rates are unknown.** There are no human trial arms from which to calculate nausea, headache, heart-rate change, liver injury, serious events, or discontinuation. Anecdotes cannot establish incidence or causality.",
        "Mouse efficacy studies reported no overt toxicity in some regimens and only relatively minor liver-enzyme changes in the metabolic study. “No severe effects observed” must never be rendered as “proven safe.”",
      ],
      widget: "slupp-safety-matrix",
      subsections: [
        {
          title: "2026 metabolism research ≠ human safety study",
          paragraphs: [
            "A 2026 laboratory study incubated SLU-PP-332 with **human liver microsomes and S9 fractions** and identified nine in-vitro transformation products. This helps anti-doping laboratories anticipate analytical targets. It does not show how a living person absorbs, distributes, clears, or tolerates the compound.",
          ],
        },
      ],
    },
    {
      id: "how-it-works",
      title: "How SLU-PP-332 Works",
      paragraphs: [
        "SLU-PP-332 enters cells and activates ERR nuclear receptors — gene-control switches in high-energy tissues. In mouse skeletal muscle, it turned on part of the genetic program associated with aerobic exercise, increased mitochondrial machinery, shifted fibers toward a more oxidative type, and increased fat use as fuel.",
        "Tissue specificity matters: acute skeletal-muscle endurance was **ERRα-dependent**, while cardioprotection in the heart-failure model implicated **ERRγ** as the principal mediator.",
      ],
      widget: "slupp-mechanism",
    },
    {
      id: "compare",
      title: "SLU-PP-332 vs Similar Compounds",
      paragraphs: [
        "Cross-comparisons describe mechanism and evidence stage — **not head-to-head human efficacy**.",
      ],
      tables: [
        {
          headers: ["Compound", "Class / mechanism", "Human evidence", "Key distinction"],
          rows: [
            [
              "SLU-PP-332",
              "Small-molecule ERRα/β/γ agonist",
              "None",
              "Lacks oral bioavailability; foundational preclinical tool",
            ],
            [
              "SLU-PP-915",
              "Chemically distinct pan-ERR agonist",
              "No clinical efficacy identified",
              "Orally active in mice — not another name for 332",
            ],
            [
              "GW501516 (cardarine)",
              "PPARδ agonist",
              "Limited early human metabolic work; not approved",
              "Different receptor; carcinogenicity concerns",
            ],
            [
              "AICAR",
              "AMPK-pathway activator",
              "Pharmacology in other contexts; not approved exercise mimetic",
              "Energy-sensing pathway, not direct ERR agonism",
            ],
            [
              "MOTS-c",
              "Mitochondrial-derived peptide",
              "Early/limited human research",
              "Actually a peptide; different target network",
            ],
            [
              "Aerobic exercise",
              "Multi-system physiologic intervention",
              "Extensive human outcome evidence",
              "Benefits a single receptor agonist cannot reproduce",
            ],
          ],
        },
      ],
      widgetAfter: "slupp-vs-915",
    },
    {
      id: "claims",
      title: "Claim Checker",
      paragraphs: [
        "Common search claims versus what the evidence actually supports.",
      ],
      widget: "slupp-claim-checker",
    },
    {
      id: "clinical-evidence",
      title: "Clinical and Preclinical Evidence",
      subsections: [
        {
          title: "Skeletal-muscle exercise response (Billon 2023)",
          paragraphs: [
            "**Design:** Cells + male mice · **Dose:** 30–50 mg/kg IP · **Result:** Oxidative phenotype; ~70% longer / ~45% farther treadmill running · **Limit:** Small male-mouse groups; no human data",
          ],
        },
        {
          title: "Obesity and metabolic syndrome (Billon 2024)",
          paragraphs: [
            "**Design:** Chow, DIO, and ob/ob mice at thermoneutrality · **Dose:** 50 mg/kg IP BID · **Result:** ↑ EE/FAO, ↓ fat accumulation; glucose improved only in impaired models · **Limit:** Very small groups; model-dependent glucose",
          ],
        },
        {
          title: "Pressure-overload heart failure (Xu 2024)",
          paragraphs: [
            "**Design:** TAC mice · **Dose:** 25 mg/kg IP BID × 6 weeks · **Result:** ↑ EF, ↓ fibrosis, ↑ survival; hypertrophy not prevented · **Limit:** Some analyses pooled SLU-PP-332 and SLU-PP-915",
          ],
        },
        {
          title: "Aging kidney (Wang 2023)",
          paragraphs: [
            "**Design:** 21-month-old male mice · **Dose:** 25 mg/kg/day IP × 8 weeks · **Result:** Improved albuminuria, podocyte, mitochondrial, inflammatory markers · **Limit:** Biomarkers, not clinical CKD outcomes",
          ],
        },
        {
          title: "Orally active successor (Billon 2026)",
          paragraphs: [
            "**Compound:** SLU-PP-915 · **Result:** Oral exercise-mimetic activity in mice; paper states SLU-PP-332 lacks oral bioavailability · **Limit:** Applies to 915 and mice — not oral 332 in humans",
          ],
        },
      ],
      widgetAfter: "slupp-research-timeline",
    },
    {
      id: "evidence-quality",
      title: "Evidence Quality",
      tables: [
        {
          headers: ["Evidence type", "Strength", "Why"],
          rows: [
            ["Human randomized trials", "None", "No human dosing study identified"],
            ["Mouse efficacy studies", "Early but coherent", "Small groups, mostly male, specialized models"],
            ["Genetic target validation", "Moderate preclinical", "ERRα muscle KO; ERRγ cardiac dependency"],
            ["Pharmacokinetics", "Very limited", "Mouse concentrations at 2 and 6 hours only"],
            ["Safety toxicology", "Insufficient", "Not a full regulatory toxicology package"],
            ["FDA approval", "None", "No approved label or indication"],
          ],
        },
      ],
      paragraphsAfter: [
        "**Bottom line:** Promising mechanistic and animal evidence; no clinical evidence. Discuss as a preclinical ERR research tool — not a proven obesity medication, endurance enhancer, anti-aging treatment, or exercise replacement.",
      ],
    },
    {
      id: "regulatory",
      title: "Regulatory and Research Status",
      tables: [
        {
          headers: ["Status question", "Answer as of August 21, 2026"],
          rows: [
            ["FDA approved?", "No"],
            ["Clinical-trial phase", "No human phase assigned"],
            ["ClinicalTrials.gov", "Exact-name search returned zero studies"],
            ["Established human dose?", "No"],
            ["Dietary-supplement status", "Not an established dietary ingredient"],
            ["Main development direction", "Chemical optimization including orally active SLU-PP-915"],
          ],
        },
      ],
      paragraphsAfter: [
        "**Sports / anti-doping:** SLU-PP-332 is not clearly named in the searchable 2026 WADA list text, but **S0** covers non-approved pharmacologic substances, and the compound is being studied for doping-detection potential. Absence of an exact-name listing is not permission.",
      ],
    },
  ],
  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "Is SLU-PP-332 a peptide?",
        answer:
          "No. It is a synthetic small organic molecule with the formula C18H14N2O2 — not an amino-acid chain.",
      },
      {
        question: "What is the SLU-PP-332 dosage?",
        answer:
          "There is no established human dosage. Published studies used IP doses of 25–50 mg/kg in mice for specific experiments, which must not be presented as a human protocol.",
      },
      {
        question: "Is oral SLU-PP-332 effective?",
        answer:
          "Published investigators reported that SLU-PP-332 lacks oral bioavailability. The oral mouse data belong to a different molecule, SLU-PP-915.",
      },
      {
        question: "What is the half-life of SLU-PP-332?",
        answer:
          "The human half-life is unknown. The original paper measured mouse plasma and muscle concentrations at two and six hours after IP dosing — not enough to establish a robust half-life.",
      },
      {
        question: "Does SLU-PP-332 increase endurance?",
        answer:
          "It increased treadmill endurance in a small mouse experiment. There is no human evidence that it improves VO2 max, race time, work capacity, or recovery.",
      },
      {
        question: "Does SLU-PP-332 build muscle?",
        answer:
          "No anabolic or hypertrophy effect has been established. The main finding was a shift toward oxidative type IIa fibers and improved mouse endurance.",
      },
      {
        question: "Does SLU-PP-332 burn fat or cause weight loss?",
        answer:
          "It increased fatty-acid oxidation and reduced fat accumulation in obese mice. No clinical trial has measured human weight loss or body composition.",
      },
      {
        question: "Does SLU-PP-332 improve blood sugar?",
        answer:
          "The effect depended on the mouse model: glucose endpoints improved in metabolically impaired obese mice but not in healthy chow-fed mice. Human effects are unknown.",
      },
      {
        question: "Is SLU-PP-332 FDA approved?",
        answer:
          "No. It is not FDA approved for weight loss, diabetes, heart failure, kidney disease, athletic performance, or any other indication.",
      },
      {
        question: "Is SLU-PP-332 the same as cardarine?",
        answer:
          "No. SLU-PP-332 activates ERRs, whereas cardarine (GW501516) activates PPARδ. Chemistry, targets, development history, and risks differ.",
      },
      {
        question: "Is SLU-PP-332 the same as SLU-PP-915?",
        answer:
          "No. SLU-PP-915 is a chemically distinct analog developed for oral activity. Data from one compound cannot be assigned to the other.",
      },
      {
        question: "Can SLU-PP-332 replace exercise?",
        answer:
          "No. It reproduced selected molecular and metabolic signals in mice, not the full cardiovascular, musculoskeletal, neurologic, or psychological effects of exercise.",
      },
      {
        question: "Is SLU-PP-332 prohibited in sport?",
        answer:
          "Athletes should treat it as prohibited or at minimum high-risk. WADA’s S0 category covers non-approved pharmacologic substances, and anti-doping researchers are developing analytical methods for SLU-PP-332.",
      },
    ],
  },
  sources: {
    title: "References",
    items: [
      {
        authors: "Billon C, et al.",
        title: "Synthetic ERRα/β/γ agonist enhances exercise capacity",
        detail: "ACS Chem Biol. 2023.",
        href: "https://pubmed.ncbi.nlm.nih.gov/36988910/",
      },
      {
        authors: "Billon C, et al.",
        title: "A synthetic ERR agonist alleviates metabolic syndrome",
        detail: "J Pharmacol Exp Ther. 2024.",
        href: "https://pubmed.ncbi.nlm.nih.gov/37739806/",
      },
      {
        authors: "Xu W, et al.",
        title: "Pan-ERR agonists ameliorate heart failure via fatty-acid metabolism",
        detail: "Circulation. 2024.",
        href: "https://pubmed.ncbi.nlm.nih.gov/37961903/",
      },
      {
        authors: "Wang XX, et al.",
        title: "ERR agonism reverses mitochondrial dysfunction in the aging kidney",
        detail: "Am J Pathol. 2023.",
        href: "https://pubmed.ncbi.nlm.nih.gov/37717940/",
      },
      {
        authors: "Billon C, et al.",
        title: "Orally active ERR agonist SLU-PP-915 enhances aerobic exercise capacity",
        detail: "J Pharmacol Exp Ther. 2026.",
        href: "https://pubmed.ncbi.nlm.nih.gov/41421047/",
      },
      {
        authors: "Möller T, et al.",
        title: "In vitro metabolism of SLU-PP-332 and SLU-PP-915",
        detail: "Rapid Commun Mass Spectrom. 2026.",
        href: "https://pubmed.ncbi.nlm.nih.gov/41588687/",
      },
      {
        authors: "PubChem",
        title: "SLU-PP-332 compound summary",
        detail: "Molecular formula and weight.",
        href: "https://pubchem.ncbi.nlm.nih.gov/compound/Slu-PP-332",
      },
      {
        authors: "WADA",
        title: "2026 Prohibited List",
        detail: "S0 covers non-approved pharmacologic substances.",
        href: "https://www.wada-ama.org/sites/default/files/2025-09/2026list_en_final_clean_september_2025.pdf",
      },
    ],
  },
  safety: {
    title: "Important Safety Information",
    paragraphs: [
      "SLU-PP-332 is an investigational **small-molecule** pan-ERR agonist. It is **not a peptide**, **not FDA approved**, and has **no established human dosage** or safety dataset.",
      "It lacks oral bioavailability according to published investigators. Online products and animal IP doses must not be converted into human protocols.",
      "This page is an evidence reference. It is **not a dosing, reconstitution, stacking, or sports-performance guide**.",
    ],
  },
};
