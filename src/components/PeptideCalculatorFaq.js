import { PEPTIDE_CALCULATOR_FAQ } from "@/data/peptide-calculator-faq";

export function PeptideCalculatorFaq() {
  return (
    <section
      id="peptide-faq"
      aria-labelledby="peptide-faq-heading"
      className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:mt-16 sm:p-8"
    >
      <h2
        id="peptide-faq-heading"
        className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl"
      >
        Peptide frequently asked questions
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
        Answers about peptide dosage, reconstitution, storage, research
        applications, and how to use our calculator—expand any question below.
      </p>

      <div className="mt-8 divide-y divide-slate-200 rounded-xl border border-slate-200">
        {PEPTIDE_CALCULATOR_FAQ.map(({ question, answer }, index) => (
          <details key={question} className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 text-left transition hover:bg-teal-50/60 sm:px-5 sm:py-5 [&::-webkit-details-marker]:hidden">
              <h3 className="text-sm font-semibold leading-snug text-slate-900 sm:text-base">
                {question}
              </h3>
              <span
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition group-open:rotate-180 group-open:border-teal-300 group-open:bg-teal-50 group-open:text-teal-700"
                aria-hidden="true"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>
            <div
              id={`faq-answer-${index}`}
              className="border-t border-slate-100 px-4 pb-4 pt-3 sm:px-5 sm:pb-5 sm:pt-4"
            >
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                {answer}
              </p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
