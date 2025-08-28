import React from "react";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function Sobre() {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Sobre a Marfec
            </h2>
            <p className="text-gray-600 mb-6">
              Com anos de experiência, a equipe Marfec se destaca pelo alto desempenho
              em serviços de elétrica automotiva, ar condicionado e mecânica automotiva. Formamos
              um grupo de profissionais altamente qualificados e apaixonados
              por automóveis.
            </p>
            <p className="text-gray-600 mb-6">
              Investimos constantemente em tecnologia e capacitação para
              oferecer o que há de melhor em diagnóstico e soluções para o seu
              veículo. Nosso compromisso é com a qualidade, eficiência e com a
              sua satisfação.
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <CheckCircle2
                  className="text-[#FF6B00] mr-3 mt-1 flex-shrink-0"
                  size={20}
                />
                <p className="text-gray-700">
                  Técnicos certificados e constantemente atualizados
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle2
                  className="text-[#FF6B00] mr-3 mt-1 flex-shrink-0"
                  size={20}
                />
                <p className="text-gray-700">
                  Equipamentos de diagnóstico de última geração
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle2
                  className="text-[#FF6B00] mr-3 mt-1 flex-shrink-0"
                  size={20}
                />
                <p className="text-gray-700">
                  Peças originais e de qualidade garantida
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle2
                  className="text-[#FF6B00] mr-3 mt-1 flex-shrink-0"
                  size={20}
                />
                <p className="text-gray-700">
                  Garantia em todos os serviços realizados
                </p>
              </div>
                <div className="flex items-start">
                <CheckCircle2
                  className="text-[#FF6B00] mr-3 mt-1 flex-shrink-0"
                  size={20}
                />
                <p className="text-gray-700">
                  A primeira oficina a aceitar Bitcoin como forma de pagamento
                </p>
              </div>
            </div>
          </div>
          <div className="bg h-[400px] rounded-lg flex items-center justify-center">
            <Image
              src="/images/logos/equipe.jpg"
              alt="Imagem da oficina ou equipe"
              width={320}
              height={180}
              className="object-cover rounded-lg">
            </Image>
          </div>
        </div>
      </div>
    </section>
  );
}
