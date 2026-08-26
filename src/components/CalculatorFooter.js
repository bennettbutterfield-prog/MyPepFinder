import Link from "next/link";

const COLUMNS = [
  {
    title: "Explore",
    links: [
      { label: "Peptide Finder", href: "/#peptide-finder" },
      { label: "Dosage Calculator", href: "/calculator" },
      { label: "Research Library", href: "/research-library" },
      { label: "Recommendations", href: "/recommendations" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "How Peptides Work", href: "#" },
      { label: "Reconstitution Guide", href: "/calculator" },
      { label: "Unit Converter", href: "/calculator" },
      { label: "FAQ", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Providers", href: "/recommendations" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Use", href: "#" },
      { label: "Disclaimer", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  },
];

/**
 * Light mockup footer for the dosage calculator page.
 */
export function CalculatorFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-600">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.15fr_2fr_1.1fr]">
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
                <path
                  d="M13.5 12.5h5M13.5 19.5h5"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            MyPep<span className="text-indigo-600">Finder</span>
          </Link>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-500">
            Evidence-based peptide research tools and education for informed
            protocol planning.
          </p>
          <div className="mt-5 flex items-center gap-2.5 text-slate-400">
            <SocialIcon label="Instagram" />
            <SocialIcon label="YouTube" />
            <SocialIcon label="X" />
            <SocialIcon label="Facebook" />
            <SocialIcon label="Email" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold text-slate-900">{col.title}</p>
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

        <div>
          <p className="text-sm font-semibold text-slate-900">Stay Updated</p>
          <p className="mt-2 text-sm leading-relaxed text-slate-500">
            Get research highlights and new calculator tools in your inbox.
          </p>
          <form className="mt-4 flex flex-col gap-2 sm:flex-row" action="#">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="min-w-0 flex-1 rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
            />
            <button
              type="submit"
              className="rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-slate-100">
        <p className="mx-auto max-w-6xl px-4 py-4 text-center text-xs text-slate-400 sm:px-6 sm:text-left">
          © 2024 MyPepFinder. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function SocialIcon({ label }) {
  return (
    <span
      className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-400"
      aria-label={label}
      title={label}
    >
      <svg
        className="h-3.5 w-3.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden
      >
        <circle cx="12" cy="12" r="8" />
      </svg>
    </span>
  );
}
