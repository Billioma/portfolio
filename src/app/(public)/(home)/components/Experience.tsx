"use client";
import { exp } from "@/components/constants";
import { GlassCard } from "@/components/Elements";
import { Calendar, Box, ShieldCheck, Activity, Terminal } from "lucide-react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-6 bg-[#050505] font-mono relative"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-2">
            <Activity className="text-emerald-500" size={18} />
            <span className="text-emerald-500/50 text-[10px] tracking-[0.3em] uppercase">
              // Recursive_Deployment_Stack
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">
            Memory.<span className="text-emerald-500">Stack</span>();
          </h2>
        </div>

        <div className="relative">
          {exp.map((item, idx) => (
            <div
              key={idx}
              className="sticky mb-12"
              style={{ top: `${80 + idx * 20}px` }}
            >
              <GlassCard
                className={`p-6 md:p-10 border border-white/10 bg-[#0a0a0a] rounded-xl shadow-2xl group transition-all duration-500 hover:border-emerald-500/40`}
              >
                <div className="absolute top-4 right-6 flex gap-1.5 opacity-30">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <div className="w-2 h-2 rounded-full bg-cyan-500" />
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                </div>

                <div className="mb-6 flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-emerald-500/60">
                  <span className="flex items-center gap-2">
                    <Terminal size={12} /> STACK_OFFSET: 0x0{idx}
                  </span>
                  <span className="text-gray-600">|</span>
                  <span className="flex items-center gap-1.5 text-gray-500">
                    <Calendar size={12} /> {item.duration}
                  </span>
                </div>

                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-8">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase group-hover:text-emerald-400 transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-cyan-400 font-bold italic mt-1">
                      <Box size={18} />
                      <span>@ {item.company}</span>
                    </div>
                  </div>

                  {item.badge && (
                    <div className="px-3 py-1 bg-white/5 border border-emerald-500/20 text-[9px] text-emerald-400 font-bold rounded-full self-start">
                      {item.badge.text.toUpperCase()}
                    </div>
                  )}
                </div>

                <div className="relative mb-8 p-5 bg-white/3 border-l-2 border-emerald-500/50 font-sans italic text-gray-300 leading-relaxed rounded-r-lg">
                  "{item.desc}"
                </div>

                {item.highlights && (
                  <div className="grid md:grid-cols-2 gap-3">
                    {item.highlights.map((highlight, i) => (
                      <div
                        key={i}
                        className="flex items-start space-x-3 p-3 border border-white/5 bg-white/1 rounded-lg group/item hover:bg-emerald-500/2 transition-colors"
                      >
                        <ShieldCheck
                          className="text-emerald-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform"
                          size={14}
                        />
                        <span className="text-[11px] text-gray-400 font-mono">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {item.features && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-8">
                    {item.features.map((f, i) => (
                      <div
                        key={i}
                        className="py-2 px-3 border border-white/5 rounded bg-[#111] text-center"
                      >
                        <span className="text-[9px] font-bold text-gray-500 uppercase tracking-tighter">
                          {f.title}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </GlassCard>
            </div>
          ))}
        </div>

        <div className="h-[40vh]" />

        <div className="text-center py-10">
          <span className="text-[10px] text-white/10 font-mono tracking-[0.5em] uppercase">
            End_Of_Stack_Trace
          </span>
        </div>
      </div>
    </section>
  );
};

export default Experience;
