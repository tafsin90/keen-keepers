"use client";
import { RxHome } from "react-icons/rx";
import { IoTimeOutline } from "react-icons/io5";
import { TfiStatsUp } from "react-icons/tfi";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="navbar bg-base-100 shadow-sm ">
      <div className="flex-1">
        <a className=" text-2xl font-bold">
          Keen<span className="text-emerald-900">Keeper</span>
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link className={`${pathname === "/" ? "nav-btn " : ""}`} href="/">
              <RxHome />
              Home
            </Link>
          </li>
          <li>
            <Link className={`${pathname === "/timeline" ? "nav-btn " : ""}`} href="/timeline">
              <IoTimeOutline />
              Timeline
            </Link>
          </li>
          <li>
            <Link className={`${pathname === "/stats" ? "nav-btn " : ""}`} href="/stats">
              <TfiStatsUp />
              Stats
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
