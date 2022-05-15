import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import TypeWriter from "../../components/typewriter/TypeWriter";

const Home = () => {
  const text = "Atualmente estou atuando como Desenvolvedor Jr.";

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

        <section id="about">
          <h1>Sobre</h1>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
