import { useContext } from "react";
import "aos/dist/aos.css";

import { ThemeContext } from "../../App";
import SkillsRender from "./SkillsRender";

const Skills = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section
      data-aos="zoom-in"
      id="skills"
      className="p-2 pb-3 -mt-4 sm:mb-16 lg:mb-12 sm:mt-1"
    >
      <h2
        className={`text-3xl uppercase text-center transition-all duration-500 ${
          darkMode ? "text-pink-500" : "text-gray-700"
        } sm:pb-2 `}
      >
        Skills
      </h2>
      <div className="grid grid-row-1 md:grid-cols-2 p-1 mt-4 lg:mt-8 sm:mx-auto">
        {/* Lang */}
        <div
          className={`relative flex flex-col justify-center items-center space-y-4 text-left
        ${darkMode ? "text-white" : "text-gray-700"}
        `}
        >
          <p className="font-semibold">Programming Languages</p>
          <SkillsRender what="lang" />
        </div>

        {/* Tecnhologies */}
        <div
          className={`flex flex-col justify-start items-center space-y-4
          text-left
        ${darkMode ? "text-white" : "text-gray-700"}`}
        >
          <p className="font-semibold mt-4 sm:mt-0">Technologies</p>
          <SkillsRender what="tech" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
