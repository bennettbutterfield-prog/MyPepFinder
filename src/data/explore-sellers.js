/**
 * Demo seller rows for “explore providers” — illustrative only, not live pricing.
 */

const PEPTIDE_SLUG_TO_NAME = {
  // Store catalog slugs
  "glp-3": "GLP-3 (RT)",
  "aod-9604": "AOD-9604",
  "5-amino-1mq": "5-Amino-1MQ",
  "amino-h2o": "Amino H2O",
  "bpc-157": "BPC-157",
  "cagrilintide": "Cagrilintide",
  "cjc-ipa-no-dac": "CJC-1295 / Ipamorelin (No DAC)",
  dsip: "DSIP",
  epithalon: "Epithalon",
  "ghk-cu": "GHK-Cu",
  "glow": "GLOW",
  "glutathione": "Glutathione",
  "igf-1-lr3": "IGF-1 LR3",
  "ipamorelin": "Ipamorelin",
  "klow": "KLOW",
  "kpv": "KPV",
  "melanotan-i": "Melanotan I",
  "melanotan-ii": "Melanotan II",
  "mots-c": "MOTS-C",
  "nad-plus": "NAD+",
  "pt-141": "PT-141",
  selank: "Selank",
  semax: "SEMAX",
  "snap-8": "SNAP-8",
  "tb-500": "TB-500",
  "tesamorlin": "Tesamorlin",
  "thymosin-alpha-1": "Thymosin Alpha-1",
  "wolverine-stack": "BPC-157/TB-500 (Wolverine)",

  // Backward-compatible aliases already used in app routes/data
  "tesamorelin": "Tesamorlin",
  "glp-1-class-research": "Cagrilintide / GLP-1 class analogs",
  "ipamorelin-cjc-1295": "Ipamorelin / CJC-1295 (no DAC)",
};

const SELLER_ROWS = [
  {
    id: "1",
    name: "NorthLab Research Supply",
    priceFrom: 44.99,
    reviewAvg: 4.75,
    reviewCount: 1832,
    trustScore: 91,
    note: "Batch COAs linked from product pages",
  },
  {
    id: "2",
    name: "Harbor Peptide Collective",
    priceFrom: 39.0,
    reviewAvg: 4.62,
    reviewCount: 942,
    trustScore: 88,
    note: "Third-party identity testing summarized",
  },
  {
    id: "3",
    name: "Apex BioSupply",
    priceFrom: 52.5,
    reviewAvg: 4.58,
    reviewCount: 310,
    trustScore: 84,
    note: "Volume tiers shown before checkout",
  },
  {
    id: "4",
    name: "Meridian Compounds",
    priceFrom: 36.99,
    reviewAvg: 4.41,
    reviewCount: 2156,
    trustScore: 86,
    note: "Shipping estimates on PDP",
  },
  {
    id: "5",
    name: "Catalyst Peptide Labs",
    priceFrom: 48.0,
    reviewAvg: 4.7,
    reviewCount: 507,
    trustScore: 89,
    note: "Lot-specific documentation requests supported",
  },
  {
    id: "6",
    name: "Summit Research Labs",
    priceFrom: 41.25,
    reviewAvg: 4.33,
    reviewCount: 128,
    trustScore: 78,
    note: "Smaller catalog, consistent naming",
  },
  {
    id: "7",
    name: "Clearwater Research",
    priceFrom: 55.0,
    reviewAvg: 4.8,
    reviewCount: 2890,
    trustScore: 93,
    note: "Public changelog when SKUs change",
  },
  {
    id: "8",
    name: "Ion Peptide Supply",
    priceFrom: 33.5,
    reviewAvg: 4.22,
    reviewCount: 89,
    trustScore: 74,
    note: "Some SKUs require account for wholesale tiers",
  },
  {
    id: "9",
    name: "Vector Supply Co.",
    priceFrom: 49.99,
    reviewAvg: 4.55,
    reviewCount: 672,
    trustScore: 85,
    note: "Educational articles paired with listings",
  },
  {
    id: "10",
    name: "Blueprint Labs",
    priceFrom: 47.0,
    reviewAvg: 4.68,
    reviewCount: 441,
    trustScore: 87,
    note: "Returns policy spelled out for damaged vials",
  },
];

/**
 * @param {string} slug
 * @returns {{ peptideName: string; sellers: typeof SELLER_ROWS } | null}
 */
export function getExplorePageData(slug) {
  if (!slug || typeof slug !== "string") return null;
  const key = slug.toLowerCase().trim();
  const peptideName = PEPTIDE_SLUG_TO_NAME[key];
  if (!peptideName) return null;
  return {
    peptideName,
    sellers: SELLER_ROWS,
  };
}

export function getKnownExploreSlugs() {
  return Object.keys(PEPTIDE_SLUG_TO_NAME);
}
