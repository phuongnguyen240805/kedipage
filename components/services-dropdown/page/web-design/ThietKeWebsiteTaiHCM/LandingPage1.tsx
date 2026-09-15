import FormDemo from '@/components/Register/RegisterForm';
import landingData from './langding_data';

export default function LandingPage1() {
  return (
    <div className="relative">
      <div className="w-full py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-8 w-full min-w-0 flex flex-col justify-center">
            {/* Headline */}
            <div className="space-y-4 lg:ml-[2cm]">
              <h2 className="text-xl lg:text-2xl font-bold leading-tight">
                Chẳng có ai thích cái gì XẤU cả,
                <br />
                <span className="text-yellow-300">KHÁCH HÀNG CỦA BẠN</span> lại
                càng không!
              </h2>

              <div className="space-y-2">
                <h1 className="text-xl lg:text-1xl font-bold leading-tight">
                  Hãy để ∞ KEDI.Media / Digital •:
                </h1>
                <div className="text-xl lg:text-2xl font-bold">
                  Thiết kế Website{' '}
                  <span className="inline-block bg-[#0f702a] border-2 border-dashed border-lime-400 text-lime-200 px-6 py-3 font-bold rounded-md text-lg">
                    THẬT ĐẸP
                  </span>
                </div>
                <div className="text-xl lg:text-2xl font-bold">
                  <span className="inline-block bg-[#231808] border-2 border-dashed border-yellow-400 text-yellow-300 px-6 py-3 font-bold rounded-md text-lg">
                    TẠO RA TIỀN
                  </span>{' '}
                  <span>cho BẠN!</span>
                </div>
              </div>
            </div>

            {/* Dashboard Preview */}
            <div className="relative">
              <div>
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl lg:ml-[2cm] p-4 shadow-2xl h-[300px] lg:h-[350px] relative overflow-visible">
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
                    <div className="bg-white rounded-lg p-4 lg:p-6 shadow-lg relative overflow-visible">
                      <img
                        src={landingData.LandingPage1.images[0]}
                        alt="Dashboard"
                        className="w-full h-auto object-contain rounded-md"
                      />
                    </div>

                    {/* Social Icons positioned outside the image area but relative to the card container */}
                    <div className="absolute -right-4 lg:-right-8 -top-4 lg:-top-6 bg-blue-600 rounded-full w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center shadow-lg z-20">
                      <div className="text-xl lg:text-2xl">📸</div>
                    </div>
                    <div className="absolute -left-4 lg:-left-8 -top-4 lg:-top-6 bg-green-500 rounded-full w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center shadow-lg z-20">
                      <div className="text-xl lg:text-2xl">💬</div>
                    </div>
                    <div className="absolute -left-4 lg:-left-8 -bottom-4 lg:-bottom-6 bg-blue-800 rounded-full w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center shadow-lg z-20">
                      <div className="text-xl lg:text-2xl">f</div>
                    </div>
                    <div className="absolute -right-4 lg:-right-8 -bottom-4 lg:-bottom-6 bg-red-500 rounded-full w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center shadow-lg z-20">
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
                <div className="relative z-10 border-4 border-cyan-400 rounded-[30px] p-6 bg-[#2e026d] text-center shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                  <p className="text-lg md:text-xl text-white leading-relaxed">
                    <span className="font-bold">CINO</span> và{' '}
                    <span className="font-bold">Trọng Hy</span> cùng các{' '}
                    <span className="font-bold">anh em KEDI</span>
                    <br />
                    sẽ{' '}
                    <span className="text-orange-500 font-extrabold text-xl md:text-2xl">
                      THIẾT KẾ MỘT WEBSITE BÁN ĐƯỢC
                      <br />
                      HÀNG, TẠO RA TIỀN cho BẠN!
                    </span>
                  </p>
                  <p className="text-sm text-gray-300 mt-2">
                    (Bằng các bước bên dưới)
                  </p>
                </div>
                {/* Cái đuôi bong bóng (Dùng hình vuông xoay 45 độ để tạo viền nhọn) */}
                <div className="absolute -bottom-4 left-[30%] w-8 h-8 bg-[#2e026d] border-b-4 border-r-4 border-cyan-400 transform rotate-45 z-40"></div>
                <div className="absolute -bottom-[3px] left-[30%] w-9 h-4 bg-[#2e026d] z-20"></div>
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
    </div>
  );
}
