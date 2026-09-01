/**
 * Large square pill panel containing molecule overview callouts.
 */
export function MoleculeOverviewPanel({
  callouts = [],
  label = "Molecule overview",
  className = "",
}) {
  return (
    <div
      className={`relative flex aspect-square w-full items-stretch overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-br from-violet-100 via-violet-50 to-slate-100 ${className}`}
      role="region"
      aria-label={label}
    >
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/50 blur-2xl" />
        <div className="absolute -bottom-8 -left-4 h-28 w-28 rounded-full bg-white/40 blur-2xl" />
      </div>

      {callouts.length > 0 ? (
        <ul className="relative z-10 flex w-full flex-col justify-center gap-2.5 p-4 sm:p-5">
          {callouts.map((callout) => (
            <li
              key={callout.label}
              className="rounded-xl border border-slate-200/80 bg-white/95 px-3 py-2.5 shadow-sm backdrop-blur-sm"
            >
              <p className="text-xs font-bold text-violet-700">{callout.label}</p>
              <p className="mt-0.5 text-[10px] leading-snug text-slate-500 sm:text-[11px]">
                {callout.body}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="relative z-10 m-auto px-4 text-center text-[10px] font-semibold uppercase tracking-wider text-violet-400">
          {label}
        </p>
      )}
    </div>
  );
}
