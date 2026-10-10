import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/email";

const CORREO_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const texto = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await req.json()) ?? {};
  } catch {
    return NextResponse.json({ error: "Cuerpo inválido." }, { status: 400 });
  }

  // Campo trampa: invisible para personas; si viene lleno es un bot.
  // Se responde "ok" para no darle pistas, pero no se envía nada.
  if (texto(body.sitio_web, 200)) return NextResponse.json({ ok: true });

  const datos = {
    nombre: texto(body.nombre, 200),
    empresa: texto(body.empresa, 200) || undefined,
    correo: texto(body.correo, 200),
    telefono: texto(body.telefono, 50) || undefined,
    servicio: texto(body.servicio, 100) || undefined,
    mensaje: texto(body.mensaje, 5000),
  };

  if (!datos.nombre || !datos.mensaje || !CORREO_RE.test(datos.correo)) {
    return NextResponse.json({ error: "Revise los datos del formulario." }, { status: 400 });
  }

  const resultado = await sendContactEmail(datos);
  if (!resultado.ok) {
    return NextResponse.json(
      { error: "No se pudo enviar el mensaje. Intente de nuevo en un momento." },
      { status: 502 }
    );
  }
  return NextResponse.json({ ok: true });
}
