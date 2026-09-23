import {
  createOgAlt,
  createPageOgImage,
  ogContentType,
  ogSize,
} from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = createOgAlt(
  "Calorie Deficit Calculator",
  "Weight-loss timeline, daily intake, and macros"
);
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return createPageOgImage({
    title: "Calorie Deficit Calculator",
    description:
      "Plan daily intake, timeline, and macros to reach your goal weight.",
    preview: "calculator-calorie",
    crumbs: ["Home", "Tools", "Calorie Deficit Calculator"],
  });
}
