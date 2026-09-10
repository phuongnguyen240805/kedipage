'use client';
import Image from 'next/image';
import FadeIn from '../ui/Fadeoad';

export default function ClientsSupportTeam() {
  return (
    <div className="relative bg-[#DAC1EB] px-4 md:px-6 py-12 min-h-screen w-full">
      {/* Tiêu đề */}
      <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <FadeIn>
             <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
          MONA còn có một đội ngũ
        </h2>
          </FadeIn>
         <FadeIn>
          <div className="mb-4">
          <span className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 text-white text-sm md:text-lg px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold shadow-lg">
            Sẵn sàng hỗ trợ khách hàng mọi lúc, mọi nơi
          </span>
        </div>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          Có mặt bất kể giờ cơm hay đêm muộn, cuối tuần hay lễ tết
        </p>
         </FadeIn>
        
      </div>

      {/* Lưới ảnh masonry layout */}
      <div className="relative w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-6 h-auto md:h-[80vh] w-full">
          {/* Ảnh to 1 (Trái) */}
          {/* Mobile: Full 2 cột, cao 300px / Desktop: Col 3, Row 2 */}
          <div className="col-span-2 h-[300px] md:h-auto md:col-span-3 md:row-span-2 transform hover:scale-105 transition-transform duration-300">
            <Image
              src="https://mona.media/template/assets/images/customer-intro/s2.jpg"
              alt="Support Team Member 1"
              width={400}
              height={600}
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Ảnh vừa 1 */}
          {/* Mobile: 1 cột, cao 200px / Desktop: Col 3, Row 1 */}
          <div className="col-span-1 h-[200px] md:h-auto md:col-span-3 md:row-span-1 transform hover:scale-105 transition-transform duration-300">
            <Image
              src="https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765200840/s2_xkpkij.jpg"
              alt="Support Team Member 2"
              width={400}
              height={300}
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Ảnh vừa 2 */}
          {/* Mobile: 1 cột, cao 200px / Desktop: Col 3, Row 1 */}
          <div className="col-span-1 h-[200px] md:h-auto md:col-span-3 md:row-span-1 transform hover:scale-105 transition-transform duration-300">
            <Image
              src="https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765200840/s2_xkpkij.jpg"
              alt="Support Team Member 3"
              width={400}
              height={300}
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Ảnh to 2 (Phải) */}
          {/* Mobile: Full 2 cột, cao 300px / Desktop: Col 3, Row 2 */}
          <div className="col-span-2 h-[300px] md:h-auto md:col-span-3 md:row-span-2 transform hover:scale-105 transition-transform duration-300">
            <Image
              src="https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765200840/s2_xkpkij.jpg"
              alt="Support Team Member 4"
              width={400}
              height={600}
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Ảnh nhỏ 1 */}
          {/* Mobile: 1 cột, cao 180px / Desktop: Col 2, Row 1 */}
          <div className="col-span-1 h-[180px] md:h-auto md:col-span-2 md:row-span-1 transform hover:scale-105 transition-transform duration-300">
            <Image
              src="https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765200840/s2_xkpkij.jpg"
              alt="Support Team Member 5"
              width={300}
              height={300}
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Ảnh nhỏ 2 */}
          {/* Mobile: 1 cột, cao 180px / Desktop: Col 2, Row 1 */}
          <div className="col-span-1 h-[180px] md:h-auto md:col-span-2 md:row-span-1 transform hover:scale-105 transition-transform duration-300">
            <Image
              src="https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765200840/s2_xkpkij.jpg"
              alt="Support Team Member 6"
              width={300}
              height={300}
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Ảnh nhỏ 3 */}
          {/* Mobile: Full 2 cột (cho đẹp đội hình), cao 180px / Desktop: Col 2, Row 1 */}
          <div className="col-span-2 h-[180px] md:h-auto md:col-span-2 md:row-span-1 transform hover:scale-105 transition-transform duration-300">
            <Image
              src="https://res.cloudinary.com/dzkcqktcl/image/upload/f_auto,q_auto/v1765200840/s2_xkpkij.jpg"
              alt="Support Team Member 7"
              width={300}
              height={300}
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Ánh sáng ở giữa - Giữ nguyên */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="w-40 h-40 bg-gradient-radial from-white/20 via-yellow-300/10 to-transparent rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute w-24 h-24 bg-gradient-radial from-yellow-200/30 via-white/20 to-transparent rounded-full blur-xl"></div>
        </div>
      </div>

      <style jsx>{`
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
}
