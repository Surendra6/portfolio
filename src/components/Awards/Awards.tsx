import { useTheme } from "../../ThemeContext";

interface AwardsProps {
  awards: {
    name: string;
    organization: string;
    date: string;
    description: string;
  }[];
}

const Awards: React.FC<AwardsProps> = ({ awards }) => {
  const { theme } = useTheme();
  return (
    <section className="py-14" id="awards">
      <h2 className="text-3xl font-semibold">Awards</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {awards.map((award, index) => (
          <div key={index} className="my-4 p-4 shadow rounded">
            <h3 className="text-2xl font-bold">{award.name}</h3>
            <p
              className={`${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {award.organization} - {award.date}
            </p>
            <p>{award.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Awards;
