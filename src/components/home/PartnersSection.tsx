import gepaLogo from "@/assets/partners/gepa-logo.png";
import afreximLogo from "@/assets/partners/afreximbank-logo.png";
import motiLogo from "@/assets/partners/moti-logo.png";
import bogLogo from "@/assets/partners/bog-logo.png";
import agiLogo from "@/assets/partners/agi-logo.png";
import gncciLogo from "@/assets/partners/gncci-logo.png";

const partners = [
  { 
    name: "GEPA", 
    fullName: "Ghana Export Promotion Authority",
    logo: gepaLogo
  },
  { 
    name: "Afreximbank", 
    fullName: "African Export-Import Bank",
    logo: afreximLogo
  },
  { 
    name: "MoTI", 
    fullName: "Ministry of Trade & Industry",
    logo: motiLogo
  },
  { 
    name: "Bank of Ghana", 
    fullName: "Central Bank of Ghana",
    logo: bogLogo
  },
  { 
    name: "AGI", 
    fullName: "Association of Ghana Industries",
    logo: agiLogo
  },
  { 
    name: "GNCCI", 
    fullName: "Ghana National Chamber of Commerce",
    logo: gncciLogo
  },
];

export function PartnersSection() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[200px] bg-gradient-to-r from-transparent via-primary/10 to-transparent blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Trusted Partnerships
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Our Partners & Collaborators
          </h2>
        </div>

        {/* Partners grid with real logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-muted/50 hover:bg-muted border border-transparent hover:border-border transition-all duration-300 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-3 group-hover:scale-110 transition-all duration-300 overflow-hidden p-2 shadow-sm">
                <img 
                  src={partner.logo} 
                  alt={partner.fullName}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors text-center font-medium">
                {partner.fullName}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom accent line */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-border" />
          <span className="text-sm text-muted-foreground">Working together for Ghana's export growth</span>
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-border" />
        </div>
      </div>
    </section>
  );
}
