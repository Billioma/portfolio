import React from "react";
import { GlassCard } from "@/components/Elements";
import { Code, Zap } from "lucide-react";
import { skills, stats } from "@/components/constants";

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-black mb-4 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <GlassCard className="p-10 border-cyan-400/20">
            <h3 className="text-3xl font-bold mb-8 text-cyan-300 flex items-center">
              <Code
                className="mr-4 group-hover:rotate-12 transition-transform duration-300"
                size={32}
              />
              Frontend Technologies
            </h3>
            <div className="space-y-6">
              {skills.frontend.map((skill) => (
                <div key={skill.name} className="group/skill">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-cyan-300 text-sm font-bold">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-800/50 rounded-full h-2 backdrop-blur-xl">
                    <div
                      className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-10 border-purple-400/20">
            <h3 className="text-3xl font-bold mb-8 text-purple-300 flex items-center">
              <span className="mr-4">⭐</span>
              UI/UX & Styling
            </h3>
            <div className="space-y-6">
              {skills.uiux.map((skill) => (
                <div key={skill.name} className="group/skill">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-purple-300 text-sm font-bold">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-800/50 rounded-full h-2 backdrop-blur-xl">
                    <div
                      className="bg-gradient-to-r from-purple-400 to-pink-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-10 border-pink-400/20">
            <h3 className="text-3xl font-bold mb-8 text-pink-300 flex items-center">
              <Zap
                className="mr-4 group-hover:rotate-12 transition-transform duration-300"
                size={32}
              />
              Tools & Methodologies
            </h3>
            <div className="space-y-6">
              {skills.tools.map((skill) => (
                <div key={skill.name} className="group/skill">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-pink-300 text-sm font-bold">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-800/50 rounded-full h-2 backdrop-blur-xl">
                    <div
                      className="bg-gradient-to-r from-pink-400 to-yellow-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        <div className="mt-20">
          <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-500 bg-clip-text text-transparent">
            Key Accomplishments
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <GlassCard
                key={index}
                className={`p-8 text-center group hover:scale-105 border-${stat.color}-400/20 transition-transform duration-300`}
              >
                <div
                  className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-${stat.color}-400/20 to-${stat.color}-600/20 rounded-3xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 backdrop-blur-xl`}
                >
                  <stat.icon className={`text-${stat.color}-400`} size={32} />
                </div>
                <div
                  className={`text-5xl font-black mb-3 bg-gradient-to-r from-${stat.color}-300 to-${stat.color}-500 bg-clip-text text-transparent`}
                >
                  {stat.value}
                </div>
                <p className="text-gray-300 font-medium text-sm leading-relaxed">
                  {stat.label}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
