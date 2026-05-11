import { exp } from "@/components/constants";
import { GlassCard } from "@/components/Elements";
import { Calendar } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-black mb-4 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-12">
          {exp.map((item, idx) => (
            <GlassCard
              key={idx}
              className={`p-6 md:p-10 border-l-8 ${item.borderClass} group transition-all duration-500`}
            >
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-8">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${item.iconBgClass} rounded-xl flex items-center justify-center`}
                    >
                      <item.icon className={item.iconClass} size={24} />
                    </div>
                    <h3 className={`text-3xl font-bold ${item.titleClass}`}>
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-2xl text-gray-300 mb-3">{item.company}</p>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Calendar size={18} />
                    <span className="font-medium">{item.duration}</span>
                  </div>
                </div>

                {item.badge && (
                  <div className="mt-4 lg:mt-0">
                    <GlassCard className={item.badge.className}>
                      <span className={item.badge.textClass}>
                        {item.badge.text}
                      </span>
                    </GlassCard>
                  </div>
                )}
              </div>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                {item.desc}
              </p>

              {item.highlights && (
                <div className="grid md:grid-cols-2 gap-6">
                  {item.highlights.map((highlight, i) => (
                    <div
                      key={i}
                      className="flex items-start space-x-3 group/item transition-colors"
                    >
                      <item.highlightIcon
                        className={`${item.iconClass} flex-shrink-0 mt-1 group-hover/item:rotate-45 transition-transform duration-300`}
                        size={18}
                      />
                      <span
                        className={`text-gray-300 ${
                          item.highlightTextClass || ""
                        }`}
                      >
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {item.features && (
                <div className="grid md:grid-cols-3 gap-6">
                  {item.features.map((f, i) => (
                    <GlassCard
                      key={i}
                      className={`${item.featureCardClass} group/card transition-all duration-300`}
                    >
                      <div className="flex items-center space-x-3 mb-3">
                        <f.icon
                          className={`${item.iconClass} group-hover/card:rotate-12 transition-transform duration-300`}
                          size={20}
                        />
                        <span className={`${item.titleClass} font-bold`}>
                          {f.title}
                        </span>
                      </div>
                      <p className="text-sm text-gray-300">{f.desc}</p>
                    </GlassCard>
                  ))}
                </div>
              )}

              {item.subcard && (
                <GlassCard className={item.subcard.className}>
                  <div className="flex items-center space-x-3 mb-2">
                    <item.subcard.icon className={item.iconClass} size={20} />
                    <h4 className={item.subcard.headingClass}>
                      {item.subcard.heading}
                    </h4>
                  </div>
                  <p className="text-gray-300">{item.subcard.text}</p>
                </GlassCard>
              )}

              {item.smallCards && (
                <div className="grid md:grid-cols-2 gap-6">
                  {item.smallCards.map((sc, i) => (
                    <GlassCard
                      key={i}
                      className={`${sc.cardClass} group/card transition-all duration-300`}
                    >
                      <div className="flex items-center space-x-2 mb-2">
                        <sc.icon
                          className={`${sc.iconClass} group-hover/card:rotate-12 transition-transform duration-300`}
                          size={16}
                        />
                        <span className={sc.titleClass}>{sc.title}</span>
                      </div>
                      <p className="text-sm text-gray-300">{sc.text}</p>
                    </GlassCard>
                  ))}
                </div>
              )}
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
