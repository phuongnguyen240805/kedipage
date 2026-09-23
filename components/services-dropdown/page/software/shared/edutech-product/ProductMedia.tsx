import type { ProductImage } from './types';

type Props = ProductImage & {
  className?: string;
  loading?: 'eager' | 'lazy';
  fetchPriority?: 'high' | 'low' | 'auto';
};

export default function ProductMedia({
  kind = 'image',
  src,
  alt,
  poster,
  className,
  loading = 'lazy',
  fetchPriority = 'auto',
}: Props) {
  if (kind === 'video') {
    return (
      <video
        aria-label={alt}
        autoPlay
        className={className}
        loop
        muted
        playsInline
        poster={poster}
        preload="metadata"
      >
        <source src={src} />
      </video>
    );
  }

  return (
    <img
      alt={alt}
      className={className}
      decoding="async"
      fetchPriority={fetchPriority}
      loading={loading}
      src={src}
    />
  );
}
