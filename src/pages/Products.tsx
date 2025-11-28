import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Building2, Ship, Shield, Store, ArrowRight, Download, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const products = [
  {
    id: "corporate",
    icon: Building2,
    title: "Corporate Banking",
    description: "The Ghana Export-Import Bank (GEXIM) provides large companies in the export value chain in Ghana and abroad with short, medium and long term financing solutions at concessionary rates to make them globally competitive.",
    subProducts: [
      {
        name: "Pre-Shipment Credit",
        description: "Support businesses with appropriate access to finance at the manufacturing stage for the purchase of raw materials and other inputs.",
        eligibility: [
          "Duly registered or incorporated Ghanaian companies",
          "Ghanaian companies/firms/cooperative societies with a track record in exports",
          "Goods and commodities that are wholly or partially produced for export",
        ],
      },
      {
        name: "Post-Shipment Credit",
        description: "Finance provided to exporters after shipment of goods to bridge the gap between shipment and receipt of payment.",
      },
      {
        name: "Project Finance",
        description: "Long-term financing for major projects in the export sector including manufacturing and processing facilities.",
      },
    ],
  },
  {
    id: "export",
    icon: Ship,
    title: "Export Trade",
    description: "Comprehensive trade finance solutions designed to support Ghana's export industry and facilitate international trade transactions.",
    subProducts: [
      {
        name: "Export Credit Insurance",
        description: "Protection against non-payment risks in international trade transactions.",
      },
      {
        name: "Trade Finance",
        description: "Financing solutions for import and export transactions.",
      },
    ],
  },
  {
    id: "guarantees",
    icon: Shield,
    title: "Guarantees",
    description: "Bank guarantees and export credit insurance to mitigate trade-related risks for businesses engaged in international commerce.",
    subProducts: [
      {
        name: "Bid Bonds",
        description: "Guarantees provided to support tender processes.",
      },
      {
        name: "Performance Guarantees",
        description: "Guarantees ensuring contract performance obligations are met.",
      },
      {
        name: "Advance Payment Guarantees",
        description: "Security for advance payments received under contracts.",
      },
    ],
  },
  {
    id: "sme",
    icon: Store,
    title: "SME Banking",
    description: "Tailored financial products and advisory services designed specifically for small and medium-sized enterprises in Ghana's export sector.",
    subProducts: [
      {
        name: "SME Loans",
        description: "Accessible financing for small and medium enterprises engaged in export activities.",
      },
      {
        name: "Business Advisory",
        description: "Expert guidance and support for SME growth and development.",
      },
    ],
  },
];

const Products = () => {
  const [expandedProducts, setExpandedProducts] = useState<string[]>([]);

  const toggleProduct = (id: string) => {
    setExpandedProducts(prev => 
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Our Offerings
            </span>
            <h1 className="text-display-md md:text-display-lg text-primary-foreground mt-4 mb-6">
              Products & Services
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Comprehensive financial solutions designed to support Ghana's export industry and drive economic growth.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="space-y-8">
            {products.map((product) => (
              <div
                key={product.id}
                id={product.id}
                className="bg-card rounded-3xl shadow-sm overflow-hidden scroll-mt-32"
              >
                {/* Product Header */}
                <div className="p-8 md:p-10 border-b border-border">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center flex-shrink-0">
                      <product.icon className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                        {product.title}
                      </h2>
                      <p className="text-muted-foreground text-lg">
                        {product.description}
                      </p>
                    </div>
                    <button
                      onClick={() => toggleProduct(product.id)}
                      className="self-start md:self-center px-6 py-3 rounded-xl bg-muted hover:bg-muted/80 transition-colors flex items-center gap-2"
                    >
                      {expandedProducts.includes(product.id) ? (
                        <>
                          Hide Details <ChevronUp className="w-5 h-5" />
                        </>
                      ) : (
                        <>
                          View Details <ChevronDown className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Sub Products */}
                {expandedProducts.includes(product.id) && (
                  <div className="p-8 md:p-10 bg-muted/30 animate-fade-in">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {product.subProducts.map((sub) => (
                        <div key={sub.name} className="bg-card rounded-xl p-6 shadow-sm">
                          <h4 className="font-bold text-foreground mb-3">{sub.name}</h4>
                          <p className="text-sm text-muted-foreground mb-4">{sub.description}</p>
                          {sub.eligibility && (
                            <div className="mt-4 pt-4 border-t border-border">
                              <p className="text-xs font-semibold text-foreground mb-2">Eligibility:</p>
                              <ul className="space-y-1">
                                {sub.eligibility.map((item, i) => (
                                  <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                                    <span className="w-1 h-1 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <div className="bg-primary rounded-3xl p-10 md:p-16">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Apply for a facility today and let us help you grow your export business.
              </p>
              <Link
                to="/apply"
                className="btn-gold px-8 py-4 rounded-xl text-lg font-semibold inline-flex items-center gap-2"
              >
                Apply for Facility
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
