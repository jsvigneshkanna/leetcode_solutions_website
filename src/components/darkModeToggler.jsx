import "../styles/darkModeToggler.css";
import { useState, useEffect } from "react";

const DarkModeToggler = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "dark");

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button onClick={handleClick} className="h-10 w-10 dark:bg-zinc-400 rounded-full bg-rose-600">
      {theme === "light" ? "🌙" : "🌞"}
    </button>
  );
};

export default DarkModeToggler;
