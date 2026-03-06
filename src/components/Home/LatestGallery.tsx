import React, { useEffect, useRef, useState } from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import img1 from "../../assets/galleryimage.jpg";
import img2 from "../../assets/speachimg.jpg";
import img3 from "../../assets/sarswatipuja (1).jpg";
import img4 from "../../assets/dayshift.jpg";
import img5 from "../../assets/englishmedium.jpg";
import img6 from "../../assets/school.jpeg";

// ── InView Hook ───────────────────────────────────────────────────────────────
function useInView(threshold = 0.1) {
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

// ── Lightbox ──────────────────────────────────────────────────────────────────
const Lightbox: React.FC<{ src: string; onClose: () => void }> = ({ src, onClose }) => (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm"
    onClick={onClose}
  >
    <div className="relative max-w-4xl w-full mx-6" onClick={e => e.stopPropagation()}>
      <button
        onClick={onClose}
        className="absolute -top-11 right-0 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 text-white transition-all text-base"
      >
        ✕
      </button>
      <img src={src} alt="Gallery" className="w-full max-h-[84vh] object-contain rounded-2xl shadow-2xl" />
    </div>
  </div>
);

// ── Image Tile — centered VIEW button ─────────────────────────────────────────
const ImageTile: React.FC<{
  src: string;
  index: number;
  colClass: string;
  rowClass: string;
  onClick: () => void;
}> = ({ src, index, colClass, rowClass, onClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`tile relative overflow-hidden rounded-2xl cursor-pointer ${colClass} ${rowClass}`}
      style={{
        animationDelay: `${0.3 + index * 0.1}s`,
        boxShadow: "0 4px 20px rgba(0,0,0,0.10)",
      }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <img
        src={src}
        alt={`Gallery ${index + 1}`}
        className="w-full h-full object-cover"
        style={{
          transform: hovered ? "scale(1.10)" : "scale(1)",
          transition: "transform 0.7s cubic-bezier(.22,.68,0,1.2)",
        }}
      />

      {/* Teal overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: hovered ? "rgba(33,193,215,0.22)" : "rgba(33,193,215,0)",
          transition: "background 0.35s ease",
        }}
      />

      {/* VIEW pill — dead center */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            padding: "8px 20px",
            borderRadius: "9999px",
            background: "rgba(255,255,255,0.93)",
            color: "#1E40AF",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            boxShadow: "0 6px 24px rgba(0,0,0,0.22)",
            backdropFilter: "blur(6px)",
            fontFamily: "'DM Sans', sans-serif",
            transform: hovered ? "scale(1)" : "scale(0.85)",
            transition: "transform 0.35s cubic-bezier(.22,.68,0,1.2)",
          }}
        >
          {/* Eye icon */}
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
            <circle cx="12" cy="12" r="3"/>
          </svg>
          View
        </div>
      </div>

      {/* Corner shine */}
      <div
        className="absolute -top-10 -right-10 w-24 h-24 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.18) 0%, transparent 70%)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.5s ease",
        }}
      />
    </div>
  );
};

// ── Main ──────────────────────────────────────────────────────────────────────
const LatestGallery: React.FC = () => {
  const images = [img1, img2, img3, img4, img5, img6];
  const { ref, inView } = useInView(0.1);
  const [lightbox, setLightbox] = useState<string | null>(null);

  const spans = [
    { col: "lg:col-span-5", row: "lg:row-span-2" },
    { col: "lg:col-span-4", row: "lg:row-span-1" },
    { col: "lg:col-span-3", row: "lg:row-span-1" },
    { col: "lg:col-span-3", row: "lg:row-span-1" },
    { col: "lg:col-span-4", row: "lg:row-span-1" },
    { col: "lg:col-span-3", row: "lg:row-span-1" },
  ];

  return (
    <section className="w-full bg-white pb-16 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes revealLine {
          from { width: 0; opacity: 0; }
          to   { width: 48px; opacity: 1; }
        }
        @keyframes tileIn {
          from { opacity: 0; transform: scale(0.92) translateY(24px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes btnPop {
          0%   { opacity: 0; transform: scale(0.82); }
          70%  { transform: scale(1.06); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes btnGlow {
          0%   { box-shadow: 0 0 0 0   rgba(49,53,103,0.45); }
          70%  { box-shadow: 0 0 0 16px rgba(49,53,103,0); }
          100% { box-shadow: 0 0 0 0   rgba(49,53,103,0); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }

        .paused .anim-eyebrow,
        .paused .anim-line,
        .paused .anim-heading,
        .paused .tile,
        .paused .anim-btn { animation-play-state: paused !important; }

        .running .anim-eyebrow { animation: fadeUp     0.6s ease both; animation-delay: 0.05s; }
        .running .anim-line    { animation: revealLine 0.55s ease both; animation-delay: 0.2s; }
        .running .anim-heading { animation: fadeUp     0.7s cubic-bezier(.22,.68,0,1.2) both; animation-delay: 0.15s; }
        .running .tile         { animation: tileIn     0.65s cubic-bezier(.22,.68,0,1.2) both; }
        .running .anim-btn     { animation: btnPop     0.6s cubic-bezier(.22,.68,0,1.2) both; }

        .heading-hover:hover {
          background: linear-gradient(90deg, #21C1D7 20%, #0891b2 50%, #21C1D7 80%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 1.8s linear infinite;
        }
        .btn-glow:hover { animation: btnGlow 0.9s ease-out infinite; }
      `}</style>

      <div className="max-w-[1400px] mx-auto px-8">
        <div ref={ref} className={inView ? "running" : "paused"}>

          {/* ── Header ── */}
          <div className="text-center mb-12">
            <div className="anim-eyebrow flex items-center justify-center gap-3 mb-4">
              <div className="anim-line h-0.5 rounded-full bg-[#1E40AF]" style={{ width: "48px" }} />
              <span
                className="text-[11px] font-bold tracking-[0.3em] uppercase text-blue-400"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                School Memories
              </span>
              <div className="anim-line h-0.5 rounded-full bg-[#1E40AF]" style={{ width: "48px" }} />
            </div>

            <h2
              className="anim-heading heading-hover text-4xl md:text-5xl text-[#1E40AF] font-semibold cursor-default"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Our Latest Gallery
            </h2>

            <div className="flex justify-center items-center gap-2 mt-3">
              <div className="w-10 h-px bg-[#1E40AF]/30" />
              <div className="w-2 h-2 rounded-full bg-[#1E40AF]/50" />
              <div className="w-10 h-px bg-[#1E40AF]/30" />
            </div>
          </div>

          {/* ── Mosaic Grid ── */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3"
            style={{ gridAutoRows: "180px" }}
          >
            {images.map((img, i) => (
              <ImageTile
                key={i}
                src={img}
                index={i}
                colClass={spans[i].col}
                rowClass={spans[i].row}
                onClick={() => setLightbox(img)}
              />
            ))}
          </div>

          {/* ── View More ── */}
          <div className="anim-btn flex justify-end mt-10" style={{ animationDelay: "0.9s" }}>
            <Link
              to="/gallery"
              className="btn-glow group flex items-center gap-2 px-8 py-3 rounded-2xl bg-[#313567] text-white text-lg
                hover:brightness-110 active:scale-95 transition-all duration-200"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                boxShadow: "0 4px 14px rgba(49,53,103,0.30)",
              }}
            >
              View More
              <ChevronRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightbox && <Lightbox src={lightbox} onClose={() => setLightbox(null)} />}
    </section>
  );
};

export default LatestGallery;