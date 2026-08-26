/**
 * GHK Basic (copper-free Gly-His-Lys / Tripeptide-1 / prezatide) dosage guide.
 * ≠ GHK-Cu. No administered human dose-finding trial identified.
 * Community injection range ~0.5–2 mg; proposed pilot: 1 mg 5×/week × 6 weeks.
 */

export const GHK_BASIC_FREE_MW = 340.38;
export const GHK_BASIC_ACETATE_MW = 400.43;
/** Peptide moiety fraction if label is pure monoacetate salt mass */
export const GHK_BASIC_PEPTIDE_FRACTION = GHK_BASIC_FREE_MW / GHK_BASIC_ACETATE_MW; // ≈0.85
/** Monoacetate mass for 1 mg free-GHK equivalent */
export const GHK_BASIC_ACETATE_PER_FREE_MG = GHK_BASIC_ACETATE_MW / GHK_BASIC_FREE_MW; // ≈1.176

export function ghkBasicAmountFromVial({
  vialMg = 50,
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
  const mgPerUnit = concMgPerMl / 100;
  return {
    vialMg: vial,
    diluentMl: d,
    targetMg: target,
    concMgPerMl,
    volumeMl,
    units,
    mgPerUnit,
  };
}

export function ghkBasicAcetateToPeptide(saltMg) {
  const s = Number(saltMg);
  if (!Number.isFinite(s) || s <= 0) return null;
  return {
    saltMg: s,
    peptideMg: s * GHK_BASIC_PEPTIDE_FRACTION,
    acetateMg: s * (1 - GHK_BASIC_PEPTIDE_FRACTION),
  };
}

export function ghkBasicPeptideToAcetate(peptideMg) {
  const p = Number(peptideMg);
  if (!Number.isFinite(p) || p <= 0) return null;
  return {
    peptideMg: p,
    saltMg: p * GHK_BASIC_ACETATE_PER_FREE_MG,
  };
}

export const GHK_BASIC_IDENTITY = [
  {
    id: "correct",
    label: "Copper-free GHK (white / off-white)",
    verdict: "Matches GHK Basic identity on this page",
    detail:
      "Apo Gly-His-Lys (~340.38 g/mol free base). “Basic” means metal-free — not alkaline pH. Confirm sequence, free base vs acetate assay basis, and elemental copper to verify the material is not partially complexed.",
  },
  {
    id: "ghk-cu",
    label: "Blue GHK-Cu complex",
    verdict: "Different material — do not share dosage tables",
    detail:
      "GHK-Cu is pre-complexed copper tripeptide-1. Topical GHK-Cu findings and copper-fraction math do not establish a copper-free GHK Basic dose. NCT07437586 studies 0.1% GHK-Cu gel — not GHK Basic.",
  },
  {
    id: "acetate-as-free",
    label: "Treating monoacetate salt mass as free peptide",
    verdict: "May understate peptide exposure without assay conversion",
    detail:
      "If the label reports total pure monoacetate mass, peptide moiety ≈85% (340.38/400.43). Some COAs already report peptide-equivalent content — apply the correction only when the assay basis is total salt.",
  },
  {
    id: "tripeptide-unclear",
    label: "Only “Tripeptide-1” / cosmetic stock",
    verdict: "Incomplete — resolve concentration, salt, and suitability",
    detail:
      "Tripeptide-1 is the cosmetic INCI name for the Gly-His-Lys sequence. It does not define peptide concentration, counterion, purity, sterility, or injectability.",
  },
];

export const GHK_BASIC_HUMAN_STATUS = [
  ["Administered human dose-finding trial", "None identified"],
  ["Human SC / topical / oral / IN trial dose", "None identified"],
  ["Human-cell exposure", "10 nM × 48 h (COPD fibroblasts); 1 nM dermal fibroblasts"],
  ["Human pharmacokinetics", "Not established"],
  ["Most repeated community injection", "≈0.5–2 mg per administration"],
  ["Proposed lower-exposure pilot", "1 mg free-GHK eq · 5×/week · 6 weeks (30 mg cumulative)"],
  ["Long-term systemic safety", "Not established"],
  ["Strongest direct evidence", "Cell and animal research — not human intervention trials"],
];

export const GHK_BASIC_PROTOCOL_PHASES = [
  {
    id: "baseline",
    phase: "Baseline",
    weeks: "−2 to 0",
    amount: "None",
    frequency: "—",
    weekly: "0 mg",
    phaseTotal: "0 mg",
    purpose: "Standardized outcomes, labs, photography, randomization readiness",
  },
  {
    id: "w1-2",
    phase: "Fixed-dose weeks 1–2",
    weeks: "1–2",
    amount: "1 mg free-GHK equivalent",
    frequency: "Five days weekly",
    weekly: "5 mg",
    phaseTotal: "10 mg",
    purpose: "Early tolerability — no automatic escalation",
  },
  {
    id: "w3-4",
    phase: "Fixed-dose weeks 3–4",
    weeks: "3–4",
    amount: "1 mg free-GHK equivalent",
    frequency: "Five days weekly",
    weekly: "5 mg",
    phaseTotal: "10 mg",
    purpose: "Mid-cycle safety + objective endpoint check",
  },
  {
    id: "w5-6",
    phase: "Fixed-dose weeks 5–6",
    weeks: "5–6",
    amount: "1 mg free-GHK equivalent",
    frequency: "Five days weekly",
    weekly: "5 mg",
    phaseTotal: "10 mg",
    purpose: "Final on-exposure assessment — 30 administrations total",
  },
  {
    id: "followup",
    phase: "Follow-up",
    weeks: "7–10",
    amount: "None",
    frequency: "—",
    weekly: "0 mg",
    phaseTotal: "0 mg",
    purpose: "Four weeks off — persistence, delayed AEs, no catch-up dosing",
  },
];

export const GHK_BASIC_COMPARE = {
  clinical: {
    title: "Published copper-free GHK experiments",
    status: "Cell + animal — no administered human dose",
    rows: [
      ["Human administration", "None identified"],
      ["Dose", "1–10 nM cells; endpoint-specific animal mg/kg or µg/kg"],
      ["Route", "Primarily IP in animals; culture exposure"],
      ["Duration", "Minutes to ~21 days in most direct studies"],
      ["Outcome", "Remodeling, fibrosis, behavior, injury, immune models"],
      ["Dose-response", "Only within individual preclinical models"],
    ],
  },
  pilot: {
    title: "Proposed lower-exposure pilot",
    status: "Hypothesis-generating · not a validated therapy",
    rows: [
      ["Dose", "1 mg free-GHK equivalent"],
      ["Frequency", "Five days weekly"],
      ["Duration", "Six weeks + four weeks follow-up"],
      ["Cumulative", "30 mg (30 administrations)"],
      ["Escalation", "None"],
      ["Basis", "Lower end of repeated community 1–2 mg range"],
    ],
  },
  anecdotal: {
    title: "Community / commercial reports",
    status: "Anecdotal · no human dose-ranging source",
    rows: [
      ["Dose", "Usually 0.5–2 mg; sometimes up to 5 mg"],
      ["Frequency", "2–3×/week through daily"],
      ["Route", "Primarily SC; topical also reported"],
      ["Duration", "Usually 4–8 weeks"],
      ["Washout convention", "~4 weeks"],
      ["Established dose-response", "No"],
    ],
  },
};

export const GHK_BASIC_CLAIMS = [
  {
    id: "same-as-cu",
    claim: "GHK Basic and GHK-Cu are the same dose and evidence",
    verdict: "False",
    detail:
      "Same backbone, different starting materials. Equal milligrams are not equal moles, and topical GHK-Cu data do not validate injected GHK Basic.",
  },
  {
    id: "standard-dose",
    claim: "There is a standard human GHK Basic dose",
    verdict: "False",
    detail:
      "No administered human dose-finding trial was identified. Community 0.5–2 mg schedules are conventions, not clinical dosing.",
  },
  {
    id: "basic-ph",
    claim: "“Basic” means the solution should be alkaline",
    verdict: "False",
    detail:
      "Marketplace naming for the apo (copper-free) peptide. Final pH must be measured for the intended formulation.",
  },
  {
    id: "safer-no-cu",
    claim: "GHK Basic is safer than GHK-Cu because it has no copper",
    verdict: "Unsupported",
    detail:
      "It avoids adding pre-complexed copper, but can still bind endogenous metals. Repeated systemic safety is unestablished for both forms.",
  },
  {
    id: "need-copper",
    claim: "GHK Basic requires copper supplementation",
    verdict: "Unsupported",
    detail:
      "No human trial shows copper supplements are necessary, beneficial, or safe with GHK Basic. Adding copper changes the chemical system.",
  },
  {
    id: "ten-units",
    claim: "“10 units” is a complete dose instruction",
    verdict: "False",
    detail:
      "U-100 units are volume. From a 50 mg vial, 10 units = 2.5 mg at 2 mL, 2 mg at 2.5 mL, ~1.67 mg at 3 mL, or 1 mg at 5 mL.",
  },
  {
    id: "escalate",
    claim: "Escalate 1 → 2 → 5 mg if nothing changes by week two",
    verdict: "Unsupported",
    detail:
      "No human dose-response curve supports that ladder. Structural endpoints may change slowly; lack of early change ≠ underdosing.",
  },
  {
    id: "intranasal",
    claim: "Intranasal GHK Basic is clinically studied",
    verdict: "False",
    detail:
      "No human IN trial was identified. Mouse cognitive work often cited used GHK-Cu; copper-free sleep-deprivation work used IP injections.",
  },
  {
    id: "weight-based",
    claim: "Use 0.01–0.03 mg/kg body-weight dosing",
    verdict: "Unsupported",
    detail:
      "No validated human weight-based formula exists. Those figures appear to be community inventions, not PK or dose-ranging results.",
  },
  {
    id: "wada-ok",
    claim: "Not named on WADA list means allowed in tested sport",
    verdict: "Unsafe assumption",
    detail:
      "S0 (non-approved substances) may apply. Athletes need a current written anti-doping determination.",
  },
];

export const GHK_BASIC_EVIDENCE_LADDER = [
  {
    level: "Standardized drug dosage",
    exists: "None",
    confidence: "None",
  },
  {
    level: "Administered human clinical-trial dosing",
    exists: "None identified",
    confidence: "None",
  },
  {
    level: "Human observational exposure",
    exists: "Endogenous plasma measurements only",
    confidence: "Low relevance to exogenous dosing",
  },
  {
    level: "Human-cell dosing",
    exists: "1–10 nM in selected fibroblast experiments",
    confidence: "Moderate for narrow mechanisms",
  },
  {
    level: "Animal systemic dosing",
    exists: "Multiple endpoint-specific protocols",
    confidence: "Moderate for those models; low for human dose selection",
  },
  {
    level: "Topical copper-free GHK protocol",
    exists: "Mostly formulation and community conventions (~0.05–0.5%)",
    confidence: "Low",
  },
  {
    level: "Injectable community protocol",
    exists: "Commonly 0.5–2 mg (broader 0.1–5 mg claims)",
    confidence: "Very low",
  },
  {
    level: "Long-term systemic dosing",
    exists: "None established",
    confidence: "None",
  },
];

export const GHK_BASIC_AE_SIMPLE = [
  {
    category: "Human AE incidence",
    note: "Unknown — no controlled administered-human safety dataset",
  },
  {
    category: "Local reactions",
    note: "Community mentions include stinging, redness, swelling, itching, bruising, nodules — cause may be formulation/technique",
  },
  {
    category: "Immune modulation",
    note: "Rodent IP program showed dose-dependent immune suppression at high mg/kg — not community-dose incidence, but contradicts “inert endogenous peptide” claims",
  },
  {
    category: "Copper handling",
    note: "Apo peptide can still bind metals — “copper-free vial” ≠ biologically copper-irrelevant",
  },
  {
    category: "Product risks",
    note: "Wrong identity (GHK-Cu vs Basic), assay basis errors, endotoxin, sterility, particulates",
  },
];

export const GHK_BASIC_AE_FULL = [
  {
    domain: "Local",
    items: "Stinging, erythema, swelling, itching, bruising, nodules, infection, abscess, ulceration",
  },
  {
    domain: "Hypersensitivity",
    items: "Generalized rash, facial/throat swelling, breathing difficulty — stop and evaluate",
  },
  {
    domain: "Systemic symptoms",
    items: "Headache, dizziness, nausea, fatigue, sleep change, BP/HR change",
  },
  {
    domain: "Labs / organ",
    items:
      "CBC/CMP abnormalities; exploratory copper/ceruloplasmin; liver-related uncertainty from hepatocyte-growth history",
  },
  {
    domain: "Context exclusions",
    items:
      "Active/recent cancer, unexplained mass, pregnancy/breastfeeding, Wilson disease / copper disorders, uncontrolled autoimmunity",
  },
];

export const GHK_BASIC_DOSAGE_GUIDE = {
  title: "GHK Basic Dosage: Research Protocol, Reconstitution, and Evidence",
  updated: "Updated August 2026",
  callout:
    "**Research note:** “GHK Basic” is the **copper-free** Gly-His-Lys tripeptide — **not** the preformed **GHK-Cu** complex. No administered human dose-finding trial was identified. Human-cell, animal, and community-reported protocols are separated throughout this page.",
  intro: [
    "**No standardized human dosage exists.** The most relevant human evidence is **not** a dosing trial: researchers exposed human lung fibroblasts to **10 nM GHK for 48 hours** (≈3.4 ng/mL in medium) and observed collagen-gel remodeling restoration — a cell concentration, not a person dose.",
    "**Community injection protocols** most often cluster around **0.5–2 mg** per administration (2–5×/week through daily, commonly 4–8 weeks). A reproducible lower-exposure research design uses **1 mg, five days per week, for six weeks** (30 administrations; **30 mg** cumulative), then four weeks off — a proposed pilot, not a validated treatment.",
    "**“Basic” does not mean alkaline.** It means the apo (metal-free) tripeptide. Free base and acetate labels can produce different peptide-equivalent amounts (~**0.85 mg peptide per 1 mg monoacetate** if the label is total salt mass). A **50 mg vial to 2.5 mL = 20 mg/mL** (1 mg = 5 U-100 units).",
  ],
  glance: {
    title: "GHK Basic dosage in 30 seconds",
    table: {
      headers: ["Question", "Research summary"],
      rows: [
        ["**Defined compound**", "Copper-free Gly-His-Lys (Tripeptide-1 / prezatide)"],
        ["**Human administered dose**", "None identified"],
        ["**Human-cell exposure**", "10 nM × 48 h; 1 nM dermal-fibroblast research"],
        ["**Most repeated community amount**", "≈0.5–2 mg per administration"],
        ["**Proposed pilot**", "1 mg · 5×/week · 6 weeks (30 mg cumulative)"],
        ["**Common recon math**", "50 mg → 2.5 mL = 20 mg/mL (1 mg = 5 units)"],
        ["**≠ GHK-Cu**", "White apo peptide vs blue copper complex"],
        ["**Human PK / long-term safety**", "Not established"],
      ],
    },
  },
  sections: [
    {
      id: "what-is",
      title: "What is GHK Basic?",
      paragraphs: [
        "GHK Basic is **glycyl-L-histidyl-L-lysine** (**H-Gly-His-Lys-OH**), also called **Tripeptide-1** or **prezatide**. “Basic” is a marketplace convention distinguishing copper-free GHK from blue **GHK-Cu** — not a statement about pH or salt form.",
        "The free peptide is a strong metal-binding ligand and can form GHK-Cu in the presence of copper(II) under defined conditions. That chemistry does **not** prove how much of an administered copper-free dose becomes GHK-Cu in a living human.",
      ],
      widget: "ghk-basic-identity-gate",
      tables: [
        {
          caption: "GHK Basic vs acetate vs GHK-Cu",
          headers: ["Material", "Contains", "Approx. MW", "Typical appearance"],
          rows: [
            [
              "GHK free base",
              "Metal-free Gly-His-Lys",
              "340.38 g/mol",
              "White to off-white",
            ],
            [
              "GHK monoacetate",
              "GHK + acetate counterion",
              "400.43 g/mol",
              "White to off-white",
            ],
            [
              "GHK-Cu",
              "GHK coordinated to Cu(II)",
              "~402–403 g/mol (common 1-Cu form)",
              "Blue to blue-violet",
            ],
          ],
        },
      ],
    },
    {
      id: "salt-copper",
      title: "Why salt form and copper distinction matter",
      paragraphs: [
        "If a vial is pure GHK monoacetate labeled as **total salt mass**, peptide moiety ≈ **85%** (340.38 ÷ 400.43). Conversely, **1 mg free-GHK equivalent** ≈ **1.176 mg** pure monoacetate. Apply corrections only when the COA confirms salt-basis labeling.",
        "A white GHK vial should not be called “copper peptide” merely because the sequence can bind copper. Topical GHK-Cu cream results cannot establish an injected GHK Basic dose.",
      ],
      widget: "ghk-basic-acetate-calc",
    },
    {
      id: "human-evidence",
      title: "What human evidence exists for copper-free GHK?",
      paragraphs: [
        "No controlled study was identified in which people received a defined copper-free GHK dose by SC, intradermal, intranasal, oral, or clearly characterized topical routes. Bioavailability, SC absorption, PK, metal-complex fraction, dose-response, MTD, optimal frequency, efficacy, and AE incidence remain unknown.",
        "Plasma GHK observations (e.g., COPD vs controls; age-related concentration summaries) are **not** treatment trials and should not be converted into a replacement injection dose.",
      ],
      widget: "ghk-basic-human-status",
      tables: [
        {
          caption: "Selected human-cell exposures (not person doses)",
          headers: ["Study", "Exposure", "Finding", "Does not establish"],
          rows: [
            [
              "Campbell et al. (COPD fibroblasts)",
              "10 nM × 48 h",
              "Restored collagen-gel remodeling",
              "Human dose, route, safety, or clinical benefit",
            ],
            [
              "Gruchlik et al. (dermal fibroblasts)",
              "1 nM",
              "Affected IGF-2-dependent TGF-β1 secretion",
              "Skin efficacy or systemic dosing",
            ],
          ],
        },
      ],
      paragraphsAfter: [
        "Registered wound study **NCT07437586** uses **0.1% GHK-Cu gel** — not GHK Basic. Topical GHK reviews note promising cellular data but inadequate clinical studies and formulation/permeability uncertainty.",
      ],
    },
    {
      id: "research-range",
      title: "GHK Basic research dosage range",
      paragraphs: [
        "Because human dosing is unestablished, separate **animal protocols**, **cell concentrations**, and **community conventions**. No community injection schedule overlaps an administered human trial.",
      ],
      tables: [
        {
          caption: "Commonly reported protocols",
          headers: ["Context", "Amount", "Frequency", "Duration", "Evidence"],
          rows: [
            [
              "Lower community injection",
              "0.5–1 mg",
              "2–3×/week to daily",
              "4–6 weeks",
              "Anecdotal / commercial",
            ],
            [
              "Common community injection",
              "1–2 mg",
              "Daily, EOD, or 5×/week",
              "4–8 weeks",
              "Repeated online; no dose-ranging source",
            ],
            [
              "Higher community injection",
              "3–5 mg",
              "Usually daily",
              "~10 days–6 weeks",
              "Inconsistent; higher cumulative exposure",
            ],
            [
              "Copper-free topical convention",
              "0.05–0.5%",
              "1–2× daily",
              "8–12 weeks",
              "Formulation convention; clinical efficacy unestablished",
            ],
            [
              "Higher topical claims",
              "1–2%",
              "1–2× daily",
              "8–12 weeks",
              "Often merges GHK with GHK-Cu",
            ],
            [
              "Intranasal claims",
              "0.1–0.5 mg",
              "1–3× daily",
              "Variable",
              "Insufficient — no human GHK Basic IN trial",
            ],
          ],
        },
      ],
      widget: "ghk-basic-clinical-vs-anecdotal",
    },
    {
      id: "protocol",
      title: "Complete fixed-dose research protocol (proposed pilot)",
      paragraphs: [
        "Supervised, placebo-controlled feasibility concept anchored to the **lower** community range — **not** reproduced from a human trial and **not** a treatment recommendation.",
        "**Material:** copper-free H-Gly-His-Lys-OH at **1 mg free-GHK equivalent** per administration (exclude GHK-Cu, cosmetic stocks, and unlabeled milligram vials). **Schedule:** 5 days weekly × 6 weeks (**30 mg** cumulative), then 4 weeks follow-up. **Escalation:** none. Missed doses are skipped — not doubled.",
      ],
      widget: "ghk-basic-protocol-timeline",
      paragraphsAfter: [
        "If the vial is total pure monoacetate mass, 30 mg free-GHK equivalent ≈ **35.3 mg** monoacetate salt theoretically — use batch assay, not MW ratio alone. First-in-human work would ordinarily require toxicology, formulation, PK, and regulatory review before dose selection.",
      ],
    },
    {
      id: "preclinical",
      title: "Published animal and cell research dosages",
      paragraphs: [
        "Animal copper-free GHK doses span orders of magnitude: single **0.5–50 µg/kg IP** (rat behavior), **1 or 10 mg/kg IP** (ICH rats), pulmonary-fibrosis preparations deriving ~**1.3–130 µg/mouse**, and **7.5 mg/kg BID × 5 days** (aged mice, sleep deprivation — 15 mg/kg/day, 75 mg/kg cumulative).",
        "These answer different experimental questions and primarily use **intraperitoneal** routes — not SC community schedules. This page intentionally omits casual human-equivalent-dose tables that could falsely validate human administration.",
        "For a directly evidence-linked **nonclinical** experiment, Campbell’s **10 nM × 48 h** fibroblast protocol is clearer than an injectable community schedule.",
      ],
    },
    {
      id: "recon",
      title: "Reconstitution and concentration math",
      paragraphs: [
        "Arithmetic references for controlled research preparation — not sterility, stability, diluent suitability, or route justification. U-100 markings are **volume** (1 unit = 0.01 mL).",
        "Common reference: **50 mg → 2.5 mL = 20 mg/mL** → **1 mg = 5 units**, **2 mg = 10 units**. Confirm vial capacity before assuming large final volumes.",
      ],
      widget: "ghk-basic-recon-calc",
      widgetAfter: "ghk-basic-same-units",
    },
    {
      id: "topical",
      title: "Topical GHK Basic concentration math",
      paragraphs: [
        "Copper-free topical conventions are less clinically developed than GHK-Cu cosmetics. Defensible formulation screening often discusses **0.05–0.5%**; **1–2%** claims frequently fail to distinguish GHK from GHK-Cu.",
        "Applied mass matters: 0.1% at 0.25 g delivers 0.25 mg to the skin surface — not how much reaches viable tissue. Hydrophilicity limits passive barrier crossing; copper complexation and vehicles can change permeation.",
      ],
      tables: [
        {
          caption: "Finished product concentration examples",
          headers: ["Concentration", "Peptide per gram", "For 50 g product", "Interpretation"],
          rows: [
            ["0.05%", "0.5 mg/g", "25 mg", "Lower supplier/community convention"],
            ["0.1%", "1 mg/g", "50 mg", "Common formulation reference"],
            ["0.5%", "5 mg/g", "250 mg", "Upper more-defensible copper-free convention"],
            ["1%", "10 mg/g", "500 mg", "Often claimed; clinical superiority unestablished"],
          ],
        },
      ],
    },
    {
      id: "mechanisms",
      title: "Mechanism themes under investigation",
      paragraphs: [
        "Reported actions involve metal coordination, extracellular-matrix remodeling, TGF-β/fibrosis-related signaling (context-dependent), antioxidant/aldehyde-quenching chemistry, and broad gene-expression associations. “Resets thousands of genes” summaries do not establish that a particular injection dose reverses aging.",
        "Intranasal cognitive programs frequently cited online often used **GHK-Cu**, not copper-free GHK Basic.",
      ],
    },
    {
      id: "safety",
      title: "Safety and adverse effects",
      paragraphs: [
        "Without controlled administered-human studies, AE percentages are unknown. Local reactions may reflect formulation/technique as much as the peptide. A rodent immunology program reported dose-dependent immune suppression at high IP mg/kg exposures — not community-dose incidence, but evidence against automatic “endogenous = inert” claims.",
        "GHK Basic adds no copper atom in the vial but can bind metals. Exclude pregnancy/breastfeeding, active/recent cancer or unexplained masses, and copper-metabolism disorders from unsupervised experimentation.",
      ],
      widget: "ghk-basic-adverse-events",
    },
    {
      id: "storage",
      title: "Storage and stability",
      paragraphs: [
        "Use batch-specific stability data. A frequently repeated **28-day** refrigerated window is a handling convention — not demonstrated for every preparation. Blue color in a supposed GHK Basic solution suggests copper complexation or contamination and should be investigated.",
        "Freezing may slow degradation but does not restore sterility. Prefer validated single-dose or aliquot designs over unsupported multiweek reuse.",
      ],
    },
    {
      id: "combinations",
      title: "Combining GHK Basic with other compounds",
      paragraphs: [
        "No controlled human study was identified for GHK Basic with BPC-157, TB-500, GHK-Cu, KPV, GH secretagogues, or injectable vitamins. Same-vial blends should not be assumed compatible. Adding copper intentionally can partially convert apo peptide without guaranteeing a clean 1:1 complex.",
      ],
    },
    {
      id: "claims",
      title: "Common claims vs evidence",
      widget: "ghk-basic-claim-checker",
    },
    {
      id: "evidence-ladder",
      title: "Dosage evidence ladder",
      widget: "ghk-basic-evidence-ladder",
      paragraphsAfter: [
        "GHK Basic dosing is **poorly established**. Report community milligram schedules transparently — do not treat them as clinical dosing.",
      ],
    },
    {
      id: "anti-doping",
      title: "Regulatory and sports status",
      paragraphs: [
        "No standardized FDA-approved dosage or indication exists. Cosmetic Tripeptide-1 use is not an injectable drug approval. GHK is not specifically named on the **2026 WADA** list, but **S0** may apply — obtain a sport-specific determination before exposure.",
      ],
    },
    {
      id: "bottom-line",
      title: "Bottom line",
      paragraphs: [
        "GHK Basic is copper-free Gly-His-Lys — chemically and evidentially distinct from blue GHK-Cu. No administered human dose study establishes a protocol. Direct evidence is mainly **1–10 nM** cell work and endpoint-specific animal schedules.",
        "Community reports most often use **0.5–2 mg** per administration. A complete lower-exposure pilot can fix **1 mg five days weekly for six weeks** (**30 mg** cumulative) plus four weeks observation — improving reproducibility without validating the dose.",
        "For vial math, **50 mg → 2.5 mL = 20 mg/mL** (1 mg = 5 units; 2 mg = 10 units) only if label, salt form, peptide assay, and final volume are known.",
      ],
      highlight:
        "Biggest mistakes: treating GHK Basic, acetate salt mass, and GHK-Cu as the same evidence base — and reporting syringe units without vial amount and final volume.",
    },
  ],
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        question: "Is GHK Basic the same as GHK-Cu?",
        answer:
          "No. GHK Basic is the apo peptide without intentionally pre-complexed copper. GHK-Cu is a copper complex with different mass, color, chemistry, and evidence base.",
      },
      {
        question: "What is the most commonly reported injection amount?",
        answer:
          "Approximately 0.5–2 mg per administration, with 1–2 mg daily or every other day frequently repeated. No human dose-finding study established that range.",
      },
      {
        question: "What is the complete lower-range research protocol?",
        answer:
          "A proposed pilot uses 1 mg free-GHK equivalent five days per week for six weeks (30 administrations, 30 mg cumulative), then four weeks off. It is a formal-study design, not a validated treatment.",
      },
      {
        question: "Has GHK Basic been studied subcutaneously in humans?",
        answer:
          "No controlled subcutaneous human study was identified. Direct animal studies primarily used intraperitoneal administration.",
      },
      {
        question: "How many syringe units is 1 mg from a 50 mg vial?",
        answer:
          "It depends on final volume: 4 units at 2 mL, 5 units at 2.5 mL, 6 units at 3 mL, or 10 units at 5 mL on a U-100 syringe.",
      },
      {
        question: "How much free GHK is in 1 mg of GHK monoacetate?",
        answer:
          "Theoretically about 0.85 mg based on 340.38/400.43 g/mol. Use the batch assay — some labels already report peptide-equivalent content.",
      },
      {
        question: "Is GHK Basic safer than GHK-Cu because it has no copper?",
        answer:
          "That has not been demonstrated. It avoids adding pre-complexed copper but can still interact with endogenous metals; systemic safety data are absent for both forms.",
      },
      {
        question: "What topical concentration is reported?",
        answer:
          "Copper-free formulation guides commonly report about 0.05–0.5%. One-to-two-percent claims often merge GHK with GHK-Cu without direct clinical validation.",
      },
      {
        question: "Is intranasal GHK Basic clinically studied?",
        answer:
          "No human intranasal trial was identified. Cognitive mouse work often cited used GHK-Cu; copper-free sleep-deprivation work used intraperitoneal injections.",
      },
      {
        question: "Does GHK Basic need dose escalation?",
        answer:
          "No evidence-based escalation schedule exists. Tolerance at a lower exposure does not prove a higher amount is needed or effective.",
      },
      {
        question: "Is GHK Basic prohibited in tested sport?",
        answer:
          "It is not specifically named on the 2026 WADA list, but S0 may cover non-approved pharmacologic substances. Obtain a sport-specific determination before use.",
      },
      {
        question: "What is the biggest dosing mistake?",
        answer:
          "Treating GHK Basic, GHK acetate, and GHK-Cu as the same mass and evidence base — and reporting syringe units without vial amount and final volume.",
      },
    ],
  },
  sources: {
    title: "References",
    items: [
      {
        authors: "PubChem",
        title: "Glycyl-L-histidyl-L-lysine (prezatide)",
        detail: "Chemical identity and properties.",
        href: "https://pubchem.ncbi.nlm.nih.gov/compound/Prezatide",
      },
      {
        authors: "Campbell JD et al.",
        title: "Emphysema-related gene signature and reversal by GHK",
        detail: "Genome Medicine 2012 — 10 nM × 48 h fibroblast exposure.",
        href: "https://pubmed.ncbi.nlm.nih.gov/22937864/",
      },
      {
        authors: "Zhou XM et al.",
        title: "GHK inhibits bleomycin-induced pulmonary fibrosis in mice",
        detail: "Frontiers in Pharmacology 2017 — concentration-based IP series.",
        href: "https://pubmed.ncbi.nlm.nih.gov/29311918/",
      },
      {
        authors: "Rosenfeld M et al.",
        title: "GHK prevents sleep-deprived learning impairment in aging mice",
        detail: "2023 — 7.5 mg/kg IP BID × 5 days copper-free GHK.",
        href: "https://pubmed.ncbi.nlm.nih.gov/37035833/",
      },
      {
        authors: "Mortazavi SM et al.",
        title: "Topically applied GHK as an anti-wrinkle peptide",
        detail: "BioImpacts 2024/2025 — clinical and permeability gaps.",
        href: "https://pubmed.ncbi.nlm.nih.gov/39963574/",
      },
      {
        authors: "ClinicalTrials.gov",
        title: "NCT07437586 — topical GHK-Cu gel wound study",
        detail: "GHK-Cu gel — not GHK Basic.",
        href: "https://clinicaltrials.gov/study/NCT07437586",
      },
      {
        authors: "Smakhtin MY et al.",
        title: "Tripeptide Gly-His-Lys is a hepatotropic immunosuppressor",
        detail: "2002 rodent immunology — high mg/kg IP exposures.",
        href: "https://pubmed.ncbi.nlm.nih.gov/12447473/",
      },
      {
        authors: "WADA",
        title: "2026 Prohibited List",
        detail: "Not specifically named; S0 may apply.",
        href: "https://www.wada-ama.org/en/resources/world-anti-doping-program/prohibited-list",
      },
    ],
  },
};
