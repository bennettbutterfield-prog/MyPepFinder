import { getPeptidePage } from "@/data/peptide-pages";

const GLP_PAGE_SLUGS = new Set([
  "semaglutide",
  "tirzepatide",
  "retatrutide",
  "survodutide",
]);

function glanceWeekMatch(item) {
  const text = `${item.label} ${item.value}`;
  return text.match(/(\d+)\s*wks?/i);
}

/**
 * Published % weight-change slider data from the complete library page.
 * Only GLP-family entries that already have a results chart.
 */
export function getPublishedWeightLossChart(pageSlug) {
  if (!pageSlug || !GLP_PAGE_SLUGS.has(pageSlug)) return null;
  const page = getPeptidePage(pageSlug);
  if (!page?.chartLossPct) return null;

  const glance = (page.glance || []).find((item) => glanceWeekMatch(item));
  const weekMatch = glance ? glanceWeekMatch(glance) : null;

  return {
    lossPct: page.chartLossPct,
    weeks: weekMatch ? Number(weekMatch[1]) : 48,
    sourceLabel: glance ? `${glance.label}: ${glance.value}` : null,
  };
}
