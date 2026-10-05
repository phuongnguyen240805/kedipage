import type { ImageLoaderProps } from 'next/image';
import variants from './kedi-assets-variants.json';
import localAssets from './kedi-assets-local.json';

const sizesByHash = variants as Record<string, number[]>;
const sources = localAssets as Record<string, string>;
const origin = 'https://assets.kedi.media';

/** Select a prebuilt CDN image; no /_next/image or paid image transformation. */
export function cfSrc(src: string, width = 1080, _quality = 82): string {
  if (!src || src.startsWith('data:') || src.startsWith('blob:')) return src;
  const localPath = src.startsWith(origin + '/') ? src.slice(origin.length) : src;
  const resolved = sources[localPath] || src;
  const match = resolved.match(/^https:\/\/assets\.kedi\.media\/images\/([a-f0-9]+)-\d+\.webp(?:[?#].*)?$/);
  if (!match) return resolved;
  const sizes = sizesByHash[match[1]];
  if (!sizes?.length) return resolved;
  const selected = sizes.find(size => size >= width) ?? sizes[sizes.length - 1];
  return `${origin}/images/${match[1]}-${selected}.webp`;
}

export default function cloudflareImageLoader({ src, width, quality }: ImageLoaderProps) {
  return cfSrc(src, width, quality);
}
