import type { Metadata } from "next";
import { EncabezadoPagina, Etiqueta, LlamadoFinal, Titulo } from "@/components/Bloques";
import { DESARROLLO, PROCESO } from "@/lib/contenido";

export const metadata: Metadata = {
  title: "Desarrollo de software a la medida",
  description: "Aplicaciones web, automatización de procesos, integraciones y tableros desarrollados a la medida.",
};

export default function Desarrollo() {
  return (
    <>
      <EncabezadoPagina
        etiqueta="03 · Desarrollo a la medida"
        titulo="Software construido alrededor de sus procesos"
        texto="Cuando una herramienta comercial no se ajusta a la forma en que trabaja su empresa, desarrollamos la que sí lo hace."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Etiqueta>Qué desarrollamos</Etiqueta>
          <Titulo>Soluciones para la operación diaria</Titulo>
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-borde bg-borde sm:grid-cols-2">
            {DESARROLLO.map((d) => (
              <div key={d.titulo} className="bg-white p-8">
                <h3 className="text-lg font-semibold text-marca">{d.titulo}</h3>
                <p className="mt-2 leading-relaxed text-tenue">{d.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-fondo">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Etiqueta>Metodología</Etiqueta>
          <Titulo>Del diagnóstico al soporte</Titulo>
          <ol className="mt-12 grid gap-6 md:grid-cols-5">
            {PROCESO.map((p, i) => (
              <li key={p.paso} className="rounded-lg bg-white p-6">
                <span className="font-serif text-2xl font-semibold text-acento">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-semibold text-marca">{p.paso}</h3>
                <p className="mt-2 text-sm leading-relaxed text-tenue">{p.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <LlamadoFinal />
    </>
  );
}
