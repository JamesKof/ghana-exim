import { Layout } from "@/components/layout/Layout";

const images = [
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800",
  "https://images.unsplash.com/photo-1590523278191-995cbcda646b?w=800",
  "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=800",
  "https://images.unsplash.com/photo-1580746738099-2aa20ebfea4d?w=800",
  "https://images.unsplash.com/photo-1612810806695-30f7a8258391?w=800",
  "https://images.unsplash.com/photo-1604689598793-b8bf1dc445a1?w=800",
  "https://images.unsplash.com/photo-1589519160732-57fc498494f8?w=800",
  "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800",
  "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800",
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
