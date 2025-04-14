import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      // Show button after scrolling 300px
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    // Clean up the listener on component unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`
        ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}
        fixed bottom-5 right-5 z-50 p-3
        bg-blue-600 text-white rounded-full
        shadow-lg hover:bg-blue-700 focus:outline-none
        focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        transition-opacity duration-300 ease-in-out
      `}
      aria-label="Scroll to top"
    >
      <FaArrowUp />
    </button>
  );
};

export default BackToTopButton;
