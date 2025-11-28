import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-in";
  delay?: number;
  duration?: number;
  threshold?: number;
}

export function ScrollAnimation({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
}: ScrollAnimationProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold });

  const animationStyles: Record<string, { initial: React.CSSProperties; animate: React.CSSProperties }> = {
    "fade-up": {
      initial: { opacity: 0, transform: "translateY(40px)" },
      animate: { opacity: 1, transform: "translateY(0)" },
    },
    "fade-in": {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
    "slide-left": {
      initial: { opacity: 0, transform: "translateX(50px)" },
      animate: { opacity: 1, transform: "translateX(0)" },
    },
    "slide-right": {
      initial: { opacity: 0, transform: "translateX(-50px)" },
      animate: { opacity: 1, transform: "translateX(0)" },
    },
    "scale-in": {
      initial: { opacity: 0, transform: "scale(0.9)" },
      animate: { opacity: 1, transform: "scale(1)" },
    },
  };

  const { initial, animate } = animationStyles[animation];

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...(!isVisible ? initial : animate),
        transition: `all ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
