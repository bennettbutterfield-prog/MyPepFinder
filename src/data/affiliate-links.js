/** MyPepFinder affiliate outbound URLs for provider partners. */

export const AMINO_CLUB_AFFILIATE_URL =
  "https://aminoclub.com?utm_source=affiliate_marketing&code=MYPEPFINDER";

export const RIVN_AFFILIATE_URL = "https://rivnresearch.com/?sld=4171";

export const PEPTORA_AFFILIATE_URL =
  "https://www.peptoralabs.com/ref/MYPEPFINDER";

/** Legacy NextGen affiliate URL (kept for any remaining outbound references). */
export const NEXTGEN_PEPTIDES_AFFILIATE_URL =
  "https://ngpeptide.com/?ref=tpkgknzm";

const NEXTGEN_AFFILIATE_REF = "tpkgknzm";

/**
 * Build a NextGen Peptides URL with the affiliate ref param.
 * @param {string} [pathOrUrl="/"] Absolute path or full ngpeptide.com URL.
 */
export function nextGenAffiliateUrl(pathOrUrl = "/") {
  const url = new URL(
    pathOrUrl.startsWith("http")
      ? pathOrUrl
      : `https://ngpeptide.com${pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`}`
  );
  url.searchParams.set("ref", NEXTGEN_AFFILIATE_REF);
  return url.toString();
}

/** Site-wide disclosure for pages that link to affiliate providers. */
export const AFFILIATE_PAGE_DISCLOSURE =
  "MyPepFinder may earn a commission on purchases through affiliate links. These providers sell laboratory research materials that are not intended for human or veterinary use. Compensation does not change our editorial rankings or assessments.";

/** Per-provider disclosure shown on affiliate provider profiles and outbound links. */
export const AFFILIATE_PROVIDER_DISCLOSURE =
  "Affiliate link: MyPepFinder may earn a commission if you visit this provider through our link. This does not change our editorial assessment.";

const AFFILIATE_URL_BY_SLUG = {
  "amino-club": AMINO_CLUB_AFFILIATE_URL,
  rivn: RIVN_AFFILIATE_URL,
  peptora: PEPTORA_AFFILIATE_URL,
  "nextgen-peptides": NEXTGEN_PEPTIDES_AFFILIATE_URL,
};

export function isAminoClubProvider(slug) {
  return slug === "amino-club";
}

export function isNextGenPeptidesProvider(slug) {
  return slug === "nextgen-peptides";
}

export function getProviderWebsiteUrl(provider) {
  return AFFILIATE_URL_BY_SLUG[provider.slug] || provider.website;
}

export function isAffiliateProvider(slug) {
  return Object.prototype.hasOwnProperty.call(AFFILIATE_URL_BY_SLUG, slug);
}

export function getProviderLinkRel(slug) {
  return isAffiliateProvider(slug)
    ? "noopener noreferrer sponsored"
    : "noopener noreferrer";
}
