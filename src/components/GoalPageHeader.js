import Link from "next/link";

const NAV = [
  { label: "Peptides", href: "/research-library" },
  { label: "Goals", href: "/goals/lose-weight" },
  { label: "Providers", href: "/recommendations" },
  { label: "Research", href: "/research-library" },
  { label: "Dosage Calculator", href: "/calculator" },
];

/**
 * Goal-page header: logo, centered search, nav.
 */
export function GoalPageHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-14 max-w-[1400px] items-center gap-3 px-4 sm:px-6">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 text-[15px] font-semibold tracking-tight text-slate-900"
        >
          <LogoMark />
          <span>
            MyPep<span className="text-blue-600">Finder</span>
          </span>
        </Link>

        <form
          action="/research-library"
          className="relative mx-auto hidden min-w-0 max-w-md flex-1 md:block lg:max-w-lg"
        >
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
            <SearchIcon />
          </span>
          <input
            name="q"
            type="search"
            placeholder="What are you trying to optimize?"
            className="w-full rounded-full border border-slate-200 bg-slate-50 py-2 pl-9 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
          />
        </form>

        <nav className="ml-auto hidden items-center gap-4 lg:flex xl:gap-5">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[13px] font-medium text-slate-600 transition hover:text-blue-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

function LogoMark() {
  return (
    <svg className="h-7 w-7 text-blue-600" viewBox="0 0 32 32" fill="none" aria-hidden>
      <rect width="32" height="32" rx="8" fill="currentColor" fillOpacity="0.12" />
      <path
        d="M11 8c2.5 3 2.5 13 0 16M21 8c-2.5 3-2.5 13 0 16"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path d="M13.5 12.5h5M13.5 19.5h5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <circle cx="13.5" cy="12.5" r="1.4" fill="currentColor" />
      <circle cx="18.5" cy="12.5" r="1.4" fill="currentColor" />
      <circle cx="13.5" cy="19.5" r="1.4" fill="currentColor" />
      <circle cx="18.5" cy="19.5" r="1.4" fill="currentColor" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" strokeLinecap="round" />
    </svg>
  );
}
