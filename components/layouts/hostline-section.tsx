import Link from 'next/link';
import Image from 'next/image';

interface HostlineSectionProps {
  isMobile?: boolean;
}

const HostlineSection = ({ isMobile }: HostlineSectionProps) => {
  return (
    <div className={`relative flex items-center ${isMobile ? 'space-x-2' : ''}`}>
      <Link href="/" className="flex items-center" aria-label="Hotline">
        <Image
          src="https://mona.media/template/assets/images/header/hotline-panda.png"
          alt="Hotline"
          width={150}
          height={82}
          className="h-8 w-auto object-contain drop-shadow-md"
        />
      </Link>
    </div>
  );
};

export default HostlineSection;
