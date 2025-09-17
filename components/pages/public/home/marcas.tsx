'use client'

import Image from "next/image";

const brands = [
  { name: "Audi", url: '/images/logos/audi.png' },
  { name: "BMW", url: '/images/logos/bmw.png' },
  { name: "Ford", url: '/images/logos/ford.png' },
  { name: "Honda", url: '/images/logos/honda.png' },
  { name: "Jeep", url: '/images/logos/jeep.png' },
  { name: "Land Rover", url: '/images/logos/landrover.png' },
  { name: "MBB", url: '/images/logos/mbb.png' },
  { name: "Mini", url: '/images/logos/mini.png' },
  { name: "Mitsubishi", url: '/images/logos/mitsu.png' },
  { name: "Porsche", url: '/images/logos/porsche.png' },
  { name: "Ram", url: '/images/logos/ram.png' },
  { name: "Toyota", url: '/images/logos/toyota.png' },
  { name: "Volvo", url: '/images/logos/volvo.png' },
  { name: "VW", url: '/images/logos/vw.png' },
];

/**
 * Uma seção que exibe os logotipos das marcas de carros que a empresa atende.
 *
 * @returns {React.ReactElement} A seção de Marcas renderizada.
 */
export default function MarcasAtendidas() {
  return (
    <section id="brands" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Marcas que Atendemos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trabalhamos com veículos de diversas marcas, nacionais e importadas.
          </p>
        </div>

        {/* GRID de Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 gap-4 sm:gap-8 place-items-center">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex items-center justify-center sm:w-40 sm:h-28 
                         transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Image
                src={brand.url}
                alt={brand.name}
                className="object-contain"
                width={120}
                height={80}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
