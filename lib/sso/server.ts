import "server-only";
import { ssoConfiguration, identityFromPayload, type SsoIdentity } from "./session";
export { ssoConfiguration, readSsoSession, SSO_SESSION_COOKIE, SSO_RESPONSE_HEADERS, type SsoIdentity } from "./session";
import { createHash, randomBytes, timingSafeEqual } from "node:crypto";

export const SSO_TRANSACTION_TTL_SECONDS = 300;
export const SSO_TRANSACTION_COOKIE = process.env.NODE_ENV === "production"
  ? "__Host-kedi-sso-transaction" : "kedi-sso-transaction";
interface SsoTransaction {
  state: string;
  verifier: string;
  createdAt: number;
  returnTo: string;
}

export function safeReturnPath(value: string | null | undefined): string {
  if (!value || value.length > 2048 || !value.startsWith("/") || value.startsWith("//")
    || /[\\\u0000-\u0020]/.test(value)) return "/";
  const url = new URL(value, "https://kedi.invalid");
  if (url.origin !== "https://kedi.invalid" || url.pathname.startsWith("/api/")) return "/";
  url.searchParams.delete("sso");
  const path = `${url.pathname}${url.search}${url.hash}`;
  return path.length <= 2048 ? path : "/";
}

export function createSsoTransaction(returnTo?: string | null) {
  const transaction: SsoTransaction = {
    state: randomBytes(32).toString("base64url"),
    verifier: randomBytes(32).toString("base64url"),
    createdAt: Date.now(),
    returnTo: safeReturnPath(returnTo),
  };
  return {
    state: transaction.state,
    challenge: createHash("sha256").update(transaction.verifier).digest("base64url"),
    cookie: Buffer.from(JSON.stringify(transaction)).toString("base64url"),
  };
}

export function readSsoTransaction(cookie: string | undefined, state: string): SsoTransaction | null {
  if (!cookie || cookie.length > 4096 || !/^[A-Za-z0-9_-]{43}$/.test(state)) return null;
  try {
    const transaction: SsoTransaction = JSON.parse(Buffer.from(cookie, "base64url").toString("utf8"));
    if (typeof transaction.state !== "string" || !/^[A-Za-z0-9_-]{43}$/.test(transaction.state)
      || typeof transaction.verifier !== "string" || !/^[A-Za-z0-9_-]{43}$/.test(transaction.verifier)
      || !Number.isFinite(transaction.createdAt)) return null;
    const age = Date.now() - transaction.createdAt;
    if (age < 0 || age >= SSO_TRANSACTION_TTL_SECONDS * 1000
      || !timingSafeEqual(Buffer.from(state), Buffer.from(transaction.state))) return null;
    return { ...transaction, returnTo: safeReturnPath(transaction.returnTo) };
  } catch { return null; }
}

export function readSsoVerifier(cookie: string | undefined, state: string): string | null {
  return readSsoTransaction(cookie, state)?.verifier ?? null;
}

export async function exchangeSsoCode(code: string, verifier: string): Promise<SsoIdentity & { sessionToken: string; expiresIn: number }> {
  const { backend, callback, secret } = ssoConfiguration();
  const response = await fetch(`${backend.href.replace(/\/$/, "")}/sso/exchange`, {
    method: "POST",
    headers: { "content-type": "application/json", "x-sso-client-secret": secret },
    body: JSON.stringify({ clientId: "kedipage", redirectUri: callback.href, code, codeVerifier: verifier }),
    cache: "no-store",
    redirect: "manual",
    signal: AbortSignal.timeout(10_000),
  });
  if (!response.ok) throw new Error("SSO exchange failed");
  const result: unknown = await response.json();
  const user = identityFromPayload(result).user;
  const payload = result as Record<string, unknown>;
  if (typeof payload.sessionToken !== "string" || !/^[A-Za-z0-9_-]{43}$/.test(payload.sessionToken)
    || !Number.isInteger(payload.expiresIn) || (payload.expiresIn as number) <= 0 || (payload.expiresIn as number) > 86400) {
    throw new Error("Invalid SSO session");
  }
  return { user, sessionToken: payload.sessionToken, expiresIn: payload.expiresIn as number };
}
