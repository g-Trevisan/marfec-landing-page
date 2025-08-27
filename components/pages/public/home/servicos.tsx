import React from "react";
import { Battery, Wind, Car, Cpu, Gauge, Activity, Zap } from "lucide-react";
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}
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
        "Leitura e interpretação de falhas com equipamentos de última geração.",
    },
    {
      icon: <Gauge size={28} />,
      title: "Mecânica",
      description:
        "Checagem completa dos componentes elétricos e mecânicos do seu veículo.",
    },
    {
      icon: <Cpu size={28} />,
      title: "Injeção Eletrônica",
      description:
        "Diagnóstico e reparo de problemas na injeção eletrônica para melhor desempenho.",
    },
    {
      icon: <Car size={28} />,
      title: "Higienização",
      description:
        "Limpeza profunda do sistema de ar condicionado, eliminando fungos e bactérias.",
    },
  ];
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
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
    </section>
  );
}
