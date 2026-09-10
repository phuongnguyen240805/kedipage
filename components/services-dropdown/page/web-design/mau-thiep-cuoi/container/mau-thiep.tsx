
import Thiepcuoi1 from "../components/thiepcuoi1";
import { THIEP_CUOI } from "../data/data_thiepcuoi";
import FadeIn from '@/components/ui/Fadeoad';

export default function Mauthiep() {
  return (
    <FadeIn direction="up" amount={0.2}>
      {/* Sử dụng màu nền xám trắng rất nhẹ (Off-white) */}
      <div className="bg-[#fcfcfc]  min-h-screen">
        {/* Header Section */}
        <div className="container mx-auto pt-7 text-center px-4">
          {/* H1: Màu Gold trên nền sáng cần Shadomax-w-[calc(100%-60px)]w đậm hơn một chút để nổi bật */}
          <h1
            className="
                  text-5xl md:text-7xl font-Sans text-black "
          >
            Mẫu Thiệp Online
          </h1>

          {/* Paragraph: Chuyển sang tông màu tối hơn để dễ đọc trên nền sáng */}
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto font-light tracking-wide italic leading-relaxed">
            Khám phá bộ sưu tập mẫu thiệp online
            <span className="text-[#b9973f] font-semibold">
              {" "}
              đẹp mắt, sang trọng
            </span>{" "}
            và hiện đại
          </p>
        </div>

        {/* Component danh sách card */}
        <Thiepcuoi1 data={THIEP_CUOI} initialVisible={40} />
      </div>
    </FadeIn>
  );
}
