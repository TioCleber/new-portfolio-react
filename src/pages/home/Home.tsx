import { lazy, Suspense } from "react";

import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

import TypeWriter from "../../components/external-components/typewriter/TypeWriter";
import Projects from "../../components/projects/Projects";
import {
  FIRST_PROJECT,
  SECOND_PROJECT,
} from "../../constants/dangerouslySetInnerHTML";

const Slider = lazy(
  () => import("../../components/external-components/slider/Slider")
);

const Home = () => {
  const text = [
    "Atualmente estou atuando como Desenvolvedor Pleno",
    "Possuo experiências com:",
    "JavaScript, JQuery, ReactJs, NodeJs, ExpressJs, Graphql, Git e muito mais...",
  ];

  return (
    <>
      <Header />

      <main>
        <section>
          <div>
            <h1>Olá seja muito bem-vindo</h1>

            <h2>Sou Cleber, e</h2>

            <TypeWriter text={text} />

            <p>
              aqui você irá encontrar tudo sobre meu desenvolvimento
              profissional e tudo sobre o que tenho consumindo como
              desenvolvedor e até mesmo saber como pode estar batendo um papo
              comigo e acrescentar mais em meu desenvolvimento ou avaliar o que
              eu poderia estar melhorando, desde já agradeço por estar aqui e
              até mais ;).
            </p>
          </div>
        </section>

        <section id="about" style={{ height: 500 }}>
          <h1>Sobre</h1>
        </section>

        <section id="projects">
          <Suspense>
            <Slider
              sliderElement={[
                <Projects
                  title="Pousada Secreta"
                  imageLink="https://pousada-secreta.netlify.app/"
                  imageSrc="https://portifolio-zac.netlify.app/assets/pousada.png"
                  dangerouslySetInnerHTML={FIRST_PROJECT}
                />,
                <Projects
                  title="Cm-Life"
                  imageLink="https://cmlife.netlify.app/"
                  imageSrc="https://portifolio-zac.netlify.app/assets/cmlife.png"
                  dangerouslySetInnerHTML={SECOND_PROJECT}
                />,
              ]}
            />
          </Suspense>
        </section>

        <section id="skills"></section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
