import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import {
  getPopularPeptideBySlug,
  POPULAR_PEPTIDES,
} from "@/data/popular-peptides";
import { getExplorePageData, getKnownExploreSlugs } from "@/data/explore-sellers";

export const dynamicParams = false;
const PEER_REVIEW_PLACEHOLDERS = Array.from({ length: 12 }, (_, i) => i + 1);

export function generateStaticParams() {
  const popular = POPULAR_PEPTIDES.map((p) => p.slug);
  const library = getKnownExploreSlugs();
  return [...new Set([...popular, ...library])].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const peptide = getDetailData(slug);
  if (!peptide) {
    return {
      title: "Peptide not found",
    };
  }
  return {
    title: `${peptide.name} | MyPepFinder`,
    description: `Research placeholder profile for ${peptide.name}.`,
  };
}

export default async function PeptideDetailPage({ params }) {
  const { slug } = await params;
  const peptide = getDetailData(slug);
  if (!peptide) notFound();

  const exploreData = getExplorePageData(slug);

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <SiteHeader variant="light" />

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6 sm:py-14">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-600">
          Peptide profile
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          {peptide.name}
        </h1>
        {peptide.subtitle ? (
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            {peptide.subtitle}
          </p>
        ) : null}

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-lg font-semibold text-slate-900">
              Product image
            </h2>
            <div className="relative mt-4 h-80 overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <Image
                src="/mockups/mpf-vial.png"
                alt={`${peptide.name} product mockup`}
                fill
                className="object-contain p-3"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-lg font-semibold text-slate-900">
              Research summary
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              {peptide.summary}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              This section is a placeholder for literature context, purity/testing
              notes, and key terms users can scan before comparing vendors.
            </p>
          </section>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-lg font-semibold text-slate-900">
              Molecular profile
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Placeholder for sequence class, molecular weight, receptor-pathway
              notes, and key analytical identifiers.
            </p>
            <div className="mt-5 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4 text-sm text-slate-500">
              Molecular profile placeholder content
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-lg font-semibold text-slate-900">
              Storage requirements
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Placeholder for handling and storage guidance (temperature range,
              light/moisture controls, and post-reconstitution notes).
            </p>
            <div className="mt-5 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4 text-sm text-slate-500">
              Storage requirements placeholder content
            </div>
          </section>
        </div>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-lg font-semibold text-slate-900">
            Compare vendors
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Placeholder comparison module for price, purity/testing language,
            review volume, and trust score.
          </p>
          <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-500">
                <tr>
                  <th className="px-4 py-3 font-semibold">Vendor</th>
                  <th className="px-4 py-3 font-semibold">From Price</th>
                  <th className="px-4 py-3 font-semibold">Purity/Test Note</th>
                  <th className="px-4 py-3 font-semibold">Reviews</th>
                  <th className="px-4 py-3 font-semibold">Trust</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {["Vendor A", "Vendor B", "Vendor C"].map((vendor) => (
                  <tr key={vendor} className="bg-white">
                    <td className="px-4 py-3 font-medium text-slate-900">
                      {vendor}
                    </td>
                    <td className="px-4 py-3 text-slate-600">--</td>
                    <td className="px-4 py-3 text-slate-600">Placeholder</td>
                    <td className="px-4 py-3 text-slate-600">--</td>
                    <td className="px-4 py-3 text-slate-600">--</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Explore providers
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Full provider-style placeholder comparison for this peptide.
            </p>
          </div>

          {exploreData ? (
            <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 text-slate-500">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Seller</th>
                    <th className="px-4 py-3 font-semibold">From USD</th>
                    <th className="px-4 py-3 font-semibold">Reviews</th>
                    <th className="px-4 py-3 font-semibold">Trust</th>
                    <th className="px-4 py-3 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {exploreData.sellers.map((s) => (
                    <tr key={s.id} className="bg-white">
                      <td className="px-4 py-3 font-medium text-slate-900">
                        {s.name}
                      </td>
                      <td className="px-4 py-3 text-slate-600">
                        ${s.priceFrom.toFixed(2)}
                      </td>
                      <td className="px-4 py-3 text-slate-600">
                        {s.reviewAvg.toFixed(2)} ({s.reviewCount})
                      </td>
                      <td className="px-4 py-3 text-slate-600">
                        {s.trustScore}
                      </td>
                      <td className="px-4 py-3 text-slate-600">{s.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="mt-5 rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-6 text-sm text-slate-600">
              Provider comparison placeholder coming soon for this peptide entry.
            </p>
          )}
        </section>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-slate-100 p-6 shadow-sm sm:p-8">
          <h2 className="text-lg font-semibold text-slate-900">
            Peer-reviewed research
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Placeholder cards for literature you want to pin to each peptide
            profile.
          </p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PEER_REVIEW_PLACEHOLDERS.map((n) => (
              <li
                key={n}
                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Journal publication
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-900">
                  Study title placeholder {n}
                </p>
                <p className="mt-3 text-xs text-slate-500">Date: --/--/----</p>
              </li>
            ))}
          </ul>
        </section>

        <p className="mt-10 text-center text-sm text-slate-600">
          <Link
            href="/#explore-popular-peptides"
            className="font-medium text-amber-700 hover:text-amber-800"
          >
            ← Back to popular peptides
          </Link>
        </p>
      </main>

      <SiteFooter />
    </div>
  );
}

function getDetailData(slug) {
  const fromPopular = getPopularPeptideBySlug(slug);
  if (fromPopular) return fromPopular;
  const fromExplore = getExplorePageData(slug);
  if (!fromExplore) return null;
  return {
    slug,
    name: fromExplore.peptideName,
    subtitle: "",
    summary:
      "Placeholder profile for this compound. Add literature notes, purity/testing context, and vendor comparison criteria here.",
  };
}
