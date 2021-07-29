import { useContext } from "react";
import { ThemeContext } from "../../App";

const ProjectListRender = ({ project }) => {
  const { darkMode } = useContext(ThemeContext);

  const { name, link, tech, description } = project;

  const card = `${
    darkMode
      ? "bg-gray-900 text-white border-pink-500"
      : "bg-white border-blue-500"
  } rounded md:w-full
    border-b-2 border-t-2 
    text-center text-sm w-72 h-full sm:text-lg p-4 shadow-lg transition-all duration-500`;

  return (
    <div className={card}>
      <div>
        <p className="p-2">
          <a
            className={`font-semibold uppercase transition-all duration-500 ${
              darkMode
                ? "text-pink-500 hover:text-pink-600"
                : "text-purple-600 hover:text-purple-800"
            } `}
            href={link}
            target="_blank"
            rel="noreferrer">
            {name}
          </a>
        </p>
        <p className="p-2">
          Tech: <span className="italic">{tech}</span>{" "}
        </p>
        <p className="text-justify">{description}</p>
      </div>
    </div>
  );
};

export default ProjectListRender;
