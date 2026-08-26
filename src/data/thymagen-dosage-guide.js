/**
 * Thymagen / Thymogen (alpha-Glu-Trp / EW) dosage guide.
 * Clearest adult IM/nasal: 100 µg/day. Oral gel: 1.98 mg/day × 28. Oncology IM862: 5–60 mg/day-scale.
 * ≠ Thymalin, TA-1, Bestim (gamma), thymopentin. No validated human SC dose.
 */

export const THYMAGEN_FREE_MW = 333.34;
export const THYMAGEN_DISODIUM_MW = 377.3;
/** Anhydrous disodium → free-peptide mass factor */
export const THYMAGEN_DISODIUM_TO_FREE = THYMAGEN_FREE_MW / THYMAGEN_DISODIUM_MW; // ≈0.8835

export function thymagenFreeFromDisodiumMg(saltMg) {
  const s = Number(saltMg);
  if (!Number.isFinite(s) || s < 0) return null;
  return {
    saltMg: s,
    freeMg: s * THYMAGEN_DISODIUM_TO_FREE,
  };
}

export function thymagenImCourse({ dailyUg = 100, days } = {}) {
  const d = Number(days);
  const ug = Number(dailyUg);
  if (!Number.isFinite(d) || d <= 0 || !Number.isFinite(ug) || ug < 0) return null;
  const cumulativeUg = ug * d;
  return {
    dailyUg: ug,
    days: d,
    cumulativeUg,
    cumulativeMg: cumulativeUg / 1000,
  };
}

export function thymagenAmountFromVial({
  vialMg = 20,
  diluentMl,
  targetUg,
} = {}) {
  const vial = Number(vialMg);
  const dil = Number(diluentMl);
  const target = Number(targetUg);
  if (
    !Number.isFinite(vial) ||
    vial <= 0 ||
    !Number.isFinite(dil) ||
    dil <= 0 ||
    !Number.isFinite(target) ||
    target <= 0
  ) {
    return null;
  }
  const concMgPerMl = vial / dil;
  const targetMg = target / 1000;
  const volumeMl = targetMg / concMgPerMl;
  const units = volumeMl * 100;
  return {
    vialMg: vial,
    diluentMl: dil,
    targetUg: target,
    targetMg,
    concMgPerMl,
    volumeMl,
    units,
    vialVsTenDayCourse: vial / 1.0,
  };
}

export const THYMAGEN_IDENTITY = [
  {
    id: "ew-correct",
    label: "Verified L-alpha-Glu-L-Trp (EW)",
    verdict: "Matches Thymagen/Thymogen identity on this page",
    detail:
      "Synthetic dipeptide ~333.34 g/mol free peptide. Confirm alpha linkage (not gamma), L/L chirality, free-peptide-equivalent assay, salt/water, and sterility for parenteral research.",
  },
  {
    id: "timogen",
    label: "Regional Timogen® IM or nasal product",
    verdict: "Product-specific — label doses are not auto-transferable to research vials",
    detail:
      "IM: 100 µg free-peptide equivalent per mL. Nasal: 25 µg per 0.1 mL actuation. Device, excipients, and salt reporting are part of the dose.",
  },
  {
    id: "im862",
    label: "IM862 / oglufanide disodium (oncology)",
    verdict: "Related scaffold — different salt, formulation, and mg-scale program",
    detail:
      "Disodium salt (~377.3 g/mol anhydrous). High intranasal oncology schedules are not Timogen spray doses and did not establish general wellness dosing.",
  },
  {
    id: "thymalin",
    label: "Thymalin (calf-thymus extract)",
    verdict: "Different material — heterogeneous multi-peptide complex",
    detail:
      "Thymogen was isolated from Thymalin research, but extract milligram doses are not EW doses.",
  },
  {
    id: "bestim",
    label: "Bestim (gamma-Glu-Trp)",
    verdict: "Different linkage/isomer — do not transfer alpha-Glu-Trp evidence",
    detail:
      "Gamma linkage changes structure and may change enzymatic handling. Certificates must state L-alpha-Glu-L-Trp.",
  },
  {
    id: "ta1",
    label: "Thymosin alpha-1 / thymalfasin",
    verdict: "Different peptide — 28 amino acids",
    detail:
      "Separate sequence, pharmacology, and clinical dosing literature.",
  },
];

export const THYMAGEN_HUMAN_STATUS = [
  ["Standardized US prescribing dose", "None"],
  ["Regional adult IM", "100 µg once daily × 3–10 days"],
  ["Regional adult nasal", "25 µg/nostril BID · 100 µg/day"],
  ["Oral gel RCT", "0.99 mg BID · 1.98 mg/day × 28 days"],
  ["Wound study IM", "100 µg daily × 7 days"],
  ["Oncology intranasal", "5 mg EOD to 20 mg TID (IM862)"],
  ["Validated human SC dose", "Not located"],
  ["Human weight-based dose", "Not established"],
  ["Intact-peptide human PK", "Not established in accessible sources"],
];

export const THYMAGEN_PROTOCOL_PHASES = [
  {
    id: "screen",
    phase: "Screening",
    days: "Before −7",
    exposure: "None",
    purpose:
      "Consent, eligibility labs, influenza-vaccine planning, baseline HAI titers",
  },
  {
    id: "dosing",
    phase: "IM study peptide",
    days: "−7 to −3",
    exposure: "100 µg free-peptide eq. IM daily × 5 (500 µg cumulative)",
    purpose:
      "Blinded vs placebo; intensive PK on days −7 and −3; sentinel DSMB gate",
  },
  {
    id: "vaccine",
    phase: "Licensed vaccine",
    days: "0",
    exposure: "Standard inactivated influenza vaccine (not study peptide)",
    purpose: "Standardized immune challenge after peptide course",
  },
  {
    id: "day28",
    phase: "Primary safety",
    days: "28",
    exposure: "None",
    purpose: "Primary safety endpoint + vaccine antibody sampling",
  },
  {
    id: "day90",
    phase: "Final follow-up",
    days: "90",
    exposure: "None",
    purpose: "Final safety and exploratory immune durability",
  },
];

export const THYMAGEN_COURSE_PRESETS = [
  {
    id: "im3",
    label: "3-day adult IM",
    dailyUg: 100,
    days: 3,
  },
  {
    id: "im5",
    label: "5-day research (THYMAGEN-1)",
    dailyUg: 100,
    days: 5,
  },
  {
    id: "im7",
    label: "7-day wound study",
    dailyUg: 100,
    days: 7,
  },
  {
    id: "im10",
    label: "10-day adult IM",
    dailyUg: 100,
    days: 10,
  },
];

export const THYMAGEN_COMPARE = {
  clinical: {
    title: "Registered products & human studies",
    status: "Product- and indication-specific",
    rows: [
      ["IM", "100 µg daily × 3–10 days; wound study × 7"],
      ["Low-dose nasal", "Metered 25 µg spray · adult 100 µg/day"],
      ["Oral", "1.98 mg/day gel × 28 days (Regasthym)"],
      ["High-dose nasal", "IM862 5 mg EOD or 20 mg TID"],
      ["SC", "No matching direct human schedule"],
      ["Dose response", "Not established across products"],
    ],
  },
  anecdotal: {
    title: "Current anecdotal / commercial",
    status: "Conventions · 10–1,000 µg SC span",
    rows: [
      ["Low SC pages", "10–100 µg · 1–3× weekly"],
      ["Label-influenced", "100–200 µg daily SC/IM × 5–10 days"],
      ["High SC pages", "500–1,000 µg daily × 10–20 days"],
      ["20 mg vial", "Fill size ≠ course (20–67× adult IM course)"],
      ["PK claims", "Half-life / 85–90% SC bio — unverified"],
      ["Primary source", "None for modern SC schedules"],
    ],
  },
};

export const THYMAGEN_CLAIMS = [
  {
    id: "standard-dose",
    claim: "There is a universal Thymagen dose",
    verdict: "False",
    detail:
      "Clearest regional adult Timogen schedule is 100 µg IM × 3–10 days — product-specific, not every research vial.",
  },
  {
    id: "thymalin-same",
    claim: "Thymagen is the same as Thymalin",
    verdict: "False",
    detail:
      "Thymagen/Thymogen is defined alpha-Glu-Trp. Thymalin is a heterogeneous thymus extract.",
  },
  {
    id: "ta1-same",
    claim: "Thymagen is the same as thymosin alpha-1",
    verdict: "False",
    detail: "TA-1 is a 28-amino-acid peptide with a separate dosing literature.",
  },
  {
    id: "sc-validated",
    claim: "Current SC cycles are clinically validated",
    verdict: "False",
    detail:
      "No direct human SC PK or dose-finding study matching online 10–1,000 µg schedules was located.",
  },
  {
    id: "high-sc",
    claim: "500–1,000 µg SC daily is evidence-based",
    verdict: "Anecdotal",
    detail:
      "Appears on commercial pages; no matching controlled human study was identified.",
  },
  {
    id: "20mg-course",
    claim: "A 20 mg vial is one clinical course",
    verdict: "False",
    detail:
      "20 mg is 20–66.7× the entire 0.3–1.0 mg regional adult IM course. Fill size ≠ dose.",
  },
  {
    id: "oncology-proof",
    claim: "IM862 oncology doses prove high-dose nasal is effective",
    verdict: "False",
    detail:
      "Kaposi phase III was not superior and had shorter median progression; RCC phase II had no objective responses.",
  },
  {
    id: "half-life",
    claim: "Published pages know the human half-life / SC bioavailability",
    verdict: "Unsupported",
    detail:
      "No defensible intact-peptide human PK curve or absolute SC bioavailability was located.",
  },
  {
    id: "antiaging",
    claim: "Thymagen is a proven anti-aging peptide",
    verdict: "Unsupported",
    detail:
      "A 12-month rat study found similar mean lifespan; no controlled human longevity trial establishes a dose.",
  },
  {
    id: "wada-ok",
    claim: "Not named on WADA list means allowed",
    verdict: "Unsafe assumption",
    detail:
      "S0 and product mislabeling can still create risk. Athletes need written product-specific guidance.",
  },
];

export const THYMAGEN_EVIDENCE_LADDER = [
  {
    level: "US prescribing label",
    exists: "None",
    confidence: "None",
  },
  {
    level: "Regional product instructions",
    exists: "Timogen IM/nasal · Regasthym oral",
    confidence: "Product-specific moderate",
  },
  {
    level: "Randomized human trials",
    exists: "Regasthym gastritis · IM862 Kaposi III · prostate II",
    confidence: "Indication-specific (incl. negative)",
  },
  {
    level: "Other prospective human",
    exists: "Wound IM study · early KS · RCC phase II",
    confidence: "Limited generalizability",
  },
  {
    level: "Animal / cell",
    exists: "Aging, wound, gastropathy, endothelial assays",
    confidence: "Preclinical",
  },
  {
    level: "Community SC protocols",
    exists: "10–1,000 µg schedules",
    confidence: "Anecdotal",
  },
];

export const THYMAGEN_AE_SIMPLE = [
  {
    category: "Regional product labels",
    note: "IM: allergic reactions. Nasal: allergic-rhinitis symptoms; excess spray may cause profuse discharge.",
  },
  {
    category: "Oral gel trial",
    note: "No significant AE difference vs placebo during treatment; possible allergy / loose stools on leaflet",
  },
  {
    category: "Oncology IM862",
    note: "Often limited acute toxicity — but Kaposi phase III shorter progression is a disease-outcome concern",
  },
  {
    category: "Research-vial unknowns",
    note: "Repeated SC, chronic cycling, stacks, immunogenicity, and contamination risks poorly characterized",
  },
];

export const THYMAGEN_AE_FULL = [
  {
    domain: "Hypersensitivity",
    items:
      "Allergy to peptide/excipients; nasal rhinitis symptoms; anaphylaxis risk with any parenteral product",
  },
  {
    domain: "Injection / contamination",
    items:
      "Local reactions; infection from nonsterile product; endotoxin, aggregates, particulates",
  },
  {
    domain: "Immune / disease context",
    items:
      "Caution with autoimmunity, transplant, active cancer, checkpoint inhibitors, high-dose steroids",
  },
  {
    domain: "Urgent red flags",
    items:
      "Trouble breathing, throat/tongue swelling, fainting, widespread hives, chest pain, focal neuro symptoms, high fever, spreading injection-site infection",
  },
];

export const THYMAGEN_DOSAGE_GUIDE = {
  title:
    "Thymagen (Thymogen) Dosage: Human Trials, Timogen Labels, and Research Protocol",
  updated: "Updated August 2026",
  callout:
    "**Research note:** “Thymagen” online usually means the dipeptide **alpha-glutamyl-tryptophan** (**Thymogen** / **Timogen**). There is **no standardized US prescribing dose**. This page documents **formulation-specific** exposures — not personal treatment advice. The complete protocol below is an investigator-run study framework — **not** a self-injection plan.",
  intro: [
    "**Best-documented microgram regimen:** **100 µg IM once daily for 3–10 days** (regional Timogen; adult course **0.3–1.0 mg**). A 77-person postsurgical-wound study used **100 µg IM daily × 7 days**. The metered nasal product also delivers **100 µg/day** to adults (25 µg/nostril BID).",
    "**Modern oral gel RCT:** **1.98 mg/day × 28 days** (0.99 mg BID; **55.44 mg** cumulative) in a gastric matrix for chronic atrophic gastritis — not a generic capsule or injection protocol.",
    "**Oncology IM862** used **5 mg EOD** to **20 mg TID** intranasally; Kaposi **phase III was negative** with shorter median progression. **SC web schedules** (10–1,000 µg) are **not** clinically validated. A **20 mg vial** is **20–67×** an entire adult IM course.",
  ],
  glance: {
    title: "Thymagen dosage in 30 seconds",
    table: {
      headers: ["Question", "Research summary"],
      rows: [
        ["**Identity**", "L-α-Glu-L-Trp · EW · ≈333.34 g/mol free peptide"],
        ["**Also called**", "Thymogen / Timogen · oglufanide · IM862 (disodium)"],
        ["**≠**", "Thymalin · TA-1 · Bestim (γ) · thymopentin"],
        ["**Regional adult IM / nasal**", "100 µg/day"],
        ["**Oral gel RCT**", "1.98 mg/day × 28 days"],
        ["**Oncology nasal**", "5 mg EOD – 20 mg TID (not general dosing)"],
        ["**Validated SC**", "Not located"],
        ["**20 mg vial vs IM course**", "20–66.7× the 0.3–1.0 mg adult course"],
      ],
    },
  },
  sections: [
    {
      id: "what-is",
      title: "What is Thymagen?",
      paragraphs: [
        "Thymagen is generally marketed as synthetic **L-alpha-glutamyl-L-tryptophan** (**Glu-Trp**, **EW**). The pharmaceutical name **Thymogen** arose after this sequence was isolated from the calf-thymus complex **Thymalin** and synthesized. The spelling “Thymagen” is not a reliable chemical standard — verify sequence, **alpha** linkage, chirality, salt, and assay.",
        "Free peptide **C16H19N3O5**, MW **333.34**, CAS **38101-59-6**, PubChem CID **100094**. Anhydrous **oglufanide disodium** is listed near **377.30 g/mol** (~**0.883** free-peptide mass per salt mass) — do **not** apply that correction when a label already reports free-peptide equivalent.",
      ],
      widget: "thymagen-identity-gate",
      tables: [
        {
          caption: "Related names are not automatically interchangeable",
          headers: ["Name", "Usually denotes", "Dose issue"],
          rows: [
            ["Thymagen", "Online lyophilized α-Glu-Trp vial", "Name ≠ assay/sterility"],
            ["Timogen® IM", "100 µg/mL free-peptide eq. solution", "Product-specific"],
            ["Timogen® nasal", "25 µg / 0.1 mL metered spray", "Device is part of dose"],
            ["Regasthym Gastro®", "0.33 mg free eq. / g oral gel powder", "Matrix-specific"],
            ["IM862", "Oglufanide disodium oncology nasal", "mg-scale · different program"],
          ],
        },
      ],
    },
    {
      id: "status",
      title: "Current research and regulatory status",
      paragraphs: [
        "There is **no standardized US prescribing label**. **Oglufanide disodium** received FDA **orphan designation** for ovarian cancer in 2001 — designation is not approval or a dosing label.",
        "Timogen IM/nasal and Regasthym Gastro are **regionally registered** products with their own indications. Those instructions document real product-specific dosing; they do **not** authorize a research vial, different salt/route, or anti-aging/athletic use.",
      ],
    },
    {
      id: "human-doses",
      title: "Human and regional product dosages",
      paragraphs: [
        "Regional Timogen and published trials provide the clearest primary exposure records.",
      ],
      widget: "thymagen-human-status",
      tables: [
        {
          caption: "Key human exposures",
          headers: ["Source", "Amount", "Route / duration", "Main limit"],
          rows: [
            [
              "Timogen IM label",
              "100 µg/day adults",
              "IM × 3–10 days",
              "Jurisdiction-specific product",
            ],
            [
              "Wound study",
              "100 µg/day",
              "IM × 7 days",
              "Single regional publication",
            ],
            [
              "Timogen nasal",
              "100 µg/day adults",
              "Metered IN × 3–10 days",
              "Device/formulation integral",
            ],
            [
              "Regasthym RCT",
              "1.98 mg/day",
              "Oral gel × 28 days",
              "Gastric matrix · CAG indication",
            ],
            [
              "KS phase III",
              "5 mg EOD",
              "IN · planned 24 weeks",
              "Not superior; shorter progression",
            ],
            [
              "RCC phase II",
              "20 mg TID",
              "IN × 8-week cycles",
              "No objective responses",
            ],
          ],
        },
      ],
      paragraphsAfter: [
        "IM862 exposures are **~50–600×** a 100 µg Timogen administration before salt/formulation differences. Later negative oncology results argue against treating high nasal milligrams as a general Thymagen dose.",
      ],
    },
    {
      id: "landscape",
      title: "Reported research dosage landscape",
      paragraphs: [
        "The numerical span from **10 µg to 60 mg/day** combines vendor SC conventions, regional microgram products, a gastric gel, and oncology formulations — **not** a therapeutic range.",
      ],
      widget: "thymagen-clinical-vs-anecdotal",
    },
    {
      id: "course-math",
      title: "Course totals vs a 20 mg vial",
      paragraphs: [
        "Adult IM courses total **0.3–1.0 mg**. One nominal **20 mg** research vial contains **20–66.7×** that entire course before assay/handling losses.",
      ],
      widget: "thymagen-course-calc",
    },
    {
      id: "protocol",
      title: "Complete evidence-anchored research protocol (THYMAGEN-1)",
      paragraphs: [
        "Most defensible next study: controlled **100 µg IM** microdose safety + intact-peptide PK — **not** SC escalation from online conventions or oncology-scale nasal doses.",
        "**Proposed exposure:** **100 µg** free-peptide equivalent IM once daily for **5 days** (cumulative **500 µg**), days −7 to −3 before licensed influenza vaccine on day 0. Primary objective: safety through day 28; secondary: intact-peptide PK.",
      ],
      widget: "thymagen-protocol-timeline",
      paragraphsAfter: [
        "No loading, taper, or within-participant escalation. Oral gel and IM862 schedules are different development programs and are not grafted onto this IM microdose framework.",
      ],
    },
    {
      id: "recon",
      title: "Concentration and dose math",
      paragraphs: [
        "Registered IM Timogen is **0.1 mg/mL** (100 µg/mL). Research-vial arithmetic below does **not** establish sterility, correct fill, or home-injection suitability. Volumes of **0.01–0.025 mL** are unreliable with common syringes — pharmacy intermediate dilution is required for legitimate protocols.",
      ],
      widget: "thymagen-recon-calc",
      tables: [
        {
          caption: "Registered 0.1 mg/mL IM volumes",
          headers: ["Target", "Volume"],
          rows: [
            ["10 µg", "0.10 mL"],
            ["50 µg", "0.50 mL"],
            ["100 µg", "1.00 mL"],
          ],
        },
      ],
    },
    {
      id: "preclinical",
      title: "Animal and laboratory research dosage",
      paragraphs: [
        "Examples include **5 µg/rat SC** five times weekly × 12 months (mean lifespan similar), rabbit wound **0.04 mg/kg IP**, and rat oral gastropathy **0.1 or 10 µg/kg**. Cell cultures used **1–100 µg/mL** baths — not plasma targets.",
        "Animal mg/kg and culture concentrations must **not** be copied into human schedules.",
      ],
    },
    {
      id: "mechanisms",
      title: "How alpha-Glu-Trp may work",
      paragraphs: [
        "Regional instructions and papers discuss T-cell differentiation, helper/cytotoxic balance, cytokines, phagocytosis, repair, and proposed peptide–DNA interactions. No confirmed human receptor occupancy threshold or therapeutic window was established.",
        "Claims of a **2–4 hour half-life**, **85–90% SC bioavailability**, or dose-proportional “thymic reset” should be treated as **unverified** without an intact-peptide human assay.",
      ],
    },
    {
      id: "benefits",
      title: "Potential benefits: what has and has not been shown",
      tables: [
        {
          caption: "Claim vs evidence",
          headers: ["Claim", "Current conclusion"],
          rows: [
            [
              "Documented 100 µg IM / nasal adult exposure",
              "Yes — regional products (+ wound study IM)",
            ],
            [
              "Oral gel histologic gland signal (CAG)",
              "Product-specific RCT signal — not generic oral/injectable 2 mg",
            ],
            ["General immune optimization dose", "Not established"],
            ["Validated SC cycle", "Not established"],
            ["Anti-aging / lifespan dose", "Not established"],
            ["Cancer treatment", "Later IM862 trials negative / concerning"],
          ],
        },
      ],
    },
    {
      id: "safety",
      title: "Thymagen safety and side effects",
      paragraphs: [
        "Regional labels list allergic reactions (IM) and allergic-rhinitis symptoms (nasal). Regasthym reported no significant AE difference vs placebo during treatment. Limited acute tolerability does **not** answer chronic SC safety or contamination risk.",
        "The Kaposi phase III **shorter progression** signal argues against assuming biological neutrality in people with cancer.",
      ],
      widget: "thymagen-adverse-events",
    },
    {
      id: "quality",
      title: "Product quality and storage",
      paragraphs: [
        "Verify **alpha** (not gamma) linkage, L/L stereochemistry, free vs sodium/disodium reporting, quantitative assay, sterility/endotoxin for parenteral lots, and lot-specific stability. “99% HPLC purity” ≠ content assay, sterility, or post-reconstitution beyond-use dating.",
      ],
    },
    {
      id: "claims",
      title: "Common claims vs evidence",
      widget: "thymagen-claim-checker",
    },
    {
      id: "evidence-ladder",
      title: "Thymagen dosage evidence ladder",
      widget: "thymagen-evidence-ladder",
      paragraphsAfter: [
        "Confidence is highest when describing exactly what a specified Timogen, Regasthym, or IM862 product delivered. Confidence falls sharply when that amount is transferred to a lyophilized vial, SC injection, long-term cycling, or wellness claims.",
      ],
    },
    {
      id: "anti-doping",
      title: "Sports and anti-doping considerations",
      paragraphs: [
        "The **2026 WADA** list does not name alpha-Glu-Trp / Thymogen / oglufanide individually, but **S0** and mislabeled research products can still create risk. Athletes need written product-specific guidance before exposure.",
      ],
    },
    {
      id: "bottom-line",
      title: "Bottom line",
      paragraphs: [
        "Thymagen is best understood as **alpha-Glu-Trp** with several distinct human development histories — not one universal dosing system. Clearest microgram exposure: **100 µg/day** regional IM/nasal Timogen. Oral gel: **1.98 mg/day** product-specific. Oncology IM862: high nasal milligrams with **negative** later results.",
        "SC web protocols and **20 mg** vials are not validated clinical courses. The most informative next step is a controlled IM microdose study with verified material and intact-peptide PK.",
      ],
      highlight:
        "100 µg Timogen ≠ 5–20 mg IM862 ≠ a 20 mg research vial “course.” Alpha-Glu-Trp ≠ Thymalin, TA-1, or Bestim.",
    },
  ],
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        question: "What is the standard Thymagen dose?",
        answer:
          "There is no universal standard. The clearest regional adult Timogen schedule is 100 µg IM once daily for 3–10 days — product-specific, not every material sold as Thymagen.",
      },
      {
        question: "Is Thymagen the same as Thymogen / Timogen?",
        answer:
          "Online “Thymagen” usually means Thymogen (alpha-Glu-Trp). Timogen® also names specific regional drugs — verify sequence, alpha linkage, salt, and assay rather than spelling alone.",
      },
      {
        question: "Is Thymagen the same as Thymalin or thymosin alpha-1?",
        answer:
          "No. Thymalin is a heterogeneous thymus extract; thymosin alpha-1 is a 28-amino-acid peptide. Neither shares Thymogen’s dipeptide dose.",
      },
      {
        question: "Has subcutaneous Thymagen been studied in humans?",
        answer:
          "No direct human SC dose-finding or PK study matching current online schedules was located.",
      },
      {
        question: "Is 500–1,000 µg SC daily evidence-based?",
        answer:
          "That range appears on commercial pages, but no matching controlled human study was identified — label it anecdotal.",
      },
      {
        question: "Can a 20 mg vial be treated as one course?",
        answer:
          "No. A 20 mg vial contains 20–66.7 times the entire 0.3–1.0 mg regional adult IM course.",
      },
      {
        question: "Do IM862 oncology doses support high-dose Thymagen?",
        answer:
          "No. Later trials failed to show benefit; Kaposi phase III raised a shorter progression concern. Those formulations are not Timogen spray.",
      },
      {
        question: "What oral dose has been studied?",
        answer:
          "The best-described modern oral study used 0.99 mg twice daily (1.98 mg/day) for 28 days in a specific gel-forming gastric product.",
      },
      {
        question: "Is Thymagen dosed by body weight?",
        answer:
          "Not in validated adult research. Regional adult dosing is fixed; online µg/kg formulas lack a traceable dose-development study.",
      },
      {
        question: "Does Thymagen treat cancer or reverse aging?",
        answer:
          "It should not be represented as an established cancer treatment. No controlled human longevity trial establishes an anti-aging dose.",
      },
    ],
  },
  sources: {
    title: "References",
    items: [
      {
        authors: "PubChem",
        title: "Thymogen, CID 100094",
        detail: "Chemical identity record.",
        href: "https://pubchem.ncbi.nlm.nih.gov/compound/Thymogen",
      },
      {
        authors: "FDA / NCATS",
        title: "Oglufanide and oglufanide disodium identity records",
        detail: "Free peptide UNII and disodium development record.",
        href: "https://drugs.ncats.io/drug/Q60AU1LLNU",
      },
      {
        authors: "Cytomed",
        title: "Timogen metered nasal spray instructions",
        detail: "Adult 100 µg/day metered schedule.",
        href: "https://timogen.ru/instruction/",
      },
      {
        authors: "Baryshnikova NV et al.",
        title: "Alpha-glutamyl-tryptophan in chronic atrophic gastritis",
        detail: "Oral gel histology RCT · 1.98 mg/day × 28 days.",
        href: "https://pubmed.ncbi.nlm.nih.gov/37272441/",
      },
      {
        authors: "Kasimova AR et al.",
        title: "Alpha-glutamyl-tryptophan in postsurgical wounds",
        detail: "100 µg IM daily × 7 days.",
        href: "https://sibmed.elpub.ru/jour/article/view/494?locale=en_US",
      },
      {
        authors: "Noy A et al.",
        title: "IM862 phase III in AIDS-Kaposi sarcoma",
        detail: "5 mg IN EOD — not superior; shorter progression.",
        href: "https://pubmed.ncbi.nlm.nih.gov/15598977/",
      },
      {
        authors: "Deplanque G et al.",
        title: "IM862 phase II in metastatic renal-cell carcinoma",
        detail: "20 mg IN TID — no objective responses.",
        href: "https://pubmed.ncbi.nlm.nih.gov/15354209/",
      },
      {
        authors: "WADA",
        title: "2026 Prohibited List",
        detail: "S0 considerations for unnamed pharmacologic substances.",
        href: "https://www.wada-ama.org/sites/default/files/2025-09/2026list_en_final_clean_september_2025.pdf",
      },
    ],
  },
};
