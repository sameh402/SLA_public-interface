import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Languages } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function LanguageToggle() {
  const { language, setLanguage } = useI18n();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="h-8 w-8 px-0 rounded-full hover:bg-accent/50 transition-all duration-300 hover-scale-105 hover:rotate-6 relative group"
        >
          <Languages className="h-4 w-4 transition-transform duration-300 group-hover:scale-105" />
          <span className="sr-only">Toggle language</span>
          {/* Animated background ring */}
          <div className="absolute inset-0 bg-primary/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 -z-10" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="backdrop-blur-sm bg-background/95 border-border/50"
      >
        <DropdownMenuItem
          onClick={() => setLanguage("en")}
          className={`transition-all duration-300 hover:bg-accent/80 cursor-pointer group ${
            language === "en" ? "bg-accent text-accent-foreground" : ""
          }`}
        >
          <span className="mr-2 text-base group-hover:scale-110 transition-transform duration-300">
            🇺🇸
          </span>
          <span className="font-medium">English</span>
          {language === "en" && (
            <div className="ml-auto w-2 h-2 bg-primary rounded-full animate-pulse" />
          )}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage("ar")}
          className={`transition-all duration-300 hover:bg-accent/80 cursor-pointer group ${
            language === "ar" ? "bg-accent text-accent-foreground" : ""
          }`}
        >
          <span className="mr-2 text-base group-hover:scale-110 transition-transform duration-300">
            🇸🇦
          </span>
          <span className="font-medium">العربية</span>
          {language === "ar" && (
            <div className="ml-auto w-2 h-2 bg-primary rounded-full animate-pulse" />
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
