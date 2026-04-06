import React, { useEffect, useRef, useState, useCallback } from "react";
import about from "../../assets/aboutimage.png";

// ── Typewriter Component ──────────────────────────────────────────────────────
const TypewriterTitle: React.FC = () => {
  const fullText = "Our Mission And Values";
  const totalChars = fullText.length;

  const [displayedChars, setDisplayedChars] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLHeadingElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Start typing only when heading scrolls into view
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

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
    if (!started) return;
    startTyping();
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [started, startTyping]);

  const isDone = displayedChars === totalChars;

  return (
    <h2
      ref={ref}
      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[#313567] leading-snug"
    >
      {fullText.slice(0, displayedChars)}
      {!isDone && (
        <span className="inline-block w-[2px] h-[0.75em] bg-[#313567] align-middle ml-[2px] animate-pulse" />
      )}
    </h2>
  );
};

// ── Main Component ────────────────────────────────────────────────────────────
const MissionValues: React.FC = () => {
  return (
    <section className="w-full bg-white pb-10 sm:pb-14 md:pb-16">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 md:px-14 lg:px-20">

        {/* ── TOP: Image + Text ── */}
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12 lg:gap-16">

          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src={about}
              alt="Mission Student"
              className="w-full h-56 sm:h-72 md:h-[420px] lg:h-[500px] xl:h-[600px] object-cover rounded-xl"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 md:pt-10 lg:pt-16">

            {/* ✅ Only this line changed — typewriter animation */}
            <TypewriterTitle />

            <p className="text-base sm:text-lg md:text-xl text-[#000000CC] mt-5 sm:mt-7 md:mt-10 leading-relaxed">
              We build in little minds the aspiration for education. We believe
              a "sishu" is born good, and our duty is to nurture this goodness by
              instilling positive values in them. Our motto, Satyam, Shivam
              Sundaram inspires children to become honest people.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MissionValues;