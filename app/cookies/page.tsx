import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies | Nexus",
  description: "Política de uso de cookies de la plataforma Nexus.",
};

export default function CookiesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-28 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h1 className="text-3xl font-bold text-foreground mb-2">Política de Cookies</h1>
          <p className="text-sm text-muted-foreground mb-10">Última actualización: abril de 2026</p>

          <div className="space-y-10 text-muted-foreground leading-relaxed">

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">1. ¿Qué son las cookies?</h2>
              <p>Las cookies son pequeños archivos de texto que se almacenan en el dispositivo del usuario al navegar por un sitio web. Permiten que el sitio recuerde información de la sesión y preferencias del usuario entre visitas.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">2. Tipos de cookies que utilizamos</h2>
              <ul className="space-y-3 list-disc list-inside">
                <li><strong className="text-foreground">Cookies estrictamente necesarias:</strong> indispensables para el funcionamiento de la plataforma. Sin ellas, no es posible iniciar sesión, mantener la sesión activa ni acceder a las funcionalidades del Servicio. No pueden desactivarse.</li>
                <li><strong className="text-foreground">Cookies de preferencias:</strong> recuerdan configuraciones del usuario, como idioma o preferencias de visualización.</li>
                <li><strong className="text-foreground">Cookies analíticas:</strong> permiten medir el uso de la plataforma de forma agregada y anónima, para mejorar la experiencia. Pueden desactivarse sin afectar el funcionamiento del Servicio.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">3. Cookies de terceros</h2>
              <p>Nexus puede utilizar herramientas de análisis de terceros (como Google Analytics u otras equivalentes) que instalan sus propias cookies. Estas herramientas solo acceden a datos agregados y anónimos. Su uso está sujeto a las políticas de privacidad de cada proveedor.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">4. Control de cookies</h2>
              <p>El usuario puede configurar su navegador para bloquear o eliminar cookies. Sin embargo, desactivar las cookies estrictamente necesarias puede impedir el correcto funcionamiento de la plataforma.</p>
              <p className="mt-2">La mayoría de los navegadores permiten gestionar las cookies desde su configuración: Chrome, Firefox, Safari y Edge incluyen opciones para ver, bloquear o eliminar cookies por sitio.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">5. Actualización de esta política</h2>
              <p>Esta política puede actualizarse para reflejar cambios en las herramientas utilizadas o en la normativa aplicable. Se notificará a los usuarios en caso de cambios significativos.</p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
