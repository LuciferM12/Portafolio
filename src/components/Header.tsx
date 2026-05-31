import { useState, useEffect } from "react";
import { Moon, Sun, Github, FileDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [theme, setTheme] = useState("light");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const navItems = ["Stack", "Projects", "Experience", "Certifications"];

  return (
    <>
      <div className="w-full h-20 text-dark dark:text-light p-4 pb-0 flex items-center justify-center fixed top-0 left-0 z-50 backdrop-blur-md">
        <div className="w-full h-full flex bg-light/80 dark:bg-secondary/80 items-center justify-between rounded-xl px-4">
          <h1 className="font-bold text-2xl">Omar Rdz</h1>

          <div className="hidden md:flex gap-6 font-semibold items-center">
            {navItems.map((item) => (
              <button
                key={item}
                className="hover:text-primary transition-colors"
                onClick={() => {
                  const section = document.getElementById(item.toLowerCase());
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4">
              <a
                href="https://github.com/luciferm12"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <FileDown className="w-6 h-6" />
              </a>
            </div>

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
                <Sun className="w-4 h-4 text-light/40 dark:text-light/20" />
                <Moon className="w-4 h-4 text-light/30 dark:text-light/40" />
              </div>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
            >
              {mobileMenuOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.2,
            }}
            className="fixed top-24 left-4 right-4 z-40 md:hidden rounded-xl bg-light dark:bg-secondary shadow-xl border border-gray-200 dark:border-gray-700"
          >
            <div className="flex flex-col p-4">
              {navItems.map((item) => (
                <button
                  key={item}
                  className="text-left py-3 font-semibold hover:text-primary transition-colors"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    const section = document.getElementById(item.toLowerCase());
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  {item}
                </button>
              ))}

              <hr className="my-2 border-gray-300 dark:border-gray-700" />

              <a
                href="https://github.com/luciferm12"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-3 font-semibold hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-3 font-semibold hover:text-primary transition-colors"
              >
                <FileDown className="w-5 h-5" />
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
