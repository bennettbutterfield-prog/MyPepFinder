/** User-selected optimization areas (exploration / education framing). */

export const OPTIMIZATION_GOALS = [
  {
    id: "injury-recovery",
    label: "Injury Recovery",
    shortLabel: "Repair & recovery research",
    description:
      "Compounds commonly discussed in tissue-repair, recovery, and regeneration-oriented research conversations.",
  },
  {
    id: "dermal",
    label: "Dermal",
    shortLabel: "Skin & Hair",
    description:
      "Molecules frequently referenced in skin, hair, extracellular matrix, and cosmetic-science research contexts.",
  },
  {
    id: "metabolic",
    label: "Metabolic",
    shortLabel: "Fat Loss",
    description:
      "Exploring peptides discussed alongside adipose, glycemic, and energy-metabolism research endpoints.",
  },
  {
    id: "secretagogue",
    label: "Secretagogue",
    shortLabel: "Muscle & Hormones",
    description:
      "Compounds often grouped in growth-hormone-axis and endocrine-signaling research literature.",
  },
  {
    id: "cellular",
    label: "Cellular",
    shortLabel: "Anti-Aging",
    description:
      "Names that surface in cellular energetics, mitochondrial, and longevity-adjacent research summaries.",
  },
  {
    id: "neuro",
    label: "Neuro",
    shortLabel: "Brain & Focus",
    description:
      "Peptides commonly referenced in neurochemical, attention, and cognitive research discussions.",
  },
  {
    id: "circadian",
    label: "Circadian",
    shortLabel: "Sleep",
    description:
      "Compounds often cited in sleep architecture, stress-response rhythm, and circadian-adjacent preclinical work.",
  },
];

export function optimizationGoalById(id) {
  return OPTIMIZATION_GOALS.find((g) => g.id === id) ?? null;
}
