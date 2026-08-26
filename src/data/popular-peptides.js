export const POPULAR_PEPTIDES = [
  {
    slug: "klow",
    name: '"KLOW"',
    subtitle: "KPV | GHK-Cu | TB-500 | BPC-157",
    categories: ["Tissue Repair Research", "Dermal Research", "Cellular Research"],
    summary:
      "Blend placeholder focused on tissue-repair, dermal, and cellular signaling literature references.",
  },
  {
    slug: "glow",
    name: '"GLOW"',
    subtitle: "GHK-Cu | TB-500 | BPC-157",
    categories: ["Tissue Repair Research", "Dermal Research", "Cellular Research"],
    summary:
      "Blend placeholder often grouped with regenerative and matrix-remodeling research narratives.",
  },
  {
    slug: "bpc-157",
    name: "BPC-157",
    subtitle: "",
    categories: ["Tissue Repair Research", "Cellular Research"],
    summary:
      "Peptide placeholder for mucosal, connective, and recovery-adjacent preclinical research summaries.",
  },
  {
    slug: "tb-500-thymosin-beta-4",
    name: "TB-500 (Thymosin Beta-4) (43 aa)",
    subtitle: "",
    categories: ["Tissue Repair Research", "Cellular Research"],
    summary:
      "Placeholder entry for actin-dynamics and migration-focused research contexts.",
  },
  {
    slug: "nad-buffered",
    name: "NAD+ (buffered)",
    subtitle: "",
    categories: ["Cellular Research", "Neuro Research"],
    summary:
      "Placeholder for energy-metabolism and neuro-support literature mapping.",
  },
  {
    slug: "retatrutide",
    name: "Retatrutide",
    subtitle: "",
    categories: ["Metabolic Research"],
    summary:
      "Placeholder profile associated with metabolic pathway and body-composition research.",
  },
  {
    slug: "2x-tesamorelin-ipamorelin",
    name: '"2X"',
    subtitle: "Tesamorelin | Ipamorelin",
    categories: ["Secretagogue Research"],
    summary:
      "Blend placeholder for secretagogue-oriented protocol discussions and comparative notes.",
  },
  {
    slug: "cjc-1295-no-dac-ipamorelin-5-5",
    name: "CJC-1295 (no DAC) | Ipamorelin 5/5 mg",
    subtitle: "",
    categories: ["Secretagogue Research"],
    summary:
      "Combination placeholder for growth-hormone-axis related research labeling.",
  },
  {
    slug: "glp-1-t",
    name: "GLP-1 T (GLP-1 + GIP 2RA)",
    subtitle: "",
    categories: ["Metabolic Research"],
    summary:
      "Placeholder entry for dual-pathway metabolic research comparisons.",
  },
  {
    slug: "glp-1-s",
    name: "GLP-1 Semaglutide",
    subtitle: "",
    categories: ["Metabolic Research"],
    summary:
      "Placeholder profile for single-pathway metabolic receptor-agonist research context.",
  },
  {
    slug: "aod-9604",
    name: "AOD-9604",
    subtitle: "",
    categories: ["Metabolic Research"],
    summary:
      "Placeholder overview for lipolysis-adjacent and adipose-related literature notes.",
  },
  {
    slug: "tesamorelin",
    name: "Tesamorelin",
    subtitle: "",
    categories: ["Secretagogue Research"],
    summary:
      "Placeholder summary for secretagogue and endocrine-pathway research framing.",
  },
  {
    slug: "pt-141-10-mg",
    name: "PT-141 10 mg",
    subtitle: "",
    categories: ["Neuro Research"],
    summary:
      "Placeholder entry for neurochemical and receptor-signaling literature references.",
  },
  {
    slug: "ghk-cu",
    name: "GHK-Cu",
    subtitle: "",
    secondaryCta: "Select options",
    categories: ["Dermal Research", "Cellular Research", "Tissue Repair Research"],
    summary:
      "Placeholder profile for dermal matrix, copper-peptide, and repair-pathway research notes.",
  },
];

export function getPopularPeptideBySlug(slug) {
  return POPULAR_PEPTIDES.find((p) => p.slug === slug) ?? null;
}
