import { useState } from "react";
import Logo from "./ui/Logo";
import Dropdown from "./ui/Dropdown";
import { Send } from "lucide-react";
import getMethod from "../utils/getMethod";
import RequestBody from "./RequestBody";

const RequestBox = ({ setResData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("GET");
  const [URL, setURL] = useState("");

  const methods = [
    {
      type: "GET",
      backgroundColor: "#ecfdf5",
      textColor: "#009966",
    },
    {
      type: "POST",
      backgroundColor: "#eff6ff",
      textColor: "#155dfc",
    },
    {
      type: "PUT",
      backgroundColor: "#fff7ed",
      textColor: "#f5520c",
    },
    {
      type: "DELETE",
      backgroundColor: "#fef2f2",
      textColor: "#e7000b",
    },
  ];
  const [methodBoxBackgroundColor, setMethodBoxBackgroundColor] =
    useState("#ecfdf5");
  const [methodBoxTextColor, setMethodBoxTextColor] = useState("#009966");

  return (
    <section className="bg-white mt-10 mx-3 px-8 py-4 shadow-md rounded-xl">
      <div className="flex gap-3">
        <Logo padding="6px" size={"16px"} />
        <h2 className="font-medium text-lg">New Request</h2>
      </div>
      <div className="mt-4">
        <h3 className="text-[#36465c] font-medium text-[15px]">Method & URL</h3>
        <div className="my-2 flex gap-3">
          <Dropdown
            selectedMethod={selectedMethod}
            setSelectedMethod={setSelectedMethod}
            methods={methods}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            setMethodBoxBackgroundColor={setMethodBoxBackgroundColor}
            setMethodBoxTextColor={setMethodBoxTextColor}
          />
          <input
            type="text"
            value={URL}
            onChange={(e) => setURL(e.target.value.trim())}
            autoComplete="off"
            placeholder="Enter URL..."
            className="border border-gray-300 shadow-sm pl-3 outline-[#2758fa] transition-all rounded-md grow"
          />
        </div>
      </div>
      {/* SHOW METHOD BUTTON */}
      <button
        className={`show-method border rounded-md w-44 mt-2 py-1 font-semibold`}
        style={{
          backgroundColor: methodBoxBackgroundColor,
          color: methodBoxTextColor,
          borderColor: methodBoxTextColor,
        }}
      >
        {selectedMethod}
      </button>
      {/* REQUEST BODY HERE */}
      {selectedMethod!="GET" && <RequestBody/>}
      {/* SEND REQUEST BUTTON */}
      <button
        onClick={() => getMethod(URL, setResData)}
        className={`${URL == "" && "opacity-60"} ${
          URL != "" && "cursor-pointer opacity-85 hover:opacity-100"
        } transition-all flex justify-center font-semibold items-center gap-3 bg-gradient-to-br from-[#2758fa] to-[#4c3ff7] text-white rounded-md mt-10 py-2 px-3`}
      >
        <Send className="size-4" />
        <p>Send Request</p>
      </button>
    </section>
  );
};

export default RequestBox;
