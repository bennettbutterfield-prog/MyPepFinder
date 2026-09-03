import { PROVIDER_DIRECTORY } from "@/data/peptide-providers";
import {
  createOgAlt,
  createPageOgImage,
  ogContentType,
  ogSize,
} from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = createOgAlt(PROVIDER_DIRECTORY.title);
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return createPageOgImage({
    title: PROVIDER_DIRECTORY.title,
    description: PROVIDER_DIRECTORY.description,
    badge: "Provider Directory",
    preview: "providers",
    accent: "indigo",
  });
}
