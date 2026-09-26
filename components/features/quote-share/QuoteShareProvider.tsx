"use client";

import { useEffect } from "react";
import { quoteShareConfig, quoteShareScripts } from "./quote-share.config";
import type { QuoteShareWindow } from "./quote-share.types";

const QR_SCRIPT_ID = "kedi-quote-share-qrcode";
const ENGINE_SCRIPT_ID = "kedi-quote-share-engine";

function ensureScript(id: string, src: string, ready: () => boolean): Promise<void> {
  if (ready()) return Promise.resolve();

  const existing = document.getElementById(id) as HTMLScriptElement | null;
  if (existing) {
    if (existing.dataset.loaded === "true" || ready()) return Promise.resolve();

    return new Promise((resolve, reject) => {
      const onLoad = () => {
        existing.dataset.loaded = "true";
        resolve();
      };
      const onError = () => reject(new Error(`Failed to load ${src}`));
      existing.addEventListener("load", onLoad, { once: true });
      existing.addEventListener("error", onError, { once: true });
    });
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.id = id;
    script.src = src;
    script.async = false;
    script.dataset.quoteShare = "kedi";
    script.addEventListener(
      "load",
      () => {
        script.dataset.loaded = "true";
        resolve();
      },
      { once: true },
    );
    script.addEventListener(
      "error",
      () => reject(new Error(`Failed to load ${src}`)),
      { once: true },
    );
    document.head.appendChild(script);
  });
}

/**
 * Global KEDI Quote Share bootstrapper.
 *
 * Mount once in app/layout.tsx. The MONA engine itself owns selection events,
 * modal creation and canvas rendering; this component only provides KEDI
 * branding and deterministic script load order.
 */
export default function QuoteShareProvider() {
  useEffect(() => {
    const w = window as QuoteShareWindow;

    w.MONA_QUOTE_CFG = quoteShareConfig;

    let cancelled = false;

    const boot = async () => {
      try {
        await ensureScript(QR_SCRIPT_ID, quoteShareScripts.qrcode, () => Boolean(w.qrcode));
        if (cancelled) return;

        await ensureScript(
          ENGINE_SCRIPT_ID,
          quoteShareScripts.engine,
          () => Boolean(w.__monaQuoteInit),
        );
      } catch (error) {
        if (process.env.NODE_ENV !== "production") {
          console.error("[KEDI Quote Share] bootstrap failed", error);
        }
      }
    };

    void boot();

    return () => {
      // The provider lives at RootLayout scope, so the engine is intentionally
      // retained for the whole SPA lifetime. The upstream engine guards itself
      // with window.__monaQuoteInit to prevent duplicate listeners during HMR.
      cancelled = true;
    };
  }, []);

  return null;
}
