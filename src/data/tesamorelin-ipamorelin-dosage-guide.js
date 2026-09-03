/**
 * Tesamorelin + Ipamorelin combination guide.
 * No published controlled human trial of the combination was identified.
 */

export const TES_IPA_EVIDENCE_BADGES = [
  { id: "combo", label: "Combination evidence", value: "None", tone: "none" },
  {
    id: "tesa",
    label: "Tesamorelin component",
    value: "FDA VAT outcome (HIV lipodystrophy)",
    tone: "partial",
  },
  {
    id: "ipa",
    label: "Ipamorelin component",
    value: "IV acute GH only",
    tone: "partial",
  },
  {
    id: "anecdotal",
    label: "Online SC protocols",
    value: "Not validated",
    tone: "low",
  },
];

export const TES_IPA_COMBO_STATUS = [
  ["Human combination PK/PD study", "None located"],
  ["Human combination dose-ranging study", "None located"],
  ["Randomized combination efficacy trial", "None located"],
  ["Chronic SC combination safety study", "None located"],
  ["Validated tesamorelin-to-ipamorelin ratio", "Not established"],
  ["Approved combination product", "None"],
];

export const TES_IPA_CLAIMS = [
  {
    id: "vat",
    claim: "Greater visceral-fat reduction than tesamorelin alone",
    tesamorelin: "VAT −18% / −14% at week 26 in HIV lipodystrophy trials (tesamorelin alone)",
    ipamorelin: "No body-composition outcome trial",
    combination: "No direct trial — unproven",
    level: "absent",
  },
  {
    id: "weight",
    claim: "General weight loss or obesity treatment",
    tesamorelin: "Essentially weight neutral in pivotal trials; not labeled for weight management",
    ipamorelin: "No weight-loss trial",
    combination: "No direct trial — unproven",
    level: "absent",
  },
  {
    id: "muscle",
    claim: "Increased lean muscle or strength",
    tesamorelin: "Small mean lean-mass increase in HIV lipodystrophy population — not a bodybuilding trial",
    ipamorelin: "No muscle outcome trial",
    combination: "No direct trial — unproven",
    level: "absent",
  },
  {
    id: "gh",
    claim: "Increased growth hormone / larger pulse",
    tesamorelin: "Stimulates endogenous GH via GHRH receptor",
    ipamorelin: "Acute IV GH release demonstrated",
    combination: "Biologically plausible — combined human response not measured",
    level: "mechanistic",
  },
  {
    id: "sleep",
    claim: "Better sleep or recovery",
    tesamorelin: "No sleep endpoint in approved trials",
    ipamorelin: "No sleep outcome trial",
    combination: "No direct trial — unproven",
    level: "absent",
  },
  {
    id: "synergy",
    claim: "Synergistic or safer than GH",
    tesamorelin: "Endogenous GH stimulation — not direct GH replacement",
    ipamorelin: "Selective GHSR1a agonist in research",
    combination: "Hypothesis only — no comparative human study",
    level: "mechanistic",
  },
];

export const TES_IPA_VAT_STUDIES = [
  {
    id: "study1",
    label: "Study 1 (NCT00123253)",
    nTesa: 273,
    nPlacebo: 137,
    tesaPct: -18,
    placeboPct: 2,
    tesaCm2: -27,
    placeboCm2: 4,
    diffCm2: -31,
    ci: "−39 to −24",
  },
  {
    id: "study2",
    label: "Study 2 (NCT00435136)",
    nTesa: 270,
    nPlacebo: 126,
    tesaPct: -14,
    placeboPct: -2,
    tesaCm2: -21,
    placeboCm2: 0,
    diffCm2: -21,
    ci: "−29 to −12",
  },
];

export const TES_IPA_DOSE_ROUTE_ROWS = [
  {
    id: "egrifta-wr",
    label: "EGRIFTA WR",
    route: "SC once daily",
    dose: "1.28 mg",
    population: "HIV lipodystrophy (labeled)",
    duration: "Chronic (labeled)",
    status: "FDA approved",
    validated: true,
  },
  {
    id: "egrifta-sv",
    label: "EGRIFTA SV",
    route: "SC once daily",
    dose: "1.4 mg",
    population: "HIV lipodystrophy (labeled)",
    duration: "Chronic (labeled)",
    status: "FDA approved",
    validated: true,
  },
  {
    id: "historical",
    label: "Historical 2 mg EGRIFTA (pivotal trials)",
    route: "SC once daily",
    dose: "2 mg",
    population: "HIV lipodystrophy + excess abdominal fat",
    duration: "26–52 weeks",
    status: "Trial formulation — not current label dose",
    validated: true,
  },
  {
    id: "ipa-pk",
    label: "Ipamorelin PK/PD (Gobburu 1999)",
    route: "15-min IV infusion",
    dose: "4.21–140.45 nmol/kg",
    population: "48 healthy men",
    duration: "Single exposure",
    status: "Acute GH pharmacology only",
    validated: true,
  },
  {
    id: "ipa-poi",
    label: "Ipamorelin postoperative ileus (Beck 2014)",
    route: "IV",
    dose: "0.03 mg/kg BID",
    population: "Post bowel resection",
    duration: "Up to 7 days",
    status: "Negative overall efficacy",
    validated: true,
  },
  {
    id: "online-sc",
    label: "Online SC ipamorelin conventions",
    route: "SC (anecdotal)",
    dose: "Often 100–300 mcg",
    population: "Not trial-defined",
    duration: "Often 8–16 weeks (anecdotal)",
    status: "Not clinically validated",
    validated: false,
  },
  {
    id: "combo",
    label: "Tesamorelin + ipamorelin combination",
    route: "SC (marketed; unapproved)",
    dose: "No validated ratio or schedule",
    population: "None studied",
    duration: "None studied",
    status: "No human combination trial located",
    validated: false,
  },
];

export const TES_IPA_SAFETY_SIMPLE = [
  {
    id: "injection",
    title: "Injection-site reactions",
    tesamorelin: "17% vs 6% placebo (preferred-term table, week 26)",
    ipamorelin: "Not reported in acute IV PK/PD study",
    combo: "Combination rate unknown",
  },
  {
    id: "fluid",
    title: "Fluid retention / musculoskeletal",
    tesamorelin: "Edema 6% vs 2%; arthralgia 13% vs 11%",
    ipamorelin: "Postoperative context limits attribution",
    combo: "Plausible overlap — rate unknown",
  },
  {
    id: "glucose",
    title: "Glucose intolerance",
    tesamorelin: "HbA1c ≥6.5%: 5% vs 1% at week 26; labeled warning",
    ipamorelin: "14.3% hyperglycemia at discharge vs 8.6% placebo (POI trial)",
    combo: "Central unanswered combination risk",
  },
  {
    id: "igf1",
    title: "Elevated IGF-1",
    tesamorelin: "47% >+2 SDS; 36% >+3 SDS at week 26",
    ipamorelin: "Chronic SC effect not established",
    combo: "Add-on magnitude unknown",
  },
  {
    id: "immune",
    title: "Hypersensitivity / immunogenicity",
    tesamorelin: "Hypersensitivity 4%; anti-tesamorelin IgG in 50% at 26 wk",
    ipamorelin: "FDA flags aggregation, impurities, SC safety gap",
    combo: "Premix compatibility unknown",
  },
  {
    id: "malignancy",
    title: "Neoplasm concern",
    tesamorelin: "Active malignancy contraindicated; GH/IGF-1 growth factors",
    ipamorelin: "No cancer-outcome study",
    combo: "No long-term oncologic study",
  },
];

export const TES_IPA_SAFETY_TESAMORELIN = {
  headers: ["Adverse reaction (week 26)", "Tesamorelin (n=543)", "Placebo (n=263)"],
  rows: [
    ["Injection-site reaction (preferred term)", "17%", "6%"],
    ["Arthralgia", "13%", "11%"],
    ["Pain in extremity", "6%", "5%"],
    ["Myalgia", "6%", "2%"],
    ["Peripheral edema", "6%", "2%"],
    ["Paresthesia", "5%", "2%"],
    ["Hypoesthesia", "4%", "2%"],
    ["Rash", "4%", "2%"],
    ["Vomiting", "3%", "0%"],
  ],
  note: "Label warnings section also reports injection-site reactions in 25% vs 14% — different grouping context.",
};

export const TES_IPA_SAFETY_IPAMORELIN = {
  headers: ["Finding (postoperative IV trial)", "Ipamorelin (n=56)", "Placebo (n=58)"],
  rows: [
    ["Hypokalemia", "12.5%", "3.4%"],
    ["Insomnia", "10.7%", "5.2%"],
    ["Hyperglycemia at discharge", "14.3%", "8.6%"],
    ["Serious adverse events", "17.9%", "15.5%"],
    ["Infection", "10.7%", "10.3%"],
    ["Anastomotic leak", "3.6%", "1.7%"],
    ["Readmission within 30 days", "12.5%", "8.6%"],
  ],
  note: "Two deaths occurred in ipamorelin recipients after complex postoperative complications; causality unclear.",
};

export const TES_IPA_GH_TIMELINE = {
  biomarker: [
    { hour: 0, label: "IV ipamorelin infusion start", lane: "ipa" },
    { hour: 0.67, label: "GH peak (~40 min)", lane: "ipa" },
    { hour: 6, label: "GH near baseline", lane: "ipa" },
    { hour: 13, label: "IGF-1 rise evident (tesamorelin label)", lane: "tesa", week: true },
  ],
  outcomes: [
    { week: 26, label: "VAT primary endpoint (tesamorelin trials)", lane: "tesa" },
    { week: 52, label: "Continued VAT / IGF-1 monitoring", lane: "tesa" },
    { week: 52, label: "Withdrawal → VAT regains toward baseline", lane: "tesa", branch: true },
  ],
};

export const TES_IPA_REGULATORY = [
  {
    id: "egrifta-wr",
    label: "EGRIFTA WR",
    fda: "Approved",
    indication: "Reduce excess abdominal fat in adults with HIV-associated lipodystrophy",
    sport: "Prohibited (GH-releasing factor)",
    detail:
      "Prescription product only. Not approved for obesity, bodybuilding, anti-aging, or combination blends.",
  },
  {
    id: "egrifta-sv",
    label: "EGRIFTA SV",
    fda: "Approved",
    indication: "Same narrow indication as EGRIFTA WR",
    sport: "Prohibited (GH-releasing factor)",
    detail: "Not substitutable with EGRIFTA WR — different dose, diluent, volume, and storage.",
  },
  {
    id: "ipamorelin",
    label: "Ipamorelin",
    fda: "Not approved",
    indication: "None",
    sport: "Prohibited (GH secretagogue)",
    detail:
      "FDA 2024 review flagged compounding risks; no identified SC safety data. Free base and acetate are distinct bulk substances.",
  },
  {
    id: "combo",
    label: "Tesamorelin + ipamorelin",
    fda: "Not approved",
    indication: "None",
    sport: "Prohibited (both categories)",
    detail:
      "No approved combination product. FDA August 2026 warning letter cited a marketed 10 mg/3 mg blend as an unapproved new drug under promoted conditions.",
  },
  {
    id: "sport",
    label: "Competitive sport (WADA 2026)",
    fda: "N/A",
    indication: "Therapeutic-use exemptions are sport-specific",
    sport: "Prohibited at all times",
    detail:
      "GH-releasing factors/analogs and GH secretagogues are banned. Prescription or compounding labels do not make use permitted in tested sport.",
  },
];

export const TES_IPA_DOSAGE_GUIDE = {
  title:
    "Tesamorelin + Ipamorelin Benefits, Dosage & Side Effects: What Human Studies Actually Show",
  updated: "Updated September 2026",
  callout:
    "**Evidence alert:** No published controlled human trial has evaluated tesamorelin and ipamorelin together. Tesamorelin is FDA approved as EGRIFTA WR and EGRIFTA SV only to reduce excess abdominal fat in adults with HIV-associated lipodystrophy. Ipamorelin is not FDA approved. Combining them does not extend tesamorelin's approval, prove greater fat loss, or establish a safe dose.",
  intro: [
    "Tesamorelin and ipamorelin both stimulate the growth-hormone axis through different receptors — GHRH receptor versus GHSR1a. That dual-pathway biology gives the combination a plausible rationale for a larger or differently shaped GH pulse. It does **not** prove improved body composition, muscle, recovery, sleep, or health.",
    "The strongest relevant clinical evidence belongs to **tesamorelin alone**. In two phase 3 trials of adults with HIV lipodystrophy, tesamorelin reduced visceral adipose tissue by **18%** versus a **2% increase** with placebo in Study 1 and by **14%** versus a **2% decrease** with placebo in Study 2 at 26 weeks. Body weight was essentially unchanged. Those results do not establish efficacy in people without HIV lipodystrophy and cannot be assigned to a tesamorelin–ipamorelin blend.",
    "Ipamorelin's clearest human pharmacology study involved 48 healthy men receiving brief **intravenous** infusions. It demonstrated dose-related acute GH release, not fat loss or muscle gain. FDA found no pharmacokinetic or pharmacodynamic data for the commonly marketed subcutaneous route.",
  ],
  glance: {
    title: "Tesamorelin + ipamorelin at a glance",
    table: {
      headers: ["Question", "Evidence-based answer"],
      rows: [
        ["**What is the combination?**", "GHRH-receptor agonist + ghrelin/GHSR1a agonist pairing"],
        ["**Is the combination FDA approved?**", "No"],
        [
          "**Is tesamorelin FDA approved?**",
          "Yes — only as EGRIFTA WR/SV for excess abdominal fat in adults with HIV lipodystrophy",
        ],
        ["**Is ipamorelin FDA approved?**", "No"],
        ["**Human combination trials**", "None located in PubMed or ClinicalTrials.gov as of September 2026"],
        ["**Proven combination benefits**", "None"],
        ["**Strongest component evidence**", "Tesamorelin-alone VAT reduction in HIV lipodystrophy"],
        ["**Ipamorelin human evidence**", "Acute IV GH release; no body-composition benefit"],
        ["**Approved combination dose**", "None"],
        [
          "**Main safety issue**",
          "Unknown combined GH/IGF-1 exposure layered onto known tesamorelin risks and poorly characterized SC ipamorelin safety",
        ],
        ["**Athletic status**", "Both fall within WADA prohibited GH-releasing/secretagogue categories"],
      ],
    },
  },
  sections: [
    {
      id: "zero-trials",
      title: "0 human trials demonstrate that tesamorelin + ipamorelin works as a combination",
      paragraphs: [
        "A targeted search of PubMed and ClinicalTrials.gov found **no human study administering both compounds together**. A combination is a new intervention, not the sum of two separate evidence files.",
        "Claims that remain unproven for the combination include: greater visceral-fat reduction than tesamorelin alone; general weight loss; increased lean muscle or strength; faster recovery; better sleep; anti-aging effects; a larger or safer GH pulse; a reduced side-effect burden; any particular tesamorelin-to-ipamorelin ratio; or benefit from bedtime dosing, fasting, cycling, or dose escalation.",
      ],
      highlight:
        "Separate component studies cannot be added together. Tesamorelin's phase 3 program studied a specific product, dose, population, route, and duration. Ipamorelin's clearest human pharmacology used short IV infusions. Neither design tells us what happens when subcutaneous ipamorelin of uncertain formulation is added to current EGRIFTA therapy.",
      widget: "tes-ipa-evidence-boundary",
      widgetAfter: "tes-ipa-combo-status",
    },
    {
      id: "what-are-they",
      title: "What are tesamorelin and ipamorelin?",
      paragraphs: [
        "**Tesamorelin** is a 44-amino-acid GHRH analog with an N-terminal hexenoyl group that improves enzymatic stability. It binds GHRH receptors on pituitary somatotroph cells, stimulating synthesis and pulsatile release of endogenous GH and downstream IGF-1.",
        "**Ipamorelin** is a synthetic pentapeptide and selective GHSR1a agonist developed as NNC 26-0161. It triggers pituitary GH release through a pathway distinct from GHRH signaling. It was investigated for postoperative ileus but never received FDA approval.",
        "“Tesamorelin + ipamorelin” may describe separate injections or a premixed vial in a fixed ratio. These are not necessarily pharmacologically equivalent. A seller's vial strength is not a clinical dose, and a fixed-ratio blend is not an FDA-approved combination product.",
      ],
      tables: [
        {
          caption: "FDA-approved tesamorelin products (not substitutable)",
          headers: ["Product", "Labeled daily dose", "Handling", "Approval boundary"],
          rows: [
            [
              "**EGRIFTA WR**",
              "1.28 mg SC once daily",
              "11.6 mg multi-dose vial; weekly reconstitution",
              "Excess abdominal fat in adults with HIV lipodystrophy",
            ],
            [
              "**EGRIFTA SV**",
              "1.4 mg SC once daily",
              "2 mg single-dose vial; reconstitute before each dose",
              "Same indication",
            ],
          ],
        },
      ],
      notes: [
        "In an August 2026 warning letter, FDA cited a seller's “BIMORELIN” product containing 10 mg tesamorelin plus 3 mg ipamorelin as an unapproved new drug. The 10:3 vial composition was a commercial presentation — not a human-study ratio.",
      ],
    },
    {
      id: "why-combined",
      title: "Why are they combined?",
      paragraphs: [
        "The rationale comes from complementary pituitary signaling: tesamorelin activates the GHRH receptor (Gs/cAMP); ipamorelin activates GHSR1a (Gq/PLC). Both converge on pituitary somatotroph GH release.",
        "Natural GH secretion is regulated by stimulatory and inhibitory inputs, sleep, nutrition, age, and negative feedback from GH and IGF-1. Activating two stimulatory receptors could change a pulse, but feedback and receptor dynamics may blunt or reshape the response.",
      ],
      highlight:
        "The combination has a mechanistic rationale, but its human pharmacodynamics have not been measured. “Synergy” should not be stated as a clinical fact.",
      widget: "tes-ipa-evidence-badges",
      widgetAfter: "tes-ipa-mechanism",
    },
    {
      id: "benefits",
      title: "Benefits: what the evidence really supports",
      tables: [
        {
          caption: "Claim vs evidence mapping",
          headers: ["Claimed outcome", "Combination evidence", "Component evidence", "Verdict"],
          rows: [
            ["Increased GH", "None", "Each stimulates GH separately", "Plausible together — unmeasured"],
            ["Increased IGF-1", "None", "Tesamorelin reliably raises IGF-1", "Likely possible — magnitude unknown"],
            ["Less visceral abdominal fat", "None", "Strong tesamorelin-alone HIV lipodystrophy data", "Do not transfer to blend or other populations"],
            ["General weight loss", "None", "Tesamorelin weight neutral", "Unsupported"],
            ["More lean mass / strength", "None", "Small lean signal in tesamorelin trials only", "Not proven muscle-building effect"],
            ["Better recovery / sleep", "None", "No controlled human outcome evidence", "Unsupported"],
            ["Anti-aging / longevity", "None", "No morbidity or mortality trials", "Unsupported"],
          ],
        },
      ],
      paragraphs: [
        "Tesamorelin's approved benefit is reduction of **excess abdominal fat** in adults with HIV-associated lipodystrophy — measured as CT visceral adipose tissue, not body-weight loss. The label notes tesamorelin is weight neutral and not indicated for weight-loss management.",
        "GH and IGF-1 are biomarkers, not patient benefits. Demonstrating that a peptide raises one of them does not prove favorable changes in body composition, strength, sleep, cardiovascular events, or longevity.",
      ],
    },
    {
      id: "results",
      title: "Results and effectiveness",
      paragraphs: [
        "There are **no combination results** to report — no controlled human trial provides visceral-fat loss, lean-mass gain, strength change, sleep score, recovery time, or adverse-event rate for tesamorelin plus ipamorelin.",
        "Any week-by-week combination timeline extrapolates from anecdotes, component studies, or general GH biology. That is not clinical evidence.",
      ],
      widget: "tes-ipa-vat-chart",
      tables: [
        {
          caption: "Week-26 outcomes — tesamorelin alone (historical 2 mg formulation)",
          headers: ["Outcome", "Study 1 tesamorelin", "Study 1 placebo", "Study 2 tesamorelin", "Study 2 placebo"],
          rows: [
            ["VAT change", "−27 cm² (−18%)", "+4 cm² (+2%)", "−21 cm² (−14%)", "~0 cm² (−2%)"],
            ["Weight change", "−0.4 kg", "0.0 kg", "+0.5 kg", "+0.3 kg"],
            ["Waist change", "−3 cm", "−1 cm", "−2 cm", "−1 cm"],
            ["Trunk fat", "−1.0 kg", "+0.4 kg", "−0.8 kg", "+0.2 kg"],
            ["Lean mass", "+1.3 kg", "−0.2 kg", "+1.2 kg", "−0.03 kg"],
          ],
        },
      ],
      paragraphsAfter: [
        "Participants who continued tesamorelin through extension phases generally maintained VAT reduction; those switched to placebo regained visceral fat toward baseline — an on-treatment effect, not a permanent reset.",
        "Ipamorelin's IV PK/PD study established acute concentration–GH relationships only. The postoperative ileus trial did not meet its primary efficacy endpoint.",
      ],
    },
    {
      id: "dosage",
      title: "Dosage: what has actually been studied?",
      paragraphs: [
        "There is **no approved or clinically validated combination dose**. No regulator or controlled trial has established a ratio, schedule, titration, cycle length, premix compatibility, or monitoring protocol.",
        "Commercial vial ratios and clinic instructions are not substitutes for dose-finding studies. **No combination dose calculator is provided.**",
      ],
      widget: "tes-ipa-dose-route-map",
      tables: [
        {
          caption: "FDA-approved tesamorelin doses (EGRIFTA products only — not blends)",
          headers: ["Item", "EGRIFTA WR", "EGRIFTA SV"],
          rows: [
            ["Labeled daily dose", "1.28 mg", "1.4 mg"],
            ["Injection volume", "0.16 mL", "0.35 mL"],
            ["Concentration after mixing", "8 mg/mL", "4 mg/mL"],
            ["Use after mixing", "Seven consecutive daily doses", "Use immediately; discard remainder"],
          ],
        },
        {
          caption: "Ipamorelin doses used in human research (not combination)",
          headers: ["Context", "Route", "Dose", "Duration", "Established"],
          rows: [
            ["Healthy-volunteer PK/PD", "15-min IV infusion", "4.21–140.45 nmol/kg", "Single exposure", "Acute GH response"],
            ["Postoperative ileus", "IV", "0.03 mg/kg BID", "Up to 7 days", "No significant overall efficacy"],
          ],
        },
      ],
      notes: [
        "**Do not apply EGRIFTA mixing instructions to a tesamorelin–ipamorelin blend.** Adding another peptide creates a different, untested preparation.",
        "Online protocols often repeat SC ipamorelin 100–300 mcg paired with roughly 1–2 mg tesamorelin. These figures are anecdotal clinic/market conventions — not a validated human combination regimen.",
      ],
      widgetAfter: "tes-ipa-formulation-guardrail",
    },
    {
      id: "safety",
      title: "Side effects and safety",
      paragraphs: [
        "The combination has **no measured adverse-event rate**. The safest presentation shows each component's data separately and identifies plausible overlaps without assigning a percentage to the combination.",
        "Tesamorelin raises IGF-1 by design: 47% of treated participants had IGF-1 above +2 SDS and 36% above +3 SDS at week 26. There is no study showing how much ipamorelin adds to chronic IGF-1 exposure.",
      ],
      widget: "tes-ipa-safety-toggle",
    },
    {
      id: "pharmacokinetics",
      title: "Pharmacokinetics",
      tables: [
        {
          caption: "Route-specific human data — do not average or convert blindly",
          headers: ["Feature", "Tesamorelin", "Ipamorelin", "Combination"],
          rows: [
            ["Best route-specific data", "SC approved products", "IV research", "None"],
            ["Representative exposure", "EGRIFTA WR 1.28 mg SC", "15-min IV infusions", "Unknown"],
            ["Time to peak", "WR median Tmax 0.15 h", "GH peak ~0.67 h", "Unknown"],
            ["Elimination half-life", "WR mean 11 min", "IV terminal ~2 h", "Not measurable by averaging"],
            ["SC bioavailability", "Historical 2 mg SC <4%", "Not identified by FDA", "Unknown"],
          ],
        },
      ],
      widget: "tes-ipa-gh-timeline",
    },
    {
      id: "comparisons",
      title: "Tesamorelin + ipamorelin vs similar options",
      tables: [
        {
          caption: "Regulatory and evidence comparison",
          headers: ["Option", "Regulatory status", "Best human evidence", "Main limitation"],
          rows: [
            ["Tesamorelin alone", "FDA approved (narrow indication)", "Phase 3 VAT reduction in HIV lipodystrophy", "Not general weight loss; IGF-1/glucose concerns"],
            ["Ipamorelin alone", "Not FDA approved", "Acute IV GH response", "No validated chronic SC efficacy or safety"],
            ["Tesamorelin + ipamorelin", "Not FDA approved", "No direct human trial", "Dose, benefit, PK, and safety unknown"],
            ["CJC-1295 + ipamorelin", "Not FDA approved", "Separate biomarker studies only", "No direct combination outcome trial"],
            ["Somatropin", "FDA approved for specific GH disorders", "Direct GH replacement in defined deficiencies", "Different indications and safety profile"],
            ["GLP-1/GIP obesity medicines", "Product-specific approvals", "Large weight-loss programs", "Different mechanism — not selective VAT therapy"],
          ],
        },
      ],
    },
    {
      id: "evidence-deep-dive",
      title: "Clinical evidence deep dive",
      numbered: [
        "**Study 1 (NCT00123253):** 273 tesamorelin vs 137 placebo — VAT −27 cm² (−18%) vs +4 cm² (+2%); difference −31 cm² (95% CI −39 to −24). High-quality tesamorelin-alone evidence; no ipamorelin arm.",
        "**Study 2 (NCT00435136):** 270 tesamorelin vs 126 placebo — VAT −21 cm² (−14%) vs ~0 cm² (−2%); difference −21 cm² (95% CI −29 to −12). Replicates tesamorelin-alone effect.",
        "**Pooled phase 3 analysis (Falutz 2010):** ~18% VAT reduction maintained at 52 weeks with continued tesamorelin; placebo switch → regain toward baseline.",
        "**Ipamorelin PK/PD (Gobburu 1999):** 48 healthy men, IV dose escalation — linear PK, GH peak ~0.67 h, very low GH by 6 h. No body-composition endpoints.",
        "**Ipamorelin postoperative ileus (Beck 2014):** 0.03 mg/kg IV BID up to 7 days — median 25.3 vs 32.6 h to first meal (p=.15, NS). Two deaths with unclear causality.",
        "**Tesamorelin + ipamorelin combination:** No published trial, registered trial, PK/PD study, body-composition study, or long-term safety study located.",
      ],
    },
    {
      id: "regulatory",
      title: "Regulatory, compounding, and WADA status",
      paragraphs: [
        "EGRIFTA WR and EGRIFTA SV are FDA-approved only for reduction of excess abdominal fat in adults with HIV-associated lipodystrophy. They are not approved for obesity, bodybuilding, anti-aging, recovery, or use in a tesamorelin–ipamorelin blend.",
        "Ipamorelin free base and acetate are not in FDA-approved drugs. FDA's 2024 review recommended against 503A Bulks List placement and flagged SC safety gaps.",
        "The 2026 WADA Prohibited List bans growth hormone–releasing factors and growth hormone secretagogues at all times.",
      ],
      widget: "tes-ipa-regulatory-checker",
    },
    {
      id: "bottom-line",
      title: "Bottom line",
      paragraphs: [
        "Tesamorelin has credible, narrow, ingredient-specific evidence for HIV-associated visceral adiposity. Ipamorelin has limited IV pharmacology and no validated chronic SC benefit. **The combination remains untested.**",
        "Mechanistic plausibility is not clinical proof. Adding ipamorelin creates an unstudied intervention that does not preserve an assumption of equal tesamorelin efficacy and may increase exposure-related GH/IGF-1 concerns.",
      ],
    },
  ],
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        question: "What is tesamorelin + ipamorelin?",
        answer:
          "An unapproved pairing of a GHRH analog with a ghrelin/GH-secretagogue receptor agonist, usually marketed to increase GH/IGF-1 and change body composition.",
      },
      {
        question: "Is tesamorelin + ipamorelin FDA approved?",
        answer:
          "No. Tesamorelin alone is approved in specific EGRIFTA formulations for a narrow HIV-lipodystrophy indication; ipamorelin and the combination are not approved.",
      },
      {
        question: "Has the combination been studied in humans?",
        answer:
          "No published or registered human combination trial was located as of September 2026.",
      },
      {
        question: "Does the combination reduce visceral belly fat?",
        answer:
          "Tesamorelin alone reduces VAT in adults with HIV lipodystrophy. The combination has not been tested, and the result cannot be assumed in other populations.",
      },
      {
        question: "What is the tesamorelin + ipamorelin dosage?",
        answer:
          "There is no approved or clinically validated combination dose, ratio, schedule, titration, or cycle.",
      },
      {
        question: "Are the common 1–2 mg plus 100–300 mcg online protocols research-backed?",
        answer:
          "No. Those ranges are repeated in commercial and clinic contexts but were not established in a controlled human combination trial.",
      },
      {
        question: "Can IV ipamorelin research doses be converted to a SC dose?",
        answer:
          "No reliable conversion is available. FDA found no SC PK/PD data, so absorption, exposure, and bioavailability are unknown.",
      },
      {
        question: "Are EGRIFTA WR and EGRIFTA SV interchangeable?",
        answer:
          "No. They have different doses, concentrations, injection volumes, diluents, and storage rules and are explicitly not substitutable.",
      },
      {
        question: "Can EGRIFTA WR or SV be mixed with ipamorelin?",
        answer:
          "No compatibility, stability, sterility, or dosing study supports doing so. EGRIFTA instructions apply only to the labeled product and supplied diluent.",
      },
      {
        question: "Is the combination permitted in tested sport?",
        answer:
          "No. Both compounds fall within WADA-prohibited GH-releasing and secretagogue categories.",
      },
    ],
  },
  sources: {
    title: "Primary and regulatory references",
    items: [
      {
        authors: "FDA",
        title: "EGRIFTA WR prescribing information",
        detail: "Revised March 2025.",
        href: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2025/022505s020lbl.pdf",
      },
      {
        authors: "DailyMed",
        title: "EGRIFTA WR",
        href: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=839334d3-8c1d-4c26-9036-2ab524a6ea75",
      },
      {
        authors: "DailyMed",
        title: "EGRIFTA SV",
        detail: "Updated July 2026.",
        href: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3d783378-b02d-4f19-99dd-0fc91a042224",
      },
      {
        authors: "ClinicalTrials.gov",
        title: "NCT00123253",
        href: "https://clinicaltrials.gov/study/NCT00123253",
      },
      {
        authors: "ClinicalTrials.gov",
        title: "NCT00435136",
        href: "https://clinicaltrials.gov/study/NCT00435136",
      },
      {
        authors: "Falutz J et al.",
        title: "Pooled phase 3 tesamorelin analysis",
        detail: "JCEM, 2010.",
        href: "https://pubmed.ncbi.nlm.nih.gov/20554713/",
      },
      {
        authors: "Gobburu JVS et al.",
        title: "Ipamorelin PK/PD in healthy volunteers",
        detail: "Pharmaceutical Research, 1999.",
        href: "https://pubmed.ncbi.nlm.nih.gov/10496658/",
      },
      {
        authors: "Beck DE et al.",
        title: "Ipamorelin for postoperative ileus",
        detail: "Int J Colorectal Dis, 2014.",
        href: "https://pubmed.ncbi.nlm.nih.gov/25331030/",
      },
      {
        authors: "FDA",
        title: "Ipamorelin free base and acetate evaluation",
        detail: "2024.",
        href: "https://www.fda.gov/media/182088/download",
      },
      {
        authors: "FDA",
        title: "Warning letter — marketed tesamorelin–ipamorelin blend",
        detail: "August 2026.",
        href: "https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/royal-peptides-llc-734884-08242026",
      },
      {
        authors: "WADA",
        title: "2026 Prohibited List",
        href: "https://www.wada-ama.org/sites/default/files/2025-09/2026list_en_final_clean_september_2025.pdf",
      },
    ],
  },
  safety: {
    title: "Important Safety Information",
    paragraphs: [
      "No published controlled human trial has evaluated tesamorelin and ipamorelin together. **There is no approved combination dose, ratio, or monitoring protocol.**",
      "EGRIFTA WR and EGRIFTA SV are approved only to reduce excess abdominal fat in adults with HIV-associated lipodystrophy. Their labeling, mixing instructions, and safety data apply only to those products — not to compounded or research-market blends.",
      "This page is educational and is **not** a dosing recommendation or substitute for individualized medical care. **No combination dose or reconstitution calculator is provided.**",
    ],
  },
};
