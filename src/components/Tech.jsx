import React from "react";
import {
  BiLogoCss3,
  BiLogoGit,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiLogoVisualStudio,
} from "react-icons/bi";
import { IoLogoNpm } from "react-icons/io";
import {
  SiAntdesign,
  SiDocker,
  SiGraphql,
  SiJest,
  SiMui,
  SiRedux,
  SiVercel,
  SiVite,
  SiWebpack,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";
import { motion } from "framer-motion";
import { GiOctopus } from "react-icons/gi";
import { IoInfinite } from "react-icons/io5";

const Tech = () => {
  return (
    <motion.div
      id="tech"
      className="flex flex-col overflow-hidden items-center justify-center min-h-screen gap-20"
    >
      <motion.h1
        className="title text-3xl md:text-4xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Technologies
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-wrap gap-10 w-full items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="tech-box"
        >
          <h1 className="text-xl font-[500] underline">
            Frontend Languages and Frameworks
          </h1>
          <motion.div className="flex items-center gap-10">
            <motion.div className="flex flex-col items-center justify-center">
              <BiLogoHtml5 className="tech text-red-500 " />
              <p>HTML</p>
            </motion.div>
            <motion.div className="flex flex-col items-center justify-center">
              <BiLogoCss3 className="tech text-blue-500 " />
              <p>CSS</p>
            </motion.div>
            <motion.div className="flex flex-col items-center justify-center">
              <BiLogoJavascript className="tech text-yellow-500 " />
              <p>JavaScript</p>
            </motion.div>
            {/* <motion.div className="flex flex-col items-center justify-center">
              <BiLogoTypescript className="tech text-sky-500 " />
              <p>TypeScript</p>
            </motion.div> */}
            <motion.div className="flex flex-col items-center justify-center">
              <BiLogoReact className="tech text-blue-500 " />
              <p>React.js</p>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="tech-box mx-10"
        >
          <h1 className="text-xl font-[500] underline">
            CSS Libraries and Frameworks
          </h1>
          <motion.div className="flex flex-wrap justify-center gap-5 items-center">
            <motion.div className="flex flex-col items-center justify-center">
              <BiLogoTailwindCss className="tech text-blue-500 " />
              <p>Tailwind CSS</p>
            </motion.div>
            <motion.div className="flex flex-col items-center justify-center">
              <SiAntdesign className="tech text-blue-500 p-2" />
              <p>Ant Design</p>
            </motion.div>
            <motion.div className="flex flex-col items-center justify-center">
              <SiMui className="tech text-blue-500 p-2" />
              <p>Material UI</p>
            </motion.div>
            <motion.div className="flex flex-col items-center justify-center">
              <TbBrandFramerMotion className="tech p-1" />
              <p>Framer Motion</p>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="tech-box"
        >
          <h1 className="text-xl font-[500] underline">State Management</h1>
          <motion.div className="flex items-center gap-5">
            <motion.div className="flex flex-col items-center justify-center">
              <BiLogoReact className="tech text-blue-500 " />
              <p>React Context</p>
            </motion.div>
            <motion.div className="flex flex-col items-center justify-center">
              <SiRedux className="tech p-2 text-purple-500 text-6xl" />
              <p>Redux</p>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="tech-box"
        >
          <h1 className="text-xl font-[500] underline">Development Tools</h1>
          <motion.div className="flex items-center gap-5">
            <motion.div className="flex flex-col items-center justify-center">
              <BiLogoVisualStudio className="tech text-blue-500 p-1" />
              <p>VS Code</p>
            </motion.div>
            <motion.div className="flex flex-col items-center justify-center">
              <BiLogoGit className="tech text-red-500 p-1" />
              <p>Git</p>
            </motion.div>
            <motion.div className="flex flex-col items-center justify-center">
              <IoLogoNpm className="tech text-red-600 " />
              <p>npm</p>
            </motion.div>
            <motion.div className="flex flex-col items-center justify-center">
              <SiWebpack className="tech p-2" />
              <p>WebPack</p>
            </motion.div>
            <motion.div className="flex flex-col items-center justify-center">
              <SiVite className="tech p-2 text-violet-600" />
              <p>Vite</p>
            </motion.div>
            <motion.div className="flex flex-col items-center justify-center">
              <SiGraphql className="tech p-2 text-pink-500" />
              <p>GraphQL</p>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="tech-box"
        >
          <h1 className="text-xl font-[500] underline">Testing Frameworks</h1>
          <motion.div className="flex items-center gap-5">
            <motion.div className="flex flex-col items-center justify-center">
              <GiOctopus className="tech text-red-500 p-1" />
              <p>React Testing Library</p>
            </motion.div>
            <motion.div className="flex flex-col items-center justify-center">
              <SiJest className="tech text-yellow-600 p-1" />
              <p>Jest</p>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="tech-box"
        >
          <h1 className="text-xl font-[500] underline">Cloud & DevOps</h1>
          <motion.div className="flex flex-wrap items-center gap-5">
            <motion.div className="flex flex-col items-center justify-center">
              <VscAzure className="tech text-blue-500 p-1" />
              <p>Microsoft Azure</p>
            </motion.div>
            <motion.div className="flex flex-col items-center justify-center">
              <IoInfinite className="tech p-1" />
              <p>CI/CD</p>
            </motion.div>
            <motion.div className="flex flex-col items-center justify-center">
              <SiVercel className="tech p-2" />
              <p>Vercel</p>
            </motion.div>
            {/* <motion.div className="flex flex-col items-center justify-center">
              <SiDocker className="tech text-blue-500 p-1" />
              <p>Docker</p>
            </motion.div> */}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Tech;
