import Image from 'next/image';

export default function CtaSection() {
  return (
    <section
      id="join"
      className="container mx-auto py-16 px-4 lg:px-0 flex items-center relative overflow-hidden"
    >
      <div
        className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-24 p-6 w-full rounded-2xl"
        style={{
          backgroundImage:
            "url('/assets/toolsngon/assets/banner1-background.svg')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Text Content */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-white dark:text-slate-100 text-4xl mb-4 font-bold leading-snug">
            Tham gia cùng hơn 5.000 thành viên sử dụng Tools Ngon
          </h1>
          <p className="text-slate-100 dark:text-slate-100 text-lg mb-6">
            Tận dụng các công cụ của Tools Ngon để hành trình kiếm tiền của bạn
            dễ dàng hơn đồng thời tăng cơ hội thành công.
          </p>
          <a
            href="https://app.toolsngon.com/signup/"
            className="inline-block bg-white text-slate-800 text-sm font-semibold px-6 py-3 rounded-2xl hover:bg-slate-100 transition"
          >
            Dùng Thử Miễn Phí
          </a>
        </div>

        {/* Image Content */}
        <div className="w-full lg:w-[400px] h-auto rounded-xl overflow-hidden">
          <Image
            src="/assets/toolsngon/assets/dropship-ad-library-ad-spend.avif"
            alt="Dropship Ad Library"
            width={400}
            height={300}
            className="rounded-xl object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
