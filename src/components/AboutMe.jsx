import { useContext } from "react";
import { ThemeContext } from "../App";
import venkat from "./venkat.jpg";

const AboutMe = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section id="about-me" className="p-2 md:p-10">
      <h2
        className={`text-center text-3xl mt-7 sm:mt-10 lg:mt-5 transition-all duration-500 ${
          darkMode ? "text-pink-500" : "text-gray-700"
        }`}>
        ABOUT ME
      </h2>
      <div
        className="mt-2 grid grid-cols-2 justify-items-center 
            justify-around lg:grid-cols-3 
            ml-2 pb-6 pt-6 pl-6 pr-4 sm:p-6 lg:space-x-10">
        {/* img web only */}
        <div className="hidden lg:block flex-shrink-0 md:my-auto">
          <img
            src={venkat}
            className={`w-52 h-52 sm:relative sm:top-9 lg:static lg:w-64 lg:h-64 p-1 
                       rounded-full border object-cover ${
                         darkMode
                           ? "border-pink-500 text-white"
                           : "border-blue-500"
                       } shadow-md`}
            alt="Venkat"
          />
        </div>
        <div className="col-span-2 lg:mr-10">
          <div
            className={`text-lg lg:text-2xl transition-all duration-500 ${
              darkMode ? "text-white" : "text-gray-700"
            }`}>
            <p>
              Hi,{" "}
              <span className="sm:text-3xl sm:font-extrabold">
                I am Venkatakrishnan G,
              </span>{" "}
              25 years old Software Developer and Video Editor from Tamilnadu,
              India. I love programming, anime and photography.
            </p>
            <br />
            <p>
              Fan of Hans Zimmer and Kentaro Miura. Love to read manga when I'm
              free. Yes I know, Naruto is nerfed in Boruto.
            </p>
            <br />
            <p>
              Feel free to{" "}
              <a
                className={`${
                  darkMode ? "hover:text-gray-300" : "hover:text-gray-800"
                }`}
                href="#contact">
                contact me
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
