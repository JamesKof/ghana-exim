import { Layout } from "@/components/layout/Layout";

const images = [
  "https://eximbankghana.com/wp-content/uploads/2024/09/IMG_1711-1-1-scaled-e1727254992403.jpg",
  "https://eximbankghana.com/wp-content/uploads/2025/08/Board-with-Minister-1024x683.jpeg",
  "https://eximbankghana.com/wp-content/uploads/2025/05/GEXIM-DEEPENS-RELATIONS-WITH-US-EXIM-BANK1-1024x768.jpeg",
  "https://eximbankghana.com/wp-content/uploads/2025/05/british_img_1.jpeg",
  "https://eximbankghana.com/wp-content/uploads/2025/02/Hon_Sylvester_-Mensah-1024x682.jpg",
  "https://eximbankghana.com/wp-content/uploads/2024/05/63551661.jpg",
  "https://eximbankghana.com/wp-content/uploads/2024/05/ex-6.jpeg",
  "https://eximbankghana.com/wp-content/uploads/2024/05/gambian2.jpg",
  "https://eximbankghana.com/wp-content/uploads/2024/05/b1.jpg",
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
