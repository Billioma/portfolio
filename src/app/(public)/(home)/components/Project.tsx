"use client";
import { useState } from "react";
import { recent } from "@/components/constants";
import { GlassCard } from "@/components/Elements";
import {
  ExternalLink,
  GitBranch,
  Cpu,
  ShieldCheck,
  Code2,
  Monitor,
  Layout,
} from "lucide-react";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("web-app");
  const filteredProjects = recent.filter((p) => p.category.includes(activeTab));

  const tabs = [
    { id: "web-app", label: "Web_Apps", icon: Monitor },
    { id: "website", label: "Websites", icon: Layout },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-[#050505] font-mono">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <GitBranch className="text-cyan-400" size={18} />
              <span className="text-cyan-400/50 text-[10px] tracking-[0.3em] uppercase">
                // Recent_Deployments
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">
              Project.<span className="text-cyan-400">Registry</span>();
            </h2>
          </div>

          <div className="flex bg-white/5 p-1 rounded-sm border border-white/10">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    flex items-center gap-2 px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-all
                    ${
                      activeTab === tab.id
                        ? "bg-cyan-500 text-black shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                        : "text-gray-500 hover:text-white"
                    }
                  `}
                >
                  <Icon size={14} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative min-h-[60vh]">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project: any, idx) => {
              const currentLink = project?.links?.[activeTab];
              const currentImage =
                project?.image?.[activeTab] || project?.image?.website;

              return (
                <div
                  key={`${activeTab}-${project.title}`}
                  className="sticky mb-16 transition-all duration-500"
                  style={{ top: `${100 + idx * 30}px`, zIndex: idx }}
                >
                  <GlassCard className="group p-0 border-white/10 bg-[#0a0a0a] overflow-hidden rounded-xl shadow-[0_-20px_50px_-20px_rgba(0,0,0,0.8)] hover:border-cyan-500/30 transition-all duration-500">
                    <div className="grid lg:grid-cols-12">
                      <div className="lg:col-span-5 relative bg-[#0f0f0f] min-h-87.5 overflow-hidden border-r border-white/5">
                        <div className="absolute top-4 left-4 z-10 flex gap-2">
                          <span className="text-[10px] px-2 py-1 bg-black/80 border border-white/10 rounded-sm text-cyan-400 font-bold uppercase tracking-tighter">
                            IDX_{idx.toString(16).padStart(2, "0")}
                          </span>
                          {project.category.length > 1 && (
                            <span className="text-[10px] px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-sm text-cyan-400 font-bold uppercase tracking-tighter">
                              Dual_Stack
                            </span>
                          )}
                          <span className="text-[10px] px-2 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-sm text-emerald-500 font-bold">
                            ONLINE
                          </span>
                        </div>

                        <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-700">
                          <img
                            src={currentImage}
                            alt={project.title}
                            className="w-full h-full object-fill opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all"
                          />
                        </div>
                        <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-transparent to-transparent" />
                      </div>

                      <div className="lg:col-span-7 p-8 md:p-12">
                        <div className="flex justify-between items-start mb-6">
                          <div className="space-y-2">
                            <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter">
                              {project.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              {project.tech?.slice(0, 3).map((tag: any) => (
                                <span
                                  key={tag}
                                  className="text-[9px] font-bold text-cyan-400/60 border border-cyan-400/20 px-2 py-0.5 rounded-sm uppercase bg-cyan-400/5"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="pt-2">
                            {currentLink && (
                              <a
                                href={currentLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-cyan-400 transition-all hover:scale-110 block"
                              >
                                <ExternalLink size={22} />
                              </a>
                            )}
                          </div>
                        </div>

                        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10 font-sans italic">
                          "{project.description}"
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/5">
                          <div className="space-y-4">
                            <div className="flex items-center gap-2 text-[10px] font-bold text-white uppercase tracking-[0.2em]">
                              <Cpu size={14} className="text-cyan-400" />{" "}
                              Arch_Dependencies
                            </div>
                            <div className="flex flex-wrap gap-x-4 gap-y-2">
                              {project?.tech.map((t: any) => (
                                <span
                                  key={t}
                                  className="text-[10px] text-gray-500 flex items-center gap-1 hover:text-white transition-colors"
                                >
                                  <Code2 size={10} className="text-cyan-400" />{" "}
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="space-y-4">
                            <div className="flex items-center gap-2 text-[10px] font-bold text-white uppercase tracking-[0.2em]">
                              <ShieldCheck
                                size={14}
                                className="text-emerald-500"
                              />{" "}
                              Build_Status
                            </div>
                            <div className="space-y-2">
                              <div className="flex justify-between text-[9px] font-bold">
                                <span className="text-gray-600 uppercase tracking-widest">
                                  Integrity
                                </span>
                                <span className="text-emerald-500 italic">
                                  SECURE
                                </span>
                              </div>
                              <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                                <div className="h-full bg-emerald-500 w-[99%]" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              );
            })
          ) : (
            <div className="h-40 flex items-center justify-center border border-dashed border-white/10 rounded-xl">
              <span className="text-gray-500 text-xs tracking-widest uppercase">
                No projects found in this sector.
              </span>
            </div>
          )}
        </div>

        <div className="h-[20vh]" />

        <div className="mt-20 border-t border-white/5 pt-10 flex flex-col items-center">
          <div className="flex gap-4 mb-4">
            <div
              className={`w-2 h-2 rounded-full transition-colors ${
                activeTab === "web-app"
                  ? "bg-cyan-500 shadow-[0_0_8px_cyan]"
                  : "bg-white/10"
              }`}
            />
            <div
              className={`w-2 h-2 rounded-full transition-colors ${
                activeTab === "website"
                  ? "bg-cyan-500 shadow-[0_0_8px_cyan]"
                  : "bg-white/10"
              }`}
            />
          </div>
          <span className="text-[9px] text-white/20 font-mono tracking-[0.4em] uppercase">
            Active_Sector: {activeTab} // Node_Count: {filteredProjects.length}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Projects;
