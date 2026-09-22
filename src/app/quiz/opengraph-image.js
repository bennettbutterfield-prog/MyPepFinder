import {
  createOgAlt,
  createPageOgImage,
  ogContentType,
  ogSize,
} from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = createOgAlt(
  "Peptide Quiz",
  "Find a peptide for your goal"
);
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return createPageOgImage({
    title: "Find a peptide for your goal",
    description:
      "Choose what to optimize, refine the research effect, and get a match.",
    badge: "Peptide Quiz",
    preview: "quiz",
    accent: "indigo",
  });
}
