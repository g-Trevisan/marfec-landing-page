"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { id: "services", label: "Serviços" },
  { id: "brands", label: "Veículos" },
  { id: "about", label: "Sobre Nós" },
  { id: "testimonials", label: "Depoimentos" },
  { id: "gallery", label: "Galeria" },
];

/**
 * Props para o componente NavLink.
 * @property {string} id - O ID da seção para a qual rolar.
 * @property {string} label - O texto a ser exibido para o link.
 * @property {(id: string) => void} onClick - A função a ser chamada quando o link é clicado.
 * @property {boolean} [isPrimary=false] - Se verdadeiro, o link terá um estilo primário.
 */
interface NavLinkProps {
  id: string;
  label: string;
  onClick: (id: string) => void;
  isPrimary?: boolean;
}

/**
 * Um componente de link de navegação que rola para uma seção específica na página.
 *
 * @param {NavLinkProps} props - As props para o componente NavLink.
 * @returns {React.ReactElement} O componente NavLink renderizado.
 */
function NavLink({ id, label, onClick, isPrimary = false }: NavLinkProps) {
  return (
    <Button
      variant={isPrimary ? "default" : "ghost"}
      onClick={() => onClick(id)}
      className={`w-full justify-start cursor-pointer ${
        isPrimary
          ? "bg-[#FF6B00] hover:bg-[#e05e00] text-white"
          : "hover:text-[#FF6B00] text-black md:text-inherit"
      }`}
    >
      {label}
    </Button>
  );
}

/**
 * O componente de cabeçalho para o site.
 * Inclui o logotipo, navegação de desktop e uma folha de navegação móvel.
 * O cabeçalho muda de aparência quando o usuário rola a página.
 *
 * @returns {React.ReactElement} O componente Header renderizado.
 */
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /**
   * Rola a página para a seção com o ID fornecido.
   * @param {string} id - O ID da seção para a qual rolar.
   */
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-black/70 backdrop-blur-md py-4"
      }`}
    >
      <div className="mx-auto px-2 lg:px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center py-2 px-2">
          {isScrolled ? (
            <Image
              src={"/images/logos/MARFEC_PRETO.png"}
              alt="Logo branco Marfec"
              width={80}
              height={50}
              priority
            />
          ) : (
            <Image
              src={"/images/logos/MARFEC_BRANCO.png"}
              alt="Logo preto Marfec"
              width={80}
              height={50}
              priority
            />
          )}
        </div>

        {/* Navegação de Desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          {NAV_LINKS.map((link) => (
            <Button
              key={link.id}
              variant="ghost"
              onClick={() => scrollToSection(link.id)}
              className={`transition-colors  ${
                isScrolled ? "text-black" : "text-white"
              } hover:text-[#FF6B00]`}
            >
              {link.label}
            </Button>
          ))}
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-[#FF6B00] hover:bg-[#e05e00] text-white px-5 py-2.5 font-medium"
          >
            Contato
          </Button>
        </nav>

        {/* Navegação Móvel */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className={`md:hidden p-2 ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              <Menu size={24} />
            </Button>
          </SheetTrigger>
          <SheetContent side="top" className="p-4">
            <div className="flex flex-col space-y-2">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.id}
                  {...link}
                  onClick={scrollToSection}
                />
              ))}
              <NavLink
                id="contact"
                label="Contato"
                onClick={scrollToSection}
                isPrimary
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
