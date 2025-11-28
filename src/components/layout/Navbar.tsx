import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import geximLogo from "@/assets/gexim-logo.png";

const mainNavItems = [
  { name: "Home", href: "/" },
  {
    name: "Our Profile",
    href: "/about",
    children: [
      { name: "About GEXIM", href: "/about" },
      { name: "Board of Directors", href: "/about/board" },
      { name: "Management Team", href: "/about/management" },
    ],
  },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  {
    name: "Knowledge Hub",
    href: "/news",
    children: [
      { name: "News", href: "/news" },
      { name: "Events", href: "/events" },
      { name: "Gallery", href: "/gallery" },
    ],
  },
  { name: "Contact Us", href: "/contact" },
  { name: "FAQs", href: "/faqs" },
];

const topNavItems = [
  { name: "News", href: "/news" },
  { name: "Gallery", href: "/gallery" },
  { name: "Events", href: "/events" },
  { name: "Career/Jobs", href: "/careers" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="flex justify-end items-center h-10 text-sm">
            <nav className="hidden md:flex items-center gap-6">
              {topNavItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="hover:text-accent transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Main navbar with glassmorphism */}
      <nav
        className={cn(
          "transition-all duration-300",
          isScrolled
            ? "glass-nav shadow-gexim"
            : "bg-white/95 backdrop-blur-sm"
        )}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img
                src={geximLogo}
                alt="Ghana EXIM Bank"
                className="h-14 w-auto"
              />
            </Link>

            {/* Desktop navigation */}
            <div className="hidden lg:flex items-center gap-1">
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
                      "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200",
                      location.pathname === item.href
                        ? "text-primary bg-primary/5"
                        : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                    )}
                  >
                    {item.name}
                    {item.children && (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {item.children && openDropdown === item.name && (
                    <div className="absolute top-full left-0 pt-2 animate-fade-in">
                      <div className="glass rounded-xl shadow-gexim-lg py-2 min-w-[200px]">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                to="/apply"
                className="btn-gold px-6 py-3 rounded-lg text-sm font-semibold"
              >
                Apply for Facility
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
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
          <div className="lg:hidden glass border-t border-border animate-fade-in">
            <div className="container-custom py-4">
              <nav className="space-y-1">
                {mainNavItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.href}
                      className={cn(
                        "block px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                        location.pathname === item.href
                          ? "text-primary bg-primary/5"
                          : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                      )}
                    >
                      {item.name}
                    </Link>
                    {item.children && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4">
                  <Link
                    to="/apply"
                    className="btn-gold block text-center px-6 py-3 rounded-lg text-sm font-semibold"
                  >
                    Apply for Facility
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
