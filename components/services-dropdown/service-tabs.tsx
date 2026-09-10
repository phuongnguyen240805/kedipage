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
    <div className="w-full h-[52px] flex items-end overflow-x-auto overflow-y-hidden no-scrollbar relative z-[100] bg-[#0f1115] rounded-t-xl box-border px-0 gap-0">
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
              /* - text-[clamp]: Font chữ tự động to dần theo màn hình (từ 11px đến 13px).
                - px-[clamp]: Độ rộng của mỗi tab tự dãn ra (từ 16px đến 32px) để lấp đầy không gian.
                - Border luôn là 1px để không bị "giật" khung khi đổi trạng thái.
              */
              "relative transition-all font-extrabold uppercase tracking-tight whitespace-nowrap border-t border-l border-r h-full flex items-center justify-center",
              "px-[clamp(16px,2vw,32px)] text-[clamp(11px,0.8vw,13px)]",
              isActive
                ? 'bg-[#1a1a1a] text-primary rounded-t-xl border-white/10 z-[110]'
                : 'bg-transparent text-muted-foreground hover:text-white border-transparent z-[90]'
            )}
          >
            {categoryTitle}

            {/* Thanh đè border-b: Giúp Tab và nội dung bên dưới gắn liền thành 1 khối */}
            {isActive && (
              <div className="absolute -bottom-[1px] left-0 right-0 h-[2px] bg-[#1a1a1a] z-[111]" />
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