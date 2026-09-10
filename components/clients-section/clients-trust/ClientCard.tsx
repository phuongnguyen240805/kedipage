'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface Client {
  id: number;
  img: string;
  title: string;
  desc: string;
  solutionLink: string;
  websiteLink: string;
}

export function ClientCard({ client }: { client: Client }) {
  return (
    <div className="bg-white rounded-lg shadow-md flex flex-col">
      <div className="relative w-full h-48 md:h-40 rounded-t-lg overflow-hidden">
        <Image
          src={client.img}
          alt={client.title}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, 33vw"
          priority
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-semibold text-gray-800 text-lg mb-2">
          {client.title}
        </h3>
        <p className="text-gray-600 text-sm flex-grow">{client.desc}</p>

        <div className="mt-4 flex gap-4">
          <Button
            className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 transition flex-grow"
            onClick={() => window.open(client.solutionLink, '_blank')}
          >
            Xem giải pháp
          </Button>

          <Button
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition flex items-center gap-2"
            onClick={() => window.open(client.websiteLink, '_blank')}
          >
            <span>Xem Website</span>
            <Image
              src="https://mona.media/template/assets/images/customer-intro/iocn-dv.png"
              alt="Link icon"
              width={16}
              height={16}
            />
          </Button>
        </div>
      </div>
    </div>
  );
}
