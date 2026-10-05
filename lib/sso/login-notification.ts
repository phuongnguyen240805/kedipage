"use client";

const LOGIN_MESSAGE = "ladipage:login-complete";
export function acceptLadipageLogin(event: MessageEvent, ladipageUrl: string | undefined, source: Window | null): boolean {
  if (!ladipageUrl || !source || event.source !== source
    || event.origin !== new URL(ladipageUrl).origin
    || !event.data || event.data.type !== LOGIN_MESSAGE
    || typeof event.data.loginId !== "string" || !/^[a-f0-9-]{36}$/i.test(event.data.loginId)) return false;
  return true;
}
