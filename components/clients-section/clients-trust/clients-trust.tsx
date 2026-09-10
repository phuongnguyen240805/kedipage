"use client";

import { Button } from "@/components/ui/button";
import FadeIn from "@/components/ui/Fadeoad";
import Image from "next/image";

// Thêm mã CSS này vào globals.css hoặc dùng Tailwind arbitrary values
// @keyframes float {
//   0%, 100% { transform: translateY(0px) rotate(0deg); }
//   50% { transform: translateY(-20px) rotate(5deg); }
// }
// .animate-float { animation: float 6s ease-in-out infinite; }

const otherClients = [
  // ... data giữ nguyên của bạn
  { id: 1, img: "https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765201163/solution_kimthanh_elkvoi.jpg", title: "Mona Media và Levents", desc: "Tự hào đồng hành cùng thương hiệu thời trang nổi tiếng Châu Á...", solutionLink: "#", websiteLink: "#" },
  { id: 2, img: "https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765201163/solution_kimthanh_elkvoi.jpg", title: "Chuỗi hệ thống Mắt Việt", desc: "Tăng trưởng doanh thu vượt trội sau dự án thiết kế website bán hàng...", solutionLink: "#", websiteLink: "#" },
  { id: 3, img: "https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765201163/solution_kimthanh_elkvoi.jpg", title: "Anh Ngữ The Forum Center", desc: "Tiếp tục tin tưởng với hợp đồng dịch vụ thứ 3 về Website & App...", solutionLink: "#", websiteLink: "#" },
];

export default function ClientsTrust() {
  return (
    <section className="relative overflow-hidden bg-[#DAC1EB] ">

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Phần Tiêu đề */}
        <FadeIn>
          <div className="relative inline-block mb-8">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 leading-tight">
              Sự tận tình đã được đền đáp bằng <br />
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                  Niềm tin từ khách hàng
                </span>
               
              </span>
            </h2>
          </div>
        </FadeIn>

        {/* Hộp nội dung chính - Glassmorphism style */}
        <div className="mt-12 group relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative bg-white/80 backdrop-blur-md border border-white/20 p-8 md:p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-10 shadow-xl">
            <div className="text-left max-w-xl">
              <FadeIn>
                <div className="flex items-center gap-2 mb-4">
                    <span className="bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Khách hàng tiêu biểu</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  Kim Thành - Hành trình đồng hành bền bỉ
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Từ một dự án thiết kế website ban đầu, chúng tôi đã cùng nhau phát triển lên Web-app và hiện tại là đối tác chiến lược trong các chiến dịch Marketing tổng thể.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:shadow-orange-200 hover:shadow-lg text-white font-bold py-6 px-8 rounded-xl transition-all">
                    Xem giải pháp chi tiết
                  </Button>
                  <Button variant="outline" className="border-2 text-black border-slate-200 py-6 px-8 rounded-xl hover:bg-slate-50 gap-2">
                    <span>Truy cập Website</span>
                    <Image src="https://res.cloudinary.com/dzkcqktcl/image/upload/v1765202707/iocn-dv_rtmf7t.png" alt="icon" width={18} height={18} />
                  </Button>
                </div>
              </FadeIn>
            </div>
            
            <FadeIn>
              <div className="relative">
                <div className="absolute -inset-4 bg-purple-100 rounded-full blur-2xl opacity-50"></div>
                <Image
                  src="https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765201163/solution_kimthanh_elkvoi.jpg"
                  alt="Kim Thành"
                  width={400}
                  height={400}
                  className="relative rounded-2xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </FadeIn>
          </div>
        </div>

        {/* --- Lưới Card Khách hàng khác --- */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {otherClients.map((client) => (
            <FadeIn key={client.id}>
              <div className="group bg-white rounded-3xl border border-slate-100 p-2 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col">
                <div className="relative h-56 w-full rounded-2xl overflow-hidden">
                  <Image src={client.img} alt={client.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-white text-xs font-medium">Click để xem chi tiết dự án</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow text-left">
                  <h3 className="font-bold text-gray-800 text-xl mb-3 group-hover:text-purple-600 transition-colors">
                    {client.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                    {client.desc}
                  </p>
                  <div className="flex gap-3">
                    <Button size="sm" className="bg-slate-900 hover:bg-purple-700 text-white rounded-lg flex-grow transition-colors">
                      Giải pháp
                    </Button>
                    <Button size="sm" variant="ghost" className="bg-slate-100 hover:bg-slate-200 rounded-lg">
                      <Image src="https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765201163/iocn-dv.png" alt="link" width={14} height={14} />
                    </Button>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Nút Xem thêm */}
        <FadeIn>
          <div className="mt-20 py-12 border-t border-slate-200/60">
            <p className="text-slate-500 mb-6 font-medium italic">Và còn hàng ngàn câu chuyện thành công khác đang chờ bạn khám phá...</p>
            <Button className="bg-white border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white px-10 py-7 rounded-2xl text-lg font-bold shadow-xl hover:shadow-orange-200 transition-all scale-100 hover:scale-105">
              Khám phá tất cả dự án
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}