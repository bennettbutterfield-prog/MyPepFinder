import { NextResponse } from "next/server";

/**
 * Placeholder payment — sets a short-lived cookie to unlock premium UI.
 * Replace with Stripe Checkout when ready.
 */
export async function POST() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set("mypep_premium", "1", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
  return res;
}
