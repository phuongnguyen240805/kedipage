'use client';

import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Minus, Plus, Quote } from 'lucide-react';
import { useState } from 'react';

const EASE = [0.22, 1, 0.36, 1] as const;

const teamMembers = [
  {
    id: 1,
    index: '01',
    initials: 'ML',
    name: 'My Linh',
    role: 'CEO',
    description: 'Định hướng chiến lược, kết nối đội ngũ và đảm bảo mỗi dự án được triển khai đúng mục tiêu kinh doanh của khách hàng.',
    skills: ['Strategy', 'Leadership', 'Business'],
    image: '/homepage/team/my-linh.webp',
  },
  {
    id: 2,
    index: '02',
    initials: 'DT',
    name: 'Duc Thinh',
    role: 'Business Development',
    description: 'Đồng hành từ giai đoạn tìm hiểu nhu cầu, tư vấn giải pháp đến xây dựng phương án hợp tác phù hợp cho từng doanh nghiệp.',
    skills: ['BD', 'Consulting', 'Partnership'],
    image: '/homepage/team/duc-thinh.webp',
  },
  {
    id: 3,
    index: '03',
    initials: 'NV',
    name: 'Nguyen Vy',
    role: 'Tech Lead',
    description: 'Phụ trách định hướng kỹ thuật, kiến trúc hệ thống và tiêu chuẩn triển khai để sản phẩm ổn định, dễ mở rộng và dễ bảo trì.',
    skills: ['Architecture', 'Engineering', 'Delivery'],
    image: null,
  },
  {
    id: 4,
    index: '04',
    initials: 'TC',
    name: 'The Cong',
    role: 'Senior Frontend Developer',
    description: 'Xây dựng trải nghiệm giao diện, tương tác và hiệu năng phía frontend với trọng tâm là tính nhất quán, responsive và dễ sử dụng.',
    skills: ['Frontend', 'UI Engineering', 'Performance'],
    image: '/homepage/team/the-cong.webp',
  },
  {
    id: 5,
    index: '05',
    initials: 'NP',
    name: 'Nguyen Phuong',
    role: 'Senior Backend Developer',
    description: 'Phát triển backend, API và luồng dữ liệu phục vụ các hệ thống web, phần mềm và quy trình tự động hóa của KEDI.',
    skills: ['Backend', 'API', 'Data'],
    image: null,
  },
  {
    id: 6,
    index: '06',
    initials: 'PD',
    name: 'Phi Den',
    role: 'Sales Manager',
    description: 'Phụ trách kết nối nhu cầu thực tế của khách hàng với đội triển khai, theo sát tiến độ tư vấn và trải nghiệm trong suốt quá trình hợp tác.',
    skills: ['Sales', 'Customer Success', 'Growth'],
    image: '/homepage/team/phi-den.webp',
  },
  {
    id: 7,
    index: '07',
    initials: 'DA',
    name: 'Dinh Anh',
    role: 'Tech Supporter',
    description: 'Hỗ trợ kỹ thuật, tiếp nhận vấn đề và phối hợp xử lý để website và hệ thống của khách hàng duy trì trạng thái vận hành ổn định.',
    skills: ['Support', 'Troubleshooting', 'Operations'],
    image: '/homepage/team/dinh-anh.webp',
  },
  {
    id: 8,
    index: '08',
    initials: 'AI',
    name: 'Đội ngũ KEDI AI Agent',
    role: 'AI Operations',
    description: 'Các AI Agent hỗ trợ đội ngũ KEDI trong nghiên cứu, xử lý dữ liệu, tự động hóa tác vụ và tăng tốc những quy trình có thể chuẩn hóa.',
    skills: ['AI Agent', 'Automation', 'Research'],
    image: null,
  },
  {
    id: 9,
    index: '09',
    initials: 'K+',
    name: 'Các đối tác thân hữu khác',
    role: 'Partner Network',
    description: 'Mạng lưới đối tác đồng hành cùng KEDI ở các mảng chuyên môn bổ trợ, giúp mở rộng năng lực triển khai khi dự án cần thêm nguồn lực phù hợp.',
    skills: ['Partner', 'Specialist', 'Collaboration'],
    image: null,
  },
] as const;

export default function ClientsKedi() {
  const reduceMotion = useReducedMotion();
  const [activeId, setActiveId] = useState<number | null>(teamMembers[0]?.id ?? null);

  return (
    <section
      id="clients"
      className="relative z-40 overflow-hidden bg-[#eef4fa] py-20 text-kedi-navy lg:py-28"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(246,249,252,.96) 0%, rgba(246,249,252,.90) 46%, rgba(246,249,252,.80) 100%), url('/homepage/golden-insights-light.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="pointer-events-none absolute -left-40 top-8 h-[420px] w-[420px] rounded-full bg-kedi-yellow/[0.10] blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[480px] w-[480px] rounded-full bg-[#2e76c5]/[0.10] blur-[140px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-kedi-yellow/70 to-transparent" />

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14 xl:px-20 2xl:px-24">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.65, ease: EASE }}
          className="grid gap-7 border-b border-kedi-navy/10 pb-10 lg:grid-cols-[1.1fr_.9fr] lg:items-end"
        >
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-kedi-yellow">
              KEDI Team
            </p>
            <h2 className="mt-4 max-w-5xl text-[44px] font-semibold leading-[0.95] tracking-[-0.045em] sm:text-[58px] lg:text-[72px]">
              Các thành viên trong team <span className="text-kedi-yellow">sẵn sàng phục vụ.</span>
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-kedi-navy/60 lg:justify-self-end lg:text-base">
            Từ chiến lược, kinh doanh và phát triển sản phẩm đến vận hành, hỗ trợ kỹ thuật và AI Agent, đội ngũ KEDI phối hợp để đồng hành xuyên suốt cùng khách hàng.
          </p>
        </motion.div>

        <div className="divide-y divide-kedi-navy/10 border-b border-kedi-navy/10">
          {teamMembers.map((item, index) => {
            const active = item.id === activeId;

            return (
              <motion.article
                layout
                key={item.id}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={reduceMotion ? { duration: 0 } : { duration: 0.5, delay: Math.min(index * 0.045, 0.28), ease: EASE }}
                className={`relative overflow-hidden transition-colors duration-500 ${active ? 'bg-white/75 shadow-[0_18px_55px_rgba(11,45,91,.08)] backdrop-blur-md' : 'hover:bg-white/45'}`}
              >
                <motion.div
                  aria-hidden="true"
                  initial={false}
                  animate={{ scaleX: active ? 1 : 0 }}
                  transition={reduceMotion ? { duration: 0 } : { duration: 0.55, ease: EASE }}
                  className="absolute inset-x-0 top-0 h-px origin-left bg-gradient-to-r from-kedi-yellow via-kedi-yellow/45 to-transparent"
                />

                <div className="grid min-h-[78px] items-center gap-4 px-5 py-5 sm:grid-cols-[72px_minmax(0,1fr)_minmax(0,.8fr)_auto] sm:gap-6 sm:px-6 sm:py-6 lg:px-8 xl:px-10">
                  <span className="text-[13px] font-black tracking-[0.14em] text-kedi-yellow">{item.index}</span>

                  <p className="text-[15px] font-semibold text-kedi-navy sm:text-base">{item.name}</p>

                  <p className="text-sm text-kedi-navy/55 sm:text-base">{item.role}</p>

                  <button
                    type="button"
                    onClick={() => setActiveId((current) => (current === item.id ? null : item.id))}
                    aria-expanded={active}
                    className={`group inline-flex h-10 min-w-[112px] items-center justify-between gap-4 rounded-full border px-4 text-[11px] font-semibold uppercase tracking-[0.11em] transition-all duration-300 sm:justify-self-end ${
                      active
                        ? 'border-kedi-yellow bg-kedi-yellow text-kedi-navy shadow-[0_10px_30px_rgba(255,198,41,.18)]'
                        : 'border-kedi-navy/15 bg-white/55 text-kedi-navy hover:border-kedi-yellow hover:bg-white hover:text-[#92700b]'
                    }`}
                  >
                    <span>{active ? 'Đóng' : 'Xem'}</span>
                    <motion.span
                      initial={false}
                      animate={{ rotate: active ? 180 : 0 }}
                      transition={reduceMotion ? { duration: 0 } : { duration: 0.32, ease: EASE }}
                      className="grid h-5 w-5 place-items-center"
                    >
                      {active ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                    </motion.span>
                  </button>
                </div>

                <AnimatePresence initial={false}>
                  {active ? (
                    <motion.div
                      key="content"
                      initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                      transition={reduceMotion ? { duration: 0 } : { height: { duration: 0.52, ease: EASE }, opacity: { duration: 0.3, delay: 0.08 } }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-7 px-5 pb-8 pt-2 sm:px-6 sm:pb-10 lg:grid-cols-[170px_minmax(0,1fr)] lg:gap-10 lg:px-8 lg:pb-12 xl:px-10">
                        <motion.div
                          initial={reduceMotion ? false : { opacity: 0, scale: 0.92, rotate: -2 }}
                          animate={{ opacity: 1, scale: 1, rotate: 0 }}
                          transition={reduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.12, ease: EASE }}
                          className="relative grid h-[150px] w-[150px] place-items-center overflow-hidden rounded-[24px] border border-kedi-navy/10 bg-[linear-gradient(145deg,#0b2d5b,#174f85)] text-white shadow-[0_22px_60px_rgba(11,45,91,.18)]"
                        >
                          {item.image ? (
                            <>
                              <Image
                                src={item.image}
                                alt={`${item.name} - ${item.role}`}
                                fill
                                sizes="150px"
                                className="object-cover object-center"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-kedi-navy/20 via-transparent to-transparent" />
                            </>
                          ) : (
                            <div className="text-center">
                              <span className="block text-[42px] font-black leading-none tracking-[-0.05em] text-kedi-yellow">{item.initials}</span>
                              <span className="mt-3 block text-[9px] font-semibold uppercase tracking-[0.16em] text-white/55">KEDI Team</span>
                            </div>
                          )}
                        </motion.div>

                        <motion.div
                          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={reduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.16, ease: EASE }}
                          className="relative max-w-5xl"
                        >
                          <Quote className="absolute -left-1 -top-1 h-9 w-9 text-kedi-yellow/20" />
                          <p className="relative z-10 pl-1 text-[15px] leading-7 text-kedi-navy/75 sm:text-base sm:leading-8 lg:text-[17px]">
                            {item.description}
                          </p>

                          <div className="mt-6 flex flex-wrap gap-2">
                            {item.skills.map((skill, skillIndex) => (
                              <motion.span
                                key={`${item.id}-${skill}`}
                                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={reduceMotion ? { duration: 0 } : { duration: 0.35, delay: 0.2 + skillIndex * 0.035 }}
                                className="rounded-full border border-kedi-yellow/45 bg-kedi-yellow/[0.12] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.07em] text-[#7b5f07]"
                              >
                                {skill}
                              </motion.span>
                            ))}
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
