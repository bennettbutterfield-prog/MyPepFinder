"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const NAV = [
  { label: "Peptides", href: "/research-library" },
  { label: "Goals", href: "/goals/lose-weight" },
  { label: "Providers", href: "/recommendations" },
  { label: "Research", href: "/research-library" },
  { label: "Dosage Calculator", href: "/calculator" },
];

/**
 * Homepage header — matches Optimize You mockup chrome.
 */
export function HomeHeader() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();

    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    function onPointer(e) {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointer);
    };
  }, [open]);

  function submitSearch(e) {
    e.preventDefault();
    const q = query.trim();
    const href = q
      ? `/research-library?q=${encodeURIComponent(q)}`
      : "/research-library";
    setOpen(false);
    router.push(href);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-3 px-4 sm:px-6">
        <Link href="/" className="shrink-0 leading-tight">
          <span className="flex items-center gap-2 text-[15px] font-semibold tracking-tight text-slate-900">
            <LogoMark />
            <span>
              My<span className="text-indigo-600">Pep</span>Finder
            </span>
          </span>
          <span className="mt-0.5 hidden pl-9 text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-400 sm:block">
            Find. Compare. Optimize.
          </span>
        </Link>

        <nav className="ml-2 hidden flex-1 items-center justify-center gap-4 lg:flex xl:gap-5">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[13px] font-medium text-slate-600 transition hover:text-indigo-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="relative ml-auto flex items-center gap-1 sm:gap-1.5" ref={panelRef}>
          {open ? (
            <form
              onSubmit={submitSearch}
              className="flex w-[min(calc(100vw-5rem),18rem)] items-center sm:w-72"
            >
              <label className="sr-only" htmlFor="home-header-search">
                Search peptides
              </label>
              <div className="relative w-full">
                <input
                  ref={inputRef}
                  id="home-header-search"
                  type="search"
                  name="q"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search peptides…"
                  autoComplete="off"
                  className="w-full rounded-full border border-indigo-200 bg-white py-2 pl-4 pr-20 text-sm text-slate-900 shadow-sm outline-none placeholder:text-slate-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20"
                />
                <div className="absolute right-1 top-1/2 flex -translate-y-1/2 items-center gap-0.5">
                  <button
                    type="submit"
                    aria-label="Submit search"
                    className="flex h-7 w-7 items-center justify-center rounded-full text-indigo-600 transition hover:bg-indigo-50"
                  >
                    <SearchIcon />
                  </button>
                  <button
                    type="button"
                    aria-label="Close search"
                    onClick={() => setOpen(false)}
                    className="flex h-7 w-7 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                  >
                    <CloseIcon />
                  </button>
                </div>
              </div>
            </form>
          ) : (
            <button
              type="button"
              aria-label="Search"
              aria-expanded={false}
              onClick={() => setOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition hover:bg-indigo-50 hover:text-indigo-700"
            >
              <SearchIcon />
            </button>
          )}

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition hover:bg-indigo-50 hover:text-indigo-700 lg:hidden"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav
          className="border-t border-slate-100 bg-white px-4 py-3 lg:hidden"
          aria-label="Mobile"
        >
          <ul className="space-y-1">
            {NAV.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-indigo-50 hover:text-indigo-700"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

function LogoMark() {
  return (
    <svg
      className="h-7 w-7 text-indigo-600"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden
    >
      <rect width="32" height="32" rx="8" fill="currentColor" fillOpacity="0.12" />
      <path
        d="M11 8c2.5 3 2.5 13 0 16M21 8c-2.5 3-2.5 13 0 16"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M13.5 12.5h5M13.5 19.5h5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <circle cx="13.5" cy="12.5" r="1.4" fill="currentColor" />
      <circle cx="18.5" cy="12.5" r="1.4" fill="currentColor" />
      <circle cx="13.5" cy="19.5" r="1.4" fill="currentColor" />
      <circle cx="18.5" cy="19.5" r="1.4" fill="currentColor" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      className="h-[18px] w-[18px]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  );
}
