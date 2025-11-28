import { Layout } from "@/components/layout/Layout";
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";

const Careers = () => {
  return (
    <Layout>
      <section className="relative py-24 md:py-32 bg-primary overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Join Our Team</span>
            <h1 className="text-display-md md:text-display-lg text-primary-foreground mt-4 mb-6">Careers at GEXIM</h1>
            <p className="text-xl text-primary-foreground/80">Build your career with Ghana's principal export finance institution.</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-display-sm text-foreground mb-4">Current Openings</h2>
            <p className="text-muted-foreground">Check back regularly for new opportunities.</p>
          </div>
          <div className="bg-muted rounded-3xl p-12 text-center">
            <Briefcase className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">No Current Vacancies</h3>
            <p className="text-muted-foreground mb-6">We don't have any open positions at the moment. Please check back later or send your CV to our HR department.</p>
            <a href="mailto:enquiry@eximbankghana.com" className="btn-gold px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2">
              Send Your CV <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
