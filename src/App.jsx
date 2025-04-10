import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <div class="fixed h-full overflow-y-auto overflow-x-auto items-center [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <SpeedInsights />
      <Analytics />
      <main className="flex flex-col items-center justify-center overflow-auto">
        <Navbar />
        <Hero />
        <Tech />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
