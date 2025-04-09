import { ReactElement } from "react";
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

interface SkillsProps {
  skills: {
    icon: ReactElement;
    label: string;
  }[];
}

const skills: SkillsProps["skills"] = [
  {
    icon: <FaReact className="w-24 h-24" />,
    label: "ReactJS",
  },
  {
    icon: <RiJavascriptLine className="w-24 h-24" />,
    label: "JavaScript",
  },
  {
    icon: <TbBrandTypescript className="w-24 h-24" />,
    label: "TypeScript",
  },
  {
    icon: <FaHtml5 className="w-24 h-24" />,
    label: "HTML5",
  },
  {
    icon: <IoLogoCss3 className="w-24 h-24" />,
    label: "CSS3",
  },
  {
    icon: <FaVuejs className="w-24 h-24" />,
    label: "Vue.js",
  },
  {
    icon: <RiTailwindCssFill className="w-24 h-24" />,
    label: "Tailwind CSS",
  },
  {
    icon: <SiJest className="w-24 h-24" />,
    label: "Jest",
  },
  {
    icon: <TbBrandCypress className="w-24 h-24" />,
    label: "Cypress",
  },
  {
    icon: <FaGithub className="w-24 h-24" />,
    label: "GitHub",
  },
  {
    icon: <SiVite className="w-24 h-24" />,
    label: "Vite",
  },
];

const Skills: React.FC = () => {
  const { theme } = useTheme();
  return (
    <section className="py-16 px-24" id="skills">
      <h2
        className={`text-4xl font-semibold
        ${theme === "dark" ? "text-[#fff2d8]" : "text-[#113946]"}
        `}
      >
        Skills
      </h2>
      <ul className="flex flex-wrap justify-center gap-10 mt-16">
        {skills.map((skill, index) => (
          <li
            key={index}
            className={`px-3 py-1 rounded-2xl border-2 ${
              theme === "dark"
                ? "bg-transparent border-[#fff2d8]"
                : "bg-[#113946] border-transparent"
            } text-[#fff2d8]`}
          >
            {skill.icon}
            <span className="text-xl">{skill.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
