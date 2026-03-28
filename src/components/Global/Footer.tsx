import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Academics", to: "/academics" },
    { label: "Registration", to: "/registration" },
    { label: "Achievement", to: "/achievement" },
    { label: "Gallery", to: "/gallery" },
    { label: "Contact", to: "/contact" },
    { label: "Facilities", to: "/facilities" },
  ];

  const col1 = navLinks.slice(0, 4);
  const col2 = navLinks.slice(4);
const programLinks = [
  { label: "Bengali Medium (Morning)", to: "/smarty-program#morning-shift" },
  { label: "Bengali Medium (Day)", to: "/smarty-program#day-shift" },
  { label: "English Medium", to: "/smarty-program#english-medium" },
];

  const contactLinks = [
    { label: "Call Us", to: "/contact#call" },
    { label: "Email Us", to: "/contact#email" },
    { label: "Our Office", to: "/contact#office" },
  ];

  return (
    <footer className="w-full bg-[#2E3363] px-4 sm:px-8 md:px-14 lg:px-20 text-white">
      <div className="max-w-[1920px] mx-auto">

        {/* ── Title ── */}
        <h2 className="text-center pt-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          Adarsha Sishu Bidyabithi
        </h2>

        {/* ── Bottom Section ── */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 mt-8 sm:mt-10">

          {/* ── LEFT: Newsletter ── */}
          <div className="w-full lg:max-w-md">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-snug">
              Stay up to date with Us
            </h3>

            <p className="text-white/80 mt-3 sm:mt-5 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              Join and be the first to get the latest news about trend,
              promotions, and much more!
            </p>

            <div className="flex items-center border border-white rounded-full overflow-hidden max-w-sm">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 sm:px-5 py-2.5 sm:py-3 bg-transparent outline-none placeholder:text-white/70 text-sm sm:text-base min-w-0"
              />
              <button className="bg-white text-[#2E3363] px-4 sm:px-6 py-2 mr-1.5 sm:mr-2 rounded-full text-sm sm:text-base font-medium hover:scale-95 transition whitespace-nowrap">
                Join now
              </button>
            </div>
          </div>

          {/* ── RIGHT: Nav + Columns ── */}
          <div className="flex flex-row gap-8 sm:gap-12 lg:gap-16 text-sm sm:text-base">

            {/* Quick Links — split into 2 sub-columns of 4 */}
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-base sm:text-lg lg:text-xl text-white mb-1">
                Quick Links
              </h4>
              <div className="flex gap-8 sm:gap-10">
                {/* Column 1 */}
                <div className="flex flex-col gap-3">
                  {col1.map(({ label, to }) => (
                    <Link
                      key={label}
                      to={to}
                      className="text-white/80 hover:text-white transition-colors duration-200"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
                {/* Column 2 */}
                <div className="flex flex-col gap-3">
                  {col2.map(({ label, to }) => (
                    <Link
                      key={label}
                      to={to}
                      className="text-white/80 hover:text-white transition-colors duration-200"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Our Programs */}
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-base sm:text-lg lg:text-xl mb-1">Our Programs</h4>
              {programLinks.map(({ label, to }) => (
                <Link
                  key={label}
                  to={to}
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Contact Us */}
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-base sm:text-lg lg:text-xl mb-1">Contact Us</h4>
              {contactLinks.map(({ label, to }) => (
                <Link
                  key={label}
                  to={to}
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  {label}
                </Link>
              ))}
            </div>

          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-10 sm:mt-12 pt-5 border-t border-white/20 text-center text-xs sm:text-sm text-white/50">
          © {new Date().getFullYear()} Adarsha Sishu Bidyabithi. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;