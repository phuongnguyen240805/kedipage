import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import SectionIntro from './SectionIntro';

const insightItems = [
  {
    tag: 'SEO',
    title: 'Kiến thức search và tăng trưởng organic',
    href: '/blog/seo-guide',
  },
  {
    tag: 'Growth',
    title: 'Digital marketing và các bài toán tăng trưởng',
    href: '/blog/digital-marketing',
  },
  {
    tag: 'Product',
    title: 'Kinh nghiệm thiết kế website và trải nghiệm số',
    href: '/blog/web-design-experience',
  },
];

export default function HomeInsights() {
  return (
    <section className="bg-white px-5 py-20 text-kedi-navy sm:px-8 lg:px-12 lg:py-28 xl:px-16">
      <div className="mx-auto max-w-[1440px]">
        <SectionIntro
          eyebrow="KEDI insights"
          title={<>Kiến thức để <span className="text-[#92700b]">ra quyết định tốt hơn.</span></>}
          description="Kết nối homepage với các nhóm nội dung đã có thay vì biến trang chủ thành một trang quá tải thông tin."
          light
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {insightItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex min-h-[250px] flex-col rounded-[24px] border border-kedi-navy/10 bg-[#f7f8fa] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-kedi-yellow"
            >
              <div className="flex items-start justify-between">
                <span className="rounded-full bg-kedi-navy px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-kedi-yellow">{item.tag}</span>
                <ArrowUpRight className="h-5 w-5 text-kedi-navy/35 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-kedi-navy" />
              </div>
              <h3 className="mt-auto max-w-sm text-[27px] font-semibold leading-[1.05] tracking-[-0.035em]">{item.title}</h3>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-right">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-kedi-navy hover:text-[#92700b]">
            Xem toàn bộ Blog <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
