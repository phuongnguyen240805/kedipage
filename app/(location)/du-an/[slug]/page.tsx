"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  AlertCircle,
  Lightbulb,
  ShoppingCart,
} from "lucide-react";

// Import các UI components
import ProcessTimeline from "@/components/portfolio/slug/ProcessTimeline";
import ProjectStats from "@/components/portfolio/slug/ProjectStats";
import Boderyelow from "@/components/ui/boder-yelow";
import YouTubePlayer from "@/components/portfolio/slug/YouTubePlayer";
import GlobalPaymentModal from "@/components/paymet/GlobalPaymentModal";

const MOCK_PROJECTS: any = {
  "wolfoo-world": {
    title: "Wolfoo World",
    subTitle: "Hệ sinh thái hoạt hình thuộc WOA Network, S-Connect Việt Nam",
    description:
      "Trải qua hơn 5 năm, thương hiệu Wolfoo sở hữu hệ sinh thái kinh doanh đồ sộ, đa dạng sản phẩm dịch vụ và đang không ngừng tăng trưởng.",

    field: "Sản xuất nội dung, phim hoạt hình",
    service: "Website giới thiệu",
    year: "2023",
    team: "6 người",

    mainImage: "https://mona.media/wp-content/uploads/2024/01/lap-1-19.png",
    mainVideoUrl: "https://youtu.be/HFQrc7WuGTk?si=k3SmTRoFmYrintAu",
    mobileVideoUrl:
      "https://mona.media/wp-content/uploads/2024/01/web-cinestar-cu%CC%83.mp4",
    processVideoUrl:
      "https://mona.media/wp-content/uploads/2024/01/web-cinestar-cu%CC%83.mp4",

    gallery: [
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070",
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2070",
    ],

    problemTitle:
      "Website cũ lạc hậu, khó thao tác khiến đối tác mất đi nhiều khách hàng",
    problemContent: `
      <p>Trang web cũ đã xây dựng được khoảng 8 năm nhưng không còn đáp ứng được trải nghiệm khách hàng tốt. Thiết kế không phản ánh thương hiệu, điều hướng gây khó khăn.</p>
      <p><strong>Pain Point của khách hàng:</strong></p>
      <ul>
        <li>Tỉ lệ mua vé/hàng thất bại còn khá cao</li>
        <li>Giao diện cũ, không trực quan, không trích xuất được dữ liệu</li>
        <li>Hệ thống thường bị quá tải dẫn đến lỗi 502 khi traffic tăng đột biến</li>
      </ul>
    `,

    solutionTitle:
      "Bài toán đặt ra cho MONA là phải giải quyết triệt để nhằm gia tăng doanh số",
    solutionContent: `
      <ul>
        <li>Gia tăng doanh số bán hàng thông qua luồng UX tối ưu và rút ngắn các bước đặt hàng</li>
        <li>Tăng nhận diện thương hiệu với bộ giao diện UI hiện đại, chuẩn quốc tế</li>
        <li>Hệ thống chịu tải cực tốt (Next.js), đảm bảo vận hành ổn định 24/7</li>
        <li>Database tối ưu giúp quản lý thông tin khách hàng dễ dàng</li>
      </ul>
    `,

    stats: {
      loadSpeed: {
        value: "0.5s",
        label: "Tốc độ load",
        before: "3.5s",
        after: "0.5s",
        percentage: 95,
      },
      seo: {
        value: "90%",
        label: "Chuẩn SEO",
        before: "40%",
        after: "90%",
        percentage: 90,
      },
      satisfaction: {
        value: "100%",
        label: "Hài lòng",
        before: "N/A",
        after: "100%",
        percentage: 100,
      },
    },

    feedback:
      "Sản phẩm hoàn thiện vượt xa mong đợi. Quy trình làm việc chuyên nghiệp, đội ngũ MONA hỗ trợ cực kỳ nhiệt tình ngay cả sau khi bàn giao.",
    customerName: "Mr. Nguyễn - CEO WOA Network",
  },
};

export default function ProjectDetail({
  params,
}: {
  params: { slug: string };
}) {
  const data = MOCK_PROJECTS[params.slug] || MOCK_PROJECTS["wolfoo-world"];
// 3. THÊM STATE ĐIỀU KHIỂN MODAL
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const scroll = new LocomotiveScroll({
        lenisOptions: {
          lerp: 0.01, // Giảm độ trôi để lướt êm hơn
          duration: 0.1,
          smoothWheel: true,
        },
      });
    })();
  }, []);

  return (
    <main className="min-h-screen bg-white" data-scroll-container>
      {/* 1. HERO SECTION */}
      <section className="pt-10 bg-[#f8f9fa]" data-scroll-section>
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8" data-scroll data-scroll-speed="0.5">
              <div>
                <h2 className="text-[#ff4d4d] text-3xl font-black uppercase tracking-tight mb-2">
                  {data.title}
                </h2>
                <h1 className="text-4xl md:text-5xl font-extrabold text-[#2d3436] leading-[1.1] mb-6">
                  {data.subTitle}
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed font-medium">
                  {data.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-y-8 gap-x-4 border-t border-gray-200 pt-8">
                <div className="space-y-1">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Lĩnh vực
                  </p>
                  <p className="font-bold text-gray-800">{data.field}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Loại dịch vụ
                  </p>
                  <p className="font-bold text-gray-800">{data.service}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Năm
                  </p>
                  <p className="font-bold text-gray-800 text-lg">{data.year}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Nhân sự
                  </p>
                  <p className="font-bold text-gray-800 text-lg">{data.team}</p>
                </div>
              </div>

             <div className="pt-4 max-w-fit">
                <Boderyelow>
                  {/* 4. GẮN SỰ KIỆN CLICK VÀO NÚT MUA */}
                  <button 
                    onClick={() => setIsPaymentOpen(true)}
                    className="px-10 py-4 bg-gradient-to-r from-[#8e2de2] to-[#4a00e0] text-white font-black uppercase tracking-widest rounded-xl flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform"
                  >
                    Đầu tư hệ thống ngay <ShoppingCart size={20} />
                  </button>
                </Boderyelow>
              </div>
            </div>
      

            <div className="relative group" data-scroll data-scroll-speed="1">
              <Boderyelow>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white shadow-inner">
                  <Image
                    src={data.mainImage}
                    alt="Hero Project"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </Boderyelow>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PLAY VIDEO INTERACTIVE */}
      <section className="w-full bg-[#fcfcfc] border-y border-gray-100" data-scroll-section>
        <YouTubePlayer url={data.mainVideoUrl} />
      </section>

      {/* 3. QUY TRÌNH TRIỂN KHAI */}
      <section className=" bg-white" data-scroll-section>
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-2xl text-black font-black uppercase tracking-[0.2em] mb-12 inline-block border-b-4 border-orange-500 pb-2">
            Quy trình triển khai tiêu chuẩn
          </h2>
          <ProcessTimeline />
        </div>
      </section>

      {/* 4. BÀI TOÁN & GIẢI PHÁP */}
      <section className=" bg-[#fcfcfc]" data-scroll-section>
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div data-scroll data-scroll-speed="0.4">
              <Boderyelow>
                <div className="p-10 bg-white h-full rounded-2xl">
                  <div className="flex items-center gap-3 text-red-500 mb-6 font-black uppercase tracking-tighter text-sm">
                    <AlertCircle size={22} /> Bài toán của khách hàng
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 leading-tight italic">
                    &quot;{data.problemTitle}&quot;
                  </h3>
                  <div
                    className="prose prose-orange text-gray-600 font-medium"
                    dangerouslySetInnerHTML={{ __html: data.problemContent }}
                  />
                </div>
              </Boderyelow>
            </div>

            <div data-scroll data-scroll-speed="0.5">
              <Boderyelow>
                <div className="p-10 bg-white h-full rounded-2xl">
                  <div className="flex items-center gap-3 text-green-600 mb-6 font-black uppercase tracking-tighter text-sm">
                    <Lightbulb size={22} /> Giải pháp từ MONA
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 leading-tight">
                    {data.solutionTitle}
                  </h3>
                  <div
                    className="prose prose-blue text-gray-600 font-medium"
                    dangerouslySetInnerHTML={{ __html: data.solutionContent }}
                  />
                  <div className="mt-8 p-6 bg-blue-50/50 rounded-xl border border-blue-100 border-dashed">
                    <p className="text-blue-800 font-bold italic text-sm">
                      💡 MONA tối ưu lại toàn bộ hành trình trải nghiệm người dùng
                      để đạt hiệu quả chuyển đổi cao nhất.
                    </p>
                  </div>
                </div>
              </Boderyelow>
            </div>
          </div>
        </div>
      </section>

      {/* 6. RESPONSIVE DESIGN SECTION */}
      <section className=" bg-white overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch" data-scroll data-scroll-speed="0.5">
            <div className="p-10 bg-gradient-to-br from-[#f8f9fa] to-white h-full rounded-2xl flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight uppercase tracking-tighter">
                Website chuẩn{" "}
                <span className="text-purple-600">Responsive</span> <br />
                tương thích với <br /> mọi thiết bị!
              </h2>
            </div>

            <div className="p-10 bg-white h-full rounded-2xl flex flex-col justify-center">
              <p className="text-xl text-gray-700 leading-relaxed font-medium">
                Trên{" "}
                <span className="text-orange-500 font-bold text-2xl">94%</span>{" "}
                người dùng Việt Nam sử dụng mobile để truy cập internet, tìm
                kiếm thông tin và mua hàng.
              </p>
              <div className="h-[2px] w-20 bg-gray-100 my-6" />
              <p className="text-gray-600 leading-relaxed italic">
                Việc tối ưu trải nghiệm người dùng đa thiết bị, đặc biệt là trên
                di động là điều cần thiết để tăng trưởng doanh thu vững mạnh cho
                doanh nghiệp. Tại MONA, chúng tôi đảm bảo website của bạn luôn
                mượt mà trên mọi kích thước màn hình.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FULLSCREEN SCROLL VIDEO */}
      <section className="relative w-full h-[150vh]" data-scroll-section id="sticky-video-section">
        <div className="sticky top-0 w-full h-screen overflow-hidden" data-scroll data-scroll-sticky data-scroll-target="#sticky-video-section">
          <video
            src={data.mobileVideoUrl || data.processVideoUrl}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce opacity-50">
            <div className="w-[1px] h-16 bg-white rounded-full" />
          </div>
        </div>
      </section>

      {/* 5. GALLERY & ĐÁNH GIÁ THÔNG SỐ */}
      <section className=" bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-32">
            <h2 className="text-2xl font-black text-gray-900 mb-12 flex items-center gap-4 uppercase tracking-wider">
              <span className="w-12 h-1 bg-purple-600 inline-block"></span>
              Hình ảnh thực tế dự án
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.gallery.map((url: string, i: number) => (
                <div key={i} data-scroll data-scroll-speed={i % 2 === 0 ? "0.3" : "0.6"}>
                  <Boderyelow>
                    <div className="relative aspect-video rounded-xl overflow-hidden group bg-gray-100">
                      <Image
                        src={url}
                        alt={`Gallery ${i}`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  </Boderyelow>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center border-t border-gray-100" data-scroll data-scroll-speed="0.3">
            <div className="lg:col-span-5">
              <h2 className="text-3xl md:text-5xl font-black text-gray-800 leading-tight">
                Đánh giá dự án dựa trên thông số <br />
                <span className="text-purple-700 underline decoration-purple-200">
                  MONA tự thống kê
                </span>{" "}
                <br />
                và <span className="text-purple-500/60 italic">
                  feedback khách hàng
                </span>
              </h2>
            </div>

            <div className="lg:col-span-7">
              <ProjectStats statsData={data.stats} />
            </div>
          </div>
        </div>
      </section>
      <GlobalPaymentModal 
        isOpen={isPaymentOpen}
        onClose={() => setIsPaymentOpen(false)}
        orderInfo={{
          title: data.title,
          id: data.id || "PORTFOLIO", // Mã để khách chuyển khoản
          basePrice: 15000000,        // Giá mẫu
          discount: 4500000           // Ưu đãi
        }}
        // Nếu portfolio này chưa có chọn addon thì để mảng rỗng []
        addons={[]} 
      />
    </main>
  );
}