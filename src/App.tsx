import { useRef, useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import AboutSection from "./components/layout/section/AboutSection";
import HeroSection from "./components/layout/section/HeroSection";
import ProjectsSection from "./components/layout/section/ProjectsSection";
import SkillsSection from "./components/layout/section/SkillsSection";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const [navScroll, setNavScroll] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollNav);
    return () => window.removeEventListener("scroll", handleScrollNav);
  }, []);

  const handleScrollNav = () => {
    if (window.scrollY > 300) {
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
  };

  return (
    <>
      <Navbar
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
        navScroll={navScroll}
      />
      <div className='w-full'>
        <HeroSection />
        <AboutSection ref={aboutRef} />
        <SkillsSection ref={skillsRef} />
        <ProjectsSection ref={projectsRef} />
        <ScrollToTop navScroll={navScroll} />
      </div>
      <Footer ref={contactRef} />
    </>
  );
}

export default App;
