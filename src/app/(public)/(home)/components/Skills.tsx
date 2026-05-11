"use client";
import { GlassCard } from "@/components/Elements";
import { Code2, Layout, Binary, Settings, Gauge } from "lucide-react";
import { skills, stats } from "@/components/constants";

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-[#050505] font-mono">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-2">
            <Binary className="text-emerald-500" size={18} />
            <span className="text-emerald-500/50 text-[10px] tracking-[0.3em] uppercase">
              // Resource_Allocation
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">
            Engine.<span className="text-emerald-500">Core</span>();
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-24">
          <GlassCard className="p-8 border-white/5 bg-[#0a0a0a] rounded-sm group hover:border-emerald-500/30 transition-all">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-lg font-bold text-white flex items-center gap-3">
                <Code2 className="text-emerald-500" size={20} />
                FRONTEND_CORE
              </h3>
              <span className="text-[10px] text-gray-600 font-bold tracking-widest">
                0x0F1
              </span>
            </div>

            <div className="space-y-6">
              {skills.frontend.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400 font-bold tracking-tighter">
                      {skill.name.toUpperCase()}
                    </span>
                    <span className="text-[10px] text-emerald-500 font-mono italic">
                      {skill.level}%_LOAD
                    </span>
                  </div>
                  <div className="h-1 w-full bg-white/5 flex gap-1">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div
                        key={i}
                        className={`h-full flex-1 transition-all duration-1000 ${
                          i < skill.level / 10
                            ? "bg-emerald-500 shadow-[0_0_8px_#10b981]"
                            : "bg-white/5"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-8 border-white/5 bg-[#0a0a0a] rounded-sm group hover:border-cyan-500/30 transition-all">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-lg font-bold text-white flex items-center gap-3">
                <Layout className="text-cyan-400" size={20} />
                UI_LAYER_SPEC
              </h3>
              <span className="text-[10px] text-gray-600 font-bold tracking-widest">
                0x0U2
              </span>
            </div>

            <div className="space-y-6">
              {skills.uiux.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400 font-bold tracking-tighter">
                      {skill.name.toUpperCase()}
                    </span>
                    <span className="text-[10px] text-cyan-400 font-mono italic">
                      {skill.level}%_OPT
                    </span>
                  </div>
                  <div className="h-1 w-full bg-white/5 flex gap-1">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div
                        key={i}
                        className={`h-full flex-1 transition-all duration-1000 ${
                          i < skill.level / 10
                            ? "bg-cyan-400 shadow-[0_0_8px_#22d3ee]"
                            : "bg-white/5"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-8 border-white/5 bg-[#0a0a0a] rounded-sm group hover:border-pink-500/30 transition-all">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-lg font-bold text-white flex items-center gap-3">
                <Settings className="text-pink-500" size={20} />
                DEV_WORKFLOW
              </h3>
              <span className="text-[10px] text-gray-600 font-bold tracking-widest">
                0x0T3
              </span>
            </div>

            <div className="space-y-6">
              {skills.tools.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400 font-bold tracking-tighter">
                      {skill.name.toUpperCase()}
                    </span>
                    <span className="text-[10px] text-pink-500 font-mono italic">
                      {skill.level}%_READY
                    </span>
                  </div>
                  <div className="h-1 w-full bg-white/5 flex gap-1">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div
                        key={i}
                        className={`h-full flex-1 transition-all duration-1000 ${
                          i < skill.level / 10
                            ? "bg-pink-500 shadow-[0_0_8px_#ec4899]"
                            : "bg-white/5"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        <div>
          <div className="flex items-center justify-center gap-4 mb-16">
            <div className="h-px flex-1 bg-white/5" />
            <h3 className="text-2xl font-bold text-white flex items-center gap-3 uppercase tracking-tighter">
              <Gauge className="text-emerald-500" size={24} />
              System_Benchmarking
            </h3>
            <div className="h-px flex-1 bg-white/5" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <GlassCard
                key={index}
                className="p-6 border-white/5 bg-white/1 hover:bg-white/3 transition-all group rounded-sm text-left"
              >
                <div className="flex items-center justify-between mb-4">
                  <stat.icon
                    className="text-gray-500 group-hover:text-emerald-500 transition-colors"
                    size={20}
                  />
                  <span className="text-[8px] text-gray-600 font-bold tracking-[0.2em]">
                    METRIC_STABLE
                  </span>
                </div>

                <div className="text-4xl font-black text-white tracking-tighter mb-1">
                  {stat.value}
                </div>

                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold border-t border-white/5 pt-3">
                  {stat.label.replace(" ", "_")}
                </p>

                <div className="mt-4 flex items-end gap-0.5 h-6 opacity-20 group-hover:opacity-100 transition-opacity">
                  {[40, 70, 45, 90, 65, 80, 30].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-emerald-500"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
