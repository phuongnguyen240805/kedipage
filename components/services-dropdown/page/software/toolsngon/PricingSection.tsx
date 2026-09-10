'use client';

import React from 'react';

const pricingPlans = [
  {
    name: 'Ultimate',
    price: '22,00 $',
    oldPrice: '30,00 $',
    duration: '/30 day',
    discount: '-26%',
    best: true,
    features: [
      'Semrush',
      'ChatGPT',
      'Freepik',
      'Capcut Pro',
      'Canva Pro',
      'Screaming Frog',
      'Quillbot',
      'Placeit',
      'Shoplus',
      'Heyetsy',
      '+14 Other platforms...',
    ],
  },
  {
    name: 'Master',
    price: '22,00 $',
    oldPrice: '30,00 $',
    duration: '/30 day',
    discount: '-26%',
    best: true,
    features: [
      'ChatGPT',
      'Capcut Pro',
      'Canva Pro',
      'Midjourney',
      'Elevenlabs',
      'Riku & AI',
      'RunwayML AI',
      'Hailuo AI',
      'Heygen',
      'Leonardo',
      '+4 Other platforms...',
    ],
  },
  {
    name: 'Diamond',
    price: '18,00 $',
    oldPrice: '26,00 $',
    duration: '/30 day',
    discount: '-30%',
    best: true,
    features: [
      'ChatGPT Plus: Tạo ảnh, viết promt, viết kịch bản video',
      'Elevenlabs: lồng tiếng tự nhiên và giàu cảm xúc',
      'RunwayML & Hailuo: Tạo video bằng AI không giới hạn chất lượng cao',
      'Leonardo & Midjourney: Tạo ảnh bằng AI siêu đẹp',
      'Capcut Pro: Edit video chuyên nghiệp',
      'Capcut Pro',
      'Canva Pro',
      'Midjourney',
      'RunwayML AI',
      'Hailuo AI',
      'Heygen',
      'Leonardo',
    ],
  },
  {
    name: 'Premium',
    price: '12,00 $',
    oldPrice: '20,00 $',
    duration: '/30 day',
    discount: '-40%',
    features: [
      'ChatGPT Plus: Tạo ảnh, viết promt, viết kịch bản video',
      'Canva Pro: Thiết kế ảnh chuyên nghiệp',
      'Hailuo AI: Tạo video bằng AI không giới hạn',
      'Leonardo: Tạo ảnh bằng AI siêu đẹp',
      'ChatGPT',
      'Canva Pro',
      'Hailuo AI',
      'Leonardo',
    ],
  },
  {
    name: 'Standard',
    price: '10,00 $',
    oldPrice: '14,00 $',
    duration: '/30 day',
    discount: '-28%',
    features: [
      'ChatGPT Plus: Tạo ảnh, viết promt, viết kịch bản video',
      'Canva Pro: Thiết kế ảnh chuyên nghiệp',
      'Hailuo AI: Tạo video bằng AI không giới hạn',
      'ChatGPT',
      'Canva Pro',
      'Hailuo AI',
    ],
  },
  {
    name: 'Basic',
    price: '6,00 $',
    oldPrice: '14,00 $',
    duration: '/30 day',
    discount: '-57%',
    features: [
      'Semrush: phân tích keyword, backlink...',
      'ChatGPT Plus: Tạo ảnh, viết promt, viết kịch bản video',
      'Canva Pro: Thiết kế ảnh chuyên nghiệp',
      'Semrush',
      'ChatGPT',
      'Canva Pro',
      'Screaming Frog',
    ],
  },
];

export default function PricingSection() {
  return (
    <section
      id="subscriptions"
      className="py-16 container mx-auto px-4 lg:px-0"
    >
      <div className="text-center mb-12">
        <h2 className="text-slate-900 dark:text-slate-200 text-4xl font-bold">
          Bảng Giá
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {pricingPlans.map((plan) => (
          <div
            key={plan.name}
            className="subscriptions-card dark:bg-slate-800 relative w-full flex flex-col max-w-lg p-6 mx-auto justify-between text-slate-900 bg-white rounded-xl shadow border border-slate-200 dark:border-slate-800"
          >
            {plan.best && (
              <div className="absolute bg-blue-600 text-sm py-1 px-4 rounded-full -top-4 right-4 text-white font-semibold">
                Best value
              </div>
            )}

            <div className="px-2">
              <h3 className="mb-2 text-2xl font-semibold text-slate-900 dark:text-slate-100">
                {plan.name}
              </h3>

              <div className="flex items-center space-x-2">
                <p className="line-through text-slate-500 dark:text-slate-400">
                  {plan.oldPrice}
                </p>
              </div>
              <div className="flex items-center">
                <p className="mr-2 text-2xl font-extrabold text-slate-900 dark:text-slate-100">
                  {plan.price}
                </p>
                <span className="text-slate-600 dark:text-slate-400">
                  {plan.duration}
                </span>
                <span className="ml-2 p-1 rounded-lg bg-red-500 text-sm text-white font-semibold">
                  {plan.discount}
                </span>
              </div>

              <div className="mt-4 mb-6 text-left dark:text-slate-200">
                <ul className="list-disc ml-5 space-y-1">
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>

            <button
              type="button"
              className="w-full flex items-center justify-center text-white bg-blue-600 hover:bg-blue-700 border border-transparent focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Subscribe now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
