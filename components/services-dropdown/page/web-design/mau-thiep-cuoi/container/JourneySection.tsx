import React from 'react';
import FadeIn from '@/components/ui/Fadeoad';

const JourneySection = () => {
  return (
      <section className="overflow-hidden bg-[#FFFDFC] px-4 py-24 font-serif" id="story">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Khối hình ảnh bên trái */}
          <div className="relative">
            {/* Hiệu ứng trang trí phía sau */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#cb8096]/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 grid grid-cols-2 gap-4">
                <FadeIn>
              <div className="mt-8 relative h-64 w-full">
                <img
                  alt="Couple walking"
                  className="rounded-2xl shadow-lg w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWKTOvCnVFYA25JfohHswK4CBjgEer59Xh5w3ZeJpJTsUaITajInvOR3BERt2UJw5kgrHAkPNDOEN-9jCJIJKjkOSu5oUsMGWzkc9inKWb0blpNgA7ArK2_S6om0GfUOdDo53uWuUO8lPa8c3iUrDLwhFYCOZnwt3_mwi62uUGALZaYQ6DHanputJoVls8irojJlhSB0wZDGLp_Vr4aSIJFL747gBybWTr0CQVO1oUelhX1IvtauOh7JTrycwsoTPlh-qj7UoBxEKL"
                />
              </div>
              </FadeIn>
              <FadeIn>
              <div className="relative h-64 w-full">
                <img
                  alt="Wedding flowers"
                  className="rounded-2xl shadow-lg w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8CNRFEECFNj-yR_NCEFYfpZYzf1iMymaSucKXNBZtYIUfP5Z_5CW0dQ5Vbb49IRIQJCdc3ElrdhOJLxjJCqXZMEyulm-sPOqGdQrjAEgoBB7rTo338LMjoJalE02JRCq4oo8jeO-fs0OsyzQLYN3DeBXYm_Tp300PS621k09JbruRxD9a03uvIz7hEXDKP0-TUB5SgGCunGS-GW2BMPYry8tRYCf1gXY-KHX-xvte5zYSBO1bBqmkbexGbixmuIcKHwlD1aQAvnOR"
                />
              </div>
              </FadeIn>
            
              <div className="col-span-2 relative h-72 w-full">
                <img
                  alt="Sunset proposal"
                  className="rounded-2xl shadow-lg w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzOoDmwqzj3J3uRgP4Q44xVoaRo-HLJxH1PZQOgXurYYPS1oKappoKJtfbRdCEaQff4fDQnrs76E-e_hNSI6vcnJ9xucY1c74A6YVXYrLUt-Ox2BNnte9rHm4xJgdi-YpCsWaTac5-gpiRovlw4iKC4kqbfCWOgucb_RpyisQ45-srEPzE-WscBB8j5r4lHYCLo6K9ui8-mCM3213a240Z9mzF2698PlA9yTD_azBF-KmbxrehwSjH5rTcN6kEIyR4t8oEkfCRjqFI"
                />
              </div>
           
            </div>
          </div>
          {/* Khối nội dung bên phải */}
          <div className="space-y-8">
              <FadeIn>
            <header>
              <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.24em] text-[#0B2D5B]/55">03 BƯỚC ĐỂ BẮT ĐẦU</p>
              <h2 className="mb-2 font-serif text-3xl italic text-[#f44e77]">
                Hành trình của một tấm thiệp
              </h2>
              <h3 className="text-4xl md:text-5xl font-sans leading-tight text-black">
                Từ ý tưởng đến lời mời mang dấu ấn riêng
              </h3>
            </header>
            </FadeIn>
              <FadeIn>
            <div className="space-y-6 font-sans text-lg leading-relaxed text-[#0B2D5B]/75">
              <p>
                Bắt đầu bằng việc chọn phong cách phù hợp với sự kiện của bạn. Từ bố cục, màu sắc đến hình ảnh, mỗi chi tiết đều có thể điều chỉnh để thiệp không giống một mẫu có sẵn.
              </p>
              <p>
                Sau khi hoàn thiện nội dung, bạn có thể chia sẻ thiệp trực tuyến, cập nhật thông tin khi cần và theo dõi phản hồi của khách mời trong một trải nghiệm thống nhất.
              </p>
            </div>
            </FadeIn>
              <FadeIn>
            {/* Timeline tóm tắt */}
            <div className="flex gap-4 pt-4">
              {[
                { year: '01', label: 'Chọn mẫu' },
                { year: '02', label: 'Cá nhân hóa' },
                { year: '03', label: 'Chia sẻ' }
              ].map((milestone, index) => (
                <div 
                  key={index} 
                  className="flex-1 rounded-2xl border border-[#0B2D5B]/8 bg-white p-4 text-center shadow-sm transition-transform hover:-translate-y-1"
                >
                  <p className="text-2xl font-bold text-[#f44e77]">{milestone.year}</p>
                  <p className="text-sm font-medium uppercase tracking-widest text-[#0B2D5B]/55">
                    {milestone.label}
                  </p>
                </div>
                
              ))}
            </div>
            </FadeIn>
          </div>
          </div>
          </section>

  );
};

export default JourneySection;