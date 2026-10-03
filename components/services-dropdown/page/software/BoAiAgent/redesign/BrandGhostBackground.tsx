import Image from 'next/image';

type BrandGhostBackgroundProps = {
  /** Kept for compatibility with existing section calls; homepage background is always used. */
  src?: string;
  position?: 'left' | 'right' | 'center';
  opacity?: number;
  dark?: boolean;
  className?: string;
  imageClassName?: string;
};

/**
 * Shared KEDI ambient background based on the homepage visual system.
 *
 * The old Golden Dog watermark has intentionally been removed. Dark sections
 * reuse the homepage navy/yellow/blue treatment; light sections use the same
 * network artwork under a white wash so typography stays readable.
 *
 * `src`, `position`, and `imageClassName` remain in the props temporarily so
 * older section calls keep compiling while this background stays centralized.
 */
export default function BrandGhostBackground({
  opacity = 0.22,
  dark = false,
  className = '',
}: BrandGhostBackgroundProps) {
  const artworkOpacity = dark ? Math.max(opacity, 0.42) : Math.max(opacity, 0.2);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}
    >
      <Image
        src="/homepage/hero-background-future-network.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
        style={{ opacity: artworkOpacity }}
      />

      {dark ? (
        <>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,34,77,.92)_0%,rgba(8,34,77,.80)_34%,rgba(8,34,77,.58)_63%,rgba(8,34,77,.36)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(255,198,41,.16),transparent_32%),radial-gradient(circle_at_58%_58%,rgba(68,170,255,.14),transparent_28%)]" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-white/82" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(255,198,41,.10),transparent_30%),radial-gradient(circle_at_58%_58%,rgba(46,118,197,.08),transparent_32%)]" />
        </>
      )}
    </div>
  );
}
