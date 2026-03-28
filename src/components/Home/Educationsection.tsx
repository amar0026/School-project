import React, { useEffect, useRef, useState } from "react";
import icon from "../../assets/imgee.png";
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
      text-xl sm:text-2xl lg:text-3xl
      font-semibold shadow-lg
      hover:-translate-y-3 hover:scale-105 hover:shadow-2xl
      transition-all duration-300 relative overflow-hidden group"
      style={{
        background: "linear-gradient(135deg, #1a3f7a 0%, #2d5cad 60%, #4583DA 100%)",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <span className="absolute top-0 -left-full w-full h-full bg-white/20 skew-x-12 group-hover:left-[120%] transition-all duration-700 pointer-events-none" />
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

// ── Typewriter Heading ────────────────────────────────────────────────────────
const line1 = "Education is the best";
const line2 = "key to success in life";
const fullText = line1 + "\n" + line2;
const totalChars = fullText.length;

const TypewriterHeading: React.FC<{ inView: boolean }> = ({ inView }) => {
  const [displayedChars, setDisplayedChars] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startTyping = () => {
    setDisplayedChars(0);
    let i = 0;
    const type = () => {
      i++;
      setDisplayedChars(i);
      if (i < totalChars) {
        timerRef.current = setTimeout(type, 55);
      } else {
        // wait 5s then repeat
        timerRef.current = setTimeout(() => startTyping(), 5000);
      }
    };
    timerRef.current = setTimeout(type, 55);
  };

  useEffect(() => {
    if (!inView) return;
    startTyping();
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [inView]);

  const visible = fullText.slice(0, displayedChars);
  const parts   = visible.split("\n");
  const l1      = parts[0] ?? "";
  const l2      = parts[1] ?? "";

  // cursor blinks on the last actively-typed char
  const showCursor = displayedChars < totalChars;

  return (
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-10 md:mb-14 leading-snug min-h-[2.8em]">
      <span>{l1}</span>
      {visible.includes("\n") && (
        <>
          <br />
          <span>{l2}</span>
        </>
      )}
      {showCursor && (
        <span
          className="inline-block w-0.75 h-[1em] bg-blue-900 ml-0.5 align-middle"
          style={{ animation: "cursorBlink 0.7s step-end infinite" }}
        />
      )}
    </h1>
  );
};

// ── Main ─────────────────────────────────────────────────────────────────────
const EducationSection: React.FC = () => {
  const { ref, inView } = useInView(0.15);

  return (
    <div
      ref={ref}
      className={`bg-white max-w-[1920px] mx-auto px-6 lg:px-8 xl:px-10 py-14 md:py-20 sm:px-6 text-center overflow-hidden ${
        inView ? "sect-running" : "sect-paused"
      }`}
    >
      <style>{`
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @keyframes fadeUp-r {
          0%    { opacity:0; transform:translateY(28px); }
          10.4% { opacity:1; transform:translateY(0); }
          100%  { opacity:1; transform:translateY(0); }
        }
        @keyframes revealLine-r {
          0%    { width:0; opacity:0; }
          8.7%  { width:40px; opacity:1; }
          100%  { width:40px; opacity:1; }
        }
        @keyframes boxReveal-r {
          0%    { opacity:0; transform:scale(.96) translateY(24px); }
          13%   { opacity:1; transform:scale(1) translateY(0); }
          100%  { opacity:1; transform:scale(1) translateY(0); }
        }
        @keyframes cardPop-r {
          0%    { opacity:0; transform:translateY(30px) scale(.94); }
          9.1%  { transform:translateY(-4px) scale(1.02); }
          11.3% { opacity:1; transform:translateY(0) scale(1); }
          100%  { opacity:1; transform:translateY(0) scale(1); }
        }
        @keyframes letterDrop {
          from { opacity:0; transform:translateY(18px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes float {
          0%   { transform: translate(-50%,0px); }
          50%  { transform: translate(-50%,10px); }
          100% { transform: translate(-50%,0px); }
        }

        .sect-paused .anim-eyebrow,
        .sect-paused .anim-line,
        .sect-paused .anim-box,
        .sect-paused .anim-card { animation-play-state: paused !important; }

        .sect-running .anim-eyebrow {
          animation: fadeUp-r 5.75s ease infinite;
          animation-delay: -5.75s;
        }
        .sect-running .anim-line {
          animation: revealLine-r 5.75s ease infinite;
          animation-delay: -5.75s;
        }
        .sect-running .anim-box {
          animation: boxReveal-r 5.75s ease infinite;
          animation-delay: -5.45s;
        }

        .animate-float { animation: float 3s ease-in-out infinite; }
      `}</style>

      {/* Eyebrow */}
      <div className="anim-eyebrow flex items-center justify-center gap-3 mb-4">
        <div className="anim-line h-0.5 w-8 md:w-10 rounded-full bg-blue-900" />
        <span className="text-sm sm:text-base font-bold tracking-[0.28em] uppercase text-blue-900">
          Our Vision
        </span>
        <div className="anim-line h-0.5 w-8 md:w-10 rounded-full bg-blue-900" />
      </div>

      {/* Typewriter Heading */}
      <TypewriterHeading inView={inView} />

      {/* Content Box */}
      <div className="anim-box relative max-w-sm sm:max-w-md md:max-w-xl mx-auto bg-gradient-to-br from-[#BFD9FF] to-[#dbeafe] rounded-xl border-2 border-dashed border-gray-400 p-6 sm:p-8 md:p-10 mb-14 md:mb-20 shadow-lg hover:shadow-xl transition duration-500">
        <img
          src={icon}
          alt="icon"
          className="absolute -top-8 md:-top-10 left-1/2 -translate-x-1/2 w-12 md:w-16 animate-float"
        />
        <p className="text-gray-700 font-bold leading-relaxed text-base sm:text-lg md:text-xl">
          Our Efforts Are To Build Aspiration Of Higher Education. We
          Believe That A "Sishu" Borns With All "Good", And We Nurture
          Them by Instilling Positive Values .
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 lg:gap-12">
        {[
          { link: "/facilities",  text: "FACILITIES"  },
          { link: "/admission",   text: "ADMISSION"   },
          { link: "/achievement", text: "ACHIEVEMENT" },
        ].map(({ link, text }, i) => {
          const stagger = 0.55 + i * 0.15;
          const cycle   = 5.75;
          const delay   = -(cycle - stagger);

          return (
            <div
              key={link}
              className="anim-card w-full sm:w-auto"
              style={{
                animation: `cardPop-r ${cycle}s ease infinite`,
                animationDelay: `${delay}s`,
                animationPlayState: inView ? "running" : "paused",
              }}
            >
              <Card link={link} text={text} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EducationSection;