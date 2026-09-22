'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Service } from './datas/services-data';
import { TFunction } from 'i18next';
import { cn } from "@/lib/utils";

interface ServiceItemProps {
  service: Service;
  index: number;
  layout: string;
  noContainer?: boolean;
  t?: TFunction;
  onNavigate?: () => void;
}

const ServiceItem = ({
  service,
  index,
  layout,
  t,
  onNavigate,
}: ServiceItemProps) => {
  const href = service.href ? (service.href.startsWith('/') ? service.href : `/${service.href}`) : '/';

  const handleItemClick = () => {
    if (onNavigate) onNavigate();
    const escEvent = new KeyboardEvent('keydown', {
      key: 'Escape',
      bubbles: true,
      cancelable: true,
    });
    document.dispatchEvent(escEvent);
    document.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
  };

  const translate = (key: string, fallback?: string) => {
    try {
      return t ? t(key) : (fallback ?? key);
    } catch {
      return fallback ?? key;
    }
  };

  let title: string;
  if (layout === 'banner' || service.layoutType === 'banner') {
    title = translate(service.titleKey ?? '', service.title ?? service.titleKey ?? '');
  } else if (service.titleKey) {
    title = translate(service.titleKey, service.title ?? service.titleKey);
  } else {
    title = service.title ?? '';
  }
  const description = service.descriptionKey ? translate(service.descriptionKey, service.description) : service.description;

  const renderImage = (width: number, height: number, alt: string) => {
    if (service.imageUrl || service.cloudinaryId) {
      const src = service.imageUrl || `https://res.cloudinary.com/dptsqgnaj/image/upload/c_fill,g_center,w_${width},h_${height},f_auto,q_auto/${service.cloudinaryId}`;
      return (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      );
    }
    return <div className="w-full h-full flex items-center justify-center text-[clamp(18px,2vw,32px)] font-black tracking-tight bg-accent/20 text-primary">{service.icon || title.slice(0, 3).toUpperCase()}</div>;
  };

  // Class tiêu đề dùng clamp để chữ tự to ra khi màn hình rộng
  const titleStyles = "font-bold text-card-foreground group-hover:text-primary transition-colors leading-tight";

  // --- Layout Compact ---
  if (layout === 'compact-list' || service.layoutType === 'compact-list') {
    return (
      <Link href={href} onClick={handleItemClick} className="group block w-full">
        <div className="flex items-center space-x-[0.8vw] p-[0.4vw] rounded-lg hover:bg-white/5 transition-all">
          <div className="w-[clamp(18px,1.2vw,24px)] h-[clamp(18px,1.2vw,24px)] flex-shrink-0 flex items-center justify-center rounded text-primary">
            {service.icon || '•'}
          </div>
          <div className="flex-1 min-w-0">
            {service.premium && (
              <span className="block text-[clamp(7px,0.5vw,9px)] font-black text-yellow-500 uppercase mb-0.5">Premium</span>
            )}
            <h4 className={cn(titleStyles, "text-[clamp(12px,0.9vw,15px)] truncate")}>{title}</h4>
          </div>
        </div>
      </Link>
    );
  }

  // --- Layout Card Image Top ---
  if (layout === 'card-image-top' || service.layoutType === 'card-image-top') {
    return (
      <Link href={href} onClick={handleItemClick} className="group block h-full w-full">
        <div className="relative h-full rounded-xl overflow-hidden bg-white/5 transition-all">
          <div className="aspect-[16/10] relative overflow-hidden">
            {renderImage(400, 250, title)}
          </div>
          <div className="p-[1vw]">
            <h3 className={cn(titleStyles, "text-[clamp(14px,1.1vw,18px)] mb-[0.4vw]")}>{title}</h3>
            <p className="text-[clamp(11px,0.8vw,13px)] text-muted-foreground line-clamp-2 leading-relaxed opacity-70">
              {description}
            </p>
          </div>
        </div>
      </Link>
    );
  }

  // --- Layout Horizontal (Mặc định) ---
  return (
    <Link href={href} onClick={handleItemClick} className="group block w-full">
      <div className="flex flex-row items-center gap-[1vw] p-[0.6vw] rounded-xl transition-all ">
        <div className="relative w-[clamp(70px,7vw,110px)] aspect-[4/3] flex-shrink-0 rounded-xl overflow-hidden shadow-inner">
          {renderImage(160, 120, title)}
          {index === 0 && (
            <div className="absolute top-0 left-0 z-10 bg-orange-600 text-[clamp(7px,0.5vw,9px)] text-white px-1.5 py-0.5 rounded-br-md font-black uppercase">
              TỐI ƯU
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className={cn(titleStyles, "text-[clamp(13px,1vw,16px)] mb-[0.3vw]")}>{title}</h3>
          <p className="text-[clamp(10px,0.8vw,12px)] text-muted-foreground line-clamp-2 leading-snug opacity-60">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ServiceItem;