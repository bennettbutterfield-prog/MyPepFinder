export const PRODUCTION_SITE_URL = "https://www.mypepfinder.com";

function canonicalizeOrigin(value) {
  try {
    const url = new URL(value);
    if (url.hostname === "localhost" || url.hostname === "127.0.0.1") {
      return PRODUCTION_SITE_URL;
    }
    if (url.hostname === "mypepfinder.com") {
      url.hostname = "www.mypepfinder.com";
    }
    return url.origin;
  } catch {
    return PRODUCTION_SITE_URL;
  }
}

/**
 * Absolute origin used in sitemap, Open Graph, and share cards.
 * Production always uses the www host so preview crawlers never store the apex 308.
 */
export function getSiteBaseUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return canonicalizeOrigin(process.env.NEXT_PUBLIC_SITE_URL);
  }
  if (process.env.VERCEL_ENV === "production") {
    return PRODUCTION_SITE_URL;
  }
  if (process.env.VERCEL_URL) {
    return canonicalizeOrigin(`https://${process.env.VERCEL_URL}`);
  }
  return PRODUCTION_SITE_URL;
}
