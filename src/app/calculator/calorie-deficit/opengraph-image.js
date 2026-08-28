import {
  createCalculatorOgImage,
  ogContentType,
  ogSize,
} from "@/lib/og-calculator-image";

export const runtime = "edge";
export const alt =
  "Calorie Deficit Calculator — Weight-loss timeline, daily intake, and macros | MyPepFinder";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return createCalculatorOgImage({
    title: "Calorie Deficit Calculator",
    description: "Plan daily intake, timeline, and macros to reach your goal weight.",
    badge: "Free Tool",
  });
}
