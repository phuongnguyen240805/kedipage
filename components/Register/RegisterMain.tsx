'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import CustomerForm from './type/CustomerForm';
import PartnerForm from './type/PartnerForm';
import CandidateForm from './type/CandidateForm';
import Boderyelow from '../ui/boder-yelow';

const RegisterMain = () => {
  const [activeTab, setActiveTab] = useState('customer');

  return (
    <Boderyelow>
      <div className="flex min-h-screen w-full bg-[#0a0a0c] font-['Space_Grotesk'] text-white overflow-hidden rounded-xl">
        {/* Left Side: Visual Panel with Background Image */}
        <div className="hidden lg:flex lg:w-1/2 relative flex-col items-center justify-center p-12 overflow-hidden">
          {/* Background Image Overlay */}
          <div className="absolute inset-0 z-0">
            <Image 
              src="https://res.cloudinary.com/dzkcqktcl/image/upload/v1769356982/unnamed_rn5jxn.png" 
              alt="Background" 
              fill
              className="object-cover opacity-50" // Chỉnh opacity nếu muốn text nổi hơn
              priority
            />
            {/* Lớp phủ gradient để text dễ đọc hơn trên nền ảnh */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0c]/80 via-[#0a0a0c]/40 to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-lg text-center">
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2547f4] to-[#a855f7]">
                Kedi
              </span>
            </h1>
            <p className="text-[#909acb] text-xl font-light leading-relaxed">
              Giải pháp đột phá giúp doanh nghiệp của bạn bứt phá và tăng trưởng bền vững trong kỷ nguyên công nghệ.
            </p>
            
            <div className="mt-12 flex items-center justify-center gap-4 text-[10px] font-bold text-[#2547f4] uppercase tracking-[0.3em]">
              <span className="w-12 h-[1px] bg-[#2547f4]/40"></span>
              Hệ thống KEDI
              <span className="w-12 h-[1px] bg-[#2547f4]/40"></span>
            </div>
          </div>
        </div>

        {/* Right Side: Form Container */}
        <div className="w-full lg:w-1/2 flex flex-col bg-[#101322] p-8 lg:p-16 overflow-y-auto border-l border-white/5">
          <div className="max-w-md mx-auto w-full">
            <div className="mb-10 text-center lg:text-left">
              <h2 className="text-4xl font-black tracking-tight mb-3 uppercase">KHỞI TẠO KẾT NỐI</h2>
              <p className="text-[#909acb] text-sm tracking-wide">Chọn vai trò của bạn để bắt đầu hành trình cùng chúng tôi.</p>
            </div>

            <div className="flex p-1 rounded-full bg-[#1c213a] mb-12 border border-white/5">
              {['customer', 'partner', 'candidate'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-3 text-[10px] font-black uppercase tracking-widest transition-all rounded-full ${
                    activeTab === tab
                      ? 'bg-[#2547f4] text-white shadow-[0_0_15px_rgba(37,71,244,0.4)]'
                      : 'text-[#909acb] hover:text-white'
                  }`}
                >
                  {tab === 'customer' ? 'Khách hàng' : tab === 'partner' ? 'Đối tác' : 'Ứng viên'}
                </button>
              ))}
            </div>

            <div className="min-h-[400px]">
              {activeTab === 'customer' && <CustomerForm />}
              {activeTab === 'partner' && <PartnerForm />}
              {activeTab === 'candidate' && <CandidateForm />}
            </div>
          </div>
        </div>

        <style jsx global>{`
          .underline-input {
            border: none !important;
            border-bottom: 1px solid #222949 !important;
            background: transparent !important;
            border-radius: 0 !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
            color: white !important;
            transition: all 0.3s ease !important;
          }
          .underline-input:focus {
            border-bottom-color: #2547f4 !important;
            box-shadow: 0 4px 12px -6px rgba(37, 71, 244, 0.5) !important;
            outline: none !important;
            ring: 0 !important;
          }
          .gradient-btn {
            position: relative;
            background: #101322;
            background-clip: padding-box;
            border: 2px solid transparent;
          }
          .gradient-btn::before {
            content: '';
            position: absolute;
            top: 0; right: 0; bottom: 0; left: 0;
            z-index: -1;
            margin: -2px;
            border-radius: inherit;
            background: linear-gradient(to right, #a855f7, #2547f4);
          }
        `}</style>
      </div>
    </Boderyelow>
  );
};

export default RegisterMain;