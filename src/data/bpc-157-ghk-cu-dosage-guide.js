/**
 * BPC-157 + GHK-Cu blend dosage guide (50 mg GHK-Cu + 10 mg BPC-157).
 * Exact-combination human trial: none identified. Protocols document community conventions.
 */

export const BPC_GHK_VIAL_MG = 60;
export const BPC_GHK_GHK_MG = 50;
export const BPC_GHK_BPC_MG = 10;

/** Stoichiometric copper fraction in representative one-copper GHK-Cu complex (401.91 g/mol) */
export const GHK_CU_COPPER_FRACTION = 0.1581;

export const BPC_GHK_COMPOSITION = [
  {
    id: "ghk-cu",
    name: "GHK-Cu",
    mg: 50,
    pct: 83.33,
    theme: "Copper delivery, extracellular matrix, collagen, wound and skin remodeling",
  },
  {
    id: "bpc-157",
    name: "BPC-157",
    mg: 10,
    pct: 16.67,
    theme: "Angiogenesis, NO signaling, tendon, GI, and vascular repair models",
  },
];

/** Mass fractions for authentic 50/10 mg vials (5:1 GHK-Cu:BPC-157) */
export const BPC_GHK_FRACTIONS = {
  ghkCu: 5 / 6,
  bpc: 1 / 6,
};

export function bpcGhkComponentsFromTotalMg(totalMg) {
  const t = Number(totalMg);
  if (!Number.isFinite(t) || t <= 0) return null;
  const ghkCuMg = t * BPC_GHK_FRACTIONS.ghkCu;
  const bpcMcg = t * BPC_GHK_FRACTIONS.bpc * 1000;
  const copperMcg = ghkCuMg * GHK_CU_COPPER_FRACTION * 1000;
  return { totalMg: t, ghkCuMg, bpcMcg, copperMcg };
}

/**
 * Calculate draw volume, U-100 units, and component split from a reconstituted vial.
 * Assumes reference 50/10 mg composition unless overridden.
 */
export function bpcGhkAmountFromVial({
  vialTotalMg = BPC_GHK_VIAL_MG,
  ghkMg = BPC_GHK_GHK_MG,
  bpcMg = BPC_GHK_BPC_MG,
  diluentMl,
  targetTotalMg,
  targetGhkCuMg,
  targetBpcMcg,
} = {}) {
  const d = Number(diluentMl);
  if (!Number.isFinite(d) || d <= 0) return null;

  let target = Number(targetTotalMg);
  if (!Number.isFinite(target) || target <= 0) {
    const ghk = Number(targetGhkCuMg);
    const bpc = Number(targetBpcMcg);
    if (Number.isFinite(ghk) && ghk > 0) {
      target = ghk / (ghkMg / vialTotalMg);
    } else if (Number.isFinite(bpc) && bpc > 0) {
      target = (bpc / 1000) / (bpcMg / vialTotalMg);
    } else {
      return null;
    }
  }

  const concMgPerMl = vialTotalMg / d;
  const bpcConcMgPerMl = bpcMg / d;
  const volumeMl = target / concMgPerMl;
  const units = volumeMl / 0.01;
  const parts = bpcGhkComponentsFromTotalMg(target);

  return {
    vialTotalMg,
    diluentMl: d,
    concMgPerMl,
    bpcConcMgPerMl,
    targetTotalMg: target,
    volumeMl,
    units,
    parts,
  };
}

export const BPC_GHK_IDENTITY = [
  {
    id: "correct-ratio",
    label: "Confirmed 50 mg GHK-Cu + 10 mg BPC-157 (60 mg total)",
    verdict: "Matches the reference 5:1 mass ratio",
    detail:
      "Every 1.2 mg total blend contains 1 mg GHK-Cu and 200 mcg BPC-157. Unit charts for this vial assume 83.33% GHK-Cu and 16.67% BPC-157 by labeled mass.",
  },
  {
    id: "wrong-ratio",
    label: "Label shows different component amounts or ratio",
    verdict: "Different vial — recalculate all draws",
    detail:
      "Some sellers offer different strengths. A label that says only “60 mg blend” without per-component amounts is incomplete. Do not reuse a 50/10 unit chart.",
  },
  {
    id: "ghk-no-cu",
    label: "GHK powder without copper complex",
    verdict: "Different ingredient — not interchangeable with GHK-Cu",
    detail:
      "GHK is the copper-free Gly-His-Lys ligand. GHK-Cu is the blue or blue-violet copper complex. White GHK and blue GHK-Cu should not share dosing tables.",
  },
  {
    id: "glow-confusion",
    label: "Confused with GLOW blend",
    verdict: "Different product — GLOW adds TB-500",
    detail:
      "Standard GLOW is 70 mg: 50 mg GHK-Cu + 10 mg BPC-157 + 10 mg TB-500. The GHK-Cu:BPC-157 5:1 relationship may match, but total mass, third peptide exposure, and attribution differ.",
  },
  {
    id: "klow-confusion",
    label: "Confused with KLOW blend",
    verdict: "Different product — KLOW adds KPV and TB-500",
    detail:
      "Standard KLOW is 80 mg: 50 mg GHK-Cu + 10 mg each of KPV, BPC-157, and TB-500. Four peptides at 5:1:1:1 — different total exposure and WADA status.",
  },
  {
    id: "kpv-ghk-confusion",
    label: "Confused with KPV + GHK-Cu",
    verdict: "Different second peptide — KPV replaces BPC-157",
    detail:
      "KPV + GHK-Cu uses the same 50/10 mg mass layout but swaps BPC-157 for KPV. Same ratio arithmetic, different molecule, different evidence, and different WADA considerations.",
  },
  {
    id: "wolverine-confusion",
    label: "Confused with Wolverine Stack (BPC-157 + TB-500)",
    verdict: "Different blend — no GHK-Cu, no copper exposure",
    detail:
      "The Wolverine Stack pairs BPC-157 with Ac-LKKTETQ (TB-500 fragment), not GHK-Cu. It is a separate two-peptide product with different community protocols and evidence.",
  },
  {
    id: "unsure",
    label: "Only a trade name or total milligrams listed",
    verdict: "Incomplete — confirm both sequences and amounts",
    detail:
      "Intact-mass spectrometry, sequence mapping, quantitative component assay, copper-to-GHK ratio, and BPC free-base vs acetate reporting should establish identity before interpreting any protocol.",
  },
];

export const BPC_GHK_COMBO_STATUS = [
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

export const BPC_GHK_PROTOCOL_PHASES = [
  {
    id: "baseline",
    phase: "Baseline",
    days: "7 days before first exposure",
    schedule: "No scheduled exposure — baseline measurements only",
    ghkCuMg: 0,
    bpcMcg: 0,
    totalMg: 0,
    units: 0,
    phaseTotalMg: 0,
    purpose:
      "Prespecified endpoint on ≥3 separate days; medication log; photos if relevant; symptom and function scores",
  },
  {
    id: "exposure",
    phase: "Fixed exposure",
    days: "42 consecutive days (6 weeks)",
    schedule: "12 units (3 mL recon) once daily, seven days per week",
    ghkCuMg: 2,
    bpcMcg: 400,
    totalMg: 2.4,
    units: 12,
    phaseTotalMg: 100.8,
    purpose:
      "Most traceable 50/10 community convention — fixed 2 mg GHK-Cu + 400 mcg BPC-157; no automatic escalation",
  },
  {
    id: "washout",
    phase: "Washout / follow-up",
    days: "21 days after final exposure",
    schedule: "No scheduled exposure — continue endpoint and AE tracking",
    ghkCuMg: 0,
    bpcMcg: 0,
    totalMg: 0,
    units: 0,
    phaseTotalMg: 0,
    purpose:
      "Observe persistence, rebound, delayed adverse events, and unresolved events at day 63 closeout",
  },
];

export const BPC_GHK_CUMULATIVE = [
  {
    phase: "Per administration",
    ghkCu: "2.0 mg",
    bpc: "0.4 mg (400 mcg)",
    totalBlend: "2.4 mg",
    copper: "316 mcg",
  },
  {
    phase: "Per 7-day week",
    ghkCu: "14.0 mg",
    bpc: "2.8 mg",
    totalBlend: "16.8 mg",
    copper: "2.21 mg",
  },
  {
    phase: "**Six-week cumulative (42 days)**",
    ghkCu: "**84.0 mg**",
    bpc: "**16.8 mg**",
    totalBlend: "**100.8 mg**",
    copper: "**13.28 mg**",
  },
  {
    phase: "Nominal vial equivalents",
    ghkCu: "1.68 vials",
    bpc: "1.68 vials",
    totalBlend: "1.68 vials",
    copper: "—",
  },
];

export const BPC_GHK_COMPARE = {
  clinical: {
    title: "Exact BPC-157 + GHK-Cu clinical research",
    status: "None established",
    rows: [
      ["Exact combination", "Not studied"],
      ["Dose", "No exact-blend human dose"],
      ["Frequency", "No exact-blend human schedule"],
      ["Route", "Topical GHK-Cu studies; isolated BPC-157 reports — different routes"],
      ["Duration", "Topical GHK-Cu often 8–14 days in trials"],
      ["Pharmacokinetics", "No combination PK"],
      ["Safety", "Limited topical GHK-Cu; sparse single-agent BPC-157 reports"],
    ],
  },
  anecdotal: {
    title: "Community BPC-157 + GHK-Cu protocols",
    status: "One traceable convention",
    rows: [
      ["Exact combination", "50/10 mg premixed vial"],
      ["Dose", "2 mg GHK-Cu + 400 mcg BPC-157 (= 2.4 mg total)"],
      ["Frequency", "Once daily, seven days per week"],
      ["Route", "Subcutaneous (community convention)"],
      ["Duration", "6 weeks on, 2–3 weeks off"],
      ["Escalation", "None in fixed protocol"],
      ["Safety", "Uncontrolled reports; no blend AE rates"],
    ],
  },
};

export const BPC_GHK_EVIDENCE_LADDER = [
  {
    level: "Controlled human trial of exact combination",
    exists: "None located",
    confidence: "None",
  },
  {
    level: "Controlled animal combination study",
    exists: "None located",
    confidence: "None",
  },
  {
    level: "Human single-component studies",
    exists: "Limited BPC-157 reports; topical GHK-Cu",
    confidence: "Low and indirect; routes and formulations differ",
  },
  {
    level: "Animal and cell component studies",
    exists: "Numerous heterogeneous models",
    confidence: "Mechanistically useful; not dose-validating for blend",
  },
  {
    level: "Case reports and retrospective observations",
    exists: "Sparse BPC-157 only",
    confidence: "Very low",
  },
  {
    level: "Community schedules and commercial labels",
    exists: "50/10 mg, 3 mL, 12 units, 6-week cycle",
    confidence: "Documents use patterns only",
  },
  {
    level: "Long-term or repeat-cycle exposure",
    exists: "Insufficient evidence",
    confidence: "None",
  },
];

export const BPC_GHK_AE_SIMPLE = [
  {
    topic: "Exact-combination AE rates",
    status: "Unknown",
    note: "No blend safety trial denominator",
  },
  {
    topic: "Injection-site reactions",
    status: "Unquantified",
    note: "GHK-Cu SC reports mention stinging, redness, swelling, nodules",
  },
  {
    topic: "Copper exposure",
    status: "Context-dependent",
    note: "~13.3 mg stoichiometric Cu in 6-week fixed protocol",
  },
  {
    topic: "Fixed-ratio attribution",
    status: "Limited control",
    note: "Cannot change BPC-157 without changing GHK-Cu and copper",
  },
];

export const BPC_GHK_AE_FULL = [
  {
    topic: "Exact-combination AE rates",
    status: "Unknown",
    note: "No blend trial",
    context:
      "Community reports mention injection-site pain, burning, redness, itching, swelling, welts, bruising, nodules, headache, fatigue, and rash — frequency and causality unknown.",
  },
  {
    topic: "Copper-related risk",
    status: "Assay-dependent",
    note: "Elemental copper from GHK-Cu complex",
    context:
      "Extra caution in Wilson disease, copper-metabolism disorders, significant liver disease, or with other copper products. No human study measured copper distribution after repeated SC GHK-Cu in a BPC blend.",
  },
  {
    topic: "Angiogenesis / abnormal growth",
    status: "Class concern",
    note: "Both peptides discussed in angiogenesis literature",
    context:
      "Active or recent malignancy, proliferative retinopathy, or unexplained masses are standard exclusions; exact blend risk unquantified.",
  },
  {
    topic: "Product and formulation risk",
    status: "Elevated for two-component vial",
    note: "Identity, ratio, free copper, sterility, endotoxin",
    context:
      "FDA 2026 BPC-157 review noted characterization gaps. Injectable GHK-Cu lacks validated human dosing. Mixed-vial stability requires lot-specific validation.",
  },
  {
    topic: "Fixed-ratio limitations",
    status: "Experimental-control tradeoff",
    note: "Convenience vs attribution",
    context:
      "Reducing the draw lowers both peptides and copper simultaneously. Cause identification after an adverse effect is difficult.",
  },
  {
    topic: "WADA / tested sport",
    status: "Prohibited",
    note: "Blend contains BPC-157 (S0)",
    context:
      "2026 WADA list prohibits BPC-157 at all times under S0 Non-Approved Substances regardless of GHK-Cu status.",
  },
];

export const BPC_GHK_CLAIMS = [
  {
    id: "glow-same",
    claim: "BPC-157 + GHK-Cu is the same as GLOW",
    status: "False",
    detail:
      "GLOW adds 10 mg TB-500 (thymosin-beta-4-related fragment) to the same GHK-Cu:BPC-157 5:1 relationship. A three-peptide 70 mg vial delivers different total exposure and attribution complexity.",
  },
  {
    id: "klow-same",
    claim: "BPC-157 + GHK-Cu is the same as KLOW",
    status: "False",
    detail:
      "KLOW adds 10 mg KPV and 10 mg TB-500 to the GHK-Cu:BPC-157 pair. An 80 mg four-peptide vial is not interchangeable with this two-component blend.",
  },
  {
    id: "synergy-proven",
    claim: "Combining BPC-157 and GHK-Cu produces proven synergy",
    status: "Not demonstrated",
    detail:
      "No factorial study compared control, BPC-157 alone, GHK-Cu alone, and the combination with prespecified interaction analysis. Plausibility is not proof.",
  },
  {
    id: "topical-validates-sc",
    claim: "Topical GHK-Cu studies validate subcutaneous injection of the blend",
    status: "Not supported",
    detail:
      "Topical exposure, systemic injection, and a two-peptide premixed vial have different pharmacokinetics, concentrations, and safety profiles. BPC-157 human reports used different routes and contexts.",
  },
  {
    id: "units-alone-dose",
    claim: "“10 units” or “12 units” alone defines a dose",
    status: "False",
    detail:
      "Syringe units are volume (0.01 mL on U-100). Component mass depends on vial composition and final volume. At 2 mL, 10 units = 2.5 mg GHK-Cu + 500 mcg BPC-157; at 3 mL, 10 units = 1.67 mg + 333 mcg.",
  },
  {
    id: "higher-better",
    claim: "Higher GHK-Cu or BPC-157 amounts are better supported",
    status: "Not demonstrated",
    detail:
      "Some reports extend to 2.5–3 mg GHK-Cu and 500 mcg BPC-157 per administration. Higher numbers increase cumulative exposure and copper content without solving absent combination pharmacology.",
  },
  {
    id: "blue-color-proof",
    claim: "Blue color proves authentic GHK-Cu and correct ratio",
    status: "False",
    detail:
      "Color is compatible with copper coordination but does not prove identity, purity, potency, correct BPC-157 ratio, sterility, or low endotoxin.",
  },
  {
    id: "bpc-validates-blend",
    claim: "Human BPC-157 reports validate the injectable blend",
    status: "Not supported",
    detail:
      "Isolated BPC-157 exposures (intra-articular, bladder-wall, IV pilot, registered SC trial) did not include GHK-Cu and used different routes, tissues, and study designs.",
  },
];

export const BPC_GHK_DOSAGE_GUIDE = {
  title: "BPC-157 + GHK-Cu Dosage: 50/10 mg Blend Protocol and Reconstitution",
  updated: "Updated August 2026",
  callout:
    "**Research note:** No controlled human or animal study has established a dosage, ratio, safety profile, or synergistic effect for the exact **BPC-157 + GHK-Cu** combination. The fixed **50 mg/10 mg** schedule described below is a documented **community research convention** — not a validated treatment regimen.",
  intro: [
    "The reference vial contains **50 mg GHK-Cu + 10 mg BPC-157 = 60 mg total** at a fixed **5:1** mass ratio. **GHK-Cu = total × 5/6; BPC-157 = total × 1/6.** Every **1.2 mg** total = **1 mg GHK-Cu + 200 mcg BPC-157**.",
    "The most traceable community convention reconstitutes to **3.0 mL** and uses **12 U-100 units (0.12 mL) once daily** = **2 mg GHK-Cu + 400 mcg BPC-157** for **6 weeks (42 days)**, then **2–3 weeks off**. Six-week cumulative: **84 mg GHK-Cu + 16.8 mg BPC-157 = 100.8 mg** total blend.",
    "**No exact-combination human or animal study** was identified. Human BPC-157 evidence is limited separate reports; human GHK-Cu is primarily **topical**. This blend is **≠ GLOW** (adds TB-500), **≠ KLOW** (adds KPV+TB-500), **≠ KPV+GHK-Cu**, and **≠ Wolverine** (BPC+TB-500). **WADA:** blend contains BPC-157 → prohibited (S0).",
  ],
  glance: {
    title: "BPC-157 + GHK-Cu dosage in 30 seconds",
    table: {
      headers: ["Question", "Research summary"],
      rows: [
        ["**Common reference vial**", "50 mg GHK-Cu + 10 mg BPC-157 = 60 mg total"],
        ["**Fixed mass ratio**", "5:1 GHK-Cu:BPC-157"],
        ["**Common reconstitution**", "3.0 mL → 20 mg/mL total blend"],
        ["**Traceable daily exposure**", "12 units = 2 mg GHK-Cu + 400 mcg BPC-157"],
        ["**Common cycle**", "6 weeks daily, then 2–3 weeks off"],
        ["**Six-week cumulative**", "84 mg GHK-Cu + 16.8 mg BPC-157"],
        ["**Exact-combination human study**", "None identified"],
        ["**Strongest human evidence**", "Limited BPC-157 reports; topical GHK-Cu"],
        ["**Evidence quality for the blend**", "Anecdotal/community protocol"],
        ["**Tested sport**", "Prohibited — contains BPC-157 (WADA S0)"],
      ],
    },
  },
  sections: [
    {
      id: "what-is",
      title: "What is BPC-157 + GHK-Cu?",
      paragraphs: [
        "**BPC-157** is a synthetic 15-amino-acid peptide (H-GEPPPGKPADDAGLV-OH; free-base MW ~1,419.5 g/mol). Acetate-containing material is not mass-equivalent to free base unless the assay reports peptide-equivalent content.",
        "**GHK-Cu** is the copper(II) complex of glycyl-L-histidyl-L-lysine (Copper Tripeptide-1). **GHK alone and GHK-Cu are not interchangeable.** The combination is a two-component mixture — not a conjugate, salt, or single active ingredient.",
        "A label stating only “60 mg blend” is incomplete because it does not establish how much of each component is present.",
      ],
      widget: "bpc-ghk-composition",
    },
    {
      id: "composition",
      title: "Common 60 mg composition",
      paragraphs: [
        "The **50/10 mg** configuration is commercially documented but not pharmacologically standardized. Some sellers offer different strengths. Independent quantitative assay should confirm both component amounts.",
        "Using a representative GHK-Cu MW of 401.91 g/mol, copper accounts for approximately **15.81%** of complex mass (~158 mcg Cu per 1 mg GHK-Cu). This is compositional math — not bioavailability.",
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
              "Copper delivery, ECM, collagen, wound and skin remodeling",
            ],
            [
              "**BPC-157**",
              "10 mg",
              "16.67%",
              "Angiogenesis, NO signaling, tendon and GI repair models",
            ],
            ["**Total**", "**60 mg**", "**100%**", "Fixed two-peptide blend"],
          ],
        },
        {
          caption: "Elemental copper from GHK-Cu complex (representative 401.91 g/mol)",
          headers: ["GHK-Cu complex", "Approximate elemental copper"],
          rows: [
            ["1.00 mg", "158 mcg"],
            ["1.25 mg", "198 mcg"],
            ["1.50 mg", "237 mcg"],
            ["2.00 mg", "316 mcg"],
            ["2.50 mg", "395 mcg"],
            ["3.00 mg", "474 mcg"],
            ["50 mg vial component", "7.91 mg"],
          ],
        },
      ],
    },
    {
      id: "identity",
      title: "Identity and label checks",
      paragraphs: [
        "**GHK versus GHK-Cu:** GHK is the copper-free ligand; GHK-Cu is the copper complex. Blue color is consistent with coordination but cannot establish identity, ratio, potency, sterility, or endotoxin status alone.",
        "Confirm the product is not **GLOW** (adds TB-500), **KLOW** (adds KPV+TB-500), **KPV+GHK-Cu** (KPV replaces BPC-157), or **Wolverine Stack** (BPC-157 + TB-500 without GHK-Cu).",
      ],
      widget: "bpc-ghk-identity-gate",
      tables: [
        {
          caption: "Identity and mass-basis comparison",
          headers: ["Property", "BPC-157", "GHK-Cu"],
          rows: [
            ["Chemical type", "15-aa synthetic peptide", "Copper(II)-tripeptide complex"],
            ["Common sequence", "GEPPPGKPADDAGLV", "GHK coordinated to Cu(II)"],
            ["Representative MW", "~1,419.5 g/mol (free base)", "~400.9–401.9 g/mol"],
            ["Typical blend label", "10 mg", "50 mg"],
            ["Share of 50/10 blend", "16.67%", "83.33%"],
          ],
        },
      ],
    },
    {
      id: "regulatory",
      title: "U.S. medicinal and research status",
      paragraphs: [
        "There is no U.S. prescribing label or standardized medicinal dosage for the fixed BPC-157 + GHK-Cu combination. FDA reviewed BPC-157 bulk-drug-substance information in 2026 and discussed substantial gaps involving characterization, impurities, aggregation, immunogenicity, sterility, endotoxin, and stability.",
        "GHK-Cu is widely used topically as Copper Tripeptide-1. Cosmetic use does not establish the safety, pharmacokinetics, or dosage of an injectable GHK-Cu product.",
      ],
      highlight:
        "Available 50/10 mg schedules are community conventions — not approved prescribing protocols.",
    },
    {
      id: "exact-combo",
      title: "Has the exact BPC-157 + GHK-Cu combination been studied?",
      paragraphs: [
        "No controlled human or animal study of the exact **50 mg GHK-Cu + 10 mg BPC-157** blend was identified. A 2026 narrative review considered BPC-157 and GHK-Cu in parallel and identified combined protocols as a future research priority — that is not evidence the combination has been tested or produces synergy.",
        "To test synergy, a study would need at least four comparable groups (control, BPC-157 alone, GHK-Cu alone, combination) with prespecified doses, the same route and schedule, and interaction analysis.",
      ],
      widget: "bpc-ghk-combo-status",
    },
    {
      id: "component-human",
      title: "Human research dosages: exact combination vs component studies",
      paragraphs: [
        "**Exact combination:** No human dose has been studied for the BPC-157 + GHK-Cu pair.",
        "**BPC-157:** Isolated research exposures include intra-articular knee injection, bladder-wall cystoscopy series, two-person IV pilot, registered oral Phase 1, and registered SC hamstring-injury study — different tissues, routes, and designs that do not converge on a validated systemic dose.",
        "**GHK-Cu:** Human research is mainly topical (diabetic neuropathic ulcers, post-CO₂-laser skin care, cosmetic photoaging, registered punch-wound Phase 2). No controlled injectable human GHK-Cu dose-ranging study was located.",
      ],
      tables: [
        {
          caption: "Evidence category summary",
          headers: ["Evidence category", "What exists", "What it can establish"],
          rows: [
            [
              "Exact combination trials",
              "None located",
              "Nothing about validated dose, ratio, efficacy, interaction, or safety",
            ],
            [
              "BPC-157 human research",
              "Small reports, registered trials without public results",
              "Limited single-component observations only",
            ],
            [
              "GHK-Cu human research",
              "Primarily topical skin and wound studies",
              "Topical tolerability; not injectable dosing",
            ],
            [
              "Community blend reports",
              "Repeated 50/10 mg and 5:1 conventions",
              "What people report using; not clinical validation",
            ],
          ],
        },
        {
          caption: "Selected human BPC-157 exposures (not blend evidence)",
          headers: ["Study or report", "Route and exposure", "Main limitation"],
          rows: [
            [
              "Retrospective knee-pain chart review",
              "One intra-articular 4 mg BPC-157",
              "Uncontrolled; joint injection; no GHK-Cu",
            ],
            [
              "Interstitial-cystitis case series",
              "Ten 1 mg bladder-wall injections",
              "Small uncontrolled series; organ-local; no GHK-Cu",
            ],
            [
              "Two-person IV pilot",
              "10 mg day 1, 20 mg day 2 IV",
              "Two participants; not dose-finding; no GHK-Cu",
            ],
            [
              "Registered oral Phase 1",
              "Study record exists; no public usable regimen",
              "Insufficient posted outcomes",
            ],
            [
              "Registered SC hamstring study",
              "Once-daily SC × 14 days; dose/results unavailable",
              "Cannot support public dose recommendation",
            ],
          ],
        },
      ],
    },
    {
      id: "research-dosage",
      title: "Reported BPC-157 + GHK-Cu dosage range",
      paragraphs: [
        "The following ranges summarize community and commercial research conventions. They are **not clinically established.** A report that says only “10 units” or “20 units” is not a dosage — vial composition and final volume are required.",
      ],
      tables: [
        {
          caption: "Commonly reported per-administration amounts (anecdotal)",
          headers: [
            "Component",
            "Per administration",
            "Frequency",
            "Evidence category",
          ],
          rows: [
            ["GHK-Cu", "1–2 mg", "Once daily or 5 days/week", "Anecdotal/community"],
            ["BPC-157", "200–500 mcg", "Once daily or 5–7 days/week", "Anecdotal/community"],
            ["Fixed 50/10 blend", "1.2–2.4 mg total", "Once daily or 5–7 days/week", "Anecdotal/community"],
          ],
        },
        {
          caption: "Common anecdotal schedules",
          headers: ["Schedule", "Per administration", "Pattern", "Major caveat"],
          rows: [
            [
              "Original 50/10 community convention",
              "2 mg GHK-Cu + 400 mcg BPC-157",
              "Daily × 6 weeks; 2–3 weeks off",
              "Most reproducible exact-blend report, but uncontrolled",
            ],
            [
              "Lower fixed-ratio schedule",
              "1.25 mg GHK-Cu + 250 mcg BPC-157",
              "Often 5–7 days/week",
              "No clinical validation",
            ],
            [
              "Middle fixed-ratio schedule",
              "1.5 mg GHK-Cu + 300 mcg BPC-157",
              "Often 5–7 days/week",
              "No clinical validation",
            ],
            [
              "Independently selected components",
              "1–2 mg GHK-Cu + 250–500 mcg BPC-157",
              "Often 8–12 weeks",
              "May not preserve commercial 5:1 ratio",
            ],
          ],
        },
        {
          caption: "Per-component breakdown (fixed 5:1 ratio)",
          headers: [
            "Total blend",
            "GHK-Cu",
            "BPC-157",
            "Approx. elemental copper",
          ],
          rows: [
            ["1.2 mg", "1 mg", "200 mcg", "158 mcg"],
            ["1.5 mg", "1.25 mg", "250 mcg", "198 mcg"],
            ["1.8 mg", "1.5 mg", "300 mcg", "237 mcg"],
            ["2.4 mg", "2 mg", "400 mcg", "316 mcg"],
            ["3.0 mg", "2.5 mg", "500 mcg", "395 mcg"],
          ],
        },
      ],
      widgetAfter: "bpc-ghk-component-breakdown",
    },
    {
      id: "complete-protocol",
      title: "Complete fixed-exposure research protocol",
      paragraphs: [
        "This protocol documents the most traceable **50 mg/10 mg community convention** as an observational research template — not a prescribing recommendation. It deliberately uses a **fixed exposure** (no automatic titration) so outcome and adverse-event data remain interpretable.",
        "Assumes a **50/10 mg vial prepared to 3.0 mL** (20 mg/mL total). One U-100 unit = 0.01 mL = **200 mcg total blend** (≈166.7 mcg GHK-Cu + 33.3 mcg BPC-157). **Two 50/10 mg vials** are required before handling loss (one vial = 25 complete 0.12 mL exposures).",
      ],
      widget: "bpc-ghk-protocol-timeline",
      tables: [
        {
          caption: "Protocol synopsis",
          headers: ["Field", "Prespecified value"],
          rows: [
            [
              "Research question",
              "What changes and adverse events occur during fixed 6-week 5:1 GHK-Cu:BPC-157 exposure?",
            ],
            ["Test article", "50 mg GHK-Cu + 10 mg BPC-157, each independently assayed"],
            ["Final volume", "3.0 mL per 60 mg vial"],
            [
              "Fixed exposure",
              "0.12 mL once daily: 2 mg GHK-Cu + 400 mcg BPC-157",
            ],
            ["Frequency", "Seven exposures per week"],
            ["Baseline phase", "7 days before first exposure"],
            ["Exposure phase", "42 consecutive days"],
            ["Washout/follow-up", "21 days after final exposure"],
            ["Automatic escalation", "None"],
            ["Missed exposure", "Record as missed; do not double or catch up"],
          ],
        },
        {
          caption: "Six-week exposure math (3 mL recon)",
          headers: ["Measure", "GHK-Cu", "BPC-157", "Total blend"],
          rows: [
            ["Per administration", "2.0 mg", "0.4 mg", "2.4 mg"],
            ["Per 7-day week", "14.0 mg", "2.8 mg", "16.8 mg"],
            ["Six-week cumulative", "84.0 mg", "16.8 mg", "100.8 mg"],
            ["Nominal vial equivalents", "1.68", "1.68", "1.68"],
          ],
        },
        {
          caption: "Baseline and outcome schedule",
          headers: ["Time point", "Required observations"],
          rows: [
            [
              "Days -7 to -1",
              "Baseline endpoint on ≥3 days; med/supplement log; photos; symptom scores; labs",
            ],
            ["Day 0", "Eligibility, AE review, lot documentation"],
            ["Days 1–42", "Exposure time, dose, vial/lot, site, missed doses, local/systemic symptoms"],
            ["Weekly", "Photos or functional testing; weight; vitals; AE review"],
            ["Day 42", "End-of-exposure assessment matching baseline tools"],
            ["Days 43–63", "No exposure; continue endpoint and AE tracking"],
            ["Day 63", "Final follow-up and study closeout"],
          ],
        },
      ],
      notes: [
        "**Stopping rules:** suspected anaphylaxis; infection signs; severe local reaction; chest pain, SOB, neurologic deficit; lab abnormality; product-quality failure; pregnancy; serious AE pattern. Rechallenge after serious events requires qualified oversight.",
        "**Vial inventory:** 100.8 mg nominal six-week cycle = 1.68 reference vials → **two 60 mg vials** before handling loss. Second vial begins day 26 if every exposure is completed.",
      ],
    },
    {
      id: "reconstitution",
      title: "Reconstitution math for a 50 mg/10 mg vial",
      paragraphs: [
        "These tables assume **50 mg GHK-Cu + 10 mg BPC-157 = 60 mg total**, accurate 5:1 ratio, and **final volume** (not simply liquid added). U-100 syringe: 1 unit = 0.01 mL. Always calculate **both components** — a correct total-blend calculation can hide an incorrect ratio.",
        "**Universal formula:** Component dose (mg) = concentration (mg/mL) × volume (mL). For U-100: volume (mL) = units ÷ 100.",
      ],
      widget: "bpc-ghk-recon-calc",
      tables: [
        {
          caption: "Concentration by final volume",
          headers: [
            "Final volume",
            "Total blend",
            "GHK-Cu",
            "BPC-157",
            "Per U-100 unit",
            "GHK-Cu/unit",
            "BPC-157/unit",
          ],
          rows: [
            ["2.0 mL", "30 mg/mL", "25 mg/mL", "5 mg/mL", "300 mcg", "250 mcg", "50 mcg"],
            ["2.5 mL", "24 mg/mL", "20 mg/mL", "4 mg/mL", "240 mcg", "200 mcg", "40 mcg"],
            ["3.0 mL", "20 mg/mL", "16.67 mg/mL", "3.33 mg/mL", "200 mcg", "166.7 mcg", "33.3 mcg"],
            ["4.0 mL", "15 mg/mL", "12.5 mg/mL", "2.5 mg/mL", "150 mcg", "125 mcg", "25 mcg"],
          ],
        },
        {
          caption: "U-100 syringe-unit table (verified 50/10 vial)",
          headers: [
            "Target GHK-Cu + BPC-157",
            "Total blend",
            "Units at 2.0 mL",
            "Units at 2.5 mL",
            "Units at 3.0 mL",
            "Units at 4.0 mL",
          ],
          rows: [
            ["1.0 mg + 0.2 mg", "1.2 mg", "4 units", "5 units", "6 units", "8 units"],
            ["1.25 mg + 0.25 mg", "1.5 mg", "5 units", "6.25 units", "7.5 units", "10 units"],
            ["1.5 mg + 0.3 mg", "1.8 mg", "6 units", "7.5 units", "9 units", "12 units"],
            ["2.0 mg + 0.4 mg", "2.4 mg", "8 units", "10 units", "12 units", "16 units"],
            ["2.5 mg + 0.5 mg", "3.0 mg", "10 units", "12.5 units", "15 units", "20 units"],
          ],
        },
        {
          caption: "2 mL reconstitution (30 mg/mL total)",
          headers: ["Target total", "GHK-Cu", "BPC-157", "Volume", "U-100 units"],
          rows: [
            ["1.2 mg", "1 mg", "200 mcg", "0.04 mL", "4 units"],
            ["1.5 mg", "1.25 mg", "250 mcg", "0.05 mL", "5 units"],
            ["1.8 mg", "1.5 mg", "300 mcg", "0.06 mL", "6 units"],
            ["2.4 mg", "2 mg", "400 mcg", "0.08 mL", "8 units"],
            ["3.0 mg", "2.5 mg", "500 mcg", "0.10 mL", "10 units"],
          ],
        },
        {
          caption: "3 mL reconstitution (20 mg/mL total — common convention)",
          headers: ["Target total", "GHK-Cu", "BPC-157", "Volume", "U-100 units"],
          rows: [
            ["1.2 mg", "1 mg", "200 mcg", "0.06 mL", "6 units"],
            ["1.5 mg", "1.25 mg", "250 mcg", "0.075 mL", "7.5 units"],
            ["1.8 mg", "1.5 mg", "300 mcg", "0.09 mL", "9 units"],
            ["2.4 mg", "2 mg", "400 mcg", "0.12 mL", "12 units"],
            ["3.0 mg", "2.5 mg", "500 mcg", "0.15 mL", "15 units"],
          ],
        },
        {
          caption: "4 mL reconstitution (15 mg/mL total)",
          headers: ["Target total", "GHK-Cu", "BPC-157", "Volume", "U-100 units"],
          rows: [
            ["1.2 mg", "1 mg", "200 mcg", "0.08 mL", "8 units"],
            ["1.5 mg", "1.25 mg", "250 mcg", "0.10 mL", "10 units"],
            ["1.8 mg", "1.5 mg", "300 mcg", "0.12 mL", "12 units"],
            ["2.4 mg", "2 mg", "400 mcg", "0.16 mL", "16 units"],
            ["3.0 mg", "2.5 mg", "500 mcg", "0.20 mL", "20 units"],
          ],
        },
      ],
    },
    {
      id: "fixed-ratio-challenges",
      title: "Why fixed-ratio blends are difficult to study",
      paragraphs: [
        "A 50/10 mg vial locks GHK-Cu and BPC-157 into a 5:1 mass ratio. Every volume change moves both components together — a lower BPC-157 exposure automatically lowers GHK-Cu, and adverse events cannot be assigned confidently to one component.",
        "Independent component vials are analytically cleaner for formal dose-ranging and factorial research. That does not establish that either product is suitable for human use.",
      ],
    },
    {
      id: "clinical-vs-anecdotal",
      title: "Anecdotal versus clinically studied dosing",
      widget: "bpc-ghk-clinical-vs-anecdotal",
    },
    {
      id: "preclinical",
      title: "Preclinical component dosages",
      paragraphs: [
        "**BPC-157 animal research** spans tendon, muscle, ligament, GI, vascular, and neurologic models. A frequently encountered rodent exposure is ~10 mcg/kg/day IP or oral — route, injury model, and product identity vary. Simple body-weight conversion is not dose validation.",
        "**GHK-Cu cell and animal research** uses heterogeneous topical concentrations and local delivery. Findings involving collagen, ECM, antioxidant signaling, and angiogenesis are mechanistic — they do not establish a systemic human dose.",
        "**No direct preclinical bridge** exists for the combination: no evidence-based method to select starting ratio, NOAEL, MTD, route-specific safety margin, or human-equivalent combination dose.",
      ],
    },
    {
      id: "mechanism",
      title: "How might BPC-157 and GHK-Cu work?",
      paragraphs: [
        "**BPC-157** preclinical work associates fibroblast migration, VEGFR2/Akt/eNOS pathways, angiogenesis, and tendon/ligament/muscle/GI repair models with inflammatory and oxidative-stress modulation.",
        "**GHK-Cu** laboratory and topical research associates copper transport, collagen/elastin remodeling, MMP/TIMP balance, antioxidant signaling, and keratinocyte/wound activity.",
        "It is biologically plausible the components affect overlapping tissue-remodeling stages. **Plausibility is not proof** — overlapping activity can produce additivity, redundancy, antagonism, or additional risk. No controlled interaction analysis has shown synergy.",
      ],
    },
    {
      id: "results-timeline",
      title: "What results are reported, and when?",
      tables: [
        {
          caption: "Anecdotal time windows (no validated combination timeline)",
          headers: ["Time window", "Anecdotal observations", "Evidence limit"],
          rows: [
            [
              "Days 1–14",
              "Soreness, local irritation, sleep, subjective recovery",
              "Highly vulnerable to expectancy and natural fluctuation",
            ],
            [
              "Weeks 2–6",
              "Pain, mobility, skin appearance, wound symptoms",
              "No controlled combination data",
            ],
            [
              "Weeks 6–12",
              "Continued skin or connective-tissue changes",
              "Confounded by rehab, skin care, training, regression to mean",
            ],
            [
              "After discontinuation",
              "Persistence or return of symptoms",
              "Rarely measured systematically",
            ],
          ],
        },
      ],
      paragraphsAfter: [
        "Visible skin change, pain reduction, and structural healing are different outcomes. A lower pain score does not prove tendon repair. Photographs without consistent lighting, scale, and blinded evaluation are weak evidence.",
      ],
    },
    {
      id: "routes",
      title: "Route of administration",
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
              "GHK-Cu topical history; no validated blend formulation",
              "Topical GHK-Cu cannot validate SC blend; BPC-157 topical unestablished",
            ],
            [
              "Oral",
              "Oral BPC-157 in research discussions",
              "GHK-Cu oral stability and copper coordination differ; 5:1 ratio not equivalent",
            ],
            [
              "Injury-site / local",
              "No controlled evidence",
              "Injecting near damaged tissue adds risk; cannot infer from SC community reports",
            ],
          ],
        },
      ],
    },
    {
      id: "claims",
      title: "Common claims vs evidence",
      widget: "bpc-ghk-claim-checker",
    },
    {
      id: "evidence-ladder",
      title: "Evidence ladder",
      widget: "bpc-ghk-evidence-ladder",
      paragraphsAfter: [
        "The exact blend remains at the bottom of the dosage-evidence hierarchy. A more precise syringe-unit table improves reproducibility; it does **not** raise the clinical evidence level.",
      ],
    },
    {
      id: "blend-comparison",
      title: "BPC-157 + GHK-Cu vs GLOW and KLOW blends",
      tables: [
        {
          caption: "Blend comparison — evidence cannot be transferred",
          headers: ["Blend", "Components", "Transferable to BPC-157 + GHK-Cu?"],
          rows: [
            ["BPC-157 + GHK-Cu", "Two components", "This page's exact subject"],
            [
              "GLOW",
              "GHK-Cu + TB-500 + BPC-157",
              "No — added thymosin-beta-4-related component changes exposure",
            ],
            [
              "KLOW",
              "KPV + GHK-Cu + TB-500 + BPC-157",
              "No — four-component blend with additional interaction questions",
            ],
          ],
        },
      ],
    },
    {
      id: "safety",
      title: "Safety and adverse effects",
      paragraphs: [
        "Very little controlled data exist for the exact combination: acute/chronic toxicity, PK, interaction, MTD, reproductive effects, genotoxicity, immunogenicity, long-term copper handling, and repeat-cycle exposure are all unestablished.",
        "Commonly reported local effects in community GHK-Cu-containing injection reports include burning, stinging, redness, itching, swelling, welts, bruising, tenderness, and persistent nodules — incidence unknown.",
      ],
      widget: "bpc-ghk-adverse-events",
    },
    {
      id: "storage",
      title: "Storage and stability",
      paragraphs: [
        "For a co-formulated 50/10 mg blend, a useful stability program should measure BPC-157 identity/potency, GHK-Cu identity/potency/copper occupancy, free copper, component ratio, aggregation, pH, particulates, container-closure integrity, and microbial control through the intended in-use period.",
        "Discard when the validated in-use period ends, container integrity is lost, unexpected cloudiness/precipitation/particulates/color change occurs, storage cannot be verified, or label/lot/reconstitution records are missing.",
      ],
    },
    {
      id: "anti-doping",
      title: "WADA and tested sport",
      paragraphs: [
        "The 2026 WADA Prohibited List places **BPC-157 in section S0**, Non-Approved Substances, prohibited at all times. Because the blend contains BPC-157, it is **incompatible with drug-tested sport** regardless of whether GHK-Cu is separately named.",
      ],
    },
    {
      id: "bottom-line",
      title: "Bottom line",
      paragraphs: [
        "BPC-157 + GHK-Cu is a two-component research blend with a common commercial composition of **50 mg GHK-Cu plus 10 mg BPC-157**. The most reproducible community convention brings that vial to **3.0 mL** and records **12 U-100 units** as **2 mg GHK-Cu plus 400 mcg BPC-157** once daily for **6 weeks**, followed by **2–3 weeks** without exposure.",
        "That precision describes the arithmetic — not the strength of the evidence. No controlled combination study has established a therapeutic dosage, optimal ratio, injectable GHK-Cu exposure, interaction profile, or synergy. The most defensible research approach keeps the two identities separate, verifies each component analytically, uses a fixed protocol with prospective outcomes and stopping rules, and does not transfer topical GHK-Cu or single-agent BPC-157 findings to the blend.",
      ],
      highlight:
        "Confirm vial ratio, GHK-Cu copper occupancy, BPC-157 free-base vs acetate reporting, theoretical copper exposure, and mixed-vial stability — before trusting any unit chart.",
    },
  ],
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        question: "What is the standard BPC-157 + GHK-Cu dose?",
        answer:
          "No standard clinical dose exists. The most traceable community convention is 2 mg GHK-Cu + 400 mcg BPC-157 once daily from a 50/10 mg vial reconstituted to 3 mL, often for 6 weeks followed by 2–3 weeks off. It remains anecdotal.",
      },
      {
        question: "Is BPC-157 + GHK-Cu the same as GLOW?",
        answer:
          "No. GLOW usually adds a thymosin-beta-4-related component (TB-500). The two-component blend must be analyzed separately.",
      },
      {
        question: "What does 50/10 mean?",
        answer:
          "It usually means 50 mg GHK-Cu and 10 mg BPC-157 per vial. Verify the label and independent component assay; “60 mg blend” alone is not enough.",
      },
      {
        question: "How much is 12 units after adding 3 mL?",
        answer:
          "For a verified 50/10 mg vial at 3.0 mL final volume, 12 U-100 units equal 0.12 mL and contain 2 mg GHK-Cu plus 400 mcg BPC-157.",
      },
      {
        question: "Is 10 units always the same dose?",
        answer:
          "No. At 2.0 mL, 10 units contain 2.5 mg GHK-Cu + 500 mcg BPC-157. At 3.0 mL, they contain about 1.67 mg + 333 mcg. At 4.0 mL, they contain 1.25 mg + 250 mcg.",
      },
      {
        question: "How many vials are needed for six weeks at 2 mg + 400 mcg daily?",
        answer:
          "The 42-day schedule uses 84 mg GHK-Cu and 16.8 mg BPC-157, or 1.68 nominal 50/10 vials. Two vials are required before handling loss is considered.",
      },
      {
        question: "Is GHK the same as GHK-Cu?",
        answer:
          "No. GHK is the tripeptide without coordinated copper. GHK-Cu is a copper complex with different mass and chemical behavior.",
      },
      {
        question: "How much copper is in 2 mg of GHK-Cu?",
        answer:
          "Approximately 316 mcg by theoretical composition when a 401.91 g/mol complex is assumed. That is not a measure of absorbed or bioavailable copper.",
      },
      {
        question: "Is the combination proven to be synergistic?",
        answer:
          "No. The proposed complementarity is mechanistic speculation until a properly controlled factorial study demonstrates an interaction.",
      },
      {
        question: "Does topical GHK-Cu research validate injected GHK-Cu?",
        answer:
          "No. Route, formulation, tissue exposure, metabolism, and safety differ.",
      },
      {
        question: "Can BPC-157 human reports validate the blend?",
        answer:
          "No. They studied BPC-157 without GHK-Cu, often by very different routes and in small or uncontrolled settings.",
      },
      {
        question: "Is BPC-157 + GHK-Cu allowed in tested sport?",
        answer:
          "No. The blend contains BPC-157, which is prohibited at all times under WADA S0.",
      },
      {
        question: "Should the dose be increased during the cycle?",
        answer:
          "There is no evidence-based titration schedule. Automatic escalation makes safety and outcome attribution more difficult. The research template on this page keeps exposure fixed.",
      },
      {
        question: "What happens after a missed exposure?",
        answer:
          "For interpretable research records, document it as missed. Do not double the next exposure or use a catch-up dose.",
      },
      {
        question: "Is a 50/10 blend appropriate for studying the best ratio?",
        answer:
          "No. It can study only the fixed 5:1 mass ratio. Separate component control is required for ratio-finding and clean interaction research.",
      },
    ],
  },
  sources: {
    title: "References",
    items: [
      {
        authors: "Wojcieszuk O et al.",
        title: "BPC-157 and GHK-Cu in Wound Healing and Tissue Repair: A Review",
        detail: "2026 narrative review — parallel molecules, not exact blend trial.",
        href: "https://doi.org/10.12775/QS.2026.54.70818",
      },
      {
        authors: "FDA",
        title: "Pharmacy Compounding Advisory Committee: BPC-157 evaluation",
        detail: "2026 chemistry and safety gaps review.",
        href: "https://www.fda.gov/media/193343/download",
      },
      {
        authors: "Pickart L, Margolina A.",
        title: "Regenerative and Protective Actions of GHK-Cu",
        detail: "2018 — topical/lab context.",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6073405/",
      },
      {
        authors: "Mulder GD et al.",
        title: "Topical GHK-Cu in diabetic neuropathic ulcers",
        detail: "1994 — not injectable blend dosing.",
        href: "https://pubmed.ncbi.nlm.nih.gov/17147644/",
      },
      {
        authors: "Lee E et al.",
        title: "Intra-articular BPC-157 for knee pain: retrospective chart review",
        detail: "BPC-only; not blend evidence.",
        href: "https://pubmed.ncbi.nlm.nih.gov/34324435/",
      },
      {
        authors: "ClinicalTrials.gov",
        title: "GHK-Cu gel punch wounds NCT07437586",
        detail: "Topical wound trial — no injectable dose.",
        href: "https://clinicaltrials.gov/study/NCT07437586",
      },
      {
        authors: "WADA",
        title: "2026 Prohibited List",
        detail: "BPC-157 S0 — prohibited at all times.",
        href: "https://www.wada-ama.org/sites/default/files/2025-09/2026list_en_final_clean_september_2025.pdf",
      },
    ],
  },
  safety: {
    title: "Important Safety Information",
    paragraphs: [
      "BPC-157 + GHK-Cu is a **fixed-ratio commercial blend** with **no controlled human trial** of the exact combination identified and **no US prescribing dose**.",
      "This page documents community protocols and reconstitution arithmetic. It is **not** a clinical dosing, self-injection, or treatment guide. Always translate total blend mass into **two labeled component amounts** plus stoichiometric copper context.",
      "The blend contains **BPC-157**, which is **prohibited in tested sport (WADA S0)**. Confirm GHK-Cu copper complex identity, BPC-157 assay basis, and mixed-vial stability. Seek urgent care for severe allergic, infectious, neurological, or cardiovascular symptoms.",
    ],
  },
};
