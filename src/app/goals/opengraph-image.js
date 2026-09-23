import {
  createOgAlt,
  createPageOgImage,
  ogContentType,
  ogSize,
} from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = createOgAlt("Peptide Goals");
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return createPageOgImage({
    title: "What do you want to improve?",
    description:
      "Browse peptides by research goal, including weight loss, muscle, sleep, hair, skin, cognition, and longevity.",
    preview: "goals",
    crumbs: ["Home", "Goals"],
  });
}
