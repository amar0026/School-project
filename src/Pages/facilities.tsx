import { useState } from "react";

const facilities = [
  { icon: "🎬", label: "Audio Visual Room for Learning" },
  { icon: "🏃", label: "School's Own Playground" },
  { icon: "💧", label: "Purified Drinking Water" },
  { icon: "☀️", label: "Solar Electricity" },
  { icon: "🌤️", label: "Airy  Room Full of Day Light" },
  { icon: "🎉", label: "Celebration / Participation in Social Events" },
  { icon: "🎪", label: "Fete" },
  { icon: "🏥", label: "Medical Camp" },
  { icon: "🚌", label: "Field Trip / Educational Trip" },
  { icon: "📰", label: "Student's Own Magazine" },
];

export default function Facilities() {
  // ✅ TypeScript fix
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div
      style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
      className="min-h-screen bg-gray-50 flex justify-center p-8"
    >
      <div className="bg-white rounded-2xl shadow-lg p-10 max-w-xl w-full">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div />
          <h1
            className="text-3xl font-bold text-[#313567] tracking-tight"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Facilities
            <span className="block w-24 h-1 bg-red-700 mt-1 rounded-full"></span>
          </h1>
        </div>

        {/* List */}
        <ul className="space-y-3">
          {facilities.map((item, i: number) => (
            <li
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="flex items-center gap-4 group cursor-default transition-all duration-200"
            >
              {/* Bullet / Icon */}
              <span
                className="text-xl w-8 flex-shrink-0 text-center transition-transform duration-200"
                style={{
                  transform: hovered === i ? "scale(1.3)" : "scale(1)",
                }}
              >
                {hovered === i ? item.icon : "●"}
              </span>

              {/* Label */}
              <span
                className="text-gray-700 text-base transition-colors duration-200"
                style={{
                  color: hovered === i ? "#dc2626" : "#374151",
                  fontWeight: hovered === i ? "600" : "400",
                }}
              >
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}