/**
 * Livagen (KEDA / Lys-Glu-Asp-Ala) dosage guide.
 * Patent-reported human range: 0.01–100 µg/kg IM once daily × 10–40 days.
 * No modern peer-reviewed clinical dose-finding trial located.
 * ≠ KED, KEDP, Ventvil / liver peptide extracts.
 */

export const LIVAGEN_FREE_MW = 461.48;

/** Patent dose tiers (µg/kg) for verification-protocol design */
export const LIVAGEN_PATENT_TIERS = [0.01, 0.1, 1, 10, 100];

export function livagenPatentAmountFromWeightKg(weightKg, ugPerKg) {
  const w = Number(weightKg);
  const u = Number(ugPerKg);
  if (!Number.isFinite(w) || w <= 0 || !Number.isFinite(u) || u < 0) return null;
  const dailyUg = w * u;
  return {
    weightKg: w,
    ugPerKg: u,
    dailyUg,
    dailyMg: dailyUg / 1000,
    day10Ug: dailyUg * 10,
    day40Ug: dailyUg * 40,
  };
}

export function livagenAmountFromVial({
  vialMg = 20,
  diluentMl,
  targetMg,
} = {}) {
  const vial = Number(vialMg);
  const d = Number(diluentMl);
  const target = Number(targetMg);
  if (
    !Number.isFinite(vial) ||
    vial <= 0 ||
    !Number.isFinite(d) ||
    d <= 0 ||
    !Number.isFinite(target) ||
    target <= 0
  ) {
    return null;
  }
  const concMgPerMl = vial / d;
  const volumeMl = target / concMgPerMl;
  const units = volumeMl * 100;
  const ugPerUnit = concMgPerMl * 10;
  return {
    vialMg: vial,
    diluentMl: d,
    targetMg: target,
    targetUg: target * 1000,
    concMgPerMl,
    volumeMl,
    units,
    ugPerUnit,
  };
}

export const LIVAGEN_IDENTITY = [
  {
    id: "keda-correct",
    label: "Verified KEDA (Lys-Glu-Asp-Ala)",
    verdict: "Matches Livagen identity on this page",
    detail:
      "Defined tetrapeptide H-Lys-Glu-Asp-Ala-OH (~461.48 g/mol free peptide). Confirm sequence by MS/MS, free-peptide-equivalent assay, salt/water basis, sterility, and endotoxin before trusting any unit chart.",
  },
  {
    id: "ked",
    label: "KED (Lys-Glu-Asp tripeptide)",
    verdict: "Different peptide — lacks terminal alanine",
    detail:
      "KED is a three-amino-acid bioregulator. Schedules and findings cannot be transferred to Livagen/KEDA.",
  },
  {
    id: "kedp",
    label: "Labeled KEDP (Lys-Glu-Asp-Pro)",
    verdict: "Different tetrapeptide — proline replaces alanine",
    detail:
      "Some online “Livagen” pages misidentify the sequence as KEDP. That schedule cannot be assumed to describe verified KEDA.",
  },
  {
    id: "ventvil",
    label: "Ventvil / calf-liver peptide complex",
    verdict: "Tissue extract — not interchangeable with synthetic KEDA",
    detail:
      "Ventvil is a heterogeneous calf-liver polypeptide complex. Parallel discussion in reviews does not make extract and tetrapeptide doses equivalent.",
  },
  {
    id: "oral-combo",
    label: "Oral “Livagen” combination capsule",
    verdict: "Not pure-KEDA equivalence",
    detail:
      "Combination products (e.g., microgram KEDA + Lys-Glu + vitamins) require ingredient-specific exposure accounting. They do not validate an oral dose of isolated Livagen.",
  },
];

export const LIVAGEN_HUMAN_STATUS = [
  ["Standardized US prescribing dose", "None"],
  ["Clearest administered-human source", "US7101854B2 Example 7 (patent)"],
  ["Patent amount", "0.01–100 µg/kg once daily"],
  ["Patent route / duration", "IM · 10–40 days"],
  ["Participant-level dose disclosed?", "No"],
  ["Modern peer-reviewed RCT", "None located"],
  ["Human pharmacokinetics", "Not established"],
  ["Demonstrated peer-reviewed liver benefit", "Not established"],
  ["Modern online range reviewed", "0.2–10 mg/day across incompatible SC/IM schedules"],
];

export const LIVAGEN_PROTOCOL_PHASES = [
  {
    id: "screen",
    phase: "Screening",
    days: "−28 to −15",
    exposure: "None",
    purpose:
      "Consent, cause-specific diagnosis, medication/alcohol history, eligibility",
  },
  {
    id: "baseline",
    phase: "Baseline",
    days: "−14 to −1",
    exposure: "None",
    purpose:
      "Two baseline lab sets, symptoms/QoL, exam; stable standard liver care",
  },
  {
    id: "exposure",
    phase: "Fixed cohort exposure",
    days: "1–10",
    exposure: "Assigned tier µg/kg IM once daily",
    purpose:
      "No within-participant escalation; sentinel dosing; PK on days 1 and 10",
  },
  {
    id: "day17",
    phase: "Post-exposure safety",
    days: "17",
    exposure: "None",
    purpose: "Seven-day post-exposure safety visit and liver panel",
  },
  {
    id: "day40",
    phase: "Final planned visit",
    days: "40",
    exposure: "None",
    purpose:
      "Final safety/exploratory outcomes; longer follow-up if abnormalities persist",
  },
];

export const LIVAGEN_COMPARE = {
  patent: {
    title: "Patent-reported human example",
    status: "Patent-controlled · not a modern RCT",
    rows: [
      ["Amount", "0.01–100 µg/kg (individual dose unknown)"],
      ["Route", "Intramuscular"],
      ["Frequency", "Once daily"],
      ["Duration", "10–40 days (by severity; individual unknown)"],
      ["N", "23 active + 12 conventional-care comparator"],
      ["Key gap", "No dose strata, blinding detail, or AE table"],
    ],
  },
  verification: {
    title: "Proposed dose-verification design",
    status: "Prospective Phase 1b-style framework",
    rows: [
      ["Cohorts", "0.01, 0.1, 1, 10, 100 µg/kg"],
      ["Route", "IM (patent-anchored)"],
      ["Duration", "10 consecutive days"],
      ["Escalation", "Between cohorts only + safety gates"],
      ["Controls", "Placebo + sentinel dosing"],
      ["Claim", "Safety/PK/exploratory markers — not efficacy"],
    ],
  },
  community: {
    title: "Modern online schedules",
    status: "Anecdotal · mutually inconsistent",
    rows: [
      ["Low page", "200 µg SC daily × 10 days (some mislabel KEDP)"],
      ["Titration page", "0.5 → 2 mg SC over 8–12 weeks (~126 mg)"],
      ["High page", "5–10 mg IM daily × 10 days"],
      ["Route issue", "Often SC without IM bridging study"],
      ["Identity issue", "Nominal vial mass ≠ assay-corrected KEDA"],
      ["Primary source", "None located for these schedules"],
    ],
  },
};

export const LIVAGEN_CLAIMS = [
  {
    id: "standard-dose",
    claim: "There is an established Livagen dose",
    verdict: "False",
    detail:
      "No standard dose exists. The patent reports 0.01–100 µg/kg IM daily × 10–40 days without participant-level assignments.",
  },
  {
    id: "ked-same",
    claim: "Livagen is the same as KED",
    verdict: "False",
    detail: "Livagen is KEDA (Lys-Glu-Asp-Ala). KED is a different tripeptide.",
  },
  {
    id: "ventvil-same",
    claim: "Livagen is the same as Ventvil / liver peptide complex",
    verdict: "False",
    detail:
      "Livagen is one synthetic tetrapeptide. Ventvil is a heterogeneous calf-liver extract.",
  },
  {
    id: "regenerates",
    claim: "Livagen regenerates the human liver",
    verdict: "Unsupported",
    detail:
      "Rat cell/explant/injury models show laboratory signals. Human regeneration or fibrosis reversal has not been demonstrated in a peer-reviewed trial.",
  },
  {
    id: "sc-equals-im",
    claim: "Subcutaneous equals intramuscular Livagen",
    verdict: "Unknown",
    detail:
      "No human route-bridging or bioavailability study was located. Route cannot be swapped by assumption.",
  },
  {
    id: "half-life",
    claim: "Online calculators know Livagen’s half-life",
    verdict: "Unsupported",
    detail:
      "No measured human PK study was located. Modeled half-lives are not measurements.",
  },
  {
    id: "middle-dose",
    claim: "Use the middle of the patent range",
    verdict: "Invalid",
    detail:
      "The range spans 10,000-fold with no dose-response table. “Middle” is not a scientifically valid selection method.",
  },
  {
    id: "anticancer",
    claim: "Livagen is an anticancer peptide",
    verdict: "False for clinical use",
    detail:
      "The patent reports one transplanted rat-hepatoma experiment — not human cancer treatment evidence.",
  },
  {
    id: "antiaging",
    claim: "Livagen reverses aging",
    verdict: "False",
    detail:
      "Ex-vivo chromatin changes in lymphocytes are mechanistic only — not longer life or clinical rejuvenation.",
  },
  {
    id: "wada-ok",
    claim: "Not named on WADA list means allowed",
    verdict: "Unsafe assumption",
    detail:
      "S0 may cover non-approved pharmacologic substances. Athletes need a written anti-doping determination.",
  },
];

export const LIVAGEN_EVIDENCE_LADDER = [
  {
    level: "Established clinical use",
    exists: "None",
    confidence: "None",
  },
  {
    level: "Modern randomized human trials",
    exists: "None located",
    confidence: "None",
  },
  {
    level: "Human administration",
    exists: "One older patent example (23 + 12)",
    confidence: "Very low",
  },
  {
    level: "Human ex-vivo work",
    exists: "Lymphocyte chromatin / serum enzyme studies",
    confidence: "Mechanistic, low",
  },
  {
    level: "Animal research",
    exists: "Liver injury, hepatoma, enzymes, toxicology",
    confidence: "Preclinical",
  },
  {
    level: "Cell and explant research",
    exists: "Hepatocyte protein synthesis; explant area index",
    confidence: "Mechanistic",
  },
  {
    level: "Community protocols",
    exists: "Multiple vendor/clinic pages (0.2–10 mg/day)",
    confidence: "Anecdotal",
  },
];

export const LIVAGEN_AE_SIMPLE = [
  {
    category: "Human AE incidence",
    note: "Not established — patent lacks systematic AE table, discontinuation analysis, or long-term follow-up",
  },
  {
    category: "Injection / product",
    note: "Local pain, bruising, infection, endotoxin fever, wrong identity, microgram–milligram dosing error",
  },
  {
    category: "Hepatic monitoring",
    note: "Experimental peptide must never delay cause-specific liver evaluation or guideline-based care",
  },
  {
    category: "Higher-uncertainty groups",
    note: "Pregnancy, children, decompensated cirrhosis, transplant/immunosuppression, active malignancy — inadequately characterized",
  },
];

export const LIVAGEN_AE_FULL = [
  {
    domain: "Hypersensitivity / infection",
    items:
      "Anaphylaxis, angioedema, bronchospasm; cellulitis, abscess, systemic infection from nonsterile product",
  },
  {
    domain: "Injection-site / formulation",
    items:
      "Pain, bleeding, bruising, nerve injury, sterile inflammation; particles, unsuitable pH/osmolality",
  },
  {
    domain: "Liver stop signals (study framework)",
    items:
      "Large ALT/AST rises vs baseline, Hy’s-law-pattern signals, bilirubin ≥2× baseline without alternative, INR worsening — specialist adjudication required",
  },
  {
    domain: "Urgent clinical red flags",
    items:
      "Jaundice, dark urine, pale stools, confusion, GI bleeding, rapid ascites, severe RUQ pain, fever, fainting, unusual bleeding",
  },
];

export const LIVAGEN_DOSAGE_GUIDE = {
  title: "Livagen Dosage: Human Patent Research, Protocol, and Reconstitution",
  updated: "Updated August 2026",
  callout:
    "**Research note:** Livagen is the defined synthetic tetrapeptide **Lys-Glu-Asp-Ala (KEDA)**. Its only located administered-human dose report is an older **patent example**, not a modern peer-reviewed clinical trial. The complete protocol below is a prospective research design for qualified investigators — **not** a personal treatment plan.",
  intro: [
    "**Clearest human record:** **0.01–100 µg/kg IM once daily for 10–40 days** in a US patent describing 23 adults with “chronic persistent hepatitis” vs 12 conventional-care comparators. The patent does **not** reveal each participant’s dose, dose-group sizes, randomization/blinding detail, or a formal adverse-event analysis.",
    "For a **70 kg** participant, that range equals **0.7 µg to 7 mg/day**. Modern online schedules (200 µg SC × 10 days; 0.5–2 mg SC titration; 5–10 mg IM × 10 days) are mutually inconsistent and are **not** clinical-trial doses — one reviewed page even mislabels Livagen as **KEDP**.",
    "**Most defensible next study:** sequential, placebo-controlled **dose verification** across fixed cohorts at **0.01, 0.1, 1, 10, and 100 µg/kg IM** for 10 days with sentinel dosing and safety gates — a proposed design inside the patent range, not the patent’s actual assignments.",
  ],
  glance: {
    title: "Livagen dosage in 30 seconds",
    table: {
      headers: ["Question", "Research summary"],
      rows: [
        ["**Identity**", "KEDA · Lys-Glu-Asp-Ala · ≈461.48 g/mol free peptide"],
        ["**≠**", "KED · KEDP · Ventvil / liver extracts"],
        ["**Patent human amount**", "0.01–100 µg/kg once daily IM × 10–40 days"],
        ["**Participant-level dose**", "Not disclosed"],
        ["**70 kg daily span**", "0.7 µg – 7 mg/day"],
        ["**Modern online range**", "0.2–10 mg/day (incompatible SC/IM schedules)"],
        ["**Human PK**", "Not established"],
        ["**Peer-reviewed liver benefit**", "Not established"],
      ],
    },
  },
  sections: [
    {
      id: "what-is",
      title: "What is Livagen?",
      paragraphs: [
        "Livagen is a chemically defined four-amino-acid peptide (**H-Lys-Glu-Asp-Ala-OH**, **KEDA**) from the short peptide-bioregulator research program associated with Khavinson and colleagues. Primary patent US7101854B2 describes synthesis, parenteral formulation, animal work, and one human clinical example.",
        "Free-peptide formula **C18H31N5O9**, MW **461.48**. Patent example finished product was associated with **acetate**; salt, moisture, and assay basis change gross mass vs free-peptide-equivalent mass.",
      ],
      widget: "livagen-identity-gate",
      tables: [
        {
          caption: "Common identity errors",
          headers: ["Name or label", "What it is", "Equivalent to pure KEDA?"],
          rows: [
            ["Livagen / KEDA", "Defined Lys-Glu-Asp-Ala", "Yes, if verified analytically"],
            ["KED", "Lys-Glu-Asp tripeptide", "No"],
            ["KEDP", "Lys-Glu-Asp-Pro tetrapeptide", "No"],
            ["Ventvil", "Calf-liver polypeptide complex", "No"],
            ["Oral “Livagen” combination", "May mix KEDA + other ingredients", "No — separate exposures"],
          ],
        },
      ],
    },
    {
      id: "human",
      title: "Has Livagen been tested in humans?",
      paragraphs: [
        "[US7101854B2 Example 7](https://patents.google.com/patent/US7101854B2/en) is the only located source that clearly describes Livagen administration to living humans: **23** patients aged 32–53 with historical “chronic persistent hepatitis,” **0.01–100 µg/kg IM once daily for 10–40 days**, vs **12** conventionally treated comparators.",
        "The historical diagnosis requires caution — a modern replication needs cause-specific staging. Patent pre/post tables report symptom and lab changes in the active cohort (e.g., bilirubin, ALT, IgM marked significant in the source) but do **not** clearly report comparator outcomes or between-group analysis.",
      ],
      widget: "livagen-human-status",
      tables: [
        {
          caption: "What the patent evidence does and does not show",
          headers: ["Supports", "Does not establish"],
          rows: [
            [
              "KEDA reportedly administered IM to humans",
              "A replicated peer-reviewed clinical benefit",
            ],
            [
              "10–40-day daily schedule used",
              "Which duration any individual received",
            ],
            [
              "Administered range 0.01–100 µg/kg",
              "Which dose any participant received",
            ],
            [
              "Comparator group mentioned",
              "Randomization, blinding, or matched concurrent care",
            ],
          ],
        },
      ],
      paragraphsAfter: [
        "Human-cell / ex-vivo chromatin and enkephalinase studies are **not** dosing studies — they do not establish absorption, systemic dose, or clinical effect.",
      ],
    },
    {
      id: "research-range",
      title: "Livagen research dosage landscape",
      paragraphs: [
        "Patent and community amounts diverge because sellers start from **20 mg vial** arithmetic, often substitute **SC** for patent **IM** without bridging data, and copy protocol language across sites. Nominal vial fill, salt mass, and free-peptide mass are frequently conflated.",
      ],
      tables: [
        {
          caption: "Reported dosage landscape",
          headers: ["Source", "Amount", "Route", "Duration", "Classification"],
          rows: [
            [
              "Patent human example",
              "0.01–100 µg/kg daily",
              "IM",
              "10–40 days",
              "Patent-reported human administration",
            ],
            [
              "Low online protocol",
              "200 µg daily",
              "SC",
              "10 days",
              "Anecdotal (some mislabel KEDP)",
            ],
            [
              "Gradual online titration",
              "0.5 → 2 mg daily",
              "SC",
              "8–12 weeks",
              "Vendor/educational; no dose-finding source",
            ],
            [
              "High online convention",
              "5–10 mg daily",
              "IM",
              "10 days",
              "Vendor/educational; no controlled support",
            ],
          ],
        },
      ],
      widget: "livagen-clinical-vs-anecdotal",
    },
    {
      id: "weight-math",
      title: "Patent range by body weight (arithmetic only)",
      paragraphs: [
        "The following converts µg/kg tiers to daily mass. It is **not** personalization. The range spans **four orders of magnitude** — “use the middle” is not a scientifically valid dose-selection method.",
      ],
      widget: "livagen-weight-calc",
    },
    {
      id: "protocol",
      title: "Complete patent-anchored dose-verification protocol",
      paragraphs: [
        "Prospective Phase 1b-style framework for pure KEDA in adults with **stable, compensated, cause-specific** chronic liver disease. Preserves patent route, frequency, range, and minimum duration while adding PK, sentinel dosing, and stop rules the patent omitted.",
        "**Cohorts:** 0.01, 0.1, 1, 10, 100 µg/kg IM once daily × **10 days**. Escalation **between cohorts only**. Primary endpoints are safety/tolerability — **not** powered efficacy. IRB/ethics, hepatology, pharmacy, and independent safety review required before use.",
      ],
      widget: "livagen-protocol-timeline",
      tables: [
        {
          caption: "Fixed-volume scheme example (0.01 mL/kg admin volume)",
          headers: ["Cohort", "Dose", "Concentration", "70 kg amount"],
          rows: [
            ["1", "0.01 µg/kg", "1 µg/mL", "0.7 µg"],
            ["2", "0.1 µg/kg", "10 µg/mL", "7 µg"],
            ["3", "1 µg/kg", "100 µg/mL", "70 µg"],
            ["4", "10 µg/kg", "1 mg/mL", "700 µg"],
            ["5", "100 µg/kg", "10 mg/mL", "7 mg"],
          ],
        },
      ],
      paragraphsAfter: [
        "The patent’s example **10 µg/mL** solution fits Cohort 2 under this scheme but cannot deliver the top tier at a practical volume (700 mL for 7 mg). Higher concentrations need new validation. Do **not** double missed doses, escalate within a course, or start automatic repeat cycles.",
      ],
    },
    {
      id: "community-titration",
      title: "Documented community titration (not a recommendation)",
      paragraphs: [
        "One circulating 12-week 20 mg-vial schedule escalates 0.5 → 1 → 1.5 → 2 mg SC daily, totaling **~126 mg** nominal peptide over 84 days (≈6.3 × 20 mg vials before fill loss). Masses can fall numerically inside the patent µg/kg band for some body weights, but **route, duration, titration, and identity remain unbridged**.",
      ],
      tables: [
        {
          caption: "Example online SC titration cumulative exposure",
          headers: ["Phase", "Daily amount", "Days", "Phase exposure", "Cumulative"],
          rows: [
            ["Weeks 1–2", "0.5 mg SC", "14", "7 mg", "7 mg"],
            ["Weeks 3–4", "1 mg SC", "14", "14 mg", "21 mg"],
            ["Weeks 5–6", "1.5 mg SC", "14", "21 mg", "42 mg"],
            ["Weeks 7–12", "2 mg SC", "42", "84 mg", "126 mg"],
          ],
        },
      ],
    },
    {
      id: "recon",
      title: "Livagen reconstitution and vial math",
      paragraphs: [
        "Arithmetic assumes stated vial mass is **assay-corrected KEDA** — it does not establish identity, sterility, stability, or route suitability. U-100 markings are volume only.",
        "Patent example **10 µg/mL** is practical only at the low end of the µg/kg range; top-tier masses need higher validated concentrations.",
      ],
      widget: "livagen-recon-calc",
      tables: [
        {
          caption: "20 mg vial concentration comparison",
          headers: ["Final volume", "Concentration", "KEDA per U-100 unit"],
          rows: [
            ["2 mL", "10 mg/mL", "100 µg"],
            ["3 mL", "6.667 mg/mL", "66.67 µg"],
            ["4 mL", "5 mg/mL", "50 µg"],
          ],
        },
      ],
      paragraphsAfter: [
        "A generic “28 days refrigerated” rule is not compound-specific stability evidence. HPLC area purity alone is not a quantitative content assay.",
      ],
    },
    {
      id: "preclinical",
      title: "Preclinical research dosages",
      paragraphs: [
        "Patent and publications report hepatocyte culture at **5 ng/mL**, explants highlighting **20 ng/mL**, acute CCl4 models at **1 µg/rat IM**, hepatoma work at **1 µg/kg SC × 10 days**, and animal toxicology up to multi-mg/kg IM courses. These are model-specific and do **not** establish a human therapeutic window.",
        "The hepatoma experiment is an animal-model observation — not evidence that Livagen treats cancer.",
      ],
    },
    {
      id: "mechanisms",
      title: "How might Livagen work?",
      paragraphs: [
        "Themes under investigation include hepatocyte protein synthesis, organotypic explant response, lymphocyte chromatin decondensation (ex vivo), and enkephalinase inhibition (IC50 20 µM ≈ 9.23 µg/mL in vitro — not a plasma target).",
        "Human absorption, bioavailability, half-life, liver distribution, metabolites, dose-response, immunogenicity, and interactions remain unestablished.",
      ],
    },
    {
      id: "safety",
      title: "Livagen safety",
      paragraphs: [
        "Patent animal toxicology reports no acute deaths up to 5 mg/kg IM in mice and no major pathology in multi-month rat studies — pre-modern reporting standards apply. The human patent example lacks a systematic AE dataset.",
        "An experimental peptide should **never** delay cause-specific liver testing, antiviral care, alcohol-cessation support, DILI evaluation, or management of decompensated disease.",
      ],
      widget: "livagen-adverse-events",
    },
    {
      id: "routes",
      title: "Route comparison",
      tables: [
        {
          caption: "Route evidence",
          headers: ["Route", "Direct evidence", "Main limitation"],
          rows: [
            [
              "Intramuscular",
              "Patent human cohort + animal toxicology",
              "No dose strata, PK, or systematic human AE table",
            ],
            [
              "Subcutaneous",
              "Rat hepatoma experiment; common online route",
              "No controlled human bridging study",
            ],
            [
              "Oral",
              "Two-week rat enzyme study",
              "Dose absent from accessible abstract; no human oral PK",
            ],
            ["IV / IN / SL", "No reproducible protocol located", "No route-specific basis"],
          ],
        },
      ],
    },
    {
      id: "combinations",
      title: "Can Livagen be stacked with other peptides?",
      paragraphs: [
        "No controlled human study establishes Livagen combinations with Epitalon, Vilon, Thymalin, BPC-157, TB-500, GHK-Cu, GH secretagogues, or other liver peptide complexes. The cleanest first study uses one verified KEDA product vs placebo with stable standard care.",
      ],
    },
    {
      id: "claims",
      title: "Common claims vs evidence",
      widget: "livagen-claim-checker",
    },
    {
      id: "evidence-ladder",
      title: "Evidence ladder",
      widget: "livagen-evidence-ladder",
    },
    {
      id: "anti-doping",
      title: "Sport and regulatory context",
      paragraphs: [
        "Livagen is not named individually on the **2026 WADA** list. **S0** may still apply to non-approved pharmacologic substances. Tested athletes should obtain a ruling from their anti-doping organization before any exposure. No standardized US prescribing dose exists.",
      ],
    },
    {
      id: "bottom-line",
      title: "Bottom line",
      paragraphs: [
        "Livagen is **KEDA (Lys-Glu-Asp-Ala)** — not KED, KEDP, or a calf-liver extract. The strongest administered-human source is a patent describing **0.01–100 µg/kg IM once daily for 10–40 days** without participant-level dose disclosure.",
        "Cell, explant, and animal studies support biological activity in liver models but do not validate incompatible modern online milligram schedules. A rigorous next step is sequential, placebo-controlled, patent-anchored **dose verification** with identity testing, validated formulations, sentinel exposure, human PK, and modern cause-specific liver diagnostics.",
      ],
      highlight:
        "Treat the patent’s 10,000-fold range as a range to investigate — not a dosing answer. Confirm KEDA identity before trusting any vial chart.",
    },
  ],
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        question: "What is the established Livagen dose?",
        answer:
          "There is no established standard dose. The only located administered-human source reports 0.01–100 µg/kg IM once daily for 10–40 days without revealing individual dose assignments.",
      },
      {
        question: "Is Livagen KED or KEDA?",
        answer:
          "Livagen is KEDA: Lys-Glu-Asp-Ala. KED is a different tripeptide.",
      },
      {
        question: "Is Livagen the same as Ventvil?",
        answer:
          "No. Livagen is one defined synthetic tetrapeptide. Ventvil is a heterogeneous calf-liver polypeptide complex.",
      },
      {
        question: "What dose did each patent participant receive?",
        answer:
          "The patent does not say. It gives only the overall range of 0.01–100 µg/kg and a 10–40-day course related to severity.",
      },
      {
        question: "Is subcutaneous Livagen equivalent to intramuscular?",
        answer:
          "Unknown. No human route-bridging or bioavailability study was located.",
      },
      {
        question: "What is Livagen’s half-life?",
        answer:
          "Unknown in humans. Numerical half-lives shown by online calculators are modeled or assumed unless they link to a measured PK study.",
      },
      {
        question: "Does Livagen regenerate the liver?",
        answer:
          "Rat cell, explant, and injury models suggest effects on protein synthesis and recovery markers. Human liver regeneration or fibrosis reversal has not been demonstrated.",
      },
      {
        question: "Does Livagen reverse aging?",
        answer:
          "No. Ex-vivo chromatin changes in lymphocytes are mechanistic observations, not evidence of longer life or clinical rejuvenation.",
      },
      {
        question: "Is Livagen an anticancer peptide?",
        answer:
          "No clinical evidence supports that description. The patent reports one transplanted rat-hepatoma experiment.",
      },
      {
        question: "Can a cycle be repeated every few months?",
        answer:
          "No controlled study establishes a repeat interval or cumulative long-term safety. Repeat exposure requires its own protocol.",
      },
      {
        question: "Is Livagen prohibited in tested sport?",
        answer:
          "It is not named individually on the 2026 WADA list, but S0 may apply. Obtain a sport-specific determination before use.",
      },
    ],
  },
  sources: {
    title: "References",
    items: [
      {
        authors: "Khavinson VK",
        title: "US7101854B2 — Tetrapeptide stimulating hepatocyte functional activity",
        detail: "Primary patent: identity, formulation, animal work, human example.",
        href: "https://patents.google.com/patent/US7101854B2/en",
      },
      {
        authors: "PubChem",
        title: "Livagen CID 87919683",
        detail: "Compound identity record.",
        href: "https://pubchem.ncbi.nlm.nih.gov/compound/87919683",
      },
      {
        authors: "Brodskii VI et al.",
        title: "Protein-synthesis rhythm in rat hepatocytes and Livagen",
        detail: "5 ng/mL culture exposure — preclinical.",
        href: "https://pubmed.ncbi.nlm.nih.gov/15926314/",
      },
      {
        authors: "Khavinson VK et al.",
        title: "Livagen peptide and chromatin activation in lymphocytes from old people",
        detail: "Ex-vivo mechanistic work — not systemic dosing.",
        href: "https://pubmed.ncbi.nlm.nih.gov/12533768/",
      },
      {
        authors: "Kost NV et al.",
        title: "Livagen and Epitalon on enkephalin-degrading enzymes",
        detail: "In-vitro IC50 20 µM — not a plasma target.",
        href: "https://pubmed.ncbi.nlm.nih.gov/12942748/",
      },
      {
        authors: "Kuznik BI et al.",
        title: "Polypeptide liver complex and tetrapeptide KEDA review",
        detail: "Distinguishes Ventvil extract from KEDA.",
        href: "https://pubmed.ncbi.nlm.nih.gov/32362099/",
      },
      {
        authors: "WADA",
        title: "2026 Prohibited List",
        detail: "Not named individually; S0 may apply.",
        href: "https://www.wada-ama.org/en/resources/world-anti-doping-program/prohibited-list",
      },
    ],
  },
};
