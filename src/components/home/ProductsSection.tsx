import { Link } from "react-router-dom";
import { Building2, Ship, Shield, Store, ArrowRight } from "lucide-react";

const products = [
  {
    icon: Building2,
    title: "Corporate Banking",
    description: "Short, medium and long term financing solutions at concessionary rates for large companies in the export value chain.",
    href: "/products#corporate",
    gradient: "from-primary to-gexim-navy-light",
  },
  {
    icon: Ship,
    title: "Export Trade",
    description: "Comprehensive trade finance solutions including pre-shipment and post-shipment credit facilities.",
    href: "/products#export",
    gradient: "from-gexim-blue to-primary",
  },
  {
    icon: Shield,
    title: "Guarantees",
    description: "Bank guarantees and export credit insurance to mitigate trade-related risks for businesses.",
    href: "/products#guarantees",
    gradient: "from-gexim-navy-light to-gexim-navy",
  },
  {
    icon: Store,
    title: "SME Banking",
    description: "Tailored financial products and advisory services for small and medium-sized enterprises.",
    href: "/products#sme",
    gradient: "from-accent to-gexim-gold-dark",
  },
];

export function ProductsSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Navy curved background */}
      <div className="absolute inset-0 bg-primary section-curve-top" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-gexim-blue/20 rounded-full blur-[80px]" />

      <div className="relative z-10 section-padding">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-accent font-semibold text-sm uppercase tracking-wider mb-6">
              What We Do
            </span>
            <h2 className="text-display-sm md:text-display-md text-white mb-6">
              Products & Services
            </h2>
            <p className="text-lg text-white/70">
              Comprehensive financial solutions designed to support Ghana's export industry and drive economic growth.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Link
                key={product.title}
                to={product.href}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <product.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                  {product.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  {product.description}
                </p>
                
                <span className="inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: "inset 0 0 30px hsla(45, 100%, 50%, 0.1)" }} />
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Link
              to="/products"
              className="btn-gold px-10 py-4 text-lg font-semibold inline-flex items-center gap-3 group"
            >
              View All Products
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
