import React, { useEffect, useRef, useState } from "react";
import about from "../../assets/aboutimage.png";

// ── Typewriter Component ──────────────────────────────────────────────────────
const TypewriterTitle: React.FC = () => {
  const fullText = "Our Mission And Values";
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLHeadingElement>(null);

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

  useEffect(() => {
    if (!started) return;
    if (displayed.length === fullText.length) return;
    const timeout = setTimeout(() => {
      setDisplayed(fullText.slice(0, displayed.length + 1));
    }, 70);
    return () => clearTimeout(timeout);
  }, [started, displayed]);

  return (
    <h2
      ref={ref}
      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[#313567] leading-snug"
    >
      {displayed}
      {displayed.length < fullText.length && (
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
              a "sishu" is born good, and our duty is to nuture this goodness by
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