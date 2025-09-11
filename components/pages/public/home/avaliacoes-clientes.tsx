"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
interface TestimonialProps {
  name: string;
  text: string;
  rating: number;
}
function AvaliacaoCard({ name, text, rating }: TestimonialProps) {
  return (
    <div className="bg-white w-95 md:w-360 p-6 rounded-lg shadow-md border border-gray-100 content-center">
      <div className="flex content-center mb-4">
        {Array.from({
          length: 5,
        }).map((_, i) => (
          <Star
            key={i}
            size={18}
            className={
              i < rating ? "text-[#FF6B00] fill-[#FF6B00]" : "text-gray-300"
            }
          />
        ))}
      </div>
      <p className="text-gray-600 italic mb-6">&quot;{text}&quot;</p>
      <div className="flex items-center">
        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 mr-3">
          {name.charAt(0)}
        </div>
        <span className="font-medium">{name}</span>
      </div>
    </div>
  );
}

export function AvaliacoesClientes() {
  const testimonials = [
    {
      name: "Jonatan Soares",
      text: "Confiança, credibilidade, qualidade, eficiência e serviço de primeira. Pessoal muito gente boa, só trabalho com eles. Garanto a vocês que são os melhores da região.",
      rating: 5,
    },
    {
      name: "Leandro",
      text: "Profissionais bem qualificados e preparados, trabalho realizado com total cuidado, tratamento especial com o veículo, local bem organizado, muito top, super indico.",
      rating: 5,
    },
    {
      name: "Anderson",
      text: "Só levo meu carro na Marfec, profissionais de verdade, serviço de qualidade indiscutível, sempre que precisei me deram suporte, sem falar na agilidade do serviço e na honestidade!",
      rating: 5,
    },
    {
      name: "Lucas Oliveira",
      text: "Serviço de alta qualidade, realizado por profissionais atenciosos que explicam cada detalhe do procedimento sem enrolação. Recomendo pela eficiência e transparência.",
      rating: 5,
    },
    {
      name: "Ricardo",
      text: "Ótimo atendimento. Fiz um agendamento para resolver um problema no airbag e no farol dianteiro e aproveitei e fiz uma higienização do ar condicionado. Os rapazes foram muito atenciosos e o preço foi bem justo. Recomendo os serviços!!",
      rating: 5,
    },
    {
      name: "Alessandro",
      text: "A Experiência foi bem positiva, atendimento de qualidade, serviço bem feito e com garantia. Recomendo.",
      rating: 5,
    }
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1
    );
  };
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1
    );
  };
  // const visibleTestimonials = () => {
     // For mobile: show one testimonial
  //   if (typeof window !== "undefined" && window.innerWidth < 640) {
  //   return testimonials.slice(currentIndex, currentIndex + 1);
  //   }
  //   // For tablets: show two testimonials
  //   else if (typeof window !== "undefined" && window.innerWidth < 1024) {
  //     return testimonials.slice(currentIndex, currentIndex + 2);
  //   }
  //   // For desktop: show three testimonials
  //   else {
  //     return testimonials.slice(currentIndex, currentIndex + 3);
  //   }
  // };
  return (
    <section id="testimonials" className="py-10 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que Nossos Clientes Dizem
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A satisfação dos clientes é a nossa maior recompensa! Mais avaliações como essas podem ser encontradas em nosso perfil do Google. Confira
            alguns depoimentos.
          </p>
        </div>
        <div className="relative content-center">
          <div className="flex overflow-hidden">
            <div
              className="flex content-center transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100)}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full sm:w-1/2 lg:w-1/1 px-3 flex-shrink-0"
                >
                  <AvaliacaoCard
                    name={testimonial.name}
                    text={testimonial.text}
                    rating={testimonial.rating}
                  />
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-5 bottom-1/4 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-[#FF6B00] z-10 focus:outline-none"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-5 bottom-1/4 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-[#FF6B00] z-10 focus:outline-none"
            aria-label="Próximo depoimento"
          >
            <ChevronRight size={20} />
          </button>
        </div>
        <div className="flex justify-center mt-8">
          {testimonials.slice(0, testimonials.length - 2).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full mx-1 ${
                index === currentIndex ? "bg-[#FF6B00]" : "bg-gray-300"
              }`}
              aria-label={`Ir para depoimento ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
