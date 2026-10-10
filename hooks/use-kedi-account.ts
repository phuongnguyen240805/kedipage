"use client";

import { useEffect, useRef, useState } from "react";
import type { SsoIdentity } from "@/lib/sso/server";
import { acceptLadipageLogin } from "@/lib/sso/login-notification";

export interface KediAccount {
  user: SsoIdentity["user"] | null;
  loading: boolean;
  enabled: boolean;
  unavailable: boolean;
  ladipageUrl?: string;
  profileUrl?: string;
}

export function useKediAccount(): KediAccount {
  const [account, setAccount] = useState<KediAccount>({ user: null, loading: true, enabled: false, unavailable: false });
  const attempted = useRef(false);

  useEffect(() => {
    const currentUrl = new URL(window.location.href);
    let outcome = currentUrl.searchParams.get("sso");
    if (outcome) {
      attempted.current = true;
      currentUrl.searchParams.delete("sso");
      window.history.replaceState(window.history.state, "", currentUrl);
    }
    let disposed = false;
    let pending = false;
    let recheckOnCompletion = false;
    let ladipageUrl: string | undefined;
    let loginBridge: HTMLIFrameElement | undefined;
    let lastLoginId: string | undefined;
    const controller = new AbortController();

    const refresh = async (allowSso: boolean) => {
      if (disposed) return;
      if (pending) {
        if (allowSso) recheckOnCompletion = true;
        return;
      }
      pending = true;
      try {
        const response = await fetch("/api/auth/sso/session", {
          credentials: "same-origin", cache: "no-store", signal: controller.signal,
        });
        const snapshot = await response.json();
        if (disposed) return;
        ladipageUrl = snapshot.ladipageUrl;
        if (snapshot.enabled && ladipageUrl && !loginBridge) {
          loginBridge = document.createElement("iframe");
          loginBridge.src = new URL("/api/auth/sso/login-sync", ladipageUrl).href;
          loginBridge.hidden = true;
          loginBridge.title = "Ladipage login sync";
          loginBridge.referrerPolicy = "no-referrer";
          document.body.appendChild(loginBridge);
        }
        const unavailable = !response.ok || snapshot.unavailable === true || (!snapshot.user && outcome === "unavailable");
        setAccount({ ...snapshot, user: unavailable ? null : snapshot.user, loading: false, unavailable });
        if (allowSso && !unavailable && snapshot.enabled && !snapshot.user && !attempted.current) {
          attempted.current = true;
          const returnTo = `${window.location.pathname}${window.location.search}${window.location.hash}`;
          window.location.replace(`/api/auth/sso/start?returnTo=${encodeURIComponent(returnTo)}`);
        }
      } catch {
        if (!disposed) setAccount(previous => ({ ...previous, user: null, loading: false, unavailable: true }));
      } finally {
        pending = false;
        if (recheckOnCompletion && !disposed) {
          recheckOnCompletion = false;
          void refresh(true);
        }
      }
    };
    // Opening a public page only checks the existing Kedi session. Start a
    // cross-site handoff after a Ladipage login signal or an actual tab return.
    void refresh(false);
    const onLogin = (event: MessageEvent) => {
      if (!acceptLadipageLogin(event, ladipageUrl, loginBridge?.contentWindow ?? null)
        || event.data.loginId === lastLoginId) return;
      lastLoginId = event.data.loginId;
      // A new authorization handoff also replaces any previous account's SSO
      // cookie. Its callback reloads this page with the verified new identity.
      const returnTo = `${window.location.pathname}${window.location.search}${window.location.hash}`;
      window.location.replace(`/api/auth/sso/start?returnTo=${encodeURIComponent(returnTo)}`);
    };
    let wasHidden = document.visibilityState === "hidden";
    const onVisibilityChange = () => {
      if (document.visibilityState !== "visible") {
        wasHidden = true;
        return;
      }
      if (!wasHidden) return;
      wasHidden = false;
      // Cross-site browsers can partition the bridge's storage. A return from
      // the Ladipage tab must therefore allow a fresh authorization handoff.
      attempted.current = false;
      outcome = null;
      void refresh(true);
    };
    window.addEventListener("message", onLogin);
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      disposed = true;
      controller.abort();
      loginBridge?.remove();
      window.removeEventListener("message", onLogin);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);
  return account;
}
