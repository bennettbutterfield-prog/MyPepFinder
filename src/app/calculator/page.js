import Link from "next/link";
import Image from "next/image";
import { CalculatorHeader } from "@/components/CalculatorHeader";
import { CalculatorFooter } from "@/components/CalculatorFooter";
import { DosageCalculator } from "@/components/DosageCalculator";

export const metadata = {
  title: "Peptide Dosage Calculator | MyPepFinder",
  description:
    "Calculate accurate peptide dosages, reconstitution amounts, and injection volumes based on your specific protocol.",
  openGraph: {
    title: "Peptide Dosage Calculator | MyPepFinder",
    description:
      "Calculate reconstitution amounts and injection volumes for your peptide protocol.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Peptide Dosage Calculator | MyPepFinder",
    description:
      "Calculate reconstitution amounts and injection volumes for your peptide protocol.",
  },
};

const HOW_STEPS = [
  {
    title: "1. Enter Information",
    body: "Fill in peptide amount, water volume, desired dose, and frequency.",
    icon: "doc",
  },
  {
    title: "2. Calculate",
    body: "Press Calculate Dosage to generate concentration and draw volume.",
    icon: "calc",
  },
  {
    title: "3. Draw & Inject",
    body: "Draw the calculated volume using an insulin syringe scale.",
    icon: "syringe",
  },
  {
    title: "4. Repeat",
    body: "Follow your schedule until the vial is finished, then reconstitute again.",
    icon: "repeat",
  },
];

const TABLE_MG = [5, 10, 12, 15, 20];
const TABLE_ML = [1, 2, 3, 5];

const RELATED = [
  {
    title: "Peptide Half-Life Calculator",
    body: "Estimate timing windows for common research peptides.",
    icon: "clock",
  },
  {
    title: "Body Fat % Calculator",
    body: "Estimate body composition from common measurements.",
    icon: "body",
  },
  {
    title: "Protein Intake Calculator",
    body: "Plan daily protein targets alongside your protocol.",
    icon: "apple",
  },
];

const STATS = [
  { value: "200+", label: "Peptides Researched", icon: "book" },
  { value: "18,000+", label: "Research Studies", icon: "scope" },
  { value: "80+", label: "Trusted Providers", icon: "shield" },
  { value: "Evidence-Based", label: "Data-Driven Insights", icon: "chart" },
];

export default function CalculatorPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
      {/* Continuous soft wash behind nav + hero */}
      <div className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(115deg, #eceef8 0%, #eef2ff 22%, #f5f7fb 48%, #ffffff 78%)",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-20 -top-10 h-72 w-72 rounded-full bg-indigo-300/20 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute right-[18%] top-0 h-56 w-56 rounded-full bg-violet-200/25 blur-3xl"
          aria-hidden
        />

        <CalculatorHeader />

        <section className="relative">
          <div className="relative mx-auto max-w-6xl px-4 pb-8 pt-5 sm:px-6 sm:pb-10 sm:pt-6">
            {/* Soft-blended hero photo on the right (desktop) */}
            <div
              className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] lg:block"
              aria-hidden
            >
              <HeroVisual mode="bleed" />
            </div>

            <div className="relative max-w-xl lg:max-w-[34rem]">
              <nav className="text-xs text-slate-400" aria-label="Breadcrumb">
                <ol className="flex flex-wrap items-center gap-1.5">
                  <li>
                    <Link href="/" className="transition hover:text-indigo-600">
                      Home
                    </Link>
                  </li>
                  <li aria-hidden className="text-slate-300">
                    ›
                  </li>
                  <li>Tools</li>
                  <li aria-hidden className="text-slate-300">
                    ›
                  </li>
                  <li className="font-medium text-slate-500">
                    Peptide Dosage Calculator
                  </li>
                </ol>
              </nav>

              <h1 className="mt-3 text-[1.65rem] font-bold leading-tight tracking-tight text-slate-900 sm:text-[1.9rem]">
                Peptide Dosage Calculator
              </h1>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-500 sm:text-[15px]">
                Calculate accurate peptide dosages, reconstitution amounts, and
                injection volumes based on your specific protocol.
              </p>

              <ul className="mt-5 flex flex-row flex-wrap items-start gap-x-7 gap-y-3 sm:flex-nowrap">
                <TrustItem
                  title="Evidence-Based"
                  sub="Clinical references"
                  icon="shield"
                />
                <TrustItem
                  title="Accurate Calculations"
                  sub="Verified formulas"
                  icon="verified"
                />
                <TrustItem
                  title="Privacy First"
                  sub="Your data is never stored"
                  icon="lock"
                />
              </ul>
            </div>

            {/* Mobile / tablet: compact visual */}
            <div className="relative mt-6 lg:hidden">
              <HeroVisual mode="card" />
            </div>
          </div>
        </section>
      </div>

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 sm:py-10">
        <DosageCalculator />

        <section className="mt-14 sm:mt-16">
          <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-[1.75rem]">
            How to Use This Calculator
          </h2>
          <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-2">
            {HOW_STEPS.map((step, i) => (
              <li
                key={step.title}
                className="relative flex flex-col items-center px-2 text-center"
              >
                {i < HOW_STEPS.length - 1 ? (
                  <span
                    className="absolute right-0 top-6 hidden w-full translate-x-1/2 items-center justify-end text-slate-300 lg:flex"
                    aria-hidden
                  >
                    <span className="mr-8 h-px flex-1 bg-slate-200" />
                    <span className="text-sm">›</span>
                  </span>
                ) : null}
                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl border border-indigo-100 bg-white text-indigo-600 shadow-sm">
                  <StepIcon name={step.icon} />
                </span>
                <h3 className="mt-3 text-sm font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-1.5 max-w-[13.5rem] text-xs leading-relaxed text-slate-500">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-14 grid gap-6 lg:mt-16 lg:grid-cols-[1.35fr_1fr]">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
            <h2 className="text-xl font-bold text-slate-900">
              Common Reconstitution Guidelines
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Concentration (mg/mL) by peptide amount and bacteriostatic water.
            </p>
            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[320px] border-collapse text-center text-xs sm:text-sm">
                <thead>
                  <tr>
                    <th className="border-b border-slate-200 bg-slate-50 px-2 py-2.5 text-left font-semibold text-slate-600">
                      Peptide Amount
                    </th>
                    {TABLE_ML.map((ml) => (
                      <th
                        key={ml}
                        className="border-b border-slate-200 bg-slate-50 px-2 py-2.5 font-semibold text-slate-600"
                      >
                        {ml} mL
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {TABLE_MG.map((mg) => (
                    <tr key={mg}>
                      <th className="border-b border-slate-100 px-2 py-2.5 text-left font-semibold text-slate-700">
                        {mg} mg
                      </th>
                      {TABLE_ML.map((ml) => {
                        const conc = mg / ml;
                        return (
                          <td
                            key={`${mg}-${ml}`}
                            className="border-b border-slate-100 px-2 py-2.5 text-slate-700"
                          >
                            {conc.toFixed(2)}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
            <h2 className="text-xl font-bold text-slate-900">
              Understanding Units
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Milligrams measure peptide weight; milliliters measure liquid
              volume.
            </p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col items-center text-center">
                <span className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-slate-100 text-slate-600">
                  <StepIcon name="vial" large />
                </span>
                <p className="mt-3 text-sm font-semibold text-slate-900">
                  Milligrams (mg)
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  The weight of peptide in the vial.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-slate-100 text-slate-600">
                  <StepIcon name="syringe" large />
                </span>
                <p className="mt-3 text-sm font-semibold text-slate-900">
                  Milliliters (mL)
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  The volume of liquid you inject.
                </p>
              </div>
            </div>
            <p className="mt-6 rounded-xl bg-indigo-600 px-4 py-3 text-center text-sm font-semibold text-white">
              100 units on an insulin syringe = 1 mL
            </p>
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-2">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Related Tools</h2>
            <ul className="mt-4 space-y-3">
              {RELATED.map((tool) => (
                <li key={tool.title}>
                  <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3.5 shadow-sm">
                    <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                      <RelatedIcon name={tool.icon} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold text-slate-900">
                        {tool.title}
                      </span>
                      <span className="mt-0.5 block text-xs text-slate-500">
                        {tool.body}
                      </span>
                    </span>
                    <span className="mt-1 shrink-0 rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                      Coming soon
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-7">
            <div className="relative z-10 max-w-md">
              <h2 className="text-lg font-bold text-slate-900">Disclaimer</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                This tool is for research and informational purposes only. It is
                not medical advice. Always consult a qualified healthcare
                professional and follow your provider&apos;s protocol before
                making any decisions related to peptide research or use.
              </p>
            </div>
            <span
              className="pointer-events-none absolute -bottom-4 -right-2 text-indigo-200 sm:-bottom-6 sm:right-4"
              aria-hidden
            >
              <svg
                className="h-28 w-28 sm:h-36 sm:w-36"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2 20 6v5c0 5.25-3.4 9.4-8 11-4.6-1.6-8-5.75-8-11V6l8-4Z" />
              </svg>
            </span>
          </div>
        </section>
      </main>

      <section className="border-y border-slate-200 bg-slate-50">
        <ul className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {STATS.map((stat) => (
            <li
              key={stat.label}
              className="flex items-center gap-3 sm:justify-center lg:justify-start"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-slate-500 shadow-sm ring-1 ring-slate-200">
                <StatIcon name={stat.icon} />
              </span>
              <span>
                <span className="block text-lg font-bold text-slate-900">
                  {stat.value}
                </span>
                <span className="block text-xs text-slate-500">{stat.label}</span>
              </span>
            </li>
          ))}
        </ul>
      </section>

      <CalculatorFooter />
    </div>
  );
}

function HeroVisual({ mode = "card" }) {
  // Set to false to show the dashed placeholder card instead of the photo.
  const hasImage = true;

  if (!hasImage) {
    return (
      <div className="flex aspect-[4/3] w-full flex-col items-center justify-center rounded-2xl border border-dashed border-indigo-200 bg-gradient-to-br from-indigo-50 via-white to-slate-50 p-6 text-center shadow-sm">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600">
          <StepIcon name="syringe" large />
        </span>
        <p className="mt-3 text-sm font-semibold text-slate-700">
          Hero image placeholder
        </p>
        <p className="mt-1 max-w-[14rem] text-xs leading-relaxed text-slate-400">
          Add a soft-lit vial &amp; syringe photo here to match the mockup.
        </p>
      </div>
    );
  }

  if (mode === "bleed") {
    return (
      <div className="absolute inset-0">
        <Image
          src="/peptide-syringe-hero.png"
          alt=""
          fill
          priority
          className="object-contain object-right"
          sizes="42vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, #eef2ff 0%, rgba(238,242,255,0.92) 16%, rgba(248,250,252,0.45) 42%, transparent 70%)",
          }}
        />
        <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#eceef8]/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-white to-transparent" />
      </div>
    );
  }

  return (
    <div className="relative mx-auto aspect-[5/3] w-full max-w-md overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-50/80 via-white to-slate-50 ring-1 ring-indigo-100/70">
      <Image
        src="/peptide-syringe-hero.png"
        alt="Syringe reconstituting a peptide vial"
        fill
        priority
        className="object-contain object-center p-3"
        sizes="90vw"
      />
    </div>
  );
}

function TrustItem({ title, sub, icon }) {
  return (
    <li className="flex min-w-0 shrink items-start gap-2">
      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
        <TrustIcon name={icon} />
      </span>
      <span className="min-w-0">
        <span className="block text-[13px] font-semibold leading-tight text-slate-800">
          {title}
        </span>
        <span className="mt-0.5 block text-[11px] leading-snug text-slate-400">
          {sub}
        </span>
      </span>
    </li>
  );
}

function TrustIcon({ name }) {
  const c = {
    className: "h-3.5 w-3.5",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };
  if (name === "verified") {
    return (
      <svg {...c}>
        <circle cx="12" cy="8" r="3.5" />
        <path d="M6 20v-1a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1" />
        <path d="m10 12 1.5 1.5L15 10" />
      </svg>
    );
  }
  if (name === "lock") {
    return (
      <svg {...c}>
        <path d="M12 3 20 7v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V7l8-4Z" />
        <rect x="9.5" y="11" width="5" height="4" rx="0.8" />
        <path d="M11 11V9.5a1 1 0 0 1 2 0V11" />
      </svg>
    );
  }
  return (
    <svg {...c}>
      <path d="M12 3 20 7v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V7l8-4Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function StepIcon({ name, large }) {
  const c = {
    className: large ? "h-8 w-8" : "h-5 w-5",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };
  if (name === "calc") {
    return (
      <svg {...c}>
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 7h8M8 11h8M8 15h5" />
      </svg>
    );
  }
  if (name === "syringe") {
    return (
      <svg {...c}>
        <path d="M9 3h6M10 3v3l-6 6 4 4 6-6V9" />
        <path d="m7 17 2 2" />
      </svg>
    );
  }
  if (name === "vial") {
    return (
      <svg {...c}>
        <path d="M9 3h6v4l3 12a2 2 0 0 1-2 3H8a2 2 0 0 1-2-3l3-12V3Z" />
      </svg>
    );
  }
  if (name === "repeat") {
    return (
      <svg {...c}>
        <path d="M17 2v4h4" />
        <path d="M3 12a8 8 0 0 1 13-6l5 4" />
        <path d="M7 22v-4H3" />
        <path d="M21 12a8 8 0 0 1-13 6l-5-4" />
      </svg>
    );
  }
  return (
    <svg {...c}>
      <path d="M9 5h11M9 12h11M9 19h11M4 5h.01M4 12h.01M4 19h.01" />
    </svg>
  );
}

function RelatedIcon({ name }) {
  const c = {
    className: "h-5 w-5",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75",
    "aria-hidden": true,
  };
  if (name === "body") {
    return (
      <svg {...c}>
        <circle cx="12" cy="5" r="2" />
        <path d="M12 8v5M9 21l3-8 3 8M7 12h10" />
      </svg>
    );
  }
  if (name === "apple") {
    return (
      <svg {...c}>
        <path d="M12 7c-3 0-6 3-6 7 0 4 3 7 6 7s6-3 6-7c0-4-3-7-6-7Z" />
        <path d="M12 7c1-2 2-3 4-3" />
      </svg>
    );
  }
  return (
    <svg {...c}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l3 2" />
    </svg>
  );
}

function StatIcon({ name }) {
  const c = {
    className: "h-4 w-4",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };
  if (name === "scope") {
    return (
      <svg {...c}>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 5v2M12 17v2M5 12h2M17 12h2" />
        <circle cx="12" cy="12" r="8" />
      </svg>
    );
  }
  if (name === "shield") {
    return (
      <svg {...c}>
        <path d="M12 3 20 7v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V7l8-4Z" />
      </svg>
    );
  }
  if (name === "chart") {
    return (
      <svg {...c}>
        <path d="M4 19h16M7 16V9M12 16V5M17 16v-4" />
      </svg>
    );
  }
  return (
    <svg {...c}>
      <path d="M5 5h14v14H5z" />
      <path d="M8 9h8M8 13h8M8 17h5" />
    </svg>
  );
}
