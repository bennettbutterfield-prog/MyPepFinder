import {
  createPageOgImage,
  loadPublicAsset,
  ogContentType,
  ogSize,
} from "@/lib/og-image";
import {
  getPeptideOgVisual,
  resolvePeptideForOg,
} from "@/lib/peptide-og";

export const runtime = "nodejs";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image({ params }) {
  const { slug } = await params;
  const peptide = resolvePeptideForOg(slug);

  if (!peptide) {
    return createPageOgImage({
      title: "Peptide Research",
      description: "Explore peptide profiles, research, and provider comparisons.",
      badge: "MyPepFinder",
      accent: "violet",
    });
  }

  const visualPath = getPeptideOgVisual(peptide);
  const previewImage = visualPath ? await loadPublicAsset(visualPath) : null;

  return createPageOgImage({
    title: peptide.name,
    description: peptide.summary,
    badge: peptide.rankBadge || "Peptide Profile",
    previewImage,
    accent: "violet",
  });
}
