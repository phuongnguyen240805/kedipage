'use client';

import React, { useMemo, useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Monitor,
  PhoneCall,
  CheckCircle2,
  Image as ImageIcon,
  ShieldCheck,
  Zap,
  Layout,
  Trophy,
  ShoppingCart,
  ArrowLeft
} from 'lucide-react';
import { WEBSITE_SAMPLES } from '@/components/services-dropdown/page/web-design/web-co-san/webcosan_data';
import GlobalPaymentModal from '@/components/paymet/GlobalPaymentModal';
import Boderyelow from '@/components/ui/boder-yelow';

export default function Langdingmauweb1(props: any) {
  const { params } = props;
  const [activeTab, setActiveTab] = useState('content');
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [selectedAddons, setSelectedAddons] = useState<{ [key: string]: number | null }>({
    content: null, mkt: null, hosting: null, payment: null,
  });

  // Khởi tạo Locomotive Scroll
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      new LocomotiveScroll({ lenisOptions: { lerp: 0.1, duration: 1.2, smoothWheel: true } });
    })();
  }, []);

  const product = useMemo(() => {
    if (!params?.slug) return null;
    const decodedSlug = decodeURIComponent(params.slug);
    return WEBSITE_SAMPLES.find((item) => {
      const itemSlug = item.detailUrl.split('/').filter(Boolean).pop();
      return itemSlug === decodedSlug;
    });
  }, [params?.slug]);

  const addonData = useMemo(() => ({
    content: {
      label: 'Gói Content',
      description: 'Hỗ trợ nhập liệu nội dung chuẩn SEO, giúp website vận hành ngay lập tức.',
      options: [
        { label: 'Nhập liệu 100 bài', price: 2000000 },
        { label: 'Nhập liệu 500 bài', price: 9000000 },
      ],
    },
    mkt: {
      label: 'MKT Online',
      description: 'Kích hoạt các chiến dịch quảng cáo Google/Facebook để ra đơn ngay.',
      options: [
        { label: 'Gói MKT Cơ bản', price: 5000000 },
        { label: 'Gói MKT Chuyên nghiệp', price: 12000000 },
      ],
    },
  }), []);

  const { addonTotal, selectedList } = useMemo(() => {
    let total = 0;
    const list: any[] = [];
    Object.keys(selectedAddons).forEach((tabId) => {
      const selectedIdx = selectedAddons[tabId];
      if (selectedIdx !== null && (addonData as any)[tabId]) {
        const opt = (addonData as any)[tabId].options[selectedIdx];
        total += opt.price;
        list.push(opt);
      }
    });
    return { addonTotal: total, selectedList: list };
  }, [selectedAddons, addonData]);

  const basePrice = 15000000;
  const discount = 4500000;

  if (!product) return null;

  return (
    <main className="min-h-screen bg-white" data-scroll-container>
      {/* PHẦN 1: HERO */}
      <section className="relative py-20 bg-[#09090b] overflow-hidden" data-scroll-section>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-left" data-scroll data-scroll-speed="0.2">
              <span className="inline-block bg-purple-600/20 text-purple-400 text-xs font-black px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest border border-purple-500/30">
                Premium Solution
              </span>
              <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 uppercase leading-tight">
                Giao diện <br /> <span className="text-[#f91b7e]">{product.title}</span>
              </h1>
              <p className="text-gray-400 text-xl mb-10 leading-relaxed italic max-w-xl">
                &ldquo;Không chỉ là website, đây là công cụ tối ưu tỷ lệ chuyển đổi cho doanh nghiệp của bạn.&rdquo;
              </p>
              <button 
                onClick={() => setIsPaymentOpen(true)}
                className="flex items-center gap-3 px-10 py-5 bg-[#f38020] text-white font-black rounded-2xl shadow-lg hover:scale-105 transition-all uppercase"
              >
                Nhận báo giá chi tiết
              </button>
            </div>
            
            <div className="relative group" data-scroll data-scroll-speed="0.4">
              <div className="relative bg-[#1a1a1a] p-3 rounded-[2.5rem] shadow-2xl border border-white/5 ring-1 ring-white/10">
                <div className="relative aspect-[16/10] bg-gray-900 rounded-[1.8rem] overflow-hidden">
                  <div className="w-full h-full relative">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={1200}
                      height={5000}
                      className="w-full h-auto object-top transition-transform ease-in-out"
                      style={{ transitionDuration: '14000ms' }}
                      data-hover-scroll
                    />
                    <style jsx>{`
                      .group:hover [data-hover-scroll] {
                        transform: translateY(calc(-100% + 450px)); 
                      }
                      @media (max-width: 768px) {
                        .group:hover [data-hover-scroll] {
                          transform: translateY(calc(-100% + 250px));
                        }
                      }
                    `}</style>
                  </div>
                </div>
                <div className="absolute -inset-4 bg-purple-500/20 blur-3xl -z-10 opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHẦN 2: USP */}
      <section className="py-24 bg-white" data-scroll-section>
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-2xl font-black text-gray-900 mb-16 uppercase tracking-widest underline decoration-purple-500 underline-offset-8">
            Giá trị cốt lõi của sản phẩm
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {[
              { icon: <Layout className="text-blue-500" />, title: 'UX/UI Tối Ưu', desc: 'Thiết kế hành trình khách hàng chuyên sâu.' },
              { icon: <Zap className="text-yellow-500" />, title: 'Tốc Độ Vượt Trội', desc: 'Load trang dưới 2s, chuẩn Core Web Vitals.' },
              { icon: <ShieldCheck className="text-green-500" />, title: 'Bảo Mật Tuyệt Đối', desc: 'Mã nguồn sạch, bảo mật SSL đa tầng.' },
              { icon: <Trophy className="text-purple-500" />, title: 'Chuẩn SEO Google', desc: 'Cấu trúc bài viết & hình ảnh chuẩn SEO.' },
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-50 transition-colors shadow-sm">
                  {feature.icon}
                </div>
                <h4 className="font-black text-gray-900 mb-2 uppercase text-sm">{feature.title}</h4>
                <p className="text-gray-500 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHẦN 3: PREVIEW & BÁO GIÁ */}
      <section className="py-24 bg-[#f8f9fb]" data-scroll-section>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-4xl font-black text-gray-900 mb-10 uppercase tracking-tighter text-left">Preview Giao Diện</h2>
              <div className="bg-white p-6 rounded-[2.5rem] shadow-xl border border-gray-100 group">
                <div className="relative rounded-2xl overflow-hidden mb-8 border border-gray-50 shadow-inner">
                  <Image src={product.image} alt="Preview" width={1000} height={600} className="w-full h-auto" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <a href={product.demoUrl} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 py-5 bg-gray-900 text-white rounded-2xl font-black shadow-lg hover:bg-[#f38020] transition-all uppercase">
                    <Monitor size={22} /> XEM LIVE DEMO
                  </a>
                  <button className="flex items-center justify-center gap-3 py-5 bg-white border-2 border-gray-900 text-gray-900 rounded-2xl font-black hover:bg-gray-50 transition-all uppercase text-sm">
                    <ImageIcon size={22} /> XEM ẢNH FULL BẢN VẼ
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 sticky top-28">
              <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-gray-100 text-left">
                <h3 className="text-2xl font-black text-gray-900 mb-8 border-b-2 border-purple-500 pb-4 uppercase">
                  Bản chào giá dự án
                </h3>
                <div className="space-y-4 mb-8">
                  {['Admin quản trị WordPress', 'Giao diện Mobile Responsive', 'Cài đặt Plugin SEO Pro', 'Bàn giao 100% mã nguồn'].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 text-gray-700 font-bold text-sm">
                      <CheckCircle2 size={18} className="text-green-500" />
                      <span>{item}</span>
                    </div>
                  ))}
                  {selectedList.length > 0 && (
                    <div className="pt-6 mt-6 border-t border-gray-100">
                      <p className="text-purple-600 font-black text-[10px] tracking-[0.2em] uppercase mb-4 text-left">Dịch vụ bổ sung</p>
                      {selectedList.map((item, i) => (
                        <div key={i} className="flex justify-between text-gray-600 text-sm font-bold mb-3">
                          <span>+ {item.label}</span>
                          <span className="text-gray-900 font-black">{item.price.toLocaleString()}đ</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="pt-8 border-t border-dashed border-gray-200 space-y-4 text-sm font-bold">
                  <div className="flex justify-between text-gray-400"><span>Giá gốc</span><span>15.000.000đ</span></div>
                  <div className="flex justify-between text-red-500"><span>Hỗ trợ KEDI</span><span>-4.500.000đ</span></div>
                  <div className="flex justify-between items-center pt-8">
                    <span className="text-lg font-black text-gray-900 uppercase">Tổng cộng</span>
                    <span className="text-4xl font-black text-purple-700 tracking-tighter italic">
                      {(basePrice - discount + addonTotal).toLocaleString()}đ
                    </span>
                  </div>
                </div>
                <button onClick={() => setIsPaymentOpen(true)} className="w-full mt-10 py-6 bg-gradient-to-r from-purple-600 to-[#f91b7e] text-white font-black text-xl rounded-2xl shadow-2xl hover:scale-[1.02] active:scale-95 transition-all uppercase">
                  ĐẶT MUA NGAY <ShoppingCart className="inline ml-2" size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* PHẦN 4: HỆ SINH THÁI */}
<section className="py-24 bg-white" data-scroll-section>
  {/* Khớp lề 3cm (60px tổng) tương tự Header và Hero */}
  <div className="mx-auto max-w-[calc(100%-60px)] w-full">
    
    <div className="text-left mb-16">
      <span className="text-yellow-600 font-black text-[clamp(10px,0.7vw,13px)] tracking-[0.4em] uppercase mb-4 block">
        Hệ sinh thái số
      </span>
      <h3 className="text-[clamp(32px,5vw,64px)] font-black text-gray-900 mb-6 uppercase tracking-tighter italic leading-tight">
        Thiết lập bộ máy <br /> bán hàng tự động
      </h3>
    </div>

    {/* Danh sách Tab chuyển sang màu đen/vàng để nổi bật trên nền trắng */}
    <div className="flex flex-wrap gap-3 mb-10">
      {Object.keys(addonData).map((id) => (
        <button
          key={id}
          onClick={() => setActiveTab(id)}
          className={`px-8 py-4 rounded-xl font-black text-xs uppercase transition-all shadow-sm border-2 ${
            activeTab === id 
              ? 'bg-black border-black text-yellow-500 shadow-xl' 
              : 'bg-white border-gray-100 text-gray-400 hover:border-yellow-500/50'
          }`}
        >
          {(addonData as any)[id].label}
        </button>
      ))}
    </div>

    {/* Bọc Boderyelow cho khối nội dung lớn - Nền vẫn là đen sâu để text trắng/vàng nổi bật */}
    <Boderyelow>
      <div className="bg-[#111111] rounded-xl p-10 md:p-16 shadow-xl relative overflow-hidden text-left">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Cột trái: Mô tả */}
          <div className="md:col-span-5 pr-10 border-r border-white/10">
            <p className="text-gray-300 text-[clamp(16px,1.2vw,22px)] leading-relaxed italic font-medium">
              &ldquo;{(addonData as any)[activeTab].description}&rdquo;
            </p>
          </div>

          {/* Cột phải: Các tùy chọn được bọc Boderyelow từng mục */}
          <div className="md:col-span-7 space-y-4">
            {(addonData as any)[activeTab].options.map((opt: any, index: number) => (
              <Boderyelow key={index}>
                <div
                  onClick={() => setSelectedAddons((prev) => ({ 
                    ...prev, 
                    [activeTab]: prev[activeTab] === index ? null : index 
                  }))}
                  className={`flex items-center justify-between p-6 rounded-xl transition-all cursor-pointer ${
                    selectedAddons[activeTab] === index 
                      ? 'bg-yellow-500/10' 
                      : 'bg-white/5'
                  }`}
                >
                  <span className={`font-black text-lg transition-colors ${
                    selectedAddons[activeTab] === index ? 'text-yellow-500' : 'text-gray-400'
                  }`}>
                    {opt.label}
                  </span>
                  <span className="font-black text-xl text-white">
                    {opt.price.toLocaleString()}đ
                  </span>
                </div>
              </Boderyelow>
            ))}
          </div>
        </div>
      </div>
    </Boderyelow>
  </div>
</section>
    {/* PHẦN 5: ROADMAP */}
<section className="py-32 bg-white relative overflow-hidden text-center" data-scroll-section>
  <div className="mx-auto max-w-[calc(100%-60px)] w-full relative z-10">
    
    <h2 className="text-gray-900 text-[clamp(32px,5vw,64px)] font-black mb-20 uppercase tracking-tighter leading-none">
      Sẵn sàng số hóa <br /> 
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600">
        tăng trưởng bứt phá?
      </span>
    </h2>

    {/* Grid chứa các khối độc lập */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 text-left">
      {[
        { step: '01', title: 'Khởi tạo', desc: 'Bàn giao website chuẩn SEO chuyên nghiệp trong 72 giờ.' },
        { step: '02', title: 'Tích hợp', desc: 'Kết nối các modul bán hàng và quản trị tự động hóa.' },
        { step: '03', title: 'Vận hành', desc: 'Đội ngũ kỹ thuật hỗ trợ 24/7 bảo đảm hệ thống thông suốt.' }
      ].map((item, i) => (
        /* ĐƯA BODERYELOW VÀO ĐÂY ĐỂ BỌC TỪNG KHỐI */
        <Boderyelow key={i}>
          <div className="h-full p-10 rounded-xl bg-white  transition-all group">
            <span className="text-5xl font-black text-black group-hover:text-yellow-500 transition-colors mb-6 block leading-none font-mono">
              {item.step}
            </span>
            <h4 className="text-black font-black uppercase text-xl mb-4 tracking-tight">
              {item.title}
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed font-medium">
              {item.desc}
            </p>
          </div>
        </Boderyelow>
      ))}
    </div>

    {/* Phần chân của Roadmap - Đồng bộ màu Vàng/Đen */}
    <div className="flex flex-col md:flex-row items-center justify-center gap-12">
      <button 
        onClick={() => setIsPaymentOpen(true)} 
        className="px-12 py-6 bg-yellow-500 text-black font-black text-xl rounded-xl shadow-2xl hover:bg-black hover:text-yellow-500 transition-all uppercase tracking-wider"
      >
        BẮT ĐẦU CHUYỂN ĐỔI NGAY
      </button>

      <div className="flex items-center gap-6 group cursor-pointer md:border-l md:border-gray-200 md:pl-12 text-left">
        <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-yellow-500 shadow-lg">
          <PhoneCall size={28} />
        </div>
        <div>
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1">
            Hotline tư vấn 24/7
          </p>
          <p className="text-3xl font-black text-gray-900 tracking-tighter leading-none">
            1900 636 648
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* MODAL THANH TOÁN */}
      <GlobalPaymentModal 
        isOpen={isPaymentOpen}
        onClose={() => setIsPaymentOpen(false)}
        orderInfo={{
          title: product.title,
          id: product.id || "WEB-SAMPLE",
          basePrice: 15000000,
          discount: 4500000
        }}
        addons={selectedList}
      />
    </main>
  );
}