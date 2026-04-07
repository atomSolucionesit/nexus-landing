"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeftRight } from "lucide-react";
import { useEffect, useState } from "react";

// Hero exclusivo para la landing de importadoras y distribuidoras.
// Paleta: cian eléctrico + azul índigo — evoca tecnología, flujo de datos, distribución a escala.
export function HeroImportadora() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-20 lg:pt-36 lg:pb-32">

      {/* Orbs de fondo — cian y azul índigo */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-600/10 blur-3xl animate-orb-drift" />
        <div className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-3xl animate-orb-drift delay-1000" />
        <div className="absolute left-0 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-800/8 blur-3xl animate-orb-drift delay-2000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">

          {/* Columna izquierda — copy */}
          <div className="mx-auto max-w-2xl lg:mx-0 animate-fade-in-up">

            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 backdrop-blur-sm">
              <ArrowLeftRight className="h-4 w-4" />
              Solución para importadoras y distribuidoras
            </div>

            <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl leading-tight">
              Tu hub de{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                distribución
              </span>{" "}
              inteligente.
            </h1>

            <h2 className="mb-4 text-xl font-semibold text-cyan-300">
              Separá y sincronizá stock mayorista y minorista desde una sola plataforma
            </h2>

            <p className="mb-10 text-lg text-muted-foreground sm:text-xl leading-relaxed">
              Gestioná venta mayorista B2B a retailers y venta minorista B2C por ecommerce y MercadoLibre
              desde el mismo sistema. Maximizá la rotación sin conflictos entre canales.
            </p>

            <div className="flex flex-col items-start gap-4 sm:flex-row">
              <Button
                size="lg"
                className="group w-full sm:w-auto bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 border-0 shadow-lg shadow-cyan-900/40 hover:shadow-cyan-800/50 hover:scale-105 transition-all duration-300"
                onClick={() =>
                  window.open(
                    "https://wa.me/543772430213?text=Hola,%20me%20interesa%20Nexus%20para%20mi%20importadora",
                    "_blank"
                  )
                }
              >
                Optimizar mi Distribución
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400/50 transition-all duration-300"
                onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
              >
                Ver Demo para Importadoras
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              {[
                { value: "B2B", label: "y B2C desde una sola plataforma" },
                { value: "0", label: "conflictos de stock entre canales" },
                { value: "Multi", label: "depósito con trazabilidad completa" },
              ].map((stat) => (
                <div key={stat.label} className="group cursor-default">
                  <div className="text-2xl font-bold text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground leading-snug">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Columna derecha — panel de distribución B2B / B2C */}
          <div
            className="relative animate-fade-in-right"
            style={{ transform: `translateY(${scrollY * 0.06}px)` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-indigo-900/15 blur-3xl rounded-full scale-110 animate-pulse" />

            <div className="relative z-10 rounded-2xl border border-cyan-500/20 bg-card/40 backdrop-blur-sm p-8 shadow-2xl shadow-cyan-900/10">

              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">Hub de Distribución</p>
                  <p className="text-lg font-bold text-foreground">Stock separado por canal</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-xs text-cyan-400">En vivo</span>
                </div>
              </div>

              {/* Separación B2B / B2C */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-4">
                  <p className="text-xs font-bold text-cyan-300 uppercase tracking-wider mb-2">Canal B2B</p>
                  <p className="text-2xl font-bold text-foreground">1.240</p>
                  <p className="text-xs text-muted-foreground">unidades reservadas</p>
                  <div className="mt-3 space-y-1">
                    {["Retailer Norte", "Distribuidora Sur", "Cadena ABC"].map((c) => (
                      <div key={c} className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{c}</span>
                        <span className="text-xs text-cyan-400">Activo</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-4">
                  <p className="text-xs font-bold text-indigo-300 uppercase tracking-wider mb-2">Canal B2C</p>
                  <p className="text-2xl font-bold text-foreground">380</p>
                  <p className="text-xs text-muted-foreground">unidades disponibles</p>
                  <div className="mt-3 space-y-1">
                    {["MercadoLibre", "Tienda Online", "WhatsApp"].map((c) => (
                      <div key={c} className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{c}</span>
                        <span className="text-xs text-indigo-400">Activo</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Productos de alta rotación */}
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Alta rotación — últimas 24h
              </p>
              <div className="space-y-2.5 mb-5">
                {[
                  { nombre: "Smart TV 55\" 4K", vendido: 34, canal: "B2C", alerta: false },
                  { nombre: "Auriculares TWS Pro", vendido: 89, canal: "B2B+B2C", alerta: false },
                  { nombre: "Cargador GaN 65W", vendido: 112, canal: "B2C", alerta: true },
                  { nombre: "Tablet 10\" Android", vendido: 21, canal: "B2B", alerta: false },
                ].map((prod) => (
                  <div
                    key={prod.nombre}
                    className="flex items-center justify-between rounded-xl border border-border/50 bg-secondary/20 px-4 py-2.5 hover:border-cyan-500/30 transition-colors duration-200"
                  >
                    <div>
                      <p className="text-xs font-medium text-foreground">{prod.nombre}</p>
                      <p className="text-xs text-muted-foreground">{prod.canal}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-cyan-300">{prod.vendido} u.</p>
                      {prod.alerta && (
                        <p className="text-xs text-amber-400">Reponer pronto</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Aviso */}
              <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 px-4 py-3">
                <p className="text-xs text-cyan-300 font-medium">
                  ✓ Stock B2B y B2C separado automáticamente
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Sin conflictos entre clientes mayoristas y venta directa
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
