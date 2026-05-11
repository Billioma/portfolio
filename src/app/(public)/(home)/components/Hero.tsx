"use client"
import {
  Briefcase,
  ChevronDown,
  ExternalLink,
  Mail,
  Rocket,
  Sparkles,
} from "lucide-react";
import { stat } from "../../../../components/constants";
import { GlassCard, scrollToSection } from "@/components/Elements";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-32"
    >
      <div className="text-center max-w-6xl">
        <div className="relative mb-12">
          <div className="w-48 h-48 mx-auto relative">
            <div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 rounded-full opacity-60 animate-spin"
              style={{ animation: "spin 8s linear infinite" }}
            />
            <div
              className="absolute inset-2 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 rounded-full opacity-40 animate-spin"
              style={{ animation: "spin 10s linear infinite reverse" }}
            />
            <div className="absolute inset-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse" />

            <GlassCard className="absolute inset-8 rounded-full flex items-center justify-center border-white/[0.1] backdrop-blur-2xl">
              <span className="text-4xl font-black bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
                BO
              </span>
            </GlassCard>

            <div
              className="absolute -top-4 -right-4 w-3 h-3 bg-cyan-400 rounded-full animate-bounce"
              style={{ animationDelay: "0.3s" }}
            />
            <div
              className="absolute -bottom-4 -left-4 w-2 h-2 bg-purple-400 rounded-full animate-bounce"
              style={{ animationDelay: "0.7s" }}
            />
          </div>
        </div>

        <h1 className="text-7xl md:text-9xl font-black mb-8 tracking-tight">
          <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
            Bilal
          </span>
          <br />
          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-pink-500 bg-clip-text text-transparent">
            Omari
          </span>
        </h1>

        <div className="mb-10">
          <GlassCard className="inline-block px-8 py-4 border-white/[0.1]">
            <h2 className="text-2xl md:text-3xl font-light text-gray-300">
              Senior Frontend Developer
            </h2>
            <div className="flex items-center justify-center space-x-3 mt-2">
              <Sparkles className="text-cyan-400" size={20} />
              <span className="text-lg text-cyan-300 font-medium">
                Engineering Lead & Team Leader
              </span>
              <Rocket className="text-purple-400" size={20} />
            </div>
          </GlassCard>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          {stat.map(({ value, label, Icon, border, iconColor, valueColor }) => (
            <GlassCard
              key={label}
              className={`p-6 group hover:scale-105 ${border} transition-transform duration-300`}
            >
              <div className="flex items-center justify-center space-x-3 mb-3">
                <Icon
                  className={`${iconColor} transition-transform duration-500 group-hover:rotate-12`}
                  size={24}
                />
                <div className={`text-3xl font-bold ${valueColor}`}>
                  {value}
                </div>
              </div>
              <div className="text-gray-400">{label}</div>
            </GlassCard>
          ))}
        </div>

        <GlassCard className="p-10 mb-12 max-w-4xl mx-auto border-white/[0.08]">
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            Crafting exceptional digital experiences with{" "}
            <span className="text-cyan-300 font-semibold">React</span>,
            <span className="text-blue-300 font-semibold"> TypeScript</span>,
            <span className="text-purple-300 font-semibold"> Next JS</span>,
            and cutting-edge frontend technologies. Passionate about building
            scalable, user-centric applications that drive measurable business
            growth.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["React", "TypeScript", "Next.js", "Leadership", "Agile"].map(
              (skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/[0.03] border border-white/[0.08] rounded-full text-sm text-gray-400 backdrop-blur-xl hover:text-cyan-300 transition-colors"
                >
                  {skill}
                </span>
              ),
            )}
          </div>
        </GlassCard>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
          <button
            onClick={() => scrollToSection("contact")}
            className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1"
          >
            <span className="relative z-10 flex items-center justify-center space-x-3">
              <Mail size={22} />
              <span>Let's Connect</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>

          <button
            onClick={() => scrollToSection("projects")}
            className="group px-10 py-5 border-2 border-white/[0.1] text-white rounded-2xl font-semibold text-lg backdrop-blur-2xl hover:bg-white/[0.05] hover:border-cyan-400/50 transition-all duration-500 flex items-center justify-center space-x-3"
          >
            <Briefcase size={22} />
            <span>View Portfolio</span>
            <ExternalLink
              size={18}
              className="group-hover:rotate-45 transition-transform duration-300"
            />
          </button>
        </div>

        <div
          className="animate-bounce cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          <GlassCard className="inline-block p-3 rounded-full border-white/[0.1]">
            <ChevronDown className="text-cyan-400" size={32} />
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default Hero;
