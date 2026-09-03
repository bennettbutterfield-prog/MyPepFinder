/**
 * Tesamorelin (Egrifta WR / Egrifta SV) dosage, results, and safety guide.
 */

export const TESAMORELIN_FORMULATIONS = [
  {
    id: "egrifta-wr",
    label: "Egrifta WR",
    dose: "1.28 mg",
    frequency: "Once daily",
    route: "Subcutaneous injection into the abdomen",
    injectionVolume: "0.16 mL",
    vialStrength: "11.6 mg multi-dose vial",
    reconstitution: "Mix one vial with 1.3 mL supplied bacteriostatic water",
    concentration: "8 mg/mL",
    vialUse: "Seven consecutive daily doses",
    storage:
      "Store at 20–25°C (68–77°F) after mixing; discard after 7 days; do not freeze",
    mixingFrequency: "Weekly",
    diluent: "Bacteriostatic water",
    warning:
      "Egrifta WR is the newer concentrated formulation. Do not use Egrifta SV syringe volumes, diluent, storage rules, or doses with Egrifta WR — the products are not substitutable.",
    reconstitutionSteps: [
      "Use only the bacteriostatic water supplied with Egrifta WR",
      "Mix 11.6 mg vial with 1.3 mL diluent → 8 mg/mL concentration",
      "Swirl gently — do not shake reconstituted solution",
      "Withdraw 0.16 mL (1.28 mg) for each daily abdominal injection",
      "One vial supplies seven consecutive daily doses",
      "Discard reconstituted vial 7 days after mixing at room temperature",
    ],
  },
  {
    id: "egrifta-sv",
    label: "Egrifta SV",
    dose: "1.4 mg",
    frequency: "Once daily",
    route: "Subcutaneous injection into the abdomen",
    injectionVolume: "0.35 mL",
    vialStrength: "2 mg single-dose vial",
    reconstitution: "Mix one vial with 0.5 mL supplied sterile water",
    concentration: "4 mg/mL",
    vialUse: "Use immediately; discard remainder",
    storage:
      "Do not store, refrigerate, or freeze the reconstituted dose",
    mixingFrequency: "Daily",
    diluent: "Sterile water",
    warning:
      "Egrifta SV must be mixed and injected immediately. Do not use Egrifta WR volumes, diluent, or storage rules with Egrifta SV — the products are not substitutable.",
    reconstitutionSteps: [
      "Use only the sterile water supplied with Egrifta SV",
      "Mix 2 mg vial with 0.5 mL diluent → 4 mg/mL concentration",
      "Withdraw 0.35 mL (1.4 mg) and inject immediately",
      "Discard any unused reconstituted solution — do not store or refrigerate",
      "Mix a fresh vial for each daily dose",
    ],
  },
];

export const TESAMORELIN_VAT_TIMELINE = [
  { week: 0, vatIndex: 100, label: "Baseline" },
  { week: 26, vatIndex: 85, label: "Week 26 (−15%)" },
  { week: 52, vatIndex: 82, label: "Week 52 (−18%)" },
  { week: 78, vatIndex: 95, label: "After withdrawal", branch: true },
];

export const TESAMORELIN_FAT_COMPARTMENTS = [
  {
    id: "vat",
    label: "Visceral abdominal fat",
    effect: "Reduced",
    pct: -15,
    color: "#7c3aed",
    description: "Deep fat surrounding internal organs — the primary trial target",
  },
  {
    id: "sat",
    label: "Subcutaneous abdominal fat",
    effect: "Largely preserved",
    pct: 0,
    color: "#cbd5e1",
    description: "Pinchable fat under the skin — little meaningful reduction in trials",
  },
  {
    id: "weight",
    label: "Total body weight",
    effect: "Approximately neutral",
    pct: 0,
    color: "#94a3b8",
    description: "Not a weight-loss medication",
  },
  {
    id: "lean",
    label: "Lean body mass",
    effect: "Small average increase",
    pct: 2,
    color: "#10b981",
    description: "Modest lean-mass signal in pooled phase 3 analyses",
  },
];

export const TESAMORELIN_AE_FULL = {
  headers: ["Adverse reaction (week 26)", "Tesamorelin (n=543)", "Placebo (n=263)"],
  rows: [
    ["Injection-site reaction", "17%", "6%"],
    ["Arthralgia", "16%", "11%"],
    ["Pain in extremity", "6%", "5%"],
    ["Myalgia", "6%", "2%"],
    ["Peripheral edema", "6%", "2%"],
  ],
};

export const TESAMORELIN_AE_SIMPLE = [
  {
    title: "Injection-site reactions",
    takeaway:
      "Redness, itching, pain, irritation, swelling, bruising, or urticaria at the injection site occurred in 17% with tesamorelin versus 6% with placebo.",
  },
  {
    title: "Fluid retention and musculoskeletal pain",
    takeaway:
      "Growth-hormone-related fluid retention can contribute to peripheral edema (6% vs 2%), arthralgia (16% vs 11%), myalgia (6% vs 2%), and carpal tunnel symptoms.",
  },
  {
    title: "IGF-1 elevation",
    takeaway:
      "Raising IGF-1 is an expected pharmacologic effect. Monitor regularly and consider discontinuation when elevations persist — particularly above 3 standard deviation scores.",
  },
  {
    title: "Glucose intolerance and malignancy precautions",
    takeaway:
      "Tesamorelin can worsen glucose regulation or precipitate diabetes. Active malignancy is contraindicated; preexisting malignancy should be inactive before initiation.",
  },
  {
    title: "Hypersensitivity",
    takeaway:
      "Systemic reactions including rash and urticaria have occurred. Seek immediate care for serious allergic symptoms.",
  },
];

export const TESAMORELIN_MONITORING = [
  {
    parameter: "IGF-1",
    why: "Detect persistent excessive stimulation",
    flag: "Persistent elevation above 3 SDS warrants clinical review",
  },
  {
    parameter: "Fasting glucose / HbA1c",
    why: "Detect new or worsening glucose intolerance",
    flag: "Evaluate before treatment and monitor during therapy",
  },
  {
    parameter: "Waist circumference or VAT imaging",
    why: "Determine meaningful visceral-fat response",
    flag: "Reconsider treatment if no clear VAT reduction",
  },
  {
    parameter: "Edema, joint pain, paresthesia",
    why: "Identify fluid-retention and carpal-tunnel-type effects",
    flag: "Often transient or resolve after discontinuation",
  },
  {
    parameter: "Injection sites",
    why: "Detect local reactions and reinforce site rotation",
    flag: "Rotate across different abdominal areas",
  },
  {
    parameter: "Malignancy history",
    why: "Growth-factor signaling creates a specific precaution",
    flag: "Discontinue if recurrent malignancy appears",
  },
];

export const TESAMORELIN_USES_MATRIX = [
  {
    use: "HIV-associated excess visceral abdominal fat",
    evidence: "High",
    population: "Adults with HIV lipodystrophy",
    result: "≈15% VAT reduction at 26 wks; ≈18% at 52 wks",
    fda: "Approved",
    uncertainty: "Approved indication only",
  },
  {
    use: "General obesity / weight management",
    evidence: "Low / absent",
    population: "Not studied for obesity indication",
    result: "Generally weight neutral",
    fda: "Not approved",
    uncertainty: "Do not generalize VAT data to obesity treatment",
  },
  {
    use: "Isolated visceral fat without HIV",
    evidence: "Insufficient",
    population: "No pivotal trials outside HIV lipodystrophy",
    result: "—",
    fda: "Not approved",
    uncertainty: "Approved population is HIV-specific",
  },
  {
    use: "HIV-associated fatty liver (NAFLD/MASLD)",
    evidence: "Moderate",
    population: "Adults with HIV and NAFLD",
    result: "≈37% relative hepatic fat reduction in 12-month trial",
    fda: "Not approved",
    uncertainty: "Randomized evidence exists but indication is unapproved",
  },
  {
    use: "Cognition / MCI",
    evidence: "Low to moderate",
    population: "Older adults and MCI in short trials",
    result: "Favorable executive-function signal in one trial",
    fda: "Not approved",
    uncertainty: "Not replicated as an approved cognitive therapy",
  },
  {
    use: "Bodybuilding / anti-aging",
    evidence: "Insufficient",
    population: "No controlled evidence",
    result: "—",
    fda: "Not approved",
    uncertainty: "Unsupported and unapproved uses",
  },
];

export const TESAMORELIN_TRIALS = [
  {
    id: "phase3-2007",
    name: "Pivotal 26-week phase 3",
    topic: "VAT",
    population: "HIV lipodystrophy",
    duration: "26 weeks",
    phase: "Phase 3",
    formulation: "Historical 2 mg daily",
    authors: "Falutz J et al.",
    journal: "New England Journal of Medicine, 2007",
    participants: "412 adults with HIV and excess abdominal fat",
    design: "Randomized, double-blind, placebo-controlled",
    result: "≈15% VAT reduction with selective subcutaneous fat preservation",
    limitation: "Historical formulation; HIV-lipodystrophy population only",
    href: "https://www.nejm.org/doi/full/10.1056/NEJMoa072375",
  },
  {
    id: "pooled-2010",
    name: "Pooled phase 3 analysis",
    topic: "VAT",
    population: "HIV lipodystrophy",
    duration: "26–52 weeks",
    phase: "Phase 3",
    formulation: "Historical 2 mg daily",
    authors: "Falutz J et al.",
    journal: "Journal of Clinical Endocrinology & Metabolism, 2010",
    participants: "816 randomized across two phase 3 trials",
    design: "Pooled randomized placebo-controlled plus extension",
    result: "≈15% VAT at 26 wks; ≈18% at 52 wks; regain after withdrawal",
    limitation: "Post-randomization extension groups; historical formulation",
    href: "https://pubmed.ncbi.nlm.nih.gov/20554713/",
  },
  {
    id: "jama-2014",
    name: "Visceral and liver fat",
    topic: "Liver fat",
    population: "HIV lipodystrophy",
    duration: "6 months",
    phase: "Phase 3",
    formulation: "Historical 2 mg daily",
    authors: "Stanley TL et al.",
    journal: "JAMA, 2014",
    participants: "48 adults with HIV and abdominal fat accumulation",
    design: "Randomized, double-blind, placebo-controlled",
    result: "VAT −42 cm² treatment difference; liver fat −2.9 percentage points",
    limitation: "Small study; HIV-specific population",
    href: "https://jamanetwork.com/journals/jama/fullarticle/1889139",
  },
  {
    id: "lancet-hiv-2019",
    name: "HIV-associated NAFLD",
    topic: "Liver fat",
    population: "HIV + NAFLD",
    duration: "12 months",
    phase: "Phase 3",
    formulation: "Historical 2 mg daily",
    authors: "Stanley TL et al.",
    journal: "Lancet HIV, 2019",
    participants: "61 randomized; 53 completed follow-up",
    design: "Randomized, double-blind, multicenter, placebo-controlled",
    result: "≈4.1-point absolute and 37% relative hepatic fat reduction; less fibrosis progression",
    limitation: "Not powered for long-term liver clinical events; not non-HIV population",
    href: "https://pubmed.ncbi.nlm.nih.gov/31611038/",
  },
  {
    id: "cognition-2012",
    name: "Cognition in older adults",
    topic: "Cognition",
    population: "Older adults / MCI",
    duration: "20 weeks",
    phase: "Phase 2",
    formulation: "GHRH/tesamorelin 1 mg daily",
    authors: "Baker LD et al.",
    journal: "Archives of Neurology, 2012",
    participants: "152 randomized older adults",
    design: "Randomized, double-blind, placebo-controlled",
    result: "Favorable composite cognitive effect, strongest for executive function",
    limitation: "Short study; not an approved cognitive therapy; increased insulin in MCI group",
    href: "https://pubmed.ncbi.nlm.nih.gov/22869065/",
  },
  {
    id: "neurocog-2025",
    name: "HIV neurocognitive pilot",
    topic: "Cognition",
    population: "HIV neurocognitive impairment",
    duration: "6 months",
    phase: "Pilot",
    formulation: "Tesamorelin",
    authors: "2025 publication",
    journal: "Small randomized pilot",
    participants: "Underpowered sample",
    design: "Randomized pilot study",
    result: "Trend toward improved neurocognitive performance",
    limitation: "Insufficient sample size; no definitive efficacy conclusion",
    href: "https://pubmed.ncbi.nlm.nih.gov/39813152/",
  },
  {
    id: "triumph",
    name: "TRIUMPH exercise trial",
    topic: "Muscle / exercise",
    population: "HIV lipodystrophy",
    duration: "Ongoing",
    phase: "Phase 3",
    formulation: "Current formulations",
    authors: "ClinicalTrials.gov NCT06554717",
    journal: "Ongoing trial",
    participants: "Enrolling",
    design: "Tesamorelin plus exercise",
    result: "Results pending",
    limitation: "Not yet published",
    href: "https://clinicaltrials.gov/study/NCT06554717",
  },
];

export const TESAMORELIN_DOSAGE_GUIDE = {
  title:
    "Tesamorelin Dosage, Results & Side Effects: Complete Egrifta WR and Egrifta SV Guide",
  updated: "Updated August 2026",
  callout:
    "**FDA status:** Tesamorelin is an FDA-approved prescription growth hormone–releasing factor analog sold as **Egrifta WR** and **Egrifta SV**. It is approved only to reduce excess abdominal fat in adults with HIV-associated lipodystrophy. It is **not approved for general weight loss, obesity, bodybuilding, anti-aging, growth hormone deficiency, fatty liver disease, or cognitive impairment**. The two current formulations have different doses, concentrations, mixing instructions, storage rules, and injection volumes and are not substitutable.",
  intro: [
    "Tesamorelin is a 44-amino-acid analog of human growth hormone–releasing hormone. It stimulates the pituitary gland to release endogenous growth hormone in a pulsatile manner, which raises insulin-like growth factor 1 (IGF-1) and changes fat metabolism. In phase 3 trials involving adults with HIV-associated lipodystrophy, tesamorelin reduced visceral abdominal fat by approximately **15% at 26 weeks** and **18% at 52 weeks** while having little effect on subcutaneous abdominal fat or total body weight.",
    "The current Egrifta WR dose is **1.28 mg subcutaneously once daily**. Egrifta SV is **1.4 mg once daily**. Common adverse reactions include injection-site reactions, joint pain, extremity pain, muscle pain, and peripheral edema. Clinically important risks include elevated IGF-1, glucose intolerance or diabetes, fluid retention, hypersensitivity, and concern about malignancy because growth hormone and IGF-1 can promote tissue growth.",
  ],
  glance: {
    title: "30-Second Summary",
    table: {
      headers: ["Question", "Answer"],
      rows: [
        ["**What is it?**", "A synthetic growth hormone–releasing hormone analog"],
        ["**Brand names**", "Egrifta WR and Egrifta SV"],
        [
          "**Approved use**",
          "Excess abdominal fat in adults with HIV-associated lipodystrophy",
        ],
        ["**Administration**", "Subcutaneous abdominal injection once daily"],
        [
          "**Current doses**",
          "Egrifta WR 1.28 mg daily; Egrifta SV 1.4 mg daily",
        ],
        [
          "**Strongest result**",
          "Approximately 15% lower visceral adipose tissue at 26 weeks and 18% at 52 weeks",
        ],
        [
          "**Effect on body weight**",
          "Generally weight neutral; not a weight-loss medication",
        ],
        [
          "**Main side effects**",
          "Injection-site reactions, arthralgia, myalgia, extremity pain, and edema",
        ],
        [
          "**Main monitoring**",
          "IGF-1 and glucose status; clinical response and adverse effects",
        ],
        ["**FDA status**", "Approved for one specific HIV-lipodystrophy indication"],
      ],
    },
  },
  sections: [
    {
      id: "what-is",
      title: "What Is Tesamorelin?",
      paragraphs: [
        "Tesamorelin is a synthetic analog of the 44-amino-acid human growth hormone–releasing factor, also called growth hormone–releasing hormone or GHRH. A trans-3-hexenoic acid group is attached to improve resistance to enzymatic degradation compared with native GHRH.",
        "Tesamorelin does not provide growth hormone directly. It stimulates a functioning pituitary gland to release the body's own growth hormone, preserving more physiological pulsatility and feedback regulation than direct recombinant growth hormone administration.",
      ],
      tables: [
        {
          headers: ["Property", "Description"],
          rows: [
            ["Compound type", "Peptide hormone analog"],
            ["Amino-acid length", "44 amino acids"],
            ["Primary receptor", "GHRH receptor on pituitary somatotroph cells"],
            ["Downstream hormones", "Growth hormone and IGF-1"],
            [
              "Approved population",
              "Adults with HIV and lipodystrophy who have excess abdominal fat",
            ],
            ["Original U.S. approval", "2010"],
            ["Egrifta SV approval", "2019"],
            ["Egrifta WR approval", "March 2025"],
          ],
        },
      ],
    },
    {
      id: "hiv-lipodystrophy",
      title: "What Is HIV-Associated Lipodystrophy?",
      paragraphs: [
        "HIV-associated lipodystrophy is an abnormal redistribution of body fat that may include excess visceral abdominal fat, loss of subcutaneous fat, or both. Visceral adipose tissue surrounds internal organs and is not the same as the pinchable subcutaneous fat directly under the skin.",
        "Tesamorelin's approval is specifically based on reducing **excess visceral abdominal fat**. It does not treat HIV, replace antiretroviral therapy, or reliably correct every form of fat redistribution. There are no data showing that it improves adherence to antiretroviral medication.",
      ],
    },
    {
      id: "dosage",
      title: "Tesamorelin Dosage",
      paragraphs: [
        "There are two current FDA-approved formulations with different doses, concentrations, diluents, mixing schedules, and storage rules. They are not substitutable.",
      ],
      widget: "tesamorelin-formulation-selector",
      subsections: [
        {
          title: "Egrifta WR vs Egrifta SV",
          tables: [
            {
              caption: "Formulation comparison",
              headers: ["Feature", "Egrifta WR", "Egrifta SV"],
              align: ["left", "right", "right"],
              rows: [
                ["Daily tesamorelin dose", "1.28 mg", "1.4 mg"],
                ["Injection volume", "0.16 mL", "0.35 mL"],
                ["Mixing frequency", "Weekly", "Daily"],
                ["Vial", "11.6 mg multi-dose", "2 mg single-dose"],
                ["Diluent", "Bacteriostatic water", "Sterile water"],
                [
                  "Reconstituted storage",
                  "Room temperature for up to 7 days",
                  "Use immediately",
                ],
              ],
            },
          ],
          notes: [
            "The dose difference does not mean Egrifta WR is weaker. The formulations were developed to provide comparable exposure, but their concentration and handling differ. Do not use one product's syringe volume, diluent, storage rule, or dose with the other.",
          ],
        },
        {
          title: "Administration essentials",
          bullets: [
            "Inject into abdominal subcutaneous tissue.",
            "Rotate sites across different areas of the abdomen.",
            "Do not inject into the navel, scar tissue, or bruised skin.",
            "Do not shake reconstituted Egrifta WR; swirl gently as directed.",
            "Use only the diluent supplied for that formulation.",
            "Inspect the solution. It should be clear and colorless without visible particles.",
            "Contact the prescriber for missed-dose instructions; do not double doses without direction.",
          ],
        },
      ],
      widgetAfter: "tesamorelin-reconstitution",
    },
    {
      id: "dose-escalation",
      title: "Does Tesamorelin Require Dose Escalation?",
      paragraphs: [
        "No standard FDA-approved titration schedule is used. Tesamorelin is initiated at the full formulation-specific dose: 1.28 mg daily for Egrifta WR or 1.4 mg daily for Egrifta SV.",
        "This differs from GLP-1 medications such as semaglutide or tirzepatide, which use gradual escalation to reduce gastrointestinal adverse effects. There is no evidence-based tesamorelin titration timeline from unapproved clinic protocols.",
      ],
    },
    {
      id: "dose-levels",
      title: "Why the Egrifta Doses Are Different",
      paragraphs: [
        "Egrifta WR is a more concentrated formulation developed to reduce injection volume and mixing burden. Its 1.28 mg dose was designed to provide exposure comparable to the historical 2 mg original Egrifta formulation used in the pivotal phase 3 trials. Egrifta SV's 1.4 mg dose is likewise formulation specific.",
      ],
      tables: [
        {
          headers: [
            "Historical or current formulation",
            "Nominal daily dose",
            "Role",
          ],
          align: ["left", "right", "left"],
          rows: [
            [
              "Original Egrifta",
              "2 mg",
              "Formulation used in pivotal efficacy trials; no longer the current dosing reference",
            ],
            [
              "Egrifta SV",
              "1.4 mg",
              "Current daily-mixed formulation",
            ],
            [
              "Egrifta WR",
              "1.28 mg",
              "Current weekly-mixed, lower-volume formulation",
            ],
          ],
        },
      ],
      paragraphsAfter: [
        "Comparing nominal milligrams without considering bioavailability and formulation can create a false impression that the modern products use clinically smaller therapy.",
      ],
    },
    {
      id: "results",
      title: "Tesamorelin Results",
      paragraphs: [
        "Two large randomized phase 3 trials enrolled adults with HIV-associated lipodystrophy and excess abdominal fat. The pooled program included 816 randomized participants; 543 received tesamorelin and 263 received placebo during the first 26 weeks.",
        "The most accurate summary is that tesamorelin **redistributes body composition by selectively reducing visceral abdominal fat** in the approved population. It is inaccurate to describe it simply as producing 15–18% body-weight loss.",
      ],
      widget: "tesamorelin-vat-chart",
      subsections: [
        {
          title: "Phase 3 visceral-fat results",
          tables: [
            {
              headers: ["Outcome", "Week 26", "Week 52 with continued treatment"],
              align: ["left", "right", "right"],
              rows: [
                [
                  "Mean visceral adipose tissue change",
                  "Approximately −15%",
                  "Approximately −18%",
                ],
                [
                  "Subcutaneous abdominal fat",
                  "Little or no meaningful reduction",
                  "Reduction remained selective for VAT",
                ],
                [
                  "Body weight",
                  "No clinically meaningful overall loss",
                  "Generally weight neutral",
                ],
                [
                  "Body image distress",
                  "Improved vs placebo",
                  "Benefit maintained with continued treatment",
                ],
              ],
            },
          ],
        },
        {
          title: "Pooled phase 3 body-composition findings",
          widget: "tesamorelin-fat-compartments",
          tables: [
            {
              headers: ["Measure", "Tesamorelin effect"],
              rows: [
                ["Visceral adipose tissue", "Reduced"],
                ["Waist circumference", "Modestly reduced"],
                ["Trunk fat", "Reduced"],
                ["Subcutaneous abdominal fat", "Largely preserved"],
                ["Lean body mass", "Small average increase in trials"],
                ["Total body weight", "Approximately neutral"],
                ["Triglycerides", "Improved in some analyses"],
                ["Body-image distress", "Improved"],
              ],
            },
          ],
          paragraphsAfter: [
            "In the phase 3 extension, participants who continued tesamorelin maintained or extended visceral-fat reduction. Those switched from tesamorelin to placebo regained visceral fat toward baseline. Tesamorelin therefore changes fat distribution while treatment continues; it has not been shown to permanently reset visceral-fat biology after discontinuation.",
          ],
        },
      ],
    },
    {
      id: "liver-fat",
      title: "Liver-Fat and MASLD/NAFLD Research",
      paragraphs: [
        "Tesamorelin is not FDA approved for fatty liver disease. Human research has nevertheless tested it in people with HIV and liver steatosis.",
      ],
      subsections: [
        {
          title: "Six-month JAMA trial",
          paragraphs: [
            "Forty-eight adults with HIV and abdominal fat accumulation were randomized to tesamorelin or placebo for six months.",
          ],
          tables: [
            {
              headers: [
                "Outcome",
                "Tesamorelin",
                "Placebo",
                "Treatment comparison",
              ],
              align: ["left", "right", "right", "right"],
              rows: [
                ["Visceral adipose tissue", "−34 cm²", "+8 cm²", "−42 cm²"],
                [
                  "Liver lipid-to-water percentage",
                  "Median −2.0 points",
                  "Median +0.9 points",
                  "Net −2.9 points",
                ],
              ],
            },
          ],
          paragraphsAfter: [
            "The study showed reductions in visceral and liver fat with minimal change in subcutaneous fat. It was small and limited to people with HIV.",
          ],
        },
        {
          title: "Twelve-month Lancet HIV trial",
          paragraphs: [
            "In a randomized, double-blind trial of adults with HIV and NAFLD, tesamorelin reduced hepatic fat fraction by an absolute difference of approximately **4.1 percentage points**, corresponding to about a **37% relative reduction** versus placebo. It also reduced progression of liver fibrosis in the trial.",
          ],
          tables: [
            {
              headers: ["Evidence question", "Answer"],
              rows: [
                ["Did liver fat fall?", "Yes, in adults with HIV and NAFLD"],
                [
                  "Was fibrosis progression assessed?",
                  "Yes; progression was less frequent with tesamorelin",
                ],
                ["Is it approved for NAFLD/MASLD or MASH?", "No"],
                [
                  "Does this prove benefit in people without HIV?",
                  "No",
                ],
                [
                  "Does it replace standard liver-disease care?",
                  "No",
                ],
              ],
            },
          ],
        },
      ],
    },
    {
      id: "cognition",
      title: "Cognitive and Brain Research",
      paragraphs: [
        "Tesamorelin has been investigated outside its approved indication because the GHRH–GH–IGF-1 axis may affect brain function.",
        "A 20-week randomized trial in healthy older adults and adults with mild cognitive impairment used daily GHRH/tesamorelin and reported a favorable composite cognitive effect, particularly in executive function. IGF-1 rose by 117%, and fasting insulin rose by 35% in participants with mild cognitive impairment. Adverse events were more frequent with treatment than placebo.",
        "A later small trial in people with HIV-associated neurocognitive impairment found only a **trend** toward improvement and was underpowered. These findings are experimental. Tesamorelin is not approved to improve memory, prevent dementia, or treat cognitive impairment.",
      ],
    },
    {
      id: "side-effects",
      title: "Tesamorelin Side Effects",
      paragraphs: [
        "Injection-site reactions included redness, itching, pain, irritation, swelling, bruising or bleeding, and urticaria. Growth-hormone-related fluid retention can contribute to edema, joint discomfort, muscle discomfort, and carpal tunnel symptoms.",
      ],
      widget: "tesamorelin-adverse-events",
      subsections: [
        {
          title: "Elevated IGF-1",
          paragraphs: [
            "Tesamorelin raises IGF-1 by design. In clinical trials, a substantial proportion of participants developed IGF-1 values above age-adjusted reference ranges.",
            "IGF-1 should be monitored regularly. The current label advises considering discontinuation when elevations persist—particularly above **3 standard deviation scores**—because the long-term effects of sustained high IGF-1 are unknown.",
          ],
        },
        {
          title: "Glucose intolerance and diabetes",
          paragraphs: [
            "Tesamorelin can worsen glucose regulation or precipitate diabetes. Glucose status should be evaluated before treatment and monitored during therapy. Patients with diabetes should also be monitored for development or worsening of diabetic retinopathy.",
            "The phase 3 program found a higher risk of developing diabetes by hemoglobin A1c criteria in tesamorelin-treated participants than placebo. The approved population-specific benefits therefore need to be balanced against glycemic risk rather than assuming that visceral-fat reduction automatically improves glucose control.",
          ],
        },
        {
          title: "Malignancy considerations",
          paragraphs: [
            "Tesamorelin is contraindicated in active malignancy. Preexisting malignancy should be inactive and treatment complete before initiation; discontinue if recurrent malignancy appears.",
            "This is a precaution based on the growth-promoting biology of growth hormone and IGF-1, not proof that tesamorelin causes cancer. Long-term malignancy risk has not been fully characterized.",
          ],
        },
        {
          title: "Other serious warnings and precautions",
          bullets: [
            "**Disrupted hypothalamic-pituitary axis:** Contraindicated with pituitary tumor or surgery, head irradiation, head trauma, or other conditions that disrupt the axis.",
            "**Pregnancy:** Contraindicated. Visceral-fat reduction offers no benefit in pregnancy and may harm the fetus.",
            "**Hypersensitivity:** Systemic reactions including rash and urticaria have occurred; seek immediate care for serious allergic symptoms.",
            "**Fluid retention:** Edema, arthralgia, myalgia, and carpal tunnel syndrome may occur and are often transient or resolve after discontinuation.",
            "**Acute critical illness:** Increased mortality has been reported with pharmacologic growth hormone in critically ill patients; consider discontinuing tesamorelin in critical illness.",
            "**Lactation:** People with HIV should not breastfeed because HIV can be transmitted and the drug's presence in milk is unknown.",
            "**Pediatric use:** Safety and effectiveness have not been established; use is contraindicated with open epiphyses because accelerated linear growth could occur.",
          ],
        },
      ],
      widgetAfter: "tesamorelin-monitoring",
    },
    {
      id: "drug-interactions",
      title: "Drug Interactions",
      paragraphs: [
        "Growth hormone can change the clearance of drugs metabolized by CYP450 enzymes. Clinicians should monitor narrow-therapeutic-index drugs processed by these pathways.",
        "Tesamorelin can affect 11β-hydroxysteroid dehydrogenase type 1 and may alter glucocorticoid metabolism. Patients receiving glucocorticoid replacement may need dose adjustment. A clinical interaction study did not find a significant effect on simvastatin exposure.",
      ],
    },
    {
      id: "monitoring",
      title: "Monitoring During Tesamorelin Treatment",
      paragraphs: [
        "Because long-term cardiovascular safety and benefit are unknown, the label advises carefully reconsidering treatment when no clear reduction in visceral fat is observed.",
      ],
      tables: [
        {
          headers: ["Parameter", "Why it matters"],
          rows: TESAMORELIN_MONITORING.map((m) => [m.parameter, m.why]),
        },
      ],
    },
    {
      id: "how-it-works",
      title: "How Tesamorelin Works",
      paragraphs: [
        "Tesamorelin signals the pituitary gland to release more of the body's own growth hormone. Growth hormone then stimulates liver and tissue production of IGF-1 and promotes fat breakdown. In adults with HIV-associated lipodystrophy, the measurable result is a selective reduction in deep abdominal visceral fat.",
      ],
      widget: "tesamorelin-mechanism",
      subsections: [
        {
          title: "Technical mechanism",
          tables: [
            {
              headers: ["Target or pathway", "Effect"],
              rows: [
                [
                  "Pituitary GHRH receptor",
                  "Activates cyclic-AMP signaling in somatotroph cells",
                ],
                [
                  "Endogenous growth hormone",
                  "Increases amplitude of physiologic GH pulses",
                ],
                ["Hepatic IGF-1 production", "Increases circulating IGF-1"],
                [
                  "Hormone-sensitive lipolysis",
                  "Promotes mobilization of stored triglyceride",
                ],
                [
                  "Visceral adipose tissue",
                  "Preferential reduction in the approved HIV-lipodystrophy population",
                ],
                [
                  "Glucose metabolism",
                  "Can increase glucose intolerance despite reducing visceral fat",
                ],
              ],
            },
          ],
          paragraphsAfter: [
            "Tesamorelin has a short plasma half-life, commonly reported around 26–38 minutes, but its endocrine effects last longer because it triggers downstream growth-hormone pulses and IGF-1 production. A short drug half-life does not mean multiple daily doses are needed; the approved schedule is once daily.",
          ],
        },
      ],
    },
    {
      id: "compare",
      title: "Tesamorelin vs Similar Compounds",
      tables: [
        {
          headers: ["Compound", "Mechanism", "Approved role", "Key difference"],
          rows: [
            [
              "Tesamorelin",
              "GHRH receptor agonist",
              "HIV-associated excess visceral abdominal fat",
              "Stimulates endogenous pulsatile GH; selective VAT evidence",
            ],
            [
              "Sermorelin",
              "Shorter GHRH fragment",
              "No current FDA-approved commercial drug product for anti-aging/body composition",
              "Less direct high-quality VAT evidence; commonly compounded off label",
            ],
            [
              "CJC-1295",
              "Long-acting modified GHRH analog",
              "Investigational/not FDA approved",
              "No approved indication or comparable phase 3 outcome program",
            ],
            [
              "Somatropin",
              "Recombinant human growth hormone",
              "Specific pediatric and adult GH-deficiency indications",
              "Provides GH directly; different risks, kinetics, and indications",
            ],
            [
              "Semaglutide",
              "GLP-1 receptor agonist",
              "Diabetes, weight management, and other product-specific uses",
              "Produces total body-weight loss through appetite and metabolic effects",
            ],
            [
              "Tirzepatide",
              "GIP/GLP-1 receptor agonist",
              "Diabetes, weight management, and OSA",
              "Produces large total weight loss; not selective VAT therapy",
            ],
          ],
        },
      ],
      subsections: [
        {
          title: "Tesamorelin vs sermorelin",
          paragraphs: [
            "Both stimulate the GHRH receptor, but tesamorelin is the compound with FDA approval and phase 3 evidence for HIV-associated visceral adiposity. Sermorelin marketing for anti-aging or fat loss should not be treated as equivalent evidence.",
          ],
        },
        {
          title: "Tesamorelin vs growth hormone",
          paragraphs: [
            "Tesamorelin stimulates endogenous secretion and remains subject to pituitary feedback. Somatropin delivers growth hormone directly. Neither should be assumed safer or interchangeable based only on their position in the same hormonal axis.",
          ],
        },
        {
          title: "Tesamorelin vs GLP-1 medications",
          paragraphs: [
            "Tesamorelin is generally weight neutral and selectively reduces visceral fat in a specific HIV population. Semaglutide and tirzepatide reduce overall body weight and have much broader obesity evidence. There is no definitive head-to-head trial establishing the best approach for people with HIV-associated visceral fat, and combination safety is not established by the pivotal tesamorelin trials.",
          ],
        },
      ],
      widgetAfter: "tesamorelin-uses-matrix",
    },
    {
      id: "research",
      title: "Clinical Evidence",
      paragraphs: [
        "The pivotal evidence base centers on randomized phase 3 trials in adults with HIV-associated lipodystrophy, with additional research in liver fat and cognition outside the approved indication.",
      ],
      widget: "tesamorelin-trial-explorer",
      subsections: [
        {
          title: "Pivotal 26-week phase 3 trial",
          paragraphs: [
            "**Study:** Metabolic Effects of a Growth Hormone–Releasing Factor in Patients with HIV · **Authors:** Falutz J et al. · **Journal/year:** New England Journal of Medicine, 2007 · **Participants:** 412 adults with HIV and excess abdominal fat · **Design:** Randomized, double-blind, placebo-controlled · **Duration:** 26 weeks · **Dose:** Historical tesamorelin 2 mg daily formulation · **Primary endpoint:** Change in visceral adipose tissue by CT · **Main result:** Approximately 15% VAT reduction with selective preservation of subcutaneous fat · **Key limitation:** Historical formulation and HIV-lipodystrophy population; not a general-obesity trial",
          ],
        },
        {
          title: "Pooled phase 3 and extension analysis",
          paragraphs: [
            "**Study:** Effects of tesamorelin in HIV-infected patients with excess abdominal fat · **Authors:** Falutz J et al. · **Journal/year:** Journal of Clinical Endocrinology & Metabolism, 2010 · **Participants:** 816 randomized across two phase 3 trials · **Main result:** Approximately 15% VAT reduction at 26 weeks and 18% at 52 weeks; regain after withdrawal",
          ],
        },
        {
          title: "Visceral and liver fat trial",
          paragraphs: [
            "**Study:** Effect of Tesamorelin on Visceral Fat and Liver Fat in HIV-Infected Patients With Abdominal Fat Accumulation · **Authors:** Stanley TL et al. · **Journal/year:** JAMA, 2014 · **Main result:** VAT treatment difference −42 cm²; liver-fat treatment difference −2.9 percentage points",
          ],
        },
        {
          title: "HIV-associated NAFLD trial",
          paragraphs: [
            "**Study:** Effects of tesamorelin on non-alcoholic fatty liver disease in HIV · **Authors:** Stanley TL et al. · **Journal/year:** Lancet HIV, 2019 · **Main result:** Approximately 4.1-point absolute and 37% relative reduction in hepatic fat; less fibrosis progression",
          ],
        },
        {
          title: "Cognitive trial in older adults",
          paragraphs: [
            "**Study:** Effects of Growth Hormone–Releasing Hormone on Cognitive Function in Adults With Mild Cognitive Impairment and Healthy Older Adults · **Authors:** Baker LD et al. · **Journal/year:** Archives of Neurology, 2012 · **Main result:** Favorable composite cognitive effect, strongest for executive function",
          ],
        },
      ],
    },
    {
      id: "evidence-quality",
      title: "Evidence Quality",
      tables: [
        {
          headers: ["Evidence type", "Strength", "Interpretation"],
          rows: [
            [
              "HIV visceral-fat randomized trials",
              "High",
              "Multiple phase 3 trials support the approved indication",
            ],
            [
              "One-year continuation data",
              "Moderate to high",
              "Shows maintenance during treatment and regain after withdrawal",
            ],
            [
              "Liver-fat trials in HIV",
              "Moderate",
              "Randomized human evidence, but relatively small and not an approved indication",
            ],
            [
              "Cognitive studies",
              "Low to moderate",
              "Human randomized signals without approval or definitive replication",
            ],
            [
              "General obesity studies",
              "Low/absent",
              "Approved VAT findings should not be generalized to obesity treatment",
            ],
            [
              "Cardiovascular outcomes",
              "Insufficient",
              "Long-term cardiovascular benefit and safety remain unknown",
            ],
            [
              "Adults over 65",
              "Insufficient",
              "Current label reports no adequate geriatric-use information",
            ],
            [
              "Pediatric evidence",
              "Insufficient",
              "Not established and contraindicated with open epiphyses",
            ],
            [
              "FDA approval",
              "Yes",
              "Limited to excess abdominal fat in adults with HIV-associated lipodystrophy",
            ],
          ],
        },
      ],
    },
    {
      id: "fda-status",
      title: "Regulatory Status",
      paragraphs: ["As of August 2026:"],
      bullets: [
        "Egrifta WR and Egrifta SV are FDA-approved biological products.",
        "The indication is reduction of excess abdominal fat in adults with HIV-associated lipodystrophy.",
        "Egrifta WR was licensed in March 2025 as a concentrated weekly-reconstituted formulation.",
        "Tesamorelin is not approved for obesity, general weight management, isolated visceral fat in people without HIV, bodybuilding, anti-aging, cognitive enhancement, growth hormone deficiency, or fatty liver disease.",
        "Egrifta WR and Egrifta SV are not substitutable by dose volume or mixing instructions.",
      ],
    },
  ],
  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "What is tesamorelin?",
        answer:
          "Tesamorelin is a synthetic GHRH analog that stimulates endogenous growth hormone and IGF-1 production.",
      },
      {
        question: "What is tesamorelin FDA approved for?",
        answer:
          "It is approved to reduce excess abdominal fat in adults with HIV-associated lipodystrophy.",
      },
      {
        question: "Is tesamorelin a weight-loss medication?",
        answer:
          "No. Tesamorelin is generally weight neutral and is not approved for weight management.",
      },
      {
        question: "What is the Egrifta WR dose?",
        answer:
          "The approved Egrifta WR dose is 1.28 mg, or 0.16 mL after labeled reconstitution, injected once daily.",
      },
      {
        question: "What is the Egrifta SV dose?",
        answer:
          "The approved Egrifta SV dose is 1.4 mg, or 0.35 mL after labeled reconstitution, injected once daily.",
      },
      {
        question: "Why are the Egrifta WR and SV doses different?",
        answer:
          "They are different formulations designed to provide comparable exposure, with different concentrations, excipients, injection volumes, and handling.",
      },
      {
        question: "Does tesamorelin require titration?",
        answer: "No. The FDA label does not use a dose-escalation schedule.",
      },
      {
        question: "How much visceral fat does tesamorelin reduce?",
        answer:
          "Phase 3 trials reported average VAT reductions of approximately 15% at 26 weeks and 18% at 52 weeks in adults with HIV lipodystrophy.",
      },
      {
        question: "Does tesamorelin reduce subcutaneous belly fat?",
        answer:
          "Its trial effect was selective for visceral fat, with little meaningful reduction in subcutaneous abdominal fat.",
      },
      {
        question: "Does tesamorelin reduce body weight?",
        answer:
          "It generally does not produce clinically meaningful total weight loss.",
      },
      {
        question: "What happens after stopping tesamorelin?",
        answer:
          "Visceral fat commonly returns toward baseline after treatment is stopped.",
      },
      {
        question: "How quickly does tesamorelin work?",
        answer:
          "Pivotal trials measured meaningful VAT change by 26 weeks; individual response and waist change vary.",
      },
      {
        question: "What are the most common side effects?",
        answer:
          "Injection-site reactions, joint pain, extremity pain, muscle pain, and peripheral edema are the most common label-listed reactions.",
      },
      {
        question: "Does tesamorelin raise IGF-1?",
        answer:
          "Yes. Increasing IGF-1 is an expected pharmacologic effect, which is why regular monitoring is recommended.",
      },
      {
        question: "Can tesamorelin raise blood sugar?",
        answer:
          "Yes. It can cause glucose intolerance or diabetes, so glucose should be checked before and during treatment.",
      },
      {
        question: "Does tesamorelin cause cancer?",
        answer:
          "It has not been proven to cause cancer, but active malignancy is a contraindication and long-term risk is uncertain because GH and IGF-1 promote tissue growth.",
      },
      {
        question: "Does tesamorelin help fatty liver?",
        answer:
          "Randomized trials found reduced liver fat in people with HIV and NAFLD, but tesamorelin is not FDA approved for fatty liver disease.",
      },
      {
        question: "Does tesamorelin improve cognition?",
        answer:
          "Small randomized studies reported signals in older adults and people with HIV, but it is not an approved cognitive treatment.",
      },
      {
        question: "Is tesamorelin the same as growth hormone?",
        answer:
          "No. Tesamorelin stimulates pituitary growth-hormone release, while somatropin supplies growth hormone directly.",
      },
      {
        question: "Is tesamorelin the same as sermorelin?",
        answer:
          "No. Both act on GHRH receptors, but they differ structurally, pharmacologically, and in regulatory approval and clinical evidence.",
      },
      {
        question: "Can tesamorelin be combined with semaglutide or tirzepatide?",
        answer:
          "The pivotal tesamorelin trials do not establish the safety or benefit of combining it with GLP-1-based weight-loss medications.",
      },
      {
        question: "What is tesamorelin's half-life?",
        answer:
          "Its plasma half-life is approximately 26–38 minutes, while downstream GH and IGF-1 effects last longer.",
      },
      {
        question: "Where is tesamorelin injected?",
        answer:
          "It is injected subcutaneously into rotating areas of the abdomen, avoiding the navel, scars, and bruises.",
      },
      {
        question: "How long does mixed Egrifta WR last?",
        answer:
          "Reconstituted Egrifta WR supplies seven daily doses and is discarded seven days after mixing when stored as labeled at room temperature.",
      },
    ],
  },
  sources: {
    title: "References",
    items: [
      {
        authors: "DailyMed",
        title: "Current Egrifta WR prescribing information",
        detail: "U.S. prescribing information, 2026.",
        href: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=839334d3-8c1d-4c26-9036-2ab524a6ea75",
      },
      {
        authors: "DailyMed",
        title: "Current Egrifta SV prescribing information",
        detail: "U.S. prescribing information, 2026.",
        href: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3d783378-b02d-4f19-99dd-0fc91a042224",
      },
      {
        authors: "FDA",
        title: "Purple Book: Egrifta WR product record",
        detail: "FDA biological product listing.",
        href: "https://purplebooksearch.fda.gov/index.cfm?blaNo=022505&event=productdetails",
      },
      {
        authors: "Falutz J et al.",
        title:
          "Metabolic Effects of a Growth Hormone–Releasing Factor in Patients with HIV.",
        detail: "NEJM. 2007.",
        href: "https://www.nejm.org/doi/full/10.1056/NEJMoa072375",
      },
      {
        authors: "Falutz J et al.",
        title: "Pooled phase 3 tesamorelin analysis.",
        detail: "JCEM. 2010.",
        href: "https://pubmed.ncbi.nlm.nih.gov/20554713/",
      },
      {
        authors: "Stanley TL et al.",
        title: "Visceral and liver fat trial.",
        detail: "JAMA. 2014.",
        href: "https://jamanetwork.com/journals/jama/fullarticle/1889139",
      },
      {
        authors: "Stanley TL et al.",
        title: "Tesamorelin for NAFLD in HIV.",
        detail: "Lancet HIV. 2019.",
        href: "https://pubmed.ncbi.nlm.nih.gov/31611038/",
      },
      {
        authors: "Baker LD et al.",
        title: "GHRH and cognition trial.",
        detail: "Archives of Neurology. 2012.",
        href: "https://pubmed.ncbi.nlm.nih.gov/22869065/",
      },
      {
        authors: "2025 publication",
        title: "Tesamorelin neurocognitive pilot in people with HIV.",
        detail: "PubMed, 2025.",
        href: "https://pubmed.ncbi.nlm.nih.gov/39813152/",
      },
      {
        authors: "ClinicalTrials.gov",
        title: "Tesamorelin in HIV-associated NAFLD, NCT02196831",
        detail: "Clinical trial registry.",
        href: "https://clinicaltrials.gov/study/NCT02196831",
      },
      {
        authors: "ClinicalTrials.gov",
        title: "Tesamorelin plus exercise TRIUMPH trial, NCT06554717",
        detail: "Ongoing clinical trial.",
        href: "https://clinicaltrials.gov/study/NCT06554717",
      },
    ],
  },
  safety: {
    title: "Important Safety Information",
    paragraphs: [
      "Tesamorelin is an FDA-approved prescription medication with specific contraindications, monitoring requirements, and formulation-specific handling rules.",
      "This page summarizes FDA-approved labeling and published clinical trials for educational purposes. It is **not individualized medical advice**.",
      "Tesamorelin is not approved for general weight loss, bodybuilding, anti-aging, or cognitive enhancement. Always follow the prescribing information for the exact Egrifta product dispensed.",
    ],
  },
};
