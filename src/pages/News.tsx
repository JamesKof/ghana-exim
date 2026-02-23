import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";

const newsItems = [
  {
    title: "GEXIM LAUNCHES 10TH ANNIVERSARY CELEBRATIONS WITH FOCUS ON EXPORT-LED INDUSTRIAL TRANSFORMATION",
    date: "January 2026",
    excerpt: "The Ghana Export–Import Bank (GEXIM) has officially launched activities marking its 10th anniversary, reaffirming its commitment to export-led industrialization, value addition, and sustainable economic growth.",
    image: "https://eximbankghana.com/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-14-at-14.49.59-1024x724.jpeg",
    slug: "10th-anniversary-2026",
    category: "Anniversary",
  },
  {
    title: "GHANA EXIMBANK GETS NEW BOARD TO DRIVE EXPORT AND INDUSTRIAL GROWTH",
    date: "July 2025",
    excerpt: "The Minister of Trade, Agribusiness and Industry, Hon Elizabeth Ofosu-Agyare inaugurated the reconstituted Board of Directors for the Ghana Export-Import (EXIM) Bank.",
    image: "https://eximbankghana.com/wp-content/uploads/2025/08/Board-with-Minister-1024x683.jpeg",
    slug: "new-board-2025",
    category: "Corporate",
  },
  {
    title: "GEXIM DEEPENS RELATIONS WITH US EXIM BANK",
    date: "April 2025",
    excerpt: "A management team of GEXIM led by the Acting Chief Executive, Hon. Sylvester Mensah met with leadership of the Export–Import Bank of the United States in Washington DC.",
    image: "https://eximbankghana.com/wp-content/uploads/2025/05/GEXIM-DEEPENS-RELATIONS-WITH-US-EXIM-BANK1-1024x768.jpeg",
    slug: "us-exim-relations",
    category: "Partnership",
  },
  {
    title: "BRITISH HIGH COMMISSIONER ENGAGES GEXIM MANAGEMENT",
    date: "February 2025",
    excerpt: "The British High Commissioner to Ghana, Her Excellency Harriet Thompson met with Executive Management of GEXIM at her residence in Cantonment, Accra.",
    image: "https://eximbankghana.com/wp-content/uploads/2025/05/british_img_1.jpeg",
    slug: "british-commissioner",
    category: "Diplomacy",
  },
  {
    title: "GHANA EXPORT-IMPORT BANK PAYS OFF US$100 MILLION LOAN FACILITY AHEAD OF SCHEDULE",
    date: "May 2025",
    excerpt: "The Board and Executive Management of GEXIM wishes to inform stakeholders that the Bank has successfully paid off a loan facility contracted from an international syndicate of lenders.",
    image: "https://eximbankghana.com/wp-content/uploads/2025/05/news_img_1-1024x282.png",
    slug: "loan-payoff",
    category: "Finance",
  },
  {
    title: "GEXIM BANK CEO HOLDS MAIDEN MEETING WITH STAFF",
    date: "January 2025",
    excerpt: "Ghana EXIM Bank's Chief Executive Officer, Hon. Sylvester Mensah held a maiden meeting with staff at the bank's Head Office at Africa Trade House in Accra.",
    image: "https://eximbankghana.com/wp-content/uploads/2025/02/Hon_Sylvester_-Mensah-1024x682.jpg",
    slug: "ceo-meeting",
    category: "Corporate",
  },
];

const News = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Stay Updated
            </span>
            <h1 className="text-display-md md:text-display-lg text-primary-foreground mt-4 mb-6">
              News & Media
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Latest updates, announcements, and media coverage from Ghana EXIM Bank.
            </p>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          {/* Featured */}
          <div className="mb-16">
            <Link
              to={`/news/${newsItems[0].slug}`}
              className="group grid md:grid-cols-2 gap-8 bg-card rounded-3xl overflow-hidden shadow-sm hover:shadow-gexim-lg transition-all"
            >
              <div className="aspect-[16/10] md:aspect-auto overflow-hidden">
                <img
                  src={newsItems[0].image}
                  alt={newsItems[0].title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4 w-fit">
                  {newsItems[0].category}
                </span>
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                  <Calendar className="w-4 h-4" />
                  {newsItems[0].date}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {newsItems[0].title}
                </h2>
                <p className="text-muted-foreground mb-6">{newsItems[0].excerpt}</p>
                <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
                  Read More <ArrowRight className="w-5 h-5" />
                </span>
              </div>
            </Link>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.slice(1).map((item) => (
              <Link
                key={item.slug}
                to={`/news/${item.slug}`}
                className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-gexim-lg transition-all"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-2 py-0.5 rounded-full bg-accent/10 text-accent text-xs font-medium mb-3">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    {item.date}
                  </div>
                  <h3 className="font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{item.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default News;
