import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import { Download, FileText, BookOpen, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  {
    category: "Financial Reports",
    icon: FileText,
    items: [
      {
        title: "GEXIM Audited Financial Statements 2022",
        url: "https://eximbankghana.com/wp-content/uploads/2024/05/GEXIM_Audited-Financial-Statements-2022.pdf",
        type: "PDF",
        year: "2022",
      },
      {
        title: "GEXIM Audited Financial Statements 2020",
        url: "https://eximbankghana.com/wp-content/uploads/2024/05/GEXIM_Audited-Financial-Statements-2020_2.pdf",
        type: "PDF",
        year: "2020",
      },
      {
        title: "GEXIM Audited Financial Statements 2019",
        url: "https://eximbankghana.com/wp-content/uploads/2024/05/GEXIM_Audited-Financial-Statements-2019_Signature.pdf",
        type: "PDF",
        year: "2019",
      },
      {
        title: "GEXIM Audited Financial Statements 2018",
        url: "https://eximbankghana.com/wp-content/uploads/2024/05/GEXIM_Audited-Financial-Statements-2018.pdf",
        type: "PDF",
        year: "2018",
      },
      {
        title: "GEXIM Audited Financial Statements 2017",
        url: "https://eximbankghana.com/wp-content/uploads/2024/05/GEXIM_Audited-Financial-Statements-2017_2.pdf",
        type: "PDF",
        year: "2017",
      },
    ],
  },
  {
    category: "Manuals & Guides",
    icon: BookOpen,
    items: [
      {
        title: "Right To Information Manual",
        url: "https://www.eximbankghana.com/files/1/RTI%20Manual.pdf",
        type: "PDF",
        year: "",
      },
    ],
  },
];

const Downloads = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? categories.filter((c) => c.category === activeCategory)
    : categories;

  const totalItems = categories.reduce((sum, c) => sum + c.items.length, 0);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px]" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              <Download className="w-4 h-4" />
              Resources
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-2 mb-6 leading-tight">
              Downloads &
              <span className="text-gradient-light block">Publications</span>
            </h1>
            <p className="text-lg text-primary-foreground/75 max-w-xl">
              Access GEXIM's audited financial statements, manuals, and official publications.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="bg-background relative z-20">
        <div className="container-custom -mt-8">
          <div className="bg-card rounded-2xl shadow-lg border border-border p-6 md:p-8">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCategory(null)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border",
                  !activeCategory
                    ? "bg-accent text-accent-foreground border-accent shadow-sm"
                    : "bg-muted text-muted-foreground border-transparent hover:bg-muted/80"
                )}
              >
                All ({totalItems})
              </button>
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.category}
                    onClick={() =>
                      setActiveCategory(
                        activeCategory === cat.category ? null : cat.category
                      )
                    }
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border inline-flex items-center gap-1.5",
                      activeCategory === cat.category
                        ? "bg-accent text-accent-foreground border-accent shadow-sm"
                        : "bg-muted text-muted-foreground border-transparent hover:bg-muted/80"
                    )}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {cat.category}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Downloads Grid */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container-custom max-w-4xl">
          <div className="space-y-10">
            {filtered.map((category) => {
              const Icon = category.icon;
              return (
                <div key={category.category}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-xl font-bold text-foreground">
                      {category.category}
                    </h2>
                    <span className="text-xs font-medium text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
                      {category.items.length}
                    </span>
                  </div>
                  <div className="space-y-3">
                    {category.items.map((item, index) => (
                      <a
                        key={index}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between p-5 md:p-6 rounded-xl border border-border bg-card hover:border-accent/30 hover:shadow-md transition-all duration-300"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0">
                            <FileText className="w-6 h-6 text-destructive" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground text-[15px] group-hover:text-primary transition-colors">
                              {item.title}
                            </h3>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded">
                                {item.type}
                              </span>
                              {item.year && (
                                <span className="text-xs text-muted-foreground">
                                  {item.year}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 flex-shrink-0">
                          <ExternalLink className="w-4 h-4" />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-20 relative overflow-hidden rounded-3xl bg-primary p-10 md:p-14 text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px]" />
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Need more information?
              </h3>
              <p className="text-primary-foreground/70 mb-8 max-w-md mx-auto">
                Contact us for additional reports, publications, or any other documents you may need.
              </p>
              <a
                href="/contact"
                className="btn-gold px-8 py-4 rounded-xl font-semibold inline-block text-base"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Downloads;
