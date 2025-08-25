"use client";

import React from "react";
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
    <section className="relative w-full bg-black text-white pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-900 opacity-90"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Marfec: Excelência em reparação automotiva
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Investimos constantemente em tecnologia e capacitação para
            oferecer o que há de melhor em diagnóstico e soluções para o seu
            veículo.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-[#FF6B00] text-white px-6 py-3 rounded-md hover:bg-[#e05e00] transition-colors font-medium"
            >
              Fale Conosco
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="border-2 border-[#FF6B00] text-white px-6 py-3 rounded-md hover:bg-[#FF6B00]/10 transition-colors font-medium"
            >
              Conheça Nossos Serviços
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
