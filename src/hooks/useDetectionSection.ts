import { useEffect, useState } from "react";

export default function useDetectionScroll(
  heroRef: any,
  aboutRef: any,
  skillsRef: any,
  projectsRef: any,
  contactRef: any
) {
  const [activeSection, setActiveSection] = useState<string>("");

  const sectionRefs = [
    { ref: heroRef, id: "hero" },
    { ref: aboutRef, id: "about" },
    { ref: skillsRef, id: "skills" },
    { ref: projectsRef, id: "projects" },
    { ref: contactRef, id: "contact" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entres) => {
        entres.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.7 }
    );

    sectionRefs.forEach((section) => {
      if (section.ref && section.ref.current) {
        section.ref.current.id = section.id;
        observer.observe(section.ref.current);
      }
    });

    return () => {
      sectionRefs.forEach((section) => {
        if (section.ref && section.ref.current) {
          observer.unobserve(section.ref.current);
        }
      });
    };
  }, [heroRef, aboutRef, skillsRef, projectsRef, contactRef]);

  return { activeSection };
}
