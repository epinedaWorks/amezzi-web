import type { Metadata } from "next";
import { EncabezadoPagina, Etiqueta, ListaCheck, LlamadoFinal, Titulo } from "@/components/Bloques";
import { CURSOS, MODALIDADES } from "@/lib/contenido";

export const metadata: Metadata = {
  title: "Capacitaciones empresariales",
  description: "Capacitaciones para empresas en Python, AWS, Power BI, Office 365 y Excel empresarial, presenciales o virtuales.",
};

export default function Capacitaciones() {
  return (
    <>
      <EncabezadoPagina
        etiqueta="01 · Capacitaciones empresariales"
        titulo="Equipos que dominan las herramientas con las que trabajan"
        texto="Programas prácticos en Python, AWS, Power BI, Office 365 y Excel empresarial, adaptados al nivel de cada grupo y a los casos reales de su empresa."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Etiqueta>Programas</Etiqueta>
          <Titulo>Áreas de formación</Titulo>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {CURSOS.map((c) => (
              <article key={c.nombre} className="rounded-lg border border-borde p-8">
                <h3 className="font-serif text-2xl font-semibold text-marca">{c.nombre}</h3>
                <p className="mt-3 leading-relaxed text-tenue">{c.descripcion}</p>
                <div className="mt-6 border-t border-linea pt-6">
                  <ListaCheck items={c.temas} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-fondo">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Etiqueta>Modalidades</Etiqueta>
          <Titulo>Formatos flexibles para cada organización</Titulo>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {MODALIDADES.map((m) => (
              <div key={m.titulo} className="rounded-lg border-t-2 border-acento bg-white p-7">
                <h3 className="font-semibold text-marca">{m.titulo}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-tenue">{m.texto}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-[15px] leading-relaxed text-tenue">
            Todos los programas incluyen material de apoyo, ejercicios prácticos y constancia de participación. Antes de
            iniciar realizamos un diagnóstico breve para nivelar el contenido.
          </p>
        </div>
      </section>

      <LlamadoFinal
        titulo="Arme el programa de su equipo"
        texto="Indíquenos la herramienta, el número de participantes y el nivel, y le enviaremos un temario y una cotización."
      />
    </>
  );
}
