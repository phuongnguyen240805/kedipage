'use client';

import Image from 'next/image';

export default function ApprovedSection() {
  return (
    <section id="approved" className="py-16 relative container mx-auto">
      <div className="mx-auto mb-12 text-center">
        <div className="flex items-center justify-center gap-2 col-span-5 col-start-4 px-4 lg:px-0">
          <Image
            src="/assets/toolsngon/assets/rightLeaf.svg"
            alt=""
            width={24}
            height={24}
          />
          <p className="text-xl dark:text-slate-200 text-slate-900">
            Hơn 5,000 người tin tưởng sử dụng
          </p>
          <Image
            src="/assets/toolsngon/assets/rightLeaf.svg"
            alt=""
            width={24}
            height={24}
          />
        </div>
      </div>

      <div className="mx-auto flex items-center justify-center flex-col px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center gap-2 justify-center bg-blue-200/50 border-blue-500 border rounded-2xl p-2">
          <div className="flex -space-x-4 items-center justify-center">
            {[
              '651ef29d1dd245d6478fa41e_Group%20417.webp',
              '651ef29d819bbe057a520e22_Group%20424.webp',
              '651ef29dd040c8ebf5dba446_Group%20425.webp',
              '651ef29dc73864e085307d33_Group%20427.webp',
              '651ef29de675573506c0e015_Group%20428.webp',
              '651ef29c912d191888cc24e3_Group%20430.webp',
              '651ef29c2bf0011833da4f5f_Group%20429.webp',
              '651ef29ce790fe18172f222e_Group%20431.webp',
              '651ef29ca20c548195e446da_Group%20415.webp',
              '651ef29caf0c3b34a405d646_Group%20433.webp',
              '651ef29c0bcc2eb5951edda4_Group%20436.webp',
              '651ef29ce8f0f5dbfc66cee7_Group%20435.webp',
              '651ef29ca20c548195e446da_Group%20415.webp',
              '651ef29cd2f39ddc14002ab4_Group%20418.webp',
              '651f139ce9b1681b512fbc7b_Group%20438.webp',
            ].map((fileName, idx) => (
              <Image
                key={idx}
                src={`https://cdn.prod.website-files.com/60352a9beb7f922ce2aa6d6a/${fileName}`}
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
          {[
            '/assets/trust-pilot--white-logo.svg',
            '/assets/g2-logo.svg',
            '/assets/app-store-logo.webp',
          ].map((src, idx) => (
            <div
              key={idx}
              className="relative h-20 lg:h-24 w-auto aspect-[3/1]" // <- tăng kích thước tại đây
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-contain"
                sizes="(min-width: 1024px) 176px, 96px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
