"use client";

import { useEffect, useState } from "react";
import { Menu, X, Car } from "lucide-react";
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
      setMobileMenuOpen(false);
    }
  };
  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-black/70 backdrop-blur-md py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
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
          <button
            onClick={() => scrollToSection("services")}
            className={`${
              isScrolled ? "text-black" : "text-white"
            } hover:text-[#FF6B00] transition-colors`}
          >
            Serviços
          </button>
          <button
            onClick={() => scrollToSection("brands")}
            className={`${
              isScrolled ? "text-black" : "text-white"
            } hover:text-[#FF6B00] transition-colors`}
          >
            Veículos
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className={`${
              isScrolled ? "text-black" : "text-white"
            } hover:text-[#FF6B00] transition-colors`}
          >
            Sobre Nós
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className={`${
              isScrolled ? "text-black" : "text-white"
            } hover:text-[#FF6B00] transition-colors`}
          >
            Depoimentos
          </button>
          <button
            onClick={() => scrollToSection("gallery")}
            className={`${
              isScrolled ? "text-black" : "text-white"
            } hover:text-[#FF6B00] transition-colors`}
          >
            Galeria
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className={`${
              isScrolled ? "text-black" : "text-white"
            } hover:text-[#FF6B00] transition-colors bg-[#FF6B00] px-5 py-2.5 rounded-md hover:bg-[#e05e00] font-medium`}
          >
            Contato
          </button>
        </nav>
        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${isScrolled ? "text-black" : "text-white"}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("services")}
              className="text-black hover:text-[#FF6B00] transition-colors py-2"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("brands")}
              className="text-black hover:text-[#FF6B00] transition-colors py-2"
            >
              Veículos
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-black hover:text-[#FF6B00] transition-colors py-2"
            >
              Sobre Nós
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-black hover:text-[#FF6B00] transition-colors py-2"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-black hover:text-[#FF6B00] transition-colors py-2"
            >
              Galeria
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-black hover:text-[#FF6B00] transition-colors py-2 bg-[#FF6B00] text-white px-4 rounded-md hover:bg-[#e05e00] w-full"
            >
              Contato
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
