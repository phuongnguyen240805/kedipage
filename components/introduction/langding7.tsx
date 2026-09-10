'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { services } from './data';

gsap.registerPlugin(ScrollTrigger);

export default function Langding7Services() {
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const stickyHeaderRef = useRef<HTMLDivElement>(null);
  const stickySectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stickyHeight = window.innerHeight * 5;
    ScrollTrigger.create({
      trigger: stickySectionRef.current,
      start: 'top top',
      end: `+=${stickyHeight}px`,
      pin: true,
      pinSpacing: true,
      onUpdate: (self) => {
        const progress = self.progress;

        if (stickyHeaderRef.current) {
          const maxTranslate =
            stickyHeaderRef.current.offsetWidth - window.innerWidth;
          const translateX = -progress * maxTranslate;
          gsap.set(stickyHeaderRef.current, { x: translateX });
        }

        cardsRef.current.forEach((card, index) => {
          const delay = index * 0.1125;
          const cardProgress = Math.max(0, Math.min((progress - delay) * 2, 1));

          if (cardProgress > 0) {
            const cardStartX = 25;
            const cardEndX = -650;

            const cardX = gsap.utils.interpolate(
              cardStartX,
              cardEndX,
              cardProgress
            );

            // Add rotation and scale effects
            const rotation = cardProgress * 8; // Slight rotation
            const scale = 0.85 + cardProgress * 0.15; // Scale from 0.85 to 1
            const yOffset = Math.sin(cardProgress * Math.PI) * 20; // Vertical wave motion

            gsap.set(card, {
              xPercent: cardX,
              yPercent: yOffset,
              rotation: rotation,
              scale: scale,
              opacity: 1,
              boxShadow: `0 ${10 + cardProgress * 30}px ${20 + cardProgress * 40}px rgba(0, 0, 0, ${0.1 + cardProgress * 0.3})`,
            });
          } else {
            gsap.set(card, {
              opacity: 0,
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
            });
          }
        });
      },
    });

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <div
      className="relative bg-[#e1e1e1] w-full h-screen overflow-hidden"
      id="services"
      ref={stickySectionRef}
    >
      <div
        className="absolute top-0 left-0 w-[250vw] h-full flex items-center justify-center will-change-transform"
        ref={stickyHeaderRef}
      >
        <h1 className="text-[#202020] text-[30vw] tracking-tight leading-tight font-bold m-0 whitespace-nowrap">
          services i provide
        </h1>
      </div>
      {services.map((service, index) => (
        <div
          key={service.title}
          className="absolute left-full w-[325px] bg-black rounded-[10px] p-3 will-change-transform z-20"
          ref={(el) => {
            cardsRef.current[index] = el!;
          }}
        >
          <div className="w-full h-[200px] rounded-lg overflow-hidden bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center" />
          <div className="w-full h-[300px] flex flex-col justify-between text-white p-2">
            <div>
              <h2 className="text-[42px] tracking-tighter leading-tight font-medium">
                {service.title}
              </h2>
            </div>
            <div>
              <p className="text-[20px] leading-tight">{service.detail}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
