import React from "react";
import { Car, Truck, Tractor, Bike, ShieldCheck, Wrench } from "lucide-react";
interface VehicleTypeCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  examples: string[];
}
function VehicleTypeCard({
  icon,
  title,
  description,
  examples,
}: VehicleTypeCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-[#FF6B00]/20 hover:-translate-y-1">
      <div className="w-14 h-14 bg-[#FF6B00]/10 rounded-full flex items-center justify-center text-[#FF6B00] mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {examples.map((example, index) => (
          <span
            key={index}
            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
          >
            {example}
          </span>
        ))}
      </div>
    </div>
  );
}
export default function MarcasAtendidas() {
  const vehicleTypes = [
    {
      icon: <Car size={28} />,
      title: "Carros de Passeio",
      description:
        "Serviços para veículos compactos, sedans e hatches de todas as marcas.",
      examples: [
        "Volkswagen",
        "Fiat",
        "Chevrolet",
        "Hyundai",
        "Toyota",
        "Honda",
      ],
    },
    {
      icon: <Car size={28} className="transform rotate-12" />,
      title: "Veículos de Luxo",
      description:
        "Manutenção especializada para veículos premium e de alto padrão.",
      examples: [
        "BMW",
        "Mercedes-Benz",
        "Audi",
        "Lexus",
        "Volvo",
        "Land Rover",
      ],
    },
    {
      icon: <Truck size={28} />,
      title: "SUVs e Crossovers",
      description:
        "Diagnóstico e reparos para utilitários esportivos de todos os portes.",
      examples: ["Jeep", "Mitsubishi", "Nissan", "Ford", "Kia", "Renault"],
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Garantia de Fábrica",
      description: "Manutenção que preserva a garantia original do fabricante.",
      examples: [
        "Revisões Programadas",
        "Manutenção Preventiva",
        "Serviços Homologados",
      ],
    },
    {
      icon: <Tractor size={28} />,
      title: "Utilitários",
      description: "Serviços para picapes, vans e veículos de trabalho.",
      examples: [
        "Toyota Hilux",
        "Ford Ranger",
        "Fiat Toro",
        "Renault Master",
        "Fiorino",
      ],
    },
    {
      icon: <Wrench size={28} />,
      title: "Multimarcas",
      description:
        "Atendimento especializado para veículos de todas as origens.",
      examples: [
        "Nacionais",
        "Importados",
        "Asiáticos",
        "Europeus",
        "Americanos",
      ],
    },
  ];
  return (
    <section id="brands" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Veículos que Atendemos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nossa equipe está capacitada para atender diversos tipos de
            veículos, independente da marca ou modelo.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {vehicleTypes.map((type, index) => (
            <VehicleTypeCard
              key={index}
              icon={type.icon}
              title={type.title}
              description={type.description}
              examples={type.examples}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
