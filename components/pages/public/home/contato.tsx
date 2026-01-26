"use client";

import React from "react";
import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  ShieldCheck,
  Clock2,
  ThumbsUp,
  ChartPie,
} from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion-presets";

type ContactChannel = {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  action?: {
    label: string;
    href: string;
  };
};

type Differentiator = {
  icon: React.ReactNode;
  title: string;
  text: string;
};

export default function Contatos() {
  const contactChannels: ContactChannel[] = [
    {
      icon: <MapPin size={22} />,
      title: "Endereço",
      description: (
        <>
          Rua Noralina Julieta Ribeiro da Silva, 1504 - Serrano
          <br />
          Caxias do Sul, RS - CEP 95059-590
        </>
      ),
      action: {
        label: "Traçar rota",
        href: "https://www.google.com/maps/dir/-29.116851,-51.1318299/Marfec+Ar+condicionado+Automotivo,+Rua+Noralina+Julieta+Ribeiro+da+Silva,+1504+-+Serrano,+Caxias+do+Sul+-+RS,+95059-590/@-29.1165197,-51.1346108,17z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x951ebd568b491167:0xa64c64784302309a!2m2!1d-51.1323011!2d-29.1162583?entry=ttu&g_ep=EgoyMDI2MDEyNS4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D",
      },
    },
    {
      icon: <MessageCircle size={22} />,
      title: "WhatsApp",
      description: <>Resposta rápida em horário comercial.</>,
      action: {
        label: "(54) 99273-9290",
        href: "https://wa.me/54992739290",
      },
    },
    {
      icon: <Clock size={22} />,
      title: "Horário de funcionamento",
      description: <>Segunda a Sexta: 8h às 12h — 13h30 às 18h</>,
    },
  ];

  const differentiators: Differentiator[] = [
    {
      icon: <ShieldCheck size={20} />,
      title: "Garantia total",
      text: "Peças originais, procedimentos auditados e garantia em serviços.",
    },
    {
      icon: <Clock2 size={20} />,
      title: "Agilidade real",
      text: "Check-in rápido, diagnósticos precisos e prazos cumpridos.",
    },
    {
      icon: <ChartPie size={20} />,
      title: "Tecnologia",
      text: "Equipamentos de última geração e leitura avançada.",
    },
    {
      icon: <ThumbsUp size={20} />,
      title: "15+ anos",
      text: "Equipe certificada e experiência comprovada no setor.",
    },
  ];

  return (
    <motion.section
      id="contact"
      className="bg-gradient-to-b from-gray-50 via-white to-white pb-16 pt-16 md:pb-24 md:pt-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="mx-auto mb-10 max-w-3xl text-center"
          variants={fadeUp}
        >
          <span className="inline-flex items-center rounded-full bg-[#FF6B00]/10 text-[#FF6B00] px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em]">
            Atendimento presencial e digital
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
            Entre em contato com a Marfec
          </h2>
          <p className="mt-3 text-gray-600">
            Escolha o canal ideal para seu atendimento e já saia com data e hora
            agendadas.
          </p>
        </motion.div>

        <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-2xl">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#FF6B00]/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-32 bottom-0 h-64 w-64 rounded-full bg-[#FF6B00]/5 blur-3xl" />

          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr]">
            <motion.div
              className="relative flex flex-col gap-8 p-8 md:p-12"
              variants={stagger}
            >
              <motion.div className="flex flex-col gap-3" variants={fadeUp}>
                <div className="inline-flex max-w-max items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700 shadow-sm">
                  <Phone size={14} className="text-[#FF6B00]" />
                  Resposta em minutos no horário comercial
                </div>
                <p className="text-gray-600">
                  Nossa equipe está pronta para confirmar agendamentos,
                  esclarecer dúvidas técnicas e orientar o melhor serviço para o
                  seu veículo.
                </p>
              </motion.div>

              <motion.div className="space-y-4" variants={stagger}>
                {contactChannels.map((channel, index) => (
                  <motion.div
                    key={channel.title}
                    className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-gray-50/80 px-4 py-4 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:border-[#FF6B00]/30 hover:shadow-md"
                    variants={fadeUp}
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FF6B00]/10 text-[#FF6B00]">
                      {channel.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <h4 className="text-lg font-semibold text-gray-900">
                          {channel.title}
                        </h4>
                        {channel.action && (
                          <a
                            href={channel.action.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-[#FF6B00] hover:underline"
                          >
                            {channel.action.label}
                          </a>
                        )}
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-gray-600">
                        {channel.description}
                      </p>
                      {index === 1 && (
                        <p className="mt-1 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                          <Phone size={14} /> Atendimento prioritário pelo
                          WhatsApp
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="flex flex-col gap-3 sm:flex-row sm:items-center"
                variants={fadeUp}
              >
                <a
                  href="https://wa.me/54992739290"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FF6B00] px-6 py-3 text-white shadow-lg shadow-[#FF6B00]/30 transition hover:-translate-y-[2px] hover:bg-[#e05e00]"
                >
                  <MessageCircle size={18} />
                  Falar pelo WhatsApp
                </a>
                <a
                  href="tel:+5554992739290"
                  className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-gray-700 hover:text-[#FF6B00]"
                >
                  <Phone size={16} />
                  Ligar agora
                </a>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 gap-3 border-t border-gray-100 pt-2 sm:grid-cols-2"
                variants={stagger}
              >
                {differentiators.map((item) => (
                  <motion.div
                    key={item.title}
                    className="flex items-start gap-3 rounded-xl bg-gray-50 px-4 py-3 shadow-sm"
                    variants={fadeUp}
                  >
                    <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-[#FF6B00]/10 text-[#FF6B00]">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        {item.title}
                      </p>
                      <p className="text-sm text-gray-600">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="relative min-h-[420px] overflow-hidden rounded-b-3xl lg:min-h-[520px] lg:rounded-bl-none lg:rounded-br-3xl"
              variants={fadeUp}
              transition={{ duration: 0.7 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B00]/12 via-white to-transparent" />
              <div className="absolute bottom-6 left-6 z-10 flex flex-wrap gap-2">
                {[
                  "Estacionamento no local",
                  "Acesso fácil pela RS-122",
                  "Café enquanto espera",
                  "Wi‑Fi liberado",
                ].map((info) => (
                  <span
                    key={info}
                    className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-800 shadow-md backdrop-blur"
                  >
                    {info}
                  </span>
                ))}
              </div>
              <iframe
                title="Localização Marfec Serviços Automotivos"
                src="https://www.google.com/maps/place/Marfec+Ar+condicionado+Automotivo/@-29.1161932,-51.1348786,17z/data=!3m1!4b1!4m6!3m5!1s0x951ebd568b491167:0xa64c64784302309a!8m2!3d-29.1161979!4d-51.1323037!16s%2Fg%2F11l2bzh7p9?entry=ttu&g_ep=EgoyMDI2MDEyNS4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D"
                loading="lazy"
                className="absolute inset-0 h-full w-full border-0"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
