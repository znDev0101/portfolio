import { IoIosArrowUp } from "react-icons/io";

const ScrollToTop = ({ navScroll }: { navScroll: boolean }) => {
  const handleScrollToTop = () => {
    if (navScroll) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={` text-white ${
        navScroll ? `bottom-5` : `-bottom-20`
      }  fixed right-7  z-50 bg-[rgb(52,58,70)] p-3 rounded-full hover:cursor-pointer duration-300 border border-white`}
    >
      <IoIosArrowUp className={`text-2xl`} onClick={handleScrollToTop} />
    </div>
  );
};

export default ScrollToTop;
