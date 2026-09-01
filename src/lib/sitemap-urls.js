import { getAllPeptidePageSlugs } from "@/data/peptide-pages";
import { getAllGoalSlugs } from "@/data/goal-pages";
import { getKnownExploreSlugs } from "@/data/explore-sellers";
import { POPULAR_PEPTIDES } from "@/data/popular-peptides";
import { peptideProducts } from "@/data/peptide-taxonomy";

const TAXONOMY_ALIASES = [
  "glow",
  "klow",
  "semaglutide",
  "n-acetyl-selank-amidate",
  "n-acetyl-semax-amidate",
];

export function getSiteBaseUrl() {
  return (
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000")
  );
}

/** Slugs that have static peptide profile pages (matches generateStaticParams). */
export function getPeptideProfileSlugs() {
  return [
    ...new Set([
      ...getAllPeptidePageSlugs(),
      ...POPULAR_PEPTIDES.map((p) => p.slug),
      ...getKnownExploreSlugs(),
      ...peptideProducts.map((p) => p.slug),
      ...TAXONOMY_ALIASES,
    ]),
  ];
}

const STATIC_ROUTES = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/research-library", changeFrequency: "weekly", priority: 0.9 },
  { path: "/calculator", changeFrequency: "monthly", priority: 0.9 },
  { path: "/calculator/calorie-deficit", changeFrequency: "monthly", priority: 0.85 },
  { path: "/recommendations", changeFrequency: "weekly", priority: 0.85 },
  { path: "/about", changeFrequency: "monthly", priority: 0.6 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.6 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.5 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
  { path: "/quiz", changeFrequency: "monthly", priority: 0.5 },
  { path: "/results", changeFrequency: "monthly", priority: 0.4 },
];

export function buildSitemapEntries() {
  const baseUrl = getSiteBaseUrl();
  const lastModified = new Date();

  const staticEntries = STATIC_ROUTES.map(({ path, changeFrequency, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));

  const goalEntries = getAllGoalSlugs().map((slug) => ({
    url: `${baseUrl}/goals/${slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const peptideEntries = getPeptideProfileSlugs().map((slug) => ({
    url: `${baseUrl}/peptides/${slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.75,
  }));

  const exploreEntries = getKnownExploreSlugs().map((slug) => ({
    url: `${baseUrl}/explore/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticEntries, ...goalEntries, ...peptideEntries, ...exploreEntries];
}
