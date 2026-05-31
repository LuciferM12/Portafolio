import { SpeckledBackground } from "./SpeckedBackground";

const Presentation = () => {
  return (
    <div className="w-full min-h-screen overflow-x-hidden box-border text-dark dark:text-light p-4 flex items-center justify-center">
      <div className="dark:bg-secondary bg-light max-lg:w-full w-1/2 p-4 min-h-30 flex flex-col items-center rounded-xl justify-center shadow-lg gap-4 relative overflow-hidden">
        <SpeckledBackground />
        <h1 className="text-5xl font-bold text-center z-10">
          Hi, I'm Omar Rodriguez 👋
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
