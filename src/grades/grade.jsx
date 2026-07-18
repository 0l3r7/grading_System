import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdWavingHand } from "react-icons/md";

import { FaSquare } from "react-icons/fa";

import { LuDownload } from "react-icons/lu"

import { FiUpload } from "react-icons/fi";

import UploadCSV from "./csv/uploadCSV";
import DownloadCSV from "./csv/downloadCSV";



function grade() {
  const [teacherName,setTeacherName] = useState("RENE");
  const [grades, setGrades] = useState({});

  const [showUploadCSV, setShowUploadCSV] = useState(false);
  const [showDownloadCSV, setShowDownloadCSV] = useState(false);

  const sections = [
    {
      section: "BSIT 1A - CC101 - Introduction to Computing",
      students: [
        { id: "202410001", name: "Juan Dela Cruz" },
        { id: "202410002", name: "Maria Santos" },
        { id: "202410003", name: "John Reyes" },
        { id: "202410004", name: "Angela Cruz" },
        { id: "202410005", name: "Mark Bautista" },
      ],
    },
    {
      section: "BSIT 1B - CC101 - Introduction to Computing",
      students: [
        { id: "20210006", name: "Richard Grayson" },
        { id: "20210007", name: "Abegail Ramos" },
        { id: "20210008", name: "Christian Garcia" },
        { id: "20210009", name: "Ryan Dela Cruz" },
        { id: "20210010", name: "Gerwin Niño" },
      ],
    },
    {
      section: "BSIT 1C - CC101 - Introduction to Computing",
      students: [
        { id: "20210011", name: "Nicole Perez" },
        { id: "20210012", name: "Joshua Lim" },
        { id: "20210013", name: "Patricia Flores" },
        { id: "20210014", name: "Kevin Mendoza" },
        { id: "20210015", name: "Sophia Ramos" },
      ],
    },
    {
      section: "BSIT 1F - CC101 - Introduction to Computing",
      students: [
        { id: "202410016", name: "Ethan Villanueva" },
        { id: "202410017", name: "Daniel Gomez" },
        { id: "202410018", name: "Kimberly Torres" },
        { id: "202410019", name: "Aaron Cruz" },
        { id: "202410020", name: "Jasmine Rivera" },
      ],
    },
    {
      section: "BSIT 1G - CC101 - Introduction to Computing",
      students: [
        { id: "202410021", name: "Nathan Reyes" },
        { id: "202410022", name: "Isabella Lopez" },
        { id: "202410023", name: "Matthew Santos" },
        { id: "202410024", name: "Chloe Garcia" },
        { id: "202410025", name: "Miguel Hernandez" },
      ],
    },
  ];

  const [selectedSection, setSelectedSection] = useState(sections[0].section);

  const currentSection = sections.find(
    (section) => section.section === selectedSection
  );

  const semester = [
    "1ST SEMESTER AY 2025 - 2026",
    "2nd SEMESTER AY 2025 - 2026",
  ];

  const handleGradeChange = (studentId, field, value) => {
    let num = Number(value);

    if (value === "") num = "";

    if (num > 100) num = 100;
    if (num < 0) num = 0;

    setGrades((prev) => ({
      ...prev,
      [studentId]: {
        ...prev[studentId],
        [field]: num,
      },
    }));
  };

  const getGrades = (studentId) => {
    const g = grades[studentId] || {};

    const prelim = Number(g.prelim || 0);
    const rawMid = Number(g.rawMid || 0);
    const rawPre = Number(g.rawPre || 0);
    const rawFinal = Number(g.rawFinal || 0);

    // 30% Prelim + 70% Raw Midterm
    const midterm = (prelim * 0.30) + (rawMid * 0.70);

    // 30% Midterm + 70% Raw Pre-final
    const prefinal = (midterm * 0.30) + (rawPre * 0.70);

    // 30% Pre-final + 70% Raw Final
    const finalGrade = (prefinal * 0.30) + (rawFinal * 0.70);

    return {
      midterm: midterm.toFixed(2),
      prefinal: prefinal.toFixed(2),
      final: finalGrade.toFixed(2),
    };
  };


  return (
    <div className='h-full pl-[55%] md:pl-88 font-RB '>
      <div className="p-10">

       {/*HELLO TEACHER NAME */}
        <div className="">
            <div className="flex gap-2 font-medium text-2xl font-RB">
              <h1>Hello,</h1>
              <h1 className="text-[#DF9409]">{teacherName}</h1>
              < MdWavingHand className="text-[#DF9409]"/>
            </div>
            <div className="font-extralight text-xs "> 
              <p className="">Select a subject and section to view the class ledger.</p>
            </div>
        </div>

        {/*Section Dropdown*/}
        <div className="flex justify-end  font-medium">
          <select
            value={selectedSection}
            onChange={(e) => setSelectedSection(e.target.value)}
            className="w-fit p-3 rounded-lg border border-black/25 cursor-pointer focus:ring-1 focus:ring-green-500 "
          >
            {sections.map((section, index) => (
              <option key={index} value={section.section}>
                {section.section}
              </option>
            ))}
          </select>
        </div>


        {/*Grade Student*/}
        <div className="mt-10">
            <div className="w-ull h-fit border rounded-2xl p-6 border-[#4E3404]/50">

                <div className="flex justify-between ">
                    {/*Select Semester*/}
                      <div className="relative w-fit mt-3">
                        {/* Floating Label */}
                        <label
                          htmlFor="semester"
                          className="absolute -top-3 left-10 bg-white px-2 text-sm text-gray-500"
                        >
                          Select Semester
                        </label>


                        {/* Select */}
                        <select
                          id="semester"
                          className="w-full h-14 rounded-md border border-black/35 px-4 pr-10 font-semibold
                          text-gray-900 focus:outline-none focus:ring-1 focus:ring-green-500"
                        >
                          {semester.map((item, index) => (
                            <option key={index} value={item}>
                              {item}
                            </option>
                          ))}
                        </select>

                      </div>

                    {/* Upload/Download CSV | Save Grades buttons */}
                    <div className="flex space-x-6  h-12.5  mt-3 font-medium">

                      {/* Upload CSV */}
                      <div className="bg-white border border-black/12 flex  w-44
                                      rounded-xl drop-shadow-lg/25 cursor-pointer active:scale-95
                                       text-center justify-center gap-2 " 
                                         onClick={() => setShowUploadCSV(true)} >
                        <button className="">Upload CSV  </button> 
                          <FiUpload className="mt-4 "/>
                        
                      </div>

                      {/* Download CSV */}
                      <div className="bg-white border border-black/12  w-44 
                                      rounded-xl drop-shadow-lg/25 cursor-pointer active:scale-95
                                      text-center flex justify-center gap-2"  
                                      onClick={() => setShowDownloadCSV(true)} >
                        <button className="">Download CSV  </button>
                        <LuDownload className="mt-4 "/>
                      </div>

                      <div className="bg-[#3B8126] text-white border border-black/12 flex w-44 px-8 
                                      rounded-xl drop-shadow-lg/25 cursor-pointer active:scale-95
                                      text-center justify-center"   >
                        <button className="">Save Grades</button>
                      </div>
                          
                    </div>
                </div>

              {/* Grade Student*/}
              <div className="overflow-x-auto font-RB mt-15">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="w-full border-b border-black/50 text-sm">
                      <th className="font-light text-xs py-2">Student No.</th>
                      <th className="font-light text-xs py-2">Name</th>
                      <th className="font-light text-xs py-2">Prelim</th>
                      <th className="font-light text-xs py-2">RAW MIDTERM</th>
                      <th className="font-light text-xs py-2">MIDTERM</th>
                      <th className="font-light text-xs py-2">RAW PRE - FINAL</th>
                      <th className="font-light text-xs py-2">PRE - FINAL </th>
                      <th className="font-light text-xs py-2">RAW FINAL</th>
                      <th className="font-light text-xs py-2">FINAL</th>

                    </tr>
                  </thead>
                  <tbody>
                    {currentSection.students.map((student) => {
                      const result = getGrades(student.id);

                      return (
                        <tr
                          key={student.id}
                          className="border-b font-light text-xs border-gray-200 hover:bg-gray-50"
                        >
                          {/* Student Number */}
                          <td className="py-3 px-2">{student.id}</td>

                          {/* Student Name */}
                          <td className="py-3 px-2 whitespace-nowrap">
                            {student.name}
                          </td>

                          {/* Prelim */}
                          <td className="py-3 px-2 text-center">
                            <input
                              type="number"
                              min={0}
                              max={100}
                              value={grades[student.id]?.prelim ?? ""}
                              onChange={(e) =>
                                handleGradeChange(student.id, "prelim", e.target.value)
                              }
                              className="w-16 border border-[#4E3404]/50 rounded text-center outline-none bg-[#DF9409]/50"
                            />
                          </td>

                          {/* Raw Midterm */}
                          <td className="py-4 px-2 text-center">
                            <input
                              type="number"
                              min={0}
                              max={100}
                              value={grades[student.id]?.rawMid ?? ""}
                              onChange={(e) =>
                                handleGradeChange(student.id, "rawMid", e.target.value)
                              }
                              className="w-16 border rounded text-center outline-none"
                            />
                          </td>

                          {/* Midterm */}
                          <td className="py-3 px-2 text-center">
                            <input
                              type="text"
                              readOnly
                              value={result.midterm}
                              className={`w-16 border rounded text-center ${
                                Number(result.midterm) < 75
                                  ? "bg-[#B22B2D]/50 text-red-900 font-semibold"
                                  : "bg-green-100"
                              }`}
                            />
                          </td>

                          {/* Raw Pre-final */}
                          <td className="py-3 px-2 text-center">
                            <input
                              type="number"
                              min={0}
                              max={100}
                              value={grades[student.id]?.rawPre ?? ""}
                              onChange={(e) =>
                                handleGradeChange(student.id, "rawPre", e.target.value)
                              }
                              className="w-16 border rounded text-center outline-none"
                            />
                          </td>

                          {/* Pre-final */}
                          <td className="py-3 px-2 text-center">
                            <input
                              type="text"
                              readOnly
                              value={result.prefinal}
                              className={`w-16 border rounded text-center ${
                                Number(result.prefinal) < 75
                                  ? "bg-[#B22B2D]/50 text-red-900 font-semibold"
                                  : "bg-green-100"
                              }`}
                            />
                          </td>

                          {/* Raw Final */}
                          <td className="py-3 px-2 text-center">
                            <input
                              type="number"
                              min={0}
                              max={100}
                              value={grades[student.id]?.rawFinal ?? ""}
                              onChange={(e) =>
                                handleGradeChange(student.id, "rawFinal", e.target.value)
                              }
                              className="w-16 border rounded text-center outline-none"
                            />
                          </td>

                          {/* Final */}
                          <td className="py-3 px-2 text-center">
                            <input
                              type="text"
                              readOnly
                              value={result.final}
                              className={`w-16 border rounded text-center ${
                                Number(result.final) < 75
                                  ? "bg-[#B22B2D]/50 text-red-900 font-semibold"
                                  : "bg-green-100"
                              }`}
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/*Reminder*/}
            <div className="flex space-x-10 pt-6">

                <div className="flex gap-2 justify-center">
                  <FaSquare className="text-[#DF9409]/50 text-center "/>
                  <h1 className="font-light text-xs">TEACHER - ENTERED</h1>
                </div>

                <div className="flex gap-2 justify-center">
                  <FaSquare className="text-[#3B8126]/50 text-center "/>
                  <h1 className="font-light text-xs">AUTO - COMPUTED ( 30% PRIOR + 70% RAW )</h1>
                </div>

                                <div className="flex gap-2 justify-center">
                  <FaSquare className="text-[#B22B2D]/50 text-center "/>
                  <h1 className="font-light text-xs">FAILED GRADES</h1>
                </div>
            </div>

        </div>
      </div>
    {showUploadCSV && (
      <UploadCSV
        onClose={() => setShowUploadCSV(false)}
      /> 
    )}

    {showDownloadCSV && (
      <DownloadCSV
          onClose={() => setShowDownloadCSV(false)}
        />
      )}

    </div>

  )
}

export default grade
