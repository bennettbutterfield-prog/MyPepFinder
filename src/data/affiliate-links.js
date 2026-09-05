/** MyPepFinder affiliate outbound URL for Amino Club. */
export const AMINO_CLUB_AFFILIATE_URL =
  "https://aminoclub.com?utm_source=affiliate_marketing&code=MYPEPFINDER";

/** MyPepFinder affiliate outbound URL for NextGen Peptides. */
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
  "Some provider links on this page are affiliate or sponsored links. If you click through and make a purchase, MyPepFinder may earn a commission at no extra cost to you. Compensation does not influence our Trust Scores or editorial assessments.";

/** Per-provider disclosure shown on affiliate provider profiles and outbound links. */
export const AFFILIATE_PROVIDER_DISCLOSURE =
  "Affiliate link: MyPepFinder may earn a commission if you visit this provider through our link. This does not change our editorial assessment or Trust Score.";

const AFFILIATE_PROVIDER_SLUGS = new Set(["amino-club", "nextgen-peptides"]);

export function isAminoClubProvider(slug) {
  return slug === "amino-club";
}

export function isNextGenPeptidesProvider(slug) {
  return slug === "nextgen-peptides";
}

export function getProviderWebsiteUrl(provider) {
  if (isAminoClubProvider(provider.slug)) {
    return AMINO_CLUB_AFFILIATE_URL;
  }
  if (isNextGenPeptidesProvider(provider.slug)) {
    return NEXTGEN_PEPTIDES_AFFILIATE_URL;
  }
  return provider.website;
}

export function isAffiliateProvider(slug) {
  return AFFILIATE_PROVIDER_SLUGS.has(slug);
}

export function getProviderLinkRel(slug) {
  return isAffiliateProvider(slug)
    ? "noopener noreferrer sponsored"
    : "noopener noreferrer";
}
