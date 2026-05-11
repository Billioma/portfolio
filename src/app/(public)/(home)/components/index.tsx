import About from "./About";
import Experience from "./Experience";
import Hero from "./Hero";
import Project from "./Project";
import Skills from "./Skills";
import Contact from "./Contact";
import ScrollToTop from "@/components/ScrollToTop";

const index = () => {
  return (
    <div className="relative">
      <Hero />
      <About />
      <Experience />
      <Project />
      <Skills />
      <Contact />

      <ScrollToTop />
    </div>
  );
};

export default index;
