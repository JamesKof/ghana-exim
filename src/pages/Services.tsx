import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { 
  Briefcase, 
  TrendingUp, 
  Users, 
  Globe, 
  ArrowRight, 
  BookOpen,
  FileSearch,
  Handshake,
  Target,
  GraduationCap,
  LineChart,
  ShieldCheck,
  Lightbulb,
  Building2,
  Store
} from "lucide-react";

const services = [
  {
    icon: FileSearch,
    title: "Research & Market Intelligence",
    description: "In-depth research on international markets, trade trends, and export opportunities to help businesses make informed decisions.",
    features: [
      "Market entry assessments",
      "Competitor analysis",
      "Trade policy impact analysis",
      "Sector-specific research reports",
      "Export market opportunities identification"
    ]
  },
  {
    icon: Briefcase,
    title: "Export Advisory Services",
    description: "One-on-one advisory services covering all aspects of export business development, from documentation to market access strategies.",
    features: [
      "Export documentation guidance",
      "International trade compliance",
      "Market access strategies",
      "Buyer-seller matchmaking",
      "Trade regulations advisory"
    ]
  },
  {
    icon: GraduationCap,
    title: "Capacity Building",
    description: "Training programs and workshops designed to enhance export competencies and build world-class capabilities for Ghanaian businesses.",
    features: [
      "Export readiness training",
      "Quality standards compliance",
      "Packaging and labeling workshops",
      "International marketing skills",
      "E-commerce export training"
    ]
  },
  {
    icon: ShieldCheck,
    title: "Credit Guarantee Services",
    description: "GEXIM provides guarantee cover to partner financial institutions who provide finance to businesses in the export sector.",
    features: [
      "100% coverage for foreign currency loans",
      "80% coverage for local currency loans",
      "Bid bonds and performance guarantees",
      "Advance payment guarantees",
      "Risk mitigation solutions"
    ]
  },
  {
    icon: LineChart,
    title: "Trade Finance Solutions",
    description: "Comprehensive financing solutions designed to support Ghana's export industry and facilitate international trade transactions.",
    features: [
      "Pre-shipment credit",
      "Post-shipment credit",
      "Export development finance",
      "Cross-border investment financing",
      "Working capital support"
    ]
  },
  {
    icon: Globe,
    title: "Market Access Support",
    description: "Assistance in accessing international markets and connecting Ghanaian exporters with global trade opportunities.",
    features: [
      "Trade fair participation support",
      "International buyer connections",
      "Export promotion programs",
      "AfCFTA market access support",
      "Regional trade facilitation"
    ]
  },
  {
    icon: Handshake,
    title: "Partnership Development",
    description: "Facilitating strategic partnerships between Ghanaian businesses and international buyers, distributors, and investors.",
    features: [
      "B2B matchmaking services",
      "Joint venture facilitation",
      "International investor connections",
      "Trade delegation coordination",
      "Strategic alliance support"
    ]
  },
  {
    icon: BookOpen,
    title: "Knowledge Centre",
    description: "Access to GEXIM's repository of trade information, publications, and resources to support export business development.",
    features: [
      "Trade publications and reports",
      "Export procedures guidelines",
      "Training materials and resources",
      "Industry networking events",
      "Online resource library"
    ]
  },
];

const specialInitiatives = [
  {
    icon: Store,
    title: "Tuesday Market",
    description: "A weekly initiative promoting Made-in-Ghana products by encouraging the purchase and use of locally manufactured goods every Tuesday.",
    benefits: [
      "Increased visibility for local manufacturers",
      "Direct sales opportunities",
      "Consumer awareness campaigns",
      "Support for local employment"
    ]
  },
  {
    icon: Building2,
    title: "Made-in-Ghana Town (MiG Town)",
    description: "A dedicated commercial space showcasing Made-in-Ghana products, providing a permanent marketplace for local manufacturers and entrepreneurs.",
    benefits: [
      "Permanent retail space for local products",
      "One-stop shop for Made-in-Ghana goods",
      "Tourism and commercial integration",
      "Brand building opportunities"
    ]
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">What We Offer</span>
            <h1 className="text-display-md md:text-display-lg text-primary-foreground mt-4 mb-6">Our Services</h1>
            <p className="text-xl text-primary-foreground/80">
              Comprehensive support services and advisory solutions to help Ghanaian businesses succeed in international trade and export markets.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Advisory & Support
            </span>
            <h2 className="text-display-sm text-foreground mt-3 mb-6">
              Core Services
            </h2>
            <p className="text-muted-foreground text-lg">
              We provide a wide range of services to support exporters at every stage of their export journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div 
                key={service.title} 
                className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-gexim transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                
                <div className="border-t border-border pt-6">
                  <p className="text-sm font-semibold text-foreground mb-3">Key Features:</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Target className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Initiatives */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Made-in-Ghana
            </span>
            <h2 className="text-display-sm text-foreground mt-3 mb-6">
              Special Initiatives
            </h2>
            <p className="text-muted-foreground text-lg">
              Strategic programs designed to promote Made-in-Ghana products and support local businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {specialInitiatives.map((initiative) => (
              <div 
                key={initiative.title}
                className="bg-card rounded-3xl overflow-hidden shadow-sm hover:shadow-gexim-lg transition-all duration-300"
              >
                <div className="bg-primary p-8">
                  <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-4">
                    <initiative.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                    {initiative.title}
                  </h3>
                  <p className="text-primary-foreground/80">
                    {initiative.description}
                  </p>
                </div>
                <div className="p-8">
                  <p className="text-sm font-semibold text-foreground mb-4">Key Benefits:</p>
                  <ul className="space-y-3">
                    {initiative.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground">
                        <Lightbulb className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="bg-primary rounded-3xl p-10 md:p-16 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Need Our Services?
            </h3>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Contact our team today to learn how GEXIM can support your export business with our comprehensive range of services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="btn-gold px-8 py-4 rounded-xl text-lg font-semibold inline-flex items-center justify-center gap-2"
              >
                Contact Us <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/products" 
                className="px-8 py-4 rounded-xl text-lg font-semibold border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-colors inline-flex items-center justify-center gap-2"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
