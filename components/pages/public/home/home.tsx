import { AvaliacoesClientes } from "./avaliacoes-clientes";
import Carrossel from "./carrossel";
import Contatos from "./contato";
import Footer from "./footer";
import Header from "./header";
import MarfecQualidade from "./hero";
import MarcasAtendidas from "./marcas";
import ServicosPrestados from "./servicos";
import Sobre from "./sobre";

export default function HomePage() {
  return (
    <div className="h-full bg-white">
      <Header />
      <main>
        <MarfecQualidade />
        <ServicosPrestados />
        <MarcasAtendidas />
        <Sobre />
        <AvaliacoesClientes />
        <Carrossel />
        <Contatos />
      </main>
      <Footer />
    </div>
  );
}
