import landingData from './langding_data';

export default function LandingPage2() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#081F40] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_50%,rgba(67,198,255,0.10),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(255,198,41,0.14),transparent_28%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Video Card */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Black frame */}
              <div className="w-full max-w-[360px] rounded-[24px] border border-white/10 bg-white/[0.05] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur lg:max-w-[520px] lg:p-6">
                {/* Top banner label */}
                <div className="mb-3 rounded-xl bg-[#FFC629] px-3 py-2 text-center font-bold text-[#0B2D5B] lg:mb-4">
                  Bí kíp KEDI Convert Khách hàng!
                </div>

                {/* Video wrapper: rounded, overflow-hidden */}
                <div className="rounded-md overflow-hidden bg-black">
                  <video
                    className="w-full h-auto block"
                    controls
                    playsInline
                    autoPlay
                    muted
                    loop
                    poster={landingData.LandingPage2.poster}
                  >
                    <source
                      src={landingData.LandingPage2.video}
                      type="application/x-mpegURL"
                    />
                    {/* Fallback message */}
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              {/* Decorative arrows (SVG) */}
              <svg
                className="hidden md:block absolute -left-14 top-12 w-20 h-20 transform rotate-12"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M2 12 C8 4, 14 4, 20 12"
                  stroke="#FFC629"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 8 L20 12 L16 12"
                  stroke="#FFC629"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <svg
                className="hidden lg:block absolute -right-10 top-20 w-28 h-28 transform -rotate-12"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M22 12 C16 4, 10 4, 4 12"
                  stroke="#43C6FF"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 8 L4 12 L8 12"
                  stroke="#43C6FF"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Right: Headline + CTA */}
          <div className="flex flex-col items-start lg:items-start justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight max-w-lg">
              KEDI xây dựng
              <br /> website công nghiệp
              <br /> và thực dụng
            </h2>

            <div className="mt-6">
              <span className="inline-block rounded-full border border-[#FFC629]/50 bg-[#FFC629]/10 px-6 py-3 text-lg font-bold text-[#FFC629]">
                VÌ SỰ HIỆU QUẢ
              </span>
            </div>

            <p className="mt-6 max-w-md text-lg text-white/70">
              Thiết kế, tối ưu chuyển đổi và tích hợp hệ thống giúp doanh nghiệp
              bán hàng hiệu quả hơn.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="rounded-full bg-[#FFC629] px-6 py-3 font-bold text-[#0B2D5B] transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(255,198,41,0.22)]">
                LIÊN HỆ NGAY
              </button>
              <button className="rounded-full border border-white/20 bg-white/[0.04] px-6 py-3 text-white/90 transition hover:bg-white/[0.08]">
                XEM DỊCH VỤ
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
