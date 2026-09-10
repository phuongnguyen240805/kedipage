"use client";

import React from "react";
import dynamic from "next/dynamic";

// Import dynamic cho các Layout để tối ưu hiệu suất (SSR: false để tránh lỗi hydration với iframe/animation)
const VariantLayout1 = dynamic(
  () => import("./clients-representative/VariantLayout1"),
  { ssr: false },
);

const VariantLayout2 = dynamic(
  () => import("./clients-representative/VariantLayout2"),
  { ssr: false },
);

const VariantLayout3 = dynamic(
  () => import("./clients-representative/VariantLayout3"),
  { ssr: false },
);

export default function RepresentativeSection() {
  return (
    
    /* 1. Container chính với màu nền tối sâu (Deep Purple/Black) */
    <section className="relative w-full overflow-hidden">
      

      {/* 3. Lưới Grid Pattern công nghệ (Sáng nhẹ trên nền đen) */}
      <div 
        className="absolute inset-0 z-[1] opacity-20 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #444 1px, transparent 1px), linear-gradient(to bottom, #444 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          maskImage: 'radial-gradient(circle, black, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(circle, black, transparent 90%)'
        }}
      />

      {/* 4. Hình ảnh Mask nằm ngay trên đầu S1 (Theo link bạn cung cấp) */}
      <div 
        className="absolute top-0 left-0 w-full h-[900px] z-[2] pointer-events-none opacity-50 mix-blend-screen"
        style={{
          backgroundImage: `url('https://mona.media/template/assets/images/customer-intro/img-mask-cmt.png')`,
          backgroundSize: '100% auto',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
          // Hiệu ứng hòa tan phần dưới của ảnh vào nền
          WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
        }}
      />

      {/* 5. Nội dung các Layout (Nằm trên cùng nhờ z-10) */}
      <div className="relative z-10">
        
        {/* LAYOUT 1: Đặt ở đầu tiên */}
        <VariantLayout1
          tagLine="DỰ ÁN TIÊU BIỂU"
          tagLineColor="#E1306C"
          subTagLine="Khách hàng nói gì về chúng tôi?"
          primaryLogo="https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765195391/400x400_eocvkh.png"
          secondaryLogo="https://mona.media/template/assets/images/customer-intro/img-mona.svg"
          heading={
            <>
              Dự án thiết kế app <br /> đặt vé máy bay siêu tốc
            </>
          }
          subHeading={
            <p>
              Mr. John Doe – <em className="font-thin text-white/70">CEO Travel Corp</em>
            </p>
          }
          description={[
            "Hệ thống hoạt động rất mượt mà, chịu tải tốt lên đến 1 triệu users.",
            "Đội ngũ kỹ thuật hỗ trợ cực kỳ nhiệt tình 24/7.",
            "Giao diện UX/UI hiện đại, đúng gu khách hàng mục tiêu.",
          ]}
          youtubeVideoId="dQw4w9WgXcQ"
          leftImage="https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765189615/ab-eight-4-high-1920w_zj5kqk.avif"
          rightImage="https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765189615/ab-eight-4-high-1920w_zj5kqk.avif"
          buttons={[
            { label: "Xem chi tiết dự án", variant: "default" },
            { label: "Liên hệ ngay", variant: "outline" },
          ]}
        />

        {/* Divider ngăn cách giữa các Layout */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-10 max-w-6xl mx-auto" />

        {/* LAYOUT 2 */}
        <VariantLayout2
          primaryLogo="https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765195391/400x400_eocvkh.png"
          secondaryLogo="https://mona.media/template/assets/images/customer-intro/img-mona.svg"
          heading="Giải pháp CRM quản lý 5000+ nhân sự"
          subHeading={
            <p>
              Ms. Anna – <em className="font-thin text-white/70">HR Director</em>
            </p>
          }
          description={[
            "Tự động hóa quy trình chấm công chuyên nghiệp.",
            "Tích hợp báo cáo KPI thời gian thực.",
            "Giảm 80% thời gian xử lý giấy tờ hành chính.",
          ]}
          youtubeVideoId="dQw4w9WgXcQ"
          leftDecorImage="https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765189615/ab-eight-4-high-1920w_zj5kqk.avif"
          rightDecorImage="https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765189615/ab-eight-4-high-1920w_zj5kqk.avif"
          summaryTitle="VỀ TẬP ĐOÀN ABC"
          summaryContent="Là tập đoàn bán lẻ hàng đầu Việt Nam với chuỗi 200 cửa hàng trên toàn quốc, luôn đi đầu trong việc ứng dụng công nghệ số vào quản trị."
          buttons={[
            { label: "Xem Case Study", variant: "default" },
            { label: "Đăng ký tư vấn", variant: "outline" },
          ]}
        />

        {/* Divider ngăn cách */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-10 max-w-6xl mx-auto" />

        {/* LAYOUT 3 */}
        <VariantLayout3
          primaryLogo="https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765195391/400x400_eocvkh.png"
          secondaryLogo="https://mona.media/template/assets/images/customer-intro/img-mona.svg"
          heading="Giải pháp Quản lý kho vận Logistics"
          subHeading={
            <p>
              Anh: <strong>Nguyễn Văn A</strong> –{" "}
              <em className="font-thin text-white/70">Giám đốc vận hành</em>
            </p>
          }
          description={[
            "Phần mềm giúp tối ưu hóa quãng đường vận chuyển tự động.",
            "Tiết kiệm tối đa 30% chi phí nhiên liệu mỗi tháng.",
          ]}
          summaryTitle="SƠ LƯỢC VỀ CÔNG TY ABC"
          summaryContent="Đơn vị vận tải hàng đầu miền Nam với đội xe hơn 200 chiếc và hệ thống kho bãi hiện đại tại các nút giao thông trọng điểm."
          youtubeVideoId="dQw4w9WgXcQ"
          topDecorImage="https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765189615/ab-eight-4-high-1920w_zj5kqk.avif"
          bottomDecorImage="https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765189615/ab-eight-4-high-1920w_zj5kqk.avif"
          buttons={[
            { label: "Xem chi tiết", variant: "default" },
            { label: "Liên hệ ngay", variant: "outline" },
          ]}
        />
      </div>
    </section>
  );
}