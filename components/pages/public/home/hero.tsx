"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion-presets";
export default function MarfecQualidade() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <motion.section
      className="relative w-full bg-black text-white pt-24 pb-16 md:pt-32 md:pb-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={stagger}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-900 opacity-90"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="items-center flex flex-col md:pb-10">
          <motion.div variants={fadeUp}>
            <Image
              src="/images/logos/FOTO DE PERFIL.png"
              alt="Logo Marfec"
              width={260}
              height={50}
              sizes="(max-width: 640px) 180px, 240px"
              priority
            />
          </motion.div>
        </div>
        <motion.div className="max-w-3xl mx-auto text-center" variants={fadeUp}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Reparação automotiva em Caxias do Sul
          </h1>
          <p className="text-base sm:text-lg md:text-xl opacity-90 mb-6 sm:mb-8">
            Investindo constantemente em tecnologia e capacitação para
            oferecer o que há de melhor em diagnóstico e soluções para o seu
            veículo.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:justify-center">
            <a
              href="https://wa.me/54992739290"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-md bg-[#229922] px-6 py-3 font-medium text-white transition-colors hover:bg-[#228522] sm:w-auto"
            >
              Fale Conosco pelo WhatsApp
            </a>
            <button
              onClick={() => scrollToSection("services")}
              className="inline-flex w-full items-center justify-center rounded-md border-2 border-[#FF6B00] px-6 py-3 font-medium text-white transition-colors hover:bg-[#FF6B00] sm:w-auto"
            >
              Conheça Nossos Serviços
            </button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
