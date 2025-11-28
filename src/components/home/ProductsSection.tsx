import { Link } from "react-router-dom";
import { Building2, Ship, Shield, Store, ArrowRight } from "lucide-react";

const products = [
  {
    icon: Building2,
    title: "Corporate Banking",
    description: "Short, medium and long term financing solutions at concessionary rates for large companies in the export value chain.",
    href: "/products#corporate",
    color: "bg-primary",
  },
  {
    icon: Ship,
    title: "Export Trade",
    description: "Comprehensive trade finance solutions including pre-shipment and post-shipment credit facilities.",
    href: "/products#export",
    color: "bg-gexim-blue",
  },
  {
    icon: Shield,
    title: "Guarantees",
    description: "Bank guarantees and export credit insurance to mitigate trade-related risks for businesses.",
    href: "/products#guarantees",
    color: "bg-gexim-navy-light",
  },
  {
    icon: Store,
    title: "SME Banking",
    description: "Tailored financial products and advisory services for small and medium-sized enterprises.",
    href: "/products#sme",
    color: "bg-accent text-accent-foreground",
  },
];

export function ProductsSection() {
  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Our Products
          </span>
          <h2 className="text-display-sm md:text-display-md text-foreground mt-3 mb-6">
            Products & Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive financial solutions designed to support Ghana's export industry and drive economic growth.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Link
              key={product.title}
              to={product.href}
              className="group bg-card rounded-2xl p-8 shadow-sm hover:shadow-gexim-lg transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-xl ${product.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <product.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {product.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {product.description}
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors"
          >
            View All Products
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
