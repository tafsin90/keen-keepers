import { statusColors } from "@/utils/status";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Friends = ({ friends }) => {

  

  return (
    <div>
      <h1 className="text-2xl font-bold my-6">Friends List</h1>
      <div className="grid grid-cols-4 gap-4 ">
        {friends.map((friend) => (
          <Link href={`/friends/${friend.id}`} key={friend.id}>
            <div className="py-8 px-15 space-y-2 bg-white text-center rounded-lg shadow-sm">
              <Image src={friend.picture} alt={friend.name} width={64} height={64} className="w-20 rounded-full mx-auto object-cover" />

              <h1 className="text-xl font-bold">{friend.name}</h1>
              <p className="text-xs text-slate-500">{friend.days_since_contact}d ago</p>

              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-1">
                  {friend.tags.map((tag, index) => (
                    <div key={index} className="badge bg-emerald-100 text-emerald-900 font-semibold p-3">
                      {tag}
                    </div>
                  ))}
                </div>
                <div className={`${statusColors[friend.status]}`}>{friend.status}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Friends;
