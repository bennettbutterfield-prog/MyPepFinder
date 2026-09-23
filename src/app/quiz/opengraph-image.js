import {
  createOgAlt,
  createPageOgImage,
  ogContentType,
  ogSize,
} from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = createOgAlt("Peptide Quiz", "Find research for your goal");
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return createPageOgImage({
    title: "Peptide research finder",
    description:
      "Start with a goal, then answer only the follow-ups that change the research question.",
    preview: "quiz",
    crumbs: ["Home", "Peptide Quiz"],
  });
}
