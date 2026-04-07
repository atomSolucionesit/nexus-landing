import { Navbar } from "@/components/navbar";
import Hero from "@/components/hero";
import { Problem } from "@/components/problem";
import { About } from "@/components/about";
import Features from "@/components/features";
import { ModuleShowcase } from "@/components/module-showcase";
import { SolutionsSection } from "@/components/solutions-section";
import { Integrations } from "@/components/integrations";
import { Testimonials } from "@/components/testimonials";
import { Pricing } from "@/components/pricing";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <About />
      <Features />
      <ModuleShowcase />
      <SolutionsSection />
      <Integrations />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
