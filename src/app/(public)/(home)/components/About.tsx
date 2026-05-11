"use client";
import { GlassCard } from "@/components/Elements";
import {
  contactItems,
  highlights,
  journeySections,
} from "@/components/constants";
import { Fingerprint, Cpu, Share2 } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 font-mono bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-2">
            <Fingerprint className="text-emerald-500" size={20} />
            <span className="text-emerald-500/50 text-sm tracking-[0.3em] uppercase italic">
              // Root_User_Bio
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
            System.<span className="text-emerald-500">Identity</span>();
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <GlassCard className="p-0 border-white/8 overflow-hidden rounded-md bg-[#0a0a0a]">
              <div className="bg-white/5 px-4 py-2 border-b border-white/5 flex justify-between items-center">
                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                  About_Me.md
                </span>
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                  <div className="w-2 h-2 rounded-full bg-white/10" />
                </div>
              </div>

              <div className="p-8 space-y-10">
                {journeySections.map(
                  ({ title, description, Icon, titleColor }) => (
                    <div
                      key={title}
                      className="group relative pl-6 border-l border-white/5 hover:border-emerald-500/30 transition-colors"
                    >
                      <div className="absolute -left-0.5 top-0 h-4 w-0.75 bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                      <h3
                        className={`text-xl font-bold ${titleColor || "text-white"} mb-3 flex items-center gap-3`}
                      >
                        <Icon className="text-emerald-500" size={18} />
                        {title.replace(" ", "_")}
                      </h3>
                      <p className="text-sm md:text-base text-gray-400 leading-relaxed font-sans">
                        {description}
                      </p>
                    </div>
                  ),
                )}

                <div className="pt-8 border-t border-white/5 space-y-3">
                  <div className="text-xs text-gray-600 mb-4 uppercase tracking-widest flex items-center gap-2">
                    <Share2 size={14} /> Global_Exports
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {contactItems.map(({ value, href, Icon }) => (
                      <a
                        key={value}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 p-3 bg-white/2 border border-white/5 rounded-sm hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all group"
                      >
                        <Icon
                          className="text-gray-500 group-hover:text-emerald-500 transition-colors"
                          size={16}
                        />
                        <span className="text-xs text-gray-400 truncate group-hover:text-white transition-colors lowercase">
                          {value}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center gap-2 mb-2 px-2">
              <Cpu className="text-cyan-400" size={18} />
              <span className="text-cyan-400/50 text-[10px] tracking-[0.2em] uppercase font-bold">
                Hardware_Acceleration
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map(({ value, title, Icon, border, iconColor }) => (
                <GlassCard
                  key={title}
                  className={`relative p-8 border-white/5 bg-[#0a0a0a] group hover:border-emerald-500/40 transition-all duration-500 overflow-hidden rounded-sm`}
                >
                  <Icon
                    className="absolute -right-4 -bottom-4 text-white/2 group-hover:text-emerald-500/5 transition-colors"
                    size={120}
                  />

                  <div className="relative z-10">
                    <div className={`mb-4 flex items-center justify-between`}>
                      <Icon
                        size={24}
                        className={iconColor || "text-gray-500"}
                      />
                      <span className="text-[10px] text-gray-600 font-bold italic">
                        RT_VAL
                      </span>
                    </div>

                    <h3 className="font-black text-4xl text-white mb-1 tracking-tighter">
                      {value}
                    </h3>

                    <p className="text-[10px] text-emerald-500 font-bold uppercase tracking-widest">
                      {title.replace(" ", "_")}
                    </p>
                  </div>
                </GlassCard>
              ))}
            </div>

            <div className="mt-4 p-6 border border-dashed border-white/10 rounded-sm">
              <span className="text-[10px] text-gray-600 uppercase block mb-4 tracking-widest font-bold">
                // Sub_System_Dependencies
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  "SCALABILITY",
                  "REDUX_TOOLKIT",
                  "NEXT_JS_14",
                  "WASM",
                  "TYPESCRIPT_STRICT",
                  "ZUSTAND",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="text-[9px] px-2 py-1 border border-white/5 bg-white/2 text-gray-500 hover:text-cyan-400 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
