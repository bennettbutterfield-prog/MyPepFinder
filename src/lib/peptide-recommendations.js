/**
 * Educational peptide shortlists by optimization focus.
 * Ordering is informational only—not medical guidance or dosing advice.
 */

/** @param {{ age?: number; weightKg?: number; heightCm?: number }} profile */
export function getPeptideRecommendations(goalId, profile = {}) {
  const age = typeof profile.age === "number" && !Number.isNaN(profile.age) ? profile.age : null;
  const weightKg =
    typeof profile.weightKg === "number" && !Number.isNaN(profile.weightKg)
      ? profile.weightKg
      : null;

  const base = BASE_BY_GOAL[goalId] ?? BASE_BY_GOAL.metabolic;

  const footnotes = [];
  if (age != null && age >= 45) {
    footnotes.push(
      "Older cohorts sometimes appear in longevity-related peptide publications; treat any demographic note as background reading, not a personal recommendation.",
    );
  }
  if (weightKg != null && weightKg >= 100) {
    footnotes.push(
      "Higher body-mass cohorts are often stratified separately in metabolic research papers; the peptide list below remains a general literature map.",
    );
  }
  if (footnotes.length === 0) {
    footnotes.push(
      "Lists reflect how compounds are commonly clustered in public research summaries—not what any individual should use.",
    );
  }

  return {
    peptides: base.map((p, i) => ({ ...p, rank: i + 1 })),
    footnotes,
  };
}

const BASE_BY_GOAL = {
  metabolic: [
    {
      exploreSlug: "aod-9604",
      name: "AOD-9604",
      tagline: "hGH fragment class",
      context:
        "Commonly associated with lipolysis-focused animal studies and metabolic research supply listings.",
    },
    {
      exploreSlug: "mots-c",
      name: "MOTS-C",
      tagline: "Mitochondrial-derived peptide",
      context:
        "Often referenced alongside exercise-metabolism rodent work and mitochondrial stress pathways.",
    },
    {
      exploreSlug: "tesamorelin",
      name: "Tesamorelin",
      tagline: "GHRH analog",
      context:
        "Appears in clinical literature exploring visceral adipose changes; research-grade sourcing varies by region.",
    },
    {
      exploreSlug: "5-amino-1mq",
      name: "5-Amino-1MQ",
      tagline: "NNMT pathway exploration",
      context:
        "Discussed in small-molecule and peptide crossover conversations about adipocyte energetics in preclinical models.",
    },
    {
      exploreSlug: "glp-1-class-research",
      name: "Cagrilintide / GLP-1 class analogs",
      tagline: "Incretin-axis research",
      context:
        "Frequently grouped in publications that compare multi-receptor agonists for glycemic and weight-related endpoints.",
    },
    {
      exploreSlug: "ipamorelin",
      name: "Ipamorelin",
      tagline: "Ghrelin receptor selective secretagogue",
      context:
        "Commonly cited in GH-axis exploration without large oral bioavailability claims in peptide form.",
    },
  ],
  "injury-recovery": [
    {
      exploreSlug: "bpc-157",
      name: "BPC-157",
      tagline: "Tissue-repair literature",
      context:
        "Often paired with angiogenesis and gut-barrier animal models; widely stocked for comparative COA review.",
    },
    {
      exploreSlug: "tb-500",
      name: "TB-500 (Thymosin β4 fragment)",
      tagline: "Actin / migration research",
      context:
        "Commonly associated with cell-motility studies adjacent to muscle recovery narratives in supply catalogs.",
    },
    {
      exploreSlug: "igf-1-lr3",
      name: "IGF-1 LR3",
      tagline: "IGF-axis extension analog",
      context:
        "Referenced where skeletal muscle hypertrophy signaling is modeled in vitro or in animal systems.",
    },
    {
      exploreSlug: "ipamorelin-cjc-1295",
      name: "Ipamorelin / CJC-1295 (no DAC)",
      tagline: "Pulsatile GH secretagogue pairing",
      context:
        "A frequent comparison pair in research peptide forums discussing pituitary stimulation patterns.",
    },
    {
      exploreSlug: "ghk-cu",
      name: "GHK-Cu",
      tagline: "Copper tripeptide",
      context:
        "Also appears in recovery-adjacent stacks where extracellular matrix remodeling is the stated research angle.",
    },
  ],
  circadian: [
    {
      exploreSlug: "dsip",
      name: "DSIP",
      tagline: "Delta-sleep peptide",
      context:
        "Named for sleep-related endpoints in older peptide literature; modern replication quality varies.",
    },
    {
      exploreSlug: "epithalon",
      name: "Epithalon",
      tagline: "Telomerase-adjacent animal work",
      context:
        "Sometimes grouped with circadian and aging-focused exploratory peptide reading lists.",
    },
    {
      exploreSlug: "selank",
      name: "Selank",
      tagline: "Anxiolytic peptide analog",
      context:
        "Commonly associated with GABAergic modulation research in rodent behavioral assays.",
    },
  ],
  dermal: [
    {
      exploreSlug: "ghk-cu",
      name: "GHK-Cu",
      tagline: "Matrix remodeling",
      context:
        "A staple in cosmetic peptide science for collagen and elastin conversation in vitro.",
    },
    {
      exploreSlug: "snap-8",
      name: "SNAP-8",
      tagline: "Argireline-class octapeptide",
      context:
        "Often marketed alongside expression-line research in topical and injectable supply education.",
    },
    {
      exploreSlug: "bpc-157",
      name: "BPC-157",
      tagline: "Barrier / repair narratives",
      context:
        "Appears in dermal recovery discussions even when primary citations remain non-dermal animal models.",
    },
    {
      exploreSlug: "tb-500",
      name: "TB-500",
      tagline: "Mobility of dermal fibroblasts",
      context:
        "Grouped with GHK-Cu in “matrix support” comparison stacks in supplier education pages.",
    },
  ],
  neuro: [
    {
      exploreSlug: "semax",
      name: "Semax",
      tagline: "ACTH-derived heptapeptide",
      context:
        "Commonly associated with BDNF and attention-related Russian-origin research literature.",
    },
    {
      exploreSlug: "selank",
      name: "Selank",
      tagline: "Tuftsin derivative",
      context:
        "Often compared with Semax in anxiolytic versus stimulatory framing in educational summaries.",
    },
    {
      exploreSlug: "nad-plus",
      name: "NAD+",
      tagline: "Redox cofactor",
      context:
        "Surfaces in mitochondrial energetics discussions adjacent to neuropeptide nootropic stacks.",
    },
    {
      exploreSlug: "dsip",
      name: "DSIP",
      tagline: "Sleep–stress crossover",
      context:
        "Sometimes referenced where stress-mediated sleep disruption is modeled in animals.",
    },
  ],
  secretagogue: [
    {
      exploreSlug: "tesamorelin",
      name: "Tesamorelin",
      tagline: "GHRH analog",
      context:
        "Commonly listed in research discussions around pituitary signaling and GH-axis modulation.",
    },
    {
      exploreSlug: "ipamorelin",
      name: "Ipamorelin",
      tagline: "Ghrelin receptor selective secretagogue",
      context:
        "Frequently used as a comparator peptide in secretagogue-focused protocol writeups.",
    },
    {
      exploreSlug: "ipamorelin-cjc-1295",
      name: "Ipamorelin / CJC-1295 (no DAC)",
      tagline: "Pulsatile GH secretagogue pairing",
      context:
        "A common two-peptide reference in educational summaries discussing pituitary pulse patterns.",
    },
    {
      exploreSlug: "igf-1-lr3",
      name: "IGF-1 LR3",
      tagline: "IGF-axis extension analog",
      context:
        "Often discussed downstream of GH-axis studies where anabolic signaling pathways are analyzed.",
    },
  ],
  cellular: [
    {
      exploreSlug: "nad-plus",
      name: "NAD+",
      tagline: "Redox cofactor",
      context:
        "Appears in mitochondrial and cellular-energy research summaries linked to longevity-adjacent topics.",
    },
    {
      exploreSlug: "mots-c",
      name: "MOTS-C",
      tagline: "Mitochondrial-derived peptide",
      context:
        "Commonly grouped with metabolic-stress and mitochondrial signaling research discussions.",
    },
    {
      exploreSlug: "epithalon",
      name: "Epithalon",
      tagline: "Telomerase-adjacent animal work",
      context:
        "Frequently listed in aging and cell-health reading lists across preclinical supplier education.",
    },
    {
      exploreSlug: "ghk-cu",
      name: "GHK-Cu",
      tagline: "Copper tripeptide",
      context:
        "Appears in extracellular matrix and cellular-repair narratives across multiple research categories.",
    },
  ],
};

// Backward-compatible aliases for previously-used goal IDs in old links.
BASE_BY_GOAL["weight-loss"] = BASE_BY_GOAL.metabolic;
BASE_BY_GOAL["muscle-gain"] = BASE_BY_GOAL["injury-recovery"];
BASE_BY_GOAL.sleep = BASE_BY_GOAL.circadian;
BASE_BY_GOAL.beauty = BASE_BY_GOAL.dermal;
BASE_BY_GOAL.neural = BASE_BY_GOAL.neuro;
