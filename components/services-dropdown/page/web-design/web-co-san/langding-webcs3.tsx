"use client";

import React from "react";
import Image from "next/image";
import FadeIn from "@/components/ui/Fadeoad";

export default function Langdingwebsc3() {
  return (
    <section className="relative py-20 bg-[#4a00a9] overflow-hidden text-white">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Content */}
        <FadeIn direction="up" amount={0.3}>
          <div className="text-center mb-16 relative flex flex-col md:block">
            {/* Container nhãn "MIỄN PHÍ" */}
            <div
              className="
      order-first mb-6 md:mb-0        /* Mobile: Lên đầu và tạo khoảng cách dưới */
      md:absolute md:top-[40px] md:left-[12%] md:rotate-[-10deg] /* Desktop: Vị trí cũ */
    "
            >
              <span
                className="
        inline-flex flex-col items-center
        text-[#00dfd8] font-bold text-xl md:text-2xl
        tracking-widest uppercase
        border-2 border-[#00dfd8]
        px-6 py-2 rounded-full
        relative                      /* Để định vị mũi tên bên trong */
      "
              >
                <span>Hoàn toàn</span>
                <span>miễn phí</span>

                {/* Mũi tên - Ẩn trên mobile vì không còn vị trí trỏ chính xác, hoặc giữ lại tùy bạn */}
                <div className="absolute bottom-[-15px] right-0 translate-x-1/2 hidden md:block">
                  <svg width="30" height="30" viewBox="0 0 44 48" fill="none">
                    <path
                      d="M2 2C5.5 12 15 22 42 46M42 46L30 44M42 46L40 34"
                      stroke="#00dfd8"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </span>
            </div>

            {/* Phần chữ chính */}
            <div className="flex flex-col">
              <p className="text-lg md:text-xl font-medium mb-4 opacity-90 order-1">
                Trải nghiệm trang trí website cho riêng bạn!
              </p>
              <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter order-2">
                TEST THOẢI MÁI
              </h2>
              <h3 className="text-4xl md:text-6xl font-black text-[#f98a22] mb-8 tracking-tighter order-3">
                CUSTOM THẢ GA
              </h3>
              <p className="max-w-2xl mx-auto text-gray-200 leading-relaxed italic order-4 px-4">
                Với hàng trăm mẫu website chuẩn SEO{" "}
                <br className="hidden md:block" />
                cho bạn tha hồ lựa chọn, đến khi hài lòng thì thôi
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20 items-end">
          {/* Cột 1: Trải nghiệm thực tế */}
          <FadeIn direction="up" delay={0.1}>
            <div className="text-center group">
              <div className="relative mb-8 transition-transform duration-500 group-hover:-translate-y-4">
                <Image
                  src="https://mona.media/template/assets/images/page-mau-website/experience-01.avif" // Thay đường dẫn ảnh của bạn
                  alt="Cơ hội trải nghiệm giao diện thực tế"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl mx-auto"
                />
              </div>
              <h4 className="text-2xl font-bold mb-4">
                Cơ hội trải nghiệm giao diện thực tế
              </h4>
              <p className="text-gray-300 max-w-sm mx-auto leading-relaxed">
                Linh hoạt thay đổi visual, tính năng và giao diện chuẩn
                responsive trên mọi thiết bị.
              </p>
            </div>
          </FadeIn>

          {/* Cột 2: Đa dạng ngành nghề */}
          <FadeIn direction="up" delay={0.2}>
            <div className="text-center group">
              <div className="relative mb-8 transition-transform duration-500 group-hover:-translate-y-4">
                <Image
                  src="https://mona.media/template/assets/images/page-mau-website/experience-02.avif" // Thay đường dẫn ảnh của bạn
                  alt="Website với đa dạng ngành nghề"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl mx-auto"
                />
              </div>
              <h4 className="text-2xl font-bold mb-4">
                Website với đa dạng ngành nghề
              </h4>
              <p className="text-gray-300 max-w-sm mx-auto leading-relaxed">
                Mẫu website đa dạng, chuyên biệt cho từng lĩnh vực, đảm bảo đáp
                ứng đa dạng nhu cầu.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Decorative Wave Bottom */}
      <div className="absolute bottom-0 left-0 w-full translate-y-1/2">
        <svg viewBox="0 0 1440 320" className="w-full h-auto fill-white">
          <path d="M0,96L80,112C160,128,320,160,480,160C640,160,800,128,960,117.3C1120,107,1280,117,1360,122.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
}
