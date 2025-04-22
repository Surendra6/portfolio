import { useTheme } from "../../ThemeContext";
import { FiDownload } from "react-icons/fi";

interface BannerProps {
  profile: {
    image: string;
    name: string;
    title: string;
    cv: string;
  };
}

const Banner: React.FC<BannerProps> = ({ profile }) => {
  const { theme } = useTheme();
  return (
    <section
      className={`flex text-left pt-28 pb-10 px-24 gap-12 text-[#fff2d8] ${
        theme === "dark" ? "bg-black" : "bg-[#113946]"
      }`}
    >
      <div className="size-2/3">
        <h1 className="text-5xl">
          Hello, I'm <br />
          {profile.name}{" "}
          <span className="relative -top-2 inline-block origin-bottom-right animate-wave">
            👋🏼
          </span>
        </h1>

        <h2 className="text-3xl mt-5">
          <span className="">{`<`}</span>
          {profile.title} <span>{`/>`}</span>
        </h2>

        <h1 className="flex w-full mt-24 font-satisfy text-7xl">
          Welcome to my Portfolio
        </h1>
      </div>
      <div className="flex flex-col items-center mx-auto">
        <img
          src={profile.image}
          alt={profile.name}
          className="w-72 h-72 rounded-full"
        />
        <a
          href={profile.cv}
          download
          className="py-1 px-4 mt-8 inline-flex gap-3 text-center bg-[#fff2d8] text-[#113946] hover:text-[#113946] drop-shadow-md hover:drop-shadow-xl font-semibold rounded"
        >
          <FiDownload className="w-5 h-5" />
          <span>Download CV</span>
        </a>
      </div>
    </section>
  );
};

export default Banner;
