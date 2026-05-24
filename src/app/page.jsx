import Friends from "./friends/page";



const page = async () => {
  const res = await fetch("http://localhost:3000/friends.json");
  const friends = await res.json();

  const count = friends.reduce((acc, friend) => {
    if (friend.status === "active") {
      acc.active += 1;
    } else if (friend.status === "inactive") {
      acc.inactive += 1  ;
    } else if (friend.status === "overdue") {
      acc.overdue += 1;
    }
    return acc;
  }, { active: 0, inactive: 0, overdue:0});
  
  return (
    <div className="bg-base-200">
      <div className="flex flex-col flex-1 items-center  bg-base-200 font-sans w-7xl mx-auto py-20 space-y-10">
        <main className="text-center space-y-8">
          <h1 className="text-5xl font-bold">Friends to keep close in your life</h1>
          <p className="text-slate-500 text-center mx-auto w-150">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
          <button className="btn bg-emerald-900 text-white">+ Add Friends</button>
        </main>

        <main className="flex gap-6">
          <div className="py-8 px-15 space-y-2 bg-white text-center rounded-lg shadow-sm">
            <h1 className="text-3xl font-semibold text-emerald-900">{friends.length}</h1>
            <p className="text-lg text-slate-500">Total friends</p>
          </div>
          <div className="py-8 px-15 space-y-2 bg-white text-center rounded-lg shadow-sm">
            <h1 className="text-3xl font-semibold text-emerald-900">{count.active}</h1>
            <p className="text-lg text-slate-500">Active</p>
          </div>
          <div className="py-8 px-15 space-y-2 bg-white text-center rounded-lg shadow-sm">
            <h1 className="text-3xl font-semibold text-emerald-900">{count.inactive}</h1>
            <p className="text-lg text-slate-500">Inactive</p>
          </div>
          <div className="py-8 px-15 space-y-2 bg-white text-center rounded-lg shadow-sm">
            <h1 className="text-3xl font-semibold text-emerald-900">{count.overdue}</h1>
            <p className="text-lg text-slate-500">Overdue</p>
          </div>
        </main>

        <Friends friends={friends}></Friends>
      </div>
    </div>
  );
}

export default page