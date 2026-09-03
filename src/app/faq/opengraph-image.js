import {
  createOgAlt,
  createPageOgImage,
  ogContentType,
  ogSize,
} from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = createOgAlt("Frequently asked questions");
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return createPageOgImage({
    title: "Frequently asked questions",
    description:
      "Answers about MyPepFinder, peptide research, calculators, and safety.",
    badge: "Help Center",
    accent: "indigo",
  });
}
