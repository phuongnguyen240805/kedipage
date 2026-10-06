import { NextRequest, NextResponse } from "next/server";
import { readSsoSession, SSO_SESSION_COOKIE } from "@/lib/sso/session";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get(SSO_SESSION_COOKIE)?.value;
  let authenticated = false;
  let revoked = false;
  try {
    authenticated = Boolean(token && await readSsoSession(token));
    revoked = Boolean(token && !authenticated);
  } catch {
    // Fail closed during an outage without deleting a potentially valid session.
  }
  const response = authenticated
    ? NextResponse.next()
    : NextResponse.redirect(new URL("/", request.url), 303);
  response.headers.set("Cache-Control", "private, no-store");
  if (revoked) response.cookies.set(SSO_SESSION_COOKIE, "", {
    httpOnly: true, secure: process.env.NODE_ENV === "production",
    sameSite: "lax", path: "/", maxAge: 0,
  });
  return response;
}

export const config = {
  matcher: ["/blog/:path*", "/blog-clone/:path*"],
};
