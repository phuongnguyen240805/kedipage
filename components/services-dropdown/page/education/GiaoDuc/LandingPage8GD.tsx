import React, { useRef, useState } from "react";
import { CheckCircle2, Play, Check } from "lucide-react";
import FadeIn from "@/components/ui/Fadeoad";

export default function LandingPage8GD() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-12 px-4 font-sans bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] overflow-x-hidden">
      <div className="text-center max-w-4xl mx-auto mb-10 space-y-4">
        <FadeIn>
          <p className="text-gray-600 font-medium text-lg">
            Đồng thời phát triển đầy đủ bộ tính năng
          </p>

          <div className="inline-block relative">
            <h1 className="bg-[#FF2D88] text-white text-2xl md:text-4xl font-bold px-8 py-3 rounded-lg uppercase shadow-lg transform rotate-0 hover:scale-105 transition-transform duration-300">
              Xây dựng lớp &quot;Phòng ngự&quot; chắc chắn
            </h1>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-4">
            Bảo vệ chất xám với{" "}
            <span className="text-[#009ef7]">công nghệ DRM mới nhất</span>
          </h2>
        </FadeIn>
        <FadeIn>
          {/* Features List */}
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-12 mt-6">
            {[
              "Xác thực hành vi end-users",
              "Bảo mật AES",
              "Mã hóa Video Player",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-gray-700 font-semibold"
              >
                <CheckCircle2 className="w-6 h-6 text-green-500 fill-green-100" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* --- MAIN VISUAL / MOCKUP SECTION (Video nền) --- */}
      <div className="relative w-full max-w-5xl aspect-video md:aspect-[16/9] bg-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 group mb-20">
        {/* Video nền */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            src="https://samplelib.com/lib/preview/mp4/sample-10s.mp4"
            className="w-full h-full object-cover"
            loop
            muted
            playsInline
          />
        </div>

        {/* Play Button (Center) */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          {!isPlaying && (
            <button
              className="w-20 h-20 md:w-24 md:h-24 bg-[#FF2D88] rounded-full flex items-center justify-center text-white shadow-[0_0_30px_rgba(255,45,136,0.6)] animate-pulse pointer-events-auto hover:scale-110 transition-transform"
              onClick={handlePlayClick}
            >
              <Play className="w-8 h-8 md:w-10 md:h-10 fill-white ml-1" />
            </button>
          )}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* --- PRICING / COMPARISON SECTION (Phần mới thêm) --- */}
      {/* ========================================================================= */}

      <div className="w-full max-w-6xl mt-10">
        {/* Section Header */}

        <div className="text-center mb-12 relative z-10">
          <FadeIn>
            <h3 className="text-[#ff6b00] font-bold text-xl md:text-2xl mb-4">
              MONA có hai gói sản phẩm để bạn linh hoạt khi thanh toán
            </h3>
            <div className="inline-block bg-[#FF2D88] text-white font-bold text-xl md:text-2xl px-6 py-3 uppercase transform -skew-x-6">
              <span className="block transform skew-x-6">
                KHI MUA HỆ THỐNG MONA E-learning
              </span>
            </div>
          </FadeIn>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start relative z-10">
          {/* --- CARD 1: Enterprise --- */}
          <div className="bg-white border-2 border-purple-300 rounded-lg p-6 md:p-8 shadow-sm shadow-sm h-full">
            <FadeIn>
              <h4 className="text-2xl md:text-3xl text-gray-800 font-normal mb-6">
                Gói{" "}
                <span className="text-[#009ef7] font-bold">
                  Enterprise Elearning
                </span>
              </h4>

              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                Đối với phương thức thanh toán này, MONA sẽ chỉ hỗ trợ bạn MỘT
                LẦN cho các đầu mục sau:
              </p>
            </FadeIn>

            <ul className="space-y-4">
              {[
                "MONA sẽ triển khai và giao toàn bộ source code",
                "Chuyển giao Document hướng dẫn build source",
                "Hỗ trợ bổ sung các cấu hình tiện ích theo yêu cầu",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check
                    className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                    strokeWidth={3}
                  />
                  <span className="text-gray-600 text-sm md:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
 <FadeIn>
          {/* --- CARD 2: SaaS --- */}
          <div className="bg-white border-2 border-purple-300 rounded-lg p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow h-full relative">
            <h4 className="text-2xl md:text-3xl text-gray-800 font-normal mb-6">
              Gói{" "}
              <span className="text-[#009ef7] font-bold">SaaS Elearning</span>
            </h4>

            <div className="text-gray-600 mb-6 text-sm leading-relaxed">
              <p className="mb-2">
                Đối với gói này khi bạn mua, bạn sẽ setup được ngay.
              </p>
              <p className="font-bold text-black">
                Hệ thống chỉ bị tính $ khi nào bạn nhấn nút LIVE website{" "}
                <br className="hidden md:block" />
                Không tính thời gian setup hệ thống
              </p>
            </div>

            <ul className="space-y-4">
              {[
                "Thoải mái lựa chọn với kho giao diện website elearning đẹp và luôn được cập nhật xuyên suốt.",
                "Trỏ domain và live website nhanh chóng chỉ sau 1 ngày setup",
                "Bộ Video Free để định hướng học viên từ người xa lạ trở thành học viên tiềm năng",
                "Hệ thống tự động theo dõi học viên độ hứng thú của học viên",
                "Auto Email Remarketing với hơn 30+ kịch bản cá nhân hoá phù hợp với từng nhóm học viên",
                "Module Special Offer hệ thống sẽ tự động setup khuyến mãi và cấu hình theo từng nhóm học viên",
                "Retargeting dễ dàng khi website tự động đồng bộ với các bên chạy ads như Meta hoặc Google để set kịch bản ads phù hợp.",
                "Setup Affiliate Marketing nhanh chóng, cấu hình hoa hồng để bạn chia sẻ hoa hồng cho người giới thiệu nhanh chóng, công khai, minh bạch.",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check
                    className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                    strokeWidth={3}
                  />
                  <span className="text-gray-600 text-sm md:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div></FadeIn>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center">
          <p className="text-xs md:text-sm font-semibold text-gray-800">
            *Trong trường hợp, bạn cần hỗ trợ cài đặt hoặc bổ sung thêm các tính
            năng khác trên hệ thống, MONA sẽ thu phí hỗ trợ!
          </p>
        </div>
      </div>
    </div>
  );
}
