'use client';

import Image from 'next/image';

export default function ApprovedSection() {
  return (
    <section id="approved" className="py-16 relative container mx-auto">
      <div className="mx-auto mb-12 text-center">
        <div className="flex items-center justify-center gap-2 col-span-5 col-start-4 px-4 lg:px-0">
          <span className="tools-trust-leaf" aria-hidden="true" />
          <p className="text-xl dark:text-slate-200 text-slate-900">
            Hơn 5,000 người tin tưởng sử dụng
          </p>
          <span className="tools-trust-leaf tools-trust-leaf--right" aria-hidden="true" />
        </div>
      </div>

      <div className="mx-auto flex items-center justify-center flex-col px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center gap-2 justify-center bg-blue-200/50 border-blue-500 border rounded-2xl p-2">
          <div className="flex -space-x-4 items-center justify-center">
            {[
              "https://assets.kedi.media/images/77edc9a87b38ccf164dc-132.webp",
              "https://assets.kedi.media/images/c228f2273cada761ecb1-132.webp",
              "https://assets.kedi.media/images/a9faf772dee64f99632b-132.webp",
              "https://assets.kedi.media/images/595216fca720acbca7d9-132.webp",
              "https://assets.kedi.media/images/d5edab20c57a963c018d-132.webp",
              "https://assets.kedi.media/images/8ec5c6312557927aef6c-132.webp",
              "https://assets.kedi.media/images/b5778f15dc070aa65935-132.webp",
              "https://assets.kedi.media/images/e2167713584c38432acc-132.webp",
              "https://assets.kedi.media/images/b9495ae6be885e93a97e-132.webp",
              "https://assets.kedi.media/images/14be1bb68760543ece36-132.webp",
              "https://assets.kedi.media/images/1300107ce30150b11921-132.webp",
              "https://assets.kedi.media/images/7856445256178fabe009-132.webp",
              "https://assets.kedi.media/images/b9495ae6be885e93a97e-132.webp",
              "https://assets.kedi.media/images/37b44012f6e617f35bdc-132.webp",
              "https://assets.kedi.media/images/22bd9d227ef6c2b58980-132.webp",
            ].map((fileName, idx) => (
              <Image
                key={idx}
                src={fileName}
                alt=""
                width={56} // w-14 = 56px
                height={56}
                className={`rounded-full ${idx >= 9 ? 'hidden lg:block' : ''}`}
              />
            ))}
          </div>

          <a
            className="flex items-center justify-center text-xs font-medium text-gray-700"
            href="#"
          >
            Join 5,000+ merchants
          </a>
        </div>

        <div className="flex items-center justify-center gap-4 mt-8">
          {['Trustpilot', 'G2', 'App Store'].map((label) => (
            <span key={label} className="tools-trust-badge">
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
