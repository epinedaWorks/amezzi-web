import type { Metadata } from "next";
import Link from "next/link";
import Icono from "@/components/Icono";
import { EncabezadoPagina, Etiqueta, LlamadoFinal } from "@/components/Bloques";
import { SOLUCIONES } from "@/lib/contenido";

export const metadata: Metadata = {
  title: "Soluciones de software",
  description:
    "Asistencia con QR, reconocimiento facial para control de acceso, verificación de equipo y moderación de contenido, y Reu-X: minutas inteligentes de reuniones.",
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
                  <Icono nombre={s.icono} className="h-7 w-7" />
                </span>
                <div className="mt-6">
                  <Etiqueta>{`Solución ${String(i + 1).padStart(2, "0")}`}</Etiqueta>
                </div>
                <h2 className="mt-4 font-serif text-3xl leading-tight font-semibold text-marca">{s.nombre}</h2>
                {s.lema && <p className="mt-3 text-lg font-medium text-acento">{s.lema}</p>}
                <p className="mt-4 leading-relaxed text-tenue">{s.descripcion}</p>

                {s.idealPara && (
                  <div className="mt-8">
                    <p className="text-xs font-semibold tracking-[0.14em] text-tenue uppercase">Ideal para</p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {s.idealPara.map((p) => (
                        <li
                          key={p}
                          className="rounded-full border border-borde bg-white px-3.5 py-1.5 text-sm font-medium text-marca"
                        >
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {s.enlace && (
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href="/contacto"
                      className="inline-flex items-center gap-2 rounded-md bg-marca px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-marca-hover"
                    >
                      Solicitar una demostración
                      <Icono nombre="flecha" className="h-4 w-4" />
                    </Link>
                    <a
                      href={s.enlace.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-md border border-borde bg-white px-5 py-3 text-sm font-semibold text-marca transition-colors hover:border-marca"
                    >
                      {s.enlace.texto}
                    </a>
                  </div>
                )}
              </div>

              <div>
                <div className={`grid gap-4 ${s.casos.length > 3 ? "sm:grid-cols-2" : ""}`}>
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
                {s.nota && <p className="mt-6 text-sm leading-relaxed text-tenue">{s.nota}</p>}
              </div>
            </div>
          </div>
        </section>
      ))}

      <LlamadoFinal
        titulo="Solicite una demostración"
        texto="Le mostramos la solución funcionando y evaluamos juntos cómo se adapta a su operación."
      />
    </>
  );
}
