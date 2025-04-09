import { useTheme } from "../../ThemeContext";
import { FiDownload } from "react-icons/fi";

interface AboutMeProps {
  profile: {
    image: string;
    name: string;
    title: string;
  };
}

const AboutMe: React.FC<AboutMeProps> = ({ profile }) => {
  const { theme } = useTheme();
  return (
    <section
      id="about-me"
      className={`flex text-left pt-36 pb-12 px-24 gap-12 text-[#fff2d8] ${
        theme === "dark" ? "bg-black" : "bg-[#113946]"
      }`}
    >
      <div>
        <h1>
          Hello, I'm <br />
          Surendra Gullipalli
        </h1>
        <p className="mt-12 text-lg">
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

        <a
          href="/cv.pdf"
          download
          className="py-2 px-4 mt-8 inline-flex gap-3 text-center bg-[#fff2d8] text-[#113946] hover:text-[#113946] drop-shadow-md hover:drop-shadow-xl font-semibold rounded"
        >
          <FiDownload className="w-5 h-5" /> <span>Download CV</span>
        </a>
      </div>
      <img
        src={profile.image}
        alt={profile.name}
        className="w-72 h-72 rounded-full flex-none mx-auto"
      />
    </section>
  );
};

export default AboutMe;
