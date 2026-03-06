import React, { useEffect, useRef, useState } from "react";
import { Phone, Mail, MapPin, User, Inbox, Send, ArrowRight } from "lucide-react";

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const ContactSection: React.FC = () => {
  const { ref, inView } = useInView();
  const [focused, setFocused] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const [hoveredInfo, setHoveredInfo] = useState<string | null>(null);

  const handleSend = () => {
    setSent(true);
    setTimeout(() => setSent(false), 2800);
  };

  const contactItems = [
    { id: "call",     icon: Phone,  color: "#22c55e", bg: "#f0fdf4", label: "Call",     value: "+91 123 567 890" },
    { id: "email",    icon: Mail,   color: "#ef4444", bg: "#fef2f2", label: "Email",    value: "adarshasishubidyabithi@gmail.com" },
    { id: "location", icon: MapPin, color: "#3b82f6", bg: "#eff6ff", label: "Location", value: "Dum Dum Park, West Bengal, India" },
  ];

  return (
    <section className="relative bg-[#f2f2f2] py-16  px-4 sm:px-8 md:px-14 lg:px-20 overflow-hidden  flex items-center">

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Outfit:wght@300;400;500;600&display=swap');

        @keyframes blob1 {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(30px,-20px) scale(1.08); }
          66%      { transform: translate(-15px,25px) scale(0.95); }
        }
        @keyframes blob2 {
          0%,100% { transform: translate(0,0) scale(1); }
          40%      { transform: translate(-25px,20px) scale(1.05); }
          70%      { transform: translate(20px,-15px) scale(0.97); }
        }
        @keyframes slideUp {
          from { opacity:0; transform:translateY(40px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes slideLeft {
          from { opacity:0; transform:translateX(-40px); }
          to   { opacity:1; transform:translateX(0); }
        }
        @keyframes slideRight {
          from { opacity:0; transform:translateX(40px); }
          to   { opacity:1; transform:translateX(0); }
        }
        @keyframes successPop {
          0%  { opacity:0; transform:scale(0.7); }
          60% { transform:scale(1.08); }
          100%{ opacity:1; transform:scale(1); }
        }
        @keyframes floatCard {
          0%,100% { transform:translateY(0); }
          50%      { transform:translateY(-4px); }
        }

        .blob-1 { animation: blob1 7s ease-in-out infinite; }
        .blob-2 { animation: blob2 9s ease-in-out infinite; }

        .enter-left  { animation: slideLeft  0.7s cubic-bezier(.22,.68,0,1.2) both; }
        .enter-right { animation: slideRight 0.7s cubic-bezier(.22,.68,0,1.2) both; }
        .enter-up    { animation: slideUp    0.65s ease both; }

        .paused .enter-left,
        .paused .enter-right,
        .paused .enter-up { animation-play-state: paused !important; }
        .running .enter-left,
        .running .enter-right,
        .running .enter-up { animation-play-state: running !important; }

        .info-card {
          transition: transform 0.35s cubic-bezier(.22,.68,0,1.2),
                      box-shadow 0.35s ease;
        }
        .info-card:hover {
          transform: translateX(6px) scale(1.015);
          box-shadow: 0 8px 28px rgba(0,0,0,0.10);
        }

        .send-btn {
          background: linear-gradient(120deg, #313567, #4a50a0, #313567);
          background-size: 200% auto;
          transition: background-position 0.5s ease, transform 0.2s, box-shadow 0.2s;
        }
        .send-btn:hover {
          background-position: right center;
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(49,53,103,0.35);
        }
        .send-btn:active { transform: translateY(0); }

        .field-wrap {
          transition: box-shadow 0.25s ease, background 0.25s ease;
        }
        .field-wrap.focused {
          background: #fff !important;
          box-shadow: 0 0 0 2px #313567, 0 4px 20px rgba(49,53,103,0.12);
        }

        .success-pop { animation: successPop 0.4s cubic-bezier(.22,.68,0,1.2) both; }

        .arrow-icon {
          transition: opacity 0.25s ease, transform 0.25s ease;
        }
      `}</style>

      {/* Ambient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="blob-1 absolute -top-24 -left-24 w-72 h-72 sm:w-96 sm:h-96 rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, #bfdbfe 0%, transparent 70%)" }} />
        <div className="blob-2 absolute -bottom-16 -right-16 w-64 h-64 sm:w-80 sm:h-80 rounded-full opacity-25"
          style={{ background: "radial-gradient(circle, #bbf7d0 0%, transparent 70%)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #c7d2fe 0%, transparent 65%)" }} />
      </div>

      <div className="relative max-w-[1920px] mx-auto w-full">
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start ${inView ? "running" : "paused"}`}
        >

          {/* ── LEFT ── */}
          <div>
            <div className="enter-up flex items-center gap-2 mb-4" style={{ animationDelay: "0s" }}>
              <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[#313567] opacity-60"
                style={{ fontFamily: "'Outfit', sans-serif" }}>
                ✦ Reach Out
              </span>
            </div>

            <h2
              className="enter-left text-4xl sm:text-5xl text-gray-800 leading-tight mb-3"
              style={{ fontFamily: "Poppins, serif", animationDelay: "0.08s" }}
            >
              Get in <em>touch</em>
            </h2>

            <p
              className="enter-up text-gray-500 text-sm sm:text-base leading-relaxed mb-10 max-w-xs"
              style={{ fontFamily: "'Outfit', sans-serif", animationDelay: "0.18s" }}
            >
              Please don't hesitate to contact us for any academic or administrative queries.
            </p>

            <div className="space-y-4">
              {contactItems.map(({ id, icon: Icon, color, bg, label, value }, i) => (
                <div
                  key={id}
                  className="enter-up info-card flex items-center gap-4 bg-white rounded-2xl px-5 py-4 cursor-default"
                  style={{
                    animationDelay: `${0.28 + i * 0.12}s`,
                    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                    fontFamily: "'Outfit', sans-serif",
                  }}
                  onMouseEnter={() => setHoveredInfo(id)}
                  onMouseLeave={() => setHoveredInfo(null)}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: bg }}
                  >
                    <Icon size={20} style={{ color }} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-0.5">{label}</p>
                    <p className="text-sm font-medium text-gray-800 truncate">{value}</p>
                  </div>
                  <ArrowRight
                    size={16}
                    className="arrow-icon ml-auto flex-shrink-0"
                    style={{
                      color: "#313567",
                      opacity: hoveredInfo === id ? 1 : 0,
                      transform: hoveredInfo === id ? "translateX(0)" : "translateX(-6px)",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT (FORM) ── */}
          <div
            className="enter-right bg-white rounded-3xl p-7 sm:p-10 relative overflow-hidden"
            style={{
              animationDelay: "0.12s",
              boxShadow: "0 24px 64px rgba(49,53,103,0.12), 0 4px 16px rgba(0,0,0,0.05)",
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            {/* Top-right orb decoration */}
            <div className="pointer-events-none absolute -top-10 -right-10 w-36 h-36 rounded-full opacity-20"
              style={{ background: "radial-gradient(circle, #818cf8, transparent 70%)" }} />

            <h3
              className="text-xl sm:text-2xl font-semibold text-gray-800 mb-7"
              style={{ fontFamily: "Poppins, serif" }}
            >
              Send a message
            </h3>

            {/* Name */}
            <label className="text-xs font-semibold tracking-wider uppercase text-gray-400 block mb-2">Your name</label>
            <div className={`field-wrap flex items-center bg-gray-100 rounded-2xl px-4 py-3 mb-5 ${focused === "name" ? "focused" : ""}`}>
              <User size={16} className="text-gray-400 mr-3 flex-shrink-0" />
              <input
                type="text"
                placeholder="Full name here"
                className="bg-transparent outline-none w-full text-sm text-gray-700 placeholder-gray-400"
                onFocus={() => setFocused("name")}
                onBlur={() => setFocused(null)}
              />
            </div>

            {/* Email */}
            <label className="text-xs font-semibold tracking-wider uppercase text-gray-400 block mb-2">Your email</label>
            <div className={`field-wrap flex items-center bg-gray-100 rounded-2xl px-4 py-3 mb-5 ${focused === "email" ? "focused" : ""}`}>
              <Inbox size={16} className="text-gray-400 mr-3 flex-shrink-0" />
              <input
                type="email"
                placeholder="Your email address"
                className="bg-transparent outline-none w-full text-sm text-gray-700 placeholder-gray-400"
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
              />
            </div>

            {/* Message */}
            <label className="text-xs font-semibold tracking-wider uppercase text-gray-400 block mb-2">Message</label>
            <div className={`field-wrap bg-gray-100 rounded-2xl px-4 py-3 mb-7 ${focused === "msg" ? "focused" : ""}`}>
              <textarea
                placeholder="Type your message here…"
                rows={4}
                className="bg-transparent outline-none w-full text-sm text-gray-700 placeholder-gray-400 resize-none"
                onFocus={() => setFocused("msg")}
                onBlur={() => setFocused(null)}
              />
            </div>

            {/* Send button */}
            <button
              onClick={handleSend}
              className="send-btn w-full sm:w-auto text-white text-sm font-semibold px-8 py-3.5 rounded-2xl flex items-center justify-center gap-2"
            >
              {sent ? (
                <span className="success-pop flex items-center gap-2">✓ Message sent!</span>
              ) : (
                <><Send size={16} /> Send message</>
              )}
            </button>

            {/* Bottom gradient bar */}
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl"
              style={{ background: "linear-gradient(90deg, #313567, #818cf8, #313567)" }} />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;