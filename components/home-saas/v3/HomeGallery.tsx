'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';
import SectionIntro from '../SectionIntro';
import { galleryItemsV3 } from './data';

function GalleryCard({ item }: { item: (typeof galleryItemsV3)[number] }) {
  return (
    <Link
      href={item.href}
      className="group relative flex h-[64vh] min-h-[500px] w-[min(78vw,620px)] shrink-0 snap-center flex-col overflow-hidden rounded-[32px] border border-white/[0.12] bg-[#0b2d5b] text-white shadow-[0_30px_90px_rgba(0,0,0,.28)] lg:h-[50vh] lg:min-h-[360px] lg:max-h-[460px] lg:w-[min(40vw,580px)]"
    >
      <Image unoptimized
        src={item.image}
        alt={item.title}
        fill
        sizes="(max-width: 1024px) 78vw, 42vw"
        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.045]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#061a36] via-[#071f3f]/[0.35] to-transparent" />
      <div className="relative z-10 flex h-full flex-col p-6 sm:p-8">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-kedi-yellow">{item.eyebrow}</p>
            <span className="mt-2 block text-xs font-semibold text-white/[0.42]">{item.index}</span>
          </div>
          <span className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition-all duration-300 group-hover:border-kedi-yellow group-hover:bg-kedi-yellow group-hover:text-kedi-navy">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
        <div className="mt-auto max-w-xl">
          <h3 className="text-[34px] font-semibold leading-[1] tracking-[-0.045em] sm:text-[44px]">{item.title}</h3>
          <p className="mt-5 max-w-lg text-sm leading-7 text-white/[0.62] sm:text-base">{item.description}</p>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-kedi-yellow/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </Link>
  );
}

export default function HomeGallery() {
  const desktopRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: desktopRef,
    offset: ['start start', 'end end'],
  });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-54%']);
  const progress = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <>
      <section
        className="relative z-20 overflow-hidden bg-kedi-navy px-5 py-20 text-white sm:px-8 lg:hidden"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(11,45,91,.76) 0%, rgba(11,45,91,.9) 58%, rgba(11,45,91,.98) 100%), url('/homepage/golden-data-journey.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <SectionIntro
          eyebrow="KEDI in motion"
          title={<>Một hệ sinh thái được nhìn thấy qua <span className="text-kedi-yellow">các tình huống thật.</span></>}
          description="Vuốt ngang để xem cách website, CRM, AI, automation và analytics nối với nhau."
        />
        <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {galleryItemsV3.map((item) => <GalleryCard key={item.index} item={item} />)}
        </div>
      </section>

      <section
        ref={desktopRef}
        className={`relative z-20 hidden bg-kedi-navy text-white lg:block ${reduceMotion ? 'py-24' : 'h-[300vh]'}`}
      >
        <div
          className={`${reduceMotion ? 'relative' : 'sticky top-16 h-[calc(100svh-64px)]'} flex flex-col justify-center overflow-hidden px-12 py-6 xl:px-16`}
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(11,45,91,.92) 0%, rgba(11,45,91,.72) 46%, rgba(11,45,91,.82) 100%), url('/homepage/golden-data-journey.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="mx-auto w-full max-w-[1440px]">
            <div className="grid grid-cols-12 items-end gap-6 xl:gap-8">
              <div className="col-span-8 xl:col-span-7">
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-kedi-yellow">KEDI in motion</p>
                <h2 className="max-w-4xl text-[46px] font-semibold leading-[0.98] tracking-[-0.045em] xl:text-[56px] 2xl:text-[60px]">
                  Không chỉ là danh sách tính năng. <span className="text-kedi-yellow">Đây là một hệ thống chuyển động.</span>
                </h2>
              </div>
              <p className="col-span-4 max-w-lg justify-self-end text-sm leading-6 text-white/[0.55] xl:col-span-5 xl:text-base xl:leading-7">
                Khám phá cách KEDI xây dựng website từ bố cục, hình ảnh và nội dung đến trải nghiệm responsive trên từng điểm chạm.
              </p>
            </div>

            <div className={`mt-7 ${reduceMotion ? 'overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden' : 'overflow-visible'}`}>
              <motion.div style={reduceMotion ? undefined : { x }} className="flex w-max gap-5 pr-[40vw]">
                {galleryItemsV3.map((item) => <GalleryCard key={item.index} item={item} />)}
              </motion.div>
            </div>

            <div className="mt-5 flex items-center gap-4">
              <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/[0.38]">Scroll progress</span>
              <div className="h-px flex-1 overflow-hidden bg-white/[0.12]">
                <motion.div style={reduceMotion ? { width: '100%' } : { width: progress }} className="h-full bg-kedi-yellow" />
              </div>
              <span className="text-[10px] font-semibold text-white/[0.38]">05</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
