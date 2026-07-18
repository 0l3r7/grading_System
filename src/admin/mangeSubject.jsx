import React, { useState } from "react";

function MangeSubject() {
  const [subjects, setSubjects] = useState([]);

  const [subjectCode, setSubjectCode] = useState("");
  const [subjectTitle, setSubjectTitle] = useState("");

  const [activeTeacher] = useState(2);
  const [sectionCovered] = useState(3);

  const addSubject = () => {
    if (!subjectCode.trim() || !subjectTitle.trim()) return;

    setSubjects((prev) => [
      ...prev,
      {
        id: Date.now(),
        code: subjectCode.toUpperCase(),
        title: subjectTitle,
      },
    ]);

    setSubjectCode("");
    setSubjectTitle("");
  };

  const deleteSubject = (id) => {
    setSubjects(subjects.filter((subject) => subject.id !== id));
  };

  return (
    <div className="h-full pl-[55%] md:pl-88 font-RB">
      <div className="p-10">
        {/* Header */}
        <div className="flex justify-between">
          <div className="font-medium">
            <h1 className="text-4xl">Manage Subjects</h1>
            <h1 className="text-xl text-black/50">
              Add or remove subjects available for teacher assignment.
            </h1>
          </div>

          <h1 className="font-medium text-[#996400]">ADMIN</h1>
        </div>

        {/* Statistics */}
        <div className="flex gap-15 mt-25 w-full">
          <div className="drop-shadow-lg/25 bg-white p-4 border border-[#4E3404]/50 w-79.25 rounded-xl">
            <h1 className="text-3xl font-medium">{subjects.length}</h1>
            <h1 className="font-light">Active Subjects</h1>
          </div>

          <div className="drop-shadow-lg/25 bg-white p-4 border border-[#4E3404]/50 w-79.25 rounded-xl">
            <h1 className="text-3xl font-medium">{activeTeacher}</h1>
            <h1 className="font-light">Active Teachers</h1>
          </div>

          <div className="drop-shadow-lg/25 bg-white p-4 border border-[#4E3404]/50 w-79.25 rounded-xl">
            <h1 className="text-3xl font-medium">{sectionCovered}</h1>
            <h1 className="font-light">Sections Covered</h1>
          </div>
        </div>

        {/* Subjects */}
        <div className="mt-10 bg-white border border-[#4E3404]/50 rounded-xl p-6 drop-shadow-lg/25">
          <h1 className="text-2xl font-semibold mb-6">Subjects</h1>

          {/* Subject List */}
          <div className="border-b  overflow-hidden">
            {subjects.length === 0 ? (
              <div className="py-10 text-center text-gray-400">
                No subjects added.
              </div>
            ) : (
              subjects.map((subject) => (
                <div
                  key={subject.id}
                  className="flex justify-between items-start px-5 py-4 border-b last:border-b-0"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <h1 className="font-medium text-xl">
                        {subject.code}
                      </h1>

                      <span className="text-[9px] uppercase px-2 py-1 rounded-full border border-[#0E5A12] bg-green-100 text-green-700">
                        Subject Code
                      </span>
                    </div>

                    <p className="text-gray-500 text-sm font-light">
                      {subject.title}
                    </p>
                  </div>

                  <button
                    onClick={() => deleteSubject(subject.id)}
                    className="w-7 h-7  rounded border border-gray-300 text-gray-500 hover:bg-red-500 hover:text-white transition"
                  >
                    ✕
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Add Subject */}
          <div className="flex gap-3 mt-8">
            <input
              type="text"
              placeholder="Subject Code, e.g. CC101"
              value={subjectCode}
              onChange={(e) => setSubjectCode(e.target.value)}
              className="flex-1 border rounded-lg p-3 outline-none focus:ring-1 focus:ring-green-500"
            />

            <input
              type="text"
              placeholder="Subject Title, e.g. Introduction to Computing"
              value={subjectTitle}
              onChange={(e) => setSubjectTitle(e.target.value)}
              className="flex-2 border rounded-lg p-3 outline-none focus:ring-1 focus:ring-green-500"
            />

            <button
              onClick={addSubject}
              className="bg-[#3B8126] text-white px-8 rounded-lg active:scale-95 hover:bg-[#2d651d] transition"
            >
              Add Subject
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MangeSubject;