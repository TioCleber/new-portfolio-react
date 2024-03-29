import { Suspense, lazy } from "react";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import "./styles/global.css";
import useDevice from "./hooks/useDevice";
import MenuHeader from "./components/header/Menu";

const HomePage = lazy(() => import("./pages/home/HomePage"));
const AboutPage = lazy(() => import("./pages/about/AboutPage"));
const ProjectsPage = lazy(() => import("./pages/projects/ProjectsPage"));
const SkillsPAge = lazy(() => import("./pages/skills/SkillsPage"));
const ContactPage = lazy(() => import("./pages/contact/ContactPage"));

function App() {
  const { isMobile } = useDevice();

  return (
    <div className="main-app">
      <BrowserRouter>
        {isMobile ? <MenuHeader /> : <Header />}

        <Suspense fallback={"carregando..."}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/projetos" element={<ProjectsPage />} />
            <Route path="/skills" element={<SkillsPAge />} />
            <Route path="/contato" element={<ContactPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
