import { useContext } from "react";
import { ThemeContext } from "../App";

import "aos/dist/aos.css";

const Header = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <header
      id="home"
      className={`${
        darkMode ? "bg-gray-900" : "bg-white"
      } transition-all duration-500 sm:h-28
        sm:grid sm:grid-cols-3 sm:justify-end sm:items-center sm:justify-items-center
      `}>
      {/* Mobile version */}
      <main
        className="h-32 flex items-center justify-center space-x-5 sm:space-x-8 
        sm:order-1 sm:space-x-32">
        <div className="flex flex-col items-center justify-between space-y-4 sm:hidden">
          <h2
            className={`${
              darkMode ? "text-white" : "text-gray-700"
            } font-bold text-center text-xl sm:text-2xl tracking-widest transition-all duration-500`}>
            VENKATAKRISHNAN G
          </h2>
          <div
            className={`${
              darkMode ? "text-pink-500" : "text-gray-700"
            } transition-all duration-500 text-sm sm:text-2xl `}>
            <span>Software Developer</span>
            <span> | </span>
            <span>Video Editor</span>
          </div>
        </div>
        <div>
          <button onClick={toggleDarkMode}>
            {/* sun */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-7 w-7 sm:h-8 sm:w-8 text-yellow-300 hover:text-yellow-500 ${
                !darkMode && "hidden"
              }`}
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clipRule="evenodd"
              />
            </svg>
            {/* moon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-7 w-7 sm:h-8 sm:w-8 text-pink-600 hover:text-pink-800 ${
                darkMode && "hidden"
              }`}
              viewBox="0 0 20 20"
              fill="currentColor">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          </button>
        </div>
      </main>
      {/* Mobile version ends */}

      {/* Nav links */}
      <div
        className={`hidden ${
          darkMode ? "sm:text-white" : "sm:text-gray-700"
        } sm:font-semibold
          sm:flex sm:items-center sm:justify-around sm:space-x-8 lg:space-x-12 sm:list-none
          sm:p-4 sm:w-full sm:col-span-2 sm:ml-40 lg:ml-56 sm:mb-2`}>
        <li
          className={`${
            darkMode ? "hover:text-gray-300" : "hover:text-gray-800"
          } flex-shrink-0`}>
          <a className="hover:border-b-2" href="#about_me">
            ABOUT ME
          </a>
        </li>
        <li
          className={`${
            darkMode ? "hover:text-gray-300" : "hover:text-gray-800"
          }`}>
          <a className="hover:border-b-2" href="#skills">
            SKILLS
          </a>
        </li>
        <li
          className={`${
            darkMode ? "hover:text-gray-300" : "hover:text-gray-800"
          }`}>
          <a className="hover:border-b-2" href="#projects">
            PROJECTS
          </a>
        </li>
        <li
          className={`${
            darkMode ? "hover:text-gray-300" : "hover:text-gray-800"
          }`}>
          <a className="hover:border-b-2" href="#contact">
            CONTACT
          </a>
        </li>
        <li
          className={`${
            darkMode ? "hover:text-gray-300" : "hover:text-gray-800"
          }`}>
          <a className="hover:border-b-2" href="#profile">
            PROFILE
          </a>
        </li>
      </div>
    </header>
  );
};

export default Header;
