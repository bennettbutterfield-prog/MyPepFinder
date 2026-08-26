/**
 * Survodutide (BI 456906) clinical-trial research guide.
 * Separates treatment-regimen vs efficacy estimands and obesity vs liver programs.
 */

export const SURVO_PHASE2_OBESITY = [
  {
    dose: "Placebo",
    weight: 2.8,
    vsPlacebo: 0,
    ge5: 25.9,
    ge10: 9.1,
    ge15: 2.6,
    gi: 42,
    nausea: 20,
  },
  {
    dose: "0.6 mg",
    weight: 6.2,
    vsPlacebo: 3.4,
    ge5: 53.2,
    ge10: 24.7,
    ge15: 10.4,
    gi: 57,
    nausea: 34,
  },
  {
    dose: "2.4 mg",
    weight: 12.5,
    vsPlacebo: 9.7,
    ge5: 74.2,
    ge10: 59.7,
    ge15: 39.5,
    gi: 86,
    nausea: 65,
  },
  {
    dose: "3.6 mg",
    weight: 13.2,
    vsPlacebo: 10.4,
    ge5: 79.7,
    ge10: 56.3,
    ge15: 39.1,
    gi: 75,
    nausea: 62,
  },
  {
    dose: "4.8 mg",
    weight: 14.9,
    vsPlacebo: 12.1,
    ge5: 82.8,
    ge10: 68.8,
    ge15: 54.7,
    gi: 82,
    nausea: 64,
    sensitivity: 18.7,
  },
];

export const SURVO_SYNC1_WEIGHT = [
  {
    dose: "3.6 mg",
    n: 241,
    regimen: 12.2,
    efficacy: 15.3,
    kg: 13.1,
    waist: 10.5,
    ge5: 72.6,
    ge10: 55.2,
    ge15: 35.7,
    ge20: 24.9,
  },
  {
    dose: "6.0 mg",
    n: 242,
    regimen: 13.0,
    efficacy: 16.6,
    kg: 14.1,
    waist: 11.5,
    ge5: 71.9,
    ge10: 56.6,
    ge15: 45.9,
    ge20: 28.5,
  },
  {
    dose: "Placebo",
    n: 242,
    regimen: 5.4,
    efficacy: 3.2,
    kg: 5.9,
    waist: 5.4,
    ge5: 46.3,
    ge10: 26.0,
    ge15: 12.0,
    ge20: 6.6,
  },
];

export const SURVO_AE_SYNC1 = {
  headers: ["Adverse event", "3.6 mg", "6.0 mg", "Placebo"],
  simpleRows: [
    ["Any GI adverse event", "80.9%", "89.7%", "47.9%"],
    ["Any AE leading to discontinuation", "23.7%", "24.8%", "5.4%"],
    ["GI AE leading to discontinuation", "17.8%", "20.2%", "2.9%"],
    ["Serious adverse event", "8.3%", "8.3%", "6.2%"],
  ],
  fullRows: [
    ["Any GI adverse event", "80.9%", "89.7%", "47.9%"],
    ["Nausea", "61.0%", "64.9%", "17.4%"],
    ["Vomiting", "40.7%", "44.6%", "6.2%"],
    ["Diarrhea", "32.0%", "39.7%", "18.6%"],
    ["Constipation", "31.1%", "32.6%", "12.4%"],
    ["Any AE leading to discontinuation", "23.7%", "24.8%", "5.4%"],
    ["GI AE leading to discontinuation", "17.8%", "20.2%", "2.9%"],
    ["Serious adverse event", "8.3%", "8.3%", "6.2%"],
  ],
};

export const SURVO_AE_PHASE2_OBESITY = {
  headers: ["Adverse event", "Placebo", "0.6 mg", "2.4 mg", "3.6 mg", "4.8 mg"],
  rows: [
    ["Any treatment-emergent AE", "75%", "91%", "90%", "92%", "91%"],
    ["Any GI disorder", "42%", "57%", "86%", "75%", "82%"],
    ["Nausea", "20%", "34%", "65%", "62%", "64%"],
    ["Vomiting", "5%", "9%", "30%", "34%", "35%"],
    ["Diarrhea", "10%", "18%", "28%", "23%", "20%"],
    ["Constipation", "5%", "12%", "22%", "25%", "26%"],
  ],
};

export const SURVO_AE_PHASE2_MASH = {
  headers: ["Adverse event", "2.4 mg", "4.8 mg", "6.0 mg", "All survodutide", "Placebo"],
  rows: [
    ["Any adverse event", "97%", "93%", "95%", "95%", "92%"],
    ["Nausea", "63%", "68%", "66%", "66%", "23%"],
    ["Diarrhea", "41%", "56%", "50%", "49%", "23%"],
    ["Vomiting", "37%", "46%", "39%", "41%", "4%"],
    ["Constipation", "21%", "17%", "26%", "21%", "15%"],
    ["AE leading to discontinuation", "16%", "21%", "23%", "20%", "3%"],
    ["Serious adverse event", "5%", "10%", "8%", "8%", "7%"],
  ],
};

export const SURVO_LIVER_MRI = [
  { label: "≥30% liver-fat reduction", active: 84.2, placebo: 24.3, estimand: "Efficacy" },
  { label: "≥30% liver-fat reduction", active: 68.5, placebo: 28.6, estimand: "Treatment-regimen" },
  { label: "≥50% liver-fat reduction", active: 75.3, placebo: 8.6, estimand: "Efficacy" },
  { label: "≥70% liver-fat reduction", active: 55.5, placebo: 2.9, estimand: "Efficacy" },
  { label: "Liver fat <5%", active: 61.0, placebo: 5.7, estimand: "Efficacy" },
  { label: "Mean relative liver-fat change", active: 58.7, placebo: 9.5, estimand: "Efficacy", isMean: true },
];

export const SURVO_LIVER_NONINVASIVE = [
  { label: "Liver-volume change", active: "−408.3 mL", placebo: "−17.3 mL", badge: "Imaging" },
  { label: "VCTE liver-stiffness change", active: "−28.7%", placebo: "−9.2%", badge: "Elastography" },
  { label: "MRE liver-stiffness difference", active: "ETD −0.05 kPa; P=0.6235", placebo: "Reference", badge: "Elastography · null" },
  { label: "ELF-score change", active: "−0.34", placebo: "−0.06", badge: "Blood biomarker" },
  { label: "cT1 reduction ≥80 ms", active: "63.0%", placebo: "21.4%", badge: "MRI" },
  { label: "Relative ALT change", active: "−36.8%", placebo: "−11.0%", badge: "Blood biomarker" },
  { label: "Relative AST change", active: "−27.9%", placebo: "−7.2%", badge: "Blood biomarker" },
];

export const SURVO_LIVER_BIOPSY = [
  { dose: "2.4 mg", mashImprove: 47, fibrosis: 34, pdff30: 63 },
  { dose: "4.8 mg", mashImprove: 62, fibrosis: 36, pdff30: 67 },
  { dose: "6.0 mg", mashImprove: 43, fibrosis: 34, pdff30: 57 },
  { dose: "Placebo", mashImprove: 14, fibrosis: 22, pdff30: 14 },
];

export const SURVO_BODY_COMP = [
  { label: "Total body-fat volume", active: 27.8, placebo: null },
  { label: "Visceral-fat volume", active: 34.0, placebo: 11.8 },
  { label: "Liver-fat content", active: 63.1, placebo: 24.5 },
  { label: "Lean-body volume", active: 9.8, placebo: null, caution: true },
];

export const SURVO_MECHANISM = [
  {
    id: "glp1",
    pathway: "GLP-1 receptor",
    tissues: "Hypothalamus, brainstem, pancreas, GI tract",
    effect:
      "Reduced appetite and energy intake; glucose-dependent insulin; transient gastric emptying slowdown",
    evidence: "Supported by human PD and clinical data",
  },
  {
    id: "gcgr",
    pathway: "Glucagon receptor",
    tissues: "Hepatocytes and systemic energy metabolism",
    effect:
      "Increased hepatic fatty-acid oxidation / lipid mobilization; possible energy-expenditure increase",
    evidence: "Receptor engagement and liver-fat change supported; energy expenditure partly inferential",
  },
  {
    id: "balance",
    pathway: "Receptor balance",
    tissues: "~1:8 GCGR:GLP-1R activity in vitro",
    effect: "Preserve glucose control while adding glucagon-related metabolic effects",
    evidence: "In-vitro pharmacology plus Phase 2 glucose data",
  },
];

export const SURVO_TRIALS = [
  {
    id: "sync1",
    name: "SYNCHRONIZE-1",
    nct: "NCT06066515",
    area: "Obesity",
    phase: "Phase 3",
    biopsy: false,
    status: "Published",
    population: "Obesity/overweight + complication, no diabetes",
    n: 725,
    dose: "3.6 or 6.0 mg weekly",
    duration: "76 weeks",
    endpoint: "Percent weight change; ≥5% responders",
    result: "−12.2% / −13.0% vs −5.4% (treatment-regimen)",
    href: "https://pubmed.ncbi.nlm.nih.gov/42253238/",
  },
  {
    id: "sync-masld",
    name: "SYNCHRONIZE-MASLD",
    nct: "NCT06309992",
    area: "MASLD",
    phase: "Phase 3",
    biopsy: false,
    status: "Published",
    population: "Obesity + at-risk MASLD; ~38% T2D",
    n: 216,
    dose: "Titrated to 6.0 mg",
    duration: "48 weeks",
    endpoint: "≥30% MRI-PDFF reduction; % weight change",
    result: "Both co-primaries met; 84.2% ≥30% fat reduction (efficacy)",
    href: "https://pubmed.ncbi.nlm.nih.gov/42252333/",
  },
  {
    id: "p2-obesity",
    name: "Phase 2 obesity dose-finding",
    nct: "NCT04667377",
    area: "Obesity",
    phase: "Phase 2",
    biopsy: false,
    status: "Published",
    population: "Adults without diabetes, BMI ≥27",
    n: 387,
    dose: "0.6–4.8 mg weekly",
    duration: "46 weeks",
    endpoint: "Percent body-weight change",
    result: "−6.2% to −14.9% vs −2.8% placebo (planned-treatment)",
    href: "https://pubmed.ncbi.nlm.nih.gov/38330987/",
  },
  {
    id: "p2-mash",
    name: "Phase 2 biopsy MASH",
    nct: "NCT04771273",
    area: "MASH",
    phase: "Phase 2",
    biopsy: true,
    status: "Published",
    population: "Biopsy-confirmed MASH, F1–F3",
    n: 293,
    dose: "2.4, 4.8, or 6.0 mg",
    duration: "48 weeks",
    endpoint: "MASH improvement without worsening fibrosis",
    result: "47% / 62% / 43% vs 14% placebo",
    href: "https://pubmed.ncbi.nlm.nih.gov/38847460/",
  },
  {
    id: "p2-t2d",
    name: "Phase 2 type 2 diabetes",
    nct: "NCT04153929",
    area: "T2D",
    phase: "Phase 2",
    biopsy: false,
    status: "Published",
    population: "T2D on metformin",
    n: 411,
    dose: "0.3–2.7 mg weekly; exploratory BID arms",
    duration: "16 weeks",
    endpoint: "HbA1c change",
    result: "HbA1c down to −1.71 points; weight to −8.7%",
    href: "https://pubmed.ncbi.nlm.nih.gov/38095657/",
  },
  {
    id: "sync2",
    name: "SYNCHRONIZE-2",
    nct: "NCT06066528",
    area: "T2D",
    phase: "Phase 3",
    biopsy: false,
    status: "Results pending",
    population: "Obesity with type 2 diabetes",
    n: null,
    dose: "3.6 or 6.0 mg",
    duration: "76 weeks",
    endpoint: "Weight and metabolic control",
    result: "Full efficacy publication not found by Aug 20, 2026",
    href: "https://clinicaltrials.gov/study/NCT06066528",
  },
  {
    id: "cvot",
    name: "SYNCHRONIZE-CVOT",
    nct: "NCT06077864",
    area: "Cardiovascular",
    phase: "Phase 3",
    biopsy: false,
    status: "Results pending",
    population: "Overweight/obesity + CV/kidney disease or high risk",
    n: null,
    dose: "3.6 or 6.0 mg",
    duration: "Event-driven",
    endpoint: "Five-component MACE",
    result: "Registry completed; outcomes not yet published",
    href: "https://clinicaltrials.gov/study/NCT06077864",
  },
  {
    id: "liverage",
    name: "LIVERAGE",
    nct: "NCT06632444",
    area: "MASH",
    phase: "Phase 3",
    biopsy: true,
    status: "Ongoing",
    population: "Biopsy-confirmed MASH, F2–F3",
    n: null,
    dose: "Titrated to 6.0 mg",
    duration: "Histology @ 52 wk; outcomes ~7 yr",
    endpoint: "MASH resolution, fibrosis, liver events",
    result: "Recruiting / ongoing",
    href: "https://clinicaltrials.gov/study/NCT06632444",
  },
  {
    id: "liverage-c",
    name: "LIVERAGE-Cirrhosis",
    nct: "NCT06632457",
    area: "MASH",
    phase: "Phase 3",
    biopsy: true,
    status: "Ongoing",
    population: "Compensated MASH cirrhosis, F4",
    n: null,
    dose: "Titrated to 6.0 mg",
    duration: "~4.5 years planned",
    endpoint: "Time to liver-related clinical outcomes",
    result: "Recruiting / ongoing",
    href: "https://clinicaltrials.gov/study/NCT06632457",
  },
];

export const SURVO_MATURITY = [
  { label: "Weight loss vs placebo", status: "Phase 3 published", tone: "done" },
  { label: "MRI liver fat", status: "Phase 3 published", tone: "done" },
  { label: "Biopsy MASH histology", status: "Phase 2 published; Phase 3 ongoing", tone: "partial" },
  { label: "Cardiovascular outcomes", status: "Trial completed / results pending", tone: "pending" },
  { label: "Clinical liver outcomes & mortality", status: "Ongoing (LIVERAGE)", tone: "pending" },
  { label: "Regulatory approval", status: "None", tone: "none" },
];

export const SURVODUTIDE_DOSAGE_GUIDE = {
  title: "Survodutide Dosage, Results, Side Effects & MASH Clinical-Trial Guide",
  updated: "Updated August 2026",
  callout:
    "**Research status:** Survodutide (BI 456906) is an **investigational, once-weekly glucagon receptor/GLP-1 receptor dual agonist**. It is **not FDA approved and has no approved dosage**. The doses on this page are clinical-trial protocols—not prescribing instructions. FDA Fast Track and Breakthrough Therapy designations for MASH accelerate development and review; they do **not** mean the drug is approved.",
  intro: [
    "Survodutide is a long-acting peptide engineered to activate two metabolic receptors: **GLP-1 receptors**, which reduce appetite and support glucose regulation, and **glucagon receptors**, which may add liver-directed and energy-balance effects.",
    "In the 76-week Phase 3 SYNCHRONIZE-1 trial in adults with obesity but no diabetes, the treatment-regimen analysis found mean weight changes of **−12.2% with 3.6 mg**, **−13.0% with 6.0 mg**, and **−5.4% with placebo**. A different on-treatment efficacy estimand produced the sponsor’s widely quoted “up to 16.6%” result; the two figures answer different questions.",
    "The drug’s clearest potential differentiator is its liver program. In Phase 3 SYNCHRONIZE-MASLD, 6.0 mg produced a **≥30% liver-fat reduction in 84.2% versus 24.3% with placebo** under the efficacy estimand. In a biopsy-based Phase 2 MASH trial, improvement in MASH without worsening fibrosis occurred in **47%, 62%, and 43%** at 2.4, 4.8, and 6.0 mg versus **14%** placebo.",
    "Tolerability is the main unresolved limitation. Gastrointestinal adverse events occurred in **80.9%–89.7%** of active-treatment participants in SYNCHRONIZE-1, and adverse events caused discontinuation in **23.7%–24.8%** versus 5.4% on placebo.",
  ],
  glance: {
    title: "30-Second Summary",
    table: {
      headers: ["Question", "Answer"],
      rows: [
        [
          "**What is it?**",
          "A long-acting, acylated peptide and dual glucagon/GLP-1 receptor agonist (BI 456906)",
        ],
        [
          "**Main mechanism**",
          "GLP-1 receptor activation plus lower relative glucagon-receptor activation (~8× more potent at GLP-1R in vitro)",
        ],
        ["**Administration studied**", "Subcutaneous injection, usually once weekly"],
        [
          "**Studied dosage**",
          "Phase 2: 0.6–6.0 mg weekly; Phase 3 obesity: titrated to 3.6 or 6.0 mg weekly",
        ],
        [
          "**Strongest obesity result**",
          "Week 76: −12.2% / −13.0% (treatment-regimen); up to −16.6% (efficacy estimand)",
        ],
        [
          "**Strongest liver result**",
          "84.2% ≥30% liver-fat reduction; 61.0% reached liver fat <5% (efficacy estimand)",
        ],
        [
          "**Main side effects**",
          "Nausea, vomiting, diarrhea, constipation; substantial AE discontinuation",
        ],
        ["**Half-life**", ">100 hours in Phase 1 — supports weekly dosing"],
        [
          "**FDA status**",
          "Not approved; Fast Track and Breakthrough Therapy for noncirrhotic MASH F2–F3",
        ],
      ],
    },
  },
  sections: [
    {
      id: "what-is",
      title: "What Is Survodutide?",
      paragraphs: [
        "Survodutide is an investigational peptide drug developed for obesity and metabolic liver disease. It was discovered through a Zealand Pharma program, licensed to Boehringer Ingelheim, and is now developed and commercialized globally by Boehringer Ingelheim.",
        "Survodutide is sometimes described as “oxyntomodulin-like” because endogenous oxyntomodulin can signal through both glucagon and GLP-1 receptors. Structurally, it was engineered from a glucagon-based peptide scaffold. A C18 fatty-acid component promotes albumin binding and extends exposure.",
        "Survodutide is **not** the same as semaglutide (GLP-1 only), tirzepatide (GIP/GLP-1), retatrutide (GIP/GLP-1/glucagon), cagrilintide (amylin analog), or other glucagon/GLP-1 dual agonists such as mazdutide or pemvidutide.",
      ],
    },
    {
      id: "dosage",
      title: "Survodutide Dosage Used in Clinical Trials",
      paragraphs: [
        "**There is no approved human survodutide dose.** Trial target doses should not be converted into a self-treatment schedule. Milligram numbers cannot be compared directly with semaglutide, tirzepatide, or another peptide.",
      ],
      tables: [
        {
          caption: "Major research exposures",
          headers: ["Trial / population", "Target dose", "Frequency", "Duration", "Study role"],
          rows: [
            [
              "Phase 2 obesity (NCT04667377)",
              "0.6, 2.4, 3.6, or 4.8 mg",
              "Weekly SC",
              "46 weeks",
              "Dose finding",
            ],
            [
              "SYNCHRONIZE-1 obesity, no T2D",
              "3.6 or 6.0 mg",
              "Weekly SC",
              "76 weeks",
              "Confirmatory obesity",
            ],
            [
              "SYNCHRONIZE-2 obesity + T2D",
              "3.6 or 6.0 mg",
              "Weekly SC",
              "76 weeks",
              "Publication pending",
            ],
            [
              "Phase 2 MASH F1–F3",
              "2.4, 4.8, or 6.0 mg",
              "Weekly SC",
              "48 weeks",
              "Biopsy histology",
            ],
            [
              "SYNCHRONIZE-MASLD",
              "Titrated to 6.0 mg",
              "Weekly SC",
              "48 weeks",
              "MRI liver-fat co-primary",
            ],
            [
              "LIVERAGE / LIVERAGE-Cirrhosis",
              "Titrated to 6.0 mg",
              "Weekly SC",
              "Years",
              "Confirmatory MASH outcomes",
            ],
          ],
        },
      ],
      bullets: [
        "A **target dose** is the dose an arm attempted to reach — not proof every participant remained on it.",
        "Phase 3 protocols allowed delay, interruption, dose reduction, or re-escalation for GI intolerance.",
        "A trial dose is not an approved dose or evidence that an online product contains the stated amount.",
      ],
    },
    {
      id: "escalation",
      title: "Survodutide Dose Escalation",
      paragraphs: [
        "Escalation is central to interpreting efficacy and safety. Survodutide was not started at the highest maintenance dose in the major trials. Phase 3 generally increased doses at **four-week intervals** over about **24 weeks** toward 3.6 or 6.0 mg.",
        "Slower escalation is pharmacologically sensible, but Phase 3 data do **not** show that titration fully solves gastrointestinal tolerability limitations — AE discontinuation remained about **24–25%** in active obesity arms.",
      ],
      widget: "survo-escalation-timeline",
    },
    {
      id: "dose-response",
      title: "What Happens at Each Studied Dose?",
      paragraphs: [
        "The clearest dose-response evidence comes from the 46-week Phase 2 obesity trial. These are assigned target-dose arms — not outcomes guaranteed for an individual. The primary **planned-treatment** analysis is the correct basis for the dose table; the often-cited **18.7% at 4.8 mg** was an actual-treatment sensitivity analysis.",
      ],
      widget: "survo-dose-response",
    },
    {
      id: "weight-loss",
      title: "Survodutide Results for Weight Loss",
      paragraphs: [
        "SYNCHRONIZE-1 randomized 725 adults without diabetes to 3.6 mg, 6.0 mg, or placebo, alongside diet and activity counseling. The **treatment-regimen estimand** includes the effect of assignment regardless of early discontinuation — the more pragmatic headline for “what happened after assignment.”",
      ],
      widget: "survo-estimand-toggle",
      subsections: [
        {
          title: "Why some pages report 16.6% instead of 13.0%",
          paragraphs: [
            "Both numbers came from SYNCHRONIZE-1. The efficacy estimand estimates the effect if participants remained on treatment without specified intercurrent events. It is useful for pharmacologic potential among people able to continue — it should **not** replace the treatment-regimen result when discussing real-world-like effectiveness, especially with substantial discontinuation.",
          ],
        },
      ],
      widgetAfter: "survo-responder-chart",
    },
    {
      id: "body-comp",
      title: "Body Composition and Liver Fat in SYNCHRONIZE-1",
      paragraphs: [
        "A prespecified MRI substudy assessed participants with interpretable baseline and end-of-treatment scans while on treatment. Lean-body volume still decreased; “muscle preserved” is too strong.",
      ],
      widget: "survo-body-comp",
    },
    {
      id: "liver",
      title: "Survodutide Results for MASLD and MASH",
      paragraphs: [
        "SYNCHRONIZE-MASLD was a 48-week trial in adults with obesity and at-risk MASLD. Most disease was identified through noninvasive tests — this was not a confirmatory biopsy trial in advanced MASH. The lack of a significant MRE stiffness difference matters; histologic fibrosis benefit must be established in ongoing LIVERAGE trials.",
      ],
      widget: "survo-liver-dashboard",
      subsections: [
        {
          title: "Why some pages say “83% improved”",
          paragraphs: [
            "The 83% figure came from an **actual-treatment analysis among participants with paired biopsies**, not the conservative planned-treatment population. In planned-treatment analysis, the highest dose-arm response for MASH improvement without worsening fibrosis was **62% at 4.8 mg**.",
          ],
        },
        {
          title: "Weight-loss mediation",
          paragraphs: [
            "A 2026 post hoc mediation analysis estimated weight loss mediated ~72% of MASH improvement without worsening fibrosis and ~36% of fibrosis improvement without worsening MASH. Consistent with — but not proof of — a weight-independent liver effect.",
          ],
        },
      ],
    },
    {
      id: "side-effects",
      title: "Survodutide Side Effects",
      paragraphs: [
        "Gastrointestinal symptoms dominate the current safety profile. They were usually mild or moderate and most frequent during escalation, but “usually mild” should not be confused with “unimportant”: GI events caused many participants to stop treatment.",
      ],
      widget: "survo-adverse-events",
      subsections: [
        {
          title: "Other safety findings",
          bullets: [
            "**Heart rate:** Mean increases of roughly 2–4 bpm across trials; CVOT outcomes not yet published.",
            "**Cardiovascular outcomes:** Risk factors improved, but survodutide has **not** been shown to reduce MACE.",
            "**Pancreatic enzymes:** Asymptomatic hyperenzymemia more frequent in Phase 2 MASH; Phase 3 MASLD reported no adjudication-confirmed acute pancreatitis in the active arm.",
            "**Thyroid / pregnancy:** No approved label — do not copy approved incretin boxed warnings word-for-word onto an investigational molecule.",
          ],
        },
      ],
    },
    {
      id: "how-it-works",
      title: "How Survodutide Works",
      paragraphs: [
        "Survodutide combines an appetite/fullness signal with a liver-focused metabolic signal. Its GLP-1 activity helps people eat less; its glucagon activity may increase hepatic fat oxidation. The intended balance is enough glucagon-receptor activity to add metabolic and liver effects without overwhelming GLP-1 glucose-lowering.",
      ],
      widget: "survo-mechanism",
    },
    {
      id: "compare",
      title: "Survodutide vs Similar Compounds",
      paragraphs: [
        "There is no completed Phase 3 head-to-head obesity trial comparing survodutide with semaglutide, tirzepatide, retatrutide, mazdutide, or pemvidutide. Cross-trial percentages are not direct rankings.",
      ],
      tables: [
        {
          headers: ["Compound", "Receptor mechanism", "U.S. status (Aug 2026)"],
          rows: [
            ["Survodutide", "Glucagon + GLP-1", "Investigational; not approved"],
            ["Semaglutide", "GLP-1", "Approved for several indications"],
            ["Tirzepatide", "GIP + GLP-1", "Approved for diabetes and weight management"],
            ["Retatrutide", "GIP + GLP-1 + glucagon", "Not approved"],
            ["Mazdutide", "Glucagon + GLP-1", "Not FDA approved (approved in China)"],
            ["Pemvidutide", "Glucagon + GLP-1", "Not approved"],
            ["Resmetirom", "THRβ", "FDA approved for a specific MASH population"],
          ],
        },
      ],
    },
    {
      id: "clinical-evidence",
      title: "Survodutide Clinical Trials",
      paragraphs: [
        "Published Phase 3 obesity and MASLD results sit alongside Phase 2 biopsy MASH data and ongoing confirmatory liver and cardiovascular programs.",
      ],
      widget: "survo-trial-explorer",
      widgetAfter: "survo-maturity-tracker",
    },
    {
      id: "evidence-quality",
      title: "Evidence Quality",
      tables: [
        {
          headers: ["Evidence type", "Strength", "What remains uncertain"],
          rows: [
            [
              "Human randomized obesity trials",
              "High for 76-week weight vs placebo",
              "Comparative effectiveness; durability after stopping",
            ],
            [
              "Human MASLD trial",
              "Moderate–high for MRI liver fat",
              "Biopsy fibrosis regression; clinical liver events",
            ],
            [
              "Human biopsy MASH trial",
              "Moderate",
              "Confirmatory Phase 3 histology and long-term outcomes",
            ],
            [
              "Cardiovascular evidence",
              "Insufficient for outcomes",
              "MACE, heart failure, kidney outcomes, mortality",
            ],
            [
              "FDA approval",
              "None",
              "Submission, label, approved dose, contraindications",
            ],
          ],
        },
      ],
    },
    {
      id: "regulatory",
      title: "Regulatory and Research Status",
      paragraphs: [
        "As of **August 20, 2026**, survodutide is **not approved** for marketing by the FDA, EMA, or any other regulatory authority. There is no approved obesity, diabetes, MASLD, MASH, or bodybuilding indication.",
      ],
      bullets: [
        "FDA **Fast Track** and **Breakthrough Therapy** designations for noncirrhotic MASH with F2–F3 fibrosis.",
        "EMA **PRIME** scheme access for MASH with fibrosis.",
        "SYNCHRONIZE-1 and SYNCHRONIZE-MASLD results published; LIVERAGE programs ongoing.",
        "SYNCHRONIZE-CVOT listed completed in the registry; outcome results not yet published.",
        "Expedited designations are development pathways — **not** marketing authorization.",
      ],
    },
  ],
  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "What is survodutide?",
        answer:
          "Survodutide is an investigational once-weekly peptide that activates glucagon and GLP-1 receptors. It is being developed for obesity and metabolic liver disease.",
      },
      {
        question: "What is the survodutide dosage?",
        answer:
          "There is no approved survodutide dosage. Clinical trials titrated participants to target doses ranging from 0.6 to 6.0 mg weekly depending on the study.",
      },
      {
        question: "How much weight did people lose with survodutide?",
        answer:
          "In Phase 3 SYNCHRONIZE-1, mean weight change at 76 weeks was −12.2% with 3.6 mg and −13.0% with 6.0 mg versus −5.4% with placebo under the treatment-regimen estimand. The on-treatment efficacy estimand produced up to −16.6%.",
      },
      {
        question: "Why is 18.7% weight loss also reported?",
        answer:
          "The 18.7% figure came from an actual-treatment sensitivity analysis in the Phase 2 4.8 mg group. The primary planned-treatment result for that arm was −14.9%.",
      },
      {
        question: "What are the most common survodutide side effects?",
        answer:
          "Nausea, vomiting, diarrhea, and constipation. In Phase 3 obesity research, GI adverse events occurred in 80.9% at 3.6 mg and 89.7% at 6.0 mg versus 47.9% with placebo.",
      },
      {
        question: "How often did people stop because of side effects?",
        answer:
          "In SYNCHRONIZE-1, 23.7% at 3.6 mg and 24.8% at 6.0 mg discontinued because of adverse events versus 5.4% on placebo.",
      },
      {
        question: "Is survodutide FDA approved?",
        answer:
          "No. Survodutide is investigational and has no FDA-approved indication or dose as of August 20, 2026.",
      },
      {
        question: "Does Breakthrough Therapy designation mean it is approved?",
        answer:
          "No. Breakthrough Therapy designation is a development and review pathway, not marketing authorization.",
      },
      {
        question: "Does survodutide treat fatty liver disease?",
        answer:
          "It is not approved to treat MASLD or MASH, but trials show strong liver-fat reductions and encouraging biopsy-based MASH findings. Phase 3 LIVERAGE trials must still establish histologic and long-term clinical benefit.",
      },
      {
        question: "Does survodutide preserve muscle?",
        answer:
          "Survodutide reduced mostly fat volume in an MRI substudy, but lean-body volume also decreased by 9.8% at the highest dose. The study did not establish preservation of muscle strength, function, or quality.",
      },
      {
        question: "Is survodutide better than semaglutide or tirzepatide?",
        answer:
          "No direct Phase 3 head-to-head trial has established that. Survodutide has a distinct glucagon/GLP-1 mechanism and strong liver-fat data, but cross-trial weight-loss comparisons cannot prove superiority.",
      },
      {
        question: "Does survodutide reduce cardiovascular risk?",
        answer:
          "That has not been established. Blood pressure, lipids, and other risk markers improved, but dedicated cardiovascular-outcomes results are not yet published.",
      },
      {
        question: "Can survodutide be bought legally online?",
        answer:
          "There is no approved commercial survodutide product. Online “research” products are not the regulated investigational formulation and may be mislabeled, contaminated, incorrectly concentrated, or nonsterile.",
      },
    ],
  },
  sources: {
    title: "References",
    items: [
      {
        authors: "le Roux CW, et al.",
        title: "Survodutide once weekly for the treatment of adults with obesity (SYNCHRONIZE-1)",
        detail: "N Engl J Med. 2026.",
        href: "https://pubmed.ncbi.nlm.nih.gov/42253238/",
      },
      {
        authors: "Kaplan LM, et al.",
        title: "Survodutide in adults with obesity and MASLD (SYNCHRONIZE-MASLD)",
        detail: "Nat Med. 2026.",
        href: "https://pubmed.ncbi.nlm.nih.gov/42252333/",
      },
      {
        authors: "le Roux CW, et al.",
        title: "Phase 2 obesity dose-finding trial of survodutide",
        detail: "Lancet Diabetes Endocrinol. 2024.",
        href: "https://pubmed.ncbi.nlm.nih.gov/38330987/",
      },
      {
        authors: "Sanyal AJ, et al.",
        title: "Phase 2 randomized trial of survodutide in MASH and fibrosis",
        detail: "N Engl J Med. 2024.",
        href: "https://pubmed.ncbi.nlm.nih.gov/38847460/",
      },
      {
        authors: "Blüher M, et al.",
        title: "Dose-response effects on HbA1c and bodyweight of survodutide in T2D",
        detail: "Diabetologia. 2024.",
        href: "https://pubmed.ncbi.nlm.nih.gov/38095657/",
      },
      {
        authors: "Noureddin M, et al.",
        title: "Weight reduction-dependent/-independent effects of survodutide on liver endpoints",
        detail: "Hepatology. 2026.",
        href: "https://pubmed.ncbi.nlm.nih.gov/42545725/",
      },
      {
        authors: "ClinicalTrials.gov",
        title: "SYNCHRONIZE-CVOT",
        detail: "NCT06077864 — outcomes pending.",
        href: "https://clinicaltrials.gov/study/NCT06077864",
      },
      {
        authors: "ClinicalTrials.gov",
        title: "LIVERAGE Phase 3 MASH program",
        detail: "NCT06632444 · NCT06632457.",
        href: "https://clinicaltrials.gov/study/NCT06632444",
      },
    ],
  },
  safety: {
    title: "Important Safety Information",
    paragraphs: [
      "Survodutide (BI 456906) is an investigational glucagon/GLP-1 dual agonist. It is **not FDA approved**, has **no approved dosage**, and is **not** an established compounded-drug regimen.",
      "Gastrointestinal adverse events and treatment discontinuation were substantial in Phase 2 and Phase 3. Cardiovascular and long-term liver-outcome results are not yet established.",
      "This page is an evidence reference for educational purposes. It is **not a prescribing, self-injection, or reconstitution guide**.",
    ],
  },
};
