import React, { useState } from "react";
import hand from "../assets/hand.svg";
import school1 from "../assets/morningshiftImage.jpg";
import school2 from "../assets/dayshift.jpg";
import school3 from "../assets/englishmedium.jpg";

const ProgramTiming: React.FC = () => {
  // ✅ Toggle State (Default Winter Active)
  const [season, setSeason] = useState<"winter" | "summer">("winter");

  // ✅ Timings Data (Winter vs Summer)
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
    <section className="w-full bg-[#f5f5f5] py-8">
      <div className="max-w-[1920px] mx-auto px-24">
        {/* ================= NOTE ================= */}
        <div className="mb-10">
          <div className="flex items-center gap-2">
            <img src={hand} alt="Note Icon" className="w-auto h-auto" />

            <p className="text-xl text-black">
              <span className="text-[#F80505] text-2xl font-semibold">
                Note :
              </span>{" "}
              In summer the school timing advance by 30 minutes.
            </p>
          </div>

          {/* ✅ Toggle Button */}
          <div className="mt-6 flex justify-center">
            <div className="flex bg-yellow-400 rounded-full p-1 w-[260px]">
              {/* Summer */}
              <button
                onClick={() => setSeason("summer")}
                className={`w-1/2 py-2 rounded-full text-sm font-semibold transition-all
                  ${
                    season === "summer"
                      ? "bg-[#0A2E6D] text-white"
                      : "text-black"
                  }`}
              >
                In Summer
              </button>

              {/* Winter */}
              <button
                onClick={() => setSeason("winter")}
                className={`w-1/2 py-2 rounded-full text-sm font-semibold transition-all
                  ${
                    season === "winter"
                      ? "bg-[#0A2E6D] text-white"
                      : "text-black"
                  }`}
              >
                In Winter
              </button>
            </div>
          </div>
        </div>

        {/* ===================== BLOCK 1 ===================== */}
        <div className="flex items-start gap-12 mb-20">
          <img src={school1} alt="Morning Shift" className="w-[400px] h-auto" />

          <div>
            <div className="flex items-start gap-3">
              <div className="w-[4px] h-[70px] bg-[#E74C3C] rounded-full"></div>

              <div>
                <h3 className="font-semibold text-[#04162F] text-2xl mb-2">
                  Morning Shift
                </h3>
                <p className="text-xl text-black">(Bengali Medium)</p>
              </div>
            </div>

            {/* ✅ Dynamic Timings */}
            <p className="text-xl font-medium mt-4">
              Nursery{" "}
              <span className="text-base font-normal">
                ({timings[season].nursery})
              </span>
            </p>

            <p className="text-xl font-medium mt-4">
              K.G 1 / K.G 2{" "}
              <span className="text-base font-normal">
                ({timings[season].kg})
              </span>
            </p>

            <p className="text-xl font-medium mt-4">
              Class 1, 2{" "}
              <span className="text-base font-normal">
                ({timings[season].class12})
              </span>
            </p>

            <p className="text-xl font-medium mt-4">
              Class 3, 4, 5{" "}
              <span className="text-base font-normal">
                ({timings[season].class345})
              </span>
            </p>

            <p className="text-[22px] text-black mt-4 leading-relaxed">
              We are a school for young minds, for Nursery to class 5. Bengali
              Medium has 2 Shifts.
            </p>
          </div>
        </div>

        {/* ===================== BLOCK 2 ===================== */}
        <div className="flex items-start justify-end gap-12 mb-20">
          <div>
            <div className="flex items-start justify-end gap-3">
              <div className="text-right">
                <h3 className="font-semibold text-[#04162F] text-2xl mb-2">
                  Day Shift
                </h3>
                <p className="text-xl text-black">(English Medium)</p>
              </div>

              <div className="w-[4px] h-[70px] bg-[#E74C3C] rounded-full"></div>
            </div>

            {/* ✅ Dynamic Timings */}
            <p className="text-xl font-medium mt-4 text-right">
              Play Group & LKG{" "}
              <span className="text-base font-normal">
                ({timings[season].playgroup})
              </span>
            </p>

            <p className="text-xl font-medium mt-4 text-right">
              UKG Class 1{" "}
              <span className="text-base font-normal">
                ({timings[season].ukg})
              </span>
            </p>

            <p className="text-xl font-medium mt-4 text-right">
              Class 2, 3, 4{" "}
              <span className="text-base font-normal">
                ({timings[season].class234})
              </span>
            </p>

            <p className="text-[22px] text-black mt-4 leading-relaxed text-right">
              Our English Medium section started its journey in 2013. We offer
              schooling for Play group to class 4.
            </p>
          </div>

          <img src={school2} alt="Day Shift" className="w-[400px] h-auto" />
        </div>

        {/* ===================== BLOCK 3 ===================== */}
        <div className="flex items-start gap-12">
          <img src={school3} alt="High School" className="w-[400px] h-auto" />

          <div>
            <div className="flex items-start gap-3">
              <div className="w-[4px] h-[70px] bg-[#E74C3C] rounded-full"></div>

              <div>
                <h3 className="font-semibold text-[#04162F] text-2xl mb-2">
                  High School (8:50 a.m – 12:50 p.m)
                </h3>
                <p className="text-xl text-black">(CISCE, CBSC, WBBSE)</p>
              </div>
            </div>

            <p className="text-[22px] text-black mt-4 leading-relaxed">
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
