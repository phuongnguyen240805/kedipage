"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Boderyelow from "../ui/boder-yelow";

export default function Hero() {
  return (
    <section
      className="w-full h-screen sm:mb-[-10px] xm:mb-[-10px]"
      data-scroll
      data-scroll-speed="-.3"
    >
      <div className="w-full h-full flex flex-col justify-between">
        <div />
        <div className="w-full flex flex-col justify-between h-[75vh] sm:h-[85vh] xm:h-[85vh]">
          {/* Điều chỉnh Padding linh hoạt cho Mobile */}
          <div className="w-full flex justify-between gap-[20px] px-[10px] md:pl-[20px] lg:pl-[30px]">
            <div>
              <h1 className="text-[10vw] leading-[1.1] md:text-6xl lg:text-7xl text-white tracking-[-0.02em] font-semibold font-Sans uppercase">
                Chúng tôi thiết kế <br />
                <div className="flex items-center gap-[5px] md:gap-[10px]">
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "auto" }}
                    transition={{
                      ease: [0.86, 0, 0.07, 0.995],
                      duration: 1,
                      delay: 1.5,
                    }}
                    // Chiều cao của Box ảnh cũng tự động nhỏ lại trên Mobile
                    className="flex items-center overflow-hidden h-[9vw] md:h-[50px] lg:h-[60px]"
                  >
                    <Boderyelow>
                      <Image
                        width={120}
                        height={50}
                        src='https://res.cloudinary.com/dzkcqktcl/image/upload/v1769418552/ChatGPT_Image_16_08_00_26_thg_1__2026-removebg-preview_g1msvy.png'
                        alt="Ochi Studio logo"
                        className=" object-contain rounded-lg md:rounded-xl"
                      />
                    </Boderyelow>
                  </motion.span>
                  <span>trải nghiệm số</span>
                </div>
                giúp doanh nghiệp tăng trưởng
              </h1>
            </div>
          </div>

          {/* Phần Footer của Hero: Giảm Margin và chiều cao trên mobile */}
          <div className="w-full flex flex-col min-h-[20vh] border-t border-white/20 py-[20px] mb-[40px] md:mb-[80px] gap-[20px] md:gap-[30px]">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center padding-x gap-[20px]">
              <div className="w-full lg:w-1/2">
                <p className="text-[14px] md:text-base text-white/80 font-NeueMontreal">
                  Dành cho doanh nghiệp, startup và thương hiệu đang phát triển
                </p>
              </div>

              <div className="w-full lg:w-1/2 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-[15px] md:gap-[20px]">
                <p className="text-[14px] md:text-base text-white/80 font-NeueMontreal">
                  Từ website đầu tiên đến chiến lược tăng trưởng dài hạn
                </p>

                <div className="flex items-center gap-[5px] group">
                  <div className="rounded-[50px] border border-white/50 hover:bg-white py-[4px] px-[15px] cursor-pointer transition-colors duration-300">
                    <Link
                      className="text-[12px] md:text-sm text-white uppercase group-hover:text-black transition-all"
                      href="/thiet-ke-landing-page"
                    >
                      bắt đầu dự án
                    </Link>
                  </div>

                  <div className="hidden lg:flex items-center justify-center w-[33px] h-[33px] border border-white/50 rounded-full hover:bg-white group transition-all cursor-pointer">
                    <ArrowUpRight
                      size={20}
                      strokeWidth={1.25}
                      className="text-white group-hover:text-black"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Cuộn xuống hint - chỉ hiện trên màn hình lớn */}
            <div className="hidden lg:flex items-center justify-center overflow-hidden">
              <motion.p
                initial={{ y: "-100%", opacity: 0 }}
                animate={{ y: "100%", opacity: 0.5 }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: [0.3, 0.86, 0.36, 0.95],
                }}
                className="text-[10px] text-white uppercase tracking-widest"
              >
                cuộn xuống
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}