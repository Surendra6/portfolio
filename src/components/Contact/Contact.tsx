import { useTheme } from "../../ThemeContext";

const Contact: React.FC = () => {
  const { theme } = useTheme();
  return (
    <section
      id="contact"
      className={`py-16 px-24
      ${theme === "dark" ? "text-[#fff2d8]" : "text-[#113946]"}
    `}
    >
      <h2 className="text-3xl font-semibold">Contact Me</h2>
      <div>
        Git hub link with icon, Linkedin link with icon Email id, Google map
        location
      </div>
    </section>
  );
};

export default Contact;
