"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  {
    url: "/images/carrossel/compass.jpg",
    alt: "Mecânico trabalhando em sistema elétrico automotivo",
    caption: "Diagnóstico sistema de iluminação",
  },
  {
    url: "/images/carrossel/jetta.jpg",
    alt: "Serviço de ar-condicionado automotivo",
    caption: "Revisão componentes de suspensão",
  },
  {
    url: "/images/carrossel/jetta2.jpg",
    alt: "Carro sendo reparado na oficina",
    caption: "Manutenção sistema de freios",
  },
  {
    url: "/images/carrossel/CARROSSEL1.jpg",
    alt: "Diagnóstico computadorizado de veículo",
    caption: "Atendimento especializado para linha premium",
  },
  {
    url: "/images/carrossel/CARROSSEL2.jpg",
    alt: "Carro esportivo em manutenção",
    caption: "Diagnóstico completo do sistema elétrico",
  },
  {
    url: "/images/carrossel/CARROSSEL3.jpg",
    alt: "Detalhe de reparo em componente automotivo",
    caption: "Precisão e acertividade em cada serviço",
  },
  {
    url: "/images/carrossel/CARROSSEL4.jpg",
    alt: "Detalhe de reparo em componente automotivo",
    caption: "Atenção aos mínimos detalhes",
  },
  {
    url: "/images/carrossel/CARROSSEL5.jpg",
    alt: "Detalhe de reparo em componente automotivo",
    caption: "Transparencia, honestidade e profissionalismo",
  },
  {
    url: "/images/carrossel/CARROSSEL6.jpg",
    alt: "Detalhe de reparo em componente automotivo",
    caption: "A atenção que seu carro precisa",
  },
  {
    url: "/images/carrossel/CARROSSEL7.jpg",
    alt: "Detalhe de reparo em componente automotivo",
    caption: "Com a qualidade que você merece",
  },
];

/**
 * Um hook personalizado para determinar o número de itens visíveis no carrossel com base no tamanho da tela.
 * @returns {number} O número de itens visíveis.
 */
function useVisibleCount() {
  const [count, setCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCount(1); // mobile
      } else if (window.innerWidth < 1024) {
        setCount(2); // tablet
      } else {
        setCount(3); // desktop
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return count;
}

/**
 * Um componente de carrossel para exibir uma galeria de serviços.
 * É responsivo e ajusta o número de itens visíveis com base no tamanho da tela.
 *
 * @returns {React.ReactElement} O componente Carrossel renderizado.
 */
export default function Carrossel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = useVisibleCount();

  /**
   * Move o carrossel para o próximo slide.
   */
  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === galleryImages.length - visibleCount ? 0 : prev + 1
    );
  };

  /**
   * Move o carrossel para o slide anterior.
   */
  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? galleryImages.length - visibleCount : prev - 1
    );
  };

  return (
    <section id="gallery" className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Título */}
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
          {/* Botão Anterior */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-[#FF6B00] z-10 focus:outline-none"
            aria-label="Imagem anterior"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Botão Próximo */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-[#FF6B00] z-10 focus:outline-none"
            aria-label="Próxima imagem"
          >
            <ChevronRight size={20} />
          </button>

          {/* Container do carrossel */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / visibleCount)
                }%)`,
              }}
            >
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="w-full sm:w-1/2 lg:w-1/3 px-3 flex-shrink-0"
                >
                  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg h-full flex flex-col">
                    <div className="h-64 overflow-hidden relative">
                      <Image
                        src={image.url}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                        sizes="(max-width: 640px) 100vw,
                               (max-width: 1024px) 50vw,
                               33vw"
                        priority={index === 0}
                      />
                    </div>
                    <div className="p-4 text-center">
                      <p className="text-gray-200 text-sm sm:text-base">
                        {image.caption}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center mt-8">
          {galleryImages
            .slice(0, galleryImages.length - visibleCount + 1)
            .map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full mx-1 transition-colors ${
                  index === currentIndex ? "bg-[#FF6B00]" : "bg-gray-500"
                }`}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
        </div>
      </div>
      <div className="flex text-center justify-center mt-25">
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
