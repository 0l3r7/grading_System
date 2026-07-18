import React from "react";
import { BsFiletypeCsv } from "react-icons/bs";

import { IoIosCloseCircleOutline } from "react-icons/io";

function DownloadCSV({ onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 font-RB"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl p-6 shadow-xl border border-[#0E5A12] drop-shadow-lg/50"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-xl font-medium">
            1. Download the section template
          </h1>

          <button
            onClick={onClose}
            className="text-2xl hover:text-red-600 cursor-pointer active:scale-95"
          >
            <IoIosCloseCircleOutline />
          </button>
        </div>

        <div className="border border-[#0E5A12] bg-[#A0FBA3]/20 p-6 flex">
          <div className="flex justify-center items-center gap-4">

            {/* Download Icon */}
            <div className="relative">
              <div className="flex items-center gap-2 border rounded-lg p-3 bg-[#9CEA85]">
                <BsFiletypeCsv className="text-xl" />
              </div>
            </div>


            <div className="text-xl font-light">
              <h1>
                 <strong>CC101_BSIT1B_grades.csv — </strong>Student No., Name, Prelim, Midterm, Pre-final, Final.
              </h1>
            </div>

            {/* Download Button */}
            <div>
              <button
                className="w-full bg-white border border-[#1C6100] text-black px-4
                           cursor-pointer active:scale-95
                           drop-shadow-lg/50 py-3 rounded-lg"
              >
                Download
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default DownloadCSV;