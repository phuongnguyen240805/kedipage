'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const images = [
  'https://res.cloudinary.com/dzkcqktcl/image/upload/v1765198321/bundle-package-02_kvawvc.jpg',
  'https://res.cloudinary.com/dzkcqktcl/image/upload/v1765198321/bundle-package-02_kvawvc.jpg',
  'https://res.cloudinary.com/dzkcqktcl/image/upload/v1765198321/bundle-package-02_kvawvc.jpg',
  'https://res.cloudinary.com/dzkcqktcl/image/upload/v1765198321/bundle-package-02_kvawvc.jpg',
  'https://res.cloudinary.com/dzkcqktcl/image/upload/v1765198321/bundle-package-02_kvawvc.jpg',
  'https://res.cloudinary.com/dzkcqktcl/image/upload/v1765198321/bundle-package-02_kvawvc.jpg',
  'https://res.cloudinary.com/dzkcqktcl/image/upload/v1765198321/bundle-package-02_kvawvc.jpg',
  'https://res.cloudinary.com/dzkcqktcl/image/upload/v1765198321/bundle-package-02_kvawvc.jpg',
  'https://res.cloudinary.com/dzkcqktcl/image/upload/v1765198321/bundle-package-02_kvawvc.jpg',
  'https://res.cloudinary.com/dzkcqktcl/image/upload/v1765198321/bundle-package-02_kvawvc.jpg',
  'https://res.cloudinary.com/dzkcqktcl/image/upload/v1765198321/bundle-package-02_kvawvc.jpg',
  'https://res.cloudinary.com/dzkcqktcl/image/upload/v1765198321/bundle-package-02_kvawvc.jpg',
];

type ColumnProps = {
  images: string[];
  y?: any; // optional on mobile
  isMobile?: boolean;
};

function Column({ images, y, isMobile = false }: ColumnProps) {
  if (isMobile) {
    return (
      <div className="w-full flex flex-col gap-[4vw] px-[4vw]">
        {images.map((src, i) => (
          <div
            key={i}
            className="relative w-full aspect-[4/5] rounded-[4vw] overflow-hidden"
          >
            <Image
              className="object-cover"
              src={src.trim()}
              alt={`project ${i}`}
              fill
              sizes="100vw"
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <motion.div
      className="relative h-full w-[25%] min-w-[250px] flex flex-col gap-[2vw] odd:top-[-45%] even:top-[-95%] last:top-[-75%]"
      style={{ y }}
    >
      {images.map((src, i) => (
        <div
          key={i}
          className="h-full w-full relative rounded-[1vw] overflow-hidden"
        >
          <Image
            className="object-cover"
            src={src.trim()}
            alt={`project ${i}`}
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        </div>
      ))}
    </motion.div>
  );
}

export default function Parallax() {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const resize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setDimension({ width, height });
      setIsMobile(width < 768); // mobile breakpoint
    };

    window.addEventListener('resize', resize);
    resize(); // init

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  // Chỉ tính toán transforms nếu không phải mobile
  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start'],
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  // Chuẩn bị dữ liệu cột
  const col1 = [images[0], images[1], images[2]];
  const col2 = [images[3], images[4], images[5]];
  const col3 = [images[6], images[7], images[8]];
  const col4 = [images[9], images[10], images[11]];

  return (
    <main className="mt-[100px] w-full">
      <div
        ref={gallery}
        className={`relative ${
          isMobile
            ? 'h-auto py-[50px] bg-[#2d2d2d]'
            : 'h-[175vh] flex gap-[2vw] p-[2vw]'
        } overflow-hidden`}
      >
        {isMobile ? (
          <Column isMobile images={[...col1, ...col2, ...col3, ...col4]} />
        ) : (
          <>
            <Column images={col1} y={y} />
            <Column images={col2} y={y2} />
            <Column images={col3} y={y3} />
            <Column images={col4} y={y4} />
          </>
        )}
      </div>
    </main>
  );
}
