import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
import { rankProvidersByTransparency } from "@/lib/ranking";
import { goalById } from "@/data/goals";
import { ResultsExperience } from "@/components/ResultsExperience";

export const dynamic = "force-dynamic";

export default async function ResultsPage({ searchParams }) {
  const goalId =
    typeof searchParams?.goal === "string"
      ? searchParams.goal
      : "general-education";
  const peptideParam =
    typeof searchParams?.peptides === "string" ? searchParams.peptides : "";
  const peptideIds = peptideParam
    ? peptideParam.split(",").filter(Boolean)
    : [];

  const goal = goalById(goalId);
  const goalLabel = goal?.label ?? "General educational comparison";

  const peptides =
    peptideIds.length > 0
      ? await prisma.peptide.findMany({ where: { id: { in: peptideIds } } })
      : await prisma.peptide.findMany({ take: 3 });

  const providers = await prisma.provider.findMany();
  const rankedProviders = rankProvidersByTransparency(providers);

  const cookieStore = cookies();
  const premiumInitiallyUnlocked =
    cookieStore.get("mypep_premium")?.value === "1";

  return (
    <ResultsExperience
      goalId={goal ? goal.id : goalId}
      goalLabel={goalLabel}
      peptides={peptides}
      rankedProviders={rankedProviders}
      premiumInitiallyUnlocked={premiumInitiallyUnlocked}
    />
  );
}
