import { Link } from "react-router-dom";
import { ArrowRight, FileText, Plane } from "lucide-react";
import applyFacility from "@/assets/apply-facility.jpg";
import exportFacilities from "@/assets/export-facilities.jpg";

const ctaCards = [
  {
    title: "Apply For A Facility",
    description: "Get started with your loan application today. Our team is ready to support your business growth.",
    icon: FileText,
    href: "/apply",
    image: applyFacility,
    buttonText: "Apply Now",
    accent: true,
  },
  {
    title: "Export Facilities",
    description: "Explore our comprehensive export financing solutions designed for international trade.",
    icon: Plane,
    href: "/products",
    image: exportFacilities,
    buttonText: "Learn More",
    accent: false,
  },
];

export function CTASection() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2" />

      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-8">
          {ctaCards.map((card, index) => (
            <Link
              key={card.title}
              to={card.href}
              className="group relative overflow-hidden rounded-4xl aspect-[16/10] md:aspect-[4/3] hover-lift"
            >
              {/* Background Image */}
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gexim-navy via-gexim-navy/60 to-transparent opacity-90" />

              {/* Decorative corner accent */}
              {card.accent && (
                <div className="absolute top-6 right-6 w-20 h-20 bg-accent/20 rounded-full blur-2xl" />
              )}

              {/* Content */}
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-2xl ${card.accent ? "bg-accent" : "bg-white/20 backdrop-blur-sm"} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                    <card.icon className={`w-7 h-7 ${card.accent ? "text-accent-foreground" : "text-white"}`} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">{card.title}</h3>
                </div>
                <p className="text-white/80 mb-6 max-w-md text-lg">{card.description}</p>
                <span className={`inline-flex items-center gap-2 ${card.accent ? "text-accent" : "text-white"} font-semibold text-lg group-hover:gap-4 transition-all duration-300`}>
                  {card.buttonText}
                  <ArrowRight className="w-5 h-5" />
                </span>
              </div>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 ${card.accent ? "bg-accent" : "bg-white/30"} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
