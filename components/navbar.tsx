"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border/50 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 animate-fade-in">
            <div className="relative w-10 h-10 md:w-12 md:h-12 transition-transform hover:scale-110 duration-300">
              <Image
                src="/images/logo-nexus.png"
                alt="Nexus Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              NEXUS
            </span>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3 md:gap-4 animate-fade-in-delay">
            <Button
              variant="ghost"
              className="text-sm md:text-base hover:bg-primary/10 hover:text-primary transition-all duration-300"
              onClick={() =>
                window.open("https://nexus.atomsolucionesit.com.ar", "_blank")
              }
            >
              Iniciar sesión
            </Button>
            <Button
              className="text-sm md:text-base bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              onClick={() =>
                window.open(
                  "https://wa.me/5491126678238?text=Hola,%20me%20interesa%20probar%20Nexus",
                  "_blank"
                )
              }
            >
              Probar Nexus
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
