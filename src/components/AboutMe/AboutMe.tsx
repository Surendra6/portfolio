import { useTheme } from "../../ThemeContext";
import DownloadCVQR from "../DownloadCVQR/DownloadCVQR";

interface AboutMeProps {
  profile: {
    cv: string;
  };
}

const AboutMe: React.FC<AboutMeProps> = ({ profile }) => {
  const { theme } = useTheme();
  return (
    <section
      id="about-me"
      className={`py-16 px-24
      ${theme === "dark" ? "text-[#fff2d8]" : "text-[#113946]"}
    `}
    >
      <h2 className="text-3xl font-semibold">About Me</h2>

      <div className="flex gap-12 mt-12">
        <p className="text-2xl text-left size-2/3">
          A seasoned{" "}
          <span className="inline-block text-4xl font-semibold">
            Front-End Developer
          </span>{" "}
          passionate about crafting engaging and responsive web applications
          with a focus on scalability, accessibility, maintainability, and
          pixel-perfect user experiences. My expertise spans JavaScript, HTML,
          CSS, ReactJS, and Vue.js and I leverage component libraries like
          Material UI, Tailwind CSS, and Storybook to ensure consistent UI
          design. I enjoy collaborating with cross-functional teams to bring
          innovative ideas to life.
        </p>
        <DownloadCVQR cv={profile.cv} />
      </div>
    </section>
  );
};

export default AboutMe;
