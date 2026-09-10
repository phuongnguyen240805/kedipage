import React from 'react';
import Image from 'next/image';

// Dữ liệu giả lập 6 ảnh (3 trái, 3 phải - nhưng thực tế cột trái sẽ nhiều ảnh hơn để cuộn)
const images = [
  {
    id: 1,
    src: 'https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765193233/Cinestar_blpx4c.png',
    title: 'Project One',
  },
  {
    id: 2,
    src: 'https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765193233/Cinestar_blpx4c.png',
    title: 'Project Two',
  },
  {
    id: 3,
    src: 'https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765193233/Cinestar_blpx4c.png',
    title: 'Project Three',
  },
];

const stickyImage =
  'https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765193233/Cinestar_blpx4c.png';
export default function SplitScrollLayout() {
  return (
    <div className="w-full min-h-screen rounded-xl bg-[#F3F3F3] text-black font-sans">
      {/* Container chính chia 2 cột */}
      <div className="flex flex-col md:flex-row w-full">
        {/* --- CỘT TRÁI (SCROLL) --- */}
        {/* 'py-20' để tạo khoảng thở. Nội dung dài sẽ khiến cột này cuộn */}
        <div className="w-full md:w-1/2 flex flex-col gap-20 p-10">
          <div className="mb-10">
            <h1 className="text-5xl font-bold uppercase leading-tight">
              We Create <br /> Eye-Opening <br /> Presentations
            </h1>
            <p className="mt-4 text-gray-600">
              Kéo xuống để thấy hiệu ứng cột trái trôi nhẹ, cột phải đứng yên.
            </p>
          </div>

          {/* Danh sách các ảnh bên trái */}
          {images.map((img) => (
            <div
              key={img.id}
              className="group relative w-full h-[600px] overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-5 left-5 bg-white px-4 py-2 rounded-full font-bold">
                {img.title}
              </div>
            </div>
          ))}

          {/* Thêm nội dung đệm để scroll dài hơn nếu cần */}
          <div className="h-[20vh]"></div>
        </div>

        {/* --- CỘT PHẢI (STICKY / KHÔNG DI CHUYỂN) --- */}
        {/* sticky top-0 h-screen: Giữ khối này luôn full màn hình và dính ở trên cùng */}
        <div className="w-full md:w-1/2 h-screen sticky top-0 rounded-xl hidden md:flex items-center justify-center bg-[#999999] text-white p-10">
          <div className="relative w-full h-[80%] rounded-xl overflow-hidden border border-gray-700">
            {/* Ảnh bên phải đứng yên */}
            <Image
              src={stickyImage}
              alt="Sticky Image"
              fill
              className="object-cover opacity-80"
            />

            <div className="absolute inset-0 flex flex-col justify-center items-center z-10 p-10 text-center">
              <button className="mt-8 px-6 text-black py-3 bg-white rounded-full hover:bg-black hover:text-white transition">
                Start Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
