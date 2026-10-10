import Link from "next/link";
import Icono from "./Icono";

// Piezas de diseño que se repiten entre páginas.

export function Etiqueta({ children, claro = false }: { children: React.ReactNode; claro?: boolean }) {
  return (
    <p
      className={`flex items-center gap-3 text-xs font-semibold tracking-[0.16em] uppercase ${
        claro ? "text-acento-claro" : "text-acento"
      }`}
    >
      <span className={`h-px w-8 ${claro ? "bg-acento-claro" : "bg-acento"}`} />
      {children}
    </p>
  );
}

export function Titulo({ children, claro = false }: { children: React.ReactNode; claro?: boolean }) {
  return (
    <h2
      className={`mt-4 font-serif text-3xl leading-tight font-semibold sm:text-4xl ${
        claro ? "text-white" : "text-marca"
      }`}
    >
      {children}
    </h2>
  );
}

export function EncabezadoPagina({
  etiqueta,
  titulo,
  texto,
}: {
  etiqueta: string;
  titulo: string;
  texto: string;
}) {
  return (
    <section className="reticula bg-marca text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <Etiqueta claro>{etiqueta}</Etiqueta>
        <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-tight font-semibold sm:text-5xl">{titulo}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">{texto}</p>
      </div>
    </section>
  );
}

export function ListaCheck({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((i) => (
        <li key={i} className="flex gap-3 text-[15px] text-tinta">
          <Icono nombre="check" className="mt-0.5 h-5 w-5 shrink-0 text-acento" />
          {i}
        </li>
      ))}
    </ul>
  );
}

export function LlamadoFinal({
  titulo = "Conversemos sobre su próximo proyecto",
  texto = "Cuéntenos qué necesita su equipo y le enviaremos una propuesta con alcance, tiempos y costos.",
}: {
  titulo?: string;
  texto?: string;
}) {
  return (
    <section className="bg-fondo">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-16 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-serif text-2xl font-semibold text-marca sm:text-3xl">{titulo}</h2>
          <p className="mt-3 text-tenue">{texto}</p>
        </div>
        <Link
          href="/contacto"
          className="inline-flex shrink-0 items-center gap-2 rounded-md bg-marca px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-marca-hover"
        >
          Solicitar una propuesta
          <Icono nombre="flecha" className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
