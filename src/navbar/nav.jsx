import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import IitiLogo from "../assets/navLogo/iitiLogo.png";
import { IoIosNotifications } from "react-icons/io";
import { FaBookBookmark } from "react-icons/fa6";

import Notifications from "../notifications/notifications";

function nav() {
  const [showNotification, setShowNotification] = useState(false);

  return (
    <>
      <aside className="font-RB text-white tracking-wide">
        <div
          className="bg-linear-to-b from-[#3B8126] to-[#175005]
                      fixed h-full w-[45%] md:w-87.5
                      p-6 drop-shadow-lg/50"
        >
          {/*IITI LOGO*/}
          <div className="flex justify-center m-6">
            <img
              src={IitiLogo}
              alt="IITI LOGO"
              className="w-39.25 h-39.25"
            />
          </div>

          {/*NAVIGATIONS*/}
          <div className="space-y-10 mt-20">
            {/*GRADE*/}
            <div
              className="space-x-4  flex justify-center p-2 active:scale-95 cursor-pointer
                             border-[0.5px] border-white/27 rounded-xl bg-[#067309] drop-shadow-lg/25"
            >
              <FaBookBookmark className="text-black bg-white p-0.5 w-6 h-6 rounded-md -ml-1" />
              <h1 className="font-medium mr-10">Grades</h1>
            </div>

            {/*NOTIFICATION*/}
            <div
              className="space-x-4 flex justify-center p-2 active:scale-95 cursor-pointer
                           border-[0.5px] border-white/27 rounded-xl bg-[#067309]
                           drop-shadow-lg/25"
              onClick={() => setShowNotification(true)}
            >
              <IoIosNotifications className="text-black bg-white w-6 h-6 rounded-md" />
              <h1 className="font-medium">Notifications</h1>
            </div>
          </div>
        </div>
      </aside>

      {showNotification && (
        <Notifications onClose={() => setShowNotification(false)} />
      )}
    </>
  );
}

export default nav;