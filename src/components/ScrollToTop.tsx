"use client";
import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-9999">
      <button
        type="button"
        onClick={scrollToTop}
        className={`
          group flex items-center gap-2 p-3 
          bg-[#0a0a0a] border border-white/10 rounded-sm
          text-emerald-500 transition-all duration-500
          hover:border-emerald-500 hover:bg-emerald-500/10 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}
        `}
      >
        <div className="flex flex-col items-end mr-1">
          <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-gray-500 group-hover:text-emerald-400">
            Sys_Return
          </span>
          <span className="text-[10px] font-mono leading-none font-black tracking-tighter">
            0x00
          </span>
        </div>

        <div className="p-1.5 bg-emerald-500/10 rounded-sm border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
          <ChevronUp size={20} strokeWidth={3} />
        </div>
      </button>
    </div>
  );
};

export default ScrollToTop;
