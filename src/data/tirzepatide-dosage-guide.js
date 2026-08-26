/**
 * Tirzepatide (Mounjaro / Zepbound) dosage, results, and safety guide.
 */

export const TIRZEPATIDE_ESCALATION_STEPS = [
  {
    dose: "2.5 mg",
    period: "Weeks 1–4",
    stage: "Initiation",
    role: "Starting dose; not a maintenance dose",
  },
  {
    dose: "5 mg",
    period: "Weeks 5–8",
    stage: "First maintenance option",
    role: "Lowest adult maintenance dose for diabetes or weight management",
  },
  {
    dose: "7.5 mg",
    period: "Weeks 9–12",
    stage: "Escalation",
    role: "Bridge between 5 and 10 mg",
  },
  {
    dose: "10 mg",
    period: "Weeks 13–16",
    stage: "Maintenance option",
    role: "Higher-efficacy option; lowest labeled OSA maintenance dose",
  },
  {
    dose: "12.5 mg",
    period: "Weeks 17–20",
    stage: "Escalation",
    role: "Bridge between 10 and 15 mg",
  },
  {
    dose: "15 mg",
    period: "Week 21 onward",
    stage: "Highest maintenance",
    role: "Highest recommended adult maintenance dose",
  },
];

export const TIRZEPATIDE_INDICATIONS = [
  {
    id: "weight",
    label: "Weight management",
    maintenance: ["5 mg", "10 mg", "15 mg"],
    max: "15 mg",
    note: "Recommended maintenance doses are 5, 10, or 15 mg weekly. 7.5 mg and 12.5 mg are escalation steps, not labeled Zepbound maintenance doses.",
  },
  {
    id: "adult-t2d",
    label: "Adult type 2 diabetes",
    maintenance: ["5 mg", "10 mg", "15 mg"],
    max: "15 mg",
    note: "Adults start at 2.5 mg and use 5–15 mg weekly as needed for glycemic control. Maximum adult dose is 15 mg weekly.",
  },
  {
    id: "pediatric-t2d",
    label: "Pediatric type 2 diabetes",
    maintenance: ["5 mg", "10 mg"],
    max: "10 mg",
    note: "For patients age 10+, maintenance is 5 or 10 mg weekly as needed. Maximum is 10 mg weekly — 12.5 mg and 15 mg are not used.",
  },
  {
    id: "osa",
    label: "OSA",
    maintenance: ["10 mg", "15 mg"],
    max: "15 mg",
    note: "For moderate-to-severe OSA in adults with obesity, labeled maintenance is 10 or 15 mg weekly after escalation.",
  },
];

export const TIRZEPATIDE_WEIGHT_LOSS = {
  treatmentRegimen: [
    { dose: "Placebo", pct: 3.1 },
    { dose: "5 mg", pct: 15.0 },
    { dose: "10 mg", pct: 19.5 },
    { dose: "15 mg", pct: 20.9 },
  ],
  efficacy: [
    { dose: "Placebo", pct: 2.4 },
    { dose: "5 mg", pct: 16.0 },
    { dose: "10 mg", pct: 21.4 },
    { dose: "15 mg", pct: 22.5 },
  ],
};

export const TIRZEPATIDE_OSA = [
  {
    trial: "Study 1: no PAP",
    tirzepatide: 25.3,
    placebo: 5.3,
  },
  {
    trial: "Study 2: using PAP",
    tirzepatide: 29.3,
    placebo: 5.5,
  },
];

export const TIRZEPATIDE_AE_ZEPBOUND = {
  headers: ["Adverse reaction", "Placebo", "5 mg", "10 mg", "15 mg"],
  rows: [
    ["Nausea", "8%", "25%", "29%", "28%"],
    ["Diarrhea", "8%", "19%", "21%", "23%"],
    ["Vomiting", "2%", "8%", "11%", "13%"],
    ["Constipation", "5%", "17%", "14%", "11%"],
    ["Abdominal pain", "5%", "9%", "9%", "10%"],
    ["Dyspepsia", "4%", "9%", "9%", "10%"],
    ["Injection-site reactions", "2%", "6%", "8%", "8%"],
    ["Fatigue", "3%", "5%", "6%", "7%"],
    ["Hypersensitivity reactions", "3%", "5%", "5%", "5%"],
    ["Belching", "1%", "4%", "5%", "5%"],
    ["Hair loss", "1%", "5%", "4%", "5%"],
    ["Gastroesophageal reflux", "2%", "4%", "4%", "5%"],
    ["Dizziness", "2%", "4%", "5%", "4%"],
  ],
};

export const TIRZEPATIDE_AE_MOUNJARO = {
  headers: ["Adverse reaction", "Placebo", "5 mg", "10 mg", "15 mg"],
  rows: [
    ["Nausea", "4%", "12%", "15%", "18%"],
    ["Diarrhea", "9%", "12%", "13%", "17%"],
    ["Decreased appetite", "1%", "5%", "10%", "11%"],
    ["Vomiting", "2%", "5%", "5%", "9%"],
    ["Constipation", "1%", "6%", "6%", "7%"],
    ["Dyspepsia", "3%", "8%", "8%", "5%"],
    ["Abdominal pain", "4%", "6%", "5%", "5%"],
  ],
};

export const TIRZEPATIDE_AE_SIMPLE = [
  {
    title: "Gastrointestinal effects",
    takeaway:
      "Nausea, diarrhea, vomiting, constipation, abdominal pain, and indigestion are the most common reactions. Overall GI events occurred in 56% of every Zepbound dose group versus 30% with placebo.",
  },
  {
    title: "Injection-site and hypersensitivity",
    takeaway:
      "Injection-site reactions occurred in 6–8% on Zepbound versus 2% placebo. Hypersensitivity reactions were about 5% versus 3% placebo. Serious reactions including anaphylaxis have been reported.",
  },
  {
    title: "Fatigue, dizziness, and hair loss",
    takeaway:
      "Fatigue and dizziness were modestly more common than placebo. Hair loss was reported in 4–5% of Zepbound groups versus 1% placebo and was more common in women in trials.",
  },
];

export const TIRZEPATIDE_TRIALS = [
  {
    id: "surmount-1",
    name: "SURMOUNT-1",
    indication: "Obesity / overweight",
    diabetes: "Without diabetes",
    comparator: "Placebo",
    duration: "72 weeks",
    evidence: "Phase 3 RCT",
    authors: "Jastreboff AM et al.",
    journal: "New England Journal of Medicine, 2022",
    participants: "2,539 adults with obesity or overweight plus a complication, without diabetes",
    design: "Phase 3, randomized, double-blind, placebo-controlled",
    dose: "5, 10, or 15 mg weekly after escalation",
    endpoint: "Percent weight change and proportion losing at least 5%",
    result:
      "Up to −20.9% mean weight change at 72 weeks by treatment-regimen estimand",
    limitation:
      "Excluded diabetes from the primary 72-week population; manufacturer funded",
    href: "https://www.nejm.org/doi/full/10.1056/NEJMoa2206038",
  },
  {
    id: "surpass-2",
    name: "SURPASS-2",
    indication: "Type 2 diabetes",
    diabetes: "With diabetes",
    comparator: "Semaglutide 1 mg",
    duration: "40 weeks",
    evidence: "Phase 3 RCT",
    authors: "Frías JP et al.",
    journal: "New England Journal of Medicine, 2021",
    participants: "1,879 adults with type 2 diabetes taking metformin",
    design: "Phase 3, randomized, open-label, active-controlled",
    dose: "Tirzepatide 5, 10, or 15 mg vs semaglutide 1 mg",
    endpoint: "Change in HbA1c",
    result:
      "Tirzepatide was noninferior and superior for HbA1c; weight loss was greater at all three doses",
    limitation:
      "Open-label and not a comparison with obesity-dose semaglutide 2.4 mg",
    href: "https://www.nejm.org/doi/full/10.1056/NEJMoa2107519",
  },
  {
    id: "surmount-4",
    name: "SURMOUNT-4",
    indication: "Obesity / overweight",
    diabetes: "Mixed / lead-in",
    comparator: "Placebo withdrawal",
    duration: "88 weeks total",
    evidence: "Randomized withdrawal",
    authors: "Aronne LJ et al.",
    journal: "JAMA, 2024",
    participants: "783 enrolled; 670 randomized after a 36-week lead-in",
    design: "Randomized withdrawal trial",
    dose: "Maximum tolerated 10 or 15 mg",
    endpoint: "Weight change after continued treatment vs withdrawal",
    result:
      "Withdrawal produced substantial regain; continued treatment produced additional loss",
    limitation:
      "Only lead-in completers who reached randomization inform the withdrawal comparison",
    href: "https://jamanetwork.com/journals/jama/fullarticle/2812936",
  },
  {
    id: "surmount-osa",
    name: "SURMOUNT-OSA",
    indication: "OSA",
    diabetes: "With obesity",
    comparator: "Placebo",
    duration: "52 weeks",
    evidence: "Phase 3 RCT",
    authors: "Malhotra A et al.",
    journal: "New England Journal of Medicine, 2024",
    participants: "469 adults across two trials",
    design: "Phase 3, randomized, double-blind, placebo-controlled",
    dose: "Maximum tolerated 10 or 15 mg",
    endpoint: "Change in apnea–hypopnea index",
    result: "Large reductions in AHI with and without PAP",
    limitation:
      "Studied adults with both obesity and moderate-to-severe OSA",
    href: "https://www.nejm.org/doi/10.1056/NEJMoa2404881",
  },
  {
    id: "surmount-5",
    name: "SURMOUNT-5",
    indication: "Obesity / overweight",
    diabetes: "Without diabetes",
    comparator: "Semaglutide 1.7/2.4 mg",
    duration: "72 weeks",
    evidence: "Head-to-head RCT",
    authors: "Aronne LJ et al.",
    journal: "New England Journal of Medicine, 2025",
    participants: "751 adults with obesity, without diabetes",
    design: "Phase 3b, randomized, open-label, head-to-head",
    dose: "Maximum tolerated tirzepatide 10/15 mg vs semaglutide 1.7/2.4 mg",
    endpoint: "Percent weight change",
    result: "−20.2% vs −13.7%",
    limitation: "Open-label; manufacturer funded",
    href: "https://www.nejm.org/doi/10.1056/NEJMoa2416394",
  },
  {
    id: "surpass-cvot",
    name: "SURPASS-CVOT",
    indication: "Type 2 diabetes",
    diabetes: "With diabetes",
    comparator: "Dulaglutide 1.5 mg",
    duration: "CV outcomes",
    evidence: "CVOT",
    authors: "Nicholls SJ et al.",
    journal: "New England Journal of Medicine, 2025",
    participants:
      "More than 13,000 adults with type 2 diabetes and established atherosclerotic cardiovascular disease",
    design: "Randomized, double-blind cardiovascular-outcomes trial",
    dose: "Tirzepatide vs dulaglutide 1.5 mg",
    endpoint: "Cardiovascular death, myocardial infarction, or stroke",
    result:
      "Tirzepatide was noninferior to dulaglutide for major adverse cardiovascular events",
    limitation:
      "Active comparator rather than placebo; findings apply to a high-risk diabetes population",
    href: "https://www.nejm.org/doi/10.1056/NEJMoa2505928",
  },
];

export const TIRZEPATIDE_DOSAGE_GUIDE = {
  title: "Tirzepatide Dosage, Results & Side Effects: Complete Mounjaro and Zepbound Guide",
  updated: "Updated August 2026",
  callout:
    "**Research and regulatory status:** Tirzepatide is not an experimental peptide. It is an FDA-approved prescription medicine sold as **Mounjaro** for type 2 diabetes and **Zepbound** for chronic weight management and moderate-to-severe obstructive sleep apnea (OSA) in adults with obesity. Mounjaro is also approved for type 2 diabetes in patients **10 years and older**. The brand, indication, age group, and prescribed dose matter. This page describes FDA-approved use and published research; it is not individualized medical advice.",
  intro: [
    "Tirzepatide is a once-weekly injectable peptide that activates both GIP and GLP-1 receptors. It improves glucose-dependent insulin secretion, reduces glucagon when glucose is elevated, slows gastric emptying, reduces appetite, and can produce substantial weight loss. Treatment starts at 2.5 mg once weekly and is increased gradually to reduce gastrointestinal side effects. In the 72-week SURMOUNT-1 obesity trial, mean weight change was −15.0%, −19.5%, and −20.9% with 5, 10, and 15 mg, respectively, versus −3.1% with placebo using the treatment-regimen estimand. Nausea, diarrhea, vomiting, and constipation are the most common adverse reactions.",
  ],
  glance: {
    title: "30-Second Summary",
    table: {
      headers: ["Question", "Answer"],
      rows: [
        ["**What is it?**", "A 39-amino-acid, dual GIP/GLP-1 receptor agonist"],
        ["**Brand names**", "Mounjaro and Zepbound"],
        [
          "**Main mechanism**",
          "Glucose-dependent incretin signaling plus appetite and calorie-intake reduction",
        ],
        ["**Administration**", "Subcutaneous injection once weekly"],
        ["**Approved strengths**", "2.5, 5, 7.5, 10, 12.5, and 15 mg"],
        [
          "**Approved adult dose range**",
          "2.5 mg starting dose; maintenance depends on indication; adult maximum 15 mg weekly",
        ],
        [
          "**Strongest obesity result**",
          "Mean −20.9% at 72 weeks with 15 mg in SURMOUNT-1's treatment-regimen analysis",
        ],
        [
          "**Main side effects**",
          "Nausea, diarrhea, vomiting, constipation, abdominal pain, and dyspepsia",
        ],
        ["**Half-life**", "Approximately 5–6 days"],
        ["**FDA status**", "Approved—not “research use only”"],
      ],
    },
  },
  sections: [
    {
      id: "what-is",
      title: "What Is Tirzepatide?",
      paragraphs: [
        "Tirzepatide is a long-acting synthetic peptide based partly on the native GIP sequence. A fatty-diacid side chain promotes albumin binding and extends its half-life enough for weekly dosing. Unlike semaglutide, which activates GLP-1 receptors, tirzepatide activates both the **glucose-dependent insulinotropic polypeptide (GIP)** receptor and the **glucagon-like peptide-1 (GLP-1)** receptor.",
        "The same active ingredient is sold under two U.S. brands:",
      ],
      tables: [
        {
          headers: ["Brand", "FDA-approved use", "Population"],
          rows: [
            [
              "Mounjaro",
              "Improve glycemic control as an adjunct to diet and exercise",
              "Adults and pediatric patients age 10+ with type 2 diabetes",
            ],
            [
              "Zepbound",
              "Reduce excess body weight and maintain weight reduction long term",
              "Adults with obesity, or overweight plus at least one weight-related condition",
            ],
            [
              "Zepbound",
              "Treat moderate-to-severe OSA",
              "Adults with obesity",
            ],
          ],
        },
      ],
      paragraphsAfter: [
        "Mounjaro and Zepbound contain the same drug, but they are labeled for different indications. They should not be combined with each other, another tirzepatide product, or a GLP-1 receptor agonist.",
      ],
    },
    {
      id: "dose-escalation-chart",
      title: "Tirzepatide Dosage",
      subsections: [
        {
          title: "FDA-approved adult dose escalation",
          widget: "tirz-escalation-timeline",
          tables: [
            {
              headers: ["Weeks", "Weekly dose", "Role"],
              align: ["left", "right", "left"],
              rows: [
                [
                  "1–4",
                  "2.5 mg",
                  "Initiation; not a maintenance dose for diabetes control",
                ],
                [
                  "5–8",
                  "5 mg",
                  "First maintenance dose for diabetes or weight management",
                ],
                [
                  "9–12",
                  "7.5 mg",
                  "Escalation step if greater effect is needed and tolerated",
                ],
                [
                  "13–16",
                  "10 mg",
                  "Maintenance option; lowest labeled OSA maintenance dose",
                ],
                ["17–20", "12.5 mg", "Escalation step"],
                [
                  "Week 21 onward",
                  "15 mg",
                  "Highest recommended adult maintenance dose",
                ],
              ],
            },
          ],
          paragraphsAfter: [
            "This is the fastest label-permitted escalation to 15 mg, not a requirement to reach 15 mg. A dose should be increased only after **at least four weeks** at the current dose. Treatment response and tolerability determine the maintenance dose.",
          ],
        },
        {
          title: "Maintenance dose by indication",
          tables: [
            {
              headers: [
                "Indication",
                "Starting dose",
                "Recommended maintenance dose",
                "Maximum",
              ],
              rows: [
                [
                  "Type 2 diabetes, adults",
                  "2.5 mg weekly",
                  "5–15 mg weekly as needed for glycemic control",
                  "15 mg weekly",
                ],
                [
                  "Type 2 diabetes, age 10+",
                  "2.5 mg weekly",
                  "5 or 10 mg weekly as needed",
                  "10 mg weekly",
                ],
                [
                  "Weight reduction and long-term maintenance",
                  "2.5 mg weekly",
                  "5, 10, or 15 mg weekly",
                  "15 mg weekly",
                ],
                [
                  "OSA in adults with obesity",
                  "2.5 mg weekly",
                  "10 or 15 mg weekly",
                  "15 mg weekly",
                ],
              ],
            },
          ],
          paragraphsAfter: [
            "The 7.5 mg and 12.5 mg strengths are escalation steps rather than labeled maintenance doses for chronic weight management. The 2.5 mg dose is intended for initiation and is not an approved maintenance dose.",
          ],
        },
        {
          title: "How to use tirzepatide",
          bullets: [
            "Inject subcutaneously in the abdomen, thigh, or back of the upper arm once weekly.",
            "Use it at any time of day, with or without food.",
            "Rotate injection sites. Do not inject into the same site as insulin; separate the injections.",
            "If a dose is missed, take it within 4 days (96 hours). If more than 4 days have passed, skip it and resume the regular schedule.",
            "A weekly administration day may be changed if at least 72 hours separate two doses.",
            "Follow the instructions for the specific pen or vial. FDA-approved tirzepatide is supplied ready to inject and should not be reconstituted.",
          ],
        },
      ],
    },
    {
      id: "why-escalation",
      title: "Why Tirzepatide Is Escalated Slowly",
      paragraphs: [
        "Escalation is designed primarily to improve tolerability. Gastrointestinal effects cluster during dose escalation and usually decline over time. Starting immediately at a high maintenance dose would produce exposure more abruptly and is not the studied or labeled approach.",
        "The 2.5 mg starting dose acclimates the patient to treatment. Four-week intervals also allow time to approach steady-state exposure: with a 5–6-day half-life, tirzepatide accumulates across several weekly injections. Escalation therefore balances additional efficacy against adverse effects rather than assuming the highest dose is best for everyone.",
      ],
    },
    {
      id: "dose-levels",
      title: "What Happens at Each Tirzepatide Dose?",
      tables: [
        {
          headers: ["Dose", "FDA-label role", "Evidence-supported interpretation"],
          align: ["right", "left", "left"],
          rows: [
            [
              "2.5 mg",
              "Initiation",
              "Reduces the abruptness of GI exposure; not a labeled maintenance dose",
            ],
            [
              "5 mg",
              "Maintenance",
              "Lowest adult maintenance dose; produced substantial weight and HbA1c reductions in trials",
            ],
            [
              "7.5 mg",
              "Escalation",
              "Bridge between 5 and 10 mg; pivotal fixed-dose trials generally did not report it as a randomized maintenance arm",
            ],
            [
              "10 mg",
              "Maintenance",
              "Higher-efficacy option and an approved OSA maintenance dose",
            ],
            [
              "12.5 mg",
              "Escalation",
              "Bridge between 10 and 15 mg; not a labeled Zepbound maintenance dose",
            ],
            [
              "15 mg",
              "Maintenance",
              "Maximum adult dose and generally the largest average effect in fixed-dose trials",
            ],
          ],
        },
      ],
      paragraphsAfter: [
        "Results cannot be assigned reliably to 2.5, 7.5, or 12.5 mg from trials in which those doses were only temporary titration stages.",
      ],
    },
    {
      id: "weight-loss-by-dose",
      title: "Tirzepatide Results for Weight Loss",
      widget: "tirz-weight-loss-chart",
      subsections: [
        {
          title: "SURMOUNT-1: adults without diabetes",
          paragraphs: [
            "SURMOUNT-1 randomized 2,539 adults with obesity or overweight plus a weight-related complication, excluding diabetes, to 5, 10, or 15 mg tirzepatide or placebo for 72 weeks. The table uses the **treatment-regimen estimand**, which better reflects outcomes including treatment discontinuation.",
          ],
          tables: [
            {
              headers: [
                "Outcome at week 72",
                "Placebo",
                "5 mg",
                "10 mg",
                "15 mg",
              ],
              align: ["left", "right", "right", "right", "right"],
              rows: [
                [
                  "Mean body-weight change",
                  "−3.1%",
                  "−15.0%",
                  "−19.5%",
                  "−20.9%",
                ],
                ["Lost at least 5%", "35%", "85%", "89%", "91%"],
                [
                  "Discontinued due to adverse events",
                  "2.6%",
                  "4.3%",
                  "7.1%",
                  "6.2%",
                ],
              ],
            },
          ],
          paragraphsAfter: [
            "The efficacy estimand—estimating effect if treatment were continued—produced somewhat larger mean reductions of −16.0%, −21.4%, and −22.5% at 5, 10, and 15 mg, versus −2.4% with placebo. These are different statistical questions and should not be blended into a single “average weight loss” claim.",
          ],
        },
        {
          title: "SURPASS-2: type 2 diabetes, direct comparison with semaglutide 1 mg",
          paragraphs: [
            "In 1,879 adults taking metformin, tirzepatide was compared directly with semaglutide 1 mg for 40 weeks.",
          ],
          tables: [
            {
              headers: [
                "Treatment",
                "Mean HbA1c change",
                "Mean body-weight change",
              ],
              rows: [
                ["Tirzepatide 5 mg", "−2.01 percentage points", "−7.6 kg"],
                ["Tirzepatide 10 mg", "−2.24 percentage points", "−9.3 kg"],
                ["Tirzepatide 15 mg", "−2.30 percentage points", "−11.2 kg"],
                ["Semaglutide 1 mg", "−1.86 percentage points", "−5.7 kg"],
              ],
            },
          ],
          paragraphsAfter: [
            "All tirzepatide doses were noninferior and superior to semaglutide 1 mg for HbA1c reduction. This does **not** compare tirzepatide with the 2.4 mg obesity dose of semaglutide.",
          ],
        },
        {
          title: "SURMOUNT-5: direct obesity comparison with semaglutide",
          widget: "tirz-vs-semaglutide",
          paragraphs: [
            "In 751 adults with obesity but without diabetes, maximum tolerated tirzepatide (10 or 15 mg) was compared with maximum tolerated semaglutide (1.7 or 2.4 mg) for 72 weeks.",
          ],
          tables: [
            {
              headers: ["Outcome", "Tirzepatide", "Semaglutide"],
              rows: [
                ["Mean body-weight change", "−20.2%", "−13.7%"],
                ["Mean weight change", "−22.8 kg", "−15.0 kg"],
              ],
            },
          ],
          paragraphsAfter: [
            "Tirzepatide produced greater mean weight reduction in this head-to-head trial. This result applies to the trial population and dose strategy; it does not predict an individual response.",
          ],
        },
        {
          title: "What happens after stopping?",
          paragraphs: [
            "In SURMOUNT-4, participants lost a mean 20.9% during 36 weeks of open-label tirzepatide. Over the next 52 weeks, those switched to placebo regained 14.0% from the randomization point, while those continuing tirzepatide lost another 5.5%. This supports obesity treatment as long-term therapy for many patients; it does not mean every patient will regain the same amount.",
          ],
        },
      ],
    },
    {
      id: "osa",
      title: "Tirzepatide Results for Obstructive Sleep Apnea",
      paragraphs: [
        "SURMOUNT-OSA included two 52-week randomized trials in adults with obesity and moderate-to-severe OSA: one in people not using positive airway pressure (PAP) and another in people already using PAP. Participants received maximum tolerated tirzepatide, 10 or 15 mg, or placebo.",
      ],
      widget: "tirz-osa-chart",
      tables: [
        {
          headers: ["Trial", "Tirzepatide change in AHI", "Placebo change in AHI"],
          rows: [
            ["Study 1: no PAP", "−25.3 events/hour", "−5.3 events/hour"],
            ["Study 2: using PAP", "−29.3 events/hour", "−5.5 events/hour"],
          ],
        },
      ],
      paragraphsAfter: [
        "Tirzepatide also improved body weight, hypoxic burden, systolic blood pressure, and inflammatory markers. The FDA approval is specifically for moderate-to-severe OSA in adults with obesity; tirzepatide is not a universal substitute for PAP or other OSA care.",
      ],
    },
    {
      id: "side-effects",
      title: "Tirzepatide Side Effects",
      widget: "tirz-adverse-events",
      subsections: [
        {
          title: "Serious warnings and clinically important risks",
          bullets: [
            "**Thyroid C-cell tumors:** Tirzepatide caused thyroid C-cell tumors in rats. Human relevance is unknown. It carries a boxed warning and is contraindicated with a personal or family history of medullary thyroid carcinoma or MEN 2.",
            "**Pancreatitis:** Acute pancreatitis has occurred. Persistent severe abdominal pain, sometimes radiating to the back, requires urgent evaluation and discontinuation if pancreatitis is suspected.",
            "**Severe gastrointestinal reactions:** Tirzepatide is not recommended in severe gastroparesis. Prolonged vomiting or diarrhea can cause dehydration.",
            "**Acute kidney injury:** Usually linked to volume depletion from GI symptoms; renal function may need monitoring.",
            "**Gallbladder disease:** Cholelithiasis and cholecystitis occur, sometimes in association with weight loss.",
            "**Hypoglycemia:** Risk is greatest when combined with insulin or an insulin secretagogue such as a sulfonylurea; those doses may require reduction.",
            "**Diabetic retinopathy complications:** Rapid glucose improvement can temporarily worsen retinopathy. Patients with a history of diabetic retinopathy should be monitored.",
            "**Hypersensitivity:** Serious reactions including anaphylaxis and angioedema have been reported.",
            "**Pulmonary aspiration:** Delayed gastric emptying may leave residual stomach contents during anesthesia or deep sedation. Patients should tell procedural teams they take tirzepatide.",
            "**Pregnancy:** Weight loss offers no benefit during pregnancy and may harm a fetus. Zepbound should be discontinued when pregnancy is recognized.",
          ],
        },
        {
          title: "Other safety and laboratory findings",
          tables: [
            {
              headers: ["Finding", "Evidence"],
              rows: [
                [
                  "Heart rate",
                  "Mean increase of 1–3 beats/minute in pooled Zepbound weight trials versus no mean increase with placebo",
                ],
                [
                  "Gallstones",
                  "Cholelithiasis: 1.1% tirzepatide vs 1.0% placebo in pooled weight trials",
                ],
                ["Cholecystitis", "0.7% tirzepatide vs 0.2% placebo"],
                [
                  "Pancreatic enzymes",
                  "Amylase and lipase can rise; an isolated elevation does not diagnose pancreatitis",
                ],
                [
                  "Hair loss",
                  "4–5% across Zepbound doses vs 1% placebo; more common in women in trials and associated with weight reduction",
                ],
                [
                  "Hypoglycemia without diabetes",
                  "Plasma glucose under 54 mg/dL occurred in 0.3% vs 0% placebo in one obesity trial without diabetes",
                ],
              ],
            },
          ],
        },
      ],
    },
    {
      id: "interactions",
      title: "Drug Interactions and Practical Precautions",
      paragraphs: [
        "Tirzepatide delays gastric emptying and can affect absorption of oral medicines, especially those with a narrow therapeutic index. The effect is largest after the first dose and diminishes over time.",
        "People using oral hormonal contraceptives should switch to a non-oral method or add a barrier method for four weeks after starting tirzepatide and for four weeks after every dose increase. Non-oral hormonal contraception should not be affected by delayed gastric emptying.",
        "Insulin and sulfonylureas increase hypoglycemia risk when combined with tirzepatide. Tirzepatide should not be combined with another tirzepatide-containing product or GLP-1 receptor agonist.",
      ],
    },
    {
      id: "triple-agonist",
      title: "How Tirzepatide Works",
      widget: "tirz-mechanism",
      subsections: [
        {
          title: "Plain-English explanation",
          paragraphs: [
            "Tirzepatide imitates two meal-responsive hormones. It helps the pancreas release insulin when glucose is elevated, suppresses inappropriate glucagon, reduces appetite and calorie intake, and slows stomach emptying. The combined effect improves blood sugar and usually reduces body weight.",
          ],
        },
        {
          title: "Technical mechanism",
          tables: [
            {
              headers: ["Target or process", "Effect"],
              rows: [
                [
                  "GIP receptor agonism",
                  "Enhances glucose-dependent insulin secretion and contributes to energy-intake regulation",
                ],
                [
                  "GLP-1 receptor agonism",
                  "Enhances glucose-dependent insulin secretion, reduces glucagon, slows gastric emptying, and promotes satiety",
                ],
                [
                  "Hypothalamic/appetite pathways",
                  "Reduces hunger and calorie intake",
                ],
                [
                  "Gastric emptying",
                  "Delayed most strongly after the first dose; effect diminishes with repeated dosing",
                ],
                [
                  "Adiposity",
                  "Weight loss favors fat-mass reduction over lean-mass reduction, although both may decrease",
                ],
                [
                  "Albumin binding",
                  "C20 fatty-diacid moiety extends exposure for weekly dosing",
                ],
              ],
            },
          ],
          paragraphsAfter: [
            "Tirzepatide reaches maximum concentration approximately 8–72 hours after injection, reaches steady state after about four weeks of weekly dosing, and has an elimination half-life of approximately 5–6 days. It is broken down through peptide cleavage, beta-oxidation of the fatty-acid component, and amide hydrolysis rather than being excreted as unchanged intact peptide.",
          ],
        },
      ],
    },
    {
      id: "compare",
      title: "Tirzepatide vs Similar Medications",
      tables: [
        {
          headers: [
            "Compound",
            "Mechanism",
            "Frequency",
            "FDA-approved weight-management dose",
            "Direct evidence vs tirzepatide",
          ],
          rows: [
            [
              "**Tirzepatide**",
              "GIP + GLP-1 agonist",
              "Weekly injection",
              "5, 10, or 15 mg maintenance",
              "Reference compound",
            ],
            [
              "**Semaglutide**",
              "GLP-1 agonist",
              "Weekly injection",
              "Up to 2.4 mg in the SURMOUNT-5 comparison",
              "Tirzepatide produced −20.2% vs −13.7% at 72 weeks",
            ],
            [
              "**Liraglutide**",
              "GLP-1 agonist",
              "Daily injection",
              "3 mg daily",
              "No pivotal direct head-to-head obesity RCT with tirzepatide",
            ],
            [
              "**Retatrutide**",
              "GIP + GLP-1 + glucagon agonist",
              "Weekly injection in trials",
              "None; investigational",
              "No approved use and no definitive head-to-head outcome trial",
            ],
          ],
        },
      ],
      paragraphsAfter: [
        "Cross-trial percentages should not be treated as head-to-head comparisons. Differences in population, dose, duration, estimand, adherence, and background therapy can materially change results.",
      ],
    },
    {
      id: "clinical-evidence",
      title: "Clinical Evidence",
      widget: "tirz-trial-explorer",
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
              "Multiple large phase 3 programs across diabetes, obesity, OSA, and cardiovascular outcomes",
            ],
            [
              "Direct active-comparator trials",
              "High",
              "Direct comparisons with semaglutide and dulaglutide are available",
            ],
            [
              "Long-term treatment data",
              "Moderate to high",
              "Data extend to three years in a prediabetes subgroup; lifetime safety remains unknown",
            ],
            [
              "Pediatric evidence",
              "Moderate",
              "FDA-approved for type 2 diabetes age 10+; smaller evidence base than adults",
            ],
            [
              "Pregnancy data",
              "Low",
              "Insufficient human data; weight-loss use is inappropriate in pregnancy",
            ],
            [
              "FDA approval",
              "Yes",
              "Mounjaro and Zepbound have specific, non-interchangeable labeled indications",
            ],
          ],
        },
      ],
    },
    {
      id: "fda-status",
      title: "Regulatory Status",
      paragraphs: [
        "As of August 2026, tirzepatide is FDA approved in the United States:",
      ],
      bullets: [
        "**Mounjaro:** type 2 diabetes in adults and children age 10 and older, alongside diet and exercise.",
        "**Zepbound:** chronic weight reduction and maintenance in adults with obesity or overweight plus at least one weight-related condition.",
        "**Zepbound:** moderate-to-severe OSA in adults with obesity.",
      ],
      paragraphsAfter: [
        "Tirzepatide is not approved for type 1 diabetes, cosmetic weight loss in people who do not meet the labeled criteria, or as a compounded “research peptide.” FDA-approved products have standardized manufacturing, concentration, labeling, and delivery systems; unapproved products advertised for research use are not equivalent.",
      ],
    },
  ],
  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "What is tirzepatide?",
        answer:
          "Tirzepatide is a once-weekly dual GIP/GLP-1 receptor agonist approved as Mounjaro and Zepbound.",
      },
      {
        question: "What does tirzepatide do?",
        answer:
          "It improves glucose-dependent insulin secretion, lowers glucagon when glucose is elevated, reduces appetite and calorie intake, and slows gastric emptying.",
      },
      {
        question: "What is the starting dose of tirzepatide?",
        answer:
          "The FDA-approved starting dose is 2.5 mg injected once weekly for four weeks.",
      },
      {
        question: "Is 2.5 mg a maintenance dose?",
        answer:
          "No. The 2.5 mg dose is for treatment initiation, not maintenance.",
      },
      {
        question: "How quickly can the dose be increased?",
        answer:
          "The dose may be increased by 2.5 mg only after at least four weeks at the current dose.",
      },
      {
        question: "What is the maximum tirzepatide dose?",
        answer:
          "The maximum adult dose is 15 mg once weekly; the maximum Mounjaro dose for patients age 10–17 is 10 mg weekly.",
      },
      {
        question: "How much weight do people lose on tirzepatide?",
        answer:
          "In SURMOUNT-1, mean weight loss at 72 weeks ranged from 15.0% at 5 mg to 20.9% at 15 mg using the treatment-regimen estimand.",
      },
      {
        question: "How long does tirzepatide take to work?",
        answer:
          "Glucose and appetite effects can begin early, but dose escalation and major weight outcomes unfold over months; pivotal obesity trials assessed primary outcomes at 72 weeks.",
      },
      {
        question: "What are the most common side effects?",
        answer:
          "The most common effects are nausea, diarrhea, vomiting, constipation, abdominal pain, and indigestion.",
      },
      {
        question: "Does tirzepatide cause hair loss?",
        answer:
          "Hair loss was reported in 4–5% of Zepbound groups versus 1% with placebo and may be related partly to substantial or rapid weight loss.",
      },
      {
        question: "Does tirzepatide cause low blood sugar?",
        answer:
          "It can, but clinically important risk is much higher when tirzepatide is combined with insulin or a sulfonylurea.",
      },
      {
        question: "Does tirzepatide cause thyroid cancer?",
        answer:
          "Tirzepatide caused thyroid C-cell tumors in rats, but whether it causes these tumors in humans is unknown; it is contraindicated with personal or family MTC history or MEN 2.",
      },
      {
        question: "Can tirzepatide be used during pregnancy?",
        answer:
          "Zepbound should be stopped when pregnancy is recognized because weight loss provides no benefit during pregnancy and may cause fetal harm.",
      },
      {
        question: "Does tirzepatide affect birth control pills?",
        answer:
          "Yes. Delayed gastric emptying may reduce oral hormonal contraceptive effectiveness, so the label advises a non-oral method or added barrier protection for four weeks after initiation and each dose increase.",
      },
      {
        question: "What is tirzepatide's half-life?",
        answer:
          "Its elimination half-life is approximately 5–6 days, supporting once-weekly administration.",
      },
      {
        question: "Is tirzepatide better than semaglutide?",
        answer:
          "For mean weight loss in SURMOUNT-5, tirzepatide outperformed semaglutide at maximum tolerated labeled obesity doses, but the best medication for a particular patient also depends on indications, contraindications, tolerability, coverage, and treatment goals.",
      },
      {
        question: "What happens when tirzepatide is stopped?",
        answer:
          "Substantial weight regain is common after withdrawal, as shown in SURMOUNT-4, although individual outcomes vary.",
      },
      {
        question: "Is tirzepatide FDA approved for sleep apnea?",
        answer:
          "Yes. Zepbound is approved for moderate-to-severe OSA in adults with obesity.",
      },
      {
        question: "Can tirzepatide be combined with Ozempic, Wegovy, or another GLP-1 drug?",
        answer:
          "No. The labels do not recommend combining Zepbound with another GLP-1 receptor agonist or any other tirzepatide-containing product.",
      },
      {
        question: "Does tirzepatide need to be reconstituted?",
        answer:
          "No. FDA-approved Mounjaro and Zepbound are supplied as ready-to-use injection products; reconstitution instructions found online concern unapproved products and should not be presented as brand-drug dosing.",
      },
    ],
  },
  sources: {
    title: "References",
    items: [
      {
        authors: "FDA",
        title: "Zepbound prescribing information",
        detail: "U.S. prescribing information.",
        href: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2025/217806Orig1s020lbl.pdf",
      },
      {
        authors: "FDA",
        title: "Mounjaro prescribing information",
        detail: "U.S. prescribing information.",
        href: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2026/215866s009lbl.pdf",
      },
      {
        authors: "Jastreboff AM et al.",
        title: "Tirzepatide Once Weekly for the Treatment of Obesity.",
        detail: "NEJM. 2022. DOI: 10.1056/NEJMoa2206038",
        doi: "DOI: 10.1056/NEJMoa2206038",
        href: "https://www.nejm.org/doi/full/10.1056/NEJMoa2206038",
      },
      {
        authors: "Frías JP et al.",
        title:
          "Tirzepatide versus Semaglutide Once Weekly in Patients with Type 2 Diabetes.",
        detail: "NEJM. 2021. DOI: 10.1056/NEJMoa2107519",
        href: "https://www.nejm.org/doi/full/10.1056/NEJMoa2107519",
      },
      {
        authors: "Aronne LJ et al.",
        title:
          "Continued Treatment With Tirzepatide for Maintenance of Weight Reduction.",
        detail: "JAMA, 2024",
        href: "https://jamanetwork.com/journals/jama/fullarticle/2812936",
      },
      {
        authors: "Malhotra A et al.",
        title:
          "Tirzepatide for the Treatment of Obstructive Sleep Apnea and Obesity.",
        detail: "NEJM. 2024. DOI: 10.1056/NEJMoa2404881",
        href: "https://www.nejm.org/doi/10.1056/NEJMoa2404881",
      },
      {
        authors: "Aronne LJ et al.",
        title:
          "Tirzepatide as Compared with Semaglutide for the Treatment of Obesity.",
        detail: "NEJM. 2025. DOI: 10.1056/NEJMoa2416394",
        href: "https://www.nejm.org/doi/10.1056/NEJMoa2416394",
      },
      {
        authors: "Nicholls SJ et al.",
        title:
          "Cardiovascular Outcomes with Tirzepatide versus Dulaglutide in Type 2 Diabetes.",
        detail: "NEJM. 2025. DOI: 10.1056/NEJMoa2505928",
        href: "https://www.nejm.org/doi/10.1056/NEJMoa2505928",
      },
    ],
  },
  safety: {
    title: "Important Safety Information",
    paragraphs: [
      "Tirzepatide is an FDA-approved prescription medicine. Brand, indication, age group, and prescribed dose all matter.",
      "This page describes FDA-approved use and published research for educational and research-reference purposes. It is **not individualized medical advice**.",
      "Unapproved products advertised as tirzepatide or “research peptides” are not equivalent to FDA-approved Mounjaro or Zepbound.",
    ],
  },
};
