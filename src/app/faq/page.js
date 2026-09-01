import Link from "next/link";
import { HomeHeader } from "@/components/HomeHeader";
import { HomeFooter } from "@/components/HomeFooter";
import { FaqAccordion } from "@/components/FaqAccordion";
import { PEPTIDE_CALCULATOR_FAQ } from "@/data/peptide-calculator-faq";
import { SITE_FAQ_SECTIONS, buildSiteFaqJsonLd } from "@/data/site-faq";

export const metadata = {
  title: "FAQ | MyPepFinder",
  description:
    "Frequently asked questions about MyPepFinder, peptide research, dosage calculators, provider comparisons, and safety.",
};

const faqJsonLd = buildSiteFaqJsonLd(PEPTIDE_CALCULATOR_FAQ);

export default function FaqPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <HomeHeader />

      <main className="flex-1">
        <div className="border-b border-slate-100 bg-white">
          <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
            <nav className="text-xs text-slate-400" aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-1.5">
                <li>
                  <Link href="/" className="hover:text-indigo-600">
                    Home
                  </Link>
                </li>
                <li aria-hidden>›</li>
                <li className="font-medium text-slate-600">FAQ</li>
              </ol>
            </nav>

            <header className="mt-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                Help Center
              </p>
              <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Frequently asked questions
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-slate-500 sm:text-[15px]">
                Answers about MyPepFinder, how to use our research tools, peptide
                basics, calculators, and important safety limits.
              </p>
            </header>

            <nav
              className="mt-8 flex flex-wrap gap-2"
              aria-label="FAQ sections"
            >
              {SITE_FAQ_SECTIONS.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700 ring-1 ring-indigo-100 transition hover:bg-indigo-100"
                >
                  {section.title}
                </a>
              ))}
              <a
                href="#peptide-basics"
                className="rounded-full bg-teal-50 px-3 py-1.5 text-xs font-semibold text-teal-700 ring-1 ring-teal-100 transition hover:bg-teal-100"
              >
                Peptide basics
              </a>
            </nav>
          </div>
        </div>

        <div className="mx-auto max-w-3xl space-y-12 px-4 py-10 sm:px-6 sm:py-14">
          {SITE_FAQ_SECTIONS.map((section) => (
            <section key={section.id} id={section.id}>
              <h2 className="text-xl font-bold text-slate-900">
                {section.title}
              </h2>
              {section.description ? (
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {section.description}
                </p>
              ) : null}
              <div className="mt-5">
                <FaqAccordion
                  items={section.items}
                  idPrefix={section.id}
                  accent="indigo"
                />
              </div>
            </section>
          ))}

          <section id="peptide-basics">
            <h2 className="text-xl font-bold text-slate-900">
              Peptide basics &amp; dosage
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              Common questions about peptides, reconstitution, storage, and how
              to use our{" "}
              <Link href="/calculator" className="font-semibold text-indigo-600 hover:text-indigo-700">
                dosage calculator
              </Link>
              .
            </p>
            <div className="mt-5">
              <FaqAccordion
                items={PEPTIDE_CALCULATOR_FAQ}
                idPrefix="peptide-basics"
                accent="teal"
              />
            </div>
          </section>

          <div className="rounded-2xl border border-amber-100 bg-amber-50 px-5 py-5">
            <h2 className="text-base font-bold text-slate-900">
              Still have questions?
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              MyPepFinder is an educational resource. For personal medical
              questions, speak with a qualified healthcare professional. For
              site-related questions,{" "}
              <Link href="/contact" className="font-semibold text-indigo-600 hover:text-indigo-700">
                contact us
              </Link>
              .
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/about"
                className="inline-flex min-h-[40px] items-center justify-center rounded-lg bg-indigo-600 px-4 text-sm font-semibold text-white transition hover:bg-indigo-700"
              >
                About MyPepFinder
              </Link>
              <Link
                href="/research-library"
                className="inline-flex min-h-[40px] items-center justify-center rounded-lg border border-indigo-300 bg-white px-4 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50"
              >
                Browse peptides
              </Link>
            </div>
          </div>
        </div>
      </main>

      <HomeFooter />
    </div>
  );
}
