import React from 'react';
import FadeIn from '@/components/ui/Fadeoad';

const JourneySection = () => {
  return (
      <section className="py-24 px-4  overflow-hidden bg-white font-serif" id="story">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
              <h2 className="text-[#cb8096] italic text-3xl font-serif mb-2">
                Hành Trình
              </h2>
              <h3 className="text-4xl md:text-5xl font-sans leading-tight text-black">
                Từ một buổi chiều mưa đến mãi mãi
              </h3>
            </header>
            </FadeIn>
              <FadeIn>
            <div className="space-y-6 text-lg leading-relaxed text-black font-sans">
              <p>
                Mọi chuyện bắt đầu từ một cuộc gặp gỡ tình cờ trong một quán cà phê nhỏ ở London giữa một cơn mưa bất chợt.
                Sau khi cùng nhau che một chiếc ô và trò chuyện ba tiếng đồng hồ về những cuốn sách quý hiếm, chúng tôi biết đây là một điều gì đó đặc biệt.
              </p>
              <p>
                Ba năm, sáu quốc gia và vô số kỷ niệm trôi qua, Julian đã cầu hôn trên một vách đá ở Santorini.
                Chúng tôi vô cùng vui mừng được mời các bạn trở lại nơi chúng tôi đã đính hôn để cùng nhau kỷ niệm khởi đầu cuộc sống chung.
              </p>
            </div>
            </FadeIn>
              <FadeIn>
            {/* Timeline tóm tắt */}
            <div className="flex gap-4 pt-4">
              {[
                { year: '2021', label: 'Gặp nhau' },
                { year: '2023', label: 'Đính hôn' },
                { year: '2024', label: 'Lễ cưới' }
              ].map((milestone, index) => (
                <div 
                  key={index} 
                  className="text-center p-4 bg-[#cb8096]/5 dark:bg-[#cb8096]/10 rounded-xl flex-1 transition-transform hover:scale-105"
                >
                  <p className="text-[#cb8096] font-bold text-2xl">{milestone.year}</p>
                  <p className="text-sm font-medium opacity-60 uppercase tracking-widest dark:text-black">
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