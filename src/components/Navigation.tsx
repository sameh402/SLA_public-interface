import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@/components/ui/visually-hidden";
import { Menu, GraduationCap } from "lucide-react";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, direction } = useI18n();

  const navigationItems = [
    { href: "/", label: t("nav.home") },
    { href: "/courses", label: t("nav.courses") },
    { href: "/about", label: t("nav.about") },
    { href: "/contact", label: t("nav.contact") },
  ];

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  const NavItems = ({ mobile = false }: { mobile?: boolean }) => (
    <>
      {navigationItems.map((item, index) => (
        <Link
          key={item.href}
          to={item.href}
          className={cn(
            "nav-item relative transition-all duration-300 hover:text-primary transform hover-scale-102",
            isActive(item.href)
              ? "text-primary font-medium active"
              : "text-muted-foreground hover:text-foreground",
            mobile && "block px-3 py-2 text-base rounded-lg hover:bg-accent/50",
            !mobile && "px-2 py-1.5 text-sm rounded-md hover:bg-accent/20",
          )}
          onClick={() => mobile && setIsOpen(false)}
          style={{ animationDelay: mobile ? `${index * 100}ms` : "0ms" }}
        >
          <span className="relative z-10">{item.label}</span>
          {!mobile && (
            <div className="absolute inset-0 bg-primary/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 -z-10" />
          )}
        </Link>
      ))}
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 transition-all duration-300 shadow-sm">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link
            to="/"
            className="mr-4 flex items-center space-x-2 group transition-all duration-300 hover-scale-102"
          >
          <img
    src="https://smartonlinelearningedu.com/static/media/WhatsApp%20Image%202025-05-26%20at%2000.38.02_5277dbf4.f388d82bb2a41fa81dbf.jpg"
    alt="Logo"
    className="h-12
          w-12 object-cover rounded-full"
  />
            <span className="hidden font-semibold text-lg sm:inline-block bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              {t("home.hero.title")}
            </span>
          </Link>
          <nav
            className={cn(
              "flex items-center gap-6 text-sm",
              direction === "rtl" && "mr-6",
            )}
          >
            <NavItems />
          </nav>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-sm hover:bg-accent/50 focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden transition-all duration-300 hover-scale-105 rounded-lg"
            >
              <Menu
                className={cn(
                  "h-6 w-6 transition-transform duration-300",
                  isOpen && "rotate-90",
                )}
              />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side={direction === "rtl" ? "right" : "left"}
            className="pr-0"
          >
            <VisuallyHidden>
              <SheetTitle>Navigation Menu</SheetTitle>
            </VisuallyHidden>
            <Link
              to="/"
              className="flex items-center"
              onClick={() => setIsOpen(false)}
            >
         <img
    src="https://smartonlinelearningedu.com/static/media/WhatsApp%20Image%202025-05-26%20at%2000.38.02_5277dbf4.f388d82bb2a41fa81dbf.jpg"
    alt="Logo"
    className="h-10 w-10 object-cover rounded-full"
  />
              
              <span className="font-bold">{t("home.hero.title")}</span>
            </Link>
            <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
              <div className="flex flex-col space-y-3">
                <NavItems mobile />
              </div>
            </div>
          </SheetContent>
        </Sheet>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Link
              to="/"
              className="flex items-center space-x-2 md:hidden group transition-all duration-300"
            >
             <img
    src="https://smartonlinelearningedu.com/static/media/WhatsApp%20Image%202025-05-26%20at%2000.38.02_5277dbf4.f388d82bb2a41fa81dbf.jpg"
    alt="Logo"
    className="h-10 w-10 object-cover rounded-full"
  />
              <span className="font-semibold text-base bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                SLA
              </span>
            </Link>
          </div>
          <nav className="flex items-center space-x-2">
            <div className="transform hover-scale-105 transition-transform duration-300">
              <LanguageToggle />
            </div>
            <div className="transform hover-scale-105 transition-transform duration-300">
              <ThemeToggle />
            </div>
            <Link
              key={"/LogIn"}
              to={"/LogIn"}
            >
              <Button >
                LogIn/SignUp
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
