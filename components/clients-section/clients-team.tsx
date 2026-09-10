"use client";
import Image from "next/image";
import FadeIn from "../ui/Fadeoad";
import BorderRunning from "../ui/BorderRunning";

export default function ClientsTeam() {
  const youtubeVideoId = "czmj2NNaPJI";
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeVideoId}`;

  return (
    <div className="relative w-full overflow-hidden bg-[#DAC1EB]">
      {/* Section Trắng phía trên */}
      <div className="relative w-full px-6 pt-12 pb-0 lg:px-8 z-10">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-6 left-6 w-24 h-24 rounded-full border-t-4 border-orange-300 opacity-70" />
          <Image
            src="https://mona.media/template/assets/images/customer-intro/ic-el4.svg"
            alt="Decorative Left"
            width={800}
            height={800}
            className="absolute top-[20px] left-[-500px] w-[780px] h-[550px] opacity-30"
          />
          <div className="absolute top-20 right-10 w-20 h-20 rounded-full border-2 border-purple-400 opacity-60" />
          <div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-gradient-to-br from-purple-100 via-white to-transparent rounded-full blur-3xl opacity-80" />
        </div>

        {/* Text Content */}
        <div className="relative text-center max-w-3xl mx-auto z-10">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight mb-6">
              Hơn cả một lời cảm ơn
              <br />
              <div className="w-full min-w-0">
                <span className="text-purple-600 truncate">
                  chúng tôi thể hiện nó theo cách riêng của mình
                </span>
              </div>
            </h2>
          </FadeIn>
          <FadeIn>
            <div className="inline-block mt-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white text-sm md:text-base px-6 py-3 rounded-full font-semibold shadow-lg">
              &quot;Giải quyết vấn đề trước thay vì phàn nàn đúng sai&quot;
            </div>

            <p className="mt-4 text-sm md:text-base text-gray-600 leading-relaxed">
              Vấn đề xảy ra là không thể tránh khỏi. Thay vì phải đi tìm xem ai
              mắc lỗi rồi đổ lỗi cho nhau.
            </p>
            <p className="text-sm md:text-base text-sky-600 font-semibold mt-2">
              Chúng tôi dùng thời gian đó khắc phục lỗi cho khách hàng trước.
            </p>
          </FadeIn>
        </div>
        <FadeIn>
          {/* YouTube Video */}
          <div className="relative mt-10 max-w-5xl mx-auto rounded-2xl overflow-hidden border-4 border-white shadow-2xl z-20">
            <div className="aspect-video">
              <iframe
                src={youtubeEmbedUrl}
                title="Clients Team"
                className="w-full h-full"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Nền tím bên dưới */}
      <div className="relative w-full bg-gradient-to-br from-[#5c0ba0] to-[#7c3aed] text-white pt-32 pb-24 -mt-32 z-0 rounded-t-[80px]">
        {/* Mũi tên chỉ xuống */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <Image
            src="https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765193848/counter-bear-deco_fbdeay.png"
            alt="Arrow Down"
            width={60}
            height={60}
            className="drop-shadow-lg"
          />
        </div>
        <FadeIn>
          {/* Câu nhấn */}
          <div className="max-w-2xl mx-auto text-center pt-10">
            <BorderRunning color="white" glowColor="border-white">
              <p className="text-lg md:text-xl font-semibold bg-white/10 pt-6">
                Điều này nhằm đảm bảo không gây ảnh hưởng đến hoạt động kinh
                doanh của khách hàng
              </p>
            </BorderRunning>
          </div>
        </FadeIn>

        {/* Ảnh biểu đồ/thống kê - Hàng 1 */}
        <div className="flex flex-row justify-center items-center gap-6 px-6 overflow-x-auto mt-16">
          <FadeIn>
            <div className="transform hover:scale-80 transition-transform duration-300">
              <Image
                src="https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765198324/bundle-package-04_in4vvf.jpg"
                alt="Thống kê doanh thu 1"
                width={420}
                height={250}
                className="rounded-xl shadow-2xl flex-shrink-0"
              />
            </div>
          </FadeIn>

          <div className="transform hover:scale-80 transition-transform duration-300">
            <FadeIn>
              <Image
                src="https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765198324/bundle-package-04_in4vvf.jpg"
                alt="Thống kê doanh thu 2"
                width={200}
                height={200}
                className="rounded-xl shadow-2xl flex-shrink-0 -mt-30"
              />
            </FadeIn>
          </div>
        </div>

        {/* Ảnh ở dưới - Hàng 2 */}
        <div className="flex flex-row justify-center items-center gap-6 px-6 overflow-x-auto mt-8">
          <div className="transform hover:scale-80 transition-transform duration-300">
            <FadeIn>
              <Image
                src="https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765198324/bundle-package-04_in4vvf.jpg"
                alt="Thống kê doanh thu 3"
                width={200}
                height={200}
                className="rounded-xl shadow-2xl flex-shrink-0 -mt-30 ml-32"
              />
            </FadeIn>
          </div>
          <div className="transform hover:scale-80 transition-transform duration-300">
            <FadeIn>
              <Image
                src="https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765198324/bundle-package-04_in4vvf.jpg"
                alt="Thống kê doanh thu 4"
                width={420}
                height={250}
                className="rounded-xl shadow-2xl flex-shrink-0 ml-10"
              />
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 w-full translate-y-1/2">
        <svg viewBox="0 0 1440 320" className="w-full h-auto fill-[#DAC1EB]">
          <path d="M0,96L80,112C160,128,320,160,480,160C640,160,800,128,960,117.3C1120,107,1280,117,1360,122.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
}
