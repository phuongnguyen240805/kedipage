import React from 'react';
import FadeIn from "@/components/ui/Fadeoad";
import Boderyelow from "@/components/ui/boder-yelow"; // Đảm bảo import viền vàng

const PrivateCloud = () => {
  const cloudFeatures = [
    {
      title: "Hệ thống máy chủ ảo",
      desc: "Giải pháp giúp doanh nghiệp xây dựng hệ thống cung cấp máy chủ ảo sử dụng nền tảng điện toán đám mây OpenStack",
      type: "text",
      bgColor: "bg-blue-600",
    },
    {
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800",
      type: "image",
    },
    {
      title: "Quản trị chuyên dụng",
      desc: "Portal quản trị chuyên dụng với đầy đủ tính năng dành cho người quản trị hệ thống và người dùng cuối",
      type: "text",
      bgColor: "bg-blue-700",
    },
    {
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800",
      type: "image",
    },
    {
      title: "Thiết kế tối ưu",
      desc: "Thiết kế tối ưu, tiết kiệm chi phí và mở rộng linh hoạt theo nhu cầu của sử dụng của doanh nghiệp",
      type: "text",
      bgColor: "bg-white",
      textColor: "text-gray-900"
    },
    {
      img: "https://cloudfly.vn/_next/image?url=%2Fimage%2Fsolution%2Fprivate_3.webp&w=828&q=75",
      type: "image",
    }
  ];

  return (
    <section className="py-24 bg-[#001a3d] relative overflow-hidden">
      {/* Nền trang trí */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:30px_30px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* TIÊU ĐỀ: Xuất hiện trước */}
        <FadeIn direction="up" amount={0.3}>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-white text-4xl md:text-5xl font-black uppercase mb-6 tracking-tighter">
              PRIVATE CLOUD
            </h2>
            <p className="text-blue-300 font-bold text-lg leading-relaxed uppercase tracking-widest">
              Hạ tầng đám mây riêng biệt cho doanh nghiệp
            </p>
          </div>
        </FadeIn>

        {/* KHỐI GRID BỌC VIỀN VÀNG */}
        <div className="max-w-6xl mx-auto">
          <Boderyelow>
            <div className="grid grid-cols-1 md:grid-cols-3 overflow-hidden rounded-xl shadow-2xl">
              {cloudFeatures.map((item, index) => (
                <FadeIn 
                  key={index} 
                  direction="up" 
                  delay={index * 0.15} // Load lần lượt từng ô (0s, 0.15s, 0.3s...)
                  amount={0.1}
                >
                  <div className="h-64 md:h-80 relative group overflow-hidden">
                    {item.type === "text" ? (
                      /* KHỐI VĂN BẢN */
                      <div className={`w-full h-full p-8 md:p-10 flex flex-col justify-center transition-transform duration-500 group-hover:scale-105 ${item.bgColor} ${item.textColor || 'text-white'}`}>
                        <h3 className="text-xl font-black mb-4 uppercase tracking-tighter border-b border-current/20 pb-2 inline-block">
                          {item.title}
                        </h3>
                        <p className="text-sm md:text-base leading-relaxed font-medium opacity-90">
                          {item.desc}
                        </p>
                      </div>
                    ) : (
                      /* KHỐI HÌNH ẢNH */
                      <div className="w-full h-full overflow-hidden relative">
                        <img 
                          src={item.img} 
                          alt="Cloud Technology" 
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" 
                        />
                        {/* Lớp phủ màu xanh đặc trưng */}
                        <div className="absolute inset-0 bg-blue-900/40 group-hover:bg-transparent transition-colors duration-500"></div>
                        {/* Hiệu ứng tia sáng khi hover */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-blue-500/20 to-transparent transition-opacity duration-500"></div>
                      </div>
                    )}
                  </div>
                </FadeIn>
              ))}
            </div>
          </Boderyelow>
        </div>
      </div>
    </section>
  );
};

export default PrivateCloud;