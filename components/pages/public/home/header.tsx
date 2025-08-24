"use client";

import { useEffect, useState } from "react";
import { Menu, Car } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const NAV_LINKS = [
  { id: "services", label: "Serviços" },
  { id: "brands", label: "Veículos" },
  { id: "about", label: "Sobre Nós" },
  { id: "testimonials", label: "Depoimentos" },
  { id: "gallery", label: "Galeria" },
];

function NavLink({
  id,
  label,
  onClick,
  isPrimary = false,
}: {
  id: string;
  label: string;
  onClick: (id: string) => void;
  isPrimary?: boolean;
}) {
  return (
    <button
      onClick={() => onClick(id)}
      className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
        isPrimary
          ? "bg-[#FF6B00] text-white hover:bg-[#e05e00]"
          : "text-black hover:text-[#FF6B00]"
      }`}
    >
      {label}
    </button>
  );
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false); // controla abertura do sheet

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false); // fecha o menu depois de clicar
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
        <div className="flex items-center">
          <div
            className={`w-10 h-10 rounded-full ${
              isScrolled ? "bg-[#FF6B00]" : "bg-white"
            } flex items-center justify-center mr-3`}
          >
            <Car
              size={24}
              className={isScrolled ? "text-white" : "text-[#FF6B00]"}
            />
          </div>
          <span
            className={`text-2xl font-bold ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            MARFEC
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`${
                isScrolled ? "text-black" : "text-white"
              } hover:text-[#FF6B00] transition-colors`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-[#FF6B00] text-white px-5 py-2.5 rounded-md hover:bg-[#e05e00] font-medium"
          >
            Contato
          </button>
        </nav>

        {/* Mobile Navigation (Sheet do shadcn) */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              className={`md:hidden ${isScrolled ? "text-black" : "text-white"}`}
            >
              <Menu size={24} />
            </button>
          </SheetTrigger>
          <SheetContent side="top" className="p-4">
            <div className="flex flex-col space-y-4">
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
