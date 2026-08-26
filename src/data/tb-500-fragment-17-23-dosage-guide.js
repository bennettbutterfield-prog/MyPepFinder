/**
 * TB-500 Fragment (17–23) — unacetylated H-LKKTETQ-OH dosage guide.
 * Chemically DISTINCT from Ac-LKKTETQ (see /peptides/tb-500).
 * Best direct evidence: Philp 2003 aged-mouse topical 0.01% w/v × 50 µL = 5 µg/wound.
 * No established human dose for unacetylated fragment.
 */

/** Free-base molecular mass (Da) — unacetylated H-LKKTETQ-OH */
export const TB500F_FREE_BASE_MASS = 846.97;

/** Idealized 1:1 LKKTETQ acetate molecular mass (Da) */
export const TB500F_ACETATE_SALT_MASS = 907.02;

/** Ac-LKKTETQ free-base mass (Da) — for identity comparison only */
export const TB500F_AC_LKKTETQ_MASS = 889.01;

/** Philp 2003 published concentration */
export const TB500F_PUBLISHED_PERCENT_WV = 0.01;

/** Philp 2003 published concentration in mg/mL */
export const TB500F_PUBLISHED_MG_ML = 0.1;

/** Philp 2003 application volume per wound (µL) */
export const TB500F_PUBLISHED_VOLUME_UL = 50;

/** Philp 2003 peptide per wound per application (µg) */
export const TB500F_PUBLISHED_UG_PER_WOUND = 5;

export function tb500fPercentToMgMl(percentWv) {
  const pct = Number(percentWv);
  if (!Number.isFinite(pct) || pct < 0) return null;
  return pct * 10;
}

export function tb500fUgFromConcentration(concentrationMgMl, volumeUl) {
  const conc = Number(concentrationMgMl);
  const vol = Number(volumeUl);
  if (!Number.isFinite(conc) || !Number.isFinite(vol) || conc < 0 || vol < 0) {
    return null;
  }
  const volMl = vol / 1000;
  const mg = conc * volMl;
  return mg * 1000;
}

export function tb500fVolumeForTargetUg(concentrationMgMl, targetUg) {
  const conc = Number(concentrationMgMl);
  const target = Number(targetUg);
  if (
    !Number.isFinite(conc) ||
    !Number.isFinite(target) ||
    conc <= 0 ||
    target <= 0
  ) {
    return null;
  }
  const targetMg = target / 1000;
  const volMl = targetMg / conc;
  return {
    volumeUl: volMl * 1000,
    volumeMl: volMl,
    targetUg: target,
    concentrationMgMl: conc,
  };
}

export function tb500FragAmountFromVial(vialMg, diluentMl, targetMg) {
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
  const molarityMicroM =
    (concMgPerMl * 1000) / TB500F_FREE_BASE_MASS;
  return {
    concMgPerMl,
    volumeMl,
    units,
    mgPerUnit,
    targetMg: target,
    molarityMicroM,
    peptideMassBasis: TB500F_FREE_BASE_MASS,
  };
}

export const TB500F_RECON_PRESETS = [
  {
    id: "5-1",
    vialMg: 5,
    diluentMl: 1,
    label: "5 mg · 1 mL (5 mg/mL)",
    note: "Verify H-LKKTETQ-OH peptide-equivalent assay — gross fill ≠ active peptide",
  },
  {
    id: "5-2",
    vialMg: 5,
    diluentMl: 2,
    label: "5 mg · 2 mL (2.5 mg/mL)",
    note: "1 mg = 0.40 mL = 40 U — arithmetic only; not a human dose",
  },
  {
    id: "10-2",
    vialMg: 10,
    diluentMl: 2,
    label: "10 mg · 2 mL (5 mg/mL)",
    note: "2.5 mg = 0.50 mL = 50 U — commonly copied from Ac-LKKTETQ pages",
  },
  {
    id: "10-1",
    vialMg: 10,
    diluentMl: 1,
    label: "10 mg · 1 mL (10 mg/mL)",
    note: "Higher concentration — solubility and measurement accuracy not established",
  },
];

export const TB500F_IDENTITY = [
  {
    id: "h-lkktetq",
    label: "H-LKKTETQ-OH (unacetylated fragment)",
    verdict: "This page's subject — free amine N-terminus; ~846.97 Da",
    detail:
      "Sequence: H-Leu-Lys-Lys-Thr-Glu-Thr-Gln-OH. CAS 476014-70-7; PubChem CID 10169788. Also called LKKTETQ or “fequesetide” in chemical catalogs. Direct wound evidence: 0.01% topical in aged mice.",
    length: "7 amino acids",
    sequence: "H-LKKTETQ-OH",
    mass: "~846.97 Da free base",
    evidence: "Philp 2003 aged-mouse topical wound model",
    humanResults: "No molecule-confirmed human dose identified",
  },
  {
    id: "ac-lkktetq",
    label: "Ac-LKKTETQ (N-acetylated TB-500)",
    verdict: "Different molecule — see /peptides/tb-500; doses do NOT transfer",
    detail:
      "N-terminally acetylated seven-residue fragment. Free base ~889.01 Da (+42.04 Da vs unacetylated). Horse 10 mg SC and rat 50 mg/kg IP evidence applies to Ac-LKKTETQ only.",
    length: "7 aa acetylated",
    sequence: "Ac-LKKTETQ",
    mass: "~889.01 Da free base",
    evidence: "Equine PK, rat metabolism, FDA 2026 review",
    humanResults: "No human dose — different test article",
  },
  {
    id: "tb4-full",
    label: "Full-length thymosin beta-4 (43 aa)",
    verdict: "No — parent molecule; human IV/topical doses cannot transfer",
    detail:
      "Natural 43-amino-acid actin-regulating peptide. Human studies used 42–1,260 mg IV, NL005 mcg/kg IV, topical wound formulations, and RGN-259 ophthalmic products — all different from either seven-residue fragment.",
    length: "43 amino acids",
    sequence: "Full human Tβ4",
    mass: "~4,963 Da",
    evidence: "Phase 1 systemic + local programs",
    humanResults: "Human studies exist — not fragment doses",
  },
  {
    id: "ac-sdkp",
    label: "Ac-SDKP (Tβ4 residues 1–4)",
    verdict: "No — separate four-residue fragment with distinct research",
    detail:
      "Distinct antifibrotic Tβ4-derived peptide. Not LKKTETQ and not Ac-LKKTETQ.",
    length: "4 amino acids",
    sequence: "Ac-SDKP",
    mass: "~488 Da",
    evidence: "Separate fibrosis literature",
    humanResults: "Not interchangeable",
  },
  {
    id: "unsure",
    label: "Label unclear or unsure",
    verdict: "Incomplete — confirm N-terminus and intact mass before any math",
    detail:
      "“TB-500 Fragment (17–23)” may label unacetylated LKKTETQ or Ac-LKKTETQ. Some pages publish contradictory molecular masses. Intact-mass LC-MS and N-terminal analysis must resolve identity before interpreting studies or calculations.",
    length: "Unknown",
    sequence: "Verify by assay",
    mass: "846.97 vs 889.01 Da fork",
    evidence: "Identity-dependent",
    humanResults: "Cannot assign dose without confirmation",
  },
];

export const TB500F_IDENTITY_FORK = {
  headers: ["Feature", "Unacetylated fragment", "N-acetylated TB-500"],
  rows: [
    ["Exact shorthand", "H-LKKTETQ-OH", "Ac-LKKTETQ-OH"],
    ["N-terminus", "Free amine", "Irreversibly acetylated"],
    ["Formula, free base", "C36H66N10O13", "C38H68N10O14"],
    ["Molecular mass, free base", "About 846.97 Da", "About 889.01 Da"],
    ["Approximate mass difference", "Reference", "+42.04 Da"],
    ["CAS commonly assigned", "476014-70-7", "885340-08-9"],
    ["PubChem CID", "10169788", "62707662"],
    ["Direct wound-model exposure", "0.01% topical in aged mice", "No direct in-vivo wound-healing exposure identified by FDA"],
    ["Direct horse PK exposure", "None identified for unacetylated LKKTETQ", "10 mg SC once in two geldings"],
    ["Direct rat metabolism", "None identified for unacetylated LKKTETQ", "50 mg/kg IP once"],
    ["Can doses be transferred?", "No", "No"],
  ],
  footnote:
    "FDA concluded the pharmacological profile of non-acetylated LKKTETQ cannot be directly extrapolated to N-acetylated TB-500 — and the reverse is equally important.",
};

export const TB500F_CONFUSABLE_MASSES = [
  {
    material: "H-LKKTETQ-OH free base",
    composition: "C36H66N10O13",
    mass: "846.97 Da",
    note: "This page's defined active peptide",
  },
  {
    material: "H-LKKTETQ-OH acetate",
    composition: "Free peptide + acetate counterion",
    mass: "907.02 Da (idealized 1:1)",
    note: "Gross salt mass ≠ free-peptide mass",
  },
  {
    material: "Ac-LKKTETQ-OH free base",
    composition: "C38H68N10O14",
    mass: "889.01 Da",
    note: "N-acetylated TB-500 — /peptides/tb-500",
  },
  {
    material: "Ac-LKKTETQ-OH acetate",
    composition: "C38H68N10O14·CH3COOH",
    mass: "~949.1 Da (1:1 acetate)",
    note: "Different from both unacetylated forms",
  },
];

export const TB500F_HUMAN_STATUS = [
  ["Published human H-LKKTETQ-OH dose", "None identified"],
  ["Phase 1 safety or PK study", "None identified"],
  ["Controlled wound-healing study", "None identified"],
  ["Tendon, ligament, or muscle study", "None identified"],
  ["Verified case report", "None identified"],
  ["Registered interventional study with public dose", "None verified"],
  ["U.S. prescribing dose", "None"],
  ["Approved indication", "None identified"],
  ["Established maximum dose", "None"],
  ["Human weight-based dose", "None established"],
  ["Common anecdotal amount (ambiguous TB-500)", "2–2.5 mg SC — usually Ac-LKKTETQ or unverified identity"],
  ["Direct unacetylated animal exposure", "5 µg per wound topical × 2 applications (Philp 2003)"],
];

export const TB500F_DIRECT_EVIDENCE = [
  {
    model: "26-month-old female BALB/cBy mice",
    molecule: "H-LKKTETQ-OH (non-acetylated)",
    dose: "0.01% w/v in PBS; 50 µL/wound = 5 µg",
    route: "Topical to 3-mm dorsal punch wounds",
    frequency: "Day 0 and 48 h later",
    outcome: "Greater epidermal closure and collagen vs vehicle at day 7",
    meaning: "Best direct fragment-specific exposure — topical mouse only; one concentration",
  },
  {
    model: "Cultured fibroblasts",
    molecule: "Ac-LKKTETQ-OH",
    dose: "50 µg/mL",
    route: "In vitro",
    frequency: "8-hour incubation",
    outcome: "Parent did not significantly improve scratch closure vs vehicle",
    meaning: "Acetylated molecule — not H-LKKTETQ-OH dose",
  },
  {
    model: "Two thoroughbred geldings",
    molecule: "Ac-LKKTETQ-OH",
    dose: "10 mg once",
    route: "SC",
    frequency: "Single exposure",
    outcome: "Plasma and urinary PK/metabolite detection",
    meaning: "Misattributed online — Ac-LKKTETQ analytical study, not fragment healing dose",
  },
  {
    model: "Six-week-old male Sprague-Dawley rats",
    molecule: "Ac-LKKTETQ-OH",
    dose: "50 mg/kg once",
    route: "IP",
    frequency: "Single exposure",
    outcome: "Urinary metabolite characterization",
    meaning: "Misattributed online — Ac-LKKTETQ metabolism, not H-LKKTETQ-OH",
  },
];

export const TB500F_PROTOCOL_PHASES = [
  {
    id: "pre-wound",
    phase: "Before wounding",
    time: "Day −1 to 0",
    action: "Record animal ID, age, sex, body weight, health assessment, randomization code, test-article lot",
    note: "Institutional animal-care approval required — nonclinical laboratory protocol only",
  },
  {
    id: "day0-baseline",
    phase: "Day 0 — baseline",
    time: "Before first application",
    action: "Standardized wound photography and baseline wound-area measurement",
    note: "Four standardized 3-mm full-thickness dorsal punch wounds per animal",
  },
  {
    id: "day0-dose",
    phase: "Day 0 — application 1",
    time: "Day 0",
    action: "Apply exactly 50 µL of 0.01% (0.1 mg/mL) H-LKKTETQ-OH in PBS per wound = 5 µg",
    note: "Parallel arms: vehicle, H-LKKTETQ-OH, Ac-LKKTETQ-OH at same mass concentration",
  },
  {
    id: "48h",
    phase: "48 hours — application 2",
    time: "48 h post-wounding",
    action: "Repeat photography, wound assessment, local tolerability; apply second 50 µL dose",
    note: "No escalation, substitution, or catch-up dosing if first application missed",
  },
  {
    id: "day4",
    phase: "Day 4 interim",
    time: "Day 4",
    action: "Standardized photography, wound area, local tolerability, clinical observations",
    note: "Monitor body weight and adverse findings throughout",
  },
  {
    id: "day7",
    phase: "Day 7 endpoint",
    time: "Day 7",
    action: "Final photography, humane euthanasia, tissue collection, blinded histology, collagen quantification",
    note: "Primary endpoint: epidermal closure on day 7 — NOT a human injection protocol; no HED",
  },
];

export const TB500F_COMPARE = {
  experimental: {
    title: "Published H-LKKTETQ-OH experiment (Philp 2003)",
    status: "Topical aged-mouse wound model — one concentration",
    rows: [
      ["Identity", "Non-acetylated LKKTETQ specified"],
      ["Dose", "5 µg per wound per application"],
      ["Concentration", "0.01% w/v in PBS (0.1 mg/mL)"],
      ["Frequency", "Day 0 and 48 hours"],
      ["Route", "Topical to 3-mm mouse punch wounds"],
      ["Duration", "Seven-day model with two applications"],
      ["Purpose", "Epidermal closure and collagen in aged mice"],
      ["Controls", "Vehicle and histology"],
    ],
  },
  anecdotal: {
    title: "Anecdotal TB-500 reports (usually ambiguous identity)",
    status: "Community convention — not fragment-specific evidence",
    rows: [
      ["Identity", "Frequently ambiguous; often Ac-LKKTETQ when specified"],
      ["Dose", "Usually 2–2.5 mg per administration (milligrams, not micrograms)"],
      ["Concentration", "Often not reported"],
      ["Frequency", "Commonly twice weekly, then weekly"],
      ["Route", "Usually claimed SC; sometimes IM near injury"],
      ["Duration", "Commonly 4–12 weeks"],
      ["Purpose", "Recovery, tendon, ligament, muscle, systemic-healing claims"],
      ["Controls", "Usually none"],
    ],
  },
};

export const TB500F_CLAIMS = [
  {
    id: "ac-schedules-transfer",
    claim: "Ac-LKKTETQ 2–2.5 mg SC schedules apply to unacetylated LKKTETQ",
    status: "False",
    detail:
      "Online milligram injection cycles are copied from Ac-LKKTETQ discussions under the ambiguous TB-500 name. FDA emphasized acetylation changes charge, hydrophobicity, size, lifetime, folding, and binding. Doses do not transfer between forms.",
  },
  {
    id: "acetate-equals-ac",
    claim: "“Acetate salt” means the same as N-terminal “Ac-” acetylation",
    status: "False",
    detail:
      "Acetate describes a counterion or salt form. Ac- describes covalent N-terminal acetylation. H-LKKTETQ-OH acetate (~907 Da) is not Ac-LKKTETQ-OH (~889 Da).",
  },
  {
    id: "tb4-doses-transfer",
    claim: "Full-length thymosin beta-4 human doses validate fragment dosing",
    status: "False",
    detail:
      "Human Tβ4 studies used IV doses from 42–1,260 mg, recombinant IV 0.05–25 µg/kg, topical wound formulations, and ophthalmic products — different 43-aa molecule, route, and scale.",
  },
  {
    id: "2-5mg-validated",
    claim: "2.5 mg twice weekly is validated for the unacetylated fragment",
    status: "Not supported",
    detail:
      "No molecule-confirmed human H-LKKTETQ-OH trial validates any milligram injection schedule. The direct study used 5 µg per wound topically in mice — a different species, route, and exposure scale.",
  },
  {
    id: "topical-to-sc",
    claim: "Topical mouse wound exposure converts to a human SC injection dose",
    status: "False",
    detail:
      "The Philp exposure was local per wound in aged mice — not mg/kg, not systemic, not injected. Species scaling would not correct identity, route, formulation, or endpoint mismatch.",
  },
  {
    id: "horse-10mg-fragment",
    claim: "The horse 10 mg SC study establishes a fragment healing dose",
    status: "Misattributed — Ac-LKKTETQ only",
    detail:
      "Two geldings received 10 mg Ac-LKKTETQ SC once for doping-control analytical PK — not H-LKKTETQ-OH and not injury healing.",
  },
  {
    id: "loading-maintenance",
    claim: "A loading phase and weekly maintenance are required",
    status: "Not demonstrated",
    detail:
      "No direct H-LKKTETQ-OH study demonstrated tissue saturation, loading requirement, maintenance target, tapering, cycling, or rebound after discontinuation.",
  },
  {
    id: "injury-site-im",
    claim: "Injection near an injury improves targeting for H-LKKTETQ-OH",
    status: "Not validated",
    detail:
      "No direct evidence shows local SC or IM injection improves targeting or outcomes for the unacetylated fragment. The published study was topical.",
  },
  {
    id: "same-molarity",
    claim: "Equal mg/mL gives equal molarity for acetylated and unacetylated forms",
    status: "False",
    detail:
      "At 0.1 mg/mL, H-LKKTETQ-OH ≈ 118.1 µM while Ac-LKKTETQ-OH ≈ 112.5 µM. Mass-matched concentrations are not molarity-matched.",
  },
  {
    id: "vial-convenience",
    claim: "2.5 mg doses exist because 5 mg vials divide evenly",
    status: "Arithmetic convenience — not pharmacology",
    detail:
      "Convenient division of 5 mg vials may explain the number in community pages, but vial convenience is not pharmacokinetic validation for H-LKKTETQ-OH.",
  },
];

export const TB500F_EVIDENCE_LADDER = [
  {
    level: "U.S. medicinal dosing",
    exists: "None established for H-LKKTETQ-OH",
    confidence: "None",
  },
  {
    level: "Human clinical-trial dosing",
    exists: "None identified for unacetylated fragment",
    confidence: "None",
  },
  {
    level: "Published experimental dosing",
    exists: "0.01% topical, 50 µL per wound, twice in aged-mouse model",
    confidence: "Low — one concentration, topical, nonhuman",
  },
  {
    level: "Other preclinical dosing",
    exists: "Limited; frequently confounded with full-length Tβ4 or Ac-LKKTETQ",
    confidence: "Very low for fragment-specific claims",
  },
  {
    level: "Anecdotal injection protocols",
    exists: "Commonly repeated under ambiguous TB-500 name",
    confidence: "Unvalidated — identity often Ac-LKKTETQ or unspecified",
  },
  {
    level: "Weight-based human dosing",
    exists: "None",
    confidence: "None",
  },
  {
    level: "Long-term dosing evidence",
    exists: "None established",
    confidence: "None",
  },
  {
    level: "Maximum tolerated human dose",
    exists: "Unknown",
    confidence: "None",
  },
];

export const TB500F_AE_SIMPLE = [
  {
    domain: "Human adverse-event frequency",
    status: "Unknown",
    detail: "No molecule-confirmed H-LKKTETQ-OH clinical program identified",
  },
  {
    domain: "Repeat-dose toxicity",
    status: "Not characterized in humans",
    detail: "Direct unacetylated study was topical in mice — not injected",
  },
  {
    domain: "Injection-route safety",
    status: "Not established for fragment",
    detail: "Published exposure was topical; SC/IM community protocols lack safety basis",
  },
  {
    domain: "Product-quality risks",
    status: "Significant",
    detail: "Wrong identity, incorrect assay, endotoxin, aggregates, particulates, unsuitable pH",
  },
  {
    domain: "Angiogenesis / malignancy",
    status: "Theoretical concern — magnitude unknown",
    detail: "Fragment linked to angiogenesis in preclinical systems; no human risk magnitude known",
  },
];

export const TB500F_AE_FULL = [
  ...TB500F_AE_SIMPLE,
  {
    domain: "Acute systemic toxicity",
    status: "No molecule-specific human dataset",
    detail: "No adequate H-LKKTETQ-OH human exposure data",
  },
  {
    domain: "Genotoxicity and carcinogenicity",
    status: "No adequate fragment-specific program",
    detail: "Not characterized for unacetylated fragment in humans",
  },
  {
    domain: "Reproductive and developmental toxicity",
    status: "Not characterized",
    detail: "Pregnancy, breastfeeding, childhood not adequately studied",
  },
  {
    domain: "Immunogenicity",
    status: "Not characterized in people",
    detail: "Injectable use raises anti-drug antibody questions without human data",
  },
  {
    domain: "Drug interactions",
    status: "Not characterized",
    detail: "Combinations with BPC-157, GHK-Cu, or other peptides create attribution problems",
  },
  {
    domain: "Long-term exposure",
    status: "Not characterized",
    detail: "Community 4–12 week cycles lack standardized product or reliable denominator",
  },
];

export const TB500_FRAGMENT_DOSAGE_GUIDE = {
  title: "TB-500 Fragment (17–23) Dosage: Research Protocol and Reconstitution",
  updated: "Updated August 2026",
  callout:
    "**Research status:** On this page, **TB-500 Fragment (17–23)** means the unacetylated heptapeptide **H-LKKTETQ-OH** (LKKTETQ / “fequesetide”), ~846.97 Da, free amine N-terminus. It is **chemically different** from N-acetylated TB-500 **Ac-LKKTETQ** (~889.01 Da) covered on [/peptides/tb-500](/peptides/tb-500). **No verified human dose** exists for either fragment. The strongest direct evidence for unacetylated LKKTETQ is **topical aged-mouse wound study**: **0.01% w/v × 50 µL = 5 µg per wound** on day 0 and 48 h later. Online 2–2.5 mg SC schedules are usually **Ac-LKKTETQ or ambiguous identity** — not fragment-specific evidence.",
  intro: [
    "There is **no established human dosage** for unacetylated H-LKKTETQ-OH. No published human administration study with a molecule-confirmed test article was identified.",
    "The best-defined direct animal exposure was **topical, not injected**. In 26-month-old female BALB/cBy mice, researchers applied 50 µL of **0.01% LKKTETQ in PBS** to each 3-mm wound on day 0 and again 48 hours later — **5 µg per wound per application**.",
    "Ac-LKKTETQ is a **different test article** (+42.04 Da). FDA concluded non-acetylated and N-acetylated profiles **cannot be extrapolated** to one another. Reconstitution tables below are **concentration arithmetic only** — every calculation must use measured **H-LKKTETQ-OH peptide-equivalent** mass.",
  ],
  glance: {
    title: "TB-500 Fragment (17–23) dosage in 30 seconds",
    items: [
      "**No established human dosage** for unacetylated LKKTETQ",
      "**Best direct evidence:** 0.01% w/v topical, 50 µL/wound = **5 µg** in aged mice (day 0 + 48 h)",
      "**≠ Ac-LKKTETQ** (~889 Da) — doses do NOT transfer; see [/peptides/tb-500](/peptides/tb-500)",
      "**≠ full-length Tβ4** — 43-aa parent human doses cannot transfer",
      "**Online 2–2.5 mg SC** schedules are usually Ac-LKKTETQ or ambiguous — not H-LKKTETQ-OH evidence",
      "**Acetate salt ≠ Ac- prefix** — counterion vs N-terminal acetylation",
      "**Complete protocol below** is nonclinical topical mouse — NOT a human injection protocol",
    ],
    table: {
      headers: ["Question", "Evidence-based answer"],
      rows: [
        ["Molecule covered", "Unacetylated H-LKKTETQ-OH (residues 17–23)"],
        ["Free-base mass", "~846.97 Da; CAS 476014-70-7"],
        ["Published human dose", "None identified"],
        ["Direct animal concentration", "0.01% w/v = 0.1 mg/mL"],
        ["Direct animal amount", "50 µL per wound = 5 µg per application"],
        ["Direct animal route", "Topical to punch wounds — not SC/IM"],
        ["Common online injection amount", "2–2.5 mg (usually Ac-LKKTETQ or ambiguous)"],
        ["Central dosing lesson", "Confirm N-terminal acetylation before any study or calculation"],
      ],
    },
  },
  sections: [
    {
      id: "what-is",
      title: "What Is TB-500 Fragment (17–23)?",
      paragraphs: [
        "Residues 17–23 of human thymosin beta-4 form the seven-amino-acid sequence **LKKTETQ**. The unmodified fragment has a free amino terminus and is written **H-LKKTETQ-OH**. Chemical databases list the free base as C36H66N10O13 with molecular mass approximately **846.97 g/mol**.",
        "The term “TB-500 Fragment (17–23)” is **not consistently used**. Some suppliers apply it to unacetylated LKKTETQ; others use it for **Ac-LKKTETQ**. A product name alone does not establish which molecule is present. For this page, the subject is **unacetylated LKKTETQ**. If intact-mass shows Ac-LKKTETQ, use the [Ac-LKKTETQ TB-500 page](/peptides/tb-500) instead.",
      ],
      widgetAfter: "tb500f-identity-gate",
    },
    {
      id: "identity-fork",
      title: "The Identity Fork: LKKTETQ versus Ac-LKKTETQ",
      paragraphs: [
        "N-terminal acetylation increases mass from ~846.97 to ~889.01 Da and can change charge, stability, binding, and metabolism. **Doses cannot be transferred** between unacetylated and acetylated forms in either direction.",
      ],
      widget: "tb500f-identity-fork",
      tables: [
        {
          caption: "Four masses that are easy to confuse",
          headers: ["Material", "Approximate mass", "Interpretation"],
          rows: [
            ["H-LKKTETQ-OH free base", "846.97 Da", "This page's active peptide"],
            ["H-LKKTETQ-OH acetate (1:1)", "907.02 Da", "Salt mass ≠ free-peptide mass"],
            ["Ac-LKKTETQ-OH free base", "889.01 Da", "N-acetylated TB-500"],
            ["Ac-LKKTETQ-OH acetate (1:1)", "~949.1 Da", "Different from all unacetylated forms"],
          ],
        },
      ],
      paragraphsAfter: [
        "The word **acetate** describes a counterion or salt form. The prefix **Ac-** describes covalent N-terminal acetylation. Those are not the same modification.",
      ],
    },
    {
      id: "names-not-interchangeable",
      title: "Names and Molecules That Are Not Interchangeable",
      tables: [
        {
          headers: ["Name", "What it means", "Can its dose be used for H-LKKTETQ-OH?"],
          rows: [
            ["TB-500 Fragment (17–23)", "Ambiguous commercial name", "Only after sequence and N-terminus verified"],
            ["LKKTETQ / fequesetide", "Usually unacetylated seven-residue peptide", "Yes only when H-LKKTETQ-OH confirmed"],
            ["TB-500 / Ac-LKKTETQ", "N-terminally acetylated peptide", "No"],
            ["Full-length Tβ4 / Timbetasin / NL005", "43-aa parent peptide", "No"],
            ["Ac-SDKP", "Separate Tβ4 residues 1–4 fragment", "No"],
            ["Ac-LKKTE", "C-terminally shortened Ac-LKKTETQ metabolite", "No"],
            ["TB4 Frag", "Ambiguous — may mean 1–4, 17–23, or full-length", "No without full structural ID"],
          ],
        },
      ],
    },
    {
      id: "assay-checks",
      title: "Product, Salt, and Assay Checks",
      paragraphs: [
        "A vial label and HPLC-area purity claim are not enough. The study record should include exact **H-LKKTETQ-OH peptide-equivalent** content, counterion, water, impurities, and route-specific quality attributes.",
      ],
      tables: [
        {
          headers: ["Quality attribute", "Minimum question to answer"],
          rows: [
            ["Intact-mass LC-MS", "Principal species matches 846.97 Da rather than 889.01 Da or full-length Tβ4?"],
            ["Sequence confirmation", "Seven residues present in order LKKTETQ?"],
            ["N-terminal analysis", "Leucine amino terminus free rather than acetylated?"],
            ["Quantitative peptide assay", "How many mg H-LKKTETQ-OH equivalent are present?"],
            ["Counterion analysis", "Acetate, TFA, chloride — at what stoichiometry?"],
            ["Related-substance profile", "Truncations, oxidation, racemized species?"],
            ["Endotoxin and bioburden", "Limits appropriate for intended model and route?"],
            ["Stability-indicating assay", "Identity, assay, purity within spec during use?"],
          ],
        },
      ],
      paragraphsAfter: [
        "Write assay basis as **mg H-LKKTETQ-OH equivalent**, not merely “mg powder.” A 5 mg gross fill containing counterion, water, and nonpeptide material may not contain 5 mg of defined peptide.",
      ],
    },
    {
      id: "regulatory-status",
      title: "U.S. and International Medicinal Status",
      paragraphs: [
        "There is no U.S. prescribing label or established medicinal-product dosage for H-LKKTETQ-OH. FDA's 2026 review centered on N-acetylated TB-500 but examined unacetylated LKKTETQ pharmacology and stressed the two forms cannot be extrapolated. No human dosing program for the unacetylated fragment was identified.",
        "Pharmacy Compounding Advisory Committee discussions are **not prescribing labels** or clinical dose validation. Check FDA's final action and exact chemical identity rather than inferring from a common name.",
      ],
      widget: "tb500f-human-status",
      tables: [
        {
          headers: ["Question", "Current evidence-based answer"],
          rows: [
            ["U.S. prescribing dose for H-LKKTETQ-OH", "None"],
            ["Approved indication", "None identified"],
            ["Established maximum dose", "None"],
            ["Does Bulks List discussion establish efficacy?", "No"],
            ["Does an online research label establish human suitability?", "No"],
          ],
        },
      ],
    },
    {
      id: "human-dose",
      title: "Dosage Used in Human Clinical Research",
      paragraphs: [
        "**No molecule-confirmed human dose was identified for unacetylated LKKTETQ.** Searches did not produce a published Phase 1, PK, wound trial, or verified case report in which H-LKKTETQ-OH was administered to people.",
      ],
      subsections: [
        {
          title: "Related human dosing: full-length thymosin beta-4",
          paragraphs: [
            "Human research with the 43-amino-acid parent is included only to prevent misattribution. These values are **not fragment doses**.",
          ],
          tables: [
            {
              headers: ["Product / study", "Dose studied", "Why it cannot be transferred"],
              rows: [
                ["Synthetic full-length Tβ4 Phase 1", "42, 140, 420, or 1,260 mg IV", "Different 43-aa molecule and formulation"],
                ["Recombinant Tβ4 / NL005", "0.05–25 µg/kg IV once; 0.5–5 µg/kg × 10 days", "Recombinant full-length product"],
                ["Full-length Tβ4 venous-ulcer research", "Topical including 0.03%", "Parent peptide in local formulation"],
                ["RGN-259 ocular", "0.1% ophthalmic", "Parent peptide in eye product"],
              ],
            },
          ],
        },
      ],
    },
    {
      id: "research-dose",
      title: "TB-500 Fragment (17–23) Research Dosage",
      paragraphs: [
        "The clearest direct dose comes from an aged-mouse wound model (Philp et al., 2003) summarized in FDA's 2026 review.",
      ],
      tables: [
        {
          caption: "Published experimental dosing: unacetylated LKKTETQ",
          headers: ["Model", "Concentration", "Amount", "Route", "Frequency", "Endpoint"],
          rows: [
            [
              "26-month-old female BALB/cBy mice, four 3-mm dorsal wounds",
              "0.01% w/v = 0.1 mg/mL",
              "50 µL per wound = 5 µg",
              "Topical to each wound",
              "Day 0 and 48 h later",
              "Day-7 histology: epidermal closure and collagen",
            ],
          ],
        },
      ],
      widgetAfter: "tb500f-wound-calc",
      paragraphsAfter: [
        "The study suggested greater epidermal closure and collagen than vehicle at day 7. It tested **one concentration** — no dose-response curve, minimum effective concentration, or generalizability to other wounds or routes.",
        "Two applications equal **10 µg cumulative nominal peptide per wound**. These are arithmetic restatements — not mg/kg values and not human exposure.",
      ],
    },
    {
      id: "anecdotal",
      title: "Commonly Reported Anecdotal Protocols",
      paragraphs: [
        "Online schedules are included because they are major search intent, **not** because they establish a medicinal dose. Most use the broad name “TB-500” without distinguishing H-LKKTETQ-OH from Ac-LKKTETQ.",
      ],
      tables: [
        {
          headers: ["Reported protocol", "Amount", "Frequency", "Route", "Identity problem"],
          rows: [
            ["Common TB-500 loading", "2–2.5 mg", "Twice weekly", "Usually SC", "Copied from Ac-LKKTETQ; no H-LKKTETQ-OH human trial"],
            ["Common maintenance", "2–2.5 mg", "Once weekly", "Usually SC", "No fragment-specific maintenance evidence"],
            ["Broader community range", "2–5 mg/week total", "Once or divided", "Usually SC", "Ambiguous identity; no dose-response study"],
            ["Higher loading variant", "5 mg", "Twice weekly", "Usually SC", "Higher exposure without human safety basis"],
            ["Injury-site variant", "2–5 mg", "1–2× weekly", "SC or IM near injury", "No evidence local injection targets fragment"],
          ],
        },
      ],
      widgetAfter: "tb500f-clinical-vs-anecdotal",
      paragraphsAfter: [
        "Direct evidence supports **0.01% unacetylated LKKTETQ applied topically twice to mouse wounds**. It does **not** support SC loading, IM injury-site dosing, weekly maintenance, 4–12-week human cycles, or body-weight formulas.",
        "Horse 10 mg SC and rat 50 mg/kg studies cited online used **Ac-LKKTETQ**, not H-LKKTETQ-OH.",
      ],
    },
    {
      id: "dosage-range",
      title: "Reported Research Dosage Range",
      tables: [
        {
          headers: ["Field", "Evidence-based summary"],
          rows: [
            ["Direct human range", "None established"],
            ["Published unacetylated animal amount", "5 µg per wound per application"],
            ["Published unacetylated concentration", "0.01% w/v, or 0.1 mg/mL"],
            ["Published unacetylated frequency", "Two topical applications: day 0 and 48 hours"],
            ["Common anecdotal amount", "2–2.5 mg per administration under ambiguous TB-500 name"],
            ["Broader anecdotal amount", "Approximately 2–10 mg per administration"],
            ["Common anecdotal route", "SC; some sources claim IM"],
            ["Human-trial overlap", "None"],
            ["Evidence quality", "One topical concentration in aged mice; insufficient for injected human protocols"],
          ],
        },
      ],
      paragraphsAfter: [
        "No “minimum,” “optimal,” or “maximum” human dose can be derived from this range.",
      ],
    },
    {
      id: "complete-protocol",
      title: "Complete Evidence-Anchored Research Protocol",
      paragraphs: [
        "**Randomized, blinded topical comparison of H-LKKTETQ-OH and Ac-LKKTETQ-OH in an aged-mouse excisional-wound model.** This is a **nonclinical laboratory protocol** — not a human injection protocol. It adapts the published 0.01% unacetylated LKKTETQ exposure and adds a parallel N-acetylated identity arm at the same mass concentration.",
        "**Research question:** At 0.01% w/v, does unacetylated H-LKKTETQ-OH improve day-7 epidermal closure versus PBS vehicle in aged mice, and does N-terminal acetylation change the outcome under the same schedule?",
      ],
      tables: [
        {
          caption: "Design summary",
          headers: ["Element", "Prespecified design"],
          rows: [
            ["Model", "26-month-old female BALB/cBy mice"],
            ["Lesion", "Four standardized 3-mm full-thickness dorsal punch wounds"],
            ["Direct-replication arm", "H-LKKTETQ-OH, 0.01% w/v in PBS, 50 µL per wound"],
            ["Identity-comparator arm", "Ac-LKKTETQ-OH, 0.01% w/v in PBS, 50 µL per wound"],
            ["Vehicle arm", "PBS, 50 µL per wound"],
            ["Application days", "Day 0 after wounding and 48 hours later"],
            ["Primary endpoint", "Blinded histomorphometric epidermal closure on day 7"],
            ["Loading / maintenance / titration", "None"],
          ],
        },
        {
          caption: "Test-article specifications",
          headers: ["Attribute", "H-LKKTETQ-OH arm", "Ac-LKKTETQ-OH arm"],
          rows: [
            ["Target intact mass", "~846.97 Da", "~889.01 Da"],
            ["Concentration", "0.1 mg/mL peptide equivalent", "0.1 mg/mL peptide equivalent"],
            ["Nominal amount", "5 µg in 50 µL per wound", "5 µg in 50 µL per wound"],
            ["Molarity at 0.1 mg/mL", "~118.1 µM", "~112.5 µM"],
          ],
        },
      ],
      widget: "tb500f-protocol-timeline",
      paragraphsAfter: [
        "Equal mg/mL concentrations do **not** create equal molar concentrations. A positive vehicle comparison supports activity only in this topical aged-mouse model. **No result supports automatic conversion to SC, IM, IV, or human use.**",
      ],
    },
    {
      id: "animal-lab",
      title: "Animal and Laboratory Research Doses",
      tables: [
        {
          headers: ["Model", "Molecule", "Dose", "Route", "Purpose"],
          rows: [
            ["Aged BALB/cBy mice", "H-LKKTETQ-OH", "0.01%; 50 µL = 5 µg", "Topical", "Wound closure and collagen at day 7"],
            ["Fibroblasts", "Ac-LKKTETQ-OH", "50 µg/mL", "In vitro", "Parent did not improve scratch closure"],
            ["Two geldings", "Ac-LKKTETQ-OH", "10 mg once", "SC", "PK/metabolite detection — misattributed to fragment"],
            ["SD rats", "Ac-LKKTETQ-OH", "50 mg/kg once", "IP", "Metabolite characterization — misattributed to fragment"],
          ],
        },
      ],
      paragraphsAfter: [
        "Acetylated rows show why online claims are often misattributed — they are **not doses for H-LKKTETQ-OH**. The mouse exposure was local per wound, not per kg. **No human-equivalent-dose calculation is scientifically justified.**",
      ],
    },
    {
      id: "reconstitution",
      title: "Reconstitution and Concentration Math",
      paragraphs: [
        "These tables show how labeled mass and final volume determine concentration. They do **not** establish a dose, route, sterility, or suitability for administration. Use verified **H-LKKTETQ-OH peptide-equivalent** mass (~846.97 Da), not Ac-LKKTETQ mass (~889 Da).",
        "**Core equations:** Concentration (mg/mL) = verified peptide-equivalent mass (mg) ÷ final volume (mL); U-100 units = volume (mL) × 100.",
      ],
      widget: "tb500f-recon-calc",
      tables: [
        {
          caption: "5 mg vial · 1 mL final (5 mg/mL)",
          headers: ["Nominal mass", "Volume", "U-100 units"],
          rows: [
            ["0.5 mg", "0.10 mL", "10 U"],
            ["1 mg", "0.20 mL", "20 U"],
            ["2 mg", "0.40 mL", "40 U"],
            ["2.5 mg", "0.50 mL", "50 U"],
            ["5 mg", "1.00 mL", "100 U"],
          ],
        },
        {
          caption: "5 mg vial · 2 mL final (2.5 mg/mL)",
          headers: ["Nominal mass", "Volume", "U-100 units"],
          rows: [
            ["0.5 mg", "0.20 mL", "20 U"],
            ["1 mg", "0.40 mL", "40 U"],
            ["2 mg", "0.80 mL", "80 U"],
            ["2.5 mg", "1.00 mL", "100 U"],
          ],
        },
        {
          caption: "10 mg vial · 2 mL final (5 mg/mL)",
          headers: ["Nominal mass", "Volume", "U-100 units"],
          rows: [
            ["0.5 mg", "0.10 mL", "10 U"],
            ["1 mg", "0.20 mL", "20 U"],
            ["2 mg", "0.40 mL", "40 U"],
            ["2.5 mg", "0.50 mL", "50 U"],
            ["5 mg", "1.00 mL", "100 U"],
          ],
        },
        {
          caption: "Preparing the published 0.01% research concentration",
          headers: ["Target", "Calculation", "Result"],
          rows: [
            ["0.01% w/v", "0.01 g per 100 mL", "0.1 mg/mL"],
            ["Peptide in 50 µL", "0.1 mg/mL × 0.050 mL", "5 µg"],
            ["Peptide for 10 mL", "0.1 mg/mL × 10 mL", "1 mg H-LKKTETQ-OH equivalent"],
            ["H-LKKTETQ-OH molarity", "0.1 g/L ÷ 846.97 g/mol", "~118.1 µM"],
          ],
        },
      ],
      paragraphsAfter: [
        "For idealized 1:1 LKKTETQ acetate (907.02 Da): theoretical free-peptide fraction = 846.97 ÷ 907.02 ≈ **93.38%**. Five mg gross acetate ≈ 4.67 mg H-LKKTETQ-OH equivalent — illustrative only; use lot assay.",
        "Common errors: treating Ac- and acetate as the same; using 889 Da for unacetylated LKKTETQ; converting 5 µg mouse topical exposure into human injection amount.",
      ],
    },
    {
      id: "schedule-variation",
      title: "Why Reported Protocols Vary",
      paragraphs: [
        "**Ambiguous naming:** Some “Fragment (17–23)” listings specify LKKTETQ, some Ac-LKKTETQ, some contradictory masses. Apparent protocol differences may reflect different molecules.",
        "**No human PK for H-LKKTETQ-OH:** Frequency claims cannot be tied to demonstrated human target concentration.",
        "**Route changes create new experiments:** Topical mouse exposure does not predict SC, IM, IV, or injury-site exposure.",
        "**Loading/maintenance are community labels:** No direct study demonstrated saturation, loading, maintenance, tapering, or cycling for the unacetylated fragment.",
      ],
      widgetAfter: "tb500f-claim-checker",
    },
    {
      id: "storage",
      title: "Storage and Handling",
      paragraphs: [
        "Follow lot-specific certificate and stability-indicating program. A commonly cited H-LKKTETQ-OH data sheet lists sealed storage away from moisture and light under nitrogen: powder at −80°C up to two years or −20°C up to one year; in solvent at −80°C six months or −20°C one month.",
        "Do not assume a generic “28 days refrigerated” rule. Bacteriostatic diluent does not prove peptide chemical stability or sterility after repeated access.",
      ],
    },
    {
      id: "safety",
      title: "Safety and Monitoring",
      paragraphs: [
        "Human safety is poorly characterized because no direct H-LKKTETQ-OH clinical program was identified. The aged-mouse study cannot establish systemic tolerability, repeat-dose safety, reproductive risk, carcinogenic risk, immunogenicity, or long-term safety.",
        "The LKKTETQ region has been associated with actin regulation, cell migration, angiogenesis, and wound-healing endpoints in preclinical systems — raising questions in active malignancy or abnormal vascular growth, but no direct human risk magnitude is known.",
      ],
      widget: "tb500f-adverse-events",
    },
    {
      id: "mechanism",
      title: "Mechanism: What the Fragment Evidence Shows",
      paragraphs: [
        "The LKKTET sequence lies within thymosin beta-4's central actin-binding region. Mechanistic overlap does **not** make the fragment a miniature version of full-length Tβ4. N-terminal acetylation further changes the test article.",
      ],
      tables: [
        {
          headers: ["Claim", "Directly supported for H-LKKTETQ-OH?", "Limitation"],
          rows: [
            ["Contains Tβ4 residues 17–23", "Yes", "Structural fact only"],
            ["Improved aged-mouse wound endpoints at 0.01% topical", "Supported by one model", "One concentration, nonhuman, topical"],
            ["Has the same PK as Ac-LKKTETQ", "No", "Acetylation changes identity"],
            ["Heals human tendons or ligaments", "No direct evidence", "No controlled fragment trial"],
            ["Requires twice-weekly injection", "No", "Community convention"],
            ["Reproduces all full-length Tβ4 effects", "No", "Parent has additional domains"],
          ],
        },
      ],
    },
    {
      id: "evidence-ladder",
      title: "Dosage Evidence Ladder",
      paragraphs: [
        "**How established is TB-500 Fragment (17–23) dosing? Poorly established.** Unacetylated LKKTETQ has one useful molecule-specific topical animal exposure, but no verified human dose or injected PK program. Online milligram schedules generally come from the broader TB-500 market and cannot be assigned to H-LKKTETQ-OH without evidence.",
      ],
      widget: "tb500f-evidence-ladder",
    },
    {
      id: "anti-doping",
      title: "Anti-Doping Status",
      paragraphs: [
        "The 2026 WADA Prohibited List includes **thymosin-β4 and its derivatives, for example TB-500**, in section S2.3 — prohibited at all times. A 17–23 Tβ4 fragment may be treated as a derivative even when a seller uses another name.",
        "Analytical detection work has identified Ac-LKKTETQ and C-terminally truncated metabolites. A short parent-detection window does not create a safe or permitted period.",
      ],
    },
  ],
  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "What is the standard TB-500 Fragment (17–23) dose?",
        answer:
          "There is no established human dose. The clearest direct unacetylated-fragment exposure is 0.01% topical LKKTETQ, 50 µL per mouse wound on day 0 and again 48 hours later (5 µg per application).",
      },
      {
        question: "Is TB-500 Fragment (17–23) the same as TB-500?",
        answer:
          "Only sometimes. Published TB-500 is Ac-LKKTETQ (~889 Da); some Fragment (17–23) products are unacetylated H-LKKTETQ-OH (~847 Da). Certificate and intact mass must settle identity. See /peptides/tb-500 for the acetylated form.",
      },
      {
        question: "What is the molecular mass of the unacetylated fragment?",
        answer:
          "H-LKKTETQ-OH is approximately 846.97 Da. N-acetylated Ac-LKKTETQ-OH is approximately 889.01 Da — a different molecule.",
      },
      {
        question: "How many micrograms is 50 µL of 0.01% LKKTETQ?",
        answer:
          "5 µg. A 0.01% w/v solution equals 0.1 mg/mL, and 0.1 mg/mL × 0.050 mL equals 0.005 mg.",
      },
      {
        question: "Was the published animal fragment injected?",
        answer:
          "No. The molecule-specific aged-mouse exposure was applied topically to punch wounds — not SC or IM.",
      },
      {
        question: "Has H-LKKTETQ-OH been dosed in humans?",
        answer:
          "No molecule-confirmed published human administration study was identified.",
      },
      {
        question: "Why do online pages recommend 2–2.5 mg twice weekly?",
        answer:
          "The schedule is widely copied under the TB-500 name, likely influenced by common 5 mg vial sizes and Ac-LKKTETQ pages. No fragment-specific human trial validates it for unacetylated LKKTETQ.",
      },
      {
        question: "Can the mouse dose be converted to a human dose?",
        answer:
          "No. The exposure was local per wound and differs in species, route, formulation, tissue geometry, and endpoint.",
      },
      {
        question: "Is Ac- the same as an acetate salt?",
        answer:
          "No. Ac- is a covalent N-terminal modification; acetate is a counterion associated with a salt form.",
      },
      {
        question: "Does H-LKKTETQ-OH have the same half-life as Ac-LKKTETQ?",
        answer:
          "It should not be assumed. The N-terminal modification can change degradation and disposition, and no matched human comparison exists.",
      },
      {
        question: "How many U-100 units is 2.5 mg from 10 mg brought to 2 mL?",
        answer:
          "50 U because the concentration is 5 mg/mL and 2.5 mg occupies 0.5 mL. This is volume arithmetic for H-LKKTETQ-OH equivalent — not a validated dose.",
      },
      {
        question: "Is TB-500 Fragment (17–23) prohibited in sport?",
        answer:
          "Athletes should treat it as prohibited. WADA lists thymosin-β4 and its derivatives, including TB-500, under S2.3 at all times.",
      },
    ],
  },
  sources: {
    title: "Key References",
    items: [
      {
        authors: "Philp D, et al.",
        title: "Thymosin beta 4 and synthetic actin-binding-domain peptide in aged-mouse wound repair",
        detail: "Wound Repair Regen. 2003 — 0.01% topical LKKTETQ.",
        href: "https://pubmed.ncbi.nlm.nih.gov/12581423/",
      },
      {
        authors: "Sosne G, et al.",
        title: "Biological activities of thymosin beta4 defined by active sites in short peptide sequences",
        detail: "FASEB J. 2010.",
        href: "https://pubmed.ncbi.nlm.nih.gov/20179146/",
      },
      {
        authors: "Esposito S, et al.",
        title: "N-terminal acetylated 17–23 fragment identified in TB-500",
        detail: "Drug Test Anal. 2012 — Ac-LKKTETQ identity.",
        href: "https://pubmed.ncbi.nlm.nih.gov/22962027/",
      },
      {
        authors: "FDA",
        title: "2026 scientific review of TB-500 free base and acetate",
        detail: "Identity fork and unacetylated LKKTETQ pharmacology.",
        href: "https://www.fda.gov/media/193349/download",
      },
      {
        authors: "Kwok WH, et al.",
        title: "10 mg SC equine Ac-LKKTETQ detection study",
        detail: "J Chromatogr A. 2013 — not H-LKKTETQ-OH.",
        href: "https://pubmed.ncbi.nlm.nih.gov/23318763/",
      },
      {
        authors: "Rahaman KA, et al.",
        title: "TB-500 quantification and metabolites",
        detail: "J Chromatogr B. 2024.",
        href: "https://pubmed.ncbi.nlm.nih.gov/38382158/",
      },
      {
        authors: "NIH PubChem",
        title: "Unacetylated LKKTETQ, CID 10169788",
        detail: "846.97 Da free base.",
        href: "https://pubchem.ncbi.nlm.nih.gov/compound/10169788",
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
      "TB-500 Fragment (17–23) on this page means **unacetylated H-LKKTETQ-OH** (~846.97 Da) — **not** N-acetylated Ac-LKKTETQ (~889 Da) and **not** full-length thymosin beta-4. **No established human dosage** exists.",
      "Best direct evidence: **topical 0.01% w/v, 50 µL per wound on day 0 and 48 h** in aged mice = **5 µg per application**. Online milligram injection cycles are anecdotal and usually refer to Ac-LKKTETQ or ambiguous identity.",
      "This page is an evidence reference for educational purposes. It is **not a dosing, injection, loading, or stack guide.** WADA S2 prohibits thymosin-β4 derivatives at all times in tested sport.",
    ],
  },
};
