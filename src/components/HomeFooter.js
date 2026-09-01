import Link from "next/link";
import { FooterStayConnected } from "@/components/FooterStayConnected";

const COLUMNS = [
  {
    title: "Explore",
    links: [
      { label: "Peptides", href: "/research-library" },
      { label: "Goals", href: "/goals/lose-weight" },
      { label: "Providers", href: "/recommendations" },
      { label: "Research", href: "/research-library" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Articles", href: "/research-library" },
      { label: "Guides", href: "/calculator" },
      { label: "FAQ", href: "/faq" },
      { label: "Glossary", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export function HomeFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-600">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_2fr_1fr]">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-base font-semibold tracking-tight text-slate-900"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
              <svg className="h-5 w-5" viewBox="0 0 32 32" fill="none" aria-hidden>
                <path
                  d="M11 8c2.5 3 2.5 13 0 16M21 8c-2.5 3-2.5 13 0 16"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            MyPep<span className="text-indigo-600">Finder</span>
          </Link>
          <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
            Find. Compare. Optimize.
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-500">
            Discover peptides by your goals, compare trusted providers, and make
            informed choices with research-backed insights.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-900">
                {col.title}
              </p>
              <ul className="mt-3 space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-500 transition hover:text-indigo-700"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <FooterStayConnected />
      </div>

      <div className="border-t border-slate-100">
        <p className="mx-auto max-w-6xl px-4 py-4 text-center text-xs text-slate-400 sm:px-6 sm:text-left">
          © 2026 MyPepFinder
        </p>
      </div>
    </footer>
  );
}
