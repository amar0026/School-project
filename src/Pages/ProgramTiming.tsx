import React from "react";
import school1 from "../assets/morningshiftImage.jpg";
import school2 from "../assets/dayshift.jpg";
import school3 from "../assets/englishmedium.jpg";

const ProgramTiming: React.FC = () => {
  return (
    <section className="w-full bg-[#f5f5f5] py-8 md:py-12">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 md:px-14 lg:px-20 xl:px-24 2xl:px-32">

        {/* ── BLOCK 1 : Morning Shift ── */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 mb-14 md:mb-20">
          <img
            src={school1}
            alt="Morning Shift"
            className="w-full max-w-[340px] sm:max-w-[380px] md:w-[340px] lg:w-[380px] xl:w-[420px] h-auto rounded-xl object-cover flex-shrink-0"
          />

          <div className="w-full">
            <div className="flex items-start gap-3">
              <div className="w-[4px] min-h-[60px] md:h-[70px] bg-[#E74C3C] rounded-full flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-[#04162F] text-xl sm:text-2xl mb-1">
                  Morning Shift (Bengali Medium)
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-black">The school day begins at 8:00 AM,</p>
              </div>
            </div>

            {["Nursery", "K.G 1 / K.G 2", "Class 1, 2", "Class 3, 4, 5"].map((label) => (
              <p key={label} className="text-base sm:text-lg md:text-xl font-medium mt-3 md:mt-4">
                {label}
              </p>
            ))}

            <p className="text-base sm:text-lg md:text-[22px] text-black mt-4 leading-relaxed">
              We are a school for young minds, for Nursery to class 5. Bengali
              Medium has 2 Shifts.
            </p>
          </div>
        </div>

        {/* ── BLOCK 2 : Day Shift ── */}
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-end gap-8 md:gap-12 mb-14 md:mb-20">
          <div className="w-full md:text-right">
            <div className="flex items-start md:justify-end gap-3">
              <div className="w-[4px] min-h-[60px] md:h-[70px] bg-[#E74C3C] rounded-full flex-shrink-0 md:hidden" />
              <div className="md:text-right">
                <h3 className="font-semibold text-[#04162F] text-xl sm:text-2xl mb-1">
                  Day Shift (Bengali Medium)
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-black">The school day begins at 9:00 AM,</p>
              </div>
              <div className="w-[4px] min-h-[60px] md:h-[70px] bg-[#E74C3C] rounded-full flex-shrink-0 hidden md:block" />
            </div>

            {["Play Group & LKG", "UKG Class 1", "Class 2, 3, 4"].map((label) => (
              <p key={label} className="text-base sm:text-lg md:text-xl font-medium mt-3 md:mt-4 md:text-right">
                {label}
              </p>
            ))}

            <p className="text-base sm:text-lg md:text-[22px] text-black mt-4 leading-relaxed md:text-right">
              Our Bengali Medium section started its journey in 2013. We offer
              schooling for Play group to class 4.
            </p>
          </div>

          <img
            src={school2}
            alt="Day Shift"
            className="w-full max-w-[340px] sm:max-w-[380px] md:w-[340px] lg:w-[380px] xl:w-[420px] h-auto rounded-xl object-cover flex-shrink-0"
          />
        </div>

        {/* ── BLOCK 3 : High School ── */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          <img
            src={school3}
            alt="High School"
            className="w-full max-w-[340px] sm:max-w-[380px] md:w-[340px] lg:w-[380px] xl:w-[420px] h-auto rounded-xl object-cover flex-shrink-0"
          />

          <div className="w-full">
            <div className="flex items-start gap-3">
              <div className="w-[4px] min-h-[60px] md:h-[70px] bg-[#E74C3C] rounded-full flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-[#04162F] text-xl sm:text-2xl mb-1">
                  English-medium Section (CISCE, CBSC, WBBSE)
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-black">The school day begins at 9:00 AM,</p>
              </div>
            </div>

            <p className="text-base sm:text-lg md:text-[22px] text-black mt-4 leading-relaxed">
              Our curriculum prepares students for CISCE, CBSE and WBBSE. Those
              who are interested to join High School in English Medium this
              schooling will be a good choice for them.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProgramTiming;