import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";



const footer = () => {
  return (
    <div className="px-60 py-20 bg-emerald-900 text-white text-center mt-20">
      <section className="space-y-4 border-b border-emerald-800 pb-10">
        <h1 className="text-5xl font-bold">KeenKeeper</h1>
        <p className="text-sm text-gray-300">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
        <div className="space-y-2">
          <p className="text-lg font-semibold">Social Links</p>

          <div className="flex justify-center items-center gap-2">
            <div className="bg-white p-1.5 rounded-full text-black text-lg hover:cursor-pointer hover:bg-blue-600 hover:text-white transition-all duration-300">
              <FaSquareFacebook />
            </div>
            <div className="bg-white p-1.5 rounded-full text-black text-lg hover:cursor-pointer hover:bg-fuchsia-600 hover:text-white transition-all duration-300">
              <FaInstagram />
            </div>
            <div className="bg-white p-1.5 rounded-full text-black text-lg hover:cursor-pointer hover:bg-black hover:text-white transition-all duration-300">
              <RiTwitterXFill />
            </div>
          </div>
        </div>
      </section>

      <section className="pt-10 flex justify-between items-center">
        <div className="text-sm text-slate-300">&copy; 2026 KeenKeeper. All rights reserved.</div>
        <ul className="text-sm flex items-center gap-8">
          <li>
            <a href="" className="text-gray-300 hover:text-white">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="" className="text-gray-300 hover:text-white">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="" className="text-gray-300 hover:text-white">
              Cookies
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default footer;
