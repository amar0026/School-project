import React, { useState } from "react";
// import heroImg from "../assets/Frame 2144.png";
// import { Link } from "react-router-dom";

// --- Styles ---
const inputBase =
  "w-full border-0 border-b-2 border-gray-200 px-0 py-2.5 text-sm text-gray-800 bg-transparent outline-none transition-all duration-300 focus:border-[#1E40AF] placeholder:text-gray-300 peer";

const labelBase =
  "block text-[10px] font-bold tracking-[0.22em] uppercase text-gray-400 mb-1 transition-colors duration-200 peer-focus:text-[#1E40AF]";

// --- InputField Component ---
type InputProps = {
  label: string;
  type?: string;
  icon: React.ReactNode;
};

const InputField: React.FC<InputProps> = ({ label, type = "text", icon }) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className={`relative flex items-end gap-3 pb-1 group`}>
      {/* Icon */}
      <div
        className="mb-2.5 transition-colors duration-300"
        style={{ color: focused ? "#1E40AF" : "#cbd5e1" }}
      >
        {icon}
      </div>

      {/* Field */}
      <div className="flex-1">
        <label
          className={labelBase}
          style={{ color: focused ? "#1E40AF" : undefined }}
        >
          {label}
        </label>
        <input
          type={type}
          className={inputBase}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      </div>
    </div>
  );
};

// --- Main Component ---
const Formsection = () => {
  return (
    <div
      className="bg-slate-50 min-h-screen"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');
        .hero-title { font-family: 'Playfair Display', serif; }
        input:-webkit-autofill { background-color: transparent !important; -webkit-box-shadow: 0 0 0 50px white inset; }
      `}</style>

      {/* ── HERO SECTION ── */}
      <div className="relative h-50 md:h-60 overflow-hidden">
        {/* Placeholder gradient in place of heroImg */}
        <div
          className="w-full h-full"
         style={{
              background:
                "linear-gradient(135deg, #1a3f7a 0%, #2d5cad 60%, #4583DA 100%)",
            }}
        >
          {/*
            To use the real image, swap the div above with:
            <img src={heroImg} alt="Hero" className="w-full h-full object-cover" />
          */}
        </div>

        {/* Diagonal overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.20) 60%, rgba(30,64,175,0.35) 100%)",
          }}
        />

        {/* Decorative lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute right-16 top-12 w-2 h-2 rounded-full opacity-40"
            style={{ background: "white" }}
          />
        </div>

        {/* Hero Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p className="text-blue-300 text-[10px] tracking-[0.35em] uppercase font-semibold mb-3">
            Welcome to our institution
          </p>
          <h1 className="hero-title text-white text-3xl md:text-4xl font-semibold leading-snug">
            Education is the best <br />
            <span className="text-blue-300">key to success</span> in life
          </h1>
          <div className="mt-4 flex items-center gap-2">
            <div className="w-8 h-px bg-blue-400/60" />
            <div className="w-2 h-2 rounded-full bg-blue-400/60" />
            <div className="w-8 h-px bg-blue-400/60" />
          </div>
        </div>
      </div>

      {/* ── FORM SECTION ── */}
      <div className="flex justify-center  px-4 -mt-8 pb-20 relative z-10">
        <div
          className="w-full max-w-xl bg-white rounded-2xl overflow-hidden"
          style={{
            boxShadow:
              "0 32px 80px rgba(30,64,175,0.14), 0 8px 24px rgba(0,0,0,0.07)",
          }}
        >
          {/* Top accent strip with gradient */}
          <div
            className="h-1.5"
            style={{
              background:
                "linear-gradient(90deg, #1E40AF 0%, #3b82f6 50%, #1E40AF 100%)",
            }}
          />

          {/* Card Header */}
          <div className="flex items-start justify-between px-8 pt-7 pb-2">
            <div>
              <h2
                className="hero-title text-2xl font-semibold text-gray-800"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Get in Touch
              </h2>
              <p className="text-xs text-gray-400 tracking-wide mt-0.5">
                Fill in your details and we'll get back to you shortly.
              </p>
            </div>

            {/* Close button */}
            {/* Replace <Link to="/about"> with <a href="/about"> if not using react-router */}
            <a
              href="/about"
              className="mt-1 w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:bg-red-50 hover:text-red-500 transition-all duration-200 text-lg font-bold"
              aria-label="Close"
            >
              ✕
            </a>
          </div>

          {/* Thin divider */}
          <div className="mx-8 h-px bg-gray-100 mt-4" />

          {/* Form Body */}
          <div className="px-8 pt-6 pb-8 space-y-5">

            <InputField
              label="Name"
              icon={
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              }
            />

            <InputField
              label="Organization if any"
              icon={
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                </svg>
              }
            />

            <InputField
              label="Mail"
              type="email"
              icon={
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 6 12 13 2 6" />
                </svg>
              }
            />

            <InputField
              label="Phone Number"
              type="tel"
              icon={
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 4.07 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 1.28h3a2 2 0 0 1 2 1.72c.127.96.36 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9a16 16 0 0 0 5.91 5.91l1.27-1.27a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 21 16z" />
                </svg>
              }
            />

            <InputField
              label="Address may provide"
              icon={
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              }
            />

            <div className="flex justify-end pt-2">
              <button className="px-8 py-3 bg-[#2E3363] rounded-xl text-white text-sm font-semibold tracking-widest uppercase hover:shadow-lg transition">
                SUBMIT
              </button>
            </div>
          </div>

          {/* Bottom accent strip */}
          <div
            className="h-6 flex items-center justify-center"
            style={{
              background: "linear-gradient(90deg, #1E40AF 0%, #2d4fd6 50%, #1E40AF 100%)",
            }}
          >
            <div className="flex gap-1.5">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-1 h-1 rounded-full bg-white/40"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formsection;