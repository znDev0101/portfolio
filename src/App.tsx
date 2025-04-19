import { useRef, useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import AboutSection from "./components/layout/section/AboutSection";
import HeroSection from "./components/layout/section/HeroSection";
import ProjectsSection from "./components/layout/section/ProjectsSection";
import SkillsSection from "./components/layout/section/SkillsSection";
import ScrollToTop from "./components/ScrollToTop";
import { RefsContext } from "./context/RefContext";

function App() {
  const heroRef = useRef<React.RefObject<HTMLDivElement>>(null);
  const aboutRef = useRef<React.RefObject<HTMLDivElement>>(null);
  const skillRef = useRef<React.RefObject<HTMLDivElement>>(null);
  const projectRef = useRef<React.RefObject<HTMLDivElement>>(null);
  const contactRef = useRef<React.RefObject<HTMLDivElement>>(null);

  const sectionsRef = [heroRef, aboutRef, skillRef, projectRef, contactRef];
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
    <RefsContext.Provider value={sectionsRef}>
      <Navbar navScroll={navScroll} />
      <div className='relative w-full'>
        <HeroSection ref={sectionsRef[0]} />
        <AboutSection ref={sectionsRef[1]} />
        <SkillsSection ref={sectionsRef[2]} />
        <ProjectsSection ref={sectionsRef[3]} />
        <ScrollToTop />
      </div>
      <Footer ref={sectionsRef[4]} />
    </RefsContext.Provider>
  );
}

export default App;
