import React from 'react';
import FadeIn from "@/components/ui/Fadeoad";
import Boderyelow from "@/components/ui/boder-yelow"; // Import viền vàng đồng bộ

const WebMobileService = () => {
  const features = [
    "Xây dựng nhanh chóng các máy chủ Frontend/Backend của Web và ứng dụng di động của bạn bằng cách sử dụng nền tảng đám mây được thiết kế dành cho nhà phát triển",
    "Hệ thống hỗ trợ đa dạng các ứng dụng được cài đặt sẵn. Giúp rút ngắn thời gian triển khai trên một máy chủ mới",
    "Tương thích hoàn toàn với các ngôn ngữ lập trình và hệ quản trị cơ sở dữ liệu như Python, Nodejs, Java, PHP, MySQL, SQL Server"
  ];

  const techLogos = [
    { name: 'Python', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Node.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Java', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'MySQL', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'PHP', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'SQL Server', url: 'http://cloudfly.vn/image/solution/sql.svg' },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* TIÊU ĐỀ: Load riêng */}
        <FadeIn direction="up" amount={0.3}>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-[#002855] text-3xl md:text-5xl font-black uppercase mb-6 tracking-tighter">
              Web & Mobile Apps
            </h2>
            <p className="text-blue-600 font-bold text-lg leading-relaxed uppercase tracking-widest">
              Giải pháp hạ tầng tối ưu cho ứng dụng đa nền tảng
            </p>
          </div>
        </FadeIn>

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* BÊN TRÁI: ĐIỂM NỔI BẬT & LOGO */}
          <div className="flex-1 space-y-12 order-2 lg:order-1 w-full">
            <ul className="space-y-8">
              {features.map((item, index) => (
                <FadeIn 
                  key={index} 
                  direction="up" 
                  delay={index * 0.15} // Load từng dòng một
                  amount={0.2}
                >
                  <li className="flex items-start gap-5 group">
                    <div className="mt-1 flex-shrink-0">
                      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-gray-800 text-lg md:text-xl leading-snug font-bold">
                      {item}
                    </p>
                  </li>
                </FadeIn>
              ))}
            </ul>

            {/* LƯỚI LOGO: Load sau các dòng text */}
            <FadeIn direction="up" delay={0.6} amount={0.2}>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-6 pt-10 items-center opacity-60">
                {techLogos.map((logo, index) => (
                  <div key={index} className="flex justify-center grayscale hover:grayscale-0 hover:scale-110 transition-all duration-500 cursor-pointer">
                    <img src={logo.url} alt={logo.name} className="h-10 md:h-12 w-auto object-contain" />
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* BÊN PHẢI: MOCKUP ĐIỆN THOẠI BỌC VIỀN VÀNG */}
          <div className="flex-1 relative order-1 lg:order-2 flex justify-center w-full">
            <FadeIn direction="up" delay={0.3} amount={0.2}>
              <div className="relative w-full max-w-[450px]">
                <Boderyelow>
                  <div className="relative z-10 rounded-3xl overflow-hidden bg-white shadow-2xl">
                    <img 
                      src="https://cloudfly.vn/_next/image?url=%2Fimage%2Fsolution%2Fmobile_app.webp&w=1080&q=75" 
                      alt="Mobile App Mockup" 
                      className="w-full h-auto"
                    />
                  </div>
                </Boderyelow>
                {/* Hiệu ứng tia sáng nền */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-400 rounded-full blur-[120px] opacity-20 -z-10 animate-pulse"></div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WebMobileService;