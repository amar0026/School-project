 import React from "react";

const NoticePage: React.FC = () => {
  return (
    <section className="bg-gray-100 min-h-screen pb-20">
      
      {/* Top Banner */}
<div className="relative">
  <div
    className="py-8 text-center text-white rounded-b-3xl shadow-lg"
    style={{
      background:
        "linear-gradient(135deg, #1a3f7a 0%, #2d5cad 60%, #4583DA 100%)",
    }}
  >
    <h1 className="text-2xl font-semibold">Notice Board</h1>
    <p className="text-sm mt-2">Home / Notice</p>
  </div>
</div>
      {/* Notice Section */}
      <div className="max-w-5xl mx-auto mt-16 px-6">
        
        {/* Title + Year Filter */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-semibold text-[#313567] relative">
            Notice
            <span className="block w-16 h-1 bg-red-700 mt-2"></span>
          </h2>

          <select className="bg-blue-800 text-white px-4 py-2 rounded-full text-sm outline-none">
            <option>2022–26</option>
            <option>2021–25</option>
            <option>2020–24</option>
          </select>
        </div>

        {/* Table */}
        <div className="rounded-2xl overflow-hidden shadow-md">
          
          {/* Table Header */}
          <div className="grid grid-cols-3 bg-blue-900 text-white font-medium py-4 px-6">
            <div>Date</div>
            <div>Description</div>
            <div className="text-right">View / Download</div>
          </div>

          {/* Row 1 */}
          <div className="grid grid-cols-3 items-center bg-blue-200 py-4 px-6 border-t">
            <div className="flex items-center gap-3 text-sm">
              <span className="bg-yellow-400 text-white text-xs px-2 py-1 rounded-full">
                New
              </span>
              28 Feb 2026
            </div>
            <div className="text-sm">
              Admission For Nursery to Class IX
            </div>
            <div className="text-right">
              <button className="bg-blue-800 text-white px-4 py-2 rounded-full text-sm hover:opacity-90">
                Download
              </button>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-3 items-center bg-blue-300 py-4 px-6 border-t">
            <div className="flex items-center gap-3 text-sm">
              <span className="bg-yellow-400 text-white text-xs px-2 py-1 rounded-full">
                New
              </span>
              28 Feb 2026
            </div>
            <div className="text-sm">
              Admission For Class XI
            </div>
            <div className="text-right">
              <button className="bg-blue-800 text-white px-4 py-2 rounded-full text-sm hover:opacity-90">
                Download
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NoticePage;