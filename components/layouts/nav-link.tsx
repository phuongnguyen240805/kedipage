import Link from 'next/link';
import { NavigationMenuLink } from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

interface NavLinkProps {
  href: string;
  label: string;
  hoverColor?: string;
  className?: string;
}

const NavLink = ({ href, label, className }: NavLinkProps) => (
  <NavigationMenuLink asChild>
    <Link
      href={href}
      className={cn(
        'group inline-flex h-auto w-max items-center justify-center rounded-md bg-transparent px-0 py-0 text-sm font-medium text-current transition-colors duration-300 focus:outline-none hover:bg-transparent hover:text-current focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent disabled:pointer-events-none disabled:opacity-50',
        className
      )}
    >
      {label}
    </Link>
  </NavigationMenuLink>
);

export default NavLink;
