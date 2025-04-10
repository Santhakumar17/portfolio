import React from "react";
import { motion } from "framer-motion";
import moment from "moment";
import Hexaware from "../assets/Hexaware.png";

const Experience = () => {
  const startDate = moment("2022-08-04");
  const currentDate = moment();

  const calculateExperience = () => {
    const startDate = moment("2022-08-04");
    const currentDate = moment();

    const years = currentDate.diff(startDate, "years");
    startDate.add(years, "years");

    const months = currentDate.diff(startDate, "months");
    startDate.add(months, "months");

    const days = currentDate.diff(startDate, "days");

    return `${years} years ${months} months ${days} days`;
  };

  return (
    <div
      id="experience"
      className="flex flex-col items-center min-h-screen justify-center gap-20 px-10 sm:px-20 md:px-40 pt-20 w-full"
    >
      <motion.h1
        className="title text-3xl md:text-4xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Experience
      </motion.h1>

      <div className="flex flex-col gap-10 border-2 shadow-lg shadow-white text-white items-center justify-center w-full p-10 rounded-lg">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <img
            src={Hexaware}
            className="w-20 h-20 p-5 bg-white rounded-3xl shadow-lg"
            alt=""
          />
          <div className="flex flex-col text-center md:text-left font-medium">
            <p className="text-xl md:text-2xl">GenAI Frontend Developer</p>
            <p className="text-base md:text-lg">
              Hexaware Technologies Ltd, Chennai
            </p>
            <p className="text-sm md:text-base">
              Aug 2022 - Present ({calculateExperience()})
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <ul className="list-disc list-inside flex flex-col gap-5">
            <li>
              Spearheaded the development and launch of multiple projects using
              React.js, Tailwind CSS, and Ant Design, ensuring efficient and
              scalable web applications.
            </li>
            <li>
              Implemented state management with React Context, and Redux to
              optimize data handling and application performance.
            </li>
            <li>
              Integrated GraphQL and REST APIs for dynamic data fetching and
              real-time updates.
            </li>
            <li>
              Enhanced web performance by focusing on Core Web Vitals, utilizing
              techniques like code splitting, lazy loading, and tree shaking to
              improve LCP, FID, and CLS.
            </li>
            <li>
              Deployed applications on Vercel, gaining expertise in CI/CD
              processes and foundational DevOps skills with Docker.
            </li>
            <li>
              Conducted and actively participated in code reviews to ensure
              adherence to best practices and standards.
            </li>
            <li>
              Transformed complex design wireframes from Adobe and Figma into
              interactive web applications.
            </li>
            <li>
              Utilized React Testing Library and Jest for testing to ensure
              robust testing and seamless user experiences, enhancing
              application reliability and performance.
            </li>
            <li>
              Collaborated with backend developers and designers to ensure the
              frontend aligns with design specifications and effectively handles
              data from the backend.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
