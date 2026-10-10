const API_KEY = process.env.RESEND_API_KEY;
const FROM = process.env.EMAIL_FROM || "Amezzi Tech <no-reply@amezzi.tech>";
const EQUIPO = (process.env.TEAM_EMAIL || "")
  .split(",")
  .map((c) => c.trim())
  .filter(Boolean);

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function layout(titulo: string, cuerpo: string) {
  return `<!DOCTYPE html>
<html lang="es"><head><meta charset="utf-8" /></head>
<body style="margin:0;background:#f4f5f7;padding:20px 16px">
  <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto;color:#1f2733">
    <div style="background:#1b2a41;color:#fff;padding:20px 24px;border-bottom:3px solid #9a7b4f">
      <strong style="font-size:17px">Amezzi Tech</strong>
    </div>
    <div style="background:#fff;border:1px solid #d9dee5;border-top:none;padding:26px 24px">
      <h2 style="margin:0 0 14px;font-size:19px;color:#1b2a41">${esc(titulo)}</h2>
      ${cuerpo}
    </div>
    <p style="text-align:center;color:#8a93a0;font-size:12px;margin:18px 0 0">amezzi.tech</p>
  </div>
</body></html>`;
}

function filas(pares: [string, string | undefined][]) {
  return `<table style="border-collapse:collapse;font-size:14px;width:100%">${pares
    .filter(([, v]) => v)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:4px 12px 4px 0;color:#5b6574;vertical-align:top;white-space:nowrap">${esc(k)}</td><td style="padding:4px 0">${esc(v!)}</td></tr>`
    )
    .join("")}</table>`;
}

type ResultadoEnvio = { ok: true } | { ok: false; motivo: string };

const esperar = (ms: number) => new Promise((r) => setTimeout(r, ms));

// Llamada directa a la API de Resend con reintento ante 429. Nunca lanza.
async function enviar(opts: { to: string[]; subject: string; html: string; replyTo?: string }): Promise<ResultadoEnvio> {
  if (!API_KEY) {
    console.warn("[email] RESEND_API_KEY no configurada — no se envían correos.");
    return { ok: false, motivo: "no configurado" };
  }
  for (let intento = 1; intento <= 3; intento++) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${API_KEY}`, "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify({
          from: FROM,
          to: opts.to,
          subject: opts.subject,
          html: opts.html,
          ...(opts.replyTo ? { reply_to: opts.replyTo } : {}),
        }),
      });
      if (res.ok) return { ok: true };
      const cuerpo = await res.text().catch(() => "");
      if (res.status === 429 && intento < 3) {
        await esperar(700 * intento);
        continue;
      }
      console.error("[email] Resend respondió", res.status, cuerpo);
      return { ok: false, motivo: `HTTP ${res.status}` };
    } catch (err) {
      if (intento < 3) {
        await esperar(500 * intento);
        continue;
      }
      console.error("[email] no se pudo enviar:", err);
      return { ok: false, motivo: "error de red" };
    }
  }
  return { ok: false, motivo: "desconocido" };
}

export type DatosContacto = {
  nombre: string;
  empresa?: string;
  correo: string;
  telefono?: string;
  servicio?: string;
  mensaje: string;
};

// Aviso al equipo + acuse de recibo a quien escribió.
export async function sendContactEmail(d: DatosContacto): Promise<ResultadoEnvio> {
  if (!EQUIPO.length) {
    console.warn("[email] TEAM_EMAIL no configurado — no hay a quién avisar.");
    return { ok: false, motivo: "sin destinatario" };
  }
  const resultado = await enviar({
    to: EQUIPO,
    subject: `Solicitud desde amezzi.tech: ${d.nombre}${d.empresa ? ` (${d.empresa})` : ""}`,
    html: layout(
      "Nueva solicitud de contacto",
      `${filas([
        ["Nombre", d.nombre],
        ["Empresa", d.empresa],
        ["Correo", d.correo],
        ["Teléfono", d.telefono],
        ["Servicio", d.servicio],
      ])}
      <p style="font-size:13px;color:#5b6574;margin-top:14px">Mensaje:</p>
      <p style="font-size:14px;line-height:1.6;white-space:pre-wrap">${esc(d.mensaje)}</p>`
    ),
    replyTo: d.correo,
  });

  if (resultado.ok) {
    await enviar({
      to: [d.correo],
      subject: "Recibimos su solicitud · Amezzi Tech",
      html: layout(
        `Gracias por escribirnos, ${d.nombre.split(" ")[0]}`,
        `<p style="font-size:14px;line-height:1.6">Recibimos su solicitud y le responderemos a este correo a la brevedad.</p>`
      ),
      replyTo: EQUIPO[0],
    });
  }
  return resultado;
}
