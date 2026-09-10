'use client';

import Image from 'next/image';
import FadeIn from '../ui/Fadeoad';

const logos = [
  // ... (Giữ nguyên danh sách logos của bạn)
  {
    src: 'https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765193968/lc34_orfuyx.png',
    alt: '1',
  },
  {
    src: 'https://mona.media/wp-content/uploads/2024/02/lc13.png',
    alt: '2',
  },
  {
    src: 'https://mona.media/wp-content/uploads/2024/02/lc1.png',
    alt: '3',
  },
  {
    src: 'https://mona.media/wp-content/uploads/2024/02/lc14.png',
    alt: '4',
  },
  {
    src: 'https://mona.media/wp-content/uploads/2024/02/lc34.png',
    alt: '6',
  },
  {
    src: 'https://mona.media/wp-content/uploads/2024/02/lc16.png',
    alt: '7',
  },
  {
    src: 'https://mona.media/wp-content/uploads/2024/02/lc17.png',
    alt: '8',
  },
  {
    src: 'https://mona.media/wp-content/uploads/2024/02/lc18.png',
    alt: '9',
  },
  {
    src: 'https://mona.media/wp-content/uploads/2024/02/lc19.png',
    alt: '10',
  },
  {
    src: 'https://mona.media/wp-content/uploads/2024/02/lc20.png',
    alt: '11',
  },
  {
    src: 'https://mona.media/wp-content/uploads/2024/02/lc21.png',
    alt: '12',
  },
  {
    src: 'https://mona.media/wp-content/uploads/2024/02/lc22.png',
    alt: '13',
  },
  {
    src: 'https://mona.media/wp-content/uploads/2024/02/lc23.png',
    alt: '14',
  },
  {
    src: 'https://mona.media/wp-content/uploads/2024/02/lc24.png',
    alt: '15',
  },
  {
    src: 'https://mona.media/wp-content/uploads/2024/02/lc25.png',
    alt: '16',
  },
  {
    src: 'https://mona.media/wp-content/uploads/2024/02/lc26.png',
    alt: '17',
  },
  {
    src: 'https://mona.media/wp-content/uploads/2024/02/lc27.png',
    alt: '18',
  },
  {
    src: 'https://mona.media/wp-content/uploads/2024/02/lc28.png',
    alt: '19',
  },
  {
    src: 'https://mona.media/wp-content/uploads/2024/02/lc29.png',
    alt: '20',
  },
  {
    src: 'https://mona.media/wp-content/uploads/2024/02/lc30.png',
    alt: '21',
  },
  {
    src: 'https://mona.media/wp-content/uploads/2024/02/lc31.png',
    alt: '22',
  },
  {
    src: 'https://mona.media/wp-content/uploads/2024/02/lc32.png',
    alt: '23',
  },
  {
    src: 'https://mona.media/wp-content/uploads/2024/02/lc33.png',
    alt: '24',
  },
   {
    src: 'https://mona.media/wp-content/uploads/2024/02/lc34.png',
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
              src="https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765193847/counter-12k-customer_zb8io5.png"
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
              src="https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765193848/counter-bear-deco_fbdeay.png"
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
