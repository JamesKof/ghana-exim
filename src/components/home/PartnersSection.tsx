const partners = [
  { name: "GEPA", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200" },
  { name: "Ghana Trade Association", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200" },
  { name: "Hungary EXIM", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200" },
  { name: "G-NEXID", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200" },
  { name: "Ministry of Trade", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200" },
  { name: "Afreximbank", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200" },
];

export function PartnersSection() {
  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Trusted Partnerships
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-3">
            Our Partners
          </h2>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <div className="w-24 h-12 bg-muted rounded flex items-center justify-center text-xs text-muted-foreground font-medium">
                {partner.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
