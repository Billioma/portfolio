"use client";
import { useEffect, useState } from "react";

export const scrollToSection = (sectionId: any) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
};

export const NavLink = ({ href, children, mobile = false }: any) => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "experience",
        "projects",
        "skills",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <button
      onClick={() => scrollToSection(href)}
      className={`${mobile ? "block w-full text-left py-4 px-6" : ""} 
        ${
          activeSection === href
            ? "text-cyan-300"
            : "text-gray-400 hover:text-white"
        } 
        transition-all duration-500 font-medium relative group`}
    >
      {children}
      <span
        className={`absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-cyan-300 via-blue-400 to-purple-500 transition-all duration-500 group-hover:w-full ${
          activeSection === href ? "w-full" : ""
        }`}
      ></span>
    </button>
  );
};

export const GlassCard = ({ children, className = "", hover = true }: any) => (
  <div
    className={`backdrop-blur-xl bg-white/2 border border-white/5 rounded-3xl shadow-2xl ${
      hover
        ? "hover:bg-white/5 hover:border-white/10 hover:shadow-cyan-500/5"
        : ""
    } transition-all duration-700 ${className}`}
  >
    <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-cyan-500/1 via-transparent to-purple-500/1"></div>
    <div className="relative z-10">{children}</div>
  </div>
);

export const FloatingOrb = ({
  size = "w-64 h-64",
  color = "cyan",
  delay = "0s",
  position = "top-1/4 left-1/4",
}: any) => (
  <div
    className={`absolute ${position} ${size} bg-${color}-500/[0.03] rounded-full blur-3xl animate-pulse`}
    style={{ animationDelay: delay, animationDuration: "4s" }}
  ></div>
);
