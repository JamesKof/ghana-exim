import { Link } from "react-router-dom";
import { ArrowRight, Calendar, ArrowUpRight } from "lucide-react";

const newsItems = [
  {
    title: "GHANA EXIMBANK GETS NEW BOARD TO DRIVE EXPORT AND INDUSTRIAL GROWTH",
    date: "August 2025",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600",
    slug: "new-board-2025",
    featured: true,
  },
  {
    title: "GEXIM DEEPENS RELATIONS WITH US EXIM BANK",
    date: "May 2025",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600",
    slug: "us-exim-relations",
    featured: false,
  },
  {
    title: "BRITISH HIGH COMMISSIONER ENGAGES GEXIM MANAGEMENT",
    date: "May 2025",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600",
    slug: "british-commissioner",
    featured: false,
  },
  {
    title: "GHANA EXPORT-IMPORT BANK PAYS OFF US$100 MILLION LOAN AHEAD OF SCHEDULE",
    date: "May 2025",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600",
    slug: "loan-payoff",
    featured: false,
  },
];

export function NewsSection() {
  const featuredNews = newsItems.find(item => item.featured);
  const otherNews = newsItems.filter(item => !item.featured);

  return (
    <section className="section-padding bg-muted relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Insights
            </span>
            <h2 className="text-display-sm md:text-display-md text-foreground">
              News & Media Coverage
            </h2>
          </div>
          <Link
            to="/news"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            View All News
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* News Grid - Featured + Others */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured News */}
          {featuredNews && (
            <Link
              to={`/news/${featuredNews.slug}`}
              className="group relative overflow-hidden rounded-3xl aspect-[4/3] lg:aspect-auto lg:row-span-2 hover-lift"
            >
              <img
                src={featuredNews.image}
                alt={featuredNews.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gexim-navy via-gexim-navy/50 to-transparent" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="flex items-center gap-2 text-white/70 text-sm mb-4">
                  <Calendar className="w-4 h-4" />
                  {featuredNews.date}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-accent transition-colors leading-tight mb-4">
                  {featuredNews.title}
                </h3>
                <span className="inline-flex items-center gap-2 text-accent font-semibold">
                  Read Article
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </div>
            </Link>
          )}

          {/* Other News */}
          <div className="space-y-6">
            {otherNews.map((item) => (
              <Link
                key={item.slug}
                to={`/news/${item.slug}`}
                className="group flex gap-6 bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-gexim-lg transition-all duration-300"
              >
                <div className="w-32 md:w-40 flex-shrink-0 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="py-4 pr-4 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                    <Calendar className="w-4 h-4" />
                    {item.date}
                  </div>
                  <h3 className="font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
