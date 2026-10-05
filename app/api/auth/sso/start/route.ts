import { NextRequest, NextResponse } from "next/server";
import {
  createSsoTransaction, safeReturnPath, ssoConfiguration, SSO_RESPONSE_HEADERS,
  SSO_TRANSACTION_COOKIE, SSO_TRANSACTION_TTL_SECONDS,
} from "@/lib/sso/server";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const { authorizeUrl, callback } = ssoConfiguration();
    if (request.nextUrl.origin !== callback.origin) {
      return NextResponse.json({ error: "invalid_origin" }, { status: 400, headers: SSO_RESPONSE_HEADERS });
    }
    const transaction = createSsoTransaction(request.nextUrl.searchParams.get("returnTo"));
    authorizeUrl.searchParams.set("client_id", "kedipage");
    authorizeUrl.searchParams.set("redirect_uri", callback.href);
    authorizeUrl.searchParams.set("state", transaction.state);
    authorizeUrl.searchParams.set("code_challenge", transaction.challenge);
    authorizeUrl.searchParams.set("code_challenge_method", "S256");
    // Probe without browser credentials. An unavailable authorization service
    // must leave guests on Kedi instead of redirecting them to an error page.
    try {
      const upstream = await fetch(authorizeUrl, {
        method: "HEAD", cache: "no-store", redirect: "manual", signal: AbortSignal.timeout(5_000),
      });
      if (upstream.status < 200 || upstream.status >= 400) throw new Error("SSO unavailable");
    } catch {
      const returnUrl = new URL(safeReturnPath(request.nextUrl.searchParams.get("returnTo")), callback.origin);
      returnUrl.searchParams.set("sso", "unavailable");
      return NextResponse.redirect(returnUrl, { status: 303, headers: SSO_RESPONSE_HEADERS });
    }
    const response = NextResponse.redirect(authorizeUrl, { status: 303, headers: SSO_RESPONSE_HEADERS });
    response.cookies.set(SSO_TRANSACTION_COOKIE, transaction.cookie, {
      httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "lax",
      path: "/", maxAge: SSO_TRANSACTION_TTL_SECONDS,
    });
    return response;
  } catch {
    return NextResponse.json({ error: "sso_not_configured" }, { status: 503, headers: SSO_RESPONSE_HEADERS });
  }
}
