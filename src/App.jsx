import { HashRouter, Routes, Route } from "react-router-dom";

import Nav from "./navbar/nav";
import Grade from "./grades/grade";
import Notifications from "./notifications/notifications";
import UploadCSV from "./grades/csv/uploadCSV";
import DownloadCSV from "./grades/csv/downloadCSV";
import MangeSubject from "./admin/mangeSubject";

import NavAdmin from "./navbar/navAdmin";
import DeadlineAndReminders from "./admin/deadlineAndReminders";
import ManageAccounts from "./admin/manageAccounts";

function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Default Grade ni Rene */}
        <Route
          path="/"
          element={
            <>
              <Nav />
              <Grade />
            </>
          }
        />

        {/* Notification ni Rene */}
        <Route path="/notifications" element={<Notifications />} />

        {/* UploadCSV */}
        <Route path="/uploadCSV" element={<UploadCSV />} />

        {/* DownloadCSV */}
        <Route path="/downloadCSV" element={<DownloadCSV />} />

        {/* ADMIN Manage Subject */}
        <Route
          path="/manageSubject"
          element={
            <>
              <NavAdmin />
              <MangeSubject />
            </>
          }
        />

        {/* ADMIN Deadline And Reminders */}
        <Route
          path="/deadlines"
          element={
            <>
              <NavAdmin />
              <DeadlineAndReminders />
            </>
          }
        />

        {/* ADMIN Manage Accounts */}
        <Route
          path="/manage-accounts"
          element={
            <>
              <NavAdmin />
              <ManageAccounts />
            </>
          }
        />
      </Routes>
    </HashRouter>
  );
}

export default App;