'use client';

import Image from 'next/image';

export default function FeatureSection() {
  return (
    <section className="py-16 relative container mx-auto px-4 lg:px-0">
      <div className="mx-auto text-center">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-200 mb-8">
          Tại sao chọn <span className="text-blue-500">Tools Ngon</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Các tính năng vượt trội giúp bạn tăng hiệu suất và tiết kiệm chi phí.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow border border-slate-200 dark:border-slate-700">
          <Image
            src="/assets/toolsngon/assets/placeholder-feature1.jpg"
            alt="Tiết kiệm chi phí"
            width={336}
            height={265}
            className="mb-4"
          />
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
            Tiết kiệm chi phí
          </h3>
          <p className="text-slate-600 dark:text-slate-400">
            Sử dụng chung tài khoản giúp bạn tiết kiệm tới 90% chi phí công cụ
            marketing, thiết kế, AI...
          </p>
        </div>

        <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow border border-slate-200 dark:border-slate-700">
          <Image
            src="/assets/toolsngon/assets/placeholder-feature2.jpg"
            alt="Hỗ trợ nhanh chóng"
            width={336}
            height={265}
            className="mb-4"
          />
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
            Hỗ trợ nhanh chóng
          </h3>
          <p className="text-slate-600 dark:text-slate-400">
            Đội ngũ hỗ trợ sẵn sàng xử lý vấn đề trong vòng vài phút qua
            Discord, Facebook, hoặc Telegram.
          </p>
        </div>

        <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow border border-slate-200 dark:border-slate-700">
          <Image
            src="/assets/toolsngon/assets/placeholder-feature3.jpg"
            alt="Cập nhật liên tục"
            width={336}
            height={265}
            className="mb-4"
          />
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
            Cập nhật liên tục
          </h3>
          <p className="text-slate-600 dark:text-slate-400">
            Các gói tài khoản được cập nhật công cụ mới mỗi tuần, đảm bảo bạn
            không bị bỏ lỡ công nghệ mới nhất.
          </p>
        </div>

        <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow border border-slate-200 dark:border-slate-700">
          <Image
            src="/assets/toolsngon/assets/placeholder-feature4.jpg"
            alt="Cập nhật liên tục"
            width={336}
            height={265}
            className="mb-4"
          />
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
            Cập nhật liên tục
          </h3>
          <p className="text-slate-600 dark:text-slate-400">
            Các gói tài khoản được cập nhật công cụ mới mỗi tuần, đảm bảo bạn
            không bị bỏ lỡ công nghệ mới nhất.
          </p>
        </div>
      </div>
    </section>
  );
}
