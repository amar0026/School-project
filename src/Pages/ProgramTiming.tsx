import React, { useState } from "react";
import hand from "../assets/hand.svg";
import school1 from "../assets/morningshiftImage.jpg";
import school2 from "../assets/dayshift.jpg";
import school3 from "../assets/englishmedium.jpg";

const ProgramTiming: React.FC = () => {
  const [season, setSeason] = useState<"winter" | "summer">("winter");

  const timings = {
    winter: {
      nursery: "07:50 - 09:00",
      kg: "08:50 - 09:50",
      class12: "09:50 - 10:30",
      class345: "10:50 - 11:00",
      playgroup: "08:50 - 11:00",
      ukg: "08:50 - 12:30",
      class234: "08:50 - 01:30",
    },
    summer: {
      nursery: "07:20 - 08:30",
      kg: "08:20 - 09:20",
      class12: "09:20 - 10:00",
      class345: "10:20 - 10:30",
      playgroup: "08:20 - 10:30",
      ukg: "08:20 - 12:00",
      class234: "08:20 - 01:00",
    },
  };

  return (
    <section className="w-full bg-[#f5f5f5] py-8 md:py-12">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 md:px-14 lg:px-20 xl:px-24 2xl:px-32">

        {/* ── NOTE + TOGGLE ── */}
        <div className="mb-10 md:mb-14">
          <div className="flex items-start sm:items-center gap-2 flex-wrap">
            <img src={hand} alt="Note Icon" className="w-6 h-6 sm:w-auto sm:h-auto flex-shrink-0" />
            <p className="text-base sm:text-lg md:text-xl text-black">
              <span className="text-[#F80505] text-lg sm:text-xl md:text-2xl font-semibold">
                Note :
              </span>{" "}
              In summer the school timing advance by 30 minutes.
            </p>
          </div>

          {/* Toggle */}
          <div className="mt-6 flex justify-center">
            <div className="flex bg-yellow-400 rounded-full p-1 w-[240px] sm:w-[260px]">
              <button
                onClick={() => setSeason("summer")}
                className={`w-1/2 py-2 rounded-full text-sm font-semibold transition-all
                  ${season === "summer" ? "bg-[#0A2E6D] text-white" : "text-black"}`}
              >
                In Summer
              </button>
              <button
                onClick={() => setSeason("winter")}
                className={`w-1/2 py-2 rounded-full text-sm font-semibold transition-all
                  ${season === "winter" ? "bg-[#0A2E6D] text-white" : "text-black"}`}
              >
                In Winter
              </button>
            </div>
          </div>
        </div>

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
                  Morning Shift
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-black">(Bengali Medium)</p>
              </div>
            </div>

            {[
              { label: "Nursery", key: "nursery" },
              { label: "K.G 1 / K.G 2", key: "kg" },
              { label: "Class 1, 2", key: "class12" },
              { label: "Class 3, 4, 5", key: "class345" },
            ].map(({ label, key }) => (
              <p key={key} className="text-base sm:text-lg md:text-xl font-medium mt-3 md:mt-4">
                {label}{" "}
                <span className="text-sm sm:text-base font-normal">
                  ({timings[season][key as keyof typeof timings.winter]})
                </span>
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
              {/* On mobile: left-aligned; md+: right-aligned */}
              <div className="w-[4px] min-h-[60px] md:h-[70px] bg-[#E74C3C] rounded-full flex-shrink-0 md:hidden" />
              <div className="md:text-right">
                <h3 className="font-semibold text-[#04162F] text-xl sm:text-2xl mb-1">
                  Day Shift
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-black">(English Medium)</p>
              </div>
              <div className="w-[4px] min-h-[60px] md:h-[70px] bg-[#E74C3C] rounded-full flex-shrink-0 hidden md:block" />
            </div>

            {[
              { label: "Play Group & LKG", key: "playgroup" },
              { label: "UKG Class 1", key: "ukg" },
              { label: "Class 2, 3, 4", key: "class234" },
            ].map(({ label, key }) => (
              <p key={key} className="text-base sm:text-lg md:text-xl font-medium mt-3 md:mt-4 md:text-right">
                {label}{" "}
                <span className="text-sm sm:text-base font-normal">
                  ({timings[season][key as keyof typeof timings.winter]})
                </span>
              </p>
            ))}

            <p className="text-base sm:text-lg md:text-[22px] text-black mt-4 leading-relaxed md:text-right">
              Our English Medium section started its journey in 2013. We offer
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
                  High School{" "}
                  <span className="text-lg sm:text-xl font-medium">(8:50 a.m – 12:50 p.m)</span>
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-black">(CISCE, CBSC, WBBSE)</p>
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