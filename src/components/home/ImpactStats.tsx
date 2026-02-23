import { useEffect, useRef, useState } from "react";
import { TrendingUp, Users, Globe, Briefcase } from "lucide-react";

const stats = [
  { label: "Loans Disbursed", value: 3.5, prefix: "GHS ", suffix: "B+", icon: TrendingUp },
  { label: "Businesses Supported", value: 500, prefix: "", suffix: "+", icon: Briefcase },
  { label: "Export Markets Reached", value: 45, prefix: "", suffix: "+", icon: Globe },
  { label: "Jobs Created", value: 10000, prefix: "", suffix: "+", icon: Users },
];

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf: number;
    const startTime = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * target);
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);
  return count;
}

function formatValue(val: number, target: number) {
  if (target < 100) return val.toFixed(1);
  if (target >= 1000) return Math.round(val).toLocaleString();
  return Math.round(val).toString();
}

function StatCard({ stat, inView }: { stat: typeof stats[0]; inView: boolean }) {
  const count = useCountUp(stat.value, 2200, inView);
  const Icon = stat.icon;
  return (
    <div className="text-center group">
      <div className="w-14 h-14 rounded-2xl bg-accent/15 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-7 h-7 text-accent" />
      </div>
      <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1 tabular-nums">
        {stat.prefix}{formatValue(count, stat.value)}{stat.suffix}
      </div>
      <p className="text-primary-foreground/60 text-sm font-medium tracking-wide uppercase">
        {stat.label}
      </p>
    </div>
  );
}

export function ImpactStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-20 md:py-28 bg-primary overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
      </div>
      <div className="container-custom relative z-10">
        <div className="text-center mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Impact</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mt-3">
            Driving Ghana's Export Growth
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
