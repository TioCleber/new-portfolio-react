import { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const Home = () => {
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const text = "atualmente estou atuando como dev Jr.";

  useEffect(() => {
    const currentTextId: any =
      index < text.length &&
      setTimeout(() => {
        setCurrentText((value) => value + text.charAt(index));
        setIndex((i) => i + 1);
      }, 300);

    !(index < text.length) &&
      setTimeout(() => {
        setCurrentText((value) => value.substring(0, value.length - 1));
        index >= text.length && currentText.length <= 0 && setIndex(0);
      }, 100);

    return () => {
      clearTimeout(currentTextId);
    };
  }, [currentText, index]);

  return (
    <>
      <Header />

      <main>
        <section>
          <div>
            <h1>Olá seja muito bem-vindo</h1>

            <h2>Sou Cleber, e</h2>

            <p>{currentText}</p>

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
      </main>

      <Footer />
    </>
  );
};

export default Home;
