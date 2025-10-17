import { useState } from "react";
import ResponseData from "./ui/ResponseData";
import { FileText, SunMoon } from "lucide-react";

const ResponseBox = ({resData}) => {
  const [theme, setTheme] = useState("monokai");
  const changeTheme = ()=>{
    if(theme == 'monokai'){
      setTheme('rjv-default')
    }else{
      setTheme('monokai')
    }
  }
  
  return (
    <section className="bg-white mt-4 mx-3 px-8 py-4 shadow-md rounded-xl">
      <div className="flex justify-between items-center pr-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
          <h2 className="text-lg font-semibold">Response</h2>
        </div>
        <button
          onClick={changeTheme}
          title="Switch theme"
          className="hover:bg-gray-200 cursor-pointer transition-all rounded-full p-1"
        >
          <SunMoon />
        </button>
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
