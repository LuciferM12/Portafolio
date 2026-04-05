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

const Stack = () => {
  return (
    <div className="w-full max-w-[1920px] min-h-20 box-border text-gray-800 dark:text-gray-200 flex items-center justify-center">
      <div className="p-4 min-h-30 flex flex-col items-start rounded-xl justify-center gap-4">
        <div className="flex items-center justify-center gap-2">
          <Layers className="w-6 h-6 text-primary inline-block" />
          <h2 className="text-2xlfont-bold text-center">My Stack</h2>
        </div>
        <div className="w-full">
          <div className="flex flex-col gap-8 ">
            <div className="grid grid-cols-2 w-full items-start">
              <h3 className="font-extrabold text-4xl ">FRONTEND</h3>
              <div className="flex gap-8 flex-wrap items-center">
                <div className="flex gap-2 items-center">
                  <NextJs className="w-12 h-12" />
                  <h3 className="font-bold max-sm:hidden text-2xl">NextJS</h3>
                </div>
                <div className="flex gap-2 items-center">
                  <React className="w-12 h-12" />
                  <h3 className="font-bold max-sm:hidden text-2xl">React</h3>
                </div>
                <div className="flex gap-2 items-center">
                  <HTML5 className="w-12 h-12" />
                  <h3 className="font-bold max-sm:hidden text-2xl">HTML5</h3>
                </div>
                <div className="flex gap-2 items-center">
                  <CSS className="w-12 h-12" />
                  <h3 className="font-bold max-sm:hidden text-2xl">CSS</h3>
                </div>
                <div className="flex gap-2 items-center">
                  <Astro className="w-12 h-12" />
                  <h3 className="font-bold max-sm:hidden text-2xl">Astro</h3>
                </div>
                <div className="flex gap-2 items-center">
                  <TailwindCSS className="w-12 h-12" />
                  <h3 className="font-bold max-sm:hidden text-2xl">
                    Tailwind CSS
                  </h3>
                </div>
                <div className="flex gap-2 items-center">
                  <Redux className="w-12 h-12" />
                  <h3 className="font-bold max-sm:hidden text-2xl">Redux</h3>
                </div>
                <div className="flex gap-2 items-center">
                  <Zod className="w-12 h-12" />
                  <h3 className="font-bold max-sm:hidden text-2xl">Zod</h3>
                </div>
                <div className="flex gap-2 items-center">
                  <Electron className="w-12 h-12" />
                  <h3 className="font-bold max-sm:hidden text-2xl">Electron</h3>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 w-full items-start">
              <h3 className="font-extrabold text-4xl ">BACKEND</h3>
              <div className="flex gap-8 flex-wrap items-center">
                <div className="flex gap-2 items-center">
                  <ExpressJsDark className="w-12 h-12" />
                  <h3 className="font-bold max-sm:hidden text-2xl">Express</h3>
                </div>
                <div className="flex gap-2 items-center">
                  <Spring className="w-12 h-12" />
                  <h3 className="font-bold max-sm:hidden text-2xl">
                    Spring Boot
                  </h3>
                </div>
                <div className="flex gap-2 items-center">
                  <NodeJs className="w-12 h-12" />
                  <h3 className="font-bold max-sm:hidden text-2xl">Node.js</h3>
                </div>
                <div className="flex gap-2 items-center">
                  <PHP className="w-12 h-12" />
                  <h3 className="font-bold max-sm:hidden text-2xl">PHP</h3>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 w-full items-start">
              <h3 className="font-extrabold text-4xl ">DATABASE</h3>
              <div className="flex gap-8 flex-wrap items-center">
                <div className="flex gap-2 items-center">
                  <PostgreSQL className="w-12 h-12" />
                  <h3 className="font-bold max-sm:hidden text-2xl">
                    PostgreSQL
                  </h3>
                </div>
                <div className="flex gap-2 items-center">
                  <MySQL className="w-12 h-12" />
                  <h3 className="font-bold max-sm:hidden text-2xl">MySQL</h3>
                </div>
                <div className="flex gap-2 items-center">
                  <MariaDB className="w-12 h-12" />
                  <h3 className="font-bold max-sm:hidden text-2xl">MariaDB</h3>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 w-full items-start">
              <h3 className="font-extrabold text-4xl ">TOOLS</h3>
              <div className="flex gap-8 flex-wrap items-center">
                <div className="flex gap-2 items-center">
                  <AWS className="w-12 h-12" />
                  <h3 className="font-bold max-sm:hidden text-2xl">AWS</h3>
                </div>
                <div className="flex gap-2 items-center">
                  <Azure className="w-12 h-12" />
                  <h3 className="font-bold max-sm:hidden text-2xl">Azure</h3>
                </div>
                <div className="flex gap-2 items-center">
                  <Supabase className="w-12 h-12" />
                  <h3 className="font-bold max-sm:hidden text-2xl">Supabase</h3>
                </div>
                <div className="flex gap-2 items-center">
                  <Prisma className="w-12 h-12" />
                  <h3 className="font-bold max-sm:hidden text-2xl">Prisma</h3>
                </div>
                <div className="flex gap-2 items-center">
                  <Prettier className="w-12 h-12" />
                  <h3 className="font-bold max-sm:hidden text-2xl">Prettier</h3>
                </div>
                <div className="flex gap-2 items-center">
                  <ShadcnUI className="w-12 h-12" />
                  <h3 className="font-bold max-sm:hidden text-2xl">
                    Shadcn/UI
                  </h3>
                </div>
                <div className="flex gap-2 items-center">
                  <Vitest className="w-12 h-12" />
                  <h3 className="font-bold max-sm:hidden text-2xl">Vitest</h3>
                </div>
                <div className="flex gap-2 items-center">
                  <Docker className="w-12 h-12" />
                  <h3 className="font-bold max-sm:hidden text-2xl">Docker</h3>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 w-full items-start">
              <h3 className="font-extrabold text-4xl ">LANGUAGES</h3>
              <div className="flex gap-8 flex-wrap items-center">
                <div className="flex gap-2 items-center">
                  <JavaScript className="w-12 h-12" />
                  <h3 className="font-bold max-sm:hidden text-2xl">
                    JavaScript
                  </h3>
                </div>
                <div className="flex gap-2 items-center">
                  <TypeScript className="w-12 h-12" />
                  <h3 className="font-bold max-sm:hidden text-2xl">
                    TypeScript
                  </h3>
                </div>
                <div className="flex gap-2 items-center">
                  <Java className="w-12 h-12" />
                  <h3 className="font-bold max-sm:hidden text-2xl">Java</h3>
                </div>
                <div className="flex gap-2 items-center">
                  <Python className="w-12 h-12" />
                  <h3 className="font-bold max-sm:hidden text-2xl">Python</h3>
                </div>
                <div className="flex gap-2 items-center">
                  <Lua className="w-12 h-12" />
                  <h3 className="font-bold max-sm:hidden text-2xl">Lua</h3>
                </div>
                <div className="flex gap-2 items-center">
                  <C className="w-12 h-12" />
                  <h3 className="font-bold max-sm:hidden text-2xl">C</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;
