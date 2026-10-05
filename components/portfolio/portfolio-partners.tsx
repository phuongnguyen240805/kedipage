'use client';

import Image from 'next/image';
import FadeIn from '../ui/Fadeoad';

const logos = [
  // ... (Giữ nguyên danh sách logos của bạn)
  {
    src: 'https://assets.kedi.media/images/6c55271f0b709cb524b3-273.webp',
    alt: '1',
  },
  {
    src: 'https://assets.kedi.media/images/b6e7613a5a384d0443f4-500.webp',
    alt: '2',
  },
  {
    src: 'https://assets.kedi.media/images/57875a5c6c4bf27ef0cc-760.webp',
    alt: '3',
  },
  {
    src: 'https://assets.kedi.media/images/1656085dd6804bfe5c5f-338.webp',
    alt: '4',
  },
  {
    src: 'https://assets.kedi.media/images/a0ae9b8b87570b35c40b-273.webp',
    alt: '6',
  },
  {
    src: 'https://assets.kedi.media/images/d4eea785663ad446e69b-147.webp',
    alt: '7',
  },
  {
    src: 'https://assets.kedi.media/images/6eb5ac43fa017d2f23ee-173.webp',
    alt: '8',
  },
  {
    src: 'https://assets.kedi.media/images/a557ae43b42277ea48b2-366.webp',
    alt: '9',
  },
  {
    src: 'https://assets.kedi.media/images/193fda72e89b62c1674a-152.webp',
    alt: '10',
  },
  {
    src: 'https://assets.kedi.media/images/cff7524467b9aa812005-285.webp',
    alt: '11',
  },
  {
    src: 'https://assets.kedi.media/images/46b3e09a5b8b33ce7fb5-138.webp',
    alt: '12',
  },
  {
    src: 'https://assets.kedi.media/images/1b67b2ba014428678708-134.webp',
    alt: '13',
  },
  {
    src: 'https://assets.kedi.media/images/ef71d931b8a3b051661b-131.webp',
    alt: '14',
  },
  {
    src: 'https://assets.kedi.media/images/daecd2a43a83eff78583-165.webp',
    alt: '15',
  },
  {
    src: 'https://assets.kedi.media/images/f576a6147bec1e6a917e-334.webp',
    alt: '16',
  },
  {
    src: 'https://assets.kedi.media/images/6f14215eb8c248758050-310.webp',
    alt: '17',
  },
  {
    src: 'https://assets.kedi.media/images/7f6fb4635a1ab3f1ff02-131.webp',
    alt: '18',
  },
  {
    src: 'https://assets.kedi.media/images/9de08d7e078071b51072-317.webp',
    alt: '19',
  },
  {
    src: 'https://assets.kedi.media/images/b13fd2cdc35694fe595d-137.webp',
    alt: '20',
  },
  {
    src: 'https://assets.kedi.media/images/1b9684840b77b1e666fd-109.webp',
    alt: '21',
  },
  {
    src: 'https://assets.kedi.media/images/63c43f4621c04069ac4d-162.webp',
    alt: '22',
  },
  {
    src: 'https://assets.kedi.media/images/a21827071bde25e80974-171.webp',
    alt: '23',
  },
  {
    src: 'https://assets.kedi.media/images/21b161c813585a864879-144.webp',
    alt: '24',
  },
   {
    src: 'https://assets.kedi.media/images/a0ae9b8b87570b35c40b-273.webp',
    alt: '25',
  },
];

export default function PortfolioPartners() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 rounded-t-[80px] to-pink-100">
      {/* --- LỚP TRANG TRÍ MÂY MỜ (Background Blobs) --- */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-pink-200/60 blur-[100px] mix-blend-multiply pointer-events-none animate-pulse slow"></div>
      <div className="absolute top-[10%] right-[-20%] w-[400px] h-[400px] rounded-full bg-purple-200/50 blur-[80px] mix-blend-multiply pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[400px] rounded-full bg-pink-300/40 blur-[120px] mix-blend-overlay pointer-events-none"></div>
    
      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-5 text-start">
          <FadeIn>
        {/* Title */}
        <p className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-xl px-4 py-2 text-lg md:text-xl mb-2 shadow-sm">
          Trôi qua 8+ năm phát triển
        </p>
        <h1 className="text-gray-800 font-bold text-xl md:text-2xl mb-8 drop-shadow-sm">
          Chúng tôi đã đồng hành với hơn
        </h1>
        </FadeIn>
        {/* Số lớn + con gấu */}
        <div className=" flex flex-row justify-center items-center w-full overflow-hidden">
           <FadeIn>
          {/* Số lớn */}
          <div className="flex-shrink-0 w-1/2 max-w-[300px] md:max-w-[520px] hover:scale-105 transition-transform duration-500 ease-in-out">
            <Image
              src="https://assets.kedi.media/images/a23cee538655f786c88d-1824.webp"
              alt="12.000+ khách hàng từ Á đến Âu"
              width={520}
              height={330}
              className="w-full h-auto object-contain drop-shadow-md"
            />
          </div>
          </FadeIn>

          {/* Con gấu robot bay - ĐÃ BỎ NHẢY (animate-bounce) */}
          <div className="flex-shrink-0 w-1/2 max-w-[250px] md:max-w-[350px]">
           <FadeIn>
            <Image
              src="https://assets.kedi.media/images/cbb6ee8c53adc6782448-335.webp"
              alt="Con gấu robot bay"
              width={350}
              height={330}
              className="w-full h-auto object-contain drop-shadow-md"
            />
             </FadeIn>
          </div>
        </div>

        {/* Logos grid */}
          <FadeIn>
        <div className="grid grid-cols-5 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-6">
          {logos.map((logo, idx) => (
            <div
              key={`${logo.alt}-${idx}`}
              // Hiệu ứng kính (Glassmorphism)
              className="flex items-center justify-center p-4 
                         bg-white/60 backdrop-blur-sm border border-white/40 shadow-sm rounded-xl
                         cursor-pointer transition-all duration-300 
                         hover:bg-white/90 hover:shadow-md hover:shadow-pink-200/50 hover:-translate-y-1"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={60}
                className="object-contain max-h-[60px] opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
         </FadeIn>
      </div>
    </section>
  );
}
