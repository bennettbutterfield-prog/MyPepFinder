import {
  createOgAlt,
  createPageOgImage,
  ogContentType,
  ogSize,
} from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = createOgAlt("Research Library");
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return createPageOgImage({
    title: "Research Library",
    description:
      "Browse peptide compounds and open research profiles with provider comparisons.",
    badge: "Reference Index",
    preview: "library",
    accent: "violet",
  });
}
