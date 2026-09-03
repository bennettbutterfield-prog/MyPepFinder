/**
 * Goal landing pages — mockup-driven content.
 * Primary reference: Lose Weight (`lose-weight`).
 * Peptide lists are enriched from `peptide-taxonomy` by goal → category map.
 */

import {
  getProductsByCategory,
  getProductCategories,
} from "@/data/peptide-taxonomy";

/** Maps each goal page slug to a taxonomy category slug. */
export const GOAL_TO_CATEGORY = {
  "lose-weight": "weight-loss",
  "build-muscle": "muscle",
  "improve-focus": "cognition",
  "better-sleep": "cognition",
  "hair-growth": "hair",
  recovery: "recovery",
  "skin-health": "skin-beauty",
  "sexual-health": "sexual-health",
  longevity: "longevity",
};

const BADGE_TONES = ["blue", "green", "purple"];
const CARD_TONES = ["violet", "teal", "sky", "green", "indigo", "orange"];

/**
 * @param {string} goalSlug
 * @returns {import("@/data/peptide-taxonomy").PeptideProduct[]}
 */
export function getTaxonomyProductsForGoal(goalSlug) {
  const categorySlug = GOAL_TO_CATEGORY[goalSlug];
  if (!categorySlug) return [];

  let products = getProductsByCategory(categorySlug, true);

  if (goalSlug === "better-sleep") {
    const sleepish = products.filter((p) => {
      const hay = [p.name, p.slug, ...(p.aliases || []), ...(p.researchUses || [])]
        .join(" ")
        .toLowerCase();
      return /sleep|dsip|circadian|selank|pinealon/.test(hay);
    });
    if (sleepish.length) products = sleepish;
  }

  return products;
}

/**
 * @param {object} existing
 * @param {object} product
 * @param {number} index
 */
function mergeFeaturedCard(existing, product, index) {
  const rank = index + 1;
  const badgeDefaults = [
    `#${rank} Best Overall`,
    `#${rank} Best for Most People`,
    `#${rank} Best for Beginners`,
  ];
  return {
    ...existing,
    rank,
    slug: product.slug,
    name: product.name,
    badge: existing.badge || badgeDefaults[index] || `#${rank}`,
    badgeTone: existing.badgeTone || BADGE_TONES[index % BADGE_TONES.length],
    metricLabel: existing.metricLabel || "Research Focus",
    metricValue:
      existing.metricValue ||
      (product.researchUses?.[0]
        ? product.researchUses[0].replace(/\b\w/g, (c) => c.toUpperCase())
        : "Explore"),
    research: existing.research || "Moderate",
    sideEffects: existing.sideEffects || "See profile",
    cost: existing.cost || "$$",
    bestFor: existing.bestFor || product.primaryCategory || "Research",
    tone: existing.tone || CARD_TONES[index % CARD_TONES.length],
    chartEndLbs: existing.chartEndLbs ?? 0,
    chartLossLbs: existing.chartLossLbs ?? 0,
    chartLossPct: existing.chartLossPct ?? 0,
    whyTitle: existing.whyTitle,
    whyPoints: existing.whyPoints,
  };
}

/**
 * @param {string} goalSlug
 * @param {object[]} [existingPeptides]
 * @param {number} [limit]
 */
function buildFeaturedPeptides(goalSlug, existingPeptides = [], limit = 3) {
  const products = getTaxonomyProductsForGoal(goalSlug);
  const featured = [];
  const used = new Set();

  const matchProduct = (existing) =>
    products.find(
      (p) =>
        (existing.slug && p.slug === existing.slug) ||
        p.name.toLowerCase() === String(existing.name || "").toLowerCase() ||
        (existing.name === "Retatrutide" && p.slug === "retatrutide") ||
        (existing.name === "Tirzepatide" && p.slug === "glp-1-t") ||
        (existing.name === "CJC-1295" &&
          (p.slug === "cjc-1295-no-dac" || p.slug === "cjc-1295-dac"))
    );

  for (const existing of existingPeptides) {
    if (featured.length >= limit) break;
    const match = matchProduct(existing);
    if (!match || used.has(match.slug)) continue;
    featured.push(mergeFeaturedCard(existing, match, featured.length));
    used.add(match.slug);
  }

  for (const product of products) {
    if (featured.length >= limit) break;
    if (used.has(product.slug)) continue;
    featured.push(mergeFeaturedCard({}, product, featured.length));
    used.add(product.slug);
  }

  return { featured, products };
}

export const GOAL_SIDEBAR = [
  { slug: "lose-weight", label: "Lose Weight", icon: "flame" },
  { slug: "build-muscle", label: "Build Muscle", icon: "muscle" },
  { slug: "improve-focus", label: "Cognition", icon: "brain" },
  { slug: "better-sleep", label: "Better Sleep", icon: "moon" },
  { slug: "hair-growth", label: "Hair Growth", icon: "hair" },
  { slug: "recovery", label: "Recovery", icon: "bandage" },
  { slug: "skin-health", label: "Skin Health", icon: "droplet" },
  { slug: "sexual-health", label: "Libido", icon: "heart" },
  { slug: "longevity", label: "Longevity", icon: "clock" },
];

export const GOAL_TOOLS = [
  { label: "Peptide Finder", href: "/research-library", icon: "search" },
  { label: "Dosage Calculator", href: "/calculator", icon: "calc" },
];

/** Homepage pillbox images reused on goal / category page heroes. */
export const GOAL_HERO_IMAGES = {
  "lose-weight": "/goal-icons/lose-weight.jpg",
  "improve-focus": "/goal-icons/cognition.jpg",
  "build-muscle": "/goal-icons/build-muscle.jpg",
  recovery: "/goal-icons/recovery.jpg",
  "better-sleep": "/goal-icons/better-sleep.jpg",
  "hair-growth": "/goal-icons/hair-growth.jpg",
  "skin-health": "/goal-icons/skin-health.jpg",
  longevity: "/goal-icons/longevity.jpg",
};

/** @type {Record<string, object>} */
const PAGES = {
  "lose-weight": {
    slug: "lose-weight",
    title: "Lose Weight",
    description:
      "Explore research peptides commonly discussed for appetite regulation, fat metabolism, and body-composition support—then compare providers and expected trajectories.",
    stats: [
      { value: "12", label: "Peptides" },
      { value: "45", label: "Research Studies" },
      { value: "15", label: "Provider Partners" },
    ],
    benefits: [
      { label: "Reduces Appetite", tone: "blue", icon: "appetite" },
      { label: "Increases Fat Burning", tone: "orange", icon: "flame" },
      { label: "Improves Metabolism", tone: "green", icon: "bolt" },
      { label: "Preserves Lean Muscle", tone: "purple", icon: "muscle" },
    ],
    heroTone: "sky",
    peptides: [
      {
        rank: 1,
        badge: "#1 Best Overall",
        badgeTone: "blue",
        slug: "retatrutide",
        name: "Retatrutide",
        rating: "4.8",
        reviews: "1,256",
        metricLabel: "Avg. Weight Loss",
        metricValue: "24%",
        research: "High",
        sideEffects: "Mild GI",
        cost: "$$$",
        bestFor: "Max fat loss",
        whyTitle: "Why Retatrutide is #1 Overall",
        whyPoints: [
          "Highest average weight-loss signal in comparisons",
          "Strong research quality across late-stage trials",
          "Favorable lean-mass preservation profile",
          "Broad provider availability for comparison",
        ],
        chartEndLbs: 167,
        chartLossLbs: 53,
        chartLossPct: 24,
        tone: "violet",
      },
      {
        rank: 2,
        badge: "#2 Best for Most People",
        badgeTone: "green",
        slug: "glp-1-t",
        name: "Tirzepatide",
        rating: "4.7",
        reviews: "2,840",
        metricLabel: "Avg. Weight Loss",
        metricValue: "21%",
        research: "High",
        sideEffects: "Mild GI",
        cost: "$$",
        bestFor: "Balanced results",
        chartEndLbs: 174,
        chartLossLbs: 46,
        chartLossPct: 21,
        tone: "teal",
      },
      {
        rank: 3,
        badge: "#3 Best for Beginners",
        badgeTone: "purple",
        slug: "cagrilintide",
        name: "Cagrilintide",
        rating: "4.5",
        reviews: "980",
        metricLabel: "Avg. Weight Loss",
        metricValue: "—",
        research: "Strong",
        sideEffects: "Mild GI",
        cost: "$$",
        bestFor: "Appetite research",
        chartEndLbs: 0,
        chartLossLbs: 0,
        chartLossPct: 0,
        tone: "sky",
      },
    ],
    totalPeptides: 9,
    providers: [
      {
        initials: "PS",
        name: "Peptide Sciences",
        rating: "4.9",
        price: "$199/mo",
        tag: "Free Shipping",
        tone: "indigo",
      },
      {
        initials: "CP",
        name: "Core Peptides",
        rating: "4.8",
        price: "$179/mo",
        tag: "Lab Tested",
        tone: "teal",
      },
      {
        initials: "LP",
        name: "Limitless Life",
        rating: "4.7",
        price: "$165/mo",
        tag: "Fast Ship",
        tone: "violet",
      },
    ],
    reviews: [
      {
        name: "Marcus T.",
        result: "Lost 42 lbs",
        rating: "5.0",
        quote:
          "Comparing providers side by side made the whole process clearer. Results tracked close to what the chart suggested.",
        tone: "sky",
      },
      {
        name: "Elena R.",
        result: "Lost 28 lbs",
        rating: "4.8",
        quote:
          "I liked seeing research quality next to cost. Helped me pick a beginner-friendly option first.",
        tone: "teal",
      },
      {
        name: "Jordan K.",
        result: "Lost 51 lbs",
        rating: "5.0",
        quote:
          "The expected results chart was surprisingly useful for setting a realistic 6-month goal.",
        tone: "violet",
      },
    ],
    studies: [
      {
        title: "Phase 3 SURMOUNT-5 Trial Results",
        summary:
          "Dual-agonist outcomes for body weight vs comparator therapy over 72 weeks.",
        cite: "NEJM, 2024",
        tone: "blue",
      },
      {
        title: "Retatrutide Phase 2 Dose Response",
        summary:
          "Triple-agonist weight-loss signals across escalating dose cohorts.",
        cite: "Lancet, 2023",
        tone: "purple",
      },
      {
        title: "GLP-1 Lean Mass Preservation Review",
        summary:
          "Narrative review of lean-mass outcomes alongside fat-mass reduction.",
        cite: "Obesity Reviews, 2024",
        tone: "green",
      },
    ],
    resources: [
      { title: "Retatrutide Dosage Guide", href: "/calculator" },
      { title: "Reconstitution & Units Explained", href: "/calculator" },
    ],
  },
  "build-muscle": {
    slug: "build-muscle",
    title: "Build Muscle",
    description:
      "Explore peptides commonly discussed for recovery, lean-mass support, and growth-hormone-axis research pathways.",
    stats: [
      { value: "22", label: "Peptides" },
      { value: "38", label: "Research Studies" },
      { value: "12", label: "Provider Partners" },
    ],
    benefits: [
      { label: "Supports Recovery", tone: "orange", icon: "bandage" },
      { label: "Lean Mass Focus", tone: "teal", icon: "muscle" },
      { label: "Training Adaptation", tone: "blue", icon: "bolt" },
      { label: "Hormone Axis Research", tone: "purple", icon: "sparkle" },
    ],
    heroTone: "teal",
    peptides: [
      {
        rank: 1,
        badge: "#1 Best Overall",
        badgeTone: "blue",
        slug: "cjc-1295-no-dac",
        name: "CJC-1295",
        rating: "4.6",
        reviews: "892",
        metricLabel: "Avg. Lean Gain Signal",
        metricValue: "High",
        research: "Strong",
        sideEffects: "Water retention",
        cost: "$$",
        bestFor: "GH axis research",
        whyTitle: "Why CJC-1295 is #1 Overall",
        whyPoints: [
          "Supports growth-hormone release",
          "May improve lean muscle growth",
          "Supports recovery and sleep",
          "Useful for recovery-oriented goals",
        ],
        chartEndLbs: 0,
        chartLossLbs: 0,
        chartLossPct: 0,
        tone: "teal",
      },
      {
        rank: 2,
        badge: "#2 Best Stack Pair",
        badgeTone: "green",
        slug: "ipamorelin",
        name: "Ipamorelin",
        rating: "4.5",
        reviews: "760",
        metricLabel: "Avg. Lean Gain Signal",
        metricValue: "Med",
        research: "Strong",
        sideEffects: "Mild hunger",
        cost: "$$",
        bestFor: "Beginner stacks",
        chartEndLbs: 0,
        chartLossLbs: 0,
        chartLossPct: 0,
        tone: "sky",
      },
      {
        rank: 3,
        badge: "#3 Performance Focus",
        badgeTone: "purple",
        slug: "tesamorelin",
        name: "Tesamorelin",
        rating: "4.6",
        reviews: "640",
        metricLabel: "Body Comp Signal",
        metricValue: "High",
        research: "Strong",
        sideEffects: "Injection site",
        cost: "$$$",
        bestFor: "Visceral fat research",
        chartEndLbs: 0,
        chartLossLbs: 0,
        chartLossPct: 0,
        tone: "green",
      },
    ],
    totalPeptides: 15,
    providers: [
      {
        initials: "PS",
        name: "Peptide Sciences",
        rating: "4.9",
        price: "$149/mo",
        tag: "Free Shipping",
        tone: "indigo",
      },
      {
        initials: "CP",
        name: "Core Peptides",
        rating: "4.8",
        price: "$129/mo",
        tag: "Lab Tested",
        tone: "teal",
      },
      {
        initials: "PP",
        name: "PureRawz",
        rating: "4.6",
        price: "$119/mo",
        tag: "Budget",
        tone: "amber",
      },
    ],
    reviews: [
      {
        name: "Chris P.",
        result: "+8 lbs lean",
        rating: "4.9",
        quote: "Helpful shortlist for recovery + GH axis research names.",
        tone: "teal",
      },
      {
        name: "Sam A.",
        result: "Faster recovery",
        rating: "4.7",
        quote: "Provider trust scores made shopping less noisy.",
        tone: "sky",
      },
      {
        name: "Riley N.",
        result: "Better training",
        rating: "4.8",
        quote: "Clear comparisons without hype overload.",
        tone: "violet",
      },
    ],
    studies: [
      {
        title: "GHRH Analogues Overview",
        summary: "Mechanistic summary of CJC-class compounds in literature.",
        cite: "Frontiers, 2022",
        tone: "blue",
      },
      {
        title: "Ghrelin Mimetic Research Notes",
        summary: "Ipamorelin pathway discussion in endocrine research.",
        cite: "Endocrine Reviews, 2021",
        tone: "teal",
      },
      {
        title: "Tissue Repair Peptide Mentions",
        summary: "BPC-157 citation patterns in recovery conversations.",
        cite: "Curr Pharm Des, 2020",
        tone: "green",
      },
    ],
    resources: [
      { title: "Secretagogue Stack Basics", href: "#" },
      { title: "Dosage Calculator", href: "/calculator" },
      { title: "Compare Providers", href: "/recommendations" },
      { title: "Recovery Goal Guide", href: "/goals/recovery" },
    ],
    chartMode: "gain",
  },
};

function cloneWithOverrides(base, overrides) {
  return {
    ...structuredClone(base),
    ...overrides,
    peptides: overrides.peptides ?? structuredClone(base.peptides),
    benefits: overrides.benefits ?? structuredClone(base.benefits),
    stats: overrides.stats ?? structuredClone(base.stats),
    providers: overrides.providers ?? structuredClone(base.providers),
    reviews: overrides.reviews ?? structuredClone(base.reviews),
    studies: overrides.studies ?? structuredClone(base.studies),
    resources: overrides.resources ?? structuredClone(base.resources),
  };
}

const TEMPLATES = {
  "improve-focus": cloneWithOverrides(PAGES["build-muscle"], {
    slug: "improve-focus",
    title: "Cognition",
    description:
      "Explore peptides commonly referenced for cognition, mental clarity, and neurochemical research discussions.",
    stats: [
      { value: "14", label: "Peptides" },
      { value: "29", label: "Research Studies" },
      { value: "10", label: "Provider Partners" },
    ],
    benefits: [
      { label: "Mental Clarity", tone: "blue", icon: "brain" },
      { label: "Focus Support", tone: "purple", icon: "bolt" },
      { label: "Stress Resilience", tone: "green", icon: "sparkle" },
      { label: "Daytime Energy", tone: "orange", icon: "flame" },
    ],
    heroTone: "indigo",
    totalPeptides: 14,
    peptides: [
      {
        rank: 1,
        badge: "#1 Best Overall",
        badgeTone: "blue",
        slug: "semax",
        name: "Semax",
        rating: "4.6",
        reviews: "1,120",
        metricLabel: "Focus Signal",
        metricValue: "High",
        research: "Strong",
        sideEffects: "Mild nasal irritation",
        cost: "$$",
        bestFor: "Sharp focus",
        whyTitle: "Why Semax ranks #1",
        whyPoints: [
          "Best for sharp focus and learning",
          "Supports mental clarity under stress",
          "May improve memory and cognition",
          "Raises BDNF to support brain plasticity",
        ],
        chartEndLbs: 0,
        chartLossLbs: 0,
        chartLossPct: 0,
        tone: "indigo",
      },
      {
        rank: 2,
        badge: "#2 Best Stack Pair",
        badgeTone: "green",
        slug: "selank",
        name: "Selank",
        rating: "4.5",
        reviews: "890",
        metricLabel: "Calm Focus",
        metricValue: "Med",
        research: "Strong",
        sideEffects: "Mild fatigue",
        cost: "$$",
        bestFor: "Stress + focus",
        chartEndLbs: 0,
        chartLossLbs: 0,
        chartLossPct: 0,
        tone: "sky",
      },
      {
        rank: 3,
        badge: "#3 Neuro Support",
        badgeTone: "purple",
        slug: "dihexa",
        name: "Dihexa",
        rating: "4.4",
        reviews: "640",
        metricLabel: "Memory Signal",
        metricValue: "High",
        research: "Moderate",
        sideEffects: "Limited data",
        cost: "$$$",
        bestFor: "Learning research",
        chartEndLbs: 0,
        chartLossLbs: 0,
        chartLossPct: 0,
        tone: "violet",
      },
    ],
  }),
  "better-sleep": cloneWithOverrides(PAGES["build-muscle"], {
    slug: "better-sleep",
    title: "Better Sleep",
    description:
      "Explore compounds discussed for sleep architecture, recovery, and circadian-adjacent research.",
    heroTone: "violet",
    totalPeptides: 11,
    benefits: [
      { label: "Deeper Sleep", tone: "purple", icon: "moon" },
      { label: "Mood Support", tone: "blue", icon: "heart" },
      { label: "Recovery Window", tone: "green", icon: "bandage" },
      { label: "Circadian Rhythm", tone: "orange", icon: "clock" },
    ],
    peptides: [
      {
        rank: 1,
        badge: "#1 Best Overall",
        badgeTone: "blue",
        slug: "dsip",
        name: "DSIP",
        rating: "4.5",
        reviews: "720",
        metricLabel: "Sleep Signal",
        metricValue: "High",
        research: "Strong",
        sideEffects: "Mild drowsiness",
        cost: "$$",
        bestFor: "Sleep depth",
        whyTitle: "Why DSIP ranks #1",
        whyPoints: [
          "Best known as the “sleep peptide”",
          "May support deeper, restful sleep",
          "Helps regulate sleep–wake cycles",
        ],
        chartEndLbs: 0,
        chartLossLbs: 0,
        chartLossPct: 0,
        tone: "violet",
      },
      {
        rank: 2,
        badge: "#2 Calm Support",
        badgeTone: "green",
        slug: "selank",
        name: "Selank",
        rating: "4.5",
        reviews: "890",
        metricLabel: "Calm Signal",
        metricValue: "Med",
        research: "Strong",
        sideEffects: "Mild fatigue",
        cost: "$$",
        bestFor: "Wind-down",
        chartEndLbs: 0,
        chartLossLbs: 0,
        chartLossPct: 0,
        tone: "sky",
      },
      {
        rank: 3,
        badge: "#3 Circadian Focus",
        badgeTone: "purple",
        slug: "pinealon",
        name: "Pinealon",
        rating: "4.3",
        reviews: "410",
        metricLabel: "Rhythm Signal",
        metricValue: "Med",
        research: "Moderate",
        sideEffects: "Limited data",
        cost: "$$",
        bestFor: "Sleep timing",
        chartEndLbs: 0,
        chartLossLbs: 0,
        chartLossPct: 0,
        tone: "indigo",
      },
    ],
  }),
  "hair-growth": cloneWithOverrides(PAGES["build-muscle"], {
    slug: "hair-growth",
    title: "Hair Growth",
    description:
      "Explore peptides commonly discussed for hair density, follicle health, and dermal research contexts.",
    heroTone: "rose",
    totalPeptides: 9,
    peptides: [
      {
        rank: 1,
        badge: "#1 Best Overall",
        badgeTone: "blue",
        slug: "ghk-cu",
        name: "GHK-Cu",
        rating: "4.6",
        reviews: "1,480",
        metricLabel: "Hair Signal",
        metricValue: "High",
        research: "Strong",
        sideEffects: "Mild scalp irritation",
        cost: "$$",
        bestFor: "Hair density",
        whyTitle: "Why GHK-Cu ranks #1",
        whyPoints: [
          "Best known for hair-growth support",
          "May stimulate inactive hair follicles",
          "Supports scalp repair and circulation",
          "May improve hair thickness and density",
        ],
        chartEndLbs: 0,
        chartLossLbs: 0,
        chartLossPct: 0,
        tone: "rose",
      },
      {
        rank: 2,
        badge: "#2 Follicle Focus",
        badgeTone: "green",
        slug: "ahk-cu",
        name: "AHK-Cu",
        rating: "4.4",
        reviews: "620",
        metricLabel: "Follicle Signal",
        metricValue: "Med",
        research: "Moderate",
        sideEffects: "Limited data",
        cost: "$$",
        bestFor: "Follicle research",
        chartEndLbs: 0,
        chartLossLbs: 0,
        chartLossPct: 0,
        tone: "sky",
      },
      {
        rank: 3,
        badge: "#3 Blend Option",
        badgeTone: "purple",
        slug: "glow-ghk-cu-tb-500-bpc-157",
        name: "GLOW",
        rating: "4.5",
        reviews: "840",
        metricLabel: "Repair Signal",
        metricValue: "High",
        research: "Moderate",
        sideEffects: "Injection site",
        cost: "$$$",
        bestFor: "Multi-pathway",
        chartEndLbs: 0,
        chartLossLbs: 0,
        chartLossPct: 0,
        tone: "violet",
      },
    ],
  }),
  recovery: cloneWithOverrides(PAGES["build-muscle"], {
    slug: "recovery",
    title: "Recovery",
    description:
      "Explore peptides often referenced for tissue repair, inflammation, and recovery-oriented protocols.",
    heroTone: "orange",
    totalPeptides: 16,
    peptides: [
      {
        rank: 1,
        badge: "#1 Best Overall",
        badgeTone: "blue",
        slug: "bpc-157",
        name: "BPC-157",
        rating: "4.7",
        reviews: "2,104",
        metricLabel: "Recovery Mentions",
        metricValue: "High",
        research: "Moderate",
        sideEffects: "Injection site",
        cost: "$",
        bestFor: "Soft-tissue talk",
        whyTitle: "Why BPC-157 ranks #1",
        whyPoints: [
          "Best known for injury recovery",
          "May support tendon and ligament repair",
          "Studied for tissue-healing pathways",
        ],
        chartEndLbs: 0,
        chartLossLbs: 0,
        chartLossPct: 0,
        tone: "green",
      },
      {
        rank: 2,
        badge: "#2 Repair Pair",
        badgeTone: "green",
        slug: "tb-500-thymosin-beta-4",
        name: "TB-500 / Thymosin Beta-4",
        rating: "4.5",
        reviews: "1,120",
        metricLabel: "Mobility Signal",
        metricValue: "High",
        research: "Moderate",
        sideEffects: "Injection site",
        cost: "$$",
        bestFor: "Soft tissue",
        chartEndLbs: 0,
        chartLossLbs: 0,
        chartLossPct: 0,
        tone: "sky",
      },
      {
        rank: 3,
        badge: "#3 Blend Option",
        badgeTone: "purple",
        slug: "bpc-157-tb-500",
        name: "BPC-157 + TB-500",
        rating: "4.6",
        reviews: "980",
        metricLabel: "Stack Signal",
        metricValue: "High",
        research: "Moderate",
        sideEffects: "Injection site",
        cost: "$$$",
        bestFor: "Combined repair",
        chartEndLbs: 0,
        chartLossLbs: 0,
        chartLossPct: 0,
        tone: "teal",
      },
    ],
  }),
  "skin-health": cloneWithOverrides(PAGES["build-muscle"], {
    slug: "skin-health",
    title: "Skin Health",
    description:
      "Browse peptides discussed for collagen support, skin quality, and cosmetic-science research.",
    heroTone: "pink",
    totalPeptides: 13,
    peptides: [
      {
        rank: 1,
        badge: "#1 Best Overall",
        badgeTone: "blue",
        slug: "ghk-cu",
        name: "GHK-Cu",
        rating: "4.6",
        reviews: "1,480",
        metricLabel: "Skin Signal",
        metricValue: "High",
        research: "Strong",
        sideEffects: "Mild irritation",
        cost: "$$",
        bestFor: "Skin rejuvenation",
        whyTitle: "Why GHK-Cu ranks #1",
        whyPoints: [
          "Best known for skin rejuvenation",
          "Supports collagen and elastin production",
          "May improve firmness and skin texture",
          "Supports wound repair and antioxidant defenses",
        ],
        chartEndLbs: 0,
        chartLossLbs: 0,
        chartLossPct: 0,
        tone: "rose",
      },
      {
        rank: 2,
        badge: "#2 Cosmetic Focus",
        badgeTone: "green",
        slug: "snap-8",
        name: "Snap-8",
        rating: "4.4",
        reviews: "710",
        metricLabel: "Texture Signal",
        metricValue: "Med",
        research: "Moderate",
        sideEffects: "Mild dryness",
        cost: "$$",
        bestFor: "Expression lines",
        chartEndLbs: 0,
        chartLossLbs: 0,
        chartLossPct: 0,
        tone: "sky",
      },
      {
        rank: 3,
        badge: "#3 Copper Pair",
        badgeTone: "purple",
        slug: "ahk-cu",
        name: "AHK-Cu",
        rating: "4.3",
        reviews: "620",
        metricLabel: "Repair Signal",
        metricValue: "Med",
        research: "Moderate",
        sideEffects: "Limited data",
        cost: "$$",
        bestFor: "Dermal research",
        chartEndLbs: 0,
        chartLossLbs: 0,
        chartLossPct: 0,
        tone: "violet",
      },
    ],
  }),
  "sexual-health": cloneWithOverrides(PAGES["build-muscle"], {
    slug: "sexual-health",
    title: "Libido",
    description:
      "Explore peptides commonly referenced for libido, performance, and reproductive-health research talks.",
    heroTone: "amber",
    totalPeptides: 8,
    peptides: [
      {
        rank: 1,
        badge: "#1 Best Overall",
        badgeTone: "blue",
        slug: "pt-141",
        name: "PT-141 (Bremelanotide)",
        rating: "4.6",
        reviews: "1,340",
        metricLabel: "Desire Signal",
        metricValue: "High",
        research: "High",
        sideEffects: "Nausea, flushing",
        cost: "$$$",
        bestFor: "Sexual desire",
        whyTitle: "Why PT-141 (Bremelanotide) ranks #1",
        whyPoints: [
          "Best known for boosting sexual desire",
          "Supports arousal through brain pathways",
          "May benefit both women and men",
          "FDA-approved for certain cases of female HSDD",
        ],
        chartEndLbs: 0,
        chartLossLbs: 0,
        chartLossPct: 0,
        tone: "amber",
      },
      {
        rank: 2,
        badge: "#2 Reproductive Focus",
        badgeTone: "green",
        slug: "kisspeptin-10",
        name: "Kisspeptin-10",
        rating: "4.3",
        reviews: "480",
        metricLabel: "Hormone Signal",
        metricValue: "Med",
        research: "Strong",
        sideEffects: "Limited data",
        cost: "$$",
        bestFor: "Reproductive signaling",
        chartEndLbs: 0,
        chartLossLbs: 0,
        chartLossPct: 0,
        tone: "sky",
      },
      {
        rank: 3,
        badge: "#3 Melanocortin Option",
        badgeTone: "purple",
        slug: "melanotan-2",
        name: "Melanotan-2",
        rating: "4.2",
        reviews: "920",
        metricLabel: "Arousal Signal",
        metricValue: "Med",
        research: "Moderate",
        sideEffects: "Nausea, pigmentation",
        cost: "$$",
        bestFor: "Libido research",
        chartEndLbs: 0,
        chartLossLbs: 0,
        chartLossPct: 0,
        tone: "violet",
      },
    ],
  }),
  longevity: cloneWithOverrides(PAGES["build-muscle"], {
    slug: "longevity",
    title: "Longevity",
    description:
      "Explore compounds discussed for longevity, anti-aging, mitochondrial function, and cellular-health research.",
    heroTone: "indigo",
    totalPeptides: 17,
    peptides: [
      {
        rank: 1,
        badge: "#1 Best Overall",
        badgeTone: "blue",
        slug: "mots-c",
        name: "MOTS-c",
        rating: "4.5",
        reviews: "560",
        metricLabel: "Metabolic Signal",
        metricValue: "High",
        research: "Strong",
        sideEffects: "Limited data",
        cost: "$$$",
        bestFor: "Metabolic longevity",
        whyTitle: "Why MOTS-c ranks #1",
        whyPoints: [
          "Best known for metabolic longevity",
          "Supports mitochondrial function and energy",
          "May improve metabolic flexibility",
          "Studied for healthy aging and resilience",
        ],
        chartEndLbs: 0,
        chartLossLbs: 0,
        chartLossPct: 0,
        tone: "teal",
      },
      {
        rank: 2,
        badge: "#2 Cellular Support",
        badgeTone: "green",
        slug: "nad-plus",
        name: "NAD+",
        rating: "4.5",
        reviews: "1,240",
        metricLabel: "Energy Signal",
        metricValue: "High",
        research: "Strong",
        sideEffects: "Flushing",
        cost: "$$$",
        bestFor: "Cellular energy",
        chartEndLbs: 0,
        chartLossLbs: 0,
        chartLossPct: 0,
        tone: "sky",
      },
      {
        rank: 3,
        badge: "#3 Longevity Classic",
        badgeTone: "purple",
        slug: "epithalon",
        name: "Epithalon",
        rating: "4.6",
        reviews: "980",
        metricLabel: "Longevity Signal",
        metricValue: "High",
        research: "Strong",
        sideEffects: "Mild injection site",
        cost: "$$",
        bestFor: "Cellular aging",
        chartEndLbs: 0,
        chartLossLbs: 0,
        chartLossPct: 0,
        tone: "violet",
      },
    ],
  }),
};
export const GOAL_PAGES = { ...PAGES, ...TEMPLATES };

export function getGoalPage(slug) {
  const page = GOAL_PAGES[slug];
  if (!page) return null;

  const categorySlug = GOAL_TO_CATEGORY[slug] ?? null;
  if (!categorySlug) {
    return {
      ...page,
      categorySlug: null,
      heroImage: GOAL_HERO_IMAGES[slug] || null,
    };
  }

  const { featured, products } = buildFeaturedPeptides(
    slug,
    page.peptides || [],
    3
  );

  const peptideCount = products.length;
  const stats = (page.stats || []).map((stat) =>
    stat.label === "Peptides"
      ? { ...stat, value: String(peptideCount) }
      : stat
  );

  return {
    ...page,
    categorySlug,
    peptides: featured,
    stats,
    totalPeptides: peptideCount,
    heroImage: GOAL_HERO_IMAGES[slug] || null,
    categoryProducts: products.map((p) => ({
      slug: p.slug,
      name: p.name,
      categories: getProductCategories(p),
    })),
  };
}

export function getAllGoalSlugs() {
  return Object.keys(GOAL_PAGES);
}

/** Old Anti-Aging goal URL; redirects to Longevity. */
export const GOAL_REDIRECTS = {
  "anti-aging": "longevity",
};
