"use client";
import { useEffect, useState } from "react";
import { FloatingOrb } from "@/components/Elements";

const Background = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black" />

      <FloatingOrb
        size="w-96 h-96"
        color="cyan"
        delay="0s"
        position="top-10 left-10"
      />
      <FloatingOrb
        size="w-80 h-80"
        color="purple"
        delay="2s"
        position="top-1/3 right-20"
      />
      <FloatingOrb
        size="w-72 h-72"
        color="blue"
        delay="1s"
        position="bottom-1/4 left-1/3"
      />
      <FloatingOrb
        size="w-64 h-64"
        color="indigo"
        delay="3s"
        position="bottom-10 right-10"
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none transition-all duration-1000 ease-out"
        style={{
          left: mousePosition.x - 250,
          top: mousePosition.y - 250,
          background:
            "radial-gradient(circle, rgba(6,182,212,0.08) 0%, rgba(147,51,234,0.04) 50%, transparent 100%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  );
};

export default Background;
