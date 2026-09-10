import React from "react";
import { BookOpen, User, GraduationCap, Building2 } from "lucide-react";
import { landingPageGD2Images } from "./giaoduc";
import BorderRunning from "@/components/ui/BorderRunning";
import FadeIn from "@/components/ui/Fadeoad";

const LandingPage2GD: React.FC = () => {
  return (
    <div className="w-full bg-white pt-0 px-4 overflow-hidden font-sans relative">
      <div className="max-w-6xl mx-auto relative pt-32 pb-32">
        {/* === PHẦN HEADER === */}
        <div className="text-center mb-16 relative">
          {/* Ảnh trang trí bên trái */}
          <div className="hidden lg:block absolute -left-20 top-0 transform -rotate-12 opacity-80">
            <img
              src={landingPageGD2Images[0].src}
              alt={landingPageGD2Images[0].alt}
              className="w-48 h-64 rounded-lg shadow-xl border-4 border-gray-100 object-cover"
            />
          </div>

          {/* Ảnh trang trí bên phải */}
          <div className="hidden lg:block absolute -right-20 top-0 transform rotate-12 opacity-80">
            <img
              src={landingPageGD2Images[0].src}
              alt={landingPageGD2Images[0].alt}
              className="w-48 h-64 rounded-lg shadow-xl border-4 border-gray-100 object-cover"
            />
          </div>
          <FadeIn>
            <h2 className="text-gray-700 text-xl md:text-2xl font-bold mb-2">
              Website E-Learning là dạng website
            </h2>
          </FadeIn>
          <FadeIn>
            <h1 className="text-pink-500 text-3xl md:text-5xl font-extrabold mb-8 uppercase leading-tight">
              Bán các khóa học trực tuyến
              <br />
              được quay sẵn
            </h1>
          </FadeIn>
          <FadeIn>
            <BorderRunning color="orange" glowColor="rgba(251, 191, 36, 0.8)">
              <div className=" rounded-lg px-6 py-2 bg-orange-50">
                <span className="text-orange-500 text-lg md:text-xl font-bold">
                  Hoàn toàn phù hợp với
                </span>
              </div>
            </BorderRunning>
          </FadeIn>
        </div>

        {/* === PHẦN GRID NỘI DUNG === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 max-w-4xl mx-auto">
          <FadeIn>
            {/* Item 1: Trung tâm đào tạo */}
            <div className="flex gap-4 items-start">
              <BookOpen
                className="w-16 h-16 text-gray-700 flex-shrink-0"
                strokeWidth={1.5}
              />
              <div>
                <h3 className="text-blue-600 text-xl font-bold mb-2">
                  Trung tâm đào tạo
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Trung tâm đã có cơ sở đào tạo, có phần mềm quản lý, làm thêm
                  website E-Learning để{" "}
                  <span className="text-purple-600 font-bold">quảng cáo</span>,{" "}
                  <span className="text-purple-600 font-bold">tuyển sinh</span>{" "}
                  hoặc đơn giản là{" "}
                  <span className="text-purple-600 font-bold">khuyến mãi</span>{" "}
                  học viên
                </p>
              </div>
            </div>
          </FadeIn>
          <FadeIn>
            {/* Item 2: Chuyên gia */}
            <div className="flex gap-4 items-start">
              <User
                className="w-16 h-16 text-gray-700 flex-shrink-0"
                strokeWidth={1.5}
              />
              <div>
                <h3 className="text-blue-500 text-xl font-bold mb-2">
                  Chuyên gia
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Chuyên gia trong ngành{" "}
                  <span className="text-blue-500 font-bold">
                    mở khóa học online
                  </span>{" "}
                  bán cho nhiều người muốn nâng cao trình độ ngành
                </p>
              </div>
            </div>
          </FadeIn>
          <FadeIn>
            {/* Item 3: Giáo viên */}
            <div className="flex gap-4 items-start">
              <GraduationCap
                className="w-16 h-16 text-gray-700 flex-shrink-0"
                strokeWidth={1.5}
              />
              <div>
                <h3 className="text-blue-500 text-xl font-bold mb-2">
                  Giáo viên
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Giáo viên mở{" "}
                  <span className="text-blue-500 font-bold">
                    thêm lớp online
                  </span>{" "}
                  thay vì dạy kèm dạy thêm ngoài giờ tại nhà
                </p>
              </div>
            </div>
          </FadeIn>
          <FadeIn>
            {/* Item 4: Công ty giáo dục */}
            <div className="flex gap-4 items-start">
              <Building2
                className="w-16 h-16 text-gray-700 flex-shrink-0"
                strokeWidth={1.5}
              />
              <div>
                <h3 className="text-orange-500 text-xl font-bold mb-2">
                  Công ty giáo dục
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Các công ty{" "}
                  <span className="text-orange-500 font-bold">
                    bán các khoá học online
                  </span>{" "}
                  trong các lĩnh vực như: Giáo dục tiểu học, giáo dục phổ
                  thông,...
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* 🔻 VÒNG CUNG CONG NHẸ Ở ĐÁY - MÀUSXANH GIỐNG LG3 */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        style={{ height: "80px" }}
      >
        <path
          d="M0,0 C400,45 800,45 1200,0 L1200,120 L0,120 Z"
          fill="#0a0a16ff"
        />
      </svg>
    </div>
  );
};

export default LandingPage2GD;
