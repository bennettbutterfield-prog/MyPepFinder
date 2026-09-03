import {
  buildFallbackPeptidePage,
  getPeptidePage,
} from "@/data/peptide-pages";
import { getPopularPeptideBySlug } from "@/data/popular-peptides";
import { getExplorePageData } from "@/data/explore-sellers";
import {
  getProductBySlug,
  resolveProductByAliasOrSlug,
} from "@/data/peptide-taxonomy";

export function resolvePeptideForOg(slug) {
  const rich = getPeptidePage(slug);
  if (rich) return rich;

  const taxonomy =
    getProductBySlug(slug) || resolveProductByAliasOrSlug(slug);
  if (taxonomy) {
    return buildFallbackPeptidePage(taxonomy.slug, taxonomy.name);
  }

  const popular = getPopularPeptideBySlug(slug);
  if (popular) {
    return buildFallbackPeptidePage(slug, popular.name);
  }

  const explore = getExplorePageData(slug);
  if (explore) {
    return buildFallbackPeptidePage(slug, explore.peptideName);
  }

  return null;
}

export function getPeptideOgVisual(peptide) {
  return peptide.heroImage || peptide.moleculeCardImage || null;
}
