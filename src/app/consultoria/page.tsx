import type { Metadata } from "next";
import { EncabezadoPagina, Etiqueta, ListaCheck, LlamadoFinal, Titulo } from "@/components/Bloques";
import { CONSULTORIA } from "@/lib/contenido";

export const metadata: Metadata = {
  title: "Consultoría y asesoría tecnológica",
  description: "Consultoría en infraestructura AWS y desarrollo de modelos de inteligencia artificial propios con Python.",
};

export default function Consultoria() {
  return (
    <>
      <EncabezadoPagina
        etiqueta="02 · Consultoría y asesoría"
        titulo="Infraestructura en la nube e inteligencia artificial hecha en casa"
        texto="Acompañamos a su empresa en las decisiones técnicas que más impacto tienen: dónde y cómo correr sus sistemas, y cómo convertir sus datos en modelos propios."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-6xl space-y-6 px-4 py-20 sm:px-6">
          {CONSULTORIA.map((c, i) => (
            <article
              key={c.titulo}
              className="grid gap-8 rounded-lg border border-borde p-8 md:grid-cols-[1.2fr_1fr] md:p-10"
            >
              <div>
                <span className="font-serif text-lg text-acento">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="mt-2 font-serif text-2xl font-semibold text-marca sm:text-3xl">{c.titulo}</h2>
                <p className="mt-4 leading-relaxed text-tenue">{c.texto}</p>
              </div>
              <div className="md:border-l md:border-linea md:pl-8">
                <ListaCheck items={c.puntos} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="reticula bg-marca text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <Etiqueta claro>Nuestro enfoque en IA</Etiqueta>
            <Titulo claro>Más allá de consumir una API</Titulo>
          </div>
          <div className="space-y-4 leading-relaxed text-white/75">
            <p>
              Los servicios de IA genéricos resuelven problemas genéricos. Cuando el valor está en los datos propios de
              la empresa — sus imágenes, sus históricos, sus documentos — desarrollamos y entrenamos modelos con Python
              que se ajustan a ese contexto.
            </p>
            <p>
              El resultado es un modelo que su organización controla: dónde se ejecuta, qué datos ve, cómo se mide y
              cuándo se reentrena.
            </p>
          </div>
        </div>
      </section>

      <LlamadoFinal titulo="Agende una sesión de diagnóstico" />
    </>
  );
}
