import { Layout } from "@/components/layout/Layout";
import { CheckCircle2, Target, Eye, Users, Award } from "lucide-react";

const functions = [
  "Provide credit facilities to an exporter or the exporter's bank, a buyer or the buyer's bank",
  "Provide credit facilities for the importation of goods or services for use in manufacturing goods",
  "Provide credit facilities or other forms of financial services in respect of international trade",
  "Provide guarantee to an exporter or a buyer who receives a credit facility from a bank",
  "Provide insurance against risk of non-payment by the buyer or the buyer's bank",
  "Insure investors against commercial risks in respect of overseas investment",
  "Jointly invest in overseas Ghanaian business operations aimed at contributing to importation",
];

const mergedInstitutions = [
  {
    name: "Export Finance Company (EFC)",
    description: "Established to provide finance for export-related activities",
  },
  {
    name: "Export Development and Investment Fund (EDIF)",
    description: "Created to support export development initiatives",
  },
  {
    name: "Ghana Export Trade Houses",
    description: "Facilitating Ghana's export trade operations",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h1 className="text-display-md md:text-display-lg text-primary-foreground mt-4 mb-6">
              About GEXIM
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Ghana's principal export finance institution supporting a sustainable export-led economy.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-display-sm text-foreground mb-6">
                Who We Are
              </h2>
              <div className="prose prose-lg text-muted-foreground">
                <p>
                  Ghana Exim Bank (GEXIM) is the principal export finance institution for the Government of Ghana. The Ghana Export-Import Bank Act 2016 (Act 911) established GEXIM to bolster the Government of Ghana's quest for a feasible and sustainable export-led economy.
                </p>
                <p>
                  Ghana Exim Bank (GEXIM) evolved from the merger of three Government finance institutions: Export Finance Company (EFC), Export Development and Investment Fund (EDIF), and Ghana Export Trade Houses.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-muted rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold">Object of the Bank</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-1" />
                    <span className="text-muted-foreground">Support and develop directly or indirectly trade between Ghana and other countries</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-1" />
                    <span className="text-muted-foreground">Build Ghana's capacity and competitiveness in the international marketplace</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Functions */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Our Mandate
            </span>
            <h2 className="text-display-sm text-foreground mt-3 mb-6">
              Functions of the Bank
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {functions.map((func, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-sm hover:shadow-gexim transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <span className="text-accent font-bold">{index + 1}</span>
                </div>
                <p className="text-foreground/80">{func}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-primary rounded-3xl p-10 text-primary-foreground">
              <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-primary-foreground/80 text-lg">
                To be the leading export finance institution in Africa, driving sustainable economic growth through innovative financial solutions.
              </p>
            </div>
            <div className="bg-accent rounded-3xl p-10 text-accent-foreground">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-accent-foreground/80 text-lg">
                To provide competitive financial products and services that support the development of Ghana's export sector and enhance international trade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Our Heritage
            </span>
            <h2 className="text-display-sm text-foreground mt-3 mb-6">
              Merged Institutions
            </h2>
            <p className="text-muted-foreground">
              GEXIM evolved from the merger of three Government finance institutions
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {mergedInstitutions.map((inst) => (
              <div key={inst.name} className="bg-card rounded-2xl p-8 text-center shadow-sm">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{inst.name}</h3>
                <p className="text-muted-foreground">{inst.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
