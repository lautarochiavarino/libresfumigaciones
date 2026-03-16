import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Libres Fumigaciones — Fumigación Fitosanitaria | CO.TE.CAR",
  description:
    "Empresa de fumigación y control de plagas. Servicios fitosanitarios en CO.TE.CAR: fumigación con fosfuro de aluminio y pulverización con piretroides para maquinaria agrícola.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col antialiased bg-fumigacion-pattern">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
