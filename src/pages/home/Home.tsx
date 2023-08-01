import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import TypeWriter from "../../components/typewriter/TypeWriter";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

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

        <section id="about">
          <h1>Sobre</h1>
        </section>

        <section id="projects">
          {
            <Swiper
              pagination={{
                type: "fraction",
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div>
                  <h2>Pousada Secreta</h2>

                  <div>
                    <a
                      href="https://pousada-secreta.netlify.app/"
                      target="_blank"
                    >
                      <img
                        src="https://portifolio-zac.netlify.app/assets/pousada.png"
                        alt=""
                        loading="lazy"
                        width={1920}
                        height={937}
                        style={{ height: "auto" }}
                      />
                    </a>
                  </div>

                  <div>
                    <p>
                      Projeto concluído feito em meu início de aprendizado com{" "}
                      <strong>HTML</strong>,<strong>CSS</strong> e com
                      implementação de <strong>JS</strong> somente para links
                      suaves, É um projeto que eu comecei pela plataforma da{" "}
                      <strong>DevMedia</strong> onde tenho aprendido bastante
                      conteúdos relacionados ao Front.
                    </p>

                    <p>
                      É sobre uma pousada fictícia onde são apresentados os
                      tipos de quartos para clientes que se interessarem e
                      contatarem.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <h2>Cm-Life</h2>
                  <div>
                    <a href="https://cmlife.netlify.app/" target="_blank">
                      <img
                        src="https://portifolio-zac.netlify.app/assets/cmlife.png"
                        alt=""
                        loading="lazy"
                        width={1920}
                        height={937}
                        style={{ height: "auto" }}
                      />
                    </a>
                  </div>
                  <div>
                    <p>
                      Projeto concluído feito com <strong>HTML</strong>,{" "}
                      <strong>CSS</strong> e com implementação de
                      <strong>JS</strong> somente para links suaves, É um
                      projeto que eu comecei pela plataforma da
                      <strong>DevMedia</strong> também.
                    </p>

                    <p>
                      É sobre uma clínica fictícia apresentando os serviços
                      disponíveis para pessoas de qualquer idade.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          }
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
