'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Button } from '../ui/button';
import Boderyelow from '@/components/ui/boder-yelow'; // Đảm bảo đúng đường dẫn import

interface Show {
  title: string;
  image: string;
  videoUrl?: string;
}

interface SlideShowSectionProps {
  title: string;
  show: Show[];
}

const ActivitiesSlideShow = ({ title, show }: SlideShowSectionProps) => {
  const [selectedVideo, setSelectedVideo] = useState<Show | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);

  const slides = Array.isArray(show) ? show.slice(0, 6) : [];

  const handleTouchStart = (e: React.TouchEvent) =>
    setTouchStart(e.targetTouches[0].clientX);

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      setCurrentIndex((prev) =>
        diff > 0
          ? (prev + 1) % slides.length
          : prev === 0
            ? slides.length - 1
            : prev - 1
      );
    }
  };

  if (slides.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500">Không có nội dung</div>
    );
  }

  return (
    <div className="w-full px-4 py-8">
      {/* BỌC VIỀN VÀNG CHO TOÀN BỘ KHỐI NỘI DUNG */}
      <Boderyelow>
        <div className="w-full bg-gradient-to-br from-white via-purple-50 to-white px-4 py-8 rounded-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-8">
            {title}
          </h2>

          {/* Mobile: Slider 1 ảnh, Desktop: Grid 6 ảnh */}
          <div className="max-w-6xl mx-auto ">
            {/* Mobile Slider */}
            <div className="md:hidden">
              <div
                className="overflow-hidden "
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <motion.div
                  className="flex"
                  animate={{ x: `${-currentIndex * 100}%` }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  {slides.map((slide) => (
                    <div key={slide.title} className="w-full flex-shrink-0 px-4">
                      <motion.div
                        className="relative aspect-[9/16] rounded-xl overflow-hidden shadow-lg cursor-pointer group mx-auto max-w-xs"
                        onClick={() => slide.videoUrl && setSelectedVideo(slide)}
                        whileHover={{ scale: 1.02 }}
                      >
                        <Image
                          src={slide.image}
                          alt={slide.title}
                          fill
                          className="object-cover rounded-xl"
                          sizes="100vw"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-active:opacity-100">
                          <div className="absolute bottom-3 left-3 right-3">
                            <h3 className="text-white font-semibold text-sm line-clamp-2">
                              {slide.title}
                            </h3>
                          </div>
                        </div>

                        {slide.videoUrl && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                              <div className="w-0 h-0 border-l-[8px] border-l-black border-y-[6px] border-y-transparent ml-1" />
                            </div>
                          </div>
                        )}
                      </motion.div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Mobile Indicators */}
              <div className="flex justify-center mt-4 space-x-2">
                {slides.map((_, i) => (
                  <Button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === currentIndex ? 'bg-purple-500' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Desktop Grid */}
            <div className="hidden md:grid grid-cols-6 gap-4">
              {slides.map((slide) => (
                <motion.div
                  key={slide.title}
                  className="relative aspect-[9/16] rounded-xl overflow-hidden shadow-lg cursor-pointer group"
                  onClick={() => slide.videoUrl && setSelectedVideo(slide)}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover rounded-xl"
                    sizes="16vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100">
                    <div className="absolute bottom-2 left-2 right-2">
                      <h3 className="text-white font-semibold text-sm line-clamp-2">
                        {slide.title}
                      </h3>
                    </div>
                  </div>

                  {slide.videoUrl && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
                        <div className="w-0 h-0 border-l-[8px] border-l-black border-y-[6px] border-y-transparent ml-1" />
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Boderyelow>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo?.videoUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999] p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={
                  selectedVideo.videoUrl.includes('youtube')
                    ? `https://www.youtube.com/embed/${
                        selectedVideo.videoUrl.split('v=')[1]?.split('&')[0]
                      }`
                    : selectedVideo.videoUrl
                }
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
              <Button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 text-white text-2xl bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70"
              >
                x
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ActivitiesSlideShow;