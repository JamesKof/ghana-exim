import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, MessageCircle, MapPin, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import geximLogo from "@/assets/gexim-logo.png";
import { TopBar } from "./TopBar";
import { ThemeToggle } from "@/components/ThemeToggle";

const officeLocations = [
  {
    name: "Head Office - Accra",
    address: "Africa Trade House, Ambassadorial Enclave, Liberia Road, Accra",
    gps: "GL-040-2630",
    phone: "0302-234668",
  },
  {
    name: "Kumasi Branch",
    address: "First Floor A2 Plaza Building, Dr. Osei Tuffuor By-Pass, Santasi",
    gps: "AK-178-6780",
    phone: "0322-041124",
  },
  {
    name: "Tamale Branch",
    address: "2nd Floor SSNIT Pension Tower, Dagomba Street, Tamale",
    gps: "NT-0010-5301",
    phone: "0372-028053",
  },
  {
    name: "Takoradi Branch",
    address: "Ground Floor, Ghana Shippers' Authority, Chapel Hill, Takoradi",
    gps: "WS-349-3552",
    phone: "0312-002262",
  },
  {
    name: "Ho Branch",
    address: "2nd Floor, Atsu Briggar's Plaza, Muvie Street, Ho",
    gps: "VH-0003-4357",
    phone: "0362-027773",
  },
];

const mainNavItems = [
  { name: "Home", href: "/" },
  {
    name: "Who We Are",
    href: "/about",
    children: [
      { name: "About GEXIM", href: "/about" },
      { name: "Leadership", href: "/leadership" },
      { name: "Board of Directors", href: "/leadership/board" },
      { name: "Executive Management", href: "/leadership/management" },
    ],
  },
  {
    name: "What We Do",
    href: "/products",
    children: [
      { name: "Products", href: "/products" },
      { name: "Services", href: "/services" },
    ],
  },
  {
    name: "Insights",
    href: "/news",
    children: [
      { name: "News", href: "/news" },
      { name: "Events", href: "/events" },
      { name: "Gallery", href: "/gallery" },
    ],
  },
  { name: "FAQs", href: "/faqs" },
  { name: "Careers", href: "/careers" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [showLocationsMega, setShowLocationsMega] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
    setShowLocationsMega(false);
  }, [location.pathname]);

  const isHomePage = location.pathname === "/";

  return (
    <>
      {/* Top Bar with contact info */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <TopBar />
      </div>
      
      <header className={cn(
        "fixed left-0 right-0 z-50 px-4 lg:px-8 pt-4 transition-all duration-300",
        "top-0 lg:top-10"
      )}>
        {/* Main navbar - Floating pill style with increased transparency */}
        <nav
          className={cn(
            "max-w-7xl mx-auto rounded-full transition-all duration-500 shadow-gexim-lg",
            isScrolled || !isHomePage
              ? "bg-white/70 backdrop-blur-xl border border-white/30"
              : "bg-white/60 backdrop-blur-xl border border-white/20"
          )}
        >
          <div className="px-4 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-20">
              {/* Sticky Logo - Always visible with hover glow */}
              <Link to="/" className="flex-shrink-0 group">
                <img
                  src={geximLogo}
                  alt="Ghana EXIM Bank"
                  className="h-10 lg:h-12 w-auto transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(0,86,63,0.4)] group-hover:scale-105"
                />
              </Link>

            {/* Desktop navigation - Centered */}
            <div className="hidden lg:flex items-center gap-1 bg-muted/50 rounded-full p-1.5">
              {mainNavItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.children && setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    to={item.href}
                    className={cn(
                      "nav-pill flex items-center gap-1",
                      location.pathname === item.href
                        ? "nav-pill-active"
                        : "text-foreground/80 hover:text-foreground hover:bg-muted"
                    )}
                  >
                    {item.name}
                    {item.children && (
                      <ChevronDown className={cn(
                        "w-3 h-3 transition-transform",
                        openDropdown === item.name && "rotate-180"
                      )} />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {item.children && openDropdown === item.name && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 animate-fade-in">
                      <div className="bg-card rounded-2xl shadow-gexim-xl py-2 min-w-[220px] overflow-hidden border border-border">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className="block px-5 py-3 text-sm text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              
              {/* Office Locations Mega Menu Trigger */}
              <div 
                className="relative"
                onMouseEnter={() => setShowLocationsMega(true)}
                onMouseLeave={() => setShowLocationsMega(false)}
              >
                <button
                  className={cn(
                    "nav-pill flex items-center gap-1",
                    showLocationsMega
                      ? "nav-pill-active"
                      : "text-foreground/80 hover:text-foreground hover:bg-muted"
                  )}
                >
                  <MapPin className="w-4 h-4" />
                  Locations
                  <ChevronDown className={cn(
                    "w-3 h-3 transition-transform",
                    showLocationsMega && "rotate-180"
                  )} />
                </button>

                {/* Mega Menu for Locations */}
                {showLocationsMega && (
                  <div className="absolute top-full right-0 pt-3 animate-fade-in">
                    <div className="bg-card rounded-2xl shadow-gexim-xl overflow-hidden border border-border w-[600px]">
                      <div className="bg-primary p-4">
                        <h3 className="text-lg font-bold text-primary-foreground flex items-center gap-2">
                          <MapPin className="w-5 h-5 text-accent" />
                          Our Office Locations
                        </h3>
                        <p className="text-primary-foreground/70 text-sm">Visit us at any of our branches across Ghana</p>
                      </div>
                      <div className="p-4 grid grid-cols-2 gap-3">
                        {officeLocations.map((office) => (
                          <div 
                            key={office.name}
                            className="p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                          >
                            <h4 className="font-semibold text-foreground text-sm mb-2">{office.name}</h4>
                            <p className="text-xs text-muted-foreground mb-2 line-clamp-2">{office.address}</p>
                            <div className="flex items-center gap-4 text-xs">
                              <span className="text-accent font-medium">{office.gps}</span>
                              <span className="flex items-center gap-1 text-muted-foreground">
                                <Phone className="w-3 h-3" />
                                {office.phone}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="px-4 pb-4">
                        <Link
                          to="/contact"
                          className="block text-center py-3 bg-primary text-primary-foreground rounded-xl font-medium text-sm hover:bg-primary/90 transition-colors"
                        >
                          Contact Us
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <ThemeToggle />
              <Link
                to="/contact"
                className="p-3 rounded-full transition-all duration-300 bg-muted text-foreground hover:bg-muted/80"
                title="Contact Us"
              >
                <MessageCircle className="w-5 h-5" />
              </Link>
              <Link
                to="/apply"
                className="btn-gold px-6 py-3 text-sm font-semibold"
              >
                Get Help
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-full transition-colors hover:bg-muted text-foreground"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-card border-t border-border/50 rounded-b-3xl animate-fade-in">
            <div className="px-4 py-6">
              <nav className="space-y-2">
                {mainNavItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.href}
                      className={cn(
                        "block px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                        location.pathname === item.href
                          ? "text-accent-foreground bg-accent"
                          : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                      )}
                    >
                      {item.name}
                    </Link>
                    {item.children && (
                      <div className="ml-4 mt-2 space-y-1 border-l-2 border-border pl-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Mobile Office Locations */}
                <div className="pt-4 border-t border-border">
                  <p className="px-4 py-2 text-sm font-semibold text-foreground flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-accent" />
                    Office Locations
                  </p>
                  <div className="space-y-2 mt-2">
                    {officeLocations.slice(0, 3).map((office) => (
                      <div key={office.name} className="px-4 py-2 bg-muted/50 rounded-xl mx-2">
                        <p className="text-sm font-medium text-foreground">{office.name}</p>
                        <p className="text-xs text-muted-foreground">{office.phone}</p>
                      </div>
                    ))}
                    <Link 
                      to="/contact" 
                      className="block px-4 py-2 text-sm text-primary font-medium hover:underline"
                    >
                      View All Locations →
                    </Link>
                  </div>
                </div>
                
                <div className="pt-4 space-y-3">
                  <div className="flex items-center justify-between px-4 py-2">
                    <span className="text-sm text-muted-foreground">Theme</span>
                    <ThemeToggle />
                  </div>
                  <Link
                    to="/contact"
                    className="block text-center px-6 py-3 rounded-full text-sm font-semibold border border-border hover:bg-muted transition-colors"
                  >
                    Contact Us
                  </Link>
                  <Link
                    to="/apply"
                    className="btn-gold block text-center px-6 py-3 text-sm font-semibold"
                  >
                    Get Help
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        )}
        </nav>
      </header>
    </>
  );
}
