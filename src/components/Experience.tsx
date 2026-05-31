import { Briefcase, Calendar, GraduationCap, TrendingUp } from "lucide-react";
import { motion, useInView, type Variants } from "motion/react";
import { useRef, useState } from "react";

type Role = {
  title: string;
  date: string;
  promoted?: boolean;
};

type Experience = {
  id: number;
  company: string;
  icon: "work" | "education";
  color: string;
  roles: Role[];
};

const experiences: Experience[] = [
  {
    id: 0,
    company: "Dillobyte Solutions",
    icon: "work",
    color: "#8486f0",
    roles: [
      {
        title: "IT Director",
        date: "02/2026 - Present",
        promoted: true,
      },
      {
        title: "Full Stack Engineer",
        date: "06/2024 - 12/2025",
      },
    ],
  },
  {
    id: 1,
    company: "Encora Inc.",
    icon: "work",
    color: "#8486f0",
    roles: [
      {
        title: "Spark Program Intern",
        date: "12/2024 - 11/2025",
      },
    ],
  },
  {
    id: 2,
    company: "Polytechnic University of San Luis Potosí",
    icon: "education",
    color: "#8486f0",
    roles: [
      {
        title: "Information Technology Engineer",
        date: "06/2021 - 12/2025",
      },
    ],
  },
];

const NODE_POSITIONS = [
  { x: 60, y: 50 },
  { x: 230, y: 230 },
  { x: 70, y: 400 },
];

const CANVAS_W = 520;
const CANVAS_H = 560;
const NODE_W = 190;
const NODE_H = 72;

function cubicPath(x1: number, y1: number, x2: number, y2: number): string {
  const cy = (y1 + y2) / 2;
  return `M ${x1} ${y1} C ${x1} ${cy}, ${x2} ${cy}, ${x2} ${y2}`;
}

const sidebarVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

const canvasVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
  },
};

const nodeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: 0.4 + i * 0.1,
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const Experience = () => {
  const [selected, setSelected] = useState(0);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const dragging = useRef(false);
  const startPos = useRef({ x: 0, y: 0 });
  const startOffset = useRef({ x: 0, y: 0 });

  const sectionRef = useRef<HTMLDivElement>(null);
  const isSectionVisible = useInView(sectionRef, {
    once: false,
    margin: "-60px",
  });

  const onMouseDown = (e: React.MouseEvent) => {
    dragging.current = true;
    startPos.current = { x: e.clientX, y: e.clientY };
    startOffset.current = offset;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging.current) return;
    setOffset({
      x: startOffset.current.x + e.clientX - startPos.current.x,
      y: startOffset.current.y + e.clientY - startPos.current.y,
    });
  };

  const onMouseUp = () => {
    dragging.current = false;
  };

  const getNodeCenter = (idx: number) => ({
    top: {
      x: NODE_POSITIONS[idx].x + NODE_W / 2,
      y: NODE_POSITIONS[idx].y,
    },
    bot: {
      x: NODE_POSITIONS[idx].x + NODE_W / 2,
      y: NODE_POSITIONS[idx].y + NODE_H,
    },
  });

  return (
    <div
      ref={sectionRef}
      className="w-full min-h-screen box-border flex items-center justify-center text-dark dark:text-light px-4"
    >
      <div className="w-full flex flex-col gap-8">
        <motion.div
          className="flex flex-col gap-1"
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center justify-start gap-2">
            <Calendar className="w-6 h-6 text-primary inline-block" />
            <h2 className="text-2xl font-bold text-center">My Experience</h2>
          </div>
        </motion.div>

        <div className="dark:bg-secondary bg-light rounded-xl shadow-lg overflow-hidden h-150 flex max-lg:flex-col">
          <div className="flex flex-col gap-1 p-6 border-r border-black/10 dark:border-white/10 min-w-[240px]">
            {experiences.map((exp, i) => (
              <motion.button
                key={exp.id}
                custom={i}
                variants={sidebarVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-40px" }}
                onClick={() => setSelected(exp.id)}
                className={`flex gap-3 items-start text-left px-3 py-3 rounded-lg transition-all hover:bg-primary/10 border-2 ${
                  selected === exp.id
                    ? "border-primary bg-primary/10"
                    : "border-transparent"
                }`}
              >
                <div
                  className={`w-2.5 h-2.5 rounded-sm mt-1.5 flex-shrink-0 ${
                    selected === exp.id ? "bg-primary" : "bg-primary/40"
                  }`}
                />
                <div className="flex flex-col gap-0.5">
                  <span className="text-lg font-mono text-dark/50 dark:text-light/50">
                    {exp.roles[exp.roles.length - 1].date.split("-")[0].trim()}{" "}
                    - {exp.roles[0].date.split("-")[1].trim()}
                  </span>
                  <span className="font-extrabold text-xl uppercase tracking-wide">
                    {exp.company}
                  </span>
                  <div className="flex flex-col gap-0.5">
                    {exp.roles.map((role, ri) => (
                      <span
                        key={ri}
                        className={`text-md font-medium ${
                          ri === 0
                            ? "text-primary"
                            : "text-dark/40 dark:text-light/40"
                        }`}
                      >
                        {role.promoted && ri === 0 && (
                          <TrendingUp className="inline w-3 h-3 mr-1 mb-0.5" />
                        )}
                        {role.title}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          <motion.div
            className="flex-1 relative overflow-hidden bg-dark/5 dark:bg-dark/40 cursor-grab active:cursor-grabbing select-none min-h-[400px]"
            variants={canvasVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-60px" }}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
          >
            <div
              style={{
                position: "absolute",
                width: CANVAS_W,
                height: CANVAS_H,
                transform: `translate(${offset.x}px, ${offset.y}px)`,
              }}
            >
              <svg
                width={CANVAS_W}
                height={CANVAS_H}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  pointerEvents: "none",
                }}
              >
                {[0, 1].map((i) => {
                  const from = getNodeCenter(i);
                  const to = getNodeCenter(i + 1);
                  return (
                    <g key={i}>
                      <path
                        d={cubicPath(
                          from.bot.x,
                          from.bot.y,
                          to.top.x,
                          to.top.y,
                        )}
                        fill="none"
                        stroke="#8486f0"
                        strokeWidth={1.5}
                        strokeDasharray="6 4"
                        opacity={0.6}
                      />
                      <circle
                        cx={from.bot.x}
                        cy={from.bot.y}
                        r={4}
                        fill="#8486f0"
                        opacity={0.8}
                      />
                      <circle
                        cx={to.top.x}
                        cy={to.top.y}
                        r={4}
                        fill="#8486f0"
                        opacity={0.8}
                      />
                    </g>
                  );
                })}
                <circle
                  cx={getNodeCenter(0).top.x}
                  cy={getNodeCenter(0).top.y}
                  r={4}
                  fill="#8486f0"
                  opacity={0.8}
                />
                <circle
                  cx={getNodeCenter(2).bot.x}
                  cy={getNodeCenter(2).bot.y}
                  r={4}
                  fill="#8486f0"
                  opacity={0.8}
                />
              </svg>

              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.id}
                  custom={i}
                  variants={nodeVariants}
                  initial="hidden"
                  animate={isSectionVisible ? "visible" : "hidden"}
                  onClick={() => setSelected(exp.id)}
                  style={{
                    position: "absolute",
                    left: NODE_POSITIONS[i].x,
                    top: NODE_POSITIONS[i].y,
                    width: NODE_W,
                  }}
                  className={`rounded-lg border cursor-pointer transition-all duration-200 ${
                    selected === exp.id
                      ? "border-primary bg-light dark:bg-secondary scale-105"
                      : "border-primary/30 bg-light/80 dark:bg-secondary/80"
                  }`}
                >
                  <div className="flex items-center gap-3 p-3">
                    <div className="w-8 h-8 rounded-md bg-primary/15 flex items-center justify-center flex-shrink-0">
                      {exp.icon === "education" ? (
                        <GraduationCap className="w-4 h-4 text-primary" />
                      ) : (
                        <Briefcase className="w-4 h-4 text-primary" />
                      )}
                    </div>
                    <div className="flex flex-col gap-0.5 min-w-0">
                      <span className="text-sm font-bold truncate">
                        {exp.company}
                      </span>
                      <span className="text-[10px] font-mono text-dark/50 dark:text-light/50 truncate">
                        {exp.roles[exp.roles.length - 1].date
                          .split("-")[0]
                          .trim()}{" "}
                        - {exp.roles[0].date.split("-")[1].trim()}
                      </span>
                    </div>
                    {exp.roles.length > 1 && (
                      <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                        <TrendingUp className="w-3 h-3 text-white" />
                      </div>
                    )}
                    {exp.roles.length === 1 && (
                      <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                        <span className="text-[9px] font-bold text-white">
                          {exp.roles[0].date.includes("present")
                            ? new Date().getFullYear() -
                              parseInt(exp.roles[0].date.split("/")[1])
                            : parseInt(
                                exp.roles[0].date.split("-")[1].split("/")[1],
                              ) - parseInt(exp.roles[0].date.split("/")[1])}
                          y
                        </span>
                      </div>
                    )}
                  </div>

                  {selected === exp.id && exp.roles.length > 1 && (
                    <div className="border-t border-primary/20 mx-3 mb-2 pt-2 flex flex-col gap-1">
                      {exp.roles.map((role, ri) => (
                        <div key={ri} className="flex items-center gap-1.5">
                          {ri === 0 && (
                            <TrendingUp className="w-3 h-3 text-primary flex-shrink-0" />
                          )}
                          {ri > 0 && <div className="w-3 h-3 flex-shrink-0" />}
                          <span
                            className={`text-[10px] font-medium ${
                              ri === 0
                                ? "text-primary"
                                : "text-dark/50 dark:text-light/50"
                            }`}
                          >
                            {role.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <p className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[11px] text-dark/30 dark:text-light/30 pointer-events-none">
              Drag to explore
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
