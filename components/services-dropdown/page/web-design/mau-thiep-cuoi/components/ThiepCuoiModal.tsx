"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, CheckCircle2, MousePointer2 } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import Boderyelow from "@/components/ui/boder-yelow";

export interface WebsiteItem {
  tags?: string[];
  id: string | number;
  title?: string;
  image: string;
  demoUrl: string;
  detailUrl?: string;
  likes?: number | string;
  views?: number | string;
  isPremium?: boolean;
}

interface ThiepCuoiModalProps {
  item: WebsiteItem;
  onClose: () => void;
}

export default function ThiepCuoiModal({ item, onClose }: ThiepCuoiModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Khóa cuộn trang để modal không bị trôi khi vô tình lướt chuột
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!mounted) return null;

  // Sử dụng Portal để đưa Modal ra khỏi mọi thẻ cha, nhảy thẳng vào thẻ <body>
  return createPortal(
    <div className="fixed top-0 left-0 w-full h-full z-[99999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm shadow-inner">
      {/* Lớp phủ nhạy để bấm ra ngoài là đóng */}
      <div className="absolute inset-0" onClick={onClose}></div>

      <div className="relative bg-white w-full max-w-2xl rounded-[30px] md:rounded-[40px] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] z-10 animate-in fade-in zoom-in duration-300">
        {/* Nút đóng X */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 z-[1000] p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-all active:scale-90 shadow-sm"
        >
          <X size={20} className="text-gray-600" />
        </button>
        {/* BÊN TRÁI: ẢNH MẪU TỰ ĐỘNG CUỘN */}
        <div className="w-full md:w-5/12 bg-[#fafafa] p-6 flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-100 overflow-hidden">
          <div className="w-full max-w-[240px]">
            <Boderyelow>
              <div className="relative aspect-[3/4.2] overflow-hidden bg-gray-50 rounded-xl">
                <Image
                  src={item.image}
                  alt="Preview"
                  width={300}
                  height={800}
                  style={
                    {
                      "--scroll-dist": "calc(-100% + 320px)",
                    } as React.CSSProperties
                  }
                  /* Bạn chỉ cần dùng đúng class này, CSS sẽ tự nhận diện thiết bị */
                  className="w-full h-auto object-top mobile-scroll-effect"
                />
              </div>
            </Boderyelow>
          </div>
        </div>
        {/* BÊN PHẢI: NỘI DUNG */}
        <div className="w-full md:w-7/12 p-6 md:p-10 flex flex-col justify-center bg-white">
          <div className="space-y-5 text-left">
            <h2 className="text-xl md:text-2xl font-black text-gray-900 leading-tight">
              Dịch vụ tạo thiệp <br />{" "}
              <span className="text-[#f98a22]">Trọn gói chuyên nghiệp</span>
            </h2>

            <div className="space-y-3">
              {[
                { label: "Thiết kế:", desc: "Độc quyền theo yêu cầu" },
                { label: "Hoàn thiện:", desc: "Bàn giao ngay 100%" },
                { label: "Thời gian:", desc: "Thần tốc 1-2 ngày" },
              ].map((feat, i) => (
                <div key={i} className="flex gap-3 items-center">
                  <CheckCircle2
                    className="text-green-500 flex-shrink-0"
                    size={18}
                  />
                  <p className="text-gray-700 text-sm md:text-base">
                    <span className="font-bold">{feat.label}</span> {feat.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 pt-2">
              <a
                href={item.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-6 border-2 border-gray-100 rounded-2xl font-bold text-gray-700 flex items-center justify-center gap-2 hover:bg-gray-50 transition-all active:scale-95 shadow-sm"
              >
                <MousePointer2 size={16} /> Xem bản Demo
              </a>
              <button className="py-3 px-6 bg-[#f98a22] text-white rounded-2xl font-black flex items-center justify-center gap-2 hover:shadow-lg hover:brightness-110 transition-all active:scale-95 shadow-md uppercase tracking-wider text-sm">
                Đặt làm mẫu này
              </button>
            </div>

            {/* QR CODE */}
            <div className="pt-6 border-t border-gray-100 flex items-center gap-5">
              <div className="p-2.5 bg-white border-2 border-gray-50 rounded-2xl shadow-sm">
                <QRCodeSVG value={item.demoUrl} size={60} level={"H"} />
              </div>
              <div className="flex flex-col">
                <p className="text-gray-900 font-black text-xs uppercase tracking-tighter">
                  Mobile Experience
                </p>
                <p className="text-gray-400 font-medium text-[11px] leading-tight italic mt-1">
                  Quét mã để xem bản <br /> hiển thị trên điện thoại
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body, // Ép Modal bay ra ngoài body để luôn ở trên cùng
  );
}
