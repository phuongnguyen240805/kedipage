'use client';

import Image from 'next/image';

export default function OverviewSection() {
  return (
    <section id="overview" className="w-full mx-auto py-20 px-4 lg:px-0">
      <div className="mx-auto text-center max-w-xl mb-12">
        <h2 className="text-4xl dark:text-slate-200 text-slate-900 text-center">
          Tất Cả Công Cụ Có Trong Một Nền Tảng
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mb-auto">
          Bắt đầu với một tài khoản miễn phí và khám phá tất cả các tính năng
          bạn cần để bắt đầu tìm kiếm và nghiên cứu sản phẩm của mình
        </p>
      </div>
      <div className="relative w-full overflow-hidden max-w-7xl mx-auto">
        {/* Đặt chiều cao cụ thể, ví dụ 400px hoặc tỷ lệ phù hợp để ảnh không bị co dãn */}
        <div
          className="relative w-full max-w-full mx-auto"
          style={{ height: 600 }}
        >
          <Image
            src="/assets/toolsngon/assets/dashboard-2.png"
            alt="hero_img"
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
