import React from "react";
import { motion } from "framer-motion";
import { RxExternalLink } from "react-icons/rx";

import EatCurious from "../assets/Eat-Curious.png";
import DisneyClone from "../assets/Disney-Clone.png";
import WeatherApp from "../assets/Weather-App.png";

const projectsData = [
  {
    image: EatCurious,
    title: "Eat Curious",
    description: [
      "This project is a clone of the 'Eat Curious' website, developed using React and Tailwind CSS to ensure a modern and responsive design.",
      "Incorporates smooth animations and transitions to enhance user interaction.",
      "Features a vibrant color palette and elegant typography for an aesthetically pleasing experience.",
      "Utilizes high-quality images to effectively showcase the content and maintain visual appeal.",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Tailwind",
      "CSS Animations",
      "Framer Motion",
    ],
    link: "https://sandy-eat-curious.vercel.app/",
  },
  {
    image: DisneyClone,
    title: "Disney Plus Clone",
    description: [
      "This project is a Disney Plus Clone developed using React and Tailwind CSS, offering a seamless user experience.",
      "Integrated with Firebase for backend services, including Google Login authentication for secure access.",
      "Features smooth animations and transitions for an engaging user interface.",
      "Utilizes Disney images and content to mimic the authentic Disney Plus experience.",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Tailwind",
      "Firebase Auth",
    ],
    link: "https://sandy-disney.vercel.app/",
  },
  {
    image: WeatherApp,
    title: "Sandy Weather App",
    description: [
      "This is a responsive weather application developed using React and Tailwind CSS, leveraging the OpenWeatherMap free API to provide real-time weather updates",
      "Displays temperature, humidity, wind speed, and weather conditions for any location worldwide.",
      "Allows users to search for weather details by city name.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind"],
    link: "https://the-sandy-weather.vercel.app/",
  },
];

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

const ProjectCards = () => {
  return (
    <div className="flex flex-col items-center min-h-screen md:justify-start justify-center gap-40 px-5 md:px-14">
      {projectsData.map((project) => (
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center md:flex-row md:text-left gap-10 md:gap-20">
            <div className="md:w-1/3 w-full flex place-content-center">
              <a href={project.link} target="_blank">
                <img
                  className="rounded-md w-[600px] shadow-xl hover:scale-110 duration-500"
                  src={project.image}
                  alt="Project Image"
                />
              </a>
            </div>
            <div className="flex flex-col gap-5 md:px-10 md:w-2/3 w-full">
              <h1 className="text-2xl font-medium flex items-center justify-center md:justify-start gap-5">
                {project.title}
                <a
                  href={project.link}
                  target="_blank"
                  className="font-medium cursor-pointer"
                >
                  <RxExternalLink />
                </a>
              </h1>
              <ul className="list-disc pl-10 list-outside">
                {project.description.map((desc) => (
                  <li>{desc}</li>
                ))}
              </ul>
              <div className="flex flex-wrap justify-center lg:justify-start gap-5">
                {project.technologies.map((tech) => (
                  <span className="shadow-2xl border-2 border-white py-2 px-5 rounded-lg">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
};

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col items-center pt-20 justify-center gap-16 lg:px-14"
    >
      <motion.h1
        className="title text-3xl md:text-4xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h1>

      <ProjectCards />
    </div>
  );
};

export default Projects;
