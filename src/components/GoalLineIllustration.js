/**
 * Human silhouettes per optimisation goal (filled, neutral poses).
 */
export function GoalLineIllustration({ goalId, className = "h-24 w-24" }) {
  const f = "currentColor";

  switch (goalId) {
    case "weight-loss":
      return (
        <svg viewBox="0 0 56 100" className={className} aria-hidden>
          <circle cx="28" cy="11" r="8.5" fill={f} />
          <ellipse cx="28" cy="35" rx="9.5" ry="18" fill={f} />
          <rect x="18" y="51" width="9" height="44" rx="3" fill={f} />
          <rect x="29" y="51" width="9" height="44" rx="3" fill={f} />
        </svg>
      );

    case "muscle-gain":
      return (
        <svg viewBox="0 0 72 100" className={className} aria-hidden>
          <circle cx="36" cy="11" r="8.5" fill={f} />
          <ellipse cx="36" cy="35" rx="14" ry="17.5" fill={f} />
          <ellipse
            cx="11"
            cy="33"
            rx="6.5"
            ry="15"
            fill={f}
            transform="rotate(-38 11 33)"
          />
          <ellipse
            cx="61"
            cy="33"
            rx="6.5"
            ry="15"
            fill={f}
            transform="rotate(38 61 33)"
          />
          <rect x="23" y="50" width="10" height="45" rx="3" fill={f} />
          <rect x="39" y="50" width="10" height="45" rx="3" fill={f} />
        </svg>
      );

    case "sleep":
      return (
        <svg viewBox="0 0 100 56" className={className} aria-hidden>
          <rect x="4" y="44" width="92" height="5" rx="1" fill={f} opacity="0.22" />
          <ellipse cx="76" cy="20" rx="8.5" ry="8.5" fill={f} />
          <ellipse cx="52" cy="28" rx="28" ry="12" fill={f} />
          <ellipse cx="28" cy="32" rx="10" ry="9" fill={f} />
          <path
            fill={f}
            d="M36 38h48c4 0 8 3 8 8H32c0-5 2-8 4-8z"
          />
        </svg>
      );

    case "beauty":
      return (
        <svg viewBox="0 0 64 108" className={className} aria-hidden>
          <path
            fill={f}
            d="M12 26 C12 10 22 4 32 4 C42 4 52 10 52 26 C46 16 38 10 32 10 C26 10 18 16 12 26 Z"
          />
          <circle cx="32" cy="22" r="9" fill={f} />
          <ellipse cx="32" cy="40" rx="11" ry="17" fill={f} />
          <path
            fill={f}
            d="M22 54l-4 1-6 46h9l3-36 3 36h10l3-36 3 36h9l-6-46-4-1c-4 4-9 6-14 6s-10-2-14-6z"
          />
        </svg>
      );

    case "neural":
      return (
        <svg viewBox="0 0 56 100" className={className} aria-hidden>
          <circle cx="26" cy="11" r="8.5" fill={f} />
          <ellipse cx="28" cy="35" rx="10" ry="18" fill={f} />
          <path
            fill={f}
            d="M32 24 Q44 26 40 38 Q38 44 32 40 Q26 34 30 26 Q31 24 32 24 Z"
          />
          <rect x="18" y="51" width="9" height="44" rx="3" fill={f} />
          <rect x="29" y="51" width="9" height="44" rx="3" fill={f} />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 56 100" className={className} aria-hidden>
          <circle cx="28" cy="11" r="8.5" fill={f} />
          <ellipse cx="28" cy="35" rx="10" ry="18" fill={f} />
          <rect x="18" y="51" width="9" height="44" rx="3" fill={f} />
          <rect x="29" y="51" width="9" height="44" rx="3" fill={f} />
        </svg>
      );
  }
}
