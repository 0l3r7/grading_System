import React from 'react'
import { GoDotFill } from "react-icons/go";

import { IoIosCloseCircleOutline } from "react-icons/io";


function Notifications({ onClose }) {

const notifications = [
  {
    id: 1,
    message: "Midterm grades are due soon — please submit by Jul 24.",
    time: "Jul 12, 9:03 AM",
    unread: true,
  },
  {
    id: 2,
    message: "Prepare for The Second Coming of Rene.",
    time: "Jul 10, 6:56 AM",
    unread: false,
  },
];


  return (
    <div className="fixed inset-0 bg-black/40   flex font-RB items-center justify-center z-50">
      <div className="bg-white w-fit   rounded-xl border-2 border-[#4E3404]/50 ">

        <div className='flex justify-between  p-4 border-b-2 border-gray-300'>

            <h1 className='text-black/50 '>NOTIFICATIONS</h1>

             <button onClick={onClose}>
            <IoIosCloseCircleOutline className='w-6 h-6 active:scale-95 cursor-pointer' />
            </button>

        </div>
        {/*Mensahe mula kay Rene */}
        <div>
            
            <div>
            {notifications.map((notification) => (
                <div
                key={notification.id}
                className="p-4  hover:bg-gray-50 cursor-pointer
                             flex  gap-5"
                >
                <div className=''>
                  <GoDotFill className="text-red-500 text-center text-3xl" />
                </div>  

                <div className=' border-b border-black/20 w-md'>
                    <h2 className="font-semibold text-black">
                    {notification.message}
                    </h2>


                    <p className="text-xs text-gray-400 mt-2">
                    {notification.time}
                    </p>
                </div>
                </div>
            ))}
            </div>

        </div>
      </div>
    </div>
  );
}

export default Notifications;
