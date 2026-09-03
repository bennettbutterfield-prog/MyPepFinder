import {
  createOgAlt,
  createPageOgImage,
  ogContentType,
  ogSize,
} from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = createOgAlt(
  "Peptide Dosage Calculator",
  "Calculate reconstitution and injection volumes"
);
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return createPageOgImage({
    title: "Peptide Dosage Calculator",
    description: "Calculate reconstitution amounts and injection volumes.",
    badge: "Free Tool",
    preview: "calculator-peptide",
    accent: "indigo",
  });
}
