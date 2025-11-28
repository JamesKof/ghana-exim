import { Link } from "react-router-dom";
import { Facebook, Youtube, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react";
import geximLogo from "@/assets/gexim-logo.png";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "News & Events", href: "/news" },
  { name: "Gallery", href: "/gallery" },
];

const supportLinks = [
  { name: "Get Help", href: "/apply" },
  { name: "FAQs", href: "/faqs" },
  { name: "Careers", href: "/careers" },
  { name: "Contact Us", href: "/contact" },
];

const products = [
  { name: "Corporate Banking", href: "/products#corporate" },
  { name: "Export Trade", href: "/products#export" },
  { name: "Guarantees", href: "/products#guarantees" },
  { name: "SME Banking", href: "/products#sme" },
];

const offices = [
  {
    city: "Head Office - Accra",
    address: "Africa Trade House, Ambassadorial Enclave, Liberia Road",
    phone: "0302-234668",
  },
  {
    city: "Kumasi",
    address: "First Floor A2 Plaza Building, Dr. Osei Tuffuor By-Pass",
    phone: "0322-041124",
  },
  {
    city: "Tamale",
    address: "2nd Floor SSNIT Pension Tower, Dagomba Street",
    phone: "0372-028053",
  },
];

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/geximgh/", label: "Facebook" },
  { icon: Youtube, href: "https://www.youtube.com/@ghanaeximbank7474", label: "YouTube" },
  { icon: Twitter, href: "https://twitter.com/geximgh", label: "Twitter" },
  { icon: Linkedin, href: "https://gh.linkedin.com/company/ghana-export-import-bank", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/eximbankghana", label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img src={geximLogo} alt="Ghana EXIM Bank" className="h-16 w-auto brightness-0 invert" />
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              Supporting Ghana's quest for a feasible and sustainable export-led economy through innovative financial solutions.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Products</h3>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product.name}>
                  <Link
                    to={product.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent mt-0.5" />
                <a href="mailto:enquiry@eximbankghana.com" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  enquiry@eximbankghana.com
                </a>
              </div>
              {offices.slice(0, 2).map((office) => (
                <div key={office.city} className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">{office.city}</p>
                    <p className="text-xs text-primary-foreground/70">{office.address}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/70">
              © {new Date().getFullYear()} Ghana Export-Import Bank. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link to="/privacy" className="text-primary-foreground/70 hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-primary-foreground/70 hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
