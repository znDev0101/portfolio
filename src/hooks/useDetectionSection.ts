import { useEffect, useState } from "react";

export default function useDetectionScroll(
  sectionRefs: React.MutableRefObject<null>[] | null
) {
  const [currentSection, setCurrentSection] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      let activeSection: number | null = null;

      sectionRefs?.forEach((ref, index) => {
        if (ref.current) {
          const { top, bottom } = ref.current.getBoundingClientRect();
          const isInView =
            top <= window.innerHeight / 2 && bottom >= window.innerHeight / 2;
          if (isInView) {
            activeSection = index; // Use index or any identifier
          }
        }
      });

      setCurrentSection(activeSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionRefs]);

  return currentSection;
}
