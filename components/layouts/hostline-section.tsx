import Link from 'next/link';
import Image from 'next/image';

interface HostlineSectionProps {
  isMobile?: boolean;
}

const HostlineSection = ({ isMobile }: HostlineSectionProps) => {
  return (
    <div
      className={`relative flex items-center ${
        isMobile ? 'space-x-2' : 'space-x-4'
      }`}
    >
      {/* Mask Group - Background Image */}
      <Link href="/" className="z-10">
        <Image
          src="/assets/hotline-panda.png"
          alt="Mask Group"
          width={120}
          height={35}
          className="h-8 lg:h-12 w-auto dark:hidden"
        />
      </Link>

      {/* Hotline Panda - Positioned below header */}
      <Link href="/" className="">
        <Image
          src="https://mona.media/template/assets/images/header/hotline-panda.png"
          alt="Hotline panda"
          width={150}
          height={82}
          className="relative h-12 lg:h-12 w-auto dark:hidden drop-shadow-lg"
        />
      </Link>
    </div>
  );
};

export default HostlineSection;
