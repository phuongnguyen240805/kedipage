import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import {
  NavigationMenuContent,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import Boderyelow from '../ui/boder-yelow';

interface BlogItem {
  href: string;
  label: string;
  labelKey?: string;
}

interface BlogDropdownProps {
  items: BlogItem[];
  hoverColor?: string;
}

const BlogDropdown = ({ items, hoverColor }: BlogDropdownProps) => {
  const { t } = useTranslation();

  return (
     
     <NavigationMenuContent className="animate-in slide-in-from-top-2 duration-300 min-w-[220px] w-[220px] p-0 bg-black">
       <Boderyelow className="bg-black rounded-xl ">
      <ul className="flex flex-col rounded-xl gap-1 p-2 bg-black text-white">
        {items.map((item) => (
          <li key={item.href}>
            <NavigationMenuLink asChild>
              <Link
                href={item.href}
                className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors ${hoverColor || 'hover:bg-gray-100 hover:text-gray-900'}`}
              >
                <div className="text-[16px] font-medium leading-none text-white">
                  {item.labelKey ? t(`blog.${item.labelKey}`) : item.label}
                </div>
              </Link>
            </NavigationMenuLink>
          </li>
        ))}
      </ul>
        </Boderyelow>
    </NavigationMenuContent>
  );
};

export default BlogDropdown;
