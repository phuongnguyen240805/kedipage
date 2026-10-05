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
    ? 'https://assets.kedi.media/images/faea1e69567763e173ea-380.webp'
    : 'https://assets.kedi.media/images/521d6ee8430017434c68-380.webp';

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
