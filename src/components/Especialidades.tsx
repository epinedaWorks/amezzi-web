import Icono from "./Icono";
import { Etiqueta, Titulo } from "./Bloques";
import { ESPECIALIDADES } from "@/lib/contenido";

// Una ficha por tecnología: a la izquierda el sello, el nombre y el enfoque;
// a la derecha los servicios en dos columnas y, si aplica, las herramientas.
export default function Especialidades() {
  return (
    <section id="especialidades" className="scroll-mt-16 bg-fondo">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Etiqueta>Especialidades</Etiqueta>
        <Titulo>Profundidad técnica en las plataformas que más usan las empresas</Titulo>

        <div className="mt-12 space-y-6">
          {ESPECIALIDADES.map((e) => (
            <article
              key={e.id}
              id={e.id}
              className="grid scroll-mt-20 overflow-hidden rounded-lg border border-borde bg-white lg:grid-cols-[320px_1fr]"
            >
              <div className="reticula flex flex-col bg-marca p-8 text-white">
                <span className="flex h-14 w-14 items-center justify-center rounded-md border border-acento-claro/60 font-serif text-xl font-semibold text-acento-claro">
                  {e.sello}
                </span>
                <h3 className="mt-6 font-serif text-2xl font-semibold">{e.nombre}</h3>
                <p className="mt-1 text-xs font-semibold tracking-[0.14em] text-acento-claro uppercase">{e.lema}</p>
                <p className="mt-4 text-[15px] leading-relaxed text-white/75">{e.texto}</p>
              </div>

              <div className="p-8">
                <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
                  {e.servicios.map((s) => (
                    <li key={s.titulo} className="flex gap-3">
                      <Icono nombre="check" className="mt-0.5 h-5 w-5 shrink-0 text-acento" />
                      <div>
                        <p className="font-semibold text-marca">{s.titulo}</p>
                        <p className="mt-1 text-sm leading-relaxed text-tenue">{s.texto}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                {e.herramientas && (
                  <div className="mt-8 border-t border-linea pt-6">
                    <p className="text-xs font-semibold tracking-[0.14em] text-tenue uppercase">Herramientas</p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {e.herramientas.map((h) => (
                        <li
                          key={h}
                          className="rounded-full border border-borde bg-fondo px-3.5 py-1.5 text-sm font-medium text-marca"
                        >
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
