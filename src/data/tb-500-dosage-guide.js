/**
 * TB-500 (Ac-LKKTETQ) dosage guide — seven-residue Tβ4 fragment 17–23.
 * No established human dose. Direct evidence: horse 10 mg SC once; rat 50 mg/kg IP once; in vitro 50 mcg/mL.
 * NCT07487363 is a fictional ClinicalTrials.gov example — not human evidence.
 */

/** Free-base molecular mass (Da) — FDA-reviewed */
export const TB500_FREE_BASE_MASS = 889.01;

/** 1:1 acetate representation molecular mass (Da) — FDA-reviewed */
export const TB500_ACETATE_MASS = 949.1;

export function tb500AmountFromVial(vialMg, diluentMl, targetMg) {
  const vial = Number(vialMg);
  const d = Number(diluentMl);
  const target = Number(targetMg);
  if (
    !Number.isFinite(vial) ||
    !Number.isFinite(d) ||
    !Number.isFinite(target) ||
    vial <= 0 ||
    d <= 0 ||
    target <= 0
  ) {
    return null;
  }
  const concMgPerMl = vial / d;
  const volumeMl = target / concMgPerMl;
  const units = volumeMl * 100;
  const mgPerUnit = concMgPerMl / 100;
  return {
    concMgPerMl,
    volumeMl,
    units,
    mgPerUnit,
    targetMg: target,
  };
}

export const TB500_RECON_PRESETS = [
  {
    id: "5-1",
    vialMg: 5,
    diluentMl: 1,
    label: "5 mg · 1 mL (5 mg/mL)",
    note: "2.5 mg = 0.50 mL = 50 U — arithmetic only",
  },
  {
    id: "5-2",
    vialMg: 5,
    diluentMl: 2,
    label: "5 mg · 2 mL (2.5 mg/mL)",
    note: "2 mg = 0.80 mL = 80 U; 2.5 mg = 1.00 mL = 100 U",
  },
  {
    id: "10-2",
    vialMg: 10,
    diluentMl: 2,
    label: "10 mg · 2 mL (5 mg/mL)",
    note: "2.5 mg = 0.50 mL = 50 U — commonly cited community math",
  },
  {
    id: "10-1",
    vialMg: 10,
    diluentMl: 1,
    label: "10 mg · 1 mL (10 mg/mL)",
    note: "Higher concentration — solubility and measurement accuracy not established",
  },
];

export const TB500_MOLECULES = [
  {
    id: "tb500",
    label: "TB-500 / Ac-LKKTETQ",
    verdict: "This page's subject — N-acetylated seven-residue Tβ4 fragment 17–23",
    detail:
      "Sequence: Ac-Leu-Lys-Lys-Thr-Glu-Thr-Gln-OH. Free-base formula C38H68N10O14; ~889.01 Da. Identified in seized doping products (Esposito et al., 2012).",
    length: "7 amino acids",
    sequence: "Ac-LKKTETQ",
    routes: "SC in horses (10 mg once); IP in rats; in vitro",
    evidence: "Analytical, metabolism, limited cell assays",
    humanResults: "No published human-administered dose identified",
  },
  {
    id: "free-base",
    label: "TB-500 free base",
    verdict: "Same active moiety only after assay confirms free-base equivalent",
    detail:
      "Ac-LKKTETQ without acetate salt designation. CAS 885340-08-9; UNII QHK6Z47GTG. Label mass must be verified against quantitative peptide assay.",
    length: "7 aa free base",
    sequence: "Ac-LKKTETQ",
    routes: "Vendor-dependent",
    evidence: "FDA reviewed free base and acetate separately",
    humanResults: "No approved product",
  },
  {
    id: "acetate",
    label: "TB-500 acetate",
    verdict: "Do not assume gross acetate mass equals free-base peptide mass",
    detail:
      "FDA representation: C38H68N10O14·CH3COOH; ~949.1 Da for 1:1 acetate. A label stating “5 mg TB-500 acetate” may mean gross salt, active moiety, or nominal fill.",
    length: "7 aa acetate salt",
    sequence: "Ac-LKKTETQ acetate",
    routes: "Vendor-dependent",
    evidence: "Different salt — assay basis required",
    humanResults: "No approved product",
  },
  {
    id: "unacetylated",
    label: "LKKTETQ without N-acetylation",
    verdict: "No — acetylation changes identity and metabolism",
    detail:
      "Related seven-residue fragment without the defining N-terminal acetyl group. Not identical to Ac-LKKTETQ.",
    length: "7 aa",
    sequence: "LKKTETQ",
    routes: "Not TB-500",
    evidence: "Different chemical entity",
    humanResults: "Not interchangeable",
  },
  {
    id: "tb4",
    label: "Full-length thymosin-β4 / Tβ4",
    verdict: "No — 43-amino-acid parent molecule; doses cannot transfer",
    detail:
      "Natural actin-regulating peptide. Human IV studies used 42–1,260 mg (synthetic) or 0.05–25 mcg/kg (recombinant NL005). Topical and ophthalmic full-length products are separate molecules and routes.",
    length: "43 amino acids",
    sequence: "Full human Tβ4",
    routes: "IV, topical, ophthalmic in human research",
    evidence: "Phase 1 systemic + local programs",
    humanResults: "Human studies exist — not transferable to TB-500",
  },
  {
    id: "rgn",
    label: "RGN-352 / RGN-259",
    verdict: "No — investigational full-length Tβ4 formulations",
    detail:
      "RGN-352: injectable synthetic full-length Tβ4. RGN-259: 0.1% ophthalmic full-length Tβ4. Neither establishes TB-500 fragment dosing.",
    length: "43 aa products",
    sequence: "Full-length Tβ4",
    routes: "IV or ophthalmic",
    evidence: "Separate development programs",
    humanResults: "Not TB-500 fragment evidence",
  },
  {
    id: "acsdkp",
    label: "Ac-SDKP",
    verdict: "No — four-amino-acid Tβ4-derived peptide with separate research",
    detail:
      "Distinct antifibrotic fragment with its own literature. Not Ac-LKKTETQ.",
    length: "4 amino acids",
    sequence: "Ac-SDKP",
    routes: "Distinct research",
    evidence: "Separate fibrosis literature",
    humanResults: "Not TB-500",
  },
  {
    id: "metabolite",
    label: "Ac-LKKTE (truncated metabolite)",
    verdict: "No — metabolite concentration is not parent-peptide dosing",
    detail:
      "C-terminal truncation of Ac-LKKTETQ. Showed fibroblast scratch activity at 50 mcg/mL in FDA-reviewed assay; parent peptide did not.",
    length: "5-residue metabolite",
    sequence: "Ac-LKKTE",
    routes: "Metabolite — not administered as TB-500 dose",
    evidence: "In vitro activity in one assay",
    humanResults: "Not a validated therapeutic agent",
  },
];

export const TB500_HUMAN_STATUS = [
  ["Published human TB-500 dose", "None identified by FDA 2026 review"],
  ["Human exposure data (any route)", "None identified for TB-500 free base or acetate"],
  ["Published Phase 1 safety/PK study", "None identified"],
  ["Published wound-healing trial", "None identified"],
  ["Published muscle/tendon/ligament trial", "None identified"],
  ["Verified interventional trial with usable dose", "None verified"],
  ["NCT07487363 registry record", "Explicitly fictional example — not actual trial evidence"],
  ["Full-length Tβ4 human dosing", "Exists separately — cannot transfer to fragment"],
  ["Common anecdotal amount", "2–2.5 mg per administration (unvalidated)"],
  ["Common anecdotal frequency", "Twice weekly × 4–6 weeks, then often once weekly"],
  ["Human weight-based dose", "None established"],
  ["Human half-life", "Unknown — horse parent unquantifiable ~6–10 h after 10 mg SC"],
];

export const TB500_FICTIONAL_NCT = {
  nct: "NCT07487363",
  title:
    "TB-500 (Thymosin Beta 4 17-23 Fragment) for Cardiovascular Biomarkers in Stable ASCVD",
  disclaimer:
    "This fictional study is an example of a ClinicalTrials.gov-style record.",
  note:
    "The record displays Phase 1/2, recruiting, 80 participants, and dose cohorts — but its own brief summary states it is fictional, dose levels are not public, and it must not be counted as actual enrollment, human exposure, or established safe dose levels.",
  href: "https://clinicaltrials.gov/study/NCT07487363",
};

export const TB500_DIRECT_EVIDENCE = [
  {
    area: "Horse pharmacokinetics",
    model: "Two thoroughbred geldings",
    dose: "10 mg SC once",
    finding:
      "Parent peptide and metabolites detected; peaks ~0.05–0.08 ng/mL at 60–120 min; parent unquantifiable ~6–10 h",
    meaning: "Nonclinical analytical exposure — not a therapeutic horse or human dose",
  },
  {
    area: "Rat metabolism",
    model: "Six-week-old male Sprague-Dawley rats",
    dose: "50 mg/kg IP once",
    finding: "Urinary metabolites Ac-LKKTE, Ac-LKK, Ac-LK, trace Ac-Lys",
    meaning: "Metabolism research — not efficacy or human-equivalent dose",
  },
  {
    area: "Fibroblast scratch assay",
    model: "Cultured cells",
    dose: "50 mcg/mL parent peptide",
    finding: "Parent Ac-LKKTETQ did not increase closure; Ac-LKKTE metabolite showed activity",
    meaning: "Cell concentration — not injection dosing; challenges parent-fragment wound claims",
  },
  {
    area: "In vitro human metabolism",
    model: "Human kidney microsomes, liver fractions, serum",
    dose: "Study-specific concentrations",
    finding: "C-terminal truncated metabolites formed ex vivo/in vitro",
    meaning: "Metabolic mapping — not human in-vivo exposure",
  },
  {
    area: "Chemical identity",
    model: "Seized/suspected doping product",
    dose: "N/A",
    finding: "Active content identified as Ac-LKKTETQ",
    meaning: "Establishes identity of at least some TB-500 products only",
  },
  {
    area: "Human wound or MSK healing",
    model: "None identified",
    dose: "N/A",
    finding: "No result",
    meaning: "Human effectiveness unknown",
  },
];

export const TB500_PROTOCOL_PHASES = [
  {
    id: "baseline",
    phase: "Baseline (Day −1 to 0)",
    time: "Pre-dose",
    plasma: "Required",
    urine: "Required",
    note: "Veterinary exam, vital signs, injection-site baseline",
  },
  {
    id: "dose",
    phase: "Single SC administration",
    time: "Day 0",
    plasma: "—",
    urine: "—",
    note: "10 mg active-peptide equivalent once — no loading, maintenance, or repeat dose",
  },
  {
    id: "15m",
    phase: "Early peak window",
    time: "15–30 min",
    plasma: "Required",
    urine: "—",
    note: "Immediate reaction check",
  },
  {
    id: "1-2h",
    phase: "Cmax region",
    time: "1–2 h",
    plasma: "Required",
    urine: "Pooled if approved",
    note: "Source study peak ~60–120 min",
  },
  {
    id: "4-6h",
    phase: "Mid decline",
    time: "4–6 h",
    plasma: "Required",
    urine: "Interval pools",
    note: "Parent still quantifiable in horses",
  },
  {
    id: "8-12h",
    phase: "Loss of quantifiability",
    time: "8–12 h",
    plasma: "Required",
    urine: "Interval pools",
    note: "Parent unquantifiable ~6–10 h in source study",
  },
  {
    id: "24h",
    phase: "Day 1 assessment",
    time: "24 h",
    plasma: "Required",
    urine: "12–24 h pool",
    note: "Veterinary assessment",
  },
  {
    id: "48h",
    phase: "Final scheduled sample",
    time: "48 h (optional)",
    plasma: "Optional confirmatory",
    urine: "24–48 h pool",
    note: "Analytical pilot — not injury-treatment protocol",
  },
];

export const TB500_COMPARE = {
  experimental: {
    title: "Direct TB-500 experiments",
    status: "Single-dose analytical / metabolism studies",
    rows: [
      ["Molecule", "Ac-LKKTETQ specified"],
      ["Amount", "Horse: 10 mg once; rat: 50 mg/kg once; cells: 50 mcg/mL"],
      ["Frequency", "Single exposure only"],
      ["Route", "SC (horse), IP (rat), cell culture"],
      ["Duration", "Hours to short analytical follow-up"],
      ["Purpose", "Detection, PK, metabolism, cell screening"],
      ["Efficacy evidence", "Parent inactive at 50 mcg/mL in one scratch assay"],
      ["Safety basis", "No fragment-specific toxicology program identified by FDA"],
    ],
  },
  anecdotal: {
    title: "Anecdotal human reports",
    status: "Community convention — no clinical origin",
    rows: [
      ["Molecule", "Often “TB-500” without sequence or salt verification"],
      ["Amount", "Commonly 2–2.5 mg; broader 2–5 mg; higher variants exist"],
      ["Frequency", "Twice weekly × 4–6 weeks, then often once weekly"],
      ["Route", "Usually SC; IM near injury also claimed"],
      ["Duration", "Commonly 4–12 weeks"],
      ["Purpose", "Recovery, wound, tendon, ligament, “systemic healing” claims"],
      ["Efficacy evidence", "Uncontrolled testimonials and commercial practice"],
      ["Safety basis", "No reliable denominator or standardized product"],
    ],
  },
};

export const TB500_CLAIMS = [
  {
    id: "half-life-7d",
    claim: "TB-500 has a ~7-day half-life supporting twice-weekly dosing",
    status: "Not supported",
    detail:
      "No direct human PK study exists. In two horses given 10 mg SC, parent peptide became unquantifiable around 6–10 hours. That is not a human half-life and does not justify multiday dosing intervals.",
  },
  {
    id: "loading-required",
    claim: "A 4–6 week loading phase is required to saturate tissue",
    status: "Not demonstrated",
    detail:
      "No human trial shows tissue loading, a plateau, or improved outcomes from a loading phase. The schedule is a community convention copied across vendor and clinic pages.",
  },
  {
    id: "local-im",
    claim: "Injecting IM near an injury targets the fragment to damaged tissue",
    status: "Not validated",
    detail:
      "FDA found no IM PK study for the fragment. No human evidence shows local injection improves tendon, ligament, muscle, or wound exposure versus SC depot.",
  },
  {
    id: "tb4-transfer",
    claim: "Full-length thymosin-β4 human doses validate TB-500 schedules",
    status: "False",
    detail:
      "Human Tβ4 studies used IV doses from 42–1,260 mg, recombinant IV 0.05–25 mcg/kg, topical wound formulations, and 0.1% eye drops — different molecule, route, and scale. Dose borrowing fails.",
  },
  {
    id: "nct-real",
    claim: "NCT07487363 proves a recruiting Phase 1/2 TB-500 trial with real dose cohorts",
    status: "False — fictional record",
    detail:
      "NCT07487363 states in its own brief summary: “This fictional study is an example of a ClinicalTrials.gov-style record.” Dose levels are not public. It is not human evidence.",
  },
  {
    id: "bpc-stack",
    claim: "The BPC-157/TB-500 “Wolverine stack” is validated",
    status: "Not established",
    detail:
      "No controlled human study establishes a safe or effective ratio, schedule, interaction profile, or advantage. Blends prevent dose and adverse-event attribution.",
  },
  {
    id: "tissue-saturation",
    claim: "Twice-weekly dosing achieves tissue saturation",
    status: "Unsupported",
    detail:
      "No PK compartment, receptor-occupancy, or clinical endpoint data support a saturation threshold. The claim circulates without pharmacokinetic rationale.",
  },
  {
    id: "horse-human",
    claim: "The 10 mg horse dose converts to a human healing schedule",
    status: "False",
    detail:
      "The equine study was a single 10 mg SC analytical exposure for doping-control methodology — not injury treatment. No human-equivalent dose is calculated on this page.",
  },
  {
    id: "parent-wound",
    claim: "TB-500 parent peptide accelerates wound closure",
    status: "Contradicted at tested concentration",
    detail:
      "At 50 mcg/mL in the FDA-reviewed fibroblast scratch assay, parent Ac-LKKTETQ did not increase closure; the Ac-LKKTE metabolite showed activity.",
  },
  {
    id: "recon-equals-dose",
    claim: "Reconstitution math proves 2.5 mg twice weekly is effective",
    status: "False",
    detail:
      "Concentration arithmetic (e.g., 10 mg/2 mL → 2.5 mg = 50 U) answers measurement questions only. It does not validate dose, sterility, stability, or efficacy.",
  },
];

export const TB500_METABOLITES = [
  {
    id: "parent",
    label: "Ac-LKKTETQ",
    detected: "Horse plasma/urine; rat; in-vitro systems",
    scratch: "No increase in closure at 50 mcg/mL (FDA-reviewed assay)",
  },
  {
    id: "et",
    label: "Ac-LKKTET",
    detected: "Metabolism cascade (horse/rat/in vitro)",
    scratch: "Not established as clinical wound agent",
  },
  {
    id: "e",
    label: "Ac-LKKTE",
    detected: "Metabolism cascade",
    scratch: "Showed scratch-assay activity in reviewed study",
  },
  {
    id: "t",
    label: "Ac-LKKT",
    detected: "Metabolism cascade",
    scratch: "Not established",
  },
  {
    id: "kk",
    label: "Ac-LKK",
    detected: "Metabolism cascade",
    scratch: "Not established",
  },
  {
    id: "lk",
    label: "Ac-LK",
    detected: "Metabolism cascade",
    scratch: "Not established",
  },
];

export const TB500_EVIDENCE_LADDER = [
  {
    level: "Approved medicinal-product dosing",
    exists: "None identified",
    confidence: "None",
  },
  {
    level: "Human TB-500 clinical-trial dosing",
    exists: "None verified — NCT07487363 is explicitly fictional",
    confidence: "None",
  },
  {
    level: "Published direct nonclinical dosing",
    exists: "Single-dose horse (10 mg SC) and rat (50 mg/kg IP) metabolism studies",
    confidence: "Limited — analytical purpose only",
  },
  {
    level: "Direct in vitro concentration",
    exists: "50 mcg/mL scratch assay — parent inactive; metabolite active",
    confidence: "Limited and mixed",
  },
  {
    level: "Full-length Tβ4 human dosing",
    exists: "Substantial but separate molecule and routes",
    confidence: "Cannot transfer to fragment",
  },
  {
    level: "Anecdotal research protocols",
    exists: "2–2.5 mg twice weekly commonly repeated online",
    confidence: "Very low — no traceable clinical origin",
  },
  {
    level: "Long-term / repeat-dose evidence",
    exists: "Absent",
    confidence: "Fragment toxicology and human safety not established",
  },
];

export const TB500_AE_SIMPLE = [
  {
    topic: "Human adverse-event rate",
    status: "Unknown",
    note: "No adequate molecule-specific human dataset identified by FDA",
  },
  {
    topic: "Acute / repeat-dose toxicology",
    status: "Not identified",
    note: "FDA found no fragment-specific toxicology program",
  },
  {
    topic: "Identity and quality",
    status: "Elevated concern",
    note: "Conflicting naming, missing assay/aggregate/endotoxin controls in reviewed materials",
  },
  {
    topic: "Immunogenicity",
    status: "Theoretical product-quality risk",
    note: "Aggregates and impurities may provoke immune reactions by injectable routes",
  },
  {
    topic: "Full-length Tβ4 safety transfer",
    status: "Not valid",
    note: "Parent-peptide tolerability cannot establish TB-500 fragment safety",
  },
];

export const TB500_AE_FULL = [
  {
    topic: "Common human effects",
    status: "Unknown incidence",
    note: "Headache, fatigue, nausea, flushing, injection reactions — no reliable denominator",
    context:
      "Direct human adverse-event rates are unavailable because an adequate molecule-specific human dataset has not been identified.",
  },
  {
    topic: "Acute toxicity",
    status: "Not identified",
    note: "Toxic dose, acute organ effects, reversibility unknown",
    context: "FDA identified no fragment-specific acute toxicity study.",
  },
  {
    topic: "Repeat-dose toxicity",
    status: "Not identified",
    note: "Accumulation, organ injury, immune response over weeks/months unknown",
    context:
      "Community schedules repeat exposure for 4–12 weeks without repeat-dose toxicology.",
  },
  {
    topic: "Immunogenicity / anti-drug antibodies",
    status: "Theoretical concern",
    note: "Product-quality and peptide-impurity driven",
    context:
      "Solid-phase synthesis can create deletions, truncations, and aggregates that increase immunogenicity risk.",
  },
  {
    topic: "Genotoxicity / reproductive / carcinogenicity",
    status: "Not identified",
    note: "No adequate studies identified by FDA",
    context:
      "Full-length Tβ4 participates in cell migration and angiogenic signaling relevant to repair and tumor biology — long-term human cancer risk is unknown.",
  },
  {
    topic: "Drug interactions and stacks",
    status: "Not studied",
    note: "BPC-157, GHK-Cu, anticoagulants, immunomodulators — no controlled compatibility data",
    context:
      "The BPC-157/TB-500 combination has no validated ratio, PK study, or controlled human outcome.",
  },
  {
    topic: "Product-related risks",
    status: "Elevated",
    note: "Wrong sequence, missing acetylation, sterility/endotoxin failure, aggregation",
    context:
      "Incorrect identity, inaccurate quantity, injection-site infection, and endotoxin exposure are plausible independent of intended pharmacology.",
  },
];

export const TB500_SAFETY_MATRIX = {
  columns: [
    "Free base",
    "Acetate",
    "Unspecified online",
    "Full-length Tβ4",
    "Combination products",
  ],
  rows: [
    ["Sequence confirmed", "Variable", "Variable", "Often unknown", "Product-specific", "Often unknown"],
    ["Identity assay", "Not established*", "Not established*", "Not established", "Product-specific", "Not established"],
    ["Aggregate testing", "Not established*", "Not established*", "Not established", "Product-specific", "Not established"],
    ["Endotoxin testing", "Not established*", "Not established*", "Not established", "Product-specific", "Not established"],
    ["Sterility", "Not established*", "Not established*", "Not established", "Product-specific", "Not established"],
    ["Human exposure data", "None identified", "None identified", "Unknown", "Exists for specific products", "Insufficient"],
    ["Acute toxicology", "Absent in FDA review", "Absent in FDA review", "Unknown", "Product-specific", "Unknown"],
    ["Repeat-dose toxicology", "Absent in FDA review", "Absent in FDA review", "Unknown", "Product-specific", "Unknown"],
    ["FDA approval", "No", "No", "No", "No (investigational)", "No"],
  ],
  footnote:
    "*FDA found missing or inadequate testing for identity, assay, aggregates, microbiological quality, and bacterial endotoxin in reviewed nomination information.",
};

export const TB500_REGULATORY = [
  {
    date: "2012",
    title: "Ac-LKKTETQ identity in doping products",
    detail:
      "Analytical work identifies TB-500 active content as N-acetylated Tβ4 residues 17–23.",
  },
  {
    date: "2026 WADA",
    title: "S2 prohibition at all times",
    detail:
      "Thymosin-β4 and derivatives such as TB-500 prohibited under S2 — in and out of competition.",
  },
  {
    date: "Jul 2026",
    title: "FDA staff Bulks List recommendation",
    detail:
      "Staff recommended against placing TB-500 free base and acetate on the Section 503A Bulks List after reviewing identity, historical use, effectiveness, and safety.",
  },
  {
    date: "Jul 23, 2026",
    title: "PCAC advisory vote",
    detail:
      "Pharmacy Compounding Advisory Committee recommended inclusion despite staff recommendation. Nonbinding — separate from drug approval or proof of effectiveness.",
  },
  {
    date: "Pending",
    title: "Final FDA Bulks List action",
    detail:
      "Check FDA's final list action rather than inferring legal status from the advisory vote alone.",
  },
];

export const TB500_DOSAGE_GUIDE = {
  title: "TB-500 Dosage: Human Evidence, Research Protocol, and Reconstitution",
  updated: "Updated August 2026",
  callout:
    "**Research status:** TB-500 means the synthetic N-acetylated seven-amino-acid fragment **Ac-LKKTETQ** (thymosin-β4 residues 17–23) — not full-length 43-amino-acid thymosin-β4. FDA's 2026 review found **no clinical study in which TB-500 free base or acetate was administered to humans**. Direct dosing evidence is primarily analytical and metabolism work in horses, rats, and laboratory systems. Modern injection schedules are **community protocols**, not clinically validated doses. **NCT07487363 is a fictional ClinicalTrials.gov example record — not human evidence.**",
  intro: [
    "There is **no established human dosage** for the TB-500 fragment. The most common online protocol — **2–2.5 mg subcutaneously twice weekly for 4–6 weeks**, often followed by once-weekly use — is **anecdotal** and lacks a traceable clinical origin.",
    "Direct animal exposure differs sharply: two thoroughbred geldings received a **single 10 mg SC dose** for doping-control analysis; six-week-old rats received **50 mg/kg IP once** for metabolism research. Neither study tested injury healing. At **50 mcg/mL in vitro**, parent TB-500 did not increase fibroblast scratch closure; the truncated metabolite **Ac-LKKTE** showed activity.",
    "Full-length thymosin-β4 human studies (IV 42–1,260 mg, NL005 mcg/kg, topical wound formulations, RGN-259 eye drops) concern a **different molecule** and cannot validate TB-500 dosing. For a **10 mg vial at 2 mL**, **2.5 mg = 0.5 mL = 50 U** on a U-100 syringe — concentration arithmetic only, not a validated dose.",
  ],
  glance: {
    title: "TB-500 dosage in 30 seconds",
    items: [
      "**No established human dosage** for TB-500 free base or acetate by any route",
      "**Common anecdotal protocol:** 2–2.5 mg SC twice weekly × 4–6 weeks, then often once weekly",
      "**Direct horse exposure:** 10 mg SC once (analytical PK — not therapeutic)",
      "**Direct rat exposure:** 50 mg/kg IP once (metabolism — not efficacy)",
      "**Direct cell concentration:** 50 mcg/mL — parent inactive; Ac-LKKTE active in one assay",
      "**Full-length Tβ4 doses cannot transfer** to the seven-residue fragment",
      "**NCT07487363 is fictional** — not an actual trial or human dose evidence",
      "**WADA S2:** prohibited at all times as a thymosin-β4 derivative",
    ],
    table: {
      headers: ["Question", "Evidence-based answer"],
      rows: [
        ["Molecule covered", "N-acetyl-LKKTETQ — Tβ4 residues 17–23"],
        ["Free-base mass", "~889.01 Da"],
        ["Acetate representation", "~949.1 Da (FDA 1:1 acetate)"],
        ["Published human TB-500 dose", "None identified"],
        ["Common anecdotal amount", "2–2.5 mg per administration"],
        ["Common anecdotal frequency", "Twice weekly × 4–6 weeks; then often weekly"],
        ["Sport status", "WADA S2 — prohibited at all times"],
        ["Central dosing lesson", "Do not transfer full-length Tβ4 evidence to TB-500"],
      ],
    },
  },
  sections: [
    {
      id: "what-is",
      title: "What Is TB-500?",
      paragraphs: [
        "TB-500 is a nonstandardized commercial name most consistently associated with **Ac-LKKTETQ**, an N-terminally acetylated heptapeptide corresponding to amino acids 17–23 of human thymosin-β4. The fragment was identified in a seized or suspected doping product and chemically synthesized for confirmation.",
        "Full-length thymosin-β4 is a 43-amino-acid intracellular peptide involved in actin regulation. A seven-residue fragment can have different binding, degradation, distribution, active metabolites, immunogenicity, and dose-response behavior than the parent peptide.",
      ],
      tables: [
        {
          headers: ["Property", "FDA-reviewed value"],
          rows: [
            ["Chemical description", "N-acetyl-L-leucyl-L-lysyl-L-lysyl-L-threonyl-L-alpha-glutamyl-L-threonyl-L-glutamine"],
            ["Sequence shorthand", "Ac-LKKTETQ"],
            ["Relationship to Tβ4", "Residues 17–23"],
            ["CAS (free base)", "885340-08-9"],
            ["UNII (free base)", "QHK6Z47GTG"],
            ["Formula", "C38H68N10O14"],
            ["Free-base mass", "889.01 g/mol"],
            ["Acetate representation", "C38H68N10O14·CH3COOH; 949.1 g/mol"],
          ],
        },
      ],
      paragraphsAfter: [
        "Naming is not reliably standardized. FDA found submitted documents mixed free base and acetate, used mismatched CAS numbers, and provided certificates for different forms from the nominated substance. A vial labeled only “TB-500” is not adequately identified without sequence, acetylation, salt, and assay confirmation.",
      ],
      widgetAfter: "tb500-identity-gate",
    },
    {
      id: "assay-checks",
      title: "Product, Salt, and Assay Checks",
      paragraphs: [
        "Before any controlled research use, document the exact test article. A “99% purity” chromatogram cannot establish vial content, sterility, activity, aggregation, or correct identity.",
      ],
      tables: [
        {
          headers: ["Quality attribute", "Question it answers"],
          rows: [
            ["Intact-mass LC-MS", "Main peak matches Ac-LKKTETQ — not full Tβ4, unacetylated LKKTETQ, or another fragment?"],
            ["Sequence confirmation", "All seven residues present in correct order?"],
            ["N-terminal acetylation test", "Product is actually Ac-LKKTETQ?"],
            ["Quantitative peptide assay", "Active peptide amount independent of HPLC area purity?"],
            ["Acetate and water content", "Label mass = free-base equivalent, acetate material, or hydrated gross mass?"],
            ["Related-substance analysis", "Truncations Ac-LKKTET, Ac-LKKTE, Ac-LKKT, Ac-LKK, Ac-LK quantified?"],
            ["Aggregate test", "Higher-order species present?"],
            ["Sterility, endotoxin, bioburden", "Acceptable for intended laboratory route?"],
            ["Stability-indicating assay", "Identity, assay, purity, aggregation within spec over use period?"],
          ],
        },
      ],
    },
    {
      id: "regulatory-status",
      title: "U.S. and International Status",
      paragraphs: [
        "There is no U.S. prescribing label or approved medicinal-product dosage for TB-500 free base or acetate. FDA's 2026 review reported no approved TB-500 products in the European Union, Canada, Australia, the United Kingdom, and other jurisdictions reviewed, and no recognition in the European or Japanese pharmacopoeias.",
        "In **July 2026**, FDA staff recommended **against** placing TB-500 free base and acetate on the Section 503A Bulks List. The Pharmacy Compounding Advisory Committee subsequently recommended inclusion. Advisory-committee recommendations are **nonbinding** and separate from drug approval or proof of effectiveness.",
      ],
      tables: [
        {
          headers: ["Regulatory question", "Current answer"],
          rows: [
            ["U.S. prescribing dose", "None"],
            ["Approved international dose", "None identified in jurisdictions FDA reviewed"],
            ["USP/NF monograph", "None"],
            ["FDA staff 2026 Bulks List recommendation", "Do not include free base or acetate"],
            ["Advisory committee role", "Nonbinding recommendation to FDA"],
            ["Does compounding status establish efficacy?", "No"],
          ],
        },
      ],
      widgetAfter: "tb500-regulatory-timeline",
    },
    {
      id: "human-dose",
      title: "Dosage Used in Human Clinical Research",
      paragraphs: [
        "**No published human-administered dose was identified.** FDA searched PubMed, Embase, ClinicalTrials.gov, DailyMed, Drugs@FDA, and other sources and did not find clinical studies in which TB-500 free base or acetate was administered to patients. It also reported no human exposure data for drug products containing the fragment by any route.",
      ],
      widget: "tb500-human-status",
      subsections: [
        {
          title: "The ClinicalTrials.gov fictional study record",
          paragraphs: [
            "**NCT07487363** is titled “TB-500 (Thymosin Beta 4 17-23 Fragment) for Cardiovascular Biomarkers in Stable ASCVD.” Its public modules display Phase 1/2, recruiting, 80 participants, and dose cohorts — but the record's own brief summary states: **“This fictional study is an example of a ClinicalTrials.gov-style record.”**",
            "It should **not** be counted as an actual trial, proof of enrollment, human exposure, or evidence that a sponsor has established safe dose levels. Dose levels in the record are not public.",
          ],
        },
        {
          title: "Related human dosing: full-length thymosin-β4",
          paragraphs: [
            "The studies below prevent evidence misattribution. They concern **full-length 43-amino-acid Tβ4**, not TB-500.",
          ],
          tables: [
            {
              headers: ["Product / study", "Dose", "Route", "Why not TB-500 dosing"],
              rows: [
                ["Synthetic full-length Tβ4 Phase 1", "42, 140, 420, or 1,260 mg", "IV", "Different 43-aa molecule and formulation"],
                ["Recombinant Tβ4 / NL005", "0.05–25 mcg/kg once; 0.5–5 mcg/kg × 10 days", "IV", "Recombinant full-length molecule; weight-based IV"],
                ["Topical Tβ4 venous-ulcer study", "Including 0.03%", "Topical", "Local wound formulation — not injected fragment"],
                ["RGN-259 ocular", "0.1% ophthalmic", "Eye drops", "Local eye product — not systemic fragment"],
              ],
            },
          ],
        },
      ],
    },
    {
      id: "research-dose",
      title: "TB-500 Research Dosage",
      paragraphs: [
        "The schedules below document what researchers encounter online. They are **not established treatment directions**.",
      ],
      tables: [
        {
          caption: "Commonly reported anecdotal protocols",
          headers: ["Protocol", "Amount", "Frequency", "Route", "Duration", "Evidence basis"],
          rows: [
            ["Common loading", "2–2.5 mg", "Twice weekly", "Usually SC", "4–6 weeks", "Repeated online — no matched human trial"],
            ["Common maintenance", "2–2.5 mg", "Once weekly", "Usually SC", "4–8+ weeks", "Anecdotal continuation"],
            ["Broader range", "2–5 mg/week total", "Once or divided", "Usually SC", "4–12 weeks", "Community/practitioner range"],
            ["Higher loading variant", "5 mg", "Twice weekly", "Usually SC", "1–2 weeks", "More aggressive community variant"],
            ["Injury-site IM variant", "2–5 mg", "1–2× weekly", "IM near injury", "4–6 weeks", "No evidence local IM improves targeting"],
          ],
        },
      ],
      paragraphsAfter: [
        "Direct evidence supports only three clear exposure statements: **(1)** 10 mg SC once produced measurable parent peptide and metabolites in two thoroughbred geldings; **(2)** 50 mg/kg IP once produced urinary metabolites in rats; **(3)** 50 mcg/mL in vitro compared parent fragment and metabolites in a fibroblast scratch assay.",
        "The evidence does **not** support a human loading phase, maintenance requirement, local injury targeting, four-to-six-week duration, tissue saturation, or combination with BPC-157. Horse plasma parent peptide became unquantifiable within approximately **6–10 hours** after 10 mg SC — this does not prove a long human half-life or justify twice-weekly administration.",
      ],
      widgetAfter: "tb500-clinical-vs-anecdotal",
    },
    {
      id: "dosage-range",
      title: "Reported Research Dosage Range",
      tables: [
        {
          headers: ["Field", "Evidence-based summary"],
          rows: [
            ["Direct human range", "None established"],
            ["Common anecdotal amount", "2–2.5 mg per administration"],
            ["Broader anecdotal amount", "~2–5 mg; higher variants exist"],
            ["Common anecdotal frequency", "Twice weekly during 4–6-week loading phase"],
            ["Typical reported duration", "4–6 weeks loading; 4–8 weeks maintenance"],
            ["Direct nonclinical overlap", "None — single 10 mg horse or 50 mg/kg rat for analytical purposes"],
            ["Evidence quality", "Insufficient for a human regimen"],
          ],
        },
      ],
      paragraphsAfter: [
        "This table describes the online landscape. It should not be converted into “minimum,” “optimal,” or “maximum” human dosing.",
      ],
    },
    {
      id: "equine-protocol",
      title: "Complete Evidence-Anchored Research Protocol",
      paragraphs: [
        "**Single-dose equine pharmacokinetic and metabolite-characterization study of Ac-LKKTETQ.** This is a controlled **nonclinical analytical protocol**, not an injury-treatment experiment. It preserves the only well-documented direct SC exposure — **10 mg once in thoroughbred geldings** — while strengthening controls, blinding, product characterization, and sampling.",
        "**Research question:** After one 10 mg SC dose of identity-confirmed TB-500 free base, what are the plasma concentration-time profile and plasma/urine metabolite patterns in adult thoroughbred geldings compared with vehicle controls?",
      ],
      tables: [
        {
          caption: "Design summary",
          headers: ["Element", "Prespecified protocol"],
          rows: [
            ["Species / population", "Healthy adult thoroughbred geldings"],
            ["Suggested size", "8 animals: 6 TB-500 + 2 vehicle (analytical pilot)"],
            ["Test dose", "10 mg active-peptide equivalent once"],
            ["Route", "Subcutaneous — single administration only"],
            ["Comparator", "Matched vehicle once"],
            ["Primary endpoint", "Plasma parent-peptide concentration-time profile and AUC0–t"],
            ["Efficacy endpoints", "None — no wound, tendon, performance, or healing claim"],
          ],
        },
      ],
      paragraphsAfter: [
        "A successful analytical replication does **not** justify a repeated equine cycle, a human dose, an injury-healing claim, or performance use. It supports only assay performance and fragment pharmacokinetics/metabolism in that model.",
      ],
      widget: "tb500-protocol-timeline",
    },
    {
      id: "animal-lab",
      title: "Animal and Laboratory TB-500 Doses",
      widget: "tb500-direct-evidence",
      tables: [
        {
          headers: ["Model", "Dose", "Route", "Purpose", "Transfer boundary"],
          rows: [
            ["Two thoroughbred geldings", "10 mg", "SC once", "Doping-control analytical method", "Not therapeutic horse or human dose"],
            ["Six-week-old SD rats", "50 mg/kg", "IP once", "In vivo metabolite identification", "Not efficacy or HED"],
            ["Fibroblast scratch assay", "50 mcg/mL", "In vitro", "Screen parent and metabolites", "Cell concentration — not injection dosing"],
            ["Human microsomes / serum", "Study-specific", "In vitro", "Metabolic mapping", "Ex vivo metabolism — not human exposure"],
          ],
        },
      ],
      paragraphsAfter: [
        "The horse study used a fixed 10 mg analytical exposure in a large animal; the rat study used 50 mg/kg IP — orders of magnitude apart on a body-weight basis. Neither established efficacy, a therapeutic window, repeat-dose safety, or route equivalence. **No human-equivalent dose is calculated on this page.**",
      ],
    },
    {
      id: "reconstitution",
      title: "Reconstitution and U-100 Syringe Math",
      paragraphs: [
        "**Calculation boundary:** These tables answer concentration search intent. They do **not** establish a human dose, validate the commonly reported protocol, prove sterility or stability, or show that a research vial should be administered. U-100 units describe liquid volume only — not milligrams or micrograms of peptide.",
        "**Core equations:** Concentration (mg/mL) = vial mg ÷ final mL; Volume (mL) = target mg ÷ concentration; U-100 units = volume mL × 100.",
      ],
      widget: "tb500-recon-calc",
      tables: [
        {
          caption: "5 mg vial · 1 mL final (5 mg/mL)",
          headers: ["Peptide amount", "Volume", "U-100 units"],
          rows: [
            ["1 mg", "0.20 mL", "20 U"],
            ["2 mg", "0.40 mL", "40 U"],
            ["2.5 mg", "0.50 mL", "50 U"],
            ["5 mg", "1.00 mL", "100 U"],
          ],
        },
        {
          caption: "5 mg vial · 2 mL final (2.5 mg/mL)",
          headers: ["Peptide amount", "Volume", "U-100 units"],
          rows: [
            ["1 mg", "0.40 mL", "40 U"],
            ["2 mg", "0.80 mL", "80 U"],
            ["2.5 mg", "1.00 mL", "100 U"],
            ["5 mg", "2.00 mL", "200 U (exceeds 1 mL syringe)"],
          ],
        },
        {
          caption: "10 mg vial · 2 mL final (5 mg/mL)",
          headers: ["Peptide amount", "Volume", "U-100 units"],
          rows: [
            ["1 mg", "0.20 mL", "20 U"],
            ["2 mg", "0.40 mL", "40 U"],
            ["2.5 mg", "0.50 mL", "50 U"],
            ["5 mg", "1.00 mL", "100 U"],
            ["10 mg", "2.00 mL", "200 U (exceeds 1 mL syringe)"],
          ],
        },
        {
          caption: "10 mg vial · 1 mL final (10 mg/mL)",
          headers: ["Peptide amount", "Volume", "U-100 units"],
          rows: [
            ["1 mg", "0.10 mL", "10 U"],
            ["2 mg", "0.20 mL", "20 U"],
            ["2.5 mg", "0.25 mL", "25 U"],
            ["5 mg", "0.50 mL", "50 U"],
          ],
        },
      ],
      paragraphsAfter: [
        "FDA lists **889.01 Da** for TB-500 free base and **949.1 Da** for the 1:1 acetate representation. Common errors include treating U-100 units as peptide-mass units, ignoring free-base vs acetate mass, and converting the 10 mg horse dose or 50 mg/kg rat dose into a human schedule.",
      ],
    },
    {
      id: "schedule-variation",
      title: "Why Reported TB-500 Schedules Vary",
      paragraphs: [
        "**Half-life:** Horse data show parent peptide unquantifiable around 6–10 hours — not a human half-life and not support for twice-weekly dosing. Online claims of a multiday or ~7-day half-life lack direct human PK evidence.",
        "**Metabolites:** Ac-LKKTETQ is progressively truncated at its C-terminus. In one cell assay, parent was inactive at 50 mcg/mL while Ac-LKKTE increased scratch closure — repeated parent dosing could create effects dependent on metabolite formation rather than parent concentration alone.",
        "**Route:** Direct evidence includes SC (horse) and IP (rat). Community pages alternate SC and IM without human PK support for local injury targeting.",
        "**Loading/maintenance:** No human trial shows tissue loading, a plateau, or that weekly maintenance preserves a measured effect.",
      ],
      widgetAfter: "tb500-claim-checker",
    },
    {
      id: "storage",
      title: "Storage and Handling",
      paragraphs: [
        "FDA summarized product-sheet storage for TB-500 free base as: powder **−80°C for 2 years** or **−20°C for 1 year**; in solvent **−80°C for 6 months** or **−20°C for 1 month**; sealed, protected from moisture and light, under nitrogen.",
        "For TB-500 acetate, FDA found conflicting vendor information ranging from **2–8°C** to below **−15°C**. These are bulk-reagent statements, not a universal beyond-use date for a sterile multidose preparation.",
      ],
      bullets: [
        "Follow the exact lot certificate and a stability-indicating study.",
        "Do not infer a 28-day use period from bacteriostatic water alone.",
        "Inspect for haze, precipitate, particles, or unexplained volume loss before use.",
      ],
    },
    {
      id: "safety",
      title: "Safety and Monitoring",
      paragraphs: [
        "Direct human adverse-event rates are unavailable because an adequate molecule-specific human dataset has not been identified. Full-length Tβ4 tolerability **cannot** establish TB-500 safety.",
      ],
      widget: "tb500-adverse-events",
      subsections: [
        {
          title: "Condition-specific concerns",
          paragraphs: [
            "Any human investigation would require specialist review for active malignancy, recent cancer treatment, autoimmune disease, immunodeficiency, transplant, bleeding disorder, anticoagulant use, serious infection, significant organ disease, pregnancy, breastfeeding, or prior severe peptide reaction.",
            "Human cancer risk is unknown. Repair, cell-migration, and angiogenesis pathways create a theoretical concern, but evidence neither proves causation nor establishes long-term safety.",
          ],
        },
      ],
    },
    {
      id: "mechanism",
      title: "Mechanism: TB-500 vs Full-Length Tβ4",
      paragraphs: [
        "The scientifically accurate mechanism view treats **three separate nodes** — full-length thymosin-β4, parent TB-500/Ac-LKKTETQ, and TB-500 metabolites — rather than one continuous pathway from actin binding to healed tendon.",
      ],
      widgetAfter: "tb500-metabolism",
      tables: [
        {
          headers: ["Mechanism / claim", "Full-length Tβ4", "TB-500 fragment"],
          rows: [
            ["G-actin sequestration", "Core well-characterized function", "Contains part of binding region — equivalence not established"],
            ["Cell migration", "Demonstrated in parent systems", "Parent failed one scratch assay at 50 mcg/mL"],
            ["Wound closure", "Parent has animal and topical human research", "No direct human trial; no in vivo fragment wound-healing study identified"],
            ["Tendon / ligament healing", "Some related preclinical literature", "No published human TB-500 trial"],
            ["Active metabolites", "Parent produces several relevant fragments", "Ac-LKKTET → Ac-LK cascade; activity incompletely mapped"],
          ],
        },
      ],
    },
    {
      id: "evidence-ladder",
      title: "Dosage Evidence Ladder",
      paragraphs: [
        "**How established is TB-500 dosing? Very poorly established.** No verified human dose, pharmacokinetic target, therapeutic window, loading requirement, or maintenance schedule exists. The most repeated protocol is anecdotal; direct fragment research used single exposures for analytical and metabolism objectives.",
      ],
      widget: "tb500-evidence-ladder",
    },
    {
      id: "anti-doping",
      title: "Anti-Doping Status",
      paragraphs: [
        "The 2026 WADA Prohibited List explicitly includes **“Thymosin-β4 and its derivatives e.g. TB-500”** under **S2, Peptide Hormones, Growth Factors, Related Substances and Mimetics**. It is prohibited **at all times**, in and out of competition.",
        "Athletes remain responsible for what enters their bodies. A prescription, compounded label, “research use only” vial, or undisclosed blend does not remove anti-doping risk.",
      ],
    },
  ],
  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "What is the standard TB-500 dose?",
        answer:
          "There is no established human standard. The most common online claim is 2–2.5 mg SC twice weekly for 4–6 weeks, but no published human dose-ranging trial validates that schedule.",
      },
      {
        question: "What is the TB-500 loading dose?",
        answer:
          "“Loading” commonly means 2–2.5 mg twice weekly, sometimes as high as 5 mg twice weekly. The phase is anecdotal; no study shows tissue loading occurs or improves outcomes.",
      },
      {
        question: "What is the TB-500 maintenance dose?",
        answer:
          "Community pages often report 2–2.5 mg once weekly or 2–6 mg per month. No human PK or controlled trial shows maintenance is needed or effective.",
      },
      {
        question: "How often is TB-500 used in research?",
        answer:
          "Direct published animal studies used a single administration. Repeated weekly protocols come from community practice, not direct therapeutic experiments with the fragment.",
      },
      {
        question: "How long is a TB-500 cycle?",
        answer:
          "Online cycles commonly last 4–6 weeks, sometimes followed by 4–8 weeks of maintenance. There is no validated cycle length or automatic repeat schedule.",
      },
      {
        question: "Does TB-500 need to be tapered?",
        answer:
          "No taper has been scientifically established. Direct animal studies used one dose; no human withdrawal dataset exists.",
      },
      {
        question: "Is TB-500 dosed by body weight?",
        answer:
          "No human weight-based regimen exists. The 50 mg/kg rat dose was an IP metabolism experiment and should not be converted into human dosing.",
      },
      {
        question: "Is TB-500 the same as thymosin beta-4?",
        answer:
          "No. TB-500 is usually a seven-residue N-acetylated fragment; full-length Tβ4 has 43 amino acids. Their human evidence and doses are not interchangeable.",
      },
      {
        question: "Does TB-500 build muscle or heal tendons?",
        answer:
          "No controlled human study shows increased muscle mass, tendon/ligament healing, or muscle-tear recovery from verified Ac-LKKTETQ.",
      },
      {
        question: "Does injection near an injury work better?",
        answer:
          "No human evidence shows local SC or IM placement targets the fragment to an injury or improves healing. Direct IM fragment PK data were not identified by FDA.",
      },
      {
        question: "What is TB-500's half-life?",
        answer:
          "A human half-life is unknown. In two horses given 10 mg SC, parent peptide became unquantifiable around 6–10 hours. That cannot define a human dosing interval.",
      },
      {
        question: "Why is TB-500 dosed twice weekly online?",
        answer:
          "The original basis is unclear — likely repeated copying, vial convenience, or extrapolation from unrelated research; not supported by direct human PK.",
      },
      {
        question: "Did TB-500 work in a wound-healing cell study?",
        answer:
          "At 50 mcg/mL, parent Ac-LKKTETQ did not increase fibroblast scratch closure in the FDA-reviewed study. The Ac-LKKTE metabolite showed activity.",
      },
      {
        question: "Is there a real TB-500 clinical trial?",
        answer:
          "No verified administered-human trial with usable dosing was identified. NCT07487363 explicitly says it is a fictional ClinicalTrials.gov-style example and must not be treated as evidence.",
      },
      {
        question: "How many U-100 units is 2.5 mg from a 10 mg vial at 2 mL?",
        answer:
          "Concentration is 5 mg/mL. A 2.5 mg amount occupies 0.5 mL, which equals 50 U. This is arithmetic, not a dose recommendation.",
      },
      {
        question: "How many units is 2 mg from a 5 mg vial at 2 mL?",
        answer:
          "Concentration is 2.5 mg/mL. Two milligrams occupies 0.8 mL, which equals 80 U.",
      },
      {
        question: "Can reconstituted TB-500 be stored for 28 days?",
        answer:
          "Not on the basis of bacteriostatic water alone. A formulation-specific stability study is required.",
      },
      {
        question: "Is TB-500 free base the same dose as TB-500 acetate?",
        answer:
          "Only if the label reports the same active-moiety equivalent and the assay confirms it. Gross acetate salt mass and free-base peptide mass are not automatically equal.",
      },
      {
        question: "Can TB-500 be combined with BPC-157?",
        answer:
          "No controlled human study establishes a safe or effective ratio, schedule, or advantage for the “Wolverine stack.”",
      },
      {
        question: "What are the side effects of TB-500?",
        answer:
          "A reliable human side-effect rate is unavailable. Plausible risks include hypersensitivity, anti-drug antibodies, impurities, aggregates, injection injury, infection, endotoxin, incorrect identity, and unknown organ or long-term effects.",
      },
      {
        question: "Can TB-500 cause cancer?",
        answer:
          "Human cancer risk is unknown. Repair and angiogenesis pathways create a theoretical concern, but evidence neither proves causation nor establishes long-term safety.",
      },
      {
        question: "Is TB-500 prohibited in sport?",
        answer:
          "Yes. WADA explicitly lists thymosin-β4 and derivatives such as TB-500 under S2, prohibited at all times.",
      },
    ],
  },
  sources: {
    title: "Key References",
    items: [
      {
        authors: "FDA",
        title: "2026 scientific review of TB-500 free base and acetate",
        detail: "Staff scientific review.",
        href: "https://www.fda.gov/media/193349/download",
      },
      {
        authors: "FDA",
        title: "July 23–24, 2026 Pharmacy Compounding Advisory Committee meeting",
        detail: "Meeting materials.",
        href: "https://www.fda.gov/advisory-committees/advisory-committee-calendar/july-23-24-2026-meeting-pharmacy-compounding-advisory-committee-07232026",
      },
      {
        authors: "Esposito S, et al.",
        title: "Synthesis and characterization of Ac-LKKTETQ in TB-500",
        detail: "Drug Test Anal. 2012.",
        href: "https://pubmed.ncbi.nlm.nih.gov/22962027/",
      },
      {
        authors: "Kwok KY, et al.",
        title: "10 mg SC equine detection and metabolism study",
        detail: "Rapid Commun Mass Spectrom. 2013.",
        href: "https://pubmed.ncbi.nlm.nih.gov/23318763/",
      },
      {
        authors: "Rahaman KA, et al.",
        title: "TB-500 quantification, metabolites, and scratch-assay screening",
        detail: "J Chromatogr B. 2024.",
        href: "https://pubmed.ncbi.nlm.nih.gov/38382158/",
      },
      {
        authors: "ClinicalTrials.gov",
        title: "NCT07487363 — fictional example record",
        detail: "Explicitly not an actual trial.",
        href: "https://clinicaltrials.gov/study/NCT07487363",
      },
      {
        authors: "Ruff D, et al.",
        title: "IV full-length thymosin-β4 Phase 1",
        detail: "2010 — not TB-500.",
        href: "https://pubmed.ncbi.nlm.nih.gov/20536472/",
      },
      {
        authors: "WADA",
        title: "2026 Prohibited List",
        detail: "S2 includes thymosin-β4 and derivatives such as TB-500.",
        href: "https://www.wada-ama.org/sites/default/files/2025-09/2026list_en_final_clean_september_2025.pdf",
      },
    ],
  },
  safety: {
    title: "Important Safety Information",
    paragraphs: [
      "TB-500 is usually the experimental 7-amino-acid fragment **Ac-LKKTETQ**. It is **not** full-length thymosin-β4, **not FDA approved**, and has **no established human dosage**.",
      "Direct fragment research documents **10 mg SC once in horses**, **50 mg/kg IP once in rats**, and **50 mcg/mL in vitro** — for detection, metabolism, and cell screening, not injury recovery. **NCT07487363 is a fictional registry example, not human evidence.**",
      "This page is an evidence reference for educational purposes. It is **not a dosing, injection, loading, or stack guide.** WADA S2 prohibits TB-500 at all times in tested sport.",
    ],
  },
};
