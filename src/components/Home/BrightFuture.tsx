import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

import Calender from "../../assets/Calendar.svg";
import Achievement from "../../assets/Achievement.svg";
import Group from "../../assets/Group.svg";
import Review from "../../assets/Review.svg";

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
        if (entry.isIntersecting) { setStarted(true); observer.disconnect(); }
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
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, interval);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
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
  icon, alt, value, suffix = "", label, index, accent, accentLight,
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col items-start gap-4 p-6 sm:p-7 rounded-3xl overflow-hidden cursor-default"
      style={{
        background: "rgba(255,255,255,0.72)",
        backdropFilter: "blur(18px)",
        border: "1px solid rgba(255,255,255,0.9)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)",
        transition: "transform 0.4s cubic-bezier(.22,1,.36,1), box-shadow 0.4s ease",
      }}
      whileHover={{
        y: -6,
        boxShadow: "0 16px 48px rgba(0,0,0,0.10), 0 2px 6px rgba(0,0,0,0.06)",
      }}
    >
      {/* background blob */}
      <div
        className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full opacity-20 group-hover:opacity-35 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle, ${accent}, transparent 70%)` }}
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
        style={{ color: accent, fontFamily: "'Syne', sans-serif", letterSpacing: "-0.03em" }}
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
        style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
      />
    </motion.div>
  );
};

/* ───────────── PILL BADGE ───────────── */
const Pill: React.FC<{ text: string }> = ({ text }) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.85 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
    style={{
      background: "linear-gradient(135deg, #e8fdf0, #d1fae5)",
      color: "#059669",
      border: "1px solid #a7f3d0",
      fontFamily: "'DM Sans', sans-serif",
    }}
  >
    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
    {text}
  </motion.span>
);

/* ───────────── WORD ANIMATION ───────────── */
const words = ["A", "Brighter", "Future", "For", "Your", "Kids"];

const wordVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const wordChild = {
  hidden: { opacity: 0, y: 48, rotateX: -20 },
  visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

/* ───────────── STATS DATA ───────────── */
const stats = [
  { icon: Calender,    alt: "Experience",   value: 12,  suffix: "",   label: "Years of Excellence",  accent: "#10b981", accentLight: "#d1fae5" },
  { icon: Achievement, alt: "Achievement",  value: 606, suffix: "+",  label: "Total Achievements",   accent: "#f59e0b", accentLight: "#fef3c7" },
  { icon: Group,       alt: "Students",     value: 250, suffix: "+",  label: "Happy Students",       accent: "#6366f1", accentLight: "#ede9fe" },
  { icon: Review,      alt: "Review",       value: 3,   suffix: "k+", label: "Positive Reviews",     accent: "#ec4899", accentLight: "#fce7f3" },
];

/* ───────────── MAIN COMPONENT ───────────── */

const BrightFuture: React.FC = () => {
  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Sans:wght@400;500;600&display=swap');

        @keyframes driftSlow {
          0%, 100% { transform: translate(0,0) scale(1); }
          33% { transform: translate(30px, -20px) scale(1.05); }
          66% { transform: translate(-20px, 15px) scale(0.97); }
        }
        @keyframes driftFast {
          0%, 100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(-25px, 25px) scale(1.08); }
        }
      `}</style>

      <section
        className="relative w-full overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #f0fdf8 0%, #fafffe 40%, #f5f3ff 100%)",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {/* ── decorative blobs ── */}
        <div
          className="absolute top-[-80px] left-[-100px] w-[500px] h-[500px] rounded-full opacity-30 pointer-events-none"
          style={{ background: "radial-gradient(circle, #a7f3d0 0%, transparent 70%)", animation: "driftSlow 14s ease-in-out infinite" }}
        />
        <div
          className="absolute bottom-[-60px] right-[-80px] w-[420px] h-[420px] rounded-full opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle, #c7d2fe 0%, transparent 70%)", animation: "driftFast 10s ease-in-out infinite" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(ellipse, #fde68a 0%, transparent 70%)" }}
        />

        {/* ── inner container ── */}
        <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 sm:py-20 md:py-28">

          {/* top row */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-16 mb-14 sm:mb-16 md:mb-20">

            {/* left: badge + heading */}
            <div className="flex flex-col items-start gap-5 max-w-xl">
              <Pill text="Our Mission" />

              <motion.h2
                className="text-[clamp(2rem,5vw,3.75rem)] font-black leading-[1.08] tracking-tight"
                style={{ color: "#0f1117", fontFamily: "'Syne', sans-serif" }}
                variants={wordVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {words.map((word, i) => (
                  <React.Fragment key={i}>
                    <motion.span
                      variants={wordChild}
                      className="inline-block mr-[0.22em]"
                      style={
                        word === "Brighter"
                          ? {
                              background: "linear-gradient(135deg, #10b981, #059669)",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                            }
                          : {}
                      }
                    >
                      {word}
                    </motion.span>
                    {/* line break after "Future" on md+ */}
                    {word === "Future" && <br className="hidden sm:block" />}
                  </React.Fragment>
                ))}
              </motion.h2>
            </div>

            {/* right: description */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-sm"
            >
              <div
                className="pl-5 py-1"
                style={{ borderLeft: "3px solid #10b981" }}
              >
                <p className="text-base sm:text-lg text-[#4b5563] leading-relaxed">
                  Our motto,{" "}
                  <span className="font-semibold text-[#111827]">Satyam, Shivam, Sundaram</span>{" "}
                  inspires children to grow into honest, virtuous, and beautiful souls.
                </p>
              </div>
            </motion.div>
          </div>

          {/* divider */}
          <motion.div
            className="w-full h-px mb-14 sm:mb-16"
            style={{ background: "linear-gradient(90deg, transparent, #d1d5db 30%, #d1d5db 70%, transparent)" }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />

          {/* stats grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {stats.map((s, i) => (
              <StatCard key={s.alt} {...s} index={i} />
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default BrightFuture;