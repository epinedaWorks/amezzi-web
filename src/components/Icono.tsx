// Iconos de línea propios (sin dependencias ni emojis).
type Nombre =
  | "capacitacion"
  | "consultoria"
  | "desarrollo"
  | "soluciones"
  | "qr"
  | "rostro"
  | "check"
  | "flecha";

const TRAZOS: Record<Nombre, React.ReactNode> = {
  capacitacion: (
    <>
      <path d="M3 9 L12 4.5 L21 9 L12 13.5 Z" />
      <path d="M7 11 V16 C7 17.5 9.5 19 12 19 C14.5 19 17 17.5 17 16 V11" />
      <path d="M21 9 V14" />
    </>
  ),
  consultoria: (
    <>
      <path d="M7 17 H17 A4 4 0 0 0 17.5 9 A5.5 5.5 0 0 0 6.8 10 A3.5 3.5 0 0 0 7 17 Z" />
      <path d="M12 12 V20 M9.5 17.5 L12 20 L14.5 17.5" />
    </>
  ),
  desarrollo: (
    <>
      <rect x="3" y="4.5" width="18" height="15" rx="1.5" />
      <path d="M3 8.5 H21 M9 12 L6.8 14 L9 16 M15 12 L17.2 14 L15 16 M12.8 11.5 L11.2 16.5" />
    </>
  ),
  soluciones: (
    <>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1" />
      <path d="M17 13.5 V20.5 M13.5 17 H20.5" />
    </>
  ),
  qr: (
    <>
      <rect x="3.5" y="3.5" width="6.5" height="6.5" />
      <rect x="14" y="3.5" width="6.5" height="6.5" />
      <rect x="3.5" y="14" width="6.5" height="6.5" />
      <path d="M14 14 H17 V17 H14 Z M20.5 14 V20.5 H17 M5.8 5.8 H7.7 M16.3 5.8 H18.2 M5.8 16.3 H7.7" />
    </>
  ),
  rostro: (
    <>
      <path d="M3.5 8 V5 A1.5 1.5 0 0 1 5 3.5 H8 M16 3.5 H19 A1.5 1.5 0 0 1 20.5 5 V8 M20.5 16 V19 A1.5 1.5 0 0 1 19 20.5 H16 M8 20.5 H5 A1.5 1.5 0 0 1 3.5 19 V16" />
      <circle cx="12" cy="10.5" r="3" />
      <path d="M7.5 17.5 C8.5 15.5 10 14.8 12 14.8 C14 14.8 15.5 15.5 16.5 17.5" />
    </>
  ),
  check: <path d="M5 12.5 L10 17 L19 7.5" />,
  flecha: <path d="M5 12 H19 M13.5 6.5 L19 12 L13.5 17.5" />,
};

export default function Icono({ nombre, className = "h-6 w-6" }: { nombre: Nombre; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {TRAZOS[nombre]}
    </svg>
  );
}
