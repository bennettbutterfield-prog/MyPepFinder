/**
 * Visual insulin-style syringe (100 units = 1 mL).
 * @param {{ units: number | null, maxUnits?: number }} props
 */
export function SyringeMeter({ units, maxUnits = 100 }) {
  const hasValue = units != null && Number.isFinite(units) && units > 0;
  const capped = hasValue ? Math.min(units, maxUnits) : 0;
  const fillPct = hasValue ? (capped / maxUnits) * 100 : 0;

  const ticks = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  return (
    <div className="mt-6 w-full">
      <div className="relative mx-auto max-w-md">
        <div className="flex items-center gap-0">
          <div className="h-3 w-3 shrink-0 rounded-full bg-slate-900" aria-hidden />
          <div className="relative h-12 min-w-0 flex-1 overflow-hidden rounded-r-md border-2 border-slate-900 bg-white">
            <div
              className="absolute inset-y-0 left-0 bg-teal-500/85 transition-[width] duration-300 ease-out"
              style={{ width: `${fillPct}%` }}
              aria-hidden
            />
            <div className="relative flex h-full items-center justify-between px-1">
              {ticks.map((t) => (
                <span
                  key={t}
                  className="text-[9px] font-semibold leading-none text-slate-700 sm:text-[10px]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div
            className="h-1 w-6 shrink-0 bg-slate-900"
            style={{ clipPath: "polygon(0 50%, 100% 0, 100% 100%)" }}
            aria-hidden
          />
        </div>
        <p className="mt-2 text-center text-xs text-slate-500">
          {hasValue ? (
            <>
              Fill to{" "}
              <span className="font-semibold text-teal-700">
                {units.toFixed(2)} units
              </span>
              {units > maxUnits ? (
                <span className="text-amber-700">
                  {" "}
                  (exceeds {maxUnits}-unit scale shown)
                </span>
              ) : null}
            </>
          ) : (
            "Select dose, vial strength, and water volume to see draw level"
          )}
        </p>
      </div>
    </div>
  );
}
