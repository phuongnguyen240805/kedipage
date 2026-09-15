import { cn } from '@/lib/utils';
import Image from 'next/image';

const BrandLogo = ({
  dark = false,
  className,
}: {
  dark?: boolean;
  className?: string;
}) => {
  const logoSrc = dark
    ? '/brand/kedi-logo-navy.png'
    : '/brand/kedi-logo-reverse.png';

  return (
    <div
      className={cn(
        'relative shrink-0 aspect-[19/5]',
        className
      )}
    >
      <Image
        src={logoSrc}
        alt="Kedi.Media"
        fill
        className="object-contain object-left"
        sizes="(max-width: 1024px) 122px, 152px"
        priority
      />
    </div>
  );
};

export default BrandLogo;
