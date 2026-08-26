/**
 * Soft colored placeholder used anywhere the mockup shows photography / 3D art.
 */
export function PlaceholderImage({
  label = "Image",
  tone = "indigo",
  className = "",
  icon = "photo",
}) {
  const tones = {
    indigo: "from-indigo-100 via-indigo-50 to-slate-100 text-indigo-400",
    teal: "from-teal-100 via-teal-50 to-slate-100 text-teal-500",
    green: "from-emerald-100 via-emerald-50 to-slate-100 text-emerald-500",
    orange: "from-orange-100 via-orange-50 to-slate-100 text-orange-500",
    pink: "from-pink-100 via-pink-50 to-slate-100 text-pink-500",
    rose: "from-rose-100 via-rose-50 to-slate-100 text-rose-500",
    amber: "from-amber-100 via-amber-50 to-slate-100 text-amber-500",
    violet: "from-violet-100 via-violet-50 to-slate-100 text-violet-500",
    sky: "from-sky-100 via-sky-50 to-slate-100 text-sky-500",
    slate: "from-slate-200 via-slate-100 to-slate-50 text-slate-400",
  };

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br ${tones[tone] ?? tones.indigo} ${className}`}
      role="img"
      aria-label={label}
    >
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/50 blur-2xl" />
        <div className="absolute -bottom-8 -left-4 h-28 w-28 rounded-full bg-white/40 blur-2xl" />
      </div>
      <div className="relative z-10 flex flex-col items-center gap-1.5 px-3 text-center">
        <PlaceholderIcon name={icon} />
        <span className="text-[10px] font-semibold uppercase tracking-wider opacity-80">
          {label}
        </span>
      </div>
    </div>
  );
}

function PlaceholderIcon({ name }) {
  const c = {
    className: "h-8 w-8 opacity-70",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };
  if (name === "molecule") {
    return (
      <svg {...c}>
        <circle cx="8" cy="16" r="2.5" />
        <circle cx="12" cy="8" r="3" />
        <circle cx="18" cy="15" r="2.5" />
        <path d="m10 14 1.5-4M14 10l2.5 3.5" />
      </svg>
    );
  }
  if (name === "brain") {
    return (
      <svg {...c}>
        <path d="M9 8a3 3 0 0 1 6 0c1.5 0 3 1.2 3 3s-1 3-2.5 3H8.5C7 14 6 12.8 6 11s1.5-3 3-3Z" />
        <path d="M9 14v4M12 14v5M15 14v3" />
      </svg>
    );
  }
  if (name === "body") {
    return (
      <svg {...c}>
        <circle cx="12" cy="5" r="2" />
        <path d="M12 8v5M8 21l4-8 4 8M7 12h10" />
      </svg>
    );
  }
  if (name === "lab") {
    return (
      <svg {...c}>
        <path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3" />
      </svg>
    );
  }
  if (name === "sleep") {
    return (
      <svg {...c}>
        <path d="M12 4a8 8 0 1 0 8 9A6 6 0 0 1 12 4Z" />
      </svg>
    );
  }
  return (
    <svg {...c}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="8.5" cy="10" r="1.5" />
      <path d="m21 16-5.5-5.5L8 18" />
    </svg>
  );
}
