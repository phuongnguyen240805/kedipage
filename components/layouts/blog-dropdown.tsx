'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import {
  NavigationMenuContent,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import Boderyelow from '../ui/boder-yelow';
import { cn } from '@/lib/utils';

interface BlogItem {
  href: string;
  label: string;
  labelKey?: string;
}

interface BlogDropdownProps {
  items: BlogItem[];
  hoverColor?: string;
}

const BlogDropdown = ({ items }: BlogDropdownProps) => {
  const { t } = useTranslation();
  const pathname = usePathname();

  return (
    <NavigationMenuContent className="min-w-[220px] w-[240px] animate-in slide-in-from-top-2 bg-transparent p-0 duration-300">
      <Boderyelow className="rounded-xl bg-kedi-navy">
        <ul className="flex flex-col gap-1 rounded-xl bg-kedi-navy p-2 text-white">
          {items.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <li key={item.href}>
                <NavigationMenuLink asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      'block select-none rounded-lg p-3 leading-none no-underline outline-none transition-all duration-300',
                      isActive
                        ? 'bg-kedi-yellow text-kedi-navy shadow-[0_0_12px_rgba(255,198,41,0.28)]'
                        : 'text-white hover:bg-kedi-yellow/15 hover:text-kedi-yellow'
                    )}
                  >
                    <div
                      className={cn(
                        'text-[13.5px] font-medium leading-snug',
                        isActive ? 'text-kedi-navy' : 'text-inherit'
                      )}
                    >
                      {item.labelKey ? t(`blog.${item.labelKey}`) : item.label}
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            );
          })}
        </ul>
      </Boderyelow>
    </NavigationMenuContent>
  );
};

export default BlogDropdown;
