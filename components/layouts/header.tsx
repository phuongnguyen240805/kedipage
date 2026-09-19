"use client";
import LanguageSwitcher from "@/components/layouts/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import BrandLogo from "@/components/layouts/brand-logo";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useState, useCallback, useMemo, useEffect, useRef } from "react";
import { isNavItemActive, navigationConfig } from "../../data/navigation-config";
import NavLink from "./nav-link";
import BlogDropdown from "./blog-dropdown";
import SearchDropdown from "./search-dropdown";
import HostlineSection from "./hostline-section";
import { FiMenu, FiX } from "react-icons/fi";
import MobileNav from "@/components/layouts/MobileNav";
import ServicesDropdown from "../services-dropdown/services-dropdown";

const navTextClass =
  "text-[13px] lg:text-[14px] font-medium uppercase tracking-[0.08em] whitespace-nowrap px-0 py-0 h-auto bg-transparent text-current transition-colors duration-300";

const Header = ({ className }: { className?: string }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isCompact, setIsCompact] = useState(false);
  const lastScrollY = useRef(0);
  const mobileMenuOpenRef = useRef(false);
  const servicesMenuOpenRef = useRef(false);
  const servicesTriggerRef = useRef<HTMLButtonElement>(null);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);

  const router = useRouter();
  const pathname = usePathname();
  const { t } = useTranslation();

  mobileMenuOpenRef.current = isMobileMenuOpen;
  servicesMenuOpenRef.current = isServicesOpen;

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const last = lastScrollY.current;
      const delta = y - last;

      setIsCompact(y > 16);

      if (mobileMenuOpenRef.current || servicesMenuOpenRef.current || y < 16) {
        setIsVisible(true);
      } else if (delta > 8 && y > 72) {
        setIsVisible(false);
      } else if (delta < -8) {
        setIsVisible(true);
      }

      lastScrollY.current = y;
    };

    lastScrollY.current = window.scrollY;
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isServicesOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (servicesTriggerRef.current?.contains(target)) return;
      if (servicesDropdownRef.current?.contains(target)) return;
      setIsServicesOpen(false);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsServicesOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isServicesOpen]);

  const toggleSearch = useCallback(() => setIsSearchOpen((prev) => !prev), []);
  const toggleMobileMenu = useCallback(
    () => setIsMobileMenuOpen((prev) => !prev),
    []
  );
  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);

  const navigationTriggerStyle = useMemo(
    () => ({ "--tw-after-content": "none" } as React.CSSProperties),
    []
  );

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[1000] w-full max-w-[100vw] border-b border-white/10 bg-kedi-navy/95 backdrop-blur-md",
        "transition-[transform,box-shadow] duration-500 ease-in-out will-change-transform",
        isVisible ? "translate-y-0" : "-translate-y-full",
        isCompact ? "shadow-[0_8px_24px_rgba(0,0,0,0.28)]" : "shadow-none",
        className
      )}
    >
      <div className="flex h-14 w-full items-center justify-between gap-3 px-4 md:px-6 lg:h-16 lg:gap-6 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center transition-opacity duration-200 hover:opacity-90"
          prefetch={true}
          aria-label="Kedi.Media home"
        >
          <BrandLogo className="h-8 lg:h-10" />
        </Link>

        <nav className="hidden min-w-0 flex-1 items-center justify-center lg:flex">
          <NavigationMenu viewport={false} className="max-w-none">
            <NavigationMenuList className="flex items-center gap-0.5 xl:gap-1">
              {navigationConfig.map((item: any) => {
                const key = item.label || item.href || JSON.stringify(item);
                const label = item.label ? t(`navigation.${item.labelKey}`) : "";
                const isActive = isNavItemActive(item, pathname);
                const boxEffectClass = cn(
                  "relative flex items-center justify-center rounded-xl px-3 py-1.5",
                  "transition-all duration-300 ease-out",
                  isActive
                    ? "bg-kedi-yellow text-kedi-navy shadow-[0_0_18px_rgba(255,198,41,0.38)]"
                    : "bg-transparent text-white hover:bg-kedi-yellow/15 hover:text-kedi-yellow has-[[data-state=open]]:bg-kedi-yellow/15 has-[[data-state=open]]:text-kedi-yellow"
                );

                return (
                  <NavigationMenuItem
                    key={key}
                    className={cn(
                      boxEffectClass,
                      item.dropdownType === "services" &&
                        isServicesOpen &&
                        "bg-kedi-yellow/15 text-kedi-yellow"
                    )}
                  >
                    {item.dropdownType === "services" ? (
                      <>
                        <button
                          ref={servicesTriggerRef}
                          type="button"
                          className={cn(
                            "hover:bg-transparent focus:bg-transparent hover:text-current",
                            navTextClass
                          )}
                          style={navigationTriggerStyle}
                          aria-haspopup="menu"
                          aria-expanded={isServicesOpen}
                          aria-controls="kedi-services-dropdown"
                          onClick={() => setIsServicesOpen((prev) => !prev)}
                        >
                          {item.labelKey ? t(`navigation.${item.labelKey}`) : ""}
                        </button>

                        {isServicesOpen && (
                          <div
                            ref={servicesDropdownRef}
                            id="kedi-services-dropdown"
                          >
                            <ServicesDropdown />
                          </div>
                        )}
                      </>
                    ) : item.type === "link" ? (
                      item.href && item.label ? (
                        <NavLink
                          href={item.href}
                          label={label}
                          className={navTextClass}
                        />
                      ) : null
                    ) : (
                      <>
                        <NavigationMenuTrigger
                          className={cn(
                            "after:hidden [&>svg]:!hidden",
                            "hover:bg-transparent focus:bg-transparent",
                            "data-[state=open]:bg-transparent data-[state=open]:hover:bg-transparent data-[state=open]:text-current",
                            "hover:text-current",
                            navTextClass
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
                        {item.items && (
                          <BlogDropdown
                            items={item.items}
                            hoverColor={item.hoverColor}
                          />
                        )}
                      </>
                    )}
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="hidden shrink-0 items-center gap-2.5 lg:flex xl:gap-3">
          <SearchDropdown isOpen={isSearchOpen} onToggle={toggleSearch} />
          <div className="h-5 w-px bg-white/20" />
          <LanguageSwitcher />
          <div className="border-l border-white/20 pl-2.5 xl:pl-3">
            <HostlineSection />
          </div>
        </div>

        <button
          type="button"
          className="ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25 text-white transition-colors duration-200 hover:border-kedi-yellow hover:text-kedi-yellow lg:hidden"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Đóng menu" : "Mở menu"}
        >
          {isMobileMenuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
        </button>
      </div>

      <MobileNav isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </header>
  );
};

export default Header;
