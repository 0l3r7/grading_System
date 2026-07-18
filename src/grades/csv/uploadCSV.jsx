import React from "react";
import { FiUpload } from "react-icons/fi";
import { IoIosCloseCircleOutline } from "react-icons/io";

function UploadCSV({ onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 font-RB"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl p-6 shadow-xl  border  border-[#0E5A12]
                    drop-shadow-lg/50"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-xl font-medium ">Upload the Completed file</h1>

          <button
            onClick={onClose}
            className="text-2xl hover:text-red-600 cursor-pointer active:scale-95"
          >
            <IoIosCloseCircleOutline/>
          </button>
        </div>

        <div className="border border-[#0E5A12] bg-[#A0FBA3]/20 p-6 flex ">

            <div className="flex justify-center items-center gap-4">

                <div className="relative">
                <label className="flex items-center gap-2 border rounded-lg p-3 cursor-pointer  bg-[#9CEA85]">
                <FiUpload className="text-xl" />

                <input
                    type="file"
                    accept=".csv"
                    className="hidden"
                />
                </label>
                </div>

                <div className=" text-xl font-light">
                    <h1>Drop the completed CSV here, or <strong>browse</strong> to select a file. The raw values you entered become
                    <br />computed grades once uploaded.</h1>
                </div>

                {/*Upload Csv Button*/}
                <div>
                    <label className="w-full bg-[#F2AC2A] text-black px-4
                                    cursor-pointer active:scale-95
                                    drop-shadow-lg/50 py-3 rounded-lg flex justify-center">
                    Upload & Compute
                    <input
                        type="file"
                        accept=".csv"
                        className="hidden"
                    />
                    </label>
                </div>

            </div>

        </div>

      </div>
    </div>
  );
}

export default UploadCSV;