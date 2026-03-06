import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#2E3363] py-10 sm:py-14 text-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">

        {/* ── Title ── */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          Adarsha Sishu Bidyabithi
        </h2>

        {/* ── Bottom Section ── */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 mt-8 sm:mt-10">

          {/* ── LEFT: Newsletter ── */}
          <div className="w-full lg:max-w-md">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-snug">
              Stay up to date with <br /> our story
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
          <div className="flex flex-col gap-6 sm:gap-8 w-full lg:w-auto">

            {/* Nav links */}
            <div className="flex flex-wrap gap-x-3 gap-y-2 text-sm sm:text-base text-white/90">
              {["Home","About","Academics","Registration","Achievement","Notice","Gallery","Contact"].map(link => (
                <p key={link} className="hover:text-white cursor-pointer">{link}</p>
              ))}
            </div>

            {/* Programs + Contact */}
            <div className="flex flex-row gap-8 sm:gap-12 lg:gap-16 text-sm sm:text-base">
              <div className="space-y-3">
                <h4 className="font-semibold text-base sm:text-lg lg:text-xl">Our Programs</h4>
                <p className="text-white/80 hover:text-white cursor-pointer">Bengali Medium</p>
                <p className="text-white/80 hover:text-white cursor-pointer">English Medium</p>
                <p className="text-white/80 hover:text-white cursor-pointer">High School</p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-base sm:text-lg lg:text-xl">Contact Us</h4>
                <p className="text-white/80 hover:text-white cursor-pointer">Call Us</p>
                <p className="text-white/80 hover:text-white cursor-pointer">Email Us</p>
                <p className="text-white/80 hover:text-white cursor-pointer">Our Office</p>
              </div>
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