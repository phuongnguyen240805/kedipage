import type { ImageLoaderProps } from 'next/image';

/**
 * Keep this file only as a fallback helper for raw <img> tags.
 * next.config no longer uses a custom loader: production Workers
 * optimize via /_next/image + wrangler [images] binding = "IMAGES".
 *
 * /cdn-cgi/image does not reach the Worker on *.workers.dev, so that
 * path cannot resize images for this deploy.
 */
const PASSTHROUGH = /\.(svg)(\?|$)/i;

export function cfSrc(src: string, width = 1080, quality = 75): string {
  if (!src) return src;
  if (
    src.startsWith('data:') ||
    src.startsWith('blob:') ||
    PASSTHROUGH.test(src)
  ) {
    return src;
  }
  return `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality}`;
}

export default function cloudflareImageLoader({
  src,
  width,
  quality,
}: ImageLoaderProps) {
  if (process.env.NODE_ENV !== 'production') {
    return src;
  }
  return cfSrc(src, width, quality || 75);
}
