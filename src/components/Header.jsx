import React, { useState, useEffect } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

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

  useEffect(() => {
    if (darkMode) {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    }
    if (darkMode === false) {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="flex justify-between py-8 ">
      <div className="bg-mobile-light dark:bg-mobile-dark absolute inset-0 bg-no-repeat bg-cover w-full h-52 -z-40"></div>
      <h1 className="text-white font-bold uppercase text-xl tracking-[0.4em]">
        Todo
      </h1>
      <div className="">
        {darkMode ? (
          <button onClick={() => setDarkMode(false)}>
            <img className="h-5 w-5" src="/images/icon-sun.svg" alt="sun" />
          </button>
        ) : (
          <button onClick={() => setDarkMode(true)}>
            <img className="h-5 w-5" src="/images/icon-moon.svg" alt="moon" />
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
