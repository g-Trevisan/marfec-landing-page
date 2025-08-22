import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";
export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">MARFEC</h2>
            <p className="mt-2 text-gray-400">
              Excelência em serviços automotivos
            </p>
          </div>
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#FF6B00] transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#FF6B00] transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#FF6B00] transition-colors"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            © 2023 Marfec. Todos os direitos reservados.
          </p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white mr-6">
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
