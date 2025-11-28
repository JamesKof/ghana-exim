import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";

const newsItems = [
  {
    title: "GHANA EXIMBANK GETS NEW BOARD TO DRIVE EXPORT AND INDUSTRIAL GROWTH",
    date: "August 2025",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600",
    slug: "new-board-2025",
  },
  {
    title: "GEXIM DEEPENS RELATIONS WITH US EXIM BANK",
    date: "May 2025",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600",
    slug: "us-exim-relations",
  },
  {
    title: "BRITISH HIGH COMMISSIONER ENGAGES GEXIM MANAGEMENT",
    date: "May 2025",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600",
    slug: "british-commissioner",
  },
  {
    title: "GHANA EXPORT-IMPORT BANK PAYS OFF US$100 MILLION LOAN AHEAD OF SCHEDULE",
    date: "May 2025",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600",
    slug: "loan-payoff",
  },
];

export function NewsSection() {
  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Latest Updates
            </span>
            <h2 className="text-display-sm md:text-display-md text-foreground mt-3">
              News & Media Coverage
            </h2>
          </div>
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all duration-300"
          >
            View All News
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map((item, index) => (
            <Link
              key={item.slug}
              to={`/news/${item.slug}`}
              className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-gexim-lg transition-all duration-300"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  {item.date}
                </div>
                <h3 className="font-bold text-foreground group-hover:text-primary transition-colors line-clamp-3 leading-tight">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
