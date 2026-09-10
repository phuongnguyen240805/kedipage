"use client";

import FadeIn from "@/components/ui/Fadeoad";
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  desc: string;
  date: string;
}

export default function StoryCard({ src, alt, desc, date }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-md flex flex-col overflow-hidden">
      <FadeIn>
        <div className="relative w-full h-[300px]">
          <Image
            src={src}
            alt={alt}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-t-lg"
            priority
          />
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <p className="text-gray-700 text-sm flex-grow">{desc}</p>
          <div className="mt-4 text-right text-xs text-gray-400 italic border-t border-gray-200 pt-2">
            {date}
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
