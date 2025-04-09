import React from "react";
import { useTheme } from "../../ThemeContext";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [fontSize, setFontSize] = React.useState(16);
  const defaultFontSize = 16;

  React.useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  return (
    <header
      className={`text-center text-[#fff2d8] fixed w-full border-b-2 border-b-[#6b7164] z-10 ${
        theme === "dark" ? "bg-black" : "bg-[#113946]"
      }`}
    >
      <nav className={`p-4 flex items-center justify-end `}>
        <a
          href="#about-me"
          className={`py-1 px-1 mx-2 ${
            theme === "dark" ? "" : "text-[#fff2d8]"
          }`}
        >
          About me
        </a>
        <a
          href="#skills"
          className={`py-1 px-1 mx-2 ${
            theme === "dark" ? "" : "text-[#fff2d8]"
          }`}
        >
          Skills
        </a>
        <a
          href="#projects"
          className={`py-1 px-1 mx-2 ${
            theme === "dark" ? "" : "text-[#fff2d8]"
          }`}
        >
          Projects
        </a>
        <a
          href="#contact"
          className={`py-1 px-1 mx-2 ${
            theme === "dark" ? "" : "text-[#fff2d8]"
          }`}
        >
          Contact
        </a>

        <label
          htmlFor="toggle-theme"
          className={`cursor-pointer relative inline-block h-7 w-12 mx-2 rounded-full transition-colors [-webkit-tap-highlight-color:_transparent] ${
            theme === "dark" ? "bg-[#0026d6]" : "bg-white"
          } `}
        >
          <input
            type="checkbox"
            id="toggle-theme"
            className="peer sr-only"
            onChange={toggleTheme}
          />

          <span className="peer-checked:[&>[data-a=dark]]:block peer-checked:[&>[data-a=light]]:hidden absolute inset-y-0 start-0 m-0.5 h-6 w-6 grid place-content-center rounded-full bg-black text-white transition-[inset-inline-start] peer-checked:start-5">
            <MdOutlineDarkMode data-a="dark" className="ml-0.5 size-5 hidden" />
            <MdOutlineLightMode data-a="light" className="size-4 block" />
          </span>
        </label>
      </nav>

      {/* <img
        src={profile.image}
        alt={profile.name}
        className="w-48 h-48 rounded-full mx-auto mb-4"
      />
      <h1 className="text-4xl font-bold">{profile.name}</h1>
      <p className="text-xl text-gray-600">{profile.title}</p>
      <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="/cv.pdf"
          download
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Download CV
        </a>

        <button
          onClick={() => setFontSize((prevSize) => Math.max(prevSize - 2, 12))}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          A-
        </button>
        <button
          onClick={() => setFontSize(defaultFontSize)}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          A
        </button>
        <button
          onClick={() => setFontSize((prevSize) => Math.min(prevSize + 2, 24))}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          A+
        </button>
      </div> */}
    </header>
  );
};

export default Header;
