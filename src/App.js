import React, { useEffect, useState } from "react";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

export const ThemeContext = React.createContext();

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const mode = localStorage.getItem("mode");
    mode && mode === "dark" ? setDarkMode(true) : setDarkMode(false);
  }, []);

  useEffect(() => {
    darkMode
      ? localStorage.setItem("mode", "dark")
      : localStorage.setItem("mode", "light");
  }, [darkMode]);

  return (
    <div
      className={`overflow-x-hidden ${
        darkMode ? "bg-gray-800" : "bg-gray-50"
      } transition-all duration-500`}>
      <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
        {/* Header */}
        <Header />
        {/* About me */}
        <AboutMe />
        {/* Skills */}
        <Skills />
        {/* Projects */}
        <Projects />
        {/* Contact */}
        <Contact />
        {/* Footer */}
        <Footer />
      </ThemeContext.Provider>
    </div>
  );
}
export default App;