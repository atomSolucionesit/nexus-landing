"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

// Hero exclusivo para la landing de vendedores de MercadoLibre.
// Paleta: amarillo ML + naranja — reconocible al instante, transmite marketplace y ventas.
export function HeroMercadoLibre() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-20 lg:pt-36 lg:pb-32">

      {/* Orbs de fondo — amarillo y naranja ML */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-3xl animate-orb-drift" />
        <div className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-3xl animate-orb-drift delay-1000" />
        <div className="absolute left-0 bottom-0 h-[400px] w-[400px] rounded-full bg-yellow-600/8 blur-3xl animate-orb-drift delay-2000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">

          {/* Columna izquierda — copy */}
          <div className="mx-auto max-w-2xl lg:mx-0 animate-fade-in-up">

            {/* Badge ML */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-yellow-500/40 bg-yellow-500/10 px-4 py-2 text-sm font-medium text-yellow-300 backdrop-blur-sm">
              <TrendingUp className="h-4 w-4" />
              Integración oficial con MercadoLibre
            </div>

            <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl leading-tight">
              Conectá tu depósito{" "}
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                con ML
              </span>{" "}
              automáticamente.
            </h1>

            <h2 className="mb-4 text-xl font-semibold text-yellow-300">
              Dejá de subir y bajar stock a mano
            </h2>

            <p className="mb-10 text-lg text-muted-foreground sm:text-xl leading-relaxed">
              Cada venta en tu local descuenta automáticamente tu stock en MercadoLibre, y viceversa.
              Terminá con la doble carga y evitá vender lo que no tenés.
            </p>

            <div className="flex flex-col items-start gap-4 sm:flex-row">
              <Button
                size="lg"
                className="group w-full sm:w-auto bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black border-0 font-bold shadow-lg shadow-yellow-900/30 hover:shadow-yellow-800/40 hover:scale-105 transition-all duration-300"
                onClick={() =>
                  window.open(
                    "https://wa.me/543772430213?text=Hola,%20me%20interesa%20conectar%20MercadoLibre%20con%20Nexus",
                    "_blank"
                  )
                }
              >
                Conectar con MercadoLibre
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-yellow-500/30 text-yellow-300 hover:bg-yellow-500/10 hover:border-yellow-400/50 transition-all duration-300"
                onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
              >
                Ver Integración ML
              </Button>
            </div>

            {/* Stats de ML */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              {[
                { value: "0s", label: "de delay en sincronización de stock" },
                { value: "100%", label: "de publicaciones actualizadas automáticamente" },
                { value: "2x", label: "más ventas sin doble carga manual" },
              ].map((stat) => (
                <div key={stat.label} className="group cursor-default">
                  <div className="text-2xl font-bold text-yellow-400 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground leading-snug">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Columna derecha — panel de órdenes ML */}
          <div
            className="relative animate-fade-in-right"
            style={{ transform: `translateY(${scrollY * 0.06}px)` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 to-orange-900/15 blur-3xl rounded-full scale-110 animate-pulse" />

            <div className="relative z-10 rounded-2xl border border-yellow-500/20 bg-card/40 backdrop-blur-sm p-8 shadow-2xl shadow-yellow-900/10">

              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">Panel ML</p>
                  <p className="text-lg font-bold text-foreground">Órdenes del día</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-yellow-400 animate-pulse" />
                  <span className="text-xs text-yellow-400">Sincronizado</span>
                </div>
              </div>

              {/* Métricas rápidas */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { label: "Órdenes hoy", value: "47", color: "text-yellow-400" },
                  { label: "Facturado", value: "$284k", color: "text-emerald-400" },
                  { label: "Stock bajo", value: "3", color: "text-rose-400" },
                ].map((m) => (
                  <div key={m.label} className="rounded-xl border border-border/50 bg-secondary/20 p-3 text-center">
                    <p className={`text-xl font-bold ${m.color}`}>{m.value}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{m.label}</p>
                  </div>
                ))}
              </div>

              {/* Lista de órdenes recientes */}
              <div className="space-y-2.5 mb-5">
                {[
                  { id: "#ML-8821", producto: "Auriculares Bluetooth", qty: 2, estado: "Vendido", canal: "ML" },
                  { id: "#ML-8820", producto: "Cargador USB-C 65W", qty: 1, estado: "Enviado", canal: "ML" },
                  { id: "#LOC-441", producto: "Auriculares Bluetooth", qty: 1, estado: "Vendido", canal: "Local" },
                  { id: "#ML-8819", producto: "Mouse Inalámbrico", qty: 3, estado: "Pendiente", canal: "ML" },
                ].map((orden) => (
                  <div
                    key={orden.id}
                    className="flex items-center justify-between rounded-xl border border-border/50 bg-secondary/20 px-4 py-2.5 hover:border-yellow-500/30 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                        orden.canal === "ML"
                          ? "bg-yellow-500/20 text-yellow-300"
                          : "bg-blue-500/20 text-blue-300"
                      }`}>
                        {orden.canal}
                      </span>
                      <div>
                        <p className="text-xs font-medium text-foreground">{orden.producto}</p>
                        <p className="text-xs text-muted-foreground">{orden.id} · x{orden.qty}</p>
                      </div>
                    </div>
                    <span className={`text-xs font-semibold ${
                      orden.estado === "Vendido" ? "text-emerald-400" :
                      orden.estado === "Enviado" ? "text-blue-400" : "text-amber-400"
                    }`}>
                      {orden.estado}
                    </span>
                  </div>
                ))}
              </div>

              {/* Aviso de sincronización automática */}
              <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/5 px-4 py-3">
                <p className="text-xs text-yellow-300 font-medium">
                  ✓ Stock actualizado automáticamente en todas las publicaciones
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Última sincronización: hace 12 segundos
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
