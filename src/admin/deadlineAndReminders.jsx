import React, { useState } from "react";

function DeadlineAndReminders() {
  const terms = ["Prelim", "Midterm", "Pre-Final", "Final"];

  const [selectedTerm, setSelectedTerm] = useState(terms[0]);
  const [deadline, setDeadline] = useState("");

  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const today = new Date();

  const dueDays = deadline
    ? Math.ceil((new Date(deadline) - today) / (1000 * 60 * 60 * 24))
    : "";

  return (
    <div className="h-full pl-[55%] md:pl-88 font-RB">
      <div className="p-10">
        {/* Header */}
        <div className="flex justify-between">
          <div className="font-medium">
            <h1 className="text-4xl">Deadlines & Reminders</h1>
            <h1 className="text-xl text-black/50">
              Set the per-term submission deadline and notify teachers.
            </h1>
          </div>
          <h1 className="font-medium text-[#996400]">ADMIN</h1>
        </div>

        {/* Reminder */}
        <div className="bg-[#3B8126] p-6  rounded-xl text-white mt-25 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            {deadline && (
              <>
                <h2 className="text-5xl font-medium">{dueDays} Day(s)</h2>
                <p className="text-xl mt-2 font-medium text-white/80">
                  Until{" "}
                  <span className="font-medium">{selectedTerm}</span> grade
                  submission deadline.
                </p>
              </>
            )}
          </div>

          <button className="bg-[#E8A100] active:scale-95 text-black font-semibold px-6 py-3 rounded-lg shadow hover:bg-[#d69500]">
            Send Reminder Now
          </button>
        </div>

        {/* Set Deadline */}
        <div className="mt-8 border border-[#4E3404]/50 p-6 rounded-xl">
          <label className="font-medium">Set Deadline</label>

          <div className="flex flex-col md:flex-row gap-4 mt-6">
            {/* Term Dropdown */}
            <div className="w-full md:w-auto">
              <select
                value={selectedTerm}
                onChange={(e) => setSelectedTerm(e.target.value)}
                className="w-full md:w-56 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                {terms.map((term, index) => (
                  <option key={index} value={term}>
                    {term}
                  </option>
                ))}
              </select>
            </div>

            {/* Calendar */}
            <div className="w-full md:w-auto">
              <input
                type="date"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                className="w-full md:w-56 p-3 border rounded-lg focus:outline-none  focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            {/* Save */}
            <div className="w-full md:w-auto">
              <button className="w-full md:w-auto border border-[#A0FBA3]/20  bg-[#3B8126] text-white p-3 px-8 rounded-xl drop-shadow-lg/50 cursor-pointer active:scale-95">
                Save
              </button>
            </div>
          </div>

          {/* Info */}
          <div className="mt-5 bg-[#A0FBA3]/20 border border-black/40 text-black/50 font-medium p-3 rounded-lg">
            Connects to Calendar automatically once saved — teachers get email +
            in-app reminders as the date nears.
          </div>
        </div>

        {/* Reminder Log */}
        <div className="mt-6 border border-[#4E3404]/50 rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-5 font-medium">
            <h2 className="font-medium text-2xl">Reminder Log</h2>
            <span className="text-sm text-black/50 mr-9">Status</span>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium text-2xl">
                {selectedTerm} deadline reminder sent to 2 teachers.
              </h3>
              <p className="text-sm font-light text-black mt-2">{currentDate}</p>
            </div>

            <span className="bg-[#DF9409] text-white px-10 py-2 rounded-lg active:scale-95 text-sm font-semibold">
              SENT
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeadlineAndReminders;