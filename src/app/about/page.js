import Link from "next/link";
import { HomeHeader } from "@/components/HomeHeader";
import { HomeFooter } from "@/components/HomeFooter";
import { peptideProducts } from "@/data/peptide-taxonomy";

export const metadata = {
  title: "About Us | MyPepFinder",
  description:
    "Learn about MyPepFinder — an educational platform for peptide research, provider comparison, and evidence-based tools.",
};

const VALUES = [
  {
    title: "Research first",
    body: "We prioritize sourced literature, trial data, and clear uncertainty over hype. When evidence is limited, we say so.",
  },
  {
    title: "Compare with context",
    body: "Provider listings and peptide profiles are built to help you evaluate options — not to endorse any single vendor or protocol.",
  },
  {
    title: "Tools that clarify",
    body: "Calculators and dosage guides translate complex inputs into understandable outputs so you can review the math yourself.",
  },
];

const OFFERINGS = [
  {
    title: "Peptide profiles",
    body: "In-depth pages covering mechanisms, research summaries, dosage context, and linked studies for dozens of compounds.",
    href: "/research-library",
    cta: "Browse peptides",
  },
  {
    title: "Goal-based guides",
    body: "Explore peptides organized by what you want to improve — weight, recovery, cognition, sleep, and more.",
    href: "/goals/lose-weight",
    cta: "Browse goals",
  },
  {
    title: "Dosage calculators",
    body: "Reconstitution and calorie-deficit tools designed to support informed planning with transparent calculations.",
    href: "/calculator",
    cta: "Open calculators",
  },
  {
    title: "Provider comparisons",
    body: "Side-by-side provider reference pages to help you evaluate transparency, offerings, and fit before you decide.",
    href: "/recommendations",
    cta: "Compare providers",
  },
];

export default function AboutPage() {
  const peptideCount = peptideProducts.length;

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
      <HomeHeader />

      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-slate-100">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 55% 50% at 12% 30%, rgba(99,102,241,0.10), transparent), radial-gradient(ellipse 45% 40% at 88% 20%, rgba(139,92,246,0.08), transparent)",
            }}
            aria-hidden
          />
          <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
            <nav className="text-xs text-slate-400" aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-1.5">
                <li>
                  <Link href="/" className="hover:text-indigo-600">
                    Home
                  </Link>
                </li>
                <li aria-hidden>›</li>
                <li className="font-medium text-slate-600">About Us</li>
              </ol>
            </nav>

            <div className="mt-6 max-w-3xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                About MyPepFinder
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Find. Compare.{" "}
                <span className="text-indigo-600">Optimize.</span>
              </h1>
              <p className="mt-4 text-base leading-relaxed text-slate-500 sm:text-lg">
                MyPepFinder is an educational platform for people exploring
                peptide research. We organize evidence, compare providers, and
                build practical tools so you can make informed decisions with
                clearer context.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-100 bg-slate-50/60 py-12 sm:py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div>
                <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
                  Our mission
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                  <p>
                    Peptide research moves quickly, but reliable information is
                    often scattered across papers, forums, and vendor pages.
                    MyPepFinder exists to bring structure to that landscape —
                    linking compounds to literature, summarizing what is known
                    and what is not, and giving you tools to compare options
                    without overselling certainty.
                  </p>
                  <p>
                    We are not a clinic, pharmacy, or prescriber. We do not sell
                    peptides. Our role is to help you explore research,
                    understand dosing context, and evaluate providers from an
                    educational starting point.
                  </p>
                </div>
              </div>

              <ul className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                <li className="rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm">
                  <p className="text-2xl font-bold text-indigo-600">
                    {peptideCount}
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-900">
                    Peptides in our library
                  </p>
                </li>
                <li className="rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm">
                  <p className="text-2xl font-bold text-indigo-600">9</p>
                  <p className="mt-1 text-sm font-medium text-slate-900">
                    Research categories
                  </p>
                </li>
                <li className="rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm">
                  <p className="text-2xl font-bold text-indigo-600">2</p>
                  <p className="mt-1 text-sm font-medium text-slate-900">
                    Free calculator tools
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-100 py-12 sm:py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
              What we believe
            </h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-3">
              {VALUES.map((value) => (
                <li
                  key={value.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <h3 className="text-base font-semibold text-slate-900">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {value.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-b border-slate-100 py-12 sm:py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
              What you will find here
            </h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {OFFERINGS.map((item) => (
                <li
                  key={item.title}
                  className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <h3 className="text-base font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
                    {item.body}
                  </p>
                  <Link
                    href={item.href}
                    className="mt-4 inline-flex text-sm font-semibold text-indigo-600 hover:text-indigo-700"
                  >
                    {item.cta} →
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-12 sm:py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="rounded-2xl border border-amber-100 bg-amber-50 px-5 py-5 sm:px-6">
              <h2 className="text-base font-bold text-slate-900">
                Important disclaimer
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                MyPepFinder provides educational content and research tools
                only. Nothing on this site is medical advice, a recommendation
                to use any peptide, or an endorsement of any provider. Many
                compounds discussed here are investigational or subject to
                regulatory restrictions. Always consult a qualified healthcare
                professional before making health-related decisions.
              </p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm font-semibold">
                <Link
                  href="/terms"
                  className="text-indigo-700 hover:text-indigo-800"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/privacy"
                  className="text-indigo-700 hover:text-indigo-800"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/research-library"
                className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-indigo-600 px-5 text-sm font-semibold text-white shadow-sm shadow-indigo-600/25 transition hover:bg-indigo-700"
              >
                Explore Peptides
              </Link>
              <Link
                href="/calculator"
                className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-indigo-300 bg-white px-5 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50"
              >
                Try Calculators
              </Link>
            </div>
          </div>
        </section>
      </main>

      <HomeFooter />
    </div>
  );
}
