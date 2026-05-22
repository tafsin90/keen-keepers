
import { FiPhoneCall } from "react-icons/fi";
import { IoMdText } from "react-icons/io";
import { BsCameraVideo } from "react-icons/bs";
import { callToastSuccess, textToastSuccess, videoToastSuccess } from "@/utils/btnToast";

const CheckIn = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h2 className="text-lg font-bold text-emerald-700 mb-4">Quick Check-In</h2>
      <div className="grid grid-cols-3 gap-4">
        <button
          className="flex flex-col items-center gap-2 py-5 rounded-xl border border-slate-100 hover:bg-slate-50 transition text-slate-700 font-medium bg-base-200 hover:cursor-pointer"
          onClick={textToastSuccess}
        >
          <FiPhoneCall className="text-xl" />
          <p>Call</p>
        </button>

        <button
          className="flex flex-col items-center gap-2 py-5 rounded-xl border border-slate-100 hover:bg-slate-50 transition text-slate-700 font-medium bg-base-200 hover:cursor-pointer "
          onClick={callToastSuccess}
        >
          <IoMdText className="text-xl" />
          <p>Text</p>
        </button>

        <button
          className="flex flex-col items-center gap-2 py-5 rounded-xl border border-slate-100 hover:bg-slate-50 transition text-slate-700 font-medium bg-base-200 hover:cursor-pointer"
          onClick={videoToastSuccess}
        >
          <BsCameraVideo className="text-xl" />
          <p>Video Call</p>
        </button>
      </div>
    </div>
  );
};

export default CheckIn;
