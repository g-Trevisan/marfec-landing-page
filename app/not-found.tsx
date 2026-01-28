import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-black" />
      <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-[#FF6B00]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-[#FF6B00]/10 blur-3xl" />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-20 text-center">
        <Image
          src="/images/logos/MARFEC_BRANCO.png"
          alt="Marfec Centro Automotivo"
          width={160}
          height={60}
          priority
        />

        <span className="mt-10 inline-flex items-center rounded-full border border-[#FF6B00]/40 bg-[#FF6B00]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#FF6B00]">
          Erro 404
        </span>

        <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
          Página não encontrada
        </h1>
        <p className="mt-4 max-w-xl text-base text-gray-300 md:text-lg">
          A página que você tentou acessar não existe ou foi movida. Se precisar
          de ajuda, fale com a equipe Marfec e iremos orientar você.
        </p>

        <div className="mt-10 flex w-full max-w-md flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-[#FF6B00] px-6 py-3 font-medium text-white transition-colors hover:bg-[#e05e00]"
          >
            Voltar para o início
          </Link>
          <a
            href="https://wa.me/54992739290"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-[#FF6B00] px-6 py-3 font-medium text-white transition-colors hover:bg-[#FF6B00]"
          >
            Falar no WhatsApp
          </a>
        </div>

        <p className="mt-10 text-xs uppercase tracking-[0.3em] text-gray-500">
          Marfec Centro Automotivo
        </p>
      </div>
    </main>
  );
}
