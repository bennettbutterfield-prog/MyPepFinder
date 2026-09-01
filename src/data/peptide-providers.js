/**
 * Editorial research-peptide provider directory.
 * Source: peptide-providers.md (last updated 2026-09-01)
 */

export const PROVIDER_DIRECTORY = {
  title: "Research Peptide Providers",
  description:
    "MyPepFinder editorial profiles of online research-peptide suppliers, including testing assessments and trust scores.",
  lastUpdated: "September 1, 2026",
  providerCount: 11,
  intro:
    "MyPepFinder evaluates research-peptide providers using publicly available testing documentation, batch traceability, operational transparency, and regulatory information. Products sold by the providers below are labeled for laboratory research use only and are not FDA-approved for human or veterinary use.",
  disclaimer:
    "The MyPepFinder Trust Score evaluates vendor documentation and transparency. It does not establish that a product is safe, sterile, effective, FDA-approved, or suitable for human use.",
  legalDisclaimer:
    "MyPepFinder is an independent educational and comparison resource. Trust Scores are editorial assessments based on information available on the date shown and may change as new laboratory reports, regulatory actions, ownership information, or independent test results become available. MyPepFinder does not manufacture, prescribe, dispense, administer, or test the products listed on this page. Inclusion is not an endorsement.",
};

export const TRUST_SCORE_METHODOLOGY = [
  {
    title: "Independent testing depth",
    body: "Whether testing covers identity, purity, labeled content, sterility, endotoxins, heavy metals, residual solvents, or other relevant quality attributes.",
  },
  {
    title: "Batch traceability",
    body: "Whether reports correspond to the specific lot printed on the product.",
  },
  {
    title: "COA accessibility",
    body: "Whether current and historical Certificates of Analysis are publicly available before purchase.",
  },
  {
    title: "Laboratory transparency",
    body: "Whether the testing laboratory is named and its accreditation can be evaluated.",
  },
  {
    title: "Operational transparency",
    body: "Whether the provider clearly discloses its business identity, contact information, sourcing standards, fulfillment policies, and research-use restrictions.",
  },
  {
    title: "Regulatory and quality history",
    body: "Whether credible regulators or independent testing organizations have identified documentation, labeling, or quality concerns.",
  },
];

export const TRUST_SCORE_BANDS = [
  {
    range: "9.0–10.0",
    rating: "Excellent",
    meaning:
      "Unusually comprehensive, lot-specific testing and strong public documentation.",
  },
  {
    range: "8.0–8.9",
    rating: "Strong",
    meaning:
      "Good testing and transparency with one or more meaningful limitations.",
  },
  {
    range: "7.0–7.9",
    rating: "Moderate",
    meaning:
      "Useful documentation is available, but important testing or verification gaps remain.",
  },
  {
    range: "Below 7.0",
    rating: "Limited",
    meaning:
      "Insufficient public evidence to support a higher-confidence assessment.",
  },
];

/** @typedef {{ slug: string; name: string; website: string; initials: string; tone: string; trustScore: number; editorialRating: string; comparisonBlurb: string; researchUse: string; testingAssessment: string; strengths: string[]; limitations: string[]; summaryLabel: string; summary: string; sources: { label: string; href: string }[] }} PeptideProvider */

/** @type {PeptideProvider[]} */
export const PEPTIDE_PROVIDERS = [
  {
    slug: "koi-peptides",
    name: "Koi Peptides",
    website: "https://koipeptides.com/",
    initials: "KP",
    tone: "indigo",
    trustScore: 9.6,
    editorialRating: "Excellent",
    comparisonBlurb:
      "One of the most complete publicly described lot-release panels in the category.",
    researchUse:
      "Laboratory and analytical research only; not for human or veterinary use.",
    testingAssessment:
      "Koi Peptides publishes one of the most complete testing standards reviewed by MyPepFinder. The company states that every released lot is evaluated by an independent ISO/IEC 17025-accredited laboratory. Its described panel includes HPLC purity, LC-MS identity, measured peptide content, heavy metals, sterility, bacterial endotoxins, and residual TFA. Lot identifiers on products are matched to public COAs.",
    strengths: [
      "Public, lot-matched COA library.",
      "Named independent laboratory and disclosed analytical methods.",
      "Identity and purity testing are supplemented by actual-content measurements.",
      "Sterility, endotoxin, heavy-metal, and residual-TFA testing address quality attributes that purity alone cannot establish.",
      "Clear separation between the supplier and the laboratory issuing the report.",
    ],
    limitations: [
      "Documentation verifies only the submitted sample and does not prove that every vial in a lot is identical.",
      "The company pays the laboratory for testing, as is normal commercially; laboratory independence does not eliminate sampling risk.",
      "Research-grade testing does not make a product FDA-approved or suitable for clinical use.",
    ],
    summaryLabel: "Best testing transparency.",
    summary:
      "Koi Peptides earns the highest current MyPepFinder Trust Score because it combines lot traceability with identity, purity, content, microbiological, and contaminant testing from a named independent laboratory.",
    sources: [
      {
        label: "Koi Peptides quality standards",
        href: "https://koipeptides.com/quality/",
      },
      {
        label: "Koi Peptides catalog and lot documentation",
        href: "https://koipeptides.com/catalog/",
      },
    ],
  },
  {
    slug: "amino-club",
    name: "Amino Club",
    website: "https://www.aminoclub.com/",
    initials: "AC",
    tone: "teal",
    trustScore: 9.4,
    editorialRating: "Excellent",
    comparisonBlurb:
      "Strong batch-specific testing through independent ISO/IEC 17025-accredited laboratories.",
    researchUse:
      "Laboratory research only; not for human or veterinary use.",
    testingAssessment:
      "Amino Club publishes batch-specific COAs and states that testing is performed by independent ISO/IEC 17025-accredited laboratories. Its public quality materials describe an eight-assay testing approach intended to evaluate identity, purity, labeled content, and additional quality attributes rather than relying on a single HPLC purity number.",
    strengths: [
      "Batch-specific COAs available before purchase.",
      "Independent accredited-laboratory testing.",
      "Broad testing panel rather than purity-only documentation.",
      "Strong lot-traceability and public quality explanations.",
    ],
    limitations: [
      "Buyers must confirm that the lot shown online matches the lot supplied.",
      "Test coverage and methods should still be reviewed on the individual product COA.",
      "Vendor-published COAs are not equivalent to blind, buyer-submitted testing.",
    ],
    summaryLabel: "Best all-around documentation.",
    summary:
      "Amino Club combines accessible batch records with a comparatively broad independent testing program and clear research-use positioning.",
    sources: [
      {
        label: "Amino Club COA library",
        href: "https://www.aminoclub.com/us/coa",
      },
      {
        label: "Amino Club quality standards",
        href: "https://www.aminoclub.com/us/quality",
      },
    ],
  },
  {
    slug: "limitless-biotech",
    name: "Limitless Biotech",
    website: "https://limitlesslifenootropics.com/",
    initials: "LB",
    tone: "violet",
    trustScore: 9.3,
    editorialRating: "Excellent",
    comparisonBlurb:
      "Broad testing program covering identity, purity, sterility, endotoxins, and contaminants.",
    researchUse:
      "Restricted to qualified research and in-vitro laboratory applications.",
    testingAssessment:
      "Limitless Biotech states that its peptide batches undergo independent testing for HPLC purity, LC-MS identity, sterility, bacterial endotoxins, and chemical contaminants. Product pages can include separate batch documents for purity, sterility, and endotoxin results. The company also operates a controlled-access model for professional pricing.",
    strengths: [
      "Identity confirmation through LC-MS in addition to HPLC purity.",
      "Sterility and endotoxin reports are available for applicable products.",
      "Batch-specific documentation appears directly on product pages.",
      "Large catalog with established research-use controls.",
    ],
    limitations: [
      "Testing completeness must be checked product by product; not every listing presents documentation identically.",
      "Some manufacturing and laboratory claims rely on company disclosures.",
      "A large catalog makes consistent testing and document maintenance more difficult to verify at a glance.",
    ],
    summaryLabel: "Best established broad-catalog provider.",
    summary:
      "Limitless Biotech pairs a wide selection with testing that goes meaningfully beyond purity-only COAs.",
    sources: [
      {
        label: "Limitless Biotech research catalog and quality disclosures",
        href: "https://limitlesslifenootropics.com/",
      },
      {
        label: "Example product with batch purity, sterility, and endotoxin reports",
        href: "https://limitlesslifenootropics.com/glow-blend/",
      },
    ],
  },
  {
    slug: "verified-peptides",
    name: "Verified Peptides",
    website: "https://verifiedpeptides.com/",
    initials: "VP",
    tone: "blue",
    trustScore: 9.2,
    editorialRating: "Excellent",
    comparisonBlurb:
      "Extensive public report archive with purity, content, sterility, and endotoxin results.",
    researchUse:
      "Laboratory research only; not for human or veterinary use.",
    testingAssessment:
      "Verified Peptides maintains a large public archive of third-party reports. Its described testing program includes HPLC purity, measured vial content, sterility, and bacterial endotoxins. The archive makes it possible to compare current and historical results instead of relying on a single representative certificate.",
    strengths: [
      "Extensive public testing archive with hundreds of reports.",
      "Includes measured content, sterility, and endotoxin results alongside purity.",
      "Historical reports make consistency easier to evaluate.",
      "Clear emphasis on third-party validation.",
    ],
    limitations: [
      "Testing methods and completeness may vary between older and newer reports.",
      "Researchers should verify molecular-identity testing on the specific product report.",
      "A large report count does not replace lot matching at fulfillment.",
    ],
    summaryLabel: "Best historical testing archive.",
    summary:
      "Verified Peptides stands out for the volume and accessibility of its public laboratory documentation.",
    sources: [
      {
        label: "Verified Peptides laboratory reports",
        href: "https://verifiedpeptides.com/lab-reports/",
      },
      {
        label: "Verified Peptides testing process",
        href: "https://verifiedpeptides.com/our-company/",
      },
    ],
  },
  {
    slug: "simple-peptide",
    name: "Simple Peptide",
    website: "https://simplepeptide.com/",
    initials: "SP",
    tone: "emerald",
    trustScore: 9.0,
    editorialRating: "Excellent",
    comparisonBlurb:
      "Expanded lot testing includes purity, net content, sterility, and endotoxins.",
    researchUse:
      "Laboratory research only; not approved for human or veterinary applications.",
    testingAssessment:
      "Simple Peptide expanded its lot-testing standard in May 2026. COAs issued under the expanded standard include purity, net peptide content, sterility, and bacterial endotoxin results. Product pages direct researchers to lot documentation so the report can be checked against the material received.",
    strengths: [
      "Public lot-specific documentation.",
      "Measures net peptide content instead of relying only on total vial weight.",
      "Includes sterility and endotoxin testing under the expanded standard.",
      "Clear explanation of when the broader testing program began.",
    ],
    limitations: [
      "Lots tested before May 2026 may follow a narrower standard.",
      "Researchers should verify LC-MS identity confirmation on the exact COA.",
      "A transition between testing standards can create inconsistent historical records.",
    ],
    summaryLabel: "Strong current testing with an important date distinction.",
    summary:
      "Simple Peptide's post-May 2026 reports are substantially more informative than purity-only COAs, but older lots should be evaluated separately.",
    sources: [
      {
        label: "Simple Peptide COA library",
        href: "https://simplepeptide.com/certificate-of-analysis/",
      },
      {
        label: "Simple Peptide testing FAQ",
        href: "https://simplepeptide.com/simple-peptide-faq/",
      },
    ],
  },
  {
    slug: "nextgen-peptides",
    name: "NextGen Peptides",
    website: "https://ngpeptide.com/",
    initials: "NG",
    tone: "sky",
    trustScore: 8.7,
    editorialRating: "Strong",
    comparisonBlurb:
      "Public lot COAs and a broad panel, offset by some aggressive consumer-adjacent marketing.",
    researchUse:
      "Laboratory research only; not approved for human or veterinary use.",
    testingAssessment:
      "NextGen Peptides states that every batch is submitted to accredited third-party laboratories. Its described panel includes HPLC purity, mass-spectrometry identity, measured potency or content, heavy metals, sterility, and bacterial endotoxins. Product pages can display the testing laboratory, lot number, labeled amount, measured amount, test date, and COA link.",
    strengths: [
      "Broad analytical panel covering identity, purity, content, microbiological quality, and heavy metals.",
      "Lot-level COA details appear directly on product pages.",
      "Named laboratory information is available on individual listings.",
      "Clear labeled-versus-measured content fields.",
    ],
    limitations: [
      "Some site language and product formats are consumer-adjacent despite research-use disclaimers.",
      "Certain marketing claims, particularly around alternative delivery formats, require stronger supporting evidence.",
      "Researchers should distinguish analytical verification from claims about absorption or biological effects.",
    ],
    summaryLabel: "Strong laboratory documentation with marketing caveats.",
    summary:
      "NextGen's reported QC panel is comprehensive, but MyPepFinder recommends separating its analytical evidence from broader product-performance claims.",
    sources: [
      {
        label: "NextGen Peptides COA library",
        href: "https://ngpeptide.com/coa-library/",
      },
      {
        label: "NextGen Peptides testing disclosures",
        href: "https://ngpeptide.com/about/",
      },
    ],
  },
  {
    slug: "protide-health",
    name: "Protide Health",
    website: "https://protidehealth.com/",
    initials: "PH",
    tone: "rose",
    trustScore: 8.4,
    editorialRating: "Strong",
    comparisonBlurb:
      "Large public COA library and strong reported purity, but limited buyer-submitted independent verification.",
    researchUse:
      "Research-use-only compounds; not for human or veterinary use.",
    testingAssessment:
      "Protide Health publishes a sizable COA collection and reports high average HPLC purity across recent lots. Its documentation is transparent enough to evaluate by product and batch. However, as of August 28, 2026, independent testing directory Finnrick had not published buyer-submitted laboratory results for Protide Health, so the current assessment relies primarily on provider-commissioned documentation.",
    strengths: [
      "Public batch COAs across a broad product catalog.",
      "Reports aggregate recent purity performance rather than highlighting only one result.",
      "Clear product and fulfillment information.",
      "Rapid improvement in documentation for a relatively young provider.",
    ],
    limitations: [
      "Shorter operating history than the most established providers.",
      "No published Finnrick buyer-submitted test results as of the date of this assessment.",
      "Provider-commissioned COAs should ideally be supplemented by blind independent sampling.",
    ],
    summaryLabel: "Promising newer provider.",
    summary:
      "Protide Health has built a strong public documentation program quickly, but more independent buyer-submitted verification would justify a higher score.",
    sources: [
      {
        label: "Protide Health COA purity archive",
        href: "https://protidehealth.com/coa-purity/",
      },
      {
        label: "Finnrick Protide Health testing status",
        href: "https://www.finnrick.com/vendors/protide-health",
      },
    ],
  },
  {
    slug: "liberty-peptides",
    name: "Liberty Peptides",
    website: "https://libertypeptides.com/",
    initials: "LP",
    tone: "amber",
    trustScore: 8.1,
    editorialRating: "Strong",
    comparisonBlurb:
      "Batch COAs and third-party analytical testing, with less clearly standardized full-panel testing.",
    researchUse:
      "Preclinical and laboratory research only; not for human or veterinary use.",
    testingAssessment:
      "Liberty Peptides states that its catalog is domestically manufactured and supported by independent third-party analytical testing. Product listings provide COA access and describe verification of molecular weight and purity. Public documentation is useful, although the company does not present the same clearly standardized sterility, endotoxin, heavy-metal, and content panel across every listing.",
    strengths: [
      "Product-level COA availability.",
      "Third-party purity and molecular-weight verification.",
      "Domestic inventory and clear research-use policies.",
      "Established catalog with compound-specific documentation.",
    ],
    limitations: [
      "Full-panel testing is not described consistently across all products.",
      "Sterility, endotoxin, actual-content, and contaminant testing should be confirmed on each lot.",
      "COA availability alone does not establish that all critical quality attributes were tested.",
    ],
    summaryLabel:
      "Solid analytical documentation with room for a broader standard panel.",
    summary:
      "Liberty Peptides provides useful identity and purity evidence, but more consistent microbiological and content testing would strengthen its score.",
    sources: [
      {
        label: "Liberty Peptides research catalog",
        href: "https://libertypeptides.com/",
      },
      {
        label: "Liberty Peptides testing FAQ",
        href: "https://libertypeptides.com/questions/",
      },
    ],
  },
  {
    slug: "core-peptides",
    name: "Core Peptides",
    website: "https://www.corepeptides.com/",
    initials: "CP",
    tone: "slate",
    trustScore: 7.9,
    editorialRating: "Moderate",
    comparisonBlurb:
      "Broad catalog and product COAs, but less evidence of comprehensive microbiological and contaminant testing.",
    researchUse:
      "Research, laboratory, or analytical use only; not for human consumption.",
    testingAssessment:
      "Core Peptides provides product COAs and commonly reports purity above 99%. The provider has a broad catalog and clear research-use language. Compared with the highest-scoring providers, its public quality standard gives less consistent visibility into measured peptide content, sterility, bacterial endotoxins, heavy metals, residual solvents, and other lot-release attributes.",
    strengths: [
      "COAs are available on product listings.",
      "Established provider with a broad catalog.",
      "Clear research-only disclaimer and chemical-supplier positioning.",
      "Compound specifications and research references are generally accessible.",
    ],
    limitations: [
      "Public documentation often emphasizes HPLC purity more than full-panel testing.",
      "Researchers should verify mass-spectrometry identity and actual peptide content for the supplied lot.",
      "Sterility and endotoxin status should not be assumed from a purity result.",
    ],
    summaryLabel: "Established provider with moderate testing transparency.",
    summary:
      "Core Peptides offers useful COAs and a deep catalog, but its public documentation does not consistently match the breadth of the top testing programs.",
    sources: [
      {
        label: "Core Peptides catalog",
        href: "https://www.corepeptides.com/",
      },
      {
        label: "Example Core Peptides product and COA listing",
        href: "https://www.corepeptides.com/peptides/fragment-176-191/",
      },
    ],
  },
  {
    slug: "biotech-peptides",
    name: "Biotech Peptides",
    website: "https://biotechpeptides.com/",
    initials: "BP",
    tone: "orange",
    trustScore: 7.8,
    editorialRating: "Moderate",
    comparisonBlurb:
      "Current third-party HPLC-MS claims are positive, but an older COA received specific scrutiny in an FDA review.",
    researchUse:
      "In-vitro laboratory research only; not for human or veterinary use.",
    testingAssessment:
      "Biotech Peptides currently states that every batch is independently verified using HPLC and mass spectrometry and that results are posted publicly. However, a 2026 FDA briefing document used a Biotech Peptides BPC-157 acetate COA accessed in 2024 as an example of documentation containing purity testing without adequate impurity characterization. The FDA also noted the absence of bioburden or endotoxin information in the publicly available record it evaluated. This was a critique of an older COA and does not establish that all current Biotech Peptides lots use the same standard.",
    strengths: [
      "Current site describes independent HPLC-MS verification.",
      "Public product COAs and domestic synthesis claims.",
      "Established operating history and custom-synthesis capability.",
      "Broad compound catalog.",
    ],
    limitations: [
      "Historical FDA scrutiny of the information included in a publicly available BPC-157 COA.",
      "Current sterility, endotoxin, content, residual-solvent, and impurity testing should be verified lot by lot.",
      "Updated company claims should not be assumed to resolve older documentation gaps without checking the current report.",
    ],
    summaryLabel:
      "Established supplier with a material historical documentation caveat.",
    summary:
      "Biotech Peptides' current HPLC-MS program is a positive signal, but its score remains moderated until broader current lot-release evidence is consistently visible.",
    sources: [
      {
        label: "Biotech Peptides quality disclosures",
        href: "https://biotechpeptides.com/about/",
      },
      {
        label: "FDA BPC-157 briefing document",
        href: "https://www.fda.gov/media/193343/download",
      },
    ],
  },
  {
    slug: "penguin-peptides",
    name: "Penguin Peptides",
    website: "https://penguinpeptides.com/",
    initials: "PP",
    tone: "cyan",
    trustScore: 7.7,
    editorialRating: "Moderate",
    comparisonBlurb:
      "Public third-party lab results are available, although the standard panel is less clearly defined.",
    researchUse:
      "Laboratory research only; not intended for human or veterinary use.",
    testingAssessment:
      "Penguin Peptides publishes third-party laboratory results intended to verify research-grade purity. This is materially better than providing no public documentation. However, its site does not describe one consistently applied full testing panel—with identity, actual content, sterility, endotoxins, heavy metals, and residual contaminants—as clearly as the highest-scoring providers.",
    strengths: [
      "Public third-party lab-results page.",
      "Clear research-use disclaimer.",
      "Product-specific purity documentation.",
      "Established online catalog and accessible support policies.",
    ],
    limitations: [
      "Standard test coverage is less clearly defined across the full catalog.",
      "Researchers should verify lot matching and mass-spectrometry identity on the exact report.",
      "Purity testing should not be interpreted as proof of sterility or accurate labeled content.",
    ],
    summaryLabel: "Useful public testing with a narrower disclosed standard.",
    summary:
      "Penguin Peptides provides meaningful third-party documentation, but more consistent full-panel testing would support a higher score.",
    sources: [
      {
        label: "Penguin Peptides laboratory results",
        href: "https://penguinpeptides.com/lab-results/",
      },
      {
        label: "Penguin Peptides research-use disclaimer",
        href: "https://penguinpeptides.com/disclaimer/",
      },
    ],
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
  Excellent: "bg-emerald-50 text-emerald-700 ring-emerald-100",
  Strong: "bg-indigo-50 text-indigo-700 ring-indigo-100",
  Moderate: "bg-amber-50 text-amber-800 ring-amber-100",
  Limited: "bg-slate-100 text-slate-700 ring-slate-200",
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

/** Compact card shape for peptide/goal sidebars. */
export function getCompactProviders(limit = 3) {
  return getTopProviders(limit).map((provider) => ({
    initials: provider.initials,
    name: provider.name,
    trust: provider.trustScore.toFixed(1),
    tag: provider.editorialRating,
    price: `${provider.trustScore}/10 Trust`,
    tone: provider.tone,
    website: provider.website,
    summary: provider.comparisonBlurb,
  }));
}

export function getProviderBySlug(slug) {
  return PEPTIDE_PROVIDERS.find((provider) => provider.slug === slug) ?? null;
}

export function formatTrustScore(score) {
  return `${score.toFixed(1)}/10`;
}
