import { EXPLORE_REDIRECTS, LEGACY_PEPTIDE_SLUG_REDIRECTS } from "./src/data/explore-redirects.js";

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      ...EXPLORE_REDIRECTS.map((rule) => ({
        source: rule.source,
        destination: rule.destination,
        permanent: true,
      })),
      ...LEGACY_PEPTIDE_SLUG_REDIRECTS.map((rule) => ({
        source: rule.source,
        destination: rule.destination,
        permanent: true,
      })),
      {
        source: "/explore/:slug",
        destination: "/peptides/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
