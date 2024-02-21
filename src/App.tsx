import { SimpleGrid } from "@chakra-ui/react";
import CardComponent from "./components/CardComponent";
import FooterComponent from "./components/FooterComponent";
import Header from "./components/Header";
import Info from "./components/Info";
import './App.css';

function App() {
  const portiFolioInfo = [
    {
      id: 1,
      nome: "My Games",
      imagem: "/prints/print-1.png",
      linkApp: "https://my-games-beta.vercel.app",
      descricao: "App feito com React, sobre jogos que já joguei",
      repositorio: "https://github.com/filipanselmo11/my-games"
    },
    {
      id: 2,
      nome: "Vuetify Music App",
      imagem: "/prints/print-3.png",
      linkApp: "https://vuetify-music-app.vercel.app",
      descricao: "Projeto feito com Vue 2 e Vuetify, de bandas/artistas que eu já escutei",
      repositorio: "https://github.com/filipanselmo11/vuetify-music-app"
    },
    {
      id: 3,
      nome: "Vuetify Theme App",
      imagem: "/prints/print-4.png",
      linkApp: "https://vuetify-theme-app.vercel.app",
      descricao: "App feito com Vue 2 e Vuetify, onde era testado as configurações de temas do Vuetify, com algumas paletas de cores",
      repositorio: "https://github.com/filipanselmo11/vuetify-theme-app"
    },
    {
      id: 4,
      nome: "Vue Galeria de Fotos SGC",
      imagem: "/prints/print-8.png",
      linkApp: "https://vue-galeria-fotos-sgc.vercel.app",
      descricao: "Projeto feito com Vue 2 e Vuetify, de uma galeria de fotos da cidade de São Gabriel da Cachoeira",
      repositorio: "https://github.com/filipanselmo11/vue-galeria-fotos-sgc"
    },
    {
      id: 5,
      nome: "Marvel DC App",
      imagem: "/prints/print-5.png",
      linkApp: "https://marvel-dc-app.vercel.app",
      descricao: "App feito com Vue 2 e Vuetify, de informações de alguns personagens da Marvel e DC",
      repositorio: "https://github.com/filipanselmo11/marvel-dc-app"
    },
    {
      id: 6,
      nome: "Portifólio Antigo",
      imagem: "/prints/print-6.png",
      linkApp: "https://portifolio-wine-tau.vercel.app",
      descricao: "Primeira versão do portifólio, foi feito com HTML 5, CSS 3 e Javascript",
      repositorio: "https://github.com/filipanselmo11/portifolio"
    },
    {
      id: 7,
      nome: "Teste Vue Js Join",
      imagem: "/prints/print-7.png",
      linkApp: "https://teste-vuejs-join.vercel.app",
      descricao: "Projeto do processo seletivo para ingressar na JOIN, foi feito com Vue 2, Vuetify e uma biblioteca de mapas chamado Openlayers",
      repositorio: "https://github.com/filipanselmo11/teste-Vuejs-Join"
    },
    {
      id: 8,
      nome: "Vi Store Angular",
      imagem: "/prints/print-8.png",
      linkApp: "https://vi-store-angular.vercel.app/",
      descricao: "Lading page feito com Angular 17 e Material UI",
      repositorio: "https://github.com/filipanselmo11/vi-store-angular"
    },
  ];

  return (
    <>
      <section id="cabecalho">
        <div className="cabecalho-div"></div>
        <Header />
      </section>
      <br />
      <section id="formulario">
        <Info />
      </section>
      <br/>
      <SimpleGrid columns={3} marginLeft='10'>
        {portiFolioInfo.map((portifolio) => (
          <div>
            <CardComponent
              key={portifolio.id}
              nomeAplicacao={portifolio.nome}
              imagem={portifolio.imagem}
              linkApp={portifolio.linkApp}
              descricao={portifolio.descricao}
              repositorio="''"
            />
            <br />
          </div>
        ))}
      </SimpleGrid>
      <FooterComponent />
    </>
  );
}

export default App;
