import { NextRequest, NextResponse } from "next/server";
import { readSsoSession, ssoConfiguration, SSO_RESPONSE_HEADERS, SSO_SESSION_COOKIE } from "@/lib/sso/server";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  let configuration: ReturnType<typeof ssoConfiguration>;
  try { configuration = ssoConfiguration(); }
  catch {
    return NextResponse.json({ user: null, enabled: false }, { headers: SSO_RESPONSE_HEADERS });
  }
  const ladipageUrl = new URL("/", configuration.authorizeUrl).href;
  const profileUrl = new URL("/profile", configuration.authorizeUrl).href;
  const token = request.cookies.get(SSO_SESSION_COOKIE)?.value;
  try {
    const identity = token ? await readSsoSession(token) : null;
    const response = NextResponse.json({ user: identity?.user ?? null, enabled: true, ladipageUrl, profileUrl }, { headers: SSO_RESPONSE_HEADERS });
    if (token && !identity) response.cookies.set(SSO_SESSION_COOKIE, "", {
      httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "lax", path: "/", maxAge: 0,
    });
    return response;
  } catch {
    // Keep the cookie during an outage, but never show unvalidated account data.
    return NextResponse.json({ user: null, enabled: true, ladipageUrl, profileUrl, unavailable: true }, { status: 503, headers: SSO_RESPONSE_HEADERS });
  }
}
