import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const objectives = [
  "Support and develop trade between Ghana and other countries",
  "Build Ghana's capacity and competitiveness internationally",
  "Provide credit facilities to exporters and their banks",
  "Offer guarantees and insurance against trade risks",
];

export function AboutSection() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px]" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Grid */}
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-gexim-xl hover-lift">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600"
                    alt="Modern banking"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-3xl overflow-hidden shadow-gexim hover-lift">
                  <img
                    src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400"
                    alt="International trade"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="pt-12 space-y-4">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-gexim hover-lift">
                  <img
                    src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=400"
                    alt="Shipping containers"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-gexim-xl hover-lift">
                  <img
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600"
                    alt="Business meeting"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-4 -right-4 lg:right-auto lg:-left-4 glass p-6 rounded-3xl shadow-gexim-xl max-w-[220px] animate-float">
              <p className="text-5xl font-bold text-primary mb-2">Act 911</p>
              <p className="text-sm text-muted-foreground">Ghana Export-Import Bank Act 2016</p>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider mb-6">
              Who We Are
            </span>
            <h2 className="text-display-sm md:text-display-md text-foreground mb-6">
              Welcome to
              <span className="text-gradient block">Ghana EXIM Bank</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              The Ghana Export-Import (GEXIM) Bank was established by the Ghana Export-Import Bank Act 2016 (Act 911) to support the Government of Ghana's quest for a feasible and sustainable export-led economy.
            </p>

            <div className="space-y-4 mb-10">
              {objectives.map((objective, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 p-4 rounded-2xl bg-muted/50 hover:bg-muted transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:scale-110 transition-all">
                    <CheckCircle2 className="w-5 h-5 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <p className="text-foreground/80 pt-1">{objective}</p>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="btn-gold px-8 py-4 inline-flex items-center gap-3 group text-lg font-semibold"
            >
              Learn More About Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
