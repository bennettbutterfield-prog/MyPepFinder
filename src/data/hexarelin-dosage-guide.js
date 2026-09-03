/**
 * Hexarelin (examorelin) dosage guide — human studies vs anecdotal protocols.
 * No FDA-approved dose; weight-based endocrine research ≠ fixed mcg community schedules.
 */

export const HEX_DOSE_RESPONSE = [
  { dose: "Placebo", peak: 3.9 },
  { dose: "0.5 mcg/kg IV", peak: 26.9 },
  { dose: "1 mcg/kg IV", peak: 52.3 },
  { dose: "2 mcg/kg IV", peak: 55.0 },
];

export const HEX_STUDY_DOSES = [
  { mcgkg: 0.5, route: "IV", context: "Rising-dose challenge · near half-max GH" },
  { mcgkg: 1, route: "IV", context: "Rising-dose / repeated acute challenge" },
  { mcgkg: 1.5, route: "SC", context: "24-h frequency & 16-week repeated-dose studies" },
  { mcgkg: 2, route: "IV", context: "Near modeled maximum acute GH response" },
  { mcgkg: 3, route: "SC", context: "Acute route-comparison SC dose" },
];

export const HEX_COMPARE = {
  clinical: {
    id: "clinical",
    label: "Human studies",
    badge: "Weight-based · monitored research",
    summary:
      "Mostly mcg/kg IV or SC endocrine challenges; best repeated-dose evidence is 1.5 mcg/kg SC BID × 16 weeks in 12 older adults.",
    rows: [
      {
        name: "Rising-dose IV (Imbimbo 1994)",
        dose: "0.5, 1, 2 mcg/kg IV",
        frequency: "Single boluses + washouts",
        finding: "Saturable GH response; ~0.5–0.64 mcg/kg half-max; 2 mcg/kg near max",
      },
      {
        name: "Route comparison (Ghigo 1994)",
        dose: "1–2 IV; 1.5–3 SC; 20 IN; 20–40 mg oral",
        frequency: "Single acute",
        finding: "PD bioavailability ≈77% SC, 4.8% IN, 0.3% oral vs IV",
      },
      {
        name: "2 vs 3× daily (Maccario 2002)",
        dose: "1.5 mcg/kg SC",
        frequency: "2 vs 3 over 24 h",
        finding: "Third administration added no measurable 24-h GH benefit",
      },
      {
        name: "16-week older adults (Rahim 1998)",
        dose: "1.5 mcg/kg SC",
        frequency: "Twice daily × 16 weeks",
        finding: "GH response attenuated; IGF-1/body comp unchanged; recovered after 4 weeks off",
      },
    ],
  },
  anecdotal: {
    id: "anecdotal",
    label: "Online protocols",
    badge: "Fixed mcg · unvalidated outcomes",
    summary:
      "Commonly 100–200 mcg SC, 1–3× daily, often 4–12 week cycles. Numerically overlap some weight-adjusted exposures in some adults—not clinically interchangeable.",
    rows: [
      {
        name: "Lower fixed-dose",
        dose: "50–100 mcg SC",
        frequency: "1–2× daily",
        finding: "Community report; no validated clinical protocol",
      },
      {
        name: "Typical fixed-dose",
        dose: "100–200 mcg SC",
        frequency: "1–3× daily",
        finding: "Widely repeated; not established by outcome trials",
      },
      {
        name: "Higher fixed-dose",
        dose: "200–300 mcg SC",
        frequency: "1–2× daily",
        finding: "Weakest rationale; may exceed near-maximal acute exposure by weight",
      },
      {
        name: "Cycling claims",
        dose: "Usually 100–200 mcg",
        frequency: "1–2× daily",
        finding: "4–12 weeks on / 4–8 off — community-derived; no trial compared them",
      },
    ],
  },
};

export const HEX_ATTENUATION = {
  weeks: [
    { label: "Baseline", auc: 19.1 },
    { label: "Week 1", auc: 13.1 },
    { label: "Week 4", auc: 12.3 },
    { label: "Week 16", auc: 10.5 },
    { label: "+4 wk off", auc: 19.4 },
  ],
  note: "GH AUC after Hexarelin challenge (µg·L⁻¹·h) in 12 older adults on 1.5 mcg/kg SC BID — conceptual values from published summary.",
};

export const HEX_ROUTES = [
  {
    route: "Intravenous",
    doses: "1 and 2 mcg/kg",
    note: "Clearest dose-response; mainly endocrine challenge method",
  },
  {
    route: "Subcutaneous",
    doses: "1.5 and 3 mcg/kg acute; 1.5 BID chronic",
    note: "PD availability ≈77% vs IV in small acute study",
  },
  {
    route: "Intranasal",
    doses: "20 mcg/kg; pediatric 60 mcg/kg TID",
    note: "PD availability ≈4.8%; low and variable",
  },
  {
    route: "Oral",
    doses: "20 and 40 mg",
    note: "PD availability ≈0.3%; milligram doses required",
  },
];

export const HEX_CLAIMS = [
  {
    id: "half-life",
    claim: "“55-minute Hexarelin half-life”",
    status: "misstated online",
    detail:
      "Foundational paper described ~55-minute decline in the GH response—not a definitive plasma pharmacokinetic half-life for Hexarelin itself.",
  },
  {
    id: "saturation",
    claim: "Fixed 100 mcg is universally saturating",
    status: "not established",
    detail:
      "IV half-max ~0.5–0.64 mcg/kg; near-max ~2 mcg/kg. Fixed 100 mcg is 2 mcg/kg at 50 kg but 1 mcg/kg at 100 kg—and SC ≠ IV.",
  },
  {
    id: "third",
    claim: "Three daily doses always give more GH",
    status: "contradicted in one study",
    detail:
      "1.5 mcg/kg SC ×3 over 24 h did not increase integrated GH more than ×2 in a six-person crossover.",
  },
  {
    id: "cycle",
    claim: "Mandatory 4–12 week on/off cycles",
    status: "not supported",
    detail:
      "Attenuation and recovery after 4 weeks off are supported in one small study. Popular cycle prescriptions were not compared in trials.",
  },
];

export const HEX_AE_SIMPLE = [
  ["Acute rising-dose study", "Well tolerated (investigators)", "Slight ↑ prolactin, cortisol, ACTH"],
  ["16-week SC BID", "No chronic ACTH/prolactin overstimulation", "IGF-1 / body composition unchanged"],
  ["Long-term safety", "Not established", "Studies too small for uncommon events"],
];

export const HEX_AE_FULL = [
  [
    "Acute hormonal side signals",
    "Slight ↑ PRL, cortisol, ACTH",
    "Glucose, LH, FSH, TSH, IGF-1 not significantly affected short-term",
    "Imbimbo rising-dose study",
  ],
  [
    "16-week pituitary-adrenal",
    "No chronic ACTH/PRL overstimulation",
    "Cortisol exposure lower at week 16; returned toward baseline off-drug",
    "Rahim analyses",
  ],
  [
    "Body composition / IGF-1 @ 16 wk",
    "No significant improvement",
    "Fat, lean mass, BMD unchanged",
    "Small older-adult cohort (n=12)",
  ],
  [
    "Desensitization",
    "Partial, reversible",
    "Acute attenuation within 2 h (IV); recovery after 4 weeks off in 16-wk study",
    "Not a mandatory cycle prescription",
  ],
  [
    "Product / long-term unknowns",
    "Unresolved",
    "Sterility, identity, endotoxin; CV/metabolic/cancer risk; interactions",
    "Unapproved online materials",
  ],
  [
    "Sport status",
    "Prohibited always",
    "GHS class under WADA; examorelin/Hexarelin",
    "2026 Prohibited List",
  ],
];

export const HEX_EVIDENCE_LADDER = [
  {
    level: "Controlled human pharmacodynamic studies",
    status: "strongest",
    detail: "Acute GH release, dose-response saturation, route differences, attenuation — small samples, surrogate endpoints",
  },
  {
    level: "Repeated-dose human studies",
    status: "useful",
    detail: "16-week older-adult study: partial desensitization; little IGF-1/body-comp change",
  },
  {
    level: "Exploratory clinical physiology",
    status: "hypothesis",
    detail: "Pediatric growth, GH-deficiency challenge, acute cardiac — not dosing standards",
  },
  {
    level: "Animal and cell research",
    status: "mechanism",
    detail: "Receptor desensitization, disease models — doses not transferable",
  },
  {
    level: "Community and vendor protocols",
    status: "lowest",
    detail: "Fixed mcg and cycling conventions — repetition ≠ independent corroboration",
  },
];

export const HEXARELIN_DOSAGE_GUIDE = {
  title: "Hexarelin Dosage: Human Studies, Research Protocols, and Evidence Review",
  updated: "Updated August 2026",
  callout:
    "**Research-use notice:** Hexarelin is not an FDA-approved medication. There is currently **no FDA-approved dosage**. The doses below describe published experiments and separately labeled reports from online peptide communities; they are **not** instructions for self-administration or individualized medical advice.",
  intro: [
    "Human research has used **0.25–2 mcg/kg intravenously** (usually single endocrine challenges) and **1.5–3 mcg/kg subcutaneously** acutely. The principal longer human study used **1.5 mcg/kg SC twice daily for 16 weeks**.",
    "In a 24-hour crossover, **1.5 mcg/kg given three times did not increase 24-hour GH output more than two administrations**. A rising-dose IV study found half-maximal GH response near **0.5–0.64 mcg/kg**, with **2 mcg/kg near the estimated maximum**.",
    "Online protocols commonly report **100–200 mcg** per administration, 1–3× daily—anecdotal, not validated clinical regimens. Repeated exposure can produce **rapid and longer-term attenuation** of the GH response; in the 16-week study, responsiveness recovered after four weeks off. The “55-minute half-life” claim usually refers to decline of the **GH response**, not a definitive Hexarelin plasma PK half-life.",
  ],
  glance: {
    title: "Hexarelin dosage in 30 seconds",
    table: {
      headers: ["Question", "Evidence-based answer"],
      rows: [
        ["**FDA-approved dosage?**", "No"],
        ["**Best acute IV range**", "0.5–2 mcg/kg single boluses"],
        ["**Best repeated SC exposure**", "1.5 mcg/kg BID × 16 weeks (n=12 older adults)"],
        ["**Half-max / near-max (IV model)**", "~0.5–0.64 / ~2 mcg/kg"],
        ["**3× vs 2× daily (24 h)**", "No added integrated GH from third dose"],
        ["**Common online range**", "100–200 mcg SC, 1–3× daily (anecdotal)"],
        ["**“55-min half-life”**", "GH-response decline — not proven peptide plasma t½"],
        ["**Sport status**", "WADA-prohibited GHS / examorelin"],
      ],
    },
  },
  sections: [
    {
      id: "what-is",
      title: "What is Hexarelin?",
      paragraphs: [
        "Hexarelin—also known by the international nonproprietary name **examorelin**—is a synthetic six-amino-acid growth hormone secretagogue (`His-D-2-methyl-Trp-Ala-Trp-D-Phe-Lys-NH2`). It activates **GHS-R1a** (ghrelin receptor family), producing prompt, pulsatile endogenous GH release—distinct from injecting recombinant GH.",
        "Research also describes cardiovascular actions that may involve GHS-R1a and CD36-related pathways. Those findings do **not** establish Hexarelin as a treatment for cardiovascular disease.",
      ],
    },
    {
      id: "regulatory",
      title: "Regulatory and sporting status",
      paragraphs: [
        "Hexarelin has **no FDA-approved indication, formulation, or dosing schedule**. Online “research chemicals” are not equivalent to an FDA-approved medicine. Growth hormone secretagogues are prohibited in sport under WADA; athletes should treat Hexarelin/examorelin as prohibited regardless of marketing as a supplement or research material.",
      ],
      highlight:
        "There is currently no FDA-approved dosage for Hexarelin. Study exposures below are not prescribing recommendations.",
    },
    {
      id: "human-studies",
      title: "Human study dosage landscape",
      paragraphs: [
        "Route, units, population, duration, and purpose matter: **2 mcg/kg IV in a monitored challenge cannot be treated as equivalent to a fixed 200 mcg SC dose used repeatedly**.",
      ],
      widget: "hex-clinical-anecdotal",
      tables: [
        {
          caption: "Selected human study exposures",
          headers: ["Setting", "Dose / route", "Schedule", "Main result"],
          rows: [
            [
              "Rising-dose (n=12 men)",
              "0.5–2 mcg/kg IV",
              "Single boluses + washouts",
              "Saturable GH; 2 mcg/kg near max",
            ],
            [
              "Route comparison (n=12)",
              "IV / SC / IN / oral",
              "Single acute",
              "Sharp route-dependent PD availability",
            ],
            [
              "Repeated IV (n=6)",
              "1 mcg/kg IV ×2",
              "120 min apart",
              "Second GH response significantly reduced",
            ],
            [
              "24-h frequency (n=6)",
              "1.5 mcg/kg SC",
              "2 vs 3 over 24 h",
              "Third dose added no 24-h GH benefit",
            ],
            [
              "16-week older adults (n=12)",
              "1.5 mcg/kg SC",
              "BID × 16 weeks",
              "Attenuation; no IGF-1/body-comp gain; recovered after 4 wk off",
            ],
            [
              "Pediatric IN series (n=8)",
              "60 mcg/kg IN",
              "TID up to 8 months",
              "Uncontrolled; not an adult protocol",
            ],
          ],
        },
      ],
    },
    {
      id: "dose-response",
      title: "The best-defined acute dose-response",
      paragraphs: [
        "The most useful dose-ranging experiment tested IV boluses of 0.5, 1, and 2 mcg/kg in 12 healthy men. Modeled half-maximal response was about **0.50 mcg/kg by peak** and **0.64 mcg/kg by GH AUC**; **2 mcg/kg** was near the modeled maximum.",
        "This establishes a saturable acute GH effect. It does **not** prove a fixed 100 mcg dose is universally “saturating.” GH peaked at roughly 30 minutes. Investigators described GH decline with a half-time near 55 minutes—better called the **observed decline of the hormone response** than Hexarelin plasma half-life.",
      ],
      widget: "hex-dose-response",
      widgetAfter: "hex-claim-checker",
    },
    {
      id: "routes",
      title: "Route matters: IV, subcutaneous, intranasal, and oral",
      paragraphs: [
        "A human route comparison reported approximate pharmacodynamic “biological bioavailability” of **77% subcutaneous, 4.8% intranasal, and 0.3% oral** relative to IV GH response—not a complete modern plasma PK analysis. Oral and intranasal findings should not be converted mechanically into subcutaneous amounts.",
      ],
      widget: "hex-route-compare",
    },
    {
      id: "repeated-dosing",
      title: "What repeated dosing showed",
      numbered: [
        "**Rapid attenuation within two hours.** Two 1 mcg/kg IV challenges 120 minutes apart: second GH response significantly smaller.",
        "**Third daily administration did not raise 24-h GH.** 1.5 mcg/kg SC ×2 vs ×3 over 24 hours—both increased integrated GH similarly; three did not beat two.",
        "**Sixteen weeks: partial, reversible desensitization.** 1.5 mcg/kg SC BID in 12 older adults—GH AUC after challenge fell across weeks; recovered near baseline after four weeks off. IGF-1, body fat, lean mass, and BMD did not significantly improve.",
      ],
      widget: "hex-attenuation",
      paragraphsAfter: [
        "Evidence supports **partial and reversible attenuation**—not stronger online claims that Hexarelin always “stops working” at a specific week or that a particular off-cycle is biologically mandatory.",
      ],
    },
    {
      id: "weight-examples",
      title: "Dose-by-body-weight examples from human studies",
      paragraphs: [
        "These calculations translate published mcg/kg study doses into total amounts. They are **mathematical examples—not recommendations**. Fixed online 100–200 mcg amounts superficially resemble some exposures but ignore route, population, frequency, and duration.",
      ],
      widget: "hex-exposure-calc",
      highlight:
        "Published-study math only — not a dose calculator and not a recommended regimen. No FDA-approved dosage exists.",
    },
    {
      id: "research-dosage",
      title: "Research dosage: commonly reported online protocols",
      paragraphs: [
        "The broad online range is approximately **50–300 mcg** per administration, with **100–200 mcg** the most frequently repeated band. No controlled human trial validates a universal fixed dose, bedtime superiority, fasting requirement, popular cycle lengths, or body-composition outcomes from these protocols.",
        "For a 70 kg adult, 1.5 mcg/kg equals 105 mcg and 3 mcg/kg equals 210 mcg—so numerical resemblance to research may partly explain the convention. That is an inference, not proof that community protocols were derived from those trials.",
      ],
      tables: [
        {
          caption: "Anecdotal protocol landscape",
          headers: ["Approach", "Amount", "Frequency", "Duration", "Evidence status"],
          rows: [
            [
              "Lower fixed-dose",
              "50–100 mcg SC",
              "1–2× daily",
              "Often 4–8 weeks",
              "Community report",
            ],
            [
              "Typical fixed-dose",
              "100–200 mcg SC",
              "1–3× daily",
              "Often 8–12 weeks",
              "Widely repeated; not outcome-validated",
            ],
            [
              "Higher fixed-dose",
              "200–300 mcg SC",
              "1–2× daily",
              "Variable",
              "Weakest rationale",
            ],
            [
              "Cycling claims",
              "Usually 100–200 mcg",
              "1–2× daily",
              "4–12 on / 4–8 off (various)",
              "No trial compared cycle lengths",
            ],
          ],
        },
      ],
    },
    {
      id: "clinical-vs-anecdotal",
      title: "Clinical evidence versus anecdotal practice",
      tables: [
        {
          caption: "Published human evidence vs online practice",
          headers: ["Question", "Published human evidence", "Online practice"],
          rows: [
            ["Dose unit", "Mostly mcg/kg", "Mostly fixed mcg"],
            [
              "Common SC exposure",
              "1.5–3 mcg/kg acute; 1.5 BID chronic",
              "100–200 mcg per administration",
            ],
            [
              "Frequency",
              "2 vs 3 over 24 h; BID × 16 weeks",
              "1–3× daily",
            ],
            [
              "Endpoints",
              "GH, IGF-1, hormones, exploratory cardiac",
              "Muscle, recovery, sleep, fat loss, anti-aging",
            ],
            [
              "Desensitization",
              "Acute + 16-wk attenuation; recovery after 4 wk off",
              "Used to justify cycling prescriptions",
            ],
          ],
        },
      ],
    },
    {
      id: "protocol-variations",
      title: "Protocol variations",
      numbered: [
        "**Once vs multiple daily.** No optimal frequency established. Third daily administration lacked 24-h GH advantage in one small study; closely spaced IV challenges showed rapid attenuation.",
        "**Bedtime or fasted timing.** Not established as superior clinical timings in Hexarelin trials.",
        "**Combination with GHRH analogues.** Diagnostic synergy (e.g., 0.25 mcg/kg Hexarelin + 1 mcg/kg GHRH IV) does not validate lifestyle stacks with CJC-1295 for body composition.",
        "**Cycling.** Supported: attenuation and recovery after 4 weeks off in one small study. Not supported: mandatory stop at week 4/6/8/12, or that 4 weeks off is optimally sufficient.",
      ],
    },
    {
      id: "preclinical",
      title: "Preclinical research doses",
      paragraphs: [
        "Animal and cell experiments clarify mechanisms but should **never** be converted directly into human doses by simple body-weight arithmetic. Examples include 500 mcg/kg/day SC in aged beagles, 160 mcg/kg IP BID in a rat cachexia model, and rapid in-vitro GHS-R desensitization—none define a human schedule.",
      ],
    },
    {
      id: "why-doses",
      title: "Why the studied doses were chosen",
      numbered: [
        "**Acute dose-ranging:** IV 0.5, 1, 2 mcg/kg defined response curve and approximate plateau.",
        "**Route exploration:** Larger SC/IN/oral doses compensated for reduced PD availability.",
        "**Repeated administration:** 1.5 mcg/kg SC carried into 24-h and 16-week studies.",
        "**Diagnostic testing:** Lower doses ± GHRH to probe pituitary reserve.",
        "**Mechanistic cardiac studies:** Single 2 mcg/kg IV under intensive monitoring.",
      ],
      paragraphsAfter: [
        "No published program established an optimal risk-benefit dose for muscle gain, fat loss, recovery, sleep, or longevity.",
      ],
    },
    {
      id: "evidence-ladder",
      title: "Evidence ladder",
      widget: "hex-evidence-ladder",
    },
    {
      id: "dose-escalation",
      title: "Dose escalation: what was actually studied",
      paragraphs: [
        "Hexarelin has a formal **rising-dose experiment**, not a validated week-by-week titration protocol. Participants received separate IV challenges of 0.5, 1, and 2 mcg/kg with washouts under supervision. Little additional peak GH occurred between 1 and 2 mcg/kg. This should not be rewritten as “start low and increase until side effects.”",
      ],
    },
    {
      id: "safety",
      title: "Safety and tolerability",
      paragraphs: [
        "Small monitored cohorts described acute doses as well tolerated, with slight short-term rises in prolactin, cortisol, and ACTH. The 16-week study did not show chronic ACTH/prolactin overstimulation. These statements should not be expanded into “proven safe.” Long-term cardiovascular, metabolic, pituitary, and cancer-related safety is not established; unapproved product quality is unknown.",
      ],
      widget: "hex-adverse-events",
    },
    {
      id: "sourcing",
      title: "Sourcing and origin checks",
      bullets: [
        "Does the source cite a primary human paper, or another vendor page?",
        "Is the amount weight-based or fixed? Is the route preserved accurately?",
        "Was the study acute or repeated—and in which population?",
        "Does “half-life” mean peptide concentration or GH-response decline?",
        "Is a cycling claim tested, or inferred from desensitization?",
      ],
    },
    {
      id: "bottom-line",
      title: "Bottom line",
      paragraphs: [
        "Hexarelin has a real but narrow human evidence base: saturable acute GH release, attenuation with repeated dosing, no 24-h GH advantage from a third daily dose in one small study, and no significant IGF-1 or body-composition improvement after 16 weeks BID in older adults.",
      ],
      highlight:
        "Fixed 100–200 mcg online protocols remain anecdotal. They are not validated by clinical research, and numerical overlap with trial language is not clinical validation.",
    },
  ],
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        question: "What is the standard Hexarelin dosage?",
        answer:
          "There is no approved or clinically established standard dosage. Human studies used different weight-based amounts for acute endocrine tests, route comparisons, diagnostic work, and a small repeated-dose experiment.",
      },
      {
        question: "What Hexarelin dose was used subcutaneously in humans?",
        answer:
          "Acute research used 1.5 and 3 mcg/kg SC. Repeated-dose research used 1.5 mcg/kg SC twice daily for 16 weeks in 12 healthy older adults. Those are study exposures, not general prescribing recommendations.",
      },
      {
        question: "Is 100 mcg a saturation dose?",
        answer:
          "Not universally. The acute IV study modeled half-maximal response at approximately 0.5–0.64 mcg/kg and near-maximal response at 2 mcg/kg. A fixed 100 mcg represents different mcg/kg exposures by body weight, and SC delivery is not IV delivery.",
      },
      {
        question: "Does Hexarelin require cycling?",
        answer:
          "Repeated exposure attenuated GH responsiveness, and the 16-week study found recovery four weeks after discontinuation. No controlled trial established a mandatory or optimal cycling schedule.",
      },
      {
        question: "Is twice daily or three times daily better?",
        answer:
          "In a six-person, 24-hour study, 1.5 mcg/kg SC given three times did not increase integrated GH more than two administrations. No larger outcome trial has established an optimal frequency.",
      },
      {
        question: "Does Hexarelin increase IGF-1?",
        answer:
          "Not consistently. A tiny pediatric intranasal series reported an increase, but the 16-week older-adult SC study did not find a significant IGF-1 change.",
      },
      {
        question: "Does Hexarelin improve muscle mass or fat loss?",
        answer:
          "The 16-week human study did not find significant changes in lean mass or total body fat. Animal studies and acute GH release do not establish a body-composition benefit in humans.",
      },
      {
        question: "What is Hexarelin's half-life?",
        answer:
          "A commonly cited approximately 55-minute figure appears to describe the decline in GH concentration after an acute dose. It should not be presented as a definitively measured Hexarelin plasma half-life without a direct pharmacokinetic source.",
      },
      {
        question: "Is Hexarelin the same as GHRP-6?",
        answer:
          "No. Both are growth hormone secretagogues, but they are different peptides. Their doses should not be treated as interchangeable.",
      },
      {
        question: "Is Hexarelin permitted in tested sport?",
        answer:
          "No. Growth hormone secretagogues are prohibited under WADA rules, and examorelin/Hexarelin falls within that class.",
      },
    ],
  },
  sources: {
    title: "Primary references",
    items: [
      {
        authors: "Imbimbo BP et al.",
        title: "Growth hormone-releasing activity of Hexarelin in humans: dose-response study",
        detail: "European Journal of Clinical Pharmacology, 1994.",
        href: "https://pubmed.ncbi.nlm.nih.gov/7957536/",
      },
      {
        authors: "Ghigo E et al.",
        title:
          "Growth hormone-releasing activity of Hexarelin by different routes of administration",
        detail: "1994.",
        href: "https://pubmed.ncbi.nlm.nih.gov/8126144/",
      },
      {
        authors: "Rahim A et al.",
        title: "Effects of 16 weeks of Hexarelin therapy in healthy elderly subjects",
        detail: "1998.",
        href: "https://pubmed.ncbi.nlm.nih.gov/9589671/",
      },
      {
        authors: "Rahim A et al.",
        title: "Pituitary-adrenal and prolactin responses during chronic Hexarelin administration",
        detail: "1999.",
        href: "https://pubmed.ncbi.nlm.nih.gov/10341859/",
      },
      {
        authors: "Maccario M et al.",
        title:
          "Effects of two versus three subcutaneous Hexarelin administrations on 24-hour GH secretion",
        detail: "2002.",
        href: "https://pubmed.ncbi.nlm.nih.gov/11888836/",
      },
      {
        authors: "Sartorio A et al.",
        title: "GH response to repeated Hexarelin administration in normal adults",
        detail: "1996.",
        href: "https://pubmed.ncbi.nlm.nih.gov/8719303/",
      },
      {
        authors: "Laron Z et al.",
        title: "Long-term intranasal Hexarelin in short children",
        detail: "1995 — uncontrolled pediatric series.",
        href: "https://pubmed.ncbi.nlm.nih.gov/8548949/",
      },
      {
        authors: "WADA",
        title: "2026 Prohibited List",
        detail: "Growth hormone secretagogues prohibited at all times.",
        href: "https://www.wada-ama.org/sites/default/files/2025-09/2026list_en_final_clean_september_2025.pdf",
      },
    ],
  },
  safety: {
    title: "Important Safety Information",
    paragraphs: [
      "Hexarelin (examorelin) is investigational and **not FDA approved**. There is **no approved dosage**.",
      "This page documents published research and commonly reported experimental protocols. It is **not** a dosing, reconstitution, cycle, or self-administration guide.",
      "Anyone with exposure who develops severe headache, visual change, chest pain, fainting, shortness of breath, marked swelling, allergic symptoms, persistent vomiting, or abnormal blood-glucose symptoms should seek prompt medical evaluation.",
    ],
  },
};
