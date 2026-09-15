'use client';
import React from 'react';
import Image from 'next/image';
import FadeIn from "@/components/ui/Fadeoad"; // Giả định path FadeIn của bạn

export default function ClientsGetCloseSection() {
  const youtubeVideoId = 'czmj2NNaPJI';
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeVideoId}`;

  return (
    <section className="relative w-full bg-[#5f0099] overflow-hidden pt-20">
      {/* Background hình mây */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-0">
        <Image
          src="https://res.cloudinary.com/dzkcqktcl/image/upload/v1765203361/clound_hon5cw.png"
          alt="background cloud"
          width={1920}
          height={400}
          priority
          className="w-full h-auto opacity-80"
          unoptimized
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 pt-32 pb-10 text-center text-white font-sans">
        
        {/* 2 hình người - Đưa ra ngoài container nội dung để không bị vỡ layout khi FadeIn */}
        <div className="absolute bottom-0 left-0 w-[20%] min-w-[150px] z-10 hidden lg:block">
          <FadeIn>
            <Image
              src="https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765188469/mona-journey-person-left_t7wmbz.png"
              alt="Người trái"
              width={400}
              height={600}
              className="object-contain"
            />
          </FadeIn>
        </div>

        <div className="absolute bottom-0 right-0 w-[20%] min-w-[150px] z-10 hidden lg:block">
          <FadeIn>
            <Image
              src="https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765188640/mona-journey-person-right_xnay9v.png"
              alt="Người phải"
              width={400}
              height={600}
              className="object-contain"
            />
          </FadeIn>
        </div>

        {/* Nội dung chính */}
        <div className="relative z-20 max-w-[800px] mx-auto">
          <FadeIn>
            <h3 className="inline-block bg-[#ff2b6a] px-6 py-2 rounded-full font-bold mb-6 text-sm md:text-base shadow-lg">
              GET CLOSE - MAKE FRIEND - DO BUSINESS
            </h3>
          </FadeIn>

          <FadeIn>
            <h2 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
              Luôn coi khách hàng là bạn bè nhiệt tình hỗ trợ
            </h2>
          </FadeIn>

          <FadeIn>
            <p className="mb-10 text-base opacity-90 leading-relaxed">
              Luôn tin tưởng, hiểu nhau, cùng nhau chia sẻ... tất cả đều xuất phát
              từ cái tâm, <br className="hidden md:block" />
              vì một mục đích chung, không lừa dối, không trục lợi.
            </p>
          </FadeIn>

          <FadeIn>
            <div className="max-w-[700px] mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 bg-black/20 backdrop-blur-sm">
              <div className="bg-[#f7981d] p-3 font-bold text-white text-left flex items-center gap-3">
                <span className="animate-bounce">📢</span>
                <span className="underline decoration-2">Xem video bên dưới</span> để hiểu rõ hơn triết lý này
              </div>
              <div className="relative w-full aspect-video">
                <iframe
                  src={youtubeEmbedUrl}
                  title="Lời tri ân Kedi"
                  className="absolute top-0 left-0 w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <p className="mt-10 text-lg leading-relaxed max-w-[600px] mx-auto font-medium">
              Đây chính là điều giúp KEDI phát triển mạnh mẽ không ngừng. <br />
              <span className="text-[#3ee1ff] font-bold drop-shadow-sm">
                &quot;Và chúng tôi vẫn đang không ngừng tìm kiếm những người bạn&quot;
              </span>
            </p>
          </FadeIn>

          {/* Button Liên hệ */}
          <FadeIn>
            <div className="mt-12 mb-16">
              <button
                type="button"
                className="group relative inline-flex items-center gap-4 px-10 py-4 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full text-white font-bold shadow-xl hover:scale-105 transition-all duration-300"
              >
                <span className="text-2xl group-hover:rotate-12 transition-transform">⚡</span>
                <div className="text-left">
                  <span className="text-lg block uppercase">Liên hệ ngay để được tư vấn</span>
                  <span className="block text-xs font-normal opacity-80">
                    Trở thành 1 trong 12.000+ khách hàng tiếp theo của chúng tôi
                  </span>
                </div>
              </button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}