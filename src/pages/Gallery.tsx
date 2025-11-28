import { Layout } from "@/components/layout/Layout";

const images = [
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
  "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800",
  "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800",
  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800",
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800",
];

const Gallery = () => {
  return (
    <Layout>
      <section className="relative py-24 md:py-32 bg-primary overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Moments</span>
            <h1 className="text-display-md md:text-display-lg text-primary-foreground mt-4 mb-6">Gallery</h1>
            <p className="text-xl text-primary-foreground/80">A visual journey through GEXIM's activities and events.</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, i) => (
              <div key={i} className="aspect-[4/3] rounded-2xl overflow-hidden shadow-sm hover:shadow-gexim-lg transition-all">
                <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
