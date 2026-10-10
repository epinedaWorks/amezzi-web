import type { Metadata } from "next";
import { EncabezadoPagina, Etiqueta, LlamadoFinal, Titulo } from "@/components/Bloques";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Amezzi Tech: capacitación, consultoría y software para empresas en Guatemala.",
};

const VALORES = [
  { titulo: "Rigor técnico", texto: "Soluciones bien diseñadas, documentadas y seguras, pensadas para durar." },
  { titulo: "Transferencia de conocimiento", texto: "Cada proyecto deja capacidades instaladas en el equipo del cliente." },
  { titulo: "Claridad", texto: "Alcances, tiempos y costos definidos desde el inicio, sin sorpresas." },
];

export default function Nosotros() {
  return (
    <>
      <EncabezadoPagina
        etiqueta="Nosotros"
        titulo="Tecnología con propósito empresarial"
        texto="Amezzi Tech une la enseñanza, la consultoría y el desarrollo de software para que las empresas adopten tecnología con criterio y la aprovechen de verdad."
      />

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
          <div>
            <Etiqueta>Quiénes somos</Etiqueta>
            <Titulo>Formar, asesorar y construir</Titulo>
          </div>
          <div className="space-y-4 leading-relaxed text-tenue">
            <p>
              Amezzi Tech es una firma de tecnología fundada por el Ing. Erick J. Pineda Amézquita. Trabajamos con
              organizaciones que necesitan capacitar a sus equipos, ordenar su infraestructura en la nube, incorporar
              inteligencia artificial o contar con software hecho a su medida.
            </p>
            <p>
              Nuestra experiencia en el aula y en proyectos reales nos permite explicar con claridad lo que construimos, y
              construir lo que enseñamos.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-fondo">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Etiqueta>Principios</Etiqueta>
          <Titulo>Lo que guía nuestro trabajo</Titulo>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {VALORES.map((v) => (
              <div key={v.titulo} className="rounded-lg border-t-2 border-acento bg-white p-7">
                <h3 className="font-semibold text-marca">{v.titulo}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-tenue">{v.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LlamadoFinal />
    </>
  );
}
