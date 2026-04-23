import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | Nexus",
  description: "Política de privacidad y tratamiento de datos personales de la plataforma Nexus.",
};

export default function PrivacidadPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-28 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h1 className="text-3xl font-bold text-foreground mb-2">Política de Privacidad</h1>
          <p className="text-sm text-muted-foreground mb-10">Última actualización: abril de 2026</p>

          <div className="space-y-10 text-muted-foreground leading-relaxed">

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">1. Responsable del tratamiento</h2>
              <p>Atom Soluciones IT, con domicilio en Cnel. López 699, W3230 Paso de los Libres, Corrientes, Argentina, es responsable del tratamiento de los datos personales recopilados a través de la plataforma nexussoftware.app, en cumplimiento de la Ley 25.326 de Protección de Datos Personales de la República Argentina.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">2. Datos que recopilamos</h2>
              <p>Nexus recopila los siguientes tipos de datos:</p>
              <ul className="mt-2 space-y-1 list-disc list-inside">
                <li><strong className="text-foreground">Datos del titular de la cuenta:</strong> nombre, correo electrónico, teléfono y datos de la empresa al momento del registro.</li>
                <li><strong className="text-foreground">Datos operativos del negocio:</strong> productos, stock, clientes, ventas, proveedores y cualquier otra información cargada por el usuario para operar su negocio.</li>
                <li><strong className="text-foreground">Datos de uso:</strong> accesos a la plataforma, funcionalidades utilizadas y errores registrados, con fines de mejora del servicio.</li>
                <li><strong className="text-foreground">Datos técnicos:</strong> dirección IP, tipo de dispositivo, navegador y sistema operativo.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">3. Finalidad del tratamiento</h2>
              <p>Los datos son utilizados exclusivamente para:</p>
              <ul className="mt-2 space-y-1 list-disc list-inside">
                <li>Prestar el Servicio contratado y sus funcionalidades.</li>
                <li>Gestionar la relación comercial con el usuario (facturación, soporte, comunicaciones del servicio).</li>
                <li>Mejorar la plataforma mediante análisis de uso agregado y anónimo.</li>
                <li>Cumplir con obligaciones legales aplicables.</li>
              </ul>
              <p className="mt-2">Nexus no utilizará los datos del usuario ni de los clientes finales del negocio para fines publicitarios propios ni de terceros.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">4. Almacenamiento y seguridad</h2>
              <p>Los datos son almacenados en servidores en la nube provistos por proveedores de infraestructura de clase mundial (Amazon Web Services, Google Cloud o Microsoft Azure), que cuentan con certificaciones de seguridad internacionales. Nexus implementa medidas técnicas y organizativas para proteger los datos contra accesos no autorizados, pérdida o alteración.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">5. Datos de clientes finales (encargo del tratamiento)</h2>
              <p>Cuando un negocio carga información de sus propios clientes en la plataforma, Nexus actúa como encargado del tratamiento y no como responsable. Los datos de los clientes finales pertenecen al negocio que los cargó, quien es responsable de haberlos obtenido de forma lícita y con el consentimiento correspondiente.</p>
              <p className="mt-2">Nexus no accederá a dichos datos salvo para prestar el Servicio o cuando así lo exija la ley.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">6. Retención y eliminación</h2>
              <p>Los datos se conservan durante la vigencia del contrato de servicio. Ante la cancelación de la cuenta, los datos permanecerán disponibles por 30 días para que el usuario pueda exportarlos. Transcurrido ese plazo, serán eliminados de forma permanente de los sistemas de Nexus.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">7. Derechos del usuario (ARCO)</h2>
              <p>De acuerdo con la Ley 25.326, el usuario tiene derecho a acceder, rectificar, cancelar y oponerse al tratamiento de sus datos personales. Para ejercer estos derechos puede contactarse a través de:</p>
              <ul className="mt-2 space-y-1 list-disc list-inside">
                <li>WhatsApp: +54 3772 430213</li>
                <li>Formulario de contacto en nexussoftware.app</li>
              </ul>
              <p className="mt-2">Nexus responderá las solicitudes dentro de los plazos previstos por la normativa vigente.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">8. Transferencia de datos a terceros</h2>
              <p>Nexus no vende ni cede datos personales a terceros. Únicamente comparte datos con proveedores de infraestructura estrictamente necesarios para prestar el Servicio, quienes están obligados contractualmente a protegerlos. Las integraciones activadas por el usuario (MercadoLibre, WhatsApp, etc.) implican que dichos datos son también tratados bajo las políticas de privacidad de cada plataforma.</p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
