import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Features } from "@/components/features";
import { ModuleShowcase } from "@/components/module-showcase";
import { Integrations } from "@/components/integrations";
import { Industries } from "@/components/industries";
import { Testimonials } from "@/components/testimonials";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <ModuleShowcase />
      <Integrations />
      <Industries />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}