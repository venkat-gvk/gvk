import { useContext } from "react";
import { ThemeContext } from "../App";

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <footer
      id="profile"
      className={`${
        darkMode ? "bg-gray-900" : "bg-white"
      } transition-all duration-500`}>
      <main
        className="h-28 shadow-lg flex items-center justify-center 
        sm:justify-around sm:max-w-6xl sm:mx-auto space-x-10 sm:space-x-4 sm:h-22 sm:p-8 md:space-x-80 lg:space-x-10">
        <div className="flex flex-col items-center justify-between space-y-4 text-sm">
          <div
            className={`${
              darkMode ? "text-pink-500" : "text-gray-700"
            } transition-all duration-500`}>
            <span>No copyright.</span>
            <span> </span>
            <span>Feel free to copy it</span>
          </div>
        </div>
        <div
          className="hidden lg:flex lg:flex-col lg:items-center lg:flex-grow 
          lg:relative lg:right-16
          lg:space-y-2 lg:text-center">
          <h2
            className={`${
              darkMode ? "text-white" : "text-gray-700"
            } font-bold text-center text-xl tracking-widest transition-all duration-500`}>
            VENKATAKRISHNAN G
          </h2>
          <div
            className={`${
              darkMode ? "text-pink-500" : "text-gray-700"
            } transition-all duration-500`}>
            <span>Software Developer</span>
            <span> </span>
            <span>Video Editor</span>
          </div>
        </div>
        {/* <div></div> */}
        <div className="flex justify-center items-center space-x-4 sm:space-x-10">
          <a
            href="https://github.com/venkat-gvk"
            rel="noreferrer"
            target="_blank">
            <svg
              className={`h-6 w-6 ${
                darkMode
                  ? "text-pink-500 hover:text-pink-700"
                  : "text-blue-500 hover:text-blue-800"
              } hover:cursor-pointer`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round">
              {" "}
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>
          <a
            href="https://twitter.com/venkat_gvk"
            rel="noreferrer"
            target="_blank">
            <svg
              className={`h-6 w-6 ${
                darkMode
                  ? "text-pink-500 hover:text-pink-700"
                  : "text-blue-500 hover:text-blue-800"
              } hover:cursor-pointer`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round">
              {" "}
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
            </svg>
          </a>
        </div>
      </main>
    </footer>
  );
};

export default Footer;
