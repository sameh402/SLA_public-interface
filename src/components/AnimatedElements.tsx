import React, { ReactNode, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  useScrollAnimation,
  useStaggeredAnimation,
} from "@/hooks/useScrollAnimation";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?:
    | "fade-up"
    | "fade-in"
    | "slide-left"
    | "slide-right"
    | "scale-in"
    | "bounce-in";
  delay?: number;
}

export function AnimatedSection({
  children,
  className,
  animation = "fade-up",
  delay = 0,
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation();

  const animationClasses = {
    "fade-up": "scroll-reveal",
    "fade-in": "scroll-reveal",
    "slide-left": "scroll-reveal-left",
    "slide-right": "scroll-reveal-right",
    "scale-in": "scroll-reveal",
    "bounce-in": "scroll-reveal",
  };

  return (
    <div
      ref={ref}
      className={cn(
        animationClasses[animation],
        isVisible && "revealed",
        className,
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

interface StaggeredListProps {
  children: ReactNode[];
  className?: string;
  itemClassName?: string;
  delay?: number;
}

export function StaggeredList({
  children,
  className,
  itemClassName,
  delay = 100,
}: StaggeredListProps) {
  const { ref, visibleItems } = useStaggeredAnimation(children.length, delay);

  return (
    <div ref={ref} className={className}>
      {children.map((child, index) => (
        <div
          key={index}
          className={cn(
            "transition-all duration-700 ease-out",
            visibleItems[index]
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-8 scale-95",
            itemClassName,
          )}
          style={{ transitionDelay: `${index * 50}ms` }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export function CountUp({
  end,
  duration = 2000,
  suffix = "",
  className,
}: CountUpProps) {
  const [count, setCount] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const startCount = 0;

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      const currentCount = Math.floor(
        progress * (end - startCount) + startCount,
      );
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    requestAnimationFrame(animateCount);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className={className}>
      {count.toLocaleString()}
      {suffix}
    </div>
  );
}

interface TypewriterProps {
  text: string;
  speed?: number;
  className?: string;
  delay?: number;
}

export function Typewriter({
  text,
  speed = 50,
  className,
  delay = 0,
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    if (!isVisible) return;

    const timeoutId = setTimeout(
      () => {
        if (currentIndex < text.length) {
          setDisplayText((prev) => prev + text[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        }
      },
      delay + currentIndex * speed,
    );

    return () => clearTimeout(timeoutId);
  }, [isVisible, currentIndex, text, speed, delay]);

  return (
    <div ref={ref} className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </div>
  );
}

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  intensity?: number;
}

export function FloatingElement({
  children,
  className,
  duration = 6000,
  intensity = 20,
}: FloatingElementProps) {
  return (
    <div
      className={cn("animate-float", className)}
      style={
        {
          animationDuration: `${duration}ms`,
          "--float-intensity": `${intensity}px`,
        } as any
      }
    >
      {children}
    </div>
  );
}

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
}

export function MagneticButton({
  children,
  className,
  intensity = 15,
}: MagneticButtonProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) / (rect.width / 2);
    const deltaY = (e.clientY - centerY) / (rect.height / 2);

    setPosition({
      x: deltaX * intensity,
      y: deltaY * intensity,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      className={cn("transition-transform duration-300 ease-out", className)}
      style={{
        transform: `translate(${position.x}px, ${position.y}px) scale(${isHovered ? 1.05 : 1})`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      {children}
    </div>
  );
}

interface GlitchTextProps {
  text: string;
  className?: string;
}

export function GlitchText({ text, className }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={cn(
        "relative inline-block",
        isGlitching && "animate-pulse",
        className,
      )}
    >
      <span className={isGlitching ? "text-primary" : ""}>{text}</span>
      {isGlitching && (
        <>
          <span
            className="absolute top-0 left-0 text-red-500 opacity-70"
            style={{ transform: "translate(-2px, 0)" }}
          >
            {text}
          </span>
          <span
            className="absolute top-0 left-0 text-blue-500 opacity-70"
            style={{ transform: "translate(2px, 0)" }}
          >
            {text}
          </span>
        </>
      )}
    </div>
  );
}
