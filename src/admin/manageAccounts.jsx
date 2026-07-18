import React, { useState } from "react";

function ManageAccounts() {
  const teacherSubjects = [
    {
      teacher: "Ms. Jamie Chico",
      subject: "IPT102 - [ Subject Title ]",
    },
    {
      teacher: "Mr. John Cruz",
      subject: "CC103 - Programming 2",
    },
    {
      teacher: "Mrs. Reny Baterbonia",
      subject: "REN3 - Life & Work of Rene",
    },
  ];

  const sections = [
    "BSIT 1A",
    "BSIT 1B",
    "BSIT 2A",
    "BSIT 2B",
    "BSIT 3A",
  ];

  const [selectedTeacher, setSelectedTeacher] = useState(teacherSubjects[0]);
  const [selectedSection, setSelectedSection] = useState(sections[0]);

  const handleTeacherChange = (e) => {
    const teacher = teacherSubjects.find(
      (t) => t.teacher === e.target.value
    );
    setSelectedTeacher(teacher);
  };

  return (
    <div className="h-full pl-[55%] md:pl-88 font-RB">
      <div className="p-10">
        {/* Header */}
        <div className="flex justify-between">
          <div className="font-medium">
            <h1 className="text-4xl">Manage Teacher Accounts</h1>
            <h1 className="text-xl text-black/50">
              Add teachers and assign the subjects they'll grade.
            </h1>
          </div>
          <h1 className="font-medium text-[#996400]">ADMIN</h1>
        </div>

        {/*Body para kay rene*/}
        <div className="mt-25 space-y-8">
          {/*Teacher Account*/}
          <div className="border border-[#4E3404]/50 p-6 rounded-xl font-medium space-y-4 drop-shadow-lg/20 bg-white">
            <h1 className="text-2xl">Teacher Accounts</h1>

            <div className="flex justify-between border-b py-2 mt-5">
              <p className="text-sm">
                Marvic Ablaza | SIA101 - System Integration and Architecture 1 |
                BSIT 1B
              </p>

              <button className="w-7 h-7 rounded border border-gray-300 text-gray-500 hover:bg-red-500 hover:text-white transition">
                ✕
              </button>
            </div>

            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Full Name"
                className="flex-1 border border-black/50 rounded-lg p-3 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400"
              />

              <button
                className="bg-[#3B8126] text-white px-6 rounded-lg
                cursor-pointer active:scale-95 hover:bg-[#2f6d1f] transition"
              >
                Add Teacher
              </button>
            </div>
          </div>

          {/*Assign Subject*/}
          <div className="border border-[#4E3404]/50 p-6 rounded-xl font-medium space-y-4 drop-shadow-lg/20 bg-white">
            <h1 className="text-2xl">Assign Subject</h1>

            <div className="mt-5 flex flex-col lg:flex-row gap-4 text-black/50 text-sm font-medium ">
              {/* Teacher */}
              <select
                value={selectedTeacher.teacher}
                onChange={handleTeacherChange}
                className="border border-black/40 rounded-lg  p-3 w-full focus:outline-none 
                        focus:ring-2 focus:ring-green-400"
              >
                {teacherSubjects.map((item) => (
                  <option key={item.teacher} value={item.teacher}>
                    {item.teacher}
                  </option>
                ))}
              </select>

              {/* Subject */}
              <input
                type="text"
                value={selectedTeacher.subject}
                readOnly
                className="border border-black/40 rounded-lg p-3 w-full "
              />

              {/* Section */}
              <select
                value={selectedSection}
                onChange={(e) => setSelectedSection(e.target.value)}
                className="border border-black/40 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-400"
              >
                {sections.map((section) => (
                  <option key={section} value={section}>
                    {section}
                  </option>
                ))}
              </select>

              {/* Assign */}
              <button className="bg-[#3B8126] text-white px-8 rounded-lg hover:bg-[#3B8126] active:scale-95 transition">
                Assign
              </button>
            </div>

            <div className="mt-5 bg-[#A0FBA3]/20 border border-black/50 rounded-lg p-3  text-black/50 font-medium">
              Assigning a subject/section here is what makes it appear in that
              teacher's "My Sections" view.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageAccounts;