"use client";

import { useEffect, useMemo, useState, type KeyboardEvent } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion-presets";

interface TestimonialProps {
  name: string;
  text: string;
  rating: number;
}

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
  },
];

const averageRating =
  testimonials.reduce((total, item) => total + item.rating, 0) /
  testimonials.length;

function useVisibleCount() {
  const [count, setCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCount(1);
      } else if (window.innerWidth < 1024) {
        setCount(2);
      } else {
        setCount(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return count;
}

function AvaliacaoCard({ name, text, rating }: TestimonialProps) {
  return (
    <motion.article
      className="group h-full rounded-2xl border border-gray-100 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#FF6B00]/30"
      variants={fadeUp}
    >
      <div className="flex items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={18}
              className={
                i < rating ? "text-[#FF6B00] fill-[#FF6B00]" : "text-gray-300"
              }
            />
          ))}
        </div>
        <span className="text-xs font-semibold uppercase tracking-wide text-gray-400">
          Depoimento
        </span>
      </div>
      <p className="text-gray-600 italic leading-relaxed">&quot;{text}&quot;</p>
      <div className="mt-6 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FF6B00]/10 text-[#FF6B00] font-semibold">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-gray-900">{name}</p>
          <p className="text-xs text-gray-400">Cliente Marfec</p>
        </div>
      </div>
    </motion.article>
  );
}

function RatingSummary() {
  return (
    <div className="inline-flex items-center gap-4 rounded-2xl border border-[#FF6B00]/20 bg-white px-5 py-3 shadow-sm">
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            size={16}
            className="text-[#FF6B00] fill-[#FF6B00]"
          />
        ))}
      </div>
      <div className="text-left">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
          Avaliação média
        </p>
        <p className="text-lg font-semibold text-gray-900">
          {averageRating.toFixed(1)} de 5
        </p>
      </div>
    </div>
  );
}

export function AvaliacoesClientes() {
  const visibleCount = useVisibleCount();
  const [currentPage, setCurrentPage] = useState(0);

  const pageCount = useMemo(
    () => Math.max(1, Math.ceil(testimonials.length / visibleCount)),
    [visibleCount],
  );
  const maxPage = pageCount - 1;

  useEffect(() => {
    setCurrentPage((prev) => Math.min(prev, maxPage));
  }, [maxPage]);

  const nextSlide = () => {
    setCurrentPage((prev) => (prev === maxPage ? 0 : prev + 1));
  };
  const prevSlide = () => {
    setCurrentPage((prev) => (prev === 0 ? maxPage : prev - 1));
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      nextSlide();
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      prevSlide();
    }
  };
  return (
    <motion.section
      id="testimonials"
      className="relative overflow-hidden bg-gray-50 py-16 md:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
    >
      <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-[#FF6B00]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-[#FF6B00]/10 blur-3xl" />
      <div className="container relative mx-auto px-4">
        <motion.div
          className="mb-10 flex flex-col items-center gap-6 text-center lg:flex-row lg:items-end lg:justify-between lg:text-left"
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              O que Nossos Clientes Dizem
            </h2>
            <p className="text-gray-600 max-w-2xl">
              A satisfação dos clientes é a nossa maior recompensa! Mais
              avaliações como essas podem ser encontradas em nosso perfil do
              Google. Confira alguns depoimentos.
            </p>
          </motion.div>
          <motion.div variants={fadeUp}>
            <RatingSummary />
          </motion.div>
        </motion.div>

        <div
          className="relative rounded-3xl border border-white/60 bg-white/60 p-4 shadow-sm backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00]/40 sm:p-6"
          onKeyDown={handleKeyDown}
          role="region"
          aria-roledescription="carrossel"
          aria-label="Depoimentos de clientes"
          tabIndex={0}
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-16 bg-gradient-to-r from-gray-50 to-transparent sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-16 bg-gradient-to-l from-gray-50 to-transparent sm:block" />

          <div className="overflow-hidden">
            <div
              className="flex items-stretch transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentPage * 100}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="basis-full shrink-0 px-3 sm:basis-1/2 sm:px-4 lg:basis-1/3"
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
            className="absolute left-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-600 shadow-lg transition-colors hover:text-[#FF6B00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00]/50 sm:flex"
            aria-label="Depoimento anterior"
            type="button"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-600 shadow-lg transition-colors hover:text-[#FF6B00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00]/50 sm:flex"
            aria-label="Próximo depoimento"
            type="button"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <motion.div
          className="mt-8 flex items-center justify-center gap-4"
          variants={fadeUp}
        >
          <button
            onClick={prevSlide}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition-colors hover:text-[#FF6B00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00]/50 sm:hidden"
            aria-label="Depoimento anterior"
            type="button"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex items-center gap-2">
            {Array.from({ length: pageCount }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  index === currentPage ? "bg-[#FF6B00]" : "bg-gray-300"
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
                type="button"
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition-colors hover:text-[#FF6B00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00]/50 sm:hidden"
            aria-label="Próximo depoimento"
            type="button"
          >
            <ChevronRight size={18} />
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}
