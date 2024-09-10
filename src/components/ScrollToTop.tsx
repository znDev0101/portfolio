import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTop = () => {
  const [windowScrollY, setWindowScrollY] = useState<number>(0);
  const [showScrollToTop, setShowScrollToTop] = useState<boolean>(false);

  const handleScrollToTop = () => {
    setWindowScrollY(window.scrollY);

    if (window.scrollY > 300) {
      if (window.scrollY < windowScrollY) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    } else {
      setShowScrollToTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollToTop);

    return () => {
      window.removeEventListener("scroll", handleScrollToTop);
    };
  }, [handleScrollToTop]);

  return (
    <div
      className={`fixed right-7  text-white ${
        showScrollToTop ? `bottom-5` : `-bottom-24`
      } bg-[rgb(52,58,70)] p-3 rounded-full hover:cursor-pointer duration-300 border border-white`}
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
    >
      <IoIosArrowUp className={`text-2xl`} onClick={handleScrollToTop} />
    </div>
  );
};

export default ScrollToTop;
