import FormDemo from '@/components/Register/RegisterForm';
import landingData from './langding_data';

export default function LandingPage1() {
  return (
    <section className="relative overflow-hidden bg-[#0B2D5B] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,198,41,0.18),transparent_34%),radial-gradient(circle_at_82%_42%,rgba(67,198,255,0.10),transparent_28%)]" />
      <div className="relative z-10 w-full py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-8 w-full min-w-0 flex flex-col justify-center">
            {/* Headline */}
            <div className="space-y-5 px-6 lg:ml-[2cm] lg:px-0">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#FFC629]">KEDI WEBSITE DESIGN</p>
              <h2 className="max-w-2xl text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
                Website đẹp là điểm bắt đầu.
                <br />
                <span className="text-[#FFC629]">Website tạo ra chuyển đổi</span> mới là mục tiêu.
              </h2>

              <div className="space-y-2">
                <h1 className="text-base font-medium leading-relaxed text-white/70 md:text-lg">
                  KEDI kết hợp chiến lược, UI/UX và công nghệ để xây dựng website đúng với hành vi khách hàng.
                </h1>
                <div className="text-xl lg:text-2xl font-bold">
                  Thiết kế Website{' '}
                  <span className="inline-block rounded-full border border-[#FFC629]/60 bg-[#FFC629] px-6 py-3 text-lg font-extrabold text-[#0B2D5B] shadow-[0_12px_35px_rgba(255,198,41,0.18)]">
                    ĐẸP & RÕ RÀNG
                  </span>
                </div>
                <div className="text-xl lg:text-2xl font-bold">
                  <span className="inline-block rounded-full border border-white/15 bg-white/[0.06] px-6 py-3 text-lg font-extrabold text-white backdrop-blur">
                    TỐI ƯU CHUYỂN ĐỔI
                  </span>{' '}
                  <span className="text-white/80">cho doanh nghiệp.</span>
                </div>
              </div>
            </div>

            {/* Dashboard Preview */}
            <div className="relative px-6 lg:px-0">
              <div>
                <div className="relative h-[300px] overflow-visible rounded-[28px] border border-white/10 bg-white/[0.05] p-4 shadow-[0_30px_80px_rgba(2,12,27,0.35)] backdrop-blur lg:ml-[2cm] lg:h-[350px]">
                  {/* Video background (HLS) - rounded via wrapper */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden z-0">
                    <video
                      className="absolute inset-0 w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                      aria-hidden="true"
                    >
                      <source
                        src={landingData.LandingPage1.video}
                        type="application/x-mpegURL"
                      />
                    </video>
                  </div>
                  {/* Mock Dashboard (stacked above video) */}
                  <div className="translate-y-[90%] lg:translate-y-[110%] relative z-10 mx-auto w-full max-w-[400px] lg:w-[450px]">
                    <div className="relative overflow-visible rounded-2xl border border-white/10 bg-white p-4 shadow-[0_24px_70px_rgba(2,12,27,0.35)] lg:p-6">
                      <img
                        src={landingData.LandingPage1.images[0]}
                        alt="Dashboard"
                        className="w-full h-auto object-contain rounded-md"
                      />
                    </div>

                    {/* Social Icons positioned outside the image area but relative to the card container */}
                    <div className="absolute -right-4 lg:-right-8 -top-4 lg:-top-6 bg-[#FFC629] text-[#0B2D5B] rounded-full w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center shadow-lg z-20">
                      <div className="text-xl lg:text-2xl">📸</div>
                    </div>
                    <div className="absolute -left-4 lg:-left-8 -top-4 lg:-top-6 bg-[#43C6FF] text-[#0B2D5B] rounded-full w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center shadow-lg z-20">
                      <div className="text-xl lg:text-2xl">💬</div>
                    </div>
                    <div className="absolute -left-4 lg:-left-8 -bottom-4 lg:-bottom-6 bg-[#0B2D5B] border border-white/20 rounded-full w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center shadow-lg z-20">
                      <div className="text-xl lg:text-2xl">f</div>
                    </div>
                    <div className="absolute -right-4 lg:-right-8 -bottom-4 lg:-bottom-6 bg-white text-[#0B2D5B] rounded-full w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center shadow-lg z-20">
                      <div className="text-xl lg:text-2xl">📺</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full min-h-[600px] flex flex-col items-center justify-center py-10 mt-25">
              {/* 1. Phần Bong Bóng Chat */}
              <div className="relative max-w-2xl mx-4 mb-8">
                {/* Khung nội dung */}
                <div className="relative z-10 rounded-[30px] border border-[#FFC629]/45 bg-[#081F40]/95 p-6 text-center shadow-[0_20px_60px_rgba(2,12,27,0.30)] backdrop-blur">
                  <p className="text-lg md:text-xl text-white leading-relaxed">
                    <span className="font-bold text-[#FFC629]">Đội ngũ KEDI</span>{' '}
                    sẽ cùng bạn nghiên cứu, thiết kế và triển khai{' '}
                    <span className="text-xl font-extrabold text-[#FFC629] md:text-2xl">
                      MỘT WEBSITE DỄ HIỂU, DỄ DÙNG VÀ HỖ TRỢ CHUYỂN ĐỔI.
                    </span>
                  </p>
                  <p className="mt-2 text-sm text-gray-300">
                    Từ nghiên cứu người dùng đến trải nghiệm và vận hành sau khi ra mắt.
                  </p>
                </div>
                {/* Cái đuôi bong bóng (Dùng hình vuông xoay 45 độ để tạo viền nhọn) */}
                <div className="absolute -bottom-4 left-[30%] w-8 h-8 bg-[#081F40] border-b border-r border-[#FFC629]/45 transform rotate-45 z-40"></div>
                <div className="absolute -bottom-[3px] left-[30%] w-9 h-4 bg-[#081F40] z-20"></div>
              </div>

              {/* 2. Phần Hình Ảnh Hai Người */}
              <div className="relative z-10 -mt-6">
                {/* Bạn nhớ thay đường dẫn ảnh thật của bạn vào src bên dưới */}
                <img
                  src={landingData.LandingPage1.images[1]}
                  alt="CINO và Trọng Hy"
                  className="w-[70%] h-auto object-cover"
                />
              </div>
            </div>
          </div>
          {/* Right Form */}
          <div className="lg:sticky lg:top-8">
            <FormDemo />
          </div>
        </div>
      </div>
    </section>
  );
}
