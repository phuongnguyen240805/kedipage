'use client';
import { Search, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect, useRef, useMemo } from 'react';
import { serviceCategories } from '@/components/services-dropdown/datas/services-data';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { GlassSurface } from '@/components/liquid-glass/GlassSurface';

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
    { title: 'Câu chuyện thành công của Kedi', href: '/success-stories' },
    { title: 'Tuyển dụng', href: '/career' },
  ];

  const filteredServices = allServices.filter((s) =>
    s.title.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0, 6);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => inputRef.current?.focus(), 100);
      return () => clearTimeout(timer);
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

  useEffect(() => {
    if (!isOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onToggle();
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [isOpen, onToggle]);

  return (
    <div ref={containerRef} className="relative">
      {/* Nút bấm tìm kiếm trên Header - Chỉnh màu để hợp nền đen */}
      <Button
        size="icon"
        className="h-10 w-10 rounded-full bg-kedi-yellow text-kedi-navy transition-all duration-200 hover:scale-105 hover:bg-white hover:text-kedi-navy"
        onClick={onToggle}
        aria-label="Tìm kiếm"
        aria-expanded={isOpen}
        aria-controls="kedi-search-dropdown"
      >
        <Search className="h-4 w-4" />
      </Button>

      {isOpen && (
        <div className="absolute top-full right-0 z-[100] mt-3 w-[380px] max-w-[calc(100vw-32px)] animate-in fade-in-0 slide-in-from-top-2 duration-200">
            <GlassSurface id="kedi-search-dropdown" material="menu" tone="dark" className="overflow-hidden">
              
              {/* Input Search - Nền tối chữ trắng */}
              <div className="p-4 border-b border-white/10">
                <div data-glass="field" className="flex items-center gap-3 bg-white/5 px-3 py-2.5 rounded-xl border border-white/10 focus-within:border-kedi-yellow/50 focus-within:bg-white/10 transition-all">
                  <Search className="w-4 h-4 text-gray-400" />
                  <input
                    data-glass="none"
                    ref={inputRef}
                    type="text"
                    placeholder="Tìm kiếm dịch vụ..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="min-w-0 flex-1 text-[14px] outline-none bg-transparent text-white placeholder:text-gray-300"
                  />
                </div>
              </div>

              <div className="max-h-[450px] overflow-y-auto no-scrollbar py-2">
                {!searchQuery ? (
                  <>
                    {/* Phần Dịch vụ phổ biến */}
                    <div className="px-4 py-2">
                      <h3 className="text-[11px] font-bold text-kedi-yellow uppercase tracking-widest mb-2 opacity-80">Dịch vụ phổ biến</h3>
                      <div className="liquid-menu-stack">
                        {allServices.slice(0, 4).map((item, idx) => (
                          <Link 
                            data-glass="item"
                            key={idx} 
                            href={item.href}
                            onClick={onToggle}
                            className="w-full flex items-center gap-3 px-2 py-2.5 rounded-lg hover:bg-white/5 text-gray-300 transition-colors group"
                          >
                            <Clock className="w-4 h-4 text-gray-500 group-hover:text-kedi-yellow" />
                            <span className="text-[14px] font-medium group-hover:text-white">{item.title}</span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Phần Khác */}
                    <div className="px-4 py-2 mt-2 border-t border-white/10">
                      <h3 className="text-[11px] font-bold text-kedi-yellow uppercase tracking-widest mb-2 opacity-80">Thông tin khác</h3>
                      <div className="liquid-menu-stack">
                        {otherSuggestions.map((item, idx) => (
                          <Link 
                            data-glass="item"
                            key={idx} 
                            href={item.href}
                            onClick={onToggle}
                            className="w-full flex items-center gap-3 px-2 py-2.5 rounded-lg hover:bg-white/5 text-gray-300 transition-colors group"
                          >
                            <Clock className="w-4 h-4 text-gray-500 group-hover:text-kedi-yellow" />
                            <span className="text-[14px] font-medium group-hover:text-white">{item.title}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="liquid-menu-stack px-4 py-2">
                    {filteredServices.length > 0 ? (
                      filteredServices.map((item, idx) => (
                        <Link
                          data-glass="item"
                          key={idx}
                          href={item.href}
                          className="w-full flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-kedi-yellow/10 text-gray-200 transition-all group"
                          onClick={onToggle}
                        >
                          <Search className="w-4 h-4 text-kedi-yellow/50 group-hover:text-kedi-yellow" />
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
            </GlassSurface>
        </div>
      )}
    </div>
  );
};

export default SearchDropdown;
