/**
 * Cagrilintide / CagriSema clinical-trial research guide.
 * Separates monotherapy from the fixed-dose combination throughout.
 */

export const CAGRI_PHASE2_DOSES = [
  {
    dose: "0.3 mg",
    n: 101,
    trialProduct: 6.0,
    treatmentPolicy: 6.1,
    vsPlacebo: 3.0,
    nausea: 20,
    note: "Lowest studied monotherapy dose; statistically superior to placebo",
  },
  {
    dose: "0.6 mg",
    n: 100,
    trialProduct: 6.8,
    treatmentPolicy: 6.8,
    vsPlacebo: 3.8,
    nausea: 27,
    note: "Greater mean loss than 0.3 mg",
  },
  {
    dose: "1.2 mg",
    n: 102,
    trialProduct: 9.1,
    treatmentPolicy: 8.4,
    vsPlacebo: 6.1,
    nausea: 36,
    note: "Similar mean loss to liraglutide 3.0 mg in this trial",
  },
  {
    dose: "2.4 mg",
    n: 102,
    trialProduct: 9.7,
    treatmentPolicy: 9.5,
    vsPlacebo: 6.7,
    nausea: 31,
    note: "Later selected for Phase 3 monotherapy and CagriSema",
  },
  {
    dose: "4.5 mg",
    n: 101,
    trialProduct: 10.8,
    treatmentPolicy: 10.6,
    vsPlacebo: 7.8,
    nausea: 47,
    note: "Largest mean loss at week 26",
  },
  {
    dose: "Placebo",
    n: 101,
    trialProduct: 3.0,
    treatmentPolicy: 2.8,
    vsPlacebo: 0,
    nausea: 18,
    note: "Same lifestyle program",
  },
  {
    dose: "Lira 3.0 mg",
    n: 99,
    trialProduct: 9.0,
    treatmentPolicy: 8.4,
    vsPlacebo: 6.0,
    nausea: 39,
    note: "Active comparator — approved status belongs to liraglutide",
  },
];

export const CAGRI_ESCALATION = {
  phase2: {
    label: "Cagrilintide Phase 2",
    banner: "Clinical-trial protocol — not approved dosing.",
    note: "0.3 mg arm started and stayed at 0.3 mg. Other arms started at 0.6 mg and escalated every two weeks to the randomized target (up to six weeks).",
    steps: [
      { period: "Weeks 0–2", doses: { "0.3": "0.3", "0.6": "0.6", "1.2": "0.6", "2.4": "0.6", "4.5": "0.6" } },
      { period: "Weeks 2–4", doses: { "0.3": "0.3", "0.6": "0.6", "1.2": "1.2", "2.4": "1.2", "4.5": "1.2" } },
      { period: "Weeks 4–6", doses: { "0.3": "0.3", "0.6": "0.6", "1.2": "1.2", "2.4": "2.4", "4.5": "2.4" } },
      { period: "Week 6+", doses: { "0.3": "0.3", "0.6": "0.6", "1.2": "1.2", "2.4": "2.4", "4.5": "4.5" } },
    ],
    targets: ["0.3", "0.6", "1.2", "2.4", "4.5"],
  },
  cagrisema: {
    label: "CagriSema REDEFINE 1",
    banner: "Investigational fixed-dose product protocol — not approved dosing.",
    note: "Both components started at 0.25 mg and increased every four weeks. Only 57.4% of CagriSema participants were at maximum 2.4/2.4 mg at week 68.",
    steps: [
      { period: "Weeks 1–4", cagri: "0.25 mg", sema: "0.25 mg", stage: "Starting level" },
      { period: "Weeks 5–8", cagri: "0.5 mg", sema: "0.5 mg", stage: "Escalation 1" },
      { period: "Weeks 9–12", cagri: "1.0 mg", sema: "1.0 mg", stage: "Escalation 2" },
      { period: "Weeks 13–16", cagri: "1.7 mg", sema: "1.7 mg", stage: "Escalation 3" },
      { period: "Week 17+", cagri: "Up to 2.4 mg", sema: "Up to 2.4 mg", stage: "Flexible maintenance" },
    ],
  },
};

export const CAGRI_REDEFINE1_ARMS = [
  {
    id: "cagrisema",
    label: "CagriSema 2.4/2.4",
    n: 2108,
    treatmentPolicy: 20.4,
    trialProduct: 22.7,
    maxDosePct: 57.4,
    ge25: 34.7,
    ge30: 19.3,
  },
  {
    id: "sema",
    label: "Semaglutide 2.4",
    n: 302,
    treatmentPolicy: 14.9,
    trialProduct: 16.1,
    maxDosePct: 70.9,
    ge25: 14.8,
    ge30: 8.7,
  },
  {
    id: "cagri",
    label: "Cagrilintide 2.4",
    n: 302,
    treatmentPolicy: 11.5,
    trialProduct: 11.8,
    maxDosePct: 82.5,
    ge25: 6.5,
    ge30: 1.6,
  },
  {
    id: "pbo",
    label: "Placebo",
    n: 705,
    treatmentPolicy: 3.0,
    trialProduct: 2.3,
    maxDosePct: 70.6,
    ge25: 1.0,
    ge30: 0.4,
  },
];

export const CAGRI_ESTIMANDS = [
  {
    id: "redefine1",
    trial: "REDEFINE 1",
    population: "Obesity / overweight, no T2D",
    rows: [
      { arm: "CagriSema", policy: 20.4, product: 22.7 },
      { arm: "Semaglutide", policy: 14.9, product: 16.1 },
      { arm: "Cagrilintide", policy: 11.5, product: 11.8 },
      { arm: "Placebo", policy: 3.0, product: 2.3 },
    ],
  },
  {
    id: "redefine2",
    trial: "REDEFINE 2",
    population: "Overweight/obesity with T2D",
    rows: [
      { arm: "CagriSema", policy: 13.7, product: 15.7 },
      { arm: "Placebo", policy: 3.4, product: 3.1 },
    ],
  },
  {
    id: "redefine4",
    trial: "REDEFINE 4",
    population: "Obesity + comorbidity (open-label)",
    rows: [
      { arm: "CagriSema", policy: 20.2, product: 23.0, note: "Treatment-regimen vs efficacy estimand" },
      { arm: "Tirzepatide 15 mg", policy: 23.6, product: 25.5, note: "Noninferiority not met" },
    ],
  },
];

export const CAGRI_AE_MONO = {
  headers: ["Adverse event", "0.3 mg", "0.6 mg", "1.2 mg", "2.4 mg", "4.5 mg", "Lira 3.0", "Placebo"],
  rows: [
    ["Any adverse event", "71%", "78%", "86%", "78%", "88%", "81%", "66%"],
    ["Nausea", "20%", "27%", "36%", "31%", "47%", "39%", "18%"],
    ["Constipation", "11%", "9%", "8%", "17%", "21%", "26%", "7%"],
    ["Diarrhea", "15%", "10%", "8%", "18%", "7%", "18%", "9%"],
    ["Vomiting", "6%", "6%", "5%", "9%", "8%", "20%", "3%"],
    ["Decreased appetite", "4%", "9%", "8%", "13%", "17%", "9%", "4%"],
    ["Fatigue", "8%", "5%", "8%", "10%", "20%", "8%", "3%"],
    ["Injection-site erythema", "5%", "4%", "6%", "7%", "23%", "17%", "3%"],
    ["Serious AE", "6%", "2%", "7%", "3%", "4%", "4%", "3%"],
    ["Discontinued due to AE", "2%", "4%", "6%", "6%", "1%", "7%", "3%"],
  ],
};

export const CAGRI_AE_REDEFINE1 = {
  headers: ["Safety outcome", "CagriSema", "Semaglutide", "Cagrilintide", "Placebo"],
  rows: [
    ["Any adverse event", "92.3%", "89.7%", "84.1%", "82.3%"],
    ["Serious adverse event", "9.8%", "5.0%", "8.9%", "6.1%"],
    ["Permanent discontinuation due to AE", "5.9%", "3.6%", "2.6%", "3.5%"],
    ["Gastrointestinal AE", "79.6%", "73.8%", "54.0%", "39.9%"],
    ["GI event causing discontinuation", "3.6%", "1.3%", "1.3%", "0.6%"],
    ["Injection-site reaction", "12.2%", "2.6%", "16.9%", "3.0%"],
    ["Gallbladder-related disorder", "4.1%", "3.0%", "2.3%", "1.0%"],
    ["Adjudicated pancreatitis", "0.2%", "0.3%", "0%", "0%"],
  ],
};

export const CAGRI_TRIALS = [
  {
    id: "nct03856047",
    name: "Phase 2 dose-finding",
    nct: "NCT03856047",
    population: "Overweight/obesity, no diabetes",
    diabetes: false,
    arms: "Cagrilintide 0.3–4.5 mg, liraglutide, placebo",
    duration: "26 weeks",
    endpoint: "Percent body-weight change",
    estimand: "Trial-product + treatment-policy",
    result: "−6.0% to −10.8% vs −3.0% placebo",
    peerReview: "Published",
    href: "https://pubmed.ncbi.nlm.nih.gov/34798060/",
  },
  {
    id: "nct03600480",
    name: "Phase 1b combination",
    nct: "NCT03600480",
    population: "Overweight/obesity",
    diabetes: false,
    arms: "Cagrilintide 0.16–4.5 mg + semaglutide 2.4 mg",
    duration: "20 weeks",
    endpoint: "Safety / PK (exploratory weight)",
    estimand: "Exploratory",
    result: "Up to −17.1% exploratory with 2.4/2.4",
    peerReview: "Published",
    href: "https://pubmed.ncbi.nlm.nih.gov/33894838/",
  },
  {
    id: "nct04982575",
    name: "Phase 2 T2D CagriSema",
    nct: "NCT04982575",
    population: "Type 2 diabetes, BMI ≥27",
    diabetes: true,
    arms: "CagriSema, semaglutide, cagrilintide",
    duration: "32 weeks",
    endpoint: "HbA1c change",
    estimand: "Trial analyses",
    result: "HbA1c −2.2 / −1.8 / −0.9; weight −15.6% / −5.1% / −8.1%",
    peerReview: "Published",
    href: "https://pubmed.ncbi.nlm.nih.gov/37364590/",
  },
  {
    id: "redefine1",
    name: "REDEFINE 1",
    nct: "NCT05567796",
    population: "Obesity/overweight + complication, no T2D",
    diabetes: false,
    arms: "CagriSema, semaglutide, cagrilintide, placebo",
    duration: "68 weeks",
    endpoint: "Percent body-weight change",
    estimand: "Treatment-policy + trial-product",
    result: "CagriSema −20.4% / −22.7% vs placebo −3.0% / −2.3%",
    peerReview: "Published",
    href: "https://pubmed.ncbi.nlm.nih.gov/40544433/",
  },
  {
    id: "redefine2",
    name: "REDEFINE 2",
    nct: "NCT05394519",
    population: "Overweight/obesity with T2D",
    diabetes: true,
    arms: "CagriSema vs placebo",
    duration: "68 weeks",
    endpoint: "Percent body-weight change",
    estimand: "Treatment-policy + trial-product",
    result: "−13.7% / −15.7% vs −3.4% / −3.1%",
    peerReview: "Published",
    href: "https://pubmed.ncbi.nlm.nih.gov/40544432/",
  },
  {
    id: "redefine4",
    name: "REDEFINE 4",
    nct: "NCT06131437",
    population: "Obesity + ≥1 comorbidity",
    diabetes: false,
    arms: "CagriSema 2.4/2.4 vs tirzepatide 15 mg",
    duration: "84 weeks",
    endpoint: "Noninferiority for % weight change",
    estimand: "Efficacy + treatment-regimen",
    result: "−23.0% vs −25.5% (efficacy); noninferiority not met",
    peerReview: "Company topline",
    href: "https://clinicaltrials.gov/study/NCT06131437",
  },
  {
    id: "redefine3",
    name: "REDEFINE 3",
    nct: "NCT05669755",
    population: "Established CVD + overweight/obesity",
    diabetes: "mixed",
    arms: "CagriSema vs placebo",
    duration: "Event-driven",
    endpoint: "Major cardiovascular events",
    estimand: "Outcomes trial",
    result: "Ongoing — no result yet",
    peerReview: "Ongoing",
    href: "https://clinicaltrials.gov/study/NCT05669755",
  },
  {
    id: "reimagine2",
    name: "REIMAGINE 2",
    nct: "NCT06065540",
    population: "T2D on metformin ± SGLT2i",
    diabetes: true,
    arms: "CagriSema, semaglutide, cagrilintide, placebo",
    duration: "68 weeks",
    endpoint: "HbA1c (CagriSema vs semaglutide)",
    estimand: "Efficacy estimand",
    result: "HbA1c −1.91 vs −1.75; weight −14.2% vs −10.2%",
    peerReview: "Published",
    href: "https://pubmed.ncbi.nlm.nih.gov/42251859/",
  },
  {
    id: "reimagine1",
    name: "REIMAGINE 1",
    nct: "NCT06323174",
    population: "Early T2D, diet/exercise only",
    diabetes: true,
    arms: "CagriSema 1.0/1.0, 2.4/2.4, placebo",
    duration: "40 weeks",
    endpoint: "HbA1c change",
    estimand: "Efficacy estimand",
    result: "HbA1c −1.5 / −1.8; weight −11.8% / −13.8%",
    peerReview: "Published",
    href: "https://pubmed.ncbi.nlm.nih.gov/42251860/",
  },
  {
    id: "renew2",
    name: "RENEW 2",
    nct: "NCT07220759",
    population: "Overweight/obesity with T2D",
    diabetes: true,
    arms: "Cagrilintide monotherapy",
    duration: "Phase 3",
    endpoint: "Weight management",
    estimand: "Registered",
    result: "Registered — no results",
    peerReview: "Ongoing",
    href: "https://clinicaltrials.gov/study/NCT07220759",
  },
];

export const CAGRI_MECHANISM = [
  {
    id: "amy1",
    label: "AMY1 (CTR + RAMP1)",
    effect: "Binding and signaling; implicated in appetite/weight control",
    boundary: "Human contribution by subtype not quantified",
  },
  {
    id: "amy2",
    label: "AMY2 (CTR + RAMP2)",
    effect: "Binding and signaling",
    boundary: "Functional importance for human weight loss uncertain",
  },
  {
    id: "amy3",
    label: "AMY3 (CTR + RAMP3)",
    effect: "Binding and signaling; implicated preclinically",
    boundary: "Knockout evidence is from mice",
  },
  {
    id: "ctr",
    label: "Calcitonin receptor",
    effect: "Cagrilintide acts as an agonist",
    boundary: "Clinical contribution separate from AMY receptors unresolved",
  },
  {
    id: "central",
    label: "Central appetite circuits",
    effect: "Increased satiety and lower food intake",
    boundary: "Specific human neural pathways inferred",
  },
];

export const CAGRI_BODY_COMP = {
  fatKg: 17.0,
  leanKg: 8.4,
  fatShare: 67,
  leanShare: 33,
  n: 252,
  pctOfTrial: 7.4,
  product: "CagriSema — not cagrilintide monotherapy",
};

export const CAGRI_REDEFINE4 = {
  n: 809,
  design: "Randomized, open-label, head-to-head Phase 3",
  duration: "84 weeks",
  status: "Company topline — awaiting peer review",
  rows: [
    { estimand: "Efficacy", cagrisema: 23.0, tirz: 25.5 },
    { estimand: "Treatment-regimen", cagrisema: 20.2, tirz: 23.6 },
  ],
  interpretation: "CagriSema did not meet the trial’s noninferiority endpoint.",
};

export const CAGRILINTIDE_DOSAGE_GUIDE = {
  title:
    "Cagrilintide Dosage, Results, Side Effects & CagriSema Clinical-Trial Guide",
  updated: "Updated August 2026",
  callout:
    "**Research status:** Cagrilintide is an **investigational, once-weekly amylin-and-calcitonin receptor agonist**. It is not FDA approved as a stand-alone drug and has no approved human dosage. CagriSema—the fixed-dose combination of cagrilintide and semaglutide—is also not approved as of August 20, 2026, although Novo Nordisk submitted it to the FDA for chronic weight management in December 2025 and says a decision is anticipated in late 2026. The FDA states that cagrilintide cannot be used in compounding under federal law and has not been found safe and effective for any condition.",
  intro: [
    "Cagrilintide is a modified version of the pancreatic hormone amylin. Its lipid side chain and sequence changes extend its human half-life to roughly one week, allowing once-weekly dosing in trials. It reduces appetite through amylin and calcitonin-family receptors and is **not a GLP-1 receptor agonist**.",
    "The clearest monotherapy evidence is a 706-participant Phase 2 dose-finding trial: at 26 weeks, mean weight loss ranged from **6.0% with 0.3 mg weekly to 10.8% with 4.5 mg weekly**, versus 3.0% with placebo. A later Phase 3 trial arm found **11.8% mean loss at 68 weeks** with cagrilintide 2.4 mg when treatment was taken as intended, versus 2.3% with placebo.",
    "The much larger weight-loss figures often associated with “cagrilintide” belong to **CagriSema**, not cagrilintide alone. In REDEFINE 1, CagriSema produced **20.4%** mean weight loss under the treatment-policy estimand and **22.7%** under the trial-product estimand at week 68. In REDEFINE 4, company-reported topline results were **23.0% for CagriSema versus 25.5% for tirzepatide**; CagriSema did not meet noninferiority.",
    "This page describes doses used in controlled research. It is not a prescribing guide, self-injection protocol, reconstitution guide, or endorsement of unapproved products.",
  ],
  glance: {
    title: "30-Second Summary",
    table: {
      headers: ["Question", "Answer"],
      rows: [
        [
          "**What is it?**",
          "A long-acting, acylated human amylin analog that also activates the calcitonin receptor",
        ],
        [
          "**Main mechanism**",
          "Agonism at AMY1, AMY2, AMY3, and calcitonin receptors; central satiety and reduced food intake",
        ],
        ["**Administration studied**", "Subcutaneous injection"],
        ["**Frequency studied**", "Once weekly"],
        [
          "**Studied monotherapy doses**",
          "0.3–4.5 mg weekly in Phase 2; 2.4 mg weekly in later Phase 3 arms",
        ],
        [
          "**Strongest stand-alone result**",
          "11.8% mean weight loss at 68 weeks with 2.4 mg (REDEFINE 1 trial-product)",
        ],
        [
          "**Strongest combination result**",
          "22.7% mean weight loss at 68 weeks with CagriSema 2.4/2.4 mg (REDEFINE 1 trial-product)",
        ],
        [
          "**Main side effects**",
          "Nausea, constipation, diarrhea, decreased appetite, fatigue, vomiting, and injection-site reactions",
        ],
        [
          "**Half-life**",
          "159–195 hours across doses in a Phase 1b study—approximately 6.6–8.1 days",
        ],
        [
          "**FDA status**",
          "Not approved; CagriSema weight-management application under FDA review",
        ],
      ],
    },
  },
  sections: [
    {
      id: "what-is",
      title: "What Is Cagrilintide?",
      paragraphs: [
        "Cagrilintide, previously identified as AM833 or NNC0174-0833, is a 37-amino-acid, long-acting analog of human amylin developed by Novo Nordisk. Natural amylin is co-secreted with insulin by pancreatic beta cells after meals and participates in satiety, post-meal glucagon regulation, and gastric-emptying control.",
        "Native human amylin is short-lived and prone to aggregation. Cagrilintide was engineered with amino-acid substitutions and a lipid side chain that promotes reversible albumin binding. Those changes reduce aggregation and slow clearance. In humans receiving cagrilintide with semaglutide, cagrilintide’s terminal half-life was **159–195 hours**, supporting once-weekly study dosing.",
      ],
      subsections: [
        {
          title: "Cagrilintide is not CagriSema",
          tables: [
            {
              headers: ["Name", "Components", "What results can be attributed to it?"],
              rows: [
                [
                  "Cagrilintide",
                  "Cagrilintide alone",
                  "Only results from cagrilintide monotherapy arms",
                ],
                [
                  "CagriSema",
                  "Cagrilintide plus semaglutide in a fixed-dose combination",
                  "The combined effect; cannot be assigned to cagrilintide alone",
                ],
                [
                  "Semaglutide",
                  "GLP-1 receptor agonist",
                  "Results from semaglutide-only arms or approved semaglutide trials",
                ],
              ],
            },
          ],
          paragraphsAfter: [
            "The widely quoted 20%–23% mean weight-loss figures are **CagriSema** results. Stand-alone cagrilintide produced approximately **8%–12%** mean weight loss in the larger 32- to 68-week trials, depending on population, dose, duration, and statistical estimand.",
          ],
        },
      ],
    },
    {
      id: "dosage",
      title: "Cagrilintide Dosage Used in Clinical Trials",
      paragraphs: [
        "**There is no FDA-approved cagrilintide dosage.** The table below reports research exposure, not a recommendation for personal use.",
      ],
      tables: [
        {
          caption: "Research exposures across major programs",
          headers: [
            "Product / trial",
            "Population",
            "Dose",
            "Frequency",
            "Duration",
            "Study role",
          ],
          rows: [
            [
              "Phase 2 NCT03856047",
              "Overweight/obesity, no diabetes",
              "0.3–4.5 mg",
              "Weekly SC",
              "26 weeks",
              "Dose-finding monotherapy",
            ],
            [
              "REDEFINE 1",
              "Overweight/obesity, no T2D",
              "2.4 mg target",
              "Weekly SC",
              "68 weeks",
              "Phase 3 monotherapy comparator",
            ],
            [
              "Phase 2 T2D NCT04982575",
              "Type 2 diabetes, BMI ≥27",
              "2.4 mg target",
              "Weekly SC",
              "32 weeks",
              "Monotherapy comparator",
            ],
            [
              "REIMAGINE 2",
              "T2D on metformin ± SGLT2i",
              "2.4 mg target",
              "Weekly SC",
              "68 weeks",
              "Phase 3 monotherapy comparator",
            ],
            [
              "CagriSema REDEFINE 1 & 2",
              "Obesity ± T2D",
              "2.4/2.4 mg target",
              "Weekly SC",
              "68 weeks",
              "Pivotal Phase 3 combination",
            ],
            [
              "CagriSema REIMAGINE 1–3",
              "T2D at different stages",
              "1.0/1.0 or 2.4/2.4 mg",
              "Weekly SC",
              "40–68 weeks",
              "Phase 3 glycemic-control studies",
            ],
          ],
        },
      ],
      paragraphsAfter: [
        "Lifestyle support was part of the obesity trials. For example, the 26-week monotherapy study included counseling toward a roughly 500-kcal daily deficit and at least 150 minutes of weekly physical activity. The drug-only effect therefore cannot be separated perfectly from the trial’s behavioral program.",
      ],
    },
    {
      id: "escalation",
      title: "Cagrilintide Dose Escalation Used in Research",
      paragraphs: [
        "Escalation reflects pharmacokinetics and tolerability rather than evidence that every participant needs the highest dose. A **159–195-hour half-life** supports weekly administration but also means exposure accumulates. Gastrointestinal events often began within the first four to six weeks.",
      ],
      widget: "cagri-escalation-timeline",
      bullets: [
        "**Dose response:** Weight loss increased across the Phase 2 monotherapy range, although adverse-event patterns were not uniformly dose-linear.",
        "**Flexible Phase 3 dosing:** In REDEFINE 1, investigators could retain or reduce a dose. Substantial mean weight loss occurred even though many participants did not finish on the highest dose—that does not establish the efficacy of any specific lower maintenance dose.",
      ],
    },
    {
      id: "dose-response",
      title: "What Happened at Each Cagrilintide Dose?",
      paragraphs: [
        "The most defensible dose-by-dose comparison comes from the 2021 monotherapy trial. All groups received lifestyle counseling, and the primary analysis estimated results if participants remained adherent to treatment.",
      ],
      widget: "cagri-dose-response",
    },
    {
      id: "results",
      title: "Cagrilintide Results and Effectiveness",
      paragraphs: [
        "Weight-management trials can report more than one valid treatment effect. The **trial-product estimand** asks what might happen if participants remained on assigned treatment without rescue therapy. The **treatment-policy estimand** includes outcomes regardless of discontinuation or adherence and is often closer to an intention-to-treat question.",
      ],
      widget: "cagri-results-toggle",
      subsections: [
        {
          title: "Longer-term cagrilintide monotherapy (REDEFINE 1)",
          paragraphs: [
            "REDEFINE 1 included a cagrilintide 2.4 mg monotherapy arm: **−11.5%** treatment-policy and **−11.8%** trial-product at week 68, versus **−14.9% / −16.1%** for semaglutide 2.4 mg and **−20.4% / −22.7%** for CagriSema. Comparisons between active monotherapy arms and CagriSema were reported as post hoc.",
          ],
        },
        {
          title: "Type 2 diabetes monotherapy",
          paragraphs: [
            "In the 32-week Phase 2 diabetes trial (n=92), cagrilintide 2.4 mg produced **8.1%** mean weight loss and a **0.9**-point HbA1c reduction. In REIMAGINE 2 (n=2,713), cagrilintide 2.4 mg produced **8.4%** weight loss and a **0.80**-point HbA1c reduction at 68 weeks under the efficacy estimand.",
          ],
        },
      ],
      widgetAfter: "cagri-estimand-explainer",
    },
    {
      id: "cagrisema",
      title: "CagriSema Results",
      paragraphs: [
        "CagriSema is an investigational fixed-dose combination. Its results describe the **combined product** and should not be reported as cagrilintide-only outcomes.",
      ],
      subsections: [
        {
          title: "REDEFINE 1: obesity without diabetes",
          paragraphs: [
            "At week 68, CagriSema produced **−20.4%** (treatment-policy) and **−22.7%** (trial-product). About **34.7%** achieved ≥25% weight loss and **19.3%** achieved ≥30% under treatment policy. Only **57.4%** of CagriSema participants were at the maximum 2.4/2.4 mg dose at week 68.",
          ],
        },
        {
          title: "REDEFINE 2: overweight/obesity with type 2 diabetes",
          paragraphs: [
            "CagriSema 2.4/2.4 mg: **−13.7%** treatment-policy and **−15.7%** trial-product versus **−3.4% / −3.1%** placebo at week 68.",
          ],
        },
        {
          title: "REDEFINE 4: direct comparison with tirzepatide",
          paragraphs: [
            "REDEFINE 4 randomized 809 participants head-to-head. Company-reported topline: **−23.0% CagriSema vs −25.5% tirzepatide** (efficacy estimand); **−20.2% vs −23.6%** (treatment-regimen). CagriSema **did not meet noninferiority**. Detailed peer-reviewed results were not available at this page’s cutoff.",
          ],
        },
      ],
      widgetAfter: "cagri-redefine4",
    },
    {
      id: "muscle",
      title: "Does Cagrilintide Preserve Muscle?",
      paragraphs: [
        "**Human evidence does not establish that cagrilintide alone selectively preserves muscle.** Broad “preferential fat loss” claims are too strong.",
      ],
      widget: "cagri-body-comp",
    },
    {
      id: "side-effects",
      title: "Cagrilintide Side Effects",
      paragraphs: [
        "The 26-week Phase 2 trial provides the most detailed public dose-by-dose monotherapy data. Across cagrilintide groups, **41%–63%** experienced a gastrointestinal disorder versus **32%** with placebo. Most events were mild or moderate and began within the first four to six weeks.",
      ],
      widget: "cagri-adverse-events",
      subsections: [
        {
          title: "Other safety findings",
          bullets: [
            "**Heart rate:** Cagrilintide did not show the consistent pulse increase seen with liraglutide in Phase 2 monotherapy.",
            "**QTc:** No clinically relevant QTc prolongation across studied exposures.",
            "**Cardiovascular outcomes:** REDEFINE 3 is ongoing; CagriSema should not inherit semaglutide’s proven CV-outcome benefit by assumption.",
            "**Gallbladder:** More frequent with CagriSema than placebo in REDEFINE 1 (4.1% vs 1.0%).",
            "**Compounding:** FDA states cagrilintide cannot be used in compounding under federal law and has not been found safe and effective for any condition.",
          ],
        },
      ],
    },
    {
      id: "how-it-works",
      title: "How Cagrilintide Works",
      paragraphs: [
        "Cagrilintide mimics amylin, a hormone released with insulin after eating. It activates appetite-regulating circuits—especially in the hindbrain and hypothalamus—so less food is consumed. Semaglutide acts through a different GLP-1 pathway, which is why combining the two can reduce weight more than either component alone.",
      ],
      widget: "cagri-mechanism",
    },
    {
      id: "compare",
      title: "Cagrilintide vs Similar Compounds",
      tables: [
        {
          headers: [
            "Compound",
            "Main target(s)",
            "Human evidence",
            "Regulatory status (Aug. 2026)",
          ],
          rows: [
            [
              "Cagrilintide",
              "AMY1/2/3 and CTR agonist",
              "Phase 2 monotherapy + Phase 3 comparator arms",
              "Investigational; not approved",
            ],
            [
              "CagriSema",
              "Cagrilintide targets + GLP-1 receptor",
              "Large Phase 3 obesity and diabetes program",
              "Investigational; U.S. obesity application under review",
            ],
            [
              "Pramlintide",
              "Short-acting amylin analog",
              "Randomized diabetes studies and postmarketing use",
              "FDA approved as adjunct to mealtime insulin (selected T1D/T2D)",
            ],
            [
              "Semaglutide",
              "GLP-1 receptor agonist",
              "Large obesity, diabetes, kidney, and CV programs",
              "FDA approved for several indications/products",
            ],
            [
              "Tirzepatide",
              "GIP and GLP-1 receptor agonist",
              "Large programs; direct REDEFINE 4 vs CagriSema",
              "FDA approved for T2D and chronic weight management",
            ],
            [
              "Amycretin",
              "Single-molecule amylin and GLP-1 agonist",
              "Early human studies",
              "Investigational",
            ],
          ],
        },
      ],
      paragraphsAfter: [
        "**Cross-trial warning:** Weight-loss percentages from different trials are not direct rankings. REDEFINE 4 is the relevant direct CagriSema-versus-tirzepatide study; it did not confirm noninferiority for CagriSema.",
      ],
    },
    {
      id: "clinical-evidence",
      title: "Clinical Evidence",
      paragraphs: [
        "Key published and registered programs for cagrilintide monotherapy and CagriSema. Filter by diabetes status and peer-review status below.",
      ],
      widget: "cagri-trial-explorer",
    },
    {
      id: "evidence-quality",
      title: "Evidence Quality",
      tables: [
        {
          headers: ["Evidence type", "Strength", "What it supports"],
          rows: [
            [
              "Human randomized cagrilintide monotherapy trials",
              "Moderate",
              "Dose-response, 26-week efficacy, and detailed short-term safety",
            ],
            [
              "Phase 3 cagrilintide monotherapy comparator arms",
              "Moderate",
              "68-week weight and safety at 2.4 mg",
            ],
            [
              "Human randomized CagriSema trials",
              "High for 40–68-week weight and HbA1c",
              "Combination efficacy and common adverse events",
            ],
            [
              "Direct CagriSema vs tirzepatide",
              "Preliminary",
              "Direction of comparative weight loss; company topline only",
            ],
            [
              "Long-term cardiovascular outcomes",
              "Insufficient",
              "REDEFINE 3 has not yet established event reduction",
            ],
            [
              "FDA approval",
              "None",
              "Neither cagrilintide nor CagriSema approved at cutoff",
            ],
          ],
        },
      ],
    },
    {
      id: "regulatory",
      title: "Regulatory and Research Status",
      tables: [
        {
          headers: ["Question", "Status as of August 20, 2026"],
          rows: [
            ["Is cagrilintide FDA approved?", "No"],
            [
              "Is CagriSema FDA approved?",
              "No; weight-management application under FDA review",
            ],
            ["When was the U.S. application filed?", "December 2025"],
            [
              "Expected U.S. decision",
              "Sponsor anticipates late 2026 — not a guarantee",
            ],
            [
              "Stand-alone development",
              "Phase 3 RENEW program studying cagrilintide monotherapy",
            ],
            [
              "Cardiovascular outcomes",
              "REDEFINE 3 ongoing; results expected after this page’s cutoff",
            ],
            [
              "Legal compounding in the U.S.",
              "FDA says cagrilintide cannot be used in compounding under federal law",
            ],
          ],
        },
      ],
      paragraphsAfter: [
        "An FDA filing for CagriSema does not make cagrilintide an approved drug, does not validate material sold online, and does not create an approved stand-alone dosage.",
      ],
    },
  ],
  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "What is cagrilintide?",
        answer:
          "Cagrilintide is an investigational, long-acting analog of the pancreatic satiety hormone amylin. It activates amylin and calcitonin receptors and is being studied for chronic weight management, both alone and with semaglutide.",
      },
      {
        question: "Is cagrilintide a GLP-1 drug?",
        answer:
          "No. Cagrilintide is an amylin-and-calcitonin receptor agonist, while drugs such as semaglutide activate the GLP-1 receptor.",
      },
      {
        question: "What is CagriSema?",
        answer:
          "CagriSema is an investigational fixed-dose combination of cagrilintide and semaglutide. Its trial results describe the combined product and should not be reported as cagrilintide-only outcomes.",
      },
      {
        question: "What is the cagrilintide dosage?",
        answer:
          "There is no approved cagrilintide dosage. Human trials studied 0.3–4.5 mg once weekly as monotherapy and commonly used a 2.4 mg weekly target in later trials.",
      },
      {
        question: "How much weight loss did cagrilintide cause by itself?",
        answer:
          "Cagrilintide monotherapy produced 6.0%–10.8% mean weight loss at 26 weeks across 0.3–4.5 mg doses in Phase 2. At 68 weeks, the 2.4 mg REDEFINE 1 arm produced 11.5% under treatment policy and 11.8% under the trial-product estimand.",
      },
      {
        question: "How much weight loss did CagriSema cause?",
        answer:
          "CagriSema produced 20.4% mean weight loss under the treatment-policy estimand and 22.7% under the trial-product estimand at week 68 in REDEFINE 1. Results were smaller in participants with type 2 diabetes.",
      },
      {
        question: "What is cagrilintide’s half-life?",
        answer:
          "Cagrilintide’s terminal half-life was 159–195 hours—about 6.6–8.1 days—in a Phase 1b study. That is the pharmacokinetic basis for once-weekly research dosing.",
      },
      {
        question: "What are the most common cagrilintide side effects?",
        answer:
          "The most common side effects are gastrointestinal, especially nausea, constipation, diarrhea, and vomiting. Decreased appetite, fatigue, headache, and injection-site reactions also occurred.",
      },
      {
        question: "Does cagrilintide preserve muscle?",
        answer:
          "There is not enough human evidence to say that cagrilintide alone preserves muscle. A CagriSema DXA substudy found that 67% of total weight lost was fat and 33% was lean soft tissue, but it included only 7.4% of REDEFINE 1 participants and did not measure muscle quality.",
      },
      {
        question: "Is cagrilintide FDA approved?",
        answer:
          "No. Cagrilintide is not FDA approved for weight loss, diabetes, or any other condition as of August 20, 2026.",
      },
      {
        question: "Is CagriSema FDA approved?",
        answer:
          "No. Novo Nordisk submitted CagriSema for U.S. weight-management approval in December 2025, and the application remained under review at this page’s cutoff date.",
      },
      {
        question: "Can a pharmacy compound cagrilintide?",
        answer:
          "No under current U.S. federal law, according to the FDA. The agency also states that cagrilintide is not a component of an FDA-approved drug and has not been found safe and effective for any condition.",
      },
      {
        question: "Is cagrilintide better than semaglutide?",
        answer:
          "Not as monotherapy in REDEFINE 1: cagrilintide 2.4 mg produced less mean weight loss than semaglutide 2.4 mg. CagriSema produced more weight loss than either component, but that is a combination product.",
      },
      {
        question: "Is CagriSema better than tirzepatide?",
        answer:
          "The available direct trial did not show that. In company-reported REDEFINE 4 topline data, CagriSema produced less mean weight loss than tirzepatide and failed the prespecified noninferiority endpoint.",
      },
      {
        question: "What happens when cagrilintide is stopped?",
        answer:
          "The best monotherapy evidence is a six-week off-treatment follow-up after the 26-week Phase 2 trial, during which some mean weight regain occurred. Long-term weight maintenance after stopping remains uncertain.",
      },
    ],
  },
  sources: {
    title: "References",
    items: [
      {
        authors: "U.S. FDA",
        title: "FDA’s Concerns with Unapproved GLP-1 Drugs Used for Weight Loss",
        detail: "Includes compounding position on cagrilintide. Updated 2026.",
        href: "https://www.fda.gov/drugs/drug-alerts-and-statements/fdas-concerns-unapproved-glp-1-drugs-used-weight-loss",
      },
      {
        authors: "Lau DCW, et al.",
        title: "Once-weekly cagrilintide for weight management",
        detail: "Lancet. 2021. PMID 34798060.",
        href: "https://pubmed.ncbi.nlm.nih.gov/34798060/",
      },
      {
        authors: "Garvey WT, et al.",
        title: "Coadministered Cagrilintide and Semaglutide in Adults with Overweight or Obesity (REDEFINE 1)",
        detail: "N Engl J Med. 2025.",
        href: "https://pubmed.ncbi.nlm.nih.gov/40544433/",
      },
      {
        authors: "Davies MJ, et al.",
        title: "CagriSema in adults with overweight or obesity and type 2 diabetes (REDEFINE 2)",
        detail: "N Engl J Med. 2025.",
        href: "https://pubmed.ncbi.nlm.nih.gov/40544432/",
      },
      {
        authors: "Novo Nordisk",
        title: "REDEFINE 4 headline results",
        detail: "Company topline, February 2026.",
        href: "https://ml-eu.globenewswire.com/Resource/Download/813a1be1-6fe0-4cf0-9f2e-337f8f2639e1",
      },
      {
        authors: "Enebo LB, et al.",
        title: "Safety, tolerability, PK/PD of cagrilintide with semaglutide",
        detail: "Lancet. 2021.",
        href: "https://pubmed.ncbi.nlm.nih.gov/33894838/",
      },
      {
        authors: "Frias JP, et al.",
        title: "Cagrilintide 2.4 mg with semaglutide 2.4 mg in type 2 diabetes",
        detail: "Lancet. 2023.",
        href: "https://pubmed.ncbi.nlm.nih.gov/37364590/",
      },
      {
        authors: "Buse JB, et al.",
        title: "CagriSema versus semaglutide or cagrilintide in type 2 diabetes (REIMAGINE 2)",
        detail: "Lancet Diabetes Endocrinol. 2026.",
        href: "https://pubmed.ncbi.nlm.nih.gov/42251859/",
      },
      {
        authors: "Aroda VR, et al.",
        title: "CagriSema in early type 2 diabetes (REIMAGINE 1)",
        detail: "Lancet Diabetes Endocrinol. 2026.",
        href: "https://pubmed.ncbi.nlm.nih.gov/42251860/",
      },
      {
        authors: "ClinicalTrials.gov",
        title: "REDEFINE 3 cardiovascular outcomes trial",
        detail: "NCT05669755 — ongoing.",
        href: "https://clinicaltrials.gov/study/NCT05669755",
      },
    ],
  },
  safety: {
    title: "Important Safety Information",
    paragraphs: [
      "Cagrilintide is an investigational amylin-and-calcitonin receptor agonist. It is **not FDA approved**, has **no approved dosage**, and **cannot be used in compounding** under current U.S. federal law according to the FDA.",
      "CagriSema (cagrilintide + semaglutide) is also not approved as of August 20, 2026. Combination trial results must not be attributed to cagrilintide alone.",
      "This page is an evidence reference for educational purposes. It is **not a prescribing, self-injection, or reconstitution guide**.",
    ],
  },
};
