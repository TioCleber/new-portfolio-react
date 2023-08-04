import {
  FIRST_PROJECT,
  SECOND_PROJECT,
} from "../../constants/dangerouslySetInnerHTML";
import Projects from "../../components/projects/Projects";
import Slider from "../../components/external-components/slider/Slider";

const ProjectsPage = () => {
  return (
    <main className="main-page" id="projects">
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
    </main>
  );
};

export default ProjectsPage;
