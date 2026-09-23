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
      title: "What do you want to improve?",
      description: "Browse peptides by research goal.",
      preview: "goals",
      crumbs: ["Home", "Goals"],
    });
  }

  const heroPath = GOAL_HERO_IMAGES[resolved] || page.heroImage;
  const previewImage = heroPath ? await loadPublicAsset(heroPath) : null;
  const stats = (page.stats || []).filter(
    (stat) => stat.label !== "Reviews" && stat.label !== "Provider Partners"
  );

  return createPageOgImage({
    title: page.title,
    description: page.description,
    preview: "goal",
    previewImage,
    crumbs: ["Home", "Goals", page.title],
    stats,
  });
}
