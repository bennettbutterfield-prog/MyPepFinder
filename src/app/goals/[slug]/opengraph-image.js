import {
  GOAL_HERO_IMAGES,
  GOAL_REDIRECTS,
  getGoalPage,
} from "@/data/goal-pages";
import {
  createPageOgImage,
  loadPublicAsset,
  ogContentType,
  ogSize,
} from "@/lib/og-image";

export const runtime = "nodejs";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image({ params }) {
  const { slug } = await params;
  const resolved = GOAL_REDIRECTS[slug] || slug;
  const page = getGoalPage(resolved);

  if (!page) {
    return createPageOgImage({
      title: "Peptide Goals",
      description: "Explore peptides by research goal.",
      badge: "Goals",
      accent: "violet",
    });
  }

  const heroPath = GOAL_HERO_IMAGES[resolved];
  const previewImage = heroPath ? await loadPublicAsset(heroPath) : null;

  return createPageOgImage({
    title: `${page.title} Peptides`,
    description: page.description,
    badge: "Research Goal",
    previewImage,
    accent: "violet",
  });
}
