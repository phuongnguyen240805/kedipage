import "server-only";

export const SSO_SESSION_COOKIE = process.env.NODE_ENV === "production"
  ? "__Host-kedi-sso-session" : "kedi-sso-session";
export const SSO_RESPONSE_HEADERS = { "Cache-Control": "no-store", "Referrer-Policy": "no-referrer" };

export interface SsoIdentity {
  user: { id: number; username: string; nickname: string; avatar: string };
}

function configuredUrl(value: string | undefined): URL {
  if (!value) throw new Error("SSO is not configured");
  const url = new URL(value);
  const localHttp = process.env.NODE_ENV !== "production" && url.protocol === "http:"
    && ["localhost", "127.0.0.1", "[::1]"].includes(url.hostname);
  if ((!localHttp && url.protocol !== "https:") || url.username || url.password || url.search || url.hash) {
    throw new Error("Invalid SSO URL configuration");
  }
  return url;
}

export function ssoConfiguration() {
  const authorizeUrl = configuredUrl(process.env.SSO_LADIPAGE_AUTHORIZE_URL);
  const callback = configuredUrl(process.env.SSO_KEDIPAGE_REDIRECT_URI);
  const backend = configuredUrl(process.env.SSO_BACKEND_API_URL);
  const secret = process.env.SSO_KEDIPAGE_CLIENT_SECRET;
  if (authorizeUrl.pathname !== "/api/auth/sso/authorize" || callback.pathname !== "/api/auth/sso/callback"
    || !secret || secret.length < 32 || secret.length > 512) {
    throw new Error("Invalid SSO configuration");
  }
  return { authorizeUrl, callback, backend, secret };
}

export function identityFromPayload(result: unknown): SsoIdentity {
  if (!result || typeof result !== "object" || !("user" in result) || !result.user || typeof result.user !== "object") {
    throw new Error("Invalid SSO identity");
  }
  const user = result.user as Record<string, unknown>;
  if (!Number.isSafeInteger(user.id) || (user.id as number) <= 0
    || typeof user.username !== "string" || typeof user.nickname !== "string" || typeof user.avatar !== "string") {
    throw new Error("Invalid SSO identity");
  }
  // Pick fields explicitly so future backend changes cannot expose extra data.
  return { user: { id: user.id as number, username: user.username, nickname: user.nickname, avatar: user.avatar } };
}

export async function readSsoSession(sessionToken: string): Promise<SsoIdentity | null> {
  if (!/^[A-Za-z0-9_-]{43}$/.test(sessionToken)) return null;
  const { backend, callback, secret } = ssoConfiguration();
  const response = await fetch(`${backend.href.replace(/\/$/, "")}/sso/session`, {
    method: "POST",
    headers: { "content-type": "application/json", "x-sso-client-secret": secret },
    body: JSON.stringify({ clientId: "kedipage", redirectUri: callback.href, sessionToken }),
    cache: "no-store", redirect: "manual", signal: AbortSignal.timeout(10_000),
  });
  if (response.status === 401) return null;
  if (!response.ok) throw new Error("SSO session unavailable");
  return identityFromPayload(await response.json());
}
