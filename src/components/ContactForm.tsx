"use client";

import { useState, type FormEvent } from "react";
import { LINEAS } from "@/lib/contenido";

type Estado = "idle" | "enviando" | "ok" | "error";

const campo =
  "w-full rounded-md border border-borde bg-white px-3 py-2.5 text-[15px] outline-none transition-colors focus:border-marca";
const etiqueta = "text-sm font-medium text-tinta";

export default function ContactForm() {
  const [estado, setEstado] = useState<Estado>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    setEstado("enviando");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        setErrorMsg(body.error || "No se pudo enviar el mensaje.");
        setEstado("error");
        return;
      }
      setEstado("ok");
      form.reset();
    } catch {
      setErrorMsg("No se pudo enviar el mensaje. Revise su conexión.");
      setEstado("error");
    }
  }

  if (estado === "ok") {
    return (
      <div className="rounded-lg border border-borde bg-white p-8">
        <h2 className="font-serif text-2xl font-semibold text-marca">Solicitud enviada</h2>
        <p className="mt-3 leading-relaxed text-tenue">
          Gracias por escribirnos. Le enviamos una confirmación a su correo y le responderemos a la brevedad.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-lg border border-borde bg-white p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5">
          <span className={etiqueta}>Nombre completo</span>
          <input name="nombre" required maxLength={200} autoComplete="name" className={campo} />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className={etiqueta}>Empresa</span>
          <input name="empresa" maxLength={200} autoComplete="organization" className={campo} />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className={etiqueta}>Correo</span>
          <input name="correo" type="email" required maxLength={200} autoComplete="email" className={campo} />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className={etiqueta}>Teléfono (opcional)</span>
          <input name="telefono" type="tel" maxLength={50} autoComplete="tel" className={campo} />
        </label>
      </div>

      <label className="mt-5 flex flex-col gap-1.5">
        <span className={etiqueta}>Servicio de interés</span>
        <select name="servicio" defaultValue="" className={campo}>
          <option value="">Seleccione una opción</option>
          {LINEAS.map((l) => (
            <option key={l.slug} value={l.nombre}>
              {l.nombre}
            </option>
          ))}
          <option value="Otro">Otro</option>
        </select>
      </label>

      <label className="mt-5 flex flex-col gap-1.5">
        <span className={etiqueta}>¿En qué podemos ayudarle?</span>
        <textarea name="mensaje" required rows={5} maxLength={5000} className={campo} />
      </label>

      {/* Campo trampa anti-bots: fuera de pantalla y fuera del orden de tabulación. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Sitio web
          <input name="sitio_web" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {estado === "error" && <p className="mt-4 text-sm text-[#a23b3b]">{errorMsg}</p>}

      <button
        type="submit"
        disabled={estado === "enviando"}
        className="mt-6 w-full rounded-md bg-marca px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-marca-hover disabled:opacity-60 sm:w-auto"
      >
        {estado === "enviando" ? "Enviando…" : "Enviar solicitud"}
      </button>
    </form>
  );
}
