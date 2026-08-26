/**
 * Retatrutide dosage & dose-escalation guide copy (clinical-trial reference).
 */

export const RETATRUTIDE_ESCALATION_STEPS = [
  {
    dose: "2 mg",
    period: "Weeks 1–4",
    stage: "Initiation",
    role: "Phase 3 starting dose",
  },
  {
    dose: "4 mg",
    period: "Weeks 5–8",
    stage: "First escalation",
    role: "Escalation or target dose",
  },
  {
    dose: "6 mg",
    period: "Weeks 9–12",
    stage: "Intermediate escalation",
    role: "Bridge to higher target doses",
  },
  {
    dose: "9 mg",
    period: "Weeks 13–16",
    stage: "Higher-dose stage",
    role: "Escalation or target dose",
  },
  {
    dose: "12 mg",
    period: "Week 17+",
    stage: "Highest target",
    role: "Maximum studied target dose",
  },
];

export const RETATRUTIDE_PHASE2_WEIGHT_LOSS = [
  { dose: "1 mg", week24: 7.2, week48: 8.7 },
  { dose: "4 mg", week24: 12.9, week48: 17.1 },
  { dose: "8 mg", week24: 17.3, week48: 22.8 },
  { dose: "12 mg", week24: 17.5, week48: 24.2 },
  { dose: "Placebo", week24: 1.6, week48: 2.1 },
];

export const RETATRUTIDE_ADVERSE_EVENTS = {
  fullHeaders: [
    "Adverse Event",
    "Placebo",
    "1 mg",
    "4 mg / 2 mg Start",
    "4 mg / 4 mg Start",
    "8 mg / 2 mg Start",
    "8 mg / 4 mg Start",
    "12 mg / 2 mg Start",
  ],
  simpleHeaders: [
    "Adverse Event",
    "Placebo",
    "1 mg",
    "4 mg",
    "8 mg",
    "12 mg",
  ],
  simpleColumnIndexes: [0, 1, 2, 3, 5, 7],
  rows: [
    ["Nausea", "11%", "14%", "18%", "36%", "17%", "60%", "45%"],
    ["Diarrhea", "11%", "9%", "12%", "12%", "20%", "20%", "15%"],
    ["Vomiting", "1%", "3%", "12%", "12%", "6%", "26%", "19%"],
    ["Constipation", "3%", "7%", "15%", "6%", "11%", "11%", "16%"],
    ["Decreased appetite", "9%", "13%", "18%", "24%", "11%", "31%", "29%"],
    ["Fatigue", "4%", "4%", "12%", "6%", "3%", "9%", "10%"],
    ["Early satiety", "6%", "4%", "3%", "3%", "0%", "6%", "10%"],
    ["Discontinued due to any AE", "0%", "7%", "6%", "9%", "14%", "6%", "16%"],
  ],
  highlightCells: {
    "Nausea-6": true,
    "Vomiting-6": true,
    "Discontinued due to any AE-7": true,
  },
};

export const RETATRUTIDE_DOSAGE_GUIDE = {
  title: "Retatrutide Dosage & Dose Escalation: Complete Clinical Trial Guide",
  updated: "Updated August 2026",
  callout:
    "**Research status:** Retatrutide is an investigational drug and is not currently FDA approved. There is no FDA-approved retatrutide dosage. The doses and schedules below describe published and publicly reported clinical-trial protocols and results, not prescribing instructions.",
  intro: [
    "Retatrutide is a once-weekly investigational triple-receptor agonist developed by Eli Lilly that activates **GIP, GLP-1, and glucagon receptors**.",
    "In the landmark Phase 2 obesity trial, retatrutide produced average weight reductions of up to **24.2% at 48 weeks**. Retatrutide has since advanced into the Phase 3 TRIUMPH program.",
    "One of the most important features of retatrutide research is **dose escalation**. Higher target doses are not introduced immediately. Clinical trials progressively increased exposure over time, in part to improve tolerability during the period when gastrointestinal side effects are most common.",
    "This guide explains the retatrutide doses studied in clinical trials, how escalation works, weight-loss results by dose, adverse events by dose, and the differences between Phase 2 and Phase 3 research.",
  ],
  glance: {
    title: "Retatrutide Dosage: 30-Second Summary",
    table: {
      headers: ["Question", "Clinical-Trial Data"],
      rows: [
        ["**How often is retatrutide given?**", "Once weekly"],
        ["**How is it administered?**", "Subcutaneous injection"],
        ["**Phase 3 starting dose**", "2 mg"],
        ["**Escalation interval**", "Every 4 weeks"],
        ["**Phase 3 escalation sequence**", "2 → 4 → 6 → 9 → 12 mg"],
        ["**Highest studied target dose**", "12 mg"],
        ["**Phase 2 target doses**", "1, 4, 8 and 12 mg"],
        [
          "**Phase 3 target doses**",
          "Vary by TRIUMPH trial; include 4, 9 and 12 mg",
        ],
        ["**FDA-approved dosage**", "None"],
        ["**Regulatory status**", "Investigational"],
      ],
    },
    note: "**The key distinction:** a dose used in a clinical trial is not the same thing as an approved or recommended dose. Retatrutide does not currently have FDA-approved prescribing information.",
  },
  sections: [
    {
      id: "dose-escalation-chart",
      title: "Retatrutide Dose Escalation Chart",
      paragraphs: [
        "The Phase 3 TRIUMPH program uses a more refined escalation pathway than the original Phase 2 obesity study.",
        "For participants assigned to the highest target dose, the escalation sequence progresses through:",
      ],
      highlight: "**2 mg → 4 mg → 6 mg → 9 mg → 12 mg**",
      paragraphsAfterHighlight: [
        "with dose increases occurring at approximately four-week intervals.",
      ],
      widget: "escalation-timeline",
      tables: [
        {
          headers: ["Treatment Period", "Weekly Dose", "Stage", "Role"],
          align: ["left", "right", "left", "left"],
          rows: [
            ["**Weeks 1–4**", "**2 mg**", "Initiation", "Phase 3 starting dose"],
            [
              "**Weeks 5–8**",
              "**4 mg**",
              "First escalation",
              "Escalation or target dose",
            ],
            [
              "**Weeks 9–12**",
              "**6 mg**",
              "Intermediate escalation",
              "Bridge to higher target doses",
            ],
            [
              "**Weeks 13–16**",
              "**9 mg**",
              "Higher-dose stage",
              "Escalation or target dose",
            ],
            [
              "**Week 17+**",
              "**12 mg**",
              "Highest target",
              "Maximum studied target dose",
            ],
          ],
        },
      ],
      paragraphsAfter: [
        "Not every participant progresses to 12 mg. Clinical trials include different target-dose arms, so escalation stops when the assigned target dose is reached.",
      ],
    },
    {
      id: "phase-2-vs-phase-3",
      title: "Phase 2 vs. Phase 3 Retatrutide Dosing",
      paragraphs: [
        "This distinction is important because many online retatrutide dosage charts combine Phase 2 and Phase 3 protocols.",
        "They are not identical.",
      ],
      tables: [
        {
          headers: ["", "**Phase 2 Obesity Trial**", "**Phase 3 TRIUMPH Program**"],
          rows: [
            ["**Frequency**", "Once weekly", "Once weekly"],
            [
              "**Target doses studied**",
              "1, 4, 8, 12 mg",
              "Varies by trial; includes 4, 9, 12 mg",
            ],
            [
              "**Starting dose**",
              "1, 2 or 4 mg depending on treatment arm",
              "2 mg in Phase 3 escalation",
            ],
            [
              "**Intermediate doses**",
              "Varied by treatment arm",
              "2, 4, 6 and 9 mg used during escalation",
            ],
            ["**Maximum target**", "12 mg", "12 mg"],
            [
              "**Purpose**",
              "Dose-ranging efficacy and safety",
              "Confirmatory/registrational efficacy and safety",
            ],
          ],
        },
      ],
      paragraphsAfter: [
        "This is why both **8 mg** and **9 mg** appear in discussions of retatrutide.",
        "The pivotal Phase 2 obesity study evaluated an **8 mg target dose**. The Phase 3 development program subsequently incorporated **9 mg**.",
      ],
    },
    {
      id: "why-escalation",
      title: "Why Retatrutide Uses Dose Escalation",
      paragraphs: [
        "Dose escalation is particularly important with retatrutide because the most frequently reported adverse events in Phase 2 were gastrointestinal and occurred predominantly during escalation.",
        "These included:",
      ],
      bullets: [
        "Nausea",
        "Diarrhea",
        "Vomiting",
        "Constipation",
        "Decreased appetite",
        "Early satiety",
      ],
      paragraphsBeforeTables: [
        "The Phase 2 study also provided direct evidence that **starting dose affects tolerability**.",
        "Researchers assigned participants in some 4 mg and 8 mg target-dose groups to different starting doses.",
        "For example, among participants targeting 8 mg:",
      ],
      tables: [
        {
          headers: ["8 mg Target Group", "Started at 2 mg", "Started at 4 mg"],
          align: ["left", "right", "right"],
          rows: [
            ["**Nausea**", "**17%**", "**60%**"],
            ["**Diarrhea**", "20%", "20%"],
            ["**Vomiting**", "6%", "26%"],
            ["**48-week weight change**", "−21.7%", "−23.9%"],
          ],
        },
      ],
      extraParagraphs: [
        "The difference in nausea was substantial.",
        "Yet both 8 mg groups experienced large reductions in body weight by week 48.",
        "This helps explain why later retatrutide development emphasized gradual escalation rather than beginning participants at a high dose.",
      ],
    },
    {
      id: "dose-levels",
      title: "What Happens at Each Retatrutide Dose?",
      subsections: [
        {
          title: "2 mg Retatrutide — Starting Dose in Phase 3",
          paragraphs: [
            "**2 mg once weekly** serves as the initiation dose in the Phase 3 escalation protocol.",
            "The purpose of this stage is primarily initial drug exposure and tolerability before escalation.",
            "Phase 2 research provides an important clue as to why 2 mg was selected as a starting point: participants who began higher-dose treatment arms at 2 mg generally experienced fewer gastrointestinal adverse events than participants beginning at 4 mg.",
          ],
          glanceTable: {
            title: "2 mg at a Glance",
            rows: [
              ["**Dose**", "2 mg weekly"],
              ["**Phase 3 role**", "Starting dose"],
              ["**Typical escalation period**", "First 4 weeks"],
              ["**Next escalation step**", "4 mg"],
              ["**Standalone Phase 2 target?**", "No"],
              ["**FDA-approved dose?**", "No"],
            ],
          },
          paragraphsAfter: [
            "The 2 mg dose should therefore be understood primarily as an **initiation dose within clinical-trial escalation protocols**, not an FDA-approved starting dose.",
          ],
        },
        {
          title: "4 mg Retatrutide — First Escalation / Target Dose",
          paragraphs: [
            "The next step in Phase 3 escalation is **4 mg once weekly**.",
            "Four milligrams has also been studied as a target dose.",
            "In Phase 2, the combined 4 mg groups achieved average body-weight reductions of:",
          ],
          bullets: ["**12.9% at 24 weeks**", "**17.1% at 48 weeks**"],
          paragraphsBeforeTables: [
            "However, Phase 2 also demonstrated why starting-dose context matters when interpreting adverse events.",
          ],
          tables: [
            {
              caption: "Phase 2 4 mg Groups",
              headers: [
                "Outcome",
                "4 mg Target, 2 mg Start",
                "4 mg Target, 4 mg Start",
              ],
              align: ["left", "right", "right"],
              rows: [
                ["**Nausea**", "18%", "36%"],
                ["**Diarrhea**", "12%", "12%"],
                ["**Vomiting**", "12%", "12%"],
                ["**Constipation**", "15%", "6%"],
                ["**48-week weight change**", "−16.3%", "−17.8%"],
              ],
            },
          ],
          extraParagraphs: [
            'Simply saying "nausea occurs in 36% at 4 mg" therefore misses an important feature of the actual trial design.',
            "The adverse-event rate depended partly on **how participants reached the target dose**.",
          ],
        },
        {
          title: "6 mg Retatrutide — Intermediate Escalation Step",
          paragraphs: [
            "The **6 mg dose** appears in Phase 3 escalation as an intermediate step between 4 mg and 9 mg.",
            "It should not be confused with the Phase 2 target-dose groups.",
          ],
          glanceTable: {
            title: "6 mg at a Glance",
            rows: [
              ["**Dose**", "6 mg weekly"],
              ["**Role**", "Intermediate escalation"],
              ["**Typical Phase 3 timing**", "Weeks 9–12"],
              ["**Phase 2 target dose?**", "No"],
              ["**Next escalation step**", "9 mg"],
              ["**FDA-approved dose?**", "No"],
            ],
          },
          paragraphsAfter: [
            "Because 6 mg was not a standalone target arm in the landmark Phase 2 obesity trial, it would be misleading to assign the 6 mg dose the same dose-specific efficacy and adverse-event percentages reported for the 4 mg, 8 mg or 12 mg Phase 2 groups.",
          ],
        },
        {
          title: "9 mg Retatrutide — Higher Phase 3 Dose",
          paragraphs: [
            "The Phase 3 program introduced **9 mg** in place of the 8 mg target used in the Phase 2 obesity study.",
            "Nine milligrams can serve as a target dose or an escalation step toward 12 mg, depending on the trial arm.",
          ],
          glanceTable: {
            title: "9 mg at a Glance",
            rows: [
              ["**Dose**", "9 mg weekly"],
              ["**Role**", "Target or escalation dose"],
              ["**Typical escalation timing**", "Around weeks 13–16"],
              ["**Phase 2 equivalent?**", "Phase 2 studied 8 mg, not 9 mg"],
              ["**Next step for highest-dose arm**", "12 mg"],
              ["**FDA-approved dose?**", "No"],
            ],
          },
          paragraphsAfter: [
            "Because Phase 2 studied 8 mg rather than 9 mg, Phase 2 8 mg efficacy and adverse-event rates should **not simply be relabeled as 9 mg data**.",
          ],
        },
        {
          title: "12 mg Retatrutide — Highest Studied Target Dose",
          paragraphs: [
            "**12 mg once weekly** is the highest target dose evaluated in the major retatrutide obesity trials.",
            "In Phase 2, participants assigned to the 12 mg group started at 2 mg and gradually escalated.",
            "Average body-weight reduction reached:",
          ],
          bullets: ["**17.5% at week 24**", "**24.2% at week 48**"],
          tables: [
            {
              caption: "Phase 2 12 mg Safety Data",
              headers: ["Adverse Event", "12 mg Target Group"],
              align: ["left", "right"],
              rows: [
                ["**Any adverse event**", "92%"],
                ["**Nausea**", "45%"],
                ["**Decreased appetite**", "29%"],
                ["**Vomiting**", "19%"],
                ["**Constipation**", "16%"],
                ["**Diarrhea**", "15%"],
                ["**Fatigue**", "10%"],
                ["**Early satiety**", "10%"],
                ["**Increased lipase**", "8%"],
                ["**Discontinued due to adverse event**", "16%"],
              ],
            },
          ],
          extraParagraphs: [
            "These percentages describe the **12 mg treatment arm across the trial**, not necessarily adverse events occurring only after participants reached 12 mg.",
            "That distinction matters because gastrointestinal adverse events occurred predominantly during dose escalation.",
          ],
        },
      ],
    },
    {
      id: "weight-loss-by-dose",
      title: "Retatrutide Weight Loss by Dose",
      paragraphs: [
        "The 2023 Phase 2 obesity trial randomized 338 adults to placebo or several retatrutide treatment arms.",
        "A clear dose-response relationship emerged.",
      ],
      widget: "weight-loss-chart",
      subsections: [
        {
          title: "Average Weight Loss",
          tables: [
            {
              headers: ["Target Dose", "Week 24", "Week 48"],
              align: ["right", "right", "right"],
              rows: [
                ["**1 mg**", "−7.2%", "−8.7%"],
                ["**4 mg**", "−12.9%", "−17.1%"],
                ["**8 mg**", "−17.3%", "−22.8%"],
                ["**12 mg**", "−17.5%", "**−24.2%**"],
                ["**Placebo**", "−1.6%", "−2.1%"],
              ],
            },
          ],
          paragraphsAfter: [
            "The highest-dose group had not clearly reached a weight-loss plateau at week 48, suggesting that the full magnitude and duration of effect required further study.",
          ],
        },
      ],
    },
    {
      id: "weight-loss-thresholds",
      title: "How Many Participants Lost 5%, 10% or 15%?",
      paragraphs: [
        "Another way to interpret the Phase 2 results is to look at the percentage of participants reaching clinically significant weight-loss thresholds at 48 weeks.",
      ],
      tables: [
        {
          headers: ["Target Dose", "Lost ≥5%", "Lost ≥10%", "Lost ≥15%"],
          align: ["right", "right", "right", "right"],
          rows: [
            ["**4 mg**", "92%", "75%", "60%"],
            ["**8 mg**", "100%", "91%", "75%"],
            ["**12 mg**", "**100%**", "**93%**", "**83%**"],
            ["**Placebo**", "27%", "9%", "2%"],
          ],
        },
      ],
      paragraphsAfter: [
        "In the 12 mg group, **83% of participants lost at least 15% of their starting body weight by week 48.**",
        "Additionally, 26% of participants in the 12 mg group experienced body-weight reductions of **30% or more**.",
        "These are clinical-trial averages and response rates. They do not predict an individual person's outcome.",
      ],
    },
    {
      id: "side-effects",
      title: "Retatrutide Side Effects by Dose",
      paragraphs: [
        "Retatrutide's most frequently reported adverse events in Phase 2 were gastrointestinal.",
        "Importantly, the study separated some groups by **target dose and initial dose**.",
        "The table below preserves that distinction.",
      ],
      widget: "adverse-events-toggle",
      subsections: [
        {
          title: "What the table shows",
          paragraphs: ["Three patterns stand out:"],
          extraParagraphs: [
            "**1. Gastrointestinal side effects increased with exposure.**",
            "The highest-dose groups generally experienced more adverse events than lower-dose groups.",
            "**2. Starting dose mattered.**",
            "The most dramatic example was the 8 mg target group: nausea occurred in **17%** of participants beginning at 2 mg versus **60%** of participants beginning at 4 mg.",
            "**3. Side effects clustered around escalation.**",
            "The Phase 2 investigators reported that gastrointestinal adverse events occurred predominantly during dose escalation and were generally mild to moderate.",
          ],
        },
      ],
    },
    {
      id: "other-safety",
      title: "Other Retatrutide Safety Findings",
      paragraphs: [
        "Gastrointestinal symptoms were not the only safety signals observed.",
      ],
      subsections: [
        {
          title: "Heart Rate",
          paragraphs: [
            "Retatrutide produced **dose-dependent increases in heart rate**.",
            "Heart-rate increases peaked around week 24 and subsequently declined.",
          ],
        },
        {
          title: "Skin Sensitivity and Hyperesthesia",
          paragraphs: [
            "Cutaneous hyperesthesia and related skin-sensitivity events were reported in approximately **7% of participants receiving retatrutide versus 1% receiving placebo** in Phase 2.",
            "These events were not reported as severe or serious and did not lead to treatment discontinuation.",
            "Later Phase 3 research has also drawn attention to sensory symptoms described as dysesthesia.",
          ],
        },
        {
          title: "Pancreatic Enzymes",
          paragraphs: [
            "Increases in amylase and lipase occurred during the Phase 2 study and were generally asymptomatic.",
            "One serious adverse event of acute pancreatitis was reported.",
          ],
        },
        {
          title: "Liver Enzymes",
          paragraphs: [
            "Transient ALT elevations greater than three times the upper limit of normal occurred in approximately 1% of retatrutide-treated participants.",
            "Mean ALT and AST levels were unchanged or lower by week 48.",
          ],
        },
        {
          title: "Serious Adverse Events",
          paragraphs: [
            "Serious adverse events occurred in approximately **4% of participants receiving retatrutide and 4% receiving placebo** in Phase 2.",
            "This does not mean the overall adverse-event profiles were identical: total adverse events and gastrointestinal events were substantially more frequent in several retatrutide groups.",
          ],
        },
      ],
    },
    {
      id: "starting-dose-mattered",
      title: "Why Starting at a Lower Dose Mattered",
      paragraphs: [
        "One of the most useful findings from Phase 2 wasn't simply that retatrutide caused weight loss.",
        "It was that researchers could compare **different paths to the same target dose**.",
        "Consider the 8 mg groups:",
      ],
      tables: [
        {
          caption: "Same Target Dose, Different Starting Dose",
          headers: ["", "2 mg Start", "4 mg Start"],
          align: ["left", "right", "right"],
          rows: [
            ["**Target dose**", "8 mg", "8 mg"],
            ["**Nausea**", "17%", "60%"],
            ["**Vomiting**", "6%", "26%"],
            ["**48-week weight change**", "−21.7%", "−23.9%"],
          ],
        },
      ],
      paragraphsAfter: [
        "Both groups ultimately received an 8 mg target dose.",
        "But their adverse-event profiles were markedly different.",
        "This is strong evidence for the role of **gradual dose escalation in tolerability**, and it helped inform later clinical development.",
      ],
    },
    {
      id: "phase-3-results",
      title: "Phase 3 Retatrutide Research",
      paragraphs: [
        "Retatrutide has progressed into Lilly's Phase 3 **TRIUMPH clinical-development program**, studying the drug across obesity, overweight and several obesity-related conditions.",
        "Phase 3 topline results began arriving in 2026.",
        "Because Phase 3 studies differ in population, duration and design from the original Phase 2 obesity trial, results should not be treated as direct head-to-head dose comparisons.",
        "They nevertheless provide a more current picture of retatrutide's efficacy and safety as development progresses.",
      ],
      notes: [
        "**Important:** some Phase 3 results remain topline company-reported findings pending complete peer-reviewed publication. MyPepFinder distinguishes these from published peer-reviewed Phase 2 evidence.",
      ],
    },
    {
      id: "triple-agonist",
      title: "How Retatrutide Works",
      paragraphs: [
        "Retatrutide is often described as a **triple agonist** because a single molecule activates three receptors involved in metabolic regulation:",
      ],
      tables: [
        {
          headers: ["Receptor", "Primary Relevance"],
          rows: [
            [
              "**GLP-1**",
              "Satiety, appetite regulation, glucose-dependent insulin secretion and slowed gastric emptying",
            ],
            ["**GIP**", "Insulin secretion and metabolic signaling"],
            [
              "**Glucagon**",
              "Energy metabolism and hepatic metabolic signaling",
            ],
          ],
        },
      ],
      paragraphsAfter: [
        "This triple mechanism distinguishes retatrutide from currently approved drugs such as semaglutide and tirzepatide.",
      ],
    },
    {
      id: "compare",
      title: "Retatrutide vs. Tirzepatide vs. Semaglutide",
      tables: [
        {
          headers: [
            "Compound",
            "Receptor Targets",
            "Administration*",
            "Status",
          ],
          rows: [
            [
              "**Retatrutide**",
              "GIP + GLP-1 + glucagon",
              "Weekly injection in trials",
              "**Investigational**",
            ],
            [
              "**Tirzepatide**",
              "GIP + GLP-1",
              "Weekly injection",
              "FDA approved for certain indications",
            ],
            [
              "**Semaglutide**",
              "GLP-1",
              "Weekly injection**",
              "FDA approved for certain indications",
            ],
          ],
        },
      ],
      footnotes: [
        "*Comparison refers to relevant injectable formulations/studies.",
        "**Semaglutide also exists in other formulations.",
      ],
      paragraphsAfter: [
        "The additional **glucagon-receptor activity** is the major mechanistic distinction between retatrutide and tirzepatide.",
        "Whether that translates into superior long-term clinical outcomes requires appropriate clinical comparison rather than simply comparing percentages across unrelated trials.",
      ],
    },
    {
      id: "fda-status",
      title: "Is There an FDA-Approved Retatrutide Dose?",
      paragraphs: [
        "**No.**",
        "As of August 2026, retatrutide remains investigational.",
        "There is currently:",
      ],
      bullets: [
        "No FDA-approved retatrutide product",
        "No FDA-approved retatrutide starting dose",
        "No FDA-approved maintenance dose",
        "No FDA-approved titration schedule",
        "No FDA-approved prescribing information",
      ],
      paragraphsAfter: [
        "Numbers such as **2 mg, 4 mg, 6 mg, 8 mg, 9 mg and 12 mg** refer to doses appearing in clinical research.",
        "They should not be interpreted as instructions for self-administration.",
      ],
    },
  ],
  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "What is the starting dose of retatrutide?",
        answer:
          "In Phase 3 clinical-trial escalation, retatrutide has been initiated at **2 mg once weekly**. Because retatrutide is investigational, there is currently no FDA-approved starting dose.",
      },
      {
        question: "What is the retatrutide dose escalation schedule?",
        answer:
          "The Phase 3 escalation pathway to the highest target dose progresses through **2 mg → 4 mg → 6 mg → 9 mg → 12 mg**, with approximately four weeks at each escalation step.",
      },
      {
        question: "How often is retatrutide given?",
        answer:
          "Retatrutide has been administered **once weekly by subcutaneous injection** in major obesity trials.",
      },
      {
        question: "What is the maximum retatrutide dose?",
        answer:
          "The highest target dose evaluated in major Phase 2 and Phase 3 obesity trials is **12 mg once weekly**.",
      },
      {
        question: "How long does it take to reach 12 mg?",
        answer:
          "Under the Phase 3 escalation pathway, participants assigned to 12 mg progress through four-week stages at 2 mg, 4 mg, 6 mg and 9 mg before reaching 12 mg. That places the beginning of the 12 mg stage at approximately **week 17**.",
      },
      {
        question: "Why are there both 8 mg and 9 mg retatrutide doses online?",
        answer:
          "They come from different stages of clinical development. The Phase 2 obesity study evaluated **8 mg** as a target dose. Phase 3 development subsequently incorporated **9 mg**. They should not be treated as interchangeable trial arms.",
      },
      {
        question: "How much weight did people lose on 12 mg retatrutide?",
        answer:
          "In the Phase 2 obesity trial, the 12 mg group experienced average body-weight reductions of **17.5% at 24 weeks and 24.2% at 48 weeks**.",
      },
      {
        question: "How much weight did people lose on 8 mg?",
        answer:
          "The combined Phase 2 8 mg groups experienced average reductions of **17.3% at 24 weeks and 22.8% at 48 weeks**.",
      },
      {
        question: "Does a higher retatrutide dose cause more side effects?",
        answer:
          "Phase 2 results showed that gastrointestinal adverse events generally occurred more frequently at higher doses. Starting dose also mattered: beginning at 2 mg rather than 4 mg partially mitigated gastrointestinal adverse events.",
      },
      {
        question: "What are the most common retatrutide side effects?",
        answer:
          "The most frequently reported adverse events in Phase 2 were gastrointestinal, particularly **nausea, diarrhea, vomiting and constipation**. Decreased appetite, fatigue, early satiety and skin-sensitivity symptoms were also reported.",
      },
      {
        question: "Does retatrutide cause nausea?",
        answer:
          "Yes. Nausea was one of the most frequently reported adverse events in Phase 2. Its frequency varied substantially according to treatment arm. For example, nausea occurred in **17% of the 8 mg group starting at 2 mg compared with 60% of the 8 mg group starting at 4 mg**.",
      },
      {
        question: "Does retatrutide increase heart rate?",
        answer:
          "Phase 2 research observed **dose-dependent increases in heart rate**, which peaked around week 24 and subsequently declined.",
      },
      {
        question: "What is retatrutide dysesthesia?",
        answer:
          "Dysesthesia refers to altered or unusual sensations, which may include tingling, burning, heightened sensitivity or pins-and-needles sensations. Sensory adverse events have been reported during retatrutide research and have received additional attention in Phase 3 development.",
      },
      {
        question: "Is 6 mg a retatrutide maintenance dose?",
        answer:
          "Six milligrams appears as an **intermediate escalation step in Phase 3 protocols**. It was not one of the target-dose groups in the landmark Phase 2 obesity trial.",
      },
      {
        question: "Can someone stay at a lower retatrutide dose?",
        answer:
          "Clinical trials include different assigned target doses, so not every participant progresses to 12 mg. However, there is currently no FDA-approved prescribing information defining individualized maintenance-dose selection.",
      },
      {
        question: "Is retatrutide FDA approved?",
        answer: "**No.** Retatrutide remains an investigational drug.",
      },
    ],
  },
  sources: {
    title: "Retatrutide Clinical Evidence",
    items: [
      {
        authors: "Jastreboff AM, Kaplan LM, Frías JP, et al.",
        title:
          "Triple-Hormone-Receptor Agonist Retatrutide for Obesity — A Phase 2 Trial.",
        detail: "New England Journal of Medicine. 2023;389:514–526.",
        doi: "DOI: 10.1056/NEJMoa2301972",
        href: "https://www.nejm.org/doi/full/10.1056/NEJMoa2301972",
      },
    ],
    glanceTable: {
      title: "Study at a Glance",
      rows: [
        ["**Participants**", "338 adults"],
        [
          "**Study design**",
          "Randomized, double-blind, placebo-controlled",
        ],
        ["**Duration**", "48 weeks treatment"],
        ["**Target doses**", "1, 4, 8, 12 mg"],
        ["**Administration**", "Once-weekly subcutaneous injection"],
        [
          "**Largest mean weight reduction**",
          "−24.2% at 48 weeks in 12 mg group",
        ],
      ],
    },
  },
  researchStatus: {
    title: "Research Status",
    paragraphs: [
      "Retatrutide is still under clinical development.",
      "The strongest publicly available evidence includes:",
    ],
    numbered: [
      "**Peer-reviewed Phase 2 clinical-trial data**, including detailed dose-specific efficacy and safety results.",
      "**Phase 3 TRIUMPH results**, some of which have been reported as topline findings and/or presented at scientific meetings.",
      "**Ongoing regulatory development**, with no FDA-approved retatrutide product or prescribing information currently available.",
    ],
    paragraphsAfter: [
      "MyPepFinder separates **published evidence, clinical-trial protocols and preliminary/topline results** so that research-stage findings are not presented as established prescribing guidance.",
    ],
  },
  safety: {
    title: "Important Safety Information",
    paragraphs: [
      "Retatrutide is an investigational drug and has not been approved by the FDA.",
      "The information on this page describes clinical research and is provided for educational and research-reference purposes. Clinical-trial doses, escalation schedules and outcomes are **not individualized dosing instructions**.",
      "Products sold online claiming to contain retatrutide are not equivalent to an FDA-approved retatrutide medication, because no such approved product currently exists.",
    ],
  },
};
