import {
  createOgAlt,
  createPageOgImage,
  ogContentType,
  ogSize,
} from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = createOgAlt("Privacy Policy");
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return createPageOgImage({
    title: "Privacy Policy",
    description:
      "How MyPepFinder collects, uses, and protects information when you use our tools.",
    badge: "Legal",
    accent: "indigo",
  });
}
