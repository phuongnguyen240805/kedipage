"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ChevronDown, Monitor, Plus } from "lucide-react";

import { WEBSITE_SAMPLES } from "./webcosan_data";
import FadeIn from "@/components/ui/Fadeoad";
import ScrollRevealHighlight from "@/components/ui/ScrollRevealHighlight";
import Boderyelow from "@/components/ui/boder-yelow";
import CustomCategoryDropdown from "./CustomCategoryDropdown";

export default function Langdingwebcs2() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [visibleCount, setVisibleCount] = useState(10);
  const [isFocused, setIsFocused] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Thêm kiểu MouseEvent cho tham số event
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

  // 1. Tự động lấy danh sách tất cả các tags duy nhất từ dữ liệu mẫu
  const ALL_CATEGORIES = [
    "Tất cả",
    ...Array.from(new Set(WEBSITE_SAMPLES.flatMap((sample) => sample.tags))),
  ];

  // 2. Logic lọc kết hợp giữa Ô tìm kiếm và Tags ngành nghề
  const filteredItems = WEBSITE_SAMPLES.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      );

    const matchesCategory =
      selectedCategory === "" || item.tags.includes(selectedCategory);

    return matchesSearch && matchesCategory;
  });

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  const currentItems = filteredItems.slice(0, visibleCount);

  return (
    <section id="section-mau-web" className="py-20 w-full bg-white">
      <div className="container mx-auto px-4 mx-auto max-w-[calc(100%-60px)]">
        {/* Header Title */}
        <FadeIn direction="up" amount={0.2}>
          <div className="text-center mb-12">
            <ScrollRevealHighlight className="max-w-3xl mx-auto rounded-xl p-3 items-center justify-center ">
              <h1 className="max-w-3xl mx-auto text-5xl md:text-5xl font-bold text-white mb-4">
                MẪU WEBSITE
              </h1>
            </ScrollRevealHighlight>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto font-light tracking-wide italic leading-relaxed">
              Khám phá bộ sưu tập mẫu website{" "}
              <span className="text-[#b9973f] font-semibold">
                thiết kế tinh gọn, hiện đại
              </span>{" "}
              và tối ưu chuyển đổi
            </p>
          </div>
        </FadeIn>
        {/* --- SEARCH & FILTER BAR --- */}
        <div className="sticky top-2 md:top-4 z-[10] mb-12 md:mb-16">
          <FadeIn direction="up" amount={0.1} delay={0.1}>
            <div className="max-w-5xl mx-auto ">
              <Boderyelow>
                <div className="flex bg-white rounded-xl flex-col md:flex-row items-stretch md:items-center min-h-[50px] md:min-h-[64px] px-4 relative">
                  {/* Search Area - Cập nhật ở đây */}
                  <div
                    className="flex flex-1 items-center py-2 md:py-0 relative"
                    ref={dropdownRef}
                  >
                    <Search className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <input
                      type="text"
                      placeholder="Tìm kiếm dự án chất lượng..."
                      className="flex-1 px-3 outline-none bg-transparent text-gray-700 text-sm md:text-lg placeholder:text-gray-400 font-medium w-full"
                      value={searchTerm}
                      onFocus={() => setIsFocused(true)} // Thêm dòng này
                      onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setVisibleCount(10);
                      }}
                    />

                    {/* PHẦN GỢI Ý KHI CLICK (Dưới đây là UI mới) */}
                    {isFocused && (
                      <div className="absolute top-[calc(100%+10px)] left-0 w-full md:w-[120%] bg-white rounded-xl shadow-2xl border border-gray-100 py-4 z-[110] overflow-hidden">
                        {/* 1. Gợi ý theo ngành nghề (Lấy từ ALL_CATEGORIES của bạn) */}
                        <div className="mb-2">
                          <h4 className="px-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                            Ngành nghề phổ biến
                          </h4>
                          <div className="flex flex-col">
                            {ALL_CATEGORIES.slice(1, 6).map((cat) => (
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

                        <div className="h-[1px] bg-gray-100 my-2 mx-4" />

                        {/* 2. Các liên kết nhanh hoặc dịch vụ khác */}
                        <div>
                          <h4 className="px-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                            Dịch vụ
                          </h4>
                          <div
                            className="px-4 py-2 hover:bg-gray-50 text-sm text-gray-600 cursor-pointer"
                            onClick={() => setIsFocused(false)}
                          >
                            Tư vấn thiết kế UI/UX
                          </div>
                          <div
                            className="px-4 py-2 hover:bg-gray-50 text-sm text-gray-600 cursor-pointer"
                            onClick={() => setIsFocused(false)}
                          >
                            Báo giá trọn gói
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Ngăn cách dọc (Chỉ hiện trên Desktop) */}
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 ">
            {currentItems.map((item, index) => (
              <FadeIn
                key={item.id}
                direction="up"
                amount={0.2}
                delay={(index % 5) * 0.1}
              >
                <Boderyelow>
                  <Link
                    href={item.detailUrl || `/mau-website/${item.id}`}
                    className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full relative"
                  >
                    {/* Image Container */}
                    <div className="relative aspect-[3/4.2] overflow-hidden bg-gray-50">
                      <div className="w-full h-full overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={500}
                          height={1800}
                          style={
                            {
                              "--scroll-dist": "calc(-100% + 320px)",
                            } as React.CSSProperties
                          }
                          /* Bạn chỉ cần dùng đúng class này, CSS sẽ tự nhận diện thiết bị */
                          className="w-full h-auto object-top mobile-scroll-effect"
                        />
                      </div>

                      {/* Overlay: Trên mobile, khi chạm vào ảnh thì overlay hiện lên đồng thời ảnh trượt */}
                      <div className="absolute inset-0  flex flex-col items-center justify-center gap-3 p-3  transition-opacity">
                        <div className="mt-auto flex flex-col gap-2 w-full">
                          {/* Nút Xem Live */}
                          <span
                            onClick={(e) => {
                              e.preventDefault();
                              window.open(item.demoUrl, "_blank");
                            }}
                            className="w-full py-2 bg-[#f98a22] text-white rounded-lg font-extrabold text-[12px] flex items-center justify-center gap-2"
                          >
                            <Monitor size={14} strokeWidth={3} />
                            XEM LIVE
                          </span>
                          {/* Nút Xem Chi Tiết (detailUrl) */}
                          <Link
                            href={item.detailUrl || `/mau-website/${item.id}`}
                            className="w-full py-2 bg-white text-black rounded-lg font-extrabold text-[12px] flex items-center justify-center gap-2 hover:bg-gray-100 hover:scale-105 transition-all shadow-lg cursor-pointer"
                          >
                            <Plus size={14} strokeWidth={3} />
                            CHI TIẾT MẪU
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Nội dung Card */}
                    <div className="p-4 flex flex-col flex-grow">
                      <h3 className="text-sm font-extrabold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#f91b7e] transition-colors leading-tight">
                        {item.title}
                      </h3>
                      <div className="mt-auto flex flex-wrap gap-1">
                        {item.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="text-[8px] font-black text-gray-400 bg-gray-100 px-2 py-1 rounded-md uppercase"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </Boderyelow>
              </FadeIn>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl">
              Không tìm thấy mẫu website nào phù hợp.
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
              </button>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
