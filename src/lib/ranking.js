/**
 * Rank providers by stated transparency criteria only.
 * `sponsored` is never used in ordering.
 * @param {{ transparencyScore: number }[]} providers
 */
export function rankProvidersByTransparency(providers) {
  return [...providers].sort(
    (a, b) => b.transparencyScore - a.transparencyScore,
  );
}
