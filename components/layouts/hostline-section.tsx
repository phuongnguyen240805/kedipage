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
          src="/software-clone/ai-agent/assets/kedi-cham-soc-lead.png"
          alt="Kedi AI Support"
          width={82}
          height={82}
          className="h-9 w-9 object-contain drop-shadow-md"
        />
      </Link>
    </div>
  );
};

export default HostlineSection;
