import { NextRequest, NextResponse } from "next/server";
import {
  exchangeSsoCode, readSsoTransaction, ssoConfiguration,
  SSO_RESPONSE_HEADERS, SSO_TRANSACTION_COOKIE, SSO_SESSION_COOKIE,
} from "@/lib/sso/server";

export const dynamic = "force-dynamic";

function reply(body: unknown, status: number) {
  const response = NextResponse.json(body, { status, headers: SSO_RESPONSE_HEADERS });
  response.cookies.set(SSO_TRANSACTION_COOKIE, "", {
    httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "lax", path: "/", maxAge: 0,
  });
  return response;
}

function returnToPage(request: NextRequest, path: string, outcome?: string) {
  const target = new URL(path, request.nextUrl.origin);
  if (outcome) target.searchParams.set("sso", outcome);
  const response = NextResponse.redirect(target, { status: 303, headers: SSO_RESPONSE_HEADERS });
  response.cookies.set(SSO_TRANSACTION_COOKIE, "", {
    httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "lax", path: "/", maxAge: 0,
  });
  return response;
}

export async function GET(request: NextRequest) {
  try {
    if (request.nextUrl.origin !== ssoConfiguration().callback.origin) return reply({ error: "invalid_origin" }, 400);
  } catch { return reply({ error: "sso_not_configured" }, 503); }

  const query = request.nextUrl.searchParams;
  const state = query.get("state") ?? "";
  const transaction = readSsoTransaction(request.cookies.get(SSO_TRANSACTION_COOKIE)?.value, state);
  if (query.getAll("state").length !== 1 || !transaction) return reply({ error: "invalid_state" }, 400);

  const error = query.get("error");
  if (error) {
    if (query.getAll("error").length !== 1 || query.has("code")) return reply({ error: "invalid_request" }, 400);
    return returnToPage(request, transaction.returnTo, error === "login_required" ? "guest" : "unavailable");
  }
  const code = query.get("code") ?? "";
  if (query.getAll("code").length !== 1 || !/^[A-Za-z0-9_-]{43}$/.test(code)) return reply({ error: "invalid_code" }, 400);
  try {
    const session = await exchangeSsoCode(code, transaction.verifier);
    const response = returnToPage(request, transaction.returnTo);
    response.cookies.set(SSO_SESSION_COOKIE, session.sessionToken, {
      httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "lax", path: "/", maxAge: session.expiresIn,
    });
    return response;
  } catch { return returnToPage(request, transaction.returnTo, "unavailable"); }
}
