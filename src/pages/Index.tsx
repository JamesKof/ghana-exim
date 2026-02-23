import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { AboutSection } from "@/components/home/AboutSection";
import { ImpactStats } from "@/components/home/ImpactStats";
import { ProductsSection } from "@/components/home/ProductsSection";
import { CTASection } from "@/components/home/CTASection";
import { NewsSection } from "@/components/home/NewsSection";
import { PartnersSection } from "@/components/home/PartnersSection";
import { ContactCTA } from "@/components/home/ContactCTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <AboutSection />
      <ImpactStats />
      <ProductsSection />
      <CTASection />
      <NewsSection />
      <PartnersSection />
      <ContactCTA />
    </Layout>
  );
};

export default Index;
