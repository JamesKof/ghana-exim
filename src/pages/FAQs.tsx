import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import { ChevronDown, Search, HelpCircle, Building2, FileText, DollarSign, Lightbulb, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const faqCategories = [
  {
    category: "About GEXIM",
    icon: Building2,
    questions: [
      {
        question: "When was GEXIM established?",
        answer: "The Ghana Export-Import Bank (GEXIM) was established in 2016 under the Ghana Export-Import Bank Act 2016 (Act 911) to support the Government's goal of building a sustainable, export-led economy.",
      },
      {
        question: "Who owns GEXIM?",
        answer: "GEXIM is fully owned by the Government of Ghana.",
      },
    ],
  },
  {
    category: "GEXIM's Role, Functions & Services",
    icon: HelpCircle,
    questions: [
      {
        question: "What are the key functions of GEXIM?",
        answer: "The Bank provides finance, risk-bearing services, trade and market information, and export advisory services to the Ghanaian export community.",
      },
      {
        question: "How is GEXIM different from other banks?",
        answer: "GEXIM operates as a Policy and Development Finance Institution (DFI) focusing on high-growth sectors of the economy. Unlike commercial banks, GEXIM does not accept customer deposits and concentrates on Non-Traditional Exports (NTEs), with a special focus on underserved areas like value addition to agricultural produce.",
      },
      {
        question: "What facilities are available to exporters from GEXIM?",
        answer: "Pre-shipment Credit (supports manufacturing with short-term loans and import finance for raw materials), Post-shipment Credit (bridges production costs and export sales receipts with facilities like Export Receivables Finance and Buyer's Credit), Export Development Finance (offers medium/long-term finance for export project setup, farm acquisition, and company expansion), Cross-Border Investments (facilitates access to foreign markets for Ghanaian companies), and Export Advisory Services (offers information, advisory, and research services to help exporters assess risks and improve competitiveness).",
      },
      {
        question: "What export activities does GEXIM finance, and are there exemptions?",
        answer: "GEXIM finances export activities along the value chain of non-traditional export products such as cashew, oil palm, mango, and value addition to traditional commodities like cocoa, gold and timber. GEXIM does not support activities directly related to traditional export products such as unprocessed gold, timber and crude oil among others.",
      },
      {
        question: "What support does GEXIM offer Small and Medium Enterprises (SMEs)?",
        answer: "Support includes credit products, capacity building, market access, and research and advisory services.",
      },
      {
        question: "How does GEXIM contribute to environmental sustainability?",
        answer: "GEXIM supports Clean Development Mechanisms and encourages clients to adopt environmentally sustainable practices in line with IFRS standards. GEXIM is a proud recipient of a Certificate of Merit for financing sustainable projects.",
      },
      {
        question: "How does GEXIM ensure its clients are environmentally responsible?",
        answer: "Clients must obtain an Environmental Impact Assessment (EIA) certificate from the Environmental Protection Agency, proving that their operations do not harm the environment.",
      },
    ],
  },
  {
    category: "Application & Loan Process",
    icon: FileText,
    questions: [
      {
        question: "How do I qualify for a GEXIM loan?",
        answer: "To qualify, the company must be wholly Ghanaian, and the loan must meet criteria based on socio-economic impact, customer capability, export potential and/or import substitution potential and business sustainability.",
      },
      {
        question: "How can I apply for a GEXIM loan?",
        answer: "Submit a loan application addressed to the CEO, along with a business plan, business registration, audited financial statements (for existing businesses), and other relevant documents.",
      },
      {
        question: "What documentation is required for a credit request?",
        answer: "Required documents include an application letter, board resolution, financial statements, cash flow forecasts, bank statements, collateral valuation reports, and regulatory permits, among others.",
      },
      {
        question: "What is the average processing time for applications?",
        answer: "The average processing time is 21 days.",
      },
    ],
  },
  {
    category: "Financing Terms & Conditions",
    icon: DollarSign,
    questions: [
      {
        question: "What are the costs of GEXIM's facilities?",
        answer: "Interest rate: 13–16% (based on risk profile). Facility fee: 1% payable upfront. Management fee: 0.5% annually.",
      },
      {
        question: "What security is acceptable for GEXIM loans?",
        answer: "Acceptable collateral includes mortgages on land, cash deposits, guarantees, vehicles, receivables, and other fixed and floating assets.",
      },
      {
        question: "Does GEXIM finance imports?",
        answer: "Yes, GEXIM finances imports of machinery, plant & equipment, and raw materials that are not available locally.",
      },
      {
        question: "Will GEXIM finance local sales if I only export a portion of my production?",
        answer: "Yes, GEXIM supports import substitution by financing companies that help reduce imports through local production, such as poultry and rice.",
      },
    ],
  },
  {
    category: "Specialized Services & Initiatives",
    icon: Lightbulb,
    questions: [
      {
        question: "What is GEXIM's Tuesday Market?",
        answer: "The Tuesday Market is an initiative that promotes made-in-Ghana goods by providing a platform for clients to showcase their products and boost sales. It is typically held on the last Tuesday of the month.",
      },
      {
        question: "What is GEXIM's Made-in-Ghana (MiG) Town?",
        answer: "MiG Town is a shop promoting and selling products made in Ghana, providing shelf space for SMEs to increase revenue and visibility.",
      },
      {
        question: "What support can GEXIM offer for sourcing information to support my export business?",
        answer: "GEXIM's Research Services, Advisory Services, and Knowledge Centre provide relevant information and support to help exporters evaluate risks and exploit international opportunities.",
      },
      {
        question: "Can GEXIM provide Letters of Credit (LC) to suppliers?",
        answer: "GEXIM facilitates Letters of Credit (LCs) through designated financial institutions.",
      },
      {
        question: "Are there specific banks through which GEXIM disburses its facilities?",
        answer: "GEXIM transacts with all designated financial institutions (commercial banks).",
      },
    ],
  },
  {
    category: "Corporate Social Responsibility",
    icon: Heart,
    questions: [
      {
        question: "What are the focus areas GEXIM considers for its Corporate Social Responsibility (CSR)?",
        answer: "GEXIM's CSR focuses on agribusiness, education, the environment, and health.",
      },
    ],
  },
];

const FAQs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const filteredFaqs = faqCategories
    .filter((cat) => !activeCategory || cat.category === activeCategory)
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((category) => category.questions.length > 0);

  const totalQuestions = faqCategories.reduce((sum, c) => sum + c.questions.length, 0);

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
              <HelpCircle className="w-4 h-4" />
              Help Center
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-2 mb-6 leading-tight">
              Frequently Asked
              <span className="text-gradient-light block">Questions</span>
            </h1>
            <p className="text-lg text-primary-foreground/75 max-w-xl">
              Find answers to {totalQuestions} common questions about Ghana EXIM Bank, our products, services, and application process.
            </p>
          </div>
        </div>
      </section>

      {/* Search + Category Filter */}
      <section className="bg-background relative z-20">
        <div className="container-custom -mt-8">
          <div className="bg-card rounded-2xl shadow-lg border border-border p-6 md:p-8">
            {/* Search */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for a question..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-base"
              />
            </div>

            {/* Category Pills */}
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
                All ({totalQuestions})
              </button>
              {faqCategories.map((cat) => {
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

      {/* FAQ Content */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container-custom max-w-4xl">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-16">
              <Search className="w-12 h-12 text-muted-foreground/40 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No results found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or browse all categories.
              </p>
            </div>
          ) : (
            <div className="space-y-10">
              {filteredFaqs.map((category) => {
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
                        {category.questions.length}
                      </span>
                    </div>
                    <div className="space-y-3">
                      {category.questions.map((faq, index) => {
                        const id = `${category.category}-${index}`;
                        const isOpen = openItems.includes(id);
                        return (
                          <div
                            key={id}
                            className={cn(
                              "rounded-xl border transition-all duration-300",
                              isOpen
                                ? "bg-card border-accent/30 shadow-md"
                                : "bg-card border-border hover:border-accent/20 hover:shadow-sm"
                            )}
                          >
                            <button
                              onClick={() => toggleItem(id)}
                              className="w-full flex items-start justify-between p-5 md:p-6 text-left gap-4"
                            >
                              <span
                                className={cn(
                                  "font-semibold text-[15px] leading-relaxed transition-colors",
                                  isOpen ? "text-primary" : "text-foreground"
                                )}
                              >
                                {faq.question}
                              </span>
                              <div
                                className={cn(
                                  "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 mt-0.5",
                                  isOpen
                                    ? "bg-accent text-accent-foreground rotate-180"
                                    : "bg-muted text-muted-foreground"
                                )}
                              >
                                <ChevronDown className="w-4 h-4" />
                              </div>
                            </button>
                            <div
                              className={cn(
                                "overflow-hidden transition-all duration-300",
                                isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                              )}
                            >
                              <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
                                <div className="w-12 h-px bg-accent/40 mb-4" />
                                <p className="text-muted-foreground leading-relaxed text-[15px]">
                                  {faq.answer}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Contact CTA */}
          <div className="mt-20 relative overflow-hidden rounded-3xl bg-primary p-10 md:p-14 text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px]" />
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Still have questions?
              </h3>
              <p className="text-primary-foreground/70 mb-8 max-w-md mx-auto">
                Can't find what you're looking for? Our team is ready to assist you with any enquiries.
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

export default FAQs;
