import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaDownload, FaLinkedinIn } from "react-icons/fa";
import { SiGithub, SiGmail } from "react-icons/si";
import { githubUrl, linkedinUrl, personalEmail } from "./Constants";

const Contact = () => {
  const [result, setResult] = useState("");
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(false);

  const onSubmit = async (event) => {
    setloading(true);
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_API_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Your message has been sent to Sandeep!");
      setError(false);
      event.target.reset();
    } else {
      console.log("Error", data);
      setError(true);
      setResult(data.message);
    }
    setloading(false);
    setTimeout(() => {
      event.target.reset();
      setResult("");
    }, 5000);
  };

  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center min-h-screen md:pt-20"
    >
      <div className="flex flex-col items-center justify-center gap-5 px-10">
        <h1 className="title text-3xl md:text-4xl">Get in Touch</h1>
        <p className="text-center text-lg">
          Want to connect? Send me an email through this Web3Form and I'll
          respond as soon as possible!
        </p>

        <div className="w-full">
          <form
            className="flex flex-col items-center justify-center gap-8"
            onSubmit={onSubmit}
          >
            <input
              title="Name"
              className="shadow border-2 w-full md:w-1/2 rounded-md p-2 outline-none"
              placeholder="Enter your name"
              type="text"
              name="name"
              required
            />
            <input
              title="Email"
              className="shadow border-2 rounded-md p-2 w-full md:w-1/2 outline-none"
              placeholder="Enter your email"
              type="email"
              name="email"
              required
            />
            <textarea
              title="Message"
              placeholder="Enter your message"
              className="shadow border-2 rounded-md p-2 w-full md:w-1/2 outline-none"
              name="message"
              required
            />
            {result && (
              <span
                className={`w-1/2 ${
                  error ? "text-red-500" : "text-green-500"
                } font-medium text-center`}
              >
                {result}
              </span>
            )}
            <button
              title="Send"
              type="submit"
              className="p-2 w-[200px] rounded-md shadow-lg duration-500 opacity-90 hover:opacity-100 hover:scale-110 mt-5 bg-gradient-to-r from-blue-500 to-pink-500 text-white font-medium tracking-wide hover:shadow-xl"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>

        {/* social media icons */}
        <motion.div className="flex pt-20 gap-10 items-center">
          <a href={linkedinUrl} target="_blank">
            <div className="cursor-pointer border-2 rounded-md transition-all duration-300 opacity-100 hover:opacity-85 hover:scale-110">
              <FaLinkedinIn className="p-1" fontSize={40} />
            </div>
          </a>
          <a href={githubUrl} target="_blank">
            <div className="cursor-pointer rounded-md transition-all border-2 duration-300 opacity-100 hover:opacity-85 hover:scale-110">
              <SiGithub className="p-1" fontSize={40} />
            </div>
          </a>
          <a href={personalEmail} target="_blank">
            <div className="cursor-pointer rounded-md transition-all border-2 duration-300 opacity-100 hover:opacity-85 hover:scale-110">
              <SiGmail className="p-1" fontSize={40} />
            </div>
          </a>
          <a download href="/G R Sandeep.pdf" target="_blank">
            <div
              title="Download Resume"
              className="cursor-pointer rounded-md text-xl transition-all border-2 duration-300 opacity-100 hover:opacity-85 hover:scale-110"
            >
              <FaDownload className="p-1.5" fontSize={40} />
            </div>
          </a>
        </motion.div>

        <motion.p className="flex text-center text-[10px] tracking-wider">
          Developed by G R Sandeep
        </motion.p>
      </div>
    </div>
  );
};

export default Contact;
