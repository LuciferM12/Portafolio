import { Github, Linkedin, Mail, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full mt-32 border-t border-gray-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col items-center gap-8">
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/luciferm12"
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-12 h-12
              rounded-full
              bg-light dark:bg-secondary
              flex items-center justify-center
              transition-all duration-300
              hover:-translate-y-1
              hover:text-primary
              hover:shadow-lg
            "
          >
            <Github size={20} />
          </a>

          <a
            href="https://linkedin.com/in/omarrdz"
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-12 h-12
              rounded-full
              bg-light dark:bg-secondary
              flex items-center justify-center
              transition-all duration-300
              hover:-translate-y-1
              hover:text-primary
              hover:shadow-lg
            "
          >
            <Linkedin size={20} />
          </a>

          <a
            href="mailto:rojasrodriguezmartinomar@gmail.com"
            className="
              w-12 h-12
              rounded-full
              bg-light dark:bg-secondary
              flex items-center justify-center
              transition-all duration-300
              hover:-translate-y-1
              hover:text-primary
              hover:shadow-lg
            "
          >
            <Mail size={20} />
          </a>
        </div>

        <div className="flex items-center w-full max-w-xs gap-4">
          <div className="flex-1 h-px bg-gray-300 dark:bg-white/10" />

          <div className="w-2 h-2 rounded-full bg-primary" />

          <div className="flex-1 h-px bg-gray-300 dark:bg-white/10" />
        </div>

        <div className="text-sm text-gray-500 dark:text-gray-400 text-center">
          © {new Date().getFullYear()} Omar Rodríguez (LuciferM12). All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
