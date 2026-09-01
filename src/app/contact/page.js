import Link from "next/link";
import { HomeHeader } from "@/components/HomeHeader";
import { HomeFooter } from "@/components/HomeFooter";
import { ContactForm } from "@/components/ContactForm";

export const metadata = {
  title: "Contact | MyPepFinder",
  description:
    "Get in touch with MyPepFinder for website questions, research feedback, provider inquiries, and privacy requests.",
};

const HELP_LINKS = [
  {
    title: "FAQ",
    body: "Quick answers about the site, calculators, peptide research, and safety.",
    href: "/faq",
  },
  {
    title: "About us",
    body: "Learn what MyPepFinder is and how we organize peptide research.",
    href: "/about",
  },
  {
    title: "Privacy Policy",
    body: "How we handle information when you browse or submit forms.",
    href: "/privacy",
  },
];

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <HomeHeader />

      <main className="flex-1">
        <div className="border-b border-slate-100 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
            <nav className="text-xs text-slate-400" aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-1.5">
                <li>
                  <Link href="/" className="hover:text-indigo-600">
                    Home
                  </Link>
                </li>
                <li aria-hidden>›</li>
                <li className="font-medium text-slate-600">Contact</li>
              </ol>
            </nav>

            <div className="mt-4 max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                Get in touch
              </p>
              <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Contact us
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-slate-500 sm:text-[15px]">
                Questions about the site, research summaries, provider listings,
                or privacy? Send us a message and we will respond as soon as we
                can.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-lg font-bold text-slate-900">Send a message</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              For personal medical questions, please consult a qualified
              healthcare professional. MyPepFinder provides educational research
              tools only.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </section>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-base font-bold text-slate-900">
                What to contact us about
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-600">
                <li>Website feedback or bug reports</li>
                <li>Research corrections or source suggestions</li>
                <li>Provider listing questions</li>
                <li>Privacy and data requests</li>
                <li>Partnership or media inquiries</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-amber-100 bg-amber-50 p-5">
              <h2 className="text-base font-bold text-slate-900">
                Not medical advice
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                We cannot recommend peptides, doses, or treatments. Our team
                supports the educational platform — not individual medical
                decisions.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-base font-bold text-slate-900">
                Helpful links
              </h2>
              <ul className="mt-4 space-y-3">
                {HELP_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group block rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 transition hover:border-indigo-200 hover:bg-indigo-50/40"
                    >
                      <p className="text-sm font-semibold text-slate-900 group-hover:text-indigo-700">
                        {link.title}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-slate-500">
                        {link.body}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </main>

      <HomeFooter />
    </div>
  );
}
