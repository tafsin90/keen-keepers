import Image from "next/image";
import { statusColors } from "@/utils/status";

import { RiNotificationSnoozeLine } from "react-icons/ri";
import { FaArchive } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import { IoMdText } from "react-icons/io";
import { BsCameraVideo } from "react-icons/bs";


const FriendDetailsPage = async ({ params }) => {
  const { friendid } = await params;

  const res = await fetch("http://localhost:3000/friends.json");
  const friends = await res.json();

  const friend = friends.find((f) => f.id === parseInt(friendid));

  if (!friend) return <div className="p-8 text-red-500">Friend not found.</div>;

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-5xl mx-auto grid grid-cols-3 gap-4">
        {/* left-side */}
        <div className="flex flex-col gap-4">
          {/* Profile Card */}
          <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center text-center gap-3">
            <Image src={friend.picture} alt={friend.name} width={80} height={80} className="rounded-full " />
            <h1 className="text-xl font-bold">{friend.name}</h1>

            <div className={`${statusColors[friend.status]}`}>{friend.status}</div>

            <div className="flex gap-2">
              {friend.tags.map((tag, i) => (
                <span key={i} className="badge bg-emerald-200 text-emerald-900 font-semibold p-3">
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-sm text-slate-500 italic">&quot;{friend.bio}&quot;</p>
            <p className="text-xs text-slate-400">{friend.email}</p>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-1">
            <button className="rounded-2xl shadow-sm flex items-center justify-center gap-1 px-5 py-4 text-sm font-medium text-slate-700 bg-white">
              <RiNotificationSnoozeLine className="text-lg" />
              <p>Snooze 1 week</p>
            </button>

            <button className="rounded-2xl shadow-sm w-full flex items-center justify-center gap-2 px-5 py-4 text-sm font-medium text-slate-700 bg-white">
              <FaArchive />
              <p>Archive</p>
            </button>

            <button className="rounded-2xl shadow-sm w-full flex items-center justify-center gap-2 px-5 py-4 text-sm font-medium text-red-500 bg-white">
              <RiDeleteBinLine className="text-lg" />
              <p>Delete</p>
            </button>
          </div>
        </div>

        {/* right-side */}
        <div className="col-span-2 flex flex-col gap-4">
          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
              <p className="text-2xl font-bold text-emerald-700">{friend.days_since_contact}</p>
              <p className="text-sm text-slate-500 mt-1">Days Since Contact</p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
              <p className="text-2xl font-bold text-emerald-700">{friend.goal}</p>
              <p className="text-sm text-slate-500 mt-1">Goal (days)</p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
              <p className="text-2xl font-bold text-emerald-700">
                {new Date(friend.next_due_date).toLocaleDateString("en-us", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
              <p className="text-sm text-slate-500 mt-1">Next Due Date</p>
            </div>
          </div>

          {/* Relationship Goal */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-bold text-emerald-700">Relationship Goal</h2>
              <button className="text-sm border border-slate-200 rounded-lg px-4 py-1 hover:bg-slate-100 transition">Edit</button>
            </div>
            <p className="text-slate-600">
              Connect every <span className="font-bold">{friend.goal} days</span>
            </p>
          </div>

          {/* Quick Check-In */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-lg font-bold text-emerald-700 mb-4">Quick Check-In</h2>
            <div className="grid grid-cols-3 gap-4">
              <button className="flex flex-col items-center gap-2 py-5 rounded-xl border border-slate-100 hover:bg-slate-50 transition text-slate-700 font-medium">
                <FiPhoneCall className="text-xl" />
                <p>Call</p>
              </button>

              <button className="flex flex-col items-center gap-2 py-5 rounded-xl border border-slate-100 hover:bg-slate-50 transition text-slate-700 font-medium">
                <IoMdText className="text-xl" />
                <p>Text</p>
              </button>

              <button className="flex flex-col items-center gap-2 py-5 rounded-xl border border-slate-100 hover:bg-slate-50 transition text-slate-700 font-medium">
                <BsCameraVideo className="text-xl"/>
                <p>Video Call</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetailsPage;
