import React, { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import success from "../../assets/Group 2109.png";

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setInView(true); observer.disconnect(); }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

// ── Typewriter ────────────────────────────────────────────────────────────────
const TypewriterTitle: React.FC<{ start: boolean }> = ({ start }) => {
  const fullText = "Guiding your kids towords success";
  const totalChars = fullText.length;

  const [displayedChars, setDisplayedChars] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startTyping = useCallback(() => {
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
  }, [totalChars]);

  useEffect(() => {
    if (!start) return;
    startTyping();
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [start, startTyping]);

  const isDone = displayedChars === totalChars;

  return (
    <>
      {fullText.slice(0, displayedChars)}
      {!isDone && (
        <span className="inline-block w-0.5 h-[0.8em] bg-[#4583DA] align-middle ml-0.5 animate-pulse" />
      )}
    </>
  );
};

const AboutSection: React.FC = () => {
  const { ref, inView } = useInView(0.15);

  return (
    <section className="w-full bg-white py-16 overflow-hidden">
      <style>{`
        @keyframes fadeLeft {
          0%      { opacity:0; transform:translateX(-60px) }
          7.4%    { opacity:1; transform:translateX(0) }
          100%    { opacity:1; transform:translateX(0) }
        }
        @keyframes fadeRight {
          0%      { opacity:0; transform:translateX(60px) }
          7.4%    { opacity:1; transform:translateX(0) }
          100%    { opacity:1; transform:translateX(0) }
        }
        @keyframes fadeUp {
          0%      { opacity:0; transform:translateY(40px) }
          7.4%    { opacity:1; transform:translateY(0) }
          100%    { opacity:1; transform:translateY(0) }
        }
        @keyframes fadeIn {
          0%      { opacity:0 }
          7.4%    { opacity:1 }
          100%    { opacity:1 }
        }
        @keyframes scaleIn {
          0%      { opacity:0; transform:scale(0.85) }
          7.4%    { opacity:1; transform:scale(1) }
          100%    { opacity:1; transform:scale(1) }
        }
        @keyframes slideUpFade {
          0%      { opacity:0; transform:translateY(30px) }
          7.4%    { opacity:1; transform:translateY(0) }
          100%    { opacity:1; transform:translateY(0) }
        }

        .imgAnim   { opacity:0; animation: fadeLeft    10.8s ease infinite; animation-delay: -10.8s; }
        .textAnim  { opacity:0; animation: fadeRight   10.8s ease infinite; animation-delay: -10.8s; }
        .paraAnim  { opacity:0; animation: fadeUp      10.8s ease infinite; animation-delay: -10.5s; }
        .lineAnim  { opacity:0; animation: scaleIn     10.8s ease infinite; animation-delay: -10.7s; }
        .badgeAnim { opacity:0; animation: fadeIn      10.8s ease infinite; animation-delay: -10.6s; }
        .btnAnim   { opacity:0; animation: slideUpFade 10.8s ease infinite; animation-delay: -10.3s; }
        .callAnim  { opacity:0; animation: slideUpFade 10.8s ease infinite; animation-delay: -10.15s; }
        .blobAnim  { opacity:0; animation: scaleIn     10.8s ease infinite; animation-delay: -10.7s; }

        .paused .imgAnim,
        .paused .textAnim,
        .paused .paraAnim,
        .paused .lineAnim,
        .paused .badgeAnim,
        .paused .btnAnim,
        .paused .callAnim,
        .paused .blobAnim  { animation-play-state: paused !important }

        .running .imgAnim,
        .running .textAnim,
        .running .paraAnim,
        .running .lineAnim,
        .running .badgeAnim,
        .running .btnAnim,
        .running .callAnim,
        .running .blobAnim { animation-play-state: running }
      `}</style>

      <div className="max-w-350 mx-auto px-4 sm:px-8 md:px-14 lg:px-20">
        <div
          ref={ref}
          className={`flex flex-col lg:flex-row items-center gap-12 ${
            inView ? "running" : "paused"
          }`}
        >
          {/* LEFT IMAGE */}
          <div className="w-full lg:w-1/2 flex justify-center relative">
            <div className="blobAnim absolute w-60 h-60 md:w-72 md:h-72 bg-blue-100 rounded-full blur-3xl" />
            <img
              src={success}
              alt="student success"
              className="imgAnim w-70 sm:w-87.5 md:w-105 lg:w-120 relative z-10"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-3 mb-4">
              <div className="lineAnim w-10 h-0.5 bg-[#4583DA]" />
              <span className="badgeAnim text-xs tracking-[4px] font-semibold text-[#4583DA] uppercase">
                About Us
              </span>
            </div>

            {/* ✅ Only this line changed — typewriter animation */}
            <h2 className="textAnim text-3xl sm:text-4xl md:text-5xl text-[#4583DA] font-serif leading-tight">
              <TypewriterTitle start={inView} />
            </h2>

            <p className="paraAnim text-gray-500 text-base md:text-lg leading-relaxed mt-6 max-w-125">
              We provide quality education to our students. Established in 1959, this is a co-educational<br/>institution committed to academic excellence.<br/> We focus on discipline and overall development<br/> to help students grow into confident and<br/> responsible individuals.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-8">
              <Link
                to="/about"
                className="btnAnim px-7 py-3 bg-[#313567] text-white rounded-xl shadow-lg hover:scale-105 transition"
              >
                About Us
              </Link>

              <p className="callAnim text-lg">
                <span className="text-red-500 font-medium">Call us :</span>{" "}
                (+91)033 2590 9090
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;