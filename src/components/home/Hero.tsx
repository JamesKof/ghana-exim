import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const slides = [
  {
    title: "Driving Ghana's",
    highlight: "Export Growth",
    description: "Supporting and developing trade between Ghana and other countries, building capacity and competitiveness in the international marketplace.",
    cta: "Apply for Facility",
    ctaLink: "/apply",
  },
  {
    title: "Empowering",
    highlight: "African Trade",
    description: "Providing innovative financial solutions to boost Ghana's export sector and strengthen economic ties across the continent.",
    cta: "Explore Products",
    ctaLink: "/products",
  },
  {
    title: "Your Partner in",
    highlight: "Business Success",
    description: "From SMEs to large corporations, we provide tailored financial products to help your business thrive in global markets.",
    cta: "Learn More",
    ctaLink: "/about",
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const handleNextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const handlePrevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const slide = slides[currentSlide];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Ghana EXIM Bank facility"
          className="w-full h-full object-cover scale-105 transition-transform duration-[20s]"
        />
        <div className="absolute inset-0 hero-overlay" />
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-gexim-navy/40" />
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gexim-blue/20 rounded-full blur-[100px]" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-44 lg:pt-48 pb-20">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Main Content - 3 columns */}
          <div className="lg:col-span-3">
            {/* Tag */}
            <div 
              key={`tag-${currentSlide}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm mb-8 animate-fade-up"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Ghana's Principal Export Finance Institution
            </div>

            {/* Headline */}
            <h1 
              key={`title-${currentSlide}`}
              className="text-display-lg md:text-display-xl lg:text-display-2xl text-white font-bold mb-6 animate-fade-up stagger-1"
            >
              {slide.title}
              <span className="text-gradient-light block">{slide.highlight}</span>
            </h1>

            {/* Subheadline */}
            <p 
              key={`desc-${currentSlide}`}
              className="text-lg md:text-xl text-white/80 mb-10 max-w-xl animate-fade-up stagger-2 leading-relaxed"
            >
              {slide.description}
            </p>

            {/* CTAs */}
            <div 
              key={`cta-${currentSlide}`}
              className="flex flex-wrap gap-4 animate-fade-up stagger-3"
            >
              <Link
                to={slide.ctaLink}
                className="btn-gold px-8 py-4 text-lg font-semibold inline-flex items-center gap-3 group"
              >
                {slide.cta}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="btn-outline-light px-8 py-4 text-lg font-semibold inline-flex items-center gap-2"
              >
                Contact Us
              </Link>
            </div>

            {/* Slide indicators */}
            <div className="flex items-center gap-3 mt-12 animate-fade-up stagger-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isAnimating) {
                      setIsAnimating(true);
                      setCurrentSlide(index);
                      setTimeout(() => setIsAnimating(false), 800);
                    }
                  }}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    index === currentSlide 
                      ? "w-12 bg-accent" 
                      : "w-2 bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Quick Links Panel - 2 columns */}
          <div className="lg:col-span-2 hidden lg:block">
            <div className="quick-links-panel rounded-3xl p-8 animate-slide-in-right">
              <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
              <div className="space-y-3">
                {[
                  { label: "Apply for a Facility", href: "/apply" },
                  { label: "Our Products & Services", href: "/products" },
                  { label: "Export Financing", href: "/products" },
                  { label: "SME Banking Solutions", href: "/products" },
                  { label: "Frequently Asked Questions", href: "/faqs" },
                  { label: "Contact Our Team", href: "/contact" },
                ].map((link, index) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="quick-link-item group"
                    style={{ animationDelay: `${0.1 * index}s` }}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <div className="absolute bottom-1/2 left-4 right-4 flex justify-between z-20 translate-y-1/2 pointer-events-none">
        <button
          onClick={handlePrevSlide}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all pointer-events-auto"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNextSlide}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all pointer-events-auto"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle">
        <div className="w-8 h-14 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-accent" />
        </div>
      </div>

      {/* Bottom curve */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-background" style={{ borderRadius: "3rem 3rem 0 0" }} />
    </section>
  );
}
