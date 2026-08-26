import {
  peptideCategories,
  peptideProducts,
  getProductCategories,
} from "@/data/peptide-taxonomy";

/** Category filters shown in the research library (excludes empty catalogs). */
export const RESEARCH_LIBRARY_FILTERS = [
  { id: "all", label: "All" },
  ...peptideCategories
    .filter((category) => category.slug !== "immune-inflammation")
    .map((category) => ({
      id: category.slug,
      label: category.name,
    })),
];

/**
 * Brief one-sentence research focus from taxonomy uses (max 3).
 * @param {{ researchUses?: string[]; notes?: string }} product
 */
export function formatResearchFocusSentence(product) {
  const uses = (product.researchUses || []).slice(0, 3);
  if (!uses.length) {
    return product.notes
      ? String(product.notes).replace(/\.$/, "") + "."
      : "Investigational research compound.";
  }
  const list =
    uses.length === 1
      ? uses[0]
      : uses.length === 2
        ? `${uses[0]} and ${uses[1]}`
        : `${uses[0]}, ${uses[1]}, and ${uses[2]}`;
  return `Researched for ${list}.`;
}

/**
 * Index entries for research library search + category chips.
 * Includes uncategorized products so aliases still resolve in search.
 */
export function getResearchLibraryIndexEntries() {
  return peptideProducts
    .map((product) => {
      const categories = getProductCategories(product);
      const blurb = formatResearchFocusSentence(product);
      return {
        slug: product.slug,
        title: product.name,
        aliases: product.aliases || [],
        categories,
        blurb,
        researchComingSoon: Boolean(product.researchComingSoon),
        searchText: [
          product.name,
          product.slug,
          product.slug.replace(/-/g, " "),
          ...(product.aliases || []),
          ...(product.ingredients || []),
          ...product.researchUses,
          blurb,
        ]
          .join(" ")
          .toLowerCase(),
      };
    })
    .sort((a, b) => a.title.localeCompare(b.title));
}
