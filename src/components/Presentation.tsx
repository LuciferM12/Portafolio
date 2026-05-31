import { SpeckledBackground } from "./SpeckedBackground";
import { motion } from "motion/react";
import type { Variants } from "motion/react";

const Presentation = () => {
  const name = "Hi, I'm Omar Rodriguez";

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: -40, rotateX: 90 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.045,
        type: "spring" as const,
        stiffness: 200,
        damping: 18,
      },
    }),
  };

  const emojiVariants: Variants = {
    hidden: { opacity: 0, scale: 0, rotate: -30 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        delay: name.length * 0.045 + 0.1,
        type: "spring",
        stiffness: 260,
        damping: 12,
      },
    },
    wave: {
      rotate: [0, 20, -10, 20, 0],
      transition: {
        delay: name.length * 0.045 + 0.5,
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="w-full min-h-screen overflow-x-hidden box-border text-dark dark:text-light p-4 flex items-center justify-center">
      <div className="dark:bg-secondary bg-light max-lg:w-full w-1/2 p-16 max-lg:p-4 min-h-30 flex flex-col items-center rounded-xl justify-center shadow-lg gap-4 relative overflow-hidden">
        <SpeckledBackground />
        <h1 className="text-5xl font-bold text-center z-10 flex flex-wrap justify-center">
          {name.split("").map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              style={{ display: "inline-block", whiteSpace: "pre" }}
            >
              {char}
            </motion.span>
          ))}
          <motion.span
            variants={emojiVariants}
            initial="hidden"
            animate={["visible", "wave"]}
            style={{ display: "inline-block", marginLeft: "0.25rem" }}
          >
            👋
          </motion.span>
        </h1>
        <p className="text-center mt-2 text-lg text-gray-600 dark:text-gray-300 z-10">
          Passionate about technology and software development, I am an
          Information Technology Engineer with a strong background in
          programming, system administration, and network management. I thrive
          on solving complex problems and continuously learning new technologies
          to stay at the forefront of the IT industry, creating innovate
          solutions using modern tools and frameworks.
        </p>
        <div className="flex gap-4 items-center z-10">
          <button className="px-8 py-2 dark:bg-dark bg-black text-light rounded-lg dark:hover:bg-dark/90 transition-colors hover:cursor-pointer">
            Download CV
          </button>
          <button className="px-8 py-2 border dark:border-dark border-black bg-white dark:bg-secondary dark:text-light rounded-lg dark:hover:bg-secondary/90 transition-colors hover:cursor-pointer ">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
