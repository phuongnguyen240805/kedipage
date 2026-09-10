'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, ChevronDown, Monitor, ExternalLink, Plus } from 'lucide-react';
import { WEBSITE_SAMPLES } from '../services-dropdown/page/web-design/web-co-san/webcosan_data';
import FadeIn from './Fadeoad';

export default function Langdingmauweb2() {
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCount, setVisibleCount] = useState(8);

  // 1. Logic lọc dữ liệu dựa trên tiêu đề hoặc tag
  const filteredItems = useMemo(() => {
    return WEBSITE_SAMPLES.filter(
      (item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );
  }, [searchTerm]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const currentItems = filteredItems.slice(0, visibleCount);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Title chuẩn UI mẫu */}
        <FadeIn direction="up" amount={0.2}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 uppercase tracking-tight">
              Danh sách tất cả
            </h2>
            <div className="inline-block relative">
              <div className="bg-[#f91b7e] text-white text-2xl md:text-3xl font-black px-10 py-3 rounded-xl rotate-[-2deg] shadow-lg relative z-10">
                MẪU WEBSITE
              </div>
              {/* Trang trí máy bay giấy như trong ảnh */}
              <div className="absolute -top-6 -right-10 opacity-60">
                <Image
                  src="/assets/paper-plane.png"
                  alt="icon"
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Search & Filter Bar */}
        <FadeIn direction="up" amount={0.2} delay={0.1}>
          <div className="max-w-5xl mx-auto mb-16 flex flex-col md:flex-row border-2 border-gray-100 rounded-2xl md:rounded-full overflow-hidden shadow-2xl focus-within:border-[#f98a22] transition-all bg-white">
            <div className="flex-1 flex items-center px-8 py-5">
              <Search className="w-6 h-6 text-purple-600 mr-4" />
              <input
                type="text"
                placeholder="Tìm mẫu website theo từ khoá"
                className="w-full outline-none text-gray-800 text-lg font-medium"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setVisibleCount(8);
                }}
              />
            </div>
            <div className="hidden md:block w-[1px] h-10 bg-gray-200 self-center"></div>
            <div className="flex items-center px-8 py-5 cursor-pointer group bg-gray-50/50 hover:bg-gray-100 transition-colors">
              <span className="text-gray-700 font-bold mr-3 group-hover:text-purple-600 whitespace-nowrap">
                Tất cả ngành
              </span>
              <ChevronDown className="w-5 h-5 text-gray-400 group-hover:rotate-180 transition-transform" />
            </div>
            <button className="bg-[#ff5d22] text-white font-bold px-10 py-5 flex items-center gap-2 hover:bg-[#e64d15] transition-all">
              <Search size={20} />
              Tìm kiếm mẫu
            </button>
          </div>
        </FadeIn>

        {/* Lưới danh sách mẫu website */}
        {currentItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentItems.map((item, index) => (
              <FadeIn
                key={item.id}
                direction="up"
                amount={0.2}
                delay={(index % 4) * 0.1}
              >
                <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full border border-gray-100 relative">
                  {/* Container Ảnh có hiệu ứng lướt lên */}
                  <div className="relative aspect-[3/4.2] overflow-hidden cursor-pointer bg-gray-50">
                    <div className="w-full h-full overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={500}
                        height={1800}
                        className="w-full h-auto object-top transition-transform duration-[6000ms] ease-in-out group-hover:-translate-y-[calc(100%-420px)]"
                        priority={index < 4}
                      />
                    </div>

                    {/* Overlay Nút bấm chuẩn UI */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4 p-6 backdrop-blur-[2px] bg-black/30">
                      <div className="mt-auto flex flex-col gap-3 w-full">
                        <a
                          href={item.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="w-full py-3.5 bg-[#f98a22] text-white rounded-xl font-extrabold text-sm flex items-center justify-center gap-2 hover:bg-[#e67a15] hover:scale-105 transition-all shadow-xl"
                        >
                          <Monitor size={18} strokeWidth={3} />
                          XEM LIVE
                        </a>
                        <Link
                          href={item.detailUrl}
                          className="w-full py-3.5 bg-white/20 backdrop-blur-xl border border-white/40 text-white rounded-xl font-extrabold text-sm flex items-center justify-center gap-2 hover:bg-white/30 hover:scale-105 transition-all shadow-xl"
                        >
                          <ExternalLink size={18} strokeWidth={3} />
                          CHI TIẾT MẪU
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Phần thông tin tiêu đề và tags */}
                  <div className="p-6 flex flex-col flex-grow">
                    <Link href={item.detailUrl}>
                      <h3 className="text-[17px] font-extrabold text-gray-900 mb-4 line-clamp-2 group-hover:text-[#f91b7e] transition-colors leading-snug h-[48px]">
                        {item.title}
                      </h3>
                    </Link>
                    <div className="mt-auto flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-black text-gray-400 bg-gray-100 px-3 py-1.5 rounded-lg uppercase tracking-widest border border-gray-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl italic">
              Không tìm thấy mẫu website phù hợp với &quot;{searchTerm}&quot;
            </p>
          </div>
        )}

        {/* Nút XEM THÊM */}
        {visibleCount < filteredItems.length && (
          <FadeIn direction="up" amount={0.5}>
            <div className="flex justify-center mt-20">
              <button
                onClick={handleLoadMore}
                className="group relative inline-flex items-center gap-4 px-12 py-5 bg-gradient-to-r from-[#f98a22] to-[#ff5d22] text-white font-black text-xl rounded-2xl shadow-[0_15px_40px_rgba(249,138,34,0.4)] hover:shadow-[0_20px_50px_rgba(249,138,34,0.6)] hover:-translate-y-1 transition-all active:scale-95"
              >
                <Plus className="w-6 h-6 stroke-[4px]" />
                XEM THÊM MẪU WEBSITE KHÁC
                <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
