import React from 'react';
import FadeIn from "@/components/ui/Fadeoad";
import Boderyelow from "@/components/ui/boder-yelow"; // Đảm bảo import viền vàng đồng bộ

interface ServiceDetailProps {
  title: string;
  benefits: string[];
  imageSrc: string;
  imageAlt?: string;
  reverse?: boolean;
  bgColor?: string;
  accentColor?: string;
}

const ServiceDetail = ({
  title,
  benefits,
  imageSrc,
  imageAlt = "Service illustration",
  reverse = false,
  bgColor = "bg-[#f8faff]",
  accentColor = "#2d7cf3"
}: ServiceDetailProps) => {
  return (
    <section className={`py-20 ${bgColor} overflow-hidden`}>
      <div className="container mx-auto px-4 md:px-12">
        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}>
          
          {/* CỘT NỘI DUNG VĂN BẢN */}
          <div className="flex-1 space-y-10">
            {/* Tiêu đề load riêng */}
            <FadeIn direction="up" amount={0.3}>
              <h2 className="text-[#002855] text-3xl md:text-5xl font-black uppercase tracking-tighter leading-tight">
                {title}
              </h2>
              <div className="w-20 h-1.5 mt-4 rounded-full" style={{ backgroundColor: accentColor }}></div>
            </FadeIn>
            
            <ul className="space-y-6">
              {benefits.map((text, index) => (
                /* Load từng dòng lợi ích với delay tăng dần */
                <FadeIn 
                  key={index} 
                  direction="up" 
                  delay={index * 0.15} 
                  amount={0.2}
                >
                  <li className="flex items-start gap-5 group">
                    <div className="mt-1 flex-shrink-0">
                      <div 
                        className="w-7 h-7 rounded-lg flex items-center justify-center shadow-lg transform transition-transform group-hover:rotate-12"
                        style={{ backgroundColor: accentColor }}
                      >
                        <svg 
                          className="w-4 h-4 text-white" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor" 
                          strokeWidth={4}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-[#334155] text-lg md:text-xl leading-relaxed font-bold">
                      {text}
                    </p>
                  </li>
                </FadeIn>
              ))}
            </ul>
          </div>

          {/* CỘT HÌNH ẢNH BỌC VIỀN VÀNG */}
          <div className="flex-1 w-full max-w-[600px]">
            <FadeIn direction={reverse ? "left" : "right"} delay={0.3} amount={0.2}>
              <div className="relative group">
                {/* Hiệu ứng hào quang nền */}
                <div 
                  className="absolute -inset-6 rounded-full blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-1000"
                  style={{ backgroundColor: accentColor }}
                ></div>
                
                <Boderyelow>
                  <div className="relative z-10 rounded-2xl overflow-hidden bg-white">
                    <img 
                      src={imageSrc} 
                      alt={imageAlt}
                      className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-110"
                    />
                  </div>
                </Boderyelow>

                {/* Phần trang trí góc ảnh */}
                <div 
                  className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full opacity-20 blur-2xl"
                  style={{ backgroundColor: accentColor }}
                ></div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;