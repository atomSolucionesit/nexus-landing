"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Wine } from "lucide-react";
import { useEffect, useState } from "react";

// Hero exclusivo para la landing de vinotecas.
// Paleta: púrpura profundo + borgoña + dorado — evoca vino premium, bodega, lujo.
export function HeroVinoteca() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-20 lg:pt-36 lg:pb-32">

      {/* Orbs de fondo — tonos vino y púrpura */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-purple-900/20 blur-3xl animate-orb-drift" />
        <div className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-rose-900/15 blur-3xl animate-orb-drift delay-1000" />
        <div className="absolute left-0 bottom-0 h-[400px] w-[400px] rounded-full bg-violet-900/10 blur-3xl animate-orb-drift delay-2000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">

          {/* Columna izquierda — copy */}
          <div className="mx-auto max-w-2xl lg:mx-0 animate-fade-in-up">

            {/* Badge de industria */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300 backdrop-blur-sm">
              <Wine className="h-4 w-4" />
              Solución para vinotecas y licorerías
            </div>

            <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl leading-tight">
              Tu catálogo{" "}
              <span className="bg-gradient-to-r from-purple-400 via-rose-400 to-purple-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                premium
              </span>
              ,{" "}
              <br className="hidden sm:block" />
              sincronizado.
            </h1>

            <h2 className="mb-4 text-xl font-semibold text-purple-300">
              Controlá tu bodega, tienda y ventas online en tiempo real
            </h2>

            <p className="mb-10 text-lg text-muted-foreground sm:text-xl leading-relaxed">
              No pierdas la venta de ese vino especial porque la última botella está en la estantería
              pero tu web dice que hay 0. Cada canal actualizado al instante.
            </p>

            <div className="flex flex-col items-start gap-4 sm:flex-row">
              <Button
                size="lg"
                className="group w-full sm:w-auto bg-gradient-to-r from-purple-600 to-rose-600 hover:from-purple-500 hover:to-rose-500 border-0 shadow-lg shadow-purple-900/40 hover:shadow-purple-800/50 hover:scale-105 transition-all duration-300"
                onClick={() =>
                  window.open(
                    "https://wa.me/543772430213?text=Hola,%20me%20interesa%20Nexus%20para%20mi%20vinoteca",
                    "_blank"
                  )
                }
              >
                Sincronizar mi Vinoteca
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-purple-500/30 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400/50 transition-all duration-300"
                onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
              >
                Ver Demo para Vinotecas
              </Button>
            </div>

            {/* Stats específicos de vinoteca */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              {[
                { value: "0", label: "ventas perdidas por stock desactualizado" },
                { value: "100%", label: "sincronización en tiempo real" },
                { value: "Multi", label: "canal: tienda, web y delivery" },
              ].map((stat) => (
                <div key={stat.label} className="group cursor-default">
                  <div className="text-2xl font-bold text-purple-400 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground leading-snug">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Columna derecha — visual decorativo de bodega */}
          <div
            className="relative animate-fade-in-right"
            style={{ transform: `translateY(${scrollY * 0.06}px)` }}
          >
            {/* Glow de fondo */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-rose-900/20 blur-3xl rounded-full scale-110 animate-pulse" />

            <div className="relative z-10 rounded-2xl border border-purple-500/20 bg-card/40 backdrop-blur-sm p-8 shadow-2xl shadow-purple-900/20">

              {/* Header del panel */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">Panel de Bodega</p>
                  <p className="text-lg font-bold text-foreground">Stock en tiempo real</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs text-emerald-400">En vivo</span>
                </div>
              </div>

              {/* Lista de vinos */}
              <div className="space-y-3 mb-6">
                {[
                  { name: "Malbec Reserva 2021", bodega: "Zuccardi", stock: 12, precio: "$8.400", estado: "ok" },
                  { name: "Cabernet Gran Reserva", bodega: "Catena Zapata", stock: 3, precio: "$24.900", estado: "bajo" },
                  { name: "Chardonnay Edición Limitada", bodega: "Achaval Ferrer", stock: 1, precio: "$18.200", estado: "crítico" },
                  { name: "Torrontés Premium", bodega: "La Riojana", stock: 8, precio: "$6.100", estado: "ok" },
                ].map((vino) => (
                  <div
                    key={vino.name}
                    className="flex items-center justify-between rounded-xl border border-border/50 bg-secondary/20 px-4 py-3 hover:border-purple-500/30 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-3">
                      {/* Ícono de botella con color según estado */}
                      <span className="text-xl">🍷</span>
                      <div>
                        <p className="text-sm font-medium text-foreground leading-tight">{vino.name}</p>
                        <p className="text-xs text-muted-foreground">{vino.bodega}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-purple-300">{vino.precio}</p>
                      <p className={`text-xs font-medium ${
                        vino.estado === "ok" ? "text-emerald-400" :
                        vino.estado === "bajo" ? "text-amber-400" : "text-rose-400"
                      }`}>
                        {vino.stock} {vino.stock === 1 ? "botella" : "botellas"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Alerta de stock crítico */}
              <div className="rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="text-sm">⚠️</span>
                  <div>
                    <p className="text-xs font-semibold text-rose-300">Alerta de stock crítico</p>
                    <p className="text-xs text-muted-foreground">Chardonnay Edición Limitada — última botella</p>
                  </div>
                </div>
              </div>

              {/* Club Amigos + Mesas */}
              <div className="mt-4 grid grid-cols-2 gap-2">
                <div className="rounded-lg border border-purple-500/20 bg-purple-500/10 px-3 py-2">
                  <p className="text-xs font-semibold text-purple-300">⭐ Club Amigos</p>
                  <p className="text-xs text-muted-foreground">Puntos y descuentos por nivel</p>
                </div>
                <div className="rounded-lg border border-rose-500/20 bg-rose-500/10 px-3 py-2">
                  <p className="text-xs font-semibold text-rose-300">🍽️ Mesas</p>
                  <p className="text-xs text-muted-foreground">Bar y salón integrado</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
