/**
 * Editorial research-peptide provider directory.
 * Source: best-peptide-vendors-2026.md (last updated 2026-09-16)
 */

import {
  AMINO_CLUB_AFFILIATE_URL,
  PEPTORA_AFFILIATE_URL,
  RIVN_AFFILIATE_URL,
} from "@/data/affiliate-links";

export const PROVIDER_DIRECTORY = {
  title: "Best Peptide Vendors in 2026",
  description:
    "Compare Amino Club, RIVN Research, Mile High Compounds and Peptora on prices, value, Trustpilot reviews and published batch testing.",
  lastUpdated: "September 16, 2026",
  providerCount: 4,
  intro:
    "Finnrick lists 1,828 peptide vendors. Finding a supplier is easy. Deciding which one deserves your business takes more work. Our focus is US-based businesses with conventional checkout, public testing documentation and a credible customer service record.",
  lead:
    "Amino Club is our overall value pick, followed by RIVN Research, Mile High Compounds and Peptora. Amino Club leads on affordability; RIVN has the highest verified Trustpilot rating of the four. These are four selected providers, not the result of auditing every vendor in Finnrick's directory.",
  disclaimer:
    "These providers sell laboratory research materials that are not intended for human or veterinary use. Public-source review does not confirm every vendor's business registration, authenticate every report, or independently test products.",
  legalDisclaimer:
    "MyPepFinder is an independent educational and comparison resource. Rankings reflect editorial judgment based on publicly available information as of the date shown and may change as review counts, shipping policies, pricing, or testing documentation change. MyPepFinder does not manufacture, prescribe, dispense, administer, or test the products listed on this page. Inclusion is not an endorsement.",
  priceGuide:
    "$ budget · $$ affordable · $$$ midrange · $$$$ premium · $$$$$ highest-priced. These are editorial estimates of overall pricing; individual products and promotions vary.",
  orderMinimumsNote:
    "None of the reviewed pages stated a dollar minimum for ordinary purchases. Free-shipping thresholds and bulk quantities are separate requirements. Shipping terms below refer to US orders.",
};

export const RANKING_CRITERIA = [
  {
    title: "Customer reputation",
    body: "Trustpilot rating, review count, recency, complaints and company responses.",
    why: "Shows how customers describe ordering, delivery and support.",
  },
  {
    title: "Testing quality and transparency",
    body: "Batch traceability, named labs, reported methods, purity, identity, measured content and additional testing.",
    why: "Makes product claims possible to examine.",
  },
  {
    title: "Overall price and value",
    body: "Broad pricing, eligible discounts, shipping charges and purchasing commitments.",
    why: "Shows what an order actually costs.",
  },
  {
    title: "Shipping and order requirements",
    body: "Dispatch times, delivery options, free-shipping thresholds and ordinary versus bulk minimums.",
    why: "Reveals costs and conditions that a headline price can miss.",
  },
  {
    title: "Business accountability",
    body: "Company information, conventional payment options, support access and clear policies.",
    why: "Gives customers an identifiable business to contact when problems arise.",
  },
];

export const ELIGIBILITY_RULES = [
  {
    title: "US-based businesses",
    body: "We exclude businesses based outside the United States. A US shipping warehouse alone does not establish where a company is based.",
  },
  {
    title: "Conventional payment practices",
    body: "We exclude vendors that accept cryptocurrency, even if they also offer card payments. We also exclude sellers that require gift cards or personal “friends and family” transfers.",
  },
  {
    title: "Public, traceable testing",
    body: "Vendors need publicly accessible third-party documentation identifying the sample or batch, laboratory, date, methods and results. Generic reports with no clear connection to the material being sold fail this standard.",
  },
  {
    title: "Accountable order handling",
    body: "We expect working support channels and written shipping, replacement and refund policies. Anonymous sellers operating only through private messages do not qualify.",
  },
];

export const COMPARISON_ROWS = [
  {
    factor: "Rank",
    values: [
      "#1 — Best overall value",
      "#2 — Strongest Trustpilot rating",
      "#3 — Reputation and testing transparency",
      "#4 — Published batch information",
    ],
  },
  {
    factor: "Price",
    values: ["$$", "$$$", "$$$", "$$$$"],
  },
  {
    factor: "Trustpilot rating",
    values: ["4.6/5", "4.9/5", "4.8/5", "Not verified"],
  },
  {
    factor: "Trustpilot reviews",
    values: ["522", "539", "503", "Not verified"],
  },
  {
    factor: "COAs",
    values: [
      "Searchable certificate library; lot summaries",
      "Public report gallery",
      "Public COA library; lot entries",
      "COA page; product-level lot summaries",
    ],
  },
  {
    factor: "Testing labs listed",
    values: [
      "ILS Laboratories",
      "Freedom Diagnostics",
      "Vanguard, ILS Labs and Ethos Analytics",
      "Elementrix / Elementrix Diagnostics",
    ],
  },
  {
    factor: "Free-shipping threshold",
    values: [
      "Orders over $100, standard shipping",
      "Homepage: all orders; other pages: over $150",
      "US orders over $300 after discounts, FedEx 2 Day",
      "Orders over $150, standard shipping",
    ],
  },
  {
    factor: "Shipping speed",
    values: [
      "Standard 1–4 business days; paid 2-day and overnight",
      "Dispatch within 24 business hours; transit varies",
      "FedEx 2 Day free on qualifying US orders",
      "Standard 3–5 business days; express 1–2",
    ],
  },
  {
    factor: "Bulk / special-order",
    values: [
      "Bulk program: 10 units per product minimum",
      "Promotional requirements vary",
      "Quantity discounts start at 4 vials of the same compound",
      "Not published",
    ],
  },
  {
    factor: "Value assessment",
    values: [
      "Most affordable; our best-value pick",
      "Midrange; check shipping offer",
      "Midrange; better shipping value for larger orders",
      "Premium pricing",
    ],
  },
  {
    factor: "MyPepFinder code",
    values: ["MYPEPFINDER", "mypepfinder15", "—", "MYPEPFINDER"],
  },
  {
    factor: "Discount",
    values: ["—", "15%", "—", "15%"],
  },
];

export const PROVIDER_FAQ = [
  {
    question: "What is the best peptide vendor in 2026?",
    answer:
      "Our overall pick is Amino Club, followed by RIVN Research, Mile High Compounds and Peptora. Amino Club leads on value, while RIVN has the highest Trustpilot rating among these providers.",
  },
  {
    question: "Which provider has the highest Trustpilot rating?",
    answer:
      "RIVN Research, at 4.9/5 from 539 reviews, checked September 16, 2026. Mile High was rated 4.8/5 and Amino Club 4.6/5.",
  },
  {
    question: "Which provider offers the best value?",
    answer:
      "Amino Club is our value pick at $$, the lowest price tier in this comparison. Individual products and promotions vary, so compare the delivered cost of your order.",
  },
  {
    question: "Which provider has the best testing?",
    answer:
      "We have not established a testing winner. All four publish testing information, but a fair comparison requires checking equivalent batch reports, methods and laboratory credentials.",
  },
  {
    question: "Is a free-shipping threshold a minimum order?",
    answer:
      "No. A minimum order determines whether you can buy; a free-shipping threshold determines whether delivery is free. Bulk quantities apply to separate discount programs. None of the reviewed pages stated a dollar minimum for ordinary purchases.",
  },
  {
    question: "Are Trustpilot reviews enough to choose a vendor?",
    answer:
      "They are useful for assessing customer service and delivery. Pair them with batch-specific testing documentation; reviews do not independently confirm purity, identity or safety.",
  },
  {
    question: "Why do you exclude overseas and cryptocurrency-accepting vendors?",
    answer:
      "This comparison is limited to US-based businesses with conventional payment practices. Those are our editorial selection rules, intended to keep the recommendations focused on identifiable domestic businesses and standard checkout.",
  },
  {
    question: "Does MyPepFinder earn commissions?",
    answer:
      "We may earn a commission when you purchase through an affiliate link. That relationship is disclosed above the comparison table.",
  },
  {
    question: "What discount codes are available?",
    answer:
      "Use mypepfinder15 for 15% off RIVN Research or MYPEPFINDER for 15% off Peptora. Check the applicable terms at checkout.",
  },
];

/**
 * @typedef {{
 *   slug: string;
 *   name: string;
 *   website: string;
 *   initials: string;
 *   tone: string;
 *   rank: number;
 *   rankBadge: string;
 *   priceTier: string;
 *   trustpilotRating: number | null;
 *   trustpilotReviews: number | null;
 *   trustScore: number;
 *   editorialRating: string;
 *   comparisonBlurb: string;
 *   researchUse: string;
 *   testingAssessment: string;
 *   customerReviews: string;
 *   pricingShipping: string[];
 *   discountCode?: string;
 *   discountNote?: string;
 *   strengths: string[];
 *   limitations: string[];
 *   summaryLabel: string;
 *   summary: string;
 *   sources: { label: string; href?: string }[];
 * }} PeptideProvider
 */

/** @type {PeptideProvider[]} */
export const PEPTIDE_PROVIDERS = [
  {
    slug: "amino-club",
    name: "Amino Club",
    website: AMINO_CLUB_AFFILIATE_URL,
    initials: "AC",
    tone: "teal",
    rank: 1,
    rankBadge: "Best overall value",
    priceTier: "$$",
    trustpilotRating: 4.6,
    trustpilotReviews: 522,
    trustScore: 4.6,
    editorialRating: "Best Value",
    comparisonBlurb:
      "Most affordable option with a searchable certificate library and substantial Trustpilot history.",
    researchUse:
      "Laboratory research materials only; not intended for human or veterinary use.",
    testingAssessment:
      "Its public library listed 106 certificates across 50 compounds, with batch numbers and test dates. Customers can search by compound or lot number, and the company describes QR codes that link vial labels to their batch reports. One published GLP-3 report summary names ILS Laboratories and lists lot RT0004, tested August 21, 2026, with 99.92% HPLC purity and 10.53 mg measured content for a 10 mg vial.",
    customerReviews:
      "Trustpilot: 4.6/5 from 522 reviews. The profile showed 88% five-star and 8% one-star reviews. Recent customers repeatedly praised fast shipping, communication and help with missing or damaged shipments. Amino Club had responded to 67% of negative reviews, usually within a week.",
    pricingShipping: [
      "Price: $$ — the most affordable option in this comparison.",
      "Standard shipping: Calculated at checkout; free on orders over $100.",
      "Delivery: Standard shipping takes 1–4 business days. Paid 2-day and overnight options are available.",
      "Shipment protection: Included with every order.",
      "Minimum purchase: No dollar minimum published in the pages reviewed.",
      "Bulk orders: A separate program requires 10 units per product.",
    ],
    discountCode: "MYPEPFINDER",
    strengths: [
      "Affordable pricing relative to the other three providers.",
      "Easy-to-search certificate library with batch numbers and dates.",
      "Named testing laboratory (ILS Laboratories) on published lot summaries.",
      "Repeated customer examples of replacement handling for damaged shipments.",
    ],
    limitations: [
      "8% one-star share deserves attention when reading recent complaints.",
      "Trustpilot noted no recent history of review invitations.",
      "Customer reports about damaged goods and particles in mixed solutions are unverified as to cause.",
    ],
    summaryLabel: "Best overall value.",
    summary:
      "Amino Club makes the strongest case for buyers who want competitive prices without giving up access to batch reports or a substantial customer review history.",
    sources: [
      {
        label: "Trustpilot profile",
        href: "https://www.trustpilot.com/review/aminoclub.com",
      },
      {
        label: "Certificate library",
        href: "https://www.aminoclub.com/us/coa",
      },
      {
        label: "Shipping information",
        href: "https://www.aminoclub.com/us/shipping",
      },
      {
        label: "Bulk purchasing requirements",
        href: "https://www.aminoclub.com/us/bulk",
      },
      {
        label: "Example GLP-3 batch summary",
        href: "https://www.aminoclub.com/us/products/glp-3?coa=open&lot=RT0004",
      },
    ],
  },
  {
    slug: "rivn",
    name: "RIVN Research",
    website: RIVN_AFFILIATE_URL,
    initials: "RV",
    tone: "indigo",
    rank: 2,
    rankBadge: "Strongest Trustpilot rating",
    priceTier: "$$$",
    trustpilotRating: 4.9,
    trustpilotReviews: 539,
    trustScore: 4.9,
    editorialRating: "Top Reviews",
    comparisonBlurb:
      "Highest verified Trustpilot rating in this comparison, with a public testing report gallery.",
    researchUse:
      "Laboratory research materials only; not intended for human or veterinary use.",
    testingAssessment:
      "RIVN publishes a gallery of report images and names Freedom Diagnostics as its testing laboratory. Its website advertises purity, identity, net content, heavy metal, endotoxin and sterility testing. Check the specific batch report for the results included with your order.",
    customerReviews:
      "Trustpilot: 4.9/5 from 539 reviews. The profile showed 97% five-star and 3% four-star reviews, with lower ratings displayed as 0% after rounding. Recent customers praised delivery speed, packaging and straightforward ordering. RIVN invites reviews, and Trustpilot displays a merged-profile notice.",
    pricingShipping: [
      "Price: $$$ — midrange.",
      "Discount: 15% off with mypepfinder15, subject to checkout eligibility.",
      "Shipping: The homepage advertises free shipping on all orders, while the testing-page banner mentions orders over $150. Confirm the applicable terms at checkout.",
      "Dispatch: Within 24 hours on business days; transit time depends on the shipping method and destination.",
      "Minimum purchase: No dollar minimum published in the pages reviewed.",
    ],
    discountCode: "mypepfinder15",
    discountNote: "15% off, subject to checkout eligibility",
    strengths: [
      "Highest Trustpilot rating among the four providers (4.9/5).",
      "Public report gallery and named testing laboratory.",
      "Strong recent customer feedback on delivery and packaging.",
      "Affiliate discount available with mypepfinder15.",
    ],
    limitations: [
      "Shipping information needs clarification between homepage and testing-page banners.",
      "Homepage asks customers to report damaged or incorrect items within 48 hours.",
      "Trustpilot merged-profile notice means some reviews originated on another company profile.",
    ],
    summaryLabel: "Highest Trustpilot rating.",
    summary:
      "RIVN’s strongest argument is its customer feedback. Its 4.9/5 Trustpilot rating leads this comparison, supported by a review count similar to Amino Club's.",
    sources: [
      {
        label: "Trustpilot profile",
        href: "https://www.trustpilot.com/review/rivnresearch.com",
      },
      {
        label: "Testing gallery",
        href: "https://rivnresearch.com/testing/",
      },
      {
        label: "Official website and order terms",
        href: "https://rivnresearch.com/",
      },
    ],
  },
  {
    slug: "mile-high-compounds",
    name: "Mile High Compounds",
    website: "https://milehighcompounds.is/",
    initials: "MH",
    tone: "violet",
    rank: 3,
    rankBadge: "Reputation and testing transparency",
    priceTier: "$$$",
    trustpilotRating: 4.8,
    trustpilotReviews: 503,
    trustScore: 4.8,
    editorialRating: "Strong Docs",
    comparisonBlurb:
      "Hundreds of reviews, a public COA library, and detailed testing disclosures — with a $300 free-shipping threshold.",
    researchUse:
      "Laboratory research materials only; not intended for human or veterinary use.",
    testingAssessment:
      "Mile High's public COA library includes batch identifiers and dates. Its FAQ names Vanguard, ILS Labs and Ethos Analytics and describes at least eight tests per lot, with a broader panel for new lots. The advertised panel covers identity, purity, net content, sterility, endotoxins and heavy metals.",
    customerReviews:
      "Trustpilot: 4.8/5 from 503 reviews. The profile showed 93% five-star and 3% one-star reviews. Recent customers praised service, delivery and packaging. The company had responded to 76% of negative reviews, typically within a week. Trustpilot discloses that Mile High invites reviews and has a paid subscription.",
    pricingShipping: [
      "Price: $$$ — midrange.",
      "Shipping cost: The reviewed FAQ does not publish a fixed fee for orders below the free-shipping threshold.",
      "Free shipping: FedEx 2 Day on US orders over $300 after discounts.",
      "Dispatch: Same day before 3 PM MST Monday–Friday or noon MST Saturday, according to the FAQ.",
      "Quantity discounts: 5% off 4–5 vials, 10% off 6–9, or 15% off 10 or more of the same compound.",
      "Minimum purchase: No dollar minimum published in the pages reviewed.",
    ],
    strengths: [
      "Strong Trustpilot history (4.8/5 from 503 reviews).",
      "Public COA library with batch identifiers and dates.",
      "Named labs and a detailed multi-test panel description.",
      "Quantity discounts and free FedEx 2 Day shipping on larger qualifying orders.",
    ],
    limitations: [
      "$300 free-shipping threshold favors larger orders; smaller orders may see higher delivered cost.",
      "Fixed fee for sub-threshold shipping is not published in the reviewed FAQ.",
      "Trustpilot discloses review invitations and a paid subscription.",
    ],
    summaryLabel: "Reputation and testing transparency.",
    summary:
      "Mile High gives readers plenty to examine before ordering: hundreds of customer reviews, a public COA library and detailed testing information. Its $300 free-shipping threshold makes order size an important part of its value.",
    sources: [
      {
        label: "Trustpilot profile",
        href: "https://www.trustpilot.com/review/milehighcompounds.is",
      },
      {
        label: "COA library",
        href: "https://milehighcompounds.is/coas/",
      },
      {
        label: "Shipping and pricing FAQ",
        href: "https://milehighcompounds.is/faq/",
      },
      {
        label: "Published testing details",
        href: "https://milehighcompounds.is/product/bpc-157/",
      },
    ],
  },
  {
    slug: "peptora",
    name: "Peptora",
    website: PEPTORA_AFFILIATE_URL,
    initials: "PT",
    tone: "blue",
    rank: 4,
    rankBadge: "Published batch information",
    priceTier: "$$$$",
    trustpilotRating: null,
    trustpilotReviews: null,
    trustScore: 4.0,
    editorialRating: "Batch Detail",
    comparisonBlurb:
      "Specific product-level lot summaries to examine, at a premium price tier with unverified Trustpilot.",
    researchUse:
      "Laboratory research materials only; not intended for human or veterinary use.",
    testingAssessment:
      "Peptora names Elementrix / Elementrix Diagnostics and publishes product-level lot numbers, dates, purity and measured content. Its GLP-3 10 mg summary lists lot GLP-260803-V7, tested August 3, 2026, with 99.8% purity and 9.98 mg measured content. The website advertises additional testing — check the relevant batch report for available results.",
    customerReviews:
      "Trustpilot: Not verified. Without a matching profile, we cannot compare its review volume, rating distribution or complaint handling on the same basis as Amino Club, RIVN and Mile High.",
    pricingShipping: [
      "Price: $$$$ — premium.",
      "Discount: 15% off with MYPEPFINDER, subject to checkout eligibility.",
      "Shipping cost: Fixed standard and express charges are not listed in the reviewed policy.",
      "Free shipping: Standard shipping on orders over $150.",
      "Delivery: Standard 3–5 business days or express 1–2 business days.",
      "Dispatch: Same day before 2 PM PST on business days, according to the policy.",
      "Minimum purchase: No dollar or bulk-order minimum published in the pages reviewed.",
    ],
    discountCode: "MYPEPFINDER",
    discountNote: "15% off, subject to checkout eligibility",
    strengths: [
      "Product-level lot summaries with purity and measured content.",
      "Named testing laboratory (Elementrix / Elementrix Diagnostics).",
      "Affiliate discount available with MYPEPFINDER.",
      "Clear free-shipping threshold at $150 for standard shipping.",
    ],
    limitations: [
      "Premium pricing relative to the first three providers.",
      "No verified Trustpilot profile for independent customer-feedback comparison.",
      "Fixed standard and express shipping charges are not published in the reviewed policy.",
    ],
    summaryLabel: "Published batch information.",
    summary:
      "Peptora has specific batch results to examine. At $$$$, though, it needs a stronger value case than the lower-priced options above it. We could not verify a matching Trustpilot profile.",
    sources: [
      {
        label: "COA page",
        href: "https://www.peptoralabs.com/coas",
      },
      {
        label: "Example GLP-3 batch summary",
        href: "https://www.peptoralabs.com/product-page/glp-3",
      },
      {
        label: "Shipping, returns and refunds",
        href: "https://www.peptoralabs.com/shipping-and-returns",
      },
      {
        label: "Official website",
        href: "https://www.peptoralabs.com/",
      },
    ],
  },
];

export const TRUST_SCORE_METHODOLOGY = RANKING_CRITERIA.map((item) => ({
  title: item.title,
  body: `${item.body} ${item.why}`,
}));

export const TRUST_SCORE_BANDS = [
  {
    range: "Eligibility first",
    rating: "Must pass",
    meaning:
      "US-based business, conventional payments, public traceable testing, and accountable order handling.",
  },
  {
    range: "Then ranking",
    rating: "Editorial",
    meaning:
      "Customer reputation, testing transparency, price/value, shipping terms, and business accountability — without an invented 0–10 score.",
  },
];

const TONE_CLASSES = {
  indigo: "bg-indigo-600",
  teal: "bg-teal-600",
  violet: "bg-violet-600",
  blue: "bg-blue-600",
  emerald: "bg-emerald-600",
  sky: "bg-sky-600",
  rose: "bg-rose-600",
  amber: "bg-amber-500",
  slate: "bg-slate-700",
  orange: "bg-orange-500",
  cyan: "bg-cyan-600",
};

const RATING_STYLES = {
  "Best Value": "bg-emerald-50 text-emerald-700 ring-emerald-100",
  "Top Reviews": "bg-indigo-50 text-indigo-700 ring-indigo-100",
  "Strong Docs": "bg-violet-50 text-violet-700 ring-violet-100",
  "Batch Detail": "bg-blue-50 text-blue-700 ring-blue-100",
  Excellent: "bg-emerald-50 text-emerald-700 ring-emerald-100",
  Strong: "bg-indigo-50 text-indigo-700 ring-indigo-100",
  Moderate: "bg-amber-50 text-amber-800 ring-amber-100",
  Limited: "bg-slate-100 text-slate-700 ring-slate-200",
  "Must pass": "bg-emerald-50 text-emerald-700 ring-emerald-100",
  Editorial: "bg-indigo-50 text-indigo-700 ring-indigo-100",
};

export function getProviderToneClass(tone) {
  return TONE_CLASSES[tone] ?? TONE_CLASSES.indigo;
}

export function getEditorialRatingClass(rating) {
  return RATING_STYLES[rating] ?? RATING_STYLES.Moderate;
}

export function getTopProviders(limit = 3) {
  return PEPTIDE_PROVIDERS.slice(0, limit);
}

/** Top providers with Amino Club listed first (affiliate / value priority). */
export function getTopProvidersForSidebar(limit = 4) {
  const aminoClub = PEPTIDE_PROVIDERS.find((p) => p.slug === "amino-club");
  const rest = PEPTIDE_PROVIDERS.filter((p) => p.slug !== "amino-club");
  return [aminoClub, ...rest].filter(Boolean).slice(0, limit);
}

/** Compact card shape for peptide/goal sidebars. */
export function getCompactProviders(limit = 3) {
  return getTopProviders(limit).map((provider) => ({
    initials: provider.initials,
    name: provider.name,
    trust: formatTrustScore(provider.trustScore, provider),
    tag: provider.editorialRating,
    price: provider.priceTier,
    tone: provider.tone,
    website: provider.website,
    summary: provider.comparisonBlurb,
  }));
}

export function getProviderBySlug(slug) {
  return PEPTIDE_PROVIDERS.find((provider) => provider.slug === slug) ?? null;
}

/**
 * @param {number} score
 * @param {PeptideProvider} [provider]
 */
export function formatTrustScore(score, provider) {
  if (provider) {
    if (provider.trustpilotRating != null) {
      return `${provider.trustpilotRating.toFixed(1)}/5`;
    }
    return "Unverified";
  }
  if (typeof score === "number" && Number.isFinite(score)) {
    return score <= 5 ? `${score.toFixed(1)}/5` : `${score.toFixed(1)}/10`;
  }
  return "—";
}

export function formatProviderMetric(provider) {
  if (provider.trustpilotRating != null) {
    return `${provider.trustpilotRating.toFixed(1)}/5 Trustpilot`;
  }
  return "Trustpilot unverified";
}
