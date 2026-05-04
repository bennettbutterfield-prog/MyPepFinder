import { NextResponse } from "next/server";
import { Resend } from "resend";
import { prisma } from "@/lib/prisma";
import { rankProvidersByTransparency } from "@/lib/ranking";
import { buildResearchReportEmail } from "@/lib/email/researchReportEmail";
import { trackEvent } from "@/lib/analytics";
import { goalById } from "@/data/goals";

export async function POST(request) {
  try {
    const body = await request.json();
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const goalId =
      typeof body.goalId === "string" ? body.goalId : "general-education";
    const peptideIds = Array.isArray(body.peptideIds)
      ? body.peptideIds.filter((id) => typeof id === "string")
      : [];
    const wantsUpdates = Boolean(body.wantsUpdates);
    const sourcePage =
      typeof body.sourcePage === "string"
        ? body.sourcePage.slice(0, 500)
        : "/results";

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { ok: false, error: "Valid email required" },
        { status: 400 },
      );
    }

    const goal = goalById(goalId);
    const goalLabel = goal?.label ?? "General educational comparison";

    const peptides =
      peptideIds.length > 0
        ? await prisma.peptide.findMany({ where: { id: { in: peptideIds } } })
        : await prisma.peptide.findMany({ take: 3 });

    const providers = await prisma.provider.findMany();
    const ranked = rankProvidersByTransparency(providers).slice(0, 3);

    const topProviders = ranked.map((p) => ({
      name: p.name,
      tagline: p.tagline,
      description: p.description,
      transparencyScore: p.transparencyScore,
      pricingTransparency: p.pricingTransparency,
      ctaUrl: p.affiliateUrl || p.websiteUrl,
    }));

    const peptideSummaries = peptides.map((p) => ({
      name: p.name,
      summary: p.researchSummary,
    }));

    const { subject, html } = buildResearchReportEmail({
      goalLabel,
      peptideSummaries,
      topProviders,
    });

    const metadata = JSON.stringify({
      goalId,
      peptideIds: peptides.map((p) => p.id),
      providerIds: ranked.map((p) => p.id),
    });

    await prisma.lead.create({
      data: {
        email,
        kind: "email_report",
        selectedGoal: goalLabel,
        notes: null,
        sourcePage,
        sourcePeptideId: peptides[0]?.id ?? null,
        wantsUpdates,
        metadata,
      },
    });

    trackEvent("email_submitted", {
      sourcePage,
      goalId,
      peptideCount: peptides.length,
    });

    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey) {
      const resend = new Resend(apiKey);
      const from =
        process.env.RESEND_FROM_EMAIL || "MyPepFinder <onboarding@resend.dev>";
      await resend.emails.send({
        from,
        to: email,
        subject,
        html,
      });
    } else {
      console.info(
        "[email-report] RESEND_API_KEY not set — placeholder only. Subject:",
        subject,
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
