import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones | Nexus",
  description: "Términos y condiciones de uso de la plataforma Nexus.",
};

export default function TerminosPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-28 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h1 className="text-3xl font-bold text-foreground mb-2">Términos y Condiciones</h1>
          <p className="text-sm text-muted-foreground mb-10">Última actualización: abril de 2026</p>

          <div className="space-y-10 text-muted-foreground leading-relaxed">

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">1. Aceptación de los términos</h2>
              <p>Al registrarse, acceder o utilizar la plataforma Nexus (en adelante, "el Servicio"), el usuario acepta quedar vinculado por estos Términos y Condiciones. Si no está de acuerdo con alguna de las condiciones aquí establecidas, no debe utilizar el Servicio.</p>
              <p className="mt-2">El Servicio es operado por Atom Soluciones IT, con domicilio en Cnel. López 699, W3230 Paso de los Libres, Corrientes, Argentina.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">2. Descripción del servicio</h2>
              <p>Nexus es una plataforma SaaS de gestión comercial integral diseñada para distribuidoras, mayoristas e importadoras. Permite centralizar y automatizar la operación completa: stock multi-depósito, pedidos mayoristas, logística, cuentas corrientes de clientes, proveedores y canales de venta físicos y digitales desde un único sistema.</p>
              <p className="mt-2">El Servicio incluye integraciones con plataformas de terceros como MercadoLibre, MercadoPago, WhatsApp Business, Instagram y Facebook, así como funcionalidades específicas para operaciones de volumen como trazabilidad de pedidos, gestión de repartidores y control de cuentas corrientes mayoristas.</p>
              <p className="mt-2">Nexus se reserva el derecho de modificar, suspender o discontinuar funcionalidades del Servicio en cualquier momento, notificando a los usuarios con al menos 15 días de anticipación cuando los cambios sean significativos.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">3. Elegibilidad</h2>
              <p>El Servicio está disponible para personas físicas mayores de 18 años y personas jurídicas legalmente constituidas. Al registrarse, el usuario declara tener capacidad legal para celebrar contratos vinculantes.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">4. Planes y facturación</h2>
              <p>Nexus ofrece distintos planes de suscripción con precios en pesos argentinos, detallados en la página de precios. Los planes se abonan de forma mensual y no incluyen costos ocultos ni tarifas de instalación.</p>
              <p className="mt-2">Todos los planes incluyen un período de prueba gratuita de 30 días sin requerir tarjeta de crédito. Al finalizar dicho período, el usuario deberá contratar un plan pago para continuar utilizando el Servicio.</p>
              <p className="mt-2">Los precios pueden modificarse con un mínimo de 30 días de aviso previo al usuario.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">5. Política de cancelación y reembolsos</h2>
              <p>El usuario puede cancelar su suscripción en cualquier momento desde la plataforma o contactando al equipo de Nexus. La cancelación tiene efecto al final del período de facturación en curso. No se realizarán reembolsos por períodos parciales ya abonados.</p>
              <p className="mt-2">Tras la cancelación, los datos del usuario permanecerán disponibles por un período de 30 días, durante los cuales podrá exportarlos desde la plataforma. Transcurrido ese plazo, los datos serán eliminados de forma permanente de los servidores de Nexus.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">6. Uso aceptable</h2>
              <p>El usuario se compromete a utilizar el Servicio únicamente para fines lícitos y de acuerdo con la normativa argentina vigente. Queda prohibido:</p>
              <ul className="mt-2 space-y-1 list-disc list-inside">
                <li>Utilizar el Servicio para registrar operaciones comerciales fraudulentas o ilegales.</li>
                <li>Intentar acceder sin autorización a sistemas, datos o cuentas de otros usuarios.</li>
                <li>Reproducir, distribuir o revender el Servicio sin autorización expresa de Nexus.</li>
                <li>Utilizar la integración con AFIP para emitir comprobantes falsos o irregulares.</li>
              </ul>
              <p className="mt-2">Nexus se reserva el derecho de suspender o dar de baja cuentas que incumplan estas condiciones, sin obligación de reembolso.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">7. Limitación de responsabilidad</h2>
              <p>El Servicio se provee "tal cual" y "según disponibilidad". Si bien Nexus procura mantener una disponibilidad del 99,9%, no garantiza que el Servicio estará libre de interrupciones o errores en todo momento.</p>
              <p className="mt-2">Nexus no será responsable por pérdidas de ventas, lucro cesante, daños indirectos o consecuentes derivados de interrupciones del servicio, pérdida de datos o fallas de integraciones de terceros. La responsabilidad total de Nexus frente al usuario no podrá superar el monto abonado por el usuario en el mes en que ocurrió el perjuicio.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">8. Integraciones de terceros</h2>
              <p>Nexus se integra con plataformas de terceros (MercadoLibre, MercadoPago, WhatsApp Business, Instagram, Facebook, entre otras). El uso de dichas integraciones está sujeto a los términos y condiciones propios de cada plataforma. Nexus no se responsabiliza por cambios en las APIs, interrupciones o modificaciones en las condiciones de uso de servicios de terceros.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">9. Propiedad intelectual</h2>
              <p>Todo el contenido, código, diseño y funcionalidades de la plataforma Nexus son propiedad exclusiva de Nexus o sus licenciantes. El usuario no adquiere ningún derecho de propiedad intelectual sobre el Servicio por el hecho de contratarlo.</p>
              <p className="mt-2">Los datos cargados por el usuario (productos, clientes, ventas, etc.) son y permanecen de su exclusiva propiedad. Nexus no utilizará dichos datos para fines distintos a la prestación del Servicio.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">10. Modificaciones y jurisdicción</h2>
              <p>Nexus podrá actualizar estos Términos y Condiciones en cualquier momento. Los cambios serán notificados por correo electrónico o mediante aviso en la plataforma. El uso continuado del Servicio tras la notificación implica la aceptación de los nuevos términos.</p>
              <p className="mt-2">Estos términos se rigen por las leyes de la República Argentina. Cualquier controversia será sometida a la jurisdicción de los tribunales ordinarios de la ciudad de Paso de los Libres, Corrientes.</p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
