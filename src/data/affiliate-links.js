/** MyPepFinder affiliate outbound URL for Amino Club. */
export const AMINO_CLUB_AFFILIATE_URL =
  "https://aminoclub.com?utm_source=affiliate_marketing&code=MYPEPFINDER";

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
