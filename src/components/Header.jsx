import { useState, useEffect } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  // If localstorage has a theme value of dark
  // or the user has set a dark theme preference
  // Set the theme to dark
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  // When the theme mode button is toggled,
  // update localstorage and ajust the document class
  // The class "dark" is used by tailwindcss to change variables.
  useEffect(() => {
    if (darkMode) {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    }
    if (!darkMode) {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="flex justify-between py-8 ">
      <div className="bg-mobile-light dark:bg-mobile-dark sm:bg-desktop-light sm:dark:bg-desktop-dark absolute inset-0 bg-no-repeat bg-cover w-full h-52 -z-40 max-w-7xl mx-auto xl:rounded-b-lg"></div>
      <h1 className="text-white font-bold uppercase text-xl tracking-[0.4em]">
        Todo
      </h1>
      <div className="">
        {darkMode ? (
          <button onClick={() => setDarkMode(false)}>
            <img
              className="h-5 w-5"
              src="./static/media/icon-sun.svg"
              alt="Dark mode"
            />
          </button>
        ) : (
          <button onClick={() => setDarkMode(true)}>
            <img
              className="h-5 w-5"
              src="./static/media/icon-moon.svg"
              alt="Light mode"
            />
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
