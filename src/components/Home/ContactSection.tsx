import React, { useEffect, useRef, useState } from "react";
import Call from "../../assets/Call.svg";
import Email from "../../assets/Email.svg";
import Map from "../../assets/Map.svg";

// ── Hook: triggers once when element enters viewport ─────────────────────────
function useInView(threshold = 0.15) {
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

// ── Contact item ─────────────────────────────────────────────────────────────
const ContactItem: React.FC<{
  icon: string;
  alt: string;
  label: string;
  value: string;
  delay: string;
}> = ({ icon, alt, label, value, delay }) => (
  <div
    className="contact-item flex items-center gap-4 group"
    style={{ animationDelay: delay }}
  >
    {/* Icon bubble */}
    <div
      className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
      style={{
        background: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)",
        border: "1.5px solid #bfdbfe",
        boxShadow: "0 2px 8px rgba(69,131,218,0.10)",
      }}
    >
      <img src={icon} alt={alt} className="w-5 h-5 sm:w-6 sm:h-6" />
    </div>
    {/* Text */}
    <div className="min-w-0">
      <p
        className="text-xs sm:text-sm font-bold tracking-[0.18em] uppercase text-[#4583DA] mb-0.5"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {label}
      </p>
      <p
        className="text-sm sm:text-base text-[#1a1a2e] font-medium break-all sm:break-normal"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {value}
      </p>
    </div>
  </div>
);

// ── Main Component ────────────────────────────────────────────────────────────
const ContactSection: React.FC = () => {
  const { ref, inView } = useInView(0.15);

  return (
    <section className="w-full bg-white max-w-[1920px] mx-auto px-6 lg:px-8 xl:px-10  pb-12 sm:pb-16 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

        @keyframes fadeSlideLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeSlideRight {
          from { opacity: 0; transform: translateX(50px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes revealLine {
          from { width: 0; opacity: 0; }
          to   { width: 48px; opacity: 1; }
        }
        @keyframes mapReveal {
          from { opacity: 0; transform: scale(0.96) translateY(20px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes shimmerHeading {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }

        .paused .anim-left,
        .paused .anim-right,
        .paused .anim-up,
        .paused .contact-item,
        .paused .anim-map,
        .paused .anim-line { animation-play-state: paused !important; }

        .running .anim-left    { animation: fadeSlideLeft  0.75s cubic-bezier(.22,.68,0,1.2) both; }
        .running .anim-right   { animation: fadeSlideRight 0.75s cubic-bezier(.22,.68,0,1.2) both; }
        .running .anim-up      { animation: fadeSlideUp    0.65s ease both; }
        .running .anim-line    { animation: revealLine     0.55s ease both; animation-delay: 0.35s; }
        .running .anim-map     { animation: mapReveal      0.85s cubic-bezier(.22,.68,0,1.2) both; }
        .running .contact-item { animation: fadeSlideUp    0.6s ease both; }

        .heading-hover:hover {
          background: linear-gradient(90deg, #04162F 20%, #4583DA 50%, #04162F 80%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmerHeading 1.8s linear infinite;
        }
      `}</style>

      {/* Responsive padding: tight on mobile, generous on desktop */}
      <div className=" px-4 sm:px-8 md:px-14 lg:px-20">
        <div
          ref={ref}
          className={`flex flex-col lg:flex-row w-full gap-10 lg:gap-16 ${inView ? "running" : "paused"}`}
        >

          {/* ── LEFT SIDE ─────────────────────────────────────── */}
          <div className="w-full lg:w-1/2">

            {/* Eyebrow */}
            <div className="anim-up flex items-center gap-3 mb-4 sm:mb-5" style={{ animationDelay: "0.05s" }}>
              <div
                className="anim-line h-0.5 rounded-full bg-[#4583DA]"
                style={{ width: "48px" }}
              />
              <span
                className="text-[10px] sm:text-[11px] font-bold tracking-[0.28em] uppercase text-[#4583DA]"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Contact Us
              </span>
            </div>

            {/* Heading */}
            <h2
              className="anim-left heading-hover text-3xl sm:text-4xl md:text-5xl text-[#04162F] leading-snug cursor-default"
              style={{ fontFamily: "'Playfair Display', serif", animationDelay: "0.1s" }}
            >
              Let's talk
            </h2>

            {/* Sub text */}
            <p
              className="anim-up text-[#656565] text-base sm:text-lg md:text-xl mt-4 sm:mt-6 max-w-full sm:max-w-[400px] leading-relaxed tracking-wider"
              style={{ fontFamily: "'DM Sans', sans-serif", animationDelay: "0.25s" }}
            >
              We offer High quality education for your kids, contact us
              or visit us today for more information.
            </p>

            {/* Thin divider */}
            <div
              className="anim-up mt-6 sm:mt-8 mb-2 h-px max-w-full sm:max-w-[400px] rounded-full"
              style={{
                background: "linear-gradient(90deg, #dbeafe 0%, transparent 100%)",
                animationDelay: "0.35s",
              }}
            />

            {/* Contact Items */}
            <div className="mt-6 sm:mt-8 space-y-5 sm:space-y-7">
              <ContactItem icon={Call}  alt="Call"     label="Call"     value="(+91) 033 2590 9090"                    delay="0.45s" />
              <ContactItem icon={Email} alt="Email"    label="Email"    value="adarshasishubidyabithi@gmail.com" delay="0.58s" />
              <ContactItem icon={Map}   alt="Location" label="Location" value="Dum Dum Park, West Bengal, India" delay="0.71s" />
            </div>
          </div>

          {/* ── RIGHT SIDE ────────────────────────────────────── */}
          <div className="w-full lg:w-1/2 flex justify-end">
            <div
              className="anim-map w-full rounded-2xl overflow-hidden"
              style={{
                animationDelay: "0.3s",
                boxShadow: "0 20px 60px rgba(69,131,218,0.15), 0 4px 16px rgba(0,0,0,0.06)",
                border: "1.5px solid #dbeafe",
                /* Shorter map on mobile, full-height on desktop */
                minHeight: "280px",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.205126945129!2d88.41490967406959!3d22.608813979465953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275f44a3396e7%3A0xfb80463863a1e9b1!2sAdarsha%20Shishu%20Vidya%20Bithi!5e0!3m2!1sen!2sus!4v1771185357827!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "280px", display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dum Dum Park Location"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;