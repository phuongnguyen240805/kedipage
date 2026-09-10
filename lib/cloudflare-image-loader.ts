import type { ImageLoaderProps } from 'next/image';

// Optional: set NEXT_PUBLIC_CF_IMAGES_BASE to your site origin (e.g. https://example.com)
// If not set, the loader will fall back to the raw src (no transformation).
const getBase = () =>
  (
    process.env.NEXT_PUBLIC_CF_IMAGES_BASE ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    ''
  ).replace(/\/$/, '');

const buildTarget = (src: string, base: string) => {
  if (!src) return '';
  if (src.startsWith('http')) return src;
  const trimmed = src.startsWith('/') ? src.slice(1) : src;
  return base ? `${base}/${trimmed}` : `/${trimmed}`;
};

export default function cloudflareImageLoader({
  src,
  width,
  quality,
}: ImageLoaderProps) {
  const base = getBase();
  const target = buildTarget(src, base);
  const q = quality || 75;

  if (base) {
    // Cloudflare Images/Polish style transform via cdn-cgi/image
    return `${base}/cdn-cgi/image/width=${width},quality=${q},format=auto/${target}`;
  }

  // Fallback: return original target without transformation
  return target;
}
