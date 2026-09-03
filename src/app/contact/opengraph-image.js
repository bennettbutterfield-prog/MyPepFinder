import {
  createOgAlt,
  createPageOgImage,
  ogContentType,
  ogSize,
} from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = createOgAlt("Contact us");
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return createPageOgImage({
    title: "Contact us",
    description:
      "Questions about the site, research summaries, provider listings, or privacy?",
    badge: "Get in touch",
    accent: "indigo",
  });
}
