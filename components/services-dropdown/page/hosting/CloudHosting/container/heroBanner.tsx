"use client";
import FadeIn from '@/components/ui/Fadeoad';
import React, { useState, useEffect } from 'react';

const HeroBanner = () => {
  const menuItems = [
    { name: "Website Hosting", id: "website-hosting" },
    { name: "Web & Mobile Apps", id: "web-mobile" },
    { name: "Game Development", id: "game-dev" },
    { name: "Video Streaming", id: "video-streaming" },
    { name: "Startup", id: "startup" },
    { name: "Private Cloud", id: "private-cloud" },
    { name: "Cloud Storage", id: "cloud-storage" },
    { name: "Tích hợp hệ thống", id: "integration" }
  ];

  const [activeSection, setActiveSection] = useState<string>(menuItems[0].id);

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = menuItems[0].id;
      for (const item of menuItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 90 && rect.bottom > 90) {
            currentSection = item.id;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset 80px để không bị thanh menu che mất tiêu đề khi cuộn đến
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <FadeIn>
        <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden font-sans">
          {/* Nền Gradient và Hình ảnh */}
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `linear-gradient(to right, rgba(0, 51, 153, 1) 0%, rgba(0, 51, 153, 0.8) 40%, rgba(0, 51, 153, 0.4) 100%), url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2000')` 
            }}
          >
            <div className="absolute inset-0 bg-blue-900/20 backdrop-blur-[1px]"></div>
          </div>

          {/* Nội dung chính */}
          <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-6 md:px-12">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl leading-tight tracking-tight">
              Giải pháp hạ tầng IT/Cloud toàn diện
            </h1>
          </div>
          
          <div className="absolute right-0 top-0 h-full w-1/3 pointer-events-none opacity-30 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
      </FadeIn>

      {/* THANH MENU STICKY */}
      <nav className="sticky top-0 z-10 bg-[#003399]/90 backdrop-blur-md border-b border-white/10 shadow-lg">
        <div className="container mx-auto">
          <ul className="flex flex-nowrap overflow-x-auto no-scrollbar md:flex-wrap justify-between items-center py-3 px-4 md:px-0 text-white/90 text-[13px] font-medium">
            {menuItems.map((item, index) => (
              <li
                key={index}
                onClick={() => scrollToSection(item.id)}
                className={`cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 py-2 px-3 whitespace-nowrap ${activeSection === item.id ? 'bg-white/20 text-white font-bold shadow' : ''}`}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default HeroBanner;