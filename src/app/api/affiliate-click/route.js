import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { trackEvent } from "@/lib/analytics";

export async function POST(request) {
  try {
    const body = await request.json();
    const providerId =
      typeof body.providerId === "string" ? body.providerId : null;
    const peptideId =
      typeof body.peptideId === "string" ? body.peptideId : null;

    if (!providerId) {
      return NextResponse.json(
        { ok: false, error: "providerId required" },
        { status: 400 },
      );
    }

    await prisma.affiliateClick.create({
      data: {
        providerId,
        peptideId: peptideId || null,
      },
    });

    trackEvent("affiliate_click", { providerId, peptideId });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
