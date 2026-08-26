/**
 * MOTS-c research guide — native peptide distinct from CB4211 analog.
 * No established human dose; no titration/reconstitution modules.
 */

export const MOTSC_EVIDENCE_LADDER = [
  {
    id: "mechanism",
    level: "Molecular mechanism",
    label: "Cell",
    detail:
      "Folate/purine signaling, AICAR, AMPK, nuclear translocation, CK2 binding",
  },
  {
    id: "cell",
    level: "Cell studies",
    label: "Cell",
    detail:
      "Glucose metabolism, myostatin signaling, stress responses, 2026 stromal-cell repair paradox",
  },
  {
    id: "animal",
    level: "Animal studies",
    label: "Animal",
    detail:
      "Weight-gain prevention, glucose disposal, treadmill capacity, muscle atrophy, bone/CV models",
  },
  {
    id: "endo",
    level: "Endogenous human studies",
    label: "Measured in humans",
    detail: "Exercise response, biomarker associations, muscle correlations",
  },
  {
    id: "genetic",
    level: "Human genetic studies",
    label: "Association only",
    detail: "m.1382A>C/K14Q; n=27,527; sex/activity interaction",
  },
  {
    id: "trial",
    level: "Native-MOTS-c intervention",
    label: "Pending",
    detail: "MOTS-MET recruiting; no results",
  },
  {
    id: "approval",
    level: "Approval",
    label: "Pending",
    detail: "None — not FDA approved",
  },
];

export const MOTSC_HUMAN_EVIDENCE = [
  {
    id: "mots-met",
    type: "Administered MOTS-c",
    study: "MOTS-MET Phase 2a",
    participants: "Planned n=120; prediabetes + BMI 27–40",
    exposure: "Fixed once-daily SC dose — amount undisclosed",
    outcome: "No results posted",
    interpretation: "Registration is not a result",
    href: "https://clinicaltrials.gov/study/NCT07505745",
  },
  {
    id: "reynolds-2021",
    type: "Endogenous MOTS-c",
    study: "Reynolds et al., 2021",
    participants: "10 young men (cycling protocol)",
    exposure: "No drug — measured body’s own MOTS-c",
    outcome: "Muscle MOTS-c ↑ after exercise (P=0.0098); serum changes significant",
    interpretation: "Exercise responsiveness — not injected-drug efficacy",
    href: "https://pubmed.ncbi.nlm.nih.gov/33473109/",
  },
  {
    id: "zhou-2024",
    type: "Endogenous MOTS-c",
    study: "Zhou et al. meta-analysis, 2024",
    participants: "602 across 7 observational studies",
    exposure: "Circulating MOTS-c levels",
    outcome: "Lower in diabetes (SMD −0.89); higher in obesity subgroup (SMD +0.51)",
    interpretation: "Biomarker associations — not treatment evidence",
    href: "https://pubmed.ncbi.nlm.nih.gov/39160573/",
  },
  {
    id: "kumagai-2021",
    type: "Endogenous MOTS-c",
    study: "Kumagai et al., 2021",
    participants: "Japanese men (biomarker) + cell/mouse arms",
    exposure: "Endogenous plasma MOTS-c vs myostatin",
    outcome: "Inverse correlation with plasma myostatin",
    interpretation: "Correlation ≠ administered hypertrophy evidence",
    href: "https://pubmed.ncbi.nlm.nih.gov/33554779/",
  },
  {
    id: "zempo-2021",
    type: "Genetic Evidence",
    study: "Zempo et al., 2021",
    participants: "27,527 across 3 cohorts",
    exposure: "m.1382A>C (K14Q) mtDNA variant",
    outcome: "Higher T2D prevalence in men, esp. low activity; K14Q less active in mice",
    interpretation: "Natural experiment — not a dosing trial",
    href: "https://pubmed.ncbi.nlm.nih.gov/33468709/",
  },
  {
    id: "cb4211",
    type: "MOTS-c Analog",
    study: "CB4211 Phase 1a/1b",
    participants: "65 healthy + 20 obesity/NAFLD",
    exposure: "CB4211 25 mg SC daily × 4 weeks (Phase 1b)",
    outcome: "Sponsor: ↓ ALT/AST/glucose; liver fat similar to placebo",
    interpretation: "Different molecule — do not transfer to native MOTS-c",
    href: "https://clinicaltrials.gov/study/NCT03998514",
  },
];

export const MOTSC_MOTS_MET = {
  nct: "NCT07505745",
  status: "Recruiting",
  resultsPosted: false,
  n: 120,
  site: "Peking University Shenzhen Hospital (registry site)",
  population: "Adults 18–65; BMI 27–40; prediabetes",
  regimen: "Fixed once-daily SC dose — amount not publicly disclosed",
  treatment: "12 weeks",
  safety: "Through Week 16",
  primaryEfficacy: "Change in OGTT Matsuda Index at Week 12",
  primarySafety: "Treatment-emergent adverse events",
  start: "February 2, 2026",
  primaryCompletion: "February 2027 (estimate; may change)",
  overallCompletion: "May 2028 (estimate; may change)",
  href: "https://clinicaltrials.gov/study/NCT07505745",
};

export const MOTSC_CLAIMS = [
  {
    claim: "Weight loss",
    evidence: "High-fat-diet mouse models (~20% lower final weight vs vehicle HFD)",
    verdict: "Not demonstrated in humans",
  },
  {
    claim: "Better insulin sensitivity",
    evidence: "Mice; MOTS-MET human trial pending",
    verdict: "Not demonstrated after human dosing",
  },
  {
    claim: "More endurance",
    evidence: "Mouse treadmill studies (young, middle-aged, old)",
    verdict: "Not demonstrated in humans",
  },
  {
    claim: "Muscle growth",
    evidence: "Cell/mouse anti-atrophy / myostatin signaling",
    verdict: "No human hypertrophy evidence",
  },
  {
    claim: "Faster recovery",
    evidence: "No controlled human study; 2026 stromal-cell result raises context concern",
    verdict: "Unsupported",
  },
  {
    claim: "Longer life",
    evidence: "Mouse healthspan; numerical lifespan ↑ but overall curve P=0.23",
    verdict: "No human evidence",
  },
  {
    claim: "Exercise replacement",
    evidence: "Mechanistic overlap + endogenous exercise response",
    verdict: "Misleading",
  },
];

export const MOTSC_ANIMAL = [
  {
    id: "hfd-8wk",
    area: "Metabolism",
    model: "Male mice, 60% HFD",
    dose: "0.5 mg/kg/day IP × 8 weeks",
    result: "~20% lower final body weight; ↑ energy expenditure; less liver fat",
    limit: "Prevention of mouse weight gain ≠ human weight-loss evidence",
  },
  {
    id: "clamp",
    area: "Metabolism",
    model: "Adult male mice, glucose clamp",
    dose: "5 mg/kg/day IP",
    result: "~30% higher glucose-infusion requirement during insulin stimulation",
    limit: "Short animal physiology experiment",
  },
  {
    id: "older-ir",
    area: "Metabolism",
    model: "Older insulin-resistant mice",
    dose: "5 mg/kg/day IP × 7 days",
    result: "Restored ex-vivo soleus insulin responsiveness toward young levels",
    limit: "Tissue-specific animal result",
  },
  {
    id: "obese-3d",
    area: "Metabolism",
    model: "Obese male mice",
    dose: "2.5 mg/kg IP twice daily × 3 days",
    result: "~50% lower blood glucose + metabolite changes",
    limit: "Very short study; not a clinical endpoint",
  },
  {
    id: "treadmill",
    area: "Exercise",
    model: "Young / middle-aged / old mice",
    dose: "5 or 15 mg/kg IP (acute to multi-week)",
    result: "Improved treadmill performance; stronger effects at 15 mg/kg in young mice",
    limit: "Cannot be assumed in human athletes",
  },
  {
    id: "atrophy",
    area: "Muscle",
    model: "HFD mouse + cell myotubes",
    dose: "0.5 mg/kg/day × 3 weeks (mouse arm)",
    result: "Reduced myostatin signaling; protection vs HFD relative muscle-mass loss",
    limit: "Preclinical anti-atrophy — not human hypertrophy",
  },
  {
    id: "aging",
    area: "Aging",
    model: "Late-life male mice from 23.5 months",
    dose: "15 mg/kg 3×/week",
    result: "Median 970 vs 912 days; max 1,120 vs 1,047; overall curve P=0.23",
    limit: "Healthspan clearer than definitive lifespan extension",
  },
  {
    id: "ovx",
    area: "Bone",
    model: "Ovariectomized mice",
    dose: "5 mg/kg/day IP × 12 weeks",
    result: "Less weight/fat gain; improved glucose tolerance; bone/metabolic markers",
    limit: "Menopause-related mouse model",
  },
  {
    id: "cv",
    area: "Cardiovascular",
    model: "Rodent vascular / myocardial models",
    dose: "Experiment-specific",
    result: "Vascular calcification, remodeling, high-altitude cardiac studies reported",
    limit: "Preclinical only — no human CV outcomes",
  },
  {
    id: "pancreas",
    area: "Pancreas",
    model: "Islet senescence models",
    dose: "Experiment-specific",
    result: "Reported effects on islet senescence and glucose tolerance",
    limit: "Not an established diabetes treatment",
  },
];

export const MOTSC_MECHANISM = [
  {
    id: "metabolic",
    branch: "Metabolic route",
    steps:
      "MOTS-c → one-carbon/purine metabolism → AICAR accumulation → AMPK → glucose and lipid handling",
    callouts: ["GLUT4 translocation (cells/animals)", "PGC-1α / AMPK (2026 ex-vivo)"],
  },
  {
    id: "stress",
    branch: "Stress-signaling route",
    steps:
      "Metabolic stress → nuclear translocation → NRF2 / stress-responsive transcription → adaptive gene expression",
    callouts: ["CK2–PTEN–mTORC2–AKT–FOXO1 (myostatin/atrophy)", "Context-dependent senescence findings"],
  },
];

export const MOTSC_VS_CB4211 = [
  {
    field: "Molecule",
    mots: "Native 16-aa MOTS-c (MRWQEMGYIFYPRKLR)",
    cb: "Modified MOTS-c analog",
  },
  {
    field: "Clinical phase",
    mots: "Phase 2a recruiting (MOTS-MET)",
    cb: "Completed Phase 1a/1b",
  },
  {
    field: "Population",
    mots: "Prediabetes + overweight/obesity (planned)",
    cb: "Healthy adults; obesity + NAFLD",
  },
  {
    field: "Dose disclosed?",
    mots: "No — fixed daily SC, amount undisclosed",
    cb: "Yes — 25 mg SC daily in Phase 1b",
  },
  {
    field: "Results",
    mots: "None posted",
    cb: "Sponsor: ↓ ALT/AST/glucose; liver fat ≈ placebo",
  },
  {
    field: "Adverse events",
    mots: "Unknown for native peptide",
    cb: "Injection-site reactions >10%; no SAEs reported in Phase 1b",
  },
  {
    field: "Development status",
    mots: "Active recruiting trial",
    cb: "Original developer moved toward dissolution; no active pivotal program identified",
  },
];

export const MOTSC_SAFETY_MATRIX = [
  { domain: "Human pharmacokinetics", status: "Not studied", note: "FDA found no in-vivo PK/TK" },
  { domain: "Human half-life", status: "Not studied", note: "In-vitro blood cleavage ≠ clinical half-life" },
  { domain: "Dose-response", status: "Not studied", note: "No published human dose-response" },
  { domain: "Common adverse events", status: "Not studied", note: "No completed native-MOTS-c AE table" },
  { domain: "Serious adverse events", status: "Not studied", note: "No controlled human dataset" },
  { domain: "Immunogenicity", status: "Pending", note: "MOTS-MET plans anti-drug antibody assessment" },
  { domain: "Drug interactions", status: "Not studied", note: "Including glucose-lowering drugs" },
  { domain: "Reproductive toxicity", status: "Not studied", note: "FDA: no DART package identified" },
  { domain: "Genotoxicity", status: "Not studied", note: "FDA: no studies identified" },
  { domain: "Carcinogenicity", status: "Not studied", note: "FDA: no studies identified" },
  { domain: "Organ-lab effects", status: "Not studied", note: "No native-MOTS-c safety tables" },
  { domain: "Long-term safety", status: "Not studied", note: "Unknown" },
];

export const MOTSC_REGULATORY = [
  {
    date: "2015",
    title: "Discovery paper",
    detail: "Lee et al. report MOTS-c as a mitochondrial-derived metabolic signal.",
    badge: "Science",
  },
  {
    date: "2021",
    title: "CB4211 analog topline",
    detail: "Phase 1a/1b sponsor results for modified analog — not native MOTS-c.",
    badge: "Analog",
  },
  {
    date: "2024",
    title: "WADA listing",
    detail: "Explicit prohibition as AMPK activator under S4.4.1 (in and out of competition).",
    badge: "Anti-doping",
  },
  {
    date: "Feb 2026",
    title: "MOTS-MET study start",
    detail: "First registered randomized native-MOTS-c metabolic efficacy trial begins recruiting.",
    badge: "Clinical trial",
  },
  {
    date: "Jun 2026",
    title: "Stromal-cell repair paradox",
    detail: "AMPK activation with reduced proliferation, ↑ p16/p21/TNF-α, impaired reparative function.",
    badge: "Science",
  },
  {
    date: "Jul 2026",
    title: "FDA / PCAC compounding review",
    detail:
      "Staff recommended against 503A listing; PCAC voted 7–5 (2 abstentions) for inclusion — nonbinding.",
    badge: "Compounding process",
  },
  {
    date: "Pending",
    title: "FDA final action & MOTS-MET results",
    detail: "Final compounding determination and Phase 2a outcomes still pending.",
    badge: "FDA approval: none",
  },
];

export const MOTSC_BIOMARKERS = [
  {
    id: "exercise",
    study: "Reynolds 2021 exercise",
    measured: "Tissue + blood",
    n: "10 young men",
    finding: "Muscle and serum MOTS-c rose after cycling",
    administered: false,
  },
  {
    id: "meta",
    study: "Zhou 2024 meta-analysis",
    measured: "Blood",
    n: "602",
    finding: "↓ in diabetes; ↑ in obesity subgroup; + correlations with TC/LDL",
    administered: false,
  },
  {
    id: "myostatin",
    study: "Kumagai 2021",
    measured: "Blood",
    n: "Japanese men cohort",
    finding: "Inverse correlation with plasma myostatin",
    administered: false,
  },
  {
    id: "k14q",
    study: "Zempo 2021 genetics",
    measured: "Genotype",
    n: "27,527",
    finding: "K14Q associated with higher T2D in men (esp. low activity)",
    administered: false,
  },
];

export const MOTSC_DOSAGE_GUIDE = {
  title:
    "MOTS-c Peptide: Dosage, Human Trials, Results, Side Effects & FDA Status",
  updated: "Updated August 2026",
  callout:
    "**Research status:** MOTS-c is an investigational mitochondria-derived peptide. It is **not FDA approved for any indication**, has **no established human dosage**, and has no published results from a completed trial in which native MOTS-c was administered to people. A 120-participant Phase 2a trial is recruiting, but its fixed dose is not publicly disclosed. The completed human study frequently described as a “MOTS-c trial” tested **CB4211, a modified MOTS-c analog**, not native MOTS-c.",
  intro: [
    "MOTS-c—short for **mitochondrial open reading frame of the 12S rRNA type-c**—is a 16-amino-acid signaling peptide encoded within mitochondrial DNA. Laboratory and animal studies connect it to cellular energy sensing, AMPK signaling, glucose handling, skeletal-muscle metabolism, exercise capacity, and stress-responsive gene expression. Those findings are biologically interesting, but most claimed benefits remain unproven in people.",
    "The first registered randomized study administering native MOTS-c for a metabolic indication, **MOTS-MET (NCT07505745)**, began in 2026. It plans to randomize 120 adults with prediabetes and overweight or obesity to once-daily subcutaneous MOTS-c or placebo for 12 weeks. No results have been posted, and the public registry does not disclose the dose.",
    "MOTS-c is often marketed for weight loss, endurance, muscle preservation, recovery, insulin resistance, and longevity. As of this update, none of those uses is supported by a completed controlled human trial of native MOTS-c.",
    "This page is an evidence reference, not a dosing recommendation or medical advice. It does not include a reconstitution calculator, titration chart, or human dose converter.",
  ],
  glance: {
    title: "30-Second Summary",
    table: {
      headers: ["Question", "Answer"],
      rows: [
        [
          "**What is it?**",
          "A naturally occurring 16-amino-acid mitochondrial-derived peptide encoded within MT-RNR1/12S rRNA",
        ],
        [
          "**Main proposed mechanism**",
          "Metabolic-stress signaling involving the folate–purine–AICAR–AMPK axis, nuclear translocation, and context-dependent nuclear gene regulation",
        ],
        [
          "**Studied administration**",
          "Native MOTS-c: once-daily SC in an ongoing Phase 2a trial (dose undisclosed); most published intervention evidence is rodent IP",
        ],
        ["**Established human dosage**", "None"],
        [
          "**Strongest human evidence**",
          "Recruiting Phase 2a; exercise-related endogenous MOTS-c changes; observational biomarker and genetic studies",
        ],
        [
          "**Strongest administered result**",
          "Improved metabolic and physical-performance outcomes in mouse models — not demonstrated in humans",
        ],
        [
          "**Known side effects**",
          "No established adverse-event profile for native MOTS-c in humans",
        ],
        ["**FDA status**", "Not approved; not a component of an FDA-approved drug"],
        [
          "**Compounding status**",
          "July 2026 PCAC recommended possible 503A inclusion 7–5 (2 abstentions) — nonbinding",
        ],
        ["**Sport status**", "Prohibited at all times by WADA as an AMPK activator"],
      ],
    },
  },
  sections: [
    {
      id: "what-is",
      title: "What Is MOTS-c?",
      paragraphs: [
        "MOTS-c is a small protein—often called a peptide or microprotein—made from a short open reading frame embedded in the mitochondrial 12S ribosomal RNA region. Reported human sequence: **MRWQEMGYIFYPRKLR** (~2,174.6 g/mol free base). Discovered in 2015 by Lee and colleagues.",
        "Calling MOTS-c a “mitochondrial peptide” does not mean an injected product simply supplies energy to mitochondria. Research describes MOTS-c as a **signaling molecule** that can alter cellular metabolism and, under stress, move into the nucleus and influence gene expression. No definitive cell-surface receptor has been established.",
      ],
      tables: [
        {
          headers: ["Property", "Verified description"],
          rows: [
            ["Full name", "Mitochondrial open reading frame of the 12S rRNA type-c"],
            ["Length", "16 amino acids"],
            ["Genetic origin", "Short ORF within mitochondrial 12S rRNA/MT-RNR1"],
            ["Endogenous presence", "Detected in human and rodent tissues and circulation"],
            ["Main research tissues", "Skeletal muscle, metabolic tissues, bone, cardiovascular tissue"],
            ["Known receptor", "No definitive cell-surface receptor established"],
            ["Regulatory status", "Investigational; not an approved medicine"],
          ],
        },
      ],
    },
    {
      id: "evidence-map",
      title: "MOTS-c Evidence Map: Four Different Questions",
      paragraphs: [
        "Many MOTS-c pages mix unlike forms of evidence. The distinctions below are essential. The strongest conclusion supported today is that MOTS-c is a biologically active mitochondrial signal with substantial preclinical research and an emerging human-development program — **not** a clinically validated metabolic, performance, muscle-building, or longevity therapy.",
      ],
      widget: "motsc-evidence-ladder",
      tables: [
        {
          headers: ["Evidence lane", "What was studied?", "What it can answer", "What it cannot answer"],
          rows: [
            [
              "Endogenous human physiology",
              "MOTS-c already present in blood or tissue",
              "Whether levels change with exercise, age, obesity, diabetes",
              "Whether an injected product works or is safe",
            ],
            [
              "Human genetic studies",
              "Natural mtDNA variants that alter MOTS-c",
              "Whether MOTS-c biology may be relevant to metabolic traits",
              "The effect of administering synthetic MOTS-c",
            ],
            [
              "Cell and animal intervention",
              "Synthetic MOTS-c in cells or rodents",
              "Mechanism, plausibility, animal-model effects",
              "Human dose, efficacy, safety, or clinical outcomes",
            ],
            [
              "Human drug trials",
              "Native MOTS-c or a defined analog given to people",
              "Product-specific safety and efficacy",
              "Results for a different molecule, formulation, or population",
            ],
          ],
        },
      ],
    },
    {
      id: "dosage",
      title: "MOTS-c Dosage: No Established Human Dose",
      paragraphs: [
        "**There is no FDA-approved or clinically established MOTS-c dosage.** No completed peer-reviewed trial has defined a safe, effective dose of native MOTS-c in humans.",
        "Five- and ten-milligram protocols are widely repeated online. In FDA’s 2026 review, 5 mg and 10 mg were the **proposed vial strengths in a withdrawn compounding nomination** — not evidence-based clinical dosages. The nomination did not adequately specify reconstitution volume, concentration, formulation, or free base versus acetate.",
        "Animal milligram-per-kilogram amounts cannot be converted into a defensible human dose. FDA found no in-vivo pharmacokinetic or toxicokinetic study of MOTS-c.",
      ],
      tables: [
        {
          caption: "Research exposures — not dosing recommendations",
          headers: ["Compound", "Population/model", "Dose", "Route / duration", "Role"],
          rows: [
            [
              "Native MOTS-c",
              "Prediabetes + BMI 27–40 (MOTS-MET)",
              "Not publicly disclosed",
              "Once-daily SC × 12 weeks",
              "Recruiting Phase 2a",
            ],
            [
              "Compounded nomination",
              "FDA nomination — not a clinical study",
              "5 mg and 10 mg vial strengths proposed",
              "Proposed SC; not established",
              "Not evidence-based doses",
            ],
            [
              "CB4211 analog",
              "Obesity + NAFLD",
              "25 mg once daily",
              "SC × 4 weeks",
              "Completed Phase 1b — different molecule",
            ],
            [
              "Native MOTS-c",
              "HFD mouse model",
              "0.5 mg/kg/day",
              "IP × 8 weeks",
              "Preclinical metabolism",
            ],
            [
              "Native MOTS-c",
              "Mouse insulin-sensitivity experiments",
              "5 mg/kg/day",
              "IP up to 7 days",
              "Preclinical glucose disposal",
            ],
            [
              "Native MOTS-c",
              "Mouse exercise studies",
              "5 or 15 mg/kg",
              "IP; acute to long-term",
              "Preclinical treadmill capacity",
            ],
          ],
        },
      ],
      bullets: [
        "**No validated dose-escalation schedule exists.** MOTS-MET uses a fixed once-daily dose (undisclosed); no titration is listed.",
        "This page does **not** publish a titration chart, reconstitution calculator, “units” calculator, or week-by-week protocol.",
      ],
    },
    {
      id: "mots-met",
      title: "MOTS-MET Phase 2a Trial: The First Direct Human Efficacy Test",
      paragraphs: [
        "The most important current development is **MOTS-MET (NCT07505745)**, a registered Phase 2a trial of native MOTS-c. A registered trial is a research plan, not a positive result.",
      ],
      widget: "motsc-mots-met-tracker",
    },
    {
      id: "results",
      title: "MOTS-c Results: What Has Actually Been Measured?",
      paragraphs: [
        "Administered native MOTS-c has **not** been shown to improve insulin sensitivity, cause weight loss, or improve endurance in people. Endogenous levels change with exercise; circulating levels show mixed diabetes/obesity associations; mouse models show metabolic and treadmill effects.",
      ],
      widget: "motsc-claim-checker",
      widgetAfter: "motsc-human-evidence",
    },
    {
      id: "human-research",
      title: "Human MOTS-c Research",
      paragraphs: [
        "Human studies that measure the MOTS-c naturally produced by the body do **not** demonstrate that injected MOTS-c is effective or safe.",
      ],
      subsections: [
        {
          title: "Exercise changes endogenous MOTS-c",
          paragraphs: [
            "Reynolds et al. (2021): in 10 young men after cycling, skeletal-muscle MOTS-c increased (P=0.0098) and circulating MOTS-c changed at post-exercise time points. This supports exercise responsiveness — **not** that injecting MOTS-c reproduces exercise.",
          ],
        },
        {
          title: "Circulating MOTS-c and metabolic disease",
          paragraphs: [
            "A 2024 meta-analysis (7 studies, n=602) found lower circulating MOTS-c in diabetes (SMD −0.89) but higher levels in an obesity subgroup after excluding overweight-only groups (SMD +0.51). These inconsistent patterns argue against a simple deficiency narrative.",
          ],
        },
        {
          title: "K14Q mitochondrial-DNA variant",
          paragraphs: [
            "m.1382A>C (rs111033358) creates K14Q MOTS-c. Across 27,527 participants, the C allele associated with higher type 2 diabetes prevalence in men (esp. low activity). Wild-type MOTS-c improved mouse metabolic outcomes where K14Q did not — biological relevance, not treatment proof.",
          ],
        },
      ],
      widgetAfter: "motsc-biomarker-explorer",
    },
    {
      id: "animal",
      title: "MOTS-c Results in Animal and Cell Research",
      paragraphs: [
        "Preclinical studies support a metabolic research hypothesis. They do not provide a “before and after” expectation for people, and their doses should not be converted into self-administration protocols.",
        "A June 2026 stromal-cell study found MOTS-c activated AMPK in cells from donors with obesity **and** reduced proliferation, increased p16/p21 and TNF-α, and failed to restore reparative function — showing why “AMPK activation” cannot automatically mean anti-aging or recovery.",
      ],
      widget: "motsc-animal-explorer",
    },
    {
      id: "side-effects",
      title: "MOTS-c Side Effects",
      paragraphs: [
        "**The side effects of native MOTS-c in humans are not established.** No published completed interventional trial provides adverse-event rates for the native peptide. Lists that confidently name nausea, fatigue, flushing, or injection-site percentages as established MOTS-c side effects are not grounded in published native-MOTS-c trial data.",
      ],
      widget: "motsc-safety-matrix",
      subsections: [
        {
          title: "FDA’s 2026 safety assessment",
          bullets: [
            "No human exposure data through any route at the time of review",
            "No clinical PK, acute toxicity, repeat-dose toxicity, genotoxicity, DART, or carcinogenicity studies identified",
            "Concerns about peptide aggregation, impurities, immunogenicity, free base vs acetate ambiguity, and injectable-product quality",
            "FAERS search through March 9, 2025 retrieved no reports — that does **not** establish safety",
          ],
        },
      ],
    },
    {
      id: "cb4211",
      title: "What the CB4211 Analog Trial Does—and Does Not—Tell Us",
      paragraphs: [
        "CB4211 is a drug candidate derived from MOTS-c biology, but it is a **modified analog**. Its trial cannot be used to assign a dose, benefit, side effect, or half-life to native MOTS-c.",
      ],
      widget: "motsc-vs-cb4211",
    },
    {
      id: "how-it-works",
      title: "How MOTS-c Works",
      paragraphs: [
        "MOTS-c appears to act as a message from mitochondria to the rest of the cell. When energy or nutrient conditions change, it can influence pathways that help cells adjust fuel use and stress responses — including AMPK activation and nuclear translocation. This is not equivalent to “making more ATP,” and it does not prove clinical benefits in people.",
        "Unlike GLP-1 drugs, MOTS-c does not have a fully characterized clinical receptor–dose–response framework. CK2 has been identified as a direct binding partner in skeletal-muscle research, but FDA’s 2026 review still described overall molecular targets as unresolved.",
      ],
      widget: "motsc-mechanism",
    },
    {
      id: "compare",
      title: "MOTS-c vs Similar Compounds and Interventions",
      paragraphs: [
        "No head-to-head human trial has compared MOTS-c with the compounds below. The table compares mechanisms and evidence maturity — not efficacy.",
      ],
      tables: [
        {
          headers: ["Compound/intervention", "Main mechanism", "Human evidence", "Key distinction"],
          rows: [
            [
              "MOTS-c",
              "Mitochondrial stress signaling; AMPK-linked adaptation",
              "Endogenous physiology; recruiting Phase 2a",
              "Native 16-aa mitochondria-encoded peptide",
            ],
            [
              "CB4211",
              "Modified analog from MOTS-c biology",
              "Small completed Phase 1a/1b",
              "Different molecule — data do not transfer",
            ],
            [
              "Elamipretide (SS-31)",
              "Binds cardiolipin at inner mitochondrial membrane",
              "Multiple human trials; accelerated approval for Barth syndrome",
              "Different mechanism; approved dose must not be borrowed",
            ],
            [
              "Humanin",
              "Different mitochondrial-derived cytoprotective signaling",
              "Mostly biomarker and preclinical",
              "Distinct sequence and pathways",
            ],
            [
              "Metformin",
              "Hepatic glucose output; energy-sensing pathways",
              "Extensive randomized and real-world evidence",
              "Approved oral drug — not interchangeable",
            ],
            [
              "Exercise",
              "Multisystem adaptation",
              "Extensive human evidence",
              "May raise endogenous MOTS-c; not reducible to one peptide",
            ],
          ],
        },
      ],
    },
    {
      id: "clinical-evidence",
      title: "MOTS-c Clinical Evidence",
      paragraphs: [
        "Key published and registered programs. Keep native MOTS-c, endogenous measurements, genetics, and CB4211 in separate evidence lanes.",
      ],
      subsections: [
        {
          title: "Discovery and metabolic characterization (Lee 2015)",
          paragraphs: [
            "**Design:** Cell experiments and multiple mouse metabolic models · **Main result:** AMPK-linked metabolic effects, reduced HFD weight gain, improved insulin sensitivity · **Limit:** Preclinical — no administered-human outcome",
          ],
        },
        {
          title: "Exercise, physical performance, and aging (Reynolds 2021)",
          paragraphs: [
            "**Human arm:** Endogenous MOTS-c rose after exercise in 10 men · **Mouse arm:** Administered MOTS-c improved treadmill performance · **Limit:** Human component did not test MOTS-c as a drug",
          ],
        },
        {
          title: "CB4211 Phase 1a/1b (NCT03998514)",
          paragraphs: [
            "**Compound:** Modified analog · **Phase 1b:** 25 mg SC daily × 4 weeks in obesity/NAFLD · **Sponsor result:** Lower ALT/AST/glucose; liver fat similar to placebo · **Limit:** Different molecule, small sample, exploratory endpoints",
          ],
        },
      ],
    },
    {
      id: "evidence-quality",
      title: "Evidence Quality",
      tables: [
        {
          headers: ["Evidence type", "Strength", "Current assessment"],
          rows: [
            [
              "Native MOTS-c randomized human trials",
              "Very low / pending",
              "One recruiting Phase 2a; no results",
            ],
            [
              "Native MOTS-c human dose and PK",
              "Absent",
              "Fixed trial dose undisclosed; no published PK",
            ],
            [
              "Human endogenous physiology",
              "Low to moderate for association",
              "Exercise-responsive findings, but small studies",
            ],
            [
              "Human genetic evidence",
              "Moderate for biological relevance",
              "Association does not prove treatment benefit",
            ],
            [
              "CB4211 analog trial",
              "Low for MOTS-c",
              "Informative but not transferable",
            ],
            [
              "Animal intervention studies",
              "Moderate for preclinical plausibility",
              "Multiple models; limited translation",
            ],
            ["FDA approval", "None", "MOTS-c is not approved"],
          ],
        },
      ],
      paragraphsAfter: [
        "The correct evidence label is **preclinical with early human translational research and one ongoing randomized trial** — not “clinically proven.”",
      ],
    },
    {
      id: "regulatory",
      title: "Regulatory and Research Status",
      paragraphs: [
        "**Is MOTS-c FDA approved?** No. It is not approved to treat obesity, insulin resistance, diabetes, fatigue, osteoporosis, muscle loss, aging, or any other condition.",
        "On July 23, 2026, PCAC voted **7–5 with two abstentions** to recommend 503A-list inclusion despite FDA staff recommending against it. That vote is advisory and nonbinding — not drug approval and not automatic nationwide compounding authorization.",
      ],
      widget: "motsc-regulatory-timeline",
      bullets: [
        "**WADA:** Prohibited at all times under S4.4.1 as an AMPK activator.",
        "**Outside the U.S.:** FDA’s 2026 review reported no authorized MOTS-c products on the EMA website.",
        "“Research use only” labeling does not verify identity, sterility, purity, or suitability for injection.",
      ],
    },
  ],
  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "What is MOTS-c?",
        answer:
          "MOTS-c is a naturally occurring 16-amino-acid signaling peptide encoded within mitochondrial DNA. It is being studied for roles in cellular energy sensing, metabolic stress, skeletal-muscle function, and aging biology.",
      },
      {
        question: "What is the MOTS-c dosage?",
        answer:
          "There is no established or FDA-approved human MOTS-c dose. The active Phase 2a trial uses a fixed once-daily subcutaneous dose but does not disclose the amount publicly.",
      },
      {
        question: "Why do websites recommend 5 mg or 10 mg?",
        answer:
          "Five- and ten-milligram strengths are widely repeated commercial protocols and were also proposed vial strengths in a withdrawn compounding nomination. They are not validated by completed native-MOTS-c clinical trials or approved labeling.",
      },
      {
        question: "Does MOTS-c require dose escalation?",
        answer:
          "No evidence-based MOTS-c escalation schedule exists. The public Phase 2a registry describes a fixed dose and does not list titration.",
      },
      {
        question: "Is MOTS-c FDA approved?",
        answer:
          "No. MOTS-c is not FDA approved for any medical condition.",
      },
      {
        question: "Did the FDA approve MOTS-c compounding in 2026?",
        answer:
          "No. An FDA advisory committee recommended possible 503A-list inclusion in July 2026, but the recommendation was nonbinding and did not itself change the law, approve a drug, or authorize nationwide compounding.",
      },
      {
        question: "Is MOTS-c safe?",
        answer:
          "Human safety is not established. There are no published adverse-event rates from a completed native-MOTS-c intervention trial, and FDA has highlighted gaps in immunogenicity, impurities, aggregation, toxicity, and human exposure data.",
      },
      {
        question: "Does MOTS-c help with weight loss?",
        answer:
          "MOTS-c reduced high-fat-diet weight gain in mice, but human weight-loss efficacy has not been demonstrated. The ongoing Phase 2a trial has no results yet.",
      },
      {
        question: "Does MOTS-c build muscle?",
        answer:
          "There is no evidence that administered MOTS-c builds muscle in humans. Cell and mouse studies report lower myostatin and reduced atrophy signaling — not demonstrated human hypertrophy or strength gain.",
      },
      {
        question: "Is MOTS-c an exercise mimetic?",
        answer:
          "It is described as an exercise mimetic in preclinical research because it overlaps with some exercise-responsive pathways. It does not reproduce the full benefits of exercise and has not been shown to replace training in humans.",
      },
      {
        question: "What is the half-life of MOTS-c?",
        answer:
          "The human in-vivo half-life is unknown. FDA identified no in-vivo pharmacokinetic study; an in-vitro human-blood experiment showed rapid peptide cleavage but cannot define a clinical half-life.",
      },
      {
        question: "Is CB4211 the same as MOTS-c?",
        answer:
          "No. CB4211 is a modified analog. Its 25 mg dose, liver-enzyme findings, injection-site reactions, and pharmacokinetics cannot be assigned to native MOTS-c.",
      },
      {
        question: "Is MOTS-c banned in sports?",
        answer:
          "Yes. WADA prohibits MOTS-c at all times as an AMPK activator under Section S4.4.1.",
      },
      {
        question: "Can MOTS-c be combined with GLP-1 drugs, metformin, NAD+, or other peptides?",
        answer:
          "No controlled human studies establish the safety, dosing, or benefit of those combinations. Mechanistic overlap or online “stack” descriptions are not evidence of compatibility or synergy.",
      },
    ],
  },
  sources: {
    title: "References",
    items: [
      {
        authors: "Lee C, et al.",
        title: "The mitochondrial-derived peptide MOTS-c promotes metabolic homeostasis",
        detail: "Cell Metab. 2015.",
        href: "https://pubmed.ncbi.nlm.nih.gov/25738459/",
      },
      {
        authors: "Reynolds JC, et al.",
        title: "MOTS-c is an exercise-induced mitochondrial-encoded regulator of age-dependent physical decline",
        detail: "Nat Commun. 2021.",
        href: "https://pubmed.ncbi.nlm.nih.gov/33473109/",
      },
      {
        authors: "Kim KH, et al.",
        title: "MOTS-c translocates to the nucleus to regulate nuclear gene expression",
        detail: "Cell Metab. 2018.",
        href: "https://pubmed.ncbi.nlm.nih.gov/29983246/",
      },
      {
        authors: "Zhou Q, et al.",
        title: "Mitochondrial-derived peptide and metabolic states: systematic review and meta-analysis",
        detail: "Diabetol Metab Syndr. 2024.",
        href: "https://pubmed.ncbi.nlm.nih.gov/39160573/",
      },
      {
        authors: "ClinicalTrials.gov",
        title: "MOTS-MET: MOTS-c for insulin sensitivity in prediabetes",
        detail: "NCT07505745 — recruiting.",
        href: "https://clinicaltrials.gov/study/NCT07505745",
      },
      {
        authors: "ClinicalTrials.gov",
        title: "CB4211 Phase 1a/1b",
        detail: "NCT03998514 — modified analog.",
        href: "https://clinicaltrials.gov/study/NCT03998514",
      },
      {
        authors: "U.S. FDA",
        title: "Evaluation of MOTS-c-related bulk drug substances (July 2026 PCAC)",
        detail: "FDA briefing document.",
        href: "https://www.fda.gov/media/193347/download",
      },
      {
        authors: "WADA",
        title: "2026 Prohibited List",
        detail: "S4.4.1 AMPK activators include MOTS-c.",
        href: "https://www.wada-ama.org/sites/default/files/2025-09/2026list_en_final_clean_september_2025.pdf",
      },
      {
        authors: "Xing L, et al.",
        title: "MOTS-c activates metabolic signaling but blunts reparative function in human MSCs",
        detail: "Inflamm Regen. 2026.",
        href: "https://pubmed.ncbi.nlm.nih.gov/42324588/",
      },
    ],
  },
  safety: {
    title: "Important Safety Information",
    paragraphs: [
      "MOTS-c is an investigational mitochondria-derived peptide. It is **not FDA approved**, has **no established human dosage**, and has **no published completed native-MOTS-c adverse-event profile**.",
      "CB4211 is a modified analog — its dose and safety data must not be assigned to native MOTS-c. Online 5–10 mg protocols are not validated clinical doses.",
      "MOTS-c is **prohibited at all times** by WADA as an AMPK activator. This page is an evidence reference — **not a dosing, reconstitution, or stack guide**.",
    ],
  },
};
