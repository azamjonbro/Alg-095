import React from "react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="w-full h-screen bg-black flex items-center justify-center overflow-hidden relative">

      {/* Neon Waves Background */}
      <motion.div
        className="absolute w-[1200px] h-[1200px] bg-purple-600 rounded-full blur-[200px] opacity-20"
        animate={{
          x: [0, 200, -200, 0],
          y: [0, -150, 150, 0],
          scale: [1, 1.4, 1.1, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Big Glitch 404 */}
      <div className="relative z-20 text-center">
        <h1 className="text-[220px] leading-none font-extrabold glitch text-white">
          404
        </h1>

        <p className="text-3xl text-gray-300 mt-6 tracking-wide">
          Sahifa topilmadi — balki u mavjud emasdir.
        </p>

        <button className="mt-10 px-10 py-4 bg-white/10 border border-white/30 rounded-xl text-white text-xl backdrop-blur-md hover:bg-white/20 transition">
          Bosh sahifaga qaytish
        </button>
      </div>

      {/* Glitch Effect */}
      <style>{`
        .glitch {
          position: relative;
        }
        .glitch::before,
        .glitch::after {
          content: "404";
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
        }

        /* Red glitch */
        .glitch::before {
          left: 8px;
          text-shadow: -8px 0 red;
          animation: glitch 1.1s infinite linear alternate-reverse;
        }

        /* Cyan glitch */
        .glitch::after {
          left: -8px;
          text-shadow: -8px 0 cyan;
          animation: glitch 1.1s infinite linear alternate-reverse;
        }

        @keyframes glitch {
          0% { clip-path: inset(5% 0 20% 0); }
          20% { clip-path: inset(30% 0 5% 0); }
          40% { clip-path: inset(10% 0 40% 0); }
          60% { clip-path: inset(45% 0 5% 0); }
          80% { clip-path: inset(20% 0 30% 0); }
          100% { clip-path: inset(5% 0 5% 0); }
        }
      `}</style>
    </div>
  );
}
