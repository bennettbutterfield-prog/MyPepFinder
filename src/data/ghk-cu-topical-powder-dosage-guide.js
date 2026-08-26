/**
 * GHK-Cu Topical Powder — formulation ingredient, not a finished product dose.
 * Historical wound gels: 2% and 4% once daily (Mulder 1994). NCT07437586: 0.1% × 14 days.
 * Proposed facial dose-ranging: 0.01%, 0.05%, 0.10% w/w × 24 weeks.
 * Powder math requires assay correction. ≠ injectable GHK-Cu protocols.
 */

export const GHK_CU_POWDER_COMPLEX_MW = 401.91;
export const GHK_CU_POWDER_COPPER_FRACTION = 0.1581;

export function ghkCuBatchActiveMg({ percentWw, batchGrams }) {
  const pct = Number(percentWw);
  const g = Number(batchGrams);
  if (!Number.isFinite(pct) || pct < 0 || !Number.isFinite(g) || g <= 0) return null;
  return {
    percentWw: pct,
    batchGrams: g,
    activeMg: (pct / 100) * g * 1000,
    mgPerGram: (pct / 100) * 1000,
  };
}

export function ghkCuPowderRequired({ targetActiveMg, activeFraction }) {
  const target = Number(targetActiveMg);
  const frac = Number(activeFraction);
  if (!Number.isFinite(target) || target <= 0 || !Number.isFinite(frac) || frac <= 0) {
    return null;
  }
  return {
    targetActiveMg: target,
    activeFraction: frac,
    powderMg: target / frac,
    nonActiveMg: target / frac - target,
  };
}

export function ghkCuAppliedActive({ percentWw, productGrams }) {
  const pct = Number(percentWw);
  const g = Number(productGrams);
  if (!Number.isFinite(pct) || pct < 0 || !Number.isFinite(g) || g <= 0) return null;
  const mgPerGram = (pct / 100) * 1000;
  const appliedMg = g * mgPerGram;
  return {
    percentWw: pct,
    productGrams: g,
    appliedMg,
    copperMcg: appliedMg * GHK_CU_POWDER_COPPER_FRACTION * 1000,
  };
}

export function ghkCuNestedPercent({ outerPercent, innerActivePercent }) {
  const outer = Number(outerPercent);
  const inner = Number(innerActivePercent);
  if (!Number.isFinite(outer) || !Number.isFinite(inner)) return null;
  const effectivePercent = (outer / 100) * (inner / 100) * 100;
  return {
    outerPercent: outer,
    innerActivePercent: inner,
    effectiveActivePercent: effectivePercent,
    mgPerGram: (effectivePercent / 100) * 1000,
  };
}

export const GHK_TOPICAL_POWDER_IDENTITY = [
  {
    id: "ghk-cu-powder",
    label: "Qualified GHK-Cu powder (Copper Tripeptide-1)",
    verdict: "Formulation ingredient — requires assay and finished-product QC",
    detail:
      "L-glycyl-L-histidyl-L-lysine copper(II) complex. Confirm sequence, copper coordination, active assay basis (as-is vs anhydrous), free copper/peptide, carrier content, and microbial limits before batch math.",
  },
  {
    id: "ghk-free",
    label: "Copper-free GHK (GHK Basic)",
    verdict: "Different molecule — white powder, not blue GHK-Cu",
    detail:
      "GHK (~340.38 g/mol) lacks coordinated copper. Not mass-equivalent to GHK-Cu powder and cannot share concentration tables.",
  },
  {
    id: "prezatide",
    label: "Prezatide copper acetate / bis-complex",
    verdict: "Different entity — ~862.39 g/mol bis(tripeptide)-copper acetate",
    detail:
      "Not interchangeable with 1:1 monocopper GHK-Cu. Certificate must identify actual chemical form.",
  },
  {
    id: "trade-blend",
    label: "Copper Tripeptide-1 trade blend (diluted in carrier)",
    verdict: "Nested percentage — 1 g ingredient ≠ 1 g active",
    detail:
      "Water/glycerin/carrier blends mean label % describes ingredient amount, not pure GHK-Cu mass. Requires quantitative disclosure.",
  },
  {
    id: "injectable-vial",
    label: "Injectable research vial relabeled for serum DIY",
    verdict: "Wrong route/product class",
    detail:
      "Injectable vial labels do not establish cosmetic pH, preservation, stability, or intact-skin suitability. Participants should not handle raw powder.",
  },
];

export const GHK_TOPICAL_POWDER_HUMAN_DOSES = [
  ["FDA-approved GHK-Cu drug dose", "None identified"],
  ["Mulder 1994 wound gels", "2% and 4% · once daily · 2 or 6 mg/cm² ulcer area"],
  ["NCT07437586 (ongoing)", "0.1% gel · once daily · 14 days · paired punch wounds"],
  ["Bishop 1992 venous ulcer cream", "0.4% — reported negative"],
  ["Miller 2006 post-CO₂ laser", "GHK-Cu regimen — null objective endpoints at 12 wk"],
  ["Exact cosmetic anti-aging dose", "Not established from adequately reported trials"],
  ["Common market language", "~0.05%–1% (often label-ambiguous)"],
  ["Proposed facial dose-ranging", "0.01% · 0.05% · 0.10% w/w · 0.50 g daily × 24 wk"],
];

export const GHK_TOPICAL_POWDER_CONCENTRATION_LADDER = [
  { pct: 0.01, mgPerG: 0.1, source: "Proposed intact-skin arm", tier: "Proposed" },
  { pct: 0.05, mgPerG: 0.5, source: "Vendor/formulator convention", tier: "Convention" },
  { pct: 0.1, mgPerG: 1, source: "NCT07437586 · market convention", tier: "Registered trial" },
  { pct: 0.4, mgPerG: 4, source: "Historical venous-stasis cream", tier: "Negative study" },
  { pct: 0.5, mgPerG: 5, source: "Supplier/clinic range", tier: "Convention" },
  { pct: 1.0, mgPerG: 10, source: "“1% copper peptide” claims", tier: "Often ambiguous" },
  { pct: 2.0, mgPerG: 20, source: "Mulder 1994 Iamin 2% gel", tier: "Wound RCT" },
  { pct: 4.0, mgPerG: 40, source: "Mulder 1994 Iamin 4% gel", tier: "Wound RCT" },
];

export const GHK_TOPICAL_POWDER_ASSAY_PRESETS = [
  { id: "1.0", label: "100% active", fraction: 1.0 },
  { id: "0.99", label: "99% assay", fraction: 0.99 },
  { id: "0.95", label: "95% assay", fraction: 0.95 },
  { id: "0.92", label: "92% assay", fraction: 0.92 },
  { id: "0.5", label: "50% blend", fraction: 0.5 },
  { id: "0.1", label: "10% blend", fraction: 0.1 },
  { id: "0.01", label: "1% solution", fraction: 0.01 },
];

export const GHK_TOPICAL_POWDER_BATCH_PRESETS = [
  { id: "0.01", label: "0.01% w/w", percentWw: 0.01 },
  { id: "0.05", label: "0.05% w/w", percentWw: 0.05 },
  { id: "0.10", label: "0.10% w/w", percentWw: 0.1 },
  { id: "0.50", label: "0.50% w/w", percentWw: 0.5 },
  { id: "1.00", label: "1.00% w/w", percentWw: 1.0 },
  { id: "2.00", label: "2.00% w/w (wound)", percentWw: 2.0 },
];

export const GHK_TOPICAL_POWDER_APPLIED_PRESETS = [
  { id: "0.25", label: "0.25 g", grams: 0.25 },
  { id: "0.50", label: "0.50 g (protocol pump)", grams: 0.5 },
  { id: "1.00", label: "1.00 g", grams: 1.0 },
];

export const GHK_TOPICAL_POWDER_PROTOCOL_ARMS = [
  { arm: "A", pct: 0, dailyMg: 0, copperMcg: 0, label: "Vehicle" },
  { arm: "B", pct: 0.01, dailyMg: 0.05, copperMcg: 7.9, label: "0.01% w/w" },
  { arm: "C", pct: 0.05, dailyMg: 0.25, copperMcg: 39.5, label: "0.05% w/w" },
  { arm: "D", pct: 0.1, dailyMg: 0.5, copperMcg: 79.1, label: "0.10% w/w" },
];

export const GHK_TOPICAL_POWDER_PROTOCOL_PHASES = [
  {
    id: "gates",
    phase: "Enabling requirements",
    timing: "Before enrollment",
    detail: "Identity, assay, formulation, microbiology, stability, permeation, dermal safety, ethics/regulatory",
  },
  {
    id: "runin",
    phase: "Washout / run-in",
    timing: "Week −4 to 0",
    detail: "Standardized cleanser, moisturizer, SPF; discontinue retinoids and copper products",
  },
  {
    id: "sentinel",
    phase: "Sentinel phase",
    timing: "First 24 participants",
    detail: "6 per arm · 7- and 28-day safety review before full enrollment",
  },
  {
    id: "treatment",
    phase: "Treatment",
    timing: "24 weeks",
    detail: "0.50 g once daily evening · face · no microneedling/injection",
  },
  {
    id: "follow",
    phase: "Off-treatment follow-up",
    timing: "Week 28",
    detail: "Persistence and delayed safety after final application",
  },
];

export const GHK_TOPICAL_POWDER_COMPARE = {
  clinical: {
    title: "Published / registered human research",
    status: "Indication- and formulation-specific",
    rows: [
      ["Concentrations", "0.1% (ongoing) · 0.4% (negative) · 2% · 4% wound gels"],
      ["Application", "Metered by wound area (Mulder) or 0.50 g pump (proposed facial)"],
      ["Frequency", "Once daily in well-described protocols"],
      ["Barrier", "Open wound or procedure-altered skin in key studies"],
      ["Evidence value", "Exact gel, timing, and care system — not a universal %"],
    ],
  },
  anecdotal: {
    title: "Market and DIY practice",
    status: "Conventions · ambiguous label basis",
    rows: [
      ["Concentrations", "Commonly 0.05%–1%; sometimes 2%–3%"],
      ["Application", "“Few drops,” one pump, or unspecified"],
      ["Powder handling", "Ad hoc dissolution — often no assay correction"],
      ["Barrier", "Intact skin; sometimes microneedling stacks"],
      ["Evidence value", "Documents practice; does not prove dose-response"],
    ],
  },
};

export const GHK_TOPICAL_POWDER_CLAIMS = [
  {
    id: "proven-1pct",
    claim: "1% GHK-Cu is the clinically proven facial dose",
    verdict: "False",
    detail:
      "1% is a common marketing convention. Labels often mean 1% trade ingredient, 1% supplier solution, or 1% complex — not 10 mg pure active per gram.",
  },
  {
    id: "wound-to-face",
    claim: "2% wound gel concentration works for intact facial skin",
    verdict: "Unsupported transfer",
    detail:
      "Mulder 2%/4% gels were sterile unit-dose ulcer products with area-normalized dosing on debrided tissue — not cosmetic intact-skin protocols.",
  },
  {
    id: "hplc-assay",
    claim: "99% HPLC purity = 99 mg active per 100 mg powder",
    verdict: "False",
    detail:
      "HPLC area purity ≠ quantitative active assay. Water, salts, carriers, and free copper may not appear in the same calculation.",
  },
  {
    id: "blue-pure",
    claim: "Blue color confirms GHK-Cu purity",
    verdict: "Insufficient",
    detail:
      "Color suggests copper coordination but does not prove sequence, assay, stoichiometry, or microbial quality.",
  },
  {
    id: "water-only",
    claim: "Dissolve powder in water only for a finished serum",
    verdict: "Incomplete",
    detail:
      "Solubility is one requirement. Human-use aqueous products need pH, preservation, uniformity, container qualification, and stability.",
  },
  {
    id: "injectable-same",
    claim: "Injectable GHK-Cu doses transfer to topical powder",
    verdict: "False",
    detail:
      "SC milligram protocols have no validated human study and address systemic exposure — not finished topical concentration on intact skin.",
  },
  {
    id: "microneedle-ok",
    claim: "Cosmetic serum is safe through microneedle channels",
    verdict: "Not established",
    detail:
      "Microneedles markedly increase transport in ex-vivo models. Preservatives and excipients were not evaluated for intradermal exposure.",
  },
  {
    id: "more-better",
    claim: "Higher % always works better",
    verdict: "Unproven",
    detail:
      "2%–4% wound data do not establish that high-strength intact-skin products outperform 0.01%–0.1% arms.",
  },
  {
    id: "nested-1",
    claim: "1% copper peptide complex = 1% pure GHK-Cu",
    verdict: "Often false",
    detail:
      "If serum contains 1% of a trade ingredient that is itself 1% active, finished product is 0.01% (0.1 mg/g) — not 10 mg/g.",
  },
  {
    id: "fridge-preservative",
    claim: "Refrigeration replaces preservatives",
    verdict: "Invalid",
    detail:
      "Refrigeration alone does not validate microbial safety or shelf life. Storage must come from formulation data.",
  },
];

export const GHK_TOPICAL_POWDER_EVIDENCE_LADDER = [
  { level: "FDA-approved topical dose", exists: "None", confidence: "None" },
  { level: "Controlled wound study", exists: "2% · 4% gels · Mulder 1994", confidence: "Moderate · ulcer-specific" },
  { level: "Ongoing registered trial", exists: "0.1% gel · NCT07437586", confidence: "Protocol only" },
  { level: "Controlled post-procedure", exists: "CO₂ laser — null objective result", confidence: "Negative signal" },
  { level: "Cosmetic human studies", exists: "Small trials · limited dose transparency", confidence: "Low–moderate" },
  { level: "Ex-vivo penetration", exists: "Hostynek · Li microneedle", confidence: "Mechanistic" },
  { level: "Market / DIY protocols", exists: "~0.05%–1% · ambiguous basis", confidence: "Very low" },
];

export const GHK_TOPICAL_POWDER_AE_SIMPLE = [
  {
    category: "Local topical",
    note: "Stinging, erythema, pruritus, dermatitis, blue-green discoloration — limited formal AE rates for assayed cosmetic use",
  },
  {
    category: "Copper-related",
    note: "Degradation or free copper increases labile copper burden; Wilson disease is a special concern",
  },
  {
    category: "Powder handling",
    note: "Airborne dust, eye/mucosal exposure — occupational controls required in manufacturing",
  },
  {
    category: "Barrier disruption",
    note: "Microneedling, laser, and open wounds change delivery — product for intact skin ≠ channel/wound use",
  },
];

export const GHK_TOPICAL_POWDER_AE_FULL = [
  {
    domain: "Local / cosmetic",
    items: "Burning, scaling, allergic contact dermatitis, staining of skin/textiles/hair",
  },
  {
    domain: "Systemic copper",
    items: "Unknown intact-scalp/face absorption; monitor copper/ceruloplasmin in research; GI/hepatic symptoms with excess systemic copper",
  },
  {
    domain: "Formulation failure",
    items: "Precipitation, pH drift, pump blockage, microbial growth in unpreserved aqueous DIY mixes",
  },
  {
    domain: "Urgent red flags",
    items: "Facial swelling, dyspnea, widespread hives, jaundice, rapidly worsening application-site infection",
  },
];

export const GHK_CU_TOPICAL_POWDER_DOSAGE_GUIDE = {
  title: "GHK-Cu Topical Powder Dosage: Concentration Math, Evidence, and Research Protocol",
  updated: "Updated August 2026",
  callout:
    "**Research note:** GHK-Cu topical powder is a **formulation ingredient**, not a finished serum, cream, or injectable. Label **%** may describe pure complex, peptide content, copper content, or a **diluted carrier blend** — not interchangeable. **Powder calculations require assay correction.** Historical **2%/4% wound gels** cannot be converted directly into cosmetic facial protocols.",
  intro: [
    "Human topical dosing is **formulation-specific**. The best-reported wound trial used **2% and 4% GHK-Cu gels** once daily, metered by ulcer area (**2 or 6 mg/cm²**). **NCT07437586** uses **0.1% gel × 14 days** on paired punch wounds — twentyfold lower than the historical wound arms.",
    "Cosmetic facial studies are often summarized as positive, but many accessible reports **do not disclose** active concentration, delivered mass, vehicle, or assay basis. Commercial **“1% copper peptide”** is frequently **ambiguous** — only **1% pure GHK-Cu w/w** means **10 mg active per gram** of finished product.",
    "A defensible new **intact-facial** study should begin **below the historical wound-gel range**: proposed arms **0.01%, 0.05%, and 0.10% w/w** at **0.50 g once daily × 24 weeks** after formulation, penetration, and tox gates. **Raw powder should not be applied neat.**",
  ],
  glance: {
    title: "GHK-Cu topical powder in 30 seconds",
    table: {
      headers: ["Question", "Evidence summary"],
      rows: [
        ["**Identity**", "GHK-Cu · Copper Tripeptide-1 · powder = ingredient, not dose"],
        ["**≠**", "GHK Basic · prezatide · injectable vial · trade blend without assay"],
        ["**Wound RCT**", "2% · 4% gel · once daily · area-metered"],
        ["**Ongoing trial**", "0.1% gel · NCT07437586 · 14 days"],
        ["**Cosmetic dose established?**", "No — dose transparency limited"],
        ["**Market convention**", "~0.05%–1% (label basis often unclear)"],
        ["**Powder math**", "Powder mg = target active ÷ active fraction"],
        ["**Proposed facial study**", "0.01% · 0.05% · 0.10% · 0.50 g/day × 24 wk"],
      ],
    },
  },
  sections: [
    {
      id: "what-is",
      title: "What is GHK-Cu topical powder?",
      paragraphs: [
        "GHK-Cu is **glycyl-L-histidyl-L-lysine** complexed with **copper(II)** — INCI **Copper Tripeptide-1**. “Topical powder” describes **physical form and intended route**, not a standardized drug product.",
        "Two blue powders under the same name can differ in stoichiometry, counterion, hydration, **active assay**, free copper/peptide, carrier (mannitol/maltodextrin), water content, and microbial quality — all change delivered active mass from a given powder weight.",
      ],
      widget: "ghk-topical-powder-identity-gate",
    },
    {
      id: "mass-standards",
      title: "GHK, GHK-Cu, and prezatide are not one mass standard",
      paragraphs: [
        "Representative **401.91 g/mol** monocopper complex: elemental copper **≈15.81%** of complex mass. **Prezatide copper acetate** (~862.39 g/mol) is **not** mass-equivalent to 1:1 GHK-Cu.",
      ],
      widget: "ghk-topical-powder-copper-calc",
      tables: [
        {
          caption: "Mass entities (why assay basis matters)",
          headers: ["Name", "Approx. MW", "Notes"],
          rows: [
            ["GHK (copper-free)", "340.38 g/mol", "≠ GHK-Cu"],
            ["Monocopper GHK-Cu", "~401.91 g/mol", "Common 1:1 complex basis"],
            ["Prezatide copper acetate", "862.39 g/mol", "Bis-complex entity"],
            ["Trade blend", "Product-specific", "1 g ingredient ≠ 1 g active"],
          ],
        },
      ],
    },
    {
      id: "certificate",
      title: "What a powder certificate must establish",
      paragraphs: [
        "Generic **“99% HPLC purity”** does not prove 99% correctly complexed GHK-Cu. Require identity, complex identity, **quantitative active assay** (with basis), copper-to-peptide ratio, free copper/GHK, related substances, water, solvents, elemental impurities, and microbial limits.",
      ],
    },
    {
      id: "regulatory",
      title: "Regulatory and research status",
      paragraphs: [
        "Copper Tripeptide-1 appears in **cosmetics** — not a therapeutic wound-healing authorization. FDA May 2026: **GHK-Cu except injectable** in **503A Category 1** (interim compounding evaluation) — does **not** establish efficacy or standard dose.",
        "This page treats cosmetic use as **formulation convention**, published studies as **indication-specific**, registered trials as **ongoing research**, and proposed protocols as **investigator designs** requiring full review.",
      ],
    },
    {
      id: "human-doses",
      title: "Dosage used in human topical research",
      paragraphs: [
        "**Mulder 1994:** 181 adults · diabetic ulcers · **0%, 2%, 4%** GHK-Cu in HPMC gel · once daily · **2 mg/cm² (2%)** or **6 mg/cm² (4%)** · up to 8 weeks. Immediate **2%** after debridement improved several plantar-ulcer outcomes; delayed treatment did not show the same advantage.",
        "**NCT07437586:** **0.1%** gel · once daily · **14 days** · paired **5-mm punch wounds** · ~60 healthy adults. **Miller 2006:** post-CO₂ laser — **no significant objective improvement** at 12 weeks despite patient satisfaction signal.",
      ],
      widget: "ghk-topical-powder-human-doses",
    },
    {
      id: "penetration",
      title: "Human skin penetration evidence",
      paragraphs: [
        "GHK-Cu is hydrophilic — molecular size alone does not predict intact-skin penetration. **Hostynek** studied **0.68% aqueous copper as GHK-copper complex** under infinite-dose ex-vivo conditions. **Li 2015:** microneedle pretreatment markedly increased transport — does **not** validate home microneedling with cosmetic serums.",
        "Intact-skin exposure cannot be inferred from container **%** alone. Wound, post-laser, microneedled, and intact facial skin are **different routes** in practical safety terms.",
      ],
    },
    {
      id: "landscape",
      title: "Evidence-tiered concentration landscape",
      widget: "ghk-topical-powder-concentration-ladder",
      paragraphsAfter: [
        "The cosmetic **0.05%–1%** range is assembled from ingredient directories, supplier guides, product labels, and clinic pages — **not one coherent clinical protocol**.",
      ],
    },
    {
      id: "compare",
      title: "Clinical versus market protocols",
      widget: "ghk-topical-powder-clinical-vs-anecdotal",
    },
    {
      id: "batch-math",
      title: "Powder-to-finished-product concentration math",
      paragraphs: [
        "**w/w:** Target active (mg) = (% ÷ 100) × batch mass (g) × 1000. **Powder required (mg) = target active ÷ active fraction.** Calculate to **final batch mass**, not initial liquid volume alone.",
        "**w/v:** mg/mL = 10 × % w/v. For water-like products, w/w and w/v may appear close but are **not interchangeable** without density and specification basis.",
      ],
      widget: "ghk-topical-powder-batch-calc",
    },
    {
      id: "assay",
      title: "Assay correction",
      paragraphs: [
        "A **95%** assay powder requires **105.3 mg** to deliver **100 mg** active. A **10%** carrier blend requires **1,000 mg** for **100 mg** active. HPLC area purity should not substitute for active assay without mass balance.",
      ],
      widget: "ghk-topical-powder-assay-calc",
      tables: [
        {
          caption: "Powder required for 100 mg assayed active",
          headers: ["Specification", "Active fraction", "Powder required"],
          rows: [
            ["100% theoretical", "1.000", "100.0 mg"],
            ["99% assay", "0.990", "101.0 mg"],
            ["95% assay", "0.950", "105.3 mg"],
            ["92% assay (worked example)", "0.920", "108.7 mg"],
            ["10% blend", "0.100", "1,000 mg"],
            ["1% supplier solution", "0.010", "10,000 mg"],
          ],
        },
      ],
    },
    {
      id: "nested",
      title: "Nested percentages and trade ingredients",
      paragraphs: [
        "If a serum contains **1% of a trade ingredient** that is itself **1% GHK-Cu active**, finished product active = **1% × 1% = 0.01%** (**0.1 mg/g**) — not **10 mg/g**.",
      ],
      widget: "ghk-topical-powder-nested-percent",
    },
    {
      id: "applied",
      title: "Applied topical dose math",
      paragraphs: [
        "**Applied active (mg) = product mass (g) × active concentration (mg/g).** Concentration alone is not a dose without application mass.",
      ],
      widget: "ghk-topical-powder-applied-calc",
    },
    {
      id: "wound-warning",
      title: "Why published wound doses should not become cosmetic recipes",
      paragraphs: [
        "Historical **2%/4%** Iamin gel targeted **debrided ulcers** under sterile unit-dose wound care — not preserved facial cosmetics on intact skin. Transfer ignores barrier differences, HPMC vehicle, area metering, and absence of cosmetic dose-response data.",
        "Higher concentration can increase irritation, staining, instability, and free-copper burden **without** improving dermal delivery.",
      ],
    },
    {
      id: "protocol",
      title: "Complete investigator-ready research protocol",
      paragraphs: [
        "**24-week randomized, double-blind, vehicle-controlled, parallel-group dose-ranging study** in mild-to-moderate facial photoaging. Primary: lateral-canthal wrinkle severity at week 24. Arms: vehicle, **0.01%, 0.05%, 0.10% w/w** — **0.50 g once daily** evening application. **0.1%** upper arm aligns with NCT07437586 while avoiding unsupported **2%–4%** wound transfer.",
      ],
      widget: "ghk-topical-powder-protocol-timeline",
      paragraphsAfter: [
        "Requires GMP finished product — participants do **not** handle powder. Enabling gates: identity, assay, formulation, microbiology, stability, permeation, dermal safety, ethics/regulatory approval.",
      ],
    },
    {
      id: "formulation",
      title: "Formulation controls for a topical powder study",
      paragraphs: [
        "Screen pH for speciation and stability. Test excipient compatibility (chelators, reducing agents, acids, botanicals). Aqueous products require **validated preservation** — refrigerator ≠ preservation system. Blue color does not quantify uniformity; gravimetric mixing and content uniformity testing are required.",
      ],
    },
    {
      id: "safety",
      title: "Safety and adverse effects",
      widget: "ghk-topical-powder-adverse-events",
    },
    {
      id: "mechanism",
      title: "Mechanism of action",
      paragraphs: [
        "GHK-Cu may influence ECM turnover, fibroblast signaling, collagen/GAG production, inflammatory and oxidative pathways, and angiogenesis. Mechanism does **not** determine human topical concentration, prove penetration, or guarantee visible anti-aging effect.",
      ],
    },
    {
      id: "claims",
      title: "Common claims vs evidence",
      widget: "ghk-topical-powder-claim-checker",
    },
    {
      id: "evidence-ladder",
      title: "Dosage evidence ladder",
      widget: "ghk-topical-powder-evidence-ladder",
    },
    {
      id: "bottom-line",
      title: "Bottom line",
      paragraphs: [
        "GHK-Cu topical powder is **not a dose by itself**. The usable research dose combines **verified identity, assayed active fraction, finished concentration, application mass, frequency, duration, vehicle, and barrier status**.",
        "Human evidence spans **0.1% ongoing acute-wound study**, historical **2%/4% wound gels**, incompletely reported cosmetic studies, and a **null post-laser trial**. For intact facial skin, the defensible next step is a **manufactured vehicle-controlled dose-ranging study** — not unsupervised powder-to-serum conversion.",
      ],
      highlight:
        "Assay-correct powder math ≠ clinical authorization. 2% wound gel ≠ 2% face serum. 1% label ≠ 1% pure active without quantitative disclosure.",
    },
  ],
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        question: "What concentration is clinically proven for facial anti-aging?",
        answer:
          "No single concentration is established by adequately reported, replicated independent facial trials. The strongest exact-dose evidence comes from wound gels, not routine intact-skin cosmetic use.",
      },
      {
        question: "Is 1% GHK-Cu the standard topical dose?",
        answer:
          "It is a common marketing convention, not a universal clinical standard. The label must state whether 1% refers to pure active, a supplier solution, or a multi-ingredient complex.",
      },
      {
        question: "How much powder makes a 0.1% product?",
        answer:
          "On a pure-active basis, 0.1% w/w equals 1 mg active per gram, or 100 mg active in a 100 g batch. Actual powder mass must be corrected for assay and carrier content.",
      },
      {
        question: "Is 0.1% the same as 1 mg/mL?",
        answer:
          "For 0.1% w/v: yes (1 mg/mL). For 0.1% w/w: equals 1 mg/g. They are numerically close only when density is near 1 g/mL and the specification basis is defined.",
      },
      {
        question: "Does 99% HPLC purity mean 99 mg active per 100 mg powder?",
        answer:
          "Not necessarily. HPLC area purity and quantitative active assay are different measurements.",
      },
      {
        question: "Is GHK-Cu topical powder the same as GHK Basic?",
        answer:
          "No. GHK Basic is copper-free Gly-His-Lys. GHK-Cu contains coordinated copper with different mass, color, and formulation behavior.",
      },
      {
        question: "Can injectable GHK-Cu powder be turned into a serum?",
        answer:
          "An injectable vial label does not establish cosmetic suitability, preservation, pH, stability, or skin compatibility. Route-specific product development is still required.",
      },
      {
        question: "Can topical powder be dissolved only in water?",
        answer:
          "Solubility is only one requirement. An aqueous human-use product also needs pH control, compatible excipients, microbial protection, uniformity, and stability data.",
      },
      {
        question: "Should GHK-Cu be applied once or twice daily?",
        answer:
          "Well-described wound studies use once-daily dosing. Twice-daily cosmetic schedules circulate without robust comparative trial support.",
      },
      {
        question: "Can GHK-Cu be used after microneedling?",
        answer:
          "Microneedles substantially change penetration. A product designed for intact skin should not be assumed suitable for intradermal exposure through fresh channels.",
      },
    ],
  },
  sources: {
    title: "References",
    items: [
      {
        authors: "Mulder GD et al.",
        title: "Enhanced healing of ulcers in patients with diabetes by topical GHK-Cu",
        detail: "2% and 4% gels · once daily · area-metered dosing.",
        href: "https://doi.org/10.1046/j.1524-475X.1994.20406.x",
      },
      {
        authors: "ClinicalTrials.gov",
        title: "NCT07437586 — Topical GHK-Cu gel for acute wound healing",
        detail: "0.1% gel · 14 days · paired punch wounds.",
        href: "https://clinicaltrials.gov/study/NCT07437586",
      },
      {
        authors: "Miller TR et al.",
        title: "Copper tripeptide complex on CO2 laser-resurfaced skin",
        detail: "Null objective endpoints at 12 weeks.",
        href: "https://pubmed.ncbi.nlm.nih.gov/16847171/",
      },
      {
        authors: "Hostynek JJ et al.",
        title: "Human skin penetration of a copper tripeptide in vitro",
        detail: "Ex-vivo retention/penetration — not cosmetic efficacy.",
        href: "https://doi.org/10.1007/s00011-010-0238-9",
      },
      {
        authors: "FDA",
        title: "Bulk Drug Substances — 503A Category 1 (May 2026)",
        detail: "GHK-Cu except injectable — interim compounding classification.",
        href: "https://www.fda.gov/media/94155/download",
      },
      {
        authors: "European Commission CosIng",
        title: "Copper Tripeptide-1 ingredient record",
        detail: "Cosmetic ingredient identity reference.",
        href: "https://ec.europa.eu/growth/tools-databases/cosing/details/55687",
      },
    ],
  },
};
