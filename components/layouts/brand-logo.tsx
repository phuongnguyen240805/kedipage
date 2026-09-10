import { cn } from '@/lib/utils';
import Image from 'next/image';

const BrandLogo = ({
  dark = false,
  className,
}: {
  dark?: boolean;
  className?: string;
}) => {
  // ⚡ Dùng ảnh trong public (không có /public ở path)
  const logoSrc = dark
    ? 'https://res.cloudinary.com/dzkcqktcl/image/upload/v1769418552/ChatGPT_Image_16_08_00_26_thg_1__2026-removebg-preview_g1msvy.png'
    : 'https://res.cloudinary.com/dzkcqktcl/image/upload/v1769418552/ChatGPT_Image_16_08_00_26_thg_1__2026-removebg-preview_g1msvy.png';

  return (
    <div className={cn(className, 'flex items-center gap-2')}>
      <Image
        src={logoSrc}
        alt="Brand Logo"
        className="object-contain"
        width={380}
        height={100}
        style={{ height: 'auto' }}
        priority
        sizes="(max-width: 768px) 200px, (max-width: 1200px) 300px, 380px"
        placeholder="empty"
      />
    </div>
  );
};

export default BrandLogo;
