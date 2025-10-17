import { useState } from "react";
import ReactJson from "react-json-view";

const ResponseData = ({ resData,theme }) => {
  return (
    <>
    <p className="text-sm font-semibold mt-4">Response Body:</p>
    <div
      className={`my-2 rounded-md overflow-hidden ${
        theme == "monokai" ? "bg-[#272822]" : "bg-gray-100"
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
      />{" "}
    </div>
    </>
  );
};

export default ResponseData;
