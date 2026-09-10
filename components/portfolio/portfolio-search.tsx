'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { Button } from '../ui/button';
import { FiSearch, FiX } from 'react-icons/fi';

type ProjectSearchProps = {
  onSearch: (terms: string[]) => void;
};

const searchSuggestions = [
  'Buddy',
  'Website',
  'SEO-Marketing',
  'Nhập hàng Trung Quốc',
  'LMS',
  'Elearning',
  'Quay chụp',
  'Phần mềm',
];

const trendingKeywords = [
  'Hệ sinh thái Woofoo với 13,2 triệu sub trên Youtube',
  'Dự án website hiện đại, đậm vị Việt Nam',
  'Dự án mới phát triển đa nền tảng',
];

const projects = [
  { title: 'Kết hợp hoàn hảo giữa truyền thống và hiện đại' },
  { title: 'Hệ thống rạp chiếu phim hiện đại bậc nhất' },
  { title: 'Hệ sinh thái Woofoo với 13,2 triệu sub trên Youtube' },
  { title: 'Dự án website hiện đại, đậm vị Việt Nam' },
  { title: 'Dự án mới phát triển đa nền tảng' },
  { title: 'Giao diện tối ưu UX/UI' },
];

export default function ProjectSearch({ onSearch }: ProjectSearchProps) {
  const [searchInput, setSearchInput] = useState('');
  const [selectedSuggestions, setSelectedSuggestions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem('search-history');
    if (stored) setSearchHistory(JSON.parse(stored));
  }, []);

  // memoized save to avoid changing handleSearch identity
  const saveSearchHistory = useCallback((term: string) => {
    setSearchHistory((prev) => {
      const updated = [term, ...prev.filter((t) => t !== term)].slice(0, 5);
      try {
        localStorage.setItem('search-history', JSON.stringify(updated));
      } catch {
        /* ignore localStorage errors */
      }
      return updated;
    });
  }, []);

  const handleSearch = useCallback(
    async (opts?: { forceTerm?: string }) => {
      setLoading(true);
      setError(null);
      try {
        const inputToUse = opts?.forceTerm ?? searchInput;
        const searchTerms = [
          ...selectedSuggestions,
          ...inputToUse
            .split(',')
            .map((t) => t.trim())
            .filter(Boolean),
        ];

        // small debounce-like delay (mock)
        await new Promise((res) => setTimeout(res, 500));

        const filtered = projects
          .map((p) => p.title)
          .filter((title) =>
            searchTerms.some((term) =>
              title.toLowerCase().includes(term.toLowerCase())
            )
          );

        if (filtered.length === 0) {
          setError(null);
          setSearchResults([]);
          onSearch([]);
        } else {
          setSearchResults(filtered);
          onSearch(filtered);
        }

        if (inputToUse.trim()) saveSearchHistory(inputToUse.trim());
      } catch {
        setError('Không thể tìm kiếm ngay bây giờ. Vui lòng thử lại!');
        onSearch([]);
      } finally {
        setLoading(false);
      }
    },
    [searchInput, selectedSuggestions, onSearch, saveSearchHistory]
  );

  useEffect(() => {
    if (searchInput.trim() !== '' || selectedSuggestions.length > 0) {
      handleSearch();
    } else {
      // clear results when no input/suggestions
      setSearchResults([]);
    }
  }, [handleSearch, searchInput, selectedSuggestions]);

  useEffect(() => {
    if (searchInput.trim()) {
      const matches = projects
        .map((p) => p.title)
        .filter((title) =>
          title.toLowerCase().includes(searchInput.toLowerCase())
        );
      setSearchResults(matches);
    } else {
      setSearchResults([]);
    }
  }, [searchInput]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setDropdownVisible(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchInput(value);
    setError(null);
    setDropdownVisible(true);
  };

  const toggleSuggestion = (term: string) => {
    const updated = selectedSuggestions.includes(term)
      ? selectedSuggestions.filter((t) => t !== term)
      : [...selectedSuggestions, term];
    setSelectedSuggestions(updated);
    onSearch([
      ...updated,
      ...searchInput
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean),
    ]);
  };

  const handleSelectDropdownItem = (term: string) => {
    setSearchInput(term);
    setDropdownVisible(false);
    saveSearchHistory(term);
    onSearch([term]);
  };

  const handleClearHistoryItem = (term: string) => {
    const updated = searchHistory.filter((t) => t !== term);
    setSearchHistory(updated);
    try {
      localStorage.setItem('search-history', JSON.stringify(updated));
    } catch {
      /* ignore */
    }
  };

  const handleClearAllHistory = () => {
    setSearchHistory([]);
    try {
      localStorage.removeItem('search-history');
    } catch {
      /* ignore */
    }
  };

  return (
    <div
      ref={wrapperRef}
      className="w-full max-w-screen-xl mx-auto my-6 relative -mt-6"
    >
      {/* Search Box */}
      <div className="flex w-full overflow-hidden rounded-lg border border-gray-300 shadow-sm bg-white">
        <div className="flex items-center px-4">
          <FiSearch className="text-[#713FC9]" />
        </div>
        <input
          type="text"
          value={searchInput}
          onChange={handleInputChange}
          placeholder={error || 'Tìm kiếm dự án chất lượng'}
          className={`flex-1 py-3 text-sm px-2 focus:outline-none bg-transparent ${
            error ? 'text-red-500 placeholder-red-400' : ''
          }`}
          onFocus={() => setDropdownVisible(true)}
        />
        <div className="h-6 w-px bg-gray-300 self-center" />
        <select
          className="px-3 py-3 text-sm text-[#2c2c2c] focus:outline-none bg-white"
          onChange={(e) => toggleSuggestion(e.target.value)}
        >
          <option value="">Tất cả các ngành</option>
          <option value="Buddy">Buddy</option>
          <option value="Premium Website">Premium Website</option>
          <option value="SEO-Marketing">SEO-Marketing</option>
          <option value="LMS">LMS</option>
        </select>

        <Button
          type="button"
          onClick={() => handleSearch({})}
          disabled={loading}
          className="flex items-center gap-2 px-6 py-3 
             text-white bg-gradient-to-r from-[#FF5722] to-[#FF1744] 
             text-sm font-medium hover:opacity-90 
             rounded-none rounded-r-lg h-full"
        >
          <FiSearch className="text-white w-4 h-4" />
          {loading ? 'Đang tìm...' : 'Tìm kiếm dự án'}
        </Button>
      </div>

      {/* Dropdown Gợi Ý */}
      {dropdownVisible && (
        <div className="absolute bg-white w-full border border-gray-200 rounded-md shadow-md mt-1 z-10 p-4 text-sm">
          {/* Lịch sử tìm kiếm */}
          {searchInput.trim() === '' && searchHistory.length > 0 && (
            <>
              <div className="flex justify-between mb-2 text-gray-600">
                <span>LỊCH SỬ TÌM KIẾM</span>
                <Button
                  onClick={handleClearAllHistory}
                  className="text-blue-500 text-xs"
                >
                  Xoá tất cả
                </Button>
              </div>
              <ul className="mb-4">
                {searchHistory.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex justify-between items-center py-1 hover:bg-gray-100 px-2 rounded cursor-pointer"
                  >
                    <span
                      onClick={() => handleSelectDropdownItem(item)}
                      onKeyDown={(e) =>
                        (e.key === 'Enter' || e.key === ' ') &&
                        handleSelectDropdownItem(item)
                      }
                      tabIndex={0}
                    >
                      {item}
                    </span>
                    <FiX
                      className="text-gray-400 text-xs cursor-pointer"
                      onClick={() => handleClearHistoryItem(item)}
                      onKeyDown={(e) =>
                        (e.key === 'Enter' || e.key === ' ') &&
                        handleClearHistoryItem(item)
                      }
                      tabIndex={0}
                    />
                  </li>
                ))}
              </ul>
            </>
          )}

          {/* Kết quả tìm kiếm */}
          {searchInput.trim() !== '' && (
            <>
              {searchResults.length > 0 ? (
                <ul className="mb-4">
                  {searchResults.map((result, idx) => (
                    <li
                      key={idx}
                      className="py-1 px-2 hover:bg-gray-100 rounded cursor-pointer"
                      onClick={() => handleSelectDropdownItem(result)}
                      onKeyDown={(e) =>
                        e.key === 'Enter' && handleSelectDropdownItem(result)
                      }
                      tabIndex={0}
                      role="button"
                    >
                      {result}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="text-gray-500 italic">
                  Không tìm thấy kết quả phù hợp.
                </div>
              )}
            </>
          )}

          {/* Từ khoá phổ biến */}
          {searchInput.trim() === '' && (
            <>
              <div className="text-gray-600 mb-2">TỪ KHÓA PHỔ BIẾN</div>
              <ul className="flex flex-wrap gap-2">
                {trendingKeywords.map((kw) => (
                  <li
                    key={kw}
                    onClick={() => handleSelectDropdownItem(kw)}
                    onKeyDown={(e) =>
                      e.key === 'Enter' && handleSelectDropdownItem(kw)
                    }
                    tabIndex={0}
                    className="bg-gray-100 px-3 py-1 rounded-full cursor-pointer hover:bg-gray-200 text-sm"
                    role="button"
                  >
                    {kw}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}

      {/* Gợi ý nhanh */}
      <div className="flex flex-wrap gap-4 mt-4 text-sm font-medium text-gray-700">
        {searchSuggestions.map((item) => {
          const selected = selectedSuggestions.includes(item);
          return (
            <button
              key={item}
              type="button"
              className={`cursor-pointer transition ${
                selected
                  ? 'text-[#713FC9] font-semibold underline'
                  : 'hover:text-[#713FC9]'
              }`}
              onClick={() => toggleSuggestion(item)}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
}
