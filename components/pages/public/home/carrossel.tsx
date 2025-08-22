"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
export default function Carrossel() {
  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1632823471565-1ecdf4ef7df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Mecânico trabalhando em sistema elétrico automotivo",
      caption: "Diagnóstico avançado de sistema elétrico",
    },
    {
      url: "https://images.unsplash.com/photo-1562517634-baa2da3acfbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Serviço de ar-condicionado automotivo",
      caption: "Manutenção de ar-condicionado",
    },
    {
      url: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Carro sendo reparado na oficina",
      caption: "Reparo completo de sistema elétrico",
    },
    {
      url: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Diagnóstico computadorizado de veículo",
      caption: "Diagnóstico eletrônico de última geração",
    },
    {
      url: "https://images.unsplash.com/photo-1593765087542-62fe9a0e0658?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Carro esportivo em manutenção",
      caption: "Atendimento especializado para veículos de alto padrão",
    },
    {
      url: "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Detalhe de reparo em componente automotivo",
      caption: "Precisão em cada serviço",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === galleryImages.length - getVisibleCount() ? 0 : prevIndex + 1
    );
  };
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - getVisibleCount() : prevIndex - 1
    );
  };
  // Determine how many images to show based on screen size
  const getVisibleCount = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 1; // Mobile
      if (window.innerWidth < 1024) return 2; // Tablet
    }
    return 3; // Desktop
  };
  return (
    <section id="gallery" className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossa Galeria de Serviços
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Conheça alguns dos nossos trabalhos realizados. Qualidade e
            excelência em cada serviço.
          </p>
        </div>
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-[#FF6B00] z-10 focus:outline-none"
            aria-label="Imagem anterior"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-[#FF6B00] z-10 focus:outline-none"
            aria-label="Próxima imagem"
          >
            <ChevronRight size={20} />
          </button>
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / getVisibleCount())
                }%)`,
              }}
            >
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="w-full sm:w-1/2 lg:w-1/3 px-3 flex-shrink-0"
                >
                  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg h-full flex flex-col">
                    <div className="h-64 overflow-hidden">
                      <img
                        src={image.url}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <p className="text-gray-200">{image.caption}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Dot indicators */}
        <div className="flex justify-center mt-8">
          {galleryImages
            .slice(0, galleryImages.length - getVisibleCount() + 1)
            .map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full mx-1 ${
                  index === currentIndex ? "bg-[#FF6B00]" : "bg-gray-500"
                }`}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
