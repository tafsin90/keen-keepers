"use client";

import { FiPhoneCall } from "react-icons/fi";
import { IoMdText } from "react-icons/io";
import { BsCameraVideo } from "react-icons/bs";
import { addTimelineEntry } from "@/utils/timeline";

const CheckIn = ({ friendName, friendId }) => {
  const handleCheckIn = (type) => {
    addTimelineEntry({ friendName, friendId, type });
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h2 className="text-lg font-bold text-emerald-700 mb-4">Quick Check-In</h2>
      <div className="grid grid-cols-3 gap-4">
        <button
          className="flex flex-col items-center gap-2 py-5 rounded-xl border border-slate-100 hover:bg-slate-50 transition text-slate-700 font-medium bg-base-200 hover:cursor-pointer"
          onClick={() => handleCheckIn("Call")}
        >
          <FiPhoneCall className="text-xl " />
          <p>Call</p>
        </button>

        <button
          className="flex flex-col items-center gap-2 py-5 rounded-xl border border-slate-100 hover:bg-slate-50 transition text-slate-700 font-medium bg-base-200 hover:cursor-pointer"
          onClick={() => handleCheckIn("Text")}
        >
          <IoMdText className="text-xl" />
          <p>Text</p>
        </button>

        <button
          className="flex flex-col items-center gap-2 py-5 rounded-xl border border-slate-100 hover:bg-slate-50 transition text-slate-700 font-medium bg-base-200 hover:cursor-pointer"
          onClick={() => handleCheckIn("Video Call")}
        >
          <BsCameraVideo className="text-xl" />
          <p>Video Call</p>
        </button>
      </div>
    </div>
  );
};

export default CheckIn;
