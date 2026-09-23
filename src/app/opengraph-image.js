import {
  createOgAlt,
  createPageOgImage,
  loadPublicAsset,
  ogContentType,
  ogSize,
} from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = createOgAlt("Optimize You.");
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  const heroImage = await loadPublicAsset("/hero-man.jpg");

  return createPageOgImage({
    title: "Optimize You.",
    description: "Research peptides. Compare providers. Optimize with confidence.",
    preview: "home",
    previewImage: heroImage,
  });
}
