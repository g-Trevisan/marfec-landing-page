"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion-presets";

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
  { name: "Fiat", url: '/images/logos/fiat.png' },
  { name: "Chevy", url: '/images/logos/chevy.png' },
  { name: "Peugeot", url: '/images/logos/peugeot.png' },
  { name: "Citroen", url: '/images/logos/citroen.png' },
];

export default function MarcasAtendidas() {
  return (
    <motion.section
      id="brands"
      className="py-16 md:py-24 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
    >
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-12" variants={fadeUp}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Marcas que Atendemos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trabalhamos com veículos de diversas marcas, nacionais e importadas.
          </p>
        </motion.div>

        {/* GRID de Logos */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 gap-4 sm:gap-8 place-items-center"
          variants={stagger}
        >
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex items-center justify-center sm:w-40 sm:h-28 
                         transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              variants={fadeUp}
            >
              <Image
                src={brand.url}
                alt={brand.name}
                className="object-contain"
                width={120}
                height={80}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
