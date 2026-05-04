import { NextResponse } from "next/server";
import { trackEvent } from "@/lib/analytics";

export async function POST(request) {
  try {
    const body = await request.json();
    const event = typeof body.event === "string" ? body.event : null;
    if (!event) {
      return NextResponse.json({ ok: false, error: "event required" }, { status: 400 });
    }
    const payload =
      body.payload && typeof body.payload === "object" ? body.payload : {};
    trackEvent(event, payload);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
