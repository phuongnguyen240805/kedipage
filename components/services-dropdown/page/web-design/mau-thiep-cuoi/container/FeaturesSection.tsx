import { MousePointerClick, Users, Layers, Share2 } from 'lucide-react';
import FadeIn from '@/components/ui/Fadeoad';

const features = [
  {
    title: "Thiết kế kéo thả nhanh chóng",
    desc: "Chỉ cần vài thao tác đơn giản, dễ dàng chỉnh sửa thông tin bạn có thể tạo và gửi thiệp cưới ngay lập tức.",
    icon: <MousePointerClick className="text-blue-500" size={32} />,
    bgColor: "bg-blue-50"
  },
  {
    title: "Quản lý số lượng khách mời",
    desc: "Sau khi chia sẻ thiệp Online đến khách mời, các phản hồi tham dự và lời chúc sẽ được ghi nhận đầy đủ.",
    icon: <Users className="text-green-500" size={32} />,
    bgColor: "bg-green-50"
  },
  {
    title: "Đa dạng các mẫu thiệp online",
    desc: "Các thiết kế thiệp Online của ZenLove được cập nhật liên tục với nhiều lựa chọn khác nhau về phong cách.",
    icon: <Layers className="text-purple-500" size={32} />,
    bgColor: "bg-purple-50"
  },
  {
    title: "Dễ dàng chia sẻ trực tuyến",
    desc: "Gửi thiệp Online đến từng khách mời bất kể thời gian và khoảng cách địa lý bằng cách chia sẻ link.",
    icon: <Share2 className="text-orange-500" size={32} />,
    bgColor: "bg-orange-50"
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-[calc(100%-60px)] px-4 max-w-7xl">
        <FadeIn direction="up" amount={0.2}>
          <div className="text-center  mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-sans text-gray-900 ">
              Tự tạo thiệp online với <span className=" text-[#f44e77]">vô vàn tính năng hay</span>
            </h2>
            <p className="text-gray-500 max-w-3xl mx-auto">
              ZenLove mang đến giải pháp thiệp online hiện đại, tính năng <span className="text-[#f44e77] font-bold">MIỄN PHÍ</span> giúp bạn dễ dàng tạo những chiếc thiệp độc đáo.
            </p>
            <button className="mt-6 bg-[#f44e77] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform">
              Thiết kế thiệp ngay 🎨
            </button>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <FadeIn key={i} direction="up" amount={0.2} delay={i * 0.1}>
              <div className="p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
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