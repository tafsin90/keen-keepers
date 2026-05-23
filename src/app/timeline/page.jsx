"use client";
import { getTimeline } from "@/utils/timeline";
import { FiPhoneCall } from "react-icons/fi";
import { IoMdText } from "react-icons/io";
import { BsCameraVideo } from "react-icons/bs";
import { useState } from "react";

const typeConfig = {
  Call: {
    icon: FiPhoneCall,
    color: "bg-emerald-100 text-emerald-700",
  },
  Text: {
    icon: IoMdText,
    color: "bg-blue-100 text-blue-700",
  },
  "Video Call": {
    icon: BsCameraVideo,
    color: "bg-purple-100 text-purple-700",
  },
};

const TimelinePage = () => {
  const entries = getTimeline();

  const [filter, setFilter] = useState("All");

  const filteredEntries = filter === "All" ? entries : entries.filter((entry) => entry.type === filter);

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-slate-800 mb-6">Timeline</h1>

        <select onChange={(e) => setFilter(e.target.value)} className="border border-slate-300 rounded-lg px-4 py-2 text-sm bg-white">
          <option>All</option>
          <option>Call</option>
          <option>Text</option>
          <option>Video Call</option>
        </select>
        

        {entries.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-sm p-10 text-center text-slate-400">No check-ins yet. Go connect with a friend!</div>
        ) : (
          <div className="flex flex-col gap-3">
            {filteredEntries.map((entry) => {
              const config = typeConfig[entry.type];
              const Icon = config.icon;
              const date = new Date(entry.date);

              return (
                <div key={entry.id} className="bg-white rounded-2xl shadow-sm p-5 flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${config.color}`}>
                    <Icon className="text-xl" />
                  </div>

                  <div className="flex-1">
                    <p className="font-semibold text-slate-800">{entry.friendName}</p>
                    <p className="text-sm text-slate-500">{entry.type}</p>
                  </div>

                  <div className="text-right">
                    <p className="text-sm font-medium text-slate-700">
                      {date.toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                    <p className="text-xs text-slate-400">
                      {date.toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelinePage;
