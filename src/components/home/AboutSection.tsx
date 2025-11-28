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
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              About GEXIM
            </span>
            <h2 className="text-display-sm md:text-display-md text-foreground mt-3 mb-6">
              Welcome to
              <span className="text-primary block">Ghana EXIM Bank</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              The Ghana Export-Import (GEXIM) Bank was established by the Ghana Export-Import Bank Act 2016 (Act 911) to support the Government of Ghana's quest for a feasible and sustainable export-led economy.
            </p>

            <div className="space-y-4 mb-10">
              {objectives.map((objective, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-foreground/80">{objective}</p>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all duration-300"
            >
              Read More About Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-gexim-lg">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600"
                    alt="Modern banking"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-gexim">
                  <img
                    src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400"
                    alt="International trade"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="pt-8 space-y-4">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-gexim">
                  <img
                    src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=400"
                    alt="Shipping containers"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-gexim-lg">
                  <img
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600"
                    alt="Business meeting"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl shadow-gexim-lg max-w-[200px]">
              <p className="text-4xl font-bold text-primary mb-1">Act 911</p>
              <p className="text-sm text-muted-foreground">Ghana Export-Import Bank Act 2016</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
