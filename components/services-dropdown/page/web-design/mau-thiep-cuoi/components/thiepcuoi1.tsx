"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { Plus, Heart, Eye } from "lucide-react";
import FadeIn from "@/components/ui/Fadeoad";
import Boderyelow from "@/components/ui/boder-yelow";
import ThiepCuoiModal, { WebsiteItem } from "./ThiepCuoiModal";

interface WebsiteLibraryProps {
  data: WebsiteItem[];
  initialVisible?: number;
}

// Danh sách các mục lọc (phải khớp với tag trong data của bạn)
const CATEGORIES = [
  { id: "all", label: "Tất cả" },
  { id: "wedding", label: "Thiệp cưới" },
  { id: "birthday", label: "Thiệp sinh nhật" },
  { id: "graduation", label: "Thiệp tốt nghiệp" },
  { id: "event", label: "Sự kiện" },
  { id: "anniversary", label: "Kỷ niệm" },
  { id: "wishes", label: "Lời chúc" },
  { id: "others", label: "Khác" },
];

export default function Thiepcuoi1({
  data = [],
  initialVisible = 10,
}: WebsiteLibraryProps) {
  const [visibleCount, setVisibleCount] = useState(initialVisible);
  const [activeTab, setActiveTab] = useState("all"); // State quản lý tab đang chọn
  const [likedItems, setLikedItems] = useState<
    Record<string | number, boolean>
  >({});
  const [selectedItem, setSelectedItem] = useState<WebsiteItem | null>(null);

  // Reset số lượng hiển thị khi chuyển Tab
  useEffect(() => {
    setVisibleCount(initialVisible);
  }, [activeTab, initialVisible]);

  // Logic lọc dữ liệu theo Tab
  const filteredData = useMemo(() => {
    if (activeTab === "all") return data;
    return data.filter((item) => item.tags?.includes(activeTab));
  }, [data, activeTab]);

  const toggleLike = (e: React.MouseEvent, id: string | number) => {
    e.preventDefault();
    e.stopPropagation();
    setLikedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const currentItems = filteredData.slice(0, visibleCount);

  return (
    <section className="py-10 md:py-20 w-full relative">
      <div className="container mx-auto px-2 md:px-4 mx-auto max-w-[calc(100%-60px)]">
        {/* --- PHẦN MỤC LỌC (CATEGORIES) --- */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border-2 ${
                activeTab === cat.id
                  ? "bg-[#ff8f9c] text-white border-[#ff8f9c] shadow-lg"
                  : "bg-gray-50 text-gray-500 border-transparent hover:bg-gray-100"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* GRID DANH SÁCH MẪU */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-3 md:gap-6">
          {currentItems.map((item, index) => (
            <FadeIn
              key={item.id}
              direction="up"
              amount={0.2}
              delay={(index % 6) * 0.05}
            >
              <Boderyelow>
                <div
                  onClick={() => setSelectedItem(item)}
                  className="group rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 relative block cursor-pointer bg-white"
                >
                  <div className="relative aspect-[3/4.2] overflow-hidden bg-gray-50">
                    <Image
                      src={item.image}
                      alt="Wedding Sample"
                      width={350}
                      height={1000}
                      style={
                        {
                          "--scroll-dist": "calc(-100% + 320px)",
                        } as React.CSSProperties
                      }
                      className="w-full h-auto object-top mobile-scroll-effect transition-transform ease-in-out"
                    />

                    {/* Like & Label */}
                    <div className="absolute top-2 left-2 md:top-4 md:left-4 z-20">
                      <div className="transition-all duration-300 group-hover:scale-0 group-hover:opacity-0">
                        <span
                          className={`${item.isPremium ? "bg-purple-600" : "bg-blue-500"} text-white text-[8px] md:text-[10px] font-black px-2 md:px-3 py-0.5 md:py-1 rounded-full uppercase shadow-lg`}
                        >
                          {item.isPremium ? "Premium" : "Basic"}
                        </span>
                      </div>
                      <button
                        onClick={(e) => toggleLike(e, item.id)}
                        className="absolute top-0 left-0 scale-0 opacity-0 group-hover:scale-125 group-hover:opacity-100 transition-all duration-300 bg-white p-1.5 md:p-2.5 rounded-full shadow-2xl text-[#f91b7e]"
                      >
                        <Heart
                          size={16}
                          fill={likedItems[item.id] ? "currentColor" : "none"}
                        />
                      </button>
                    </div>

                    {/* Lượt xem/thích */}
                    <div className="absolute top-2 right-2 md:top-4 md:right-4 flex flex-col gap-1 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                      <div className="bg-white/95 backdrop-blur-md text-gray-800 text-[8px] md:text-[11px] font-bold px-1.5 md:px-2.5 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                        <Heart
                          size={10}
                          className="text-[#f91b7e]"
                          fill="#f91b7e"
                        />{" "}
                        {item.likes || 0}
                      </div>
                      <div className="bg-white/95 backdrop-blur-md text-gray-800 text-[8px] md:text-[11px] font-bold px-1.5 md:px-2.5 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                        <Eye size={10} className="text-blue-500" />{" "}
                        {item.views || 0}
                      </div>
                    </div>

                  </div>
                </div>
              </Boderyelow>
            </FadeIn>
          ))}
        </div>

        {/* Nút Xem Thêm */}
        {visibleCount < filteredData.length && (
          <div className="flex justify-center mt-10 md:mt-20">
            <button
              onClick={() => setVisibleCount((prev) => prev + 10)}
              className="group inline-flex items-center gap-4 px-12 py-5 bg-[#f98a22] text-white font-black text-xl rounded-2xl shadow-xl transition-all active:scale-95"
            >
              <Plus size={24} /> XEM THÊM MẪU
            </button>
          </div>
        )}
      </div>

      {selectedItem && (
        <ThiepCuoiModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </section>
  );
}
