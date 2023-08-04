import { Suspense, lazy } from "react";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import "./styles/global.css";

const HomePage = lazy(() => import("./pages/home/HomePage"));
const AboutPage = lazy(() => import("./pages/about/AboutPage"));
const ProjectsPage = lazy(() => import("./pages/projects/ProjectsPage"));
const SkillsPAge = lazy(() => import("./pages/skills/SkillsPage"));
const ContactPage = lazy(() => import("./pages/contact/ContactPage"));

function App() {
  return (
    <main className="main-app">
      <BrowserRouter>
        <Header />

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
    </main>
  );
}

export default App;
