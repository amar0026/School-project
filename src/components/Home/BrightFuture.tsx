import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

import Calender from "../../assets/Calendar.svg";
import Achievement from "../../assets/Achievement.svg";
import Group from "../../assets/Group.svg";
import Review from "../../assets/Review.svg";

// 👇 Replace these with your actual image paths
import schoolBoy from "../../assets/boy-girlvideo.mp4";
import schoolGirl from "../../assets/boy-girlvideo.mp4";

/* ───────────── COUNTER ───────────── */

interface CounterProps {
  target: number;
  suffix?: string;
  duration?: number;
}

const Counter: React.FC<CounterProps> = ({
  target,
  suffix = "",
  duration = 2200,
}) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    const steps = 80;
    const interval = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += target / steps;

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

/* ───────────── STAT CARD ───────────── */

interface StatCardProps {
  icon: string;
  alt: string;
  value: number;
  suffix?: string;
  label: string;
  index: number;
  accent: string;
  accentLight: string;
}

const StatCard: React.FC<StatCardProps> = ({
  icon,
  alt,
  value,
  suffix = "",
  label,
  index,
  accent,
  accentLight,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-60px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.55,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex flex-col items-start gap-4 p-6 sm:p-7 rounded-3xl overflow-hidden cursor-default"
      style={{
        background: "rgba(255,255,255,0.72)",
        backdropFilter: "blur(18px)",
        border: "1px solid rgba(255,255,255,0.9)",
        boxShadow:
          "0 4px 24px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)",
      }}
      whileHover={{
        y: -6,
        boxShadow:
          "0 16px 48px rgba(0,0,0,0.10), 0 2px 6px rgba(0,0,0,0.06)",
      }}
    >
      {/* background blob */}
      <div
        className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full opacity-20 group-hover:opacity-35 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle, ${accent}, transparent 70%)`,
        }}
      />

      {/* icon */}
      <div
        className="w-12 h-12 rounded-2xl flex items-center justify-center relative z-10"
        style={{ background: accentLight }}
      >
        <img src={icon} alt={alt} className="w-6 h-6" />
      </div>

      {/* number */}
      <p
        className="text-3xl sm:text-4xl font-black leading-none relative z-10"
        style={{
          color: accent,
          fontFamily: "'Syne', sans-serif",
          letterSpacing: "-0.03em",
        }}
      >
        <Counter target={value} suffix={suffix} />
      </p>

      {/* label */}
      <p
        className="text-sm sm:text-base font-medium text-[#5a5a6e] leading-tight relative z-10"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {label}
      </p>

      {/* shimmer line */}
      <div
        className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500 rounded-full"
        style={{
          background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
        }}
      />
    </motion.div>
  );
};

/* ───────────── STATS DATA ───────────── */

const stats = [
  {
    icon: Calender,
    alt: "Experience",
    value: 67,
    label: "Years of Excellence",
    accent: "#10b981",
    accentLight: "#d1fae5",
  },
  {
    icon: Achievement,
    alt: "Achievement",
    value: 500,
    suffix: "K+",
    label: "Total Achievements",
    accent: "#f59e0b",
    accentLight: "#fef3c7",
  },
  {
    icon: Group,
    alt: "Students",
    value: 150,
    suffix: "K+",
    label: "Happy Students",
    accent: "#6366f1",
    accentLight: "#ede9fe",
  },
  {
    icon: Review,
    alt: "Review",
    value: 5,
    suffix: "k+",
    label: "Positive Reviews",
    accent: "#ec4899",
    accentLight: "#fce7f3",
  },
];

/* ───────────── MAIN COMPONENT ───────────── */

const BrightFuture: React.FC = () => {
  return (
    <section className="relative w-full py-20 bg-gradient-to-br from-emerald-50 via-white to-indigo-50">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">

        {/* Heading */}
        <div className="flex flex-col items-center justify-between gap-10 mb-16">
          <div className="text-center">
            <span className="text-emerald-600 font-semibold uppercase text-sm tracking-widest">
              Our Mission
            </span>
            <h1 className="text-4xl sm:text-5xl font-black mt-4 leading-tight">
              A <span className="text-emerald-600">Brighter Future</span> For
              Your Kids
            </h1>
          </div>

          {/* Motto Card with Boy & Girl */}
          <div className="relative w-full max-w-3xl flex items-end justify-center">

            {/* School Boy — left */}
            <video
              src={schoolBoy}
              autoPlay
              loop
              muted
              playsInline
              className="
               relative z-10
               w-24 sm:w-32 md:w-40
               object-contain
               self-end
               
                -mr-4
                 "
            />

            {/* Motto Card — center */}
            <div
              className="
                relative z-20
                flex-1
                bg-linear-to-br from-[#f0fdf4] to-[#dcfce7]
                border border-emerald-200
                rounded-2xl
                px-6 py-6
                shadow-md
                flex flex-col items-center gap-3
                text-center
              "
              style={{
                boxShadow: "0 8px 32px rgba(16,185,129,0.10), 0 2px 8px rgba(0,0,0,0.06)",
              }}
            >
              {/* Decorative top line */}
              <div className="w-10 h-1 rounded-full bg-emerald-400 mb-1" />
              <span className="text-emerald-500 text-4xl leading-none select-none">&ldquo;</span>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Our motto,{" "}
                <strong className="text-emerald-700">Satyam, Shivam, Sundaram</strong>{" "}
                inspires children to grow into honest, virtuous, and beautiful souls.
              </p>
              <span className="text-emerald-500 text-4xl leading-none select-none rotate-180 inline-block">&ldquo;</span>
            </div>

            {/* School Girl — right */}
            <video
              src={schoolGirl}
              autoPlay
              loop
              muted
              playsInline
              className="
                relative z-10
                w-24 sm:w-32 md:w-40
                object-contain
                self-end
                
                -ml-4
              "
            />

          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <StatCard key={s.alt} {...s} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default BrightFuture;