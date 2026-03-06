import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import Calender from "../../assets/Calendar.svg";
import Achievement from "../../assets/Achievement.svg";
import Group from "../../assets/Group.svg";
import Review from "../../assets/Review.svg";

// ── Hook ─────────────────────────────────────────────────────────────────────
function useInView(threshold = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ── Animated Counter ──────────────────────────────────────────────────────────
const Counter: React.FC<{ target: number; suffix?: string; duration?: number }> = ({
  target,
  suffix = "",
  duration = 2000,
}) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const steps = 60;
    const increment = target / steps;
    const interval = duration / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, interval);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

// ── Stat Card ─────────────────────────────────────────────────────────────────
const StatCard: React.FC<{
  icon: string;
  alt: string;
  value: number;
  suffix?: string;
  label: string;
  floatDelay: string;
}> = ({ icon, alt, value, suffix = "", label, floatDelay }) => (
  <div
    className="flex items-center gap-4 group cursor-default"
    style={{
      animation: `floatStat 3.5s ease-in-out ${floatDelay} infinite`,
    }}
  >
    {/* Icon bubble */}
    <div
      className="w-14 h-14 rounded-2xl flex-shrink-0 flex items-center justify-center transition-all duration-400"
      style={{
        background: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
        border: "1.5px solid #bbf7d0",
        boxShadow: "0 2px 12px rgba(16,199,0,0.12)",
        transition: "transform 0.35s cubic-bezier(.22,.68,0,1.2), box-shadow 0.35s ease",
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = "scale(1.15) rotate(-8deg)";
        el.style.boxShadow = "0 8px 28px rgba(16,199,0,0.28)";
        el.style.background = "linear-gradient(135deg, #16a34a 0%, #22c55e 100%)";
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = "";
        el.style.boxShadow = "0 2px 12px rgba(16,199,0,0.12)";
        el.style.background = "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)";
      }}
    >
      <img src={icon} alt={alt} className="w-7 h-7" />
    </div>

    {/* Text */}
    <div>
      <p
        className="font-bold text-2xl leading-none mb-0.5"
        style={{ color: "#10C700", fontFamily: "'DM Sans', sans-serif" }}
      >
        <Counter target={value} suffix={suffix} duration={2200} />
      </p>
      <p
        className="text-base text-[#323232]"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {label}
      </p>
    </div>
  </div>
);

// ── Main ─────────────────────────────────────────────────────────────────────
const text = "A Brighter Future For Your Kids";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const child = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const BrightFuture: React.FC = () => {
  return (
    <section className="w-full bg-white pb-20 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&display=swap');

        @keyframes floatStat {
          0%, 100% { transform: translateY(0px);  }
          50%       { transform: translateY(-8px); }
        }

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes revealLine {
          from { width: 0; opacity: 0; }
          to   { width: 48px; opacity: 1; }
        }

        @keyframes countGlow {
          0%, 100% { text-shadow: 0 0 0px rgba(16,199,0,0); }
          50%       { text-shadow: 0 0 12px rgba(16,199,0,0.4); }
        }

        /* Pulsing green underline on stat number */
        .stat-num {
          position: relative;
          display: inline-block;
          animation: countGlow 2.5s ease-in-out infinite;
        }
        .stat-num::after {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 100%;
          height: 2px;
          border-radius: 9999px;
          background: #10C700;
          opacity: 0.35;
          animation: countGlow 2.5s ease-in-out infinite;
        }
      `}</style>

      <div className="max-w-[1920px] mx-auto px-16">

        {/* ── Top Content ── */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Animated Heading — framer-motion (unchanged) */}
          <motion.h2
            className="text-5xl text-[#000000B0] leading-snug font-semibold flex flex-wrap gap-3"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {text.split(" ").map((word, index) => (
              <motion.span key={index} variants={child}>
                {word}
              </motion.span>
            ))}
          </motion.h2>

          {/* Motto */}
          <p
            className="text-lg text-[#6B6B6B] leading-relaxed text-center md:text-left"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Our moto, Satyam, Shivam Sundaram inspires
            <br />
            Children to become honest people.
          </p>
        </div>

        {/* ── Divider ── */}
        <div className="flex items-center gap-3 mt-10 mb-2">
          <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, #d1fae5, transparent)" }} />
          <div className="w-1.5 h-1.5 rounded-full bg-green-300" />
          <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, #d1fae5, transparent)" }} />
        </div>

        {/* ── Stats Row ── */}
        <div className="mt-10 flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 justify-items-center">

            <StatCard icon={Calender}    alt="Experience"  value={12}  suffix=""   label="Years Experience"  floatDelay="0s"    />
            <StatCard icon={Achievement} alt="Achievement" value={606} suffix=""   label="Total Achievement" floatDelay="0.4s"  />
            <StatCard icon={Group}       alt="Happy Student" value={250} suffix="" label="Happy Student"     floatDelay="0.8s"  />
            <StatCard icon={Review}      alt="Reviews"     value={3}   suffix="k+" label="Positive Review"  floatDelay="1.2s"  />

          </div>
        </div>

      </div>
    </section>
  );
};

export default BrightFuture;