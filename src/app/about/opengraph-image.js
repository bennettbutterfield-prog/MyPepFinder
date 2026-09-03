import {
  createOgAlt,
  createPageOgImage,
  ogContentType,
  ogSize,
} from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = createOgAlt("Find. Compare. Optimize.");
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return createPageOgImage({
    title: "Find. Compare. Optimize.",
    description:
      "An educational platform for peptide research, provider comparison, and evidence-based tools.",
    badge: "About MyPepFinder",
    accent: "indigo",
  });
}
