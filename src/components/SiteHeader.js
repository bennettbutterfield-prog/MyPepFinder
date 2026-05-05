import Link from "next/link";

export function SiteHeader({ variant = "dark" }) {
  const isDark = variant === "dark";
  return (
    <header
      className={
        isDark
          ? "border-b border-white/10 bg-slate-950/80 backdrop-blur-md"
          : "border-b border-slate-200/80 bg-white/90 backdrop-blur-md"
      }
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className={
            isDark
              ? "text-lg font-semibold tracking-tight text-white"
              : "text-lg font-semibold tracking-tight text-slate-900"
          }
        >
          MyPep<span className="text-amber-400">Finder</span>
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 text-sm sm:gap-x-6">
          <Link
            href="/research-library"
            className={
              isDark
                ? "text-slate-400 hover:text-white"
                : "text-slate-600 hover:text-slate-900"
            }
          >
            Research library
          </Link>
          <Link
            href="/calculator"
            className={
              isDark
                ? "text-slate-400 hover:text-white"
                : "text-slate-600 hover:text-slate-900"
            }
          >
            Dosage calculator
          </Link>
        </nav>
      </div>
    </header>
  );
}
