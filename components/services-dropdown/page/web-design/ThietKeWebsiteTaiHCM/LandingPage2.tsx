import landingData from './langding_data';

export default function LandingPage2() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Video Card */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Black frame */}
              <div className="bg-black rounded-lg shadow-2xl p-3 lg:p-6 max-w-[360px] lg:max-w-[520px] w-full">
                {/* Top banner label */}
                <div className="bg-[#7c1bd6] text-white text-center py-2 px-3 rounded-t-md mb-3 lg:mb-4 font-medium">
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
                  stroke="#00C2FF"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 8 L20 12 L16 12"
                  stroke="#00C2FF"
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
                  stroke="#3AD4FF"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 8 L4 12 L8 12"
                  stroke="#3AD4FF"
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
              <span className="inline-block bg-[#0f702a] border-2 border-dashed border-lime-400 text-lime-200 px-6 py-3 font-bold rounded-md text-lg">
                VÌ SỰ HIỆU QUẢ
              </span>
            </div>

            <p className="mt-6 text-lg max-w-md text-gray-200">
              Thiết kế, tối ưu chuyển đổi và tích hợp hệ thống giúp doanh nghiệp
              bán hàng hiệu quả hơn.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="bg-[#18b26f] hover:bg-[#139b5b] text-white font-semibold px-5 py-3 rounded-md">
                LIÊN HỆ NGAY
              </button>
              <button className="border border-white/30 text-white/90 px-5 py-3 rounded-md">
                XEM DỊCH VỤ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
