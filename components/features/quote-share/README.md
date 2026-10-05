# KEDI Quote Share

Global text-selection-to-image sharing feature integrated from the MONA Quote Share implementation.

## Ownership boundaries

- `public/quote-share/vendor/qrcode.min.js`: vendored QR runtime.
- `components/features/quote-share/upstream/quote-share.mona.js`: exact upstream MONA engine retained as a diff reference.
- `public/quote-share/quote-share.js`: KEDI runtime fork with a minimal integration patch: config-driven selection limits/selectors/brand label/download prefix, plus natural-aspect-ratio logo rendering.
- `styles/quote-share.css`: base selection-button and modal CSS with the KEDI namespace.
- `styles/quote-share.override.css`: KEDI-only compatibility rules.
- `quote-share.config.ts`: KEDI branding and asset paths.
- `QuoteShareProvider.tsx`: lifecycle + deterministic script order.

## Runtime

`QuoteShareProvider` is mounted once from `app/layout.tsx`.

The engine activates when text selection occurs inside the configured content selectors (`article`, `main`, `.entry-content`, `.blog-large-content`, or `[data-quote-source]`) and ignores navigation, forms, buttons and other denied UI.

## Updating upstream

When replacing the MONA engine/CSS, compare against `upstream/quote-share.mona.js` first. Keep KEDI-specific changes in config/override files. Re-apply only the documented config hooks and natural-aspect-ratio logo rendering if a new upstream engine is imported.

## KEDI theme palette

The solid canvas themes use the KEDI.Media palette and semantic theme ids:

- `primary` -> KEDI Navy `#0B2D5B`
- `accent` -> KEDI Cream `#FFF3C4`
- `dark` -> KEDI Deep Navy `#06172F`

The default brand gradient is also synchronized to `#071F42 -> #0D478C -> #FFC629`.
Edit only `quote-share.config.ts` for future brand-color changes; do not edit the
Canvas engine or the vendored MONA reference.

### KEDI visual hierarchy

The modal intentionally follows the parent site's visual hierarchy: Navy is the structural color, Yellow is reserved for active/CTA/focus states, and the body uses the same soft neutral surfaces as the KEDI mega-menu. Canvas themes avoid full-surface brand yellow; the warm option uses a restrained yellow tint instead.

### KEDI visual tuning (gradient/header)

- First quote background uses the KEDI navy -> blue -> yellow signature gradient.
- The modal header has no standalone fill; it inherits the same neutral surface as the dialog body.
- Yellow remains an accent for focus/CTA rather than a full modal surface.

## Browser integration

The runtime reads `window.KEDI_QUOTE_CFG` and guards initialization with
`window.__kediQuoteInit`. Its DOM classes, CSS variables and font marker use
the `kedi-quote-` namespace. Embedded-page styles use the same namespace.

The upstream reference and its attribution remain archived for provenance;
they are not loaded by the application. Runtime defaults use KEDI assets,
labels and colors even when no config is supplied.

## Regression checks

Run `rtk test node scripts/verify-quote-share.cjs` for iframe lifecycle, message
protocol and bootstrap checks. The iframe initializes both through `onLoad` and
through an effect when its SSR document finished loading before hydration.
Measurements write styles only when needed and allow the frame to shrink.

Quote controls use `data-glass="none"` so global glass styles cannot replace
theme backgrounds or selection rings. The iframe bridge uses `kedi-blog-frame`
as its source and `kedi-blog-frame-height` for height updates.

For saved browser comparison data, run
`rtk test node scripts/compare-quote-ui.cjs`. Its input is the before/after
captures in `reports/quote-ui/quote-matrix.json`; capture fresh data when the
layout or configuration changes. These captures are local QA artifacts and are
not shipped with the site.
