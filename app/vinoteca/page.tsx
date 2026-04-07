import type { Metadata } from "next";
import { HeroVinoteca } from "@/components/hero-vinoteca";
import Features from "@/components/features";
import { ProductShowcase } from "@/components/product-showcase";
import { Testimonials } from "@/components/testimonials";
import { Pricing } from "@/components/pricing";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { CrossNav } from "@/components/cross-nav";
import { nichoData } from "@/lib/nicho-data";

export const metadata: Metadata = {
  title: "Nexus para Vinotecas | Control de Stock Vinoteca - Catálogo Premium Sincronizado",
  description:
    "Tu catálogo premium, sincronizado. No pierdas la venta de ese vino especial porque la última botella está en la estantería, pero tu web dice que hay 0. Controla tu bodega, tienda y ventas online en tiempo real.",
  keywords: [
    "control de stock vinoteca",
    "vender vinos online y en tienda",
    "gestión de inventario licorería",
    "catálogo sincronizado",
    "software vinoteca",
    "control bodega vinos",
    "venta vinos delivery",
  ],
  alternates: { canonical: "https://nexuscrm.com/vinoteca" },
  openGraph: {
    title: "Nexus para Vinotecas | Catálogo premium sincronizado en tiempo real",
    description:
      "Controlá tu bodega, tienda y ventas online en tiempo real. Nunca más pierdas una venta por stock desactualizado.",
    url: "https://nexuscrm.com/vinoteca",
  },
};

const data = nichoData.vinoteca;

export default function VinotecaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroVinoteca />
      <Features title={data.features.title} features={data.features.items} />
      <ProductShowcase />
      <Testimonials />
      <Pricing />
      <CTA />
      <CrossNav currentPath="/vinoteca" />
      <Footer />
    </div>
  );
}
