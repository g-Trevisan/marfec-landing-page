import React from "react";
import { Car, Cpu, Gauge, Activity, Zap, Wind } from "lucide-react";

/**
 * Props para o componente ServiceCard.
 * @property {React.ReactNode} icon - O ícone a ser exibido para o serviço.
 * @property {string} title - O título do serviço.
 * @property {string} description - Uma breve descrição do serviço.
 */
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

/**
 * Um componente de cartão para exibir um único serviço.
 * Ele mostra um ícone, título e descrição para o serviço.
 *
 * @param {ServiceCardProps} props - As props para o componente ServiceCard.
 * @returns {React.ReactElement} O componente ServiceCard renderizado.
 */
function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-[#FF6B00]/20 hover:translate-y-[-5px]">
      <div className="w-14 h-14 bg-[#FF6B00]/10 rounded-full flex items-center justify-center text-[#FF6B00] mb-5">
        {icon}
      </div>

      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

/**
 * Uma seção que exibe os serviços oferecidos pela empresa.
 * Utiliza o componente ServiceCard para listar cada serviço.
 *
 * @returns {React.ReactElement} A seção de Serviços renderizada.
 */
export default function ServicosPrestados() {
  const services = [
    {
      icon: <Zap size={28} />,
      title: "Elétrica",
      description:
        "Diagnóstico e reparo de sistemas elétricos, alternadores, motores de partida e mais.",
    },
    {
      icon: <Wind size={28} />,
      title: "Ar Condicionado",
      description:
        "Manutenção, recarga de gás, limpeza e reparo completo do sistema de climatização.",
    },
    {
      icon: <Activity size={28} />,
      title: "Diagnóstico Avançado",
      description:
        "Leitura e interpretação de falhas com equipamentos de última geração. ",
    },
    {
      icon: <Gauge size={28} />,
      title: "Mecânica",
      description:
        "Checagem completa dos componentes mecânicos do seu veículo. Troca de óleo, filtros e fluidos.",
    },
    {
      icon: <Cpu size={28} />,
      title: "Injeção Eletrônica",
      description:
        "Diagnóstico e reparo de problemas na injeção eletrônica para melhor desempenho e economia de combustível.",
    },
    {
      icon: <Car size={28} />,
      title: "Higienização",
      description:
        "Limpeza profunda do sistema de ar condicionado, eliminando fungos e bactérias. Melhorando a qualidade do ar e o conforto.",
    },
  ];
  return (
    <section id="services" className="pt-16 md:pt-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossos Serviços
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos soluções completas para garantir o melhor desempenho e
            conforto do seu veículo.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
      <div className="flex text-center justify-center mt-20">
        <a
          href="https://wa.me/54992739290"
          target="_blank"
          rel="noopener noreferrer"
          className="w-60 h-16 py-4 bg-[#FF6B00] mx- text-white text-lg rounded-full hover:bg-[black] transition-colors font-medium"
        >
          Solicitar orçamento
        </a>
      </div>
    </section>
  );
}
