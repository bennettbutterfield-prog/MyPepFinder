/** Research goals for comparison flows (non-prescriptive labels). */
export const RESEARCH_GOALS = [
  {
    id: "explore-recovery",
    label: "Exploring recovery-related research compounds",
  },
  {
    id: "compare-transparency",
    label: "Comparing lab transparency and documentation",
  },
  {
    id: "pricing-research",
    label: "Researching pricing and product clarity",
  },
  {
    id: "general-education",
    label: "General educational comparison",
  },
];

export function goalById(id) {
  return RESEARCH_GOALS.find((g) => g.id === id) ?? null;
}
