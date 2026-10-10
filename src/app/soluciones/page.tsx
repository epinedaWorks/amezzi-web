import type { Metadata } from "next";
import Icono from "@/components/Icono";
import { EncabezadoPagina, Etiqueta, LlamadoFinal } from "@/components/Bloques";
import { SOLUCIONES } from "@/lib/contenido";

export const metadata: Metadata = {
  title: "Soluciones de software",
  description:
    "Registro de asistencia con QR y reconocimiento facial para control de acceso, verificación de equipo y moderación de contenido.",
};

export default function Soluciones() {
  return (
    <>
      <EncabezadoPagina
        etiqueta="04 · Soluciones de software"
        titulo="Herramientas listas para implementar en su empresa"
        texto="Productos probados que adaptamos a sus sedes, sus usuarios y sus sistemas, con capacitación y soporte incluidos."
      />

      {SOLUCIONES.map((s, i) => (
        <section key={s.id} id={s.id} className={`scroll-mt-16 ${i % 2 ? "bg-fondo" : "bg-white"}`}>
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
              <div>
                <span className="flex h-14 w-14 items-center justify-center rounded-md bg-marca text-white">
                  <Icono nombre={i === 0 ? "qr" : "rostro"} className="h-7 w-7" />
                </span>
                <div className="mt-6">
                  <Etiqueta>{`Solución ${String(i + 1).padStart(2, "0")}`}</Etiqueta>
                </div>
                <h2 className="mt-4 font-serif text-3xl leading-tight font-semibold text-marca">{s.nombre}</h2>
                <p className="mt-4 leading-relaxed text-tenue">{s.descripcion}</p>
              </div>
              <div className="grid gap-4">
                {s.casos.map((c) => (
                  <div key={c.titulo} className="rounded-lg border border-borde bg-white p-6">
                    <h3 className="flex items-center gap-3 font-semibold text-marca">
                      <Icono nombre="check" className="h-5 w-5 shrink-0 text-acento" />
                      {c.titulo}
                    </h3>
                    <p className="mt-2 pl-8 text-[15px] leading-relaxed text-tenue">{c.texto}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 pb-4 sm:px-6">
          <p className="border-t border-linea pt-8 text-sm leading-relaxed text-tenue">
            Las soluciones de reconocimiento facial se implementan con el consentimiento de las personas registradas y
            con políticas de resguardo de datos definidas junto a cada cliente.
          </p>
        </div>
      </section>

      <LlamadoFinal
        titulo="Solicite una demostración"
        texto="Le mostramos la solución funcionando y evaluamos juntos cómo se adapta a su operación."
      />
    </>
  );
}
