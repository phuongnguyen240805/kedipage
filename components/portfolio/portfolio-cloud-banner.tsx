"use client";

import Image from "next/image";
import React from "react";
import FadeIn from "../ui/Fadeoad";

const logos = [
  {
    id: 1,
    name: "Anh Công",
    src: "https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765193649/cl_h5vbog.png",
    bgColor: "bg-[#b75b4d]", // nâu đỏ
    borderColor: "border-orange-400",
    style: { top: "17%", left: "11%", transform: "translateX(-50%)" },
    textLines: ["tháng này", "total 1,482,000,000", "cũng hơi ghê chút ha"],
  },
  {
    id: 2,
    name: "Anh Xuân",
    src: "https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765193649/cl_h5vbog.png",
    bgColor: "bg-[#3840a1]", // xanh đậm
    borderColor: "border-blue-600",
    style: { top: "21%", left: "40%" },
    textLines: ["Doanh thu tăng được 100 triệu", "so với tháng trước anh"],
  },
  {
    id: 3,
    name: "Anh Phú",
    src: "https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765193649/cl_h5vbog.png",
    bgColor: "bg-[#b75b4d]", // nâu đỏ
    borderColor: "border-orange-400",
    style: { top: "27%", right: "0%" },
    textLines: ["Tháng này êm lắm Tuấn,", "khách sĩ hỏi nhiều"],
  },
  {
    id: 4,
    name: "Chị Hoàng Linh",
    src: "https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765193649/cl_h5vbog.png",
    bgColor: "bg-[#22a4ff]", // xanh sáng
    borderColor: "border-sky-500",
    style: { bottom: "30%", right: "0%" },
    textLines: [
      "Website ok rồi á em",
      "sếp chị duyệt rồi,",
      "và khách cũng khen",
    ],
  },
  {
    id: 5,
    name: "Nguyen Giang 1",
    src: "https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765193649/cl_h5vbog.png",
    bgColor: "bg-[#22a4ff]", // xanh sáng
    borderColor: "border-sky-500",
    style: { bottom: "5%", left: "70%", transform: "translateX(-50%)" },
    textLines: ["Giao diện báo", "cáo này xin quá"],
  },
  {
    id: 6,
    name: "Nguyen Giang 2",
    src: "https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765193649/cl_h5vbog.png",
    bgColor: "bg-[#f78a0c]", // cam
    borderColor: "border-orange-400",
    style: { bottom: "10%", left: "20%" },
    textLines: [
      "Chị rất thích làm việc",
      "cùng team KEDI, luôn",
      "nhiệt tình và sáng tạo",
    ],
  },
  {
    id: 7,
    name: "Anh Tuấn",
    src: "https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765193649/cl_h5vbog.png",
    bgColor: "bg-[#8726cf]", // tím
    borderColor: "border-purple-600",
    style: { top: "55%", left: "0%" },
    textLines: ["Viết content chất như nước cất", "content design đồng nhất"],
  },
];

export default function PortfolioCloudSection() {
  return (
    <section className="relative bg-purple-800 text-white sm:py-20 overflow-hidden">
      {/* Sóng trên */}
      <div
        className="absolute top-0 left-0 w-full overflow-hidden"
        style={{ height: 120, zIndex: 0 }}
      >
        <svg
          viewBox="0 0 1440 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            fill="#F7EEFE"
            d="M0,80 C150,120 350,120 500,90 C650,60 850,60 1000,90 C1150,120 1350,120 1440,100 L1440 0 L0 0 Z"
          />
        </svg>
      </div>
 <FadeIn>
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* ————— DESKTOP: Avatar bay xung quanh ————— */}
        <div className="hidden md:block relative h-[770px] max-w-5xl mx-auto">
            {/* Avatar absolute */}
            {logos.map(
              ({ id, name, src, bgColor, borderColor, style, textLines }) => (
                <div key={id} className="absolute" style={style}>
                  <div className="flex items-start">
                    <div
                      className={`w-12 h-12 rounded-full overflow-hidden border-2 flex-shrink-0 ${borderColor}`}
                    >
                      <Image
                        src={src.trim()} // ⚠️ fix dấu cách thừa
                        alt={name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div
                      className={`${bgColor} rounded-md p-3 ml-5 text-left max-w-sm`}
                    >
                      <p className="text-xs font-semibold text-white mb-1">
                        {name}
                      </p>
                      {textLines.map((line, i) => (
                        <p
                          key={`${id}-${i}`}
                          className="text-sm leading-snug font-semibold text-white"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ),
            )}

          {/* Text chính giữa */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-3xl px-4 text-center z-20">
           <FadeIn>
            <p className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 leading-snug">
              Khách hàng đã làm với KEDI
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl font-extrabold bg-pink-600 inline-block px-4 py-1 rounded mb-2 leading-snug whitespace-nowrap">
              thì không có chuyện ký 1 hợp đồng rồi rời đi
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug">
              Mà sẽ tin tưởng ký tiếp hợp đồng thứ 2, 3, 4...{" "}
              <br className="hidden md:block" />ở nhiều dịch vụ khác
            </p>
             </FadeIn>
          </div>
        </div>

        {/* ————— MOBILE: Text chính + avatar cuộn ngang ————— */}
        <div className="block md:hidden text-center">
           <FadeIn>
          {/* Text chính */}
          <div className="mb-10 px-2">
            <p className="text-lg font-bold mb-2">Khách hàng đã làm với KEDI</p>
            <p className="text-lg font-extrabold bg-pink-600 inline-block px-3 py-1 rounded mb-2">
              thì không có chuyện ký 1 hợp đồng rồi rời đi
            </p>
            <p className="text-lg font-bold">
              Mà sẽ tin tưởng ký tiếp hợp đồng thứ 2, 3, 4... ở nhiều dịch vụ
              khác
            </p>
          </div>

          {/* Avatar cuộn ngang */}
          <div className="flex overflow-x-auto pb-4 gap-4 px-2 hide-scrollbar">
            {logos.map(({ id, name, src, bgColor, borderColor, textLines }) => (
              <div key={id} className="flex-shrink-0 w-48">
                <div className="flex items-start gap-2">
                  <div
                    className={`w-10 h-10 rounded-full overflow-hidden border-2 flex-shrink-0 ${borderColor}`}
                  >
                    <Image
                      src={src.trim()}
                      alt={name}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className={`${bgColor} rounded-md p-2 text-left`}>
                    <p className="text-xs font-semibold text-white mb-1">
                      {name}
                    </p>
                    {textLines.map((line, i) => (
                      <p
                        key={`${id}-${i}`}
                        className="text-xs leading-tight text-white"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
           </FadeIn>
        </div>

        {/* Phần chữ dưới cùng */}
        <div className="mt-6 md:mt-10 max-w-xl mx-auto bg-purple-700 rounded-lg p-6 md:p-8 text-center">
           <FadeIn>
          <p className="inline-block bg-pink-500 rounded px-3 py-1 mb-3 text-sm font-semibold">
            Hơn thế nữa
          </p>
          <p className="text-base md:text-lg font-semibold">
            Chúng tôi đồng hành cùng quá trình phát triển của bạn thông qua các
            sản phẩm
          </p>
           </FadeIn>
        </div>
      </div>
       </FadeIn>
    </section>
    
  );
}
