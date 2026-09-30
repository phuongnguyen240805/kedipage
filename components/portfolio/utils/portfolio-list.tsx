"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Plus, ChevronRight } from "lucide-react";

import FadeIn from "@/components/ui/Fadeoad";
import ScrollRevealHighlight from "@/components/ui/ScrollRevealHighlight";
import Boderyelow from "@/components/ui/boder-yelow";
import CustomCategoryDropdown from "@/components/services-dropdown/page/web-design/web-co-san/CustomCategoryDropdown";
// Import dữ liệu mới từ file projects-data.ts
import {
  projects,
  DROPDOWN_CATEGORIES,
  Project,
} from "@/components/portfolio/utils/projects-data";

export default function PortfolioList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [visibleCount, setVisibleCount] = useState(10);
  const [isFocused, setIsFocused] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 1. Sử dụng danh mục được định nghĩa sẵn hoặc tự động lấy từ data
  const ALL_CATEGORIES = ["Tất cả", ...DROPDOWN_CATEGORIES];

  // 2. Cập nhật logic lọc theo cấu trúc Project mới
  const filteredItems = projects.filter((item: Project) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tag.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "" ||
      selectedCategory === "Tất cả" ||
      item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  const currentItems = filteredItems.slice(0, visibleCount);

  return (
    <section id="section-mau-web" className="w-full bg-[#f4f6f9] py-20 text-kedi-navy">
      <div className="container mx-auto px-4 max-w-[calc(100%-60px)]">
        {/* Header Title */}
        <FadeIn direction="up" amount={0.2}>
          <div className="text-center mb-12">
            <ScrollRevealHighlight className="max-w-3xl mx-auto rounded-xl p-3 items-center justify-center ">
              <h1 className="max-w-3xl mx-auto text-4xl md:text-5xl font-black text-kedi-navy mb-4 uppercase tracking-[-0.035em]">
                Mẫu dự án tiêu biểu
              </h1>
            </ScrollRevealHighlight>
            <p className="text-kedi-navy/60 text-base md:text-lg max-w-3xl mx-auto font-medium leading-relaxed">
              Khám phá các dự án{" "}
              <span className="text-[#92700b] font-bold">
                đã triển khai thành công
              </span>{" "}
              với hiệu quả tối ưu nhất.
            </p>
          </div>
        </FadeIn>

        {/* --- SEARCH & FILTER BAR --- */}
        <div className="sticky top-2 md:top-4 z-[10] mb-12 md:mb-16">
          <FadeIn direction="up" amount={0.1} delay={0.1}>
            <div className="max-w-5xl mx-auto">
              <Boderyelow>
                <div className="flex bg-white rounded-xl flex-col md:flex-row items-stretch md:items-center min-h-[50px] md:min-h-[64px] px-4 relative">
                  {/* Search Area */}
                  <div
                    className="flex flex-1 items-center py-2 md:py-0 relative"
                    ref={dropdownRef}
                  >
                    <Search className="w-5 h-5 text-[#b57e00] flex-shrink-0" />
                    <input
                      type="text"
                      placeholder="Tìm kiếm dự án hoặc ngành nghề..."
                      className="flex-1 px-3 outline-none bg-transparent text-gray-700 text-sm md:text-lg placeholder:text-gray-400 font-medium w-full"
                      value={searchTerm}
                      onFocus={() => setIsFocused(true)}
                      onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setVisibleCount(10);
                      }}
                    />

                    {/* Menu gợi ý nhanh dựa trên Category */}
                    {isFocused && (
                      <div className="absolute top-[calc(100%+10px)] left-0 w-full md:w-[120%] bg-white rounded-xl shadow-2xl border border-gray-100 py-4 z-[110] overflow-hidden">
                        <div className="mb-2">
                          <h4 className="px-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                            Gợi ý ngành nghề
                          </h4>
                          <div className="flex flex-col">
                            {DROPDOWN_CATEGORIES.map((cat) => (
                              <div
                                key={cat}
                                onClick={() => {
                                  setSelectedCategory(cat);
                                  setIsFocused(false);
                                }}
                                className="px-4 py-2 hover:bg-gray-50 flex items-center gap-3 cursor-pointer transition-colors"
                              >
                                <Search size={14} className="text-gray-300" />
                                <span className="text-sm text-gray-600">
                                  {cat}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="hidden md:block h-8 w-[1px] bg-gray-200 mx-4" />
                  <div className="block md:hidden h-[1px] w-full bg-gray-100" />

                  {/* Dropdown Ngành nghề */}
                  <CustomCategoryDropdown
                    options={ALL_CATEGORIES}
                    selected={selectedCategory}
                    onSelect={(cat) => {
                      setSelectedCategory(cat === "Tất cả" ? "" : cat);
                      setVisibleCount(10);
                    }}
                  />
                </div>
              </Boderyelow>
            </div>
          </FadeIn>
        </div>

        {/* 3. Hiển thị Grid kết quả */}
        {currentItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {currentItems.map((item: Project, index) => (
              <FadeIn
                key={item.id}
                direction="up"
                amount={0.2}
                delay={(index % 4) * 0.1}
              >
                <Boderyelow>
                  {/* Link bọc toàn bộ để tối ưu SEO và trải nghiệm người dùng */}
                  <Link
                    href={`/du-an/${item.slug}`}
                    className="group bg-white rounded-[20px] overflow-hidden border border-kedi-navy/10 shadow-[0_14px_40px_-32px_rgba(11,45,91,.35)] hover:-translate-y-1 hover:shadow-[0_24px_60px_-34px_rgba(11,45,91,.42)] transition-all duration-500 flex flex-col h-full relative"
                  >
                    {/* Image Container */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        priority={index < 4}
                      />
                      {/* Overlay nhẹ khi hover */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                    </div>

                    {/* Nội dung Card */}
                    <div className="p-4 flex flex-col flex-grow">
                      <span className="text-[10px] font-black text-[#7b5f07] bg-kedi-yellow/15 self-start px-2.5 py-1 rounded-full mb-2 uppercase tracking-[0.06em]">
                        {item.category}
                      </span>
                      <h3 className="text-base font-bold text-kedi-navy mb-4 line-clamp-2 group-hover:text-[#92700b] transition-colors leading-tight">
                        {item.title}
                      </h3>
                      {/* Nút giả - dạng Text Underline đơn giản */}
                      <div className="mt-auto flex justify-start">
                        <div className="group/btn cursor-pointer text-kedi-navy font-bold text-sm flex items-center gap-1 transition-all duration-300 group-hover:text-[#92700b]">
                          {/* Phần chữ: Hover vào group thì gạch dưới */}
                          <span className="group-hover/btn:underline underline-offset-4 decoration-2">
                            Xem chi tiết
                          </span>

                          {/* Mũi tên: Hover vào group thì dịch chuyển */}
                          <ChevronRight
                            size={16}
                            className="transition-transform duration-300 group-hover/btn:translate-x-1"
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                </Boderyelow>
              </FadeIn>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl font-light italic">
              Không tìm thấy dự án nào phù hợp với yêu cầu của bạn.
            </p>
          </div>
        )}

        {/* Nút XEM THÊM */}
        {visibleCount < filteredItems.length && (
          <FadeIn direction="up" amount={0.5}>
            <div className="flex justify-center mt-20">
              <button
                onClick={handleLoadMore}
                className="group relative inline-flex items-center gap-4 px-10 md:px-12 py-4 md:py-5 bg-kedi-yellow text-kedi-navy font-black text-base md:text-lg rounded-2xl shadow-[0_16px_40px_rgba(255,198,41,.22)] hover:-translate-y-1 hover:bg-[#ffd95e] transition-all active:scale-95"
              >
                <Plus className="w-6 h-6 stroke-[4px]" />
                KHÁM PHÁ THÊM DỰ ÁN
              </button>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
