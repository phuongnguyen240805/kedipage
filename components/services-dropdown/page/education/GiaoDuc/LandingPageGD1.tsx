import React from "react";
import {
  Settings,
  Layout,
  MousePointer,
  Cpu,
} from "lucide-react";
import RegisterForm from "@/components/Register/RegisterForm";
import { landingPageGD1Images } from "./giaoduc";
import BorderRunning from "@/components/ui/BorderRunning";

const LandingPage1GD = () => {
  return (
    <div
      className="min-h-screen text-gray-900 font-sans relative overflow-hidden flex items-center py-10 px-4"
      style={{
        background: `
        radial-gradient(circle at 20% 30%, rgba(83, 70, 178, 0.4) 0%, transparent 50%),
        radial-gradient(circle at 80% 70%, rgba(147, 51, 234, 0.3) 0%, transparent 50%),
        radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.2) 0%, transparent 60%),
        linear-gradient(135deg, #35327C 0%, #2a2566 50%, #35327C 100%)
      `,
      }}
    >
      {/* --- MAIN CONTAINER: max-w-6xl --- */}
      <div className="max-w-6xl w-full mx-auto z-10">
        {/* GRID LAYOUT: 10 cột trên Desktop (6 + 4), 1 cột trên Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-12 items-center">
          {/* === LEFT COLUMN: Nội dung giới thiệu (6 cột = 60%) === */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 text-white">
            <h1 className="text-3xl md:text-2xl lg:text-3xl font-bold leading-tight">
              Giải pháp website & <br className="hidden lg:block" />
              hệ thống bán khóa học
              <br />
              E-Learning
              <span className="inline-flex items-center gap-3 ml-2">
                <BorderRunning
                  glowColor="rgba(74, 222, 128, 0.8)" // green-400 sáng, có độ trong suốt
                >
                  <span className="bg-green-900/60  text-green-400 px-3 py-1 rounded uppercase text-lg">
                    Chỉn chu
                  </span>
                </BorderRunning>
                <BorderRunning
                  color="#f97316"
                  glowColor="rgba(225, 109, 26, 0.8)"
                >
                  <span className="bg-orange-900/60 text-orange-400 px-3 py-1 rounded uppercase text-lg">
                    Hoàn thiện
                  </span>
                </BorderRunning>
              </span>
              <div className="mt-2">
                <img
                  src="https://mona.media/template/assets/images/logo/logo/media-white-logo-less.svg"
                  alt="Mona Media"
                  className="h-10 w-auto"
                />
              </div>
            </h1>
            <div className="flex flex-col md:flex-row items-center md:items-center gap-2 text-center md:text-left">
              <span className="text-sm md:text-base leading-relaxed">
                Đang được sử dụng bởi CEO Khánh Hùng tại KHA và hơn 200+ anh chị
                <br className="hidden md:block" />{" "}
                {/* Chỉ xuống dòng ở desktop nếu muốn */}
                giảng viên khác
              </span>
              <img
                src="https://mona.media/template/assets/images/tkw-ban-khoa-hoc/logo-kha.png"
                alt="KHA"
                className="h-6 md:h-8 w-auto object-contain flex-shrink-0"
              />
            </div>
            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-3 w-full">
              <FeatureItem
                icon={<Layout size={18} />}
                text="Giao diện độc quyền"
              />
              <FeatureItem
                icon={<Settings size={18} />}
                text="Toàn quyền quản lý"
              />
              <FeatureItem icon={<Cpu size={18} />} text="Đầy đủ tính năng" />
              <FeatureItem
                icon={<MousePointer size={18} />}
                text="Thao tác dễ dàng"
              />
            </div>

            {/* Mockup Image Area */}
            <div className="relative mt-4 w-full max-w-md mx-auto lg:mx-0">
              {/* Main Image */}
              <img
                src={landingPageGD1Images.main.src}
                alt={landingPageGD1Images.main.alt}
                className="w-full h-auto object-contain drop-shadow-2xl relative z-10 hover:scale-105 transition-transform duration-500"
              />

              {/* Shadow/Glow effect */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-2/3 h-12 bg-blue-500/40 blur-3xl rounded-full -z-10"></div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start pt-2">
              <button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition hover:scale-105 flex items-center justify-center gap-2">
                <span>›</span> Nhận tư vấn
              </button>
              <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition hover:scale-105 flex items-center justify-center gap-2">
                <span>›</span> Xem báo giá
              </button>
            </div>
          </div>

          {/* === RIGHT COLUMN: Register Form (4 cột = 40%) === */}
          <div className="lg:col-span-4 w-full flex justify-center lg:justify-end">
            <RegisterForm />
          </div>
        </div>
      </div>
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        style={{ height: "80px" }}
      >
        <path
          d="M0,0 C400,45 800,45 1200,0 L1200,120 L0,120 Z"
          fill="#FFFFFF"
        />
      </svg>
    </div>
  );
};

// Component con hiển thị tính năng nhỏ
const FeatureItem = ({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) => {
  return (
    <div className="flex items-center gap-3 backdrop-blur-sm p-3 rounded-lg hover:bg-white/20 transition-colors cursor-default">
      <div className="bg-gradient-to-br from-orange-400 to-orange-600 p-1.5 rounded text-white shadow-sm shrink-0">
        {icon}
      </div>
      <span className="text-sm font-semibold leading-tight text-white">
        {text}
      </span>
    </div>
  );
};

export default LandingPage1GD;
