"use client";

import Link from "next/link";
import { useState } from "react";

const NAV = [
  { label: "Peptides", href: "/research-library" },
  { label: "Goals", href: "/#peptide-finder" },
  { label: "Providers", href: "/recommendations" },
  { label: "Research", href: "/research-library" },
  { label: "Dosage Calculator", href: "/calculator" },
];

/**
 * Mockup-style top nav used on calculator pages.
 */
export function CalculatorHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-20 border-b border-indigo-100/40 bg-white/70 backdrop-blur-sm">
      <div className="mx-auto flex h-[3.25rem] max-w-6xl items-center gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 text-[15px] font-semibold tracking-tight text-slate-900"
        >
          <LogoMark />
          <span>
            MyPep<span className="text-indigo-600">Finder</span>
          </span>
        </Link>

        <nav className="ml-2 hidden flex-1 items-center justify-center gap-4 lg:flex xl:gap-7">
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

        <div className="ml-auto flex items-center gap-1 sm:gap-2">
          <Link
            href="/research-library"
            aria-label="Search"
            className="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition hover:bg-indigo-50 hover:text-indigo-700"
          >
            <SearchIcon />
          </Link>

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
          className="border-t border-indigo-100/60 bg-white px-4 py-3 lg:hidden"
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
