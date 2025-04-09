import { useTheme } from "../../ThemeContext";

interface WorkExperienceProps {
  workExperience: {
    company: string;
    title: string;
    startDate: string;
    endDate: string | null;
    description: string;
    responsibilities: string[];
  }[];
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ workExperience }) => {
  const { theme } = useTheme();
  return (
    <section className="py-14" id="experience">
      <h2 className="text-3xl font-semibold">Work Experience</h2>
      {workExperience.map((experience, index) => (
        <div key={index} className="my-6 p-4 shadow rounded">
          <h3 className="text-2xl font-bold">
            {experience.title} at {experience.company}
          </h3>
          <p
            className={`${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {experience.startDate} - {experience.endDate || "Present"}
          </p>
          <p className="mt-2">{experience.description}</p>
          <ul className="list-disc ml-6 mt-2">
            {experience.responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default WorkExperience;
