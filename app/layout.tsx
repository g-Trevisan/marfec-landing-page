import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marfec Centro Automotivo",
  description:
    "Serviços automotivos completos: troca de óleo, manutenção de motor, suspensão, freios, arrefecimento e ar-condicionado. Diagnóstico de falhas com agendamento prévio. Em Caxias do Sul.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full overflow-hiddein`}
      >
        {children}
      </body>
    </html>
  );
}
