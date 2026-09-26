# KEDI Quote Share

Global text-selection-to-image sharing feature integrated from the MONA Quote Share implementation.

## Ownership boundaries

- `public/quote-share/vendor/qrcode.min.js`: vendored QR runtime.
- `components/features/quote-share/upstream/quote-share.mona.js`: exact upstream MONA engine retained as a diff reference.
- `public/quote-share/quote-share.js`: KEDI runtime fork with a minimal integration patch: config-driven selection limits/selectors/brand label/download prefix, plus natural-aspect-ratio logo rendering.
- `styles/quote-share.css`: upstream MONA modal/pill CSS.
- `styles/quote-share.override.css`: KEDI-only compatibility rules.
- `quote-share.config.ts`: KEDI branding and asset paths.
- `QuoteShareProvider.tsx`: lifecycle + deterministic script order.

## Runtime

`QuoteShareProvider` is mounted once from `app/layout.tsx`.

The engine activates when text selection occurs inside MONA's allowed content selectors (`article`, `main`, `.mona-content`, `.entry-content`, `.blog-large-content`, or `[data-quote-source]`) and ignores navigation, forms, buttons and other denied UI.

## Updating upstream

When replacing the MONA engine/CSS, compare against `upstream/quote-share.mona.js` first. Keep KEDI-specific changes in config/override files. Re-apply only the documented config hooks and natural-aspect-ratio logo rendering if a new upstream engine is imported.

## KEDI theme palette

The three solid MONA swatches are mapped to the parent KEDI.Media palette while
keeping the original theme ids and interaction behavior:

- `tim` -> KEDI Navy `#0B2D5B`
- `cam` -> KEDI Yellow `#FFC629`
- `den` -> Deep KEDI Navy `#061B37`

The default brand gradient is also synchronized to `#0B2D5B -> #FFC629`.
Edit only `quote-share.config.ts` for future brand-color changes; do not edit the
Canvas engine or the vendored MONA reference.

### KEDI visual hierarchy

The modal intentionally follows the parent site's visual hierarchy: Navy is the structural color, Yellow is reserved for active/CTA/focus states, and the body uses the same soft neutral surfaces as the KEDI mega-menu. Canvas themes avoid full-surface brand yellow; the warm option uses a restrained yellow tint instead.

### KEDI visual tuning (gradient/header)

- First quote background uses the KEDI navy -> blue -> yellow signature gradient.
- The modal header has no standalone fill; it inherits the same neutral surface as the dialog body.
- Yellow remains an accent for focus/CTA rather than a full modal surface.
