"use client";
import { Mail, Send, Satellite, MessageSquare, Shield } from "lucide-react";
import { GlassCard } from "@/components/Elements";
import { contacts } from "@/components/constants";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-[#050505] font-mono">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Satellite className="text-emerald-500 animate-pulse" size={20} />
            <span className="text-emerald-500/50 text-[10px] tracking-[0.4em] uppercase">
              // Protocol: Remote_Access
            </span>
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase mb-6">
            Establish.<span className="text-emerald-500">Link</span>();
          </h2>
          <p className="text-gray-500 font-sans italic text-lg max-w-2xl mx-auto leading-relaxed">
            Ready to deploy expertise to your next high-impact project. Initiate
            communication via the secure channels below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {contacts.map((c, idx) => (
            <a href={c.href} key={idx} className="block group">
              <GlassCard
                className={`p-8 border-white/5 bg-[#0a0a0a] rounded-sm group-hover:border-emerald-500/40 transition-all duration-500 relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/2 -rotate-45 translate-x-16 -translate-y-16" />

                <div className="flex items-start gap-6">
                  <div
                    className={`p-4 bg-white/5 border border-white/10 rounded-sm text-emerald-500 group-hover:text-white group-hover:bg-emerald-500 transition-all duration-500`}
                  >
                    <c.icon size={28} />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">
                        Channel_0{idx + 1}
                      </span>
                      <div className="h-px flex-1 bg-white/5" />
                    </div>
                    <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-2">
                      {c.title}
                    </h3>
                    <p className="text-gray-400 font-mono text-sm break-all">
                      {c.value}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </a>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <a
            href="mailto:ibeomari@gmail.com"
            className="relative group overflow-hidden border border-emerald-500/50 bg-emerald-500/5 p-6 rounded-sm transition-all hover:bg-emerald-500 hover:text-black"
          >
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-4">
                <Mail size={24} />
                <span className="font-black text-xl uppercase tracking-tighter">
                  Execute_Mail
                </span>
              </div>
              <Send
                size={20}
                className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform"
              />
            </div>
            <div className="absolute inset-0 bg-white opacity-0 group-active:opacity-20 transition-opacity" />
          </a>

          <a
            href="tel:+2347061755488"
            className="group border border-white/10 bg-white/2 p-6 rounded-sm transition-all hover:border-white/40 hover:bg-white/5"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <MessageSquare
                  size={24}
                  className="text-gray-400 group-hover:text-white"
                />
                <span className="font-black text-xl text-white uppercase tracking-tighter">
                  Voice_Comms
                </span>
              </div>
              <div className="flex gap-1">
                <div className="w-1 h-4 bg-emerald-500/20 animate-bounce [animation-delay:-0.3s]" />
                <div className="w-1 h-4 bg-emerald-500/50 animate-bounce [animation-delay:-0.15s]" />
                <div className="w-1 h-4 bg-emerald-500 animate-bounce" />
              </div>
            </div>
          </a>
        </div>

        <div className="mt-20 flex flex-col items-center">
          <div className="flex items-center gap-3 px-4 py-2 border border-white/5 bg-white/1 rounded-full">
            <Shield size={12} className="text-emerald-500" />
            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em]">
              End-to-End Encryption Enabled
            </span>
          </div>
          <div className="mt-8 opacity-10">
            <div className="text-[8px] leading-tight text-center">
              IP_LOGGED: 192.168.1.1 <br />
              PORT_SCAN: CLEAR <br />
              STATUS: LISTENING...
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
