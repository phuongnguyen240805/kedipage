'use client';
import { Search, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect, useRef, useMemo } from 'react';
import { serviceCategories } from '@/components/services-dropdown/datas/services-data';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import Boderyelow from '../ui/boder-yelow'; // Đảm bảo đường dẫn này đúng với dự án của bạn

interface SearchDropdownProps {
  isOpen: boolean;
  onToggle: () => void;
}

const SearchDropdown = ({ isOpen, onToggle }: SearchDropdownProps) => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const allServices = useMemo(() => {
    return Object.values(serviceCategories).flatMap((category) => 
      category.services.map(s => ({
        title: s.title || (s.titleKey ? t(s.titleKey) : ''),
        href: s.href ? (s.href.startsWith('/') ? s.href : `/${s.href}`) : '#'
      }))
    );
  }, [t]);

  const otherSuggestions = [
    { title: 'Câu chuyện thành công của Mona', href: '/success-stories' },
    { title: 'Tuyển dụng', href: '/career' },
  ];

  const filteredServices = allServices.filter((s) =>
    s.title.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0, 6);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setSearchQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (isOpen && containerRef.current && !containerRef.current.contains(event.target as Node)) {
        onToggle();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onToggle]);

  return (
    <div ref={containerRef} className="relative">
      {/* Nút bấm tìm kiếm trên Header - Chỉnh màu để hợp nền đen */}
      <Button
        className="flex items-center text-black justify-center w-10 h-10 rounded-full bg-white hover:bg-black hover:text-white transition-colors"
        onClick={onToggle}
      >
        <Search className="w-5 h-5" />
      </Button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-3 w-[380px] z-[100]">
          {/* Bọc toàn bộ Dropdown bằng Boderyelow */}
          <Boderyelow>
            <div className="bg-[#1a1a1a] rounded-xl shadow-2xl overflow-hidden border border-white/5">
              
              {/* Input Search - Nền tối chữ trắng */}
              <div className="p-4 border-b border-white/10">
                <div className="flex items-center gap-3 bg-white/5 px-3 py-2.5 rounded-lg border border-white/10 focus-within:border-yellow-500/50 focus-within:bg-white/10 rounded-xl transition-all">
                  <Search className="w-4 h-4 text-gray-400" />
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Tìm kiếm dịch vụ..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 text-[14px] outline-none bg-transparent text-white placeholder:text-gray-500"
                  />
                </div>
              </div>

              <div className="max-h-[450px] overflow-y-auto no-scrollbar py-2">
                {!searchQuery ? (
                  <>
                    {/* Phần Dịch vụ phổ biến */}
                    <div className="px-4 py-2">
                      <h3 className="text-[11px] font-bold text-yellow-500 uppercase tracking-widest mb-2 opacity-80">Dịch vụ phổ biến</h3>
                      <div className="space-y-0.5">
                        {allServices.slice(0, 4).map((item, idx) => (
                          <Link 
                            key={idx} 
                            href={item.href}
                            onClick={onToggle}
                            className="w-full flex items-center gap-3 px-2 py-2.5 rounded-lg hover:bg-white/5 text-gray-300 transition-colors group"
                          >
                            <Clock className="w-4 h-4 text-gray-500 group-hover:text-yellow-500" />
                            <span className="text-[14px] font-medium group-hover:text-white">{item.title}</span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Phần Khác */}
                    <div className="px-4 py-2 mt-2 border-t border-white/10">
                      <h3 className="text-[11px] font-bold text-yellow-500 uppercase tracking-widest mb-2 opacity-80">Thông tin khác</h3>
                      <div className="space-y-0.5">
                        {otherSuggestions.map((item, idx) => (
                          <Link 
                            key={idx} 
                            href={item.href}
                            onClick={onToggle}
                            className="w-full flex items-center gap-3 px-2 py-2.5 rounded-lg hover:bg-white/5 text-gray-300 transition-colors group"
                          >
                            <Clock className="w-4 h-4 text-gray-500 group-hover:text-yellow-500" />
                            <span className="text-[14px] font-medium group-hover:text-white">{item.title}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="px-2">
                    {filteredServices.length > 0 ? (
                      filteredServices.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          className="w-full flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-yellow-500/10 text-gray-200 transition-all group"
                          onClick={onToggle}
                        >
                          <Search className="w-4 h-4 text-yellow-500/50 group-hover:text-yellow-500" />
                          <span className="text-[14px] font-semibold group-hover:text-white">{item.title}</span>
                        </Link>
                      ))
                    ) : (
                      <div className="p-10 text-center">
                        <p className="text-gray-500 text-sm italic">Không tìm thấy kết quả cho &quot;{searchQuery}&quot;</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </Boderyelow>
        </div>
      )}
    </div>
  );
};

export default SearchDropdown;