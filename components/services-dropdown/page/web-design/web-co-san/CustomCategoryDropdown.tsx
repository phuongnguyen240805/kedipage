import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// --- 1. ĐƯA COMPONENT NÀY RA NGOÀI ---
function CustomCategoryDropdown({
  options,
  selected,
  onSelect,
}: {
  options: string[];
  selected: string;
  onSelect: (val: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative flex items-center h-full min-w-[160px]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-2 text-sm md:text-lg font-bold text-gray-700 hover:text-purple-600 transition-colors"
      >
        <span className="truncate">{selected || "Ngành nghề"}</span>
        <ChevronDown className={`ml-2 w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-64 bg-white border border-gray-100 shadow-2xl rounded-xl overflow-hidden z-[110] animate-in fade-in zoom-in duration-200">
          <div className="max-h-[300px] overflow-y-auto py-2">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => {
                  onSelect(option);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-5 py-3 text-sm hover:bg-orange-50 transition-colors ${
                  selected === option || (option === "Tất cả" && selected === "")
                    ? "text-orange-600 bg-orange-50 font-bold"
                    : "text-gray-600"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
export default CustomCategoryDropdown;