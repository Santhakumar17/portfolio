import React, { useState } from "react";
import { FaDownload, FaLinkedinIn } from "react-icons/fa";
import { SiGithub, SiGmail } from "react-icons/si";
import { githubUrl, linkedinUrl, personalEmail } from "./Constants";
import { BiMenu, BiX } from "react-icons/bi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full flex items-center justify-between py-6 backdrop-blur-md px-5 lg:px-20">
      <a
        href="#home"
        className="title text-xl sm:text-2xl md:text-3xl opacity-100 hover:scale-110 cursor-pointer"
      >
        G R Sandeep
      </a>

      {isOpen ? (
        <BiX
          className="cursor-pointer block md:hidden"
          onClick={() => setisOpen(!isOpen)}
          fontSize={40}
        />
      ) : (
        <BiMenu
          className="cursor-pointer block md:hidden"
          onClick={() => setisOpen(!isOpen)}
          fontSize={40}
        />
      )}

      {/* nav items */}
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="hidden md:flex text-lg md:gap-6 lg:gap-14 font-medium"
      >
        <a
          href="#home"
          className="cursor-pointer hover:scale-110 tracking-wider transition-all duration-300 opacity-100 hover:opacity-85"
        >
          <li>Home</li>
        </a>
        <a
          href="#tech"
          className="cursor-pointer hover:scale-110 tracking-wider transition-all duration-300 opacity-100 hover:opacity-85"
        >
          <li>Tech</li>
        </a>
        <a
          href="#experience"
          className="cursor-pointer hover:scale-110 tracking-wider transition-all duration-300 opacity-100 hover:opacity-85"
        >
          <li>Experience</li>
        </a>
        <a
          href="#projects"
          className="cursor-pointer hover:scale-110 tracking-wider transition-all duration-300 opacity-100 hover:opacity-85"
        >
          <li>Projects</li>
        </a>
        <a
          href="#contact"
          className="cursor-pointer hover:scale-110 tracking-wider transition-all duration-300 opacity-100 hover:opacity-85"
        >
          <li>Contact</li>
        </a>
      </motion.ul>

      {/* social media icons */}
      <div className="hidden md:flex gap-6 items-center">
        <a href={linkedinUrl} onClick={() => setisOpen(false)} target="_blank">
          <div
            title="Linkedin"
            className="cursor-pointer text-xl border-2 rounded-md transition-all duration-300 opacity-100 hover:opacity-85 hover:scale-110"
          >
            <FaLinkedinIn className="p-1" fontSize={32} />
          </div>
        </a>
        <a href={githubUrl} onClick={() => setisOpen(false)} target="_blank">
          <div
            title="GitHub"
            className="cursor-pointer rounded-md text-xl transition-all border-2 duration-300 opacity-100 hover:opacity-85 hover:scale-110"
          >
            <SiGithub className="p-1" fontSize={32} />
          </div>
        </a>
        <a
          href={personalEmail}
          onClick={() => setisOpen(false)}
          target="_blank"
        >
          <div
            title="Send Email"
            className="cursor-pointer rounded-md text-xl transition-all border-2 duration-300 opacity-100 hover:opacity-85 hover:scale-110"
          >
            <SiGmail className="p-1" fontSize={32} />
          </div>
        </a>
        <a
          download
          href="/G R Sandeep.pdf"
          onClick={() => setisOpen(false)}
          target="_blank"
        >
          <div
            title="Download Resume"
            className="cursor-pointer rounded-md text-xl transition-all border-2 duration-300 opacity-100 hover:opacity-85 hover:scale-110"
          >
            <FaDownload className="p-1.5" fontSize={32} />
          </div>
        </a>
      </div>

      {isOpen && (
        <div
          className={` ${
            isOpen ? "block" : "hidden"
          } block md:hidden h-screen absolute top-20 w-full z-50 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]`}
        >
          <div>
            {/* nav items */}
            <ul className="flex flex-col gap-10 items-center justify-center w-full text-2xl">
              <a
                href="#home"
                onClick={() => setisOpen(false)}
                className="cursor-pointer transition-all duration-300"
              >
                <li>Home</li>
              </a>
              <a
                href="#tech"
                onClick={() => setisOpen(false)}
                className="cursor-pointer transition-all duration-300"
              >
                <li>Tech</li>
              </a>
              <a
                href="#experience"
                onClick={() => setisOpen(false)}
                className="cursor-pointer transition-all duration-300"
              >
                <li>Experience</li>
              </a>
              <a
                href="#projects"
                onClick={() => setisOpen(false)}
                className="cursor-pointer transition-all duration-300"
              >
                <li>Projects</li>
              </a>
              <a
                href="#contact"
                onClick={() => setisOpen(false)}
                className="cursor-pointer transition-all duration-300"
              >
                <li>Contact</li>
              </a>

              {/* social media icons */}
              <div className="flex gap-6 items-center">
                <a
                  href={linkedinUrl}
                  onClick={() => setisOpen(false)}
                  target="_blank"
                >
                  <div className="cursor-pointer text-xl border-2 hover:border-blue-600  rounded-md transition-all duration-300 hover:text-blue-600 ">
                    <FaLinkedinIn className="p-1" fontSize={32} />
                  </div>
                </a>
                <a
                  href={githubUrl}
                  onClick={() => setisOpen(false)}
                  target="_blank"
                >
                  <div className="cursor-pointer rounded-md text-xl transition-all border-2 hover:border-gray-900 duration-300 ">
                    <SiGithub className="p-1" fontSize={32} />
                  </div>
                </a>
                <a
                  href={personalEmail}
                  onClick={() => setisOpen(false)}
                  target="_blank"
                >
                  <div className="cursor-pointer rounded-md text-xl transition-all border-2 hover:border-red-700 duration-300 hover:text-red-700 ">
                    <SiGmail className="p-1" fontSize={32} />
                  </div>
                </a>
              </div>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
