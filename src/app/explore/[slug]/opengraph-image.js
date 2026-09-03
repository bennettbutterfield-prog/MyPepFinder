import { getExplorePageData } from "@/data/explore-sellers";
import {
  createPageOgImage,
  ogContentType,
  ogSize,
} from "@/lib/og-image";

export const runtime = "nodejs";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image({ params }) {
  const { slug } = await params;
  const data = getExplorePageData(slug);

  if (!data) {
    return createPageOgImage({
      title: "Explore Providers",
      description: "Compare research peptide suppliers.",
      badge: "Supplier Comparison",
      preview: "providers",
      accent: "emerald",
    });
  }

  return createPageOgImage({
    title: `Explore providers for ${data.peptideName}`,
    description: `Compare illustrative pricing and trust-style scores for ${data.peptideName}.`,
    badge: "Supplier Comparison",
    preview: "providers",
    accent: "emerald",
  });
}
