import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

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

/**
 * O layout raiz da aplicação.
 * Ele configura a estrutura HTML, fontes e scripts do Google Analytics.
 *
 * @param {Readonly<{ children: React.ReactNode }>} props - As props para o componente RootLayout.
 * @param {React.ReactNode} props.children - Os componentes filhos a serem renderizados dentro do layout.
 * @returns {React.ReactElement} O componente RootLayout renderizado.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16477292251"
          strategy="afterInteractive"
        />
        <Script id="google-ads-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16477292251');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
      >
        {children}
      </body>
    </html>
  );
}
