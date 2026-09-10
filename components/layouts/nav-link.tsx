import Link from 'next/link';
import { NavigationMenuLink } from '@/components/ui/navigation-menu';
import { cn } from "@/lib/utils"; // Import cn để gộp class sạch sẽ

interface NavLinkProps {
  href: string;
  label: string;
  hoverColor?: string;
  className?: string; // Thêm prop này để fix lỗi TypeScript
}

const NavLink = ({ href, label, hoverColor, className }: NavLinkProps) => (
  <NavigationMenuLink asChild>
    <Link
      href={href}
      className={cn(
        // Giữ các style core của bạn
        "group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50",
        
        // Màu hover mặc định nếu không truyền hoverColor
        hoverColor || "hover:text-primary", 
        
        // Nhận các class tùy chỉnh từ Header (ví dụ: text-base, lg:gap...)
        className 
      )}
    >
      {label}
    </Link>
  </NavigationMenuLink>
);

export default NavLink;