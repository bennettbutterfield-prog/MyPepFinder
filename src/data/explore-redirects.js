/**
 * Permanent destinations for retired /explore/[slug] demo pages.
 * Keep this list complete so Google and old links land on the real profile.
 */
export const EXPLORE_REDIRECTS = [
  { source: "/explore/5-amino-1mq", destination: "/peptides/5-amino-1mq" },
  { source: "/explore/aod-9604", destination: "/peptides/aod-9604" },
  { source: "/explore/amino-h2o", destination: "/research-library" },
  { source: "/explore/bpc-157", destination: "/peptides/bpc-157" },
  { source: "/explore/cagrilintide", destination: "/peptides/cagrilintide" },
  { source: "/explore/cjc-ipa-no-dac", destination: "/peptides/cjc-1295-no-dac-ipamorelin" },
  { source: "/explore/dsip", destination: "/peptides/dsip" },
  { source: "/explore/epithalon", destination: "/peptides/epithalon" },
  { source: "/explore/ghk-cu", destination: "/peptides/ghk-cu" },
  { source: "/explore/glow", destination: "/peptides/glow" },
  { source: "/explore/glp-1-class-research", destination: "/peptides/cagrilintide" },
  { source: "/explore/glp-3", destination: "/peptides/retatrutide" },
  { source: "/explore/glutathione", destination: "/research-library" },
  { source: "/explore/igf-1-lr3", destination: "/peptides/igf-1-lr3" },
  { source: "/explore/ipamorelin", destination: "/peptides/ipamorelin" },
  { source: "/explore/ipamorelin-cjc-1295", destination: "/peptides/cjc-1295-no-dac-ipamorelin" },
  { source: "/explore/klow", destination: "/peptides/klow" },
  { source: "/explore/kpv", destination: "/peptides/kpv" },
  { source: "/explore/melanotan-i", destination: "/peptides/melanotan-1" },
  { source: "/explore/melanotan-ii", destination: "/peptides/melanotan-2" },
  { source: "/explore/mots-c", destination: "/peptides/mots-c" },
  { source: "/explore/nad-plus", destination: "/peptides/nad-plus" },
  { source: "/explore/pt-141", destination: "/peptides/pt-141" },
  { source: "/explore/selank", destination: "/peptides/selank" },
  { source: "/explore/semax", destination: "/peptides/semax" },
  { source: "/explore/snap-8", destination: "/peptides/snap-8" },
  { source: "/explore/tb-500", destination: "/peptides/tb-500" },
  { source: "/explore/tesamorelin", destination: "/peptides/tesamorelin" },
  { source: "/explore/tesamorlin", destination: "/peptides/tesamorelin" },
  { source: "/explore/thymosin-alpha-1", destination: "/peptides/thymosin-alpha-1" },
  { source: "/explore/wolverine-stack", destination: "/peptides/bpc-157-tb-500" },
];

/** Explore catalog slugs that also appeared as /peptides/... URLs. */
export const LEGACY_PEPTIDE_SLUG_REDIRECTS = [
  { source: "/peptides/amino-h2o", destination: "/research-library" },
  { source: "/peptides/glp-1-class-research", destination: "/peptides/cagrilintide" },
  { source: "/peptides/glp-3", destination: "/peptides/retatrutide" },
  { source: "/peptides/glutathione", destination: "/research-library" },
  { source: "/peptides/tesamorlin", destination: "/peptides/tesamorelin" },
];
