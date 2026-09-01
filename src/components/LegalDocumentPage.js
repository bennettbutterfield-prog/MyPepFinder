import Link from "next/link";
import { HomeHeader } from "@/components/HomeHeader";
import { HomeFooter } from "@/components/HomeFooter";

/**
 * Shared layout for Privacy Policy, Terms of Service, and similar legal pages.
 * @param {{ title: string; description: string; lastUpdated: string; sections: { id: string; title: string; paragraphs: string[] }[] }} props
 */
export function LegalDocumentPage({
  title,
  description,
  lastUpdated,
  sections,
}) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <HomeHeader />

      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
          <nav className="text-xs text-slate-400" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link href="/" className="hover:text-indigo-600">
                  Home
                </Link>
              </li>
              <li aria-hidden>›</li>
              <li className="font-medium text-slate-600">{title}</li>
            </ol>
          </nav>

          <header className="mt-4 border-b border-slate-200 pb-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              Legal
            </p>
            <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {title}
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-slate-500 sm:text-[15px]">
              {description}
            </p>
            <p className="mt-4 text-xs text-slate-400">
              Last updated: {lastUpdated}
            </p>
          </header>

          <div className="mt-8 space-y-10">
            {sections.map((section) => (
              <section key={section.id} id={section.id}>
                <h2 className="text-lg font-bold text-slate-900">
                  {section.title}
                </h2>
                <div className="mt-3 space-y-3 text-sm leading-relaxed text-slate-600">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-indigo-100 bg-indigo-50 px-5 py-4">
            <p className="text-sm text-slate-700">
              MyPepFinder provides educational peptide research tools. It does
              not provide medical advice, diagnosis, or treatment.
            </p>
            <div className="mt-3 flex flex-wrap gap-3 text-sm font-semibold">
              <Link
                href="/privacy"
                className="text-indigo-700 hover:text-indigo-800"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-indigo-700 hover:text-indigo-800"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </main>

      <HomeFooter />
    </div>
  );
}
