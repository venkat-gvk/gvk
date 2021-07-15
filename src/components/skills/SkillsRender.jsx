import { useContext } from "react";
import { ThemeContext } from "../../App";
import { languages, technologies } from "../util_Projects_skills";

const SkillsRender = ({ what }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div>
      {what === "lang"
        ? languages.map(({ lang, level }, index) => (
            <div className="p-2 space-y-1" key={index}>
              <p>{lang}</p>
              <div
                className={`w-72 md:w-80 xl:w-96 shadow rounded ${
                  darkMode ? "bg-pink-100" : "bg-blue-100"
                } `}>
                <div
                  className={`h-2 rounded ${
                    darkMode ? "bg-pink-500" : "bg-blue-400"
                  } transition-all`}
                  style={{ width: `${level}%` }}></div>
              </div>
            </div>
          ))
        : technologies.map(({ tech, level }, index) => (
            <div className="p-2 space-y-1" key={index}>
              <p>{tech}</p>
              <div
                className={`w-72 md:w-80 xl:w-96 shadow rounded ${
                  darkMode ? "bg-pink-100" : "bg-blue-100"
                } `}>
                <div
                  className={`h-2 rounded ${
                    darkMode ? "bg-pink-500" : "bg-blue-400"
                  } transition-all`}
                  style={{ width: `${level}%` }}></div>
              </div>
            </div>
          ))}
    </div>
  );
};

export default SkillsRender;
