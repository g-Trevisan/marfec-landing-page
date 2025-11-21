// import React from "react";
// import { Facebook, Instagram, Twitter } from "lucide-react";
// export default function Footer() {
//   return (
//     <footer className="bg-black text-white py-12">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row justify-between items-center">
//           <div className="mb-6 md:mb-0">
//             <h1 className="text-4xl font-bold">MARFEC</h1>
//             <p className="mt-2 text-gray-400">
//               Excelência em serviços automotivos
//             </p>
//           </div>
//           <div className="flex space-x-4">
//             <a
//               href="#"
//               className="w-15 h-15 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#FF6B00] transition-colors"
//             >
//               <Facebook size={25} />
//             </a>
//             <a
//               href="#"
//               className="w-15 h-15 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#FF6B00] transition-colors"
//             >
//               <Instagram size={25} />
//             </a>
//             <a
//               href="#"
//               className="w-15 h-15 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#FF6B00] transition-colors"
//             >
//               <Twitter size={25} />
//             </a>
//           </div>
//         </div>
//         <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
//           <p className="text-gray-400">
//             © 2023 Marfec. Todos os direitos reservados.
//           </p>
//           <p className="text-gray-400">
//             CNPJ: 52.104.793/0001-92
//           </p>

//           <div className="mt-4 md:mt-0">
//             <a href="#" className="text-gray-400 hover:text-white mr-6">
//               Política de Privacidade
//             </a>
//             <a href="#" className="text-gray-400 hover:text-white">
//               Termos de Uso
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }


"use client";

import React from "react";
import Link from "next/link";
import { Bitcoin, Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion-presets";

export default function Footer() {
  return (
    <motion.footer
      className="bg-black text-white py-6 sm:py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4">
        {/* Top section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left"
          variants={stagger}
        >
          {/* Logo & Description */}
          <motion.div
            className="items-center sm:items-start flex flex-col"
            variants={fadeUp}
          >
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
          </motion.div>

          {/* Navigation */}
          <motion.div variants={fadeUp}>
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
          </motion.div>

          {/* Social Media */}
        <motion.div
          className="flex justify-center md:justify-end space-x-4"
          variants={fadeUp}
        >
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
        </motion.div>

        </motion.div>

        {/* Bottom section */}
        <motion.div
          className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400"
          variants={fadeUp}
        >
          <p>© {new Date().getFullYear()} Marfec. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">CNPJ: 52.104.793/0001-92</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
