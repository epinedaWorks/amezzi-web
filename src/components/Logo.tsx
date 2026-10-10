// Marca tipográfica: monograma "A" en un cuadro + nombre.
export default function Logo({ claro = false }: { claro?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true">
        <rect width="34" height="34" rx="6" fill={claro ? "#ffffff" : "#1b2a41"} />
        <path
          d="M10 25 L17 8.5 L24 25 M12.8 19.2 H21.2"
          fill="none"
          stroke={claro ? "#1b2a41" : "#ffffff"}
          strokeWidth="2.4"
          strokeLinecap="square"
        />
        <rect x="22" y="23" width="4" height="4" fill="#9a7b4f" />
      </svg>
      <span className={`text-[17px] font-semibold tracking-tight ${claro ? "text-white" : "text-marca"}`}>
        Amezzi<span className="font-normal text-acento"> Tech</span>
      </span>
    </span>
  );
}
