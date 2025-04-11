import React from "react";
import { motion } from "framer-motion";
import Avatar from "../assets/Portfolio Avatar.png";

const Hero = () => {
  return (
    <div id="home" className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-10">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={Avatar}
            className="size-[250px]  rounded-full transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl mt-10"
            alt="Image"
          />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col max-w-[800px] gap-4 items-center justify-center"
        >
          <h1 className="title md:text-4xl text-3xl">G R Santha Kumar</h1>
          <h2 className="text-lg font-medium bg-gradient-to-r text-transparent from-pink-500 to-blue-500 bg-clip-text transition-all duration-300 opacity-100 hover:opacity-80">
            React.js Developer
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-center px-2 sm:px-5">
            Skilled Frontend Developer and an active member of the Generative AI
            team at Hexaware, proficient in front-end technologies, including
            HTML, CSS, JavaScript and React.js. I leverage Tailwind CSS and Ant
            Design to rapidly create responsive components. Let's collaborate to
            build something exceptional!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
