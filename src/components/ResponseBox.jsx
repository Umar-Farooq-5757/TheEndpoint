import { useState } from "react";
import ResponseData from "./ui/ResponseData";
import { FileText, SunMoon, X } from "lucide-react";

const ResponseBox = ({ resData, setResData }) => {
  const [theme, setTheme] = useState("rjv-default");
  const changeTheme = () => {
    if (theme == "monokai") {
      setTheme("rjv-default");
    } else {
      setTheme("monokai");
    }
  };
  return (
    <section className="bg-white mt-4 mx-3 px-8 py-4 shadow-md rounded-xl">
      <div className="flex justify-between items-center pr-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
          <h2 className="text-lg font-semibold">Response</h2>
        </div>
        <div className="flex justify-between items-center gap-2">
          <button
            onClick={() => setResData({})}
            title="Clear"
            className={`hover:bg-gray-200 cursor-pointer transition-all rounded-full p-1 ${
              Object.keys(resData).length ? "" : "hidden"
            }`}
          >
            <X />
          </button>
          <button
            onClick={changeTheme}
            title="Switch theme"
            className="hover:bg-gray-200 cursor-pointer transition-all rounded-full p-1"
          >
            <svg viewBox="0 0 100 100" width="22px" height="22px">
              <g transform="translate(0, 0)">
                <path fill="#000000" d="M 50 5 A 45 45 0 0 0 50 95 L 50 5 Z" />
                <path fill="#FFFFFF" d="M 50 5 A 45 45 0 0 1 50 95 L 50 5 Z" />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke={"#000"}
                  strokeWidth="4"
                  fill="none"
                />
              </g>
            </svg>
          </button>
        </div>
      </div>

      <div>
        {Object.keys(resData).length === 0 ? (
          <div className="my-10 flex flex-col items-center gap-2">
            <div className="bg-gray-100 p-3 rounded-full">
              <FileText className="size-7 text-gray-500" />
            </div>
            <h3 className="font-semibold">No response yet</h3>
            <p className="text-gray-500 text-sm">
              Response of request will be shown here
            </p>
          </div>
        ) : (
          <ResponseData resData={resData} theme={theme} />
        )}
      </div>
    </section>
  );
};

export default ResponseBox;
