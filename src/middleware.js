import { NextResponse } from "next/server";

export function middleware(request) {
  const host = request.headers.get("host") || "";
  if (host.split(":")[0] === "mypepfinder.com") {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.hostname = "www.mypepfinder.com";
    url.port = "";
    return NextResponse.redirect(url, 301);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
