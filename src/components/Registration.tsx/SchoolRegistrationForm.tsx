import React, { useState } from "react";

const inputBase =
  "w-full mt-1.5 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 bg-white outline-none transition-all duration-200 focus:border-[#4583DA] focus:ring-2 focus:ring-[#4583DA]/10 placeholder:text-gray-300";

const labelBase =
  "block text-xs font-semibold tracking-widest uppercase text-gray-500 mb-0.5";

const selectBase =
  "border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 bg-white outline-none transition-all duration-200 focus:border-[#4583DA] focus:ring-2 focus:ring-[#4583DA]/10 w-full appearance-none cursor-pointer";

type FormDataType = {
  firstName: string;
  lastName: string;
  month: string;
  day: string;
  year: string;
  gender: string;
  grade: string;
  guardianName: string;
  email: string;
  phone: string;
  address: string;
  startDate: string;
  comments: string;
};

function SectionDivider({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-4 py-2">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#4583DA]/40 to-transparent"></div>

      <span className="text-[#4583DA] text-xs font-bold tracking-[0.2em] uppercase whitespace-nowrap flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#4583DA]"></span>
        {title}
        <span className="w-1.5 h-1.5 rounded-full bg-[#4583DA]"></span>
      </span>

      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#4583DA]/40 to-transparent"></div>
    </div>
  );
}

export default function EnrollmentForm() {
  const [formData, setFormData] = useState<FormDataType>({
    firstName: "",
    lastName: "",
    month: "",
    day: "",
    year: "",
    gender: "",
    grade: "",
    guardianName: "",
    email: "",
    phone: "",
    address: "",
    startDate: "",
    comments: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center py-12 px-4"
      style={{
        background:
          "linear-gradient(135deg, #f0f6ff 0%, #e8f0fe 50%, #f5f7ff 100%)",
        fontFamily: "'Georgia', 'Times New Roman', serif",
      }}
    >
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=DM+Sans:wght@300;400;500;600&display=swap');
        .form-wrapper { font-family: 'DM Sans', sans-serif; }
        .form-title { font-family: 'Cormorant Garamond', serif; }
      `}
      </style>

      <div className="form-wrapper w-full max-w-4xl">
        <div
          className="bg-white rounded-2xl overflow-hidden"
          style={{
            boxShadow:
              "0 20px 60px rgba(69,131,218,0.12), 0 4px 16px rgba(0,0,0,0.06)",
          }}
        >
          {/* HEADER */}
          <div
            className="px-10 py-6 text-center relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, #1a3f7a 0%, #2d5cad 60%, #4583DA 100%)",
            }}
          >
            <h1 className="form-title text-3xl font-semibold text-white tracking-wide mb-1">
              Student Enrollment
            </h1>

            <p className="text-blue-200 text-xs tracking-[0.15em] uppercase">
              Application Form
            </p>
          </div>

          {/* FORM BODY */}
          <div className="px-10 py-8 space-y-6">

            {/* STUDENT INFO */}
            <div>
              <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#4583DA] mb-4">
                Student Information
              </p>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className={labelBase}>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={inputBase}
                  />
                </div>

                <div>
                  <label className={labelBase}>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={inputBase}
                  />
                </div>
              </div>

              {/* DOB + Gender + Grade */}
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className={labelBase}>Date of Birth</label>

                  <div className="flex gap-2 mt-1.5">
                    <select
                      name="month"
                      value={formData.month}
                      onChange={handleChange}
                      className={selectBase}
                    >
                      <option value="">MM</option>
                      {Array.from({ length: 12 }, (_, i) => (
                        <option key={i} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>

                    <select
                      name="day"
                      value={formData.day}
                      onChange={handleChange}
                      className={selectBase}
                    >
                      <option value="">DD</option>
                      {Array.from({ length: 31 }, (_, i) => (
                        <option key={i} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>

                    <select
                      name="year"
                      value={formData.year}
                      onChange={handleChange}
                      className={selectBase}
                    >
                      <option value="">YYYY</option>
                      {Array.from({ length: 20 }, (_, i) => (
                        <option key={i} value={2025 - i}>
                          {2025 - i}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className={labelBase}>Gender</label>

                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className={selectBase + " mt-1.5"}
                  >
                    <option value="">Select</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>

                <div>
                  <label className={labelBase}>Grade</label>

                  <select
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    className={selectBase + " mt-1.5"}
                  >
                    <option value="">Select Grade</option>
                    <option>Nursery</option>
                    <option>KG</option>
                    <option>Class 1</option>
                    <option>Class 2</option>
                  </select>
                </div>
              </div>
            </div>

            <SectionDivider title="Parent / Guardian Information" />

            {/* GUARDIAN INFO */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelBase}>Guardian Name</label>

                <input
                  name="guardianName"
                  value={formData.guardianName}
                  onChange={handleChange}
                  className={inputBase}
                />
              </div>

              <div>
                <label className={labelBase}>Email</label>

                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputBase}
                />
              </div>

              <div>
                <label className={labelBase}>Phone</label>

                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputBase}
                />
              </div>

              <div>
                <label className={labelBase}>Address</label>

                <input
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className={inputBase}
                />
              </div>
            </div>

            <SectionDivider title="Additional Information" />

            <div>
              <label className={labelBase}>Preferred Start Date</label>

              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className={inputBase}
              />
            </div>

            <div>
              <label className={labelBase}>Comments</label>

              <textarea
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                className={inputBase + " h-24 resize-none"}
              />
            </div>

            {/* SUBMIT BUTTON */}
            <div className="flex justify-end pt-2">
              <button className="px-8 py-3 bg-[#2E3363] rounded-xl text-white text-sm font-semibold tracking-widest uppercase hover:shadow-lg transition">
                SUBMIT
              </button>
            </div>

            <p className="text-center text-[11px] text-gray-400 tracking-wide">
              All information provided will be kept confidential.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}