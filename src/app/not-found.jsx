"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white px-6 text-center">
      <h1 className="text-8xl font-black text-red-500 ">404</h1>

      <h2 className="text-3xl text-red-300 md:text-5xl font-bold mt-4">Bro really got lost 💀</h2>

      <p className="text-slate-400 mt-4 max-w-md text-lg">Bro… this page is gone gone. Like, vanished.” </p>

      <div className="mt-8 flex gap-4">
        <Link href="/" className="px-6 py-3 rounded-2xl bg-white text-black font-semibold hover:scale-105 hover:bg-slate-200 transition-all duration-300">
          Return Home 🏠
        </Link>

        <button className="px-6 py-3 rounded-2xl border border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white transition-all duration-300" onClick={() => history.back()}>
          Go Back ↩️
        </button>
      </div>

      <p className="mt-10 text-sm text-slate-500 italic">This page straight up dipped from existence. <br /> L rizz navigation moment ✨</p>
    </div>
  );
}
