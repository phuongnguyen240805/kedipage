"use client";
import Link from "next/link";
import Image from "next/image";
import {useEffect, useState } from "react";
import { clientsItem } from "@/constants";
import { motion, AnimatePresence } from "framer-motion";

export default function Clients() {
	useEffect(() => {
  const rows = document.querySelectorAll(".client-row");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        } else {
          entry.target.classList.remove("is-visible");
        }
      });
    },
    {
      threshold: 0.4,
    }
  );

  rows.forEach(row => observer.observe(row));

  return () => observer.disconnect();
}, []);

  // 👇 MỞ SẴN ITEM ĐẦU TIÊN
  const [activeAccordion, setActiveAccordion] = useState<number | null>(
    clientsItem[0]?.id || null,
  );

  const toggleAccordion = (itemId: number) => {
    setActiveAccordion((prev) => (prev === itemId ? null : itemId));
  };

  return (
    <section className="w-full padding-y">
      {" "}
      {/* Đảm bảo bg-black nếu chưa có */}
      <h1 className="text-7xl text-white padding-x font-medium font-NeueMontreal mb-10">
        Đánh giá của khách hàng
      </h1>
      {clientsItem.map((item) => (
        <div
          key={item.id}
          className={`client-row relative w-full flex py-[10px] flex-col ${
            item.id === 1
               ? "border-y border-transparent"
        : "border-b border-transparent"
          }`}
        >
          {/* Header row — 3 cột */}
          <div className="w-full flex items-center justify-between py-[10px] padding-x">
            {/* Cột trái: Website */}
            <div className="w-full lg:w-[30%] min-w-0">
            
                <Link
                  href={item.href.trim()}
                  className="small-text text-white font-NeueMontreal link-flash truncate"
                >
                  {item.website}
                </Link>
           
            </div>

            {/* Cột giữa: Name */}
            <div className="w-full lg:w-[40%] min-w-0 text-white">
              <h3 className="small-text font-normal font-NeueMontreal truncate">
                {item.name}
              </h3>
            </div>

            {/* Cột phải: READ/CLOSE button */}
            <div className="w-full lg:w-[30%] flex justify-end">
              <button
                onClick={() => toggleAccordion(item.id)}
                className="small-text text-white font-normal font-NeueMontreal uppercase link-flash"
              >
                {activeAccordion === item.id ? "CLOSE" : "READ"}
              </button>
            </div>
          </div>

          {/* Nội dung bên dưới khi mở ra */}
          <AnimatePresence>
            {activeAccordion === item.id && (
              <motion.div className="w-full padding-x pt-[20px] pb-[30px]">
                <div className="flex flex-col lg:flex-row gap-[30px] lg:gap-[50px] items-start">
                  {/* Ảnh Client có boder trắng mờ */}
                  <div className="w-[130px] h-[130px] flex-shrink-0">
                    <Image
                      src={item.src}
                      className="w-full h-full object-cover rounded-[10px] border border-white/20"
                      alt="client"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="small-text text-white font-normal font-NeueMontreal mb-[20px]">
                      {item.review}
                    </p>
                    {/* Phần Tag dịch vụ có boder trắng */}
                    <div className="flex flex-wrap gap-[8px]">
						
                      {item.links.map((link) => (
                        <span
                          key={link.id}
                          className="text-[12px] px-[10px] py-[4px] rounded-[20px] border border-white text-white inline-block"
                        >
                          {link.title}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </section>
  );
}
