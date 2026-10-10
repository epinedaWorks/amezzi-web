import Link from "next/link";
import AnioActual from "./AnioActual";
import Logo from "./Logo";
import { LINEAS } from "@/lib/contenido";

export default function Footer() {
  return (
    <footer className="bg-marca-oscura text-white/70">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo claro />
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            Capacitación, consultoría y software para empresas que quieren aprovechar la nube, los datos y la
            inteligencia artificial.
          </p>
        </div>
        <div>
          <h2 className="text-xs font-semibold tracking-[0.14em] text-acento-claro uppercase">Servicios</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {LINEAS.map((l) => (
              <li key={l.slug}>
                <Link href={`/${l.slug}`} className="hover:text-white">
                  {l.nombre}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-semibold tracking-[0.14em] text-acento-claro uppercase">Empresa</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/nosotros" className="hover:text-white">
                Nosotros
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="hover:text-white">
                Contacto
              </Link>
            </li>
            <li>Guatemala</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-5 text-xs sm:flex-row sm:justify-between sm:px-6">
          <span>© <AnioActual /> Amezzi Tech. Todos los derechos reservados.</span>
          <span>amezzi.tech</span>
        </div>
      </div>
    </footer>
  );
}
