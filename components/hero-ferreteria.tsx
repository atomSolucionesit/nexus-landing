"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Wrench } from "lucide-react";
import { useEffect, useState } from "react";

// Hero exclusivo para la landing de ferreterías.
// Paleta: naranja industrial + gris acero — evoca herramientas, trabajo físico, precisión.
export function HeroFerreteria() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-20 lg:pt-36 lg:pb-32">

      {/* Orbs de fondo — naranja industrial y gris acero */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-orange-600/10 blur-3xl animate-orb-drift" />
        <div className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-amber-600/8 blur-3xl animate-orb-drift delay-1000" />
        <div className="absolute left-0 bottom-0 h-[400px] w-[400px] rounded-full bg-orange-800/8 blur-3xl animate-orb-drift delay-2000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">

          {/* Columna izquierda — copy */}
          <div className="mx-auto max-w-2xl lg:mx-0 animate-fade-in-up">

            {/* Badge ferretería */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-300 backdrop-blur-sm">
              <Wrench className="h-4 w-4" />
              Solución para ferreterías y corralones
            </div>

            <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl leading-tight">
              Dejá de decir{" "}
              <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                "se lo vendieron ayer"
              </span>
            </h1>

            <h2 className="mb-4 text-xl font-semibold text-orange-300">
              Sincronizá tu ferretería física con tu tienda online y MercadoLibre
            </h2>

            <p className="mb-10 text-lg text-muted-foreground sm:text-xl leading-relaxed">
              Vendé cada tornillo, herramienta y pintura una sola vez, en el canal correcto.
              Evitá las malas reviews por vender productos que ya no tenés.
            </p>

            <div className="flex flex-col items-start gap-4 sm:flex-row">
              <Button
                size="lg"
                className="group w-full sm:w-auto bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 border-0 shadow-lg shadow-orange-900/40 hover:shadow-orange-800/50 hover:scale-105 transition-all duration-300"
                onClick={() =>
                  window.open(
                    "https://wa.me/543772430213?text=Hola,%20me%20interesa%20Nexus%20para%20mi%20ferretería",
                    "_blank"
                  )
                }
              >
                Sincronizar mi Ferretería
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-orange-500/30 text-orange-300 hover:bg-orange-500/10 hover:border-orange-400/50 transition-all duration-300"
                onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
              >
                Ver Demo para Ferreterías
              </Button>
            </div>

            {/* Stats de ferretería */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              {[
                { value: "0", label: "ventas duplicadas entre canales" },
                { value: "+3000", label: "SKUs gestionados sin planillas" },
                { value: "Real", label: "time: stock actualizado al instante" },
              ].map((stat) => (
                <div key={stat.label} className="group cursor-default">
                  <div className="text-2xl font-bold text-orange-400 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground leading-snug">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Columna derecha — panel de stock de ferretería */}
          <div
            className="relative animate-fade-in-right"
            style={{ transform: `translateY(${scrollY * 0.06}px)` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 to-amber-900/15 blur-3xl rounded-full scale-110 animate-pulse" />

            <div className="relative z-10 rounded-2xl border border-orange-500/20 bg-card/40 backdrop-blur-sm p-8 shadow-2xl shadow-orange-900/10">

              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">Control de Stock</p>
                  <p className="text-lg font-bold text-foreground">Ferretería Central</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-orange-400 animate-pulse" />
                  <span className="text-xs text-orange-400">3 canales activos</span>
                </div>
              </div>

              {/* Canales activos */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { label: "Local", ventas: 23, color: "text-orange-400", bg: "bg-orange-500/10 border-orange-500/20" },
                  { label: "MercadoLibre", ventas: 18, color: "text-yellow-400", bg: "bg-yellow-500/10 border-yellow-500/20" },
                  { label: "Tienda Web", ventas: 9, color: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/20" },
                ].map((canal) => (
                  <div key={canal.label} className={`rounded-xl border ${canal.bg} p-3 text-center`}>
                    <p className={`text-xl font-bold ${canal.color}`}>{canal.ventas}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{canal.label}</p>
                  </div>
                ))}
              </div>

              {/* Productos con stock crítico */}
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Alertas de stock
              </p>
              <div className="space-y-2.5 mb-5">
                {[
                  { nombre: "Taladro Percutor 750W", sku: "TAL-750", stock: 2, umbral: 5, canales: ["Local", "ML"] },
                  { nombre: "Pintura Látex Blanco 20L", sku: "PIN-BL20", stock: 0, umbral: 3, canales: ["ML"] },
                  { nombre: "Tornillo Autoperf. 6x1 (x100)", sku: "TOR-AP6", stock: 14, umbral: 10, canales: ["Local", "ML", "Web"] },
                  { nombre: "Llave Inglesa 12\"", sku: "LLA-12", stock: 1, umbral: 4, canales: ["Local"] },
                ].map((prod) => (
                  <div
                    key={prod.sku}
                    className="flex items-center justify-between rounded-xl border border-border/50 bg-secondary/20 px-4 py-2.5 hover:border-orange-500/30 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg">🔧</span>
                      <div>
                        <p className="text-xs font-medium text-foreground leading-tight">{prod.nombre}</p>
                        <p className="text-xs text-muted-foreground">{prod.sku}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`text-sm font-bold ${
                        prod.stock === 0 ? "text-rose-400" :
                        prod.stock <= prod.umbral ? "text-amber-400" : "text-emerald-400"
                      }`}>
                        {prod.stock === 0 ? "Sin stock" : `${prod.stock} u.`}
                      </p>
                      <div className="flex gap-1 justify-end mt-0.5">
                        {prod.canales.map((c) => (
                          <span key={c} className="text-xs text-muted-foreground">{c}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Aviso de sincronización */}
              <div className="rounded-xl border border-orange-500/20 bg-orange-500/5 px-4 py-3">
                <p className="text-xs text-orange-300 font-medium">
                  ✓ Stock sincronizado entre local, ML y tienda web
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Cada venta descuenta automáticamente en todos los canales
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
