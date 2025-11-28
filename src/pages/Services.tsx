import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Briefcase, TrendingUp, Users, Globe, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Business Advisory",
    description: "Expert guidance on export market entry, trade compliance, and business development strategies.",
  },
  {
    icon: TrendingUp,
    title: "Trade Finance",
    description: "Comprehensive financing solutions for international trade transactions.",
  },
  {
    icon: Users,
    title: "Capacity Building",
    description: "Training and workshops to enhance export competencies for Ghanaian businesses.",
  },
  {
    icon: Globe,
    title: "Market Access Support",
    description: "Assistance in accessing international markets and trade opportunities.",
  },
];

const Services = () => {
  return (
    <Layout>
      <section className="relative py-24 md:py-32 bg-primary overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">What We Offer</span>
            <h1 className="text-display-md md:text-display-lg text-primary-foreground mt-4 mb-6">Our Services</h1>
            <p className="text-xl text-primary-foreground/80">Comprehensive support services to help Ghanaian businesses succeed in international trade.</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-gexim-lg transition-all">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link to="/contact" className="btn-gold px-8 py-4 rounded-xl text-lg font-semibold inline-flex items-center gap-2">
              Contact Us <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
