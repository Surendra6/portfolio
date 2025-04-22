import { useTheme } from "../../ThemeContext";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
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

  // --- Configuration ---
  const subject = "Contact via Portfolio";
  const body =
    "Hello Surendra,\n\nI saw your portfolio and wanted to reach out.\n\n";

  // --- Construct the mailto link ---
  // Encode subject and body to handle spaces and special characters safely
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);

  let mailtoLink = `mailto:${profile.email}`;
  if (subject) {
    mailtoLink += `?subject=${encodedSubject}`;
    if (body) {
      mailtoLink += `&body=${encodedBody}`;
    }
  }

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
        <a
          href={mailtoLink}
          aria-label={`Send email to ${profile.email}`}
          title={`Send email to ${profile.email}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`${
            theme === "dark"
              ? "text-[#fff2d8] hover:text-[#fff2d8]"
              : "text-[#113946] hover:text-[#113946]"
          }
        `}
        >
          <IoMdMail className="w-14 h-14 cursor-pointer" />
        </a>
      </div>
      <div className="px-20">
        <h2 className="text-2xl font-semibold text-left py-2">Lives in</h2>
        <LocationMap />
      </div>
    </section>
  );
};

export default Contact;
