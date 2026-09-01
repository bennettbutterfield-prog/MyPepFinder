import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getExplorePageData,
  getKnownExploreSlugs,
} from "@/data/explore-sellers";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const dynamicParams = false;

export function generateStaticParams() {
  return getKnownExploreSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = getExplorePageData(slug);
  if (!data) return { title: "Explore providers" };
  return {
    title: `${data.peptideName} — explore research suppliers | MyPepFinder`,
    description: `Compare illustrative pricing and trust-style scores for ${data.peptideName} across example suppliers.`,
  };
}

export default async function ExploreProvidersPage({ params }) {
  const { slug } = await params;
  const data = getExplorePageData(slug);
  if (!data) notFound();

  const { peptideName, sellers } = data;

  return (
    <div className="flex min-h-screen flex-col bg-teal-50 text-slate-900">
      <SiteHeader variant="light" />

      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10 sm:px-6 sm:py-12">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-teal-600">
          Supplier comparison
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Explore providers for{" "}
          <span className="text-teal-700">{peptideName}</span>
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600">
          Example sellers below mix illustrative pricing and a
          documentation-forward trust score—so you can practice comparison the
          same way you would on a marketplace. Nothing here is an endorsement or
          live quote.
        </p>

        <div className="mt-8 hidden overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm md:block">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-slate-200 bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3">Seller</th>
                <th className="px-4 py-3">From (USD)</th>
                <th className="px-4 py-3">Trust</th>
                <th className="px-4 py-3">Notes</th>
              </tr>
            </thead>
            <tbody>
              {sellers.map((s) => (
                <tr
                  key={s.id}
                  className="border-b border-slate-100 last:border-0 hover:bg-slate-50/80"
                >
                  <td className="px-4 py-4 font-medium text-slate-900">
                    {s.name}
                  </td>
                  <td className="px-4 py-4 text-slate-800">
                    ${s.priceFrom.toFixed(2)}
                  </td>
                  <td className="px-4 py-4">
                    <span className="inline-flex min-w-[2.5rem] items-center justify-center rounded-full bg-slate-900 px-2 py-0.5 text-xs font-bold text-teal-400">
                      {s.trustScore}
                    </span>
                  </td>
                  <td className="max-w-xs px-4 py-4 text-xs text-slate-600">
                    {s.note}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ul className="mt-6 space-y-4 md:hidden">
          {sellers.map((s) => (
            <li
              key={s.id}
              className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <p className="font-semibold text-slate-900">{s.name}</p>
              <p className="mt-1 text-sm text-slate-700">
                From <span className="font-medium">${s.priceFrom.toFixed(2)}</span>{" "}
                USD
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-600">
                <span className="inline-flex items-center rounded-full bg-slate-900 px-2 py-0.5 text-xs font-bold text-teal-400">
                  Trust {s.trustScore}
                </span>
              </div>
              <p className="mt-2 text-xs text-slate-600">{s.note}</p>
            </li>
          ))}
        </ul>

        <p className="mt-8 rounded-xl border border-sky-200/80 bg-sky-50/90 p-4 text-xs leading-relaxed text-sky-950">
          Educational comparison only. Figures are placeholders for layout and
          discussion—not verified prices, medical advice, or ranking
          guarantees.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-full border border-slate-300 text-sm font-semibold text-slate-800 hover:bg-white"
          >
            Home
          </Link>
          <Link
            href="/#peptide-finder"
            className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Run finder again
          </Link>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
