import { Mail, Phone } from "lucide-react";
import { GlassCard } from "@/components/Elements";
import { contacts } from "@/components/constants";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-20">
          <h2 className="text-6xl font-black mb-4 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            I'm always interested in discussing new opportunities and innovative
            projects. Let's connect and explore how we can build something
            amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {contacts.map((c, idx) => (
            <a href={c.href} key={idx}>
              <GlassCard
                key={idx}
                className={`p-10 group hover:scale-105 ${c.border} transition-all duration-500`}
              >
                <div
                  className={`w-24 h-24 mx-auto mb-8 bg-gradient-to-br ${c.gradient} rounded-3xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 backdrop-blur-xl`}
                >
                  <c.icon className={c.textColor} size={40} />
                </div>
                <h3 className={`text-3xl font-bold mb-6 ${c.textColor}`}>
                  {c.title}
                </h3>
                <p
                  className={`text-gray-300 hover:${c.textColor.split("-")[1]} transition-colors text-lg font-medium`}
                >
                  {c.value}
                </p>
              </GlassCard>
            </a>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="mailto:ibeomari@gmail.com"
            className="group relative px-12 py-6 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-3xl font-bold text-xl shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
          >
            <span className="relative z-10 flex items-center justify-center space-x-3">
              <Mail size={24} />
              <span>Send Email</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-700 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </a>

          <a
            href="tel:+2347061755488"
            className="group px-12 py-6 border-2 border-white/[0.1] text-white rounded-3xl font-bold text-xl backdrop-blur-2xl hover:bg-white/[0.05] hover:border-purple-400/50 transition-all duration-500 flex items-center justify-center space-x-3 hover:scale-105 hover:-translate-y-2"
          >
            <Phone size={24} />
            <span>Call Now</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
