"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion-presets";

export default function Sobre() {
  return (
    <motion.section
      id="about"
      className="py-16 md:py-24 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div variants={stagger}>
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              variants={fadeUp}
            >
              Sobre a Marfec
            </motion.h2>
            <motion.p className="text-gray-600 mb-6" variants={fadeUp}>
              Com anos de experiência, a equipe Marfec se destaca pelo alto desempenho
              em serviços de elétrica automotiva, ar condicionado e mecânica automotiva. Formamos
              um grupo de profissionais altamente qualificados e apaixonados
              por automóveis.
            </motion.p>
            <motion.p className="text-gray-600 mb-6" variants={fadeUp}>
              Investimos constantemente em tecnologia e capacitação para
              oferecer o que há de melhor em diagnóstico e soluções para o seu
              veículo. Nosso compromisso é com a qualidade, eficiência e com a
              sua satisfação.
            </motion.p>
            <motion.div className="space-y-3" variants={stagger}>
              {[
                "Técnicos certificados e constantemente atualizados",
                "Equipamentos de diagnóstico de última geração",
                "Peças originais e de qualidade garantida",
                "Garantia em todos os serviços realizados",
                "A primeira oficina a aceitar Bitcoin como forma de pagamento",
              ].map((item) => (
                <motion.div
                  key={item}
                  className="flex items-start"
                  variants={fadeUp}
                >
                  <CheckCircle2
                    className="text-[#FF6B00] mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <p className="text-gray-700">{item}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            className="relative h-64 w-full overflow-hidden rounded-lg sm:h-80 md:h-[400px]"
            variants={fadeUp}
          >
            <Image
              src="/images/logos/equipe.jpg"
              alt="Imagem da oficina ou equipe"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
