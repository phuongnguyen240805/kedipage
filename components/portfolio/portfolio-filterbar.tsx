"use client";

import { useState, useCallback, memo, useMemo, useTransition } from "react";
import { FiCircle } from "react-icons/fi";
import { Button } from "../ui/button";

type FilterBarProps = {
  onFilterChange: (filter: string) => void;
  onSearchChange?: (search: string) => void;
};

// Type-safe filter options
type FilterOption = {
  label: {
    count: string;
    title: string;
    subtitle: string;
  };
  value: string;
  color: string;
};

// Constants - moved outside component
const FILTER_OPTIONS: readonly FilterOption[] = [
  {
    label: { count: "500+", title: "Dự án", subtitle: "MONA's Buddy" },
    value: "buddy",
    color: "from-orange-400 to-pink-500",
  },
  {
    label: { count: "9689+", title: "Dự án", subtitle: "Premium Website" },
    value: "premium",
    color: "from-purple-500 to-pink-500",
  },
  {
    label: { count: "500+", title: "Đối tác SEO", subtitle: "luôn đồng hành" },
    value: "seo",
    color: "from-pink-500 to-purple-500",
  },
  {
    label: { count: "600+", title: "Phần mềm", subtitle: "đang vận hành" },
    value: "software",
    color: "from-sky-500 to-blue-500",
  },
  {
    label: {
      count: "50+",
      title: "Dự án media",
      subtitle: "triển khai thành công",
    },
    value: "media",
    color: "from-purple-800 to-purple-500",
  },
  {
    label: { count: "250+", title: "Dự án Elearning", subtitle: "ấn tượng" },
    value: "elearning",
    color: "from-pink-600 to-pink-400",
  },
];

// Separate FilterButton component
const FilterButton = memo(
  ({
    option,
    isActive,
    isPending,
    onClick,
  }: {
    option: FilterOption;
    isActive: boolean;
    isPending: boolean;
    onClick: () => void;
  }) => {
    return (
      <Button
        onClick={onClick}
        disabled={isPending}
        className={`
        group relative flex items-start gap-3 w-full min-w-0 h-[100px] px-4 py-3 
        text-white text-left rounded-[12px] overflow-hidden
        bg-gradient-to-r ${option.color} 
        shadow-md transition-all duration-300
        hover:scale-[1.02] hover:shadow-lg
        active:scale-[0.98]
        disabled:opacity-50 disabled:cursor-not-allowed
        ${isActive ? "ring-2 ring-white/70 scale-[1.02]" : ""}
        ${isPending ? "opacity-50" : ""}
      `}
        aria-pressed={isActive}
        aria-label={`Filter by ${option.label.subtitle}`}
      >
        {/* Hover overlay effect */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

        {/* Label */}
        <div className="flex-1 relative z-10 min-w-0">
          <div className="flex flex-col items-center justify-center space-y-1">
            <div className="text-lg font-bold transition-transform group-hover:scale-105">
              {option.label.count}
            </div>
            <div className="text-[13px] font-bold leading-tight uppercase">
              {option.label.title}
            </div>
            <div className="text-[11px] opacity-90 leading-tight">
              {option.label.subtitle}
            </div>
          </div>
        </div>

        {/* Active indicator */}
        {isActive && (
          <div className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full animate-pulse" />
        )}
      </Button>
    );
  },
);

FilterButton.displayName = "FilterButton";

// Main FilterBar component
const FilterBar = memo(({ onFilterChange }: FilterBarProps) => {
  const [active, setActive] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  // Memoized click handler with transition
  const handleClick = useCallback(
    (value: string) => {
      startTransition(() => {
        setActive(value);
        onFilterChange(value);
      });
    },
    [onFilterChange],
  );

  // Reset filter
  const handleReset = useCallback(() => {
    startTransition(() => {
      setActive(null);
      onFilterChange("");
    });
  }, [onFilterChange]);

  return (
    <div className="space-y-4">
      {/* Filter buttons */}
      <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-6 gap-3 my-6 px-2 w-full">
        {FILTER_OPTIONS.map((option) => (
          <div key={option.value} className="flex-1 min-w-0">
            <FilterButton
              option={option}
              isActive={option.value === active}
              isPending={isPending}
              onClick={() => handleClick(option.value)}
            />
          </div>
        ))}
      </div>

      {/* Active filter indicator & Reset button */}
      {active && (
        <div className="flex items-center justify-center gap-4 px-4">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Đang lọc:{" "}
            <strong>
              {FILTER_OPTIONS.find((o) => o.value === active)?.label.subtitle}
            </strong>
          </span>
          <button
            onClick={handleReset}
            className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 
                     underline transition-colors"
            disabled={isPending}
          >
            Xóa bộ lọc
          </button>
        </div>
      )}
    </div>
  );
});

FilterBar.displayName = "FilterBar";
export default FilterBar;
