import React, { useEffect, useRef, useState } from "react";
import icon from "../../assets/imgee.png";
import { Link } from "react-router-dom";

// ── InView Hook ─────────────────────────────────────────
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

// ── Card ─────────────────────────────────────────
const Card = ({ link, text }: { link: string; text: string }) => {
  const [hovered, setHovered] = useState(false);
  const [key, setKey] = useState(0);

  const handleEnter = () => {
    setKey((k) => k + 1);
    setHovered(true);
  };

  const handleLeave = () => setHovered(false);

  return (
    <Link
      to={link}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="
      w-full sm:w-64 lg:w-72
      h-28 sm:h-32 lg:h-36
      text-white rounded-xl flex items-center justify-center
      text-base sm:text-lg lg:text-xl
      font-semibold shadow-lg
      hover:-translate-y-3 hover:scale-105 hover:shadow-2xl
      transition-all duration-300 relative overflow-hidden group"
      style={{
        background:
          "linear-gradient(135deg, #1a3f7a 0%, #2d5cad 60%, #4583DA 100%)",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Shine effect */}
      <span className="absolute top-0 -left-full w-full h-full bg-white/20 skew-x-12 group-hover:left-[120%] transition-all duration-700 pointer-events-none" />

      {/* Text */}
      <div key={key} className="relative z-10 flex tracking-widest">
        {text.split("").map((letter, i) => (
          <span
            key={i}
            className="inline-block"
            style={{
              opacity: 1,
              transform: "translateY(0)",
              animation: hovered
                ? `letterDrop 0.35s cubic-bezier(.22,.68,0,1.2) forwards`
                : "none",
              animationDelay: `${i * 0.055}s`,
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </div>
    </Link>
  );
};

// ── Main Section ─────────────────────────────────────────
const EducationSection: React.FC = () => {
  const { ref, inView } = useInView(0.15);

  return (
    <div
      ref={ref}
      className={`bg-white py-14 md:py-20 px-4 sm:px-6 text-center overflow-hidden ${
        inView ? "sect-running" : "sect-paused"
      }`}
    >
      <style>{`
        @keyframes float {
          0% { transform: translate(-50%,0px); }
          50% { transform: translate(-50%,10px); }
          100% { transform: translate(-50%,0px); }
        }

        @keyframes fadeUp {
          from { opacity:0; transform:translateY(28px); }
          to { opacity:1; transform:translateY(0); }
        }

        @keyframes revealLine {
          from { width:0; opacity:0; }
          to { width:40px; opacity:1; }
        }

        @keyframes boxReveal {
          from { opacity:0; transform:scale(.96) translateY(24px); }
          to { opacity:1; transform:scale(1) translateY(0); }
        }

        @keyframes cardPop {
          0% { opacity:0; transform:translateY(30px) scale(.94); }
          70% { transform:translateY(-4px) scale(1.02); }
          100% { opacity:1; transform:translateY(0) scale(1); }
        }

        @keyframes letterDrop {
          from { opacity:0; transform:translateY(18px); }
          to { opacity:1; transform:translateY(0); }
        }

        .sect-paused .anim-eyebrow,
        .sect-paused .anim-heading,
        .sect-paused .anim-line,
        .sect-paused .anim-box,
        .sect-paused .anim-card { animation-play-state: paused !important; }

        .sect-running .anim-eyebrow { animation: fadeUp .6s ease both; }
        .sect-running .anim-line { animation: revealLine .5s ease both; }
        .sect-running .anim-heading { animation: fadeUp .7s ease both; }
        .sect-running .anim-box { animation: boxReveal .75s ease both; }
        .sect-running .anim-card { animation: cardPop .65s ease both; }

        .animate-float { animation: float 3s ease-in-out infinite; }
      `}</style>

      {/* Eyebrow */}
      <div className="anim-eyebrow flex items-center justify-center gap-3 mb-4">
        <div className="anim-line h-0.5 w-8 md:w-10 rounded-full bg-blue-900" />
        <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.28em] uppercase text-blue-900">
          Our Vision
        </span>
        <div className="anim-line h-0.5 w-8 md:w-10 rounded-full bg-blue-900" />
      </div>

      {/* Heading */}
      <h1 className="anim-heading text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-10 md:mb-14 leading-snug">
        Education is the best <br /> key to success in life
      </h1>

      {/* Content Box */}
      <div className="anim-box relative max-w-xl md:max-w-3xl mx-auto bg-gradient-to-br from-[#BFD9FF] to-[#dbeafe] rounded-xl border-2 border-dashed border-gray-400 p-6 sm:p-8 md:p-10 mb-14 md:mb-20 shadow-lg hover:shadow-xl transition duration-500">
        <img
          src={icon}
          alt="icon"
          className="absolute -top-8 md:-top-10 left-1/2 -translate-x-1/2 w-12 md:w-16 animate-float"
        />

        <p className="text-gray-700 leading-relaxed text-xs sm:text-sm md:text-base">
          Our Efforts Are To Build Aspiration Of Doing Future Study. We
          Believe That A "Sishu" Borns With All "Good", And We Nurture
          Them Installing Positive Values In Them.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 lg:gap-12">
        {[
          { link: "/facilities", text: "FACILITIES" },
          { link: "/admission", text: "ADMISSION" },
          { link: "/achievement", text: "ACHIEVEMENT" },
        ].map(({ link, text }, i) => (
          <div
            key={link}
            className="anim-card w-full sm:w-auto"
            style={{ animationDelay: `${0.55 + i * 0.15}s` }}
          >
            <Card link={link} text={text} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;