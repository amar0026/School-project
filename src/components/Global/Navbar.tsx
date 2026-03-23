import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/School_img.png";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm sm:text-base font-medium transition ${
      isActive
        ? "text-[#083BA0] border-b-2 border-[#083BA0]"
        : "text-gray-700 hover:text-[#083BA0]"
    }`;

  const mobileNavClass = ({ isActive }: { isActive: boolean }) =>
    `block w-full text-left px-4 py-3 text-base font-medium transition border-b border-gray-100 ${
      isActive
        ? "text-[#083BA0] bg-blue-50"
        : "text-gray-700 hover:text-[#083BA0] hover:bg-gray-50"
    }`;

  const navLinks = [
    { to: "/",            label: "Home" },
    { to: "/about",       label: "About" },
    { to: "/academics",   label: "Academics" },
    { to: "/registration",label: "Registration" },
    { to: "/achievement", label: "Achievement" },
    // { to: "/notice",      label: "Notice" },
    { to: "/gallery",     label: "Gallery" },
    { to: "/contact",     label: "Contact" },
  ];

  const announcements = [
    "🔔 Apply For Admission",
    "📢 Notices",
    "💡 Fee Structure",
    "📞 Contact Us",
  ];

  return (
    <>
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 18s linear infinite;
        }
      `}</style>

      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">

        {/* ── Announcement Bar ── */}
        <div className="w-full bg-sky-300 py-1.5 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...announcements, ...announcements].map((item, i) => (
              <span
                key={i}
                className="mx-6 sm:mx-10 text-xs sm:text-sm font-semibold text-gray-800 cursor-pointer hover:text-[#083BA0] transition"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* ── Logo + School Name ── */}
        <div className="max-w-[1920px] mx-auto flex items-center justify-between sm:justify-center gap-3 sm:gap-5 px-4 sm:px-6 py-3 sm:py-4">

          <div className="flex items-center gap-3 sm:gap-5">
            <img
              src={logo}
              alt="School Logo"
              className="h-17 sm:h-20 md:h-20 lg:h-25 w-auto object-contain"
            />
            <div className="text-center">
              <h1 className="text-sm sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-wide text-[#313567] leading-tight">
                ADARSHA SISHU BIDYA BITHI
              </h1>
              <p className="text-xs sm:text-sm text-gray-900 mt-0.5">
                (NURSERY & K.G. PRIMARY CO-EDUCATION SCHOOL)
              </p>
              <p className="text-[10px] sm:text-xs text-gray-900">
                ESTD : 1959
              </p>
            </div>
          </div>

          {/* Hamburger — mobile only */}
          <button
            className="sm:hidden flex flex-col justify-center items-center gap-1.5 p-2 rounded-lg hover:bg-gray-100 transition"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>

        {/* ── Desktop Nav ── */}
        <div className="hidden sm:block w-full bg-white border-t border-gray-100">
          <nav className="flex justify-center gap-5 md:gap-8 lg:gap-10 py-3 sm:py-4 flex-wrap px-4">
            {navLinks.map(({ to, label }) => (
              <NavLink key={to} to={to} className={navClass}>{label}</NavLink>
            ))}
          </nav>
        </div>

        {/* ── Mobile Dropdown Menu ── */}
        <div
          className={`sm:hidden overflow-hidden transition-all duration-300 bg-white border-t border-gray-100 ${
            menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav>
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={mobileNavClass}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>

      </header>

      {/* Spacer — adjusts for mobile (shorter header) vs desktop */}
      <div className="h-[140px] sm:h-[175px] md:h-[185px] lg:h-[210px]" />
    </>
  );
};

export default Navbar;