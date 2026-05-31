import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

const Header = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    const initialTheme = savedTheme || systemTheme;

    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  const applyTheme = (newTheme: string) => {
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", newTheme);
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  const isDark = theme === "dark";

  return (
    <div className="w-full h-20 text-dark dark:text-light p-4 pb-0 flex items-center justify-center">
      <div className="w-full h-full flex bg-light dark:bg-secondary items-center justify-between rounded-xl">
        <div className="flex gap-6 font-semibold items-center ml-4">
          <h1 className="font-bold text-2xl ml-4">Omar Rdz</h1>
          <div className="flex-1">Projects</div>
          <div className="flex-1">Certifications</div>
        </div>
        <div className="mr-4 flex items-center font-semibold gap-4">
          <a
            href="#projects"
            className="mx-4 hover:text-primary transition-colors"
          >
            Contact
          </a>
          <button
            onClick={toggleTheme}
            className="relative w-16 h-8 rounded-full dark:bg-dark bg-black transition-colors duration-300 focus:outline-none"
            aria-label="Toggle theme"
          >
            <motion.div
              className="absolute top-1 left-1 w-6 h-6 rounded-full bg-yellow-500 dark:bg-primary flex items-center justify-center shadow-lg"
              animate={{
                x: isDark ? 32 : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            >
              {isDark ? (
                <Moon className="w-4 h-4 text-white" />
              ) : (
                <Sun className="w-4 h-4 text-white" />
              )}
            </motion.div>
            <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
              <Sun className="w-4 h-4 text-light/40 dark:text-light/20 transition-colors" />
              <Moon className="w-4 h-4 text-light/30 dark:text-light/40 transition-colors" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
