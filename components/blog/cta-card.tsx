'use client';

import { Gift, Menu } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import { categoryData } from './data/CTAdata';

interface CTACardProps {
  onClickGift?: () => void;
  className?: string;
}

const CTACard: React.FC<CTACardProps> = ({ onClickGift, className = '' }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  return (
    <>
      {/* Menu overlay */}
      {showMenu && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={handleCloseMenu}
        />
      )}

      {/* Menu content */}
      {showMenu && (
        <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-[1200px] px-4">
          <div className="bg-gray-800 text-white rounded-lg shadow-2xl max-h-[85vh] overflow-y-auto backdrop-blur-sm">
            {/* Menu grid */}
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 divide-x divide-gray-600">
              {categoryData.map((category, index) => (
                <div
                  key={index}
                  className="space-y-3 px-4 first:pl-0 last:pr-0"
                >
                  <h4 className="font-bold text-white pb-2 border-b border-gray-600">
                    {category.title}
                  </h4>
                  {/* Grid cho items nếu > 7 items */}
                  {category.items.length > 7 ? (
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <a
                            href={item.href}
                            onClick={handleCloseMenu}
                            className="text-sm text-gray-300 hover:text-white hover:underline transition block py-1"
                          >
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <ul className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <a
                            href={item.href}
                            onClick={handleCloseMenu}
                            className="text-sm text-gray-300 hover:text-white hover:underline transition block py-1"
                          >
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CTA Card */}
      <div
        className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-[900px] px-4 ${className}`}
      >
        {/* Layer ngoài để tạo viền animate */}
        <div className="p-[2px] rounded-sm bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-gradient-x">
          {/* Layer trong chứa nội dung CTA */}
          <div className="bg-[#2e005a] text-white rounded-sm flex overflow-hidden">
            {/* Khối 1: Logo */}
            <div className="flex items-center justify-center px-4 py-2 border-r border-pink-400/110">
              <Image
                src="https://mona.media/wp-content/uploads/2023/03/media-less-white-logo.png"
                alt="monamedia"
                width={120}
                height={40}
                className="object-contain"
              />
            </div>

            {/* Khối 2: Danh mục tin */}
            <button
              onClick={handleToggleMenu}
              className="flex items-center justify-center gap-2 px-6 py-2  border-pink-400/40 hover:bg-pink-600/20 transition"
            >
              <span className="font-semibold">DANH MỤC TIN</span>
              <Menu size={20} className="text-white" />
            </button>

            {/* Khối 3: CTA hộp quà - Ẩn text trên mobile */}
            <button
              onClick={onClickGift}
              className="flex-1 rounded-lg flex items-center justify-center gap-2 px-4 h-10 font-semibold bg-gradient-to-r from-[#ff4d8d] via-[#ff2e7e] to-[#d81b60] hover:from-[#e61a69] hover:to-[#c2185b] transition-all"
            >
              <Gift size={20} />
              <span className="hidden sm:inline">
                Xem ngay thành công của chúng tôi tại đây
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* CSS cho animation gradient */}
      <style jsx>{`
        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </>
  );
};

export default CTACard;
