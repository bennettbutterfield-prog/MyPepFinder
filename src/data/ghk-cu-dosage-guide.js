/**
 * GHK-Cu (copper tripeptide-1) dosage guide.
 * Human evidence is concentrated in topical skin research.
 * Injectable 1–2 mg protocols are community conventions — not trial-established doses.
 */

/** ≈15.81% elemental Cu for ~401.9 g/mol 1:1 GHK-Cu complex */
export const GHK_CU_COPPER_FRACTION = 0.1581;

const GHK_PEPTIDE_FRACTION = 1 - GHK_CU_COPPER_FRACTION;

export function ghkCuCopperFromComplexMg(mg) {
  const complexMg = Number(mg);
  if (!Number.isFinite(complexMg) || complexMg <= 0) return null;
  return {
    complexMg,
    ghkMgApprox: complexMg * GHK_PEPTIDE_FRACTION,
    copperMcg: complexMg * GHK_CU_COPPER_FRACTION * 1000,
  };
}

export const GHK_CU_IDENTITY = [
  {
    id: "ghk-free",
    label: "Copper-free GHK",
    verdict: "Different molecule — not interchangeable with GHK-Cu",
    detail:
      "GHK (Gly-His-Lys) is the copper-free tripeptide (~340.38 g/mol). It lacks coordinated copper, differs in color and redox chemistry, and should not share a dosage table with the GHK-Cu complex.",
  },
  {
    id: "ghk-cu",
    label: "Confirmed GHK-Cu complex",
    verdict: "Required for copper-tripeptide dosing math",
    detail:
      "Authentic GHK-Cu is a one-copper complex (~400.9–401.9 g/mol). Confirm sequence (Gly-His-Lys), copper occupancy, copper-to-peptide ratio, and whether stated mass refers to complex mass vs peptide mass.",
  },
  {
    id: "unsure",
    label: "Label unclear or trade name only",
    verdict: "Incomplete — confirm identity before comparing protocols",
    detail:
      "“Copper tripeptide,” “GHK,” and cosmetic INCI names do not establish whether the material is copper-free GHK, a 1:1 GHK-Cu complex, or a salt/hydrate with free copper. Analytics should resolve identity before unit charts apply.",
  },
];

export const GHK_CU_INJECTABLE_STATUS = [
  ["Human pharmacokinetics", "None identified"],
  ["Dose-ranging trial", "None identified"],
  ["Controlled efficacy trial", "None identified"],
  ["Long-term safety study", "None identified"],
  ["Maximum tolerated dose", "Not established"],
];

export const GHK_CU_SC_PHASES = [
  {
    id: "low",
    phase: "Low phase",
    weeks: "1–4",
    amount: "1 mg",
    units: "6 units (3 mL recon)",
    frequency: "Five days weekly",
    copperMcg: "158 mcg",
    phaseTotal: "20 mg GHK-Cu",
    purpose: "Initial tolerability before escalation",
  },
  {
    id: "intermediate",
    phase: "Intermediate phase",
    weeks: "5–8",
    amount: "1.5 mg",
    units: "9 units (3 mL recon)",
    frequency: "Five days weekly",
    copperMcg: "237 mcg",
    phaseTotal: "30 mg GHK-Cu",
    purpose: "Mid-cycle exposure step — anecdotal titration convention",
  },
  {
    id: "upper",
    phase: "Upper phase",
    weeks: "9–12",
    amount: "2 mg",
    units: "12 units (3 mL recon)",
    frequency: "Five days weekly",
    copperMcg: "316 mcg",
    phaseTotal: "40 mg GHK-Cu",
    purpose: "Highest commonly reported per-administration amount",
  },
  {
    id: "washout",
    phase: "Washout",
    weeks: "13–16 or 13–20",
    amount: "None",
    units: "—",
    frequency: "—",
    copperMcg: "—",
    phaseTotal: "—",
    purpose: "Assess persistence or reversal; limit unstudied cumulative exposure",
  },
];

export const GHK_CU_COMPARE = {
  clinical: {
    title: "Human clinical research",
    status: "Topical skin and wound studies",
    rows: [
      ["Form", "Topical creams, gels, or specialized carriers"],
      ["Dose", "Often not fully reported as mg or percentage"],
      ["Frequency", "Once or twice daily in several skin studies"],
      ["Route", "Topical"],
      ["Duration", "Usually 8–12 weeks"],
      ["Outcomes", "Skin density, thickness, appearance, collagen, wound closure"],
      ["Safety evidence", "Limited but directly relevant to local skin exposure"],
    ],
  },
  anecdotal: {
    title: "Community injectable protocols",
    status: "Anecdotal conventions",
    rows: [
      ["Form", "Reconstituted GHK-Cu solution"],
      ["Dose", "Usually 1–2 mg per administration"],
      ["Frequency", "Three times weekly to daily"],
      ["Route", "Subcutaneous"],
      ["Duration", "Usually 4–12 weeks"],
      ["Outcomes", "Skin, hair, recovery, or systemic “anti-aging” claims"],
      ["Safety evidence", "No controlled human injection study identified"],
    ],
  },
};

export const GHK_CU_CLAIMS = [
  {
    id: "injectable-better",
    claim: "Injectable GHK-Cu is better than topical GHK-Cu",
    status: "Not demonstrated",
    detail:
      "Topical use has direct human skin research. Injectable use may create systemic exposure, but human PK, dose-response, efficacy, and long-term safety are unresolved. No head-to-head trial compares routes.",
  },
  {
    id: "bedtime-fasting",
    claim: "Bedtime or fasting administration improves outcomes",
    status: "Not demonstrated",
    detail:
      "Bedtime and meal-separation instructions appear in some clinic protocols. No GHK-Cu trial has shown that bedtime, fasting, or meal separation changes absorption or outcomes.",
  },
  {
    id: "gene-reset",
    claim: "GHK “resets thousands of genes” and reverses aging",
    status: "Overstated",
    detail:
      "Connectivity-map analyses suggest GHK can influence large gene-expression networks. This is based on database and laboratory analyses — not a clinical endpoint or proof that injected GHK-Cu reverses human aging.",
  },
  {
    id: "ahk-hair",
    claim: "GHK-Cu hair-growth evidence from human follicle studies",
    status: "Misattributed",
    detail:
      "A commonly cited human-follicle study involved AHK-Cu, not GHK-Cu. Evidence for meaningful human hair regrowth with GHK-Cu is much weaker than for established treatments.",
  },
  {
    id: "blue-purity",
    claim: "Blue color proves GHK-Cu purity",
    status: "Insufficient",
    detail:
      "Blue or blue-violet color is consistent with coordinated copper(II) but cannot establish peptide identity, concentration, free copper, sterility, or absence of impurities.",
  },
  {
    id: "microneedling",
    claim: "Cosmetic GHK-Cu serums are safe to microneedle at home",
    status: "Not established",
    detail:
      "Microneedling changes barrier integrity and exposure. A permeation study used excised skin — not a clinical dosing trial. Cosmetic preservatives, fragrance, pH, and nonsterile excipients may not be appropriate for freshly disrupted skin.",
  },
];

export const GHK_CU_EVIDENCE_LADDER = [
  {
    level: "Standardized drug dosage",
    exists: "None",
    confidence: "None",
  },
  {
    level: "Controlled human topical research",
    exists: "Multiple small skin and wound studies",
    confidence: "Moderate for narrow topical contexts",
  },
  {
    level: "Human injectable research",
    exists: "None identified",
    confidence: "None",
  },
  {
    level: "Preclinical research",
    exists: "Extensive cell and animal literature",
    confidence: "Moderate for mechanisms; low for human dose selection",
  },
  {
    level: "Topical community protocol",
    exists: "0.05–2%, once or twice daily",
    confidence: "Low-to-moderate; route aligns with human research but exact formulations differ",
  },
  {
    level: "Injectable community protocol",
    exists: "1–2 mg, three times weekly to daily",
    confidence: "Low",
  },
  {
    level: "Higher injectable protocol",
    exists: "2–3 mg",
    confidence: "Very low",
  },
];

export const GHK_CU_AE_SIMPLE = [
  {
    topic: "Topical tolerability",
    status: "Generally low-irritancy",
    note: "Burning, redness, itching, or contact dermatitis can occur",
  },
  {
    topic: "Injection-site reactions",
    status: "Community reports",
    note: "Stinging, redness, swelling, bruising — incidence unknown",
  },
  {
    topic: "Copper-related risk",
    status: "Context-dependent",
    note: "Caution in Wilson disease, liver disease, or with copper supplements",
  },
  {
    topic: "Product quality (injectable)",
    status: "Elevated concern",
    note: "Identity, free copper, sterility, endotoxin must be verified",
  },
];

export const GHK_CU_AE_FULL = [
  {
    topic: "Topical tolerability",
    status: "Generally low-irritancy",
    note: "Vehicle and concentration may drive irritation",
    context:
      "Burning, redness, itching, dryness, or contact dermatitis can occur. Product vehicle, preservatives, pH, concentration, and other actives may be responsible rather than GHK-Cu itself.",
  },
  {
    topic: "Injection-site reactions",
    status: "Unquantified",
    note: "No controlled incidence data",
    context:
      "Community reports describe brief stinging, redness, swelling, or bruising. Complex concentration and formulation pH may affect local tolerability.",
  },
  {
    topic: "Copper-related risk",
    status: "Assay-dependent",
    note: "Elemental copper depends on verified form",
    context:
      "Particular caution with Wilson disease, other copper-metabolism disorders, significant liver disease, abnormal copper/ceruloplasmin, or substantial copper supplementation. Serum copper alone does not fully describe body copper handling.",
  },
  {
    topic: "Angiogenesis / abnormal growth",
    status: "Class concern",
    note: "Repair / vascular signaling overlap",
    context:
      "GHK-Cu is studied for angiogenic and repair signaling. Active or recent malignancy is commonly treated as an exclusion; exact risk has not been quantified.",
  },
  {
    topic: "Product-quality risk",
    status: "Elevated for injectable use",
    note: "Cosmetic grade ≠ parenteral grade",
    context:
      "Relevant variables include free copper, peptide identity, complexation ratio, aggregation, sterility, endotoxin, particulate matter, concentration, and stability.",
  },
  {
    topic: "Formulation compatibility",
    status: "Context-dependent",
    note: "Absolute skincare incompatibility claims are too strong",
    context:
      "Strong chelators, extreme pH, oxidizing/reducing agents, and incompatible preservatives can disrupt the copper complex. Compatibility with vitamin C, retinoids, or acids depends on formulation chemistry and stability testing.",
  },
];

export const GHK_CU_DOSAGE_GUIDE = {
  title: "GHK-Cu Dosage: Injectable and Topical Research Protocols",
  updated: "Updated August 2026",
  callout:
    "**Research note:** Human GHK-Cu evidence is concentrated in **topical skin and wound research**. The widely reported subcutaneous doses are **community and clinic protocols** rather than doses established by controlled injectable trials.",
  intro: [
    "**Topical GHK-Cu has the strongest human evidence.** Facial, eye-area, and wound studies generally used topical formulations for 8–12 weeks.",
    "The most repeated injectable range is **1–2 mg per administration**, often on daily, five-days-per-week, or three-times-weekly schedules. A common 12-week protocol escalates **1 mg → 1.5 mg → 2 mg** five days weekly.",
    "If 1 mg refers to a ~401.9 g/mol one-copper GHK-Cu complex, it contains roughly **158 mcg of elemental copper**. Confirm whether the vial label means complex mass, peptide mass, or a chemically different form.",
  ],
  glance: {
    title: "GHK-Cu dosage in 30 seconds",
    table: {
      headers: ["Question", "Research summary"],
      rows: [
        ["**Published human injectable dose**", "None identified"],
        ["**Commonly reported subcutaneous amount**", "1–2 mg per administration"],
        ["**Commonly reported injectable frequency**", "Three times weekly, five times weekly, or daily"],
        ["**Common injectable cycle**", "4–12 weeks, often followed by a 4–8-week break"],
        ["**Common topical concentration**", "Approximately 0.05–2%; 1% is a frequent modern convention"],
        ["**Common topical frequency**", "Once or twice daily"],
        ["**Topical study duration**", "Often 8–12 weeks"],
        ["**Strongest evidence**", "Topical skin and wound research"],
        ["**Evidence for systemic injection**", "Insufficient"],
      ],
    },
  },
  sections: [
    {
      id: "what-is",
      title: "What is GHK-Cu?",
      paragraphs: [
        "GHK-Cu is a copper complex of the naturally occurring tripeptide **glycyl-L-histidyl-L-lysine (GHK)**. The peptide was first isolated from human plasma and has also been detected in saliva and urine. GHK binds copper(II) strongly through its amino-terminal region and histidine residue.",
        "The blue or blue-violet color of authentic GHK-Cu material comes from coordinated copper(II). White GHK powder and blue GHK-Cu powder should not be treated as the same ingredient.",
      ],
      tables: [
        {
          caption: "GHK vs GHK-Cu",
          headers: ["Name", "Description", "Approximate molecular mass", "Copper present?"],
          align: ["left", "left", "right", "left"],
          rows: [
            ["**GHK**", "Gly-His-Lys tripeptide", "340.38 g/mol", "No"],
            [
              "**GHK-Cu**",
              "One-copper complex of GHK (Copper Tripeptide-1)",
              "≈400.9–401.9 g/mol",
              "Yes",
            ],
          ],
        },
      ],
    },
    {
      id: "copper-mass",
      title: "What does “1 mg of GHK-Cu” contain?",
      paragraphs: [
        "Using a representative molecular mass of **401.91 g/mol** and one copper atom per complex, copper contributes approximately **15.81%** of the complex's mass. These are stoichiometric estimates — not exposure or absorption measurements.",
      ],
      widget: "ghk-copper-calc",
      tables: [
        {
          caption: "Copper and GHK portion by labeled complex mass",
          headers: [
            "Labeled GHK-Cu complex mass",
            "Approximate GHK portion",
            "Estimated elemental copper",
          ],
          align: ["right", "right", "right"],
          rows: [
            ["0.5 mg", "421 mcg", "79 mcg"],
            ["1 mg", "842 mcg", "158 mcg"],
            ["1.5 mg", "1.263 mg", "237 mcg"],
            ["2 mg", "1.684 mg", "316 mcg"],
            ["2.5 mg", "2.105 mg", "395 mcg"],
            ["3 mg", "2.526 mg", "474 mcg"],
          ],
        },
      ],
      notes: [
        "Applies only if the vial mass represents a 1:1 GHK-copper complex. Hydration, counterions, residual copper salt, assay basis, and whether the vendor reports peptide mass rather than complex mass can change the result.",
      ],
    },
    {
      id: "identity",
      title: "GHK-Cu identity and quality checks",
      paragraphs: [
        "One generic “99% purity” result does not establish copper occupancy, free copper, sterility, or the amount of active complex. Confirm sequence, complexation, copper-to-peptide ratio, and whether stated mass refers to peptide, complex, salt, or hydrate.",
      ],
      widget: "ghk-identity-gate",
      tables: [
        {
          caption: "Specification checklist",
          headers: ["Specification", "Why it matters"],
          rows: [
            ["Sequence", "Confirms Gly-His-Lys rather than another copper-binding peptide such as AHK-Cu"],
            ["Copper complexation", "Distinguishes GHK-Cu from copper-free GHK"],
            ["Copper-to-peptide ratio", "Shows whether the intended 1:1 complex is present"],
            ["Molecular mass", "Helps distinguish peptide, complex, salt, hydrate, or aggregate"],
            ["Component assay", "States whether “50 mg” means peptide mass, complex mass, or total powder"],
            ["Free copper", "Excess unbound copper may have different reactivity and tolerability"],
            ["HPLC plus mass spectrometry", "Purity alone cannot confirm the intended molecular identity"],
            ["Sterility and endotoxin", "Required variables for parenteral research"],
          ],
        },
      ],
    },
    {
      id: "regulatory",
      title: "Current research and compounding status",
      paragraphs: [
        "Topical GHK-Cu appears widely in cosmetics under the ingredient name **Copper Tripeptide-1**. Cosmetics do not use the prescription-drug approval pathway. Injectable GHK-Cu has a separate and less-developed evidence base.",
        "As of May 2026, FDA's 503A nomination materials place non-injectable GHK-Cu under evaluation and distinguish it from the withdrawn injectable-route nomination. FDA has announced a future advisory-committee review of GHK-Cu. These compounding categories do not establish a dose or evaluate the community injection protocols below.",
      ],
      highlight:
        "There is no US prescribing information establishing an injectable GHK-Cu dose.",
    },
    {
      id: "topical-human",
      title: "Dosage used in human clinical research — topical",
      paragraphs: [
        "Topical GHK-Cu has the closest overlap with human evidence. Proprietary study formulations make exact concentration matching difficult, and exact delivered doses are often not fully reported.",
      ],
      tables: [
        {
          caption: "Topical human studies (selected)",
          headers: [
            "Study or research program",
            "Formulation and schedule",
            "Duration",
            "Population",
            "Main finding",
            "Dosing limitation",
          ],
          rows: [
            [
              "Facial photoaging (Pickart & Margolina review)",
              "GHK-Cu facial cream",
              "12 weeks",
              "71 women with mild-to-advanced photoaging",
              "Increased skin density and thickness; improved appearance measures",
              "Exact concentration not clearly reported",
            ],
            [
              "Eye-area study (same review)",
              "GHK-Cu eye cream",
              "12 weeks",
              "41 women with photodamage",
              "Improved lines, appearance, density, and thickness vs comparators",
              "Exact delivered dose not available",
            ],
            [
              "Thigh-skin collagen study",
              "GHK-Cu cream vs vitamin C and retinoic acid",
              "12 weeks",
              "Women with photodamaged skin",
              "Greater share showed increased collagen production with GHK-Cu",
              "Concentration and mass per application not adequate for conversion",
            ],
            [
              "Nano-lipid carrier trial",
              "GHK-Cu formulation twice daily",
              "8 weeks",
              "40 women aged 40–65",
              "Reduced wrinkle volume and depth vs carrier and peptide comparator",
              "Specialized delivery system; concentration not casually transferable",
            ],
            [
              "Diabetic neuropathic-ulcer trial",
              "Topical GHK-Cu-containing Lamin Gel",
              "During ulcer treatment",
              "Adults with diabetic plantar ulcers",
              "Greater median percentage closure than vehicle",
              "Wound product; indication differs from cosmetic serum use",
            ],
            [
              "CO₂-laser resurfacing study",
              "Topical copper-tripeptide products",
              "Post-procedure period",
              "Adults after facial laser resurfacing",
              "No significant improvement in erythema, crusting, or wound healing",
              "Negative study; does not establish an anti-aging dose",
            ],
          ],
        },
      ],
      paragraphsAfter: [
        "An ex-vivo microneedle study found increased GHK-Cu transport through human skin over nine hours. This was a permeation experiment — not a clinical dosing trial and not proof that home microneedling plus a cosmetic serum is safe.",
      ],
    },
    {
      id: "injectable-human",
      title: "Dosage used in human clinical research — injectable",
      paragraphs: [
        "No controlled human study of subcutaneous or intradermal GHK-Cu dosing for skin, hair, wound healing, injury recovery, or systemic “anti-aging” was identified. The familiar **1–2 mg injection range** is therefore a practice convention, not a clinically determined therapeutic window.",
      ],
      widget: "ghk-injectable-status",
    },
    {
      id: "research-dosage",
      title: "GHK-Cu research dosage",
      paragraphs: [
        "Most modern injectable protocols cluster around **1–2 mg per administration**. Topical research conventions commonly discuss **0.05–2%** formulations once or twice daily for 8–12 weeks.",
      ],
      tables: [
        {
          caption: "Commonly reported protocols",
          headers: [
            "Research protocol",
            "Reported amount",
            "Frequency",
            "Route",
            "Reported duration",
            "Evidence basis",
          ],
          rows: [
            [
              "Low injectable protocol",
              "0.5–1 mg",
              "Three times weekly to daily",
              "Subcutaneous",
              "4–8 weeks",
              "Anecdotal / clinic convention",
            ],
            [
              "Common injectable range",
              "1–2 mg",
              "Daily or five days weekly",
              "Subcutaneous",
              "4–12 weeks",
              "Widely repeated outside controlled trials",
            ],
            [
              "Higher injectable protocol",
              "2–3 mg",
              "Daily or every other day",
              "Subcutaneous",
              "4–8 weeks",
              "Less consistent; higher copper exposure without trial support",
            ],
            [
              "Gradual 12-week protocol",
              "1 mg → 1.5 mg → 2 mg",
              "Five days weekly",
              "Subcutaneous",
              "12 weeks",
              "Community titration convention",
            ],
            [
              "Short 30-day protocol",
              "1 mg for 15 days, then 2 mg for 15 days",
              "Daily",
              "Subcutaneous",
              "30 days on, often 30 days off",
              "Clinic protocol",
            ],
            [
              "Intermittent protocol",
              "2 mg",
              "Three times weekly",
              "Subcutaneous",
              "8–12 weeks",
              "Community frequency variation",
            ],
            [
              "Low-strength topical",
              "0.05–0.5%",
              "Once daily",
              "Topical",
              "8–12 weeks or ongoing",
              "Cosmetic and sensitive-skin convention",
            ],
            [
              "Common topical",
              "0.5–1%",
              "Once or twice daily",
              "Topical",
              "8–12 weeks",
              "Closest to the route used in human skin research",
            ],
            [
              "Higher topical",
              "1–2%; occasionally 3–4%",
              "Once or twice daily",
              "Topical",
              "8–12 weeks",
              "Commercial convention; higher strength not proven superior",
            ],
          ],
        },
      ],
    },
    {
      id: "complete-protocol",
      title: "Complete reported subcutaneous GHK-Cu research protocol",
      paragraphs: [
        "The following **12-week schedule** is a commonly documented gradual protocol. It keeps two days off each week and increases the per-administration amount every four weeks. Assumes a **50 mg vial prepared to 3 mL** (≈16.67 mg/mL); one U-100 unit ≈ 0.1667 mg GHK-Cu.",
        "Before exposure, document baseline photographs, relevant endpoint measures, vitals, and — when systemic copper exposure is being studied — copper-related labs. Do not introduce other new peptides, copper supplements, or major skincare changes mid-protocol if attribution matters.",
      ],
      widget: "ghk-sc-timeline",
      tables: [
        {
          caption: "Twelve-week five-days-per-week protocol (3 mL recon)",
          headers: [
            "Phase",
            "Weeks",
            "Amount per administration",
            "U-100 draw",
            "Frequency",
            "Approximate copper per administration",
            "Phase exposure",
          ],
          rows: [
            ["Low phase", "1–4", "1 mg", "6 units", "Five days weekly", "158 mcg", "20 mg GHK-Cu"],
            ["Intermediate phase", "5–8", "1.5 mg", "9 units", "Five days weekly", "237 mcg", "30 mg GHK-Cu"],
            ["Upper phase", "9–12", "2 mg", "12 units", "Five days weekly", "316 mcg", "40 mg GHK-Cu"],
            ["Washout", "13–16 or 13–20", "None", "—", "—", "—", "—"],
          ],
        },
        {
          caption: "Cumulative exposure",
          headers: ["Phase", "GHK-Cu complex", "Estimated elemental copper"],
          align: ["left", "right", "right"],
          rows: [
            ["Weeks 1–4", "20 mg", "≈3.16 mg"],
            ["Weeks 5–8", "30 mg", "≈4.74 mg"],
            ["Weeks 9–12", "40 mg", "≈6.32 mg"],
            ["**Full 12-week cycle**", "**90 mg**", "**≈14.23 mg**"],
          ],
        },
        {
          caption: "Measurement schedule",
          headers: ["Time point", "Research measurements"],
          rows: [
            ["Baseline", "Photographs, objective endpoint, symptoms, vitals, copper-related labs when relevant"],
            ["End of week 2", "Early tolerability and injection-site assessment"],
            ["End of week 4", "Low-phase outcome measures before escalation"],
            ["End of week 8", "Intermediate-phase outcome measures before escalation"],
            ["End of week 12", "Final on-cycle measurements"],
            ["End of washout", "Persistence or reversal of any observed change"],
          ],
        },
      ],
      notes: [
        "The cycle requires a mathematical minimum of **1.8 standard 50 mg vials** — plan for **two vials** before handling loss. Copper values describe complex composition, not proven systemic absorption.",
        "**Early-stop criteria (examples):** severe/progressive injection-site reaction; allergic symptoms; persistent nausea, headache, dizziness, fatigue, or flushing; marked BP/HR change; infection signs; abnormal copper or liver labs; neurological symptoms. Urgent symptoms require medical evaluation.",
        "The 1 → 1.5 → 2 mg progression is an anecdotal titration convention. Escalation should not be treated as automatic evidence of progress. A null result at 1 mg does not prove that 2 mg will work.",
      ],
    },
    {
      id: "thirty-day",
      title: "Complete reported 30-day GHK-Cu protocol",
      paragraphs: [
        "This shorter community schedule uses one **50 mg vial** when prepared with **2 mL** (25 mg/mL). The active cycle uses **45 mg GHK-Cu complex** and contains a theoretical **7.11 mg of elemental copper**. Bedtime timing and fasting claims appear in some clinic protocols, but no GHK-Cu trial has validated them.",
      ],
      tables: [
        {
          caption: "30-day daily protocol (2 mL recon on 50 mg vial)",
          headers: [
            "Phase",
            "Days",
            "Amount",
            "Frequency",
            "U-100 draw at 25 mg/mL",
            "Approximate copper per administration",
          ],
          rows: [
            ["Initial phase", "1–15", "1 mg", "Once daily", "4 units", "158 mcg"],
            ["Higher phase", "16–30", "2 mg", "Once daily", "8 units", "316 mcg"],
            ["Washout", "31–60", "None", "—", "—", "—"],
          ],
        },
      ],
    },
    {
      id: "fixed-dose",
      title: "Alternative fixed-dose protocols",
      paragraphs: [
        "No human study has compared these schedules or shown that daily exposure is superior to intermittent exposure.",
      ],
      tables: [
        {
          caption: "Fixed-dose alternatives (anecdotal)",
          headers: ["Protocol", "Amount", "Frequency", "Duration", "Cumulative exposure", "Evidence"],
          rows: [
            ["Intermittent", "2 mg", "Three times weekly", "12 weeks", "72 mg", "Anecdotal"],
            ["Fixed daily", "1.7 mg", "Daily", "8 weeks", "95.2 mg", "Community convention"],
            ["Low daily", "1 mg", "Daily", "6 weeks", "42 mg", "Community convention"],
            ["Higher every-other-day", "2–3 mg", "Every other day", "6–8 weeks", "Protocol dependent", "Less consistent; no comparative support"],
          ],
        },
      ],
    },
    {
      id: "topical-protocol",
      title: "Complete reported topical GHK-Cu research protocol",
      paragraphs: [
        "Topical use has the closest overlap with human evidence, but proprietary study formulations make exact concentration matching difficult. The following is a practical modern research convention — not a reconstruction of one specific trial.",
      ],
      tables: [
        {
          caption: "Twelve-week topical protocol",
          headers: ["Phase", "Weeks", "Formulation", "Frequency", "Research purpose"],
          rows: [
            ["Baseline", "1 week before exposure", "No new active", "—", "Establish photography, hydration, texture, and irritation baseline"],
            ["Tolerability phase", "1", "0.5–1% GHK-Cu", "Once daily", "Assess local irritation and formulation compatibility"],
            ["Main phase", "2–12", "0.5–1% GHK-Cu", "Once or twice daily", "Match the 8–12-week duration used in several human skin studies"],
            ["Follow-up", "2–4 weeks after", "No GHK-Cu or stable maintenance routine", "—", "Assess persistence and delayed irritation"],
          ],
        },
        {
          caption: "Topical concentration comparison",
          headers: ["Finished concentration", "GHK-Cu per gram of product", "Evidence interpretation"],
          align: ["right", "right", "left"],
          rows: [
            ["0.05%", "0.5 mg/g", "Low-strength cosmetic or sensitive-area convention"],
            ["0.1%", "1 mg/g", "Common lower cosmetic strength"],
            ["0.5%", "5 mg/g", "Moderate research formulation"],
            ["1%", "10 mg/g", "Widely discussed modern topical protocol"],
            ["2%", "20 mg/g", "Higher commercial strength; superiority not established"],
          ],
        },
      ],
      notes: [
        "Useful endpoints include standardized photography, corneometry, cutometry, profilometry, transepidermal water loss, blinded investigator grading, and daily irritation scoring.",
        "Microneedling changes absorption and turns an ordinary cosmetic exposure into a disrupted-barrier exposure. A cosmetic product containing preservatives, fragrance, or nonsterile excipients should not be assumed suitable for freshly disrupted skin.",
      ],
    },
    {
      id: "reconstitution",
      title: "GHK-Cu reconstitution and concentration math",
      paragraphs: [
        "Syringe units measure volume, not mass. “10 units” contains **2.5 mg** after a 2 mL dilution, **2 mg** after a 2.5 mL dilution, and about **1.67 mg** after a 3 mL dilution on a 50 mg vial.",
      ],
      widget: "ghk-recon-calc",
      tables: [
        {
          caption: "50 mg vial with 2 mL (25 mg/mL · 0.25 mg per unit)",
          headers: ["Target amount", "U-100 units", "Volume", "Estimated elemental copper"],
          align: ["right", "right", "right", "right"],
          rows: [
            ["0.5 mg", "2 units", "0.02 mL", "79 mcg"],
            ["1 mg", "4 units", "0.04 mL", "158 mcg"],
            ["1.5 mg", "6 units", "0.06 mL", "237 mcg"],
            ["2 mg", "8 units", "0.08 mL", "316 mcg"],
            ["2.5 mg", "10 units", "0.10 mL", "395 mcg"],
            ["3 mg", "12 units", "0.12 mL", "474 mcg"],
          ],
        },
        {
          caption: "50 mg vial with 2.5 mL (20 mg/mL · 0.20 mg per unit)",
          headers: ["Target amount", "U-100 units", "Volume", "Estimated elemental copper"],
          align: ["right", "right", "right", "right"],
          rows: [
            ["0.5 mg", "2.5 units", "0.025 mL", "79 mcg"],
            ["1 mg", "5 units", "0.05 mL", "158 mcg"],
            ["1.5 mg", "7.5 units", "0.075 mL", "237 mcg"],
            ["2 mg", "10 units", "0.10 mL", "316 mcg"],
            ["2.5 mg", "12.5 units", "0.125 mL", "395 mcg"],
            ["3 mg", "15 units", "0.15 mL", "474 mcg"],
          ],
        },
        {
          caption: "50 mg vial with 3 mL (16.67 mg/mL · ≈0.1667 mg per unit)",
          headers: ["Target amount", "U-100 units", "Volume", "Estimated elemental copper"],
          align: ["right", "right", "right", "right"],
          rows: [
            ["0.5 mg", "3 units", "0.03 mL", "79 mcg"],
            ["1 mg", "6 units", "0.06 mL", "158 mcg"],
            ["1.5 mg", "9 units", "0.09 mL", "237 mcg"],
            ["2 mg", "12 units", "0.12 mL", "316 mcg"],
            ["2.5 mg", "15 units", "0.15 mL", "395 mcg"],
            ["3 mg", "18 units", "0.18 mL", "474 mcg"],
          ],
        },
      ],
    },
    {
      id: "reported-range",
      title: "Reported GHK-Cu dosage range",
      tables: [
        {
          caption: "Online protocol landscape",
          headers: ["Field", "Reported information"],
          rows: [
            ["Common injectable range", "1–2 mg per administration"],
            ["Broader injectable range", "0.5–3 mg per administration"],
            ["Injectable frequency", "Three times weekly to daily"],
            ["Injectable cycle", "Commonly 4–12 weeks"],
            ["Injectable washout", "Commonly 4–8 weeks"],
            ["Common topical range", "Approximately 0.05–2%"],
            ["Topical frequency", "Once or twice daily"],
            ["Topical duration", "8–12 weeks or longer"],
            ["Human trial overlap", "Meaningful for topical route; none identified for injection"],
            ["Evidence quality", "Moderate but limited for topical skin applications; low for injectable protocols"],
          ],
        },
      ],
    },
    {
      id: "clinical-vs-anecdotal",
      title: "Anecdotal versus clinically studied dosing",
      widget: "ghk-topical-vs-injectable",
    },
    {
      id: "why-doses",
      title: "Why these doses are used",
      subsections: [
        {
          title: "One-to-two-milligram injection convention",
          paragraphs: [
            "The original basis for the 1–2 mg range could not be traced to a human dose-finding trial. The amounts appear to have spread through compounding, clinic, and peptide-community protocols and are convenient for 50 mg vials.",
          ],
        },
        {
          title: "Gradual escalation",
          paragraphs: [
            "The 1 → 1.5 → 2 mg schedule gives distinct exposure phases and may help separate early tolerability from higher exposure. It does not prove receptor saturation, cumulative benefit, or an optimal dose.",
          ],
        },
        {
          title: "Eight-to-twelve-week duration",
          paragraphs: [
            "Visible structural skin changes develop slowly, and several topical studies ran for 8–12 weeks. Injectable protocols appear to borrow that duration even though route-specific PK and outcome data are absent.",
          ],
        },
        {
          title: "Daily or five-days-on / two-days-off scheduling",
          paragraphs: [
            "Daily administration is often justified by claims of a short plasma half-life, while two weekly off-days are said to reduce irritation or “reset” signaling. No controlled human GHK-Cu injection study has validated either rationale.",
          ],
        },
      ],
    },
    {
      id: "mechanism",
      title: "Mechanism of action",
      paragraphs: [
        "GHK-Cu is best understood as a copper carrier and signaling complex rather than a single-receptor agonist.",
      ],
      numbered: [
        "**Extracellular matrix remodeling** — GHK-Cu has influenced collagen, elastin, glycosaminoglycan, decorin, metalloproteinase, and tissue-inhibitor pathways in cell and animal research. This provides a plausible basis for skin and wound investigation.",
        "**Copper delivery and antioxidant systems** — Copper is required by enzymes involved in connective-tissue crosslinking, pigmentation, cellular respiration, and antioxidant defense. GHK binds copper tightly and may buffer its redox activity while facilitating biological transport. More copper exposure is not necessarily beneficial.",
        "**Inflammatory signaling** — Cell and animal studies report changes in NF-κB, cytokines, oxidative stress, and inflammatory-cell behavior. These mechanisms remain preclinical for most systemic claims.",
        "**Angiogenesis and repair-cell recruitment** — GHK-Cu can stimulate vascular and repair-associated signaling in experimental systems. Angiogenesis is context dependent and can be beneficial in wound repair but undesirable in some diseases.",
        "**Gene-expression claims** — Connectivity-map analyses suggest GHK can influence large gene-expression networks. The frequently repeated claim that GHK “resets thousands of genes” is based on database and laboratory analyses — not a clinical endpoint.",
      ],
      widgetAfter: "ghk-claim-checker",
    },
    {
      id: "preclinical",
      title: "Preclinical research dosage",
      paragraphs: [
        "GHK and GHK-Cu have been studied across cell, rodent, and wound models using concentrations and routes that vary widely — nanomolar cell-culture exposure, topical wound formulations, local joint exposure, liposomal delivery, and parenteral GHK in aged mice.",
        "These doses should not be converted casually into human injection protocols. Some studies use copper-free GHK rather than GHK-Cu, and local or liposomal delivery can create tissue exposure that a systemic milligram dose does not reproduce.",
      ],
    },
    {
      id: "evidence-ladder",
      title: "Dosage evidence ladder",
      widget: "ghk-evidence-ladder",
    },
    {
      id: "safety",
      title: "Safety and adverse effects",
      paragraphs: [
        "Topical GHK-Cu is generally described as low-irritancy, but product vehicle and concentration may drive local reactions. For injectable material, identity, free copper, sterility, and endotoxin must be verified — cosmetic-grade Copper Tripeptide-1 is not automatically suitable for parenteral research.",
      ],
      widget: "ghk-adverse-events",
    },
    {
      id: "storage",
      title: "Storage and stability",
      paragraphs: [
        "GHK-Cu should be protected from light, heat, moisture, and chemically incompatible materials. Reconstituted research solutions are commonly stored at **2–8°C**, but no universal post-reconstitution stability period applies to every pH, concentration, diluent, container, or preservative system.",
        "Community guides frequently use a **28-day handling window**. This is a convention, not a published stability result for every preparation. A clear blue solution is consistent with copper complexation but does not prove correct potency or sterility. Loss of color, unexpected precipitation, cloudiness, or particulate matter warrants investigation.",
      ],
    },
    {
      id: "bottom-line",
      title: "Bottom line",
      paragraphs: [
        "GHK-Cu has a credible biological and topical research history, especially for skin remodeling and wound-related endpoints. The strongest human data involve topical creams and gels used for approximately 8–12 weeks, not systemic injection.",
        "The most repeated injectable range is **1–2 mg per administration**. A complete community protocol escalates from 1 mg to 1.5 mg and then 2 mg across three four-week phases, five days per week, followed by a washout. A shorter protocol uses 1 mg daily for 15 days and 2 mg daily for 15 days.",
        "For topical research, **0.5–1% once or twice daily for 8–12 weeks** is a defensible modern protocol range, while acknowledging that the exact formulations used in older human studies are not always fully disclosed.",
      ],
      highlight:
        "Confirm whether the vial contains copper-free GHK or the GHK-Cu complex, how the milligram amount is defined, copper occupancy and free copper, route-specific product quality, and the absence of human pharmacokinetic and long-term safety data for injection.",
    },
  ],
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        question: "What is the most commonly reported GHK-Cu injection dose?",
        answer:
          "Approximately 1–2 mg per administration is the most repeated range. Protocols use daily, five-times-weekly, or three-times-weekly schedules. No controlled human injection trial established this range.",
      },
      {
        question: "What is the complete reported GHK-Cu protocol?",
        answer:
          "A common 12-week protocol uses 1 mg five times weekly in weeks 1–4, 1.5 mg five times weekly in weeks 5–8, and 2 mg five times weekly in weeks 9–12, followed by a 4–8-week washout.",
      },
      {
        question: "What is the shorter 30-day protocol?",
        answer:
          "It uses 1 mg daily for days 1–15 and 2 mg daily for days 16–30, followed by approximately 30 days off. The active phase consumes 45 mg, so one 50 mg vial mathematically covers it when prepared with 2 mL.",
      },
      {
        question: "How many syringe units is 1 mg?",
        answer:
          "From a 50 mg vial, 1 mg equals 4 units after a 2 mL dilution, 5 units after a 2.5 mL dilution, or 6 units after a 3 mL dilution.",
      },
      {
        question: "How much elemental copper is in 1 mg GHK-Cu?",
        answer:
          "Approximately 158 mcg if the labeled material is a 1:1 GHK-copper complex with a molecular mass near 401.9 g/mol. Supplier assay conventions can change the real value.",
      },
      {
        question: "What topical GHK-Cu concentration is commonly used?",
        answer:
          "Modern products and protocols commonly use approximately 0.05–2%. A 0.5–1% formulation once or twice daily for 8–12 weeks is a common research convention and aligns more closely with the topical route studied in humans.",
      },
      {
        question: "Is injectable GHK-Cu better than topical GHK-Cu?",
        answer:
          "That has not been shown. Topical use has direct human skin research. Injectable use may create systemic exposure, but human PK, dose-response, efficacy, and long-term safety are unresolved.",
      },
      {
        question: "Can GHK-Cu be used for hair growth?",
        answer:
          "GHK-Cu and related copper peptides are studied in follicle and scalp contexts, but evidence for meaningful human hair regrowth is much weaker than for established treatments. A commonly cited human-follicle study involved AHK-Cu, not GHK-Cu.",
      },
      {
        question: "Does GHK-Cu need to be cycled?",
        answer:
          "No study has established that cycling is biologically required. Washouts are useful in research for evaluating persistence and limiting unstudied cumulative exposure.",
      },
      {
        question: "Is bedtime administration necessary?",
        answer:
          "No. Bedtime and meal-separation instructions are clinic conventions. No human GHK-Cu study has shown that they improve absorption or outcomes.",
      },
      {
        question: "Is GHK-Cu the same as GHK?",
        answer:
          "No. GHK is the copper-free tripeptide. GHK-Cu is the copper complex. They differ in mass, color, redox chemistry, and potentially biological behavior.",
      },
      {
        question: "Is blue color proof of purity?",
        answer:
          "No. Blue color is consistent with copper coordination but cannot establish peptide identity, concentration, free copper, sterility, or absence of impurities.",
      },
      {
        question: "Can a cosmetic GHK-Cu serum be microneedled?",
        answer:
          "Not automatically. Microneedling changes barrier integrity and exposure. Cosmetic preservatives, fragrance, pH, and manufacturing standards may not be appropriate for disrupted skin.",
      },
      {
        question: "Is there a maximum established dose?",
        answer:
          "No. The 2–3 mg amounts described as an “upper range” online are not maximum tolerated doses and have not been established by clinical dose escalation.",
      },
    ],
  },
  sources: {
    title: "References",
    items: [
      {
        authors: "Pickart L, Margolina A.",
        title: "Regenerative and protective actions of GHK-Cu",
        detail: "2018 review — topical and mechanistic context.",
        href: "https://pubmed.ncbi.nlm.nih.gov/29986520/",
      },
      {
        authors: "Pickart L, et al.",
        title: "GHK as a natural modulator of multiple cellular pathways",
        detail: "2015.",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4508379/",
      },
      {
        authors: "Dou Y, et al.",
        title: "The potential of GHK as an anti-aging peptide",
        detail: "2020.",
        href: "https://pubmed.ncbi.nlm.nih.gov/35083444/",
      },
      {
        authors: "Mulder GD, et al.",
        title: "Topical GHK-Cu in diabetic neuropathic ulcers",
        detail: "1994.",
        href: "https://pubmed.ncbi.nlm.nih.gov/17147644/",
      },
      {
        authors: "CO₂ laser resurfacing study",
        title: "Topical copper tripeptide after CO₂ laser resurfacing",
        detail: "2006 — negative study.",
        href: "https://pubmed.ncbi.nlm.nih.gov/16847171/",
      },
      {
        authors: "Microneedle delivery study",
        title: "Microneedle-mediated delivery of copper peptide through skin",
        detail: "2015 — ex-vivo permeation.",
        href: "https://pubmed.ncbi.nlm.nih.gov/25690343/",
      },
      {
        authors: "Biomarker / toxicity study",
        title: "Selected biomarkers and skin toxicity of copper-peptide delivery",
        detail: "2016.",
        href: "https://pubmed.ncbi.nlm.nih.gov/27892491/",
      },
      {
        authors: "Gene-expression review",
        title: "The effect of GHK on gene expression relevant to nervous-system health",
        detail: "2017.",
        href: "https://pubmed.ncbi.nlm.nih.gov/28212278/",
      },
      {
        authors: "FDA",
        title: "Bulk drug substances nominated for use in compounding",
        detail: "Updated May 2026.",
        href: "https://www.fda.gov/media/94155/download",
      },
      {
        authors: "FDA",
        title: "Potential safety risks associated with nominated bulk substances",
        detail: "Compounding safety summary.",
        href: "https://www.fda.gov/drugs/human-drug-compounding/certain-bulk-drug-substances-use-compounding-may-present-significant-safety-risks",
      },
      {
        authors: "ClinicalTrials.gov",
        title: "NCT07437586: Topical GHK-Cu gel for acute skin-wound healing",
        detail: "Registered trial.",
        href: "https://clinicaltrials.gov/study/NCT07437586",
      },
    ],
  },
  safety: {
    title: "Important Safety Information",
    paragraphs: [
      "GHK-Cu has **moderate but limited human evidence for topical skin applications** and **no controlled human injectable dosing trial** identified. There is **no US prescribing dose** for systemic GHK-Cu.",
      "This page documents community protocols, stoichiometric copper math, and reconstitution arithmetic. It is **not** a clinical dosing, self-injection, or treatment guide. Confirm GHK vs GHK-Cu identity, assay basis, sterility, and endotoxin before parenteral research.",
      "Seek urgent care for severe allergic, infectious, neurological, or cardiovascular symptoms. Particular caution applies in Wilson disease, significant liver disease, or with substantial copper supplementation.",
    ],
  },
};
