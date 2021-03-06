import { useContext } from "react";
import { ThemeContext } from "../../App";
import ProjectList from "./ProjectList";

import "aos/dist/aos.css";

const Projects = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <section id="projects">
      <p
        data-aos="zoom-in"
        className={`${
          darkMode ? "text-pink-500" : "text-gray-700"
        } text-3xl uppercase text-center mt-7 transition-all duration-500`}>
        Projects
      </p>
      <div
        className="grid grid-cols-1 ml-10 mr-10 md:grid-cols-2 lg:grid-cols-3 
            justify-items-center gap-6 items-center p-8
            sm:w-84p lg:max-w-6xl sm:mx-auto">
        <ProjectList />
      </div>
    </section>
  );
};

export default Projects;
