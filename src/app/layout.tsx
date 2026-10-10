import type { Metadata } from "next";
import { IBM_Plex_Sans, Source_Serif_4 } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const plex = IBM_Plex_Sans({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const serif = Source_Serif_4({
  variable: "--font-serif4",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://amezzi.tech"),
  title: {
    default: "Amezzi Tech · Capacitación, consultoría y software empresarial",
    template: "%s · Amezzi Tech",
  },
  description:
    "Capacitaciones empresariales en Python, AWS, Power BI, Office 365 y Excel empresarial; consultoría en infraestructura AWS e inteligencia artificial; desarrollo de software a la medida y soluciones de asistencia QR y reconocimiento facial.",
  openGraph: {
    title: "Amezzi Tech",
    description: "Capacitación, consultoría y software para empresas.",
    url: "https://amezzi.tech",
    siteName: "Amezzi Tech",
    locale: "es_GT",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${plex.variable} ${serif.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
