/**
 * Semaglutide (Ozempic / Wegovy / Rybelsus) dosage, results, and safety guide.
 */

export const SEMAGLUTIDE_PRODUCTS = [
  {
    id: "wegovy-inj",
    label: "Wegovy injection",
    route: "Weekly subcutaneous injection",
    warning:
      "Injectable milligrams are not equivalent to oral milligrams. Do not convert doses across formulations.",
    indications: [
      {
        id: "adult-weight",
        label: "Adult weight reduction",
        max: "7.2 mg",
        note: "Recommended maintenance is 2.4 mg weekly. Selected adults may increase to Wegovy HD 7.2 mg after at least 4 weeks at 2.4 mg. Do not combine three 2.4 mg doses.",
        steps: [
          { dose: "0.25 mg", period: "Weeks 1–4", role: "Initiation" },
          { dose: "0.5 mg", period: "Weeks 5–8", role: "Escalation" },
          { dose: "1 mg", period: "Weeks 9–12", role: "Escalation" },
          { dose: "1.7 mg", period: "Weeks 13–16", role: "Escalation or maintenance" },
          { dose: "2.4 mg", period: "Week 17 onward", role: "Recommended maintenance" },
          {
            dose: "7.2 mg",
            period: "After ≥4 weeks at 2.4 mg",
            role: "Optional HD maximum",
          },
        ],
      },
      {
        id: "pediatric",
        label: "Pediatric weight reduction (12+)",
        max: "2.4 mg",
        note: "Maintenance is 1.7 or 2.4 mg weekly; 2.4 mg is recommended. Wegovy HD 7.2 mg is not a labeled pediatric dose.",
        steps: [
          { dose: "0.25 mg", period: "Weeks 1–4", role: "Initiation" },
          { dose: "0.5 mg", period: "Weeks 5–8", role: "Escalation" },
          { dose: "1 mg", period: "Weeks 9–12", role: "Escalation" },
          { dose: "1.7 mg", period: "Weeks 13–16", role: "Escalation or maintenance" },
          { dose: "2.4 mg", period: "Week 17 onward", role: "Recommended maintenance" },
        ],
      },
      {
        id: "cv",
        label: "Cardiovascular-risk reduction",
        max: "2.4 mg",
        note: "Maintenance is 1.7 or 2.4 mg weekly; 2.4 mg is recommended. 7.2 mg is not the labeled CV-risk maintenance dose.",
        steps: [
          { dose: "0.25 mg", period: "Weeks 1–4", role: "Initiation" },
          { dose: "0.5 mg", period: "Weeks 5–8", role: "Escalation" },
          { dose: "1 mg", period: "Weeks 9–12", role: "Escalation" },
          { dose: "1.7 mg", period: "Weeks 13–16", role: "Escalation or maintenance" },
          { dose: "2.4 mg", period: "Week 17 onward", role: "Recommended maintenance" },
        ],
      },
      {
        id: "mash",
        label: "Noncirrhotic MASH",
        max: "2.4 mg",
        note: "Recommended maintenance is 2.4 mg weekly. 1.7 mg may be used if 2.4 mg is not tolerated, with re-escalation considered. 7.2 mg is not the labeled MASH dose.",
        steps: [
          { dose: "0.25 mg", period: "Weeks 1–4", role: "Initiation" },
          { dose: "0.5 mg", period: "Weeks 5–8", role: "Escalation" },
          { dose: "1 mg", period: "Weeks 9–12", role: "Escalation" },
          { dose: "1.7 mg", period: "If 2.4 mg not tolerated", role: "Alternate maintenance" },
          { dose: "2.4 mg", period: "Week 17 onward", role: "Recommended maintenance" },
        ],
      },
    ],
  },
  {
    id: "wegovy-tab",
    label: "Wegovy tablets",
    route: "Daily oral tablet",
    warning:
      "Swallow whole on an empty stomach with up to 4 fl oz of plain water. Wait 30 minutes before food, beverages, or other oral medicines. Oral milligrams are not equivalent to injectable milligrams.",
    indications: [
      {
        id: "oral-weight",
        label: "Adult weight / CV-risk reduction",
        max: "25 mg",
        note: "Maintenance is 25 mg once daily after 90 days of escalation.",
        steps: [
          { dose: "1.5 mg", period: "Days 1–30", role: "Initiation" },
          { dose: "4 mg", period: "Days 31–60", role: "Escalation" },
          { dose: "9 mg", period: "Days 61–90", role: "Escalation" },
          { dose: "25 mg", period: "Day 91 onward", role: "Maintenance" },
        ],
      },
    ],
  },
  {
    id: "ozempic-inj",
    label: "Ozempic injection",
    route: "Weekly subcutaneous injection",
    warning:
      "Ozempic’s 2 mg maximum is not the same indication or device as Wegovy 2.4 mg or Wegovy HD 7.2 mg.",
    indications: [
      {
        id: "t2d",
        label: "Type 2 diabetes / CV / CKD labels",
        max: "2 mg",
        note: "0.25 mg is initiation only. First maintenance is 0.5 mg. Increase to 1 mg, then 2 mg, only if additional glycemic control is needed after at least 4 weeks.",
        steps: [
          { dose: "0.25 mg", period: "Weeks 1–4", role: "Initiation; not a maintenance dose" },
          { dose: "0.5 mg", period: "Week 5 onward", role: "First maintenance dose" },
          { dose: "1 mg", period: "After ≥4 weeks at 0.5 mg", role: "Additional glycemic control" },
          { dose: "2 mg", period: "After ≥4 weeks at 1 mg", role: "Maximum weekly dose" },
        ],
      },
    ],
  },
  {
    id: "ozempic-tab",
    label: "Ozempic tablets",
    route: "Daily oral tablet",
    warning:
      "Ozempic tablets 1.5/4/9 mg are a different formulation from Rybelsus 3/7/14 mg. Do not convert milligram-for-milligram.",
    indications: [
      {
        id: "t2d-oral-o",
        label: "Type 2 diabetes",
        max: "9 mg",
        note: "1.5 mg is initiation and not effective for glycemic control. Maintenance is 4 mg, with 9 mg if additional control is needed.",
        steps: [
          { dose: "1.5 mg", period: "Days 1–30", role: "Initiation; not effective for glycemic control" },
          { dose: "4 mg", period: "Day 31 onward", role: "Maintenance" },
          { dose: "9 mg", period: "Day 61 onward if needed", role: "Higher maintenance dose" },
        ],
      },
    ],
  },
  {
    id: "rybelsus",
    label: "Rybelsus",
    route: "Daily oral tablet",
    warning:
      "Rybelsus 3/7/14 mg must not be assumed equivalent to Ozempic tablets 1.5/4/9 mg.",
    indications: [
      {
        id: "t2d-ryb",
        label: "Type 2 diabetes",
        max: "14 mg",
        note: "3 mg is initiation and not effective for glycemic control. Maintenance is 7 mg, with 14 mg as the maximum if needed.",
        steps: [
          { dose: "3 mg", period: "Days 1–30", role: "Initiation; not effective for glycemic control" },
          { dose: "7 mg", period: "Day 31 onward", role: "Maintenance" },
          { dose: "14 mg", period: "Day 61 onward if needed", role: "Maximum maintenance dose" },
        ],
      },
    ],
  },
];

export const SEMAGLUTIDE_WEIGHT_TABS = [
  {
    id: "step1",
    label: "Adults without diabetes",
    caption: "STEP 1 · percent body-weight change at 68 weeks",
    series: [
      { label: "Semaglutide 2.4 mg", pct: 14.9, color: "#7c3aed" },
      { label: "Placebo", pct: 2.4, color: "#cbd5e1" },
    ],
  },
  {
    id: "step2",
    label: "Adults with diabetes",
    caption: "STEP 2 · percent body-weight change at 68 weeks (trial-product estimand)",
    series: [
      { label: "2.4 mg", pct: 9.6, color: "#6d28d9" },
      { label: "1 mg", pct: 7.0, color: "#8b5cf6" },
      { label: "Placebo", pct: 3.4, color: "#cbd5e1" },
    ],
  },
  {
    id: "teens",
    label: "Adolescents",
    caption: "STEP TEENS · percent BMI change at 68 weeks (not body-weight %)",
    series: [
      { label: "Semaglutide 2.4 mg", pct: 16.1, color: "#7c3aed" },
      { label: "Placebo", pct: -0.6, color: "#cbd5e1", note: "+0.6% BMI" },
    ],
  },
  {
    id: "hd-obesity",
    label: "Wegovy HD · obesity",
    caption: "72-week label trial · adults with obesity",
    series: [
      { label: "7.2 mg", pct: 18.8, color: "#5b21b6" },
      { label: "2.4 mg", pct: 15.5, color: "#7c3aed" },
      { label: "Placebo", pct: 3.9, color: "#cbd5e1" },
    ],
  },
  {
    id: "hd-t2d",
    label: "Wegovy HD · T2D + obesity",
    caption: "72-week label trial · adults with type 2 diabetes and obesity",
    series: [
      { label: "7.2 mg", pct: 13.2, color: "#5b21b6" },
      { label: "2.4 mg*", pct: 10.4, color: "#7c3aed" },
      { label: "Placebo", pct: 3.8, color: "#cbd5e1" },
    ],
    footnote:
      "*The label identifies the 2.4 mg result in the diabetes study as informative rather than part of the prespecified hierarchy.",
  },
];

export const SEMAGLUTIDE_AE_WEGOVY = {
  headers: ["Adverse reaction", "Placebo", "Wegovy 2.4 mg"],
  rows: [
    ["Nausea", "16%", "44%"],
    ["Diarrhea", "16%", "30%"],
    ["Vomiting", "6%", "24%"],
    ["Constipation", "11%", "24%"],
    ["Abdominal pain", "10%", "20%"],
    ["Headache", "10%", "14%"],
    ["Fatigue", "5%", "11%"],
    ["Dyspepsia", "3%", "9%"],
    ["Dizziness", "4%", "8%"],
    ["Abdominal distension", "5%", "7%"],
    ["Belching", "<1%", "7%"],
    ["Hypoglycemia in type 2 diabetes", "2%", "6%"],
    ["Flatulence", "4%", "6%"],
    ["Gastroenteritis", "4%", "6%"],
  ],
};

export const SEMAGLUTIDE_AE_HD = {
  headers: ["Adverse reaction", "Placebo", "2.4 mg", "7.2 mg"],
  rows: [
    ["Nausea", "13%", "35%", "39%"],
    ["Vomiting", "6%", "16%", "22%"],
    ["Dysesthesia/altered skin sensation", "0%", "6%", "22%"],
    ["Constipation", "8%", "19%", "20%"],
    ["Abdominal pain", "7%", "9%", "12%"],
    ["Fatigue", "5%", "9%", "11%"],
    ["Headache", "7%", "8%", "9%"],
    ["Discontinued due to adverse reactions", "2%", "5%", "5%"],
  ],
  highlight: "Dysesthesia/altered skin sensation",
};

export const SEMAGLUTIDE_AE_OZEMPIC = {
  headers: ["Adverse reaction", "Placebo", "Ozempic 0.5 mg", "Ozempic 1 mg"],
  rows: [
    ["Nausea", "6.1%", "15.8%", "20.3%"],
    ["Vomiting", "2.3%", "5.0%", "9.2%"],
    ["Diarrhea", "1.9%", "8.5%", "8.8%"],
    ["Abdominal pain", "4.6%", "7.3%", "5.7%"],
    ["Constipation", "1.5%", "5.0%", "3.1%"],
  ],
};

export const SEMAGLUTIDE_AE_SIMPLE = [
  {
    title: "Gastrointestinal effects",
    takeaway:
      "Nausea, diarrhea, vomiting, constipation, and abdominal pain are the most common reactions and cluster during dose escalation. Discontinuation due to adverse reactions was 6.8% with Wegovy 2.4 mg versus 3.2% placebo.",
  },
  {
    title: "Gallbladder, pancreas, kidney",
    takeaway:
      "Gallstones, pancreatitis, and acute kidney injury from volume depletion are uncommon but serious labeled risks. Semaglutide is not recommended in severe gastroparesis.",
  },
  {
    title: "Retinopathy, heart rate, dysesthesia",
    takeaway:
      "Rapid glucose improvement can temporarily worsen diabetic retinopathy. Resting heart rate rose 1–4 bpm in Wegovy trials. Dysesthesia occurred in 22% at Wegovy 7.2 mg versus 6% at 2.4 mg.",
  },
];

export const SEMAGLUTIDE_OUTCOMES = [
  {
    id: "select",
    title: "SELECT",
    population:
      "Adults with overweight/obesity and established CVD, without diabetes",
    relative: "20% relative risk reduction",
    absolute: "6.5% vs 8.0% (1.5-point absolute difference)",
    hr: "HR 0.80",
    detail:
      "Cardiovascular death, nonfatal heart attack, or nonfatal stroke. Supports Wegovy’s CV-risk indication only for the labeled population.",
  },
  {
    id: "flow",
    title: "FLOW",
    population: "Adults with type 2 diabetes and chronic kidney disease",
    relative: "24% relative risk reduction",
    absolute: "Kidney/CV composite vs placebo",
    hr: "HR 0.76",
    detail:
      "Primary composite included kidney failure, ≥50% eGFR decline, or kidney-related or cardiovascular death. Supports Ozempic’s kidney-risk indication.",
  },
  {
    id: "sustain6",
    title: "SUSTAIN-6",
    population: "High-risk adults with type 2 diabetes",
    relative: "26% relative risk reduction",
    absolute: "CV death, nonfatal MI, or nonfatal stroke",
    hr: "HR 0.74",
    detail:
      "Established cardiovascular safety and benefit in a diabetes population, distinct from SELECT’s population without diabetes.",
  },
];

export const SEMAGLUTIDE_MASH = [
  {
    label: "MASH resolution without worsening fibrosis",
    sema: 63,
    placebo: 34,
  },
  {
    label: "≥1-stage fibrosis improvement without worsening MASH",
    sema: 37,
    placebo: 22,
  },
  {
    label: "MASH resolution plus fibrosis improvement",
    sema: 33,
    placebo: 16,
  },
];

export const SEMAGLUTIDE_TRIALS = [
  {
    id: "step-1",
    name: "STEP 1",
    topic: "Weight",
    diabetes: "Without diabetes",
    route: "Injection",
    duration: "68 weeks",
    authors: "Wilding JPH et al.",
    journal: "New England Journal of Medicine, 2021",
    participants: "1,961 adults without diabetes",
    design: "Phase 3, randomized, double-blind, placebo-controlled",
    dose: "Semaglutide 2.4 mg weekly after escalation",
    result: "−14.9% vs −2.4% placebo mean body-weight change",
    limitation: "Excluded diabetes; manufacturer funded",
    href: "https://www.nejm.org/doi/full/10.1056/NEJMoa2032183",
  },
  {
    id: "step-2",
    name: "STEP 2",
    topic: "Weight",
    diabetes: "With diabetes",
    route: "Injection",
    duration: "68 weeks",
    authors: "STEP 2 investigators",
    journal: "Pivotal 68-week trial",
    participants: "Adults with type 2 diabetes",
    design: "Randomized, placebo-controlled",
    dose: "Semaglutide 2.4 mg and 1 mg weekly",
    result:
      "Mean change ≈ −9.6% at 2.4 mg, −7.0% at 1 mg, −3.4% placebo (trial-product estimand)",
    limitation:
      "Average weight loss is smaller than in STEP 1; do not use STEP 1 as the diabetes expectation",
    href: "https://www.nejm.org/doi/full/10.1056/NEJMoa2032183",
  },
  {
    id: "step-teens",
    name: "STEP TEENS",
    topic: "Adolescents",
    diabetes: "Without diabetes",
    route: "Injection",
    duration: "68 weeks",
    authors: "Weghuber D et al.",
    journal: "New England Journal of Medicine, 2022",
    participants: "201 adolescents age 12 to under 18",
    design: "Randomized, double-blind, placebo-controlled",
    dose: "2.4 mg weekly",
    result: "BMI −16.1% vs +0.6% placebo; 73% vs 18% lost ≥5% body weight",
    limitation: "Smaller and shorter evidence base than adults",
    href: "https://www.nejm.org/doi/full/10.1056/NEJMoa2208601",
  },
  {
    id: "select",
    name: "SELECT",
    topic: "Cardiovascular",
    diabetes: "Without diabetes",
    route: "Injection",
    duration: "Outcomes trial",
    authors: "Lincoff AM et al.",
    journal: "New England Journal of Medicine, 2023",
    participants:
      "17,604 adults age 45+ with BMI ≥27 and established CVD, without diabetes",
    design: "Randomized, double-blind, placebo-controlled outcomes trial",
    dose: "2.4 mg weekly",
    result: "6.5% vs 8.0% MACE; HR 0.80 (20% relative risk reduction)",
    limitation: "Secondary prevention population; not generalizable to lower-risk adults",
    href: "https://www.nejm.org/doi/full/10.1056/NEJMoa2307563",
  },
  {
    id: "flow",
    name: "FLOW",
    topic: "Kidney",
    diabetes: "With diabetes",
    route: "Injection",
    duration: "Outcomes trial",
    authors: "Perkovic V et al.",
    journal: "New England Journal of Medicine, 2024",
    participants: "3,533 adults with type 2 diabetes and CKD",
    design: "Randomized, double-blind, placebo-controlled outcomes trial",
    dose: "1 mg weekly",
    result: "24% relative risk reduction; HR 0.76 for kidney/CV composite",
    limitation: "Applies to type 2 diabetes with established CKD",
    href: "https://www.nejm.org/doi/10.1056/NEJMoa2403347",
  },
  {
    id: "essence",
    name: "ESSENCE",
    topic: "MASH",
    diabetes: "Mixed",
    route: "Injection",
    duration: "72 weeks",
    authors: "Sanyal AJ et al.",
    journal: "New England Journal of Medicine, 2025",
    participants:
      "Adults with biopsy-confirmed MASH and moderate-to-advanced fibrosis",
    design: "Phase 3, randomized, double-blind, placebo-controlled",
    dose: "2.4 mg weekly",
    result:
      "63% vs 34% MASH resolution; 37% vs 22% fibrosis improvement at week 72",
    limitation: "Histologic interim outcomes; long-term clinical outcomes continue to mature",
    href: "https://www.nejm.org/doi/10.1056/NEJMoa2413258",
  },
  {
    id: "sustain-6",
    name: "SUSTAIN-6",
    topic: "Cardiovascular",
    diabetes: "With diabetes",
    route: "Injection",
    duration: "Outcomes trial",
    authors: "Marso SP et al.",
    journal: "New England Journal of Medicine, 2016",
    participants: "3,297 high-risk adults with type 2 diabetes",
    design: "Randomized, double-blind, placebo-controlled cardiovascular safety trial",
    dose: "0.5 or 1 mg weekly",
    result: "26% relative reduction; HR 0.74",
    limitation:
      "Designed primarily for noninferiority and included a high-risk diabetes population",
    href: "https://www.nejm.org/doi/full/10.1056/NEJMoa1607141",
  },
  {
    id: "surmount-5",
    name: "SURMOUNT-5",
    topic: "Weight",
    diabetes: "Without diabetes",
    route: "Injection",
    duration: "72 weeks",
    authors: "Aronne LJ et al.",
    journal: "New England Journal of Medicine, 2025",
    participants: "751 adults with obesity, without diabetes",
    design: "Phase 3b, randomized, open-label, head-to-head",
    dose: "Max tolerated tirzepatide 10/15 mg vs semaglutide 1.7/2.4 mg",
    result: "Tirzepatide −20.2% vs semaglutide −13.7%",
    limitation:
      "Open-label; does not compare tirzepatide with Wegovy HD 7.2 mg",
    href: "https://www.nejm.org/doi/10.1056/NEJMoa2416394",
  },
];

export const SEMAGLUTIDE_DOSAGE_GUIDE = {
  title:
    "Semaglutide Dosage, Results & Side Effects: Complete Ozempic, Wegovy and Rybelsus Guide",
  updated: "Updated August 2026",
  callout:
    "**Research and regulatory status:** Semaglutide is an FDA-approved prescription GLP-1 receptor agonist—not an experimental “research peptide.” It is sold in multiple formulations with different indications and dose schedules. **Ozempic injection and tablets** and **Rybelsus tablets** are used for type 2 diabetes and certain cardiovascular-risk indications. **Wegovy injection and tablets** are used for chronic weight management and cardiovascular-risk reduction; Wegovy injection is also approved for noncirrhotic metabolic dysfunction-associated steatohepatitis (MASH) with moderate-to-advanced fibrosis. Do not substitute milligram doses across formulations.",
  intro: [
    "Semaglutide is a long-acting analog of human GLP-1. It increases insulin and reduces glucagon in a glucose-dependent manner, slows gastric emptying, reduces appetite, and lowers calorie intake. Depending on the product, it is taken as a once-weekly injection or once-daily tablet. Doses are escalated gradually because nausea, vomiting, diarrhea, constipation, and abdominal symptoms are common—especially during escalation.",
    "In STEP 1, injectable semaglutide 2.4 mg produced a mean **14.9% weight reduction at 68 weeks**, versus 2.4% with placebo. In SELECT, 2.4 mg weekly reduced major cardiovascular events by **20% relative to placebo** in adults with established cardiovascular disease and overweight or obesity but no diabetes. Newer FDA-approved options include **Wegovy 25 mg tablets** and, for selected adults needing additional weight reduction after tolerating 2.4 mg, **Wegovy HD 7.2 mg injection**.",
  ],
  glance: {
    title: "30-Second Summary",
    table: {
      headers: ["Question", "Answer"],
      rows: [
        ["**What is it?**", "A modified GLP-1 peptide receptor agonist"],
        ["**Major U.S. brands**", "Ozempic, Rybelsus, and Wegovy"],
        [
          "**Administration**",
          "Weekly subcutaneous injection or daily oral tablet, depending on product",
        ],
        [
          "**Main mechanism**",
          "GLP-1 receptor activation: glucose-dependent insulin release, lower glucagon, delayed gastric emptying, and reduced appetite",
        ],
        [
          "**Strongest established weight result**",
          "STEP 1: −14.9% at 68 weeks with injectable 2.4 mg; newer 7.2 mg label trial: −18.8% at 72 weeks",
        ],
        [
          "**Main side effects**",
          "Nausea, diarrhea, vomiting, constipation, and abdominal pain",
        ],
        ["**Half-life**", "Approximately 1 week"],
        [
          "**FDA status**",
          "Approved for product-specific diabetes, obesity, cardiovascular, kidney, and MASH indications",
        ],
      ],
    },
  },
  sections: [
    {
      id: "what-is",
      title: "What Is Semaglutide?",
      paragraphs: [
        "Semaglutide is a 31-amino-acid peptide analog of human glucagon-like peptide-1 (GLP-1). Structural modifications resist degradation by dipeptidyl peptidase-4 and promote albumin binding, extending exposure enough for weekly injection. Oral formulations pair semaglutide with the absorption enhancer SNAC to permit limited absorption through the stomach.",
        "Semaglutide is the active ingredient in several products, but the products are not interchangeable dose-for-dose.",
      ],
      tables: [
        {
          headers: [
            "Product",
            "Route",
            "Principal FDA-approved uses as of August 2026",
          ],
          rows: [
            [
              "Ozempic injection",
              "Weekly subcutaneous injection",
              "Type 2 diabetes; reduce major cardiovascular events in adults with type 2 diabetes and established cardiovascular disease; reduce sustained eGFR decline, end-stage kidney disease, and cardiovascular death in adults with type 2 diabetes and chronic kidney disease",
            ],
            [
              "Ozempic tablets",
              "Daily oral tablet",
              "Type 2 diabetes; product-specific cardiovascular-risk indication per current label",
            ],
            [
              "Rybelsus tablets",
              "Daily oral tablet",
              "Type 2 diabetes; product-specific cardiovascular-risk indication per current label",
            ],
            [
              "Wegovy injection",
              "Weekly subcutaneous injection",
              "Chronic weight management; reduction of major cardiovascular events in adults with established cardiovascular disease and overweight/obesity; noncirrhotic MASH with moderate-to-advanced fibrosis in adults",
            ],
            [
              "Wegovy tablets",
              "Daily oral tablet",
              "Weight reduction and cardiovascular-risk reduction in eligible adults",
            ],
          ],
        },
      ],
    },
    {
      id: "dose-escalation-chart",
      title: "Semaglutide Dosage",
      paragraphs: [
        "There is no single universal “semaglutide dose.” The correct schedule depends on the exact brand, route, indication, and formulation.",
      ],
      widget: "sema-dosage-selector",
      subsections: [
        {
          title: "Wegovy injection dose escalation",
          tables: [
            {
              headers: ["Treatment period", "Weekly dose", "Role"],
              align: ["left", "right", "left"],
              rows: [
                ["Weeks 1–4", "0.25 mg", "Initiation"],
                ["Weeks 5–8", "0.5 mg", "Escalation"],
                ["Weeks 9–12", "1 mg", "Escalation"],
                ["Weeks 13–16", "1.7 mg", "Escalation or maintenance"],
                ["Week 17 onward", "2.4 mg", "Recommended maintenance for most indications"],
                [
                  "After tolerating 2.4 mg for at least 4 weeks",
                  "7.2 mg",
                  "Optional maximum for additional adult weight reduction when clinically indicated",
                ],
              ],
            },
          ],
          paragraphsAfter: [
            "The 7.2 mg dose is not reached by self-administering three ordinary 2.4 mg doses. It is an approved Wegovy HD presentation and should be used only as labeled. It is not the labeled maintenance dose for cardiovascular-risk reduction, pediatric obesity, or MASH.",
          ],
        },
        {
          title: "Wegovy maintenance dose by indication",
          tables: [
            {
              headers: ["Indication", "Maintenance dose"],
              rows: [
                [
                  "Adult weight reduction",
                  "1.7 or 2.4 mg weekly; 2.4 mg recommended; selected adults may increase to 7.2 mg after at least 4 weeks at 2.4 mg",
                ],
                [
                  "Pediatric weight reduction, age 12+",
                  "1.7 or 2.4 mg weekly; 2.4 mg recommended",
                ],
                [
                  "Cardiovascular-risk reduction in adults",
                  "1.7 or 2.4 mg weekly; 2.4 mg recommended",
                ],
                [
                  "Noncirrhotic MASH with moderate-to-advanced fibrosis",
                  "2.4 mg weekly; 1.7 mg may be used if 2.4 mg is not tolerated, with re-escalation considered",
                ],
              ],
            },
          ],
        },
        {
          title: "Wegovy tablet escalation for adults",
          tables: [
            {
              headers: ["Days", "Daily oral dose", "Role"],
              align: ["left", "right", "left"],
              rows: [
                ["1–30", "1.5 mg", "Initiation"],
                ["31–60", "4 mg", "Escalation"],
                ["61–90", "9 mg", "Escalation"],
                ["Day 91 onward", "25 mg", "Maintenance"],
              ],
            },
          ],
          paragraphsAfter: [
            "Wegovy tablets are swallowed once daily on an empty stomach with up to 4 fluid ounces of plain water. Wait at least 30 minutes before food, beverages, or other oral medicines. The tablets must be swallowed whole.",
          ],
        },
        {
          title: "Ozempic injection escalation",
          tables: [
            {
              headers: ["Treatment period", "Weekly dose", "Role"],
              align: ["left", "right", "left"],
              rows: [
                [
                  "Weeks 1–4",
                  "0.25 mg",
                  "Initiation; not effective as a maintenance dose for glycemic control",
                ],
                ["Week 5 onward", "0.5 mg", "First maintenance dose"],
                [
                  "After at least 4 weeks at 0.5 mg",
                  "1 mg",
                  "Additional glycemic control if needed",
                ],
                [
                  "After at least 4 weeks at 1 mg",
                  "2 mg",
                  "Maximum weekly dose if additional control is needed",
                ],
              ],
            },
          ],
          paragraphsAfter: [
            "Ozempic’s 2 mg maximum should not be confused with Wegovy’s 2.4 mg recommended maintenance or 7.2 mg optional adult weight-management dose.",
          ],
        },
        {
          title: "Rybelsus tablet escalation",
          tables: [
            {
              headers: ["Days", "Daily dose", "Role"],
              align: ["left", "right", "left"],
              rows: [
                ["1–30", "3 mg", "Initiation; not effective for glycemic control"],
                ["Day 31 onward", "7 mg", "Maintenance"],
                ["Day 61 onward, if needed", "14 mg", "Maximum maintenance dose"],
              ],
            },
          ],
        },
        {
          title: "Newer Ozempic tablet escalation",
          tables: [
            {
              headers: ["Days", "Daily dose", "Role"],
              align: ["left", "right", "left"],
              rows: [
                ["1–30", "1.5 mg", "Initiation; not effective for glycemic control"],
                ["Day 31 onward", "4 mg", "Maintenance"],
                ["Day 61 onward, if needed", "9 mg", "Higher maintenance dose"],
              ],
            },
          ],
          paragraphsAfter: [
            "Rybelsus 3/7/14 mg and Ozempic tablets 1.5/4/9 mg use different formulations and must not be assumed equivalent milligram-for-milligram. Follow the product-specific switching directions rather than converting doses mathematically.",
          ],
        },
      ],
    },
    {
      id: "why-escalation",
      title: "Why Semaglutide Is Escalated Slowly",
      paragraphs: [
        "Escalation reduces gastrointestinal intolerance. GLP-1 receptor activation slows gastric emptying, increases fullness, and changes gut-brain signaling. Those effects can produce nausea, vomiting, diarrhea, constipation, reflux, and abdominal pain, particularly when exposure rises quickly.",
        "Semaglutide’s approximate one-week half-life means drug exposure accumulates across weekly injections. Four-week steps allow the previous dose to approach steady state before the next increase. Escalation is therefore a tolerability strategy—not evidence that lower doses are ineffective for every patient or that every patient should reach the maximum.",
      ],
    },
    {
      id: "dose-levels",
      title: "What Happens at Each Injectable Dose?",
      tables: [
        {
          headers: ["Dose", "Product role", "Evidence-supported interpretation"],
          align: ["right", "left", "left"],
          rows: [
            [
              "0.25 mg weekly",
              "Ozempic/Wegovy initiation",
              "Acclimation dose; not a labeled maintenance dose",
            ],
            [
              "0.5 mg weekly",
              "Ozempic maintenance; Wegovy escalation",
              "Approved diabetes maintenance dose, but temporary stage in the standard Wegovy schedule",
            ],
            [
              "1 mg weekly",
              "Ozempic maintenance; Wegovy escalation",
              "Higher diabetes dose; temporary stage for Wegovy",
            ],
            [
              "1.7 mg weekly",
              "Wegovy maintenance option",
              "Used when 2.4 mg is not tolerated and for selected approved indications",
            ],
            [
              "2 mg weekly",
              "Ozempic maximum",
              "Diabetes dose; not the same indication or device as Wegovy 2.4 mg",
            ],
            [
              "2.4 mg weekly",
              "Wegovy recommended maintenance",
              "Weight, cardiovascular-risk, pediatric obesity, and MASH evidence depends on population",
            ],
            [
              "7.2 mg weekly",
              "Wegovy HD maximum for selected adults",
              "Optional only after tolerating 2.4 mg and when additional weight reduction is clinically indicated",
            ],
          ],
        },
      ],
      paragraphsAfter: [
        "Do not assign STEP 1’s 14.9% average loss to the 0.25, 0.5, 1, or 1.7 mg escalation stages. STEP 1 studied a treatment strategy targeting 2.4 mg, not independent fixed-dose arms at each step.",
      ],
    },
    {
      id: "weight-loss-by-dose",
      title: "Semaglutide Weight-Loss Results",
      widget: "sema-weight-chart",
      subsections: [
        {
          title: "STEP 1: injectable Wegovy 2.4 mg in adults without diabetes",
          paragraphs: [
            "STEP 1 randomized 1,961 adults with obesity or overweight plus at least one weight-related condition, without diabetes, to weekly semaglutide 2.4 mg or placebo plus lifestyle intervention for 68 weeks.",
          ],
          tables: [
            {
              headers: ["Outcome at week 68", "Semaglutide 2.4 mg", "Placebo"],
              align: ["left", "right", "right"],
              rows: [
                ["Mean body-weight change", "−14.9%", "−2.4%"],
                ["Lost at least 5%", "86.4%", "31.5%"],
                ["Lost at least 10%", "69.1%", "12.0%"],
                ["Lost at least 15%", "50.5%", "4.9%"],
                ["Mean absolute weight change", "−15.3 kg", "−2.6 kg"],
              ],
            },
          ],
          paragraphsAfter: [
            "These are group averages under the trial’s analysis; individual results vary. STEP 1 excluded type 2 diabetes, so it should not be used as the exact expected result for a diabetes population.",
          ],
        },
        {
          title: "STEP 2: adults with type 2 diabetes",
          paragraphs: [
            "Weight loss was smaller in adults with type 2 diabetes than in STEP 1. In the pivotal 68-week trial, mean change was approximately −9.6% with semaglutide 2.4 mg, −7.0% with semaglutide 1 mg, and −3.4% with placebo using the trial-product estimand. This population difference is why a single “Wegovy causes 15% weight loss” claim is incomplete.",
          ],
        },
        {
          title: "STEP TEENS: adolescents with obesity",
          paragraphs: [
            "In adolescents age 12 to under 18, mean BMI change at week 68 was −16.1% with semaglutide 2.4 mg versus +0.6% with placebo. Seventy-three percent receiving semaglutide lost at least 5% of body weight versus 18% receiving placebo.",
          ],
        },
        {
          title: "Wegovy HD 7.2 mg trials",
          tables: [
            {
              headers: ["Population", "Placebo", "Wegovy 2.4 mg", "Wegovy 7.2 mg"],
              align: ["left", "right", "right", "right"],
              rows: [
                [
                  "Adults with obesity, mean weight change",
                  "−3.9%",
                  "−15.5%",
                  "−18.8%",
                ],
                [
                  "Adults with type 2 diabetes and obesity, mean weight change",
                  "−3.8%",
                  "−10.4%*",
                  "−13.2%",
                ],
              ],
            },
          ],
          footnotes: [
            "*The label identifies the 2.4 mg result in the diabetes study as informative rather than part of the prespecified hierarchy. In the obesity study, the 7.2 mg dose increased average weight loss but also produced a prominent dose-related increase in dysesthesia, or altered skin sensation.",
          ],
        },
        {
          title: "Oral Wegovy 25 mg",
          paragraphs: [
            "Daily oral Wegovy 25 mg has FDA-approved weight-reduction and cardiovascular-risk indications in eligible adults. Its pivotal evidence should be displayed separately from injected semaglutide because route, absorption, adherence requirements, and exposure differ. Oral milligrams cannot be compared directly with injected milligrams.",
          ],
        },
      ],
    },
    {
      id: "stopping",
      title: "What Happens After Stopping Semaglutide?",
      paragraphs: [
        "In the STEP 1 extension, participants regained approximately two-thirds of their prior weight loss during the year after semaglutide and structured lifestyle intervention were withdrawn. Cardiometabolic improvements also moved back toward baseline. This supports obesity as a chronic relapsing disease for which ongoing treatment may be needed; it does not mean everyone regains the same amount.",
      ],
    },
    {
      id: "cv-kidney",
      title: "Cardiovascular Results",
      widget: "sema-outcomes",
      subsections: [
        {
          title:
            "SELECT: adults with overweight or obesity and established cardiovascular disease, without diabetes",
          paragraphs: [
            "SELECT randomized 17,604 adults age 45 or older with BMI at least 27 and established cardiovascular disease, but no diabetes, to semaglutide 2.4 mg or placebo.",
          ],
          tables: [
            {
              headers: ["Major cardiovascular event", "Semaglutide", "Placebo"],
              align: ["left", "right", "right"],
              rows: [
                [
                  "Cardiovascular death, nonfatal heart attack, or nonfatal stroke",
                  "6.5%",
                  "8.0%",
                ],
                ["Hazard ratio", "0.80", "Reference"],
              ],
            },
          ],
          paragraphsAfter: [
            "This was a **20% relative risk reduction**, not a 20-percentage-point absolute reduction. The absolute difference was 1.5 percentage points over the trial follow-up. SELECT supports Wegovy’s cardiovascular-risk indication only for patients who meet the labeled population criteria.",
          ],
        },
        {
          title: "SUSTAIN-6 and diabetes cardiovascular evidence",
          paragraphs: [
            "In SUSTAIN-6, injectable semaglutide reduced the risk of cardiovascular death, nonfatal myocardial infarction, or nonfatal stroke by 26% relative to placebo in high-risk adults with type 2 diabetes. This established cardiovascular safety and benefit in a diabetes population, distinct from SELECT’s population without diabetes.",
          ],
        },
      ],
    },
    {
      id: "kidney",
      title: "Kidney Results",
      paragraphs: [
        "FLOW randomized 3,533 adults with type 2 diabetes and chronic kidney disease to semaglutide 1 mg weekly or placebo. The primary composite included kidney failure, a sustained at least 50% eGFR decline, or kidney-related or cardiovascular death.",
      ],
      tables: [
        {
          headers: ["Outcome", "Semaglutide vs placebo"],
          rows: [
            ["Primary kidney/CV composite", "Hazard ratio 0.76"],
            ["Relative risk reduction", "24%"],
          ],
        },
      ],
      paragraphsAfter: [
        "FLOW supports Ozempic’s kidney-risk indication in adults with type 2 diabetes and CKD. It does not establish semaglutide as a general kidney-protection drug for everyone or replace standard CKD therapy.",
      ],
    },
    {
      id: "mash",
      title: "MASH Results",
      paragraphs: [
        "Wegovy injection 2.4 mg is FDA approved for adults with **noncirrhotic MASH and moderate-to-advanced liver fibrosis**. At week 72 in the phase 3 ESSENCE trial:",
      ],
      widget: "sema-mash-chart",
      tables: [
        {
          headers: ["Histologic outcome", "Placebo", "Semaglutide 2.4 mg"],
          align: ["left", "right", "right"],
          rows: [
            ["MASH resolution without worsening fibrosis", "34%", "63%"],
            [
              "At least one-stage fibrosis improvement without worsening MASH",
              "22%",
              "37%",
            ],
            ["MASH resolution plus fibrosis improvement", "16%", "33%"],
          ],
        },
      ],
      paragraphsAfter: [
        "These are biopsy-based trial outcomes in a specific MASH population. They should not be generalized to all fatty liver disease, cirrhosis, or people with mildly elevated liver enzymes.",
      ],
    },
    {
      id: "side-effects",
      title: "Semaglutide Side Effects",
      widget: "sema-adverse-events",
      subsections: [
        {
          title: "Serious warnings and clinically important risks",
          bullets: [
            "**Thyroid C-cell tumors:** Semaglutide caused thyroid C-cell tumors in rodents. Human relevance is unknown. All major U.S. products carry a boxed warning and are contraindicated with a personal or family history of medullary thyroid carcinoma or MEN 2.",
            "**Acute pancreatitis:** Stop and seek clinical evaluation for persistent severe abdominal pain, with or without vomiting, especially if it radiates to the back.",
            "**Gallbladder disease:** Gallstones and cholecystitis have occurred. Rapid or substantial weight loss may add risk.",
            "**Acute kidney injury due to volume depletion:** Prolonged nausea, vomiting, or diarrhea can cause dehydration and worsen renal function.",
            "**Severe gastrointestinal reactions:** Semaglutide is not recommended in severe gastroparesis.",
            "**Hypoglycemia:** Risk rises when used with insulin or insulin secretagogues; those medications may require dose reduction.",
            "**Diabetic retinopathy complications:** Rapid glucose improvement can temporarily worsen retinopathy, particularly in patients with pre-existing disease.",
            "**Hypersensitivity:** Anaphylaxis and angioedema have been reported.",
            "**Pulmonary aspiration:** Delayed gastric emptying can leave residual stomach contents during anesthesia or deep sedation. Inform the procedural team.",
            "**Pregnancy:** Discontinue Wegovy when pregnancy is recognized. Because of the long half-life, labels advise stopping semaglutide at least two months before a planned pregnancy when applicable.",
          ],
        },
        {
          title: "Other safety findings",
          tables: [
            {
              headers: ["Finding", "Evidence"],
              rows: [
                [
                  "Gallstones",
                  "In adult Wegovy weight trials, cholelithiasis occurred in 1.6% vs 0.7% with placebo",
                ],
                [
                  "Pancreatitis",
                  "Adjudicated acute pancreatitis: 0.2 vs <0.1 cases per 100 patient-years in adult weight trials",
                ],
                [
                  "Acute kidney injury",
                  "0.4 vs 0.2 cases per 100 patient-years in adult weight trials",
                ],
                [
                  "Heart rate",
                  "Resting heart rate increased by a mean 1–4 beats/minute in Wegovy trials",
                ],
                [
                  "Pancreatic enzymes",
                  "Amylase and lipase commonly rise; isolated elevations do not diagnose pancreatitis",
                ],
                [
                  "Dysesthesia",
                  "Strong dose-response signal at Wegovy 7.2 mg: 22% vs 6% at 2.4 mg and 0.3% placebo",
                ],
              ],
            },
          ],
        },
      ],
    },
    {
      id: "triple-agonist",
      title: "How Semaglutide Works",
      widget: "sema-mechanism",
      subsections: [
        {
          title: "Plain-English explanation",
          paragraphs: [
            "Semaglutide imitates GLP-1, a hormone released after eating. It helps the pancreas release insulin when blood glucose is high, reduces glucagon, slows stomach emptying, increases fullness, and reduces calorie intake.",
          ],
        },
        {
          title: "Technical mechanism",
          tables: [
            {
              headers: ["Target or process", "Effect"],
              rows: [
                [
                  "GLP-1 receptor",
                  "Activates a G-protein-coupled receptor expressed in pancreatic and neural tissues",
                ],
                [
                  "Pancreatic beta cells",
                  "Increases insulin secretion in a glucose-dependent manner",
                ],
                [
                  "Pancreatic alpha cells",
                  "Reduces glucagon when glucose is elevated",
                ],
                [
                  "Brain appetite pathways",
                  "Increases satiety and reduces hunger and food intake",
                ],
                [
                  "Gastric emptying",
                  "Delays early post-meal emptying, affecting glucose exposure and oral-drug absorption",
                ],
                [
                  "Albumin binding",
                  "Protects against rapid clearance and supports an approximately one-week half-life",
                ],
                [
                  "Oral absorption",
                  "SNAC transiently enhances gastric absorption; bioavailability remains low and administration conditions strongly affect exposure",
                ],
              ],
            },
          ],
          paragraphsAfter: [
            "Peak concentration occurs roughly 1–3 days after subcutaneous injection. Steady-state exposure is reached after about 4–5 weeks of weekly dosing. Semaglutide is metabolized through peptide-backbone cleavage and beta-oxidation; intact drug is not the main urinary excretion product.",
          ],
        },
      ],
    },
    {
      id: "compare",
      title: "Semaglutide vs Similar Compounds",
      widget: "sema-vs-tirzepatide",
      tables: [
        {
          headers: [
            "Compound",
            "Mechanism",
            "Route",
            "Weight-management status",
            "Best direct evidence",
          ],
          rows: [
            [
              "**Semaglutide**",
              "GLP-1 receptor agonist",
              "Weekly injection or daily tablet",
              "FDA approved",
              "STEP program; SELECT; new 7.2 mg trials",
            ],
            [
              "**Tirzepatide**",
              "GIP + GLP-1 agonist",
              "Weekly injection",
              "FDA approved",
              "SURMOUNT-5 directly compared it with semaglutide 1.7/2.4 mg",
            ],
            [
              "**Liraglutide**",
              "GLP-1 receptor agonist",
              "Daily injection",
              "FDA approved",
              "STEP 8 directly compared semaglutide 2.4 mg with liraglutide 3 mg",
            ],
            [
              "**Retatrutide**",
              "GIP + GLP-1 + glucagon agonist",
              "Weekly injection in trials",
              "Investigational",
              "Phase 2/3 research; no approved dose",
            ],
          ],
        },
      ],
      subsections: [
        {
          title: "Semaglutide vs tirzepatide",
          paragraphs: [
            "In SURMOUNT-5, adults with obesity without diabetes lost a mean 20.2% with maximum tolerated tirzepatide versus 13.7% with maximum tolerated semaglutide at 72 weeks. The comparison used semaglutide up to 2.4 mg—not the newly approved 7.2 mg Wegovy HD dose. It therefore cannot answer whether tirzepatide outperforms 7.2 mg semaglutide.",
            "Semaglutide has direct cardiovascular-outcomes evidence and approved risk-reduction indications in specific populations. Drug selection should consider indication, evidence, tolerability, contraindications, coverage, and individual goals—not weight-loss percentages alone.",
          ],
        },
      ],
    },
    {
      id: "clinical-evidence",
      title: "Clinical Evidence",
      widget: "sema-trial-explorer",
    },
    {
      id: "evidence-quality",
      title: "Evidence Quality",
      tables: [
        {
          headers: ["Evidence type", "Strength", "Interpretation"],
          rows: [
            [
              "Human randomized trials",
              "High",
              "Large phase 3 programs across diabetes, obesity, cardiovascular disease, CKD, adolescents, and MASH",
            ],
            [
              "Hard clinical outcomes",
              "High",
              "SELECT, FLOW, and diabetes cardiovascular-outcomes trials measure events—not only biomarkers",
            ],
            [
              "Direct comparator trials",
              "High",
              "Direct comparisons exist with tirzepatide and liraglutide, but not yet for every new dose/formulation",
            ],
            [
              "Long-term obesity safety",
              "Moderate to high",
              "Multi-year outcomes data exist, but lifetime treatment data do not",
            ],
            [
              "Pediatric evidence",
              "Moderate",
              "Approved for weight management age 12+; smaller evidence base than adults",
            ],
            [
              "Pregnancy evidence",
              "Low",
              "Insufficient human safety evidence; treatment should be stopped as labeled",
            ],
            [
              "FDA approval",
              "Yes",
              "Multiple product-specific indications and formulations",
            ],
          ],
        },
      ],
    },
    {
      id: "fda-status",
      title: "Regulatory Status",
      paragraphs: [
        "As of August 2026, semaglutide is FDA approved in the United States across multiple distinct products:",
      ],
      bullets: [
        "**Ozempic injection:** type 2 diabetes plus specific cardiovascular- and kidney-risk-reduction indications.",
        "**Ozempic tablets and Rybelsus:** oral diabetes products with formulation-specific strengths and label instructions.",
        "**Wegovy injection:** adult and adolescent chronic weight management, cardiovascular-risk reduction in eligible adults, and adult noncirrhotic MASH with moderate-to-advanced fibrosis.",
        "**Wegovy tablets:** adult weight reduction and cardiovascular-risk reduction.",
        "**Wegovy HD 7.2 mg:** an optional higher injection dose for selected adults needing additional weight reduction after tolerating 2.4 mg.",
      ],
      paragraphsAfter: [
        "Semaglutide is not approved as a generic “research peptide,” for type 1 diabetes, or for cosmetic use outside labeled populations. FDA-approved products have standardized manufacturing, concentration, formulation, storage, and delivery. Unapproved compounded or research products are not automatically equivalent.",
      ],
    },
  ],
  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "What is semaglutide?",
        answer:
          "Semaglutide is a long-acting GLP-1 receptor agonist used in FDA-approved diabetes, weight-management, cardiovascular, kidney, and MASH indications.",
      },
      {
        question: "Is semaglutide the same as Ozempic?",
        answer:
          "Semaglutide is the active ingredient in Ozempic, but it is also used in Wegovy and Rybelsus; the products have different indications, strengths, and schedules.",
      },
      {
        question: "What is the starting dose of injectable semaglutide?",
        answer:
          "Ozempic and Wegovy injections generally start at 0.25 mg once weekly for four weeks.",
      },
      {
        question: "Is 0.25 mg a maintenance dose?",
        answer:
          "No. It is an initiation dose designed to improve tolerability.",
      },
      {
        question: "What is the maximum Wegovy dose?",
        answer:
          "For selected adults needing additional weight reduction, the maximum FDA-approved injection dose is now 7.2 mg weekly after at least four weeks tolerating 2.4 mg; other indications retain lower labeled maintenance doses.",
      },
      {
        question: "What is the maximum Ozempic injection dose?",
        answer: "The maximum Ozempic injection dose is 2 mg once weekly.",
      },
      {
        question: "How much weight do people lose with semaglutide?",
        answer:
          "In STEP 1, adults without diabetes lost an average 14.9% at 68 weeks with 2.4 mg weekly; newer 7.2 mg trials reported 18.8% at 72 weeks in adults with obesity.",
      },
      {
        question: "Does semaglutide work differently in people with diabetes?",
        answer:
          "Average weight loss is usually smaller in type 2 diabetes trial populations than in otherwise similar obesity trials without diabetes.",
      },
      {
        question: "How long does semaglutide take to work?",
        answer:
          "Appetite and glucose effects may begin early, but escalation takes months and pivotal weight outcomes were measured at 68–72 weeks.",
      },
      {
        question: "What are the most common side effects?",
        answer:
          "Nausea, diarrhea, vomiting, constipation, abdominal pain, headache, and fatigue are among the most common effects.",
      },
      {
        question: "What is semaglutide dysesthesia?",
        answer:
          "Dysesthesia is an altered skin sensation such as tingling, burning, tenderness, or pain; it occurred in 22% at Wegovy 7.2 mg versus 6% at 2.4 mg in the new label trials.",
      },
      {
        question: "Does semaglutide cause gastroparesis?",
        answer:
          "Semaglutide delays gastric emptying and can cause severe gastrointestinal symptoms; it is not recommended in severe gastroparesis, but symptoms alone do not prove permanent gastroparesis.",
      },
      {
        question: "Does semaglutide cause thyroid cancer?",
        answer:
          "It caused thyroid C-cell tumors in rodents, while human relevance remains unknown; it is contraindicated with personal or family MTC history or MEN 2.",
      },
      {
        question: "Can semaglutide cause pancreatitis?",
        answer:
          "Acute pancreatitis is an uncommon but serious reported risk requiring prompt evaluation of persistent severe abdominal pain.",
      },
      {
        question: "Does semaglutide cause low blood sugar?",
        answer:
          "It can, especially when combined with insulin or a sulfonylurea; semaglutide alone has a lower hypoglycemia risk because insulin stimulation is glucose dependent.",
      },
      {
        question: "Does semaglutide protect the heart?",
        answer:
          "It reduces major cardiovascular events in specific high-risk populations demonstrated in SELECT and diabetes cardiovascular-outcomes trials; that benefit should not be generalized to every user.",
      },
      {
        question: "Does semaglutide protect the kidneys?",
        answer:
          "FLOW showed a 24% relative reduction in a major kidney/CV composite in adults with type 2 diabetes and CKD, supporting Ozempic’s specific kidney-risk indication.",
      },
      {
        question: "Is semaglutide approved for fatty liver disease?",
        answer:
          "Wegovy injection is approved for noncirrhotic MASH with moderate-to-advanced fibrosis in adults, not for every form of fatty liver disease.",
      },
      {
        question: "What happens if semaglutide is stopped?",
        answer:
          "Weight regain is common after discontinuation; STEP 1 extension participants regained roughly two-thirds of their prior loss over the following year.",
      },
      {
        question: "What is semaglutide’s half-life?",
        answer:
          "Its half-life is approximately one week, and drug may remain in circulation for about five weeks after the last dose.",
      },
      {
        question: "Can semaglutide be used during pregnancy?",
        answer:
          "No weight-management benefit exists during pregnancy; labels advise discontinuation and generally stopping at least two months before a planned pregnancy.",
      },
      {
        question: "Can Ozempic and Wegovy be taken together?",
        answer:
          "No. Products containing semaglutide should not be combined, and Wegovy should not be combined with another GLP-1 receptor agonist.",
      },
      {
        question: "Does FDA-approved semaglutide need to be reconstituted?",
        answer:
          "No. Approved pens are ready to inject and approved tablets are swallowed whole; reconstitution instructions online concern unapproved products and should not be presented as Ozempic or Wegovy dosing.",
      },
    ],
  },
  sources: {
    title: "References",
    items: [
      {
        authors: "FDA",
        title: "Current Wegovy prescribing information",
        detail: "U.S. prescribing information, 2026.",
        href: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2026/215256s025lbl.pdf",
      },
      {
        authors: "FDA",
        title: "Current Rybelsus and Ozempic tablet prescribing information",
        detail: "U.S. prescribing information, 2026.",
        href: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2026/213051Orig1s030lbl.pdf",
      },
      {
        authors: "Wilding JPH et al.",
        title: "Once-Weekly Semaglutide in Adults with Overweight or Obesity.",
        detail: "NEJM. 2021. DOI: 10.1056/NEJMoa2032183",
        href: "https://www.nejm.org/doi/full/10.1056/NEJMoa2032183",
      },
      {
        authors: "Weghuber D et al.",
        title: "Once-Weekly Semaglutide in Adolescents with Obesity.",
        detail: "NEJM. 2022. DOI: 10.1056/NEJMoa2208601",
        href: "https://www.nejm.org/doi/full/10.1056/NEJMoa2208601",
      },
      {
        authors: "Lincoff AM et al.",
        title:
          "Semaglutide and Cardiovascular Outcomes in Obesity without Diabetes.",
        detail: "NEJM. 2023. DOI: 10.1056/NEJMoa2307563",
        href: "https://www.nejm.org/doi/full/10.1056/NEJMoa2307563",
      },
      {
        authors: "Perkovic V et al.",
        title:
          "Effects of Semaglutide on Chronic Kidney Disease in Patients with Type 2 Diabetes.",
        detail: "NEJM. 2024. DOI: 10.1056/NEJMoa2403347",
        href: "https://www.nejm.org/doi/10.1056/NEJMoa2403347",
      },
      {
        authors: "Sanyal AJ et al.",
        title: "Phase 3 Trial of Semaglutide in MASH.",
        detail: "NEJM. 2025. DOI: 10.1056/NEJMoa2413258",
        href: "https://www.nejm.org/doi/10.1056/NEJMoa2413258",
      },
      {
        authors: "Marso SP et al.",
        title:
          "Semaglutide and Cardiovascular Outcomes in Patients with Type 2 Diabetes.",
        detail: "NEJM. 2016. DOI: 10.1056/NEJMoa1607141",
        href: "https://www.nejm.org/doi/full/10.1056/NEJMoa1607141",
      },
      {
        authors: "Aronne LJ et al.",
        title:
          "Tirzepatide as Compared with Semaglutide for the Treatment of Obesity.",
        detail: "NEJM. 2025. DOI: 10.1056/NEJMoa2416394",
        href: "https://www.nejm.org/doi/10.1056/NEJMoa2416394",
      },
    ],
  },
  safety: {
    title: "Important Safety Information",
    paragraphs: [
      "Semaglutide is an FDA-approved prescription medicine. Brand, formulation, indication, age group, and prescribed dose all matter.",
      "This page describes FDA-approved use and published research for educational and research-reference purposes. It is **not individualized medical advice**.",
      "Unapproved products advertised as semaglutide or “research peptides” are not equivalent to FDA-approved Ozempic, Wegovy, or Rybelsus.",
    ],
  },
};
