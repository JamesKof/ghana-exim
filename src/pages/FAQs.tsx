import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    category: "General",
    questions: [
      {
        question: "What is Ghana EXIM Bank (GEXIM)?",
        answer: "Ghana Exim Bank (GEXIM) is the principal export finance institution for the Government of Ghana. It was established by the Ghana Export-Import Bank Act 2016 (Act 911) to support the Government of Ghana's quest for a feasible and sustainable export-led economy.",
      },
      {
        question: "What are the objectives of GEXIM?",
        answer: "The objectives of GEXIM are to: (a) Support and develop directly or indirectly trade between Ghana and other countries, and (b) Build Ghana's capacity and competitiveness in the international marketplace.",
      },
      {
        question: "Where is GEXIM located?",
        answer: "GEXIM's Head Office is located at Africa Trade House, Ambassadorial Enclave, Liberia Road, Accra, Ghana. We also have regional offices in Kumasi, Tamale, Ho, and Takoradi.",
      },
    ],
  },
  {
    category: "Products & Services",
    questions: [
      {
        question: "What products does GEXIM offer?",
        answer: "GEXIM offers a range of products including Corporate Banking (Pre-shipment Credit, Post-shipment Credit, Project Finance), Export Trade facilities, Guarantees (Bid Bonds, Performance Guarantees), and SME Banking services.",
      },
      {
        question: "Who can apply for GEXIM facilities?",
        answer: "GEXIM facilities are available to duly registered or incorporated Ghanaian companies, Ghanaian companies/firms/cooperative societies with a track record in exports, and businesses dealing with goods and commodities that are wholly or partially produced for export.",
      },
      {
        question: "What collateral is required for facilities?",
        answer: "Acceptable collateral includes: Cash, Corporate guarantee, Shareholders and/or Director's guarantee, Landed property, Charge on fixed and/or floating assets, Assignment of agreements/contract proceeds, and any other security acceptable to the Bank.",
      },
    ],
  },
  {
    category: "Application Process",
    questions: [
      {
        question: "How do I apply for a facility?",
        answer: "You can apply for a facility by visiting our website and filling out the online application form, or by visiting any of our branch offices. Our team will guide you through the application process.",
      },
      {
        question: "What documents are required for application?",
        answer: "Required documents typically include: Business registration documents, Financial statements, Business plan, Collateral documentation, and proof of export activity or export potential. Specific requirements may vary based on the type of facility.",
      },
      {
        question: "How long does the application process take?",
        answer: "The processing time varies depending on the type of facility and completeness of documentation. Our team works to process applications as efficiently as possible. Contact us for specific timelines.",
      },
    ],
  },
];

const FAQs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(
      q =>
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter(category => category.questions.length > 0);

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
              Help Center
            </span>
            <h1 className="text-display-md md:text-display-lg text-primary-foreground mt-4 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Find answers to common questions about Ghana EXIM Bank and our services.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          {/* Search */}
          <div className="relative mb-12">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-input bg-card focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
          </div>

          {/* FAQ Categories */}
          <div className="space-y-8">
            {filteredFaqs.map((category) => (
              <div key={category.category}>
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-2 h-6 bg-accent rounded-full" />
                  {category.category}
                </h2>
                <div className="space-y-3">
                  {category.questions.map((faq, index) => {
                    const id = `${category.category}-${index}`;
                    const isOpen = openItems.includes(id);
                    return (
                      <div
                        key={id}
                        className="bg-card rounded-xl shadow-sm overflow-hidden"
                      >
                        <button
                          onClick={() => toggleItem(id)}
                          className="w-full flex items-center justify-between p-6 text-left"
                        >
                          <span className="font-semibold text-foreground pr-4">
                            {faq.question}
                          </span>
                          <ChevronDown
                            className={cn(
                              "w-5 h-5 text-muted-foreground transition-transform flex-shrink-0",
                              isOpen && "rotate-180"
                            )}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-6 animate-fade-in">
                            <p className="text-muted-foreground leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center bg-muted rounded-3xl p-10">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Can't find what you're looking for? Our team is here to help.
            </p>
            <a
              href="/contact"
              className="btn-gold px-8 py-4 rounded-xl font-semibold inline-block"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQs;
