"use client";
import { LinkHover } from "@/animation";
import { footerItems } from "@/constants";
import Link from "next/link";

export default function About() {

  return (
    <section className="w-full bg-[#0B0B0B] py-24 rounded-b-[60px] z-20 relative shadow-2xl font-sans text-white">
      {/* 1. PHẦN TIÊU ĐỀ - Nền đen giúp chữ Display và Serif nổi bật hơn */}
      <div className="padding-x grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-8">
          <h2 className="text-[3.8vw] leading-[1.05] text-white font-normal">
            {/* Chữ DISPLAY IN HOA - Màu trắng tinh rực rỡ */}
            <span className="block font-display uppercase text-[4.5vw] tracking-tighter mb-4 text-white">
              Đối tác chiến lược
            </span>
            Chúng tôi đồng hành cùng các doanh nghiệp trong việc gọi vốn , số
            hóa quy trình và xây dựng thương hiệu chuyên nghiệp.
          </h2>
        </div>

        <div className="lg:col-span-4 lg:pt-12">
          {/* Chữ Sans-serif không chân - Độ mờ 60% để dễ đọc nhưng không lấn át tiêu đề */}
          <p className="text-[1.1rem] leading-relaxed text-white/60 font-sans border-l-[3px] border-white/20 pl-8">
            Chúng tôi tin rằng sự kết hợp giữa tư duy chiến lược và thẩm mỹ
            thiết kế sẽ làm thông điệp của bạn trở nên sắc bén và thuyết phục.
          </p>
        </div>
      </div>

      {/* 2. MIDDLE SECTION - Chia ngăn bằng các đường kẻ mảnh màu trắng mờ */}
      <div className="w-full border-t border-white/10 mt-24 pt-20">
        <div className="padding-x grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
          {/* Cột 1: Display Font - Mờ như nhãn dán */}
          <div>
            <h3 className="font-display uppercase text-sm tracking-[0.2em] text-white">
              Quy trình & Giá trị
            </h3>
          </div>

          {/* Cột 2: Serif Font cho link kết nối */}
          <div className="flex flex-col gap-6">
            <span className="font-display text-xs text-white uppercase tracking-widest">
              KẾT NỐI:
            </span>
            <div className="grid grid-cols-1 gap-3">
              {footerItems.map((item) => (
                <LinkHover
                  key={item.id}
                  className="w-fit text-[1.1rem] font-sans font-medium text-white/80 hover:text-white hover:italic transition-all"
                  title={item.title}
                  href="/"
                />
              ))}
            </div>
          </div>

          {/* Cột 3: Serif cho Quote - Trông rất sang trọng trên nền tối */}
          <div className="flex flex-col gap-10">
            <p className="font-sans text-[1.3rem] leading-snug text-white/90">
              &quot;Sáng tạo không chỉ là về cái đẹp, mà là về cách giải quyết những vấn đề phức tạp một cách đơn giản nhất.&quot;
            </p>
            <Link
              href="/ochi-team"
              className="
				inline-flex items-center justify-center
				px-6 py-3
				bg-white text-black
				font-sans uppercase text-xs tracking-widest
				rounded-full
				transition-all duration-300
				hover:bg-black hover:text-white
				border border-white
			"
            >
              Xem giải pháp
            </Link>
          </div>
        </div>
      </div>

      {/* 3. BOTTOM SECTION - Ảnh đen trắng nghệ thuật */}
      <div className="mt-28 padding-x">
        <div className="relative group overflow-hidden rounded-[30px] bg-[#1a1a1a]">
          {/* Overlay với hiệu ứng chữ chìm */}
          <div className="absolute inset-0 bg-white/5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none flex items-center justify-center">
            <span className="font-display text-white text-7xl uppercase opacity-10 scale-150 group-hover:scale-100 transition-transform duration-1000">
              Innovation
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
