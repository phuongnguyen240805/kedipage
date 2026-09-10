// container/ServiceListLayout.tsx
"use client";

import FadeIn from '@/components/ui/Fadeoad';
import React from 'react';
import Boderyelow from "@/components/ui/boder-yelow"; // Import viền vàng đồng bộ

interface ServiceItem {
  title: string;
  description: string | React.ReactNode;
  icon: React.ReactNode;
  bgColor?: string;
}

interface SystemIntegrationProps {
  mainTitle: string;
  subTitle: string;
  services: ServiceItem[];
}

const SystemIntegration = ({ mainTitle, subTitle, services }: SystemIntegrationProps) => {
  return (
    <section className="py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* TIÊU ĐỀ: Load riêng biệt phía trên */}
        <FadeIn direction="up" amount={0.3}>
          <h2 className="text-3xl md:text-5xl font-black text-[#002B66] mb-6 uppercase tracking-tighter">
            {mainTitle}
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mb-16 font-medium text-lg italic">
            {subTitle}
          </p>
        </FadeIn>

        {/* LƯỚI DỊCH VỤ: Load từng thẻ card với delay */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <FadeIn 
              key={index} 
              direction="up" 
              delay={index * 0.15} // Thẻ sau hiện chậm hơn thẻ trước 0.15s
              amount={0.2}
            >
              <Boderyelow>
                <div className="bg-white p-10 rounded-2xl flex flex-col items-center h-full group transition-all duration-500 hover:-translate-y-2">
                  
                  {/* Icon Container với hiệu ứng xoay khi hover */}
                  <div className={`${service.bgColor || 'bg-blue-600'} p-6 rounded-2xl mb-8 text-white shadow-lg transform transition-transform duration-500 group-hover:rotate-[10deg] group-hover:scale-110`}>
                    {React.cloneElement(service.icon as React.ReactElement, { size: 32 })}
                  </div>
                  
                  <h3 className="text-2xl font-black text-gray-800 mb-5 uppercase tracking-tight group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <div className="text-gray-500 text-base leading-relaxed font-medium">
                    {service.description}
                  </div>

                  {/* Trang trí nhẹ phía dưới card */}
                  <div className="mt-8 w-10 h-1 bg-gray-100 group-hover:w-20 group-hover:bg-blue-400 transition-all duration-500 rounded-full"></div>
                </div>
              </Boderyelow>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemIntegration;