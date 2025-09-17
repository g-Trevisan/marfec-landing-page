"use client";

import React from "react";
import Link from "next/link";
import { Bitcoin, Instagram } from "lucide-react";
import Image from "next/image";

/**
 * Um componente de rodapé que exibe o logotipo da empresa, links de navegação, ícones de mídia social e informações de direitos autorais.
 *
 * @returns {React.ReactElement} O componente de rodapé renderizado.
 */
export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 sm:py-12">
      <div className="container mx-auto px-4">
        {/* Seção superior */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          {/* Logo e Descrição */}
          <div className="items-center sm:items-start flex flex-col">
            {/* <div> */}
            <Image
              src="/images/logos/FOTO DE PERFIL.png"
              alt="Logo Marfec"
              width={160}
              height={50}
              priority
            />
            <p className="mt-2 text-gray-400">
              Nosso maior compromisso é com a sua satisfação e segurança.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <nav className="flex justify-center md:justify-center space-x-6">
              <Link
                href="/politica-de-privacidade"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Política de Privacidade
              </Link>
              <Link
                href="/termos-de-uso"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Termos de Uso
              </Link>
            </nav>
          </div>

          {/* Mídia Social */}
          <div className="flex justify-center md:justify-end space-x-4">
            <a
              href="https://btcmap.org/merchant/node:12548054548"
              aria-label="Bitcoin"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#FF6B00] transition-transform transform hover:scale-110"
            >
              <Bitcoin size={22} />
            </a>

            <a
              href="https://www.instagram.com/marfecbrasiloficial/"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#FF6B00] transition-transform transform hover:scale-110"
            >
              <Instagram size={22} />
            </a>
          </div>
        </div>

        {/* Seção inferior */}
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Marfec. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">CNPJ: 52.104.793/0001-92</p>
        </div>
      </div>
    </footer>
  );
}
