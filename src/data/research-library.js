import { getExplorePageData, getKnownExploreSlugs } from "@/data/explore-sellers";

export function getResearchLibraryIndexEntries() {
  const seenTitles = new Set();
  return getKnownExploreSlugs()
    .map((slug) => {
      const d = getExplorePageData(slug);
      return { slug, title: d.peptideName };
    })
    .filter((entry) => {
      if (seenTitles.has(entry.title)) return false;
      seenTitles.add(entry.title);
      return true;
    })
    .sort((a, b) => a.title.localeCompare(b.title));
}
