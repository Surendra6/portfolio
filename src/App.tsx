import data from "./data.json";
import "./App.css";
import Header from "./components/Header/Header";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import { useTheme } from "./ThemeContext";
import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/Contact";
import Banner from "./components/Banner/Banner";

function App() {
  const { theme } = useTheme();
  return (
    <div
      className={`font-winky-rough mx-auto flex flex-col ${
        theme === "dark" ? "bg-black text-white" : "bg-[#fff2d8] text-[#113946]"
      }`}
    >
      <Header />
      <Banner profile={data.profile} />
      <div
        className={`h-0.5 mx-24
        ${theme === "dark" ? "bg-[#fff2d8]" : "bg-transparent"}
      `}
      ></div>
      <AboutMe />

      <div
        className={`h-0.5 mx-24
        ${theme === "dark" ? "bg-[#fff2d8]" : "bg-[#113946]"}
      `}
      ></div>
      <Skills />
      <div
        className={`h-0.5 mx-24
        ${theme === "dark" ? "bg-[#fff2d8]" : "bg-[#113946]"}
      `}
      ></div>
      <Projects projects={data.projects} />
      <div
        className={`h-0.5 mx-24
        ${theme === "dark" ? "bg-[#fff2d8]" : "bg-[#113946]"}
      `}
      ></div>
      <Contact />

      {/* <WorkExperience workExperience={data.workExperience} />
      <div className="h-0.5 bg-black mx-24"></div> */}

      {/* <Awards awards={data.awards} />
      <div className="h-0.5 bg-black mx-24"></div> */}
      {/* {
  "name": "Portfolio Website",
  "description": "Built a dynamic personal portfolio website using ReactJS and TypeScript to effectively showcase my front-end development experience and design capabilities. The site features interactive sections for projects, skills, and contact information, emphasizing a clean and modern aesthetic. Implemented a user-controlled theme switching feature (light/dark mode) for improved accessibility and visual preference. Leveraged Tailwind CSS for rapid, responsive UI development, ensuring a seamless experience across all devices.",
  "technologies": ["ReactJS", "Vite", "HTML5", "CSS3", "Tailwind CSS"],
  "images": "/profile.jpg",
  "github": "https://github.com/johndoe/portfolio",
  "live": "https://johndoe.com"
}, */}
    </div>
  );
}

export default App;
