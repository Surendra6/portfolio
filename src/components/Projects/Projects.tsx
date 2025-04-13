import { useCallback } from "react";
import { useTheme } from "../../ThemeContext";
import { FaReact } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { RiJavascriptLine } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJest } from "react-icons/si";
import { TbBrandCypress } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

interface ProjectsProps {
  projects: {
    name: string;
    description: string;
    technologies: string[];
    images: string;
    github: string;
    live: string;
  }[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const { theme } = useTheme();

  const techIcon = useCallback((tech: string) => {
    switch (true) {
      case tech === "reactjs":
        return <FaReact className="size-4" />;
      case tech === "javascript":
        return <RiJavascriptLine className="size-4" />;
      case tech === "typescript":
        return <TbBrandTypescript className="size-4" />;
      case tech === "html5":
        return <FaHtml5 className="size-4" />;
      case tech === "css3":
        return <IoLogoCss3 className="size-4" />;
      case tech === "tailwind css":
        return <RiTailwindCssFill className="size-4" />;
      case tech === "vite":
        return <SiVite className="size-4" />;
      case tech === "material ui":
        return <SiMui className="size-4" />;
      case tech === "jest":
        return <SiJest className="size-4" />;
      case tech === "cypress":
        return <TbBrandCypress className="size-4" />;
      case tech === "github":
        return <FaGithub className="size-4" />;
      case tech === "vue.js":
        return <FaVuejs className="size-4" />;
    }
  }, []);

  return (
    <section
      id="projects"
      className={`py-16 px-24
        ${theme === "dark" ? "text-[#fff2d8]" : "text-[#113946]"}
      `}
    >
      <h2 className="text-4xl font-bold">Projects Gallery</h2>

      <div className="mt-16">
        {projects.map((project, index) => (
          <div key={index} className="flex items-center mt-14 gap-20">
            <div className="text-left">
              <h3 className="text-2xl font-bold">{project.name}</h3>
              <p className="mt-5 text-lg">{project.description}</p>
              <div className="flex flex-row justify-center gap-2 mt-4">
                {project.technologies.map((tech) => (
                  <span
                    className={`text-[#fff2d8] rounded-lg border-2 ${
                      theme === "dark"
                        ? "bg-transparent border-[#fff2d8]"
                        : "bg-gray-600 border-transparent"
                    } px-2 py-1 rounded-lg text-xs font-semibold flex flex-row gap-1`}
                  >
                    {techIcon(tech.toLowerCase())}
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-8">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    className={`py-1 px-4 mr-5 inline-flex gap-3 text-center drop-shadow-md hover:drop-shadow-xl rounded-md ${
                      theme === "dark"
                        ? "bg-[#fff2d8] text-[#113946] hover:text-[#113946] "
                        : "bg-[#113946] text-[#fff2d8] hover:text-[#fff2d8] "
                    }`}
                  >
                    <span>GitHub</span> <FiExternalLink className="size-5" />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    className={`py-1 px-4 inline-flex gap-3 text-center drop-shadow-md hover:drop-shadow-xl rounded-md ${
                      theme === "dark"
                        ? "bg-[#fff2d8] text-[#113946] hover:text-[#113946] "
                        : "bg-[#113946] text-[#fff2d8] hover:text-[#fff2d8] "
                    }`}
                  >
                    <span>Live</span> <FiExternalLink className="size-5" />
                  </a>
                )}
              </div>
            </div>
            <img
              src={project.images}
              alt={project.name}
              className="w-1/3 h-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
