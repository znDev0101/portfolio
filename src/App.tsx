import { useRef } from "react";
import "./App.css";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import AboutSection from "./components/layout/section/AboutSection";
import HeroSection from "./components/layout/section/HeroSection";
import ProjectsSection from "./components/layout/section/ProjectsSection";
import SkillsSection from "./components/layout/section/SkillsSection";

function App() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Navbar
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <div className='w-full'>
        <HeroSection />
        <AboutSection ref={aboutRef} />
        <SkillsSection ref={skillsRef} />
        <ProjectsSection ref={projectsRef} />
      </div>
      <Footer ref={contactRef} />
    </>
  );
}

export default App;
