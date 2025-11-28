import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { CheckCircle2, Target, Eye, Users, Award, ArrowRight } from "lucide-react";

// Leadership Photos
import sylvesterMensahImg from "@/assets/leadership/sylvester-mensah-ceo.jpg";
import mosesKluMensahImg from "@/assets/leadership/moses-klu-mensah.jpg";
import victorEasmonImg from "@/assets/leadership/victor-easmon.jpg";
import josephNyarkoteiImg from "@/assets/leadership/joseph-nyarkotei-dorh.jpg";
import sampsonAhiImg from "@/assets/leadership/sampson-ahi.jpg";
import matildaAsanteImg from "@/assets/leadership/matilda-asante-asiedu.jpg";
import francisKwartengImg from "@/assets/leadership/francis-kwarteng-arthur.jpg";
import robertAdamuImg from "@/assets/leadership/robert-akati-adamu.jpg";

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

const executiveManagement = [
  {
    name: "Hon. Sylvester Adinam Mensah",
    position: "Chief Executive",
    image: sylvesterMensahImg,
  },
  {
    name: "Mr. Moses Klu Mensah",
    position: "Deputy CEO – Banking",
    image: mosesKluMensahImg,
  },
  {
    name: "Mr. Victor Easmon",
    position: "Deputy CEO – Finance & Admin",
    image: victorEasmonImg,
  },
];

const boardOfDirectors = [
  {
    name: "Dr. Joseph Nyarkotei Dorh",
    position: "Board Chairman",
    image: josephNyarkoteiImg,
    isChairman: true,
  },
  {
    name: "Hon. Sampson Ahi",
    position: "Board Member",
    image: sampsonAhiImg,
    isChairman: false,
  },
  {
    name: "Mrs. Matilda Asante-Asiedu",
    position: "Board Member",
    image: matildaAsanteImg,
    isChairman: false,
  },
  {
    name: "Francis Kojo Kwarteng Arthur",
    position: "Board Member",
    image: francisKwartengImg,
    isChairman: false,
  },
  {
    name: "Robert Akati Adamu",
    position: "Board Member",
    image: robertAdamuImg,
    isChairman: false,
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
                To become a strong financial institution that will be a key engine in the development of Ghana's export trade and the promotion of investments in exportable goods and services.
              </p>
            </div>
            <div className="bg-accent rounded-3xl p-10 text-accent-foreground">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-accent-foreground/80 text-lg">
                To facilitate the transformation of Ghana's economy into an export one, by supporting, promoting and financing Ghanaian exporters, especially value-added goods and services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Management Preview */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Leadership
            </span>
            <h2 className="text-display-sm text-foreground mt-3 mb-6">
              Executive Management
            </h2>
            <p className="text-muted-foreground">
              Our experienced leadership team driving GEXIM's mission forward
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {executiveManagement.map((exec) => (
              <div 
                key={exec.name} 
                className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-gexim transition-all duration-300 group"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={exec.image}
                    alt={exec.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {exec.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">{exec.position}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/leadership"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              View Full Leadership Team
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Board of Directors Preview */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Governance
            </span>
            <h2 className="text-display-sm text-foreground mt-3 mb-6">
              Board of Directors
            </h2>
            <p className="text-muted-foreground">
              Distinguished professionals guiding GEXIM's strategic direction
            </p>
          </div>
          
          {/* Chairman - Featured */}
          <div className="max-w-sm mx-auto mb-10">
            {boardOfDirectors.filter(d => d.isChairman).map((director) => (
              <div 
                key={director.name}
                className="bg-primary rounded-2xl overflow-hidden shadow-gexim group"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={director.image}
                    alt={director.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-primary-foreground mb-1">
                    {director.name}
                  </h3>
                  <p className="text-accent font-medium">{director.position}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Board Members Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {boardOfDirectors.filter(d => !d.isChairman).map((director) => (
              <div 
                key={director.name}
                className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-gexim transition-shadow group"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={director.image}
                    alt={director.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-bold text-foreground text-sm mb-0.5 line-clamp-2">{director.name}</h3>
                  <p className="text-xs text-muted-foreground">{director.position}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/leadership"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              View Complete Board
              <ArrowRight className="w-5 h-5" />
            </Link>
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
