import {
  Astro,
  AWS,
  Azure,
  C,
  CSS,
  Docker,
  Electron,
  ExpressJsDark,
  HTML5,
  Java,
  JavaScript,
  Lua,
  MariaDB,
  MySQL,
  NextJs,
  NodeJs,
  PHP,
  PostgreSQL,
  Prettier,
  Prisma,
  Python,
  React,
  Redux,
  ShadcnUI,
  Spring,
  Supabase,
  TailwindCSS,
  TypeScript,
  Vitest,
  Zod,
} from "developer-icons";
import { Layers } from "lucide-react";
import { motion, type Variants } from "motion/react";

const labelVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const iconVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.07,
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

type StackIcon = {
  Icon: React.ComponentType<{ className?: string }>;
  label: string;
};

type StackCategory = {
  label: string;
  icons: StackIcon[];
};

const categories: StackCategory[] = [
  {
    label: "FRONTEND",
    icons: [
      { Icon: NextJs, label: "NextJS" },
      { Icon: React, label: "React" },
      { Icon: HTML5, label: "HTML5" },
      { Icon: CSS, label: "CSS" },
      { Icon: Astro, label: "Astro" },
      { Icon: TailwindCSS, label: "Tailwind CSS" },
      { Icon: Redux, label: "Redux" },
      { Icon: Zod, label: "Zod" },
      { Icon: Electron, label: "Electron" },
    ],
  },
  {
    label: "BACKEND",
    icons: [
      { Icon: ExpressJsDark, label: "Express" },
      { Icon: Spring, label: "Spring Boot" },
      { Icon: NodeJs, label: "Node.js" },
      { Icon: PHP, label: "PHP" },
    ],
  },
  {
    label: "DATABASE",
    icons: [
      { Icon: PostgreSQL, label: "PostgreSQL" },
      { Icon: MySQL, label: "MySQL" },
      { Icon: MariaDB, label: "MariaDB" },
    ],
  },
  {
    label: "TOOLS",
    icons: [
      { Icon: AWS, label: "AWS" },
      { Icon: Azure, label: "Azure" },
      { Icon: Supabase, label: "Supabase" },
      { Icon: Prisma, label: "Prisma" },
      { Icon: Prettier, label: "Prettier" },
      { Icon: ShadcnUI, label: "Shadcn/UI" },
      { Icon: Vitest, label: "Vitest" },
      { Icon: Docker, label: "Docker" },
    ],
  },
  {
    label: "LANGUAGES",
    icons: [
      { Icon: JavaScript, label: "JavaScript" },
      { Icon: TypeScript, label: "TypeScript" },
      { Icon: Java, label: "Java" },
      { Icon: Python, label: "Python" },
      { Icon: Lua, label: "Lua" },
      { Icon: C, label: "C" },
    ],
  },
];

const Stack = () => {
  return (
    <div className="w-full min-h-20 h-screen box-border text-gray-800 dark:text-gray-200 flex items-center justify-center">
      <div className="p-4 min-h-30 flex flex-col items-start rounded-xl justify-center gap-8">
        <div className="flex items-center justify-center gap-2">
          <Layers className="w-6 h-6 text-primary inline-block" />
          <h2 className="text-2xl font-bold text-center">My Stack</h2>
        </div>
        <div className="w-full">
          <div className="flex flex-col gap-12">
            {categories.map((category) => (
              <div
                key={category.label}
                className="grid grid-cols-2 w-full items-start"
              >
                <motion.h3
                  className="font-extrabold text-4xl"
                  variants={labelVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, margin: "-60px" }}
                >
                  {category.label}
                </motion.h3>
                <div className="flex gap-8 flex-wrap items-center">
                  {category.icons.map((item, iconIndex) => (
                    <motion.div
                      key={item.label}
                      className="flex gap-2 items-center"
                      custom={iconIndex}
                      variants={iconVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, margin: "-40px" }}
                    >
                      <item.Icon className="w-12 h-12" />
                      <h3 className="font-bold max-sm:hidden text-2xl">
                        {item.label}
                      </h3>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;
