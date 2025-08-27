import React from "react";
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  MessageCircle,
  ShieldCheck,
  Clock2,
  ThumbsUp,
  ChartPie,
} from "lucide-react";
export default function Contatos() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Entre em Contato
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estamos prontos para atender você. Escolha a forma de contato mais
            conveniente para suas necessidades.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#FF6B00]/10 rounded-full flex items-center justify-center text-[#FF6B00] mr-4 flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Endereço</h4>
                    <p className="text-gray-600">
                      Rua. Noralina Julieta Ribeiro da Silva, 1504 - Serrano
                      <br />
                      Caxias do Sul, RS - CEP 95059-590
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#FF6B00]/10 rounded-full flex items-center justify-center text-[#FF6B00] mr-4 flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Telefone</h4>
                    <a
                      href="tel:54992739290"
                      className="text-gray-600 hover:text-[#FF6B00]"
                    >
                      (54) 99273-9290
                    </a>
                    <p className="text-gray-500 text-sm">Horário comercial</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#FF6B00]/10 rounded-full flex items-center justify-center text-[#FF6B00] mr-4 flex-shrink-0">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">WhatsApp</h4>
                    <a
                      href="https://wa.me/54992739290"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#FF6B00]"
                    >
                      (54) 99273-9290
                    </a>
                    <p className="text-gray-500 text-sm">Resposta rápida</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#FF6B00]/10 rounded-full flex items-center justify-center text-[#FF6B00] mr-4 flex-shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">
                      Horário de Funcionamento
                    </h4>
                    <p className="text-gray-600">Segunda a Sexta: 8h às 12h - 13:30 às 18h</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 bg-black text-white p-6 rounded-lg">
              <h4 className="text-lg font-medium mb-3">
                ATENDIMENTO WHATSAPP
              </h4>
              <p className="mb-4">Disponível de segunda a sexta-feira.</p>
              <div className="flex items-center">
                <Phone size={20} className="mr-2 text-[#FF6B00]" />
                <a
                  href="https://wa.me/54992739290" target="_blank"
                  className="text-lg font-medium hover:text-[#FF6B00] transition-colors"
                >
                  (54) 9 9273-9290
                </a>
              </div>
            </div>
          </div>
          {/* Why Choose Us Section - Replacing the contact form */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-6">
              Por que escolher a Marfec?
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#FF6B00]/10 rounded-full flex items-center justify-center text-[#FF6B00] mr-4 flex-shrink-0">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">
                    Garantia de Qualidade
                  </h4>
                  <p className="text-gray-600">
                    Todos os nossos serviços possuem garantia. Utilizamos apenas
                    peças originais e de primeira qualidade para assegurar o melhor
                    desempenho do seu veículo.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#FF6B00]/10 rounded-full flex items-center justify-center text-[#FF6B00] mr-4 flex-shrink-0">
                  <Clock2 size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">
                    Agilidade no Atendimento
                  </h4>
                  <p className="text-gray-600">
                    Entendemos que seu tempo é valioso. Nossa equipe trabalha
                    com eficiência para entregar seu veículo no prazo combinado,
                    sem comprometer a qualidade.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#FF6B00]/10 rounded-full flex items-center justify-center text-[#FF6B00] mr-4 flex-shrink-0">
                  <ChartPie size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">
                    Tecnologia Avançada
                  </h4>
                  <p className="text-gray-600">
                    Investimos constantemente em equipamentos e ferramentas de
                    última geração para diagnósticos precisos e reparos
                    eficientes.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#FF6B00]/10 rounded-full flex items-center justify-center text-[#FF6B00] mr-4 flex-shrink-0">
                  <ChartPie size={24} />
                </div>
              <div>
                  <h4 className="text-lg font-medium mb-1">
                    À frente do mercado
                  </h4>
                  <p className="text-gray-600">
                    Buscando ampliar nossos serviços e oferecer o que há de melhor para nossos 
                    clientes, estamos sempre atentos às novidades do mercado automotivo. 
                    E somos a primeira oficina em Caxias do Sul a aceitar Bitcoin como forma de pagamento.
                  </p>
                </div>
                </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#FF6B00]/10 rounded-full flex items-center justify-center text-[#FF6B00] mr-4 flex-shrink-0">
                  <ThumbsUp size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">
                    Experiência Comprovada
                  </h4>
                  <p className="text-gray-600">
                    Com mais de 15 anos de experiência, nossa equipe de técnicos
                    certificados possui vasta experiência em diversas áreas que abrangem a reparação automotiva.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <a
                href="https://wa.me/54992739290"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#229922] text-white px-6 py-3 rounded-md hover:bg-[#228522] transition-colors font-medium"
              >
                Fale Conosco pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
