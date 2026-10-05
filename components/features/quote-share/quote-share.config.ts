import type { QuoteShareBrowserConfig } from "./quote-share.types";

/**
 * Deployment and branding configuration for the vendored Quote Share engine.
 * Keep project-specific values here instead of editing the engine.
 */
export const quoteShareConfig: QuoteShareBrowserConfig = {
  site: "kedi.media",
  logoDark: "https://assets.kedi.media/images/faea1e69567763e173ea-380.webp",
  logoWhite: "https://assets.kedi.media/images/521d6ee8430017434c68-380.webp",
  downloadPrefix: "kedi-quote",
  brandLabel: "KEDI",
  themes: {
    // Canvas themes follow the parent KEDI UI hierarchy:
    // navy is structural, yellow is an accent instead of a full-card fill.
    brand: {
      label: "KEDI",
      // KEDI signature gradient: navy -> blue -> yellow accent.
      // Yellow is kept at the far end so the card still reads primarily as KEDI navy.
      grad: ["#071F42", "#0D478C", "#FFC629"],
      fg: "#ffffff",
      logo: "white",
    },
    primary: {
      label: "KEDI Navy",
      bg: "#0B2D5B",
      fg: "#ffffff",
      logo: "white",
    },
    accent: {
      label: "KEDI Cream",
      bg: "#FFF3C4",
      fg: "#0B2D5B",
      logo: "dark",
    },
    dark: {
      label: "KEDI Deep Navy",
      bg: "#06172F",
      fg: "#ffffff",
      logo: "white",
    },
  },
  minLength: 12,
  maxLength: 600,
  allow: ".entry-content, .blog-large-content, article, main, [data-quote-source]",
  deny: "header, footer, nav, aside, form, button, input, textarea, .popup, .menu-extra, .breadcrumb, .wpcf7, .contact-box, [data-quote-ignore]",
};

export const quoteShareScripts = {
  qrcode: "/quote-share/vendor/qrcode.min.js",
  engine: "/quote-share/quote-share.js",
} as const;
