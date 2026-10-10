"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";

const ENLACES = [
  { href: "/capacitaciones", texto: "Capacitaciones" },
  { href: "/consultoria", texto: "Consultoría" },
  { href: "/desarrollo", texto: "Desarrollo" },
  { href: "/soluciones", texto: "Soluciones" },
  { href: "/nosotros", texto: "Nosotros" },
];

export default function Header() {
  const ruta = usePathname();
  const [abierto, setAbierto] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-linea bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" aria-label="Amezzi Tech, inicio" onClick={() => setAbierto(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {ENLACES.map((e) => (
            <Link
              key={e.href}
              href={e.href}
              className={`text-sm transition-colors hover:text-marca ${
                ruta === e.href ? "font-semibold text-marca" : "text-tenue"
              }`}
            >
              {e.texto}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="rounded-md bg-marca px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-marca-hover"
          >
            Contacto
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md border border-borde lg:hidden"
          aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={abierto}
          onClick={() => setAbierto((v) => !v)}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            {abierto ? (
              <path d="M3 3 L15 15 M15 3 L3 15" stroke="#1b2a41" strokeWidth="1.8" />
            ) : (
              <path d="M2 4.5 H16 M2 9 H16 M2 13.5 H16" stroke="#1b2a41" strokeWidth="1.8" />
            )}
          </svg>
        </button>
      </div>

      {abierto && (
        <nav className="border-t border-linea bg-white px-4 pb-4 lg:hidden">
          {[...ENLACES, { href: "/contacto", texto: "Contacto" }].map((e) => (
            <Link
              key={e.href}
              href={e.href}
              onClick={() => setAbierto(false)}
              className={`block border-b border-linea py-3 text-[15px] ${
                ruta === e.href ? "font-semibold text-marca" : "text-tinta"
              }`}
            >
              {e.texto}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
