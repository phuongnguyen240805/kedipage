'use client';

import { useState } from 'react';

const faqItems = [
  {
    title: 'Tools Ngon Là Gì?',
    content:
      'Tools Ngon cung cấp quyền truy cập vào các công cụ với mức giá cực rẻ. Tất cả những gì bạn cần làm là nhấp vào mua ngay ở trên và tham gia Tools Ngon, nơi bạn sẽ được cung cấp tài khoản cao cấp của tất cả các công cụ.',
  },
  {
    title: 'Tùy chọn thanh toán nào??',
    content:
      'Gói tự động có thể được đăng ký bằng mã QR/thẻ tín dụng/thẻ ghi nợ. Nhưng chúng tôi hỗ trợ paypal, wise, tiền điện tử.',
  },
  {
    title: 'Tools có hết Credit?',
    content:
      'Chúng tôi sẽ hết tín dụng trong vòng 1-7 ngày trên Minea. Các công cụ còn lại luôn hoạt động hoàn hảo. Nếu bạn có bất kỳ câu hỏi nào, hãy thoải mái mở một phiếu trong #support.',
  },
  {
    title: 'Tôi có thể hủy Đăng ký của mình không?',
    content:
      'Nếu bạn muốn hủy đăng ký sau này, vui lòng mở phiếu trong 🎫〡support và chúng tôi sẽ trả lời sớm nhất có thể. Khi hủy đăng ký, đăng ký sẽ không được gia hạn nhưng bạn vẫn có quyền lợi hoạt động cho đến khi bạn sử dụng hết số ngày còn lại đã thanh toán.',
  },
  {
    title: 'Tools Ngon hoạt động thế nào thế?',
    content:
      'Chúng tôi có phần mềm tùy chỉnh cho phép bạn tự động đăng nhập vào tất cả các công cụ, bạn sẽ sử dụng Google Chrome chứ không phải chế độ ẩn danh.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 relative container mx-auto px-4 lg:px-0">
      <div className="mx-auto text-center">
        <div className="text-slate-900 dark:text-slate-200 text-4xl mb-12">
          Các <span className="text-pink-500">Câu Hỏi</span> Thường Gặp
        </div>
      </div>
      <div className="w-full relative mt-12 overflow-hidden border rounded-2xl border-slate-200 dark:border-slate-800 bg-white">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className={`overflow-hidden dark:text-slate-400 ${
              index + 1 < faqItems.length ? 'border-b border-slate-200' : ''
            }`}
          >
            <div onClick={() => toggle(index)}>
              <button
                type="button"
                className={`flex items-center justify-between w-full p-5 gap-3 text-xl ${
                  openIndex === index
                    ? 'bg-purple-600 text-white'
                    : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                <span className="text-left">{item.title}</span>
                <svg
                  className={`w-3 h-3 shrink-0 transition-transform duration-300 ${
                    openIndex === index ? '' : 'rotate-180'
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </div>
            {openIndex === index && (
              <div className="p-5 dark:border-slate-700 dark:bg-slate-900 border-t border-slate-200">
                <p className="mb-2 text-slate-500 dark:text-slate-400">
                  {item.content}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
