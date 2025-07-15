import React, { ReactNode, useEffect, useState } from "react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { useI18n } from "@/lib/i18n";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { direction, t } = useI18n();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate page load animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`min-h-screen bg-background transition-all duration-500 ${
        direction === "rtl" ? "rtl" : "ltr"
      }`}
    >
      <Navigation />
      <main className="flex-1 relative overflow-hidden">
        {/* Page transition overlay */}
        <div
          className={`fixed inset-0 bg-primary z-50 transition-transform duration-700 ease-in-out ${
            isLoading ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-4" />
              <p className="text-xl font-semibold animate-pulse">
                {t("common.loading")}
              </p>
            </div>
          </div>
        </div>

        {/* Main content with fade-in animation */}
        <div
          className={`transition-all duration-700 ${
            isLoading
              ? "opacity-0 translate-y-8 scale-95"
              : "opacity-100 translate-y-0 scale-100"
          }`}
        >
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
