import { MousePointerClick, Users, Layers, Share2 } from 'lucide-react';
import FadeIn from '@/components/ui/Fadeoad';

const features = [
  {
    title: "Thiết kế kéo thả nhanh chóng",
    desc: "Chỉ cần vài thao tác đơn giản, dễ dàng chỉnh sửa thông tin bạn có thể tạo và gửi thiệp cưới ngay lập tức.",
    icon: <MousePointerClick className="text-[#0B2D5B]" size={32} />,
    bgColor: "bg-[#FFC629]/20"
  },
  {
    title: "Quản lý số lượng khách mời",
    desc: "Sau khi chia sẻ thiệp Online đến khách mời, các phản hồi tham dự và lời chúc sẽ được ghi nhận đầy đủ.",
    icon: <Users className="text-[#f44e77]" size={32} />,
    bgColor: "bg-[#f44e77]/10"
  },
  {
    title: "Đa dạng các mẫu thiệp online",
    desc: "Các thiết kế thiệp Online của KEDI Thiệp được cập nhật liên tục với nhiều lựa chọn khác nhau về phong cách.",
    icon: <Layers className="text-[#0B2D5B]" size={32} />,
    bgColor: "bg-[#0B2D5B]/8"
  },
  {
    title: "Dễ dàng chia sẻ trực tuyến",
    desc: "Gửi thiệp Online đến từng khách mời bất kể thời gian và khoảng cách địa lý bằng cách chia sẻ link.",
    icon: <Share2 className="text-[#f44e77]" size={32} />,
    bgColor: "bg-[#f44e77]/10"
  }
];

export default function FeaturesSection() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto max-w-[calc(100%-60px)] px-4 max-w-7xl">
        <FadeIn direction="up" amount={0.2}>
          <div className="text-center  mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-sans text-gray-900 ">
              Tạo thiệp online <span className="text-[#f44e77]">đẹp, nhanh và dễ chia sẻ</span>
            </h2>
            <p className="text-gray-500 max-w-3xl mx-auto">
              KEDI Thiệp kết hợp trải nghiệm hiện đại với khả năng cá nhân hóa linh hoạt, giúp bạn tạo một lời mời có dấu ấn riêng mà không cần quy trình thiết kế phức tạp.
            </p>
            <a href="/mau-thiep" className="mt-6 inline-flex rounded-full bg-[#0B2D5B] px-8 py-3 font-bold text-white shadow-[0_14px_35px_rgba(11,45,91,0.16)] transition hover:-translate-y-0.5 hover:bg-[#081F40]">
              Khám phá mẫu thiệp
            </a>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <FadeIn key={i} direction="up" amount={0.2} delay={i * 0.1}>
              <div className="group rounded-[2rem] border border-[#0B2D5B]/8 bg-[#FFFDFC] p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(11,45,91,0.10)]">
                <div className={`${f.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {f.icon}
                </div>
                <h3 className="text-xl font-sans text-gray-900 mb-4">{f.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{f.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}