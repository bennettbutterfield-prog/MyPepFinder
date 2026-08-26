import Link from "next/link";

export function SiteHeader({ variant = "dark" }) {
  const isDark = variant === "dark";
  const isWash = variant === "wash";

  let headerClass =
    "border-b border-sky-100 bg-white/85 backdrop-blur-md";
  if (isDark) {
    headerClass = "border-b border-white/10 bg-slate-950/80 backdrop-blur-md";
  } else if (isWash) {
    headerClass = "border-b border-transparent bg-transparent";
  }

  const brandClass = isDark
    ? "text-base font-semibold tracking-tight text-white"
    : "text-base font-semibold tracking-tight text-slate-900";

  const linkClass = isDark
    ? "text-slate-400 hover:text-white"
    : isWash
      ? "text-slate-600 hover:text-indigo-700"
      : "text-slate-600 hover:text-slate-900";

  return (
    <header className={headerClass}>
      <div
        className={
          isWash
            ? "mx-auto flex h-11 max-w-6xl items-center justify-between px-4 sm:px-6"
            : "mx-auto flex h-12 max-w-7xl items-center justify-between px-4 sm:px-6"
        }
      >
        <Link href="/" className={brandClass}>
          MyPep
          <span className={isWash ? "text-indigo-600" : "text-teal-400"}>
            Finder
          </span>
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-x-4 gap-y-1 text-xs sm:gap-x-5 sm:text-sm">
          <Link href="/research-library" className={linkClass}>
            Research library
          </Link>
          <Link href="/calculator" className={linkClass}>
            Dosage calculator
          </Link>
        </nav>
      </div>
    </header>
  );
}
