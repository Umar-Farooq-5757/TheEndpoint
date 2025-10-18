import React, { useState } from "react";

const RequestBody = () => {
  const [placeholder, setPlaceholder] = useState({ key: "value"});
  const [responseBody, setResponseBody] = useState('')
  return (
    <div className="mt-4">
      <h3 className="text-[#36465c] font-medium text-[15px]">Request Body</h3>
      <h4 className="font-semibold text-[15px] my-2">
        Content-Type:{" "}
        <span className="rounded-md bg-gray-100 border border-gray-200 shadow-xs py-[2px] px-3">
          application/json
        </span>
      </h4>
      <textarea
        className="border border-gray-400 min-h-48 font-mono resize-none w-full mt-3 py-[2px] px-3 rounded-md shadow-sm outline-[#2758fa] transition-all"
        id="my-textarea"
        value={responseBody} 
        onChange={(e)=>setResponseBody(e.target.value)} 
        placeholder={JSON.stringify(placeholder)}
      />
    </div>
  );
};

export default RequestBody;
