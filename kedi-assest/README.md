# kedi-assest

Image CDN for kedi.media using Cloudflare Workers Static Assets on Workers Free.
Production hostname: **https://assets.kedi.media**. Worker: **kedi-assest**.
No R2 and no runtime Cloudflare Images transformations are required.

## Files

- `source/local/`: all original images moved out of the website's `public/`.
- `source/remote/`: validated downloaded originals, keyed by the source URL's SHA-256.
- `remote-inventory.json`: remote URL inventory and source file references.
- `manifest.json`: original URL → CDN URL, intrinsic dimensions and prebuilt sizes.
- `unavailable-images.json`: source URLs that could not be fetched. Their references
  are preserved instead of pointing at missing CDN files.
- `dist/`: generated static files; ignored by Git, deployed separately.
- `wrangler.jsonc`: assets-only Worker and custom domain configuration.

## Commands (run from the repository root)

```sh
pnpm assets:sync     # discover/download new remote images and migrate references
pnpm assets:prepare  # rebuild using cached originals, without external fetches
pnpm assets:deploy   # validate and deploy the image CDN
pnpm build:cf        # build the website with images excluded from its public assets
pnpm run deploy     # deploy the CDN first, then build and deploy the website
```

Add new images to `public/` and use their normal `/folder/image.png` paths initially.
The preparation step builds variants, rewrites references and moves originals into
`source/local/`. Existing originals can be edited in `source/local/`.
Use `assets:sync` when adding external URLs; `assets:prepare` does not download them.

Raster images use quality-82 WebP at prebuilt widths up to 1920 pixels. SVG, ICO
and animations are preserved. The Next.js custom loader picks a prebuilt width
for `srcset`; it never calls `/_next/image` or `/cdn-cgi/image`. Quality props do
not trigger additional variants. CSS, HTML and raw image references use the
largest prebuilt size; generated filenames include a source content hash.
Image originals remain available on the CDN at their old paths for computed URLs.

`_headers` enables CORS, one-day browser caching on original paths and one-year
immutable caching on content-addressed image paths. Requests are handled directly
by Static Assets; there is no application Worker script and no `run_worker_first`.

Before upload, checks enforce at most 20,000 files and 25 MiB per file. Old generated
files that are no longer referenced are removed locally; deploy the CDN before the
web so newly referenced images already exist. Preserve previous build artifacts
when rolling back: rolling back Worker code alone does not restore asset sources.

## Rollback

The website version before this migration was
`d8057d30-fd32-4c00-ae5e-91587441487c`. Keep the CDN online when rolling back the web.
Local originals are retained in `source/local/`; no original image was discarded.
Full source rollback must also restore the website config, loader and URL references.

Cloudflare docs: [Static Assets billing](https://developers.cloudflare.com/workers/static-assets/billing-and-limitations/),
[Free plan limits](https://developers.cloudflare.com/workers/platform/limits/).
