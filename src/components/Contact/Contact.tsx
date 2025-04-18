import { useState } from "react";
import { useTheme } from "../../ThemeContext";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { MdContentCopy } from "react-icons/md";
import LocationMap from "../LocationMap/LocationMap";

interface ContactProps {
  profile: {
    linkedin: string;
    github: string;
    email: string;
  };
}

const Contact: React.FC<ContactProps> = ({ profile }) => {
  const { theme } = useTheme();
  const [showEmail, setShowEmail] = useState(false);

  return (
    <section
      id="contact"
      className={`py-16 px-24
      ${theme === "dark" ? "text-[#fff2d8]" : "text-[#113946]"}
    `}
    >
      <h2 className="text-3xl font-semibold">Contact Me</h2>
      <div className="flex justify-center items-center w-full gap-10 my-10">
        <a
          href={profile.github}
          target="_blank"
          className={`${
            theme === "dark"
              ? "text-[#fff2d8] hover:text-[#fff2d8]"
              : "text-[#113946] hover:text-[#113946]"
          }
        `}
        >
          <FaGithub className="w-12 h-12" />
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          className={`${
            theme === "dark"
              ? "text-[#fff2d8] hover:text-[#fff2d8]"
              : "text-[#113946] hover:text-[#113946]"
          }
        `}
        >
          <FaLinkedin className="w-12 h-12" />
        </a>
        <span className="relative">
          <IoMdMail
            className="w-14 h-14 cursor-pointer"
            onClick={() => setShowEmail(!showEmail)}
          />
          {showEmail && (
            <span className="flex justify-center items-center gap-2 font-semibold text-lg absolute top-2 left-20">
              <span>{profile.email}</span>
              <button className="hover:bg-[#b7a8a8] size-10 rounded-full flex items-center justify-center">
                <MdContentCopy className="w-6 h-6" />
              </button>
            </span>
          )}
        </span>
      </div>
      <div className="px-20">
        <h2 className="text-2xl font-semibold text-left py-2">Lives in</h2>
        <LocationMap />
      </div>
    </section>
  );
};

export default Contact;
