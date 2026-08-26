/**
 * Dihexa (PNB-0408) dosage guide.
 * No human dose established. McCoy 2013: oral 1.25–2 mg/kg rats (expression of concern 2021).
 * Benoist 2014 HGF/MET mechanism paper retracted 2025. Community oral 5–20 mg unvalidated.
 * Proposed FIH: 100 mcg microdose → 0.1–3 mg SAD → 0.1–1 mg MAD.
 */

export const DIHEXA_MW = 504.66;

export function dihexaPowderRequired({ targetMg, activeFraction }) {
  const target = Number(targetMg);
  const frac = Number(activeFraction);
  if (!Number.isFinite(target) || target <= 0 || !Number.isFinite(frac) || frac <= 0) {
    return null;
  }
  return {
    targetMg: target,
    activeFraction: frac,
    powderMg: target / frac,
  };
}

export function dihexaMassToMicromol(mg) {
  const n = Number(mg);
  if (!Number.isFinite(n) || n <= 0) return null;
  return {
    mg: n,
    micromol: (n / DIHEXA_MW) * 1000,
  };
}

export function dihexaCumulativeExposure({ dailyMg, days }) {
  const d = Number(dailyMg);
  const n = Number(days);
  if (!Number.isFinite(d) || d <= 0 || !Number.isFinite(n) || n <= 0) return null;
  return {
    dailyMg: d,
    days: n,
    totalMg: d * n,
  };
}

export const DIHEXA_IDENTITY = [
  {
    id: "dihexa-free",
    label: "Dihexa (PNB-0408 · Hexanoyl-Tyr-Ile-Ahx-NH2)",
    verdict: "Confirm free form vs acetate and assay basis before mg math",
    detail:
      "CAS 1401708-83-5 · C27H44N4O5 · MW ~504.66 g/mol. Certificate must state free vs acetate, stereochemistry, and whether “10 mg” is free-equivalent or total salt mass.",
  },
  {
    id: "dihexa-acetate",
    label: "Dihexa acetate (FDA compounding nomenclature)",
    verdict: "May differ in formula weight — not automatically mass-equivalent",
    detail:
      "FDA materials refer to Dihexa acetate. Acetate stoichiometry and assay basis must be defined before comparing to McCoy 2013 animal doses or community mg protocols.",
  },
  {
    id: "unspecified",
    label: "Unspecified “Dihexa peptide” powder",
    verdict: "Incomplete identity — do not dose from label mg alone",
    detail:
      "Research catalogs vary in salt, hydration, and carrier. HPLC area purity ≠ quantitative Dihexa assay.",
  },
  {
    id: "fosgonimeton",
    label: "Fosgonimeton (ATH-1017)",
    verdict: "Different compound — not a Dihexa dose bridge",
    detail:
      "Related HGF/MET program reached humans at 40 mg SC daily (LIFT-AD) — negative primary endpoints. Does not establish Dihexa PK, safety, or oral mg.",
  },
];

export const DIHEXA_EVIDENCE_INTEGRITY = [
  {
    paper: "McCoy et al., 2013",
    role: "Oral activity, PK, rat cognition, brain distribution",
    status: "Expression of concern (2021)",
    use: "Report cautiously — anchor animal oral 2 mg/kg",
  },
  {
    paper: "Benoist et al., 2014",
    role: "HGF/MET binding, synaptogenesis, “10 million × BDNF”",
    status: "Retracted April 2025",
    use: "Do not use as affirmative mechanism evidence",
  },
  {
    paper: "Kawas et al., 2012",
    role: "HGF/MET-modifier development",
    status: "Retracted 2025",
    use: "Do not use as affirmative support",
  },
  {
    paper: "Sun et al., 2021",
    role: "APP/PS1 mice · 1.44/2.88 mg/kg × 3 months",
    status: "Published · independent group",
    use: "Preclinical only — route text internally inconsistent",
  },
];

export const DIHEXA_HUMAN_STATUS = [
  ["Established human dose", "None"],
  ["Human PK / half-life", "Unknown — 12.8-day claim unverified"],
  ["Human clinical trial", "None identified for Dihexa or Dihexa acetate"],
  ["Best oral animal anchor", "2 mg/kg/day rats (McCoy 2013 · EOC)"],
  ["APP/PS1 mouse doses", "1.44 · 2.88 mg/kg/day × 3 months (Sun 2021)"],
  ["Community oral range", "5–20 mg · anecdotal"],
  ["Related human compound", "Fosgonimeton 40 mg SC — not transferable"],
  ["FDA human exposure data", "None identified for Dihexa acetate"],
];

export const DIHEXA_PRECLINICAL = [
  { model: "Scopolamine rats", dose: "0.1–1 nmol", route: "ICV", note: "McCoy 2013 · EOC" },
  { model: "Scopolamine rats", dose: "0.05–0.5 mg/kg", route: "IP", note: "McCoy 2013 · EOC" },
  { model: "Scopolamine rats", dose: "1.25–2 mg/kg", route: "Oral", note: "McCoy 2013 · EOC" },
  { model: "Aged rats", dose: "2 mg/kg/day", route: "Oral", note: "McCoy 2013 · EOC" },
  { model: "Rat PK", dose: "10 mg/kg", route: "IV", note: "Multiphasic plasma · EOC" },
  { model: "APP/PS1 mice", dose: "1.44 · 2.88 mg/kg/day", route: "IG/IP unclear", note: "Sun 2021" },
];

export const DIHEXA_ANECDOTAL_PROTOCOLS = [
  {
    id: "low-oral",
    label: "Lower oral convention",
    amount: "2–5 mg",
    frequency: "Once daily",
    route: "Oral",
    duration: "4–8 weeks",
    basis: "Clinic/vendor/community",
  },
  {
    id: "common-oral",
    label: "Common oral convention",
    amount: "5–10 mg",
    frequency: "Once daily",
    route: "Oral",
    duration: "4–8 weeks",
    basis: "Most repeated anecdotal",
  },
  {
    id: "high-oral",
    label: "Higher oral convention",
    amount: "10–20 mg",
    frequency: "Daily or EOD",
    route: "Oral",
    duration: "4–12 weeks",
    basis: "Vendor/clinic protocols",
  },
  {
    id: "intermittent",
    label: "Intermittent (half-life claim)",
    amount: "10–50 mg",
    frequency: "1–3× weekly",
    route: "Oral",
    duration: "4–8 weeks",
    basis: "Unverified long t½ repetition",
  },
  {
    id: "topical",
    label: "Transdermal convention",
    amount: "1–5 mg applied",
    frequency: "Once daily",
    route: "Topical (+ enhancer)",
    duration: "2–8 weeks",
    basis: "No human absorption data",
  },
];

export const DIHEXA_ANECDOTAL_PHASES = [
  { phase: "Baseline", weeks: "−2 to 0", amount: "None", cumulative: 0 },
  { phase: "Exposure", weeks: "1–4", amount: "5 mg daily oral", cumulative: 140 },
  { phase: "Washout", weeks: "5–8", amount: "None", cumulative: 0 },
];

export const DIHEXA_ASSAY_PRESETS = [
  { id: "0.99", label: "99% assay", fraction: 0.99 },
  { id: "0.95", label: "95% assay", fraction: 0.95 },
  { id: "0.90", label: "90% assay", fraction: 0.9 },
];

export const DIHEXA_MASS_PRESETS = [
  { id: "0.1", label: "0.1 mg", mg: 0.1 },
  { id: "1", label: "1 mg", mg: 1 },
  { id: "5", label: "5 mg", mg: 5 },
  { id: "10", label: "10 mg", mg: 10 },
  { id: "20", label: "20 mg", mg: 20 },
];

export const DIHEXA_FIH_SAD = [
  { cohort: 1, doseMg: 0.1, washoutDays: 7 },
  { cohort: 2, doseMg: 0.3, washoutDays: 7 },
  { cohort: 3, doseMg: 1.0, washoutDays: 10 },
  { cohort: 4, doseMg: 3.0, washoutDays: 14 },
];

export const DIHEXA_FIH_MAD = [
  { cohort: 1, doseMg: 0.1, days: 14 },
  { cohort: 2, doseMg: 0.3, days: 14 },
  { cohort: 3, doseMg: 1.0, days: 14 },
];

export const DIHEXA_COMPARE = {
  clinical: {
    title: "Published / registered research",
    status: "No human Dihexa column exists",
    rows: [
      ["Human dose", "None identified"],
      ["Human PK", "Unknown"],
      ["Fosgonimeton (related)", "40 mg SC daily · LIFT-AD negative"],
      ["Animal oral anchor", "2 mg/kg/day rats · EOC on paper"],
      ["Mechanism paper", "Benoist 2014 retracted 2025"],
    ],
  },
  anecdotal: {
    title: "Community / clinic / vendor protocols",
    status: "5–20 mg oral most repeated · no validation",
    rows: [
      ["Amount", "Commonly 5–20 mg; up to ~50 mg online"],
      ["Route", "Oral, topical, sublingual, IN, SC claims"],
      ["Frequency", "Daily, EOD, or 1–3× weekly"],
      ["Duration", "4–8 weeks + break"],
      ["Basis", "Capsule strengths, forums, animal extrapolation"],
    ],
  },
};

export const DIHEXA_CLAIMS = [
  {
    id: "human-memory",
    claim: "Dihexa improves human memory",
    verdict: "Unsupported",
    detail: "No human efficacy trial identified.",
  },
  {
    id: "10million-bdnf",
    claim: "10 million times stronger than BDNF",
    verdict: "Misleading",
    detail:
      "Assay-specific comparison from compromised literature line. Retracted mechanism paper cannot support as established property.",
  },
  {
    id: "half-life",
    claim: "12.8-day human half-life justifies weekly dosing",
    verdict: "Unverified",
    detail:
      "Rat IV multiphasic data do not establish human half-life. No peer-reviewed human PK source for 8–12 day figures located.",
  },
  {
    id: "5mg-studied",
    claim: "5 mg is a studied human research dose",
    verdict: "False",
    detail: "Five mg is a common capsule strength and community convention — not a human trial dose.",
  },
  {
    id: "hed",
    claim: "Multiply rat mg/kg by body weight for human dose",
    verdict: "Invalid",
    detail:
      "Ignores bioavailability, metabolism, brain partitioning, toxicology NOAEL, and EOC on anchor study.",
  },
  {
    id: "cancer-proven",
    claim: "Dihexa causes cancer",
    verdict: "Not demonstrated",
    detail:
      "HGF/MET biology creates mechanism-level concern; no human Dihexa cancer-incidence data. Claimed target engagement uncertain after retraction.",
  },
  {
    id: "cancer-safe",
    claim: "Short animal studies proved Dihexa cannot cause cancer",
    verdict: "False",
    detail: "Risk is unresolved — not proven safe or carcinogenic.",
  },
  {
    id: "bw-water",
    claim: "Dissolve Dihexa in bacteriostatic water for injection",
    verdict: "Unsupported",
    detail:
      "Poor water solubility reported. Clear solution ≠ validated injectable without cosolvent, sterility, and tox data.",
  },
  {
    id: "peptide-safe",
    claim: "Dihexa is safe because it is a peptide",
    verdict: "False",
    detail: "Peptidomimetic structure class does not establish human safety.",
  },
  {
    id: "fosgonimeton-same",
    claim: "Fosgonimeton results validate Dihexa dosing",
    verdict: "False",
    detail: "Different molecule · 40 mg SC · trial did not meet primary endpoints.",
  },
];

export const DIHEXA_EVIDENCE_LADDER = [
  { level: "FDA-approved dose", exists: "None", confidence: "None" },
  { level: "Human clinical-trial dose", exists: "None for Dihexa", confidence: "None" },
  { level: "Related compound (fosgonimeton)", exists: "40 mg SC daily", confidence: "Not transferable" },
  { level: "Published animal dosing", exists: "Oral 1.25–2 mg/kg · IP · ICV · mice", confidence: "Preclinical · EOC on anchor" },
  { level: "Anecdotal human protocols", exists: "5–20 mg oral common", confidence: "Insufficient" },
  { level: "Long-term human evidence", exists: "None", confidence: "None" },
];

export const DIHEXA_AE_SIMPLE = [
  {
    category: "Human incidence data",
    note: "None — no controlled human safety trial",
  },
  {
    category: "Anecdotal reports",
    note: "Headache, nausea, anxiety, insomnia, irritability, mood change — uncontrolled, no denominator",
  },
  {
    category: "HGF/MET concern",
    note: "Mechanism-level proliferative/invasion biology concern — not documented Dihexa AE",
  },
  {
    category: "Neurologic/psychiatric",
    note: "Seizure, mania, psychosis risk uncharacterized in humans",
  },
];

export const DIHEXA_AE_FULL = [
  {
    domain: "Reported anecdotal",
    items: "Headache, GI discomfort, anxiety, insomnia, fatigue, mood change, overstimulation, taste change",
  },
  {
    domain: "Theoretical / mechanism",
    items: "HGF/MET growth signaling, CNS excitability, drug interactions with stimulants, psychotropics, cholinesterase inhibitors",
  },
  {
    domain: "Product / route",
    items: "Variable research powder quality, DMSO topical stacks, non-validated SC/IN formulations",
  },
  {
    domain: "Research exclusions",
    items: "Active/recent cancer, seizure disorder, psychosis, pregnancy, unresolved lesions — precautionary in proposed FIH design",
  },
];

export const DIHEXA_DOSAGE_GUIDE = {
  title: "Dihexa Dosage: Research Protocols, Evidence, and Safety",
  updated: "Updated August 2026",
  callout:
    "**Research note:** **No human Dihexa dose** has been established. McCoy 2013 (**2 mg/kg oral rats**) carries a **2021 expression of concern**; the principal **HGF/c-Met mechanism paper was retracted in 2025**. Online **5–20 mg oral** protocols are **community/clinic conventions** — not clinical-trial regimens. A responsible program starts with **100 mcg microdose** after qualifying nonclinical gates — **not** community dosing.",
  intro: [
    "Dihexa (**PNB-0408**) is a synthetic angiotensin IV analog (**Hexanoyl-Tyr-Ile-Ahx-NH2**, MW **~504.66 g/mol**). Published dosing is **preclinical only**. The main oral anchor is **2 mg/kg/day** in rats — paper under **expression of concern** since 2021.",
    "Online human protocols cluster around **5–20 mg oral** once daily for **4–8 weeks**, with competing **EOD** or **1–3× weekly** schedules based on an **unverified ~12.8-day half-life** claim. **Fosgonimeton** (40 mg SC in LIFT-AD) is a **different compound** — not a Dihexa dose bridge.",
    "Proposed first-in-human design: **100 mcg microdose PK**, then **0.1–3 mg single ascending doses**, then **0.1–1 mg × 14 days** repeated dosing — all **below** the community range and only after GLP tox, validated assays, and regulatory/ethics approval.",
  ],
  glance: {
    title: "Dihexa dosage in 30 seconds",
    table: {
      headers: ["Question", "Current answer"],
      rows: [
        ["**Human trial dose**", "None identified"],
        ["**Oral animal anchor**", "2 mg/kg/day rats (McCoy 2013 · EOC)"],
        ["**Mouse doses**", "1.44 · 2.88 mg/kg/day × 3 mo (Sun 2021)"],
        ["**Community oral range**", "5–20 mg · anecdotal"],
        ["**Human half-life**", "Unknown"],
        ["**Mechanism paper**", "Benoist 2014 retracted 2025"],
        ["**Proposed FIH start**", "100 mcg microdose → 0.1–3 mg SAD"],
        ["**≠**", "Fosgonimeton · Dihexa acetate without assay"],
      ],
    },
  },
  sections: [
    {
      id: "what-is",
      title: "What is Dihexa?",
      paragraphs: [
        "Dihexa is a **metabolically modified angiotensin IV analog** developed as **PNB-0408**. CAS **1401708-83-5** · **C27H44N4O5** · MW **504.66 g/mol**. Often called a peptide; **peptidomimetic** is more precise.",
        "Research catalogs commonly report **poor water solubility** — DMSO or formulation-specific suspensions in lab work. **Dihexa**, **Dihexa acetate**, and unspecified powder may differ in formula weight, counterion, and assay basis.",
      ],
      widget: "dihexa-identity-gate",
    },
    {
      id: "integrity",
      title: "The evidence-integrity issue",
      paragraphs: [
        "Dihexa evidence cannot be summarized without the publication record. The viral **“10 million × BDNF”** claim came from assay-specific comparison in a **retracted** research line — not ten million times more cognitive benefit in humans.",
      ],
      widget: "dihexa-evidence-integrity",
    },
    {
      id: "regulatory",
      title: "Research and compounding status",
      paragraphs: [
        "FDA states **no human exposure data** identified for drug products containing **Dihexa acetate** by any route. Dihexa acetate nomination was withdrawn; **PCAC review** announced before end of February 2027. Compounding status does **not** supply a safe or effective dose.",
      ],
    },
    {
      id: "human",
      title: "Dosage used in human clinical trials",
      paragraphs: [
        "**No Dihexa human dosing study was identified** — no single- or multiple-dose safety, oral bioavailability, half-life, brain/CSF exposure, dose-response, MTD, or long-term cancer surveillance.",
        "Symptom lists on clinic pages (headache, insomnia, anxiety) are **uncontrolled reports** — not incidence rates from a safety trial.",
      ],
      widget: "dihexa-human-status",
    },
    {
      id: "fosgonimeton",
      title: "Fosgonimeton — related but not transferable",
      paragraphs: [
        "**LIFT-AD (NCT04488419):** 312 adults · **40 mg fosgonimeton SC once daily × 26 weeks** — did **not** meet primary Global Statistical Test or key secondary endpoints. Shows related program reached humans; does **not** establish Dihexa PK, safety, or oral mg.",
      ],
    },
    {
      id: "landscape",
      title: "Commonly reported research protocols",
      widget: "dihexa-anecdotal-protocols",
      paragraphsAfter: [
        "Human protocols have **no direct experimental support**. Published studies show certain **rodent/cell** doses were investigated — they do not validate oral 5, 10, or 20 mg human amounts.",
      ],
    },
    {
      id: "compare",
      title: "Anecdotal versus clinically studied dosing",
      widget: "dihexa-clinical-vs-anecdotal",
      paragraphsAfter: [
        "There is **no clinically studied human column**. That is the central dosing limitation.",
      ],
    },
    {
      id: "anecdotal-detail",
      title: "Documented lower-end anecdotal oral pattern",
      paragraphs: [
        "**5 mg once daily oral × 4 weeks** then **4-week washout** — cumulative **140 mg** nominal exposure. Documented across clinic/community sources to describe the search landscape — **not** a treatment recommendation.",
        "A **10 mg × 6 weeks** variant yields **420 mg** — threefold exposure with no evidence of superior efficacy or acceptable safety.",
      ],
      widget: "dihexa-anecdotal-timeline",
    },
    {
      id: "preclinical",
      title: "Preclinical research dosage",
      widget: "dihexa-preclinical-doses",
      paragraphsAfter: [
        "Picomolar **cell-culture** concentrations are not capsule milligrams. **No human-equivalent-dose table** is provided — BSA math cannot correct for missing PK, tox NOAEL, EOC on anchor study, or unknown pharmacodynamic threshold.",
      ],
    },
    {
      id: "powder-math",
      title: "Dihexa powder and capsule math",
      paragraphs: [
        "**Powder required = target Dihexa mass ÷ active assay fraction.** Applies only when assay is quantitative Dihexa on the same chemical basis as the target dose.",
      ],
      widget: "dihexa-assay-calc",
    },
    {
      id: "molar",
      title: "Mass-to-mole conversion",
      paragraphs: [
        "Using **504.66 g/mol**, moles do **not** predict receptor occupancy without human exposure and binding data — especially after mechanism paper retraction.",
      ],
      widget: "dihexa-molar-calc",
    },
    {
      id: "routes",
      title: "Reconstitution and route problems",
      paragraphs: [
        "**Oral:** requires dissolution, bioavailability, uniformity, food-effect, stability. **Transdermal:** DMSO stacks lack human permeation data. **Intranasal/SC:** no validated human formulation or safety program. **Bacteriostatic water reconstitution** is chemically questionable for a poorly water-soluble compound without validated cosolvent system.",
      ],
    },
    {
      id: "protocol",
      title: "Complete first-in-human research protocol (proposed)",
      paragraphs: [
        "**Phase 0/1:** microdose PK (**100 mcg**), **SAD 0.1–3 mg**, **MAD 0.1–1 mg × 14 days** — upper repeated dose is **one-fifth** of the lower end of the 5–20 mg community range. Cannot begin without GMP product, GLP tox, validated LC-MS/MS, and IRB/regulatory approval.",
      ],
      widget: "dihexa-protocol-timeline",
      paragraphsAfter: [
        "Cancer-related exclusions are **precautionary** for an HGF/MET-pathway candidate — they do not imply Dihexa has been shown to cause cancer.",
      ],
    },
    {
      id: "safety",
      title: "Safety and adverse effects",
      widget: "dihexa-adverse-events",
    },
    {
      id: "mechanism",
      title: "Mechanism of action",
      paragraphs: [
        "Proposed **HGF/MET potentiation** model rested heavily on **Benoist 2014 — retracted 2025**. **Angiotensin IV / IRAP** and **PI3K/AKT** (Sun 2021 mouse data) remain alternative/preclinical threads. Rat **brain penetration** (McCoy 2013) requires independent replication under EOC.",
      ],
    },
    {
      id: "claims",
      title: "Common claims vs evidence",
      widget: "dihexa-claim-checker",
    },
    {
      id: "evidence-ladder",
      title: "Dosage evidence ladder",
      widget: "dihexa-evidence-ladder",
    },
    {
      id: "bottom-line",
      title: "Bottom line",
      paragraphs: [
        "Dihexa is an unusually **uncertain** cognitive-research compound. The most cited oral animal dose (**2 mg/kg/day**) sits under **expression of concern**; the canonical mechanism paper was **retracted**; **no human trial** has established absorption, safety, efficacy, or half-life.",
        "The **5–20 mg oral range** documents what researchers encounter online — **community convention**, not established dosing. A credible program begins with qualifying nonclinical work and a **100 mcg microdose**, then measured exposure to decide whether **0.1–3 mg** single and **0.1–1 mg** repeated doses can be studied.",
      ],
      highlight:
        "No human dose. EOC + retraction change how every preclinical anchor must be read. Community mg protocols are not a starting point for FIH design.",
    },
  ],
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        question: "What is the most commonly reported Dihexa dose?",
        answer:
          "Online sources most often report 5–20 mg per administration, usually orally. That is an anecdotal market range, not a clinically established dose.",
      },
      {
        question: "Has 5 mg of Dihexa been studied in humans?",
        answer: "No published controlled human study of a 5-mg Dihexa dose was identified.",
      },
      {
        question: "What dose was used in rats?",
        answer:
          "McCoy 2013 reported 1.25 and 2 mg/kg orally, 0.05–0.5 mg/kg IP, and 0.1–1 nmol ICV. That paper carries an expression of concern.",
      },
      {
        question: "Can the animal dose be multiplied by body weight?",
        answer:
          "No. That ignores species differences in absorption, metabolism, distribution, pharmacodynamics, and toxicity.",
      },
      {
        question: "Is Dihexa orally bioavailable in humans?",
        answer:
          "Oral activity was reported in rats and permeability was predicted computationally. Human oral bioavailability has not been measured.",
      },
      {
        question: "What is Dihexa's half-life?",
        answer:
          "Unknown in humans. Commonly quoted 8–12 day figures were not verified from a peer-reviewed human source.",
      },
      {
        question: "Was the Dihexa mechanism research retracted?",
        answer:
          "Benoist 2014 was retracted in 2025. McCoy 2013 remains published with a 2021 expression of concern.",
      },
      {
        question: "Does Dihexa cause cancer?",
        answer:
          "Not demonstrated. HGF/MET signaling creates a theoretical concern that remains unresolved in human Dihexa studies.",
      },
      {
        question: "Is Dihexa the same as Dihexa acetate?",
        answer:
          "Not necessarily on a mass basis. The supplier must define chemical entity, acetate stoichiometry, and assay basis.",
      },
      {
        question: "Why not begin a human trial at 5 mg?",
        answer:
          "Five milligrams comes from community and commercial practice, not a human safety margin. First-in-human designs should build exposure data from microdose and low ascending cohorts.",
      },
    ],
  },
  sources: {
    title: "References",
    items: [
      {
        authors: "McCoy AT et al.",
        title: "Metabolically stabilized angiotensin IV analogs as procognitive agents",
        detail: "Oral 1.25–2 mg/kg · EOC 2021.",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3533412/",
      },
      {
        authors: "Benoist CC et al.",
        title: "HGF/c-Met procognitive effects — retracted 2025",
        detail: "Do not use as affirmative mechanism evidence.",
        href: "https://pubmed.ncbi.nlm.nih.gov/40312093/",
      },
      {
        authors: "Sun X et al.",
        title: "Dihexa in APP/PS1 mice via PI3K/AKT",
        detail: "1.44/2.88 mg/kg × 3 months · route text inconsistent.",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8615599/",
      },
      {
        authors: "ClinicalTrials.gov",
        title: "NCT04488419 — fosgonimeton LIFT-AD",
        detail: "40 mg SC daily · not Dihexa.",
        href: "https://clinicaltrials.gov/study/NCT04488419",
      },
      {
        authors: "FDA",
        title: "Bulk substances — Dihexa acetate compounding",
        detail: "No identified human exposure data.",
        href: "https://www.fda.gov/drugs/human-drug-compounding/certain-bulk-drug-substances-use-compounding-may-present-significant-safety-risks",
      },
      {
        authors: "PubChem",
        title: "Dihexa CID 129010512",
        detail: "Identity reference.",
        href: "https://pubchem.ncbi.nlm.nih.gov/compound/129010512",
      },
    ],
  },
};
