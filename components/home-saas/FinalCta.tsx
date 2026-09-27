import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function FinalCta() {
  return (
    <section className="bg-white px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28 xl:px-16">
      <div className="mx-auto max-w-[1440px] overflow-hidden rounded-[32px] bg-kedi-yellow px-6 py-12 text-kedi-navy sm:px-10 lg:px-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-kedi-navy/50">Start with KEDI</p>
            <h2 className="mt-4 max-w-4xl text-[42px] font-semibold leading-[0.94] tracking-[-0.05em] sm:text-[58px] lg:text-[72px]">
              Chưa biết nên bắt đầu từ sản phẩm nào?
            </h2>
          </div>

          <div className="lg:justify-self-end">
            <p className="max-w-lg text-sm leading-7 text-kedi-navy/65 sm:text-base">
              Bat dau tu nhu cau kinh doanh. Khám phá hệ sinh thái SaaS hoac xem cac nhom dich vu KEDI co the trien khai cung doanh nghiep.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="#ecosystem" className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-kedi-navy px-6 text-sm font-semibold text-white">
                Khám phá SaaS
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link href="/du-an" className="inline-flex min-h-12 items-center justify-center rounded-full border border-kedi-navy/25 px-6 text-sm font-semibold transition-colors hover:bg-kedi-navy hover:text-white">
                Xem dự án
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
