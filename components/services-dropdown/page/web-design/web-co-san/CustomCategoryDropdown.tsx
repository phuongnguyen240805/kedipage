'use client';
import LiquidSelect from '@/components/liquid-glass/LiquidSelect';

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
  return (
    <div className="flex items-center h-full min-w-[160px] py-2">
      <LiquidSelect label="Ngành nghề" placeholder="Ngành nghề" tone="light"
        value={selected} onValueChange={onSelect}
        className="w-full rounded-xl px-4 py-2 text-sm font-bold text-gray-700 md:text-lg">
        {options.map(option => <option key={option} value={option}>{option}</option>)}
      </LiquidSelect>
    </div>
  );
}
export default CustomCategoryDropdown;
