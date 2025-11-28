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
  },
  {
    title: "Export Facilities",
    description: "Explore our comprehensive export financing solutions designed for international trade.",
    icon: Plane,
    href: "/export-facility",
    image: exportFacilities,
    buttonText: "Learn More",
  },
];

export function CTASection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8">
          {ctaCards.map((card) => (
            <Link
              key={card.title}
              to={card.href}
              className="group relative overflow-hidden rounded-3xl aspect-[16/9] md:aspect-[4/3]"
            >
              {/* Background Image */}
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                    <card.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{card.title}</h3>
                </div>
                <p className="text-white/80 mb-6 max-w-md">{card.description}</p>
                <span className="inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-4 transition-all duration-300">
                  {card.buttonText}
                  <ArrowRight className="w-5 h-5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
