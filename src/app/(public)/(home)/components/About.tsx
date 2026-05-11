import { GlassCard } from "@/components/Elements";
import {
  contactItems,
  highlights,
  journeySections,
} from "@/components/constants";

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-black mb-4 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <GlassCard className="p-10 border-white/[0.08]">
              <div className="space-y-8">
                {journeySections.map(
                  ({ title, description, Icon, titleColor }) => (
                    <div key={title}>
                      <h3
                        className={`text-2xl font-bold ${titleColor} mb-4 flex items-center`}
                      >
                        <Icon className="mr-3" size={24} />
                        {title}
                      </h3>
                      <p className="text-lg text-gray-300 leading-relaxed">
                        {description}
                      </p>
                    </div>
                  ),
                )}

                <div className="space-y-4 pt-6 border-t border-white/[0.08]">
                  {contactItems.map(
                    ({ value, href, Icon, hover, gradient, iconColor }) => (
                      <a
                        key={value}
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className={`flex items-center space-x-4 group ${hover} transition-colors cursor-pointer`}
                      >
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                        >
                          <Icon className={iconColor} size={20} />
                        </div>

                        <span className="text-gray-300 group-hover:text-inherit transition-colors">
                          {value}
                        </span>
                      </a>
                    ),
                  )}
                </div>
              </div>
            </GlassCard>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map(
              ({
                value,
                title,
                Icon,
                border,
                gradient,
                iconColor,
                textGradient,
              }) => (
                <GlassCard
                  key={title}
                  className={`p-8 text-center group hover:scale-105 ${border} transition-transform duration-300`}
                >
                  <div
                    className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${gradient} rounded-3xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 backdrop-blur-xl`}
                  >
                    <Icon size={36} className={iconColor} />
                  </div>

                  <h3
                    className={`font-black text-4xl mb-3 bg-gradient-to-r ${textGradient} bg-clip-text text-transparent`}
                  >
                    {value}
                  </h3>

                  <p className="text-gray-400 font-medium">{title}</p>
                </GlassCard>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
