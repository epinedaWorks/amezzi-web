import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { EncabezadoPagina, ListaCheck } from "@/components/Bloques";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Solicite una propuesta de capacitación, consultoría o desarrollo de software a Amezzi Tech.",
};

export default function Contacto() {
  return (
    <>
      <EncabezadoPagina
        etiqueta="Contacto"
        titulo="Solicite una propuesta"
        texto="Cuéntenos sobre su empresa y lo que necesita. Le responderemos con los siguientes pasos."
      />
      <section className="bg-fondo">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-marca">¿Qué sucede después?</h2>
            <div className="mt-6">
              <ListaCheck
                items={[
                  "Revisamos su solicitud y le contactamos para entender el contexto.",
                  "Si aplica, agendamos una sesión breve de diagnóstico.",
                  "Le enviamos una propuesta con alcance, tiempos y costos.",
                ]}
              />
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
