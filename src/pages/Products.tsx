import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { 
  Building2, 
  Ship, 
  Shield, 
  Store, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp,
  Lightbulb,
  Clock,
  Percent,
  FileText,
  CheckCircle2
} from "lucide-react";
import { useState } from "react";

const products = [
  {
    id: "export-finance",
    icon: Ship,
    title: "Corporate Banking / Export Finance",
    description: "GEXIM provides large companies in the export value chain in Ghana and abroad with short, medium and long term financing solutions at concessionary rates to make them globally competitive.",
    subProducts: [
      {
        name: "Pre-Shipment Credit",
        description: "Support businesses with appropriate access to finance at the manufacturing stage for the purchase of raw materials and other inputs needed to execute export orders.",
        eligibility: [
          "Duly registered or incorporated Ghanaian companies",
          "Ghanaian companies/firms/cooperative societies with a track record in exports",
          "Goods and commodities that are wholly or partially produced or manufactured in Ghana for export",
        ],
        terms: {
          interestRate: "13% - 16% per annum",
          facilityFee: "1% flat",
          managementFee: "0.5%",
          processingTime: "21 working days",
        },
      },
      {
        name: "Post-Shipment Credit",
        description: "Finance provided to exporters after shipment of goods to bridge the gap between shipment and receipt of payment from overseas buyers.",
        eligibility: [
          "Registered Ghanaian exporters with confirmed export orders",
          "Valid export documentation and shipping documents",
          "Creditworthy buyers in destination countries",
        ],
        terms: {
          interestRate: "13% - 16% per annum",
          facilityFee: "1% flat",
          managementFee: "0.5%",
          processingTime: "14 working days",
        },
      },
      {
        name: "Export Development Finance",
        description: "Medium to long-term financing for export-oriented businesses to expand production capacity, acquire equipment, or establish new export ventures.",
        eligibility: [
          "Established businesses with proven export track record",
          "Viable business plans demonstrating export potential",
          "Adequate collateral and security arrangements",
        ],
        terms: {
          interestRate: "14% - 16% per annum",
          facilityFee: "1% flat",
          managementFee: "0.5%",
          processingTime: "30 working days",
        },
      },
      {
        name: "Cross-Border Investments",
        description: "Financing for Ghanaian businesses seeking to establish or expand operations in other African countries, particularly within the AfCFTA framework.",
        eligibility: [
          "Ghanaian companies with international expansion plans",
          "Joint ventures with foreign partners",
          "Projects contributing to Ghana's export promotion objectives",
        ],
        terms: {
          interestRate: "Negotiable based on project",
          facilityFee: "1% - 2%",
          managementFee: "0.5% - 1%",
          processingTime: "45 working days",
        },
      },
    ],
  },
  {
    id: "guarantees",
    icon: Shield,
    title: "Guarantees",
    description: "GEXIM provides various guarantee products to support Ghanaian exporters in accessing financing and executing international trade contracts.",
    subProducts: [
      {
        name: "Credit Guarantee",
        description: "GEXIM provides guarantee cover to partner financial institutions who provide finance to businesses in the export sector. Coverage is 100% for foreign currency loans and 80% for local currency loans.",
        eligibility: [
          "Partner financial institutions with credit facility agreements",
          "Export-oriented businesses seeking bank financing",
          "Valid export contracts or confirmed orders",
        ],
        coverage: {
          foreign: "100% coverage for foreign currency loans",
          local: "80% coverage for local currency loans",
        },
      },
      {
        name: "Bid Bonds",
        description: "Guarantees issued on behalf of exporters participating in international tenders to demonstrate financial commitment to the bid.",
        eligibility: [
          "Registered Ghanaian exporters",
          "Valid tender documentation",
          "Adequate counter-guarantee or collateral",
        ],
      },
      {
        name: "Performance Guarantees",
        description: "Guarantees ensuring contract performance obligations are met, providing security to overseas buyers.",
        eligibility: [
          "Exporters with confirmed contracts",
          "Demonstrated capacity to fulfill contract obligations",
          "Appropriate collateral arrangements",
        ],
      },
      {
        name: "Advance Payment Guarantees",
        description: "Security guarantees for advance payments received under export contracts, protecting buyers against non-performance.",
        eligibility: [
          "Export contracts with advance payment terms",
          "Good track record with GEXIM or partner banks",
          "Adequate security or collateral",
        ],
      },
    ],
  },
  {
    id: "sme-banking",
    icon: Store,
    title: "SME Banking",
    description: "Tailored financial products and advisory services designed specifically for small and medium-sized enterprises in Ghana's export sector.",
    subProducts: [
      {
        name: "SME Export Loans",
        description: "Accessible financing designed for small and medium enterprises engaged in export activities, with simplified application processes and flexible terms.",
        eligibility: [
          "Registered SMEs with export potential",
          "Minimum 2 years in business operations",
          "Annual turnover within SME classification thresholds",
        ],
        terms: {
          interestRate: "15% - 18% per annum",
          facilityFee: "1% flat",
          maxAmount: "Up to GHS 5 million",
          processingTime: "14 working days",
        },
      },
      {
        name: "Capacity Building Support",
        description: "Technical assistance and training programs to help SMEs build export-ready capabilities and meet international market standards.",
        eligibility: [
          "SMEs with export aspirations",
          "Commitment to participate in training programs",
          "Willingness to implement recommended improvements",
        ],
      },
      {
        name: "Export Readiness Assessment",
        description: "Comprehensive evaluation of SME readiness for international markets, identifying gaps and providing actionable recommendations.",
        eligibility: [
          "SMEs seeking to enter export markets",
          "Businesses looking to expand export operations",
          "Companies requiring certification support",
        ],
      },
    ],
  },
  {
    id: "advisory",
    icon: Lightbulb,
    title: "Advisory Services",
    description: "Expert guidance and research services to support Ghanaian businesses in navigating international trade opportunities and challenges.",
    subProducts: [
      {
        name: "Research & Market Intelligence",
        description: "In-depth research on international markets, trade trends, and export opportunities to help businesses make informed decisions.",
        services: [
          "Market entry assessments",
          "Competitor analysis",
          "Trade policy impact analysis",
          "Sector-specific research reports",
        ],
      },
      {
        name: "Export Advisory",
        description: "One-on-one advisory services covering all aspects of export business development, from documentation to market access strategies.",
        services: [
          "Export documentation guidance",
          "International trade compliance",
          "Market access strategies",
          "Buyer-seller matchmaking",
        ],
      },
      {
        name: "Knowledge Centre",
        description: "Access to GEXIM's repository of trade information, publications, and resources to support export business development.",
        services: [
          "Trade publications and reports",
          "Export procedures guidelines",
          "Training materials and workshops",
          "Industry networking events",
        ],
      },
    ],
  },
  {
    id: "special-initiatives",
    icon: Building2,
    title: "Special Initiatives",
    description: "Strategic programs designed to promote Made-in-Ghana products and support Ghanaian businesses in accessing local and international markets.",
    subProducts: [
      {
        name: "Tuesday Market",
        description: "A weekly initiative promoting Made-in-Ghana products by encouraging the purchase and use of locally manufactured goods every Tuesday.",
        benefits: [
          "Increased visibility for local manufacturers",
          "Direct sales opportunities",
          "Consumer awareness campaigns",
          "Support for local employment",
        ],
      },
      {
        name: "Made-in-Ghana Town (MiG Town)",
        description: "A dedicated commercial space showcasing Made-in-Ghana products, providing a permanent marketplace for local manufacturers and entrepreneurs.",
        benefits: [
          "Permanent retail space for local products",
          "One-stop shop for Made-in-Ghana goods",
          "Tourism and commercial integration",
          "Brand building opportunities",
        ],
      },
    ],
  },
];

const financingTerms = {
  collateral: [
    "Real estate (land and buildings)",
    "Plant and machinery",
    "Export receivables assignment",
    "Cash collateral or bank guarantees",
    "Personal/corporate guarantees",
  ],
  currencies: ["USD", "EUR", "GBP", "GHS"],
  repaymentPeriods: ["Short-term: Up to 12 months", "Medium-term: 1-5 years", "Long-term: 5+ years (for specific projects)"],
};

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

      {/* General Terms Overview */}
      <section className="py-12 bg-muted border-b border-border">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                <Percent className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Interest Rate</p>
                <p className="font-bold text-foreground">13% - 18% p.a.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Facility Fee</p>
                <p className="font-bold text-foreground">1% flat</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Processing Time</p>
                <p className="font-bold text-foreground">14-30 days</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                <Building2 className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Currencies</p>
                <p className="font-bold text-foreground">USD, EUR, GBP, GHS</p>
              </div>
            </div>
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
                    <div className="grid md:grid-cols-2 gap-6">
                      {product.subProducts.map((sub) => (
                        <div key={sub.name} className="bg-card rounded-xl p-6 shadow-sm">
                          <h4 className="font-bold text-lg text-foreground mb-3">{sub.name}</h4>
                          <p className="text-sm text-muted-foreground mb-4">{sub.description}</p>
                          
                          {/* Eligibility */}
                          {sub.eligibility && (
                            <div className="mb-4 pt-4 border-t border-border">
                              <p className="text-xs font-semibold text-foreground mb-2 flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-accent" />
                                Eligibility Criteria
                              </p>
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

                          {/* Terms */}
                          {sub.terms && (
                            <div className="pt-4 border-t border-border">
                              <p className="text-xs font-semibold text-foreground mb-2 flex items-center gap-2">
                                <FileText className="w-4 h-4 text-primary" />
                                Financing Terms
                              </p>
                              <div className="grid grid-cols-2 gap-2">
                                <div className="text-xs">
                                  <span className="text-muted-foreground">Interest: </span>
                                  <span className="font-medium text-foreground">{sub.terms.interestRate}</span>
                                </div>
                                <div className="text-xs">
                                  <span className="text-muted-foreground">Facility Fee: </span>
                                  <span className="font-medium text-foreground">{sub.terms.facilityFee}</span>
                                </div>
                                {sub.terms.managementFee && (
                                  <div className="text-xs">
                                    <span className="text-muted-foreground">Mgmt Fee: </span>
                                    <span className="font-medium text-foreground">{sub.terms.managementFee}</span>
                                  </div>
                                )}
                                {sub.terms.processingTime && (
                                  <div className="text-xs">
                                    <span className="text-muted-foreground">Processing: </span>
                                    <span className="font-medium text-foreground">{sub.terms.processingTime}</span>
                                  </div>
                                )}
                                {sub.terms.maxAmount && (
                                  <div className="text-xs col-span-2">
                                    <span className="text-muted-foreground">Max Amount: </span>
                                    <span className="font-medium text-foreground">{sub.terms.maxAmount}</span>
                                  </div>
                                )}
                              </div>
                            </div>
                          )}

                          {/* Coverage for Guarantees */}
                          {sub.coverage && (
                            <div className="pt-4 border-t border-border">
                              <p className="text-xs font-semibold text-foreground mb-2 flex items-center gap-2">
                                <Shield className="w-4 h-4 text-accent" />
                                Coverage Details
                              </p>
                              <div className="space-y-1">
                                <p className="text-xs text-muted-foreground">{sub.coverage.foreign}</p>
                                <p className="text-xs text-muted-foreground">{sub.coverage.local}</p>
                              </div>
                            </div>
                          )}

                          {/* Services for Advisory */}
                          {sub.services && (
                            <div className="pt-4 border-t border-border">
                              <p className="text-xs font-semibold text-foreground mb-2 flex items-center gap-2">
                                <Lightbulb className="w-4 h-4 text-accent" />
                                Services Offered
                              </p>
                              <ul className="space-y-1">
                                {sub.services.map((service, i) => (
                                  <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                                    <span className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                                    {service}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Benefits for Special Initiatives */}
                          {sub.benefits && (
                            <div className="pt-4 border-t border-border">
                              <p className="text-xs font-semibold text-foreground mb-2 flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-accent" />
                                Key Benefits
                              </p>
                              <ul className="space-y-1">
                                {sub.benefits.map((benefit, i) => (
                                  <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                                    <span className="w-1 h-1 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                                    {benefit}
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

          {/* Collateral Section */}
          <div className="mt-12 bg-muted rounded-3xl p-8 md:p-10">
            <h3 className="text-xl font-bold text-foreground mb-6">Acceptable Collateral</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {financingTerms.collateral.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-border">
              <h4 className="font-semibold text-foreground mb-4">Repayment Periods</h4>
              <div className="grid md:grid-cols-3 gap-4">
                {financingTerms.repaymentPeriods.map((period, index) => (
                  <div key={index} className="bg-card rounded-lg px-4 py-3 text-center">
                    <p className="text-sm text-muted-foreground">{period}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <div className="bg-primary rounded-3xl p-10 md:p-16">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Apply for a facility today and let us help you grow your export business. Our team is ready to assist you with the right financing solution.
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
