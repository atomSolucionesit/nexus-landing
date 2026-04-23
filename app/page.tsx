import { Navbar } from "@/components/navbar";
import Hero from "@/components/hero";
import { Problem } from "@/components/problem";
import { About } from "@/components/about";
import { HowItWorks } from "@/components/how-it-works";
import { Implementation } from "@/components/implementation";
import Features from "@/components/features";
import { ModuleShowcase } from "@/components/module-showcase";
import { SolutionsSection } from "@/components/solutions-section";
import { Integrations } from "@/components/integrations";
import { Testimonials } from "@/components/testimonials";
import { Pricing } from "@/components/pricing";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { SectionDivider } from "@/components/section-divider";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <SectionDivider variant="glow" />
      <Problem />
      <SectionDivider variant="glow" />
      <About />
      <SectionDivider variant="glow" />
      <HowItWorks />
      <SectionDivider variant="wave" flip />
      <Features />
      <SectionDivider variant="glow" />
      <ModuleShowcase />
      <SectionDivider variant="glow" />
      <SolutionsSection />
      <SectionDivider variant="glow" />
      <Integrations />
      <SectionDivider variant="glow" />
      <Testimonials />
      <SectionDivider variant="glow" />
      <Pricing />
      <SectionDivider variant="wave" flip />
      <Implementation />
      <SectionDivider variant="glow" />
      <CTA />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
