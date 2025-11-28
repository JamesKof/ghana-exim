import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { BranchLocationsModal } from "./BranchLocationsModal";
import { cn } from "@/lib/utils";

const objectives = [
  "Support and develop trade between Ghana and other countries",
  "Build Ghana's capacity and competitiveness internationally",
  "Provide credit facilities to exporters and their banks",
  "Offer guarantees and insurance against trade risks",
];

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600",
    alt: "Accra business district skyline",
    caption: "Accra Business Hub"
  },
  {
    url: "https://images.unsplash.com/photo-1590523278191-995cbcda646b?w=600",
    alt: "African trade and commerce",
    caption: "Driving Trade Growth"
  },
  {
    url: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=600",
    alt: "Ghana port and shipping",
    caption: "Export Infrastructure"
  },
  {
    url: "https://images.unsplash.com/photo-1580746738099-2aa20ebfea4d?w=600",
    alt: "Cocoa beans production Ghana",
    caption: "Agricultural Exports"
  },
  {
    url: "https://images.unsplash.com/photo-1612810806695-30f7a8258391?w=600",
    alt: "African business professionals",
    caption: "Expert Advisory Team"
  },
  {
    url: "https://images.unsplash.com/photo-1604689598793-b8bf1dc445a1?w=600",
    alt: "Modern African architecture",
    caption: "Modern Ghana"
  },
];

export function AboutSection() {
  const [activeImage, setActiveImage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextImage = () => {
    setIsAutoPlaying(false);
    setActiveImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setIsAutoPlaying(false);
    setActiveImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px]" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Gallery Grid */}
          <div className="relative order-2 lg:order-1">
            {/* Main featured image */}
            <div 
              className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-gexim-xl group"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className={cn(
                    "absolute inset-0 transition-all duration-700",
                    activeImage === index 
                      ? "opacity-100 scale-100" 
                      : "opacity-0 scale-105"
                  )}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  {/* Caption */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold text-lg">{image.caption}</p>
                  </div>
                </div>
              ))}
              
              {/* Navigation arrows */}
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/40"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/40"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Thumbnail strip */}
            <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveImage(index);
                    setIsAutoPlaying(false);
                  }}
                  className={cn(
                    "relative flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden transition-all duration-300",
                    activeImage === index 
                      ? "ring-2 ring-primary ring-offset-2 ring-offset-background scale-105" 
                      : "opacity-60 hover:opacity-100"
                  )}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Progress indicators */}
            <div className="flex justify-center gap-1.5 mt-4">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveImage(index);
                    setIsAutoPlaying(false);
                  }}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    activeImage === index 
                      ? "w-8 bg-primary" 
                      : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  )}
                />
              ))}
            </div>

            {/* Floating card with branch finder */}
            <div className="absolute -bottom-6 -right-4 lg:right-auto lg:-left-6 glass p-5 rounded-3xl shadow-gexim-xl max-w-[240px] animate-float">
              <p className="text-4xl font-bold text-primary mb-1">Act 911</p>
              <p className="text-sm text-muted-foreground mb-3">Ghana Export-Import Bank Act 2016</p>
              <BranchLocationsModal 
                trigger={
                  <button className="w-full px-4 py-2 bg-primary/10 hover:bg-primary/20 rounded-xl text-primary font-medium text-sm flex items-center justify-center gap-2 transition-colors">
                    <MapPin className="w-4 h-4" />
                    Find a Branch
                  </button>
                }
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider mb-6">
              Who We Are
            </span>
            <h2 className="text-display-sm md:text-display-md text-foreground mb-6">
              Welcome to
              <span className="text-gradient block">Ghana EXIM Bank</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              The Ghana Export-Import (GEXIM) Bank was established by the Ghana Export-Import Bank Act 2016 (Act 911) to support the Government of Ghana's quest for a feasible and sustainable export-led economy.
            </p>

            <div className="space-y-4 mb-10">
              {objectives.map((objective, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 p-4 rounded-2xl bg-muted/50 hover:bg-muted transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:scale-110 transition-all">
                    <CheckCircle2 className="w-5 h-5 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <p className="text-foreground/80 pt-1">{objective}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/about"
                className="btn-gold px-8 py-4 inline-flex items-center gap-3 group text-lg font-semibold"
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <BranchLocationsModal />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
