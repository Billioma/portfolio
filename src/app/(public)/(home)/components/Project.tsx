import { ExternalLink } from "lucide-react";
import { GlassCard } from "@/components/Elements";
import { recent } from "@/components/constants";

const Project = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-black mb-4 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            Recent Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recent.map((project, index) => (
            <GlassCard
              key={index}
              className={`md:p-8 group hover:scale-105 transition-all duration-500 ${project.borderColor} hover:bg-white/[0.08]`}
            >
              <div
                className={`w-20 h-20 bg-gradient-to-br ${project.gradient} rounded-3xl mb-6 flex items-center justify-center text-3xl group-hover:rotate-12 transition-transform duration-500 backdrop-blur-xl border border-white/[0.05]`}
              >
                {project.icon}
              </div>

              <h3
                className={`text-2xl font-bold mb-4 ${project.textColor} group-hover:text-white transition-colors`}
              >
                {project.title}
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-white/[0.05] border border-white/[0.1] rounded-full text-xs text-gray-400 backdrop-blur-xl hover:text-white hover:border-white/[0.2] transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className={`flex items-center ${project.textColor} group-hover:text-white transition-colors cursor-pointer font-medium`}
                  >
                    <span className="mr-2">View Project</span>
                    <ExternalLink
                      size={16}
                      className="group-hover:rotate-45 transition-transform duration-300"
                    />
                  </div>
                </a>
              ) : (
                ""
              )}
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
