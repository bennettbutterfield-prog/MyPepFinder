import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { trackEvent } from "@/lib/analytics";

const KINDS = new Set(["specialist", "email_report", "newsletter", "contact"]);

export async function POST(request) {
  try {
    const body = await request.json();
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const kind = typeof body.kind === "string" ? body.kind : "";
    const selectedGoal =
      typeof body.selectedGoal === "string" ? body.selectedGoal.trim() : null;
    const notes =
      typeof body.notes === "string" ? body.notes.trim().slice(0, 4000) : null;
    const sourcePage =
      typeof body.sourcePage === "string" ? body.sourcePage.slice(0, 500) : null;
    const sourcePeptideId =
      typeof body.sourcePeptideId === "string"
        ? body.sourcePeptideId
        : null;
    const wantsUpdates = Boolean(body.wantsUpdates);
    const metadata =
      typeof body.metadata === "string"
        ? body.metadata.slice(0, 12000)
        : body.metadata && typeof body.metadata === "object"
          ? JSON.stringify(body.metadata).slice(0, 12000)
          : null;

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { ok: false, error: "Valid email required" },
        { status: 400 },
      );
    }
    if (!KINDS.has(kind)) {
      return NextResponse.json(
        { ok: false, error: "Invalid kind" },
        { status: 400 },
      );
    }

    if (kind === "contact" && (!notes || notes.length < 10)) {
      return NextResponse.json(
        { ok: false, error: "Please enter a message with at least 10 characters." },
        { status: 400 },
      );
    }

    await prisma.lead.create({
      data: {
        email,
        kind,
        selectedGoal,
        notes,
        sourcePage,
        sourcePeptideId,
        wantsUpdates,
        metadata,
      },
    });

    trackEvent("lead_submitted", {
      kind,
      sourcePage: sourcePage ?? undefined,
      sourcePeptideId: sourcePeptideId ?? undefined,
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[leads]", e);
    return NextResponse.json(
      { ok: false, error: "Unable to save submission." },
      { status: 500 },
    );
  }
}
