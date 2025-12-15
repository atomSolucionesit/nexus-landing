import type { Metadata } from "next";
import Hero from "@/components/hero";
import Features from "@/components/features";
import { ProductShowcase } from "@/components/product-showcase";
import { Testimonials } from "@/components/testimonials";
import { Pricing } from "@/components/pricing";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { nichoData } from "@/lib/nicho-data";

export const metadata: Metadata = {
  title: "Nexus para Vinotecas | Control de Stock Vinoteca - Catálogo Premium Sincronizado",
  description: "Tu catálogo premium, sincronizado. No pierdas la venta de ese vino especial porque la última botella está en la estantería, pero tu web dice que hay 0. Controla tu bodega, tienda y ventas online en tiempo real.",
  keywords: [
    "control de stock vinoteca",
    "vender vinos online y en tienda",
    "gestión de inventario licorería",
    "catálogo sincronizado",
    "software vinoteca",
    "control bodega vinos",
    "venta vinos delivery"
  ],
};

const data = nichoData.vinoteca;

export default function VinotecaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero 
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        description={data.hero.description}
        primaryCTA={data.hero.primaryCTA}
        secondaryCTA={data.hero.secondaryCTA}
      />
      <Features 
        title={data.features.title}
        features={data.features.items}
      />
      <ProductShowcase />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}