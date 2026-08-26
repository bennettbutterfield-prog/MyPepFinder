/**
 * KPV + GHK-Cu blend dosage guide (50 mg GHK-Cu + 10 mg KPV).
 * Exact-combination human trial: none identified. Protocols document community conventions.
 */

export const KPV_GHK_CU_VIAL_MG = 60;
export const KPV_GHK_CU_GHK_MG = 50;
export const KPV_GHK_CU_KPV_MG = 10;

/** Stoichiometric copper fraction in representative one-copper GHK-Cu complex (401.9 g/mol) */
export const GHK_CU_COPPER_FRACTION = 0.1581;

export const KPV_GHK_CU_COMPOSITION = [
  {
    id: "ghk-cu",
    name: "GHK-Cu",
    mg: 50,
    pct: 83.33,
    theme: "Copper delivery, extracellular matrix, collagen, wound and repair signaling",
  },
  {
    id: "kpv",
    name: "KPV",
    mg: 10,
    pct: 16.67,
    theme: "NF-kappa-B/MAPK signaling, PepT1 transport, inflammation and epithelial models",
  },
];

/** Mass fractions for authentic 50/10 mg vials (5:1 GHK-Cu:KPV) */
export const KPV_GHK_CU_FRACTIONS = {
  ghkCu: 5 / 6,
  kpv: 1 / 6,
};

export function kpvGhkCuComponentsFromTotalMg(totalMg) {
  const t = Number(totalMg);
  if (!Number.isFinite(t) || t <= 0) return null;
  const ghkCuMg = t * KPV_GHK_CU_FRACTIONS.ghkCu;
  const kpvMcg = t * KPV_GHK_CU_FRACTIONS.kpv * 1000;
  const copperMcg = ghkCuMg * GHK_CU_COPPER_FRACTION * 1000;
  return { totalMg: t, ghkCuMg, kpvMcg, copperMcg };
}

/**
 * Calculate draw volume, U-100 units, and component split from a reconstituted vial.
 * Assumes reference 50/10 mg composition unless overridden.
 */
export function kpvGhkCuAmountFromVial({
  vialTotalMg = KPV_GHK_CU_VIAL_MG,
  ghkMg = KPV_GHK_CU_GHK_MG,
  kpvMg = KPV_GHK_CU_KPV_MG,
  diluentMl,
  targetTotalMg,
  targetGhkCuMg,
  targetKpvMcg,
} = {}) {
  const d = Number(diluentMl);
  if (!Number.isFinite(d) || d <= 0) return null;

  let target = Number(targetTotalMg);
  if (!Number.isFinite(target) || target <= 0) {
    const ghk = Number(targetGhkCuMg);
    const kpv = Number(targetKpvMcg);
    if (Number.isFinite(ghk) && ghk > 0) {
      target = ghk / (ghkMg / vialTotalMg);
    } else if (Number.isFinite(kpv) && kpv > 0) {
      target = (kpv / 1000) / (kpvMg / vialTotalMg);
    } else {
      return null;
    }
  }

  const concMgPerMl = vialTotalMg / d;
  const kpvConcMgPerMl = kpvMg / d;
  const volumeMl = target / concMgPerMl;
  const units = volumeMl / 0.01;
  const parts = kpvGhkCuComponentsFromTotalMg(target);

  return {
    vialTotalMg,
    diluentMl: d,
    concMgPerMl,
    kpvConcMgPerMl,
    targetTotalMg: target,
    volumeMl,
    units,
    parts,
    exceedsFreeBaseSolubility: kpvConcMgPerMl > 0.7,
    exceedsAcetateSolubility: kpvConcMgPerMl > 5,
  };
}

export const KPV_GHK_CU_IDENTITY = [
  {
    id: "correct-ratio",
    label: "Confirmed 50 mg GHK-Cu + 10 mg KPV (60 mg total)",
    verdict: "Matches the reference 5:1 mass ratio",
    detail:
      "Every 1.2 mg total blend contains 1 mg GHK-Cu and 200 mcg KPV. Unit charts for this vial assume 83.33% GHK-Cu and 16.67% KPV by labeled mass.",
  },
  {
    id: "wrong-ratio",
    label: "Label shows different component amounts or ratio",
    verdict: "Different vial — recalculate all draws",
    detail:
      "Some sellers offer different strengths. A label that says only “KPV/GHK-Cu 60 mg” without per-component amounts is incomplete. Do not reuse a 50/10 unit chart.",
  },
  {
    id: "ghk-no-cu",
    label: "GHK powder without copper complex",
    verdict: "Different ingredient — not interchangeable with GHK-Cu",
    detail:
      "GHK is the copper-free Gly-His-Lys ligand. GHK-Cu is the blue or blue-violet copper complex. White GHK and blue GHK-Cu should not share dosing tables.",
  },
  {
    id: "klow-confusion",
    label: "Confused with KLOW blend",
    verdict: "Different product — KLOW adds BPC-157 and TB-500",
    detail:
      "Standard KLOW is 80 mg: 50 mg GHK-Cu + 10 mg each of KPV, BPC-157, and TB-500. The GHK-Cu:KPV 5:1 relationship may match, but total mass and additional exposures differ.",
  },
  {
    id: "kpv-form-unknown",
    label: "KPV form (free base vs acetate) unknown",
    verdict: "Solubility math may be invalid",
    detail:
      "FDA reported ~0.7 mg/mL water solubility for KPV free base and ~5 mg/mL for KPV acetate. A 50/10 mg vial at 3 mL yields 3.33 mg/mL KPV — above free-base but below acetate figures.",
  },
  {
    id: "unsure",
    label: "Only a trade name or total milligrams listed",
    verdict: "Incomplete — confirm both sequences and amounts",
    detail:
      "Intact-mass spectrometry, sequence mapping, quantitative component assay, copper-to-GHK ratio, and counterion testing should establish identity before interpreting any protocol.",
  },
];

export const KPV_GHK_CU_COMBO_STATUS = [
  ["Human single-dose study", "None identified"],
  ["Human repeated-dose study", "None identified"],
  ["Animal combination study", "None identified"],
  ["Subcutaneous pharmacokinetics", "None identified"],
  ["Component interaction study", "None identified"],
  ["Ratio comparison", "None identified"],
  ["Dose-response study", "None identified"],
  ["Maximum tolerated dose", "Not established"],
  ["Long-term safety", "Not established"],
  ["Controlled efficacy study", "None identified"],
];

export const KPV_GHK_CU_PROTOCOL_PHASES = [
  {
    id: "tolerance",
    phase: "Tolerance",
    weeks: "1–2",
    schedule: "9 units (3 mL recon), five days weekly",
    ghkCuMg: 1.5,
    kpvMcg: 300,
    totalMg: 1.8,
    units: 9,
    phaseTotalMg: 18,
    purpose: "Entry point of documented 12-week escalation — one traceable product guide",
  },
  {
    id: "early-build",
    phase: "Early build",
    weeks: "3–4",
    schedule: "10.5 units (3 mL recon), five days weekly",
    ghkCuMg: 1.75,
    kpvMcg: 350,
    totalMg: 2.1,
    units: 10.5,
    phaseTotalMg: 21,
    purpose: "Gradual increase — not PK-guided",
  },
  {
    id: "mid-range",
    phase: "Mid-range",
    weeks: "5–6",
    schedule: "12 units (3 mL recon), five days weekly",
    ghkCuMg: 2,
    kpvMcg: 400,
    totalMg: 2.4,
    units: 12,
    phaseTotalMg: 24,
    purpose: "Midpoint of documented 1.8–3 mg range",
  },
  {
    id: "upper-build",
    phase: "Upper build",
    weeks: "7–8",
    schedule: "13.5 units (3 mL recon), five days weekly",
    ghkCuMg: 2.25,
    kpvMcg: 450,
    totalMg: 2.7,
    units: 13.5,
    phaseTotalMg: 27,
    purpose: "Approaching upper community range",
  },
  {
    id: "upper-phase",
    phase: "Upper phase",
    weeks: "9–12",
    schedule: "15 units (3 mL recon), five days weekly",
    ghkCuMg: 2.5,
    kpvMcg: 500,
    totalMg: 3,
    units: 15,
    phaseTotalMg: 60,
    purpose: "Upper documented point: 2.5 mg GHK-Cu + 500 mcg KPV",
  },
  {
    id: "washout",
    phase: "Observation / washout",
    weeks: "13–16 or 13–20",
    schedule: "None",
    ghkCuMg: 0,
    kpvMcg: 0,
    totalMg: 0,
    units: 0,
    phaseTotalMg: 0,
    purpose: "Observe persistence, rebound, or delayed adverse events",
  },
];

export const KPV_GHK_CU_CUMULATIVE = [
  {
    phase: "Weeks 1–2",
    ghkCu: "15 mg",
    kpv: "3 mg",
    totalBlend: "18 mg",
    copper: "2.37 mg",
  },
  {
    phase: "Weeks 3–4",
    ghkCu: "17.5 mg",
    kpv: "3.5 mg",
    totalBlend: "21 mg",
    copper: "2.77 mg",
  },
  {
    phase: "Weeks 5–6",
    ghkCu: "20 mg",
    kpv: "4 mg",
    totalBlend: "24 mg",
    copper: "3.16 mg",
  },
  {
    phase: "Weeks 7–8",
    ghkCu: "22.5 mg",
    kpv: "4.5 mg",
    totalBlend: "27 mg",
    copper: "3.56 mg",
  },
  {
    phase: "Weeks 9–12",
    ghkCu: "50 mg",
    kpv: "10 mg",
    totalBlend: "60 mg",
    copper: "7.91 mg",
  },
  {
    phase: "**Full 12-week cycle**",
    ghkCu: "**125 mg**",
    kpv: "**25 mg**",
    totalBlend: "**150 mg**",
    copper: "**19.76 mg**",
  },
];

export const KPV_GHK_CU_COMPARE = {
  clinical: {
    title: "Exact KPV + GHK-Cu clinical research",
    status: "None established",
    rows: [
      ["Exact combination", "Not studied"],
      ["Dose", "No exact-blend human dose"],
      ["Frequency", "No exact-blend human schedule"],
      ["Route", "Topical GHK-Cu studies; no administered KPV study"],
      ["Duration", "Topical GHK-Cu often 8–12 weeks"],
      ["Pharmacokinetics", "No combination PK"],
      ["Safety", "Limited topical GHK-Cu; no KPV human exposure"],
    ],
  },
  anecdotal: {
    title: "Community KPV + GHK-Cu protocols",
    status: "One traceable convention",
    rows: [
      ["Exact combination", "50/10 mg premixed vial"],
      ["Dose", "1.8–3 mg total blend (1.5–2.5 mg GHK-Cu + 300–500 mcg KPV)"],
      ["Frequency", "Five days on, two days off"],
      ["Route", "Subcutaneous"],
      ["Duration", "Usually 8–12 weeks"],
      ["Escalation", "1.5/300 → 2.5/500 over 12 weeks"],
      ["Safety", "Uncontrolled reports and product-guide cautions"],
    ],
  },
};

export const KPV_GHK_CU_EVIDENCE_LADDER = [
  {
    level: "Standardized prescribing dose",
    exists: "None",
    confidence: "None",
  },
  {
    level: "Exact-blend human trial dose",
    exists: "None identified",
    confidence: "None",
  },
  {
    level: "KPV human trial dose",
    exists: "None identified",
    confidence: "None",
  },
  {
    level: "GHK-Cu human topical exposure",
    exists: "Limited controlled and observational research",
    confidence: "Low–moderate for topical skin; not transferable to blend",
  },
  {
    level: "GHK-Cu human injectable dose",
    exists: "None identified",
    confidence: "None",
  },
  {
    level: "Exact 1.8–3 mg blend range",
    exists: "Anecdotal/commercial protocol",
    confidence: "Low",
  },
  {
    level: "Five-days-on/two-days-off schedule",
    exists: "Community convention",
    confidence: "Low",
  },
  {
    level: "Eight-to-twelve-week cycle",
    exists: "Community convention partly borrowed from topical GHK-Cu",
    confidence: "Low",
  },
  {
    level: "Component preclinical doses",
    exists: "Published animal and laboratory evidence",
    confidence: "Moderate for mechanisms; not transferable to blend",
  },
  {
    level: "Long-term or repeat-cycle exposure",
    exists: "Insufficient evidence",
    confidence: "None",
  },
];

export const KPV_GHK_CU_AE_SIMPLE = [
  {
    topic: "Exact-combination AE rates",
    status: "Unknown",
    note: "No blend safety trial denominator",
  },
  {
    topic: "Injection-site reactions",
    status: "Unquantified",
    note: "GHK-Cu SC reports mention stinging, redness, swelling",
  },
  {
    topic: "Copper exposure",
    status: "Context-dependent",
    note: "~19.8 mg stoichiometric Cu in full 12-week cycle",
  },
  {
    topic: "Fixed-ratio attribution",
    status: "Limited control",
    note: "Cannot change KPV without changing GHK-Cu and copper",
  },
];

export const KPV_GHK_CU_AE_FULL = [
  {
    topic: "Exact-combination AE rates",
    status: "Unknown",
    note: "No blend trial",
    context:
      "Community reports mention injection-site pain, redness, swelling, rash, headache, dizziness, nausea, and fatigue — frequency and causality unknown.",
  },
  {
    topic: "Copper-related risk",
    status: "Assay-dependent",
    note: "Elemental copper from GHK-Cu complex",
    context:
      "Extra caution in Wilson disease, copper-metabolism disorders, significant liver disease, or with other copper products. No human study measured copper distribution after repeated SC GHK-Cu.",
  },
  {
    topic: "Immune / inflammatory effects",
    status: "Mechanism concern",
    note: "Both peptides alter inflammatory pathways",
    context:
      "Consequences in autoimmune disease, active infection, or concurrent immunosuppressive therapy are unknown.",
  },
  {
    topic: "Angiogenesis / abnormal growth",
    status: "Class concern",
    note: "GHK-Cu repair and angiogenic signaling",
    context:
      "Active or recent malignancy is commonly treated as an exclusion; exact blend risk unquantified.",
  },
  {
    topic: "Product and formulation risk",
    status: "Elevated for two-component vial",
    note: "Identity, ratio, free copper, solubility, sterility",
    context:
      "FDA notes limited human data for injectable GHK-Cu and no identified human exposure data for KPV. Mixed-vial stability requires validation.",
  },
  {
    topic: "Fixed-ratio limitations",
    status: "Experimental-control tradeoff",
    note: "Convenience vs attribution",
    context:
      "Reducing the draw lowers both peptides and copper simultaneously. Cause identification after an adverse effect is difficult.",
  },
];

export const KPV_GHK_CU_CLAIMS = [
  {
    id: "klow-same",
    claim: "KPV + GHK-Cu is the same as KLOW",
    status: "False",
    detail:
      "KLOW adds 10 mg BPC-157 and 10 mg TB-500 to the same GHK-Cu:KPV 5:1 relationship. An 80 mg KLOW vial delivers four peptides at 5:1:1:1 — different total exposure, WADA status, and attribution complexity.",
  },
  {
    id: "escalation-required",
    claim: "The blend requires dose escalation to work",
    status: "Not demonstrated",
    detail:
      "The 1.5/300 → 2.5/500 schedule is a community titration convention, not a human dose-response curve. Fixed-dose designs may be easier to interpret scientifically.",
  },
  {
    id: "topical-validates-sc",
    claim: "Topical GHK-Cu studies validate subcutaneous injection of the blend",
    status: "Not supported",
    detail:
      "Topical exposure, systemic injection, and a two-peptide premixed vial have different pharmacokinetics, concentrations, and safety profiles. KPV has no human administration study by any route.",
  },
  {
    id: "ratio-pharmacologic",
    claim: "The 5:1 mass ratio is pharmacologically optimized",
    status: "Not demonstrated",
    detail:
      "The ratio likely aligns existing GHK-Cu (1–2 mg) and KPV (200–500 mcg) community ranges by arithmetic, not receptor biology or PK. Molar ratio is ~4.26:1 (free base) or ~5.01:1 (acetate salt).",
  },
  {
    id: "free-base-3ml",
    claim: "KPV free base dissolves fine at 3 mL reconstitution",
    status: "Not guaranteed",
    detail:
      "3 mL creates 3.33 mg/mL KPV — above FDA-reported 0.7 mg/mL free-base water solubility. A clear blue solution does not prove full KPV dissolution or mixed-vial stability.",
  },
  {
    id: "weight-based",
    claim: "The blend must be dosed by body weight",
    status: "Not established",
    detail:
      "Community protocols use fixed milligram and microgram amounts. No human weight-based algorithm has been validated for either component or the combination.",
  },
  {
    id: "synergy-proven",
    claim: "Combining KPV and GHK-Cu produces proven synergy",
    status: "Not demonstrated",
    detail:
      "No published evidence shows additive or synergistic benefit from the two peptides together. No study validates the fixed ratio, frequency, or cycle length.",
  },
];

export const KPV_GHK_CU_DOSAGE_GUIDE = {
  title: "KPV + GHK-Cu Dosage: 60 mg Blend Protocol and Reconstitution",
  updated: "Updated August 2026",
  callout:
    "**Research note:** KPV + GHK-Cu is a **fixed-ratio blend**, not a clinically studied combination. The most traceable 60 mg protocol is a commercial/community convention built around **50 mg GHK-Cu and 10 mg KPV**. It has **not** been validated in a controlled human trial.",
  intro: [
    "The reference vial contains **50 mg GHK-Cu + 10 mg KPV = 60 mg total** at a fixed **5:1** mass ratio (≈83.33% / 16.67%). **GHK-Cu = total × 5/6; KPV = total × 1/6.** Every **1.2 mg** total = **1 mg GHK-Cu + 200 mcg KPV**.",
    "The most traceable community range is **1.5–2.5 mg GHK-Cu + 300–500 mcg KPV** (= **1.8–3 mg** total blend), once daily, **five days on / two off**, for **8–12 weeks**. The complete 12-week escalation uses **150 mg total blend** (125 mg GHK-Cu + 25 mg KPV) — **2.5 reference vials → plan on three vials**.",
    "**No exact-combination human or animal study** was identified. Human GHK-Cu evidence is primarily **topical**; isolated KPV has **no published human administration study**. This blend is **≠ KLOW** (which adds BPC-157 and TB-500).",
  ],
  glance: {
    title: "KPV + GHK-Cu dosage in 30 seconds",
    table: {
      headers: ["Question", "Research summary"],
      rows: [
        ["**Common reference vial**", "50 mg GHK-Cu + 10 mg KPV = 60 mg total"],
        ["**Fixed mass ratio**", "5:1 GHK-Cu:KPV"],
        [
          "**Most traceable reported range**",
          "GHK-Cu 1.5–2.5 mg + KPV 300–500 mcg per administration",
        ],
        ["**Total blend equivalent**", "1.8–3 mg per administration"],
        ["**Reported frequency**", "Once daily, five days on and two days off"],
        ["**Reported duration**", "8–12 weeks"],
        ["**Exact-combination human study**", "None identified"],
        ["**Human injectable study for either component**", "None identified"],
        ["**Strongest human evidence**", "Topical GHK-Cu skin and wound research"],
        ["**Evidence quality for the blend**", "Anecdotal/community protocol"],
      ],
    },
  },
  sections: [
    {
      id: "what-is",
      title: "What is the KPV + GHK-Cu blend?",
      paragraphs: [
        "**KPV** is lysine–proline–valine, the C-terminal residues 11–13 of alpha-melanocyte-stimulating hormone. Preclinical research focuses on inflammatory signaling, PepT1-mediated transport, epithelial biology, and intestinal inflammation models.",
        "**GHK-Cu** is the copper(II) complex of glycyl-L-histidyl-L-lysine. Cell, animal, and limited human topical research focuses on copper transport, extracellular-matrix remodeling, collagen, fibroblasts, inflammatory signaling, and wound biology.",
        "The combination places a copper-associated matrix-signaling peptide and an alpha-MSH-derived inflammatory-signaling peptide into the same fixed exposure. That is a **research hypothesis** — not evidence of synergy.",
      ],
      widget: "kpv-ghk-cu-composition",
    },
    {
      id: "composition",
      title: "Common 60 mg composition",
      paragraphs: [
        "This **50/10 mg** configuration is commercially documented, but it is not a pharmacologically standardized ratio. Some sellers offer different strengths. A label that says only “KPV/GHK-Cu 60 mg” is incomplete unless it states the amount of each component.",
        "A **5:1 mass ratio is not necessarily a 5:1 molar ratio.** Using approximate molecular masses, the GHK-Cu:KPV molar ratio is approximately **4.26:1** if KPV is free-base mass, or **5.01:1** if KPV is total 1:1 acetate-salt mass.",
      ],
      tables: [
        {
          caption: "60 mg reference vial",
          headers: [
            "Component",
            "Amount",
            "Share of total mass",
            "Main research theme",
          ],
          rows: [
            [
              "**GHK-Cu**",
              "50 mg",
              "83.33%",
              "Copper delivery, ECM, collagen, wound and repair signaling",
            ],
            [
              "**KPV**",
              "10 mg",
              "16.67%",
              "NF-kappa-B/MAPK signaling, PepT1 transport, inflammation models",
            ],
            ["**Total**", "**60 mg**", "**100%**", "Fixed two-tripeptide blend"],
          ],
        },
        {
          caption: "Approximate molar amounts in reference vial",
          headers: ["Labeled material", "Approximate amount of substance"],
          rows: [
            ["50 mg GHK-Cu", "124.4 micromoles"],
            ["10 mg KPV free base", "29.2 micromoles"],
            ["10 mg KPV acetate (total salt mass)", "24.8 micromoles"],
          ],
        },
      ],
    },
    {
      id: "identity",
      title: "Identity and label checks",
      paragraphs: [
        "**KPV free base versus KPV acetate** are distinct materials. FDA's 2026 chemistry review reported ~0.7 mg/mL water solubility for free base and ~5 mg/mL for acetate. Labels must clarify whether milligrams mean active peptide, salt, or total solids.",
        "**GHK versus GHK-Cu:** GHK is the copper-free ligand; GHK-Cu is the copper complex. For a representative 401.9 g/mol one-copper complex, copper contributes approximately **15.81%** of complex mass (~158 mcg Cu per 1 mg GHK-Cu).",
      ],
      widget: "kpv-ghk-cu-identity-gate",
      tables: [
        {
          caption: "Quality specifications for a two-component vial",
          headers: ["Test", "What it should establish"],
          rows: [
            ["Intact-mass spectrometry", "Correct molecular species for both peptides"],
            ["Sequence mapping", "KPV is Lys-Pro-Val; ligand is Gly-His-Lys"],
            ["Quantitative component assay", "Actual amount of each peptide"],
            ["Copper-to-GHK ratio", "Intended copper complex present"],
            ["Free-copper assay", "Unbound copper that may behave differently"],
            ["Mixed-vial stability", "Both components retain identity and potency together"],
          ],
        },
      ],
    },
    {
      id: "regulatory",
      title: "Current research and compounding status",
      paragraphs: [
        "There is no prescribing information or standardized drug dosage for the KPV + GHK-Cu blend. In July 2026, an FDA advisory committee recommended KPV free base and KPV acetate for the section 503A bulks list — advisory only, and **not** an evaluation of this combination. Non-injectable GHK-Cu remains separately under evaluation.",
      ],
      highlight: "Available 60 mg schedules are community conventions — not approved prescribing protocols.",
    },
    {
      id: "exact-combo",
      title: "Has the exact KPV + GHK-Cu blend been studied?",
      paragraphs: [
        "No controlled human or animal study of the exact **50 mg GHK-Cu + 10 mg KPV** blend was identified through August 2026. A 2025 tripeptide review discusses KPV and GHK-Cu within wound and skin research, but reviews separate molecule-specific evidence rather than testing this premixed product.",
      ],
      widget: "kpv-ghk-cu-combo-status",
    },
    {
      id: "component-human",
      title: "Dosage used in human clinical research",
      paragraphs: [
        "**Exact combination:** No human dose has been studied for the KPV + GHK-Cu combination.",
        "**KPV:** FDA's 2026 review did not identify a study in which isolated KPV was administered to people by any route.",
        "**GHK-Cu:** Human research is concentrated in topical formulations — diabetic neuropathic-ulcer trial, facial/eye-area studies, and CO₂-laser resurfacing (mixed results). No controlled human study of subcutaneous GHK-Cu dosing was identified.",
      ],
      tables: [
        {
          caption: "Human research vs relevance to the blend",
          headers: [
            "Human research",
            "Route and schedule",
            "Main finding",
            "Relevance to blend",
          ],
          rows: [
            [
              "Diabetic neuropathic-ulcer trial",
              "Topical GHK-Cu gel",
              "Greater median closure than vehicle",
              "Topical product — not SC injection or KPV blend",
            ],
            [
              "Facial and eye-area studies",
              "Topical creams, 8–12 weeks",
              "Selected skin-density improvements",
              "Concentrations often incompletely reported",
            ],
            [
              "CO₂-laser resurfacing study",
              "Topical copper-tripeptide products",
              "No significant improvement in several outcomes",
              "Results not uniformly positive",
            ],
            [
              "Microneedle permeation experiment",
              "Ex-vivo skin",
              "Increased GHK-Cu transport",
              "Delivery study — not clinical dosing",
            ],
          ],
        },
      ],
    },
    {
      id: "research-dosage",
      title: "KPV + GHK-Cu research dosage",
      paragraphs: [
        "The most specific traceable range is **1.5–2.5 mg GHK-Cu + 300–500 mcg KPV** per administration (= **1.8–3 mg** total), once daily, **five days weekly**, for **8–12 weeks**. The detailed escalation can be traced to **one contemporary 60 mg product guide** — treat as **one documented convention**, not consensus.",
      ],
      tables: [
        {
          caption: "Commonly reported research protocols (anecdotal)",
          headers: [
            "Research protocol",
            "GHK-Cu",
            "KPV",
            "Total blend",
            "Frequency",
            "Duration",
            "Evidence basis",
          ],
          rows: [
            [
              "Low point",
              "1.5 mg",
              "300 mcg",
              "1.8 mg",
              "5× weekly",
              "8–12 weeks",
              "Commercial/community protocol",
            ],
            [
              "Midpoint",
              "2 mg",
              "400 mcg",
              "2.4 mg",
              "5× weekly",
              "8–12 weeks",
              "Calculated midpoint",
            ],
            [
              "Upper point",
              "2.5 mg",
              "500 mcg",
              "3 mg",
              "5× weekly",
              "8–12 weeks",
              "Commercial/community protocol",
            ],
            [
              "12-week escalation",
              "1.5/300 → 2.5/500",
              "Fixed 5:1",
              "1.8 → 3 mg",
              "5 on / 2 off",
              "12 weeks",
              "One traceable product guide",
            ],
          ],
        },
        {
          caption: "Per-component breakdown (fixed 5:1 ratio)",
          headers: [
            "Total blend",
            "GHK-Cu",
            "KPV",
            "Approx. elemental copper",
          ],
          rows: [
            ["1.2 mg", "1 mg", "200 mcg", "158 mcg"],
            ["1.8 mg", "1.5 mg", "300 mcg", "237 mcg"],
            ["2.1 mg", "1.75 mg", "350 mcg", "277 mcg"],
            ["2.4 mg", "2 mg", "400 mcg", "316 mcg"],
            ["2.7 mg", "2.25 mg", "450 mcg", "356 mcg"],
            ["3 mg", "2.5 mg", "500 mcg", "395 mcg"],
          ],
        },
      ],
      widgetAfter: "kpv-ghk-cu-component-breakdown",
    },
    {
      id: "complete-protocol",
      title: "Complete reported 12-week KPV + GHK-Cu research protocol",
      paragraphs: [
        "The following schedule reproduces the most specific traceable 60 mg protocol. It assumes a **50/10 mg vial prepared to 3 mL** (20 mg/mL total). One U-100 unit = 0.01 mL = **200 mcg total blend** (≈166.7 mcg GHK-Cu + 33.3 mcg KPV).",
        "This is an **anecdotally reported research escalation**, not a human clinical protocol. Escalation should occur only if predefined tolerability criteria are met. Because the vial is fixed at 5:1, reducing the draw lowers both components simultaneously.",
      ],
      widget: "kpv-ghk-cu-protocol-timeline",
      tables: [
        {
          caption: "Anecdotally reported research escalation (3 mL recon)",
          headers: [
            "Phase",
            "Weeks",
            "GHK-Cu",
            "KPV",
            "Total",
            "U-100 draw",
            "Phase total",
          ],
          rows: [
            ["Tolerance", "1–2", "1.5 mg", "300 mcg", "1.8 mg", "9 units", "18 mg"],
            ["Early build", "3–4", "1.75 mg", "350 mcg", "2.1 mg", "10.5 units", "21 mg"],
            ["Mid-range", "5–6", "2 mg", "400 mcg", "2.4 mg", "12 units", "24 mg"],
            ["Upper build", "7–8", "2.25 mg", "450 mcg", "2.7 mg", "13.5 units", "27 mg"],
            ["Upper phase", "9–12", "2.5 mg", "500 mcg", "3 mg", "15 units", "60 mg"],
            ["Washout", "13–16/20", "None", "None", "—", "—", "—"],
          ],
        },
        {
          caption: "Measurement schedule (research design)",
          headers: ["Time point", "Measurements"],
          rows: [
            [
              "Baseline",
              "Primary endpoint, photos, vitals, copper supplements, batch analytics",
            ],
            ["Day 1–3", "Acute tolerability and injection-site findings"],
            ["End of week 2", "Outcome and safety review before first increase"],
            ["End of week 4", "Repeat objective measures before 2 mg/400 mcg phase"],
            ["End of week 8", "Full reassessment before upper phase"],
            ["End of week 12", "Final on-cycle endpoint"],
            ["4–8 weeks after", "Persistence, rebound, delayed adverse events"],
          ],
        },
      ],
      notes: [
        "**Hold/stop examples:** persistent injection-site reaction; allergic symptoms; abnormal copper, liver, or kidney findings; product instability (cloudiness, particulates); worsening target condition. Urgent symptoms require medical evaluation — not dose adjustment.",
        "**Vial inventory:** 150 mg nominal cycle = 2.5 reference vials → **three 60 mg vials** before handling loss. At 3 mg five times weekly, one vial provides ~20 administrations (~4 weeks).",
      ],
    },
    {
      id: "fixed-variations",
      title: "Fixed-dose research variations",
      paragraphs: [
        "Fixed exposures are easier to interpret than changing doses. The following are mathematical simplifications of the documented 1.8–3 mg range — **not independently validated protocols**.",
      ],
      tables: [
        {
          caption: "Fixed designs (5× weekly, 8 weeks)",
          headers: [
            "Fixed design",
            "Per administration",
            "GHK-Cu total",
            "KPV total",
            "Total blend",
          ],
          rows: [
            [
              "Lower fixed point",
              "1.5 mg + 300 mcg",
              "60 mg",
              "12 mg",
              "72 mg",
            ],
            ["Midpoint", "2 mg + 400 mcg", "80 mg", "16 mg", "96 mg"],
            [
              "Upper fixed point",
              "2.5 mg + 500 mcg",
              "100 mg",
              "20 mg",
              "120 mg",
            ],
          ],
        },
      ],
    },
    {
      id: "reconstitution",
      title: "Reconstitution and concentration math",
      paragraphs: [
        "These tables are **calculation references**, not validated formulation recipes. For the 50/10 mg reference vial: **Units for total amount D = 100 × V × D ÷ (G + K)** where G = GHK-Cu mg, K = KPV mg, V = diluent mL.",
        "**Solubility can invalidate correct arithmetic.** KPV concentration in a 50/10 mg blend: **5 mg/mL at 2 mL**, **3.33 mg/mL at 3 mL**, **2.5 mg/mL at 4 mL** — compare against FDA-reported free-base (~0.7 mg/mL) and acetate (~5 mg/mL) solubility.",
      ],
      widget: "kpv-ghk-cu-recon-calc",
      tables: [
        {
          caption: "2 mL reconstitution (30 mg/mL total; 300 mcg blend per unit)",
          headers: [
            "Target total",
            "GHK-Cu",
            "KPV",
            "Volume",
            "U-100 units",
          ],
          rows: [
            ["1.8 mg", "1.5 mg", "300 mcg", "0.06 mL", "6 units"],
            ["2.1 mg", "1.75 mg", "350 mcg", "0.07 mL", "7 units"],
            ["2.4 mg", "2 mg", "400 mcg", "0.08 mL", "8 units"],
            ["2.7 mg", "2.25 mg", "450 mcg", "0.09 mL", "9 units"],
            ["3 mg", "2.5 mg", "500 mcg", "0.10 mL", "10 units"],
          ],
        },
        {
          caption: "3 mL reconstitution (20 mg/mL total; 200 mcg blend per unit)",
          headers: [
            "Target total",
            "GHK-Cu",
            "KPV",
            "Volume",
            "U-100 units",
          ],
          rows: [
            ["1.8 mg", "1.5 mg", "300 mcg", "0.09 mL", "9 units"],
            ["2.1 mg", "1.75 mg", "350 mcg", "0.105 mL", "10.5 units"],
            ["2.4 mg", "2 mg", "400 mcg", "0.12 mL", "12 units"],
            ["2.7 mg", "2.25 mg", "450 mcg", "0.135 mL", "13.5 units"],
            ["3 mg", "2.5 mg", "500 mcg", "0.15 mL", "15 units"],
          ],
        },
        {
          caption: "4 mL reconstitution (15 mg/mL total; 150 mcg blend per unit)",
          headers: [
            "Target total",
            "GHK-Cu",
            "KPV",
            "Volume",
            "U-100 units",
          ],
          rows: [
            ["1.8 mg", "1.5 mg", "300 mcg", "0.12 mL", "12 units"],
            ["2.1 mg", "1.75 mg", "350 mcg", "0.14 mL", "14 units"],
            ["2.4 mg", "2 mg", "400 mcg", "0.16 mL", "16 units"],
            ["2.7 mg", "2.25 mg", "450 mcg", "0.18 mL", "18 units"],
            ["3 mg", "2.5 mg", "500 mcg", "0.20 mL", "20 units"],
          ],
        },
      ],
    },
    {
      id: "reported-range",
      title: "Reported KPV + GHK-Cu dosage range",
      tables: [
        {
          caption: "Online protocol landscape",
          headers: ["Field", "Reported information"],
          rows: [
            ["Reference composition", "50 mg GHK-Cu + 10 mg KPV"],
            ["Reported GHK-Cu range", "1.5–2.5 mg per administration"],
            ["Corresponding KPV range", "300–500 mcg per administration"],
            ["Total blend range", "1.8–3 mg per administration"],
            ["Reported frequency", "Once daily, five days weekly"],
            ["Reported cycle", "8–12 weeks"],
            ["Weight-based protocol", "None established"],
            ["Human trial overlap", "KPV: none; GHK-Cu: topical route only"],
            ["Evidence quality", "Low; one traceable protocol source"],
          ],
        },
      ],
    },
    {
      id: "clinical-vs-anecdotal",
      title: "Anecdotal versus clinically studied dosing",
      widget: "kpv-ghk-cu-clinical-vs-anecdotal",
    },
    {
      id: "preclinical",
      title: "Preclinical research dosage",
      paragraphs: [
        "**Animal and laboratory research only.** No exact-combination animal dose was identified. Component-specific exposures should not be converted into a human blend dose.",
      ],
      tables: [
        {
          caption: "Selected component preclinical exposures",
          headers: [
            "Molecule",
            "Model",
            "Dose or concentration",
            "Route",
            "Outcome",
          ],
          rows: [
            [
              "KPV",
              "Mouse DSS colitis",
              "100 µM drinking water × 8 days",
              "Oral",
              "Weight, histology, MPO",
            ],
            [
              "KPV",
              "Mouse DSS colitis",
              "10 mcg/mouse IP daily",
              "IP",
              "Inflammatory endpoints",
            ],
            [
              "KPV",
              "Rabbit corneal abrasion",
              "1–10 mg/mL topical drops",
              "Topical",
              "Re-epithelialization",
            ],
            [
              "GHK-Cu",
              "Mouse bleomycin fibrosis",
              "0.2–20 mcg/g IP alternate days",
              "IP",
              "Collagen, inflammation",
            ],
            [
              "GHK-Cu",
              "Mouse LPS lung injury",
              "1–10 mcg/g IP daily",
              "IP",
              "Lung injury, oxidative stress",
            ],
            ["Exact blend", "Any model", "None identified", "None", "No ratio study"],
          ],
        },
      ],
      paragraphsAfter: [
        "Models differ in species, disease, route, timing, and endpoint. Body-surface-area conversion cannot transform them into an evidence-based 5:1 subcutaneous human protocol.",
      ],
    },
    {
      id: "why-these-doses",
      title: "Why these reported doses are used",
      numbered: [
        "**5:1 ratio alignment** — The 50/10 mg vial pairs every 1 mg GHK-Cu with 200 mcg KPV. GHK-Cu community injection pages often report 1–2 mg; KPV pages report 200–500 mcg. This arithmetic alignment likely explains the ratio better than receptor biology.",
        "**Five-days-on/two-days-off** — Often described as a tolerability feature. No human study showed this pattern prevents desensitization or changes copper handling.",
        "**Eight-to-twelve-week duration** — Topical GHK-Cu studies often ran 8–12 weeks; community injection schedules appear to borrow that window. KPV has no human duration study.",
        "**Gradual escalation** — Creates distinct observation phases but cannot identify component-specific dose-response because both peptides increase together.",
      ],
    },
    {
      id: "mechanism",
      title: "How the blend may work",
      paragraphs: [
        "**KPV** reduced NF-kappa-B and MAP-kinase signaling in selected intestinal epithelial systems. PepT1 can transport the tripeptide in intestinal models. Human subcutaneous PK remains unknown.",
        "**GHK-Cu** is studied as a copper carrier and signaling complex affecting collagen, elastin, metalloproteinases, fibroblast activity, antioxidant pathways, and repair-cell recruitment.",
        "The blend is commonly framed as pairing inflammatory control with matrix remodeling — a mechanistic hypothesis assembled from separate literatures. It does not show the two molecules reach the same tissue, remain intact for the same duration, or outperform either alone.",
      ],
    },
    {
      id: "routes",
      title: "Route variations",
      tables: [
        {
          caption: "Route evidence for the exact blend",
          headers: ["Route", "Evidence", "Main limitation"],
          rows: [
            [
              "Subcutaneous",
              "Community protocol only",
              "No human PK, efficacy, or controlled safety study",
            ],
            [
              "Topical",
              "No validated exact-combination formulation",
              "Human evidence for topical GHK-Cu; KPV penetration unresolved",
            ],
            [
              "Oral",
              "No exact-blend human study",
              "KPV has preclinical intestinal rationale; different experiment",
            ],
            [
              "Microneedle-assisted",
              "No exact-blend clinical study",
              "Barrier disruption changes exposure and irritation risk",
            ],
          ],
        },
      ],
    },
    {
      id: "claims",
      title: "Common claims vs evidence",
      widget: "kpv-ghk-cu-claim-checker",
    },
    {
      id: "evidence-ladder",
      title: "Dosage evidence ladder",
      widget: "kpv-ghk-cu-evidence-ladder",
      paragraphsAfter: [
        "KPV + GHK-Cu dosing is **poorly established**. The 50/10 mg vial and 1.8–3 mg schedule are precise community conventions, but no controlled study establishes their safety, efficacy, PK, ratio, frequency, or duration.",
      ],
    },
    {
      id: "safety",
      title: "Safety and adverse effects",
      paragraphs: [
        "No controlled dataset can provide incidence, severity, or dose relationship of adverse effects from KPV + GHK-Cu. A fixed-ratio vial creates an attribution problem: changing the draw changes both peptides and copper exposure at once.",
        "Particular caution is warranted with copper-metabolism disorders, significant liver disease, active infection, autoimmune disease, or concurrent immunosuppressive therapy. Do not substitute peptide use for standard medical evaluation of wounds, infections, or inflammatory conditions.",
      ],
      widget: "kpv-ghk-cu-adverse-events",
    },
    {
      id: "storage",
      title: "Storage and stability",
      paragraphs: [
        "No published stability study establishes a universal storage period for a 50/10 mg KPV + GHK-Cu solution. Community protocols commonly refrigerate reconstituted solutions at **2–8°C** and cite **28 days** — a handling convention, not stability-indicating data for every blend.",
        "A blue solution is consistent with coordinated copper, but color does not prove correct potency, ratio, sterility, or KPV dissolution. Unexpected cloudiness, precipitation, or particulates should invalidate controlled exposure until investigated.",
      ],
    },
    {
      id: "anti-doping",
      title: "Anti-doping considerations",
      paragraphs: [
        "The 2026 WADA list applies **S0 Non-Approved Substances** to pharmacological substances without current governmental health-authority approval for human therapeutic use. KPV and GHK-Cu do not need to be individually named for S0 to be relevant. Tested athletes should obtain sport-specific guidance.",
      ],
    },
    {
      id: "bottom-line",
      title: "Bottom line",
      paragraphs: [
        "KPV + GHK-Cu is a biologically plausible but clinically untested two-tripeptide blend. The most clearly documented vial contains **50 mg GHK-Cu + 10 mg KPV** at a fixed **5:1** mass ratio. The most specific reported protocol gradually increases from **1.5 mg GHK-Cu + 300 mcg KPV** to **2.5 mg + 500 mcg**, five days weekly for up to 12 weeks.",
        "That full schedule uses **125 mg GHK-Cu and 25 mg KPV** (150 mg total blend; **three vials** before loss). With 3 mL per 60 mg vial, draws progress from **9 to 15 U-100 units**. These calculations are internally consistent, but the schedule remains a **community/vendor convention** without exact-combination human PK, efficacy, or long-term safety evidence.",
      ],
      highlight:
        "Confirm vial ratio, KPV form (free base vs acetate), GHK-Cu copper occupancy, theoretical copper exposure, KPV solubility at chosen concentration, and mixed-vial stability — before trusting any unit chart.",
    },
  ],
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        question: "What is the most commonly documented KPV + GHK-Cu vial?",
        answer:
          "A frequently marketed configuration contains 50 mg GHK-Cu and 10 mg KPV, or 60 mg total. The label must still be checked because the blend has no universal standardized ratio.",
      },
      {
        question: "What is the most commonly reported KPV + GHK-Cu amount?",
        answer:
          "The most specific traceable range is 1.5–2.5 mg GHK-Cu plus 300–500 mcg KPV per administration. In a 5:1 vial, that equals 1.8–3 mg of total blend.",
      },
      {
        question: "What is the complete reported 12-week protocol?",
        answer:
          "The documented schedule uses 1.5 mg GHK-Cu + 300 mcg KPV in weeks 1–2, 1.75 mg + 350 mcg in weeks 3–4, 2 mg + 400 mcg in weeks 5–6, 2.25 mg + 450 mcg in weeks 7–8, and 2.5 mg + 500 mcg in weeks 9–12, five days weekly. It is a community/vendor protocol, not a clinically validated schedule.",
      },
      {
        question: "How much blend is 10 units after adding 3 mL?",
        answer:
          "Ten U-100 units contain 2 mg total blend after a 60 mg vial is prepared to 3 mL. In the 50/10 mg ratio, that equals approximately 1.667 mg GHK-Cu and 333 mcg KPV.",
      },
      {
        question: "How many units provide 2 mg GHK-Cu and 400 mcg KPV?",
        answer:
          "Twelve U-100 units provide 2 mg GHK-Cu and 400 mcg KPV when a 50/10 mg vial is prepared to 3 mL. The same component amount is 8 units at 2 mL or 16 units at 4 mL.",
      },
      {
        question: "How many units provide 2.5 mg GHK-Cu and 500 mcg KPV?",
        answer:
          "Fifteen U-100 units provide 2.5 mg GHK-Cu and 500 mcg KPV at a 3 mL final volume. It is 10 units at 2 mL or 20 units at 4 mL.",
      },
      {
        question: "Is one syringe unit a fixed dose?",
        answer:
          "No. A U-100 unit is 0.01 mL of volume. Its peptide content depends on the vial composition and final volume.",
      },
      {
        question: "Can the KPV dose be changed without changing GHK-Cu?",
        answer:
          "No, not in a premixed 5:1 vial. Every draw preserves the same mass ratio, so lowering or raising one component automatically changes the other.",
      },
      {
        question: "Is KPV + GHK-Cu the same as KLOW?",
        answer:
          "No. KPV + GHK-Cu contains two components, while standard KLOW contains 50 mg GHK-Cu plus 10 mg each of KPV, BPC-157, and TB-500. The 5:1 GHK-Cu:KPV relationship may be the same, but the total mass and additional exposures are different.",
      },
      {
        question: "Has KPV + GHK-Cu been studied in humans?",
        answer:
          "No controlled human study of the exact combination was identified. GHK-Cu has limited topical human research, while isolated KPV has no published human administration study.",
      },
      {
        question: "Does the blend have a weight-based dose?",
        answer:
          "No. Community protocols use fixed milligram and microgram amounts, and no human weight-based algorithm has been validated.",
      },
      {
        question: "Does the blend require escalation?",
        answer:
          "No evidence shows that escalation is required. The gradual schedule is a community convention, and a fixed-dose design may be easier to interpret scientifically.",
      },
      {
        question: "Does the blend need a loading dose, taper, or washout?",
        answer:
          "No controlled study establishes a loading dose, taper, or washout. Protocol pages commonly use a 4–8-week off period after an 8–12-week cycle, but that interval has not been validated.",
      },
      {
        question: "How much is needed for the complete 12-week schedule?",
        answer:
          "The nominal schedule uses 150 mg total blend: 125 mg GHK-Cu and 25 mg KPV. That equals 2.5 reference vials, so three 60 mg vials are required before loss or beyond-use constraints.",
      },
      {
        question: "How much copper is in the complete protocol?",
        answer:
          "Approximately 19.8 mg of elemental copper is stoichiometrically contained in 125 mg of an idealized one-copper GHK-Cu complex. This is not the same as absorbed copper or a measured systemic copper dose.",
      },
      {
        question: "Is 3 mL guaranteed to dissolve the blend?",
        answer:
          "No. Three milliliters creates 3.33 mg/mL KPV, above FDA's reported 0.7 mg/mL water solubility for KPV free base but below the reported 5 mg/mL figure for KPV acetate. The exact form, pH, mixed matrix, and stability must be validated.",
      },
      {
        question: "Can the same vial be used topically instead of subcutaneously?",
        answer:
          "Route switching is not automatically valid. A parenteral calculation does not establish a stable topical concentration, vehicle, skin penetration, or damaged-skin safety.",
      },
      {
        question: "Is topical KPV + GHK-Cu supported by human evidence?",
        answer:
          "The exact topical combination is not established. Human evidence exists for selected topical GHK-Cu products, while KPV topical research is preclinical or delivery-focused and does not validate a combined formula.",
      },
      {
        question: "What side effects can KPV + GHK-Cu cause?",
        answer:
          "The incidence is unknown. Possible concerns include injection-site reactions, allergy, headache, dizziness, nausea, gastrointestinal symptoms, infection, formulation error, immune reactions, and copper-related abnormalities, but controlled combination data are absent.",
      },
      {
        question: "Does the blend heal the gut, skin, hair, wounds, or injuries?",
        answer:
          "Those outcomes are not established for the blend. KPV has preclinical intestinal and inflammatory research, and GHK-Cu has limited topical skin and wound evidence, but combining them does not prove efficacy for any condition.",
      },
    ],
  },
  sources: {
    title: "References",
    items: [
      {
        authors: "FDA",
        title: "KPV-related bulk drug substances: 2026 PCAC briefing document",
        detail: "Chemistry, solubility, and no human KPV exposure study.",
        href: "https://www.fda.gov/media/193346/download",
      },
      {
        authors: "FDA",
        title: "July 23–24, 2026 Pharmacy Compounding Advisory Committee meeting",
        detail: "Advisory votes — not blend evaluation.",
        href: "https://www.fda.gov/advisory-committees/advisory-committee-calendar/july-23-24-2026-meeting-pharmacy-compounding-advisory-committee-07232026",
      },
      {
        authors: "Dalmasso G et al.",
        title: "PepT1-mediated tripeptide KPV uptake reduces intestinal inflammation",
        detail: "2008.",
        href: "https://pubmed.ncbi.nlm.nih.gov/18061177/",
      },
      {
        authors: "Pickart L, Margolina A.",
        title: "Regenerative and protective actions of GHK-Cu",
        detail: "2018 review — topical/lab context.",
        href: "https://pubmed.ncbi.nlm.nih.gov/29986520/",
      },
      {
        authors: "Mulder GD et al.",
        title: "Topical GHK-Cu in diabetic neuropathic ulcers",
        detail: "1994 — not injectable blend dosing.",
        href: "https://pubmed.ncbi.nlm.nih.gov/17147644/",
      },
      {
        authors: "Adnan SB et al.",
        title: "Tripeptides in wound healing and skin regeneration: comprehensive review",
        detail: "2025 — separate molecule evidence, not exact blend.",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12595317/",
      },
      {
        authors: "Pure Performance Labs",
        title: "KPV + GHK-Cu 60 mg reference protocol",
        detail: "Community protocol source — documents reported practice.",
        href: "https://www.purelabs.co.za/product/kpv-ghk-cu/",
      },
      {
        authors: "WADA",
        title: "2026 Prohibited List",
        detail: "S0 non-approved substances category.",
        href: "https://www.wada-ama.org/sites/default/files/2025-09/2026list_en_final_clean_september_2025.pdf",
      },
    ],
  },
  safety: {
    title: "Important Safety Information",
    paragraphs: [
      "KPV + GHK-Cu is a **fixed-ratio commercial blend** with **no controlled human trial** of the exact combination identified and **no US prescribing dose**.",
      "This page documents community protocols and reconstitution arithmetic. It is **not** a clinical dosing, self-injection, or treatment guide. Always translate total blend mass into **two labeled component amounts** plus stoichiometric copper context.",
      "Confirm KPV form, GHK-Cu copper complex identity, solubility, and mixed-vial stability. Seek urgent care for severe allergic, infectious, neurological, or cardiovascular symptoms.",
    ],
  },
};
