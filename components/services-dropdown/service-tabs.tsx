'use client';
import { TFunction } from 'i18next';
import { serviceCategories } from './datas/services-data';
import { cn } from "@/lib/utils";

interface ServiceTabsProps {
  categories: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
  t: TFunction;
}

const ServiceTabs = ({
  categories,
  activeTab,
  onTabChange,
  t,
}: ServiceTabsProps) => {
  return (
    /* - h-[52px]: Cố định chiều cao để không bị giật lên xuống khi chuyển tab.
      - px-0: Không để padding ở đây vì container cha (ServicesDropdown) đã lo phần cách lề 3cm.
      - overflow-y-hidden: Chặn tuyệt đối việc nội dung bị nhảy theo chiều dọc.
    */
    <div className="w-full h-[52px] flex items-end overflow-x-auto overflow-y-hidden no-scrollbar relative z-[100] bg-kedi-navy rounded-t-xl box-border px-0 gap-0">
      {categories.map((category) => {
        const titleKey = serviceCategories[category]?.titleKey;
        const categoryTitle = titleKey ? t(titleKey) : category;
        const isActive = activeTab === category;

        return (
          <button
            key={category}
            type="button"
            onClick={() => onTabChange(category)}
            className={cn(
              "relative flex h-full items-center justify-center whitespace-nowrap border-t border-l border-r font-extrabold uppercase tracking-tight transition-all duration-300",
              "px-[clamp(16px,2vw,32px)] text-[clamp(11px,0.8vw,13px)]",
              isActive
                ? 'z-[110] rounded-t-xl border-kedi-yellow/40 bg-kedi-navy text-kedi-yellow'
                : 'z-[90] border-transparent bg-transparent text-white/50 hover:bg-kedi-yellow/10 hover:text-kedi-yellow'
            )}
          >
            {categoryTitle}

            {isActive && (
              <>
                <div className="absolute -bottom-[1px] left-0 right-0 z-[111] h-[2px] bg-kedi-navy" />
                <div className="absolute bottom-0 left-4 right-4 z-[112] h-[2px] rounded-full bg-kedi-yellow" />
              </>
            )}
          </button>
        );
      })}
      
      {/* Đường line mờ chạy dưới cùng của toàn bộ thanh Tab để khớp với border của Content */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/10 -z-10" />
    </div>
  );
};

export default ServiceTabs;