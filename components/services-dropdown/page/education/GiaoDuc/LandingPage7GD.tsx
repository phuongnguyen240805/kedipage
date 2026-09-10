import React from "react";
import Image from "next/image";
import {
  CheckSquare,
  ShieldCheck,
  Lock,
  FileKey,
  Play,
  FileCode,
  Cpu,
} from "lucide-react";
import FadeIn from "@/components/ui/Fadeoad";

export default function LandingPage7GD() {
  return (
    <div className="min-h-screen bg-[#0f0529] text-white font-sans relative overflow-hidden">
      {/* Vòng cung cong lên ở đỉnh */}
      <svg
        className="absolute top-0 left-0 w-full pointer-events-none"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        style={{ height: "80px" }}
      >
        <path
          d="M0,120 C400,75 800,75 1200,120 L1200,0 L0,0 Z"
          fill="#ffffff"
        />
      </svg>

      <div className="container mx-auto px-4 py-12 relative z-10 max-w-6xl">
        {/* --- PHẦN HEADER --- */}
        <div className="flex flex-col items-center text-center mb-12">
          {/* Badge Độc quyền */} <FadeIn>
          <div className="relative mb-6">
            <div className="bg-gradient-to-b from-yellow-600 to-yellow-800 rounded-md px-1 pb-1">
             <div className="bg-gradient-to-b from-[#1a2d5c] to-[#0f172a] border border-yellow-500 rounded px-8 py-2 relative overflow-hidden group">
                <div className="absolute inset-0 bg-yellow-400 opacity-10 blur-md"></div>
                
                  <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wider flex items-center justify-center gap-2">
                    <span className="text-yellow-400">👑</span> ĐỘC QUYỀN 100%  
                  </h2>
              
              </div>
            </div>
          </div></FadeIn>
          <FadeIn>
            {/* Main Title */}
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Hệ thống{" "}
              <span className="text-cyan-400">CHỐNG DOWNLOAD VIDEO</span>
            </h1>
            <p className="text-gray-300 text-sm md:text-base mb-8">
              Sản phẩm dành riêng cho khách hàng đặt làm tại website E-Learning
              tại MONA - Chúng tôi không bán lẻ
            </p>
          </FadeIn>

          {/* Tech Box (Khung xanh ở giữa) */}
          <div className="relative w-full max-w-3xl">
            {/* Viền phát sáng */}
            <div className="border border-cyan-500/50 bg-[#131b3a]/60 backdrop-blur-sm rounded-lg p-6 md:p-10 relative shadow-[0_0_20px_rgba(6,182,212,0.15)]">
              {/* Các đường kẻ trang trí ở góc (tùy chọn để giống ảnh hơn) */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400 -translate-x-1 -translate-y-1"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400 translate-x-1 -translate-y-1"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400 -translate-x-1 translate-y-1"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400 translate-x-1 translate-y-1"></div>
              <FadeIn>
                <p className="text-white text-base md:text-lg leading-relaxed">
                  MONA sau nhiều năm nghiên cứu, chúng tôi đã thành công phát
                  triển server chứa video đi kèm với{" "}
                  <span className="text-cyan-400 font-semibold">
                    tính năng chặn download 100%
                  </span>{" "}
                  dành riêng cho khách hàng thiết kế website học trực tuyến tại
                  MONA
                </p>
              </FadeIn>

              {/* Icon Lock ở góc dưới */}
              <div className="absolute -bottom-6 -right-4 bg-[#0f0529] p-2 border border-cyan-500/50 rounded-full text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                <div className="border border-cyan-400 rounded-full p-2">
                  <Lock size={24} />
                </div>
              </div>
            </div>

            {/* Đường kẻ ngang trang trí dưới box */}
            <div className="flex items-center justify-center gap-2 mt-2 opacity-50">
              <div className="h-1 w-12 bg-cyan-500 rounded-full"></div>
              <div className="h-1 w-12 bg-gray-600 rounded-full"></div>
              <div className="h-1 w-12 bg-gray-700 rounded-full"></div>
            </div>
          </div>
        </div>
        <FadeIn>
          {/* --- DIVIDER CÓ KHIÊN --- */}
          <div className="relative flex items-center justify-center my-12">
            <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
            <div className="relative z-10 flex items-center gap-2 px-4 bg-[#0f0529]">
              <ShieldCheck className="text-blue-500 w-6 h-6" />
              <span className="font-bold text-sm md:text-base">
                MONA áp dụng những công nghệ hiện đại để{" "}
                <span className="uppercase">
                  BẢO VỆ VIDEO CỦA BẠN AN TOÀN TUYỆT ĐỐI
                </span>
              </span>
            </div>
          </div>
        </FadeIn>
        {/* --- PHẦN NỘI DUNG DƯỚI (2 CỘT) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mt-16">
          {/* Cột trái: Tiêu đề lớn */}
          <div className="lg:col-span-1 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-cyan-400">MONA.Host</span> <br />
              sẽ giúp cho <br />
              website của bạn
            </h2>
          </div>

          {/* Cột phải: Danh sách tính năng */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {/* Item 1 */}
            <FeatureItem>
              Hoạt động{" "}
              <span className="text-orange-400 font-bold">
                ổn định trên đa thiết bị
              </span>
            </FeatureItem>

            {/* Item 2 */}
            <FeatureItem>
              Chặn tuyệt đối 99% download <br /> video trên website
            </FeatureItem>

            {/* Item 3 */}
            <FeatureItem>
              Chặn được{" "}
              <span className="text-orange-400 font-bold">
                tất cả các loại phần mềm
              </span>{" "}
              download video
            </FeatureItem>

            {/* Item 4 */}
            <FeatureItem>
              Chặn tất cả trình duyệt download video như{" "}
              <span className="text-orange-400 font-bold">
                tính năng của Cốc Cốc
              </span>
            </FeatureItem>

            {/* Item 5 */}
            <FeatureItem>
              <span className="text-orange-400 font-bold">
                Không còn bị kẻ xấu download
              </span>{" "}
              dù đã gắn watermark đầy đủ
            </FeatureItem>

            {/* Item 6 */}
            <FeatureItem>
              <span className="text-orange-400 font-bold">
                Không còn bị mất doanh thu
              </span>{" "}
              từ việc bị ăn cắp video bán trên các nền tảng
            </FeatureItem>

            {/* Item 7 */}
            <FeatureItem>
              Video{" "}
              <span className="text-orange-400 font-bold">
                không bị chia sẻ hàng loạt
              </span>{" "}
              trên mạng <span className="font-bold uppercase">MIỄN PHÍ</span>{" "}
              hoặc với giá{" "}
              <span className="font-bold uppercase">RẺ NHƯ CHO</span>
            </FeatureItem>

            {/* Item 8 */}
            <FeatureItem>
              <span className="text-orange-400 font-bold">
                Không cần phải gắn logo, chèn kí hiệu trên mỗi video
              </span>{" "}
              để tranh bị ăn cắp từ kẻ xấu
            </FeatureItem>

            {/* Item 9 */}
            <FeatureItem>
              Video{" "}
              <span className="text-orange-400 font-bold">
                không bị đánh cắp
              </span>{" "}
              và <span className="text-orange-400 font-bold">tái sử dụng</span>{" "}
              để kinh doanh, thu lợi nhuận
            </FeatureItem>
          </div>
        </div>
 <FadeIn>
        <div className="mt-24 md:mt-32">
          {/* Header của phần Mã Hóa */}
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-2">
              <span className="text-blue-400">
                Sử dụng công nghệ mã hóa hiện đại
              </span>
            </h2>
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-8">
              Bảo vệ website của bạn 100%
            </h3>

            {/* 3 Nút Pills: An toàn - Bảo mật - Ổn định */}
            <div className="flex flex-wrap justify-center gap-4">
              {["An toàn", "Bảo mật", "Ổn định"].map((text) => (
                <span
                  key={text}
                  className="bg-blue-500 hover:bg-blue-600 transition-colors text-white px-6 py-1.5 rounded-full text-sm font-semibold shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                >
                  {text}
                </span>
              ))}
            </div>
          </div>

          {/* Sơ đồ Mã Hóa (Grid Layout) */}
          <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
            {/* --- CỘT TRÁI (Left Features) --- */}
            <div className="flex flex-col gap-12 lg:gap-24">
              {/* Item 1: Mã hóa DRM */}
              <div className="relative group text-center lg:text-right flex flex-col items-center lg:items-end">
                <div className="flex items-center gap-3 mb-2 flex-col lg:flex-row-reverse">
                  <div className="bg-slate-800 p-3 rounded-lg border border-blue-500/30 shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                    <FileKey className="text-red-400 w-8 h-8" />
                  </div>
                  <h4 className="text-cyan-400 font-bold text-lg">
                    Mã hóa DRM
                  </h4>
                </div>
                <p className="text-gray-300 text-sm max-w-[200px]">
                  Bảo Vệ Nội Dung Chất Lượng Cao
                </p>
                {/* Đường kẻ nối (Chỉ hiện trên Desktop) */}
                <div className="hidden lg:block absolute top-10 -right-8 w-16 h-[1px] bg-blue-500/50 transform rotate-[30deg] origin-left"></div>
              </div>

              {/* Item 2: Mã hóa Player */}
              <div className="relative group text-center lg:text-right flex flex-col items-center lg:items-end">
                <div className="flex items-center gap-3 mb-2 flex-col lg:flex-row-reverse">
                  <div className="bg-slate-800 p-3 rounded-lg border border-blue-500/30 shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                    <Play className="text-blue-400 w-8 h-8" />
                  </div>
                  <h4 className="text-cyan-400 font-bold text-lg">
                    Mã hóa Player
                  </h4>
                </div>
                <p className="text-gray-300 text-sm max-w-[200px]">
                  Đảm Bảo Trải Nghiệm Người Dùng An Toàn
                </p>
                {/* Đường kẻ nối */}
                <div className="hidden lg:block absolute top-0 -right-12 w-20 h-[1px] bg-blue-500/50 transform -rotate-[20deg] origin-left"></div>
              </div>
            </div>

            {/* --- CỘT GIỮA (Central Image + SSL) --- */}
            <div className="flex flex-col items-center justify-center relative">
              {/* Hình mã hóa đặt giữa (dùng ảnh thật) */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center mb-8">
                {/* Hiệu ứng Glow nền */}
                <div className="absolute inset-0 bg-blue-500/20 blur-[60px] rounded-full"></div>

                {/* Ảnh lock/safe được yêu cầu, giữ hiệu ứng sáng */}
                <div className="relative z-10 transform hover:scale-105 transition-transform duration-500 drop-shadow-[0_0_35px_rgba(59,130,246,0.45)]">
                  <Image
                    src="https://mona.media/template/assets/hq-images/tkw-ban-khoa-hoc/encode-img-pc.png"
                    alt="Mã hóa an toàn"
                    width={320}
                    height={320}
                    className="w-64 h-64 md:w-80 md:h-80 object-contain"
                  />
                </div>
              </div>

              {/* Item dưới cùng: Mã hóa SSL */}
              <div className="relative flex flex-col items-center text-center mt-4">
                {/* Đường kẻ nối từ trên xuống */}
                <div className="hidden lg:block absolute -top-8 left-1/2 w-[1px] h-8 bg-blue-500/50 -translate-x-1/2"></div>

                <div className="bg-slate-800 p-3 rounded-lg border border-yellow-500/30 shadow-[0_0_10px_rgba(234,179,8,0.2)] mb-2">
                  <ShieldCheck className="text-yellow-400 w-8 h-8" />
                </div>
                <h4 className="text-cyan-400 font-bold text-lg">Mã hóa SSL</h4>
                <p className="text-gray-300 text-sm max-w-[250px]">
                  Bước đầu cho sự an toàn trực tuyến của bạn
                </p>
              </div>
            </div>

            {/* --- CỘT PHẢI (Right Features) --- */}
            <div className="flex flex-col gap-12 lg:gap-24">
              {/* Item 3: Mã hóa Code */}
              <div className="relative group text-center lg:text-left flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-3 mb-2 flex-col lg:flex-row">
                  <div className="bg-slate-800 p-3 rounded-lg border border-blue-500/30 shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                    <FileCode className="text-blue-300 w-8 h-8" />
                  </div>
                  <h4 className="text-cyan-400 font-bold text-lg">
                    Mã hóa Mã Code
                  </h4>
                </div>
                <p className="text-gray-300 text-sm max-w-[200px]">
                  Giữ bí mật tuyệt đối cho ứng dụng và website
                </p>
                {/* Đường kẻ nối */}
                <div className="hidden lg:block absolute top-10 -left-8 w-16 h-[1px] bg-blue-500/50 transform -rotate-[30deg] origin-right"></div>
              </div>

              {/* Item 4: Mã hóa Trăm Mảnh */}
              <div className="relative group text-center lg:text-left flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-3 mb-2 flex-col lg:flex-row">
                  <div className="bg-slate-800 p-3 rounded-lg border border-blue-500/30 shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                    <Cpu className="text-purple-400 w-8 h-8" />
                  </div>
                  <h4 className="text-cyan-400 font-bold text-lg">
                    Mã hóa Trăm Mảnh
                  </h4>
                </div>
                <p className="text-gray-300 text-sm max-w-[200px]">
                  Đối phó với các hình thức tấn công phức tạp
                </p>
                {/* Đường kẻ nối */}
                <div className="hidden lg:block absolute top-0 -left-12 w-20 h-[1px] bg-blue-500/50 transform rotate-[20deg] origin-right"></div>
              </div>
            </div>
          </div>
        </div></FadeIn>
      </div>
      
    </div>
  );
}

// Component phụ cho từng dòng tính năng để code gọn hơn
function FeatureItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1 min-w-[24px]">
        {/* Giả lập checkbox màu xanh lá */}
        <div className="bg-white rounded-sm w-5 h-5 flex items-center justify-center">
          <div className="bg-green-500 w-full h-full p-[2px]">
            <CheckSquare size={16} className="text-white fill-green-500" />
          </div>
        </div>
      </div>
      <p className="text-sm md:text-base leading-snug">{children}</p>
    </div>
  );
}
