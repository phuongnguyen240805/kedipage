import BorderRunning from "@/components/ui/BorderRunning";
import LandingPage5GD from "../../services-dropdown/page/education/GiaoDuc/LandingPage5GD";
import FadeIn from "../../ui/Fadeoad";

export default function ClientsSection3() {
  return (
    <section className="relative overflow-hidden">
      {/* 4. Content Container */}
      <div className="relative z-10 w-full flex flex-col items-center py-20 font-sans">
        <FadeIn>
          <h2 className="text-white text-3xl md:text-5xl font-extrabold mb-8 text-center tracking-tight">
            Nụ cười rạng rỡ của khách hàng
          </h2>
        </FadeIn>

        <div className="mb-16 transform hover:scale-105 transition-transform duration-300">
          <BorderRunning color="#E91E63" glowColor="border-pink">
            <div className="bg-[#E91E63] text-white text-2xl md:text-4xl font-bold px-10 py-4 rounded-xl border-2 border-white/20 shadow-[0_0_20px_rgba(233,30,99,0.4)]">
              Sau những dự án thành công
            </div>
          </BorderRunning>
        </div>

        <div className="w-full max-w-7xl px-4">
          <LandingPage5GD />
        </div>
        
      </div>
    </section>
  );
}