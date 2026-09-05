import Link from "next/link";
import { CalculatorHeader } from "@/components/CalculatorHeader";
import { CalculatorFooter } from "@/components/CalculatorFooter";
import { CalculatorToolsSidebar } from "@/components/CalculatorToolsSidebar";
import { CalorieDeficitCalculator } from "@/components/CalorieDeficitCalculator";

export const metadata = {
  title: "Calorie Deficit Calculator | MyPepFinder",
  description:
    "Calculate daily calorie intake, weight-loss timeline, and macros to reach your goal weight with realistic metabolic modeling.",
  openGraph: {
    title: "Calorie Deficit Calculator | MyPepFinder",
    description:
      "Find your calorie deficit, projected timeline, and macro targets for realistic weight loss.",
    type: "website",
    url: "/calculator/calorie-deficit",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calorie Deficit Calculator | MyPepFinder",
    description:
      "Find your calorie deficit, projected timeline, and macro targets for realistic weight loss.",
  },
};

const FAQ = [
  {
    q: "What is a calorie deficit?",
    a: "A calorie deficit happens when you eat fewer calories than your body burns. Over time, your body uses stored energy (mostly fat) to make up the difference, which leads to weight loss.",
  },
  {
    q: "Why doesn't a 500-calorie deficit always equal 1 lb/week?",
    a: "The old 3,500-calorie rule ignores metabolic adaptation. As you lose weight, your resting metabolism drops and the rate of loss slows. This calculator models that change week by week.",
  },
  {
    q: "How low should my calories go?",
    a: "As a general guideline, women should not go below 1,200 kcal/day and men not below 1,500 kcal/day without medical supervision.",
  },
];

export default function CalorieDeficitCalculatorPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
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

        <CalculatorHeader />

        <section className="relative">
          <div className="relative mx-auto max-w-6xl px-4 pb-8 pt-5 sm:px-6 sm:pb-10 sm:pt-6">
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
                <li>
                  <Link href="/calculator" className="transition hover:text-indigo-600">
                    Tools
                  </Link>
                </li>
                <li aria-hidden className="text-slate-300">
                  ›
                </li>
                <li className="font-medium text-slate-500">
                  Calorie Deficit Calculator
                </li>
              </ol>
            </nav>

            <h1 className="mt-3 text-[1.65rem] font-bold leading-tight tracking-tight text-slate-900 sm:text-[1.9rem]">
              Calorie Deficit Calculator
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-[15px]">
              Find out how many calories to eat daily to reach your goal weight,
              how long it will take, and how intake changes your timeline.
            </p>
          </div>
        </section>
      </div>

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6 sm:px-6 sm:py-10">
        <div className="flex flex-col gap-5">
          <CalculatorToolsSidebar />
          <CalorieDeficitCalculator />
          <Link
            href="/recommendations"
            className="inline-flex min-h-[48px] w-full items-center justify-center rounded-xl bg-indigo-600 px-5 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition hover:bg-indigo-700 sm:w-auto sm:self-center sm:px-8"
          >
            Explore Top Ranked Providers
          </Link>
        </div>

        <section className="mt-14 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-bold text-slate-900">
            Understanding Your Results
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {FAQ.map((item) => (
              <div
                key={item.q}
                className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-4"
              >
                <h3 className="text-sm font-semibold text-slate-900">{item.q}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <CalculatorFooter />
    </div>
  );
}
