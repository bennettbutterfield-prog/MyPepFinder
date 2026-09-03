import {
  createOgAlt,
  createPageOgImage,
  ogContentType,
  ogSize,
} from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = createOgAlt("Terms of Service");
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return createPageOgImage({
    title: "Terms of Service",
    description:
      "Terms governing your use of MyPepFinder research tools, calculators, and educational content.",
    badge: "Legal",
    accent: "indigo",
  });
}
