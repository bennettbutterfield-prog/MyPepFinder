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
import { getPeptideOverviewLead } from "@/data/peptide-overviews";

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
      badge: "Research Library",
      crumbs: ["Home", "Peptides"],
    });
  }

  const visualPath = getPeptideOgVisual(peptide);
  const previewImage = visualPath ? await loadPublicAsset(visualPath) : null;
  const description =
    getPeptideOverviewLead(slug) ||
    getPeptideOverviewLead(peptide.slug) ||
    peptide.summary;

  return createPageOgImage({
    title: peptide.name,
    description,
    badge: peptide.rankBadge || "Peptide Profile",
    preview: "peptide",
    previewImage,
    crumbs: [
      "Home",
      "Goals",
      peptide.goalLabel || "Goals",
      peptide.name,
    ],
    tags: peptide.tags || [],
    callouts: peptide.moleculeCallouts || [],
  });
}
