import { FolderOpen, Github, LayoutGrid } from "lucide-react";
import { motion, type Variants } from "motion/react";
import { useState } from "react";

type Project = {
  tab: string;
  title: string;
  tags: string[];
  description: string;
  repoUrl: string;
};

const projects: Project[] = [
  {
    tab: "fullstack · web · mobile",
    title: "Lorman",
    tags: ["Expo", "TypeScript", "Supabase", "Stripe"],
    description:
      "A complete e-commerce solution with user authentication, product catalog, shopping cart, and payment processing.",
    repoUrl: "https://github.com/LuciferM12/Lorman",
  },
  {
    tab: "game · mobile",
    title: "Conquistador Colonial",
    tags: ["Lua"],
    description:
      "A turn-based strategy game set in the colonial era, featuring historical battles and resource management based on Catan.",
    repoUrl: "https://github.com/LuciferM12/Conquistador-Colonial",
  },
  {
    tab: "game · desktop",
    title: "Cat-Attack",
    tags: ["Unity", "C#"],
    description:
      "A fast-paced 2D action game where players control a cat defending its territory from waves of invading enemies, featuring pixel art.",
    repoUrl: "https://github.com/LuciferM12/Cat-Attack",
  },
  {
    tab: "fullstack · web",
    title: "Flight Search",
    tags: ["TypeScript", "Spring Boot", "Docker", "API"],
    description:
      "A full-stack application for searching and booking flights with real-time availability and pricing.",
    repoUrl: "https://github.com/LuciferM12/Flight-Search",
  },
  {
    tab: "frontend · web",
    title: "Kill, Marry, Kiss",
    tags: ["Vite", "React", "TailwindCSS"],
    description:
      "A fun and interactive web app where users can play the classic 'Kill, Marry, Kiss' game with their friends, featuring a sleek UI and smooth animations.",
    repoUrl: "https://github.com/LuciferM12/Matar-casar-besar",
  },
  {
    tab: "desktop",
    title: "Turing Machine Simulator",
    tags: ["Java"],
    description:
      "A desktop application that simulates a Turing machine, allowing users to validate if a given string belongs to a specific language defined by the machine's rules.",
    repoUrl: "https://github.com/LuciferM12/MaquinaDeTuring",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

type FolderCardProps = {
  project: Project;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
};

const FolderCard = ({ project, index, isOpen, onToggle }: FolderCardProps) => {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-50px" }}
      className={`flex flex-col cursor-pointer rounded-xl border transition-colors duration-200 ${
        isOpen
          ? "border-primary"
          : "border-black/10 dark:border-white/10 hover:border-primary"
      }`}
      onClick={onToggle}
    >
      <div
        className={`self-start ml-4 h-8 px-3 flex items-center rounded-t-lg border border-b-0 -mb-px transition-colors duration-200 ${
          isOpen
            ? "border-primary bg-light dark:bg-secondary"
            : "border-black/10 dark:border-white/10 bg-light dark:bg-secondary"
        }`}
      >
        <span className="text-[11px] text-dark/50 dark:text-light/50 whitespace-nowrap">
          {project.tab}
        </span>
      </div>

      <div
        className={`flex flex-col flex-1 rounded-b-xl rounded-tr-xl bg-light dark:bg-secondary border-t transition-colors duration-200 px-5 pt-5 pb-6 ${
          isOpen ? "border-primary" : "border-black/10 dark:border-white/10"
        }`}
      >
        <div className="flex items-start justify-between gap-3">
          <FolderOpen
            className={`w-7 h-7 flex-shrink-0 mt-0.5 transition-colors duration-200 ${
              isOpen ? "text-primary" : "text-primary/60"
            }`}
          />
          <span className="flex-1 font-bold text-lg text-dark dark:text-light pt-0.5">
            {project.title}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-1 flex-shrink-0"
          >
            <svg
              className="w-4 h-4 text-dark/40 dark:text-light/40"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </motion.div>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag, i) => (
            <span
              key={tag}
              className={`text-[11px] px-2.5 py-1 rounded-full border ${
                i === 0
                  ? "bg-primary/10 text-primary border-primary/30"
                  : "bg-dark/5 dark:bg-light/5 text-dark/50 dark:text-light/50 border-black/10 dark:border-white/10"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
        <motion.div
          initial={false}
          animate={
            isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
          }
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <div className="border-t border-black/10 dark:border-white/10 mt-5 pt-4">
            <p className="text-sm text-dark/60 dark:text-light/60 leading-relaxed">
              {project.description}
            </p>
            <div className="flex justify-end mt-5">
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 text-xs text-primary border border-primary/30 bg-primary/10 hover:bg-primary/20 hover:border-primary transition-all duration-200 rounded-lg px-4 py-2"
              >
                <Github className="w-4 h-4" />
                View repo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div id="projects" className="w-full min-h-screen box-border flex items-center justify-center text-dark dark:text-light px-4">
      <div className="w-full flex flex-col gap-8">
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <LayoutGrid className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold">My Projects</h2>
        </motion.div>
        <div
          className="grid gap-6"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gridAutoRows: "260px",
          }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className={`relative ${openIndex === i ? "z-10" : "z-0"}`}
              style={{
                overflow: "visible",
              }}
            >
              <FolderCard
                project={project}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => handleToggle(i)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
