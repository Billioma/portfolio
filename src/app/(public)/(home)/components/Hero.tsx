"use client";
import { Briefcase, ChevronDown, Terminal, Mail, Binary } from "lucide-react";
import { stat } from "../../../../components/constants";
import { GlassCard, scrollToSection } from "@/components/Elements";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-32 font-mono selection:bg-emerald-500/30"
    >
      <div className="text-center max-w-6xl w-full">
        <div className="relative mb-8">
          <div className="w-32 h-32 mx-auto relative group">
            <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full group-hover:bg-emerald-500/40 transition-all duration-700" />

            <div className="absolute inset-0 border border-emerald-500/30 rounded-xl rotate-45 animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-0 border border-cyan-500/30 rounded-xl -rotate-12 animate-[spin_15s_linear_infinite_reverse]" />

            <GlassCard className="absolute inset-0 rounded-xl flex items-center justify-center border-emerald-500/20 bg-[#0a0a0a]/80 backdrop-blur-2xl">
              <Terminal className="text-emerald-500" size={40} />
            </GlassCard>
          </div>
        </div>

        <div className="mb-4 inline-block">
          <span className="text-emerald-500 text-lg md:text-xl font-bold italic">
            const
          </span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white inline-block ml-4">
            BilalOmari
          </h1>
          <span className="text-gray-500 text-5xl md:text-7xl font-light">
            {" "}
            ={" "}
          </span>
          <span className="text-cyan-400 text-3xl md:text-5xl font-semibold">
            {"{"}
          </span>
        </div>

        <div className="mb-10">
          <div className="inline-flex items-center space-x-3 text-emerald-400/80 bg-emerald-500/5 px-4 py-1 rounded-full border border-emerald-500/10 mb-4">
            <Binary size={16} />
            <span className="text-xs uppercase tracking-[0.2em]">
              Engineering_Lead.exe
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-300 block italic">
            "Lead Frontend Architect"
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto">
          {stat.map(({ value, label, Icon, valueColor }) => (
            <div
              key={label}
              className="relative p-6 bg-white/2 border border-white/5 rounded-sm group hover:border-emerald-500/40 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-emerald-500/50" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-emerald-500/50" />

              <div className="flex flex-col items-center">
                <Icon
                  className="text-gray-500 mb-2 group-hover:text-emerald-400 transition-colors"
                  size={20}
                />
                <div
                  className={`text-4xl font-black tracking-tighter ${valueColor || "text-white"}`}
                >
                  {value}
                </div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500 mt-2 font-bold">
                  {label}
                </div>
              </div>
            </div>
          ))}
        </div>

        <GlassCard className="p-1 text-left mb-12 max-w-4xl mx-auto border-white/8 overflow-hidden rounded-md">
          <div className="bg-white/5 px-4 py-2 flex items-center gap-2 border-b border-white/5">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
            <span className="text-[10px] text-gray-500 ml-2 font-bold">
              bash — 80x24
            </span>
          </div>
          <div className="p-8">
            <p className="text-lg text-gray-400 leading-relaxed font-mono">
              <span className="text-emerald-500 font-bold">{">"} </span>
              Crafting high-stakes digital infrastructure using
              <span className="text-white"> React.js</span>,
              <span className="text-white"> TypeScript</span>, and
              <span className="text-white"> Next.js</span>. Focused on scalable
              architecture, fintech liquidity, and
              <span className="text-cyan-400 underline underline-offset-4 decoration-cyan-400/30">
                {" "}
                performance optimization
              </span>
              .
            </p>
          </div>
        </GlassCard>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <button
            onClick={() => scrollToSection("contact")}
            className="group flex items-center justify-center space-x-3 px-8 py-4 bg-emerald-500 text-black font-bold rounded-sm hover:bg-emerald-400 transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
          >
            <Mail size={18} />
            <span>EXECUTE_CONTACT</span>
          </button>

          <button
            onClick={() => window.open("https://github.com/Billioma", "_blank")}
            className="group flex items-center justify-center space-x-3 px-8 py-4 border border-emerald-500/50 text-emerald-500 font-bold rounded-sm hover:bg-emerald-500/10 transition-all duration-300"
          >
            <Briefcase size={18} />
            <span>VIEW_REPOS</span>
          </button>
        </div>

        <div
          className="cursor-pointer opacity-50 hover:opacity-100 transition-opacity flex flex-col items-center gap-2"
          onClick={() => scrollToSection("about")}
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">
            Scroll_To_Init
          </span>
          <ChevronDown className="text-emerald-500 animate-bounce" size={24} />
        </div>

        <div className="mt-12 text-cyan-400 text-3xl md:text-5xl font-semibold italic opacity-40">
          {"}"};
        </div>
      </div>
    </section>
  );
};

export default Hero;
