import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Clínica Dental Dra. Ingrid Morrobel | Odontología en Puerto Plata",
  description:
    "Odontología general y especializada en Puerto Plata. Endodoncia, implantes, prótesis, cirugía, ortodoncia y diseño de sonrisa. Agenda tu cita por WhatsApp.",
  openGraph: {
    title: "Dra. Ingrid Morrobel | Odontología en Puerto Plata",
    description:
      "Tu clínica dental de confianza en Puerto Plata. Agenda tu cita hoy.",
    type: "website",
    locale: "es_DO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-white text-dark-900">
        {children}
      </body>
    </html>
  );
}
