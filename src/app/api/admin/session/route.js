import { NextResponse } from "next/server";
import { getAdminSecret } from "@/lib/admin-auth";

export async function POST(request) {
  const secret = getAdminSecret();
  if (!secret) {
    return NextResponse.json(
      { ok: false, error: "Admin access is not configured." },
      { status: 503 },
    );
  }

  try {
    const body = await request.json();
    const password =
      typeof body.password === "string" ? body.password.trim() : "";

    if (password !== secret) {
      return NextResponse.json(
        { ok: false, error: "Invalid password." },
        { status: 401 },
      );
    }

    const response = NextResponse.json({ ok: true });
    response.cookies.set("mypep_admin", secret, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
    return response;
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}

export async function DELETE() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set("mypep_admin", "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });
  return response;
}
