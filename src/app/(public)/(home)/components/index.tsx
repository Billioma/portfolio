import { Contact } from "lucide-react";
import About from "./About";
import Experience from "./Experience";
import Hero from "./Hero";
import Project from "./Project";
import Skills from "./Skills";

const index = () => {
  return (
    <div>
      <Hero />
      <About />
      <Experience />
      <Project />
      <Skills />
      <Contact />
    </div>
  );
};

export default index;
