import React from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/lib/theme";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="h-10 w-10 px-0 rounded-full hover:bg-accent/50 transition-all duration-300 hover:scale-110 relative group overflow-hidden"
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0 text-yellow-500 group-hover:text-yellow-400" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100 text-blue-500 group-hover:text-blue-400" />
          <span className="sr-only">Toggle theme</span>
          {/* Animated background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-blue-500/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 -z-10" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="backdrop-blur-sm bg-background/95 border-border/50"
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className={`transition-all duration-300 hover:bg-accent/80 cursor-pointer group ${
            theme === "light" ? "bg-accent text-accent-foreground" : ""
          }`}
        >
          <Sun className="mr-3 h-4 w-4 text-yellow-500 group-hover:rotate-12 transition-transform duration-300" />
          <span className="font-medium">Light</span>
          {theme === "light" && (
            <div className="ml-auto w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
          )}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className={`transition-all duration-300 hover:bg-accent/80 cursor-pointer group ${
            theme === "dark" ? "bg-accent text-accent-foreground" : ""
          }`}
        >
          <Moon className="mr-3 h-4 w-4 text-blue-500 group-hover:-rotate-12 transition-transform duration-300" />
          <span className="font-medium">Dark</span>
          {theme === "dark" && (
            <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
          )}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className={`transition-all duration-300 hover:bg-accent/80 cursor-pointer group ${
            theme === "system" ? "bg-accent text-accent-foreground" : ""
          }`}
        >
          <div className="mr-3 h-4 w-4 rounded-sm bg-gradient-to-br from-yellow-500 to-blue-500 group-hover:scale-110 transition-transform duration-300" />
          <span className="font-medium">System</span>
          {theme === "system" && (
            <div className="ml-auto w-2 h-2 bg-primary rounded-full animate-pulse" />
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
