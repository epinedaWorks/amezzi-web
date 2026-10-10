import Link from "next/link";
import Icono from "@/components/Icono";
import { Etiqueta, LlamadoFinal, Titulo } from "@/components/Bloques";
import { LINEAS, PROCESO, SOLUCIONES } from "@/lib/contenido";

const TECNOLOGIAS = ["Python", "Amazon Web Services", "Power BI", "Office 365", "Visión por computadora", "Machine learning"];

export default function Inicio() {
  return (
    <>
      {/* Portada */}
      <section className="reticula relative overflow-hidden bg-marca text-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[1.25fr_1fr] lg:items-center">
          <div>
            <Etiqueta claro>Tecnología para empresas</Etiqueta>
            <h1 className="mt-6 font-serif text-4xl leading-[1.12] font-semibold sm:text-5xl xl:text-[3.4rem]">
              Formamos equipos, diseñamos infraestructura y construimos el software que su empresa necesita.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
              Capacitación especializada, consultoría en la nube e inteligencia artificial, desarrollo a la medida y
              soluciones listas para implementar.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 rounded-md bg-acento px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#87693f]"
              >
                Solicitar una propuesta
                <Icono nombre="flecha" className="h-4 w-4" />
              </Link>
              <a
                href="#servicios"
                className="rounded-md border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Conocer los servicios
              </a>
            </div>
          </div>

          <div className="hidden rounded-lg border border-white/15 bg-white/[0.04] p-7 lg:block">
            <p className="text-xs font-semibold tracking-[0.16em] text-acento-claro uppercase">Áreas de trabajo</p>
            <ul className="mt-5 divide-y divide-white/10">
              {LINEAS.map((l) => (
                <li key={l.slug}>
                  <Link href={`/${l.slug}`} className="group flex items-center gap-4 py-4">
                    <span className="font-serif text-lg text-acento-claro">{l.numero}</span>
                    <span className="flex-1 text-[15px] text-white/90 group-hover:text-white">{l.nombre}</span>
                    <Icono
                      nombre="flecha"
                      className="h-4 w-4 text-white/40 transition-transform group-hover:translate-x-1 group-hover:text-white"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Tecnologías */}
      <section className="border-b border-linea bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-3 px-4 py-6 sm:px-6">
          <span className="text-xs font-semibold tracking-[0.14em] text-tenue uppercase">Especialidad en</span>
          {TECNOLOGIAS.map((t) => (
            <span key={t} className="text-sm font-medium text-marca">
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="scroll-mt-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Etiqueta>Servicios</Etiqueta>
          <Titulo>Cuatro líneas de trabajo, un mismo compromiso con resultados</Titulo>
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-borde bg-borde sm:grid-cols-2">
            {LINEAS.map((l) => (
              <Link
                key={l.slug}
                href={`/${l.slug}`}
                className="group flex flex-col bg-white p-8 transition-colors hover:bg-fondo"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-marca-suave text-marca">
                    <Icono nombre={l.icono} />
                  </span>
                  <span className="font-serif text-2xl text-borde">{l.numero}</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-marca">{l.nombre}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-tenue">{l.resumen}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-acento">
                  Ver detalle
                  <Icono nombre="flecha" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Soluciones destacadas */}
      <section className="reticula bg-marca text-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Etiqueta claro>Soluciones de software</Etiqueta>
          <Titulo claro>Herramientas listas para su operación</Titulo>
          <p className="mt-4 max-w-2xl text-white/70">
            Productos que implementamos y adaptamos a cada empresa, con acompañamiento desde la instalación.
          </p>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {SOLUCIONES.map((s, i) => (
              <div key={s.id} className="flex flex-col rounded-lg border border-white/15 bg-white/[0.04] p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-acento text-white">
                  <Icono nombre={i === 0 ? "qr" : "rostro"} />
                </span>
                <h3 className="mt-6 text-xl font-semibold">{s.nombre}</h3>
                <p className="mt-3 leading-relaxed text-white/70">{s.descripcion}</p>
                <ul className="mt-6 flex-1 space-y-2">
                  {s.casos.map((c) => (
                    <li key={c.titulo} className="flex gap-3 text-sm text-white/85">
                      <Icono nombre="check" className="h-5 w-5 shrink-0 text-acento-claro" />
                      {c.titulo}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/soluciones#${s.id}`}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-acento-claro hover:text-white"
                >
                  Conocer la solución
                  <Icono nombre="flecha" className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Método */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
            <div>
              <Etiqueta>Cómo trabajamos</Etiqueta>
              <Titulo>Un proceso claro, de principio a fin</Titulo>
              <p className="mt-4 leading-relaxed text-tenue">
                Cada proyecto empieza por entender el problema. La tecnología se elige después, con alcance y costos
                definidos desde el inicio.
              </p>
            </div>
            <ol>
              {PROCESO.map((p, i) => (
                <li key={p.paso} className="flex gap-6 border-b border-linea py-5 first:pt-0 last:border-0">
                  <span className="font-serif text-2xl font-semibold text-acento">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-semibold text-marca">{p.paso}</h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-tenue">{p.texto}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <LlamadoFinal />
    </>
  );
}
