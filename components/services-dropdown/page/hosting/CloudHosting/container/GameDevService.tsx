import FadeIn from '@/components/ui/Fadeoad';
import React from 'react';
import Boderyelow from "@/components/ui/boder-yelow"; // Đảm bảo bọc viền vàng nếu bạn muốn đồng bộ

const GameDevService = () => {
  const games = [
    { id: 1, img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800', active: false },
    { id: 2, img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200', active: true, desc: "Tận dụng và kế thừa các sản phẩm đa dạng trong hệ sinh thái đám mây của chúng tôi giúp bạn không còn lo lắng về vấn đề vận hành hệ thống" },
    { id: 3, img: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=800', active: false },
  ];

  return (
    <section className="relative py-24 bg-[#0a0a0a] text-white overflow-hidden">
      {/* Nền phía sau */}
      <div className="absolute inset-0 opacity-20 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
        <img 
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc4b?q=80&w=2000" 
          alt="Server background" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        
        {/* TIÊU ĐỀ - Load riêng */}
        <FadeIn direction="up" amount={0.3}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter inline-block">
              <span className="text-blue-500">GAME</span> DEVELOPMENT
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
          </div>
        </FadeIn>

        {/* CAROUSEL LAYOUT - Load từng item */}
        <div className="flex items-center justify-center gap-4 md:gap-8 overflow-hidden py-10">
          {games.map((game, index) => (
            <FadeIn 
              key={game.id} 
              direction="up" 
              delay={index * 0.2} // Mỗi tấm cách nhau 0.2s để tạo hiệu ứng load từng cái
              amount={0.1}
            >
              <div 
                className={`relative transition-all duration-700 ease-in-out cursor-pointer group
                  ${game.active 
                    ? 'w-[350px] md:w-[700px] h-[250px] md:h-[450px] z-20 scale-110 opacity-100' 
                    : 'w-[150px] md:w-[300px] h-[180px] md:h-[350px] z-10 opacity-40 blur-[2px] hover:opacity-60'
                  }
                `}
              >
                {/* Bọc Boderyelow để đồng bộ phong cách viền vàng nếu cần */}
                <div className="w-full h-full">
                    {/* Hình ảnh */}
                    <img 
                      src={game.img} 
                      alt="Game preview" 
                      className="w-full h-full object-cover rounded-xl border border-white/10 shadow-2xl"
                    />

                    {/* Lớp phủ & Text */}
                    {game.active && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-6 md:p-10 rounded-xl">
                        <p className="text-center text-sm md:text-lg text-gray-300 font-medium leading-relaxed max-w-2xl mx-auto">
                          {game.desc}
                        </p>
                      </div>
                    )}

                    {/* Nút điều hướng giả */}
                    {!game.active && (
                      <div className="absolute inset-0 flex items-center justify-center">
                         <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:bg-white/40">
                            <svg className={`w-6 h-6 text-white ${game.id === 1 ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                         </div>
                      </div>
                    )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameDevService;