/** MyPepFinder affiliate outbound URL for Amino Club. */
export const AMINO_CLUB_AFFILIATE_URL =
  "https://aminoclub.com?utm_source=affiliate_marketing&code=MYPEPFINDER";

/** Site-wide disclosure for pages that link to affiliate providers. */
export const AFFILIATE_PAGE_DISCLOSURE =
  "Some provider links on this page are affiliate or sponsored links. If you click through and make a purchase, MyPepFinder may earn a commission at no extra cost to you. Compensation does not influence our Trust Scores or editorial assessments.";

/** Per-provider disclosure shown on affiliate provider profiles and outbound links. */
export const AFFILIATE_PROVIDER_DISCLOSURE =
  "Affiliate link: MyPepFinder may earn a commission if you visit this provider through our link. This does not change our editorial assessment or Trust Score.";

export function isAminoClubProvider(slug) {
  return slug === "amino-club";
}

export function getProviderWebsiteUrl(provider) {
  if (isAminoClubProvider(provider.slug)) {
    return AMINO_CLUB_AFFILIATE_URL;
  }
  return provider.website;
}

export function isAffiliateProvider(slug) {
  return isAminoClubProvider(slug);
}

export function getProviderLinkRel(slug) {
  return isAffiliateProvider(slug)
    ? "noopener noreferrer sponsored"
    : "noopener noreferrer";
}
