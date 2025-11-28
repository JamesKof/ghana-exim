import { useState, useEffect } from "react";
import geximLogo from "@/assets/gexim-logo.png";

interface PreloaderProps {
  onLoadingComplete: () => void;
}

export function Preloader({ onLoadingComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const duration = 2000; // 2 seconds total
    const interval = 20; // Update every 20ms
    const increment = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setIsExiting(true);
          setTimeout(onLoadingComplete, 500);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-primary transition-all duration-500 ${
        isExiting ? "opacity-0 scale-105" : "opacity-100 scale-100"
      }`}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-gexim-blue/20 rounded-full blur-[80px] animate-pulse" />
      </div>

      {/* Logo */}
      <div className="relative z-10 flex flex-col items-center">
        <div className={`mb-8 transition-all duration-700 ${isExiting ? "scale-110 opacity-0" : "scale-100 opacity-100"}`}>
          <img
            src={geximLogo}
            alt="Ghana EXIM Bank"
            className="h-20 md:h-28 w-auto brightness-0 invert animate-pulse-glow"
          />
        </div>

        {/* Progress bar container */}
        <div className="w-64 md:w-80 h-1 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-accent rounded-full transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Loading text */}
        <p className="mt-4 text-white/60 text-sm font-medium tracking-widest uppercase">
          Loading...
        </p>
      </div>
    </div>
  );
}
