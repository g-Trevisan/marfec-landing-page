# Marfec - Landing Page

Esta é a landing page oficial da Marfec, um centro automotivo. O projeto foi construído com [Next.js](https://nextjs.org) e apresenta os serviços, marcas e informações de contato da empresa.

## Índice

- [Começando](#começando)
  - [Pré-requisitos](#pré-requisitos)
  - [Instalação](#instalação)
  - [Executando o Servidor de Desenvolvimento](#executando-o-servidor-de-desenvolvimento)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Implantação](#implantação)

## Começando

Siga estas instruções para obter uma cópia do projeto em execução em sua máquina local para fins de desenvolvimento e teste.

### Pré-requisitos

Certifique-se de ter o seguinte software instalado em sua máquina:

- [Node.js](https://nodejs.org/) (v20 ou posterior)
- [npm](https://www.npmjs.com/) (ou um gerenciador de pacotes semelhante como [Yarn](https://yarnpkg.com/) ou [pnpm](https://pnpm.io/))

### Instalação

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/seu-usuario/marfec-landing-page.git
    cd marfec-landing-page
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    ```

### Executando o Servidor de Desenvolvimento

Após a instalação das dependências, você pode executar o servidor de desenvolvimento:

```bash
npm run dev
```

Isso iniciará o servidor de desenvolvimento em [http://localhost:3000](http://localhost:3000). Abra esta URL em seu navegador para ver a aplicação.

## Estrutura do Projeto

O projeto segue a estrutura de diretórios padrão do Next.js `app`:

-   `app/`: Contém todas as rotas, páginas e layouts da aplicação.
    -   `layout.tsx`: O layout raiz da aplicação.
    -   `page.tsx`: O ponto de entrada principal para a página inicial.
    -   `(pages)/`: Um grupo de diretórios para as páginas principais do site.
-   `components/`: Contém todos os componentes React usados na aplicação.
    -   `ui/`: Componentes de UI reutilizáveis como botões, folhas e áreas de rolagem.
    -   `pages/`: Componentes específicos de uma página em particular.
-   `lib/`: Contém funções utilitárias e scripts auxiliares.
    -   `utils.ts`: Uma função utilitária para mesclar classes CSS.
-   `public/`: Contém ativos estáticos como imagens e fontes.
-   `styles/`: Contém estilos globais e configurações de CSS.

## Tecnologias Utilizadas

-   [Next.js](https://nextjs.org/): Um framework React para construir aplicações web renderizadas no servidor e geradas estaticamente.
-   [React](https://reactjs.org/): Uma biblioteca JavaScript para construir interfaces de usuário.
-   [TypeScript](https://www.typescriptlang.org/): Um superset tipado de JavaScript que compila para JavaScript puro.
-   [Tailwind CSS](https://tailwindcss.com/): Um framework CSS utility-first para desenvolvimento rápido de UI.
-   [Radix UI](https://www.radix-ui.com/): Uma coleção de componentes de UI não estilizados e acessíveis.
-   [Lucide React](https://lucide.dev/): Uma biblioteca de ícones com design simples e bonito.

## Implantação

Esta aplicação está pronta para ser implantada na [Plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme), dos criadores do Next.js.

Para mais informações sobre a implantação de uma aplicação Next.js, consulte a [documentação de implantação do Next.js](https://nextjs.org/docs/app/building-your-application/deploying).
