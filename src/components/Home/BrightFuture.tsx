import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

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
  duration = 2000,
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

/* ───────────── STAT CARD ───────────── */

interface StatCardProps {
  icon: string;
  alt: string;
  value: number;
  suffix?: string;
  label: string;
  floatDelay: string;
}

const StatCard: React.FC<StatCardProps> = ({
  icon,
  alt,
  value,
  suffix = "",
  label,
  floatDelay,
}) => (
  <div
    className="flex items-center gap-3 sm:gap-4"
    style={{
      animation: `floatStat 3.5s ease-in-out ${floatDelay} infinite`,
    }}
  >
    <div
      className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
        border: "1.5px solid #bbf7d0",
      }}
    >
      <img src={icon} alt={alt} className="w-6 h-6 sm:w-7 sm:h-7" />
    </div>

    <div>
      <p
        className="font-bold text-xl sm:text-2xl leading-none mb-0.5"
        style={{ color: "#10C700", fontFamily: "'DM Sans', sans-serif" }}
      >
        <Counter target={value} suffix={suffix} />
      </p>

      <p
        className="text-sm sm:text-base text-[#323232]"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {label}
      </p>
    </div>
  </div>
);

/* ───────────── ANIMATION ───────────── */

const text = "A Brighter Future For Your Kids";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const child = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

/* ───────────── MAIN COMPONENT ───────────── */

const BrightFuture: React.FC = () => {
  return (
    <section className="w-full bg-white pb-14 max-w-[1920px] mx-auto px-6 lg:px-8 xl:px-10 sm:pb-16 md:pb-20 overflow-hidden">

      <div className=" px-4 sm:px-8 md:px-14 lg:px-20">

        {/* Top Content */}

        <div className="flex flex-col md:flex-row  justify-between items-center md:items-start gap-6 md:gap-10">

          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#000000B0] leading-snug font-semibold flex flex-wrap gap-2 sm:gap-3 text-center md:text-left"
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

          <p
            className="text-sm sm:text-base md:text-lg text-[#6B6B6B] leading-relaxed text-center md:text-left"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Our moto, Satyam, Shivam Sundaram inspires
            <br />
            Children to become honest people.
          </p>

        </div>

        {/* Stats */}

        <div className="mt-10  sm:mt-12 md:mt-16 flex justify-center">
          <div className="grid  grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-16 justify-items-center">

            <StatCard icon={Calender} alt="Experience" value={12} label="Years Experience" floatDelay="0s" />
 
            <StatCard icon={Achievement} alt="Achievement" value={606} label="Total Achievement" floatDelay="0.4s" />

            <StatCard icon={Group} alt="Students" value={250} label="Happy Student" floatDelay="0.8s" />

            <StatCard icon={Review} alt="Review" value={3} suffix="k+" label="Positive Review" floatDelay="1.2s" />

          </div>
        </div>

      </div>
    </section>
  );
};

export default BrightFuture;