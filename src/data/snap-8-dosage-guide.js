/**
 * SNAP-8 (acetyl octapeptide-3) dosage guide.
 * Topical cosmetic ingredient — 3–10% of 0.05% solution = 0.0015%–0.005% pure peptide (15–50 mcg/g).
 * No FDA drug dose · no validated injectable dose.
 */

export const SNAP8_MW = 1075.2;
export const SNAP8_NMOL_TO_MCG = 1.075;
export const SNAP8_SOLUTION_PEPTIDE_PCT = 0.05;
export const SNAP8_SUPPLIER_MIN = 3;
export const SNAP8_SUPPLIER_MAX = 10;

export function snap8PurePctFromSolutionPct(solutionPct) {
  const pct = Number(solutionPct);
  if (!Number.isFinite(pct) || pct <= 0) return null;
  return pct * (SNAP8_SOLUTION_PEPTIDE_PCT / 100);
}

export function snap8McgPerGram(purePct) {
  const pct = Number(purePct);
  if (!Number.isFinite(pct) || pct <= 0) return null;
  return pct * 10; // 0.005% = 50 mcg/g
}

export function snap8AppliedDose({ purePct, gramsApplied }) {
  const mcgPerG = snap8McgPerGram(purePct);
  const g = Number(gramsApplied);
  if (mcgPerG == null || !Number.isFinite(g) || g <= 0) return null;
  const totalMcg = mcgPerG * g;
  return {
    purePct,
    gramsApplied: g,
    mcgPerGram: mcgPerG,
    totalMcg,
    totalMg: totalMcg / 1000,
  };
}

export function snap8CumulativeTopical({ mcgPerApplication, applicationsPerDay, days }) {
  const dose = Number(mcgPerApplication);
  const freq = Number(applicationsPerDay);
  const d = Number(days);
  if (
    !Number.isFinite(dose) ||
    dose <= 0 ||
    !Number.isFinite(freq) ||
    freq <= 0 ||
    !Number.isFinite(d) ||
    d <= 0
  ) {
    return null;
  }
  const dailyMcg = dose * freq;
  const totalMcg = dailyMcg * d;
  return { mcgPerApplication: dose, applicationsPerDay: freq, days: d, dailyMcg, totalMcg, totalMg: totalMcg / 1000 };
}

export const SNAP8_IDENTITY = [
  {
    id: "snap8",
    label: "SNAP-8 / acetyl octapeptide-3",
    verdict: "This page's subject — Ac-EEMQRRAD-NH₂ cosmetic octapeptide",
    detail:
      "MW ~1075.2 Da · CAS 868844-74-0 · trade name for dilute aqueous cosmetic ingredient. Topical route only in human evidence.",
  },
  {
    id: "argireline",
    label: "Argireline (acetyl hexapeptide-8)",
    verdict: "Related hexapeptide precursor — not dose-equivalent",
    detail: "Ac-EEMQRR-NH₂ · shorter SNAP-25-mimetic lineage. Evidence does not transfer directly to SNAP-8.",
  },
  {
    id: "botox",
    label: "Botulinum toxin type A",
    verdict: "Different substance, route, mechanism, and regulatory status",
    detail: "Enzymatically cleaves SNAP-25 · clinician injection · product-specific units. Not a numerical comparator.",
  },
  {
    id: "vial",
    label: "Lyophilized research vial + injection claims",
    verdict: "No validated human injectable dose",
    detail: "Online SC/intradermal schedules are marketing — no human PK, safety, or efficacy study for injection.",
  },
];

export const SNAP8_SOLUTION_TABLE = [
  { solutionPct: 3, purePct: 0.0015, mcgPerG: 15, solutionPer100g: "3 g", peptidePer100g: "1.5 mg" },
  { solutionPct: 6, purePct: 0.003, mcgPerG: 30, solutionPer100g: "6 g", peptidePer100g: "3.0 mg" },
  { solutionPct: 10, purePct: 0.005, mcgPerG: 50, solutionPer100g: "10 g", peptidePer100g: "5.0 mg" },
];

export const SNAP8_APPLIED_MASS = [
  { purePct: 0.0015, g005: 0.75, g025: 3.75, g050: 7.5 },
  { purePct: 0.003, g005: 1.5, g025: 7.5, g050: 15 },
  { purePct: 0.005, g005: 2.5, g025: 12.5, g050: 25 },
];

export const SNAP8_HUMAN_STUDIES = [
  {
    study: "Lipotec manufacturer",
    concentration: "10% of 0.05% solution",
    purePct: "0.005% (50 mcg/g)",
    schedule: "BID × 28 d periocular",
    n: "17 women",
    finding: "Mean wrinkle depth −34.98%; max individual ~63%",
  },
  {
    study: "Moy 2022 (secondary)",
    concentration: "3% of 0.05% solution",
    purePct: "0.0015% (15 mcg/g)",
    schedule: "BID × 28 d split-face",
    n: "Prior supplier data",
    finding: "Mean −7.1%; max 38% wrinkle depth",
  },
  {
    study: "Shin 2024 microneedle",
    concentration: "0.03% in matrix + 3 co-actives",
    purePct: "Not isolatable",
    schedule: "Overnight daily × 14 d then q3d to d28",
    n: "21 completers",
    finding: "Combination patch favored — SNAP-8 mass/patch not reported",
  },
  {
    study: "Avcil 2020 microneedle",
    concentration: "Undisclosed multi-peptide patch",
    purePct: "Not reported",
    schedule: "12 weeks",
    n: "Industry-funded",
    finding: "Fine lines −25.8% — cannot attribute to SNAP-8 alone",
  },
  {
    study: "Moy 2022 serum",
    concentration: "Multi-ingredient serum",
    purePct: "Undisclosed",
    schedule: "BID × 12 wk whole face",
    n: "31 completers",
    finding: "Open-label — product-level, not monotherapy",
  },
  {
    study: "Ji 2020 analytical",
    concentration: "1.42 mg patch extracted",
    purePct: "76.9 ± 8.6 ng SNAP-8",
    schedule: "QC method only",
    n: "4 patches",
    finding: "Matrix-matched LC-MS/MS — not efficacy dose",
  },
];

export const SNAP8_EVIDENCE_HIERARCHY = [
  ["Tier A — Approved drug label", "None", "No FDA drug dose for SNAP-8"],
  ["Tier B — Controlled peptide-specific trial", "None adequate yet", "No optimal concentration established"],
  ["Tier C — Manufacturer human studies", "0.0015% and 0.005% topical", "Reconstructable concentration · limited independence"],
  ["Tier D — Combination products", "Microneedle patches/serums", "Finished-product signals · not isolated SNAP-8"],
  ["Tier E — In-vitro/analytical", "SNARE assays · LC-MS/MS", "Mechanism and QC only"],
  ["Tier F — Supplier guidance", "3%–10% of 0.05% solution", "Formulation convention"],
  ["Tier G — Vial/injection online", "Fixed mcg SC claims", "No human injection record"],
];

export const SNAP8_ANECDOTAL_PROTOCOLS = [
  {
    id: "supplier-low",
    label: "Supplier range low",
    dose: "3% of 0.05% solution",
    pure: "0.0015% · 15 mcg/g",
    frequency: "Twice daily",
    basis: "Supplier use level · Moy secondary report",
  },
  {
    id: "supplier-high",
    label: "Manufacturer study",
    dose: "10% of 0.05% solution",
    pure: "0.005% · 50 mcg/g",
    frequency: "Twice daily × 28 d",
    basis: "Lipotec technical brochure · 17 women",
  },
  {
    id: "market",
    label: "Commercial serums",
    dose: "Often undisclosed",
    pure: "Unknown",
    frequency: "1–2× daily · 4–12 wk",
    basis: "Market convention · concentration rarely stated",
  },
  {
    id: "proposed",
    label: "Proposed RCT arms",
    dose: "0.0015 / 0.003 / 0.005% pure peptide",
    pure: "Assayed w/w",
    frequency: "BID × 12 wk · 2 mg/cm²",
    basis: "Investigator split-face protocol",
  },
  {
    id: "inject",
    label: "Online vial injection",
    dose: "Fixed mcg SC (e.g. 10 mg vial)",
    pure: "N/A",
    frequency: "Seller-dependent",
    basis: "Unsupported — no human injection study",
  },
];

export const SNAP8_CUMULATIVE_PRESETS = [
  { id: "005-bid-28", label: "0.005% · 0.05 g/app · BID × 28 d", mcgPerApp: 2.5, freq: 2, days: 28 },
  { id: "0015-bid-28", label: "0.0015% · 0.05 g/app · BID × 28 d", mcgPerApp: 0.75, freq: 2, days: 28 },
  { id: "005-bid-84", label: "Proposed 0.005% · BID × 12 wk", mcgPerApp: 2.5, freq: 2, days: 84 },
  { id: "003-bid-84", label: "Proposed 0.003% · BID × 12 wk", mcgPerApp: 1.5, freq: 2, days: 84 },
];

export const SNAP8_COMPARE = {
  clinical: {
    title: "Human topical evidence",
    status: "Manufacturer + secondary reports · combination studies",
    rows: [
      ["Pure peptide range", "0.0015%–0.005% w/w"],
      ["Supplier solution", "3%–10% of 0.05% premix"],
      ["Frequency", "Twice daily in manufacturer reports"],
      ["Duration", "28 days in key studies"],
      ["Injectable dose", "None established"],
    ],
  },
  anecdotal: {
    title: "Market / unsupported practice",
    status: "Undisclosed serums · vial injection claims",
    rows: [
      ["Serum concentration", "Often undisclosed"],
      ["'10% SNAP-8' error", "May mean 10% premix ≠ 10% pure peptide"],
      ["Injection vials", "10 mg lyophilized · no human PK"],
      ["Microneedling DIY", "Different route · not authorized by topical data"],
      ["Pump/drop dose", "Unvalidated without gravimetric testing"],
    ],
  },
};

export const SNAP8_PRECLINICAL = [
  { model: "SNARE complex", dose: "Not fully reported", outcome: "Reduced assembly/stability — manufacturer assay" },
  { model: "Chromaffin cells", dose: "100 µM (~107.5 mcg/mL)", outcome: "Catecholamine release modulation — bypasses skin" },
  { model: "Primary neurons", dose: "0.75–1.5 mM", outcome: "Dose-dependent glutamate release reduction" },
  { model: "Argireline lineage", dose: "Hexapeptide data", outcome: "Supports SNARE-mimetic hypothesis · not SNAP-8 dose" },
];

export const SNAP8_MICRONEEDLE_VS_TOPICAL = [
  { feature: "Conventional topical max", value: "0.005% pure · 50 mcg/g" },
  { feature: "Shin 2024 matrix", value: "0.03% SNAP-8 + 3 co-actives" },
  { feature: "Mass per patch", value: "Not reported (clinical) · 76.9 ng analytical QC" },
  { feature: "Route equivalence", value: "Not equivalent — barrier disruption changes delivery" },
  { feature: "Attribution", value: "Combination products cannot establish monotherapy dose" },
];

export const SNAP8_PROTOCOL_ARMS = [
  { arm: "Vehicle", purePct: 0, mcgPerApp: 0, mcgPerDay: 0, wk12Total: 0 },
  { arm: "Low", purePct: 0.0015, mcgPerApp: 0.75, mcgPerDay: 1.5, wk12Total: 126 },
  { arm: "Mid", purePct: 0.003, mcgPerApp: 1.5, mcgPerDay: 3.0, wk12Total: 252 },
  { arm: "High", purePct: 0.005, mcgPerApp: 2.5, mcgPerDay: 5.0, wk12Total: 420 },
];

export const SNAP8_CLAIMS = [
  {
    id: "10pct-pure",
    claim: "10% SNAP-8 means 10% pure peptide in the cream",
    verdict: "False",
    detail: "10% of 0.05% solution = 0.005% pure peptide. Ten percent pure would be 2,000× more concentrated.",
  },
  {
    id: "63-mean",
    claim: "SNAP-8 reduces wrinkles by 63%",
    verdict: "Misleading",
    detail: "63% was a maximum individual result; reported group mean was ~35% in manufacturer data.",
  },
  {
    id: "topical-botox",
    claim: "SNAP-8 is topical Botox",
    verdict: "False",
    detail: "Different mechanism (SNARE competition vs enzymatic cleavage), route, potency, and evidence.",
  },
  {
    id: "inject",
    claim: "Subcutaneous SNAP-8 is studied and effective",
    verdict: "Unsupported",
    detail: "No human injection dose, PK, or safety study located. Topical findings do not justify injection.",
  },
  {
    id: "microneedle-same",
    claim: "0.03% microneedle matrix equals 0.03% serum",
    verdict: "False",
    detail: "Different route, matrix, release, co-actives, and barrier exposure.",
  },
  {
    id: "pump-dose",
    claim: "One pump equals a scientific dose",
    verdict: "Incomplete",
    detail: "Requires gravimetric pump calibration and variability testing.",
  },
  {
    id: "placed-absorbed",
    claim: "mcg/g on skin equals tissue dose",
    verdict: "Unproven",
    detail: "No validated human dermal bioavailability for conventional topical SNAP-8. Placed ≠ absorbed.",
  },
  {
    id: "argireline-same",
    claim: "Argireline doses apply to SNAP-8",
    verdict: "Invalid extrapolation",
    detail: "Different peptide length and evidence record.",
  },
  {
    id: "more-better",
    claim: "Higher peptide % always works better",
    verdict: "Unproven",
    detail: "No adequate head-to-head randomized concentration trial established monotonic response.",
  },
  {
    id: "vial-dose",
    claim: "A 10 mg vial defines the dose",
    verdict: "False",
    detail: "Vial mass is inventory. Topical dose requires concentration × application mass.",
  },
];

export const SNAP8_EVIDENCE_LADDER = [
  { level: "0.05% premix composition", exists: "Supplier documentation", confidence: "Moderate–high" },
  { level: "3–10% → 0.0015–0.005% math", exists: "Direct arithmetic", confidence: "High" },
  { level: "0.005% used topically in humans", exists: "Manufacturer study n=17", confidence: "Moderate" },
  { level: "0.0015% used topically", exists: "Secondary supplier-linked report", confidence: "Moderate–low" },
  { level: "vs vehicle wrinkle improvement", exists: "Small manufacturer data", confidence: "Low" },
  { level: "0.005% > 0.0015% efficacy", exists: "No head-to-head RCT", confidence: "Very low" },
  { level: "Reaches neuromuscular junction", exists: "Not demonstrated", confidence: "Very low" },
  { level: "Microneedle combination products", exists: "Controlled/prospective studies", confidence: "Moderate for product" },
  { level: "Injectable human dose", exists: "None", confidence: "Absent" },
  { level: "Long-term daily safety", exists: "Limited surveillance", confidence: "Low" },
];

export const SNAP8_AE_SIMPLE = [
  {
    category: "Reported tolerability",
    note: "2024 microneedle study: no AEs in 21 completers/28 d. 12-wk serum: 2/31 irritation not product-related per investigators.",
  },
  {
    category: "Plausible topical risks",
    note: "Burning, stinging, erythema, scaling; ocular exposure if applied near lid margin; contact reaction to vehicle/preservative.",
  },
  {
    category: "Facial function",
    note: "Monitor for asymmetry, ptosis, focal weakness — proposed mechanism involves SNARE pathway though topical muscle exposure unproven.",
  },
  {
    category: "Product quality",
    note: "Raw powder ≠ cosmetic-grade. Breindahl-style vial underpotency and impurities risk with unqualified material.",
  },
];

export const SNAP8_AE_FULL = [
  { domain: "Local irritation", items: "Erythema, edema, dryness, scaling — standardized scoring and hold rules" },
  { domain: "Ocular", items: "Keep ≥5 mm from lid margin; rinse and ophthalmology referral criteria" },
  { domain: "Barrier disruption", items: "Exclude active dermatitis, microneedling, lasers — different exposure route" },
  { domain: "Facial function", items: "Ptosis, smile asymmetry, diplopia — stop and medical review" },
  { domain: "Product/manufacturing", items: "Microbiology, preservative efficacy, pump output, content uniformity" },
];

export const SNAP8_DOSAGE_GUIDE = {
  title: "SNAP-8 Dosage: Topical Concentration, Evidence, and Research Protocol",
  updated: "Updated August 2026",
  callout:
    "**Research note:** SNAP-8 is a trade name for **acetyl octapeptide-3** (Ac-EEMQRRAD-NH₂). **3%–10% of the 0.05% supplier solution = 0.0015%–0.005% pure peptide (15–50 mcg/g).** Manufacturer study: **10% solution BID × 28 d** (~35% mean wrinkle-depth reduction). **No FDA drug dose · no validated injectable dose.** Percentages refer to premix, not pure powder.",
  intro: [
    "SNAP-8 is marketed as a cosmetic ingredient, not an approved drug. The critical dosage distinction is between supplier solution percentage, pure peptide percentage, and applied mass on skin.",
    "Calling a formula '10% SNAP-8' usually means 10% of a solution that is itself 0.05% peptide — yielding 0.005% pure peptide (50 mcg/g), not 10% pure peptide.",
    "Human evidence is limited to small manufacturer and combination-product studies on intact or microneedle-delivered skin. Online lyophilized vial injection schedules have no human pharmacokinetic or safety basis.",
  ],
  glance: {
    title: "SNAP-8 dosage in 30 seconds",
    table: {
      headers: ["Question", "Evidence-based answer"],
      rows: [
        ["**FDA drug dose**", "None — cosmetic ingredient"],
        ["**Supplier use level**", "3%–10% of 0.05% solution"],
        ["**Pure peptide in product**", "0.0015%–0.005% w/w"],
        ["**mcg per gram at 0.005%**", "50 mcg/g"],
        ["**Manufacturer regimen**", "10% solution BID × 28 d"],
        ["**Lower report**", "3% solution · mean −7.1% depth"],
        ["**Injectable dose**", "None validated"],
        ["**Proposed RCT**", "0.0015 / 0.003 / 0.005% BID × 12 wk"],
      ],
    },
  },
  sections: [
    {
      id: "identity",
      title: "Compound identity",
      widget: "snap-8-identity-gate",
      paragraphs: [
        "Reproducible records require full sequence, N-acetyl and C-amidated termini, intact mass, counterion, peptide assay, and related-substance profile.",
      ],
    },
    {
      id: "solution-math",
      title: "Solution, pure peptide, and finished product",
      widget: "snap-8-solution-math",
      paragraphs: [
        "Three quantities must stay separate: pure peptide, SNAP-8 Peptide Solution C (0.05% active), and finished cosmetic percentage.",
      ],
    },
    {
      id: "units",
      title: "Concentration and application mathematics",
      widget: "snap-8-unit-converter",
    },
    {
      id: "applied-mass",
      title: "Applied topical mass calculator",
      widget: "snap-8-applied-mass-calc",
      paragraphsAfter: [
        "Placed-on-skin micrograms are not absorbed dose. Vehicle, barrier condition, and residence time determine tissue exposure.",
      ],
    },
    {
      id: "regulatory",
      title: "Regulatory context",
      paragraphs: [
        "U.S. cosmetics are not FDA premarket-approved (except color additives). SNAP-8 has supplier-recommended formulation range but no regulator-reviewed therapeutic schedule. Cosmetic use level ≠ prescription dose.",
      ],
    },
    {
      id: "human-studies",
      title: "Dosage in human research",
      widget: "snap-8-human-studies",
    },
    {
      id: "microneedle",
      title: "Microneedle versus conventional topical",
      widget: "snap-8-microneedle-vs-topical",
    },
    {
      id: "evidence-hierarchy",
      title: "Evidence hierarchy",
      widget: "snap-8-evidence-hierarchy",
    },
    {
      id: "protocols",
      title: "Supplier, market, and unsupported protocols",
      widget: "snap-8-anecdotal-protocols",
    },
    {
      id: "cumulative",
      title: "Cumulative placed-on-skin exposure",
      widget: "snap-8-cumulative-calc",
    },
    {
      id: "compare",
      title: "Clinical versus market protocols",
      widget: "snap-8-clinical-vs-anecdotal",
    },
    {
      id: "preclinical",
      title: "Preclinical and mechanistic concentrations",
      widget: "snap-8-preclinical-doses",
      paragraphsAfter: [
        "100 µM–1.5 mM cell bath concentrations bypass stratum corneum — not predictive of intact-skin topical activity.",
      ],
    },
    {
      id: "mechanism",
      title: "Mechanism relevant to dosage",
      paragraphs: [
        "Proposed SNARE-complex competition (SNAP-25 mimicry) differs from botulinum toxin's enzymatic cleavage. ~1075 Da hydrophilic peptide faces passive penetration limits through intact skin.",
      ],
    },
    {
      id: "safety",
      title: "Safety, tolerability, and monitoring",
      widget: "snap-8-adverse-events",
    },
    {
      id: "protocol",
      title: "Complete proposed topical research protocol",
      paragraphs: [
        "**Split-face RCT:** 180 participants · 0.0015%, 0.003%, or 0.005% pure peptide vs vehicle · **2 mg/cm² · 0.05 g per side · BID × 12 weeks** · 3D profilometry primary endpoint · Week 16 persistence follow-up. No microneedles, injection, or intentional UV.",
      ],
      widget: "snap-8-protocol-timeline",
    },
    {
      id: "claims",
      title: "Claims versus evidence",
      widget: "snap-8-claim-checker",
    },
    {
      id: "evidence-ladder",
      title: "Dosage evidence ladder",
      widget: "snap-8-evidence-ladder",
    },
    {
      id: "bottom-line",
      title: "Bottom line",
      paragraphs: [
        "'3%–10% SNAP-8' refers to a **0.05% premixed ingredient**, not pure peptide. Reconstructable conventional topical human range: **0.0015%–0.005%** pure acetyl octapeptide-3, usually **twice daily for 28 days** in manufacturer reports.",
        "Independent vehicle-controlled concentration-ranging replication is still missing. The best next study is a blinded split-face trial at **0.0015 / 0.003 / 0.005%** with measured application mass — not vial-based injection.",
      ],
      highlight:
        "3–10% premix · 15–50 mcg/g pure · BID × 28 d manufacturer · no injectable dose.",
    },
  ],
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        question: "What percentage was used in the best-known study?",
        answer:
          "10% of a 0.05% supplier solution = 0.005% pure peptide, or 50 mcg/g, applied twice daily for 28 days periocularly.",
      },
      {
        question: "Is 10% SNAP-8 the same as 10% pure peptide powder?",
        answer:
          "No. Ten percent pure peptide would be about 2,000 times more concentrated than 0.005%.",
      },
      {
        question: "What is the documented topical range?",
        answer:
          "0.0015%–0.005% pure peptide, from 3%–10% of the 0.05% supplier solution.",
      },
      {
        question: "How much peptide is in one gram at 0.005%?",
        answer: "Fifty micrograms.",
      },
      {
        question: "Is there an injectable SNAP-8 dose?",
        answer:
          "No validated human injection regimen, pharmacokinetic model, or clinical dose-development record exists.",
      },
      {
        question: "Is SNAP-8 topical Botox?",
        answer:
          "No. Different substances, mechanisms, routes, evidence, and regulatory status.",
      },
      {
        question: "Does SNAP-8 penetrate intact skin?",
        answer:
          "Size and hydrophilicity make passive penetration challenging. Human dermal PK for conventional serum is not adequately established.",
      },
      {
        question: "Can it be used with microneedling?",
        answer:
          "That is a different delivery route requiring a separately qualified device-product protocol.",
      },
      {
        question: "Does more peptide always work better?",
        answer:
          "Not demonstrated. No adequate head-to-head randomized concentration trial.",
      },
      {
        question: "Is a pump or drop a scientific dose?",
        answer:
          "Only if delivered mass and variability are measured gravimetrically.",
      },
    ],
  },
  sources: {
    title: "References",
    items: [
      {
        authors: "Lipotec",
        title: "SNAP-8 technical brochure",
        detail: "0.05% solution · 3–10% use · 17-woman study.",
        href: "https://www.cossma.com/fileadmin/all/cossma/Archiv/ProductInfo/COS1005_14_ProdSnap8.pdf",
      },
      {
        authors: "Moy M et al.",
        title: "Peptide-pro complex serum 2022",
        detail: "3% supplier-solution secondary summary.",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10084013/",
      },
      {
        authors: "Shin JY et al.",
        title: "Dissolving microneedle patch 2024",
        detail: "0.03% matrix combination · n=21.",
        href: "https://anndermatol.org/DOIx.php?id=10.5021/ad.23.136",
      },
      {
        authors: "FDA",
        title: "Authority over cosmetics",
        detail: "Cosmetics not premarket-approved.",
        href: "https://www.fda.gov/cosmetics/cosmetics-laws-regulations/fda-authority-over-cosmetics-how-cosmetics-are-not-fda-approved-are-fda-regulated",
      },
      {
        authors: "Ji Y et al.",
        title: "LC-MS/MS patch QC 2020",
        detail: "76.9 ng analytical measurement.",
        href: "https://link.springer.com/article/10.1186/s40543-020-00232-8",
      },
      {
        authors: "Blanes-Mira et al.",
        title: "Argireline SNARE mechanism",
        detail: "Hexapeptide lineage · not SNAP-8 dose.",
        href: "https://pubmed.ncbi.nlm.nih.gov/18498523/",
      },
    ],
  },
};
