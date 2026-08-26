/**
 * Adamax dosage guide.
 * No Adamax-specific human trial identified. Online 100–300 mcg protocols are anecdotal.
 */

export const ADAMAX_IDENTITY_CHECKS = [
  {
    id: "adamantyl-gly",
    label: "Adamantylated glycine (intended)",
    verdict: "Matches the usual Adamax design claim",
    detail:
      "Intended structure is typically Ac-MEHFPGP with an adamantane-linked terminal group plus C-terminal amidation. Confirm position/linkage of adamantane, molecular formula, and mass spectrometry match before comparing protocols.",
  },
  {
    id: "ala-gly",
    label: "Ordinary Ala-Gly (“AG” misread)",
    verdict: "Not the intended Adamax conjugate",
    detail:
      "Some suppliers list ordinary alanine-glycine residues or publish formulas that disagree. A milligram comparison is meaningless unless structures match. Do not treat this material as interchangeable with adamantane-modified Adamax.",
  },
  {
    id: "unsure",
    label: "Only the trade name “Adamax”",
    verdict: "Incomplete chemical specification",
    detail:
      "The name alone is not enough. Document full structure, sequence interpretation of “AG”, terminal groups, formula/mass agreement, MS + chromatographic purity, and counterion/solvents separately from peptide content.",
  },
];

export const ADAMAX_HUMAN_STATUS = [
  ["Human pharmacokinetic study", "None identified"],
  ["Human dose-ranging study", "None identified"],
  ["Controlled efficacy trial", "None identified"],
  ["Human safety study", "None identified"],
  ["Human half-life / bioavailability", "Unknown"],
  ["Minimum effective / MTD", "Unknown"],
];

export const ADAMAX_SC_PHASES = [
  {
    id: "baseline",
    phase: "Baseline",
    weeks: "Before week 1",
    amount: "None",
    purpose: "Record baseline measures; confirm material identity",
  },
  {
    id: "low",
    phase: "Low-exposure",
    weeks: "1–2",
    amount: "100 mcg/day",
    purpose: "Initial tolerability and signal detection",
  },
  {
    id: "mid",
    phase: "Intermediate",
    weeks: "3–4",
    amount: "200 mcg/day",
    purpose: "Evaluate whether response changes with exposure",
  },
  {
    id: "main",
    phase: "Main research",
    weeks: "5–8",
    amount: "300 mcg/day",
    purpose: "Most commonly reported upper amount",
  },
  {
    id: "washout",
    phase: "Washout",
    weeks: "9–12",
    amount: "None",
    purpose: "Observe persistence or reversal of measured effects",
  },
];

export const ADAMAX_COMPARE = {
  clinical: {
    title: "Adamax clinical research",
    status: "None established",
    rows: [
      ["Dose", "None established"],
      ["Frequency", "None established"],
      ["Route", "None established"],
      ["Duration", "None established"],
      ["Escalation", "None established"],
      ["Outcomes", "None validated"],
      ["Safety", "No Adamax-specific human safety study"],
    ],
  },
  anecdotal: {
    title: "Anecdotal research reports",
    status: "Community / supplier protocols",
    rows: [
      ["Dose", "Usually 100–300 mcg daily; some 1–2 mg intermittently"],
      ["Frequency", "Once daily, divided BID, or twice weekly"],
      ["Route", "Intranasal or subcutaneous"],
      ["Duration", "Commonly 2–8 weeks"],
      ["Escalation", "Often 100 → 200 → 300 mcg"],
      ["Outcomes", "Focus, memory, mood, neuroprotection claims"],
      ["Safety", "Subjective reports and class-based assumptions"],
    ],
  },
};

export const ADAMAX_ROUTES = [
  {
    id: "in",
    label: "Intranasal",
    summary: "Closer to Semax route history; Adamax nasal absorption unknown",
    points: [
      "Commonly 100–300 mcg/day for 2–4 weeks",
      "Often morning; optional early-afternoon division",
      "Spray mass requires concentration × pump volume",
      "Bacteriostatic water ≠ optimized nasal formulation",
    ],
  },
  {
    id: "sc",
    label: "Subcutaneous",
    summary: "Modern protocol-page convention; no route-comparison study",
    points: [
      "Most repeated: 100 → 200 → 300 mcg over 8 weeks",
      "Usually once daily in the morning",
      "Chosen for measurement consistency / systemic exposure",
      "Adamantane may change solubility vs Semax assumptions",
    ],
  },
];

export const ADAMAX_CLAIMS = [
  {
    id: "stronger",
    claim: "“Adamax is stronger than Semax”",
    status: "Not demonstrated",
    detail:
      "No comparative study established potency or efficacy. Modifications may change stability and distribution, but “modified” does not automatically mean more potent.",
  },
  {
    id: "semax-convert",
    claim: "Semax doses convert directly to Adamax",
    status: "No reliable conversion",
    detail:
      "Structural changes can alter molecular weight, absorption, distribution, and potency. Semax research is mechanistic context—not an Adamax conversion table. Stroke-outcome claims for Adamax often misattribute Semax data.",
  },
  {
    id: "nasa",
    claim: "Same as N-acetyl Semax amidate",
    status: "Not the same molecule",
    detail:
      "Both may include N-acetylation and C-amidation, but Adamax is intended to add an adamantane-linked terminal modification. Supplier ambiguity can blur the distinction.",
  },
  {
    id: "bbb",
    claim: "Adamantane guarantees better brain penetration / longer action",
    status: "Unverified",
    detail:
      "Adamantane can alter lipophilicity in medicinal chemistry generally. That this specific conjugate reaches the brain better or lasts longer needs comparative absorption and tissue-distribution data.",
  },
  {
    id: "titration",
    claim: "100 → 200 → 300 mcg identifies the effective dose",
    status: "Community convention only",
    detail:
      "Discrete phases are a reasonable experimental-design rationale, but the progression has not been shown to identify an effective dose or improve safety. Calendar alone should not force escalation after a stopping signal.",
  },
  {
    id: "twice-weekly",
    claim: "1–2 mg twice weekly is a typical dose",
    status: "Outlier protocol",
    detail:
      "Assumes longer persistence without Adamax PK support. Should not be merged with the daily 100–300 mcg convention when describing a “typical dose.”",
  },
];

export const ADAMAX_EVIDENCE_LADDER = [
  {
    level: "Standardized clinical dosage",
    exists: "None",
    confidence: "None",
  },
  {
    level: "Controlled human trial",
    exists: "None identified",
    confidence: "None",
  },
  {
    level: "Published Adamax animal dose study",
    exists: "None identified",
    confidence: "None",
  },
  {
    level: "Parent-peptide evidence",
    exists: "Semax and acetyl-Semax studies",
    confidence: "Moderate for those molecules; indirect for Adamax",
  },
  {
    level: "Published experimental Adamax evidence",
    exists: "Supplier chemical specs (often inconsistent)",
    confidence: "Low",
  },
  {
    level: "Anecdotal research protocol",
    exists: "100–300 mcg daily, IN or SC",
    confidence: "Low",
  },
  {
    level: "Higher-dose protocol",
    exists: "300–1,000 mcg daily or 1–2 mg twice weekly",
    confidence: "Very low",
  },
];

export const ADAMAX_AE_SIMPLE = [
  {
    topic: "Adamax-specific AE rates",
    status: "Unknown",
    note: "No human safety study identified",
  },
  {
    topic: "Community / class mentions",
    status: "Unquantified",
    note: "Headache, irritation, restlessness, sleep change",
  },
  {
    topic: "Product identity",
    status: "Major variable",
    note: "“AG” ambiguity; MS confirmation needed",
  },
  {
    topic: "Semax stroke claims",
    status: "Misattribution risk",
    note: "Do not transfer Semax outcomes to Adamax",
  },
];

export const ADAMAX_AE_FULL = [
  {
    topic: "Adamax-specific AE rates",
    status: "Unknown",
    note: "No human safety study",
    context: "Absence of an immediate subjective effect does not establish safety.",
  },
  {
    topic: "Headache / CNS irritability",
    status: "Community mention",
    note: "Frequency/causality unestablished",
    context:
      "Also listed among common early-stop criteria in research-protocol discussions.",
  },
  {
    topic: "Nasal / injection-site irritation",
    status: "Route-related",
    note: "IN vs SC delivery differences",
    context: "Formulation pH, osmolality, sterility, and preservatives matter.",
  },
  {
    topic: "Sleep / mood changes",
    status: "Community mention",
    note: "Vivid dreams, insomnia, anxiety, flat affect",
    context: "Late-day dosing often avoided in protocols measuring sleep.",
  },
  {
    topic: "Identity / quality failure",
    status: "Primary hazard domain",
    note: "Wrong structure sold as Adamax",
    context:
      "Purity % alone cannot confirm adamantane linkage. Methionine oxidation, aggregation, endotoxin, residuals also matter.",
  },
  {
    topic: "Higher-risk populations",
    status: "Extra caution",
    note: "Pregnancy, seizure, bipolar, CVD, neuro disease",
    context:
      "Neurological conditions should not be self-treated with an uncharacterized research peptide.",
  },
];

export const ADAMAX_DOSAGE_GUIDE = {
  title: "Adamax Dosage: Research Protocols, Evidence, and Administration Routes",
  updated: "Updated August 2026",
  callout:
    "**Research note:** Adamax has **no standardized clinical dosage**. The protocols below summarize amounts reported by peptide references, suppliers, and research communities rather than doses established in human clinical trials. **No Adamax-specific human trial was identified.**",
  intro: [
    "**Adamax-specific human trials have not established a dose.** No published pharmacokinetic, dose-ranging, efficacy, or safety trial of Adamax was identified.",
    "The most commonly reported range is **100–300 mcg per day**—often with gradual SC escalation over eight weeks, or shorter **2–4 week** intranasal schedules. Higher 300–1,000 mcg daily or 1–2 mg twice-weekly protocols circulate with less consistency and no stronger evidence.",
    "**Identity must be verified before comparing protocols.** “Adamax” is generally intended to mean an N-acetylated Semax analog with an adamantane-modified C-terminus, but supplier sequences and molecular specifications are inconsistent.",
  ],
  glance: {
    title: "Adamax dosage in 30 seconds",
    table: {
      headers: ["Question", "Research summary"],
      rows: [
        ["**Published Adamax human dose**", "None identified"],
        ["**Most commonly reported amount**", "100–300 mcg daily"],
        ["**Common intranasal schedule**", "100–300 mcg/day for 2–4 weeks"],
        [
          "**Common subcutaneous schedule**",
          "100 → 200 → 300 mcg/day over 8 weeks",
        ],
        [
          "**Common timing**",
          "Morning; sometimes a second early-afternoon administration",
        ],
        [
          "**Reported washout**",
          "Often 2–4 weeks or a break equal to the cycle length",
        ],
        ["**Evidence quality**", "Anecdotal / insufficient"],
      ],
    },
  },
  sections: [
    {
      id: "what-is",
      title: "What is Adamax?",
      paragraphs: [
        "Adamax is a designer nootropic peptide generally described as a modified derivative of **Semax**, the heptapeptide Met-Glu-His-Phe-Pro-Gly-Pro (`MEHFPGP`). Semax was developed from the ACTH(4–7) melanocortin sequence and extended with Pro-Gly-Pro to improve stability while removing adrenocorticotropic hormonal activity.",
        "Adamax is most often represented as `Ac-Met-Glu-His-Phe-Pro-Gly-Pro-[adamantane-modified glycine]-NH2` or abbreviated `Ac-MEHFPGP-AG-NH2`. Intended modifications: **N-terminal acetylation**, **C-terminal amidation**, and an **adamantane-linked terminal group**. These design claims are chemically plausible, but Adamax-specific bioavailability, brain penetration, half-life, and receptor pharmacology have **not** been established in published human studies.",
      ],
    },
    {
      id: "identity",
      title: "The Adamax identity problem",
      paragraphs: [
        "The abbreviation `AG` is not interpreted consistently. Some sources use it to mean **adamantylated glycine**, while some suppliers list ordinary alanine-glycine residues or publish molecular formulas that do not agree. The name Adamax alone is therefore not a complete chemical specification.",
        "This matters for dosing because two materials sold under the same name may not have the same molecular weight, solubility, stability, or biological activity. A milligram comparison is meaningless unless the structures match.",
      ],
      highlight:
        "The first question in any Adamax study should not be “Which dose?” but “Which molecule?”",
      widget: "adamax-identity-gate",
      tables: [
        {
          caption: "Identity fields to document",
          headers: ["Identity field", "What should be documented"],
          rows: [
            [
              "Full chemical structure",
              "Position and linkage of the adamantane group",
            ],
            [
              "Amino-acid sequence",
              "Whether “AG” means alanine-glycine or modified glycine",
            ],
            ["Terminal groups", "N-acetylation and C-terminal amidation"],
            [
              "Molecular formula and mass",
              "Must agree with the proposed structure",
            ],
            [
              "Analytical confirmation",
              "Mass spectrometry plus chromatographic purity",
            ],
            [
              "Counterion and residual solvents",
              "Reported separately from peptide content",
            ],
          ],
        },
      ],
    },
    {
      id: "regulatory",
      title: "Regulatory and research status",
      paragraphs: [
        "Adamax is an experimental designer peptide rather than an established medicine. It does not have a US prescribing label or a standardized clinical regimen. New Zealand’s medicines regulator has discussed Adamax within a broader review of unscheduled peptides, reflecting its appearance in imported designer-peptide products rather than a completed drug-development program.",
      ],
      highlight:
        "All numerical protocols for Adamax should be labeled reported research protocols, not clinical dosing guidelines.",
    },
    {
      id: "human-trials",
      title: "Dosage used in human clinical trials",
      paragraphs: [
        "No Adamax-specific human clinical trial was identified in PubMed or ClinicalTrials.gov. Claims that Adamax improved outcomes after stroke generally misattribute **Semax** research to Adamax. The two molecules should not be treated as interchangeable.",
      ],
      widget: "adamax-human-status",
    },
    {
      id: "research-dosage",
      title: "Adamax research dosage",
      paragraphs: [
        "Two main dosage traditions appear online: a lower-dose **intranasal** approach derived from Semax and early nootropic-community use, and a **subcutaneous** approach popularized by modern peptide protocol pages. Neither has been validated in controlled Adamax research.",
        "No numerical Adamax protocol has direct human evidence. There is no published comparison showing that subcutaneous delivery is more bioavailable, more effective, or better tolerated than intranasal delivery.",
      ],
      tables: [
        {
          caption: "Commonly reported research protocols (anecdotal)",
          headers: [
            "Research protocol",
            "Reported dose",
            "Frequency",
            "Route",
            "Reported duration",
            "Evidence basis",
          ],
          rows: [
            [
              "Low intranasal",
              "100 mcg/day",
              "Once morning",
              "Intranasal",
              "2–4 weeks",
              "Community convention; no Adamax trial",
            ],
            [
              "Divided intranasal",
              "100–300 mcg/day total",
              "Morning ± early afternoon",
              "Intranasal",
              "2–4 weeks",
              "Semax-family extrapolation + anecdotal Adamax",
            ],
            [
              "Low subcutaneous",
              "100 mcg/day",
              "Once daily",
              "SC",
              "1–2 weeks before reassessment",
              "Modern protocol-page convention",
            ],
            [
              "Standard titrated SC",
              "100 → 200 → 300 mcg/day",
              "Once daily",
              "SC",
              "8 weeks total",
              "Frequently repeated anecdotal protocol",
            ],
            [
              "Fixed SC",
              "200–300 mcg/day",
              "Once daily",
              "SC",
              "4–8 weeks",
              "Anecdotal; no dose-response comparison",
            ],
            [
              "Higher daily",
              "300–1,000 mcg/day",
              "Once daily",
              "SC",
              "6–8 weeks",
              "Less consistent; greater uncertainty",
            ],
            [
              "Intermittent high-dose",
              "1–2 mg per administration",
              "Twice weekly",
              "SC",
              "4–12 weeks",
              "Outlier commercial protocol; not clinical evidence",
            ],
          ],
        },
      ],
    },
    {
      id: "sc-protocol",
      title: "Complete reported subcutaneous research protocol",
      paragraphs: [
        "The schedule below consolidates the most consistently reported **subcutaneous** approach. It is a reproducible research reference—**not** a clinically validated regimen. The 100 → 200 → 300 mcg progression is a community titration convention; it has not been shown to identify an effective dose or improve safety.",
        "The calendar alone should not force escalation. In a controlled research design, the next phase begins only if the previous phase produced no predefined stopping event and the test material remains stable and analytically verified.",
      ],
      widget: "adamax-sc-timeline",
      tables: [
        {
          caption: "Example research measures (define before exposure)",
          headers: ["Domain", "Example measure", "Suggested observation points"],
          rows: [
            [
              "Attention",
              "PVT or continuous-performance task",
              "Baseline; end weeks 2, 4, 8; washout",
            ],
            [
              "Working memory",
              "Digit span or n-back",
              "Same time of day at each assessment",
            ],
            [
              "Learning",
              "Standardized verbal/visual learning task",
              "Baseline, week 4, week 8, washout",
            ],
            ["Mood / anxiety", "Validated short-form scale", "Baseline and weekly"],
            ["Sleep", "Diary or wearable duration/efficiency", "Daily"],
            [
              "Cardiovascular",
              "Resting HR and blood pressure",
              "Baseline and predefined post-exposure intervals",
            ],
            [
              "Tolerability",
              "Headache, irritability, fatigue, nausea, sleep, injection reaction",
              "Daily",
            ],
          ],
        },
      ],
      notes: [
        "**Early-stop criteria (examples):** severe/persistent headache; marked agitation, anxiety, mood change, or insomnia; allergic symptoms or generalized rash; significant BP/HR change; neurological symptoms (confusion, weakness, visual disturbance, seizure); significant injection-site reaction or suspected contamination. Severe or neurological symptoms warrant medical evaluation—not protocol adjustment.",
      ],
    },
    {
      id: "in-protocol",
      title: "Complete reported intranasal research protocol",
      paragraphs: [
        "The intranasal approach is closer to the established route used for Semax, but Adamax-specific nasal absorption remains unknown. The 300 mcg condition should be treated as a separate experimental arm—not assumed automatically superior. Parallel-group designs comparing 100, 200, and 300 mcg generate more useful information than escalating every subject through all three amounts.",
      ],
      tables: [
        {
          caption: "Four-week intranasal schedule (reported)",
          headers: [
            "Phase",
            "Days",
            "Reported total daily amount",
            "Frequency",
            "Timing",
          ],
          rows: [
            [
              "Baseline",
              "3–7 days before",
              "None",
              "—",
              "Establish cognitive, mood, sleep baseline",
            ],
            ["Initial", "1–7", "100 mcg/day", "Once daily", "Morning"],
            [
              "Main",
              "8–28",
              "200 mcg/day",
              "Once daily or two equal administrations",
              "Morning; optional early afternoon",
            ],
            [
              "Optional upper",
              "Only when prespecified",
              "300 mcg/day total",
              "One or two administrations",
              "Avoid late-day timing if measuring sleep",
            ],
            [
              "Washout",
              "2–4 weeks",
              "None",
              "—",
              "Repeat the same outcome measures",
            ],
          ],
        },
      ],
      widgetAfter: "adamax-spray-calc",
      notes: [
        "**Metered-spray accuracy:** “One spray” is not a unit of mass unless concentration and delivered volume are known. `mcg/spray = concentration (mg/mL) × pump volume (mL) × 1,000`. Example: 1 mg/mL × 0.10 mL → nominal 100 mcg/spray. Calibrate gravimetrically. This arithmetic does **not** validate the target dose or nasal bioavailability.",
      ],
    },
    {
      id: "reported-range",
      title: "Reported Adamax research dosage range",
      tables: [
        {
          caption: "Online protocol landscape",
          headers: ["Field", "Reported information"],
          rows: [
            [
              "Broad reported range",
              "≈100 mcg to 1 mg per day; isolated protocols report more",
            ],
            ["Most consistently reported range", "100–300 mcg per day"],
            ["Most common starting amount", "100 mcg daily"],
            ["Most common upper amount (titrated)", "300 mcg daily"],
            [
              "Common frequency",
              "Once daily; IN amounts may be divided twice daily",
            ],
            ["Common timing", "Morning or morning + early afternoon"],
            ["Intranasal duration", "Commonly 2–4 weeks"],
            ["Subcutaneous duration", "Commonly 4–8 weeks"],
            ["Washout", "Often 2–4 weeks or equal to exposure"],
            ["Human-trial overlap", "None"],
            ["Evidence quality", "Low / insufficient"],
          ],
        },
      ],
      paragraphs: [
        "The broad range is **not** a therapeutic window. It represents disagreement among unsourced protocols.",
      ],
    },
    {
      id: "clinical-vs-anecdotal",
      title: "Anecdotal versus clinically studied dosing",
      widget: "adamax-clinical-vs-anecdotal",
    },
    {
      id: "variations",
      title: "Research protocol variations",
      paragraphs: [
        "Adamax has no published route-comparison study, and its adamantane modification may change solubility and membrane interaction in ways that make Semax data unreliable.",
      ],
      widget: "adamax-route-compare",
      numbered: [
        "**Once daily versus divided dosing.** Morning-only is simplest and most repeated. Dividing between morning and early afternoon aims to extend subjective effects while avoiding sleep disruption. Without human PK, neither is “optimal.”",
        "**Short cycle versus eight-week cycle.** 2–4 weeks reflects Semax-derived IN conventions; 6–8 weeks is common on injectable protocol pages. No Adamax study compared them.",
        "**Daily versus twice weekly.** Twice-weekly 1–2 mg is an outlier relative to 100–300 mcg daily schedules and should not be merged into a “typical dose.”",
      ],
    },
    {
      id: "why-doses",
      title: "Why these research doses are used",
      numbered: [
        "**Semax-derived convention** — scale borrowed from intranasal Semax; Semax doses cannot establish Adamax potency.",
        "**Assumed stability** — N-acetylation changes Semax chemistry (published), but does not supply Adamax human PK.",
        "**Adamantane modification** — lipophilicity rationale is general medicinal chemistry, not verified Adamax brain penetration.",
        "**Conservative titration logic** — discrete 100/200/300 phases reduce early confounding; amounts remain unvalidated.",
      ],
      widgetAfter: "adamax-claim-checker",
    },
    {
      id: "mechanism",
      title: "Mechanism of action",
      paragraphs: [
        "Adamax-specific target-binding data were not identified. Proposed mechanisms are largely inferred from Semax and melanocortin-fragment research.",
      ],
      numbered: [
        "**BDNF and neurotrophic signaling.** Semax can influence BDNF-related signaling in animal models. Adamax is frequently claimed to preserve this activity—direct evidence lacking.",
        "**Dopaminergic and serotonergic regulation.** Semax research reports monoamine/gene-expression changes after injury or stress. Plausible research domains—not proof of cognitive enhancement in healthy humans.",
        "**Melanocortin-derived signaling.** MEHF derives from ACTH(4–7); Semax was designed to lack full ACTH endocrine activity. Adamax is marketed similarly; direct receptor profiling is needed.",
      ],
    },
    {
      id: "preclinical",
      title: "Preclinical evidence",
      paragraphs: [
        "No peer-reviewed Adamax-specific animal dose study was identified. Most citations attached to Adamax pages concern Semax, acetylated Semax, ACTH fragments, or other cognitive peptides.",
      ],
      tables: [
        {
          caption: "Evidence source map",
          headers: ["Evidence source", "What it supports", "What it cannot establish"],
          rows: [
            [
              "Semax animal studies",
              "Parent peptide can affect learning, neurotrophic signaling, injury models",
              "Adamax efficacy, potency, dose, or safety",
            ],
            [
              "Acetyl-Semax chemistry",
              "N-acetylation changes stability/chemical behavior",
              "Full Adamax PK or brain penetration",
            ],
            [
              "General adamantane medicinal chemistry",
              "Adamantane can alter lipophilicity/disposition",
              "That this conjugate reaches brain or lasts longer",
            ],
            [
              "Community Adamax reports",
              "Which protocols are discussed",
              "Controlled efficacy, causality, or AE frequency",
            ],
          ],
        },
      ],
    },
    {
      id: "evidence-ladder",
      title: "Dosage evidence ladder",
      widget: "adamax-evidence-ladder",
    },
    {
      id: "safety",
      title: "Side effects and safety considerations",
      paragraphs: [
        "Adamax-specific adverse-event rates are unknown. Community mentions or class inferences include headache; nasal or injection-site irritation; restlessness, anxiety, or irritability; fatigue or a “flat” feeling; nausea; vivid dreams or sleep disruption; and mood changes. These do not establish frequency or causality.",
        "Human safety is especially uncertain in pregnancy or breastfeeding, childhood, seizure disorders, bipolar-spectrum illness, significant anxiety or insomnia, uncontrolled cardiovascular disease, active neurological disease, and concurrent psychoactive-drug use.",
      ],
      widget: "adamax-adverse-events",
      bullets: [
        "Sterility and endotoxin for parenteral material",
        "Residual synthesis reagents and solvents",
        "Oxidation of methionine",
        "Peptide aggregation or degradation",
        "Concentration accuracy; pH and particulate matter",
        "Stability after reconstitution",
      ],
    },
    {
      id: "storage",
      title: "Storage and handling",
      paragraphs: [
        "Supplier instructions commonly describe refrigerated storage at **2–8°C** after reconstitution and protection from light. Many protocol pages use a 28-day handling window, but no published Adamax stability study was identified to validate that exact period across formulations.",
        "For serious laboratory work, stability should be defined analytically (appearance, pH, chromatographic purity, mass confirmation, particulate matter, and—when applicable—sterility/endotoxin). Repeated freeze-thaw, vigorous agitation, heat, light, and prolonged unvalidated storage may accelerate degradation. A clear solution is not necessarily chemically intact.",
      ],
    },
    {
      id: "bottom-line",
      title: "Bottom line",
      paragraphs: [
        "Adamax is a poorly characterized designer derivative of Semax with a plausible neurotrophic research rationale but almost no direct published evidence. No human or animal dose-ranging study has established its pharmacokinetics, efficacy, safety, optimal route, or maximum exposure.",
        "The most defensible description of the current research-dosage landscape is **100–300 mcg daily**. The most complete recurring subcutaneous protocol uses 100 mcg/day for weeks 1–2, 200 mcg/day for weeks 3–4, and 300 mcg/day for weeks 5–8, followed by a 2–4-week washout. Intranasal protocols generally use 100–300 mcg/day for 2–4 weeks. Both are **anecdotal research conventions**.",
      ],
      highlight:
        "Confirm the molecule first. Structural verification is essential because the Adamax name is used inconsistently and “AG” can describe chemically different products.",
    },
  ],
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        question: "What is the most commonly reported Adamax dose?",
        answer:
          "The most consistent online range is 100–300 mcg per day. A commonly repeated subcutaneous schedule uses 100 mcg daily for two weeks, 200 mcg daily for two weeks, and 300 mcg daily for four weeks.",
      },
      {
        question: "What is the complete reported Adamax protocol?",
        answer:
          "The most coherent reported protocol is an eight-week subcutaneous schedule of 100 mcg/day in weeks 1–2, 200 mcg/day in weeks 3–4, and 300 mcg/day in weeks 5–8, followed by a 2–4-week washout. A shorter intranasal alternative reports 100–300 mcg/day for 2–4 weeks. Neither has been tested in an Adamax clinical trial.",
      },
      {
        question: "Is Adamax taken intranasally or subcutaneously?",
        answer:
          "Both routes appear in research discussions. Intranasal use derives from Semax conventions; subcutaneous use is common on newer peptide protocol pages. Adamax-specific bioavailability has not been established for either route.",
      },
      {
        question: "When is Adamax usually administered?",
        answer:
          "Morning is the most repeated timing. When the daily intranasal amount is divided, the second administration is generally placed in early afternoon. This timing is intended to limit sleep disruption, but it has not been formally compared.",
      },
      {
        question: "How long is an Adamax cycle?",
        answer:
          "Intranasal cycles are commonly reported as 2–4 weeks. Subcutaneous cycles are commonly reported as 4–8 weeks. Longer 12–16-week schedules appear less often and have no stronger evidence.",
      },
      {
        question: "Does Adamax need to be cycled?",
        answer:
          "No study has determined whether cycling is necessary. Research protocols often include a washout so investigators can assess whether changes persist or reverse—that is an experimental-design choice rather than proof of tolerance prevention.",
      },
      {
        question: "Is Adamax stronger than Semax?",
        answer:
          "That claim has not been demonstrated in a comparative study. The modifications may change stability and distribution, but “modified” does not automatically mean more potent or more effective.",
      },
      {
        question: "Is Adamax the same as N-acetyl Semax amidate?",
        answer:
          "No. Both may contain N-terminal acetylation and C-terminal amidation, but Adamax is intended to include an additional adamantane-linked terminal modification. Supplier ambiguity can blur this distinction.",
      },
      {
        question: "What does Ac-MEHFPGP-AG-NH2 mean?",
        answer:
          "Ac indicates N-terminal acetylation, MEHFPGP is the Semax amino-acid sequence, and NH2 indicates C-terminal amidation. The AG portion is ambiguous across suppliers: it may refer to an adamantane-modified glycine or be misread as alanine-glycine.",
      },
      {
        question: "Is there a clinically established maximum Adamax dose?",
        answer:
          "No. The upper amounts reported online are not maximum tolerated doses. The commonly cited 300 mcg daily level is simply the upper phase of a popular anecdotal titration.",
      },
      {
        question: "Can Semax doses be converted directly to Adamax doses?",
        answer:
          "No reliable conversion exists. Structural modifications can change molecular weight, absorption, distribution, and potency. Semax research is mechanistic context, not an Adamax conversion table.",
      },
    ],
  },
  sources: {
    title: "References",
    items: [
      {
        authors: "Chemistry",
        title: "Influence of N-terminal acetylation on Semax chemistry",
        detail: "PubMed.",
        href: "https://pubmed.ncbi.nlm.nih.gov/27586814/",
      },
      {
        authors: "Semax background",
        title: "Semax as an ACTH(4–10) analog",
        detail: "Parent-peptide context only.",
        href: "https://pubmed.ncbi.nlm.nih.gov/16996699/",
      },
      {
        authors: "Semax routes",
        title: "Semax after intranasal and intraperitoneal administration in animals",
        detail: "Not Adamax dose evidence.",
        href: "https://pubmed.ncbi.nlm.nih.gov/21268834/",
      },
      {
        authors: "Review",
        title: "Peptides acting as cognitive enhancers",
        detail: "Broader peptide/nootropic context.",
        href: "https://pubmed.ncbi.nlm.nih.gov/29030286/",
      },
      {
        authors: "Protocol documentation",
        title: "Reported 100–300 mcg Adamax titration protocol",
        detail: "Documents online convention — not clinical validation.",
        href: "https://everythingpeptide.com/protocol-adamax.html",
      },
      {
        authors: "Protocol documentation",
        title: "Reported 300–1,000 mcg Adamax protocol",
        detail: "Secondary commercial reporting.",
        href: "https://www.dosagepeptide.com/single-peptide-dosages/adamax-10mg-vial-dosage-protocol/",
      },
      {
        authors: "Protocol documentation",
        title: "Example of a higher twice-weekly Adamax convention",
        detail: "Outlier relative to 100–300 mcg daily.",
        href: "https://www.mypeptidematch.com/protocols/adamax-dosing-5mg",
      },
      {
        authors: "Identity review",
        title: "Adamax identity and evidence review",
        detail: "Supplier ambiguity and Semax comparison context.",
        href: "https://www.dosagepeptide.com/what-is-adamax-acth-neuropeptide-vs-semax-research/",
      },
    ],
  },
  safety: {
    title: "Important Safety Information",
    paragraphs: [
      "Adamax has **no standardized clinical dosage** and **no Adamax-specific human pharmacokinetic, dose-ranging, efficacy, or safety trial** identified.",
      "This page documents commonly reported research protocols. It is **not** a dosing, self-administration, or medical treatment guide. Confirm chemical identity before comparing any microgram amounts.",
      "Adverse-event rates are unknown. Neurological conditions should not be self-treated with an uncharacterized research peptide. Seek medical evaluation for severe or neurological symptoms.",
    ],
  },
};
