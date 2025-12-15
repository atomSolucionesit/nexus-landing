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
  title: "Nexus para Importadoras | Gestión Stock Importadora - Separar Stock Mayorista y Minorista",
  description: "Tu hub de distribución inteligente. Separa y sincroniza stock para venta mayorista (a tus clientes retailers) y venta minorista (tu ecommerce/ML) desde la misma plataforma. Maximiza la rotación sin conflictos.",
  keywords: [
    "gestión stock importadora",
    "separar stock mayorista y minorista",
    "vender tecnología multicanal",
    "plataforma para distribuidores",
    "software importadora",
    "distribución B2B B2C",
    "rotación stock tecnología"
  ],
};

const data = nichoData.importadora;

export default function ImportadoraPage() {
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