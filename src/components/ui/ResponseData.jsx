import ReactJson from "@microlink/react-json-view";
import { useState } from "react";


const ResponseData = ({ resData,theme }) => {
  return (
    <>
    <p className="text-sm font-semibold mt-4">Response Body:</p>
    <div
      className={`my-2 rounded-md max-h-[70vh] overflow-auto ${
        theme == "monokai" ? "bg-[#272822]" : "bg-gray-100 border border-gray-200"
      } p-3`}
    >
      <ReactJson
        src={resData}
        name="userData"
        theme={theme}
        enableClipboard={false}
        displayObjectSize={false}
        indentWidth={6}
        displayDataTypes={false}
      />
    </div>
    </>
  );
};

export default ResponseData;
