import React, { useEffect, useRef, useState } from "react";
import school1 from "../../assets/morningshiftImage.jpg";
import school2 from "../../assets/dayshift.jpg";
import school3 from "../../assets/kidsgrpimg.jpeg";
import { Link } from "react-router-dom";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

const ProgramCard: React.FC<{
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  delay: string;
  to: string;
}> = ({ src, alt, title, subtitle, delay, to }) => (
  <Link
    to={to}
    className="
      card-anim
      group
      relative
      bg-white
      rounded-2xl
      overflow-hidden
      cursor-pointer
      transition-all
      duration-300
      hover:-translate-y-2
      w-full
      block
    "
    style={{
      animationDelay: delay,
      boxShadow: "0 4px 24px rgba(33,193,215,0.08), 0 2px 8px rgba(0,0,0,0.06)",
      border: "1.5px solid #e0f9fb",
    }}
  >
    {/* Image */}
    <div className="overflow-hidden relative">
      <img
        src={src}
        alt={alt}
        className="
          w-full
          h-50 sm:h-57.5 md:h-62.5 lg:h-65 xl:h-70 2xl:h-80
          object-cover
          transition-transform duration-700
          group-hover:scale-110
        "
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#21C1D760] opacity-0 group-hover:opacity-100 transition duration-500" />
    </div>

    {/* Content */}
    <div className="py-5 px-5">
      <div className="h-0.5 w-10 bg-gradient-to-r from-[#21C1D7] to-[#313567] rounded-full mb-3 group-hover:w-full transition-all duration-500" />
      <h3 className="text-xl sm:text-2xl font-bold text-[#04162F]">
        {title}
      </h3>
      <p className="text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase mt-1 text-[#21C1D7]">
        {subtitle}
      </p>
    </div>
  </Link>
);

const SmartProgram: React.FC = () => {
  const { ref, inView } = useInView(0.15);

  return (
    <section className="w-full bg-white py-14 md:py-20 overflow-hidden">
      <div className="max-w-[1920px] mx-auto w-full px-4 sm:px-8 md:px-14 lg:px-20 xl:px-24 2xl:px-32">
        <div ref={ref} className={inView ? "running" : "paused"}>

          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-0.5 w-8 sm:w-12 bg-[#21C1D7]" />
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.3em] uppercase text-[#21C1D7]">
              Programs
            </span>
            <div className="h-0.5 w-8 sm:w-12 bg-[#21C1D7]" />
          </div>

          {/* Heading */}
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#21C1D7] tracking-wide">
            Our Smart Program
          </h2>

          {/* Cards Grid */}
          <div
            className="
              mt-12 md:mt-16
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-6 sm:gap-8 lg:gap-10 xl:gap-12
            "
          >
            <ProgramCard
              src={school1}
              alt="Morning Shift"
              title="Morning Shift"
              subtitle="Bengali Medium"
              delay="0.4s"
              to="/smarty-program#morning-shift"
            />
            <ProgramCard
              src={school2}
              alt="Day Shift"
              title="Day Shift"
              subtitle="Bengali Medium"
              delay="0.6s"
              to="/smarty-program#day-shift"
            />
            <ProgramCard
              src={school3}
              alt="High School"
              title="English-Medium Section"
              subtitle="English Medium"
              delay="0.8s"
              to="/smarty-program#english-medium"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default SmartProgram;