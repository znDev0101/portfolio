import "./App.css";
import Navbar from "./components/layout/Navbar";
import AboutSection from "./components/layout/section/AboutSection";
import HeroSection from "./components/layout/section/HeroSection";
import SkillsSection from "./components/layout/section/SkillsSection";

function App() {
  return (
    <>
      <Navbar />
      <div className='w-full'>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
      </div>
    </>
  );
}

export default App;
