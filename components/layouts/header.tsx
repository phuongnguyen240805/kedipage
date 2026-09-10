"use client";
import LanguageSwitcher from "@/components/layouts/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation"; // Thêm usePathname
import { cn } from "@/lib/utils";
import BrandLogo from "@/components/layouts/brand-logo";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { useState, useCallback, useMemo, useEffect } from "react";
import { navigationConfig } from "../../data/navigation-config";
import NavLink from "./nav-link";
import BlogDropdown from "./blog-dropdown";
import SearchDropdown from "./search-dropdown";
import HostlineSection from "./hostline-section";
import { FiMenu, FiX } from "react-icons/fi";
import { Button } from "../ui/button";
import MobileNav from "@/components/layouts/MobileNav";
import ServicesDropdown from "../services-dropdown/services-dropdown";

const Header = ({ className }: { className?: string }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const router = useRouter();
  const pathname = usePathname(); // Xác định trang hiện tại
  const { t } = useTranslation();

  const controlHeader = useCallback(() => {
    const currentScrollY = window.scrollY;
    if (currentScrollY < 10) {
      setIsVisible(true);
    } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsVisible(false);
    } else if (currentScrollY < lastScrollY) {
      setIsVisible(true);
    }
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", controlHeader);
    return () => window.removeEventListener("scroll", controlHeader);
  }, [controlHeader]);

  const toggleSearch = useCallback(() => setIsSearchOpen((prev) => !prev), []);
  const toggleMobileMenu = useCallback(() => setIsMobileMenuOpen((prev) => !prev), []);
  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);

  const navigationTriggerStyle = useMemo(
    () => ({ "--tw-after-content": "none" } as React.CSSProperties),
    []
  );

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 w-full transition-transform duration-500 ease-in-out border-b bg-black z-[1000]",
        isVisible ? "translate-y-0" : "-translate-y-full",
        className
      )}
    >
      <div className="w-full flex items-center justify-between py-[20px] gap-[2vw]">
        
        <Link href="/" className="flex-shrink-0 flex items-center" prefetch={true}>
          <BrandLogo className="h-10 md:h-12 w-auto object-contain" />
        </Link>

        <nav className="hidden md:flex items-center justify-center flex-grow">
          <NavigationMenu viewport={false} className="max-w-none">
            {/* GIỮ NGUYÊN GAP CŨ CỦA BẠN: lg:gap-[2.5vw] */}
            <NavigationMenuList className="flex items-center gap-[0.5vw] lg:gap-[1.5vw]">
              {navigationConfig.map((item: any) => {
                const key = item.label || item.href || JSON.stringify(item);
                const label = item.label ? t(`navigation.${item.labelKey}`) : "";
                const isActive = pathname === item.href;

                // CLASS CHUNG CHO Ô VUÔNG (Không bọc div mới, chỉ dùng class)
                const boxEffectClass = cn(
                  "relative rounded-xl transition-all duration-300 px-3 py-2 flex items-center justify-center",
                  "hover:bg-white/10", // Hiệu ứng hover nhạt
                  isActive ? "bg-white/15 shadow-sm" : "bg-transparent" // Sáng hơn chút khi active
                );

                return (
                  <NavigationMenuItem key={key} className={boxEffectClass}>
                    {item.type === "link" ? (
                      item.href && item.label ? (
                        <NavLink
                          href={item.href}
                          label={label}
                          hoverColor={item.hoverColor}
                          className={cn(
                            "text-[14px] lg:text-[clamp(14px,1.1vw,18px)] font-medium whitespace-nowrap px-0 uppercase tracking-wider transition-colors",
                            isActive ? "text-yellow-500" : "text-white"
                          )}
                        />
                      ) : null
                    ) : (
                      <>
                        <NavigationMenuTrigger
                          className={cn(
                            "after:hidden [&>svg]:hidden [&>svg]:!hidden bg-transparent hover:bg-transparent focus:bg-transparent",
                            "text-[14px] lg:text-[clamp(14px,1.1vw,18px)] font-medium px-0 py-0 uppercase tracking-wider transition-colors h-auto",
                            isActive ? "text-yellow-500" : "text-white",
                            item.hoverColor
                          )}
                          style={navigationTriggerStyle}
                          onClick={(e: React.MouseEvent) => {
                            if (item.href) {
                              e.preventDefault();
                              router.push(item.href);
                            }
                          }}
                        >
                          {item.labelKey ? t(`navigation.${item.labelKey}`) : ""}
                        </NavigationMenuTrigger>
                        {item.dropdownType === "services" ? (
                          <NavigationMenuContent>
                            <ServicesDropdown />
                          </NavigationMenuContent>
                        ) : (
                          item.items && (
                            <BlogDropdown items={item.items} hoverColor={item.hoverColor} />
                          )
                        )}
                      </>
                    )}
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-[1.5vw] flex-shrink-0">
          <div className="flex items-center gap-[1vw]">
            <SearchDropdown isOpen={isSearchOpen} onToggle={toggleSearch} />
            <div className="w-px h-6 bg-white/20 mx-1" />
            <LanguageSwitcher />
          </div>
          <div className="pl-[1vw] border-l border-white/20">
            <HostlineSection />
          </div>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white p-0 hover:bg-transparent"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </Button>
      </div>

      <MobileNav isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </header>
  );
};

export default Header;