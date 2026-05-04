/* eslint-disable @typescript-eslint/no-require-imports */
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await prisma.affiliateClick.deleteMany();
  await prisma.lead.deleteMany();
  await prisma.peptide.deleteMany();
  await prisma.provider.deleteMany();

  const providers = [
    {
      name: "NorthLab Research Supply",
      slug: "northlab-research",
      tagline: "Batch COAs published alongside catalog listings",
      description:
        "NorthLab publishes third-party testing summaries for many catalog SKUs and groups pricing tiers in a way that is straightforward to compare with other suppliers.",
      websiteUrl: "https://example.com/northlab",
      affiliateUrl: "https://example.com/aff/northlab",
      sponsored: true,
      transparencyScore: 88,
      pricingTransparency: "Per-unit pricing is shown before checkout with volume tiers.",
    },
    {
      name: "Harbor Peptide Collective",
      slug: "harbor-collective",
      tagline: "Documentation-forward catalog with sourcing notes",
      description:
        "Harbor emphasizes chain-of-custody notes on select compounds and maintains a public changelog when formulations or suppliers change.",
      websiteUrl: "https://example.com/harbor",
      affiliateUrl: "https://example.com/aff/harbor",
      sponsored: false,
      transparencyScore: 84,
      pricingTransparency: "Shipping and handling estimates appear on the product detail page.",
    },
    {
      name: "Atlas Compounds",
      slug: "atlas-compounds",
      tagline: "Lean catalog focused on common research peptides",
      description:
        "Atlas offers a smaller catalog with consistent naming conventions, which can simplify side-by-side comparison with larger marketplaces.",
      websiteUrl: "https://example.com/atlas",
      affiliateUrl: null,
      sponsored: false,
      transparencyScore: 72,
      pricingTransparency: "Pricing is listed in USD with periodic promotions called out in a single banner.",
    },
    {
      name: "RidgeLine Labs",
      slug: "ridgeline-labs",
      tagline: "Educational blog paired with product pages",
      description:
        "RidgeLine pairs product listings with long-form educational articles framed around laboratory supply topics rather than prescriptive use.",
      websiteUrl: "https://example.com/ridgeline",
      affiliateUrl: "https://example.com/aff/ridgeline",
      sponsored: false,
      transparencyScore: 69,
      pricingTransparency: "Some SKUs require account creation to view wholesale-style tiers.",
    },
  ];

  for (const p of providers) {
    await prisma.provider.create({ data: p });
  }

  const peptides = [
    {
      name: "BPC-157",
      slug: "bpc-157",
      researchSummary:
        "In research literature, BPC-157 is commonly associated with tissue-repair and angiogenesis-related studies in animal models—not a recommendation for any use.",
    },
    {
      name: "TB-500 (Thymosin Beta-4 fragment)",
      slug: "tb-500",
      researchSummary:
        "TB-500 is commonly associated with cell-mobility and recovery-related preclinical research contexts; formulations vary widely between suppliers.",
    },
    {
      name: "GHK-Cu",
      slug: "ghk-cu",
      researchSummary:
        "GHK-Cu is commonly associated with cosmetic and dermal research supply categories; purity statements and supporting documentation differ by vendor.",
    },
  ];

  for (const pep of peptides) {
    await prisma.peptide.create({ data: pep });
  }
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
