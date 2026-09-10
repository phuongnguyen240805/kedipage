'use client';

import Image from 'next/image';
import { affiliateTexts } from './utils/Partnershiop'; // Import text đã tách

export default function PartnershipAffiliate() {
  const youtubeVideoId = 'czmj2NNaPJI';
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeVideoId}`;

  return (
    <main className="text-white bg-gradient-to-b from-[#430f8c] to-[#470448]">
      {/* Section 1 - Lời mời */}
      <section className="p-10 text-center flex flex-col items-center justify-center">
        <h1 className="text-2xl md:text-4xl font-bold uppercase">
          {affiliateTexts.invitation.title}
        </h1>
        <h2 className="text-3xl md:text-5xl font-extrabold text-pink-500 bg-[#f41e92] text-white px-6 py-2 rounded my-4 shadow">
          {affiliateTexts.invitation.subtitle}
        </h2>
        <h3 className="text-xl md:text-2xl font-semibold mb-4">
          {affiliateTexts.invitation.tagline}
        </h3>

        {/* VIDEO */}
        <div className="relative w-full max-w-5xl mx-auto mt-28">
          <div className="relative z-10">
            <Image
              src="https://mona.media/template/assets/images/affiliate/banner-img-1920w.avif"
              alt="Team Mona"
              className="w-[640px] max-w-full h-auto object-contain mx-auto -mt-28"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] z-20 group">
            <div className="rounded-xl overflow-hidden border-4 border-purple-600 shadow-2xl transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:border-pink-400 mt-110">
              <iframe
                src={youtubeEmbedUrl}
                width={740}
                height={400}
                className="rounded-xl shadow-2xl lg:w-[400px] xl:w-[740px]"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={affiliateTexts.invitation.videoTitle}
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Hoa hồng 40% */}
      <section className="relative py-20 px-4 text-center bg-[url('/images/bg-stars.svg')] bg-cover bg-center mt-20 min-h-[480px] mt-120">
        <div className="max-w-6xl mx-auto relative">
          <p className="text-2xl font-medium mb-4">
            {affiliateTexts.commission.heading}
          </p>

          <h2 className="text-[110px] font-extrabold text-yellow-400 leading-none mb-6 drop-shadow-lg">
            {affiliateTexts.commission.percent}
          </h2>

          <p className="text-lg mb-2">
            {affiliateTexts.commission.negotiation}
          </p>

          <p className="font-extrabold text-3xl mb-2">
            {affiliateTexts.commission.winwin.split('ĐÔI')[0]}
            <br />
            <span className="text-yellow-400">
              {affiliateTexts.commission.winwin.split('ĐÔI')[1]}
            </span>
          </p>

          <p className="text-md max-w-xl mx-auto">
            Và tất nhiên,{' '}
            <span className="text-cyan-400 font-semibold">
              {affiliateTexts.commission.offer.split(' để ')[0]}
            </span>{' '}
            để {affiliateTexts.commission.offer.split(' để ')[1]}
          </p>

          {/* Notes (bubbles) */}
          <div className="absolute top-6 left-6 bg-orange-500 text-white p-4 rounded-lg max-w-xs shadow-lg w-[260px] -mt-30">
            {affiliateTexts.commission.notes.note1}
            <div className="absolute -right-3 top-1/2 w-3 h-3 bg-orange-500 rotate-45 translate-y-[-50%] mt-24 ml-24"></div>
          </div>

          <div className="absolute top-6 right-6 bg-pink-500 text-white p-4 rounded-lg max-w-xs shadow-lg w-[260px] -mt-40">
            {affiliateTexts.commission.notes.note2}
            <div className="absolute -left-3 top-1/2 w-3 h-3 bg-pink-500 rotate-45 translate-y-[-50%] mt-16 -ml-10"></div>
          </div>

          <div className="absolute bottom-6 left-6 bg-blue-500 text-white p-4 rounded-lg max-w-xs shadow-lg w-[260px] -ml-18">
            {affiliateTexts.commission.notes.note3}
            <div className="absolute -right-3 top-1/2 w-3 h-3 bg-blue-500 rotate-45 translate-y-[-50%] mt-24 ml-24"></div>
          </div>

          <div
            className="absolute bottom-6 right-6 bg-purple-600 text-white p-4 rounded-lg max-w-xs shadow-lg w-[260px]"
            style={{ transform: 'translateX(40px)' }}
          >
            {affiliateTexts.commission.notes.note4}
            <div className="absolute -left-3 top-1/2 w-3 h-3 bg-purple-600 rotate-45 translate-y-[-50%] mt-16 -ml-10"></div>
          </div>
        </div>
      </section>

      {/* Các section tiếp theo cũng tương tự - sử dụng affiliateTexts để render nội dung */}

      {/* Bạn có thể tiếp tục áp dụng như vậy cho phần commissionPolicy, lifetimeCommission, supportDeal, exampleSection */}
    </main>
  );
}
