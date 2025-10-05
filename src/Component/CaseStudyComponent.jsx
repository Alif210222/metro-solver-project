import React from "react";
import cardImage from "../assets/chart Image.jpg"
import { CiCalendarDate } from "react-icons/ci";


const CaseStudyComponent = () => {
  return (
    <div className="min-h-screen bg-[#1E2532] text-white flex flex-col items-center px-6  pt-20">
      {/* Title Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-3">
          The Success Stories, <br /> Case Studies & Blog
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Based on the description of Metro Solver and the image provided, here
          is a 6-step process that Metro Solver uses to scale a customer's
          business
        </p>
      </div>

      {/* Tabs */}
      <div className="md:flex hidden gap-30 mb-12">
        <button className="bg-[#2A3142] text-gray-300 font-medium py-2 px-20 rounded-full">
          Success Stories
        </button>
        <button className="bg-[#320a49] text-white font-medium py-2 px-20 rounded-full shadow-lg border border-[#c466f0]">
          Case Studies
        </button>
        <button className="bg-[#2A3142] text-gray-300 font-medium py-2 px-20 rounded-full">
          Blog and News
        </button>
      </div>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">

        {/* -------- Card 1 -------- */}
        <div className="bg-[#2A3142] rounded-2xl overflow-hidden">
          <img
            src={cardImage}
            alt="Metro Systems"
            className="w-full h-52 object-cover"
          />
         <div className="p-6">
              <h2 className="text-lg font-semibold mb-2">
                The Future of Metro Systems by Company
              </h2>
              <p className="text-white text-sm mb-4 mt-6">
                Provide a quick introduction to your metro solver company.
                Highlight your mission, core expertise
              </p>

              <div className="flex flex-wrap gap-3">
               
                <span className= " flex gap-2 justify-center items-center  bg-white/10 text-gray-200 text-sm mt-8 px-4 py-2 rounded-full">
                 <CiCalendarDate className="w-5 h-5" /> <span>
                    Mar 14,2025 </span>
                </span>
              </div>
            </div>
        </div>

        {/* -------- Card 2 (Gradient Border) -------- */}
        <div className="p-[1px] rounded-2xl bg-gradient-to-b from-[#7b0ce2] to-[#ece9f1]">
          <div className="bg-gradient-to-b from-[#7817b9] via-[#3f2e5a]  to-[#42219e] rounded-2xl overflow-hidden">
            <img
              src={cardImage}
              alt="Metro Systems"
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-2">
                The Future of Metro Systems by Company
              </h2>
              <p className="text-white text-sm mb-4 mt-6">
                Provide a quick introduction to your metro solver company.
                Highlight your mission, core expertise
              </p>

              <div className="flex flex-wrap gap-3">
               
               <span className= " flex gap-2 justify-center items-center  bg-white/10 text-gray-200 text-sm mt-8 px-4 py-2 rounded-full">
                 <CiCalendarDate className="w-5 h-5" /> <span>
                    Mar 14,2025 </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* -------- Card 3 -------- */}
        <div className="bg-[#2A3142] rounded-2xl overflow-hidden">
          <img
            src={cardImage}
            alt="Metro Systems"
            className="w-full h-52 object-cover"
          />
      <div className="p-6">
              <h2 className="text-lg font-semibold mb-2">
                The Future of Metro Systems by Company
              </h2>
              <p className="text-white text-sm mb-4 mt-6">
                Provide a quick introduction to your metro solver company.
                Highlight your mission, core expertise
              </p>

              <div className="flex flex-wrap gap-3">
               
                <span className= " flex gap-2 justify-center items-center  bg-white/10 text-gray-200 text-sm mt-8 px-4 py-2 rounded-full">
                 <CiCalendarDate className="w-5 h-5" /> <span>
                    Mar 14,2025 </span>
                </span>
              </div>
            </div>
        </div>

      </div>

      {/* View More Button */}
      
         <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-[#5B2BE0] to-[#d5d3d6] mt-14">
  <button className="bg-[#320a49] text-white font-medium py-3 px-10 rounded-full transition">
    View More
  </button>
</div>
      
     
    </div>
  );
};

export default CaseStudyComponent;
